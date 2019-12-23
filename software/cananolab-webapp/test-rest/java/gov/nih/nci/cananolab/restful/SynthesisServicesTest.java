package gov.nih.nci.cananolab.restful;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

public class SynthesisServicesTest {
    String urlbase = "http://localhost:8080/caNanoLab/rest/";
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
        client = ClientBuilder.newClient();
    }

    @Test
    public void testSummaryView() {
        String jsonString = client.target(urlbase)
                .register(SampleServices.class)
                .path("synthesis/summaryView")
                .queryParam("sampleId", "20917507") //NCL-23
                .request("application/json")
                .header("some-header", "true")
                .get(String.class);


//        String jsonString = client.target(urlbase)
//                .register(SampleServices.class)
//                .path("composition/summaryView")
//                .queryParam("sampleId", "20917507") //NCL-23
//                .request("application/json")
//                .header("some-header", "true")
//                .get(String.class);

        assertNotNull(jsonString);
    }


    @Test
    public void edit() {
    }

}