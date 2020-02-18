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
        auth.setUserName("lernerm");
        auth.setPassword("lernerm");

        //Create spec for all test logins in this class
        specification = new RequestSpecBuilder()
                .setContentType( ContentType.JSON)
                .setBaseUri("http://192.168.1.16:8090/caNanoLab/rest/")
                .addFilter(new ResponseLoggingFilter())
                .addFilter(new RequestLoggingFilter())
                .setSessionId(jsessionId)
                .setAuth(auth)
                .build();


    }

    @Test
    public void setup() {
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
        functionalizationBean.setFileBeans(fileBeans);

        try {
            Response locationHeader = given().spec(specification).
                    body(functionalizationBean).when().post("synthesisFunctionalization/removeFile")
                    .then().statusCode(200).extract().response();


            assertNotNull(locationHeader);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }


    @Test
    public void removeFileX() {
        System.out.println("MHL removeFile");
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
        functionalizationBean.setFileBeans(fileBeans);

//        String jsessionId = RestTestLoginUtil.loginTest();

        Client aClient = ClientBuilder.newBuilder()
                .register(ObjectMapperProvider.class)
                .build();


       // aClient.register(new Authenticator("lernerm", "lernerm"));
       aClient.register(new BasicAuthentication("lernerm", "lernerm"));

        WebTarget webTarget = aClient.target("http://192.168.1.16:8090/caNanoLab/rest");
        webTarget.register(SynthesisFunctionalizationServices.class);

        WebTarget submitWebTarget = webTarget.path("synthesisFunctionalization").path("removeFile");
 //       String credentials = "lernerm:lernerm";
 //       String base64encoded = Base64.getEncoder().encodeToString(credentials.getBytes());


String dataJson = "{\n" +
        "    \"id\":\"1000\",\n" +
        "    \"sampleId\":\"1000\",\n" +
        "    \"dataId\":\"1000\",\n" +
        "    \"funcElementBeans\":[ ],\n" +
        "    \"fileBeans\":[\n" +
        "        gov.nih.nci.cananolab.restful.view.edit.SimpleFileBean@18d87d80\n" +
        "    ],\n" +
        "    \"errors\":[]\n" +
        "    \"createdDate\":null,\n" +
        "    \"createdBy\":\"\"\n" +
        "}";
        javax.ws.rs.core.Response postResponse =
                submitWebTarget.request("application/json")

 //                       .header( HttpHeaders.AUTHORIZATION, "Basic " + base64encoded)

                       //  .post(Entity.json(functionalizationBean));
                        .post(Entity.text(dataJson));

        assertNotNull(postResponse);
   //     System.out.println("MHL functionalizationBean: " + dataJson);
        System.out.println("MHL functionalizationBean: " + functionalizationBean);
        System.out.println("MHL postResponse.getStatus(): " + postResponse.getStatus());
        System.out.println("MHL postResponse.getStatus(): " + postResponse.getStatusInfo());

        // assertTrue(postResponse.getStatus() == 302);
//        assertTrue(postResponse.getStatus() == 401);
        assertTrue(postResponse.getStatus() == 400);

        postResponse.bufferEntity();
        String json = (String) postResponse.readEntity(String.class);
        System.out.println("MHL postResponse: " + json);

      //  assertTrue(json.contains("Session expired"));
      //  RestTestLoginUtil.logoutTest();
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
