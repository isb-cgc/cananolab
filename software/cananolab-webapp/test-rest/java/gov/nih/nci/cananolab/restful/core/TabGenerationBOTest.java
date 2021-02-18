package gov.nih.nci.cananolab.restful.core;

import static org.junit.Assert.assertTrue;

import gov.nih.nci.cananolab.restful.util.RestTestLoginUtil;
import org.junit.After;
import org.junit.Test;


public class TabGenerationBOTest {
	
	TabGenerationBO tabGen = new TabGenerationBO();

//	@Before
//	public void setUp() throws Exception {
//	}

	@After
	public void tearDown() throws Exception {
	}

	@Test
	public void testGetUrlBase() {
		String url = "http://192.168.1.16:8090/caNanoLab/rest/caNanoLab/getTabs?homePage=true";
		String urlbase = tabGen.getUrlBase(url);
		assertTrue(urlbase.equals("http://192.168.1.16:8090/caNanoLab/"));
		
		//multi occurrence in url
		url = "http://192.168.1.16:8090/caNanoLab/rest/core/getTabs?homePage=true";
		urlbase = tabGen.getUrlBase(url);
		assertTrue(urlbase.equals("http://192.168.1.16:8090/caNanoLab/"));
		
		url = null;
		urlbase = tabGen.getUrlBase(url);
		assertTrue(urlbase.length() == 0);
	}

}
