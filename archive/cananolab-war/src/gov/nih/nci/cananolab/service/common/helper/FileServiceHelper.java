package gov.nih.nci.cananolab.service.common.helper;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.common.UserBean;
import gov.nih.nci.cananolab.exception.CompositionException;
import gov.nih.nci.cananolab.exception.FileException;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.service.security.AuthorizationService;
import gov.nih.nci.cananolab.system.applicationservice.CustomizedApplicationService;
import gov.nih.nci.cananolab.util.Constants;
import gov.nih.nci.cananolab.util.PropertyUtils;
import gov.nih.nci.system.client.ApplicationServiceProvider;

import java.io.FileInputStream;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import org.apache.log4j.Logger;
import org.hibernate.FetchMode;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Property;

/**
 * Utility service for file retrieving and writing.
 * 
 * @author pansu, tanq
 * 
 */
public class FileServiceHelper {
	private Logger logger = Logger.getLogger(FileServiceHelper.class);
	private AuthorizationService authService;

	public FileServiceHelper() {
		try {
			authService = new AuthorizationService(Constants.CSM_APP_NAME);
		} catch (Exception e) {
			logger.error("Can't create authorization service: " + e);
		}
	}

	/**
	 * Load the file for the given fileId from the database
	 * 
	 * @param fileId
	 * @return
	 */
	public File findFileById(String fileId, UserBean user) throws Exception {
		CustomizedApplicationService appService = (CustomizedApplicationService) ApplicationServiceProvider
				.getApplicationService();

		DetachedCriteria crit = DetachedCriteria.forClass(File.class).add(
				Property.forName("id").eq(new Long(fileId)));
		crit.setFetchMode("keywordCollection", FetchMode.JOIN);
		List result = appService.query(crit);
		File file = null;
		if (!result.isEmpty()) {
			file = (File) result.get(0);
			if (authService.checkReadPermission(user, file.getId().toString())) {
				return file;
			} else {
				throw new NoAccessException();
			}
		}
		return file;
	}

	public AuthorizationService getAuthService() {
		return authService;
	}

	// retrieve file visibility
	public void retrieveVisibility(FileBean fileBean, UserBean user)
			throws Exception {
		if (fileBean != null) {
			AuthorizationService auth = new AuthorizationService(
					Constants.CSM_APP_NAME);
			// get assigned visible groups
			List<String> accessibleGroups = auth.getAccessibleGroups(fileBean
					.getDomainFile().getId().toString(),
					Constants.CSM_READ_PRIVILEGE);
			String[] visibilityGroups = accessibleGroups.toArray(new String[0]);
			fileBean.setVisibilityGroups(visibilityGroups);
		}
	}

	public void retrieveVisibilityAndContentForCopiedFile(FileBean copy,
			UserBean user) throws Exception {

		// the copied file has been persisted with the same URI but
		// createdBy is COPY
		File file = findFileByUri(copy.getDomainFile().getUri());
		List<String> accessibleGroups = authService.getAccessibleGroups(file
				.getId().toString(), Constants.CSM_READ_ROLE);
		if (accessibleGroups != null) {
			copy.setVisibilityGroups(accessibleGroups.toArray(new String[0]));
		}
		if (file != null) {
			byte[] content = this.getFileContent(file.getId(), user);
			copy.setNewFileData(content);
		}
	}

	private File findFileByUri(String uri) throws Exception {
		File file = null;
		CustomizedApplicationService appService = (CustomizedApplicationService) ApplicationServiceProvider
				.getApplicationService();

		DetachedCriteria crit = DetachedCriteria.forClass(File.class).add(
				Property.forName("uri").eq(uri)).add(
				Property.forName("createdBy").ne(
						Constants.AUTO_COPY_ANNOTATION_PREFIX));
		List results = appService.query(crit);
		if (!results.isEmpty()) {
			file = (File) results.get(0);
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
	private byte[] getFileContent(Long fileId, UserBean user) throws Exception {
		File file = findFileById(fileId.toString(), user);
		if (file == null || file.getUri() == null) {
			return null;
		}
		// check if the file is external link
		if (file.getUri().startsWith("http")) {
			return null;
		}
		String fileRoot = PropertyUtils.getProperty(
				Constants.CANANOLAB_PROPERTY, "fileRepositoryDir");

		java.io.File fileObj = new java.io.File(fileRoot
				+ java.io.File.separator + file.getUri());
		long fileLength = fileObj.length();

		// You cannot create an array using a long type.
		// It needs to be an int type.
		// Before converting to an int type, check
		// to ensure that file is not larger than Integer.MAX_VALUE.
		if (fileLength > Integer.MAX_VALUE) {
			logger
					.error("The file is too big. Byte array can't be longer than Java Integer MAX_VALUE");
			throw new FileException(
					"The file is too big. Byte array can't be longer than Java Integer MAX_VALUE");
		}

		// Create the byte array to hold the data
		byte[] fileData = new byte[(int) fileLength];

		// Read in the bytes
		InputStream is = new FileInputStream(fileObj);
		int offset = 0;
		int numRead = 0;
		while (offset < fileData.length
				&& (numRead = is.read(fileData, offset, fileData.length
						- offset)) >= 0) {
			offset += numRead;
		}

		// Ensure all the bytes have been read in
		if (offset < fileData.length) {
			throw new FileException("Could not completely read file "
					+ fileObj.getName());
		}

		// Close the input stream and return bytes
		is.close();

		return fileData;
	}

	/**
	 * Check if file is accessible first. If so, retrieve visibility for files.
	 * If no, remove the file from the list.
	 * 
	 * @param fileBeans
	 * @param user
	 * @throws CompositionException
	 */
	public void checkReadPermissionAndRetrieveVisibility(
			List<FileBean> fileBeans, UserBean user)
			throws CompositionException {
		try {
			List<FileBean> copiedFileBeans = new ArrayList<FileBean>(fileBeans);
			for (FileBean fileBean : copiedFileBeans) {
				// check whether user can access the file, if no remove from the
				// list
				if (authService.checkReadPermission(user, fileBean
						.getDomainFile().getId().toString())) {
					if (user != null)
						retrieveVisibility(fileBean, user);
				} else {
					fileBeans.remove(fileBean);
					logger.debug("User can't access file of id:"
							+ fileBean.getDomainFile().getId());
				}
			}
		} catch (Exception e) {
			String err = "Error setting visiblity for files ";
			logger.error(err, e);
			throw new CompositionException(err, e);
		}
	}
}