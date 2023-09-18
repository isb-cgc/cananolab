package gov.nih.nci.cananolab.security.utils;

import java.io.IOException;
import java.io.OutputStream;
import java.time.LocalDateTime;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import gov.nih.nci.cananolab.restful.SpringApplicationContext;
import gov.nih.nci.cananolab.restful.UserSelfManageServices;
import gov.nih.nci.cananolab.restful.useraccount.UserAccountBO;
import gov.nih.nci.cananolab.security.CananoUserDetails;
import gov.nih.nci.cananolab.security.service.PasswordHistory;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

public class LoginFailureHandler implements AuthenticationFailureHandler
{
	protected Logger logger = LogManager.getLogger(LoginFailureHandler.class);

	public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, 
										AuthenticationException ae) throws IOException, ServletException
	{
		logger.error("Authentication failed for user: " + request.getParameter("username"), ae);
		response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

		String failureMessage = getFailureReason(request, request.getParameter("username"));
		OutputStream out = response.getOutputStream();
		out.write(failureMessage.getBytes());
	}

	private String getFailureReason(HttpServletRequest request, String userName) {
		try {
			UserAccountBO userAccountBO = (UserAccountBO) SpringApplicationContext.getBean(request, "userAccountBO");

			CananoUserDetails userDetails = userAccountBO.readUserAccount(userName);

			boolean isAccountEnabled = userDetails.isEnabled();

			if (isAccountEnabled) {
				return "Login failed: Incorrect user name or password.";
			}
			else {
				// If user account is disabled, we need to find out why
				boolean isPasswordExpired = false;
				List<PasswordHistory> histories = userAccountBO.getPasswordHistory(userName);
				if (histories.size() > 0) {
					PasswordHistory last = histories.get(histories.size() - 1);
					if (last.getExpiryDate().isBefore(LocalDateTime.now())) {
						// Most recent password has expired, so account was disabled
						isPasswordExpired = true;
					}
				}

				// Check if inactive for too long
				LocalDateTime lastLogin = userAccountBO.getLastLogin(userName);
				LocalDateTime inactiveAccountDate = lastLogin.plusDays(UserSelfManageServices.MAX_INACTIVE_PERIOD_DAYS);
				boolean isAccountInactive = inactiveAccountDate.isBefore(LocalDateTime.now());

				// Check if does not have an email
				boolean hasNoEmail = userDetails.getEmailId() == null || userDetails.getEmailId().isEmpty();

				if (hasNoEmail) {
					return "Login failed: Account has been deactivated due to lack of email.";
				}

				if (isAccountInactive) {
					return "Login failed: Account has been deactivated due to inactivity.";
				}

				if (isPasswordExpired) {
					return "Login failed: Last password has expired. Please reset your password.";
				}

				return "Login failed: Account has been deactivated by admin.";
			}
		} catch (Exception e) {
			return e.getMessage();
		}
	}
}
