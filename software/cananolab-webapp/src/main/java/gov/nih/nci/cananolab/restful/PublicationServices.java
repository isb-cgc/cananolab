package gov.nih.nci.cananolab.restful;

import java.io.FileNotFoundException;
import java.io.InputStream;
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

import gov.nih.nci.cananolab.exception.ApplicationProviderException;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.exception.PublicationException;
import gov.nih.nci.cananolab.exception.UserInputException;
import gov.nih.nci.cananolab.restful.protocol.ProtocolBO;
import gov.nih.nci.cananolab.restful.util.PropertyUtil;
import gov.nih.nci.cananolab.system.applicationservice.ApplicationException;
import org.apache.logging.log4j.LogManager;

import gov.nih.nci.cananolab.domain.common.Publication;
import gov.nih.nci.cananolab.dto.common.DataReviewStatusBean;
import gov.nih.nci.cananolab.dto.common.PublicationBean;
import gov.nih.nci.cananolab.dto.common.PublicationSummaryViewBean;
import gov.nih.nci.cananolab.restful.publication.PublicationBO;
import gov.nih.nci.cananolab.restful.publication.PublicationManager;
import gov.nih.nci.cananolab.restful.publication.SearchPublicationBO;
import gov.nih.nci.cananolab.restful.util.CommonUtil;
import gov.nih.nci.cananolab.restful.util.PublicationImageCache;
import gov.nih.nci.cananolab.restful.view.SimplePublicationSummaryViewBean;
import gov.nih.nci.cananolab.restful.view.SimplePublicationWithSamplesBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSubmitPublicationBean;
import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;
import gov.nih.nci.cananolab.security.CananoUserDetails;
import gov.nih.nci.cananolab.ui.form.PublicationForm;
import gov.nih.nci.cananolab.ui.form.SearchPublicationForm;
import gov.nih.nci.cananolab.util.Constants;
import gov.nih.nci.cananolab.util.PropertyUtils;
import org.apache.logging.log4j.Logger;

@Path("/publication")
public class PublicationServices {
	private static final Logger logger = LogManager.getLogger(PublicationServices.class);

	@GET
	@Path("/summaryView")
	@Produces ("application/json")
	public Response view(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam("sampleId") String sampleId)
	{
		try { 
			PublicationBO publicationBO = (PublicationBO) SpringApplicationContext.getBean(httpRequest, "publicationBO");

			PublicationSummaryViewBean pubBean = publicationBO.summaryView(sampleId, httpRequest);
			SimplePublicationSummaryViewBean view = new SimplePublicationSummaryViewBean();
			view.transferPublicationBeanForSummaryView(pubBean);

			// return Response.ok(view).build();
			return Response.ok(view).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();

		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while viewing for publication " + e.getMessage())).build();
		}
	}

	@GET
	@Path("/download")
	@Produces({"application/pdf", "application/json", "application/octet-stream"})
	public Response download(@Context HttpServletRequest httpRequest, @Context HttpServletResponse httpResponse,
	                         @DefaultValue("") @QueryParam("publicationId") String pubId,
	                         @DefaultValue("") @QueryParam("fileId") String fileId)
	{
		try { 
			PublicationBO publicationBO = (PublicationBO) SpringApplicationContext.getBean(httpRequest, "publicationBO");

			String result = publicationBO.download(pubId, fileId, httpRequest, httpResponse);

			return Response.ok(result).build();

		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			String msgAsJson = "\"" + "Error while downloading the file " + e.getMessage() + "\"";
			return (Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(msgAsJson).type(MediaType.APPLICATION_JSON).build());
		}
	}

	@GET
	@Path("/summaryPrint")
	@Produces ("application/json")
	public Response summaryPrint(@Context HttpServletRequest httpRequest,  
			@DefaultValue("") @QueryParam("sampleId") String sampleId)
	{
		try { 
			PublicationBO publicationBO = (PublicationBO) SpringApplicationContext.getBean(httpRequest, "publicationBO");

			PublicationSummaryViewBean summaryBean = publicationBO.summaryView(sampleId, httpRequest);
			SimplePublicationSummaryViewBean view = new SimplePublicationSummaryViewBean();
			view.transferPublicationBeanForSummaryView(summaryBean);
			return Response.ok(view).build();
		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while printing the file" + e.getMessage())).build();
		}
	}

	@GET
	@Path("/summaryExport")
	@Produces ("application/vnd.ms-excel")
	public Response summaryExport(@Context HttpServletRequest httpRequest, @Context HttpServletResponse httpResponse, 
			@DefaultValue("") @QueryParam("sampleId") String sampleId, @DefaultValue("") @QueryParam("type") String type)
	{
		try { 
			PublicationBO publicationBO = (PublicationBO) SpringApplicationContext.getBean(httpRequest, "publicationBO");
			String result = publicationBO.summaryExport(sampleId, type, httpRequest, httpResponse);
			return Response.ok("").build();
		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while exporting the file" + e.getMessage())).build();
		}
	}
	
	@GET
	@Path("/summaryEdit")
	@Produces ("application/json")
	public Response summaryEdit(@Context HttpServletRequest httpRequest, 
			@DefaultValue("") @QueryParam("sampleId") String sampleId)
	{
		try { 
			PublicationBO publicationBO = (PublicationBO) SpringApplicationContext.getBean(httpRequest, "publicationBO");

			PublicationForm form = new PublicationForm();
			form.setSampleId(sampleId);
			SimplePublicationSummaryViewBean pubBean = publicationBO.summaryEdit(sampleId, httpRequest);

			// return Response.ok(view).build();
			return Response.ok(pubBean).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();
		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while viewing the publication results" + e.getMessage())).build();

		}
	}

	@GET
	@Path("/setup")
	@Produces ("application/json")
	public Response setup(@Context HttpServletRequest httpRequest)
	{
		try { 
			SearchPublicationBO searchPublicationBO = (SearchPublicationBO) SpringApplicationContext.getBean(httpRequest, "searchPublicationBO");
			Map<String, Object> dropdownMap = searchPublicationBO.setup(httpRequest);

			// Curator can directly set public access when create publication
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
	@Path("/searchPublication")
	@Produces ("application/json")
	public Response searchPublication(@Context HttpServletRequest httpRequest, SearchPublicationForm searchForm )
	{
		try {
			SearchPublicationBO searchPublicationBO = (SearchPublicationBO) SpringApplicationContext.getBean(httpRequest, "searchPublicationBO");
			List results = searchPublicationBO.search(searchForm, httpRequest);

			Object result = results.get(0);
			if (result instanceof String) {
				return Response.status(Response.Status.NOT_FOUND).entity(result).build();
			} else
				return Response.ok(results).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();

		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while searching for publication " + e.getMessage())).build();
		}
	}

	@GET
	@Path("/checkWriteAccess")
	@Produces("application/json")
	public Response checkWriteAccess(@Context HttpServletRequest httpRequest,
	                                 @DefaultValue("") @QueryParam("publicationId") String publicationId)
	{
		logger.debug("In checkWriteAccess");

		if (!SpringSecurityUtil.isUserLoggedIn()) {
			logger.info("User not logged in");
			return Response.ok(false).build();
		}

		PublicationBO publicationBO = (PublicationBO) SpringApplicationContext.getBean(httpRequest, "publicationBO");

		if (!SpringSecurityUtil.isUserLoggedIn())
			return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

		try {
			if (!publicationBO.isPublicationEditableByCurrentUser(httpRequest, publicationId)) {
				logger.info("User has no write access to publication");
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
	@Path("/edit")
	@Produces ("application/json")
	public Response edit(@Context HttpServletRequest httpRequest, 
			@DefaultValue("") @QueryParam("publicationId") String publicationId,@DefaultValue("") @QueryParam("sampleId") String sampleId)
	{
		try
		{ 
			PublicationBO publicationBO = (PublicationBO) SpringApplicationContext.getBean(httpRequest, "publicationBO");
			if (!SpringSecurityUtil.isUserLoggedIn()) 
				return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();
			
			SimpleSubmitPublicationBean view = publicationBO.setupUpdate(publicationId,sampleId, httpRequest);

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
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while viewing for publication " + e.getMessage())).build();

		}
	}

	@GET
	@Path("/getSamples")
	@Produces ("application/json")
	public Response getSamples(@Context HttpServletRequest httpRequest,
			@DefaultValue("") @QueryParam("searchStr") String searchStr)
	{
		try { 
			PublicationBO pubBO = (PublicationBO) SpringApplicationContext.getBean(httpRequest, "publicationBO");

			if (!SpringSecurityUtil.isUserLoggedIn())
				return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

			String[] sampleList = pubBO.getMatchedSampleNames(searchStr, httpRequest);
			return Response.ok(sampleList).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();

			// return Response.ok(dropdownMap).build();
		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return Response.status(Response.Status.NOT_FOUND).entity(CommonUtil.wrapErrorMessageInList("Problem getting all sample names for publication submission"+ e.getMessage())).build();
		}
	}

	@POST
	@Path("/submitPublication")
	@Produces ("application/json")
	public Response submitPublication(@Context HttpServletRequest httpRequest, SimpleSubmitPublicationBean form)
	{

		//
		// WJRL 11/1/23: It appears this routine is called both to add a publication off of
		// a sample, and to create a publication from the publications operations page. In the
		// latter case, you can attach a sample (theoretically, multiple samples, but that appears
		// to be broken) when it is created.
		//
		System.out.println("in submitPublication");
		try {
			PublicationBO pubBO = (PublicationBO) SpringApplicationContext.getBean(httpRequest, "publicationBO");

			if (!SpringSecurityUtil.isUserLoggedIn()) 
				return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

			List<String> msgs = pubBO.create(form, httpRequest);
			// Issue 80: NPE thrown in msgs.add.
			System.out.println("Issue 80 debug msgs " + msgs);
			if (msgs != null) {
				for (int i = 0; i < msgs.size(); i++) {
					System.out.println("Issue 80 debug message " + msgs.get(i));
				}
			}
			System.out.println("Issue 80 debug form " + form);
			if (form != null) {
				System.out.println("Issue 80 debug fileID " + form.getFileId());
			}
			// END Issue 80 debug code
			// Should fix 80:
			Long fileID = form.getFileId();
			msgs.add((fileID == null) ? "No file provided" : fileID.toString());
			// This is a hack to band-aid issue 80. We want the error message to go back and get displayed, but it is
			// unclear what other messages may be returned that represent errors to report. The only reason 80 got an
			// error message shown at all was that it invoked an NPE
			// Also, returning a 500 error for a client error (40x) is bogus, but minimizing difference for now.
			if ((fileID == null) && (msgs != null) && !msgs.isEmpty()) {
				return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while submitting the publication " + msgs.get(0))).build();
			}

			return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();
		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while submitting the publication " + e.getMessage())).build();
		}
	}

	@GET
	@Path("/searchById")
	@Produces("application/json")
	public Response searchById(@Context HttpServletRequest httpRequest, 
			@DefaultValue("") @QueryParam("id") String id, @QueryParam("type") String type) {
		PublicationManager pubManager = (PublicationManager) SpringApplicationContext.getBean(httpRequest, "publicationManager");

		try {
			SimplePublicationWithSamplesBean result = pubManager.searchPublicationById(httpRequest, id, type);

			return (result.getErrors().size() > 0) ?
					Response.status(Response.Status.NOT_FOUND).entity(result.getErrors()).build() :
					Response.ok(result).build();
		} catch (NoAccessException ioe) {
			// WJRL 3/23 This comes back with a generic message from the depths about how the
			// user is not allowed to access this function, when in fact it is just a
			// hit on a non-public publication. Issue a sane message
			logger.info(ioe.getMessage());
			String msg = PropertyUtil.getPropertyReplacingAllTokens("publication", "errors.notFound",
																	new Object[] {id, type});
			return (Response.status(Response.Status.NOT_FOUND).entity(msg).build());
		} catch (UserInputException uiex) {
			return Response.status(Response.Status.BAD_REQUEST).entity(uiex.getMessage()).build();
		} catch (RuntimeException | PublicationException |
			     ApplicationException| ApplicationProviderException ex) {
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(ex.getMessage()).build();
	    }
	}	

	@GET
	@Path("/getPubmedPublication")
	@Produces ("application/json")
	public Response getPubmedPublication(@Context HttpServletRequest httpRequest,
			@DefaultValue("") @QueryParam("pubmedId") String pubmedId)
	{
		try
		{ 
			PublicationManager pubManager = (PublicationManager) SpringApplicationContext.getBean(httpRequest, "publicationManager");

			if (!SpringSecurityUtil.isUserLoggedIn())
				return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

			String value = pubManager.getExistingPubMedPublication(pubmedId, httpRequest);
			return (value == null) ?
					Response.status(Response.Status.NOT_FOUND).entity("No pub found").build() :
						Response.ok(value).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();

					// return Response.ok(dropdownMap).build();
		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return Response.status(Response.Status.NOT_FOUND).entity(CommonUtil.wrapErrorMessageInList("Problem getting the publication Id"+ e.getMessage())).build();
		}
	}
	
	@GET
	@Path("/retrievePubMedInfo")
	@Produces ("application/json")
	public Response retrievePubMedInfo(@Context HttpServletRequest httpRequest,
			@DefaultValue("") @QueryParam("pubmedId") String pubmedId)
	{
		try { 
			PublicationManager pubManager = (PublicationManager) SpringApplicationContext.getBean(httpRequest, "publicationManager");

			if (!SpringSecurityUtil.isUserLoggedIn())
				return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

			PublicationForm form = new PublicationForm();
			PublicationBean pubBean = new PublicationBean();
			Publication domainFile = new Publication();
			pubBean.setDomainFile(domainFile);
			form.setPublicationBean(pubBean);

			PublicationBean pBean = pubManager.retrievePubMedInfo(pubmedId, form, httpRequest);
			return Response.ok(pBean).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();

			// return Response.ok(dropdownMap).build();
		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return Response.status(Response.Status.NOT_FOUND).entity(CommonUtil.wrapErrorMessageInList("Problem retrieving the pubmed information"+ e.getMessage())).build();
		}
	}

	@POST
	@Path("/saveAccess")
	@Produces ("application/json")
	public Response saveAccess(@Context HttpServletRequest httpRequest, SimpleSubmitPublicationBean bean) {

		try {
			PublicationBO pubBO = (PublicationBO) SpringApplicationContext.getBean(httpRequest, "publicationBO");

			System.out.println("Bean ID in " + bean.getFileId());
			if (!SpringSecurityUtil.isUserLoggedIn())
				return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

			if (pubBO == null) {
				throw new Exception("PublicationServices:saveAccess - PublicationBO is null");
			}

			SimpleSubmitPublicationBean view = pubBO.saveAccess(bean, httpRequest);

			System.out.println("Bean ID out " + view.getFileId());
			List<String> errors = view.getErrors();
			if (errors != null) {
				for (int i = 0; i < errors.size(); i++) {
					System.out.println("saveAccess ERROR " + errors.get(i));
				}
			}

			return (errors == null || errors.size() == 0) ?
					Response.ok(view).build() :
						Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(errors).build();
		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while saving the access to publication " + e.getMessage())).build();
		}
	}
	@POST
	@Path("/deletePublication")
	@Produces ("application/json")
	public Response deletePublication(@Context HttpServletRequest httpRequest, SimpleSubmitPublicationBean form) {

		try {
			PublicationBO pubBO = (PublicationBO) SpringApplicationContext.getBean(httpRequest, "publicationBO");

			if (!SpringSecurityUtil.isUserLoggedIn())
				return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

			List<String> msgs = pubBO.delete(form, httpRequest);
			return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();
		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while deleting the publication " + e.getMessage())).build();
		}
	}

	@POST
	@Path("/deleteAccess")
	@Produces ("application/json")
	public Response deleteAccess(@Context HttpServletRequest httpRequest, SimpleSubmitPublicationBean form) {

		try {
			PublicationBO pubBO = (PublicationBO) SpringApplicationContext.getBean(httpRequest, "publicationBO");

			if (!SpringSecurityUtil.isUserLoggedIn()) 
				return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

			SimpleSubmitPublicationBean bean = pubBO.deleteAccess(form, httpRequest);

			List<String> errors = bean.getErrors();
			return (errors == null || errors.size() == 0) ?
					Response.ok(bean).build() :
						Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(errors).build();
		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while deleting the access " + e.getMessage())).build();
		}
	}

	@POST
	@Path("/removeFromSample")
	@Produces ("application/json")
	public Response removeFromSample(@Context HttpServletRequest httpRequest, SimpleSubmitPublicationBean form)
	{
		try {
			PublicationBO pubBO = (PublicationBO) SpringApplicationContext.getBean(httpRequest, "publicationBO");

			if (!SpringSecurityUtil.isUserLoggedIn())
				return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

			SimplePublicationSummaryViewBean bean = pubBO.removeFromSample(form, httpRequest);

			List<String> errors = bean.getErrors();
			return (errors == null || errors.size() == 0) ?
					Response.ok(bean).build() :
						Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(errors).build();
		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while deleting the access " + e.getMessage())).build();
		}
	}

	@POST
	@Path("/submitForReview")
	@Produces ("application/json")
	public Response submitForReview(@Context HttpServletRequest httpRequest, DataReviewStatusBean dataReviewStatusBean)
	{	
		try {
			PublicationBO publicationBO = (PublicationBO) SpringApplicationContext.getBean(httpRequest, "publicationBO");

			if (!SpringSecurityUtil.isUserLoggedIn())
				return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

			String result = publicationBO.submitForReview(httpRequest, dataReviewStatusBean);

			return Response.ok(result).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();
		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while deleting the access " + e.getMessage())).build();
		}
	}

	@GET
	@Path("/searchByIdImage")
	@Produces({"image/png", "application/json"})
	public Response searchByIdImage(@Context HttpServletRequest httpRequest, 
			@DefaultValue("") @QueryParam("type") String type, @QueryParam("id") String id)
	{
		PublicationManager pubManager = (PublicationManager) SpringApplicationContext.getBean(httpRequest, "publicationManager");

		String fileRoot = PropertyUtils.getProperty(Constants.CANANOLAB_PROPERTY, "fileRepositoryDir");

		try {
			SimplePublicationWithSamplesBean result = pubManager.searchPublicationById(httpRequest, id, type);

			return (result.getErrors().size() > 0) ?
					Response.ok(buildTranspImage(fileRoot)).build() :
						Response.ok(buildCaNanoImage(fileRoot)).build();
		} 
		catch (Exception e) {
			try {
				logger.info("PublicationServices.searchByIdImage search publication by ID error", e);
				return Response.ok(buildTranspImage(fileRoot)).build();
			}
			catch (FileNotFoundException e1) {
				logger.error("PublicationServices.searchByIdImage 'doi-transparent.png' image file not found", e);
				return Response.serverError().build();
			}
		}
	}	

	@GET
	@Path("/deletePublicationById")
	@Produces ("application/json")
	public Response deletePublicationById(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam("publicationId") String publicationId)
	{	
		try {
			PublicationBO pubBO = (PublicationBO) SpringApplicationContext.getBean(httpRequest, "publicationBO");

			if (!SpringSecurityUtil.isUserLoggedIn())
				return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

			List<String> msgs = pubBO.deletePublicationById(publicationId, httpRequest);

			return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();

		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while deleting the publication " + e.getMessage())).build();
		}
	}

	private InputStream buildCaNanoImage(String fileRoot) throws FileNotFoundException {
		return PublicationImageCache.getInstance().getCaNanoImage(fileRoot);
	}

	private InputStream buildTranspImage(String fileRoot) throws FileNotFoundException {
		return PublicationImageCache.getInstance().getTranspImage(fileRoot);
	}

}

