package gov.nih.nci.cananolab.restful;

import gov.nih.nci.cananolab.security.service.PasswordHistory;

import gov.nih.nci.cananolab.restful.useraccount.UserAccountBO;
import gov.nih.nci.cananolab.restful.util.CommonUtil;
import gov.nih.nci.cananolab.restful.util.MailServiceUtil;
import gov.nih.nci.cananolab.security.CananoUserDetails;
import gov.nih.nci.cananolab.security.service.PasswordResetToken;
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
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Path("/userself")
public class UserSelfManageServices
{
	private static final Logger logger = LogManager.getLogger(UserSelfManageServices.class);

	@GET
	@Path("/accounttype")
	@Produces ({"application/json", "text/plain"})
	public Response getAccountType(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam("token") String token)
	{
		try {
			UserAccountBO userAccountBO = (UserAccountBO) SpringApplicationContext.getBean(httpRequest, "userAccountBO");
			PasswordResetToken prt = userAccountBO.readPasswordResetToken(token);
			String validateResult = validateToken(prt);

			if (validateResult == null) {
				CananoUserDetails userDetails = userAccountBO.readUserAccount(prt.getUserName());
				if (userDetails != null) {
					boolean isPrivilegeUser = userDetails.isCurator() || userDetails.isAdmin() || userDetails.isResearcher();

					JsonBuilderFactory factory = Json.createBuilderFactory(null);
					JsonObject value = factory.createObjectBuilder()
							.add("status", "success")
							.add("isPrivilegeUser", isPrivilegeUser).build();

					return Response.ok(value).build();
				} else {
					throw new Exception("Cannot get user info when trying to prepare password change");
				}
			} else {
				throw new Exception("Invalid token when trying to prepare password change");
			}
		} catch (Exception e) {
			logger.error("Error in handling password change request: ", e);
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
					.entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
		}
	}

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

				if (StringUtils.isEmpty(userDetails.getUsername())) {
					throw new Exception("Username is required to create a password reset token.");
				}

				String userName = userDetails.getUsername();

				// Check if last password is still not used for one day
				List<PasswordHistory> histories = userAccountBO.getPasswordHistory(userName);
				if (histories.size() > 0) {
					PasswordHistory last = histories.get(histories.size() - 1);
					LocalDateTime oneDayLater = last.getCreateDate().plusDays(1);
					if (oneDayLater.isAfter(LocalDateTime.now())) {
						throw new Exception("Last password has not been used for more than one day.");
					}
				}

				// Reset password token
				String token = UUID.randomUUID().toString();
				String baseUrl = "https://" + URI.create(httpRequest.getRequestURL().toString()).getHost();

				// Test: for local testing
				// resetPasswordUrl = "http://localhost:4200/rest/userself/changepwd?token=" + token;
				resetPasswordUrl = baseUrl + "/rest/userself/changepwd?token=" + token;

				PasswordResetToken prt = new PasswordResetToken();
				prt.setToken(token);
				prt.setUserName(userDetails.getUsername());
				userAccountBO.createPasswordResetToken(prt);

				String emailBody =
						"You're receiving this e-mail because you or someone else has requested a password change for your user account.\r\n" +
						"Please click the link below to reset your password.\r\n" +
						resetPasswordUrl;
				MailServiceUtil.sendMail(email, "[caNanoLab] Reset your caNanoLab account password.",
						emailBody);
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
			String baseUrl = "https://" + URI.create(httpRequest.getRequestURL().toString()).getHost();

			if (validateResult != null) {
				// Test: Local
				// redirectUri = "http://localhost:4200/#/home/?errorMessage=Unable to change password because " + validateResult;
				redirectUri = baseUrl + "?errorMessage=Unable to change password because " + validateResult;
				redirectUri = redirectUri.replace(" ", "%20");
				return Response.seeOther(new URI(redirectUri)).build();
			} else {
				// Test: for local
				// redirectUri = "http://localhost:4200/#/home/change-password?token=" + token;
				redirectUri = baseUrl + "/#/home/change-password?token=" + token;

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
			LocalDateTime expiryDate = prt.getExpiryDate();
			if (LocalDateTime.now().isAfter(expiryDate)) {
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

			CananoUserDetails userDetails = userAccountBO.readUserAccount(prt.getUserName());
			if (userDetails != null) {
				String emailBody =
						"Your caNanoLab password has been successfully reset.\r\nIf you did not request this password change," +
								" please contact caNanoLab support at caNanoLab-Support@isb-cgc.org.";
				MailServiceUtil.sendMail(userDetails.getEmailId(), "[caNanoLab] Your caNanoLab account password was reset",
						emailBody);

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
