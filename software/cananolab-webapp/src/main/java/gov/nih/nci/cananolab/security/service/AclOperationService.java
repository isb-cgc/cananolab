package gov.nih.nci.cananolab.security.service;

import java.util.List;

import org.springframework.security.acls.model.MutableAcl;
import org.springframework.security.acls.model.Permission;

public interface AclOperationService
{
	MutableAcl fetchAclForObject(Class clazz, Long securedObjectId);
	boolean isOwner(Long securedObjectId, Class clazz, String sid);
	
	void createAclAndGrantAccess(Long securedObjectId, Class clazz, String recipient, boolean principal,
                                 List<Permission> perms, boolean setOwner);
	void createAclForChildObject(Long parentObjectId, Class parentClass, Long securedObjectId, Class childClass);
	
	void deleteAccessToSid(String sid, MutableAcl acl);
	void deletePermission(Long securedObjectId, Class clazz, String sid, boolean principal, Permission perm);
    void deleteAccessExceptPublicAndDefault(MutableAcl acl);
    
    void deleteAcl(Long securedObjectId, Class clazz);
    
    void updateObjectOwner(Long securedObjectId, Class clazz, String sid);
    
}
