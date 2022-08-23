package gov.nih.nci.cananolab.util;

import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.fail;

import java.util.logging.LogManager;
import java.util.logging.Logger;
import org.junit.Test;

public class StringUtilsTest {

	public void testIsImgFileExt() {
	}

	public void testJoin() {
	}

	public void testTestJoin() {
	}

	public void testSortJoin() {
	}

	public void testJoinEmptyItemIncluded() {
	}

	public void testEscapeXmlButPreserveLineBreaks() {
	}

	public void testConvertToFloat() {
	}

	public void testConvertToLong() {
	}

	public void testConvertToString() {
	}

	public void testIsInteger() {
	}

	public void testIsDouble() {
	}

	public void testContains() {
	}

	public void testAdd() {
	}

	public void testGetOneWordLowerCaseFirstLetter() {
	}

	public void testGetOneWordUpperCaseFirstLetter() {
	}

	public void testParseToWords() {
	}

	public void testTestParseToWords() {
	}

	public void testContainsIgnoreCase() {
	}

	public void testStripWildcards() {
	}

	public void testIsEmpty() {
	}

	public void testRemoveFromArray() {
	}

	public void testGetPubChemURL() {
	}

	@Test
	public void testGetCamelCaseFormatInWords() {
		String words = "pending review";
		String upper = StringUtils.getCamelCaseFormatInWords(words);
		assertTrue(upper.equals("Pending Review"));
		
		upper = StringUtils.getCamelCaseFormatInWords(null);
		assertNull(upper);
		
		words = "pending ";
		upper = StringUtils.getCamelCaseFormatInWords(words);
		assertTrue(upper.equals("Pending"));

	}

	@Test
	public void testLogger(){
		try {
			StringUtils.LoggerTest("Test String");

			String testText = "TEST ${upper:foo} ${env:HOME:~} ${date:MM-dd-yyyy} ${base64:SGVsbG8gV29ybGQhCg==} $${foo}";
			StringUtils.LoggerTest(testText);


		} catch (Exception e){
			fail();
		}
	}

}
