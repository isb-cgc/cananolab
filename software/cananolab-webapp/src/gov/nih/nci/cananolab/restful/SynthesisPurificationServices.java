package gov.nih.nci.cananolab.restful;

import gov.nih.nci.cananolab.restful.synthesis.SynthesisMaterialBO;
import gov.nih.nci.cananolab.restful.synthesis.SynthesisPurificationBO;
import gov.nih.nci.cananolab.restful.util.CommonUtil;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisPurificationBean;
import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;
import gov.nih.nci.cananolab.util.Constants;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import org.apache.log4j.Logger;

@Path("/synthesisPurification")
public class SynthesisPurificationServices {
    private static final Logger logger = Logger.getLogger(SynthesisPurificationServices.class);
    @GET
    @Path("/setup")
    @Produces("application/json")
    public Response setup(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam("sampleId") String sampleId)
    {
        if (!SpringSecurityUtil.isUserLoggedIn())
            return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();
        try{
            SynthesisPurificationBO synthesisPurificationBO = (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");
            Map<String, Object> dropdownMap = synthesisPurificationBO.setupNew(sampleId, httpRequest);
            return Response.ok(dropdownMap).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();

        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while setting up drop down lists. " + e.getMessage())).build();
        }
    }


    @GET
    @Path("/edit")
    @Produces ("application/json")
    public Response edit(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam("sampleId") String sampleId, @DefaultValue("") @QueryParam("dataId") String dataId) {
        if (!SpringSecurityUtil.isUserLoggedIn())
            return Response.status(Response.Status.UNAUTHORIZED)
                    .entity("Session expired").build();
        try{
            SynthesisPurificationBO synthesisPurificationBO = (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");
            SimpleSynthesisPurificationBean synthesisPurificationBean = synthesisPurificationBO.setupUpdate(sampleId, dataId, httpRequest);
            List<String> errors = synthesisPurificationBean.getErrors();
            return (errors == null || errors.size() == 0) ?
                    Response.ok(synthesisPurificationBean).build() :
                    Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(errors).build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while viewing the Synthesis Purification. " + e.getMessage())).build();

        }
    }


}
