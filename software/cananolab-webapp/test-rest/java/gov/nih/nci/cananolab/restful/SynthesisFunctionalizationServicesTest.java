package gov.nih.nci.cananolab.restful;

import com.sun.net.httpserver.BasicAuthenticator;
import gov.nih.nci.cananolab.restful.ObjectMapperProvider;
import gov.nih.nci.cananolab.restful.SynthesisFunctionalizationServices;
import gov.nih.nci.cananolab.restful.util.RestTestLoginUtil;
import gov.nih.nci.cananolab.restful.view.edit.SimpleFileBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisFunctionalizationBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisMaterialBean;
import io.restassured.authentication.PreemptiveBasicAuthScheme;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.jboss.resteasy.client.jaxrs.BasicAuthentication;
import org.junit.Before;
import org.junit.Test;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.HttpHeaders;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

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
                .setBaseUri("http://192.168.1.16:8090/caNanoLab/rest/")
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

            ArrayList<String> materialTypes = response.path("materialTypes");
            assertTrue(materialTypes.contains("coat"));
/*
            ArrayList<String> pubChemTypes = response.path("pubChemDataSources");
            assertTrue(pubChemTypes.contains("Substance"));
  */
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
    }

    @Test
    public void removeFunctionalizationElement() {
    }

    @Test
    public void saveFile() {

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
    public void viewDetails() {
    }
}
