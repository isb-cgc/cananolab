package gov.nih.nci.cananolab.restful;

import gov.nih.nci.cananolab.restful.synthesis.SynthesisMaterialBO;
import gov.nih.nci.cananolab.restful.util.CommonUtil;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisMaterialBean;
import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;

@Path("synthesisMaterial")
public class MaterialsServices {

    @GET
    @Path("/setup")
    @Produces("application/json")
    public Response setup(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam("sampleId") String sampleId) {

        try {
            SynthesisMaterialBO synthesisBO =
                    (SynthesisMaterialBO) SpringApplicationContext.getBean(httpRequest, "synthesisBO");
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
            SynthesisMaterialBO synthesisMaterialBO =
                    (SynthesisMaterialBO) SpringApplicationContext.getBean(httpRequest, "synthesisMaterialBO");
            if (!SpringSecurityUtil.isUserLoggedIn())
                return Response.status(Response.Status.UNAUTHORIZED)
                        .entity("Session expired").build();

            SimpleSynthesisMaterialBean synth = synthesisMaterialBO.setupUpdate(sampleId, dataId, httpRequest);

            List<String> errors = synth.getErrors();
            return (errors == null || errors.size() == 0) ?
                    Response.ok(synth).build() :
                    Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(errors).build();

        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while viewing the Synthesis Entity" + e.getMessage())).build();

        }
    }

    @POST
    @Path("/saveSynthesisMaterialElement")
    @Produces ("application/json")
    public Response saveSynthesisMaterialElement(@Context HttpServletRequest httpRequest, SimpleSynthesisMaterialBean simpleSynthesisMaterialBean) {
        //TODO write
        return null;
    }

    @POST
    @Path("/removeSynthesisMaterialElement")
    @Produces ("application/json")
    public Response removeSynthesisMaterialElement(@Context HttpServletRequest httpRequest, SimpleSynthesisMaterialBean simpleSynthesisMaterialBean) {
        //TODO write
        return null;
    }

    @POST
    @Path("/saveFile")
    @Produces ("application/json")
    public Response saveFile(@Context HttpServletRequest httpRequest, SimpleSynthesisMaterialBean simpleSynthesisMaterialBean) {
        //TODO write
        return null;
    }

    @POST
    @Path("/removeFile")
    @Produces ("application/json")
    public Response removeFile(@Context HttpServletRequest httpRequest, SimpleSynthesisMaterialBean simpleSynthesisMaterialBean) {
        //TODO write
        return null;
    }

    @POST
    @Path("/submit")
    @Produces ("application/json")
    public Response submit(@Context HttpServletRequest httpRequest, SimpleSynthesisMaterialBean simpleSynthesisMaterialBean) {
        //TODO write
        return null;
    }

    @POST
    @Path("/delete")
    @Produces ("application/json")
    public Response delete(@Context HttpServletRequest httpRequest, SimpleSynthesisMaterialBean simpleSynthesisMaterialBean) {
        //TODO write
        return null;
    }

    @POST
    @Path("/viewDetails")
    @Produces ("application/json")
    public Response viewDetails(@Context HttpServletRequest httpRequest, SimpleSynthesisMaterialBean simpleSynthesisMaterialBean) {
        //TODO write
        return null;
    }

}
