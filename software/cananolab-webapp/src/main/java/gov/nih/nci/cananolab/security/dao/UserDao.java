package gov.nih.nci.cananolab.security.dao;

import java.util.List;

import gov.nih.nci.cananolab.security.CananoUserDetails;
import gov.nih.nci.cananolab.security.service.PasswordResetToken;

public interface UserDao 
{
	CananoUserDetails getUserByName(String username);
	
	CananoUserDetails getUserByEmail(String email);
	
	List<String> getUserGroups(String username);

	List<String> getUserRoles(String username);

	List<CananoUserDetails> getUsers(String likeStr);

	int insertUser(CananoUserDetails user);
	
	int updateUser(CananoUserDetails user);

	int insertUserAuthority(String userName, String authority);
	
	int resetPassword(String userName, String password);
	
	String readPassword(String userName);
	
	int deleteUserAssignedRoles(String username);

	int insertPasswordResetToken(PasswordResetToken prt);

	PasswordResetToken getPasswordResetToken(String token);
}
