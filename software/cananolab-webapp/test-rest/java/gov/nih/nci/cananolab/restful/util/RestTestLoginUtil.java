package gov.nih.nci.cananolab.restful.util;

import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;
import gov.nih.nci.cananolab.util.PropertyUtils;
import io.restassured.RestAssured;
import io.restassured.authentication.PreemptiveBasicAuthScheme;
import io.restassured.response.Response;
import java.util.HashMap;
import java.util.Map;

//import static com.jayway.restassured.RestAssureded.expect;
//import static com.jayway.restassured.RestAssured.with;
import static io.restassured.RestAssured.expect;
import static io.restassured.RestAssured.given;
import static io.restassured.RestAssured.with;

/**
 * 
 * @author yangs8
 *
 */
public class RestTestLoginUtil {
	
	public static String jsessionId = null;

	/**
	 * Need to set correct credentials before running test. Do not check in this file
	 * with credential!!
	 * 
	 * @return
	 */
//	public static String loginTest() {
//
//		if (jsessionId == null) {
//			String username = RestTestLoginUtil.readUserNameProperty();
//			String pwd = RestTestLoginUtil.readPasswordProperty();
//			System.out.println("User " + username + " " + pwd);
//
//			if (username == null || username.length() == 0 ||
//					pwd == null || pwd.length() == 0)
//				return null;
//
////			Response response = with().params("username", username, "password", pwd)
////					.expect().statusCode(200).when().get("http://192.168.1.16:8090/caNanoLab/rest/security/login");
//
//			Response response = with().params("username", username, "password", pwd)
//					.expect().statusCode(200).when().get("http://192.168.1.16:8090/caNanoLab/login");
//
//
//			jsessionId = response.getCookie("JSESSIONID");
//		}
//		return jsessionId;
//	}

	public static String testLogin(){
		if (jsessionId ==null){
			String username = RestTestLoginUtil.readUserNameProperty();
			String pwd = RestTestLoginUtil.readPasswordProperty();
			System.out.println("User " + username + " " + pwd);

			if (username == null || username.length() == 0 ||
					pwd == null || pwd.length() == 0)
				return null;

			Map<String, String> parameters = new HashMap<String, String>();
			parameters.put("username", username);
			parameters.put("password", pwd);

			Response response = given().contentType("application/x-www-form-urlencoded").params(parameters).when().post("http://192.168.1.16:8090/caNanoLab/login");
			jsessionId = response.getCookie("JSESSIONID");
		}
		return jsessionId;
	}

	public static void appServiceLogin(){
//		$http({method: 'POST', url: 'login', headers: {'Content-Type': 'application/x-www-form-urlencoded'},
//		transformRequest: function(obj) {
//			var str = [];
//			for(var p in obj)
//			str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
//			return str.join("&");
//		}, data: $scope.bean}).
	}

//	public static void RestAssuredLogin(){
//		String username = RestTestLoginUtil.readUserNameProperty();
//		String pwd = RestTestLoginUtil.readPasswordProperty();
//		System.out.println("User " + username + " " + pwd);
//		RestAssured.baseURI = System.getProperty("baseurl");
//		PreemptiveBasicAuthScheme authScheme = new PreemptiveBasicAuthScheme();
//		authScheme.setUserName(username);
//		authScheme.setPassword(pwd);
//		RestAssured.authentication = authScheme;}
	
	public static void logoutTest() {
		expect().statusCode(200).when().get("http://192.168.1.16:8090/caNanoLab/rest/security/logout");
		jsessionId = null;
	}
	
	public static String readUserNameProperty() {
		return PropertyUtils.getPropertyCached("resources/local.properties", "user.name");

//		return PropertyUtils.getPropertyCached("local.properties", "user.name");
	}

	public static String readPasswordProperty() {
		return PropertyUtils.getPropertyCached("resources/local.properties", "password");
	}
}
