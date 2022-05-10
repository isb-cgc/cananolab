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
import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.common.Keyword;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.exception.FileException;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.restful.util.GCPStorageUtil;
import gov.nih.nci.cananolab.restful.util.PropertyUtil;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.system.applicationservice.CaNanoLabApplicationService;
import gov.nih.nci.cananolab.util.Constants;
import gov.nih.nci.cananolab.system.applicationservice.client.ApplicationServiceProvider;
import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.FetchMode;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Property;

public abstract class BaseServiceLocalImpl implements BaseService
{
//	protected Logger logger = LogManager.getLogger(BaseServiceLocalImpl.class);
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

			try {
				String bucketPath = GCPStorageUtil.getGCPStorageBucketPath();
				String folderPath = GCPStorageUtil.getGCPStorageRootFolderPath();
				String blobFullPath = bucketPath + "/" + folderPath + "/" + file.getUri();
				System.out.println("GCPStorage try to getFileContent() file path: " + blobFullPath);

				Storage storage = GCPStorageUtil.getGCPStorageService();
				Bucket assetBucket = storage.get(bucketPath);
				Blob blob = assetBucket.get(folderPath + "/" + file.getUri());

				if (blob.exists()) {
					return blob.getContent();
				}

				return null;
			} catch (Exception e) {
				System.out.println("GCPStorage get file content ERROR: " + e.toString());
				throw new FileException("Cannot get file content");
			}
		}

		private void writeFile(byte[] fileContent, String filePath) throws FileException {
			// Upload to GCP storage bucket as blob file
			try {
				if (fileContent.length == 0) {
					throw new FileException("File content is empty");
				}

				String bucketPath = GCPStorageUtil.getGCPStorageBucketPath();
				String folderPath = GCPStorageUtil.getGCPStorageRootFolderPath();
				String blobFullPath = bucketPath + "/" + folderPath + "/" + filePath;
				System.out.println("GCPStorage try to write blob path: " + blobFullPath);

				Storage storage = GCPStorageUtil.getGCPStorageService();
				BlobId blobId = BlobId.of(bucketPath, folderPath + "/" + filePath);
				System.out.println("GCPStorage write file - got blob");

				BlobInfo blobinfo = BlobInfo.newBuilder(blobId).build();
				System.out.println("GCPStorage write file - success build blob");
				
				storage.create(blobinfo, fileContent);
				System.out.println("GCPStorage write file - success create storage for blob");

			} catch (Exception e) {
				System.out.println("GCPStorage write file ERROR " + e.toString());
				throw new FileException("Target upload file doesn't exist");
			}
		}

		// save to the file system if fileData is not empty
		public void writeFile(FileBean fileBean) throws Exception {
			 if (fileBean.getNewFileData() != null) {
				 writeFile(fileBean.getNewFileData(), fileBean.getDomainFile().getUri());
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
//					logger.error(err);
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