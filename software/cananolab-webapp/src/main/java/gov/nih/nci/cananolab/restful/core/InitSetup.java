/*L
 *  Copyright Leidos
 *  Copyright Leidos Biomedical
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/cananolab/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.restful.core;

import gov.nih.nci.cananolab.dto.common.PublicDataCountBean;
import gov.nih.nci.cananolab.exception.LookupException;
import gov.nih.nci.cananolab.exception.CompositionException;
import gov.nih.nci.cananolab.restful.bean.LabelValueBean;
import gov.nih.nci.cananolab.service.PublicDataCountJob;
import gov.nih.nci.cananolab.service.common.LookupService;
import gov.nih.nci.cananolab.util.ClassUtils;
import gov.nih.nci.cananolab.util.StringUtils;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.SortedSet;
import java.util.TreeSet;
import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

/**
 * This class sets up information required for all forms.
 *
 * @author pansu, cais
 *
 */
public class InitSetup {
	/**
	 *
	 */
	private InitSetup() {
	}

	/**
	 *
	 * @return
	 */
	public static InitSetup getInstance() {
		return new InitSetup();
	}

	/**
	 * Queries the common_lookup table and creates a map in application context
	 *
	 * @param appContext
	 * @return
	 * @throws LookupException
	 */
	public Map<String, Map<String, SortedSet<String>>> getDefaultLookupTable(ServletContext appContext) throws LookupException {
		Map<String, Map<String, SortedSet<String>>> defaultLookupTable = null;
		if (appContext.getAttribute("defaultLookupTable") == null) {
			defaultLookupTable = LookupService.findAllLookups();
			appContext.setAttribute("defaultLookupTable", defaultLookupTable);
		} else {
			defaultLookupTable = new HashMap<String, Map<String, SortedSet<String>>>(
					(Map<? extends String, Map<String, SortedSet<String>>>) appContext.getAttribute("defaultLookupTable"));
		}
		return defaultLookupTable;
	}


	/**
	 * Retrieve lookup Map from lookup table and store in the application
	 * context
	 *
	 * @param appContext
	 * @param contextAttribute
	 * @param name
	 * @return
	 * @throws LookupException
	 */
	public Map<String, String> getLookupByName(ServletContext appContext,
			String contextAttribute, String name) throws LookupException {
		Map<String, Map<String, SortedSet<String>>> defaultLookupTable = getDefaultLookupTable(appContext);
		Map<String, SortedSet<String>> lookupByNameMap = defaultLookupTable.get(name);
		Map<String, String> lookupMap = new HashMap<String, String>();
		Set<String> keySet = lookupByNameMap.keySet();
		for (String key : keySet) {
			lookupMap.put(key, (String) lookupByNameMap.get(key).first());
		}
		appContext.setAttribute(contextAttribute, lookupMap);
		return lookupMap;

	}

	/**
	 * Retrieve default lookup values from lookup table in the database and
	 * store in the application context
	 *
	 * @param appContext
	 * @param contextAttribute
	 * @param lookupName
	 * @param lookupAttribute
	 * @return
	 * @throws LookupException
	 */
	public SortedSet<String> getDefaultTypesByLookup(ServletContext appContext,
			String contextAttribute, String lookupName, String lookupAttribute)
			throws LookupException {
		Map<String, Map<String, SortedSet<String>>> defaultLookupTable = getDefaultLookupTable(appContext);
		SortedSet<String> types = new TreeSet<String>();
		if (defaultLookupTable.get(lookupName) != null) {
			types = defaultLookupTable.get(lookupName).get(lookupAttribute);
			appContext.setAttribute(contextAttribute, types);
			return types;
		} else {
			return types;
		}
	}

	/**
	 * Retrieve default lookup and other values from lookup table in the
	 * database and store in the session
	 *
	 * @param request
	 * @param sessionAttribute
	 * @param lookupName
	 * @param lookupAttribute
	 * @param otherTypeAttribute
	 * @aparam updateSession
	 * @return
	 * @throws LookupException
	 */
	public SortedSet<String> getDefaultAndOtherTypesByLookup(HttpServletRequest request, String sessionAttribute,
			String lookupName, String lookupAttribute,
			String otherTypeAttribute, boolean updateSession)
			throws LookupException {
		SortedSet<String> types = null;
		if (updateSession) {
			types = LookupService.getDefaultAndOtherLookupTypes(lookupName,
					lookupAttribute, otherTypeAttribute);
			request.getSession().setAttribute(sessionAttribute, types);
		} else {
			types = new TreeSet<String>((SortedSet<? extends String>) (request
					.getSession().getAttribute(sessionAttribute)));
		}
		return types;
	}

	/**
	 * Retrieve other values from lookup table in the database and store in the
	 * session
	 *
	 * @param request
	 * @param sessionAttribute
	 * @param lookupName
	 * @param otherTypeAttribute
	 * @aparam updateSession
	 * @return
	 * @throws LookupException
	 */
	public SortedSet<String> getOtherTypesByLookup(HttpServletRequest request,
			String sessionAttribute, String lookupName,
			String otherTypeAttribute, boolean updateSession)
			throws LookupException
	{
		SortedSet<String> types = null;
		if (updateSession) {
			types = LookupService.findLookupValues(lookupName, otherTypeAttribute);
			request.getSession().setAttribute(sessionAttribute, types);
		} else {
			types = new TreeSet<String>((SortedSet<? extends String>) (request
					.getSession().getAttribute(sessionAttribute)));
		}
		return types;
	}

	public SortedSet<String> assignTypesToSession(ServletContext appContext, String contextAttribute, List<String> types){

		SortedSet sortedTypes = new TreeSet();
		for(String type:types){
			sortedTypes.add(type);
		}
		appContext.setAttribute(contextAttribute, sortedTypes);
		return sortedTypes;
	}

	/**
	 * Retrieve default lookup values by reflection and store in the app context
	 *
	 * @param appContext
	 * @param contextAttribute
	 * @param fullParentClassName
	 * @return
	 * @throws Exception
	 */
	public SortedSet<String> getDefaultTypesByReflection(ServletContext appContext, String contextAttribute,
														 String fullParentClassName)
			throws IOException, ClassNotFoundException {
		SortedSet<String> types = new TreeSet<String>();
		List<String> classNames = ClassUtils.getChildClassNames(fullParentClassName);
		for (String name : classNames) {
			if (!name.contains("Other")) {
				String shortClassName = ClassUtils.getShortClassName(name);
				String displayName = ClassUtils.getDisplayName(shortClassName);
				types.add(displayName);
			}
		}
		appContext.setAttribute(contextAttribute, types);
		return types;
	}

	/**
	 * Retrieve default lookup and other values by reflection and store in the
	 * session
	 *
	 * @param request
	 * @param contextAttributeForDefaults
	 * @param sessionAttribute
	 * @param fullParentClassName
	 * @param otherFullParentClassName
	 * @param updateSession
	 * @return
	 * @throws Exception
	 */
	public SortedSet<String> getDefaultAndOtherTypesByReflection(HttpServletRequest request,
																 String contextAttributeForDefaults,
																 String sessionAttribute,
																 String fullParentClassName,
																 String otherFullParentClassName,
																 boolean updateSession)
			throws IOException, ClassNotFoundException, LookupException, CompositionException {
		ServletContext appContext = request.getSession().getServletContext();
		SortedSet<String> defaultTypes = getDefaultTypesByReflection(
				appContext, contextAttributeForDefaults, fullParentClassName);

		SortedSet<String> types = null;
		if (updateSession) {
			types = new TreeSet<String>(defaultTypes);
			
			if (contextAttributeForDefaults.equals("defaultFunctionalizingEntityTypes")) {
				Iterator<String> ite = types.iterator();
				while (ite.hasNext())
					System.out.println("DefaultType: " + ite.next());
			}
			
			SortedSet<String> otherTypes = LookupService.getAllOtherObjectTypes(otherFullParentClassName);
			
			if (otherTypes != null && contextAttributeForDefaults.equals("defaultFunctionalizingEntityTypes")) {
				Iterator<String> ite = otherTypes.iterator();
				while (ite.hasNext())
					System.out.println("otherTypes: " + ite.next());
			}
			
			if (otherTypes != null)
				types.addAll(otherTypes);
			
			if (contextAttributeForDefaults.equals("defaultFunctionalizingEntityTypes")) {
				Iterator<String> ite = types.iterator();
				while (ite.hasNext())
					System.out.println("Combined types: " + ite.next());
			}
			
			request.getSession().setAttribute(sessionAttribute, types);
		} else {
			types = new TreeSet<String>((SortedSet<? extends String>) (request
					.getSession().getAttribute(sessionAttribute)));
		}
		return types;
	}

	/**
	 * check whether the value is already stored in context
	 * @param request
	 * @param lookupName
	 * @param attribute
	 * @param otherAttribute
	 * @param value
	 * @return
	 * @throws LookupException
	 */
	private Boolean isLookupInContext(HttpServletRequest request,
			String lookupName, String attribute, String otherAttribute,
			String value) throws LookupException {
		Map<String, Map<String, SortedSet<String>>> defaultLookupTable = getDefaultLookupTable(request
				.getSession().getServletContext());
		SortedSet<String> defaultValues = null;
		if (defaultLookupTable.get(lookupName) != null) {
			defaultValues = defaultLookupTable.get(lookupName).get(attribute);
		}
		if (defaultValues != null && defaultValues.contains(value)) {
			return true;
		} else {
			SortedSet<String> otherValues = null;
			if (defaultLookupTable.get(lookupName) != null) {
				otherValues = defaultLookupTable.get(lookupName).get(otherAttribute);
			}
            return otherValues != null && otherValues.contains(value);
		}
    }

	/**
	 *
	 * @param request
	 * @param lookupName
	 * @param attribute
	 * @param otherAttribute
	 * @param value
	 * @throws LookupException
	 */
	public void persistLookup(HttpServletRequest request, String lookupName,
			String attribute, String otherAttribute, String value)
		throws LookupException {
		if (value == null || value.length() == 0) {
			return;
		}
		// if value contains special characters, do not save
		if (!StringUtils.xssValidate(value)) {
			return;
		}
		if (isLookupInContext(request, lookupName, attribute, otherAttribute,
				value)) {
			return;
		} else {
			LookupService.saveOtherType(lookupName, otherAttribute, value);
		}
	}

	/**
	 *
	 * @param lookupName
	 * @param lookupAttribute
	 * @param otherTypeAttribute
	 * @return
	 * @throws Exception
	 */
	public List<LabelValueBean> getDefaultAndOtherTypesByLookupAsOptions(
			String lookupName, String lookupAttribute, String otherTypeAttribute)
			throws Exception {
		List<LabelValueBean> lvBeans = new ArrayList<LabelValueBean>();
		SortedSet<String> defaultValues = LookupService.findLookupValues(lookupName, lookupAttribute);
		// annotate the label of the default ones with *s.
		for (String name : defaultValues) {
			LabelValueBean lv = new LabelValueBean(name, name);
			lvBeans.add(lv);
		}
		SortedSet<String> otherValues = LookupService.findLookupValues(lookupName, otherTypeAttribute);
		for (String name : otherValues) {
			LabelValueBean lv = new LabelValueBean("[" + name + "]", name);
			lvBeans.add(lv);
		}
		return lvBeans;
	}

	//public List<LabelValueBean> getDefaultAndOtherTypesByReflectionAsOptions(
	public List<LabelValueBean> getDefaultAndOtherTypesByReflectionAsOptions(
			ServletContext appContext, String contextAttributeForDefaults,
			String fullParentClassName, String otherFullParentClassName)
			throws Exception {
		List<LabelValueBean> lvBeans = new ArrayList<LabelValueBean>();
		SortedSet<String> defaultTypes = getDefaultTypesByReflection(
				appContext, contextAttributeForDefaults, fullParentClassName);
		for (String type : defaultTypes) {
			LabelValueBean lv = new LabelValueBean(type, type);
			lvBeans.add(lv);
		}

		SortedSet<String> otherTypes = LookupService.getAllOtherObjectTypes(otherFullParentClassName);
		if (otherTypes != null) {
			for (String type : otherTypes) {
				LabelValueBean lv = new LabelValueBean("[" + type + "]", type);
				lvBeans.add(lv);
			}
		}
		return lvBeans;
	}

	/**
	 *
	 * @param appContext
	 */
	public void setStaticOptions(ServletContext appContext) {
		LabelValueBean[] booleanOptions = new LabelValueBean[] {
				new LabelValueBean("true", "1"),
				new LabelValueBean("false", "0") };
		appContext.setAttribute("booleanOptions", booleanOptions);

		LabelValueBean[] booleanOperands = new LabelValueBean[] { new LabelValueBean("equals", "is") };
		appContext.setAttribute("booleanOperands", booleanOperands);

		List<LabelValueBean> numberOperands = new ArrayList<LabelValueBean>();
		numberOperands.add(new LabelValueBean("=", "="));
		numberOperands.add( new LabelValueBean(">", ">"));
		numberOperands.add(new LabelValueBean(">=", ">="));
		numberOperands.add(new LabelValueBean("<=", "<="));

		appContext.setAttribute("numberOperands", numberOperands);

		// register page
		LabelValueBean[] titleOperands = new LabelValueBean[] {
				new LabelValueBean(" ", " "), new LabelValueBean("Dr.", "Dr."),
				new LabelValueBean("Mr.", "Mr."),
				new LabelValueBean("Mrs.", "Mrs."),
				new LabelValueBean("Miss", "Miss"),
				new LabelValueBean("Ms.", "Ms.") };
		appContext.setAttribute("titleOperands", titleOperands);
	}

	/**
	 *
	 * @param appContext
	 */
	public void setPublicCountInContext(ServletContext appContext) {
		PublicDataCountJob job=new PublicDataCountJob();
		//job.queryPublicDataCounts();
		PublicDataCountBean dataCounts=job.getPublicDataCounts();
		appContext.setAttribute("publicCounts", dataCounts);
	}
}
