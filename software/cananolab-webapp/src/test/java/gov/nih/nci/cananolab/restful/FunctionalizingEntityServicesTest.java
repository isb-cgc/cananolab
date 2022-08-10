package gov.nih.nci.cananolab.restful;

import gov.nih.nci.cananolab.restful.util.RestTestLoginUtil;
import gov.nih.nci.cananolab.restful.view.edit.SimpleFileBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleFunctionBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleFunctionalizingEntityBean;
import io.restassured.response.Response;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.WebTarget;
import org.junit.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalToIgnoringCase;
import static org.hamcrest.Matchers.hasItems;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

public class FunctionalizingEntityServicesTest {

	@Test
	public void testSetup() {

		Response res =
				given().contentType("application/json")
				.params("sampleId", "20917510").expect()
				.body("functionalizingEntityTypes", hasItems("Magnetic Particle","Monomer","Polymer","Quantum Dot","antibody","biopolymer","radioisotope","small molecule"))
						.when().get(RestTestLoginUtil.readTestUrlProperty() +  "/rest/functionalizingEntity/setup");

		System.out.println(res.getBody().asString());
		
	}
	@Test
	public void testEdit() {
		
		String jsessionId = RestTestLoginUtil.testLogin();
		
		Map<String, String> parameters = new HashMap<String, String>();
		parameters.put("sampleId", "20917508");
		parameters.put("dataId", "22719746");
		Response res =
				given().contentType("application/json").cookie("JSESSIONID=" + jsessionId)
				.params(parameters).expect()
				.body("type", equalToIgnoringCase("small molecule"))
						.when().get(RestTestLoginUtil.readTestUrlProperty() +  "/rest/functionalizingEntity/edit");

		System.out.println(res.getBody().asString());
		RestTestLoginUtil.logoutTest();
		
	}

	@Test
	public void testSaveFunction() {

		SimpleFunctionalizingEntityBean simpleFunc = new SimpleFunctionalizingEntityBean();
		simpleFunc.setSampleId("20917510");
		simpleFunc.setType("radioisotope");
		SimpleFunctionBean funcBean = new SimpleFunctionBean();
		funcBean.setType("endosomolysis");
		simpleFunc.setSimpleFunctionBean(funcBean);
		
		String jsessionId = RestTestLoginUtil.testLogin();

		final Client aClient = ClientBuilder.newBuilder()
		        .register(ObjectMapperProvider.class)
		        .build();
		
		WebTarget webTarget = aClient.target(RestTestLoginUtil.readTestUrlProperty() +  "/rest");
		webTarget.register(FunctionalizingEntityServices.class);
		
		WebTarget submitWebTarget = webTarget.path("functionalizingEntity").path("saveFunction");

		javax.ws.rs.core.Response postResponse =
				submitWebTarget.request("application/json")
		         .post(Entity.json(simpleFunc));
		
		assertNotNull(postResponse);
		assertTrue(postResponse.getStatus() == 401);
		
		postResponse.bufferEntity();
		String json = (String) postResponse.readEntity(String.class);
				
		assertTrue(json.contains("Session expired"));
		RestTestLoginUtil.logoutTest();

		}
		
	@Test
	public void testRemoveComposingElement() {

		SimpleFunctionalizingEntityBean simpleFunc = new SimpleFunctionalizingEntityBean();
		simpleFunc.setSampleId("20917510");
		simpleFunc.setType("radioisotope");
		SimpleFunctionBean funcBean = new SimpleFunctionBean();
		funcBean.setType("endosomolysis");
		simpleFunc.setSimpleFunctionBean(funcBean);
		
		String jsessionId = RestTestLoginUtil.testLogin();

		final Client aClient = ClientBuilder.newBuilder()
		        .register(ObjectMapperProvider.class)
		        .build();
		
		WebTarget webTarget = aClient.target(RestTestLoginUtil.readTestUrlProperty() +  "/rest");
		webTarget.register(FunctionalizingEntityServices.class);
		
		WebTarget submitWebTarget = webTarget.path("functionalizingEntity").path("removeFunction");

		javax.ws.rs.core.Response postResponse =
				submitWebTarget.request("application/json")
		         .post(Entity.json(simpleFunc));
		
		assertNotNull(postResponse);
		assertTrue(postResponse.getStatus() == 401);
		
		postResponse.bufferEntity();
		String json = (String) postResponse.readEntity(String.class);
				
		assertTrue(json.contains("Session expired"));
		RestTestLoginUtil.logoutTest();

		}
		
	@Test
	public void testsaveFile() {

		SimpleFunctionalizingEntityBean simpleFunc = new SimpleFunctionalizingEntityBean();
		simpleFunc.setSampleId("20917510");
		simpleFunc.setType("radioisotope");
		SimpleFileBean file = new SimpleFileBean();
		file.setType("movie");
		file.setTitle("TEST MoVIE");
		file.setUriExternal(false);
		file.setExternalUrl("http://www.cancer.gov");
		file.setSampleId("20917510");
		simpleFunc.setFileBean(file);
		
		String jsessionId = RestTestLoginUtil.testLogin();

		final Client aClient = ClientBuilder.newBuilder()
		        .register(ObjectMapperProvider.class)
		        .build();
		
		WebTarget webTarget = aClient.target(RestTestLoginUtil.readTestUrlProperty() +  "/rest");
		webTarget.register(FunctionalizingEntityServices.class);
		
		WebTarget submitWebTarget = webTarget.path("functionalizingEntity").path("saveFile");

		javax.ws.rs.core.Response postResponse =
				submitWebTarget.request("application/json")
		         .post(Entity.json(simpleFunc));
		
		assertNotNull(postResponse);
		assertTrue(postResponse.getStatus() == 401);
		
		postResponse.bufferEntity();
		String json = (String) postResponse.readEntity(String.class);
				
		assertTrue(json.contains("Session expired"));
		RestTestLoginUtil.logoutTest();

		}
		
	@Test
	public void testRemoveFile() {
		
		SimpleFunctionalizingEntityBean simpleFunc = new SimpleFunctionalizingEntityBean();
		simpleFunc.setSampleId("20917510");
		simpleFunc.setType("radioisotope");
		SimpleFileBean file = new SimpleFileBean();
		file.setType("movie");
		file.setTitle("TEST MoVIE");
		file.setUriExternal(false);
		file.setExternalUrl("http://www.cancer.gov");
		file.setSampleId("20917510");
		List<SimpleFileBean> fileList = new ArrayList<SimpleFileBean>();
		fileList.add(file);
		simpleFunc.setFileBean(file);
		simpleFunc.setFileList(fileList);
		
		String jsessionId = RestTestLoginUtil.testLogin();

		final Client aClient = ClientBuilder.newBuilder()
		        .register(ObjectMapperProvider.class)
		        .build();
		
		WebTarget webTarget = aClient.target(RestTestLoginUtil.readTestUrlProperty() +  "/rest");
		webTarget.register(FunctionalizingEntityServices.class);
		
		WebTarget submitWebTarget = webTarget.path("functionalizingEntity").path("removeFile");

		javax.ws.rs.core.Response postResponse =
				submitWebTarget.request("application/json")
		         .post(Entity.json(simpleFunc));
		
		assertNotNull(postResponse);
		assertTrue(postResponse.getStatus() == 401);
		
		postResponse.bufferEntity();
		String json = (String) postResponse.readEntity(String.class);
				
		assertTrue(json.contains("Session expired"));
		RestTestLoginUtil.logoutTest();

		}
	
	@Test
	public void testSubmit() {

		SimpleFunctionalizingEntityBean simpleFunc = new SimpleFunctionalizingEntityBean();
		simpleFunc.setSampleId("20917510");
		simpleFunc.setType("radioisotope");
		SimpleFileBean file = new SimpleFileBean();
		file.setType("graph");
		file.setTitle("TEST");
		file.setUriExternal(false);
		file.setExternalUrl("http://www.cancer.gov");
		file.setSampleId("20917510");
		SimpleFunctionBean funcBean = new SimpleFunctionBean();
		funcBean.setType("endosomolysis");
		Map<String, Object> domainEntity = new HashMap<String, Object>();
		domainEntity.put("id", "85852160");
		List<SimpleFunctionBean> compList = new ArrayList<SimpleFunctionBean>();
		List<SimpleFileBean> fileList = new ArrayList<SimpleFileBean>();
		compList.add(funcBean);
		fileList.add(file);
		simpleFunc.setFunctionList(compList);
		simpleFunc.setFileList(fileList);
		
		String jsessionId = RestTestLoginUtil.testLogin();

		final Client aClient = ClientBuilder.newBuilder()
		        .register(ObjectMapperProvider.class)
		        .build();
		
		WebTarget webTarget = aClient.target(RestTestLoginUtil.readTestUrlProperty() +  "/rest");
		webTarget.register(FunctionalizingEntityServices.class);
		
		WebTarget submitWebTarget = webTarget.path("functionalizingEntity").path("submit");

		javax.ws.rs.core.Response postResponse =
				submitWebTarget.request("application/json")
		         .post(Entity.json(simpleFunc));
		
		assertNotNull(postResponse);
		assertTrue(postResponse.getStatus() == 401);
		
		postResponse.bufferEntity();
		String json = (String) postResponse.readEntity(String.class);
				
		assertTrue(json.contains("Session expired"));
		RestTestLoginUtil.logoutTest();

		}
		
	@Test
	public void testDelete() {

		SimpleFunctionalizingEntityBean simpleFunc = new SimpleFunctionalizingEntityBean();
		simpleFunc.setSampleId("20917510");
		simpleFunc.setType("radioisotope");
		SimpleFileBean file = new SimpleFileBean();
		file.setType("graph");
		file.setTitle("TEST");
		file.setUriExternal(false);
		file.setExternalUrl("http://www.cancer.gov");
		file.setSampleId("20917510");
		SimpleFunctionBean funcBean = new SimpleFunctionBean();
		funcBean.setType("endosomolysis");
		Map<String, Object> domainEntity = new HashMap<String, Object>();
		domainEntity.put("id", "85852160");
		List<SimpleFunctionBean> compList = new ArrayList<SimpleFunctionBean>();
		List<SimpleFileBean> fileList = new ArrayList<SimpleFileBean>();
		compList.add(funcBean);
		fileList.add(file);
		simpleFunc.setFunctionList(compList);
		simpleFunc.setFileList(fileList);
				
		String jsessionId = RestTestLoginUtil.testLogin();

		final Client aClient = ClientBuilder.newBuilder()
		        .register(ObjectMapperProvider.class)
		        .build();
		
		WebTarget webTarget = aClient.target(RestTestLoginUtil.readTestUrlProperty() +  "/rest");
		webTarget.register(FunctionalizingEntityServices.class);
		
		WebTarget submitWebTarget = webTarget.path("functionalizingEntity").path("delete");

		javax.ws.rs.core.Response postResponse =
				submitWebTarget.request("application/json")
		         .post(Entity.json(simpleFunc));
		
		assertNotNull(postResponse);
		assertTrue(postResponse.getStatus() == 401);
		
		postResponse.bufferEntity();
		String json = (String) postResponse.readEntity(String.class);
				
		assertTrue(json.contains("Session expired"));
		RestTestLoginUtil.logoutTest();

		}
		
}
