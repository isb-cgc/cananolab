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
import java.util.Arrays;
import java.util.List;
import java.util.Map;

@Path("/synthesisFunctionalization")
public class SynthesisFunctionalizationServices {
    private static final Logger logger = Logger.getLogger(FunctionalizingEntityServices.class);

    @GET
    @Path("/setupX")
    @Produces("application/json")
    public Response setupX(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam("sampleId") String sampleId, @DefaultValue("") @QueryParam("dataId") String dataId)  {

        try {
            SynthesisFunctionalizationBO simpleSynthesisFunctionalizationBO =
                    (SynthesisFunctionalizationBO) SpringApplicationContext.getBean(httpRequest, "synthesisFunctionalizationBO");
            Map<String, Object> dropdownMap = simpleSynthesisFunctionalizationBO.setupNew(sampleId, httpRequest);

            return Response.ok(dropdownMap).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();

        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error SynthesisFunctionalizationServices.setup while setting up drop down lists" + e.getMessage())).build();

        }

    }

    @GET
    @Path("/setup")
    @Produces("application/json")
    public Response setup(@Context HttpServletRequest httpRequest, @QueryParam("sampleId") String sampleId) {

        try {
            SynthesisFunctionalizationBO simpleSynthesisFunctionalizationBO =
                    (SynthesisFunctionalizationBO) SpringApplicationContext.getBean(httpRequest, "synthesisFunctionalizationBO");
            Map<String, Object> dropdownMap = simpleSynthesisFunctionalizationBO.setupNew(sampleId, httpRequest);
            return Response.ok(dropdownMap).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();

        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while setting up drop down lists" + e.getMessage())).build();

        }
    }

    @POST
    @Path("/saveFile")
    @Produces ("application/json")
    public Response saveFile(@Context HttpServletRequest httpRequest, SimpleSynthesisFunctionalizationBean simpleSynthesisFunctionalizationBean) {
        try {
            SynthesisFunctionalizationBO synthesisFunctionalizationBO = (SynthesisFunctionalizationBO) SpringApplicationContext.getBean(httpRequest,"synthesisFunctionalizationBO");
            if (!SpringSecurityUtil.isUserLoggedIn())
                return Response.status(Response.Status.UNAUTHORIZED)
                        .entity(Constants.MSG_SESSION_INVALID).build();
            SimpleSynthesisFunctionalizationBean synthesisFunctionalizationBean = synthesisFunctionalizationBO.saveFile(simpleSynthesisFunctionalizationBean,httpRequest);
            List<String> errors = synthesisFunctionalizationBean.getErrors();
            return (errors == null || errors.size() == 0) ?
                    Response.ok(synthesisFunctionalizationBean).build() :
                    Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(errors).build();
        } catch (Exception e){
            e.printStackTrace();
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while saving the File " + e.getMessage())).build();
        }
    }

    @POST
    @Path("/saveSynthesisFunctionalizationElement")
    @Produces ("application/json")
    public Response saveSynthesisunctionalizationElement(@Context HttpServletRequest httpRequest, SimpleSynthesisFunctionalizationBean simpleSynthesisFunctionalizationBean) {
       // return Response.status(Response.Status.OK).entity("ALL GOOD TEST").build();

        try{
            SynthesisFunctionalizationBO synthesisFunctionalizationBO = (SynthesisFunctionalizationBO) SpringApplicationContext.getBean(httpRequest, "synthesisFunctionalizationBO");
            if(!SpringSecurityUtil.isUserLoggedIn())
                return Response.status(Response.Status.UNAUTHORIZED).entity("Session expired").build();

            SimpleSynthesisFunctionalizationBean synthesisFunctionalizationBean = synthesisFunctionalizationBO.saveFunctionalizationElement(simpleSynthesisFunctionalizationBean, httpRequest);

            List<String> errors = synthesisFunctionalizationBean.getErrors();
            return(errors ==null || errors.size()==0)?
                    Response.ok(synthesisFunctionalizationBean).build(): Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(errors).build();

        } catch(Exception e){
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity((CommonUtil.wrapErrorMessageInList("Error while saving Synthesis Functionalization Element "+ e.getStackTrace()))).build();
        }

    }


    @POST
    @Path("/removeFile")
    @Produces ("application/json")
    public Response removeFile(@Context HttpServletRequest httpRequest,  SimpleSynthesisFunctionalizationBean simpleSynthesisFunctionalizationBean) {
        try{
            SynthesisFunctionalizationBO synthesisFunctionalizationBO = (SynthesisFunctionalizationBO) SpringApplicationContext.getBean(httpRequest,"synthesisFunctionalizationBO");
            if (!SpringSecurityUtil.isUserLoggedIn())
                return Response.status(Response.Status.UNAUTHORIZED)
                        .entity(Constants.MSG_SESSION_INVALID).build();
            SimpleSynthesisFunctionalizationBean synthesisFunctionalizationBean = synthesisFunctionalizationBO.removeFile(simpleSynthesisFunctionalizationBean, httpRequest);
            List<String> errors = synthesisFunctionalizationBean.getErrors();
            return (errors == null || errors.size() == 0) ?
                    Response.ok(synthesisFunctionalizationBean).build() :
                    Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(errors).build();
        }catch (Exception e){
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while removing the File " + e.getMessage())).build();
        }
    }



    @GET
    @Path("/edit0")
    @Produces ("application/json")
    public Response edit0(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam("sampleId") String sampleId, @DefaultValue("") @QueryParam("dataId") String dataId) {

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
    public Response  edit(@Context HttpServletRequest httpRequest, @QueryParam("sampleId") String sampleId, @QueryParam("dataId") String dataId) {
        try {
            SynthesisFunctionalizationBO synthesisFunctionalizationBO =
                    (SynthesisFunctionalizationBO) SpringApplicationContext.getBean(httpRequest, "synthesisFunctionalizationBO");
            if (!SpringSecurityUtil.isUserLoggedIn())
                return Response.status(Response.Status.UNAUTHORIZED)
                        .entity("Session expired").build();

            SimpleSynthesisFunctionalizationBean synth = synthesisFunctionalizationBO.setupUpdate(sampleId, dataId, httpRequest);

            List<String> errors = synth.getErrors();
            return (errors == null || errors.size() == 0) ?
                    Response.ok(synth).build() :
                    Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(errors).build();

        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while viewing the Synthesis Entity. " + e.getMessage())).build();

        }
    }



    @GET
    @Path("/viewDetails")
    @Produces ("application/json")
    public Response viewDetails(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam("sampleId") String sampleId, @DefaultValue("") @QueryParam("dataId") String dataId) {

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



    @POST
    @Path("/tester")
    @Produces ("application/json")
    public Response tester(@Context HttpServletRequest httpRequest, SimpleSynthesisFunctionalizationBean simpleSynthesisFunctionalizationBean) {
        try{
            return Response.status(Response.Status.OK).entity("ALL GOOD TEST").build();
        }catch(Exception e){
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while removing Functionalization Element "+ e.getMessage())).build();
        }
    }


    @POST
    @Path("/removeSynthesisFunctionalizationElement")
    @Produces ("application/json")
    public Response removeSynthesisFunctionalizationElement(@Context HttpServletRequest httpRequest, SimpleSynthesisFunctionalizationBean simpleSynthesisFunctionalizationBean) {
        try{
            SynthesisFunctionalizationBO synthesisFunctionalizationBO = (SynthesisFunctionalizationBO) SpringApplicationContext.getBean(httpRequest, "synthesisFunctionalizationBO");
            if(!SpringSecurityUtil.isUserLoggedIn()){
                return Response.status(Response.Status.UNAUTHORIZED).entity("Session expired").build();
            }
            SimpleSynthesisFunctionalizationBean synthesisFunctionalizationBean= synthesisFunctionalizationBO.removeFunctionalizationElement(simpleSynthesisFunctionalizationBean,httpRequest);
            List<String> errors = synthesisFunctionalizationBean.getErrors();
            return (errors==null || errors.size()==0)? Response.ok(synthesisFunctionalizationBean).build() :
                    Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(errors).build();

        }catch(Exception e){
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while removing Functionalization Element "+ e.getMessage())).build();
        }
    }



    @Path("/submit")
    @Produces ("application/json")
    public Response submit(@Context HttpServletRequest httpRequest, SimpleSynthesisFunctionalizationBean simpleSynthesisFunctionalizationBean) {
        return null;
    }

    @Path("/delete")
    @Produces ("application/json")
    public Response delete(@Context HttpServletRequest httpRequest, SimpleSynthesisFunctionalizationBean simpleSynthesisFunctionalizationBean) {
        return null;
    }

}
