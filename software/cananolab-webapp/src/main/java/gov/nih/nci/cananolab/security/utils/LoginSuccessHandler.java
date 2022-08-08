package gov.nih.nci.cananolab.security.utils;

import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

public class LoginSuccessHandler implements AuthenticationSuccessHandler
{
	protected Logger logger = LogManager.getLogger(LoginSuccessHandler.class);

	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
										Authentication authentication) throws IOException, ServletException
	{
		// We are upgrading debug logging to warn logging to capture for audits
		System.out.println("LSH Successful Login attempt for user "+  authentication.getName());
		logger.warn("Successfully authenticated user: " + authentication.getName());
		OutputStream out = response.getOutputStream();
		out.write(authentication.getName().getBytes());	
	}

}
