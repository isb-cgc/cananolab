/*L
 *  Copyright Leidos
 *  Copyright Leidos Biomedical
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/cananolab/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.service;

import com.google.cloud.storage.*;
import com.google.cloud.storage.Blob;
import com.google.cloud.storage.Bucket;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;
import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.common.Keyword;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.exception.FileException;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.restful.util.PropertyUtil;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.system.applicationservice.CaNanoLabApplicationService;
import gov.nih.nci.cananolab.util.Constants;
import gov.nih.nci.cananolab.util.ExportUtils;
import gov.nih.nci.cananolab.util.PropertyUtils;
import gov.nih.nci.cananolab.system.applicationservice.client.ApplicationServiceProvider;
import java.io.BufferedOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.FetchMode;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Property;
import javax.servlet.http.HttpServletResponse;


public abstract class BaseServiceLocalImpl implements BaseService
{
	protected Logger logger = LogManager.getLogger(BaseServiceLocalImpl.class);
	protected FileUtils fileUtils = new FileUtils();
	
	public abstract SpringSecurityAclService getSpringSecurityAclService();

	public FileBean findFileById(String fileId) throws FileException, NoAccessException
	{
		FileBean fileBean = null;
		try {
			/*if (!getSpringSecurityAclService().currentUserHasReadPermission(Long.valueOf(fileId), SecureClassesEnum.FILE.getClazz())) {
				throw new NoAccessException("No access to the file");
			}*/
			File file = fileUtils.findFileById(fileId);
			fileBean = new FileBean(file);
		} catch (NoAccessException e) {
			throw e;
		} catch (Exception e) {
			String error = "Error finding the file by the given ID.";
			throw new FileException(error, e);
		}
		return fileBean;
	}

	protected class FileUtils {

		private FileUtils() {

		}

		/**
		 * Load the file for the given fileId from the database
		 *
		 * @param fileId
		 * @return
		 */
		public File findFileById(String fileId) throws Exception {
			CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();

			DetachedCriteria crit = DetachedCriteria.forClass(File.class).add(Property.forName("id").eq(new Long(fileId)));
			crit.setFetchMode("keywordCollection", FetchMode.JOIN);
			List result = appService.query(crit);
			File file = null;
			if (!result.isEmpty()) {
				file = (File) result.get(0);
			}
			return file;
		}

		/**
		 * Get the content of the file into a byte array.
		 *
		 * @param fileId
		 * @return
		 * @throws FileException
		 */
		public byte[] getFileContent(Long fileId) throws Exception {
			File file = findFileById(fileId.toString());
			if (file == null || file.getUri() == null) {
				return null;
			}
			// check if the file is external link
			if (file.getUri().startsWith("http")) {
				return null;
			}
			String fileRoot = PropertyUtils.getProperty(Constants.CANANOLAB_PROPERTY, "fileRepositoryDir");

			java.io.File fileObj = new java.io.File(fileRoot + java.io.File.separator + file.getUri());
			long fileLength = fileObj.length();

			// You cannot create an array using a long type.
			// It needs to be an int type.
			// Before converting to an int type, check
			// to ensure that file is not larger than Integer.MAX_VALUE.
			if (fileLength > Integer.MAX_VALUE) {
				logger.error("The file is too big. Byte array can't be longer than Java Integer MAX_VALUE");
				throw new FileException("The file is too big. Byte array can't be longer than Java Integer MAX_VALUE");
			}

			// Create the byte array to hold the data
			byte[] fileData = new byte[(int) fileLength];

			// Read in the bytes
			InputStream is = new FileInputStream(fileObj);
			int offset = 0;
			int numRead = 0;
			while (offset < fileData.length && (numRead = is.read(fileData, offset, fileData.length - offset)) >= 0) {
				offset += numRead;
			}

			// Ensure all the bytes have been read in
			if (offset < fileData.length) {
				throw new FileException("Could not completely read file " + fileObj.getName());
			}

			// Close the input stream and return bytes
			is.close();

			return fileData;
		}

		private void writeFile(byte[] fileContent, String fullFileName) throws IOException {
			String path = fullFileName.substring(0, fullFileName.lastIndexOf("/"));
			java.io.File pathDir = new java.io.File(path);
			if (!pathDir.exists())
				pathDir.mkdirs();
			java.io.File file = new java.io.File(fullFileName);
			if (file.exists()) {
				return; // don't save again
			}
			try (OutputStream oStream = new BufferedOutputStream(new FileOutputStream(file))) {
				oStream.write(fileContent);
				oStream.flush();
			}
			//TODO report error
		}

		private void writeGCPFile(byte[] fileContent, String filePath) throws FileException {
			// TODO: open GCP connection
			// Figure out blob path based on fileName
			// Upload
			try {
				Storage storage = StorageOptions.getDefaultInstance().getService();
				BlobId blobId = BlobId.of("isb-cgc-ca-nano-dev-cbiit-assets", "caNanoLab_from_Tracy/" + filePath);
				BlobInfo blobinfo = BlobInfo.newBuilder(blobId).build();
				Blob blob = storage.create(blobinfo, fileContent);
			} catch (Exception e) {
				String msg = PropertyUtil.getProperty("sample", "error.noFile");
				throw new FileException("Target uploadfile doesn't exist");
			}
		}

		// save to the file system if fileData is not empty
		public void writeFile(FileBean fileBean) throws Exception {
			 if (fileBean.getNewFileData() != null) {
//				String rootPath = PropertyUtils.getProperty(Constants.CANANOLAB_PROPERTY, "fileRepositoryDir");
//				String fullFileName = rootPath + "/" + fileBean.getDomainFile().getUri();
//				 writeFile(fileBean.getNewFileData(), fullFileName);

				 // TODO: change to GCP blob path
				writeGCPFile(fileBean.getNewFileData(), fileBean.getDomainFile().getUri());
			 }
		}

		public void testGCPBucket() throws Exception {
			try {
				Storage storage = StorageOptions.getDefaultInstance().getService();
				// List all your buckets
//            Bucket bucket = storage.create(BucketInfo.of("mi-bucket"));
//            System.out.print("Create bucket");
//            Bucket bucket = storage.create(BucketInfo.of("mi-test-java-api-bucket"));
				System.out.println("My buckets:");
				for (Bucket bucket : storage.list().iterateAll()) {
					System.out.println(bucket);

//                 List all blobs in the bucket
					System.out.println("Blobs in the bucket:");
					for (Blob blob : bucket.list().iterateAll()) {
						System.out.println(blob);
					}
				}
			}catch (Exception e) {

			}
		}

		/**
		 * Preparing keywords and other information prior to saving a file
		 *
		 * @param file
		 * @throws FileException
		 */
		public void prepareSaveFile(File file) throws Exception {
			CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
			if(file.getCreatedDate() == null)
			{
				file.setCreatedDate( new Date());
			}

			if (file.getId() != null) {
				File dbFile = (File) appService.get(File.class, file.getId());
				if (dbFile != null) {
					// use original createdBy if it is not COPY
					if (!dbFile.getCreatedBy().contains(Constants.AUTO_COPY_ANNOTATION_PREFIX)) {
						file.setCreatedBy(dbFile.getCreatedBy());
					}
					// use original createdDate
					file.setCreatedDate(dbFile.getCreatedDate());
				} else {
					String err = "Object doesn't exist in the database anymore.  Please log in again.";
					logger.error(err);
					throw new FileException(err);
				}
			}
			if (file.getKeywordCollection() != null) {
				Collection<Keyword> keywords = new HashSet<Keyword>(file.getKeywordCollection());
				file.getKeywordCollection().clear();
				for (Keyword keyword : keywords) {
					Keyword dbKeyword = (Keyword) appService.getObject(Keyword.class, "name", keyword.getName());
					if (dbKeyword != null) {
						keyword.setId(dbKeyword.getId());
					} else {
						keyword.setId(null);
						
						int dbNameLength = 100;
						if( keyword.getName().length() > dbNameLength ) {
							keyword.setName(keyword.getName().substring(0,99));
						}
					}
					appService.saveOrUpdate(keyword);
					file.getKeywordCollection().add(keyword);
				}
			}
		}

		// update cloned file with file content and new file path
		public void updateClonedFileInfo(FileBean copy, String origSampleName, String newSampleName) throws Exception
		{
			// copy file content obtain original id from created by
			int copyInd = copy.getDomainFile().getCreatedBy().indexOf(Constants.AUTO_COPY_ANNOTATION_PREFIX);
			String origId = null;
			if (copyInd != -1) {
				origId = copy.getDomainFile().getCreatedBy().substring(copyInd + 5);
			}
			if (origId != null) {
				byte[] content = this.getFileContent(new Long(origId));
				copy.setNewFileData(content);
			}
			// replace file URI with new sample name
			if (copy.getDomainFile().getUri() != null) {
				String newUri = copy.getDomainFile().getUri().replace(origSampleName, newSampleName);
				copy.getDomainFile().setUri(newUri);
			}
		}
	}
	
}