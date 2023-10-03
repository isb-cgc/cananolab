package gov.nih.nci.cananolab.security.utils;

import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.restful.SpringApplicationContext;
import gov.nih.nci.cananolab.restful.useraccount.UserAccountBO;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import gov.nih.nci.cananolab.util.SessionListener;

public class LoginSuccessHandler implements AuthenticationSuccessHandler
{
	protected Logger logger = LogManager.getLogger(LoginSuccessHandler.class);

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
										Authentication authentication) throws IOException, ServletException
	{
		// We are upgrading debug logging to warn logging to capture for audits
		System.out.println("LSH Successful Login attempt for user "+  authentication.getName());

		String userName = authentication.getName();
		try {
			UserAccountBO userAccountBO = (UserAccountBO) SpringApplicationContext.getBean(request, "userAccountBO");
			userAccountBO.updateLastLogin(userName);
		} catch (NoAccessException e) {
			System.out.println("Update last login for user " + userName + " failed because no access");
			logger.warn("Update last login for user " + userName + " failed because no access");
		}

		SessionListener userListener = new SessionListener(authentication.getName());
		request.getSession(true).setAttribute("username", userListener);
		logger.warn("Successfully authenticated user: " + authentication.getName());
		OutputStream out = response.getOutputStream();
		out.write(authentication.getName().getBytes());	
	}

}
