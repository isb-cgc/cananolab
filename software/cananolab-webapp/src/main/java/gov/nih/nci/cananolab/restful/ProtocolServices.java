package gov.nih.nci.cananolab.restful;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.MediaType;

import gov.nih.nci.cananolab.restful.view.SimpleProtocolBean;
import gov.nih.nci.cananolab.restful.view.SimpleSampleBean;
import org.apache.logging.log4j.LogManager;

import gov.nih.nci.cananolab.dto.common.DataReviewStatusBean;
import gov.nih.nci.cananolab.dto.common.ProtocolBean;
import gov.nih.nci.cananolab.restful.protocol.ProtocolBO;
import gov.nih.nci.cananolab.restful.protocol.ProtocolManager;
import gov.nih.nci.cananolab.restful.protocol.SearchProtocolBO;
import gov.nih.nci.cananolab.restful.util.CommonUtil;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSubmitProtocolBean;
import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;
import gov.nih.nci.cananolab.security.CananoUserDetails;
import gov.nih.nci.cananolab.ui.form.SearchProtocolForm;
import gov.nih.nci.cananolab.util.Constants;
import org.apache.logging.log4j.Logger;

@Path("/protocol")
public class ProtocolServices
{
	private static final Logger logger = LogManager.getLogger(ProtocolServices.class);

	@GET
	@Path("/setup")
	@Produces ("application/json")
	public Response setup(@Context HttpServletRequest httpRequest)
	{
		try
		{
			SearchProtocolBO searchProtocolBO = (SearchProtocolBO) SpringApplicationContext.getBean(httpRequest, "searchProtocolBO");
			Map<String, Object> dropdownMap = searchProtocolBO.setup(httpRequest);

			// Curator can directly set public access when create protocol
			boolean isCurator = false;
			if (SpringSecurityUtil.isUserLoggedIn()) {
				CananoUserDetails userDetails = SpringSecurityUtil.getPrincipal();
				isCurator = userDetails.isCurator();
			}
			dropdownMap.put("isCuratorEditing", isCurator);

			return Response.ok(dropdownMap).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();

			// return Response.ok(dropdownMap).build();
		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while setting up drop down lists" + e.getMessage())).build();

		}
	}

	@POST
	@Path("/searchProtocol")
	@Produces ("application/json")
	public Response searchProtocol(@Context HttpServletRequest httpRequest, SearchProtocolForm searchForm )
	{
		try {
			SearchProtocolBO searchProtocolBO = (SearchProtocolBO) SpringApplicationContext.getBean(httpRequest, "searchProtocolBO");

			List results = searchProtocolBO.search(searchForm, httpRequest);

			Object result = results.get(0);
			if (result instanceof String)
				return Response.status(Response.Status.NOT_FOUND).entity(result).build();
			else
				return Response.ok(results).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();

		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while searching for protocol " + e.getMessage())).build();
		}
	}

	@GET
	@Path("/download")
	@Produces ({"application/pdf", "application/json", "application/octet-stream"})
	public Response download(@Context HttpServletRequest httpRequest, @Context HttpServletResponse httpResponse,
	                         @DefaultValue("") @QueryParam("protocolId") String protocolId,
	                         @DefaultValue("") @QueryParam("fileId") String fileId)
	{
		try { 
			ProtocolBO protocolBO = (ProtocolBO) SpringApplicationContext.getBean(httpRequest, "protocolBO");

			String result = protocolBO.download(protocolId, fileId, httpRequest, httpResponse);

			return Response.ok(result).build();

		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			String msgAsJson = "\"" + "Error while downloading the file " + e.getMessage() + "\"";
			return (Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(msgAsJson).type(MediaType.APPLICATION_JSON).build());
		}
	}

	@POST
	@Path("/submitProtocol")
	@Produces ("application/json")
	public Response submitProtocol(@Context HttpServletRequest httpRequest, SimpleSubmitProtocolBean form)
	{
		try {
			ProtocolBO protocolBO = (ProtocolBO) SpringApplicationContext.getBean(httpRequest, "protocolBO");

			if (!SpringSecurityUtil.isUserLoggedIn()) 
				return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

			List<String> msgs = protocolBO.create(form, httpRequest);
			msgs.add(form.getId().toString());

			return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();
		}
		catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while submitting the protocol " + e.getMessage())).build();
		}
	}	

	@GET
	@Path("/edit")
	@Produces ("application/json")
	public Response edit(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam("protocolId") String protocolId)
	{
		try {
			ProtocolBO protocolBO = (ProtocolBO) SpringApplicationContext.getBean(httpRequest, "protocolBO");

			if (!SpringSecurityUtil.isUserLoggedIn())
				return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

			SimpleSubmitProtocolBean view = protocolBO.setupUpdate(protocolId, httpRequest);
			CananoUserDetails userDetails = SpringSecurityUtil.getPrincipal();
			boolean isCurator = userDetails.isCurator();

			view.setIsCuratorEditing(isCurator);

			List<String> errors = view.getErrors();
			return (errors == null || errors.size() == 0) ?
					Response.ok(view).build() :
						Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(errors).build();

		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while viewing for protocol " + e.getMessage())).build();

		}
	}

	@GET
	@Path("/view")
	@Produces("application/json")
	public Response view(@Context HttpServletRequest httpRequest,
						 @DefaultValue("") @QueryParam("protocolId") String protocolId) {
		System.out.println("Hitting endpoint");
		try {
			ProtocolBO protocolBO = (ProtocolBO) SpringApplicationContext.getBean(httpRequest, "protocolBO");
			SimpleProtocolBean protocolBean = protocolBO.summaryView(protocolId, httpRequest);

			// SimpleSubmitProtocolBean view = protocolBO.setupUpdate(protocolId, httpRequest);

			List<String> errors = protocolBean.getErrors();


			if (errors == null || errors.isEmpty()) {
				// return Response.ok(protocolBean).build();
				return Response.ok(protocolBean)
						.header("Access-Control-Allow-Credentials", "true")
						.header("Access-Control-Allow-Origin", "*")
						.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
						.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
						.build();
			} else {
				System.out.println("Error, server.");
				return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(errors).build();
			}
		} catch (Exception e) {
			logger.error(e.getMessage());
			System.out.println("Error, exception handled.");
			e.printStackTrace();
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while viewing for protocol " + e.getMessage())).build();
		}
	}

	@POST
	@Path("/saveAccess")
	@Produces ("application/json")
	public Response saveAccess(@Context HttpServletRequest httpRequest, SimpleSubmitProtocolBean bean)
	{
		try {
			ProtocolBO protocolBO = (ProtocolBO) SpringApplicationContext.getBean(httpRequest, "protocolBO");

			if (!SpringSecurityUtil.isUserLoggedIn()) 
				return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

			SimpleSubmitProtocolBean view = protocolBO.saveAccess(bean, httpRequest);

			List<String> errors = view.getErrors();
			return (errors == null || errors.size() == 0) ?
					Response.ok(view).build() : Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(errors).build();
		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while saving the access to protocol " + e.getMessage())).build();
		}
	}
	@POST
	@Path("/deleteProtocol")
	@Produces ("application/json")
	public Response deleteProtocol(@Context HttpServletRequest httpRequest, SimpleSubmitProtocolBean form)
	{
		try {
			ProtocolBO protocolBO = (ProtocolBO) SpringApplicationContext.getBean(httpRequest, "protocolBO");

			if (!SpringSecurityUtil.isUserLoggedIn()) 
				return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

			List<String> msgs = protocolBO.delete(form, httpRequest);

			return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();

		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while deleting the protocol " + e.getMessage())).build();
		}
	}

	@POST
	@Path("/deleteAccess")
	@Produces ("application/json")
	public Response deleteAccess(@Context HttpServletRequest httpRequest, SimpleSubmitProtocolBean form)
	{
		try {
			ProtocolBO protocolBO = (ProtocolBO) SpringApplicationContext.getBean(httpRequest, "protocolBO");

			if (!SpringSecurityUtil.isUserLoggedIn()) 
				return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

			SimpleSubmitProtocolBean bean = protocolBO.deleteAccess(form, httpRequest);

			List<String> errors = bean.getErrors();
			return (errors == null || errors.size() == 0) ?
					Response.ok(bean).build() : Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(errors).build();
		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while deleting the access " + e.getMessage())).build();
		}
	}

	@GET
	@Path("/checkWriteAccess")
	@Produces("application/json")
	public Response checkWriteAccess(@Context HttpServletRequest httpRequest,
	                                 @DefaultValue("") @QueryParam("protocolId") String protocolId)
	{
		logger.debug("In checkWriteAccess");

		if (!SpringSecurityUtil.isUserLoggedIn()) {
			logger.info("User not logged in");
			return Response.ok(false).build();
		}

		ProtocolBO protocolBO = (ProtocolBO) SpringApplicationContext.getBean(httpRequest, "protocolBO");

		/*
		if (!SpringSecurityUtil.isUserLoggedIn())
			return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();
		*/
		try {
			if (!protocolBO.isProtocolEditableByCurrentUser(httpRequest, protocolId)) {
				logger.info("User has no write access to protocol");
				return Response.ok(false).build();
			} else {
				return Response.ok(true).build();
			}
		} catch (Exception ioe) {
			logger.error(ioe.getMessage());
			ioe.printStackTrace();
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
					.entity(CommonUtil.wrapErrorMessageInList(ioe.getMessage())).build();
		}
	}

	@GET
	@Path("/getProtocol")
	@Produces ("application/json")
	public Response getProtocol(
			@Context HttpServletRequest httpRequest,
			@DefaultValue("") @QueryParam("protocolType") String protocolType,
			@DefaultValue("") @QueryParam("protocolName") String protocolName,
			@DefaultValue("") @QueryParam("protocolVersion") String protocolVersion){

		try { 
			ProtocolManager protocolManager = (ProtocolManager) SpringApplicationContext.getBean(httpRequest, "protocolManager");
			ProtocolBO protocolBO = (ProtocolBO) SpringApplicationContext.getBean(httpRequest, "protocolBO");
			
			if (!SpringSecurityUtil.isUserLoggedIn())
				return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

			ProtocolBean bean = protocolManager.getProtocol(httpRequest, protocolType, protocolName, protocolVersion);
			SimpleSubmitProtocolBean view = new SimpleSubmitProtocolBean();
			protocolBO.transferProtocolBeanForEdit(bean, view, httpRequest);

			return Response.ok(view).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();

		} catch (Exception e) {
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while viewing for protocol " + e.getMessage())).build();

		}
	}

	@POST
	@Path("/submitForReview")
	@Produces ("application/json")
	public Response submitForReview(@Context HttpServletRequest httpRequest, DataReviewStatusBean reviewBean)
	{
		try {
			ProtocolBO protocolBO = (ProtocolBO) SpringApplicationContext.getBean(httpRequest, "protocolBO");

			if (!SpringSecurityUtil.isUserLoggedIn())
				return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

			String result = protocolBO.submitForReview(httpRequest, reviewBean);

			return Response.ok(result).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();
		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while deleting the access " + e.getMessage())).build();
		}
	}

	@GET
	@Path("/deleteProtocolById")
	@Produces ("application/json")
	public Response deleteProtocolById(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam("protocolId") String protocolId)
	{
		try {
			ProtocolBO protocolBO = (ProtocolBO) SpringApplicationContext.getBean(httpRequest, "protocolBO");

			if (!SpringSecurityUtil.isUserLoggedIn())
				return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

			List<String> msgs = protocolBO.deleteProtocolById(protocolId, httpRequest);

			return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();

		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while deleting the protocol " + e.getMessage())).build();
		}
	}

	@GET
	@Path("/getProtocolById")
	@Produces ("application/json")
	public Response getProtocolById(@Context HttpServletRequest httpRequest,
								@DefaultValue("") @QueryParam("protocolId") String protocolId){

		try {
			ProtocolManager protocolManager = (ProtocolManager) SpringApplicationContext.getBean(httpRequest, "protocolManager");
			ProtocolBO protocolBO = (ProtocolBO) SpringApplicationContext.getBean(httpRequest, "protocolBO");

			if (!SpringSecurityUtil.isUserLoggedIn())
				return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

			ProtocolBean bean = protocolManager.getProtocolById(protocolId);
			SimpleSubmitProtocolBean view = new SimpleSubmitProtocolBean();
			protocolBO.transferProtocolBeanForEdit(bean, view, httpRequest);

			return Response.ok(view).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();

		} catch (Exception e) {
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while viewing for protocol " + e.getMessage())).build();

		}
	}
}
