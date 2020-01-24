package gov.nih.nci.cananolab.restful;

import gov.nih.nci.cananolab.restful.synthesis.SynthesisFunctionalizationBO;
import gov.nih.nci.cananolab.restful.util.CommonUtil;
import gov.nih.nci.cananolab.restful.view.edit.SimpleFunctionalizingEntityBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisFunctionalizationBean;
import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;
import gov.nih.nci.cananolab.util.Constants;
import org.apache.log4j.Logger;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import java.util.List;
import java.util.Map;

@Path("/synthesisFunctionalizingEntity")
public class SynthesisFunctionalizationServices {
    private static final Logger logger = Logger.getLogger(FunctionalizingEntityServices.class);

    @GET
    @Path("/setup")
    @Produces("application/json")
    public Response setup(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam("sampleId") String sampleId, @DefaultValue("") @QueryParam("dataId") String dataId)  {

        try {
            SynthesisFunctionalizationBO simpleSynthesisFunctionalizationBO =
                    (SynthesisFunctionalizationBO) SpringApplicationContext.getBean(httpRequest, "synthesisFunctionalizationBO");

            if (!SpringSecurityUtil.isUserLoggedIn()) {
                return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();
            }

            SimpleSynthesisFunctionalizationBean bean = simpleSynthesisFunctionalizationBO.setupUpdate(sampleId, dataId, httpRequest);

            List<String> errors = bean.getErrors();
            return (errors == null || errors.size() == 0) ?
                    Response.ok(bean).build() :
                    Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(errors).build();

        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while viewing the synthesisFunctionalizationBO Entity" + e.getMessage())).build();
        }
    }




    @GET
    @Path("/edit")
    @Produces ("application/json")
    public Response edit(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam("sampleId") String sampleId, @DefaultValue("") @QueryParam("dataId") String dataId) {

        try {
            SynthesisFunctionalizationBO simpleSynthesisFunctionalizationBO =
                    (SynthesisFunctionalizationBO) SpringApplicationContext.getBean(httpRequest, "synthesisFunctionalizationBO");

            if (!SpringSecurityUtil.isUserLoggedIn()) {
                return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();
            }

            SimpleSynthesisFunctionalizationBean bean = simpleSynthesisFunctionalizationBO.setupUpdate(sampleId, dataId, httpRequest);

            List<String> errors = bean.getErrors();
            return (errors == null || errors.size() == 0) ?
                    Response.ok(bean).build() :
                    Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(errors).build();

        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while viewing the synthesisFunctionalizationBO Entity" + e.getMessage())).build();
        }
    }


}