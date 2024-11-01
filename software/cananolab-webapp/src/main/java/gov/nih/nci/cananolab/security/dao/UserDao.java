package gov.nih.nci.cananolab.security.dao;

import java.time.LocalDateTime;
import java.util.List;

import gov.nih.nci.cananolab.security.CananoUserDetails;
import gov.nih.nci.cananolab.security.service.PasswordResetToken;
import gov.nih.nci.cananolab.security.service.PasswordHistory;

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

	int enableUserAccount(String userName);

	int updateLastLogin(String userName);

	LocalDateTime getLastLogin(String userName);

	int resetPassword(String userName, String password);
	
	String readPassword(String userName);
	
	int deleteUserAssignedRoles(String username);

	int insertPasswordResetToken(PasswordResetToken prt);

	int deletePasswordResetTokens(String username);

	PasswordResetToken getPasswordResetToken(String token);

	int insertPasswordHistory(PasswordHistory history);

	int deletePasswordHistory(String password);

	List<PasswordHistory> getPasswordHistory(String username);
}
