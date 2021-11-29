package gov.nih.nci.cananolab.restful;

import gov.nih.nci.cananolab.domain.common.Technique;
import gov.nih.nci.cananolab.exception.ExperimentConfigException;
import gov.nih.nci.cananolab.restful.sample.ExperimentConfigManager;
import gov.nih.nci.cananolab.restful.synthesis.SynthesisManager;
import gov.nih.nci.cananolab.restful.synthesis.SynthesisPurificationBO;
import gov.nih.nci.cananolab.restful.util.CommonUtil;
import gov.nih.nci.cananolab.restful.view.SimpleSynthesisBean;
import gov.nih.nci.cananolab.restful.view.edit.SimplePurityBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisPurificationBean;
import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;
import gov.nih.nci.cananolab.system.applicationservice.CaNanoLabApplicationService;
import gov.nih.nci.cananolab.system.applicationservice.client.ApplicationServiceProvider;
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
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Property;

@Path("/synthesisPurification")
public class SynthesisPurificationServices {
    private static final Logger logger = Logger.getLogger(SynthesisPurificationServices.class);

    /**
     *
     * @param httpRequest
     * @param editBean - SimpleSynthesisPurificationBean
     * @return
     */
    @POST
    @Path("/createPurification")
    @Produces("application/json")
    public Response createPurification(@Context HttpServletRequest httpRequest,
                                       SimpleSynthesisPurificationBean editBean) {
        //TODO write
        try {
            if (!SpringSecurityUtil.isUserLoggedIn()) {
                return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();
            }

            SynthesisPurificationBO purificationBO =
                    (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");
            List<String> msgs = purificationBO.create(editBean, httpRequest);



            return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, " +
                            "PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, " +
                            "Authorization").build();
        }
        catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }


    }

    /**
     *
     * @param httpRequest
     * @param editBean - SimpleSynthesisPurificationBean
     * @return - SimpleSynthesisPurificationBean
     */
    @POST
    @Path("createPurity")
    @Produces("application/json")
    public Response createPurity(@Context HttpServletRequest httpRequest, SimpleSynthesisPurificationBean editBean) {

        try {
            if (!SpringSecurityUtil.isUserLoggedIn()) {
                return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();
            }

            SynthesisPurificationBO purificationBO =
                    (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");
            SimpleSynthesisPurificationBean simpleSynthesisPurificationBean = purificationBO.createPurity(editBean,
                    httpRequest);

            List<String> errors = simpleSynthesisPurificationBean.getErrors();
            if (errors != null && errors.size() > 0) {
                return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(errors).build();
            }
            return Response.ok(simpleSynthesisPurificationBean).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, " +
                            "PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, " +
                            "Authorization").build();
        }
        catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    /**
     *
     * @param httpRequest
     * @param editBean - SimpleSynthesisPurificationBean
     * @return - SimpleSynthesisBean
     */
    @POST
    @Path("/deletePurification")
    @Produces("application/json")
    public Response deletePurification(@Context HttpServletRequest httpRequest,
                                       SimpleSynthesisPurificationBean editBean) {

        try {
            if (!SpringSecurityUtil.isUserLoggedIn()) {
                return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();
            }

            SynthesisPurificationBO purificationBO =
                    (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");
            SimpleSynthesisBean simpleSynthesisBean = purificationBO.delete(editBean, httpRequest);
            return Response.ok(simpleSynthesisBean).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, " +
                            "PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, " +
                            "Authorization").build();
        }
        catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    /**
     *
     * @param httpRequest
     * @param editBean - SimpleSynthesisPurificationBean
     * @return -
     */
    @POST
    @Path("deletePurity")
    @Produces("application/json")
    public Response deletePurity(@Context HttpServletRequest httpRequest, SimpleSynthesisPurificationBean editBean) {

        try {
            if (!SpringSecurityUtil.isUserLoggedIn()) {
                return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();
            }

            SynthesisPurificationBO purificationBO =
                    (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");
            List<String> msgs = purificationBO.deletePurity(editBean, httpRequest);
            return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, " +
                            "PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, " +
                            "Authorization").build();
        }
        catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    /**
     *
     * @param httpRequest
     * @param editBean - SimpleSynthesisPurificationBean
     * @return -
     */
    @POST
    @Path("deleteTechniqueAndInstrument")
    @Produces("application/json")
    public Response deleteTechniqueAndInstrument(@Context HttpServletRequest httpRequest,
                                                 SimpleSynthesisPurificationBean editBean) {
//TODO write
        try {
            if (!SpringSecurityUtil.isUserLoggedIn()) {
                return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();
            }

            SynthesisPurificationBO purificationBO =
                    (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");
            List<String> msgs = purificationBO.deleteTechniqueAndEquipment(editBean, httpRequest);
            return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, " +
                            "PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, " +
                            "Authorization").build();
        }
        catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    /**
     *
     * @param type
     * @return  Technique
     * @throws ExperimentConfigException
     */
    @GET
    @Path("/findTechniqueByType")
    @Produces("application/json")
    public Response findTechniqueByType(@QueryParam("techniqueType") String type)  {
        Technique technique = null;
        try {
            CaNanoLabApplicationService appService =
                    (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
            DetachedCriteria criteria = DetachedCriteria.forClass(Technique.class)
                    .add(Property.forName("type").eq(type).ignoreCase());
            List results = appService.query(criteria);
            List<Technique> techniques = new ArrayList<Technique>() ;

            for (Object result : results) {
                technique = (Technique) result;
                techniques.add(technique);
            }
            return Response.ok(techniques).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, " +
                            "PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, " +
                            "Authorization").build();
        }
        catch (Exception e) {
            String err = "Problem retrieving technique by type. ";
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(err + e.getMessage())).build();

        }

    }

    /**
     * @param httpRequest
     * @param purificationName    - purification name
     * @return List of assay types
     */
    @GET
    @Path("/getAssayTypesByPurificationName")
    @Produces("application/json")
    public Response getAssayTypes(@Context HttpServletRequest httpRequest,
                                  @DefaultValue("") @QueryParam("purificationName") String purificationName) {
        //TODO write

        try {
            SynthesisManager synthesisMgr = (SynthesisManager) SpringApplicationContext.getBean(httpRequest,
                    "synthesisManager");
            List<String> assayTypes = synthesisMgr.getAssayTypes(httpRequest, purificationName);

            if (!assayTypes.contains("other")) {
                assayTypes.add("other");
            }
            return Response.ok(assayTypes).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, " +
                            "PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, " +
                            "Authorization").build();
        }
        catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList(
                    "Error while retrieving AssayNames. " + e.getMessage())).build();

        }
    }

    /**
     *
     * @param httpRequest
     * @param columnType
     * @param purificationType - purification type
     * @param purificationName - purification name
     * @param assayType
     * @return list of name strings
     */
    @GET
    @Path("/getColumnNameOptionsByType")
    @Produces("application/json")
    public Response getColumnNameOptionsByType(@Context HttpServletRequest httpRequest,
                                               @DefaultValue("") @QueryParam("columnType") String columnType,
                                               @DefaultValue("") @QueryParam("purificationType") String purificationType,
                                               @DefaultValue("") @QueryParam("purificationName") String purificationName,
                                               @DefaultValue("") @QueryParam("assayType") String assayType) {
        //TODO write
        try {
            SynthesisManager synthesisMgr = (SynthesisManager) SpringApplicationContext.getBean(httpRequest,
                    "synthesisManager");
//        List<String> names = synthesisMgr.getColumnNameOptionsByType(httpRequest, columnType, purificationType, purificationName,
//        assayType);
            List<String> names = synthesisMgr.getColumnNameOptionsByType(httpRequest, columnType, purificationType, "purity",
                    assayType);
            return Response.ok(names).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, " +
                            "PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, " +
                            "Authorization").build();
        }
        catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    /**
     *
     * @param httpRequest
     * @param columnType
     * @param assayType
     * @return - list of name strings
     */
    @GET
    @Path("/getColumnNameOptionsByType")
    @Produces("application/json")
    public Response getColumnNameOptionsByType(@Context HttpServletRequest httpRequest,
                                               @DefaultValue("") @QueryParam("columnType") String columnType,
                                               @DefaultValue("") @QueryParam("assayType") String assayType) {
        //TODO write
        try {
            SynthesisManager synthesisMgr = (SynthesisManager) SpringApplicationContext.getBean(httpRequest,
                    "synthesisManager");
            List<String> names = synthesisMgr.getColumnNameOptionsByType(httpRequest, columnType, "", "purity",
                    assayType);
            return Response.ok(names).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, " +
                            "PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, " +
                            "Authorization").build();
        }
        catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    /**
     *
     * @param httpRequest
     * @param columnName
     * @param conditionProperty
     * @return  list of value unit strings
     */
    @GET
    @Path("/getColumnValueUnitOptions")
    @Produces("application/json")
    public Response getColumnValueUnitOptions(@Context HttpServletRequest httpRequest,
                                              @DefaultValue("") @QueryParam("columnName") String columnName,
                                              @DefaultValue("") @QueryParam("conditionProperty") String conditionProperty) {
        //TODO write
        try {
            SynthesisManager synthesisMgr = (SynthesisManager) SpringApplicationContext.getBean(httpRequest,
                    "synthesisManager");
            List<String> valueUNitOptions = synthesisMgr.getColumnValueUnitOptions(httpRequest, columnName,
                    conditionProperty, true);
            return Response.ok(valueUNitOptions).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, " +
                            "PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, " +
                            "Authorization").build();
        }
        catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    /**
     *
     * @param httpRequest
     * @param columnName
     * @return  list of condition property option strings
     */
    @GET
    @Path("/getConditionPropertyOptions")
    @Produces("application/json")
    public Response getConditionPropertyOptions(@Context HttpServletRequest httpRequest,
                                                @DefaultValue("") @QueryParam("columnName") String columnName) {
        //TODO write
        try {
            SynthesisManager synthesisMgr = (SynthesisManager) SpringApplicationContext.getBean(httpRequest,
                    "synthesisManager");
            List<String> condiPropertyOptions = synthesisMgr.getConditionPropertyOptions(httpRequest, columnName);
            return Response.ok(condiPropertyOptions).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, " +
                            "PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, " +
                            "Authorization").build();
        }
        catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    /**
     *
     * @param httpRequest
     * @param columnName
     * @param conditionProperty
     * @return  list of datum modifier strings
     */
    @GET
    @Path("/getDatumNumberModifier")
    @Produces("application/json")
    public Response getDatumNumberModifier(@Context HttpServletRequest httpRequest,
                                           @DefaultValue("") @QueryParam("columnName") String columnName,
                                           @DefaultValue("") @QueryParam("conditionProperty") String conditionProperty) {
        try {
            SynthesisManager synthesisMgr = (SynthesisManager) SpringApplicationContext.getBean(httpRequest,
                    "synthesisManager");
            List<String> datumModifier = synthesisMgr.getDatumNumberModifier(httpRequest, columnName,
                    conditionProperty, true);
            return Response.ok(datumModifier).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, " +
                            "PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, " +
                            "Authorization").build();
        }
        catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    /**
     *
     * @param httpRequest
     * @param techniqueType
     * @return  list of type strings
     */
    @GET
    @Path("/getInstrumentTypesByTechniqueType")
    @Produces("application/json")
    public Response getInstrumentsByType(@Context HttpServletRequest httpRequest,
                                         @DefaultValue("") @QueryParam("techniqueType") String techniqueType) {
        try {
            ExperimentConfigManager experimentMgr =
                    (ExperimentConfigManager) SpringApplicationContext.getBean(httpRequest, "experimentConfigManager");

//            List<Instrument> types = experimentMgr.getInstrumentsByType(httpRequest, techniqueType);
            List<String> types = experimentMgr.getInstrumentTypesByTechniqueType(httpRequest, techniqueType);

            return Response.ok(types).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, " +
                            "PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, " +
                            "Authorization").build();
        }
        catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    /**
     * @param httpRequest
     * @param purificationType    - purification type (final or interim)
     * @return - list of purification name strings
     */
    @GET
    @Path("/getPurificationByType")
    @Produces("application/json")
    public Response getPurificationByType(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam(
            "purificationType") String purificationType) {
        //TODO write
        try {

            SynthesisManager synthesisMgr = (SynthesisManager) SpringApplicationContext.getBean(httpRequest,
                    "synthesisManager");

            List<String> charNames = synthesisMgr.getPurificationNames(httpRequest, purificationType);

            return Response.ok(charNames).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, " +
                            "PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, " +
                            "Authorization").build();
        }
        catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    /**
     *
     * @param httpRequest
     * @param purityBean
     * @return  SimplePurityBean
     */
    @POST
    @Path("/newPurity")
    @Produces("application/json")
    public Response newPurityTemplate(@Context HttpServletRequest httpRequest, SimplePurityBean purityBean) {
        try {

            SynthesisPurificationBO purificationBO =
                    (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");

//            SimplePurityBean simplePurityBean = purificationBO.drawNewMatrix(httpRequest, purityBean);
            SimplePurityBean simplePurityBean = purificationBO.drawMatrix(httpRequest, purityBean);

            return Response.ok(simplePurityBean).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, " +
                            "PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, " +
                            "Authorization").build();


        }
        catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    /**
     *
     * @param httpRequest
     * @param editBean - SimpleSynthesisPurificationBean
     * @return
     */
    @POST
    @Path("/removeFile")
    @Produces("application/json")
    public Response removeFile(@Context HttpServletRequest httpRequest, SimpleSynthesisPurificationBean editBean) {
        try {
            if (!SpringSecurityUtil.isUserLoggedIn()) {
                return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();
            }

            SynthesisPurificationBO purificationBO =
                    (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");
            List<String> msgs = purificationBO.deleteFile(editBean, httpRequest);
            return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, " +
                            "PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, " +
                            "Authorization").build();
        }
        catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    /**
     *
     * @param httpRequest
     * @param editBean - SimpleSynthesisPurificationBean
     * @return
     */
    @POST
    @Path("/removePurityFile")
    @Produces("application/json")
    public Response removePurityFile(@Context HttpServletRequest httpRequest, SimpleSynthesisPurificationBean editBean) {
        try {
            if (!SpringSecurityUtil.isUserLoggedIn()) {
                return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();
            }

            SynthesisPurificationBO purificationBO =
                    (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");
            List<String> msgs = purificationBO.deleteFile(editBean, httpRequest);
            return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, " +
                            "PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, " +
                            "Authorization").build();
        }
        catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }


    /**
     *
     * @param httpRequest
     * @param editBean - SimpleSynthesisPurificationBean
     * @return - SimpleSynthesisPurificationBean
     */
    @POST
    @Path("/saveFile")
    @Produces("application/json")
    public Response saveFile(@Context HttpServletRequest httpRequest, SimpleSynthesisPurificationBean editBean) {

        try {
            if (!SpringSecurityUtil.isUserLoggedIn()) {
                return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();
            }

            SynthesisPurificationBO purificationBO =
                    (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");

            SimpleSynthesisPurificationBean simpleSynthesisPurificationBean = null;
//            if(editBean.getPurityBeingEdited()!=null){
//                 simpleSynthesisPurificationBean = purificationBO.savePurityFile(editBean.getPurityBeingEdited(), editBean, httpRequest);
//            }else
//            {             simpleSynthesisPurificationBean = purificationBO.saveFile(editBean,
//                    httpRequest);
//            }

            return Response.ok(simpleSynthesisPurificationBean).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, " +
                            "PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, " +
                            "Authorization").build();


        }
        catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    /**
     *
     * @param httpRequest
     * @return - SimpleSynthesisPurificationBean
     */
    @POST
    @Path("/savePurityFile")
    @Produces("application/json")
    public Response savePurityFile(@Context HttpServletRequest httpRequest, SimpleSynthesisPurificationBean purificationBean) {

        try {
            if (!SpringSecurityUtil.isUserLoggedIn()) {
                return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();
            }

            SynthesisPurificationBO purificationBO =
                    (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");


            SimplePurityBean editBean = purificationBean.getPurityBeingEdited();
            SimpleSynthesisPurificationBean simpleSynthesisPurificationBean = purificationBO.savePurityFile(purificationBean,
                    httpRequest);
            return Response.ok(simpleSynthesisPurificationBean).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, " +
                            "PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, " +
                            "Authorization").build();


//            List<String> msgs = purificationBO.saveFile(editBean,httpRequest);
//            return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true")
//                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST,
//                    PUT, DELETE, OPTIONS")
//                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,
//                    Authorization").build();
        }
        catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }


    /**
     *
     * @param httpRequest
     * @param editBean - SimpleSynthesisPurificationBean
     * @return
     */
    @POST
    @Path("saveTechniqueAndInstrument")
    @Produces("application/json")
    public Response saveTechniqueAndInstrument(@Context HttpServletRequest httpRequest,
                                               SimpleSynthesisPurificationBean editBean) {
//TODO write
        try {
            if (!SpringSecurityUtil.isUserLoggedIn()) {
                return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();
            }

            SynthesisPurificationBO purificationBO =
                    (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");
            List<String> msgs = purificationBO.saveTechniqueAndEquipment(editBean, httpRequest);
            return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, " +
                            "PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, " +
                            "Authorization").build();
        }
        catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    /**
     * @param httpRequest
     * @param sampleId
     * @param dataId      - id of purification element to be edited
     * @return SimpleSynthesisPurificationBean
     */
    @GET
    @Path("/setupEdit")
    @Produces("application/json")
    public Response setupEdit(@Context HttpServletRequest httpRequest, @QueryParam("sampleId") String sampleId,
                              @QueryParam("dataId") String dataId) {
        if (!SpringSecurityUtil.isUserLoggedIn()) {
            return Response.status(Response.Status.UNAUTHORIZED)
                    .entity("Session expired").build();
        }
        try {
            SynthesisPurificationBO synthesisPurificationBO =
                    (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");
            SimpleSynthesisPurificationBean synthesisPurificationBean = synthesisPurificationBO.setupUpdate(sampleId,
                    dataId, httpRequest);
            List<String> errors = synthesisPurificationBean.getErrors();
            return (errors == null || errors.size() == 0) ?
                    Response.ok(synthesisPurificationBean).build() :
                    Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(errors).build();
        }
        catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList(
                    "Error while viewing the Synthesis Purification. " + e.getMessage())).build();

        }
    }

//    @POST
//    @Path("/savePurification")
//    @Produces("application/json")
//    public Response savePurification(@Context HttpServletRequest httpRequest, SimpleSynthesisPurificationBean
//    editBean){
//
//        try {
//            if (!SpringSecurityUtil.isUserLoggedIn())
//                return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();
//
//            SynthesisPurificationBO purificationBO = (SynthesisPurificationBO) SpringApplicationContext.getBean
//            (httpRequest, "synthesisPurificationBO");
////            List<String> msgs = purificationBO.savePurification(editBean,httpRequest);
//            List<String> msgs = purificationBO.create(editBean, httpRequest);
//            return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true")
//                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST,
//                    PUT, DELETE, OPTIONS")
//                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,
//                    Authorization").build();
//        }catch (Exception e) {
//            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
//                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
//        }
//    }

    /**
     * @param httpRequest
     * @param sampleId
     * @return Map of drop down options
     */
    @GET
    @Path("/setup")
    @Produces("application/json")
    public Response setupNew(@Context HttpServletRequest httpRequest,
                             @DefaultValue("") @QueryParam("sampleId") String sampleId) {
        try {
            SynthesisPurificationBO synthesisPurificationBO =
                    (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");
            Map<String, Object> dropdownMap = synthesisPurificationBO.setupNew(sampleId, httpRequest);
            return Response.ok(dropdownMap).header("Access-Control-Allow-Credentials", "true").header("Access-Control" +
                    "-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization").build();

        }
        catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(CommonUtil.wrapErrorMessageInList(
                    "Error while setting up drop down lists. " + e.getMessage())).build();
        }
    }

    /**
     *
     * @param httpRequest
     * @param editBean - SimpleSynthesisPurificationBean
     * @return
     */
    @POST
    @Path("/submit")
    @Produces("application/json")
    public Response submit(@Context HttpServletRequest httpRequest, SimpleSynthesisPurificationBean editBean) {

        try {
            if (!SpringSecurityUtil.isUserLoggedIn()) {
                return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();
            }
            SynthesisPurificationBO purificationBO =
                    (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");
            List<String> msgs = purificationBO.create(editBean, httpRequest);
            return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true").header("Access-Control-Allow" +
                    "-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS").header(
                            "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, " +
                            "Authorization").build();
        }
        catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }

    }

//    @POST
//    @Path("/newFinding")
//    @Produces("application/json")
//    public Response newFindingTemplate(@Context HttpServletRequest httpRequest, SimpleFindingBean purityBean){
//        try {
//            CharacterizationBO characterizationBO =
//                    (CharacterizationBO) SpringApplicationContext.getBean(httpRequest, "characterizationBO");
//
//            SimpleFindingBean simpleFindingBean = characterizationBO.drawNewMatrix(httpRequest, purityBean);
//
//            return Response.ok(simpleFindingBean).header("Access-Control-Allow-Credentials", "true")
//                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST,
//                    PUT, DELETE, OPTIONS")
//                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,
//                    Authorization").build();
//
//       }catch (Exception e){
//            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
//                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
//        }
//    }

    /**
     *
     * @param httpRequest
     * @param purificationEditBean - SimpleSynthesisPurificationBean
     * @return - SimpleSynthesisPurificationBean
     */
    @POST
    @Path("/updatePurification")
    @Produces("application/json")
    public Response updatePurification(@Context HttpServletRequest httpRequest,
                                       SimpleSynthesisPurificationBean purificationEditBean) {
        logger.debug("In updatePurification");

        if (!SpringSecurityUtil.isUserLoggedIn()) {
            return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();
        }

        try {
            SynthesisPurificationBO purificationBO =
                    (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");

            SimpleSynthesisPurificationBean simpleSynthesisPurificationBean =
                    purificationBO.createPurity(purificationEditBean, httpRequest);
            List<String> errors = simpleSynthesisPurificationBean.getErrors();
            if (errors != null && errors.size() > 0) {
                return Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(errors).build();
            }

            return Response.ok(simpleSynthesisPurificationBean).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, " +
                            "PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, " +
                            "Authorization").build();
        }
        catch (Exception e) {
            e.printStackTrace();

            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }

    }

    @POST
    @Path("/removeFinding")
    @Produces("application/json")
    public Response removePurity(@Context HttpServletRequest httpRequest, SimplePurityBean simplePurityBean){
        try{
            SynthesisPurificationBO purificationBO =
                    (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");
            SimpleSynthesisPurificationBean simpleSynthesisPurificationBean = purificationBO.deletePurity(simplePurityBean, httpRequest);
            return Response.ok(simpleSynthesisPurificationBean).header("Access-Control-Allow-Credentials", "true")
                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, " +
                            "PUT, DELETE, OPTIONS")
                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, " +
                            "Authorization").build();

        }
        catch (Exception e) {
            e.printStackTrace();

            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

    /**
     *
     * @param httpRequest
     * @param simplePurityBean - SimplePurityBean
     * @return - SimplePurityBean
     */
    @POST
    @Path("/updatePurity")
    @Produces("application/json")
    public Response updatePurity(@Context HttpServletRequest httpRequest, SimplePurityBean simplePurityBean) {
        logger.debug("In updateDataConditionTable");

        if (!SpringSecurityUtil.isUserLoggedIn()) {
            return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();
        }

        try {
            SynthesisPurificationBO purificationBO =
                    (SynthesisPurificationBO) SpringApplicationContext.getBean(httpRequest, "synthesisPurificationBO");

//            SimplePurityBean newSimplePurityBean = purificationBO.drawMatrix(httpRequest, simplePurityBean);
            if(simplePurityBean.getId()!=null) {
                SimplePurityBean updatedPurity = purificationBO.updatePurity(httpRequest, simplePurityBean);
            }

            SimpleSynthesisPurificationBean synthesisPurificationBean = purificationBO.setupUpdate(
                    simplePurityBean.getId(), httpRequest);
            List<String> errors = synthesisPurificationBean.getErrors();
            return (errors == null || errors.size() == 0) ?
                    Response.ok(synthesisPurificationBean).build() :
                    Response.status(Response.Status.INTERNAL_SERVER_ERROR).entity(errors).build();

//            return Response.ok(msgs).header("Access-Control-Allow-Credentials", "true")
//                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST, " +
//                            "PUT, DELETE, OPTIONS")
//                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, " +
//                            "Authorization").build();


        }
        catch (Exception e) {
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
        }
    }

//    @POST
//    @Path("/setColumnOrder")
//    @Produces ("application/json")
//    public Response setColumnOrder(@Context HttpServletRequest httpRequest, SimpleFindingBean simpleFinding)
//    {
//        logger.debug("In setColumnOrder");
//
//        if (!SpringSecurityUtil.isUserLoggedIn())
//            return Response.status(Response.Status.UNAUTHORIZED).entity(Constants.MSG_SESSION_INVALID).build();
//
//        try {
//            CharacterizationBO characterizationBO =
//                    (CharacterizationBO) SpringApplicationContext.getBean(httpRequest, "characterizationBO");
//
//            SimpleFindingBean simpleFindingBean = characterizationBO.updateColumnOrder(httpRequest, simpleFinding);
//
//            return Response.ok(simpleFindingBean).header("Access-Control-Allow-Credentials", "true")
//                    .header("Access-Control-Allow-Origin", "*").header("Access-Control-Allow-Methods", "GET, POST,
//                    PUT, DELETE, OPTIONS")
//                    .header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,
//                    Authorization").build();
//        } catch (Exception e) {
//            return Response.status(Response.Status.INTERNAL_SERVER_ERROR)
//                    .entity(CommonUtil.wrapErrorMessageInList(e.getMessage())).build();
//        }
//    }
}
