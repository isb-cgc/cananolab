package gov.nih.nci.cananolab.datamigration.dao;

import java.util.AbstractMap;
import java.util.List;

import gov.nih.nci.cananolab.security.CananoUserDetails;
import gov.nih.nci.cananolab.security.enums.SecureClassesEnum;

public interface MigrateDataDAO
{
	List<CananoUserDetails> getUsersFromCSM();
	
	List<String> getCuratorUsersFromCSM();
	
	Long getDataSize(SecureClassesEnum dataType);
	
	Long getPublicDataSize(SecureClassesEnum dataType);
	
	List<AbstractMap.SimpleEntry<Long, String>> getDataPage(long rowMin, long rowMax, SecureClassesEnum dataType);
	
	List<AbstractMap.SimpleEntry<Long, String>> getPublicDataPage(long rowMin, long rowMax, SecureClassesEnum dataType);
	
	List<AbstractMap.SimpleEntry<Long, String>> getRWDAccessDataForUsers(SecureClassesEnum dataType);
	
	List<AbstractMap.SimpleEntry<Long, String>> getReadAccessDataForUsers(SecureClassesEnum dataType);
	
	Long getCharDataSize();
	
	List<AbstractMap.SimpleEntry<Long, Long>> getAllCharacterizations(long rowMin, long rowMax);
	
	List<Long> getAllOrganizations();
	
	List<AbstractMap.SimpleEntry<Long, Long>> getPOCsForOrgs();
	
	List<AbstractMap.SimpleEntry<String, String>> getUserPasswords();
	
	int updateEncryptedPassword(String userName, String password);

}
