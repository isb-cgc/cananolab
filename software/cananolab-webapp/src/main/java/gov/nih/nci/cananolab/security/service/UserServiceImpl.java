package gov.nih.nci.cananolab.security.service;

import gov.nih.nci.cananolab.security.CananoUserDetails;
import gov.nih.nci.cananolab.security.dao.UserDao;
import gov.nih.nci.cananolab.security.enums.CaNanoRoleEnum;
import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;
import gov.nih.nci.cananolab.util.StringUtils;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Collections;
import java.util.ArrayList;

import org.apache.commons.lang.time.DateUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;
import sun.security.util.Password;

//@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
@Component("userService")
public class UserServiceImpl implements UserService
{
	protected Logger logger = LogManager.getLogger(UserServiceImpl.class);

	private static String SPECIAL_CHARS = "!@#$%^&*()_+\\-=[]{};':\"|,.<>/?~";

	@Autowired
	private UserDao userDao;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	@Override
	public List<CananoUserDetails> loadUsers(String matchStr)
	{
		List<CananoUserDetails> userList = userDao.getUsers(matchStr);
		for (CananoUserDetails userDetails: userList)
		{
			if (userDetails != null)
			{
				userDetails.setGroups(userDao.getUserGroups(userDetails.getUsername()));
				userDetails.setRoles(userDao.getUserRoles(userDetails.getUsername()));
			}
		}
		Collections.sort(userList, CananoUserDetails::compareTo);
		return userList;
	}
	
	@Override
	public List<String> getGroupsAccessibleToUser(String matchStr)
	{
		CananoUserDetails userDetails = SpringSecurityUtil.getPrincipal();
		List<String> groups = new ArrayList<String>();
		if (userDetails != null)
		{
			if (!StringUtils.isEmpty(matchStr))
			{
				for (String group : userDetails.getGroups())
					if (group.contains(matchStr))
						groups.add(group);
			}
			else
				groups.addAll(userDetails.getGroups());
		}
		
		return groups;
	}
	
	@Override
	public void createUserAccount(CananoUserDetails userDetails)
	{
		String username = userDetails.getUsername();
		System.out.println("New user is being created. Call stack follows." + userDetails.getUsername());
		java.lang.StackTraceElement traces[] = Thread.currentThread().getStackTrace();
		for (java.lang.StackTraceElement trace: traces) {
			System.out.println(trace);
		}

		if (userDetails != null && !StringUtils.isEmpty(username))
		{
			String randomPwd = generateRandomPassword();
			String encryptedString = passwordEncoder.encode(randomPwd);
			userDetails.setPassword(encryptedString);
			int status = userDao.insertUser(userDetails);
			userDao.insertUserAuthority(username, CaNanoRoleEnum.ROLE_ANONYMOUS.toString());
			for (String role : userDetails.getRoles())
			{
				if (!role.equals(CaNanoRoleEnum.ROLE_ANONYMOUS))
					userDao.insertUserAuthority(username, role);
			}
		}
	}

	@Override
	public PasswordResetToken loadPasswordResetToken(String matchStr)
	{
		PasswordResetToken prt = userDao.getPasswordResetToken(matchStr);
		return prt;
	}

	@Override
	public void createPasswordResetToken(PasswordResetToken prt)
	{
		String token = prt.getToken();
		if (prt != null && !StringUtils.isEmpty(token)) {
			// Calculate future date when token will expire
			LocalDateTime expiryDate = LocalDateTime.now().plusHours(PasswordResetToken.EXPIRATION_HOURS);
			prt.setExpiryDate(expiryDate);
			int status = userDao.insertPasswordResetToken(prt);
		}
	}

	@Override
	public void deletePasswordResetTokens(CananoUserDetails userDetails) {
		String username = userDetails.getUsername();
		if (userDetails != null && !StringUtils.isEmpty(username))
		{
			int status = userDao.deletePasswordResetTokens(username);
		}
	}
	
	@Override
	public int resetPasswordForUser(String oldPassword, String newPassword, String userName) throws Exception
	{
		int status = 0;
		if (!StringUtils.isEmpty(userName) && !StringUtils.isEmpty(newPassword))
		{
			String encodedPassword = userDao.readPassword(userName);
			//verify oldPassword, else throw exception
			boolean match = passwordEncoder.matches(oldPassword, encodedPassword);
			
			//update to new Password
			if (match)
			{
				String encryptedPassword = passwordEncoder.encode(newPassword);
				status = userDao.resetPassword(userName, encryptedPassword);

				// Add to password history for this user
				insertPasswordHistory(encryptedPassword, userName);

				// If user account was disabled because of password expire, enable it no
				status = userDao.enableUserAccount(userName);
			}
			else
				throw new Exception("Incorrect old password.");
		}
		return status;
	}

	@Override
	public int changePasswordForUser(String newPassword, String userName) throws Exception
	{
		int status = 0;
		if (!StringUtils.isEmpty(userName) && !StringUtils.isEmpty(newPassword))
		{
			String encryptedPassword = passwordEncoder.encode(newPassword);
			status = userDao.resetPassword(userName, encryptedPassword);

			// Add to password history for this user
			insertPasswordHistory(encryptedPassword, userName);

			// If user account was disabled because of password expire, enable it no
			status = userDao.enableUserAccount(userName);
		}
		return status;
	}

	@Override
	public void updateUserAccount(CananoUserDetails userDetails)
	{
		String username = userDetails.getUsername();
		if (userDetails != null && !StringUtils.isEmpty(username))
		{
			int status = userDao.updateUser(userDetails);
			
			status = userDao.deleteUserAssignedRoles(username);
			//update user roles
			for (String role : userDetails.getRoles())
			{
				if (!role.equals(CaNanoRoleEnum.ROLE_ANONYMOUS))
					userDao.insertUserAuthority(username, role);
			}
		}
	}

	@Override
	public CananoUserDetails getUserAccountByEmail(String email) {
		return userDao.getUserByEmail(email);
	}

	@Override
	public int updateLastLogin(String userName) {
		return userDao.updateLastLogin(userName);
	}

	@Override
	public LocalDateTime getLastLogin(String userName)
	{
		return userDao.getLastLogin(userName);
	}

	@Override
	public int insertPasswordHistory(String encodedPassword, String userName)
	{
		PasswordHistory newHistory = new PasswordHistory();

		newHistory.setPassword(encodedPassword);
		newHistory.setUserName(userName);

		LocalDateTime createDate = LocalDateTime.now();
		newHistory.setCreateDate(createDate);

		LocalDateTime expiryDate = createDate.plusDays(PasswordHistory.EXPIRATION_DAY);
		newHistory.setExpiryDate(expiryDate);

		// Make sure there are at most 6 password in history
		List<PasswordHistory> histories = getPasswordHistory(userName);
		if (histories.size() == 6) {
			userDao.deletePasswordHistory(histories.get(0).getPassword());
		}

		return userDao.insertPasswordHistory(newHistory);
	}

	@Override
	public List<PasswordHistory> getPasswordHistory(String userName) {
		return userDao.getPasswordHistory(userName);
	}

	@Override
	public String checkPasswordRequirement(String password, String userName) {
		// Requirements:
		// Must contain at least one uppercase letter
		// Must contain at least one lowercase letter
		// Must contain at least one special character
		// Must contain at least one number
		// Must be minimum 8 letter long for public user, and 15 for other roles. Less than 32 letters
		// Must not reuse password from last 6 generation

		List<PasswordHistory> histories = getPasswordHistory(userName);
		for (PasswordHistory history : histories) {
			if (passwordEncoder.matches(password, history.getPassword())) {
				System.out.println("Password has been used before in the last 6 times");
				return "Password has been used in the last 6 times";
			}
		}

		boolean hasUppercase = false;
		boolean hasLowercase = false;
		boolean hasSpecialChar = false;
		boolean hasNumber = false;
		for (int i = 0; i < password.length(); ++i) {
			char c = password.charAt(i);
			if (Character.isUpperCase(c)) hasUppercase = true;
			if (Character.isLowerCase(c)) hasLowercase = true;
			if (Character.isDigit(c)) hasNumber = true;
			if (SPECIAL_CHARS.indexOf(c) != -1) hasSpecialChar = true;
		}

		List<String> roles = userDao.getUserRoles(userName);
		int minLength = 8;
		int maxLength = 32;
		if (roles.contains("ROLE_ADMIN") || roles.contains("ROLE_RESEARCHER") || roles.contains("ROLE_CURATOR")) {
			minLength = 15;
		}

		boolean hasRightLength = password.length() >= minLength && password.length() <= maxLength;

		if (!hasUppercase) return "Password has no uppercase letter";
		if (!hasLowercase) return "Password has no lowercase letter";
		if (!hasSpecialChar) return "Password has no special character";
		if (!hasNumber) return "Password has no digit";
		if (!hasRightLength) return "Password has no correct length";

		return "";
	}

	private String generateRandomPassword() {
		// Length 16, 4 uppercase, 4 lowercase, 4 special character, 4 number
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < 4; ++i) {
			sb.append('A' + Math.random() * 26);
			sb.append('a' + Math.random() * 26);
			sb.append('0' + Math.random() * 10);
			sb.append(SPECIAL_CHARS.toCharArray()[(int)(Math.random() * 30)]);
		}

		return sb.toString();
	}
}
