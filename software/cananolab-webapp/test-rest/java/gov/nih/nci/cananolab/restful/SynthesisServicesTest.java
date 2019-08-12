package gov.nih.nci.cananolab.restful;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertNotNull;

public class SynthesisServicesTest {
    String urlbase = "http://localhost:8080/caNanoLab/rest/";
    Client client;

    @Before
    public void Init() throws Exception {
        client = ClientBuilder.newClient();
    }


    @Test
    public void view() {
        String jsonString = client.target(urlbase)
                .register(SynthesisServices.class)
                .path("synthesis/summaryView")
                .queryParam("sampleId", "20917507") //NCL-23
                .request("application/json")
                .header("some-header", "true")
                .get(String.class);

        assertNotNull(jsonString);
    }

    @Before
    public void setUp() {

    }

    @Test
    public void edit() {
    }
}