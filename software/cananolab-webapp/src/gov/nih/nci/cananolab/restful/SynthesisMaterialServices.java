package gov.nih.nci.cananolab.restful;

import gov.nih.nci.cananolab.restful.synthesis.SynthesisMaterialBO;
import gov.nih.nci.cananolab.restful.util.CommonUtil;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisMaterialBean;
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

@Path("/synthesisMaterial")
public class SynthesisMaterialServices {
    private static final Logger logger = Logger.getLogger(SynthesisMaterialServices.class);
    @GET
    @Path("/setupEdit")
    @Produces("application/json")
    public Response setup(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam("sampleId") String sampleId)
    {
        if (!SpringSecurityUtil.isUserLoggedIn())
            return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();
        try {
            SynthesisMaterialBO synthesisMaterialBO = (SynthesisMaterialBO) SpringApplicationContext.getBean(httpRequest, "synthesisMaterialBO");
            Map<String, Object> dropdownMap = synthesisMaterialBO.setupNew(sampleId, httpRequest);
            return Response.ok(dropdownMap).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();

        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while setting up drop down lists" + e.getMessage())).build();
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
            SynthesisMaterialBO synthesisMaterialBO = (SynthesisMaterialBO) SpringApplicationContext.getBean(httpRequest, "synthesisMaterialBO");
            SimpleSynthesisMaterialBean synthesisMaterialBean = synthesisMaterialBO.setupUpdate(sampleId, dataId, httpRequest);
            List<String> errors = synthesisMaterialBean.getErrors();
            return (errors == null || errors.size() == 0) ?
                    Response.ok(synthesisMaterialBean).build() :
                    Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(errors).build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while viewing the Synthesis Material. " + e.getMessage())).build();

        }

    }




    }
