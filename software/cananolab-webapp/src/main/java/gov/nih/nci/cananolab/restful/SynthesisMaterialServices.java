package gov.nih.nci.cananolab.restful;

import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialBean;
import gov.nih.nci.cananolab.restful.synthesis.SynthesisMaterialBO;
import gov.nih.nci.cananolab.restful.util.CommonUtil;
import gov.nih.nci.cananolab.restful.view.SimpleAdvancedSearchSynthesisBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleFileBean;
import gov.nih.nci.cananolab.util.Constants;
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
public class SynthesisMaterialServices {

    /**
     *
     * @param httpRequest
     * @param sampleId - id of sample containing synthesis to be viewed
     * @return Map of dropdown filler values for materials
     */
    @GET
    @Path("/setup")
    @Produces("application/json")
    public Response setup(@Context HttpServletRequest httpRequest, @QueryParam("sampleId") String sampleId) {

        try {
            SynthesisMaterialBO synthesisMaterialBO =
                    (SynthesisMaterialBO) SpringApplicationContext.getBean(httpRequest, "synthesisMaterialBO");
            Map<String, Object> dropdownMap = synthesisMaterialBO.setupNew(sampleId, httpRequest);
            return Response.ok(dropdownMap).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();

        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while setting up drop down lists. " + e.getMessage())).build();

        }
    }

    /**
     *
     * @param httpRequest
     * @param sampleId
     * @param synMaterialId - id of the synthesis material to be edited
     * @return  SimpleSynthesisMaterialBean
     */
    @GET
    @Path("/edit")
    @Produces ("application/json")
    public Response edit(@Context HttpServletRequest httpRequest, @QueryParam("sampleId") String sampleId, @QueryParam("synMaterialId") String synMaterialId) {

        try {
            SynthesisMaterialBO synthesisMaterialBO =
                    (SynthesisMaterialBO) SpringApplicationContext.getBean(httpRequest, "synthesisMaterialBO");
            if (!SpringSecurityUtil.isUserLoggedIn())
                return Response.status(Response.Status.UNAUTHORIZED)
                        .entity("Session expired").build();

            SimpleSynthesisMaterialBean synth = synthesisMaterialBO.setupUpdate(sampleId, synMaterialId, httpRequest);

            List<String> errors = synth.getErrors();
            return (errors == null || errors.size() == 0) ?
                    Response.ok(synth).build() :
                    Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(errors).build();

        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while viewing the Synthesis Entity. " + e.getMessage())).build();

        }
    }

    @POST
    @Path("/saveFile")
    @Produces ("application/json")
    public Response saveFile(@Context HttpServletRequest httpRequest, SimpleSynthesisMaterialBean simpleSynthesisMaterialBean) {
        try {
            SynthesisMaterialBO synthesisMaterialBO = (SynthesisMaterialBO) SpringApplicationContext.getBean(httpRequest,"synthesisMaterialBO");

            if (!SpringSecurityUtil.isUserLoggedIn())
                return Response.status(Response.Status.UNAUTHORIZED)
                        .entity(Constants.MSG_SESSION_INVALID).build();

            SimpleSynthesisMaterialBean synthesisMaterialBean = synthesisMaterialBO.saveFile(simpleSynthesisMaterialBean,httpRequest);
            List<String> errors = synthesisMaterialBean.getErrors();
            return (errors == null || errors.size() == 0) ?
                    Response.ok(synthesisMaterialBean).build() :
                    Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(errors).build();
        } catch (Exception e){
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while saving the Syn Mat File. " + e.getMessage())).build();
        }
    }

    /**
     *
     * @param httpRequest
     * @param simpleSynthesisMaterialBean
     * @return SimpleSynthesisMaterialBean with file removed
     */
    @POST
    @Path("/removeFile")
    @Produces ("application/json")
    public Response removeFile(@Context HttpServletRequest httpRequest,SimpleSynthesisMaterialBean simpleSynthesisMaterialBean) {
        try{
            SynthesisMaterialBO synthesisMaterialBO = (SynthesisMaterialBO) SpringApplicationContext.getBean(httpRequest,"synthesisMaterialBO");
            if (!SpringSecurityUtil.isUserLoggedIn()) {
                return Response.status(Response.Status.UNAUTHORIZED)
                        .entity(Constants.MSG_SESSION_INVALID).build();
            }
            SimpleSynthesisMaterialBean synthesisMaterialBean
                    = synthesisMaterialBO.removeFile(simpleSynthesisMaterialBean, httpRequest);

            List<String> errors = synthesisMaterialBean.getErrors();
            return (errors == null || errors.size() == 0) ?
                    Response.ok(synthesisMaterialBean).build() :
                    Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(errors).build();
        }catch (Exception e){
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList("Error while removing the File " + e.getMessage())).build();

        }
    }

    /**
     *
     * @param httpRequest
     * @param simpleSynthesisMaterialBean
     * @return SimpleSynthesisMaterialBean with changes incorporated
     */
    @POST
    @Path("/submit")
    @Produces ("application/json")
    public Response submit(@Context HttpServletRequest httpRequest, SimpleSynthesisMaterialBean simpleSynthesisMaterialBean) {
        try{
            SynthesisMaterialBO synthesisMaterialBO = (SynthesisMaterialBO) SpringApplicationContext.getBean(httpRequest,"synthesisMaterialBO");
            if (!SpringSecurityUtil.isUserLoggedIn())
                return Response.status(Response.Status.UNAUTHORIZED)
                        .entity(Constants.MSG_SESSION_INVALID).build();
            List<String> msgs = synthesisMaterialBO.create(simpleSynthesisMaterialBean, httpRequest);
            return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();

        } catch (Exception e){
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while saving the synthesis material :" + e.getMessage())).build();

        }
    }

    /**
     *
     * @param httpRequest
     * @param simpleSynthesisMaterialBean
     * @return  List of messages confirming deletion
     */
    @POST
    @Path("/delete")
    @Produces ("application/json")
    public Response delete(@Context HttpServletRequest httpRequest, SimpleSynthesisMaterialBean simpleSynthesisMaterialBean) {
        try{
            SynthesisMaterialBO synthesisMaterialBO = (SynthesisMaterialBO) SpringApplicationContext.getBean(httpRequest,"synthesisMaterialBO");
            if (!SpringSecurityUtil.isUserLoggedIn())
                return Response.status(Response.Status.UNAUTHORIZED)
                        .entity(Constants.MSG_SESSION_INVALID).build();
            List<String> msgs = synthesisMaterialBO.delete(simpleSynthesisMaterialBean, httpRequest);
            return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();

        }catch (Exception e){
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while deleting the synthesis material " + e.getMessage())).build();
        }
    }
}

