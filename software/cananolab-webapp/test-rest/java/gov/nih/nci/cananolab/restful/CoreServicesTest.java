package gov.nih.nci.cananolab.restful;

import gov.nih.nci.cananolab.dto.common.FavoriteBean;
import gov.nih.nci.cananolab.restful.util.RestTestLoginUtil;
import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import javax.management.Query;
import javax.swing.*;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static io.restassured.RestAssured.given;

import static io.restassured.RestAssured.get;
import static org.hamcrest.Matchers.equalToIgnoringCase;
import static org.hamcrest.Matchers.everyItem;
import static org.hamcrest.Matchers.hasItem;

import static org.hamcrest.Matchers.hasItems;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

public class CoreServicesTest {
	
	String urlbase = RestTestLoginUtil.readTestUrlProperty() +  "caNanoLab/rest/";
	Client client;
	String jsessionId;
	private static RequestSpecification specification;

	@Before
	public void setUp() {
		//Get login session
		String jsessionId = RestTestLoginUtil.testLogin();

		//Create spec for all test logins in this class
		specification = new RequestSpecBuilder()
				.setContentType(ContentType.JSON)
				.setBaseUri(RestTestLoginUtil.readTestUrlProperty() +  "caNanoLab/rest/core/")
				.addFilter(new ResponseLoggingFilter())
				.addFilter(new RequestLoggingFilter())
				.setSessionId(jsessionId)
				.build();

	}

	@After
	public void tearDown(){
//		RestTestLoginUtil.logoutTest();
	}

	@Test
	public void testInitSetup() {
//		client = ClientBuilder.newClient();

//		String jsonString = client.target(urlbase)
//				.register(CoreServices.class)
//				.path("core/initSetup")
//				.request("application/json")
//				.header("some-header", "true")
//				.get(String.class);
//
//		assertNotNull(jsonString);
//		assertTrue(jsonString.length() > 0);
//		assertTrue(jsonString.contains("numOfPublicCharacterizations"));

		Response response = given().spec(specification).when().get("initSetup").then().statusCode(200).extract().response();
		assertNotNull(response);
		String json = response.jsonPath().prettyPrint();
		Integer sampleNum = response.path("numOfPublicSamples");
		assertTrue(sampleNum >1);
	}
	
	
	@Test
	public void testGetTabs() {
//		client = ClientBuilder.newClient();
//
//		String jsonString = client.target(urlbase)
//				.register(CoreServices.class)
//				.path("core/getTabs")
//				.request("application/json")
//				.header("some-header", "true")
//				.get(String.class);
//
//		assertNotNull(jsonString);

		Response res = given().spec(specification).when().get("getTabs").then().statusCode(200).extract().response();
	}

	@Test
	public void testGetFavorites(){

//		Response res =
//				given().contentType("application/json").cookie("JSESSIONID=" + jsessionId)
//						.when().get(RestTestLoginUtil.readTestUrlProperty() +  "caNanoLab/rest/core/getFavorites");

		Response res = given().spec(specification).when().get("getFavorites").then().statusCode(200).extract().response();

		assertNotNull(res);
		List<String> jsonResponse = res.jsonPath().getList("samples.dataName");
		assertTrue("response received",jsonResponse.size()>0);

		//check that the list of favorite samples includes the one we want
		res.then().body("samples.dataName",hasItem("Synthesis sample"));

		ArrayList<String> favoriteSamples = res.path("samples");
		assertTrue("samples favorites retrieved",favoriteSamples.size()>0);
		ArrayList<String> favoriteProtocols = res.path("protocols");
		assertTrue("protocol favorites retrieved",favoriteProtocols.size()>0);



	}


	@Test
	public void testAddFavorites(){

		FavoriteBean form = new FavoriteBean();
		form.setDataType("sample");
		form.setDataId("1000");
		form.setDataName("Synthesis sample");
		form.setLoginName(SpringSecurityUtil.getLoggedInUserName());
//		Response res =
//				given() .contentType("application/json").cookie("JSESSIONID=" + jsessionId).body(form)
//				.expect().statusCode(200)
//				.when().post(RestTestLoginUtil.readTestUrlProperty() +  "caNanoLab/rest/core/addFavorite");

		Response res = given().spec(specification).body(form).when().post("addFavorite").then().statusCode(200).extract().response();
				
	}
	
	@Test
	public void testDeleteFavorites(){

		FavoriteBean form = new FavoriteBean();
		form.setDataType("sample");
		form.setDataId("1000");
		form.setDataName("Synthesis sample");



		Response res = given().spec(specification).when().get("getFavorites").then().statusCode(200).extract().response();


		//query for form row id for deletion
		List<Map<String,Object>> favoriteSamples = res.jsonPath().getList("samples");
		for(Map<String,Object> favoriteSample:favoriteSamples){
			if(favoriteSample.get("dataName").equals(form.getDataName())){
				Object x = favoriteSample.get("id");
				Long y = ((Integer) x).longValue();
				form.setId(y);
			}
		}


		res = given().spec(specification).body(form).when().post("deleteFavorite").then().statusCode(200).extract().response();


				
	}


}
