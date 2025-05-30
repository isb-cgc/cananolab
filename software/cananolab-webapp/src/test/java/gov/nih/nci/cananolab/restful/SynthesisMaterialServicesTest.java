package gov.nih.nci.cananolab.restful;

import gov.nih.nci.cananolab.domain.common.Supplier;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterialElement;
import gov.nih.nci.cananolab.restful.util.RestTestLoginUtil;
import gov.nih.nci.cananolab.restful.view.edit.SimpleFileBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisFunctionalizationBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisMaterialBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisMaterialElementBean;
import gov.nih.nci.cananolab.security.service.AclOperationService;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;
import java.awt.*;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.mail.Multipart;
import javax.ws.rs.core.MediaType;
import net.sf.ehcache.search.parser.MValue;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONObject;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.security.acls.model.AclService;


import static io.restassured.RestAssured.get;
import static io.restassured.RestAssured.given;

import static io.restassured.RestAssured.oauth;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

public class SynthesisMaterialServicesTest {
private static RequestSpecification specification;
    @Before
    public void setUp() {
        //Get login session
        String jsessionId = RestTestLoginUtil.testLogin();

        //Create spec for all test logins in this class
        specification = new RequestSpecBuilder()
                .setContentType(ContentType.JSON)
                .setBaseUri("http://localhost:8080/caNanoLab/rest/")
                .addFilter(new ResponseLoggingFilter())
                .addFilter(new RequestLoggingFilter())
                .setSessionId(jsessionId)
                .build();

    }

    @After
    public void tearDown(){
//        RestTestLoginUtil.logoutTest();
    }


    @Test
    public void testSetup() {
//Test the initial setup of a synthesis material item - including the pass through of drop-down values
        try {
            Response response = given().spec(specification).queryParam("sampleId", "1000")
                    .when().get("synthesisMaterial/setup")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);


            ArrayList<String> materialTypes = response.path("materialTypes");
            assertTrue(materialTypes.contains("coat"));
            ArrayList<String> pubChemTypes = response.path("pubChemDataSources");
            assertTrue(pubChemTypes.contains("Substance"));
        }
        catch (Exception e) {
            e.printStackTrace();
        }

    }

    @Test
    public void testEdit() {
        //Test the edit form retrieval of an existing material element
        try {
            Response response = given().spec(specification)
                    .queryParam("sampleId", "1000")
                    .queryParam("synMaterialId","1000")
                    .when().get("synthesisMaterial/edit")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);
            String id = response.path("id").toString();
            assertTrue(id.equals("1000"));
            ArrayList<SimpleSynthesisMaterialElementBean> materialElements = response.path("materialElements");
            assertTrue(materialElements.size()>0);
            JSONObject jResponse = new JSONObject(response.body().asString());
            ObjectMapper mapper = new ObjectMapper();
            SimpleSynthesisMaterialBean synthesisMaterialBean = mapper.readValue(jResponse.toString(), SimpleSynthesisMaterialBean.class);
            assertTrue(synthesisMaterialBean.getType().equalsIgnoreCase("Synthesis"));

       }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testSaveNewSynthesisMaterialElement() {
        SimpleSynthesisMaterialBean materialBean = getSimpleSynthesisMaterialBean("1000", "1000");
//
//        materialBean.setSampleId("1000");
//        materialBean.setId(new Long(1000));
        int initialNumberOfElements = materialBean.getMaterialElements().size();
        SimpleSynthesisMaterialElementBean elementBean = new SimpleSynthesisMaterialElementBean();
        elementBean.setDescription("New Description");
        elementBean.setMolecularFormulaType("Hill");
        elementBean.setMolecularFormula("C1B2A3");
        elementBean.setChemicalName("New Chemical");
        elementBean.setType("Reflexivity");
        elementBean.setValue(new Float(22.4));
        elementBean.setValueUnit("g");
        elementBean.setType("reagent");
        Supplier supplier = new Supplier();
        supplier.setSupplierName("New Supplier");
        supplier.setLot("AB23");
        supplier.setId(new Long(1000));
//        Map<String, String> supplierMap = new HashMap<String, String>();
//        supplierMap.put("Lot","AB#$");
//        supplierMap.put("SupplierName","New Supplier");
//        supplierMap.put("id","1000");
        elementBean.setSupplier(supplier);
//        List<SimpleSynthesisMaterialElementBean> elementBeans = new ArrayList<SimpleSynthesisMaterialElementBean>();
//        elementBeans.add(elementBean);
//        materialBean.setMaterialElements(elementBeans);
        materialBean.setMaterialElementBeingEdited(elementBean);

        try {
            Response response = given().spec(specification)
                    .body(materialBean).when().post("synthesisMaterial/saveSynthesisMaterialElement")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);
            materialBean = getSimpleSynthesisMaterialBean("1000", "1000");
            assertTrue(materialBean.getMaterialElements().size()>initialNumberOfElements);
            String debug = response.asString();
            System.out.println(debug);
            //TODO - get the ID and possibly use for all of the other tests.
            //This will also ensure it was actually saved to database

        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testEditSynthesisMaterial(){
//TODO write - edit fields within Material itself.
    }

    @Test
    public void testEditSupplier(){

        SimpleSynthesisMaterialBean materialBean = getSimpleSynthesisMaterialBean("1005", "1005");
        List<SimpleSynthesisMaterialElementBean> elements = materialBean.getMaterialElements();
        for(SimpleSynthesisMaterialElementBean elementBean: elements){
            int i = 0;
            if (elementBean.getSupplier()!=null){
                elementBean.getSupplier().setLot("NewLotTest"+i);
            }
        }
        try {
            Response response = given().spec(specification)
                    .body(materialBean).when().post("synthesisMaterial/submit")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);
            materialBean = getSimpleSynthesisMaterialBean("1005", "1005");
            elements = materialBean.getMaterialElements();
            for(SimpleSynthesisMaterialElementBean elementBean: elements){
                assertTrue(elementBean.getSupplier().getLot().startsWith("NewLotTest"));
            }
            String debug = response.asString();
            System.out.println(debug);

        }
        catch (Exception e) {
            e.printStackTrace();
        }

    }

    @Test
    public void testEditSynthesisMaterialElement(){
//TODO write
    }

    @Test
    public void testRemoveSynthesisMaterialElement() {
        SimpleSynthesisMaterialBean materialBean = getSimpleSynthesisMaterialBean("1000", "1000");
        List<SimpleSynthesisMaterialElementBean> elements = materialBean.getMaterialElements();
        SimpleSynthesisMaterialElementBean elementBean = elements.get(0);
        materialBean.setMaterialElementBeingEdited(elementBean);


        try {
            Response response = given().spec(specification)
                    .body(materialBean).when().post("synthesisMaterial/removeSynthesisMaterialElement")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testImplicitRemoveSynthesisMaterialElement(){
        SimpleSynthesisMaterialBean materialBean = getSimpleSynthesisMaterialBean("1000", "1000");
        List<SimpleSynthesisMaterialElementBean> elementBeans = materialBean.getMaterialElements();
        SimpleSynthesisMaterialElementBean elementBean = elementBeans.get(0);
        elementBeans.remove(elementBean);
        materialBean.setMaterialElements( elementBeans);

        try {
            Response response = given().spec(specification).
                    body(materialBean).when().post("synthesisMaterial/submit")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);
            String debug = response.asString();
            System.out.println(debug);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testImplicitInherentFunctionRemoval(){
        SimpleSynthesisMaterialBean materialBean = getSimpleSynthesisMaterialBean("1005", "1222");
        List<SimpleSynthesisMaterialElementBean> elementBeans = materialBean.getMaterialElements();
        for(SimpleSynthesisMaterialElementBean elementBean: elementBeans){
            if(elementBean.getInherentFunctionList()!=null && elementBean.getInherentFunctionList().size()>0){
                elementBean.getInherentFunctionList().remove(0);
            }
        }
        try {
            Response response = given().spec(specification).
                    body(materialBean).when().post("synthesisMaterial/submit")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);
            String debug = response.asString();
            System.out.println(debug);
        }
        catch (Exception e) {
            e.printStackTrace();
        }

    }

    @Test
    public void testSaveExternalFile() {
        SimpleSynthesisMaterialBean materialBean = getSimpleSynthesisMaterialBean("1000", "1000");
//        materialBean.setSampleId("1000");
//        materialBean.setId(new Long(1000));
        SimpleFileBean fileBean = new SimpleFileBean();
        fileBean.setType("document");
        fileBean.setTitle("TestTitle");
        fileBean.setUriExternal(true);
        fileBean.setExternalUrl("https://evs.nci.nih.gov/ftp1/GAIA/GAIA-NCIt_Terminology.txt");
        fileBean.setSampleId("1000");
        fileBean.setUri("https://evs.nci.nih.gov/ftp1/GAIA/GAIA-NCIt_Terminology.txt");
        materialBean.setFileBeingEdited(fileBean);
//        List<SimpleFileBean> fileBeans = new ArrayList<SimpleFileBean>();
//        fileBeans.add(fileBean);
//        materialBean.setFileElements(fileBeans);


        try {
            Response response = given().spec(specification)
                    .body(materialBean).when().post("synthesisMaterial/saveFile")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);
            String debug = response.asString();
            System.out.println(debug);

            //TODO Get material Bean and query to see if the file is there

        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testSaveLocalFile() {
        SimpleSynthesisMaterialBean materialBean = getSimpleSynthesisMaterialBean("1005", "1005");
//        materialBean.setSampleId("1000");
//        materialBean.setId(new Long(1000));
        SimpleFileBean fileBean = new SimpleFileBean();
        fileBean.setType("document");
        fileBean.setTitle("TestTitle");
        fileBean.setUriExternal(false);
        fileBean.setSampleId("1000");
        materialBean.setFileBeingEdited(fileBean);
//        List<SimpleFileBean> fileBeans = new ArrayList<SimpleFileBean>();
//        fileBeans.add(fileBean);
//        materialBean.setFileElements(fileBeans);


        try {
            //TODO call upload file
            //http://127.0.0.1:8080/caNanoLab/rest/core/uploadFile
            uploadFile();

            Response response = given().spec(specification)
                    .body(materialBean).when().post("synthesisMaterial/saveFile")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);
            String debug = response.asString();
            System.out.println(debug);

            //TODO Get material Bean and query to see if the file is there

        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testRemoveFile() {
        SimpleSynthesisMaterialBean materialBean = getSimpleSynthesisMaterialBean("1000","1000");
        List<SimpleFileBean> fileBeans = materialBean.getFileElements();
        SimpleFileBean fileBean = fileBeans.get(0);

        materialBean.setFileBeingEdited(fileBean);


        try {
            Response response = given().spec(specification).
                    body(materialBean).when().post("synthesisMaterial/removeFile")
                    .then().statusCode(200).extract().response();


            assertNotNull(response);
            String debug = response.asString();
            System.out.println(debug);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testCreateMaterial(){
        SimpleSynthesisMaterialBean synthesisMaterialBean = new SimpleSynthesisMaterialBean();
        synthesisMaterialBean.setSampleId("1000");
        synthesisMaterialBean.setDescription("Test description");
        try {
            Response response = given().spec(specification).
                    body(synthesisMaterialBean).when().post("synthesisMaterial/submit")
                    .then().statusCode(200).extract().response();
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testCreateMaterialAndSynthesis(){
        //TODO write
        SimpleSynthesisMaterialBean synthesisMaterialBean = new SimpleSynthesisMaterialBean();
        synthesisMaterialBean.setSampleId("65634305");
        synthesisMaterialBean.setDescription("Test new synthesis");
        try {
            Response response = given().spec(specification).
                    body(synthesisMaterialBean).when().post("synthesisMaterial/submit")
                    .then().statusCode(200).extract().response();
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testSubmit() {
        SimpleSynthesisMaterialBean materialBean = getSimpleSynthesisMaterialBean("1000","1000");

        SimpleSynthesisMaterialElementBean elementBean = new SimpleSynthesisMaterialElementBean();
        elementBean.setChemicalName("TestChem");
        elementBean.setMolecularFormula("CHO2Si");
        elementBean.setMolecularFormulaType("Hill");
        elementBean.setDescription("Test material element");
        elementBean.setCreatedBy("");
        elementBean.setType("reagent");
        List<SimpleSynthesisMaterialElementBean> elementBeans = new ArrayList<SimpleSynthesisMaterialElementBean>();
        elementBeans.add(elementBean);
        materialBean.setMaterialElements(elementBeans);


        try {
            Response response = given().spec(specification).
                    body(materialBean).when().post("synthesisMaterial/submit")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);
            String debug = response.asString();
            System.out.println(debug);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testSubmitWithSupplier() {
        SimpleSynthesisMaterialBean materialBean = getSimpleSynthesisMaterialBean("1000","1000");

        SimpleSynthesisMaterialElementBean elementBean = new SimpleSynthesisMaterialElementBean();
        elementBean.setChemicalName("TestChemSupplier2222");
        elementBean.setMolecularFormula("CHO2SB");
        elementBean.setMolecularFormulaType("Hill");
        elementBean.setDescription("Test material element 2");
        elementBean.setCreatedBy("");
        elementBean.setType("reagent");
//        Map<String,String> supplierMap = new HashMap<String,String>();
//        supplierMap.put("SupplierName", "Supplier1");
//        supplierMap.put("Lot", "LOTABCD");
        Supplier supplier = new Supplier();
        supplier.setSupplierName("Supplier1");
        supplier.setLot("LOTABCD");
        elementBean.setSupplier(supplier);
        List<SimpleSynthesisMaterialElementBean> elementBeans = new ArrayList<SimpleSynthesisMaterialElementBean>();
        elementBeans.add(elementBean);
        materialBean.setMaterialElements(elementBeans);


        try {
            Response response = given().spec(specification).
                    body(materialBean).when().post("synthesisMaterial/submit")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);
            String debug = response.asString();
            System.out.println(debug);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testDeleteMaterialElement(){
        SimpleSynthesisMaterialBean materialBean = getSimpleSynthesisMaterialBean("1000","1000");
        List<SimpleSynthesisMaterialElementBean> elementBeans = materialBean.getMaterialElements();
        elementBeans.remove(0);
        materialBean.setMaterialElements(elementBeans);
        try {
            Response response = given().spec(specification).
                    body(materialBean).when().post("synthesisMaterial/submit")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);
            String debug = response.asString();
            System.out.println(debug);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testSubmitWithIF(){
        SimpleSynthesisMaterialBean materialBean = getSimpleSynthesisMaterialBean("1000","1000");
        SimpleSynthesisMaterialElementBean elementBean = new SimpleSynthesisMaterialElementBean();
        elementBean.setChemicalName("TestChemIF");
        elementBean.setMolecularFormula("ABXYZ10");
        elementBean.setMolecularFormulaType("Hill");
        elementBean.setDescription("Test ME with IF");
        elementBean.setType("core");
        List<Map<String, String>> inherentFunctionList = new ArrayList<Map<String, String>>();
        Map<String,String> newIF = new HashMap<String, String>();
        newIF.put("description", "testDescription");
        newIF.put("type", "Function Type");
        inherentFunctionList.add(newIF);
        elementBean.setInherentFunctionList(inherentFunctionList);

        List<SimpleSynthesisMaterialElementBean> elementBeans = materialBean.getMaterialElements();
        elementBeans.add(elementBean);
        materialBean.setMaterialElements(elementBeans);
        try {
            Response response = given().spec(specification).
                    body(materialBean).when().post("synthesisMaterial/submit")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);
            String debug = response.asString();
            System.out.println(debug);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void addIFtoExisting(){
        //TODO write
    }

    @Test
    public void deleteIF(){
        //TODO write
    }

    @Test
    public void testDelete() {
        SimpleSynthesisMaterialBean materialBean = getSimpleSynthesisMaterialBean("1000","1000");

        try {
            Response response = given().spec(specification).
                    body(materialBean).when().post("synthesisMaterial/delete")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testViewDetails() {
        SimpleSynthesisMaterialBean materialBean = getSimpleSynthesisMaterialBean("1000","1000");


        try {
            Response response = given().spec(specification).
                    body(materialBean).when().post("synthesisMaterial/viewDetails")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);
            String debug = response.asString();
            System.out.println(debug);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    private SimpleSynthesisMaterialBean getSimpleSynthesisMaterialBean(String sampleId, String materialId){
        try {
            Response response = given().spec(specification)
                    .queryParam("sampleId", sampleId)
                    .queryParam("synMaterialId",materialId)
                    .when().get("synthesisMaterial/edit")
                    .then().statusCode(200).extract().response();


            JSONObject jResponse = new JSONObject(response.body().asString());
            ObjectMapper mapper = new ObjectMapper();
            return mapper.readValue(jResponse.toString(), SimpleSynthesisMaterialBean.class);

        }
        catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    @Test
    public void uploadFile(){
        String jsessionId = RestTestLoginUtil.testLogin();
        RequestSpecification specificationMP = new RequestSpecBuilder()
                .setBaseUri("http://localhost:8080/caNanoLab/rest/")
                .addFilter(new ResponseLoggingFilter())
                .addFilter(new RequestLoggingFilter())
                .setSessionId(jsessionId)
                .build();

        given().spec(specificationMP)
                .contentType("multipart/form-data")
                .multiPart("file", new File("/local/content/TestUpload.txt"))
                .when().post("core/uploadFile")
                .then().statusCode(200).extract().response();;

//        var uploadUrl = '/rest/core/uploadFile';
//        var fd = new FormData();
//        fd.append('file', file);
//        $http.post(uploadUrl, fd, {
//                transformRequest: angular.identity,
//                headers: {'Content-Type': undefined}
//            })
//                .success(function(){
//        })
//                .error(function(){
//        });
//    };



    }

    private String toJson(Object o){
    ObjectMapper Obj = new ObjectMapper();

        try {

        String jsonStr = Obj.writeValueAsString(o);
        return jsonStr;

    }        catch (Exception e) {

        e.printStackTrace();
    }
        return null;
    }
}