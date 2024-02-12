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
import org.springframework.security.core.userdetails.UsernameNotFoundException;
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
		System.out.println("failureMessage " + failureMessage);
		OutputStream out = response.getOutputStream();
		out.write(failureMessage.getBytes());
	}

	private String getFailureReason(HttpServletRequest request, String userName) {
		try {
			UserAccountBO userAccountBO = (UserAccountBO) SpringApplicationContext.getBean(request, "userAccountBO");

			CananoUserDetails userDetails = userAccountBO.readUserAccount(userName);
			System.out.println("get Failure Reason: have user details");

			boolean isAccountEnabled = userDetails.isEnabled();
			System.out.println("is account enabled " + isAccountEnabled);

			if (isAccountEnabled) {
				return "Login failed: Incorrect user name or password.";
			}
			else {
				// If user account is disabled, we need to find out why
				boolean isPasswordExpired = false;
				List<PasswordHistory> histories = userAccountBO.getPasswordHistory(userName);
				System.out.println("history list " + histories);
				if (histories.size() > 0) {
					System.out.println("history list size " + histories.size());
					PasswordHistory last = histories.get(histories.size() - 1);
					System.out.println("history last " + last);
					if (last.getExpiryDate().isBefore(LocalDateTime.now())) {
						// Most recent password has expired, so account was disabled
						isPasswordExpired = true;
					}
					System.out.println("history expiry " + last.getExpiryDate());
				} else {
					//
					// If we have no history of passwords, the account predates
					// the new system and is expired by default
					//
					isPasswordExpired = true;
				}

				// Check if inactive for too long
				LocalDateTime lastLogin = userAccountBO.getLastLogin(userName);
                //
                // Inactive accounts that predate last login tracking will
                // have no lastLogin value. This can be inferred to be
                // inactive.
                //

				System.out.println("last login " + lastLogin);
                boolean isAccountInactive = true;
                if (lastLogin != null) {
                    LocalDateTime inactiveAccountDate = lastLogin.plusDays(UserSelfManageServices.MAX_INACTIVE_PERIOD_DAYS);
                    System.out.println("inactiveAccountDate " + inactiveAccountDate);
                    isAccountInactive = inactiveAccountDate.isBefore(LocalDateTime.now());
                    System.out.println("isAccountInactive " + isAccountInactive);
                }

				// Check if does not have an email
				boolean hasNoEmail = userDetails.getEmailId() == null || userDetails.getEmailId().isEmpty();
				System.out.println("hasNoEmail " + hasNoEmail);

				if (hasNoEmail || isAccountInactive) {
					return "Login failed: Account has been deactivated due to inactivity. Please contact caNanoLab-Support@isb-cgc.org.";
				}

				System.out.println("isPasswordExpired " + isPasswordExpired);
				if (isPasswordExpired) {
					return "Login failed: Last password has expired. Please reset your password.";
				}

				return "Login failed: Account has been deactivated by admin. Please contact caNanoLab-Support@isb-cgc.org.";
			}
		} catch (UsernameNotFoundException usernameNotFoundException) {
			String message = usernameNotFoundException.getMessage();
			System.out.println("Exception message " + message);
			return ("Login failed: Invalid user name or password.");
		} catch (Exception e) {
			// Do NOT send the exception message to the user. There might not even be
			// an exception message.
			System.out.println("Exception caught " + e);
			String message = e.getMessage();
			System.out.println("Exception message " + message);
			return ("Login failed with unexpected error: Please contact caNanoLab-Support@isb-cgc.org.");
		}
	}
}
