package gov.nih.nci.cananolab.restful;

import gov.nih.nci.cananolab.restful.util.RestTestLoginUtil;
import gov.nih.nci.cananolab.restful.view.edit.SimplePurificationConfigBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisMaterialBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisPurificationBean;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.response.ResponseBody;
import io.restassured.specification.RequestSpecification;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.codehaus.jackson.map.ObjectMapper;
import org.json.JSONObject;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.hasItems;
import static org.junit.Assert.*;

public class SynthesisPurificationServicesTest {
    private static RequestSpecification specification;

    @Before
    public void setUp() {
        //Get login session
        String jsessionId = RestTestLoginUtil.testLogin();

        //Create spec for all test logins in this class
        specification = new RequestSpecBuilder()
                .setContentType(ContentType.JSON)
                .setBaseUri("http://127.0.0.1:8080/caNanoLab/rest/")
                .addFilter(new ResponseLoggingFilter())
                .addFilter(new RequestLoggingFilter())
                .setSessionId(jsessionId)
                .build();

    }

    @After
    public void tearDown() throws Exception {
        RestTestLoginUtil.testLogout();
    }


    @Test
    public void testSetupNew() {
        try {
            Response response = given().spec(specification).queryParam("sampleId", "1000")
                    .when().get("synthesisPurification/setup")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);
            ResponseBody body = response.body();
            String result = body.prettyPrint();
            System.out.println(result);
            //TODO make this specific for purification
//            ArrayList<String> purificationTypes = response.path("purificationTypes");
//            assertTrue(purificationTypes.size()>0);
//            ArrayList<String> protocols = response.path("protocolLookup");
//            assertTrue(protocols.size()>0);
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testSetupEdit() {
        try {
            Response response = given().spec(specification).queryParam("sampleId", "1000").queryParam("purificationId", "1000")
                    .when().get("synthesisPurification/setupEdit")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);

            //TODO make this specific for purification
//            ArrayList<String> materialTypes = response.path("materialTypes");
//            assertTrue(materialTypes.contains("coat"));
//            ArrayList<String> pubChemTypes = response.path("pubChemDataSources");
//            assertTrue(pubChemTypes.contains("Substance"));
            String design = response.path("designMethodDescription");
            assertTrue(design.equals("Test entry for synthesis purification"));
            String type = response.path("type");
            assertTrue(type.equals("Interim Purification"));
            ArrayList<String> purityBeans = response.path("purityBeans");

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testGetAssayTypes() {
        try {
            Response response = given().spec(specification).queryParam("purfName", "Final")
                    .when().get("synthesisPurification/getAssayTypes")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);
            //TODO check the results coming back.
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testGetPurificationByType() {
        try {
            Response response = given().spec(specification).queryParam("purfType", "Final")
                    .when().get("synthesisPurification/getPurificationByType")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);
            //TODO check the results coming back.

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testGetColumnNameOptionsByType_Datum() {
        try {

            //String jsessionId = RestTestLoginUtil.testLogin();
            Map<String, String> params = new HashMap<String, String>();
            params.put("columnType", "datum");
            params.put("charType", "physico-chemical characterization");
            params.put("charName", "molecular weight");
            params.put("assayType", "molecular weight");

            //doesn't work for now
            Response res =
                    given()//.contentType("application/json").cookie("JSESSIONID=" + jsessionId)
                            .params(params)
                            .expect()
                            .body("", hasItems("PDI", "other"))
                            .when().get(RestTestLoginUtil.readTestUrlProperty() +  "caNanoLab/rest/characterization/getColumnNameOptionsByType");

            System.out.println(res.getBody().asString());

            Response response = given().spec(specification)
                    .queryParam("columnType", "datum")
                    .queryParam("purfType","Interim")
                    .queryParam("purfName","Bob")
                    .queryParam("assayType","Bob")
                    .when().get("synthesisPurification/getColumnNameOptionsByType")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);
            //TODO check response

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testGetColumnNameOptionsByType_Condition() {
        try {

            //String jsessionId = RestTestLoginUtil.testLogin();
            Response response = given().spec(specification)
                    .queryParam("columnType", "datum")
                    .queryParam("purfType","Interim")
                    .queryParam("purfName","Bob")
                    .queryParam("assayType","Bob")
                    .when().get("synthesisPurification/getColumnNameOptionsByType")
                    .then().statusCode(200).extract().response();
            assertNotNull(response);
            //TODO check the results coming back.

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testGetColumnValueUnitOptions() {
        try {

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testGetDatumNumberModifier() {
        try {

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testGetConditionPropertyOptions() {
        try {

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testSubmit() {
        try {

        }catch (Exception e){
            e.printStackTrace();
        }
    }


    @Test
    public void testSaveFile() {
        try {

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testRemoveFile() {
        try {

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testSavePurity() {
        try {

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testRemovePurity() {
        try {

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testGetInstrumentTypesByTechniqueType() {
        try {

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testSaveTechniqueAndInstrument() {
        try {

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testRemoveTechniqueAndInstrument() {
        try {

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testSavePurification() {
        try {

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testRemovePurification() {
        try {

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testEditMethodName_Submit() {
        try {
            SimpleSynthesisPurificationBean synthesisPurificationBean = getSimpleSynthesisPurificationBean("1000", "1000");
            synthesisPurificationBean.setMethodName("Test edit of method name");
            Response response = given().spec(specification)
                    .body(synthesisPurificationBean).when().post("synthesisPurification/submit")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);
            //verify change was saved to database
            synthesisPurificationBean = getSimpleSynthesisPurificationBean("1000", "1000");
            assertTrue(synthesisPurificationBean.getMethodName().equals("Test edit of method name"));

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testEditConfig_Submit() {
        try {
            SimpleSynthesisPurificationBean synthesisPurificationBean = getSimpleSynthesisPurificationBean("1000", "1000");
            List<SimplePurificationConfigBean> experimentsConfigs= synthesisPurificationBean.getSimpleExperimentBeans();
            if(experimentsConfigs!=null && experimentsConfigs.size()>0){
                SimplePurificationConfigBean configBean = experimentsConfigs.get(0);
                configBean.setDescription("Test edit config description");
            }
            Response response = given().spec(specification)
                    .body(synthesisPurificationBean).when().post("synthesisPurification/submit")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);
            //verify change was saved to database
            synthesisPurificationBean = getSimpleSynthesisPurificationBean("1000", "1000");
            experimentsConfigs= synthesisPurificationBean.getSimpleExperimentBeans();
            SimplePurificationConfigBean configBean = experimentsConfigs.get(0);
            assertTrue(configBean.getDescription().equals("Test edit config description"));

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    private SimpleSynthesisPurificationBean getSimpleSynthesisPurificationBean(String sampleId, String purificationId){
        try {
            Response response = given().spec(specification)
                    .queryParam("sampleId", sampleId)
                    .queryParam("purificationId",purificationId)
                    .when().get("synthesisPurification/setupEdit")
                    .then().statusCode(200).extract().response();


            JSONObject jResponse = new JSONObject(response.body().asString());
            ObjectMapper mapper = new ObjectMapper();
            return mapper.readValue(jResponse.toString(), SimpleSynthesisPurificationBean.class);

        }
        catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }


}