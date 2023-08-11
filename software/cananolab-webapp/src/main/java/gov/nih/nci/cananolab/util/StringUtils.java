/*L
 *  Copyright Leidos
 *  Copyright Leidos Biomedical
 *  Copyright 2023 Institute for Systems Biology
 *  Portions Copyright Matthias Stevens
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/cananolab/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.util;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.SortedSet;
import java.util.TreeSet;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import org.apache.commons.text.StringEscapeUtils;
import org.owasp.html.Sanitizers;

/**
 * This class contains a set of utilities for converting Strings to other
 * formats or converting other formats to String.
 *
 * @author pansu
 *
 */

public class StringUtils {
	private static Logger logger = LogManager.getLogger(StringUtils.class);

	public static boolean isImgFileExt(String fileName) {
		if (isEmpty(fileName)) {
			return false;
		}

		boolean isImgFileExt = false;
		for (int i = 0; i < Constants.IMAGE_FILE_EXTENSIONS.length; i++) {
			if (fileName.toUpperCase().endsWith(
					"." + Constants.IMAGE_FILE_EXTENSIONS[i])) {
				isImgFileExt = true;
				break;
			}
		}

		return isImgFileExt;
	}

	public static String join(String[] stringArray, String delimiter) {
		String joinedStr = "";
		if (stringArray == null || stringArray.length == 0) {
			return joinedStr;
		}
		List<String> stringList = Arrays.asList(stringArray);
		return join(stringList, delimiter);
	}

	public static String join(Collection<String> stringList, String delimiter) {
		String joinedStr = "";
		if (stringList == null || stringList.isEmpty()) {
			return joinedStr;
		}
		// remove empty items
		Collection<String> modList = new ArrayList<String>(stringList);
		for (String str : modList) {
			if (isEmpty(str)) {
				stringList.remove(str);
			}
		}

		StringBuilder sb = new StringBuilder();
		int i = 0;
		for (String str : stringList) {
			if (i < stringList.size() - 1) {
				sb.append(str);
				sb.append(delimiter);
			} else {
				sb.append(str);
			}
			i++;
		}
		joinedStr = sb.toString();
		return joinedStr;
	}

	public static String sortJoin(Collection<String> strings, String delimiter) {
		SortedSet<SortableName> sortableNames = new TreeSet<SortableName>();
		for (String str : strings) {
			sortableNames.add(new SortableName(str));
		}
		String joinedStr = "";
		if (sortableNames == null || sortableNames.isEmpty()) {
			return joinedStr;
		}
		StringBuilder sb = new StringBuilder();
		int i = 0;
		for (SortableName sortableName : sortableNames) {
			if (i < sortableNames.size() - 1) {
				if (!StringUtils.isEmpty(sortableName.getName()))
					// joinedStr += sortableName.getName() + delimiter;
					sb.append(sortableName.getName());
				sb.append(delimiter);
			} else {
				if (!StringUtils.isEmpty(sortableName.getName()))
					// joinedStr += sortableName.getName();
					sb.append(sortableName.getName());
			}
			i++;
		}
		joinedStr = sb.toString();
		return joinedStr;
	}

	/*
	 * empty string of the collection will be included in the joined string and
	 * null item in the collection will be converted to an empty string
	 */
	public static String joinEmptyItemIncluded(
			Collection<String> stringCollection, String delimiter) {
		StringBuffer buffer = new StringBuffer();
		if (stringCollection == null || stringCollection.isEmpty()) {
			return "";
		}

		Iterator iter = stringCollection.iterator();
		while (iter.hasNext()) {
			String item = (String) iter.next();
			if (item == null)
				item = "";
			buffer.append(item);
			if (iter.hasNext()) {
				buffer.append(delimiter);
			}
		}
		return buffer.toString();
	}

	 //******************************************************************************************
	 // We need to be able to figure out the newline logic. Code adapted from Stackoverflow example,
	 // https://stackoverflow.com/questions/3776923/how-can-i-normalize-the-eol-character-in-java
	 // Attibution is as follows:
	 //   Loosely based on these examples:
	 //    - http://stackoverflow.com/a/9456947/1084488 (cc by-sa 3.0)
	 //    - https://github.com/apache/tomcat/blob/main/java/org/apache/tomcat/buildutil/CheckEol.java (Apache License v2.0)
	 //
	 //   This file is posted here to meet the "ShareAlike" requirement of cc by-sa 3.0:
	 //      http://stackoverflow.com/a/27930311/1084488
	 //
	 //   @author Matthias Stevens
	 // ******************************************************************************************

	private static final String EOL_UNIX = "\n";
	private static final String EOL_WINDOWS = "\r\n";
	private static final String EOL_OLD_MAC = "\r";

	/**
	 * Determines the end-of-line String for possibly multi-line String
	 *
	 * @param text the String to investigate
	 * @return the end-of-line string present
	 */
	public static String determineEOL(String text) {
		int prev = -1;
		int ch;
		for (int i=0; i < text.length(  ); i++) {
			ch = text.charAt(i);
			if ( ch == '\n' ) {
				if ( prev == '\r' ) {
					return (EOL_WINDOWS);
				} else {
					return (EOL_UNIX);
				}
			} else if ( prev == '\r' ) {
				return (EOL_OLD_MAC);
			}
			prev = ch;
		}
		return (null);
	}

	//
	// WJRL 2/7/23
	// Apache Commons StringEscapeUtils.escapeHtml4() (the 2023 version; until now the system was
	// using the 2011 EscapeXML version that was *unable* to deal with 4-byte unicode) is *way*
	// overkill when we are dealing with UTF-8. E.g. escaping greek characters is pointless,
	// and looks really ugly if it slips through the net. So build a lightweight method that
	// only handles the five basic XML entities (gt, lt, quot, amp, apos). That should be
	// enough to foil embedded script and style tags.
	//

	public static String simpleHTMLEscape(String text) {
		if (isEmpty(text)) {
			return ("");
		}
		// Not efficient, but quick to implement. Better to do a single scan to a StringBuffer.
		String retval = text.replaceAll(">", "&gt;")
				            .replaceAll("<", "&lt;")
							.replaceAll("&", "&amp;")
							.replaceAll("\"", "&quot;")
							.replaceAll("'", "&#039;");
		return (retval);
	}

	//
	// See above. The reverse
	//

	public static String simpleHTMLUnEscape(String text) {
		if (isEmpty(text)) {
			return ("");
		}
		// Not efficient, but quick to implement:
		String retval = text.replaceAll("&gt;", ">")
							.replaceAll("&lt;", "<")
							.replaceAll("&amp;", "&")
							.replaceAll("&quot;", "\"")
							.replaceAll("&#039;", "'");
		return (retval);
	}

	/**
	 *
	 * Legacy routing to escape HTML but keep line breaks, useful in preserving line breaks in
	 * descriptions.
	 *
	 * WJRL 2/23: Total overhaul. What this now does is remove dangerous tags from the text, but
	 * retains e.g. > < & so they appear correctly in the UI. Also will keep basic formatting
	 * like <i>, <b>, <sup> and <sub>. We intentionally covert it back after scrubbing, since the
	 * scrubbing library is agressive and escapes Unicode characters, so they appear in edit textareas
	 * as HTML entities. We now send scrubbed 4-byte unicode out the door. NOTE however that this
	 * function has not been traditionally been applied to every string sent, and <script> tags
	 * can still go out where this is not used! This function has been overhauled, but not introduced
	 * in new places; we are using Angular to protect against <script> tags by using the Angular innerHTML
	 * sanitizer.
	 *
	 * @param text
	 * @return
	 */
	public static String escapeXmlButPreserveLineBreaks(String text) {
		if (isEmpty(text)) {
			return "";
		}
		String eol = determineEOL(text);
		String use_br = (eol == null) ? text : text.replaceAll(eol, "<br>");
		String safeHTML = Sanitizers.FORMATTING.sanitize(use_br);
		return (StringEscapeUtils.unescapeHtml4(safeHTML));
	}

	public static Float convertToFloat(String floatStr) {
		if (isEmpty(floatStr)) {
			return null;
		}
		try {
			return Float.parseFloat(floatStr);
		} catch (NumberFormatException e) {
			logger.error("Error converting the given string to a float number",
					e);
			throw new RuntimeException(
					"Can't convert the given string to a float number: "
							+ floatStr);
		}
	}

	public static Long convertToLong(String longStr) {
		if (isEmpty(longStr)) {
			return null;
		}
		try {
			return Long.parseLong(longStr);
		} catch (NumberFormatException e) {
			logger.error("Error converting the given string to a long number",
					e);
			throw new RuntimeException(
					"Can't convert the given string to a long number: "
							+ longStr);
		}
	}

	public static String convertToString(Object obj) {
		if (obj == null) {
			return "";
		} else {
			return obj.toString();
		}
	}

	public static boolean isInteger(String theStr) {
		if (isEmpty(theStr)) {
			return false;
		} else {
			for (int i = 0; i < theStr.length(); i++) {
				if (!Character.isDigit(theStr.charAt(i))) {
					return false;
				}
			}
			return true;
		}
	}

	public static boolean isDouble(String theStr) {
		int decimalCount = 0;

		if (isEmpty(theStr)) {
			return false;
		} else {
			for (int i = 0; i < theStr.length(); i++) {
				if (!Character.isDigit(theStr.charAt(i))) {
					if (theStr.charAt(i) == ('.')) {
						decimalCount++;
					} else {
						return false;
					}
				}
			}

            return decimalCount == 1;
		}
	}

	public static boolean contains(String[] array, String aString,
			boolean ignoreCase) {
		boolean containsString = false;

		for (int i = 0; i < array.length; i++) {
			if (ignoreCase) {
				if (array[i].equalsIgnoreCase(aString))
					containsString = true;
			} else {
				if (array[i].equals(aString))
					containsString = true;
			}
		}

		return containsString;
	}

	public static String[] add(String[] x, String aString) {
		String[] result = new String[x.length + 1];
		for (int i = 0; i < x.length; i++) {
			result[i] = x[i];
		}
		result[x.length] = aString;

		return result;
	}

	/**
	 * Convert a string with multiple words separated by space to one word, with
	 * first letter as lower case.
	 *
	 * @param words
	 * @return
	 */
	public static String getOneWordLowerCaseFirstLetter(String words) {
		// remove space in words and make the first letter lower case.
		String oneWord = words;
		if (!isEmpty(words)) {
			String firstLetter = words.substring(0, 1);
			oneWord = words
					.replaceFirst(firstLetter, firstLetter.toLowerCase())
					.replace(" ", "");
		}
		return oneWord;
	}

	/**
	 * Convert a string with multiple words separated by space to one word, with
	 * first letter as upper case.
	 *
	 * @param words
	 * @return
	 */
	public static String getOneWordUpperCaseFirstLetter(String words) {
		// remove space in words and make the first letter lower case.
		String firstLetter = words.substring(0, 1);
		return words.replaceFirst(firstLetter,
				firstLetter.toUpperCase()).replace(" ", "");
	}
	
	/**
	 * Convert to upper case the first letter of each word in the input. Spaces are preserved.
	 * @param strWithWords
	 * @return
	 */
	public static String getCamelCaseFormatInWords(String strWithWords) {
		if (strWithWords == null)
			return strWithWords;
		
		String[] words = strWithWords.split(" ");
		StringBuilder sb = new StringBuilder();
		for (String word : words) {
			char first = word.charAt(0);
			String upper = word.replaceFirst(String.valueOf(first), String.valueOf(Character.toUpperCase(first)));
			sb.append(upper).append(" ");
		}

		return sb.toString().trim();
	}

	/**
	 * Parse the text into an array of words using white space as delimiter.
	 * Keeping words in quotes together.
	 *
	 * @return
	 */
	public static List<String> parseToWords(String text) {
		if (isEmpty(text)) {
			return null;
		}
		SortedSet<String> wordList = new TreeSet<String>();

		// extract words in quotes first
		String patternStr = "\\B[\"']([^\"']*)[\"']\\B";
		String[] nonQuotedTexts = text.split(patternStr);
		for (String txt : nonQuotedTexts) {
			String[] nonQuotedWords = txt.split("\\s");
			wordList.addAll(Arrays.asList(nonQuotedWords));
		}
		Pattern pattern = Pattern.compile(patternStr);
		Matcher matcher = pattern.matcher(text);

		List<String> quotedWords = new ArrayList<String>();
		int start = 0;
		while (matcher.find(start)) {
			String quotedWord = matcher.group(1).trim();
			quotedWords.add(quotedWord);
			start = matcher.end(1);
		}
		wordList.addAll(quotedWords);

		return new ArrayList<String>(wordList);
	}

	public static List<String> parseToWords(String text, String delimiter) {
		if (isEmpty(text)) {
			return null;
		}
		String[] words = text.trim().split(delimiter);
		List<String> wordList = new ArrayList<String>();
		for (String word : words) {
			if (!isEmpty(word)) {
				wordList.add(word.trim());
			}
		}
		return wordList;
	}

	public static Boolean containsIgnoreCase(Collection<String> collection,
			String match) {
		for (String str : collection) {
			if (str.trim().equalsIgnoreCase(match.trim())) {
				return true;
			}
		}
		return false;
	}

	public static String stripWildcards(String searchString) {
		// strip start from either ends of the search string
		String newString = searchString.trim();
		newString = newString.replaceAll("^(\\*)(.*)", "$2");
		newString = newString.replaceAll("(.*)(\\*)$", "$1");
		return newString;
	}

	public static Boolean xssValidate(String inputString) {
		// the input string can't contain patterns like <script>, javascript:
		// and their HEX representation and unicode version, HTML entity
		// encoded version, UTF-7 encoded version
		String[] scriptPatterns = new String[] {
				"\\<script",
				"\\<\\%00script",
				"\\%3C\\%73\\%63\\%72\\%69\\%70\\%74", // hex encoded for
				// URL for <script
				"&#x3C;&#x73;&#x63;&#x72;&#x69;&#x70;&#x74;", // hex
				// encoded
				// version
				// of
				// <script
				"&#60;&#115;&#99;&#114;&#105;&#112;&#116;", // unicode
				// version
				// of
				// <script
				"&#60;&#37;&#48;&#48;&#115;&#99;&#114;&#105;&#112;&#116;", // html
				// entity
				// encoded
				// version
				// of
				// <%00script
				"\\%uff1cscript\\%uff1e",
				"\\%BC\\%F3\\%E3\\%F2\\%E9\\%F0\\%F4", // hex version of
				// <script
				"\\+ADw\\-SCRIPT\\+AD4", "\\\\u003Cscript" }; // <script

		String[] javascriptPatterns = new String[] { "javascript\\:",
				"\\%6A\\%61\\%76\\%61\\%73\\%63%\\%72\\%69\\%70\\%74\\%3A", // hex
				// version
				// of
				// javascript:
				"&#x6a;&#x61;&#x76;&#x61;&#x73;&#x63;&#x72;&#x69;&#x70;&#x74;&#x3a;", // hex
				// encoded
				// version
				// of
				// javascript:
				"&#106;&#97;&#118;&#97;&#115;&#99;&#114;&#105;&#112;&#116;&#58;" }; // HTML
		// entity
		// encoded
		// version
		// of
		// javascript:

		String[] phishingPatterns=new String[] { "\\<iframe", "\\<frame"};
		
		String[] otherPatterns = new String[] { "etc/passwd", "/bin/id",
				"\\.ini", ";vol\\|", "id\\|",
				"AVAK\\$\\(RETURN_CODE\\)OS", "sys\\.dba_user", "\\+select\\+",
				"\\+and\\+", "WFXSSProbe", "WF_XSRF", "alert\\(", "TEXT/VBSCRIPT", "=\"", "\\.\\./",
				"\\.\\.\\\\", "\\\\\'", "\\\\\\\"", "background\\:", "\\'\\+",
				"\\\"\\+", "%\\d+"};

				String patternStr = StringUtils.join(scriptPatterns, "|") + "|"
				+ StringUtils.join(javascriptPatterns, "|") + "|"
				+ StringUtils.join(phishingPatterns, "|") + "|"
				+ StringUtils.join(otherPatterns, "|");

		String regex = "^(?!.*(" + patternStr + ")).*$";
		// String regex =
		// "^(?!.*(TEXT\\/VBSCRIPT|%uff1cscript%uff1e|WFXSSProbe|\\=\"|\\+and\\+|\\+select\\+|sys\\.dba\\_user|AVAK\\$\\(RETURN\\_CODE\\)OS|id\\||;vol\\||&#|%\\d+|\\>|\\<|\\.\\.\\\\|\\.\\.\\/|\\.ini|javascript\\:|\\/etc\\/passwd|\\/bin\\/id|\\\'|\\\"|background\\:expression)).*$";

//		System.out.println(regex);
        return inputString.matches(regex);
	}

	/**
	 * Return true for Null or empty string, false otherwise.
	 */
	public static boolean isEmpty(String str) {
		return (str == null || str.trim().length() == 0);
	}

	public static void main(String[] args) {
		try {
			String text = "this is 'a test' of \"parsing words\"";
			System.out.println(text);
			List<String> words = StringUtils.parseToWords(text);
			for (String word : words) {
				System.out.println(word);
			}

			String text2 = "thomas\r\nshukla";
			System.out.println(text2);
			List<String> words2 = StringUtils.parseToWords(text2, "\r\n");
			for (String word : words2) {
				System.out.println(word);
			}

			String text3 = "*NCL-100**";
			System.out.println(stripWildcards(text3));

			String text4 = "this is a test \\u003Cscript\\u003Ealert\\u0028613067\\u0029\u003C/script\u003E in a sentence";
			String text5="<iframe src=http://demo.testfire.net/phishing.html>";
			String text6="alert(1234)";
			if (StringUtils.xssValidate(text6)) {
				System.out.println("pass xss validation");
			} else {
				System.out.println("didn't pass xss validation");
			}
		} catch (Exception e) {
			logger.error(e);
		}
	}

	public static String[] removeFromArray(String[] oldArray,
			String stringToRemove) {
		List<String> list = new ArrayList<String>(Arrays.asList(oldArray));
		list.remove(stringToRemove);
		return list.toArray(new String[0]);
	}

	public static String getPubChemURL(String pubChemDS, Long pubChemId) {
		StringBuffer sb = new StringBuffer(SampleConstants.PUBCHEM_URL);

		if (SampleConstants.BIOASSAY.equals(pubChemDS)) {
			sb.append(SampleConstants.BIOASSAY_ID);
		} else if (SampleConstants.COMPOUND.equals(pubChemDS)) {
			sb.append(SampleConstants.COMPOUND_ID);
		} else if (SampleConstants.SUBSTANCE.equals(pubChemDS)) {
			sb.append(SampleConstants.SUBSTANCE_ID);
		}

		sb.append('=').append(pubChemId);

		return sb.toString();
	}

	protected static void LoggerTest(String testText){
		logger.debug(testText);
	}
}
