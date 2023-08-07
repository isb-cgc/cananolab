package gov.nih.nci.cananolab.restful;

import gov.nih.nci.cananolab.restful.useraccount.UserAccountBO;
import gov.nih.nci.cananolab.restful.util.CommonUtil;
import gov.nih.nci.cananolab.restful.util.MailServiceUtil;
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
				String baseUrl = "http://" + URI.create(httpRequest.getRequestURL().toString()).getHost();

				// TODO: for local
				resetPasswordUrl = "http://localhost:4200/rest/userself/changepwd?token=" + token;
				// TODO: for deploy
				// resetPasswordUrl = baseUrl + "/userself/changepwd?token=" + token;

				if (!StringUtils.isEmpty(userDetails.getUsername()))
				{
					PasswordResetToken prt = new PasswordResetToken();
					prt.setToken(token);
					prt.setUserName(userDetails.getUsername());

					userAccountBO.createPasswordResetToken(prt);
				}
				else
					throw new Exception("Username is required to create a password reset token.");

				MailServiceUtil.send(email, "Reset your caNanoLab account password",
						"<div style=\"font-family:arial\"><p>You're receiving this e-mail because you or someone else has requested a password change for your user account.<br>" +
								"Click the button below to reset your password.<br><br>" +
								"<a href=\"" + resetPasswordUrl + "\" target=\"_blank\" style=\"padding: 8px 12px;border-radius: 4px;font-size: 16px;" +
								" background-color:#1111FF;color: #FFFFFF;text-decoration: none;display: inline-block;\">Reset Password</a></div>");
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

	@GET
	@Path("/changepwd")
	@Produces ({"application/json", "text/plain"})
	public Response showChangePasswordPage(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam("token") String token)
	{
		try {
			UserAccountBO userAccountBO = (UserAccountBO) SpringApplicationContext.getBean(httpRequest, "userAccountBO");
			PasswordResetToken prt = userAccountBO.readPasswordResetToken(token);
			String validateResult = validateToken(prt);

			String redirectUri = "";
			if (validateResult != null) {
				// TODO: redirect to home page with message
				redirectUri = "http://localhost:4200/#/home/?errorMessage=Unable to change password because " + validateResult;
				redirectUri = redirectUri.replace(" ", "%20");
				return Response.seeOther(new URI(redirectUri)).build();
			} else {
				String baseUrl = "http://" + URI.create(httpRequest.getRequestURL().toString()).getHost();

				// TODO: for local
				redirectUri = "http://localhost:4200/#/home/change-password?token=" + token;
//				redirectUri = "/updatePassword";

				return Response.seeOther(new URI(redirectUri)).build();
			}

		} catch (Exception e) {
			logger.error("Error in showing password reset page: ", e);
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
					.entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
		}
	}

	private String validateToken(PasswordResetToken prt) {
		if (prt == null) {
			return "token is invalid.";
		} else {
			Date expiryDate = prt.getExpiryDate();
			Date now = new Date();
			if (now.after(expiryDate)) {
				return "token is expired";
			} else {
				return null;
			}
		}
	}

	@POST
	@Path("/savepwd")
	@Produces ({"application/json", "text/plain"})
	public Response savePassword(@Context HttpServletRequest httpRequest,
	                              @FormParam("newpassword") String newpassword, @FormParam("token") String token)
	{
		try {
			UserAccountBO userAccountBO = (UserAccountBO) SpringApplicationContext.getBean(httpRequest, "userAccountBO");
			PasswordResetToken prt = userAccountBO.readPasswordResetToken(token);
			String validateResult = validateToken(prt);

			if (validateResult == null) {
				String username = prt.getUserName();
				if (!StringUtils.isEmpty(username) && !StringUtils.isEmpty(newpassword)) {
					userAccountBO.changeUserAccountPassword(newpassword, username);
				} else {
					throw new Exception("Password saving failed.");
				}
			} else {
				throw new Exception("Invalid password change request.");
			}

			MailServiceUtil.send(email, "Your caNanoLab account password was reset",
					"<div style=\"font-family:arial\"><p>Your caNanoLab password has been successfully reset.<br>" +
							"If you did not request this password change, please contact caNanoLab admin at [email TBD]</p></div>");

			CananoUserDetails userDetails = userAccountBO.readUserAccount(prt.getUserName());
			if (userDetails != null) {
				// Delete all existing tokens because password has been changed
				userAccountBO.deletePasswordResetTokens(userDetails);
			}

			JsonBuilderFactory factory = Json.createBuilderFactory(null);
			JsonObject value = factory.createObjectBuilder()
					.add("status", "success").build();

			return
					Response.ok(value).build();
		}
		catch (Exception e) {
			logger.error("Error in handling password change request: ", e);
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
					.entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
		}
	}
}
