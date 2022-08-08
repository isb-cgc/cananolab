package gov.nih.nci.cananolab.restful;

import gov.nih.nci.cananolab.restful.util.RestTestLoginUtil;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.http.HttpStatus;

import static io.restassured.RestAssured.authentication;
import static io.restassured.RestAssured.basic;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalToIgnoringCase;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

public class SynthesisServicesTest {
    String urlbase = RestTestLoginUtil.readTestUrlProperty() +  "/rest/";
    Client client;

    @After
    public void tearDown() throws Exception {
    }

    @Test
    public void view() {
    }

    @Test
    public void summaryPrint() {
    }

    @Test
    public void summaryExport() {
    }


    @Before
    public void setUp() {
        RestAssured.authentication = basic("canano_curator","canano_curator");
        client = ClientBuilder.newClient();
    }

    @Test
    public void testSummaryView() {

//        String jsessionId = RestTestLoginUtil.loginTest();
//
//        String jsonString = client.target(urlbase)
//                .register(SampleServices.class)
//                .path("synthesis/summaryView")
//                .queryParam("sampleId", "20917507") //NCL-23
//                .request("application/json")
//                .header("some-header", "true")
//                .get(String.class);

//        Response res =
//                given().contentType("application/json").cookie("JSESSIONID=" + jsessionId)
//                        .expect()
//                        .body("samples.dataName", equalToIgnoringCase("test_HJ_11"))
//                        .when().get(RestTestLoginUtil.readTestUrlProperty() +  "/rest/synthesis/summaryView");

                ValidatableResponse res =  given().auth()
                        .basic("canano_curator", "canano_curator")
                        .when()
                        .get(RestTestLoginUtil.readTestUrlProperty() +  "/rest/synthesis/summaryView")
                        .then()
                        .assertThat()
                        .statusCode(HttpStatus.OK.value());



//        RestTestLoginUtil.logoutTest();
//
//        assertNotNull(jsonString);
    }


    @Test
    public void edit() {
    }

}
