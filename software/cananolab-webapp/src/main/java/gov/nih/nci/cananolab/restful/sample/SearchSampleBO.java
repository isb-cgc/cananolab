/*L
 *  Copyright Leidos
 *  Copyright Leidos Biomedical
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/cananolab/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.restful.sample;

/**
 * This class searches canano metadata based on user supplied criteria
 *
 * @author pansu
 */

import gov.nih.nci.cananolab.domain.particle.Sample;
import gov.nih.nci.cananolab.dto.particle.DataAvailabilityBean;
import gov.nih.nci.cananolab.dto.particle.SampleBean;
import gov.nih.nci.cananolab.exception.SecurityException;
import gov.nih.nci.cananolab.restful.core.AbstractDispatchBO;
import gov.nih.nci.cananolab.restful.util.PropertyUtil;
import gov.nih.nci.cananolab.restful.util.SampleUtil;
import gov.nih.nci.cananolab.restful.view.SimpleSearchSampleBean;
import gov.nih.nci.cananolab.restful.view.SimpleSortRequestBean;
import gov.nih.nci.cananolab.security.authorization.Group;
import gov.nih.nci.cananolab.security.enums.SecureClassesEnum;
import gov.nih.nci.cananolab.security.service.GroupService;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;
import gov.nih.nci.cananolab.service.sample.CharacterizationService;
import gov.nih.nci.cananolab.service.sample.DataAvailabilityService;
import gov.nih.nci.cananolab.service.sample.SampleService;
import gov.nih.nci.cananolab.service.sample.helper.SampleServiceHelper;
import gov.nih.nci.cananolab.system.applicationservice.CaNanoLabApplicationService;
import gov.nih.nci.cananolab.system.applicationservice.client.ApplicationServiceProvider;
import gov.nih.nci.cananolab.ui.form.SearchSampleForm;
import gov.nih.nci.cananolab.util.ClassUtils;
import gov.nih.nci.cananolab.util.Comparators;
import gov.nih.nci.cananolab.util.Constants;
import gov.nih.nci.cananolab.util.StringUtils;

import java.util.*;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.type.DateType;
import org.hibernate.type.StandardBasicTypes;
import org.hibernate.type.TimeType;
import org.hibernate.type.TimestampType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
// FIX ME! DITCH THIS!
import gov.nih.nci.cananolab.service.BaseServiceLocalImpl;

@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
@Component("searchSampleBO")
public class SearchSampleBO extends AbstractDispatchBO {
	private Logger logger = LogManager.getLogger(SearchSampleBO.class);

	@Autowired
	private DataAvailabilityService dataAvailabilityServiceDAO;
	
	@Autowired
	private SampleService sampleService;
	
	@Autowired
	private SampleServiceHelper sampleServiceHelper;
	
	@Autowired
	private CharacterizationService characterizationService;
	
	@Autowired
	private GroupService groupService;

	/*
	 ** Legacy search returned a list of SimpleSearchSampleBeans for sending back, after constructing
	 ** fully populated SampleBeans. Instead, just query the database for only the data needed by the
	 ** search result display, and work directly with SimpleSearchSampleBean
	 */
	public List sortNG(SimpleSortRequestBean sortRequestBean, HttpServletRequest request) throws Exception {

		HttpSession session = request.getSession();

		String sortColumn = sortRequestBean.getSortOn();
		List<String> sampleIDs = sortRequestBean.getSampleIDs();
		String dir = sortRequestBean.getDirection();
		int pageNum = sortRequestBean.getPageNum();
		int len = sortRequestBean.getPageLength();
		System.out.println("we need to handle a sort request");

		List<SimpleSearchSampleBean> sampleBeansPerPage = getSamplesPerPageNG(sampleBeans, displayPage, request);

		//
		// For starters, just return the results, don't bother the stash/retrieve as session
		// attributes
		//

	}


	/*
	** Legacy search returned a list of SimpleSearchSampleBeans for sending back, after constructing
	** fully populated SampleBeans. Instead, just query the database for only the data needed by the
	** search result display, and work directly with SimpleSearchSampleBean
	*/
	public List searchNG(SearchSampleForm form, HttpServletRequest request) throws Exception
	{
		List<String> messages = new ArrayList<String>();

		HttpSession session = request.getSession();
		// get the page number from request

		int displayPage = form.getPage(); ///getDisplayPage(request);

		//
		// For starters, just return the results, don't bother the stash/retrieve as session
		// attributes
		//

		List<SampleBean> sampleBeans = querySamples(form, request);
		if (sampleBeans == null || sampleBeans.isEmpty()) {
			messages.add(PropertyUtil.getProperty("sample", "message.searchSample.noresult"));
			return (messages);
		}

		// load sampleBean details 25 at a time for displaying
		// pass in page and size
		List<SimpleSearchSampleBean> sampleBeansPerPage = getSamplesPerPageNG(sampleBeans, displayPage, request);
		// in case any samples has been filtered during loading of sample
		// information. e.g. POC is missing

		if (sampleBeansPerPage.isEmpty()) {
			messages.add(PropertyUtil.getProperty("sample", "message.searchSample.noresult"));
			return messages;
		}

		if (SpringSecurityUtil.isUserLoggedIn()) {
			SpringSecurityAclService springSecurityAclService = ((BaseServiceLocalImpl)sampleService).getSpringSecurityAclService();
			for (SimpleSearchSampleBean sssb: sampleBeansPerPage) {
				sssb.setEditable(springSecurityAclService.currentUserHasWritePermission(sssb.getSampleId(), SecureClassesEnum.SAMPLE.getClazz()));
			}
		}
		//set in sessionScope so user can go back to the result from the sample summary page
		request.getSession().setAttribute("samples", sampleBeansPerPage);
		// get the total size of collection , required for display tag to
		// get the pagination to work

		// set in sessionScope so user can go back to the result from the sample
		// summary page
		request.getSession().setAttribute("resultSize", new Integer(sampleBeans.size()));

		//return mapping.findForward("success");
		//UserBean user = (UserBean) (request.getSession().getAttribute("user"));

		return sampleBeansPerPage;
	}



	public List search(SearchSampleForm form, HttpServletRequest request) throws Exception
	{
		List<String> messages = new ArrayList<String>();
		
		HttpSession session = request.getSession();
		// get the page number from request
		

		int displayPage = form.getPage(); ///getDisplayPage(request);
		List<SampleBean> sampleBeans = new ArrayList<SampleBean>();
		// retrieve from session if it's not null and not first page
		if (session.getAttribute("sampleSearchResults") != null
				&& displayPage > 0) {
			sampleBeans = new ArrayList<SampleBean>((List) session.getAttribute("sampleSearchResults"));
		} else {
			sampleBeans = querySamples(form, request);
			if (sampleBeans != null && !sampleBeans.isEmpty()) {
				session.setAttribute("sampleSearchResults", sampleBeans);
			} else {
				messages.add(PropertyUtil.getProperty("sample", "message.searchSample.noresult"));
				return messages;
			}
		}

		// load sampleBean details 25 at a time for displaying
		// pass in page and size
		List<SampleBean> sampleBeansPerPage = getSamplesPerPage(sampleBeans,
				displayPage, request);
		// in case any samples has been filtered during loading of sample
		// information. e.g. POC is missing
		
		if (sampleBeansPerPage.isEmpty()) {
			messages.add(PropertyUtil.getProperty("sample", "message.searchSample.noresult"));
			return messages;
		}
		
		if (SpringSecurityUtil.isUserLoggedIn()) {
			loadUserAccess(request, sampleBeansPerPage);
		}
		//set in sessionScope so user can go back to the result from the sample summary page
		request.getSession().setAttribute("samples", sampleBeansPerPage);
		// get the total size of collection , required for display tag to
		// get the pagination to work

		// set in sessionScope so user can go back to the result from the sample
		// summary page
		request.getSession().setAttribute("resultSize", new Integer(sampleBeans.size()));
		
		//return mapping.findForward("success");
		//UserBean user = (UserBean) (request.getSession().getAttribute("user"));

        return transfertoSimpleSampleBeans(sampleBeansPerPage);
	}
	
	public List<SimpleSearchSampleBean> getSamplesByCollaborationGroup(HttpServletRequest request, Long groupId) throws Exception
	{
		Group collabGrp = null;
		List<SampleBean> sampleList = new ArrayList<SampleBean>();
		if (groupId != null)
			collabGrp = groupService.getGroupById(groupId);
		
		List<Long> collabGrpSamples = sampleServiceHelper.getSampleAccessibleToACollabGrp(collabGrp.getGroupName());
		if (collabGrpSamples != null & collabGrpSamples.size() > 0)
		{
			for (Long sampleId : collabGrpSamples)
			{
				SampleBean sampleBean = sampleService.findSampleById(sampleId + "", false);
				if (sampleBean != null) {
					Sample sample = sampleBean.getDomain();
					// load summary information
					sampleBean.setCharacterizationClassNames(sampleServiceHelper
							.getStoredCharacterizationClassNames(sample)
							.toArray(new String[0]));
					sampleBean.setFunctionalizingEntityClassNames(sampleServiceHelper
							.getStoredFunctionalizingEntityClassNames(sample)
							.toArray(new String[0]));
					sampleBean.setNanomaterialEntityClassNames(sampleServiceHelper
							.getStoredNanomaterialEntityClassNames(sample)
							.toArray(new String[0]));
					sampleBean.setFunctionClassNames(sampleServiceHelper
							.getStoredFunctionClassNames(sample).toArray(new String[0]));
					sampleBean.setSynthesisClassNames(sampleServiceHelper.getStoredSynthesisClassNames(sample).toArray(new String[0]));
					// get data availability for the samples
					Set<DataAvailabilityBean> dataAvailability = dataAvailabilityServiceDAO.findDataAvailabilityBySampleId(sampleId + "");
					// dataAvailabilityMapPerPage.put(sampleId,
					// dataAvailability);
					if (!dataAvailability.isEmpty() && dataAvailability.size() > 0)
					{
						sampleBean.setDataAvailability(dataAvailability);
						sampleBean.setHasDataAvailability(true);
						calculateDataAvailabilityScore(request, sampleBean, dataAvailability);
					}
				}
				sampleList.add(sampleBean);
			}
		}
		List<SimpleSearchSampleBean> searchBeanList = transfertoSimpleSampleBeans(sampleList);
		if (searchBeanList != null && searchBeanList.size() > 0)
			Collections.sort(searchBeanList, new Comparators.SimpleSearchSampleBeanComparator());
		return searchBeanList;
	}
	
	/**
	 * 
	 */
	protected List<SimpleSearchSampleBean> transfertoSimpleSampleBeans(List<SampleBean> sampleBeans)
	{
		List<SimpleSearchSampleBean> simpleBeans = new ArrayList<SimpleSearchSampleBean>();
		
		for (SampleBean bean : sampleBeans) {
			
			SimpleSearchSampleBean simpleBean = new SimpleSearchSampleBean();
			simpleBean.transferSampleBeanForBasicResultView(bean);
			simpleBeans.add(simpleBean);
		}
		
		return simpleBeans;
	}

	private List<SampleBean> querySamples(SearchSampleForm form, HttpServletRequest request) throws Exception
	{		
		HttpSession session = request.getSession();
		
		List<SampleBean> sampleBeans = new ArrayList<SampleBean>();
		String samplePointOfContact = (String) form.getSamplePointOfContact();
		// strip wildcards at either end if entered by user
		samplePointOfContact = StringUtils.stripWildcards(samplePointOfContact);
		//String pocOperand = Constants.STRING_OPERAND_CONTAINS; 
		String pocOperand = (String) form.getPocOperand();
		if (pocOperand.equals(Constants.STRING_OPERAND_CONTAINS) && !StringUtils.isEmpty(samplePointOfContact)) {
			samplePointOfContact = "*" + samplePointOfContact + "*";
		}
		String sampleName = (String) form.getSampleName();
		// strip wildcards at either end if entered by user
		sampleName = StringUtils.stripWildcards(sampleName);
		//String nameOperand = Constants.STRING_OPERAND_CONTAINS; //(String) form.getNameOperand();
		String nameOperand = (String) form.getNameOperand(); 
		if (nameOperand.equals(Constants.STRING_OPERAND_CONTAINS) && !StringUtils.isEmpty(sampleName)) {
			sampleName = "*" + sampleName + "*";
		}
		String[] nanomaterialEntityTypes = new String[0];
		String[] functionalizingEntityTypes = new String[0];
		String[] functionTypes = new String[0];
		String[] characterizations = new String[0];
		String texts = "";

		if (form != null) {
			nanomaterialEntityTypes = (String[]) form.getNanomaterialEntityTypes();
			if (nanomaterialEntityTypes == null || nanomaterialEntityTypes.length == 0) 
				nanomaterialEntityTypes = new String[0];
			
			functionalizingEntityTypes = (String[]) form.getFunctionalizingEntityTypes();
			if (functionalizingEntityTypes == null || functionalizingEntityTypes.length == 0) 
				functionalizingEntityTypes = new String[0];
			
			functionTypes = (String[]) form.getFunctionTypes();
			if (functionTypes == null || functionTypes.length == 0) 
				functionTypes = new String[0];
			
			characterizations = (String[]) form.getCharacterizations();
			if (characterizations == null || characterizations.length == 0) {
				characterizations = new String[0];
			}
				//characterizations = SampleUtil.getDefaultListFromSessionByType("nanomaterialEntityTypes", session);
			texts = form.getText().trim();

		}

		// convert nanomaterial entity display names into short class names
		// and
		// other types
		List<String> nanomaterialEntityClassNames = new ArrayList<String>();
		List<String> otherNanomaterialEntityTypes = new ArrayList<String>();
		for (int i = 0; i < nanomaterialEntityTypes.length; i++) {
			String className = ClassUtils.getShortClassNameFromDisplayName(nanomaterialEntityTypes[i]);
			Class clazz = ClassUtils.getFullClass("nanomaterial." + className);
			if (clazz == null) {
				className = "OtherNanomaterialEntity";
				otherNanomaterialEntityTypes.add(nanomaterialEntityTypes[i]);
			} else {
				nanomaterialEntityClassNames.add(className);
			}
		}

		// convert functionalizing entity display names into short class
		// names
		// and other types
		List<String> functionalizingEntityClassNames = new ArrayList<String>();
		List<String> otherFunctionalizingTypes = new ArrayList<String>();
		for (int i = 0; i < functionalizingEntityTypes.length; i++) {
			String className = ClassUtils.getShortClassNameFromDisplayName(functionalizingEntityTypes[i]);
			Class clazz = ClassUtils.getFullClass("agentmaterial." + className);
			if (clazz == null) {
				className = "OtherFunctionalizingEntity";
				otherFunctionalizingTypes.add(functionalizingEntityTypes[i]);
			} else {
				functionalizingEntityClassNames.add(className);
			}
		}

		// convert function display names into short class names and other
		// types
		List<String> functionClassNames = new ArrayList<String>();
		List<String> otherFunctionTypes = new ArrayList<String>();
		for (int i = 0; i < functionTypes.length; i++) {
			String className = ClassUtils.getShortClassNameFromDisplayName(functionTypes[i]);
			Class clazz = ClassUtils.getFullClass("function." + className);
			if (clazz == null) {
				className = "OtherFunction";
				otherFunctionTypes.add(functionTypes[i]);
			} else {
				functionClassNames.add(className);
			}
		}

		// convert characterization display names into short class names and
		// other types
		List<String> charaClassNames = new ArrayList<String>();
		List<String> otherCharacterizationTypes = new ArrayList<String>();
		for (int i = 0; i < characterizations.length; i++) {
			String className = ClassUtils.getShortClassNameFromDisplayName(characterizations[i]);
			if (className.length() == 0 || characterizations[i].startsWith("other") ) {
				className = "OtherCharacterization";
				otherCharacterizationTypes.add(characterizations[i]);
			} else {
				charaClassNames.add(className);
			}
		}

		List<String> wordList = StringUtils.parseToWords(texts, "\r\n");
		String[] words = null;
		if (wordList != null) {
			words = new String[wordList.size()];
			wordList.toArray(words);
		}
		List<String> sampleIds = sampleService.findSampleIdsBy(sampleName,
				samplePointOfContact,
				nanomaterialEntityClassNames.toArray(new String[0]),
				otherNanomaterialEntityTypes.toArray(new String[0]),
				functionalizingEntityClassNames.toArray(new String[0]),
				otherFunctionalizingTypes.toArray(new String[0]),
				functionClassNames.toArray(new String[0]),
				otherFunctionTypes.toArray(new String[0]),
				charaClassNames.toArray(new String[0]),
				otherCharacterizationTypes.toArray(new String[0]), words);
		for (String id : sampleIds) {
			// empty sampleBean that only has id;
			SampleBean sampleBean = new SampleBean(id);
			sampleBeans.add(sampleBean);
		}
		return sampleBeans;
	}


	/*Session s = em.unwrap(Session.class);
	Session s2 = s.getSessionFactory().openSession();
        s2.setFlushMode(FlushMode.MANUAL);
        s2.getTransaction().begin();
        s2.createSQLQuery("INSERT INTO `ttest` (`name`,`state`,`constraintCol`)VALUES('a','b','c')").executeUpdate();
	String x = "test";
        s2.createSQLQuery("INSERT INTO `ttest` (`name`,`state`,`constraintCol`)VALUES('a','c','b')").executeUpdate();
	String y = "test2";
        s2.createSQLQuery("INSERT INTO `ttest` (`name`,`state`,`constraintCol`)VALUES('c','b','a')").executeUpdate();
        s2.getTransaction().commit();
        s2.close();
	*/

	public SimpleSearchSampleBean getSearchSampleResultNG(String sampleID, String partialStock) throws Exception {
		SimpleSearchSampleBean sssb = getCoreSearchSampleResultNG(sampleID);
		if (sssb == null) {
			return (null);
		}
		if ((partialStock == null) || partialStock == "Characterization") {
			sssb = getSearchSampleCharacterizationResultNG(sampleID, sssb);
		}
		if ((partialStock == null) || partialStock == "Composition") {
			sssb = getSearchSampleCompositionResultNG(sampleID, sssb);
		}
		if ((partialStock == null) || partialStock == "Function") {
			sssb = getSearchSampleFunctionResultNG(sampleID, sssb);
		}
		return (sssb);
	}

	public SimpleSearchSampleBean getSearchSampleFunctionResultNG(String sampleID, SimpleSearchSampleBean sssb) throws Exception {
		String query =
			"select DISTINCT " +
			"  CASE " +
    		"    WHEN f.discriminator = \"OtherFunction\" THEN " +
       		"      f.other_function_type " +
    		"    ELSE f.discriminator  " +
			"  END as Functions  " +
			"FROM nano_function AS f " +
			"  JOIN composing_element AS o " +
			"    ON f.composing_element_pk_id = o.composing_element_pk_id " +
			"      JOIN nanomaterial_entity AS n " +
			"        ON o.nanomaterial_entity_pk_id = n.nanomaterial_entity_pk_id " +
			"          JOIN composition AS c " +
			"             ON c.composition_pk_id = n.composition_pk_id " +
			"WHERE c.sample_pk_id = " + sampleID + " " +
			"UNION DISTINCT " +
			"SELECT DISTINCT " +
			"  CASE " +
    		"    WHEN n.discriminator = \"OtherFunction\" THEN " +
       		"      n.other_function_type " +
    		"    ELSE n.discriminator " +
			"  END as Functions  " +
			"FROM nano_function AS n " +
			"  JOIN functionalizing_entity AS f " +
			"    ON n.functionalizing_entity_pk_id = f.functionalizing_entity_pk_id " +
			"      JOIN composition AS c " +
			"        ON f.composition_pk_id = c.composition_pk_id " +
			"WHERE c.sample_pk_id = " + sampleID;
		try {
			CaNanoLabApplicationService appService =
					(CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
			String[] columns = new String[] {
					"Functions"};
			Object[] columnTypes = new Object[] {
					StandardBasicTypes.STRING};
			List results = appService.directSQL(query, columns, columnTypes);
			String[] funcs = new String[results.size()];
			for (int i = 0; i < results.size(); i++) {
				funcs[i] = (String)results.get(i);
			}
			sssb.setFunctions(funcs);
		} catch (Exception e) {
			logger.error("Error in getting sample search result", e);
			throw e;
		}
		return (sssb);
	}

	public SimpleSearchSampleBean getSearchSampleCompositionResultNG(String sampleID, SimpleSearchSampleBean sssb) throws Exception {
		String query =
			"SELECT DISTINCT " +
				"CASE " +
					"WHEN n.discriminator = \"OtherNanomaterialEntity\" THEN o.type " +
					"ELSE n.discriminator " +
				"END as Composition " +
			"FROM other_nanomaterial_entity AS o " +
				"RIGHT JOIN nanomaterial_entity AS n " +
					"ON o.other_nanomaterial_entity_pk_id = n.nanomaterial_entity_pk_id " +
					"JOIN composition AS c " +
						"ON c.composition_pk_id = n.composition_pk_id " +
			"WHERE c.sample_pk_id = " + sampleID + " ORDER BY Composition";
		try {
			CaNanoLabApplicationService appService =
					(CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
			String[] columns = new String[] {
					"Composition"};
			Object[] columnTypes = new Object[] {
					StandardBasicTypes.STRING};
			List results = appService.directSQL(query, columns, columnTypes);
			String[] comps = new String[results.size()];
			for (int i = 0; i < results.size(); i++) {
				comps[i] = (String)results.get(i);
			}
			sssb.setComposition(comps);
		} catch (Exception e) {
			logger.error("Error in getting sample search result", e);
			throw e;
		}
		return (sssb);
	}

	public SimpleSearchSampleBean getSearchSampleCharacterizationResultNG(String sampleID, SimpleSearchSampleBean sssb) throws Exception {
		String query =
			"SELECT DISTINCT " +
					"CASE " +
					"WHEN discriminator = \"OtherCharacterization\" THEN " +
						"other_char_name " +
					"ELSE discriminator " +
					"END as Characterization " +
		   	"FROM characterization " +
					"WHERE sample_pk_id = " + sampleID + " " +
					"ORDER by Characterization";
		try {
			CaNanoLabApplicationService appService =
					(CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
			String[] columns = new String[] {
					"Characterization"};
			Object[] columnTypes = new Object[] {
					StandardBasicTypes.STRING};
			List results = appService.directSQL(query, columns, columnTypes);
			String[] chars = new String[results.size()];
			for (int i = 0; i < results.size(); i++) {
				chars[i] = (String)results.get(i);
			}
			sssb.setCharacterizations(chars);
		} catch (Exception e) {
			logger.error("Error in getting sample search result", e);
			throw e;
		}
		return (sssb);
	}
	private SimpleSearchSampleBean getCoreSearchSampleResultNG(String sampleID) throws Exception {
		SimpleSearchSampleBean sssb = new SimpleSearchSampleBean();
		String query =
				"select s.sample_name, s.created_date, o.name, o.streetAddress1, o.streetAddress2, " +
						"o.city, o.state, o.postal_code, o.country from sample as s " +
						"join point_of_contact as p " +
						"on p.poc_pk_id = s.primary_contact_pk_id " +
						"join organization as o " +
						"on p.organization_pk_id = o.organization_pk_id " +
						" where sample_pk_id = " + sampleID;
		try {
			CaNanoLabApplicationService appService =
					(CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
			String[] columns = new String[] {
					"sample_name",
					"created_date",
					"name",
					"streetAddress1",
					"streetAddress2",
					"city",
					"state",
					"postal_code",
					"country"};
			Object[] columnTypes = new Object[]{
					StandardBasicTypes.STRING,
					StandardBasicTypes.TIMESTAMP,
					StandardBasicTypes.STRING,
					StandardBasicTypes.STRING,
					StandardBasicTypes.STRING,
					StandardBasicTypes.STRING,
					StandardBasicTypes.STRING,
					StandardBasicTypes.STRING,
					StandardBasicTypes.STRING};
			List results = appService.directSQL(query, columns, columnTypes);
			if ((results == null) || results.isEmpty()) {
				return (null);
			}
			// Wait, there should only be one, right?
			for (int i = 0; i < results.size(); i++) {
				Object[] row = (Object[]) results.get(i);
				sssb.setSampleId(Long.parseLong(sampleID));
				sssb.setSampleName((String)row[0]);
				sssb.setCreatedDate((Date)row[1]);
				sssb.setPointOfContact(row[3] + " " + row[4] + " " + row[5] + " " + row[6] + " " + row[7] + " " + row[8]);
			}
		} catch (Exception e) {
			logger.error("Error in getting sample search result", e);
			throw e;
		}
		return (sssb);
	}

	private List<SimpleSearchSampleBean> getSortedSamplesPerPageNG(List<String> sampleIDs,
																   SimpleSortRequestBean sortAsk,
																   HttpServletRequest request) throws Exception {
		List<SimpleSearchSampleBean> loadedSampleBeans = new ArrayList<SimpleSearchSampleBean>();
		// Map<String, Set<DataAvailabilityBean>> dataAvailabilityMapPerPage =
		// new HashMap<String, Set<DataAvailabilityBean>>();
		//
		// Stock a partial bean for *every* sample, only for the column that is the sort request. Do the
		// sort, figure out which samples fall in the range we are being asked for, finish stocking all
		// the data for that set, and return them
		//

		List<SimpleSearchSampleBean> allPartialBeansToSort = new ArrayList<SimpleSearchSampleBean>();
		for (String sampleID: sortAsk.getSampleIDs()){
			System.out.println("WJRL get my sort on: " + sortAsk.getSortOn());
			allPartialBeansToSort.add(getSearchSampleResultNG(sampleID, null));
		}

		// Sort the results!

		List<SimpleSearchSampleBean> sorted = new ArrayList<SimpleSearchSampleBean>();
		for (int i = 10; i >= 0; i--) {
			sorted.add(allPartialBeansToSort.get(i));
		}

		// Take the items that land in the current page range.

		for (SimpleSearchSampleBean sssb: sorted) {
			SimpleSearchSampleBean full_sssb = getSearchSampleResultNG(sssb.getSampleId(), null);
			// get data availability for the sample
			if (full_sssb != null) {
				Set<DataAvailabilityBean> dataAvailability = dataAvailabilityServiceDAO.findDataAvailabilityBySampleId(sampleId);
				// dataAvailabilityMapPerPage.put(sampleId,
				// dataAvailability);
				if (!dataAvailability.isEmpty()) {
					SampleBean hackBeanFixMe = new SampleBean();
					hackBeanFixMe.setDataAvailability(dataAvailability);
					hackBeanFixMe.setHasDataAvailability(true);
					calculateDataAvailabilityScore(request, hackBeanFixMe, dataAvailability);
					full_sssb.setDataAvailability(hackBeanFixMe.getDataAvailabilityMetricsScore());
				}
				loadedSampleBeans.add(full_sssb);
			}
		}
		// request.getSession().setAttribute("dataAvailabilityMapPerPage",
		// dataAvailabilityMapPerPage);
		return loadedSampleBeans;
	}




	private List<SimpleSearchSampleBean> getSamplesPerPageNG(List<SampleBean> sampleBeans, int page, HttpServletRequest request)
			throws Exception
	{
		List<SimpleSearchSampleBean> loadedSampleBeans = new ArrayList<SimpleSearchSampleBean>();
		// Map<String, Set<DataAvailabilityBean>> dataAvailabilityMapPerPage =
		// new HashMap<String, Set<DataAvailabilityBean>>();
		for (int i = 0; i < 10; i++) {
		//for (int i = page * Constants.DISPLAY_TAG_TABLE_SIZE; i < (page + 1) * Constants.DISPLAY_TAG_TABLE_SIZE; i++) {
			if (i < sampleBeans.size()) {
				String sampleId = sampleBeans.get(i).getDomain().getId().toString();
				SimpleSearchSampleBean sssb = getSearchSampleResultNG(sampleId, null);
				//SampleBean sampleBean = service.findSampleBasicById(sampleId, false);
				//
				// It appears this class name casting is not needed, since we are pulling discriminator names
				// out of the database, which map (always?) to the short class name, and we also
				// handle the mapping to the other type names as well
				//
				/*
				if (sampleBean != null) {
					Sample sample = sampleBean.getDomain();
					// load summary information
					sampleBean.setCharacterizationClassNames(sampleServiceHelper
							.getStoredCharacterizationClassNames(sample)
							.toArray(new String[0]));
					sampleBean.setFunctionalizingEntityClassNames(sampleServiceHelper
							.getStoredFunctionalizingEntityClassNames(sample)
							.toArray(new String[0]));
					sampleBean.setNanomaterialEntityClassNames(sampleServiceHelper
							.getStoredNanomaterialEntityClassNames(sample)
							.toArray(new String[0]));
					sampleBean.setFunctionClassNames(sampleServiceHelper
							.getStoredFunctionClassNames(sample).toArray(new String[0]));
					sampleBean.setSynthesisClassNames(sampleServiceHelper.getStoredSynthesisClassNames(sample).toArray(new String[0]));
				 */
				// get data availability for the sample
				if (sssb != null) {
					Set<DataAvailabilityBean> dataAvailability = dataAvailabilityServiceDAO.findDataAvailabilityBySampleId(sampleId);
					// dataAvailabilityMapPerPage.put(sampleId,
					// dataAvailability);
					if (!dataAvailability.isEmpty()) {
						SampleBean hackBeanFixMe = new SampleBean();
						hackBeanFixMe.setDataAvailability(dataAvailability);
						hackBeanFixMe.setHasDataAvailability(true);
						calculateDataAvailabilityScore(request, hackBeanFixMe, dataAvailability);
						sssb.setDataAvailability(hackBeanFixMe.getDataAvailabilityMetricsScore());
					}
					loadedSampleBeans.add(sssb);
				}
			}
		}
		// request.getSession().setAttribute("dataAvailabilityMapPerPage",
		// dataAvailabilityMapPerPage);
		return loadedSampleBeans;
	}

	private List<SampleBean> getSamplesPerPage(List<SampleBean> sampleBeans, int page, HttpServletRequest request)
			throws Exception
	{
		List<SampleBean> loadedSampleBeans = new ArrayList<SampleBean>();
		// Map<String, Set<DataAvailabilityBean>> dataAvailabilityMapPerPage =
		// new HashMap<String, Set<DataAvailabilityBean>>();
		for (int i = page * Constants.DISPLAY_TAG_TABLE_SIZE; i < (page + 1) * Constants.DISPLAY_TAG_TABLE_SIZE; i++) {
			if (i < sampleBeans.size()) {
				String sampleId = sampleBeans.get(i).getDomain().getId().toString();
				//SampleBean sampleBean = service.findSampleBasicById(sampleId, false);
				SampleBean sampleBean = sampleService.findSampleById(sampleId, false);
				if (sampleBean != null) {
					Sample sample = sampleBean.getDomain();
					// load summary information
					sampleBean.setCharacterizationClassNames(sampleServiceHelper
							.getStoredCharacterizationClassNames(sample)
							.toArray(new String[0]));
					sampleBean.setFunctionalizingEntityClassNames(sampleServiceHelper
							.getStoredFunctionalizingEntityClassNames(sample)
							.toArray(new String[0]));
					sampleBean.setNanomaterialEntityClassNames(sampleServiceHelper
							.getStoredNanomaterialEntityClassNames(sample)
							.toArray(new String[0]));
					sampleBean.setFunctionClassNames(sampleServiceHelper
							.getStoredFunctionClassNames(sample).toArray(new String[0]));
					sampleBean.setSynthesisClassNames(sampleServiceHelper.getStoredSynthesisClassNames(sample).toArray(new String[0]));
					// get data availability for the samples
					Set<DataAvailabilityBean> dataAvailability = dataAvailabilityServiceDAO.findDataAvailabilityBySampleId(sampleId);
					// dataAvailabilityMapPerPage.put(sampleId,
					// dataAvailability);
					if (!dataAvailability.isEmpty() && dataAvailability.size() > 0)
					{
						sampleBean.setDataAvailability(dataAvailability);
						sampleBean.setHasDataAvailability(true);
						calculateDataAvailabilityScore(request, sampleBean, dataAvailability);
					}
					loadedSampleBeans.add(sampleBean);
				}
			}
		}
		// request.getSession().setAttribute("dataAvailabilityMapPerPage",
		// dataAvailabilityMapPerPage);
		return loadedSampleBeans;
	}

	private void loadUserAccess(HttpServletRequest request, List<SampleBean> sampleBeans) throws Exception
	{
		List<String> sampleIds = new ArrayList<String>();
		for (SampleBean sampleBean : sampleBeans) {
			sampleIds.add(sampleBean.getDomain().getId().toString());
		}
		for (SampleBean sampleBean : sampleBeans) {
			sampleService.setUpdateDeleteFlags(sampleBean);
		}
	}

	public Map<String, List<String>> setup(HttpServletRequest request)
			throws Exception {

		InitSampleSetup.getInstance().setLocalSearchDropdowns(request);
		request.getSession().removeAttribute("sampleSearchResults");
		
		return SampleUtil.reformatLocalSearchDropdownsInSession(request.getSession());
		
	}

	private void calculateDataAvailabilityScore(HttpServletRequest request, SampleBean sampleBean,
			Set<DataAvailabilityBean> dataAvailability)
	{
		//ServletContext appContext = this.getServlet().getServletContext();
		ServletContext appContext = request.getSession().getServletContext();
		SortedSet<String> minchar = (SortedSet<String>) appContext.getAttribute("MINChar");
		Map<String, String> attributes = (Map<String, String>) appContext.getAttribute("caNano2MINChar");
		sampleBean.calculateDataAvailabilityScore(dataAvailability, minchar, attributes);
	}
	
	/**
	 * 
	 * @param httpRequest
	 * @param type
	 * @return
	 * @throws Exception
	 */
	public List<String> getCharacterizationByType(HttpServletRequest httpRequest, String type) throws Exception
	{
		System.out.println("[STATUS] In SearchSampleBO.getCharacterizationByType:");
		SortedSet<String> charNames = InitCharacterizationSetup.getInstance().getCharNamesByCharType(httpRequest, type, characterizationService);
		
		return new ArrayList<String>(charNames);
	}

}
