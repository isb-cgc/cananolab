package gov.nih.nci.cananolab.restful;



import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;

import gov.nih.nci.cananolab.restful.util.RestTestLoginUtil;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertNotNull;

public class CompositionServicesTest {

	String urlbase = RestTestLoginUtil.readTestUrlProperty() +  "/rest/";
	Client client; 

	@Before
	public void setUp() throws Exception {
		client = ClientBuilder.newClient();
	}

	@Test
	public void testSummaryView() {
		String jsonString = client.target(urlbase)
				.register(SampleServices.class)
				.path("composition/summaryView")
				.queryParam("sampleId", "20917507") //NCL-23
				.request("application/json")
				.header("some-header", "true")
				.get(String.class);

		assertNotNull(jsonString);
	}

}
