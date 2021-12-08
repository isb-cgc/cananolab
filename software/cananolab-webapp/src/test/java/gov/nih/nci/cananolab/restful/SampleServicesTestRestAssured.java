package gov.nih.nci.cananolab.restful;

import gov.nih.nci.cananolab.restful.util.RestTestLoginUtil;
import gov.nih.nci.cananolab.ui.form.SearchSampleForm;
import io.restassured.response.Response;
import org.junit.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.hasItems;
import static org.hamcrest.Matchers.hasToString;

public class SampleServicesTestRestAssured {

	@Test
	public void testSubmissionSetup() {

		//http://www.hascode.com/2011/10/testing-restful-web-services-made-easy-using-the-rest-assured-framework/

		String jsessionId = RestTestLoginUtil.testLogin();

		Response res =
				given().contentType("application/json").cookie("JSESSIONID=" + jsessionId).expect()
				.body("organizationNamesForUser", hasItems("AIST_HTRC",
						"BB_SH_DFCI_WCMC_BWH_MIT",
						"BB_SH_KCI_DFCI_WCMC_BWH_MIT")).when().get(RestTestLoginUtil.readTestUrlProperty() +  "caNanoLab/rest/sample/submissionSetup");

		System.out.println(res.getBody().asString());
		
		

	}

	@Test
	public void testSearchSample() {
		SearchSampleForm form = new SearchSampleForm();
		//Because "contains" operand is not set, exact name is needed;
		form.setSampleName("SY-NCL-23-1");
		
		String jsessionId = RestTestLoginUtil.testLogin();
		
		Response res = //with().parameters("sampleName", "SY-NCL-23-1")
		given().contentType("application/json").cookie("JSESSIONID=" + jsessionId).body(form)
		.expect().body("sampleName", hasToString("[SY-NCL-23-1]"))
		.when().post(RestTestLoginUtil.readTestUrlProperty() +  "caNanoLab/rest/sample/searchSample");
		
		System.out.println(res.getBody().asString());
	}
}
