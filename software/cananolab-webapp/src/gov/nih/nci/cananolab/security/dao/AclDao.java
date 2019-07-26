package gov.nih.nci.cananolab.security.dao;

import java.util.List;

import gov.nih.nci.cananolab.security.enums.SecureClassesEnum;

public interface AclDao
{
	List<Long> getIdsOfClassForSid(String clazz, String sid);
	
	List<Long> getCountOfPublicCharacterization(String clazz, String sid, List<String> charNames);
	
	List<String> getIdsOfClassSharedWithSid(SecureClassesEnum classEnum, String loggedInUser, List<String> sids);
	
	int deleteAllAccessToSid(String groupSid);

}
