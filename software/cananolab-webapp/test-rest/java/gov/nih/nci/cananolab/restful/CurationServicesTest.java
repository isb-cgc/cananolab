package gov.nih.nci.cananolab.restful;

import gov.nih.nci.cananolab.service.sample.BatchDataAvailabilityProcess;
import gov.nih.nci.cananolab.ui.form.GenerateBatchDataAvailabilityForm;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.Response;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

//import org.glassfish.jersey.client.ClientConfig;ClientConfig

public class CurationServicesTest {

	String urlbase = "http://192.168.1.16:8090/caNanoLab/rest/";
	Client client; 

	
	
	@Before
	public void setUp() throws Exception {
		client = ClientBuilder.newClient();
						
	}
	@Test
	public void testReviewData() {
		try{
			String jsonString = client.target(urlbase)
					.register(CurationServices.class)
					.path("curation/reviewData")
					.request("application/json")
					.header("some-header", "true")
					.get(String.class);

		}
		catch(Exception e){
			assertTrue("NotAuthorizedException", e.toString().contains("Unauthorized"));
		}
	}

	@Test
	public void testGenerateBatchDataAvailability() {
		GenerateBatchDataAvailabilityForm bean = new GenerateBatchDataAvailabilityForm();
		bean.setOption(BatchDataAvailabilityProcess.BATCH_OPTION1);
		
		final Client aClient = ClientBuilder.newBuilder()
		        .register(ObjectMapperProvider.class)
		        .build();
		
		WebTarget webTarget = aClient.target("http://192.168.1.16:8090/caNanoLab/rest");
		webTarget.register(CurationServices.class);
		
		WebTarget submitPublicationWebTarget = webTarget.path("curation").path("generateBatchDataAvailability");

		Response postResponse =
				submitPublicationWebTarget.request("application/json")
		         .post(Entity.json(bean));
		
		assertNotNull(postResponse);

		postResponse.bufferEntity();
		String json = (String) postResponse.readEntity(String.class);
		assertTrue(json.contains("Session expired"));

	}

	@Test
	public void testManageResult() {
		try{
			String jsonString = client.target(urlbase)
					.register(CurationServices.class)
					.path("curation/manageResult")
					.request("application/json")
					.header("some-header", "true")
					.get(String.class);
		assertNotNull(jsonString);

		}
		catch(Exception e){
			assertTrue("NotAuthorizedException", e.toString().contains("Unauthorized"));
		}
	}
}
