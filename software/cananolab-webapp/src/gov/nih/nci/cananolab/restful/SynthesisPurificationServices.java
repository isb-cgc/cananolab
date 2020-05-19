package gov.nih.nci.cananolab.restful;

import gov.nih.nci.cananolab.restful.sample.CharacterizationManager;
import gov.nih.nci.cananolab.restful.synthesis.SynthesisManager;
import gov.nih.nci.cananolab.restful.synthesis.SynthesisMaterialBO;
import gov.nih.nci.cananolab.restful.synthesis.SynthesisPurificationBO;
import gov.nih.nci.cananolab.restful.util.CommonUtil;
import gov.nih.nci.cananolab.restful.view.edit.SimpleCharacterizationEditBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleFileBean;
import gov.nih.nci.cananolab.restful.view.edit.SimplePurificationEditBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisFunctionalizationBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisPurificationBean;
import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;
import gov.nih.nci.cananolab.util.Constants;
import java.util.ArrayList;
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
import org.apache.log4j.Logger;

@Path("/synthesisPurification")
public class SynthesisPurificationServices {

    /**
     *
     * @param httpRequest
     * @param sampleId
     * @return  Map of drop down options
     */
    @GET
    @Path("/setup")
    @Produces("application/json")
    public Response setup(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam("sampleId") String sampleId)
    {
        try{
            SynthesisPurificationBO synthesisPurificationBO = (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");
            Map<String, Object> dropdownMap = synthesisPurificationBO.setupNew(sampleId, httpRequest);
            return Response.ok(dropdownMap).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();

        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while setting up drop down lists. " + e.getMessage())).build();
        }
    }

    /**
     *
     * @param httpRequest
     * @param sampleId
     * @param dataId - id of purification element to be edited
     * @return SimpleSynthesisPurificationBean
     */
    @GET
    @Path("/setupEdit")
    @Produces ("application/json")
    public Response setupEdit(@Context HttpServletRequest httpRequest, @QueryParam("sampleId") String sampleId,  @QueryParam("dataId") String dataId) {
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

    /**
     *
     * @param httpRequest
     * @param purfName - purification name
     * @return List of assay types
     */
    @GET
    @Path("/getAssayTypesByPurificationName")
    @Produces ("application/json")
    public Response getAssayTypes(@Context HttpServletRequest httpRequest,@DefaultValue("") @QueryParam("purfName") String purfName){
        //TODO write

        try{
            SynthesisManager synthesisMgr = (SynthesisManager) SpringApplicationContext.getBean(httpRequest, "synthesisManager");
            List<String> assayTypes = synthesisMgr.getAssayTypes(httpRequest, purfName);

            if(!assayTypes.contains("other")){
                assayTypes.add("other");
            }
            return Response.ok(assayTypes).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();
        }catch(Exception e){
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList("Error while retrieving AssayNames. " + e.getMessage())).build();

        }
    }

    /**
     *
     * @param httpRequest
     * @param purfType - purification type (final or interim)
     * @return - list of purifications
     */
    @GET
    @Path("/getPurificationByType")
    @Produces ("application/json")
    public Response getPurificationByType(@Context HttpServletRequest httpRequest,@DefaultValue("") @QueryParam("purfType") String purfType){
        //TODO write
        try {

            SynthesisManager synthesisMgr = (SynthesisManager) SpringApplicationContext.getBean(httpRequest, "synthesisManager");

            List<String> charNames = synthesisMgr.getPurificationNames(httpRequest, purfType);

            return Response.ok(charNames).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    @GET
    @Path("/getColumnNameOptionsByType")
    @Produces ("application/json")
    public Response getColumnNameOptionsByType(@Context HttpServletRequest httpRequest,
                                               @DefaultValue("") @QueryParam("columnType") String columnType,
                                               @DefaultValue("") @QueryParam("purfType") String purfType,
                                               @DefaultValue("") @QueryParam("purfName") String purfName,
                                               @DefaultValue("") @QueryParam("assayType")String assayType) {
        //TODO write
        try {
        SynthesisManager synthesisMgr = (SynthesisManager) SpringApplicationContext.getBean(httpRequest, "synthesisManager");
        List<String> names = synthesisMgr.getColumnNameOptionsByType(httpRequest, columnType, purfType, purfName, assayType);
        return Response.ok(names).header("Access-Control-Allow-Credentials", "true")
                .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
                .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    @GET
    @Path("/getColumnValueUnitOptions")
    @Produces ("application/json")
    public Response getColumnValueUnitOptions(@Context HttpServletRequest httpRequest,
                                              @DefaultValue("") @QueryParam("columnName") String columnName,
                                              @DefaultValue("") @QueryParam("conditionProperty") String conditionProperty)
    {
        //TODO write
        try {
            SynthesisManager synthesisMgr = (SynthesisManager) SpringApplicationContext.getBean(httpRequest, "synthesisManager");
            List<String> valueUNitOptions = synthesisMgr.getColumnValueUnitOptions(httpRequest, columnName, conditionProperty, true);
            return Response.ok(valueUNitOptions).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();
        } catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    @GET
    @Path("/getDatumNumberModifier")
    @Produces ("application/json")
    public Response getDatumNumberModifier(@Context HttpServletRequest httpRequest,
                                           @DefaultValue("") @QueryParam("columnName") String columnName,
                                           @DefaultValue("") @QueryParam("conditionProperty") String conditionProperty)
    {
        //TODO write
        try {
            SynthesisManager synthesisMgr = (SynthesisManager) SpringApplicationContext.getBean(httpRequest, "synthesisManager");
            List<String> datumModifier = synthesisMgr.getDatumNumberModifier(httpRequest, columnName, conditionProperty, true);
            return Response.ok(datumModifier).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();
        }catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    @GET
    @Path("/getConditionPropertyOptions")
    @Produces ("application/json")
    public Response getConditionPropertyOptions(@Context HttpServletRequest httpRequest,
                                                @DefaultValue("") @QueryParam("columnName") String columnName)
    {
        //TODO write
        try {
            SynthesisManager synthesisMgr = (SynthesisManager) SpringApplicationContext.getBean(httpRequest, "synthesisManager");
            List<String> condiPropertyOptions = synthesisMgr.getConditionPropertyOptions(httpRequest, columnName);
            return Response.ok(condiPropertyOptions).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();
        }catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    @POST
    @Path("/createPurification")
    @Produces ("application/json")
    public Response createPurification(@Context HttpServletRequest httpRequest,
                                         SimpleSynthesisPurificationBean editBean)
    {
        //TODO write
        try {
            if (!SpringSecurityUtil.isUserLoggedIn())
                return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

            SynthesisPurificationBO purificationBO = (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");
            List<String> msgs = purificationBO.create(editBean,httpRequest);
            return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();
        }catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }


    }

    @POST
    @Path("/saveFile")
    @Produces("application/json")
    public Response saveFile(@Context HttpServletRequest httpRequest, SimpleSynthesisPurificationBean editBean){
//TODO write
        try {
            if (!SpringSecurityUtil.isUserLoggedIn())
                return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

            SynthesisPurificationBO purificationBO = (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");
            List<String> msgs = purificationBO.saveFile(editBean,httpRequest);
            return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();
        }catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    @POST
    @Path("/removeFile")
    @Produces("application/json")
    public Response removeFile(@Context HttpServletRequest httpRequest, SimpleSynthesisPurificationBean editBean){
//TODO write
        try {
            if (!SpringSecurityUtil.isUserLoggedIn())
                return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

            SynthesisPurificationBO purificationBO = (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");
            List<String> msgs = purificationBO.deleteFile(editBean,httpRequest);
            return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();
        }catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    @POST
    @Path("createPurity")
    @Produces("application/json")
    public Response createPurity(@Context HttpServletRequest httpRequest, SimpleSynthesisPurificationBean editBean){
//TODO write
        try {
            if (!SpringSecurityUtil.isUserLoggedIn())
                return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

            SynthesisPurificationBO purificationBO = (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");
            List<String> msgs = purificationBO.createPurity(editBean,httpRequest);
            return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();
        }catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    @POST
    @Path("deletePurity")
    @Produces("application/json")
    public Response deletePurity(@Context HttpServletRequest httpRequest, SimpleSynthesisPurificationBean editBean){
//TODO write
        try {
            if (!SpringSecurityUtil.isUserLoggedIn())
                return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

            SynthesisPurificationBO purificationBO = (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");
            List<String> msgs = purificationBO.deletePurity(editBean,httpRequest);
            return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();
        }catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    @GET
    @Path("/getInstrumentTypesByTechniqueType")
    @Produces ("application/json")
    public Response getInstrumentTypesByTechniqueType(@Context HttpServletRequest httpRequest,
                                                      @DefaultValue("") @QueryParam("techniqueType") String techniqueType)
    {
//TODO write
        return null;
    }

    @POST
    @Path("saveTechniqueAndInstrument")
    @Produces("application/json")
    public Response saveTechniqueAndInstrument(@Context HttpServletRequest httpRequest, SimpleSynthesisPurificationBean editBean){
//TODO write
        try {
            if (!SpringSecurityUtil.isUserLoggedIn())
                return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

            SynthesisPurificationBO purificationBO = (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");
            List<String> msgs = purificationBO.saveTechniqueAndEquipment(editBean,httpRequest);
            return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();
        }catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    @POST
    @Path("deleteTechniqueAndInstrument")
    @Produces("application/json")
    public Response deleteTechniqueAndInstrument(@Context HttpServletRequest httpRequest, SimpleSynthesisPurificationBean editBean){
//TODO write
        try {
            if (!SpringSecurityUtil.isUserLoggedIn())
                return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

            SynthesisPurificationBO purificationBO = (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");
            List<String> msgs = purificationBO.deleteTechniqueAndEquipment(editBean,httpRequest);
            return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();
        }catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    @POST
    @Path("/savePurification")
    @Produces("application/json")
    public Response savePurification(@Context HttpServletRequest httpRequest, SimpleSynthesisPurificationBean editBean){

        try {
            if (!SpringSecurityUtil.isUserLoggedIn())
                return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

            SynthesisPurificationBO purificationBO = (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");
//            List<String> msgs = purificationBO.savePurification(editBean,httpRequest);
            List<String> msgs = purificationBO.create(editBean, httpRequest);
            return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();
        }catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    @POST
    @Path("/deletePurification")
    @Produces("application/json")
    public Response deletePurification(@Context HttpServletRequest httpRequest, SimpleSynthesisPurificationBean editBean){

        try {
            if (!SpringSecurityUtil.isUserLoggedIn())
                return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();

            SynthesisPurificationBO purificationBO = (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");
            List<String> msgs = purificationBO.delete(editBean,httpRequest);
            return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();
        }catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    @POST
    @Path("/submit")
    @Produces("application/json")
    public Response submit(@Context HttpServletRequest httpRequest, SimpleSynthesisPurificationBean editBean){

        try {
            if (!SpringSecurityUtil.isUserLoggedIn())
                return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();
            SynthesisPurificationBO purificationBO = (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");
            List<String> msgs = purificationBO.create(editBean, httpRequest);
            return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();
        }catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }

    }

}
