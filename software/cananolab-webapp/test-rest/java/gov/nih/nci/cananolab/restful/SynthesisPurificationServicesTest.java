package gov.nih.nci.cananolab.restful;

import gov.nih.nci.cananolab.restful.util.RestTestLoginUtil;
import gov.nih.nci.cananolab.restful.view.SimpleSynthesisBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleInstrumentBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleProtocol;
import gov.nih.nci.cananolab.restful.view.edit.SimplePurificationConfigBean;
import gov.nih.nci.cananolab.restful.view.edit.SimplePurityBean;
import gov.nih.nci.cananolab.restful.view.edit.SimplePurityCell;
import gov.nih.nci.cananolab.restful.view.edit.SimplePurityRowBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSubmitProtocolBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisPurificationBean;
import gov.nih.nci.cananolab.util.Constants;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.response.ResponseBody;
import io.restassured.specification.RequestSpecification;
import java.util.ArrayList;
import java.util.List;
import org.codehaus.jackson.map.ObjectMapper;
import org.json.JSONObject;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

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
            String debug="pause";
            Response response = given().spec(specification).queryParam("sampleId", "1000")
                    .when().get("synthesisPurification/setupNew")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);

//            List<String> manufacturers = response.path("manufacturers" );
//            assertTrue(manufacturers.size()>100);
            List<String> purificationTypes = response.path("purificationTypes" );
            assertTrue(purificationTypes.contains("Final Purification"));
            List<String> techniqueTypes = response.path("techniques");
            assertTrue(techniqueTypes.size()>20);
            List<String> instrumentTypes = response.path("instruments");
            assertTrue(instrumentTypes.size()>20);
        } catch (Exception e){
           e.printStackTrace();
            fail();
        }
    }

    @Test
    public void testSetupEdit() {
        try {
            Response response = given().spec(specification).queryParam("sampleId", "1000").queryParam("dataId", "1000")
                    .when().get("synthesisPurification/setupEdit")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);

            //TODO make this specific for purification
//            ArrayList<String> materialTypes = response.path("materialTypes");
//            assertTrue(materialTypes.contains("coat"));
//            ArrayList<String> pubChemTypes = response.path("pubChemDataSources");
//            assertTrue(pubChemTypes.contains("Substance"));
//            String design = response.path("designMethodDescription");
//            assertTrue(design.equals("I am a description of a method design"));
            String type = response.path("type");
            assertEquals(type,"Interim Purification");
            ArrayList<String> purityBeans = response.path("purityBeans");
            assertTrue(purityBeans.size() == 1);

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testGetAssayTypes() {
        try {
            Response response = given().spec(specification).queryParam("purfName", "purity")
                    .when().get("synthesisPurification/getAssayTypesByPurificationName")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);
            List<String> types = response.path( "");
            assertTrue(types.size()>0);
            assertTrue(types.contains("purity"));

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
            ResponseBody body = response.body();
            String result = body.prettyPrint();
            System.out.println(result);
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testGetColumnNameOptionsByType_Datum() {
        try {

            //String jsessionId = RestTestLoginUtil.testLogin();
//            Map<String, String> params = new HashMap<String, String>();
//            params.put("columnType", "datum");
//            params.put("charType", "physico-chemical characterization");
//            params.put("charName", "molecular weight");
//            params.put("assayType", "molecular weight");

            //doesn't work for now
//            Response res =
//                    given()//.contentType("application/json").cookie("JSESSIONID=" + jsessionId)
//                            .params(params)
//                            .expect()
//                            .body("", hasItems("PDI", "other"))
//                            .when().get( "/characterization/getColumnNameOptionsByType");
//
//            System.out.println(res.getBody().asString());

            Response response = given().spec(specification)
                    .queryParam("columnType", "datum")
                    .queryParam("purfType","Interim")
                    .queryParam("purfName","Bob")
                    .queryParam("assayType","Bob")
                    .when().get("synthesisPurification/getColumnNameOptionsByType")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);

            ResponseBody body = response.body();
            String result = body.prettyPrint();
            assertTrue(result.length()>0);
            System.out.println(result);

            List<String> types = response.path( "");
            assertTrue(types.size()>0);
            assertTrue(types.contains("purity"));

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
            //TODO check response
            ResponseBody body = response.body();
            String result = body.prettyPrint();
            assertTrue(result.length()>0);
            System.out.println(result);

            List<String> types = response.path( "");
            assertTrue(types.size()>0);
            assertTrue(types.contains("purity"));

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
    public void testNewPurification() {
        try {
            //Testing submission of a brand new purification
            SimpleSynthesisPurificationBean newBean = new SimpleSynthesisPurificationBean();
            newBean.setMethodName("I am a method name");
            newBean.setDesignMethodDescription("I am a description of a method design");
            newBean.setYield(new Float(12.85));
            newBean.setType("Interim Purification");
            newBean.setSampleId("1000");

            Response response = given().spec(specification)
                    .body(newBean).when().post("synthesisPurification/submit")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);
            //verify change was saved to database
            newBean = getSimpleSynthesisPurificationBean("1000", "1000");
            assertNotNull(newBean.getId());
            assertEquals(newBean.getMethodName(),"I am a method name");

        }catch (Exception e){
            e.printStackTrace();
            fail();
        }
    }


    @Test
    public void testSimplePurificationEdit() {
        try {
            //Testing submission of a brand new purification
            SimpleSynthesisPurificationBean editBean = getSimpleSynthesisPurificationBean("1000","1000");
            editBean.setMethodName("I am a method name");
            editBean.setDesignMethodDescription("I am a description of a method design");
            editBean.setYield(new Float(12.85));
            editBean.setType("Interim Purification");

            Response response = given().spec(specification)
                    .body(editBean).when().post("synthesisPurification/submit")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);
            //verify change was saved to database
            editBean = getSimpleSynthesisPurificationBean("1000", "1000");
            assertNotNull(editBean.getId());
            assertEquals(editBean.getMethodName(),"I am a method name");

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

                //Testing submission of a brand new purity
                SimpleSynthesisPurificationBean existingBean = getSimpleSynthesisPurificationBean("1000", "1000");
                int originalnumberofPurities = existingBean.getPurityBeans().size();
                SimplePurityBean newPurity = new SimplePurityBean();
//                List<ColumnHeader> columnHeaders= new ArrayList<ColumnHeader>();
//                ColumnHeader columnDatum = new ColumnHeader();
//                ColumnHeader columnCondition = new ColumnHeader();


                List<SimplePurityRowBean> rowBeans = new ArrayList<SimplePurityRowBean>();
                SimplePurityRowBean newPurityRow = new SimplePurityRowBean();
                SimplePurityCell newCellDatum = new SimplePurityCell();
                SimplePurityCell newCellCondition = new SimplePurityCell();

                newCellDatum.setColumnOrder(1);
                newCellDatum.setDatumOrCondition(Constants.DATUM);
                newCellDatum.setOperand("=");
                newCellDatum.setValue("22.4");

                newCellCondition.setColumnOrder(2);
                newCellCondition.setDatumOrCondition(Constants.CONDITION);
                newCellCondition.setOperand("<");
                newCellCondition.setValue("1");

                newPurityRow.addCell(newCellDatum);
                newPurityRow.addCell(newCellCondition);
                rowBeans.add(newPurityRow);
                newPurity.setRows(rowBeans);

                existingBean.getPurityBeans().add(newPurity);


                Response response = given().spec(specification)
                        .body(existingBean).when().post("synthesisPurification/submit")
                        .then().statusCode(200).extract().response();

                assertNotNull(response);
                //verify change was saved to database
                existingBean = getSimpleSynthesisPurificationBean("1000", "1000");
                List<SimplePurityBean> testBeans = existingBean.getPurityBeans();
                assertNotNull(testBeans);
                assertTrue(testBeans.size() > originalnumberofPurities);
                for(SimplePurityBean createdBean: testBeans){
                    assertNotNull(createdBean.getId());
                    assertTrue(createdBean.getId()>0);

                }



        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testRemovePurity() {
        try {
            SimpleSynthesisPurificationBean existingBean = getSimpleSynthesisPurificationBean("1000", "1000");
            List<SimplePurityBean> existingPurities = existingBean.getPurityBeans();
            int originalnumberofPurities = existingPurities.size();
            assertTrue(originalnumberofPurities > 0);
            SimplePurityBean removedBean = existingPurities.get(originalnumberofPurities-1);
            existingBean.getPurityBeans().remove(removedBean);

            Response response = given().spec(specification)
                    .body(existingBean).when().post("synthesisPurification/submit")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);
            existingBean = getSimpleSynthesisPurificationBean("1000", "1000");
            List<SimplePurityBean> testBeans = existingBean.getPurityBeans();
            assertNotNull(testBeans);
            assertTrue(testBeans.size() < originalnumberofPurities);
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testFindTechniqueByType(){
        try {

            Response response = given().spec(specification)
                    .queryParam("type", "Interim purification technique")
                    .when().get("synthesisPurification/findTechniqueByType")
                    .then().statusCode(200).extract().response();
            assertNotNull(response);
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testGetInstrumentTypesByTechniqueType() {
        try {
            Response response = given().spec(specification)
                    .body("Interim purification technique").when().post("synthesisPurification/getInstrumentTypesByTechniqueType")
                    .then().statusCode(200).extract().response();
            assertNotNull(response);
        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testSaveTechniqueAndInstrument() {
        try {

            SimpleSynthesisPurificationBean existingBean = getSimpleSynthesisPurificationBean("1000", "1000");
            List<SimplePurificationConfigBean> experiments = existingBean.getSimpleExperimentBeans();
            for(SimplePurificationConfigBean experiment: experiments){
                List<SimpleInstrumentBean> instrumentBeans = experiment.getInstruments();
                for (SimpleInstrumentBean instrumentBean:instrumentBeans){
                    instrumentBean.setManufacturer("Test Manufacturer");
                }
                experiment.setDescription("Test technique description");
            }
            Response response = given().spec(specification)
                    .body(existingBean).when().post("synthesisPurification/submit")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);
            existingBean = getSimpleSynthesisPurificationBean("1000", "1000");
            for(SimplePurificationConfigBean experiment:existingBean.getSimpleExperimentBeans()){
                assertEquals(experiment.getDescription(),"Test technique description");
                for(SimpleInstrumentBean instrumentBean:experiment.getInstruments()){
                    assertTrue(instrumentBean.getManufacturer().equals("Test Manufacturer"));
                }
            }
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
    public void testAddColumn(){
//TODO
//        columnDatum.setColumnOrdernOrder(1);
//        columnDatum.setColumnName("new Datum column");
//        columnDatum.setColumnType(Constants.DATUM);
//        columnDatum.setDisplayName("Datum column");
//        columnDatum.setValueType("observed");
//        columnDatum.setValueUnit("mg/mL");
//        columnHeaders.add(columnDatum);
//
//        columnCondition.setColumnOrder(2);
//        columnCondition.setColumnName("new Condition column");
//        columnCondition.setColumnType(Constants.CONDITION);
//        columnCondition.setDisplayName("Condition column");
//        columnCondition.setValueType("mean");
//        columnCondition.setValueUnit("mL");
//        columnCondition.setConditionProperty("Foo");
//        columnHeaders.add(columnCondition);
//        newPurity.setColumnHeaders(columnHeaders);
    }

    @Test
    public void testSavePurification() {
        try {
        //Testing submission of a brand new purification
            SimpleSynthesisBean synthesisBean = getSimpleSynthesisBean("1000");
            int originalPurificationCount = synthesisBean.getSynthesisPurification().size();
            SimpleSynthesisPurificationBean purificationBean = new SimpleSynthesisPurificationBean();
            purificationBean.setDesignMethodDescription("New Purification");
            purificationBean.setMethodName("Interim 1");
            purificationBean.setType("Interim Purification");
            purificationBean.setYield(new Float(92.0));
            purificationBean.setAnalysis("This purification step yielded results");
            purificationBean.setSampleId("1000");
            purificationBean.setSimpleProtocol(getProtocol("66256896"));
            Response response = given().spec(specification)
                    .body(purificationBean).when().post("synthesisPurification/submit")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);
            ResponseBody body = response.body();
            String result = body.prettyPrint();
            System.out.println(result);
            synthesisBean = getSimpleSynthesisBean("1000");
            assertTrue(synthesisBean.getSynthesisPurification().size() > originalPurificationCount);



        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testNewSynthesis(){

    }

    @Test
    public void testRemovePurification() {
        try {

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testSaveProtocol(){
        try{

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
            assertEquals(configBean.getDescription(),"Test edit config description");

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testUpdateProtocol(){
        try{
            SimpleSynthesisPurificationBean synthesisPurificationBean = getSimpleSynthesisPurificationBean("1000", "1000");
            SimpleProtocol oldProtocol = synthesisPurificationBean.getSimpleProtocol();
            SimpleProtocol newProtocol = getProtocol("1111");
            if(newProtocol.getDomainFileUri().length()<1){
                newProtocol.setDomainFileUri(null);
            }
            synthesisPurificationBean.setSimpleProtocol(newProtocol);
            Response response = given().spec(specification)
                    .body(synthesisPurificationBean).when().post("synthesisPurification/submit")
                    .then().statusCode(200).extract().response();
            assertNotNull(response);
            synthesisPurificationBean = getSimpleSynthesisPurificationBean("1000", "1000");
//            assertTrue(newProtocol.getDomainId().equals(synthesisPurificationBean.getSimpleProtocol().getDomainId()));
//            assertFalse(oldProtocol.getDomainId().equals(synthesisPurificationBean.getSimpleProtocol().getDomainId()));
            assertEquals(newProtocol.getDomainId(), synthesisPurificationBean.getSimpleProtocol().getDomainId());
            assertNotEquals(oldProtocol.getDomainId(), synthesisPurificationBean.getSimpleProtocol().getDomainId());
        }catch (Exception e){
            e.printStackTrace();
            fail();
        }
    }

    private SimpleProtocol getProtocol(String protocolId){
        try{
            Response response = given().spec(specification)
                    .queryParam("protocolId", protocolId)
                    .when().get("protocol/getProtocolById")
                    .then().statusCode(200).extract().response();

            JSONObject jResponse = new JSONObject(response.body().asString());
            ObjectMapper mapper = new ObjectMapper();
            SimpleSubmitProtocolBean submitProtocolBean = mapper.readValue(jResponse.toString(), SimpleSubmitProtocolBean.class);
            SimpleProtocol protocol = new SimpleProtocol();
            protocol.transferFromSimpleSubmitProtocol(submitProtocolBean);
            return protocol;

        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    private SimpleSynthesisBean getSimpleSynthesisBean(String sampleId){
        try{
            Response response = given().spec(specification)
                    .queryParam("sampleId", sampleId)
                    .when().get("synthesis/summaryView")
                    .then().statusCode(200).extract().response();
            JSONObject jResponse = new JSONObject(response.body().asString());
            ObjectMapper mapper = new ObjectMapper();
            return mapper.readValue(jResponse.toString(), SimpleSynthesisBean.class);

        }catch(Exception e){
            e.printStackTrace();
        }
        return null;
    }

    private SimpleSynthesisPurificationBean getSimpleSynthesisPurificationBean(String sampleId, String purificationId){
        try {
            Response response = given().spec(specification)
                    .queryParam("sampleId", sampleId)
                    .queryParam("dataId",purificationId)
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