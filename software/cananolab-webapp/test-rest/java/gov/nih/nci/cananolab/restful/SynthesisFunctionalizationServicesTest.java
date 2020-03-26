package gov.nih.nci.cananolab.restful;

import gov.nih.nci.cananolab.restful.util.RestTestLoginUtil;
import gov.nih.nci.cananolab.restful.view.edit.*;
import io.restassured.authentication.PreemptiveBasicAuthScheme;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.codehaus.jackson.map.ObjectMapper;
import org.json.JSONObject;
import org.junit.Before;
import org.junit.Test;

import java.util.*;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.*;

public class SynthesisFunctionalizationServicesTest {
    private static RequestSpecification specification;

    @Before
    public void setUp() throws Exception {
        //Get login session
        String jsessionId = RestTestLoginUtil.testLogin();


        PreemptiveBasicAuthScheme auth = new PreemptiveBasicAuthScheme();
/*
        auth.setUserName("lernerm");
        auth.setPassword("lernerm");
*/

        //Create spec for all test logins in this class
        specification = new RequestSpecBuilder()
                .setContentType( ContentType.JSON)
                .setBaseUri(RestTestLoginUtil.readTestUrlProperty() + "caNanoLab/rest/")
                .addFilter(new ResponseLoggingFilter())
                .addFilter(new RequestLoggingFilter())
                .setSessionId(jsessionId)
            //    .setAuth(auth)
                .build();


    }

    @Test
    public void testSetup() {
        try {
            Response response = given().spec(specification).queryParam("sampleId", "1000")
                    .when().get("synthesisFunctionalization/setup")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);

        }
        catch (Exception e) {
            e.printStackTrace();
        }

    }

    @Test
    public void edit() {
    }

    @Test
    public void saveFunctionalizationElement() {
        SimpleSynthesisFunctionalizationBean functionalizationBean = getSimpleSynthesisFunctionalizationBean("1000", "1000");
//
        int initialNumberOfElements = functionalizationBean.getFunctionalizationElements().size();
        SimpleSynthesisFunctionalizationElementBean elementBean = new SimpleSynthesisFunctionalizationElementBean();
        elementBean.setDescription("New Description");
        elementBean.setMolecularFormulaType("Hill");
        elementBean.setMolecularFormula("C1B2A3");
        elementBean.setChemicalName("New Chemical");
        elementBean.setType("Reflexivity");
        elementBean.setValue(new Float(22.4));
        elementBean.setValueUnit("g");
        elementBean.setType("reagent");
        elementBean.setActivationMethod("Light");
        elementBean.setActivationEffect("Grows");

        functionalizationBean.setFunctionalizationElementBeingEdited(elementBean);

        try {
            Response response = given().spec(specification)
                    .body(functionalizationBean).when().post("synthesisFunctionalization/saveSynthesisFunctionalizationElement")
                    .then().statusCode(200).extract().response();


            assertNotNull(response);
            functionalizationBean = getSimpleSynthesisFunctionalizationBean("1000", "1000");
            assertTrue(functionalizationBean.getFunctionalizationElements().size()>initialNumberOfElements);
            String debug = response.asString();
            System.out.println("MHL " + debug);


            //TODO - get the ID and possibly use for all of the other tests.
            //This will also ensure it was actually saved to database

        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }


    @Test
    public void testSaveFile() {
        SimpleSynthesisFunctionalizationBean functionalizationBean = getSimpleSynthesisFunctionalizationBean("1000", "1000");
        SimpleFileBean fileBean = new SimpleFileBean();
        fileBean.setType("TestType");
        fileBean.setTitle("TestTitle");
        fileBean.setUriExternal(true);
        fileBean.setExternalUrl("http://192.168.1.25:8080/test_file.txt");

        fileBean.setSampleId("1000");
        fileBean.setUri("http://192.168.1.25:8080/test_file.txt");
        functionalizationBean.setFileBeingEdited(fileBean);

        try {
            Response response = given().spec(specification)
                    .body(functionalizationBean).when().post("synthesisFunctionalization/saveFile")
                    .then().statusCode(200).extract().response();

            assertNotNull(response);
            String debug = response.asString();
            System.out.println(debug);

            //TODO Get functionalization Bean and query to see if the file is there

        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void removeFunctionalizationElement() {
    }

    private SimpleSynthesisFunctionalizationBean getSimpleSynthesisFunctionalizationBean(String sampleId, String dataId){
        try {
            Response response = given().spec(specification)
                    .queryParam("sampleId", sampleId)
                    .queryParam("dataId",dataId)
                    .when().get("synthesisFunctionalization/edit")
                    .then().statusCode(200).extract().response();

            System.out.println("MHL response.body().asString(): " + response.body().asString());
// TODO Need to fill in the rest of the response values!
            JSONObject jResponse = new JSONObject(response.body().asString());
            ObjectMapper mapper = new ObjectMapper();
            return mapper.readValue(jResponse.toString(), SimpleSynthesisFunctionalizationBean.class);

        }
        catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }




    @Test
    public void testRemoveFile() {
        SimpleSynthesisFunctionalizationBean functionalizationBean = new SimpleSynthesisFunctionalizationBean();
        functionalizationBean.setSampleId("1000");
        functionalizationBean.setId(new Long(1000));
        SimpleFileBean fileBean = new SimpleFileBean();
        fileBean.setType("TestType");
        fileBean.setTitle("TestTitle");
        fileBean.setUriExternal(true);
        fileBean.setExternalUrl("https:///somewhere.com");
        fileBean.setSampleId("1000");
        List<SimpleFileBean> fileBeans = new ArrayList<SimpleFileBean>();
        fileBeans.add(fileBean);
        functionalizationBean.setFileElements(fileBeans);

        try {
            Response response = given().spec(specification).
                    body(functionalizationBean).when().post("synthesisFunctionalization/removeFile")
                    .then().statusCode(200).extract().response();


            assertNotNull(response);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }


    @Test
    public void submit() {
    }

    @Test
    public void delete() {
    }

    @Test
    public void testViewDetails() {
        SimpleSynthesisFunctionalizationBean functionalizationBean = new SimpleSynthesisFunctionalizationBean();
        functionalizationBean.setSampleId("1000");
        functionalizationBean.setId(new Long(1000));
        SimpleFileBean fileBean = new SimpleFileBean();
        fileBean.setType("TestType");
        fileBean.setTitle("TestTitle");
        fileBean.setUriExternal(true);
        fileBean.setExternalUrl("https:///somewhere.com");
        fileBean.setSampleId("1000");
        List<SimpleFileBean> fileBeans = new ArrayList<SimpleFileBean>();
        fileBeans.add(fileBean);
        functionalizationBean.setFileElements(fileBeans);

        try {
            Response response = given().spec(specification).get("synthesisFunctionalization/viewDetails?sampleId=1000&dataId=1000")
                    .then().statusCode(200).extract().response();

            String createdBy = response.path("createdBy");
            assertEquals("canano_curator", createdBy);
            assertNotNull(response);

            ArrayList<String> funcElementBeans = response.path("funcElementBeans");
            assertNotNull(funcElementBeans);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

}
