package gov.nih.nci.cananolab.restful;

import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisBean;
import gov.nih.nci.cananolab.restful.synthesis.SynthesisBO;
import gov.nih.nci.cananolab.restful.util.CommonUtil;
import gov.nih.nci.cananolab.restful.view.SimpleSynthesisBean;
import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;
import gov.nih.nci.cananolab.ui.form.SynthesisForm;
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

@Path("/synthesis")
public class SynthesisServices {
    private static final Logger logger = Logger.getLogger(NanomaterialEntityServices.class);


    @GET
    @Path("/summaryView")
    @Produces ("application/json")
    public Response view(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam("sampleId") String sampleId)
    {
        try {
            SynthesisForm form = new SynthesisForm();
            form.setSampleId(sampleId);

            SynthesisBO synthesisBO = (SynthesisBO) SpringApplicationContext.getBean(httpRequest, "synthesisBO");

            SynthesisBean synthesisBean = synthesisBO.summaryView(form, httpRequest);
            SimpleSynthesisBean view = new SimpleSynthesisBean();
            view.transferSynthesisForSummaryView(synthesisBean);

            return Response.ok(view).build();

        } catch (Exception e) {
            return Response.ok("Error while viewing the composition results" +e).build();
        }
    }

    @GET
    @Path("/setup")
    @Produces("application/json")
    public Response setup(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam("sampleId") String sampleId) {

        try {
            SynthesisBO synthesisBO =
                    (SynthesisBO) SpringApplicationContext.getBean(httpRequest, "synthesisBO");
            Map<String, Object> dropdownMap = synthesisBO.setupNew(sampleId, httpRequest);
            return Response.ok(dropdownMap).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();

        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while setting up drop down lists" + e.getMessage())).build();

        }
    }

    @GET
    @Path("/edit")
    @Produces ("application/json")
    public Response edit(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam("sampleId") String sampleId, @DefaultValue("") @QueryParam("dataId") String dataId) {

        try {
            SynthesisBO synthesisBO =
                    (SynthesisBO) SpringApplicationContext.getBean(httpRequest, "synthesisBO");
            if (!SpringSecurityUtil.isUserLoggedIn())
                return Response.status(Response.Status.UNAUTHORIZED)
                        .entity("Session expired").build();

            SimpleSynthesisBean synth = synthesisBO.setupUpdate(sampleId, dataId, httpRequest);

            List<String> errors = synth.getErrors();
            return (errors == null || errors.size() == 0) ?
                    Response.ok(synth).build() :
                    Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(errors).build();

        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while viewing the Synthesis Entity" + e.getMessage())).build();

        }
    }
}
