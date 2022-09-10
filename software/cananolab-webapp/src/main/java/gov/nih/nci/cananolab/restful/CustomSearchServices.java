package gov.nih.nci.cananolab.restful;

import gov.nih.nci.cananolab.restful.customsearch.CustomSearchBO;
import gov.nih.nci.cananolab.restful.customsearch.bean.CustomSearchBean;
import gov.nih.nci.cananolab.restful.util.CommonUtil;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@Path("/customsearch")
public class CustomSearchServices {

	private static final Logger logger = LogManager.getLogger(CustomSearchServices.class);

	@GET
	@Path("/search")
	@Produces ("application/json")
	public Response setup(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam("keyword") String keyword) {

		try { 
			CustomSearchBO customSearchBO =  (CustomSearchBO) SpringApplicationContext.getBean(httpRequest, "customSearchBO");

			List<CustomSearchBean> results = customSearchBO.search(httpRequest, keyword);
			return Response.ok(results).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();

			// return Response.ok(dropdownMap).build();
		} catch (Exception e) {
			logger.error(e.getMessage());
			e.printStackTrace();
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while setting up drop down lists" + e.getMessage())).build();
		}
	}

}
