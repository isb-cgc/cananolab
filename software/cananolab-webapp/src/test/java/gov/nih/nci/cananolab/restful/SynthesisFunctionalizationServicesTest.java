package gov.nih.nci.cananolab.restful;

import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationElementBean;
import gov.nih.nci.cananolab.exception.SynthesisException;
import gov.nih.nci.cananolab.restful.util.RestTestLoginUtil;
import gov.nih.nci.cananolab.restful.view.edit.*;
import gov.nih.nci.cananolab.service.sample.impl.SynthesisServiceLocalImpl;
import io.restassured.RestAssured;
import io.restassured.authentication.PreemptiveBasicAuthScheme;
import io.restassured.builder.RequestSpecBuilder;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.apache.commons.io.FileUtils;
import org.codehaus.jackson.map.ObjectMapper;
import org.json.JSONObject;
import org.junit.Before;
import org.junit.Test;
import org.junit.rules.TemporaryFolder;

import java.io.File;
import java.io.IOException;
import java.util.*;

import static io.restassured.RestAssured.given;
import static org.junit.Assert.*;

public class SynthesisFunctionalizationServicesTest {
    private static RequestSpecification specification;
    public TemporaryFolder folder = new TemporaryFolder();
    public String jsessionId;

    @Before
    public void setUp() throws Exception {
        //Get login session
        String jsessionId = this.testLogin();


        PreemptiveBasicAuthScheme auth = new PreemptiveBasicAuthScheme();
/*
        auth.setUserName("lernerm");
        auth.setPassword("lernerm");
*/

        //Create spec for all test logins in this class
        specification = new RequestSpecBuilder()
                .setContentType( ContentType.JSON )
                .setBaseUri( RestTestLoginUtil.readTestUrlProperty() + "/rest/" )
                .addFilter( new ResponseLoggingFilter() )
                .addFilter( new RequestLoggingFilter() )
                .setSessionId( jsessionId )
                //    .setAuth(auth)
                .build();


    }


    public String testLogin() {
        if( jsessionId == null ) {
            String username = RestTestLoginUtil.readUserNameProperty();
            String pwd = RestTestLoginUtil.readPasswordProperty();
            System.out.println( "User " + username + " " + pwd );

            if( username == null || username.length() == 0 ||
                    pwd == null || pwd.length() == 0 )
                return null;

            Map<String, String> parameters = new HashMap<String, String>();
            parameters.put( "username", username );
            parameters.put( "password", pwd );

            Response response = given().contentType( "application/x-www-form-urlencoded" ).params( parameters ).when().post( RestTestLoginUtil.readTestUrlProperty() + "/login" );
            jsessionId = response.getCookie( "JSESSIONID" );
        }
        return jsessionId;
    }


    @Test
    public void testSetup() {
        try {
            Response response = given().spec( specification ).queryParam( "sampleId", "1000" )
                    .when().get( "synthesisFunctionalization/setup" )
                    .then().statusCode( 200 ).extract().response();

            assertNotNull( response.asString() );
            System.out.println( "response: " + response.toString() );

        } catch( Exception e ) {
            e.printStackTrace();
        }

    }

    @Test
    public void testEdit() {
        //Test the edit form retrieval of an existing functionalization element
        try {
            Response response = given().spec( specification )
                    .queryParam( "sampleId", "1000" )
                    .queryParam( "dataId", "1000" )
                    .when().get( "synthesisFunctionalization/edit" )
                    .then().statusCode( 200 ).extract().response();

            assertNotNull( response );
            String id = response.path( "id" ).toString();
            assertTrue( id.equals( "1000" ) );
            ArrayList<SimpleSynthesisFunctionalizationElementBean> functionalizationElements = response.path( "functionalizationElements" );

            assertTrue( functionalizationElements.size() > 0 );
            JSONObject jResponse = new JSONObject( response.body().asString() );
            ObjectMapper mapper = new ObjectMapper();
            SimpleSynthesisFunctionalizationBean synthesisFunctionalizationBean = mapper.readValue( jResponse.toString(), SimpleSynthesisFunctionalizationBean.class );
            assertTrue( synthesisFunctionalizationBean.getType().equalsIgnoreCase( "Synthesis" ) );
            assertTrue( synthesisFunctionalizationBean.getCreatedBy() != null );
            assertTrue( synthesisFunctionalizationBean.getCreatedBy().length() > 0 );


            assertTrue( functionalizationElements.get( 0 ).getInherentFunctionList() != null );
            assertTrue( functionalizationElements.get( 0 ).getInherentFunctionList().size() > 0 );


        } catch( Exception e ) {
            e.printStackTrace();
        }

    }


    @Test
    public void testTester() {
        SimpleSynthesisFunctionalizationBean functionalizationBean = getSimpleSynthesisFunctionalizationBean( "1000", "1000" );
        List<SimpleSynthesisFunctionalizationElementBean> elements = functionalizationBean.getFunctionalizationElements();
        SimpleSynthesisFunctionalizationElementBean elementBean = elements.get( 0 );
        functionalizationBean.setFunctionalizationElementBeingEdited( elementBean );
        try {
            Response response = given().spec( specification )
                    .body( functionalizationBean ).when().post( "synthesisFunctionalization/tester" )
                    .then().statusCode( 200 ).extract().response();

            assertNotNull( response );
        } catch( Exception e ) {
            e.printStackTrace();
        }
    }

    @Test
    public void testSubmitWithIF() {
        SimpleSynthesisFunctionalizationBean functionalizationBean = getSimpleSynthesisFunctionalizationBean( "1000", "1000" );
        SimpleSynthesisFunctionalizationElementBean elementBean = new SimpleSynthesisFunctionalizationElementBean();
        int originalnumberofElements = functionalizationBean.getFunctionalizationElements().size();

        elementBean.setChemicalName( "TestChemIF" );
        elementBean.setMolecularFormula( "ABXYZ10" );
        elementBean.setMolecularFormulaType( "Hill" );
        elementBean.setDescription( "Test SynFunc with IF" );
        elementBean.setCreatedBy( "" );
        elementBean.setType( "core" );

        // Inherent Function
        List<Map<String, String>> inherentFunctionList = new ArrayList<Map<String, String>>();
        Map<String, String> newIF = new HashMap<String, String>();
        newIF.put( "description", "testDescription" );
        newIF.put( "type", "Function Type" );
        inherentFunctionList.add( newIF );
        elementBean.setInherentFunctionList( inherentFunctionList );


        List<SimpleSynthesisFunctionalizationElementBean> elementBeans = functionalizationBean.getFunctionalizationElements();
        elementBeans.add( elementBean );
        functionalizationBean.setFunctionalizationElements( elementBeans );
        try {
            Response response = given().spec( specification ).
                    body( functionalizationBean ).when().post( "synthesisFunctionalization/submit" )
                    .then().statusCode( 200 ).extract().response();

            assertNotNull( response );
            functionalizationBean = getSimpleSynthesisFunctionalizationBean( "1000", "1000" );
            assertTrue(functionalizationBean.getFunctionalizationElements().size()>originalnumberofElements);
            boolean matchFound = false;
            for(SimpleSynthesisFunctionalizationElementBean simpleElementBean:functionalizationBean.getFunctionalizationElements()){
                if(simpleElementBean.getMolecularFormula().equals("ABXYZ10")) {
                    matchFound=true;
                    assertTrue(simpleElementBean.getInherentFunctionList()!=null);
                    assertTrue(simpleElementBean.getInherentFunctionList().size()>0);
                }
                assertTrue(simpleElementBean.getId()!=null);
            }
            assertTrue(matchFound);
            assertNotNull( getSimpleSynthesisFunctionalizationBean( "1000", "1000" ).getFunctionalizationElements().get( 0 ) );
            assertNotNull( getSimpleSynthesisFunctionalizationBean( "1000", "1000" ).getFunctionalizationElements().get( 0 ).getInherentFunctionList() );
            assertTrue( getSimpleSynthesisFunctionalizationBean( "1000", "1000" ).getFunctionalizationElements().get( 0 ).getInherentFunctionList().size() > 0 );


            String debug = response.asString();
            System.out.println( debug );
        } catch( Exception e ) {
            e.printStackTrace();
        }
    }


    @Test
    public void testRemoveFunctionalizationElement() {
        // SimpleSynthesisFunctionalizationBean functionalizationBean = getSimpleSynthesisFunctionalizationBean("67928064", "1000");
        // SimpleSynthesisFunctionalizationBean functionalizationBean = getSimpleSynthesisFunctionalizationBean("1000", "67928064");
        SimpleSynthesisFunctionalizationBean functionalizationBean = getSimpleSynthesisFunctionalizationBean( "1000", "1000" );
        List<SimpleSynthesisFunctionalizationElementBean> elements = functionalizationBean.getFunctionalizationElements();
        SimpleSynthesisFunctionalizationElementBean elementBean = elements.get( 0 );
        functionalizationBean.setFunctionalizationElementBeingEdited( elementBean );
        try {
            Response response = given().spec( specification )
                    .body( functionalizationBean ).when().post( "synthesisFunctionalization/removeSynthesisFunctionalizationElement" )
                    .then().statusCode( 200 ).extract().response();

            assertNotNull( response );
        } catch( Exception e ) {
            e.printStackTrace();
        }
    }

    @Test
    public void testSaveFunctionalizationElement() {
        SimpleSynthesisFunctionalizationBean functionalizationBean = getSimpleSynthesisFunctionalizationBean( "1000", "1000" );
//
        int initialNumberOfElements = functionalizationBean.getFunctionalizationElements().size();
        SimpleSynthesisFunctionalizationElementBean elementBean = new SimpleSynthesisFunctionalizationElementBean();
        elementBean.setDescription( "New Description" );
        elementBean.setMolecularFormulaType( "Hill" );
        elementBean.setMolecularFormula( "C1B2A3Z_MHL_006" );
        elementBean.setChemicalName( "New Chemical" );
        elementBean.setType( "Reflexivity" );
        elementBean.setValue( new Float( 22.4 ) );
        elementBean.setValueUnit( "g" );
        elementBean.setType( "reagent" );
        elementBean.setActivationMethod( "Freeze" );
        elementBean.setActivationEffect( "Turns Blue" );

        functionalizationBean.setFunctionalizationElementBeingEdited( elementBean );

        try {
            Response response = given().spec( specification )
                    .body( functionalizationBean ).when().post( "synthesisFunctionalization/saveSynthesisFunctionalizationElement" )
                    .then().statusCode( 200 ).extract().response();


            assertNotNull( response );
            functionalizationBean = getSimpleSynthesisFunctionalizationBean( "1000", "1000" );
            assertTrue( functionalizationBean.getFunctionalizationElements().size() > initialNumberOfElements );
            String debug = response.asString();
            System.out.println( debug );

        } catch( Exception e ) {
            e.printStackTrace();
        }
    }


    @Test
    public void testImplicitInherentFunctionRemoval() {
        SimpleSynthesisFunctionalizationBean functionalizationBean = getSimpleSynthesisFunctionalizationBean( "1005", "1222" );
        List<SimpleSynthesisFunctionalizationElementBean> elementBeans = functionalizationBean.getFunctionalizationElements();
        for( SimpleSynthesisFunctionalizationElementBean elementBean : elementBeans ) {
            if( elementBean.getInherentFunctionList() != null && elementBean.getInherentFunctionList().size() > 0 ) {
                elementBean.getInherentFunctionList().remove( 0 );
            }
        }
        try {
            Response response = given().spec( specification ).
                    body( functionalizationBean ).when().post( "synthesisFunctionalization/submit" )
                    .then().statusCode( 200 ).extract().response();

            assertNotNull( response );
            String debug = response.asString();
            System.out.println( debug );
        } catch( Exception e ) {
            e.printStackTrace();
        }

    }


    @Test
    public void testSaveExternalFile() {
        SimpleSynthesisFunctionalizationBean functionalizationBean = getSimpleSynthesisFunctionalizationBean( "1000", "1000" );
        SimpleFileBean fileBean = new SimpleFileBean();
        fileBean.setType( "document" );
        fileBean.setTitle( "TestTitle" );
        fileBean.setKeywordsStr( "TestKeyWord" );
        fileBean.setUriExternal( true );
        fileBean.setDescription( "Test File description" );
        fileBean.setExternalUrl( "http://192.168.1.25:8080/test_file.txt" );  // THIS NEEDS TO BE SET TO AN EXISTING FILE!

        fileBean.setSampleId( "1000" );
        fileBean.setUri( "http://192.168.1.25:8080/test_file.txt" );  // THIS NEEDS TO BE SET TO AN EXISTING FILE!
        functionalizationBean.setFileBeingEdited( fileBean );

        try {
            Response response = given().spec( specification )
                    .body( functionalizationBean ).when().post( "synthesisFunctionalization/saveFile" )
                    .then().statusCode( 200 ).extract().response();

            assertNotNull( response );
            String debug = response.asString();
            System.out.println( debug );

        } catch( Exception e ) {
            e.printStackTrace();
        }
    }

    @Test
    public void uploadFile() {
        File testUploadFile = new File( "/Users/lernermh/test.txt" );

        RestAssured.baseURI = "http://127.0.0.1:8090";

        Response response = given().spec( specification )
                .contentType( "multipart/form-data" )
                .multiPart( testUploadFile )
                .when().
                        post( "/rest/core/uploadFile" );


        System.out.println( response.getStatusCode() );
        System.out.println( response.asString() );

        // assertTrue(response.asString().contains("successfully uploaded"));
    }

    @Test
    public void testSaveLocalFile() throws IOException {

        Response response = given()
                .spec( specification )
                .contentType( "multipart/form-data" )
                .multiPart( "uriExternal", false )
                .multiPart( "review", false )
                .multiPart( "theAccess", "{}" )
                .multiPart( "isPublic", false )
                .multiPart( "type", "safety" )
                .multiPart( "version", "001" )
                .multiPart( "abbreviation", "tpa" )
                .multiPart( "name", "MHL Test Protocol alpha" )
                .multiPart( "fileTitle", "MHL Test file 001" )
                .multiPart( "fileDescription", "This is a test protocol 001" )
                .multiPart( "myFile", "test.txt" )
                .multiPart( new File( "/Users/lernermh/test.txt" ) )
                .accept( ContentType.JSON )
                .when()
                .post( "http://127.0.0.1:8090/caNanoLab/rest/core/uploadFile" )
                .then().statusCode( 200 ).extract().response();

        System.out.println( response.getStatusCode() );
        System.out.println( response.asString() );

    }


    @Test
    public void testRemoveFile() {
        SimpleSynthesisFunctionalizationBean functionalizationBean = new SimpleSynthesisFunctionalizationBean();
        functionalizationBean.setSampleId( "1000" );
        functionalizationBean.setId( new Long( 1000 ) );

        SimpleFileBean fileBean = new SimpleFileBean();
        fileBean.setType( "TestType" );
        fileBean.setTitle( "TestTitle" );
        fileBean.setUriExternal( true );
        fileBean.setExternalUrl( "http://192.168.1.25:8080/test_file.txt" );  // THIS NEEDS TO BE SET TO AN EXISTING FILE!
        fileBean.setSampleId( "1000" );
        fileBean.setId( new Long( 67010562 ) ); // this needs to changed for each test.

        List<SimpleFileBean> fileBeans = new ArrayList<SimpleFileBean>();
        fileBeans.add( fileBean );
        functionalizationBean.setFileElements( fileBeans );
        functionalizationBean.setFileBeingEdited( fileBeans.get( 0 ) );

        try {
            Response response = given().spec( specification ).
                    body( functionalizationBean ).when().post( "synthesisFunctionalization/removeFile" )
                    .then().statusCode( 200 ).extract().response();

            assertNotNull( response );
        } catch( Exception e ) {
            e.printStackTrace();
        }
    }


    @Test
    public void testSubmit() {
        // FunctionalizationBean
        String description = "TEST_FunctionalizationBean description";

        // Element
        String chemName = "TEST_Chem_" + new Date().toString();
        Float value = 12.34F;
        String units = "TEST_Units";
        String molecularFormula = "TEST_CHO2Si";
        String molecularFormulaType = "TEST_molecularFormulaType";
        String elementDescription = "TEST_functionalization element elementDescription";
        String elementType = "TEST_type";
        String elementActivationMethod = "TEST_elementActivationMethod";
        String elementActivationMEffect = "TEST_elementActivationEffect";
        String pubChemDataSource = "TEST_compound";

        SimpleSynthesisFunctionalizationBean functionalizationBean = getSimpleSynthesisFunctionalizationBean( "1000", "1000" );
        SimpleSynthesisFunctionalizationElementBean elementBean = new SimpleSynthesisFunctionalizationElementBean();
        functionalizationBean.setDescription( description );

        elementBean.setChemicalName( chemName );
        elementBean.setPubChemDataSource( pubChemDataSource );
        elementBean.setValue( value );
        elementBean.setValueUnit( units );
        elementBean.setMolecularFormula( molecularFormula );
        elementBean.setMolecularFormulaType( molecularFormulaType );
        elementBean.setDescription( elementDescription );
        elementBean.setCreatedBy( "CreatedBy MHL" ); // This get's replaced with the parent Functionalization's "created by", so I'm not doing an assert on elementBean.getCreatedBy
        elementBean.setType( elementType );
        elementBean.setActivationMethod( elementActivationMethod );
        elementBean.setActivationEffect( elementActivationMEffect );
        List<SimpleSynthesisFunctionalizationElementBean> elementBeans = new ArrayList<SimpleSynthesisFunctionalizationElementBean>();
        elementBeans.add( elementBean );
        functionalizationBean.setFunctionalizationElements( elementBeans );

        try {
            Response response = given().spec( specification ).
                    body( functionalizationBean ).when().post( "synthesisFunctionalization/submit" )
                    .then().statusCode( 200 ).extract().response();

            assertNotNull( response );
            String debug = response.asString();
            assertEquals( debug, "[\"success\"]" );


            // Make sure the changes stuck.
            SimpleSynthesisFunctionalizationBean testFunctionalizationBean = getSimpleSynthesisFunctionalizationBean( "1000", "1000" );
            List<SimpleSynthesisFunctionalizationElementBean> testElements = testFunctionalizationBean.getFunctionalizationElements();

            // The chemName should be unique enough to use as a value to use to find our test element.
            SimpleSynthesisFunctionalizationElementBean testElement = null;
            for( SimpleSynthesisFunctionalizationElementBean element : testElements ) {
                if( element.getChemicalName().equalsIgnoreCase( chemName ) ) {
                    testElement = element;
                }
            }

            // Did we find the element we updated
            assertNotNull( testElement );

            // Check the element values
            assertEquals( testElement.getChemicalName(), chemName );
            assertEquals( testElement.getPubChemDataSource(), pubChemDataSource );
            assertEquals( testElement.getValue(), value );
            assertEquals( testElement.getValueUnit(), units );
            assertEquals( testElement.getMolecularFormula(), molecularFormula );
            assertEquals( testElement.getMolecularFormulaType(), molecularFormulaType );
            assertEquals( testElement.getDescription(), elementDescription );

            assertEquals( testFunctionalizationBean.getDescription(), description );

            System.out.println( debug );
        } catch( Exception e ) {
            e.printStackTrace();
        }
    }

    @Test
    public void delete() {
    }

    @Test
    public void testViewDetails() {

        try {
            Response response = given().spec( specification ).get( "synthesisFunctionalization/viewDetails?sampleId=1000&dataId=1000" )
                    .then().statusCode( 200 ).extract().response();

            String createdBy = response.path( "createdBy" );
            assertEquals( "canano_curator", createdBy );
            assertNotNull( response );

            ArrayList<String> funcElementBeans = response.path( "functionalizationElements" );
            assertNotNull( funcElementBeans );
        } catch( Exception e ) {
            e.printStackTrace();
        }
    }


    private SimpleSynthesisFunctionalizationBean getSimpleSynthesisFunctionalizationBean( String sampleId, String dataId ) {
        try {
            Response response = given().spec( specification )
                    .queryParam( "sampleId", sampleId )
                    .queryParam( "dataId", dataId )
                    .when().get( "synthesisFunctionalization/edit" )
                    .then().statusCode( 200 ).extract().response();

            JSONObject jResponse = new JSONObject( response.body().asString() );
            ObjectMapper mapper = new ObjectMapper();
            return mapper.readValue( jResponse.toString(), SimpleSynthesisFunctionalizationBean.class );

        } catch( Exception e ) {
            e.printStackTrace();
        }
        return null;
    }


}
