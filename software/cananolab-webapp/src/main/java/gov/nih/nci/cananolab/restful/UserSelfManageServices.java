package gov.nih.nci.cananolab.restful;

import gov.nih.nci.cananolab.restful.useraccount.UserAccountBO;
import gov.nih.nci.cananolab.restful.util.CommonUtil;
import gov.nih.nci.cananolab.security.CananoUserDetails;
import gov.nih.nci.cananolab.security.service.PasswordResetToken;
import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;
import gov.nih.nci.cananolab.util.Constants;
import gov.nih.nci.cananolab.util.StringUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import javax.json.Json;
import javax.json.JsonBuilderFactory;
import javax.json.JsonObject;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import java.net.URI;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

@Path("/userself")
public class UserSelfManageServices
{
	private static final Logger logger = LogManager.getLogger(UserSelfManageServices.class);

	@GET
	@Path("/resetpwd")
	@Produces ({"application/json", "text/plain"})
	public Response resetPassword(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam("email") String email)
	{
		String resetPasswordUrl = "";
		try
		{
			if (!StringUtils.isEmpty(email))
			{
				UserAccountBO userAccountBO = (UserAccountBO) SpringApplicationContext.getBean(httpRequest, "userAccountBO");

				CananoUserDetails userDetails = userAccountBO.getByEmail(email);

				if (userDetails == null)
				{
					throw new Exception("Cannot find user by email " + email);
				}

				// Reset password token
				String token = UUID.randomUUID().toString();
				String baseUrl = "https://" + URI.create(httpRequest.getRequestURL().toString()).getHost();
				resetPasswordUrl = baseUrl + "/userself/changepwd?token=" + token;

				if (!StringUtils.isEmpty(userDetails.getUsername()))
				{
					PasswordResetToken prt = new PasswordResetToken();
					prt.setToken(token);
					prt.setUserName(userDetails.getUsername());

					userAccountBO.createPasswordResetToken(prt);
				}
				else
					throw new Exception("Username is required to create a password reset token.");

//				userService.createPasswordResetTokenForUser(user, token);
//				mailSender.send(constructResetTokenEmail(getAppUrl(request),
//						request.getLocale(), token, user));
//				return new GenericResponse(
//						messages.getMessage("message.resetPasswordEmail", null,
//								request.getLocale()));
			}
			else
				throw new Exception("Email is required for resetting password.");

			JsonBuilderFactory factory = Json.createBuilderFactory(null);
			JsonObject value = factory.createObjectBuilder()
					.add("status", "success")
					.add("customMessage", resetPasswordUrl).build();

			return
					Response.ok(value).build();
		}
		catch (Exception e) {
			logger.error("Error in resetting password for account: ", e);
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
					.entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
		}
	}

//
//	private SimpleMailMessage constructResetTokenEmail(
//			String contextPath, Locale locale, String token, User user) {
//		String url = contextPath + "/user/changePassword?token=" + token;
//		String message = messages.getMessage("message.resetPassword",
//				null, locale);
//		return constructEmail("Reset Password", message + " \r\n" + url, user);
//	}
//
//	private SimpleMailMessage constructEmail(String subject, String body,
//	                                         User user) {
//		SimpleMailMessage email = new SimpleMailMessage();
//		email.setSubject(subject);
//		email.setText(body);
//		email.setTo(user.getEmail());
//		email.setFrom(env.getProperty("support.email"));
//		return email;
//	}
//
	@GET
	@Path("/changepwd")
	@Produces ({"application/json", "text/plain"})
	public Response showChangePasswordPage(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam("token") String token)
	{
		try {
			UserAccountBO userAccountBO = (UserAccountBO) SpringApplicationContext.getBean(httpRequest, "userAccountBO");
			PasswordResetToken prt = userAccountBO.readPasswordResetToken(token);
			String message = null;
			if (prt == null) {
				message = "invalidToken";
			} else {
				Date expiryDate = prt.getExpiryDate();
				Date now = new Date();
				if (now.after(expiryDate)) {
					message = "expiredToken";
				}
			}

			if (message != null) {
				return "redirect:/login.html?"+ "&message=" + message;
			} else {
				return "redirect:/updatePassword.html" + locale.getLanguage();
			}
		} catch (Exception e) {
			logger.error("Error in showing password reset page: ", e);
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
					.entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
		}
	}
}
