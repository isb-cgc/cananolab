package gov.nih.nci.cananolab.security.dao;

import gov.nih.nci.cananolab.security.CananoUserDetails;
import gov.nih.nci.cananolab.security.enums.CaNanoRoleEnum;
import gov.nih.nci.cananolab.security.service.PasswordHistory;
import gov.nih.nci.cananolab.util.StringUtils;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.sql.DataSource;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Component;
import gov.nih.nci.cananolab.security.service.PasswordResetToken;

@Component("userDao")
public class UserDaoImpl extends JdbcDaoSupport implements UserDao 
{
	protected Logger logger = LogManager.getLogger(UserDaoImpl.class);
	
	@Autowired
	private DataSource dataSource;
	
	@PostConstruct
	private void initialize() {
		setDataSource(dataSource);
	}
	
	private static final String FETCH_USER_SQL = "select u.username, u.first_name, u.last_name, u.password, u.organization, u.department, " +
												 "u.title, u.phone_number, u.email_id, u.enabled from users u where u.username = ?";

	private static final String FETCH_USER_BY_EMAIL_SQL = "select u.username, u.first_name, u.last_name, u.password, u.organization, u.department, " +
			"u.title, u.phone_number, u.email_id, u.enabled from users u where u.email_id = ?";
	
	private static final String FETCH_USER_ROLES_SQL = "SELECT a.authority rolename FROM authorities a where a.username = ?";
	
	
	private static final String FETCH_USER_GROUPS_SQL = "SELECT DISTINCT g.group_name FROM `groups` g LEFT JOIN group_members gm ON g.id = gm.group_id WHERE (g.created_by = ? OR gm.username = ?)";
	private static final String FETCH_USERS_LIKE_SQL = "SELECT u.username, u.first_name, u.last_name, u.password, u.organization, u.department, " +
												 	   "u.title, u.phone_number, u.email_id, u.enabled FROM users u " +
												 	   "WHERE UPPER(username) LIKE ? OR UPPER(first_name) LIKE ? OR UPPER(last_name) LIKE ?";
	
	private static final String FETCH_ALL_USERS_SQL = "SELECT u.username, u.first_name, u.last_name, u.password, u.organization, u.department, " +
												 	  "u.title, u.phone_number, u.email_id, u.enabled FROM users u";
	
	private static final String INSERT_USER_SQL = "insert into users(username, password, first_name, last_name, organization, department, title, phone_number, email_id, enabled, updated_date) " +
												  "values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
	
	private static final String INSERT_USER_AUTHORITY_SQL = "INSERT INTO authorities(username, authority) values (?, ?)";
	
	private static final String RESET_PASSWORD_SQL = "UPDATE users SET password = ? WHERE username = ?";
	
	private static final String FETCH_PASSWORD_SQL = "SELECT password FROM users WHERE username = ?";
	
	private static final String UPDATE_USER_SQL = "UPDATE users SET first_name = ?, last_name = ?, organization = ?, department = ?, title = ?, phone_number = ?, email_id = ?, enabled = ?, updated_date = ?" +
												  "WHERE username = ?";
	
	private static final String DELETE_ROLES_SQL = "DELETE FROM authorities WHERE username = ? AND authority != '" + CaNanoRoleEnum.ROLE_ANONYMOUS.toString() + "'";

	private static final String INSERT_PASSWORD_RESET_TOKEN = "INSERT INTO password_reset_tokens(token, username, expiry_date) " +
													"values (?, ?, ?)";

	private static final String FETCH_PASSWORD_RESET_TOKEN = "select p.token, p.username, p.expiry_date from password_reset_tokens p where p.token = ?";

	private static final String DELETE_PASSWORD_RESET_TOKENS = "DELETE FROM password_reset_tokens WHERE username = ?";

	private static final String INSERT_PASSWORD_HISTORY = "INSERT INTO password_history(password, username, createdate, expirydate) " + "values (?, ?, ?, ?)";

	private static final String DELETE_PASSWORD_HISTORY = "DELETE FROM password_history WHERE password = ?";

	private static final String FETCH_PASSWORD_HISTORY = "select p.password, p.username, p.createdate, p.expirydate from password_history p where p.username = ? order by expirydate asc";

	private static final String ENABLE_USER_ACCOUNT = "UPDATE users SET enabled = 1 WHERE username = ?";

	private static final String UPDATE_LAST_LOGIN = "UPDATE users SET last_login = ? WHERE username = ?";

	private static final String FETCH_LAST_LOGIN = "select last_login from users where username = ?";

	@Override
	public CananoUserDetails getUserByName(String username)
	{
		logger.debug("Fetching user details for user login: " + username);
		
		CananoUserDetails user = null;
		
		if (!StringUtils.isEmpty(username))
		{
			Object[] params = new Object[] {username};
			List<CananoUserDetails> userList = (List<CananoUserDetails>) getJdbcTemplate().query(FETCH_USER_SQL, params, new UserMapper());
			if (userList != null && userList.size() == 1)
				user = userList.get(0);
		}
		return user;
	}

	@Override
	public CananoUserDetails getUserByEmail(String email)
	{
		logger.debug("Fetching user details for user with email: " + email);

		CananoUserDetails user = null;

		if (!StringUtils.isEmpty(email))
		{
			Object[] params = new Object[] {email};
			List<CananoUserDetails> userList = (List<CananoUserDetails>) getJdbcTemplate().query(FETCH_USER_BY_EMAIL_SQL, params, new UserMapper());
			if (userList != null) {
				if (userList.size() > 0) {
					if (userList.size() > 1) {
						logger.warn("Found more than one users with same email " + email);
						System.out.println("Found more than one users with same email " + email);
					}
					user = userList.get(0);
				}
			}
		}
		return user;
	}
	
	@Override
	public List<CananoUserDetails> getUsers(String likeStr)
	{
		logger.debug("Fetching user details with username like: " + likeStr);
		
		List<CananoUserDetails> userList = new ArrayList<CananoUserDetails>();
		
		if (!StringUtils.isEmpty(likeStr))
		{
			String matchStr = "%" + likeStr.toUpperCase() + "%";
			Object[] params = new Object[] {matchStr, matchStr, matchStr};
			userList = getJdbcTemplate().query(FETCH_USERS_LIKE_SQL, params, new UserMapper());
		}
		else
			userList = getJdbcTemplate().query(FETCH_ALL_USERS_SQL, new UserMapper());
		
		return userList;
	}
	
	@Override
	public List<String> getUserGroups(String username)
	{
		logger.debug("Fetching all groups to which user belongs: " + username);
		
		List<String> userGroups = new ArrayList<String>();
		if (!StringUtils.isEmpty(username))
		{
			Object[] params = new Object[] {username, username};
			userGroups = (List<String>) getJdbcTemplate().queryForList(FETCH_USER_GROUPS_SQL, params, String.class);
		}
		return userGroups;
	}
	
	@Override
	public List<String> getUserRoles(String username)
	{
		logger.debug("Fetching all roles assigned to user: " + username);
		
		List<String> userRoles = new ArrayList<String>();
		if (!StringUtils.isEmpty(username))
		{
			Object[] params = new Object[] {username};
			userRoles = (List<String>) getJdbcTemplate().queryForList(FETCH_USER_ROLES_SQL, params, String.class);
		}
		return userRoles;
	}
	
	@Override
	public int insertUser(CananoUserDetails user)
	{
		logger.debug("Insert user : " + user);
		int enabled = (user.isEnabled()) ? 1 : 0;
		Date updatedDate = new Date();
		Object[] params = new Object[] {user.getUsername(), user.getPassword(), user.getFirstName(), user.getLastName(),
										user.getOrganization(), user.getDepartment(), user.getTitle(), user.getPhoneNumber(),
										user.getEmailId(), Integer.valueOf(enabled), updatedDate};

        return getJdbcTemplate().update(INSERT_USER_SQL, params);
	}
	
	@Override
	public int insertUserAuthority(String userName, String authority)
	{
		logger.debug("Insert user authority: user = " + userName + ", authority = " + authority);
		Object[] params = new Object[] {userName, authority};

        return getJdbcTemplate().update(INSERT_USER_AUTHORITY_SQL, params);
	}

	@Override
	public int enableUserAccount(String userName) {
		logger.info("Enabling user account for user: " + userName);
		Object[] params = new Object[] { userName };
		return getJdbcTemplate().update(ENABLE_USER_ACCOUNT, params);
	}

	@Override
	public int updateLastLogin(String userName) {
		logger.info("Update last login for user: " + userName);
		Date loginDate = new Date();
		Object[] params = new Object[] { loginDate, userName };
		return getJdbcTemplate().update(UPDATE_LAST_LOGIN, params);
	}

	@Override
	public LocalDateTime getLastLogin(String username)
	{
		logger.debug("Fetching last login time of user: " + username);
		return (LocalDateTime) getJdbcTemplate().queryForObject(FETCH_LAST_LOGIN, new Object[] {username}, LocalDateTime.class);
	}

	@Override
	public int resetPassword(String userName, String password)
	{
		logger.info("Reset password for user: " + userName);
		Object[] params = new Object[] {password, userName};

        return getJdbcTemplate().update(RESET_PASSWORD_SQL, params);
	}
	
	@Override
	public String readPassword(String userName)
	{
		logger.info("Read password for user : " + userName);

        return (String) getJdbcTemplate().queryForObject(FETCH_PASSWORD_SQL, new Object[] {userName}, String.class);
	}

	@Override
	public int updateUser(CananoUserDetails userDetails)
	{
		logger.info("Update user account for user: " + userDetails.getUsername());
		int enabled = (userDetails.isEnabled()) ? 1 : 0;

		Date updatedDate = new Date();
		
		Object[] params = new Object[] {userDetails.getFirstName(), userDetails.getLastName(), userDetails.getOrganization(), 
										userDetails.getDepartment(), userDetails.getTitle(), userDetails.getPhoneNumber(),
										userDetails.getEmailId(), Integer.valueOf(enabled),  updatedDate, userDetails.getUsername()};

        return getJdbcTemplate().update(UPDATE_USER_SQL, params);
	}
	
	@Override
	public int deleteUserAssignedRoles(String username)
	{
		logger.info("Delete all user assigned roles for :" + username);
	
		Object[] params = new Object[] {username};

        return getJdbcTemplate().update(DELETE_ROLES_SQL, params);
	}

	@Override
	public int insertPasswordResetToken(PasswordResetToken prt)
	{
		logger.debug("Insert password reset token : " + prt.getToken());
		Object[] params = new Object[] { prt.getToken(), prt.getUserName(), prt.getExpiryDate() };
		return getJdbcTemplate().update(INSERT_PASSWORD_RESET_TOKEN, params);
	}

	@Override
	public int deletePasswordResetTokens(String username) {
		logger.debug("Clear all password reset tokens for : " + username);
		Object[] params = new Object[] { username };
		return getJdbcTemplate().update(DELETE_PASSWORD_RESET_TOKENS, params);
	}

	@Override
	public PasswordResetToken getPasswordResetToken(String token)
	{
		logger.debug("Fetching password reset token for token string: " + token);

		PasswordResetToken prt = null;

		if (!StringUtils.isEmpty(token))
		{
			Object[] params = new Object[] { token };
			List<PasswordResetToken> tokenList = (List<PasswordResetToken>) getJdbcTemplate().query(FETCH_PASSWORD_RESET_TOKEN, params, new PasswordResetTokenMapper());
			if (tokenList != null && tokenList.size() == 1)
				prt = tokenList.get(0);
		}
		return prt;
	}

	private static final class PasswordResetTokenMapper implements RowMapper
	{
		public Object mapRow(ResultSet rs, int rowNum) throws SQLException
		{
			PasswordResetToken prt = new PasswordResetToken();
			prt.setToken(rs.getString("TOKEN"));
			prt.setUserName(rs.getString("USERNAME"));
			prt.setExpiryDate(rs.getObject("EXPIRY_DATE", LocalDateTime.class));

			return prt;
		}
	}

	@Override
	public int insertPasswordHistory(PasswordHistory history)
	{
		logger.debug("Insert password history for: " + history.getUserName());
		Object[] params = new Object[] { history.getPassword(), history.getUserName(), history.getCreateDate(), history.getExpiryDate() };
		return getJdbcTemplate().update(INSERT_PASSWORD_HISTORY, params);
	}

	@Override
	public int deletePasswordHistory(String password) {
		logger.debug("Delete password history for password:" + password);
		Object[] params = new Object[] { password };
		return getJdbcTemplate().update(DELETE_PASSWORD_HISTORY, params);
	}

	@Override
	public List<PasswordHistory> getPasswordHistory(String username)
	{
		logger.debug("Fetching password history for user: " + username);

		List<PasswordHistory> histories = new ArrayList<>();

		if (!StringUtils.isEmpty(username))
		{
			Object[] params = new Object[] { username };
			histories = (List<PasswordHistory>) getJdbcTemplate().query(FETCH_PASSWORD_HISTORY, params, new PasswordHistoryMapper());
		}

		return histories;
	}

	private static final class PasswordHistoryMapper implements RowMapper
	{
		public Object mapRow(ResultSet rs, int rowNum) throws SQLException
		{
			PasswordHistory history = new PasswordHistory();
			history.setPassword(rs.getString("PASSWORD"));
			history.setUserName(rs.getString("USERNAME"));
			history.setCreateDate(rs.getObject("CREATEDATE", LocalDateTime.class));
			history.setExpiryDate(rs.getObject("EXPIRYDATE", LocalDateTime.class));

			return history;
		}
	}
	
	private static final class UserMapper implements RowMapper
	{
		public Object mapRow(ResultSet rs, int rowNum) throws SQLException
		{
			CananoUserDetails user = new CananoUserDetails();
			user.setUsername(rs.getString("USERNAME"));
			user.setFirstName(rs.getString("FIRST_NAME"));
			user.setLastName(rs.getString("LAST_NAME"));
			user.setPassword(rs.getString("PASSWORD"));
			user.setOrganization(rs.getString("ORGANIZATION"));
			user.setDepartment(rs.getString("DEPARTMENT"));
			user.setTitle(rs.getString("TITLE"));
			user.setPhoneNumber(rs.getString("PHONE_NUMBER"));
			user.setEmailId(rs.getString("EMAIL_ID"));
			user.setEnabled(rs.getBoolean("ENABLED"));
			
			return user;
		}
	}

}
