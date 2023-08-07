package gov.nih.nci.cananolab.restful.useraccount;

import java.util.List;

import gov.nih.nci.cananolab.security.service.PasswordResetToken;
import gov.nih.nci.cananolab.util.SessionListener;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.security.CananoUserDetails;
import gov.nih.nci.cananolab.security.service.UserService;
import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;

@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
@Component("userAccountBO")
public class UserAccountBO
{
	protected Logger logger = LogManager.getLogger(UserAccountBO.class);
	
	@Autowired
	private UserDetailsService userDetailsService;
	
	@Autowired
	private UserService userService;
	
	public CananoUserDetails readUserAccount(String username) throws NoAccessException
	{
		return (CananoUserDetails) userDetailsService.loadUserByUsername(username);
	}
	
	public CananoUserDetails createUserAccount(CananoUserDetails userDetails) throws NoAccessException
	{
		userService.createUserAccount(userDetails);
		System.out.println("New user has been created: " + userDetails.getUsername());
		logger.warn("Successful creation of user: " + userDetails.getUsername());
        return (CananoUserDetails) userDetailsService.loadUserByUsername(userDetails.getUsername());
	}

	public PasswordResetToken readPasswordResetToken(String token) throws NoAccessException
	{
		return userService.loadPasswordResetToken(token);
	}

	public PasswordResetToken createPasswordResetToken(PasswordResetToken prt) throws NoAccessException
	{
		userService.createPasswordResetToken(prt);
		return userService.loadPasswordResetToken(prt.getToken());
	}

	public void deletePasswordResetTokens(CananoUserDetails userDetails) throws NoAccessException
	{
		System.out.println("All password reset tokens for user: " + userDetails.getUsername() + " will be deleted");
		userService.deletePasswordResetTokens(userDetails);
	}

	public void changeUserAccountPassword(String newPassword, String userName) throws Exception
	{
		userService.changePasswordForUser(newPassword, userName);
	}

	public void resetUserAccountPassword(String oldPassword, String newPassword, String userName) throws Exception
	{
		userService.resetPasswordForUser(oldPassword, newPassword, userName);
		System.out.println("Password reset for user: " +  userName);
		logger.warn("Successful password reset for user: " + userName);
	}
	
	public CananoUserDetails updateUserAccount(CananoUserDetails userDetails) throws NoAccessException
	{
		userService.updateUserAccount(userDetails);
		System.out.println("Updated user account for user: " +  userDetails.getUsername());
		logger.warn("Successful update of user account for user: " + userDetails.getUsername());
        return (CananoUserDetails) userDetailsService.loadUserByUsername(userDetails.getUsername());
	}
	
	public List<CananoUserDetails> searchByUsername(String searchStr) throws NoAccessException
	{
		System.out.println("Searching for users by string: " +  searchStr);
		logger.warn("Searching for users by string: " + searchStr);
        return userService.loadUsers(searchStr);
	}

	public CananoUserDetails getByEmail(String emailStr) throws NoAccessException
	{
		return userService.getUserAccountByEmail(emailStr);
	}
	
}
