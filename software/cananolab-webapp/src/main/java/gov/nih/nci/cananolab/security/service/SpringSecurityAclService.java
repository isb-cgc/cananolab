package gov.nih.nci.cananolab.security.service;

import java.util.List;

import org.springframework.security.acls.model.Permission;

import gov.nih.nci.cananolab.dto.common.SecuredDataBean;
import gov.nih.nci.cananolab.security.AccessControlInfo;

public interface SpringSecurityAclService
{
	boolean checkObjectPublic(Long securedObjectId, Class clazz);

	boolean currentUserHasWritePermission(Long securedObjectId, Class clazz);

	boolean currentUserHasDeletePermission(Long securedObjectId, Class clazz);
	
	boolean currentUserHasReadPermission(Long securedObjectId, Class clazz);
	
	
	void retractObjectFromPublic(Long securedObjectId, Class clazz);

	void retractAccessToObjectForSid(Long securedObjectId, Class clazz, String sid);
	

	void saveDefaultAccessForNewObject(Long securedObjectId, Class clazz);
	
	void saveDefaultAccessForNewObjectWithOwner(Long securedObjectId, Class clazz, String owner,
                                                List<Permission> rwdPerms, List<Permission> readPerm);

	void savePublicAccessForObject(Long securedObjectId, Class clazz);

	void saveAccessForObject(Long securedObjectId, Class clazz, String recipient, boolean principal, String perms);
	
	void saveAccessForChildObject(Long parentObjectId, Class parentClass, Long securedObjectId, Class childClass);

	
	boolean isOwnerOfObject(Long securedObjectId, Class clazz);

	String getAccessString(Long securedObjectId, Class clazz);

	void loadAccessControlInfoForObject(Long securedObjectId, Class clazz, SecuredDataBean accessControlData);

	void deleteAllAccessExceptPublicAndDefault(Long securedObjectId, Class clazz);
	
	void updateObjectOwner(Long securedObjectId, Class clazz, String newOwner);
	
	void deleteAccessObject(Long securedObjectId, Class clazz);

	AccessControlInfo fetchAccessControlInfoForObjectForUser(Long securedObjectId, Class clazz, String recipient);

}
