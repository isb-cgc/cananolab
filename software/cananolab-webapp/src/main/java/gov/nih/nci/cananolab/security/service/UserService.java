package gov.nih.nci.cananolab.security.service;

import java.util.List;

import gov.nih.nci.cananolab.security.CananoUserDetails;

public interface UserService
{
	List<CananoUserDetails> loadUsers(String matchStr);

	List<String> getGroupsAccessibleToUser(String matchStr);
	
	void createUserAccount(CananoUserDetails userDetails);

	void createPasswordResetToken(PasswordResetToken prt);

	PasswordResetToken loadPasswordResetToken(String matchStr);

	int resetPasswordForUser(String oldPassword, String newPassword, String userName) throws Exception;

	int changePasswordForUser(String newPassword, String userName) throws Exception;

	void updateUserAccount(CananoUserDetails userDetails);

	CananoUserDetails getUserAccountByEmail(String email);
}
