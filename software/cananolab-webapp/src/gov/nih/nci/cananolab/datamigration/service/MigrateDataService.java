package gov.nih.nci.cananolab.datamigration.service;

import gov.nih.nci.cananolab.security.enums.SecureClassesEnum;

public interface MigrateDataService
{
	void migrateDefaultAccessDataFromCSMToSpring(SecureClassesEnum dataType);
	
	void migratePublicAccessDataFromCSMToSpring(SecureClassesEnum dataType);
	
	void migrateUserAccountsFromCSMToSpring() throws Exception;

	void grantCuratorRoleToAccounts();
	
	void migrateRWDUserAccessFromCSMToSpring(SecureClassesEnum dataType);
	
	void migrateReadUserAccessFromCSMToSpring(SecureClassesEnum dataType);
	
	void migrateCharacterizationAccessData();
	
	void migrateOrganizationAccessData();
	
	void bcryptPasswords();
	
}
