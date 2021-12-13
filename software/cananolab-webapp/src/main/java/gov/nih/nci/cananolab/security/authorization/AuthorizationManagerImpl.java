/*L
 *  Copyright Ekagra Software Technologies Ltd.
 *  Copyright SAIC, SAIC-Frederick
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/common-security-module/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.security.authorization;

/**
 *
 *<!-- LICENSE_TEXT_START -->
 *
 *The NCICB Common Security Module (CSM) Software License, Version 3.0 Copyright
 *2004-2005 Ekagra Software Technologies Limited ('Ekagra')
 *
 *Copyright Notice.  The software subject to this notice and license includes both
 *human readable source code form and machine readable, binary, object code form
 *(the 'CSM Software').  The CSM Software was developed in conjunction with the
 *National Cancer Institute ('NCI') by NCI employees and employees of Ekagra.  To
 *the extent government employees are authors, any rights in such works shall be
 *subject to Title 17 of the United States Code, section 105.
 *
 *This CSM Software License (the 'License') is between NCI and You.  'You (or
 *'Your') shall mean a person or an entity, and all other entities that control,
 *are controlled by, or are under common control with the entity.  'Control' for
 *purposes of this definition means (i) the direct or indirect power to cause the
 *direction or management of such entity, whether by contract or otherwise, or
 *(ii) ownership of fifty percent (50%) or more of the outstanding shares, or
 *(iii) beneficial ownership of such entity.
 *
 *This License is granted provided that You agree to the conditions described
 *below.  NCI grants You a non-exclusive, worldwide, perpetual, fully-paid-up,
 *no-charge, irrevocable, transferable and royalty-free right and license in its
 *rights in the CSM Software to (i) use, install, access, operate, execute, copy,
 *modify, translate, market, publicly display, publicly perform, and prepare
 *derivative works of the CSM Software; (ii) distribute and have distributed to
 *and by third parties the CSM Software and any modifications and derivative works
 *thereof; and (iii) sublicense the foregoing rights set out in (i) and (ii) to
 *third parties, including the right to license such rights to further third
 *parties.  For sake of clarity, and not by way of limitation, NCI shall have no
 *right of accounting or right of payment from You or Your sublicensees for the
 *rights granted under this License.  This License is granted at no charge to You.
 *
 *1.	Your redistributions of the source code for the Software must retain the
 *above copyright notice, this list of conditions and the disclaimer and
 *limitation of liability of Article 6 below.  Your redistributions in object code
 *form must reproduce the above copyright notice, this list of conditions and the
 *disclaimer of Article 6 in the documentation and/or other materials provided
 *with the distribution, if any.
 *2.	Your end-user documentation included with the redistribution, if any, must
 *include the following acknowledgment: 'This product includes software developed
 *by Ekagra and the National Cancer Institute.'  If You do not include such
 *end-user documentation, You shall include this acknowledgment in the Software
 *itself, wherever such third-party acknowledgments normally appear.
 *
 *3.	You may not use the names 'The National Cancer Institute', 'NCI' 'Ekagra
 *Software Technologies Limited' and 'Ekagra' to endorse or promote products
 *derived from this Software.  This License does not authorize You to use any
 *trademarks, service marks, trade names, logos or product names of either NCI or
 *Ekagra, except as required to comply with the terms of this License.
 *
 *4.	For sake of clarity, and not by way of limitation, You may incorporate this
 *Software into Your proprietary programs and into any third party proprietary
 *programs.  However, if You incorporate the Software into third party proprietary
 *programs, You agree that You are solely responsible for obtaining any permission
 *from such third parties required to incorporate the Software into such third
 *party proprietary programs and for informing Your sublicensees, including
 *without limitation Your end-users, of their obligation to secure any required
 *permissions from such third parties before incorporating the Software into such
 *third party proprietary software programs.  In the event that You fail to obtain
 *such permissions, You agree to indemnify NCI for any claims against NCI by such
 *third parties, except to the extent prohibited by law, resulting from Your
 *failure to obtain such permissions.
 *
 *5.	For sake of clarity, and not by way of limitation, You may add Your own
 *copyright statement to Your modifications and to the derivative works, and You
 *may provide additional or different license terms and conditions in Your
 *sublicenses of modifications of the Software, or any derivative works of the
 *Software as a whole, provided Your use, reproduction, and distribution of the
 *Work otherwise complies with the conditions stated in this License.
 *
 *6.	THIS SOFTWARE IS PROVIDED 'AS IS,' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 *(INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY,
 *NON-INFRINGEMENT AND FITNESS FOR A PARTICULAR PURPOSE) ARE DISCLAIMED.  IN NO
 *EVENT SHALL THE NATIONAL CANCER INSTITUTE, EKAGRA, OR THEIR AFFILIATES BE LIABLE
 *FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 *DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 *SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 *CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
 *TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 *THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 *<!-- LICENSE_TEXT_END -->
 *
 */
//
//import gov.nih.nci.logging.api.user.UserInfoHelper;
//import gov.nih.nci.security.UserProvisioningManager;
//import gov.nih.nci.security.authorization.domainobjects.Application;
//import gov.nih.nci.security.authorization.domainobjects.ApplicationContext;
//import gov.nih.nci.security.authorization.domainobjects.FilterClause;
//import gov.nih.nci.security.authorization.domainobjects.Group;
//import gov.nih.nci.security.authorization.domainobjects.InstanceLevelMappingElement;
//import gov.nih.nci.security.authorization.domainobjects.Privilege;
//import gov.nih.nci.security.authorization.domainobjects.ProtectionElement;
//import gov.nih.nci.security.authorization.domainobjects.ProtectionGroup;
//import gov.nih.nci.security.authorization.domainobjects.Role;
//import gov.nih.nci.security.authorization.domainobjects.User;
//import gov.nih.nci.security.authorization.jaas.AccessPermission;
//import gov.nih.nci.security.constants.Constants;
//import gov.nih.nci.security.dao.AuthorizationDAO;
//import gov.nih.nci.security.dao.AuthorizationDAOImpl;
//import gov.nih.nci.security.dao.ProtectionElementSearchCriteria;
//import gov.nih.nci.security.dao.ProtectionGroupSearchCriteria;
//import gov.nih.nci.security.dao.SearchCriteria;
//import gov.nih.nci.security.exceptions. Exception;
//import gov.nih.nci.security.exceptions. Exception;
//import gov.nih.nci.security.exceptions. Exception;
//import gov.nih.nci.security.exceptions. Exception;
//import gov.nih.nci.security.exceptions. Exception;
//import gov.nih.nci.security.system.ApplicationSessionFactory;
//import gov.nih.nci.security.util.ConfigurationHelper;
//import gov.nih.nci.security.util.StringEncrypter;
//import gov.nih.nci.security.util.StringUtilities;
//import gov.nih.nci.security.util.StringEncrypter.EncryptionException;

import gov.nih.nci.cananolab.security.ApplicationSessionFactory;
import gov.nih.nci.cananolab.security.UserProvisioningManager;
import gov.nih.nci.cananolab.security.authorization.jaas.AccessPermission;
import gov.nih.nci.cananolab.security.dao.AuthorizationDAO;
import gov.nih.nci.cananolab.security.dao.AuthorizationDAOImpl;
import gov.nih.nci.cananolab.security.dao.SearchCriteria;
import gov.nih.nci.cananolab.security.utils.StringEncrypter;
import gov.nih.nci.cananolab.security.utils.StringUtilities;
import java.net.URL;
import java.security.Principal;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Set;

import javax.security.auth.Subject;
import javax.security.auth.login.LoginException;

import net.sf.ehcache.config.ConfigurationHelper;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.apache.lucene.queries.FilterClause;
import org.hibernate.SessionFactory;


/**
 * This class is an implementation of UserProvisioningManager. All the methods
 * from UserProvisioingManager are implemented here.
 * @version 1.0
 * @author modik
 */
public class AuthorizationManagerImpl implements UserProvisioningManager {


	/**
	 * authorizationDAO is an instance of AuthorizationDAO , which is used for
	 * peristence.
	 */
	private AuthorizationDAO authorizationDAO;

	static final Logger log = LogManager.getLogger(AuthorizationManagerImpl.class.getName());
	
	/**
	 * The application context object for the given application
	 * peristence.
	 */
	private ApplicationContext applicationContext;

	/**
	 * Is Encryption enabled for the givent application
	 * peristence.
	 */
	private boolean isEncryptionEnabled;


	/**
	 * Constructor for UserProvisioningManagerImpl.
	 * @param applicationContextName String
	 * @throws  Exception
	 */
	public AuthorizationManagerImpl(String applicationContextName) throws  Exception{
		/**
		 *  Ultimately we have to use ApplicationSessionFactory class
		 *  to get appropriate sessionFcatory for a application.
		 */
		//SessionFactory sf = AuthorizationDAOSessionFactory.getHibernateSessionFactory(applicationContextName);
		SessionFactory sf = ApplicationSessionFactory.getSessionFactory(applicationContextName);
//		ConfigurationHelper.getInstance(applicationContextName);
		AuthorizationDAOImpl adi = new AuthorizationDAOImpl(sf,applicationContextName);
		authorizationDAO = (AuthorizationDAO)(adi);
		try
		{
			this.applicationContext = (ApplicationContext)authorizationDAO.getApplication(applicationContextName);
		}
		catch ( Exception e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public AuthorizationManagerImpl(String applicationContextName, HashMap connectionProperties) throws  Exception{
		/**
		 *  Ultimately we have to use ApplicationSessionFactory class
		 *  to get appropriate sessionFcatory for a application.
		 */
		SessionFactory sf = ApplicationSessionFactory.getSessionFactory(applicationContextName, connectionProperties);
//		ConfigurationHelper.getInstance(applicationContextName);
		AuthorizationDAOImpl adi = new AuthorizationDAOImpl(sf,applicationContextName);
		authorizationDAO = (AuthorizationDAO)(adi);
		try
		{
			this.applicationContext = (ApplicationContext)authorizationDAO.getApplication(applicationContextName);
		}
		catch ( Exception e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public AuthorizationManagerImpl(String applicationContextName, URL url) throws  Exception
	{
		SessionFactory sf = ApplicationSessionFactory.getSessionFactory(applicationContextName, url);
//		ConfigurationHelper.getInstance(applicationContextName);
		AuthorizationDAOImpl adi = new AuthorizationDAOImpl(sf,applicationContextName);
		authorizationDAO = (AuthorizationDAO)(adi);
		try
		{
			this.applicationContext = (ApplicationContext)authorizationDAO.getApplication(applicationContextName);
		}
		catch ( Exception e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}


	/**
	 * Constructor for UserProvisioningManagerImpl.
	 * @param applicationContextName String
	 * @param userOrGroupName
	 * @param isUserName
	 * @throws  Exception
	 */
	public AuthorizationManagerImpl(String applicationContextName, String userOrGroupName, boolean isUserName) throws  Exception{
		/**
		 *  Ultimately we have to use ApplicationSessionFactory class
		 *  to get appropriate sessionFcatory for a application.
		 */
		//SessionFactory sf = AuthorizationDAOSessionFactory.getHibernateSessionFactory(applicationContextName);
		SessionFactory sf = ApplicationSessionFactory.getSessionFactory(applicationContextName);
		AuthorizationDAOImpl adi = new AuthorizationDAOImpl(sf,applicationContextName, userOrGroupName, isUserName);
		authorizationDAO = (AuthorizationDAO)(adi);
		try
		{
			this.applicationContext = (ApplicationContext)authorizationDAO.getApplication(applicationContextName);
		}
		catch ( Exception e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public AuthorizationManagerImpl(String applicationContextName, String userOrGroupName, boolean isUserName, URL url) throws  Exception{
		/**
		 *  Ultimately we have to use ApplicationSessionFactory class
		 *  to get appropriate sessionFcatory for a application.
		 */
		//SessionFactory sf = AuthorizationDAOSessionFactory.getHibernateSessionFactory(applicationContextName);
		SessionFactory sf = ApplicationSessionFactory.getSessionFactory(applicationContextName, url);
//		ConfigurationHelper.getInstance(applicationContextName);
		AuthorizationDAOImpl adi = new AuthorizationDAOImpl(sf,applicationContextName, userOrGroupName, isUserName);
		authorizationDAO = (AuthorizationDAO)(adi);
		try
		{
			this.applicationContext = (ApplicationContext)authorizationDAO.getApplication(applicationContextName);
		}
		catch ( Exception e)
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}



	/**
	 * Method finalize.
	 * @throws Throwable
	 */
	public void finalize() throws Throwable {

	}

	/**
	 * @param protectionGroup
	 *
	 * @throws  Exception

	 */
	public void createProtectionGroup(ProtectionGroup protectionGroup) throws  Exception{
		protectionGroup.setApplication(authorizationDAO.getApplication());
		protectionGroup.setUpdateDate(new Date());
		authorizationDAO.createObject(protectionGroup);

		//authorizationDAO.createProtectionGroup(protectionGroup);

	}

	public boolean checkPermissionForProvisioningOperation(String operationName, String privilegeName, String userId, String applicationContext)
	throws  Exception
	{
		String uptPeOjectId=privilegeName +"_"+ operationName;
		return authorizationDAO.checkPermissionForUserProvisioningOperation(uptPeOjectId,  userId, applicationContext);
	}

	/**
	 * @param loginName
	 *
	 * @return User

	 */
	public User getUser(String loginName){
		return authorizationDAO.getUser(loginName);
	}

	/**
	 *
	 * @return Users

	 */
	public List<User> getUsers(){
		return authorizationDAO.getUsers();
	}
	
	/**
	 * @param authorizationDAO
	 *
	 */
	public void setAuthorizationDAO(AuthorizationDAO authorizationDAO){
		this.authorizationDAO = authorizationDAO;
	}


	/**
	 * @param protectionGroup
	 *
	 * @throws  Exception

	 */
	public void modifyProtectionGroup(ProtectionGroup protectionGroup)throws  Exception{

		protectionGroup.setUpdateDate(new Date());
		authorizationDAO.modifyObject(protectionGroup);


	}

	/**
	 * @param protectionGroupName
	 * @param protectionElementObjectId String
	 * @param protectionElementAttributeName
	 *
	 * @throws  Exception
	 *
	 */
	public void assignProtectionElement(String protectionGroupName, String protectionElementObjectId, String protectionElementAttributeName) throws  Exception{

		authorizationDAO.assignProtectionElement(protectionGroupName,protectionElementObjectId);
	}
	/**
	 * @param protectionGroupId String
	 * @throws  Exception

	 */
	public void removeProtectionGroup(String protectionGroupId) throws  Exception{
		ProtectionGroup protectionGroup;
		try
		{
			protectionGroup = this.getProtectionGroupById(protectionGroupId);
		}
		catch ( Exception e)
		{
			protectionGroup = new ProtectionGroup();
			protectionGroup.setProtectionGroupId(new Long(protectionGroupId));
			protectionGroup.setProtectionGroupName("XX");
			protectionGroup.setProtectionGroupDescription("XX");
			protectionGroup.setUpdateDate(new Date());
		}
		authorizationDAO.removeObject(protectionGroup);

    }

	/**
	 * @param protectionElementId String
	 * @throws  Exception

	 */
	public void removeProtectionElement(String  protectionElementId) throws  Exception{
		ProtectionElement protectionElement;
		try
		{
			protectionElement = this.getProtectionElementById(protectionElementId);
		}
		catch ( Exception e)
		{
			protectionElement = new ProtectionElement();
			protectionElement.setProtectionElementId(new Long(protectionElementId));
			protectionElement.setProtectionElementName("XX");
			protectionElement.setProtectionElementDescription("XX");
			protectionElement.setUpdateDate(new Date());
		}

		authorizationDAO.removeObject(protectionElement);
	}

	/**
	 * @param protectionElementObjectId String
	 * @param userNames String[]
	 * @throws  Exception

	 */
	public void setOwnerForProtectionElement(String protectionElementObjectId, String[] userNames)throws  Exception{

		authorizationDAO.setOwnerForProtectionElement(protectionElementObjectId,userNames);
	}

	/**
	 * @param userId
	 * @param rolesId
	 * @param protectionGroupId
	 *
	 * @throws  Exception

	 */
	public void addUserRoleToProtectionGroup(String userId, String[] rolesId, String protectionGroupId)throws  Exception{

		authorizationDAO.addUserRoleToProtectionGroup(userId,rolesId,protectionGroupId);
	}

	/**
	 * @param userId
	 * @param rolesId
	 * @param protectionGroupId
	 *
	 * @throws  Exception

	 */
	public void assignUserRoleToProtectionGroup(String userId, String[] rolesId, String protectionGroupId)throws  Exception{

		authorizationDAO.assignUserRoleToProtectionGroup(userId,rolesId,protectionGroupId);
	}

	/**
	 * @param protectionGroupName
	 * @param protectionElementObjectId
	 *
	 * @throws  Exception

	 */
	public void deAssignProtectionElements(String protectionGroupName,String protectionElementObjectId)throws  Exception{
		authorizationDAO.deAssignProtectionElements(protectionGroupName,protectionElementObjectId);
	}


	/**
	 * @param protectionGroupId
	 * @param protectionElementIds
	 *
	 * @throws  Exception
	 *
	 */
	public void removeProtectionElementsFromProtectionGroup(String protectionGroupId, String[] protectionElementIds) throws  Exception {
		authorizationDAO.removeProtectionElementsFromProtectionGroup(protectionGroupId, protectionElementIds);
	}




	/**
	 * @param protectionElement
	 *
	 * @throws  Exception

	 */
	public void createProtectionElement(ProtectionElement protectionElement)throws  Exception{
		if(protectionElement==null){
			throw new  Exception("protection element could not be created as it is null");
		}
		protectionElement.setApplication(authorizationDAO.getApplication());
		protectionElement.setUpdateDate(new Date());
		authorizationDAO.createObject(protectionElement);

		//authorizationDAO.createProtectionElement(protectionElement);
	}

	/**
	 * @param protectionGroupId String
	 * @param userId String
	 * @param rolesId String[]
	 * @throws  Exception

	 */
	public void removeUserRoleFromProtectionGroup(String protectionGroupId, String userId, String[] rolesId)throws  Exception{
		authorizationDAO.removeUserRoleFromProtectionGroup(protectionGroupId,userId,rolesId);
	}



	/**
	 * @param role
	 *
	 * @throws  Exception

	 */
	public void createRole(Role role)throws  Exception{
		role.setApplication(authorizationDAO.getApplication());
		role.setUpdateDate(new Date());
		authorizationDAO.createObject(role);

		//authorizationDAO.createRole(role);

	}

	/**
	 * @param permission
	 * @param subject
	 *
	 * @return boolean
	 * @throws  Exception

	 */
	public boolean checkPermission(AccessPermission permission, Subject subject) throws  Exception{
	   return authorizationDAO.checkPermission(permission,subject);
	}

	/**
	 * @param role
	 *
	 * @throws  Exception

	 */
	public void modifyRole(Role role) throws  Exception{
		role.setUpdateDate(new Date());
		authorizationDAO.modifyObject(role);
	}

	/**
	 * @param permission
	 * @param userName
	 *
	 * @return boolean

	 */
	public boolean checkPermission(AccessPermission permission, String userName) throws  Exception{
		return authorizationDAO.checkPermission(permission,userName);
	}

	/**
	 * @param applicationContextName
	 *

	 */
	public void initialize(String applicationContextName){

	}


	public void initialize(String applicationContextName, URL url)
	{
		// TODO Auto-generated method stub

	}



	/**
	 * @param roleId
	 *
	 * @throws  Exception

	 */
	public void removeRole(String roleId) throws  Exception{
		Role r;
		try
		{
			r = this.getRoleById(roleId);
		}
		catch ( Exception e){

		r = new Role();
		r.setId(new Long(roleId));
		r.setName("XX");
		r.setDesc("XX");
		r.setUpdateDate(new Date());
		}
		authorizationDAO.removeObject(r);

	}


	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthorizationManager#checkPermission(java.lang.String, java.lang.String, java.lang.String, java.lang.String)
	 */
	public boolean checkPermission(String userName, String objectId, String attributeName, String privilegeName)throws  Exception{
		return authorizationDAO.checkPermission(userName,objectId,attributeName,privilegeName) ;
	}


	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthorizationManager#checkPermission(java.lang.String, java.lang.String, java.lang.String, java.lang.String, java.lang.String)
	 */
	public boolean checkPermission(String userName, String objectId, String attributeName, String attributeValue,  String privilegeName)throws  Exception{
		return authorizationDAO.checkPermission(userName,objectId,attributeName,attributeValue,privilegeName) ;
	}


	/**
	 * @param privilege
	 *
	 * @throws  Exception

	 */
	public void createPrivilege(Privilege privilege) throws  Exception{
//		privilege.setUpdateDate(new Date());
		authorizationDAO.createObject(privilege);
		//authorizationDAO.createPrivilege(privilege);
	}

	/**
	 * @param userName
	 * @param objectId
	 * @param privilegeName
	 *
	 * @return boolean
	 * @throws  Exception

	 */
	public boolean checkPermission(String userName, String objectId, String privilegeName) throws  Exception{
		return authorizationDAO.checkPermission(userName,objectId,privilegeName);
	}



	public boolean checkPermissionForGroup(String groupName, String objectId, String attributeName, String privilegeName) throws  Exception
	{
		return authorizationDAO.checkPermissionForGroup(groupName,objectId,attributeName,privilegeName) ;
	}

	public boolean checkPermissionForGroup(String groupName, String objectId, String attributeName, String attributeValue, String privilegeName) throws  Exception
	{
		return authorizationDAO.checkPermissionForGroup(groupName,objectId,attributeName,attributeValue,privilegeName) ;
	}
	public boolean checkPermissionForGroup(String groupName, String objectId, String privilegeName) throws  Exception
	{
		return authorizationDAO.checkPermissionForGroup(groupName,objectId,privilegeName) ;
	}


	public List getAccessibleGroups(String objectId, String privilegeName) throws  Exception
	{
		return authorizationDAO.getAccessibleGroups(objectId, privilegeName) ;
	}

	public List getAccessibleGroups(String objectId, String attributeName, String privilegeName) throws  Exception
	{
		return authorizationDAO.getAccessibleGroups(objectId, attributeName, privilegeName) ;
	}

	/**
	 * @param privilege
	 *
	 * @throws  Exception

	 */
	public void modifyPrivilege(Privilege privilege) throws  Exception{
//		privilege.setUpdateDate(new Date());
		authorizationDAO.modifyObject(privilege);
	}


	/**
	 * @param privilegeId
	 *
	 * @throws  Exception

	 */
	public void removePrivilege(String privilegeId) throws  Exception{
		Privilege p;
		try
		{
			p = this.getPrivilegeById(privilegeId);
		}
		catch ( Exception e){
//		p = new Privilege();
//		p.setId(new Long(privilegeId));
//		p.setDesc("XX");
//		p.setName("XX");
//		p.setUpdateDate(new Date());
		}
//		authorizationDAO.removeObject(p);

	}

	/**
	 * @param roleId
	 * @param privilegeIds
	 *
	 * @throws  Exception

	 */
	public void addPrivilegesToRole(String roleId,String[] privilegeIds)throws  Exception{
		authorizationDAO.addPrivilegesToRole(roleId,privilegeIds);
	}

	/**
	 * @param roleId
	 * @param privilegeIds
	 *
	 * @throws  Exception

	 */
	public void assignPrivilegesToRole(String roleId,String[] privilegeIds)throws  Exception{
		authorizationDAO.assignPrivilegesToRole(roleId,privilegeIds);
	}


	/**
	 * Returns the protection element for the passed object id
	 * @param objectId
	 *
	 * @return ProtectionElement
	 * @throws  Exception

	 */
	public ProtectionElement getProtectionElement(String objectId) throws  Exception{
		return authorizationDAO.getProtectionElement(objectId);
	}

	/**
	 * Returns the protection element for the passed object id
	 * @param protectionElementId String
	 * @return ProtectionElement
	 * @throws  Exception

	 */
	public ProtectionElement getProtectionElementById(String protectionElementId) throws  Exception{
		return (ProtectionElement)authorizationDAO.getObjectByPrimaryKey(ProtectionElement.class,protectionElementId);
		//authorizationDAO.getProtectionElement(protectionElementId);
	}

	/**
	 * @param protectionGroupName
	 * @param protectionElementObjectId
	 *
	 * @throws  Exception
	 *
	 */
	public void assignProtectionElement(String protectionGroupName, String protectionElementObjectId)throws  Exception{
            authorizationDAO.assignProtectionElement(protectionGroupName,protectionElementObjectId);
	}

	/**
	 * @param group
	 *
	 * @throws  Exception

	 */
	public void createGroup(Group group)throws  Exception{
//		group.setApplication(authorizationDAO.getApplication());
//		group.setUpdateDate(new Date());
		authorizationDAO.createObject(group);
		//authorizationDAO.createGroup(group);
	}

	/**
	 * @param userName
	 * @param protectionElementObjectId String
	 * @param protectionElementAttributeName
	 *
	 * @throws  Exception

	 */
	public void setOwnerForProtectionElement(String userName, String protectionElementObjectId, String protectionElementAttributeName)throws  Exception{
		authorizationDAO.setOwnerForProtectionElement( userName, protectionElementObjectId, protectionElementAttributeName );
	}



	/**
	 * @param groupId
	 *
	 * @throws  Exception

	 */
	public void removeGroup(String groupId)throws  Exception{
		Group group;
		try
		{
			group = this.getGroupById(groupId);
		}
		catch ( Exception e){
		group = new Group();
		group.setId(new Long(groupId));
		group.setGroupName("XX");
		group.setGroupDesc("XX");
//		group.setUpdateDate(new Date());
		}
		authorizationDAO.removeObject(group);
	}

	/**
	 * @param group
	 *
	 * @throws  Exception

	 */
	public void modifyGroup(Group group)throws  Exception{
//		group.setUpdateDate(new Date());
		authorizationDAO.modifyObject(group);
	}

	/**
	 * @param userId
	 *
	 * @param groupIds String[]
	 * @throws  Exception

	 */
	public void assignGroupsToUser(String userId,String[] groupIds)throws  Exception{
        authorizationDAO.assignGroupsToUser(userId,groupIds);
	}

	/**
	 * @param userId
	 *
	 * @param groupIds String[]
	 * @throws  Exception

	 */
	public void addGroupsToUser(String userId,String[] groupIds)throws  Exception{
        authorizationDAO.addGroupsToUser(userId,groupIds);
	}

	/**

	 * @throws  Exception

	 */
	public void assignUsersToGroup(String groupId,String[] userIds)throws  Exception{
        authorizationDAO.assignUsersToGroup(groupId,userIds);
	}

	/**

	 * @throws  Exception

	 */
	public void addUsersToGroup(String groupId,String[] userIds)throws  Exception{
        authorizationDAO.addUsersToGroup(groupId,userIds);
	}

	/**
	 * @param groupId
	 * @param userId
	 *
	 * @throws  Exception

	 */
	public void removeUserFromGroup(String groupId, String userId)throws  Exception{
           authorizationDAO.removeUserFromGroup(groupId,userId);
	}

	/**
	 * @param protectionGroupId
	 * @param groupId
	 * @param rolesId
	 *
	 * @throws  Exception

	 */
	public void addGroupRoleToProtectionGroup(String protectionGroupId, String groupId, String rolesId[])throws  Exception{
		authorizationDAO.addGroupRoleToProtectionGroup( protectionGroupId, groupId, rolesId );
	}

	/**
	 * @param protectionGroupId
	 * @param groupId
	 * @param rolesId
	 *
	 * @throws  Exception

	 */
	public void assignGroupRoleToProtectionGroup(String protectionGroupId, String groupId, String rolesId[])throws  Exception{
		authorizationDAO.assignGroupRoleToProtectionGroup( protectionGroupId, groupId, rolesId );
	}

	/**
	 * Returns the privilege for the passed name privilege id
	 * @param privilegeId
	 *
	 * @return Privilege
	 * @throws  Exception

	 */
	public Privilege getPrivilegeById(String privilegeId)throws  Exception{
		return (Privilege)authorizationDAO.getObjectByPrimaryKey(Privilege.class,privilegeId);
	}

	/**
	 * This method removes the user from a protection group irrespective of all the
	 * roles
	 * @param protectionGroupId
	 * @param userId
	 *
	 * @throws  Exception

	 */
	public void removeUserFromProtectionGroup(String protectionGroupId, String userId) throws  Exception{
		authorizationDAO.removeUserFromProtectionGroup(protectionGroupId,userId);
	}

	/**
	 * @param protectionGroupId
	 * @param groupId
	 * @param roleId
	 *
	 * @throws  Exception

	 */
	public void removeGroupRoleFromProtectionGroup(String protectionGroupId, String groupId, String[] roleId) throws  Exception{
		authorizationDAO.removeGroupRoleFromProtectionGroup(protectionGroupId, groupId, roleId);
	}

	/**
	 * @param protectionGroupId
	 * @param groupId
	 *
	 * @throws  Exception

	 */
	public void removeGroupFromProtectionGroup(String protectionGroupId, String groupId) throws  Exception{
		authorizationDAO.removeGroupFromProtectionGroup(protectionGroupId,groupId);
	}

	/**
	 * @param protectionGroupId
	 *
	 * @return ProtectionGroup
	 * @throws  Exception

	 */
	public ProtectionGroup getProtectionGroupById(String protectionGroupId) throws  Exception{
		return (ProtectionGroup)authorizationDAO.getObjectByPrimaryKey(ProtectionGroup.class,protectionGroupId);
	}

	/**
	 * @param roleId
	 *
	 * @return Role
	 * @throws  Exception

	 */
	public Role getRoleById(String roleId) throws  Exception{
		return (Role)authorizationDAO.getObjectByPrimaryKey(Role.class,roleId);
	}

	/**
	 * @param roleId
	 *
	 * @return Set
	 * @throws  Exception

	 */
	public Set getPrivileges(String roleId) throws  Exception{
		return authorizationDAO.getPrivileges(roleId);
	}

	/**
	 * @param searchCriteria
	 *
	 * @return java.util.List

	 */
	public List getObjects(SearchCriteria searchCriteria){
		return authorizationDAO.getObjects(searchCriteria);
	}

	/**
	 * @param searchCriteria
	 *
	 * @return java.util.List

	 */
	public List getUsers(SearchCriteria searchCriteria){
		System.out.println("AuthorizationManager getUsers...");
		return authorizationDAO.getUsers(searchCriteria);
	}
	
	/**
	 * Method createUser.
	 * @param user User
	 * @throws  Exception

	 */
	public void createUser(User user) throws  Exception{
		try {
			authorizationDAO.validateUser(user);
		} catch (LoginException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch ( Exception e) {
			// TODO Auto-generated catch block
			throw new  Exception(e.getMessage());
		}
		user.setUpdateDate(new Date());
		authorizationDAO.createObject(user);
		//authorizationDAO.createUser(user);
	}
	/**
	 * Method assignProtectionElements.
	 * @param protectionGroupId String
	 * @param protectionElementIds String[]
	 * @throws  Exception

	 */
	public void assignProtectionElements(String protectionGroupId,String[] protectionElementIds) throws  Exception{
		authorizationDAO.assignProtectionElements(protectionGroupId,protectionElementIds);
	}



	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthorizationManager#addProtectionElements(java.lang.String, java.lang.String[])
	 */
	public void addProtectionElements(String protectionGroupId,String[] protectionElementIds) throws  Exception{
		authorizationDAO.addProtectionElements(protectionGroupId,protectionElementIds);
	}

	/**
	 * Method getProtectionGroupRoleContextForUser.
	 * @param userId String
	 * @return Set
	 * @throws  Exception

	 */
	public Set getProtectionGroupRoleContextForUser(String userId) throws  Exception{
		return authorizationDAO.getProtectionGroupRoleContextForUser(userId);
	}

	/**
	 * Method getProtectionGroupRoleContextForGroup.
	 * @param groupId String
	 * @return Set
	 * @throws  Exception

	 */
	public Set getProtectionGroupRoleContextForGroup(String groupId) throws  Exception{
		return authorizationDAO.getProtectionGroupRoleContextForGroup(groupId);
	}

	/* (non-Javadoc)
	 * @see gov.nih.nci.security.UserProvisioningManager#getProtectionElementPrivilegeContextForUser(java.lang.String)
	 */
	public Set getProtectionElementPrivilegeContextForUser(String userId) throws  Exception {
		return authorizationDAO.getProtectionElementPrivilegeContextForUser(userId);
	}

	/* (non-Javadoc)
	 * @see gov.nih.nci.security.UserProvisioningManager#getProtectionElementPrivilegeContextForGroup(java.lang.String)
	 */
	public Set getProtectionElementPrivilegeContextForGroup(String groupId) throws  Exception {
		return authorizationDAO.getProtectionElementPrivilegeContextForGroup(groupId);
	}

	/**
	 * Method getGroupById.
	 * @param groupId String
	 * @return Group
	 * @throws  Exception

	 */
	public Group getGroupById(String groupId) throws  Exception{
		return (Group)authorizationDAO.getObjectByPrimaryKey(Group.class,groupId);
	}

	/**
	 * Method modifyProtectionElement.
	 * @param protectionElement ProtectionElement
	 * @throws  Exception

	 */
	public void modifyProtectionElement(ProtectionElement protectionElement) throws  Exception{
		protectionElement.setUpdateDate(new Date());
		authorizationDAO.modifyObject(protectionElement);
	}

	/**
	 * Method getUserById.
	 * @param userId String
	 * @return User
	 * @throws  Exception

	 */
	public User getUserById(String userId) throws  Exception{
		return (User)authorizationDAO.getObjectByPrimaryKey(User.class,userId);
	}

	/**
	 * Method getUsers.
	 * @param groupId String
	 * @return Set
	 * @throws  Exception

	 */
	public Set getUsers(String groupId) throws  Exception{
		return authorizationDAO.getUsers(groupId);
	}



	/**
	 * Method modifyUser.
	 * @param user User
	 * @throws  Exception

	 */
	public void modifyUser(User user)throws  Exception,LoginException{
		
		User currUser = authorizationDAO.getUser(user.getLoginName());
		if(currUser.getPassword() == null || !currUser.getPassword().equalsIgnoreCase(user.getPassword()))
		{
			authorizationDAO.validateUser(user);
		}
		
		user.setUpdateDate(new Date());
		authorizationDAO.modifyObject(user);
		// update the password history here!!!
		if(currUser.getPassword()!=null && currUser.getPassword().length()>0)
		{
			if(!user.getPassword().equals(encryptPassword(currUser.getPassword(),"YES" )))
			{
			
				// insert into password history!!
				authorizationDAO.insertIntoPasswordHistory(currUser.getLoginName(), currUser.getPassword());
			
			}
		}
	}
	
	private static String encryptPassword(String encryptedPassword,
			String encryptionEnabled) {
		if (!StringUtilities.isBlank(encryptionEnabled) && encryptionEnabled.equalsIgnoreCase("YES")){
			try {
				encryptedPassword = StringEncrypter.instance.encrypt(new String(encryptedPassword));
			} catch (Exception e) {
				e.printStackTrace();
			}
		}
		return encryptedPassword;
	}
	
	/**
	 * Method removeUser.
	 * @param userId String
	 * @throws  Exception

	 */
	public void removeUser(String userId)throws  Exception{
		try{
		User user = this.getUserById(userId);
		 authorizationDAO.removeObject(user);
		}catch( Exception ex){
			throw new  Exception("Failed to find this user with userId:"+userId,ex);
		}

	}

	/**
	 * Method getGroups.
	 * @param userId String
	 * @return Set
	 * @throws  Exception

	 */
	public Set getGroups(String userId) throws  Exception{
		return authorizationDAO.getGroups(userId);
	}

	/**
	 * Method getProtectionElements.
	 * @param protectionGroupId String
	 * @return Set
	 * @throws  Exception

	 */
	public Set getProtectionElements(String protectionGroupId) throws  Exception{
		return authorizationDAO.getProtectionElements(protectionGroupId);
	}

	/**
	 * Method getProtectionGroups.
	 * @param protectionElementId String
	 * @return Set
	 * @throws  Exception

	 */
	public Set getProtectionGroups(String protectionElementId) throws  Exception{
		return authorizationDAO.getProtectionGroups(protectionElementId);
	}

	/**
	 * Method addToProtectionGroups.
	 * @param protectionElementId String
	 * @param protectionGroupIds String[]
	 * @throws  Exception

	 */
	public void addToProtectionGroups(String protectionElementId,String[] protectionGroupIds) throws  Exception{
		authorizationDAO.addToProtectionGroups(protectionElementId,protectionGroupIds);
	}
	/**
	 * Method assignToProtectionGroups.
	 * @param protectionElementId String
	 * @param protectionGroupIds String[]
	 * @throws  Exception

	 */
	public void assignToProtectionGroups(String protectionElementId,String[] protectionGroupIds) throws  Exception{
		authorizationDAO.assignToProtectionGroups(protectionElementId,protectionGroupIds);
	}

	/**
	 * Method assignParentProtectionGroup.
	 * @param parentProtectionGroupId String
	 * @param childProtectionGroupId String
	 * @throws  Exception

	 */
	public void assignParentProtectionGroup(String parentProtectionGroupId,String childProtectionGroupId) throws  Exception{
		authorizationDAO.assignParentProtectionGroup(parentProtectionGroupId,childProtectionGroupId);
	}
	/**
	 * Method createApplication.
	 * @param application Application
	 * @throws  Exception

	 */
	public void createApplication(Application application)throws  Exception{
		application.setUpdateDate(new Date());
		authorizationDAO.createObject(application);

	}
	/**
	 * Method modifyApplication.
	 * @param application Application
	 * @throws  Exception

	 */
	public void modifyApplication(Application application)throws  Exception{
		application.setUpdateDate(new Date());
		authorizationDAO.modifyObject(application);
	}
	/**
	 * Method removeApplication.
	 * @param applicationId String
	 * @throws  Exception

	 */
	public void removeApplication(String applicationId) throws  Exception{
	        Application app;
			try
			{
				app = this.getApplicationById(applicationId);
				authorizationDAO.removeObject(app);
			}
			catch ( Exception e)
			{
				throw new  Exception("Error in Removing the Application", e);
			}

	}
	/**
	 * Method getApplicationById.
	 * @param applicationId String
	 * @return Application
	 * @throws  Exception

	 */
	public Application getApplicationById(String applicationId) throws  Exception{
		return (Application)authorizationDAO.getObjectByPrimaryKey(Application.class,applicationId);
		//authorizationDAO.getProtectionElement(protectionElementId);
	}

	/**
	 * Method addOwners.
	 * @param protectionElementId String
	 * @param userIds String[]
	 * @throws  Exception

	 */
	public void addOwners(String protectionElementId,String[] userIds) throws  Exception{
		authorizationDAO.addOwners(protectionElementId,userIds);
	}

	/**
	 * Method assignOwners.
	 * @param protectionElementId String
	 * @param userIds String[]
	 * @throws  Exception

	 */
	public void assignOwners(String protectionElementId,String[] userIds) throws  Exception{
		authorizationDAO.assignOwners(protectionElementId,userIds);
	}

	/**
	 * Method getOwners.
	 * @param protectionElementId String
	 * @return Set
	 * @throws  Exception

	 */
	public Set getOwners(String protectionElementId) throws  Exception{
		return authorizationDAO.getOwners(protectionElementId);
	}

	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthorizationManager#getApplicationContext()
	 */
	public ApplicationContext getApplicationContext() {
		// TODO Auto-generated method stub
		return applicationContext;
	}

	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthorizationManager#getPrincipals(java.lang.String)
	 */
	public Principal[] getPrincipals(String userName) {
		// TODO Auto-generated method stub
		return authorizationDAO.getPrincipals(userName);
	}

	public List getProtectionGroups(){
		ProtectionGroup pg = new ProtectionGroup();
		pg.setProtectionGroupName("%");
//		SearchCriteria sc = new ProtectionGroupSearchCriteria(pg);
//		return this.getObjects(sc);
		return null;
	}

	public ProtectionElement getProtectionElement(String objectId,String attributeName){
		ProtectionElement result = null;
		ProtectionElement pe = new ProtectionElement();
		pe.setObjectId(objectId);
		pe.setAttribute(attributeName);
//		SearchCriteria sc = new ProtectionElementSearchCriteria(pe);
//		List list = this.getObjects(sc);
//		if(list.size()!=0){
//			result = (ProtectionElement)list.get(0);
//		}
		return result;
	}

	public Object secureObject(String userName, Object obj) throws  Exception{
		return authorizationDAO.secureObject(userName,obj);
	}

	public Collection secureCollection(String userName,Collection objects) throws  Exception{
		return authorizationDAO.secureCollection(userName,objects);
	}

	public Collection getPrivilegeMap(String userName,Collection protectionElements) throws  Exception{
		return authorizationDAO.getPrivilegeMap(userName,protectionElements);
	}

	public Object secureUpdate(String userName, Object originalObject,Object mutatedObject) throws  Exception{
		return authorizationDAO.secureUpdate(userName,originalObject,mutatedObject);
	}

	public boolean checkOwnership(String userName,
			String protectionElementObjectId){
		return authorizationDAO.checkOwnership(userName,protectionElementObjectId);
	}

	/* (non-Javadoc)
	 * @see gov.nih.nci.security.UserProvisioningManager#assignUserToGroup(java.lang.String, java.lang.String)
	 */
	public void assignUserToGroup(String userName, String groupName)
			throws  Exception {
		// TODO Auto-generated method stub
		authorizationDAO.assignUserToGroup( userName, groupName );
	}

	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthorizationManager#setAuditUserInfo(java.lang.String, java.lang.String)
	 */
	public void setAuditUserInfo(String userName, String sessionId)
	{
//		UserInfoHelper.setUserInfo(userName, sessionId);
	}

	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthorizationManager#setEncryptionEnabled(boolean)
	 */
	public void setEncryptionEnabled(boolean isEncryptionEnabled) {
		this.isEncryptionEnabled = isEncryptionEnabled;

	}

	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthorizationManager#getApplication(java.lang.String)
	 */
	public Application getApplication(String applicationContextName) throws  Exception
	{
		return authorizationDAO.getApplication(applicationContextName);
	}

	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthorizationManager#removeOwnerForProtectionElement(java.lang.String, java.lang.String[])
	 */
	public void removeOwnerForProtectionElement(String protectionElementObjectId, String[] userNames) throws  Exception
	{
		authorizationDAO.removeOwnerForProtectionElement(protectionElementObjectId,userNames);
	}

	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthorizationManager#removeOwnerForProtectionElement(java.lang.String, java.lang.String, java.lang.String)
	 */
	public void removeOwnerForProtectionElement(String userName, String protectionElementObjectId, String protectionElementAttributeName) throws  Exception
	{
		authorizationDAO.removeOwnerForProtectionElement( userName, protectionElementObjectId, protectionElementAttributeName );
	}

	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthorizationManager#getAttributeMap(java.lang.String, java.lang.String, java.lang.String)
	 */
	public List getAttributeMap(String userName, String className, String privilegeName)
	{
		return authorizationDAO.getAttributeMap(userName, className, privilegeName);
	}

	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthorizationManager#getAttributeMap(java.lang.String, java.lang.String, java.lang.String)
	 */
	public List getAttributeMapForGroup(String groupName, String className, String privilegeName)
	{
		return authorizationDAO.getAttributeMapForGroup(groupName, className, privilegeName);
	}

	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthorizationManager#createFilterClause(gov.nih.nci.security.authorization.domainobjects.FilterClause)
	 */
	public void createFilterClause(FilterClause filterClause) throws  Exception
	{
//		filterClause.setApplication(authorizationDAO.getApplication());
//		filterClause.setUpdateDate(new Date());
//		authorizationDAO.createObject(filterClause);
	}

	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthorizationManager#getFilterClauseById(java.lang.String)
	 */
	public FilterClause getFilterClauseById(String filterClauseId) throws  Exception
	{
		return (FilterClause)authorizationDAO.getObjectByPrimaryKey(FilterClause.class,filterClauseId);
	}

	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthorizationManager#modifyFilterClause(gov.nih.nci.security.authorization.domainobjects.FilterClause)
	 */
	public void modifyFilterClause(FilterClause filterClause) throws  Exception
	{
//		filterClause.setUpdateDate(new Date());
//		authorizationDAO.modifyObject(filterClause);
	}

	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthorizationManager#removeFilterClause(java.lang.String)
	 */
	public void removeFilterClause(String filterClauseId) throws  Exception
	{
		FilterClause filterClause;
		try
		{
			filterClause = this.getFilterClauseById(filterClauseId);
		}
		catch ( Exception e){
			throw new  Exception("Failed to find this Filter Clause with filterClauseId : "+ filterClauseId, e);		}
		authorizationDAO.removeObject(filterClause);
	}


	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthorizationManager#createInstanceLevelMappingElement(gov.nih.nci.security.authorization.domainobjects.InstanceLevelMappingElement)
	 */
	public void createInstanceLevelMappingElement(InstanceLevelMappingElement instanceLevelMappingElement) throws  Exception {
		instanceLevelMappingElement.setApplication(authorizationDAO.getApplication());
		instanceLevelMappingElement.setUpdateDate(new Date());
		authorizationDAO.createObject(instanceLevelMappingElement);

	}

	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthorizationManager#getInstanceLevelMappingElementById(java.lang.String)
	 */
	public InstanceLevelMappingElement getInstanceLevelMappingElementById(String instanceLevelMappingElementId) throws  Exception {
		return (InstanceLevelMappingElement)authorizationDAO.getObjectByPrimaryKey(InstanceLevelMappingElement.class,instanceLevelMappingElementId);
	}

	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthorizationManager#modifyInstanceLevelMappingElement(gov.nih.nci.security.authorization.domainobjects.InstanceLevelMappingElement)
	 */
	public void modifyInstanceLevelMappingElement(InstanceLevelMappingElement instanceLevelMappingElement) throws  Exception {
		instanceLevelMappingElement.setUpdateDate(new Date());
		authorizationDAO.modifyObject(instanceLevelMappingElement);

	}

	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthorizationManager#removeInstanceLevelMappingElement(java.lang.String)
	 */
	public void removeInstanceLevelMappingElement(String instanceLevelMappingElementId) throws  Exception {
		InstanceLevelMappingElement instanceLevelMappingElement;
		try{
			instanceLevelMappingElement= this.getInstanceLevelMappingElementById(instanceLevelMappingElementId);
		}catch ( Exception e){
			throw new  Exception("Failed to find this InstanceLevelMappingElement with Id : "+ instanceLevelMappingElementId, e);
		}
		authorizationDAO.removeObject(instanceLevelMappingElement);
	}


	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthorizationManager#refreshInstanceTables(boolean)
	 */
	public void refreshInstanceTables(boolean instanceLevelSecurityForUser) throws  Exception {

		authorizationDAO.refreshInstanceTables(instanceLevelSecurityForUser);
	}


	public void maintainInstanceTables(String instanceLevelMappingElementId) throws Exception {
		authorizationDAO.maintainInstanceTables(instanceLevelMappingElementId);

	}



}
