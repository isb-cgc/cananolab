package gov.nih.nci.cananolab.restful;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.json.Json;
import javax.json.JsonBuilderFactory;
import javax.json.JsonObject;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;

import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.restful.util.MailServiceUtil;
import gov.nih.nci.cananolab.security.service.PasswordResetToken;
import org.apache.logging.log4j.LogManager;

import gov.nih.nci.cananolab.restful.useraccount.UserAccountBO;
import gov.nih.nci.cananolab.restful.util.CommonUtil;
import gov.nih.nci.cananolab.security.CananoUserDetails;
import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;
import gov.nih.nci.cananolab.util.Constants;
import gov.nih.nci.cananolab.util.StringUtils;
import org.apache.logging.log4j.Logger;

@Path("/useraccount")
public class UserAccountServices 
{
	private static final Logger logger = LogManager.getLogger(UserAccountServices.class);

	@GET
	@Path("/read")
	@Produces ({"application/json", "text/plain"})
	public Response readUserAccount(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam("username") String username)
	{
		try
		{ 
			if (!SpringSecurityUtil.isUserLoggedIn()) 
				return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();
			
			UserAccountBO userAccountBO = (UserAccountBO) SpringApplicationContext.getBean(httpRequest, "userAccountBO");

			CananoUserDetails userDetails = userAccountBO.readUserAccount(username);
			return Response.ok(userDetails).build();
		}
		catch (Exception e) {
			logger.error("Error in reading user account : ", e);
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
		}
	}

	@GET
	@Path("/search")
	@Produces ("application/json")
	public Response searchUserAccounts(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam("username") String username)
	{
		try
		{
			if (!SpringSecurityUtil.isUserLoggedIn()) 
				return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

			if (!SpringSecurityUtil.getPrincipal().isAdmin()) {
				logger.error("Unexpected principal state for searchUserAccounts");
				return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Admin permissions required").build();
			}

			UserAccountBO userAccountBO = (UserAccountBO) SpringApplicationContext.getBean(httpRequest, "userAccountBO");
			
			List<CananoUserDetails> userDetailsList = new ArrayList<CananoUserDetails>();
			userDetailsList = userAccountBO.searchByUsername(username);
			return Response.ok(userDetailsList).build();
		}
		catch (Exception e) {
			logger.error("Error in searching for user accounts : ", e);
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
		}
	}

	@POST
	@Path("/resetpwd")
	@Produces ({"application/json", "text/plain"})
	public Response resetPassword(@Context HttpServletRequest httpRequest,
			@FormParam("oldpassword") String oldpassword, @FormParam("newpassword") String newpassword, @FormParam("username") String username)
	{
		try
		{
			if (!SpringSecurityUtil.isUserLoggedIn()) 
				return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

			if (!SpringSecurityUtil.getPrincipal().isAdmin()) {
				logger.error("Unexpected principal state for resetPassword");
				return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Admin permissions required").build();
			}

			if (!StringUtils.isEmpty(username) && !StringUtils.isEmpty(oldpassword) && !StringUtils.isEmpty(newpassword))
			{
				UserAccountBO userAccountBO = (UserAccountBO) SpringApplicationContext.getBean(httpRequest, "userAccountBO");
				userAccountBO.resetUserAccountPassword(oldpassword, newpassword, username);
			}
			else
				throw new Exception("Username and old/new passwords are required for resetting password.");
			
//			return Response.ok("success").build();

			JsonBuilderFactory factory = Json.createBuilderFactory(null);
			JsonObject value = factory.createObjectBuilder()
					.add("status", "success").build();

			return
					Response.ok(value).build();

		}
		catch (Exception e) {
			logger.error("Error in resetting password for account: ", e);
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
		}
	}
	
	@POST
	@Path("/create")
	@Produces ("application/json")
	public Response createUserAccount(@Context HttpServletRequest httpRequest, CananoUserDetails userDetails)
	{
		try
		{
			System.out.println("Call to create user " + userDetails.getUsername());
			if (!SpringSecurityUtil.isUserLoggedIn()) 
				return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

			if (!SpringSecurityUtil.getPrincipal().isAdmin()) {
				logger.error("Unexpected principal state for createUserAccount");
				return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Admin permissions required").build();
			}

			if (userDetails.getEmailId() == "") {
				System.out.println("Cannot create new user account without email");
				return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Email is required for new account").build();
			}

			CananoUserDetails newUserDetails = new CananoUserDetails();
			if (!StringUtils.isEmpty(userDetails.getUsername()) && !StringUtils.isEmpty(userDetails.getFirstName()) && !StringUtils.isEmpty(userDetails.getLastName()))
			{
				UserAccountBO userAccountBO = (UserAccountBO) SpringApplicationContext.getBean(httpRequest, "userAccountBO");

				if (userAccountBO.getByEmail(userDetails.getEmailId()) != null) {
					System.out.println("Cannot create new user account because email already exist for " + userDetails.getEmailId());
					return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Email already exist in the system").build();
				}

				newUserDetails = userAccountBO.createUserAccount(userDetails);
			} else {
				throw new Exception("Username, First and Last names are required to create an account.");
			}
			System.out.println("CUA Complete");

			// Send email to user with link to set password
			String resetPasswordUrl = "";
			UserAccountBO userAccountBO = (UserAccountBO) SpringApplicationContext.getBean(httpRequest, "userAccountBO");

			// Reset password token
			String token = UUID.randomUUID().toString();
			String baseUrl = "https://" + URI.create(httpRequest.getRequestURL().toString()).getHost();

			// Test: for local testing
			// resetPasswordUrl = "http://localhost:4200/rest/userself/changepwd?token=" + token;
			resetPasswordUrl = baseUrl + "/rest/userself/changepwd?token=" + token;

			if (!StringUtils.isEmpty(newUserDetails.getUsername()))
			{
				PasswordResetToken prt = new PasswordResetToken();
				prt.setToken(token);
				prt.setUserName(userDetails.getUsername());

				userAccountBO.createPasswordResetToken(prt, true);
			}
			else
				throw new Exception("Username is required to create a password reset token.");

			String emailBody = "A new caNanoLab user account has been created for you.\r\nPlease click the link below to set your password.\r\n" +
							resetPasswordUrl;
			MailServiceUtil.sendMail(newUserDetails.getEmailId(), "[caNanoLab] Set your caNanoLab account password.",
					emailBody);

			return Response.ok(newUserDetails).build();
		}
		catch (Exception e) {
			logger.error("Error in creating user account : ", e);
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
		}
	}
	
	@POST
	@Path("/update")
	@Produces ("application/json")
	public Response updateUserAccount(@Context HttpServletRequest httpRequest, CananoUserDetails userDetails)
	{
		try
		{
			if (!SpringSecurityUtil.isUserLoggedIn()) 
				return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

			if (!SpringSecurityUtil.getPrincipal().isAdmin()) {
				logger.error("Unexpected principal state for updateUserAccount");
				return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Admin permissions required").build();
			}

			CananoUserDetails newUserDetails = new CananoUserDetails();
			if (!StringUtils.isEmpty(userDetails.getUsername()) && !StringUtils.isEmpty(userDetails.getFirstName()) && !StringUtils.isEmpty(userDetails.getLastName()))
			{
				UserAccountBO userAccountBO = (UserAccountBO) SpringApplicationContext.getBean(httpRequest, "userAccountBO");
				newUserDetails = userAccountBO.updateUserAccount(userDetails);
			}
			else
				throw new Exception("Username, First and Last names are required fields.");
			
			return Response.ok(newUserDetails).build();
		}
		catch (Exception e) {
			logger.error("Error in updating user account : ", e);
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
		}
	}

}
