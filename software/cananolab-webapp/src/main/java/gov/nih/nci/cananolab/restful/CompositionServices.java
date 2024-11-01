package gov.nih.nci.cananolab.restful;

import javax.json.Json;
import javax.json.JsonBuilderFactory;
import javax.json.JsonObject;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.MediaType;

import org.apache.logging.log4j.LogManager;

import gov.nih.nci.cananolab.dto.particle.composition.CompositionBean;
import gov.nih.nci.cananolab.restful.sample.CompositionBO;
import gov.nih.nci.cananolab.restful.view.SimpleCompositionBean;
import gov.nih.nci.cananolab.ui.form.CompositionForm;
import org.apache.logging.log4j.Logger;

@Path("/composition")
public class CompositionServices {

	private static final Logger logger = LogManager.getLogger(CompositionServices.class);

	@GET
	@Path("/summaryView")
	@Produces ("application/json")
	public Response view(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam("sampleId") String sampleId)
	{		
		try { 
			CompositionForm form = new CompositionForm();
			form.setSampleId(sampleId);

			CompositionBO compositionBO = (CompositionBO) SpringApplicationContext.getBean(httpRequest, "compositionBO");

			CompositionBean compBean = compositionBO.summaryView(form, httpRequest);
			SimpleCompositionBean view = new SimpleCompositionBean();
			view.transferCompositionBeanForSummaryView(compBean);

			return Response.ok(view).build();

		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			// WJRL 2/24/23: An internal exception caught here is unexpected and should not return OK with just a status reporting an error.
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity("Error while building the composition results").build();
		}
	}
	
	@GET
	@Path("/summaryPrint")
	@Produces ("application/json")
	public Response summaryPrint(@Context HttpServletRequest httpRequest,  
			@DefaultValue("") @QueryParam("sampleId") String sampleId)
	{
		try { 
			CompositionForm form = new CompositionForm();
			form.setSampleId(sampleId);

			CompositionBO compositionBO = (CompositionBO) SpringApplicationContext.getBean(httpRequest, "compositionBO");

			CompositionBean compBean = compositionBO.summaryPrint(form, httpRequest);
			SimpleCompositionBean view = new SimpleCompositionBean();
			view.transferCompositionBeanForSummaryView(compBean);

			return Response.ok(view).build();
		} catch (Exception e) {
			JsonBuilderFactory factory = Json.createBuilderFactory(null);
			JsonObject value = factory.createObjectBuilder()
					.add("status", "Error while printing the file").build();

			return Response.ok(value).build();
//			return Response.ok("Error while printing the file").build();
		}
	}

	@GET
	@Path("/summaryExport")
	@Produces ("application/vnd.ms-excel")
	public Response summaryExport(@Context HttpServletRequest httpRequest, @Context HttpServletResponse httpResponse, 
			@DefaultValue("") @QueryParam("sampleId") String sampleId, @DefaultValue("") @QueryParam("type") String type)
	{
		try { 
			CompositionForm form = new CompositionForm();
			form.setSampleId(sampleId);

			CompositionBO compositionBO = (CompositionBO) SpringApplicationContext.getBean(httpRequest, "compositionBO");

			String result = compositionBO.summaryExport(form, type, httpRequest, httpResponse);

			return Response.ok("").build();
		} catch (Exception e) {
			//TODO - Test the front end. Does the Angular accept this?
			return Response.ok("Error while exporting the file").build();
		}
	}

	@GET
	@Path("/downloadImage")
	@Produces({"image/png", "application/json"})
	public Response characterizationImage(@Context HttpServletRequest httpRequest, @Context HttpServletResponse httpResponse,
	                                      @DefaultValue("") @QueryParam("sampleId") String sampleId,
	                                      @DefaultValue("") @QueryParam("fileId") String fileId)
	{
		return download(httpRequest, httpResponse, sampleId, fileId);
	}

	@GET
	@Path("/download")
	@Produces({"image/png", "application/json", "application/octet-stream"})
	public Response download(@Context HttpServletRequest httpRequest, @Context HttpServletResponse httpResponse,
	                         @DefaultValue("") @QueryParam("sampleId") String sampleId,
	                         @DefaultValue("") @QueryParam("fileId") String fileId)
	{
		try {
			CompositionBO compositionBO = (CompositionBO) SpringApplicationContext.getBean(httpRequest, "compositionBO");
			String result = compositionBO.download(sampleId, fileId, httpRequest, httpResponse);

			return Response.ok(result).build();
		}
		catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			String msgAsJson = "\"" + "Error while downloading the file " + e.getMessage() + "\"";
			return (Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(msgAsJson).type(MediaType.APPLICATION_JSON).build());
		}
	}
}
