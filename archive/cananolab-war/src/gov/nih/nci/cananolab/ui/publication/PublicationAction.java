package gov.nih.nci.cananolab.ui.publication;

/**
 * This class submits publication and assigns visibility
 *
 * @author tanq, pansu
 */

import gov.nih.nci.cananolab.domain.common.Publication;
import gov.nih.nci.cananolab.dto.common.PublicationBean;
import gov.nih.nci.cananolab.dto.common.PublicationSummaryViewBean;
import gov.nih.nci.cananolab.dto.common.UserBean;
import gov.nih.nci.cananolab.dto.particle.SampleBean;
import gov.nih.nci.cananolab.exception.SecurityException;
import gov.nih.nci.cananolab.service.publication.PublicationService;
import gov.nih.nci.cananolab.service.publication.helper.PublicationServiceHelper;
import gov.nih.nci.cananolab.service.publication.impl.PublicationServiceLocalImpl;
import gov.nih.nci.cananolab.service.publication.impl.PublicationServiceRemoteImpl;
import gov.nih.nci.cananolab.service.sample.SampleService;
import gov.nih.nci.cananolab.service.sample.impl.SampleServiceLocalImpl;
import gov.nih.nci.cananolab.ui.core.BaseAnnotationAction;
import gov.nih.nci.cananolab.ui.core.InitSetup;
import gov.nih.nci.cananolab.ui.sample.InitSampleSetup;
import gov.nih.nci.cananolab.ui.security.InitSecuritySetup;
import gov.nih.nci.cananolab.util.Constants;
import gov.nih.nci.cananolab.util.DateUtils;
import gov.nih.nci.cananolab.util.ExportUtils;
import gov.nih.nci.cananolab.util.StringUtils;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.SortedMap;
import java.util.SortedSet;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;
import org.apache.struts.action.ActionMessage;
import org.apache.struts.action.ActionMessages;

public class PublicationAction extends BaseAnnotationAction {

	public ActionForward create(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		PublicationForm theForm = (PublicationForm) form;
		PublicationBean publicationBean = (PublicationBean) theForm
				.get("publication");
		String sampleId = (String) theForm.get("sampleId");
		Boolean addToSample = (Boolean) theForm.get("addToSample");
		UserBean user = (UserBean) request.getSession().getAttribute("user");

		/**
		 * If user chosen other samples, need to add this pub to those samples.
		 */
		List<String> newNames = null;
		String[] otherSamples = (String[]) theForm.get("otherSamples");
		if (otherSamples == null || otherSamples.length == 0) {
			newNames = new ArrayList<String>(1);
		} else {
			newNames = new ArrayList<String>(otherSamples.length + 1);
			newNames.addAll(Arrays.asList(otherSamples));
		}
		/**
		 * If new from sample page, need to add this pub to the sample.
		 */
		if (addToSample != null && addToSample.booleanValue()) {
			SampleService sampleService = new SampleServiceLocalImpl();
			SampleBean sampleBean = sampleService
					.findSampleById(sampleId, user);
			newNames.add(sampleBean.getDomain().getName());
		}
		if (!newNames.isEmpty()) {
			publicationBean.setSampleNames(newNames.toArray(new String[0]));
		}
		publicationBean.setupDomain(Constants.FOLDER_PUBLICATION, user
				.getLoginName());
		PublicationService service = new PublicationServiceLocalImpl();
		service.savePublication(publicationBean, user);

		InitPublicationSetup.getInstance().persistPublicationDropdowns(request,
				publicationBean);

		ActionMessages msgs = new ActionMessages();
		ActionMessage msg = new ActionMessage("message.submitPublication.file",
				publicationBean.getDomainFile().getTitle());
		msgs.add(ActionMessages.GLOBAL_MESSAGE, msg);
		saveMessages(request, msgs);

		if (!StringUtils.isEmpty(sampleId)) {
			SortedSet<String> publicationCategories = InitSetup.getInstance()
					.getDefaultAndOtherTypesByLookup(request,
							"publicationCategories", "publication", "category",
							"otherCategory", true);
			List<String> allPublicationTypes = new ArrayList<String>(
					publicationCategories);
			int ind = allPublicationTypes
					.indexOf(((Publication) publicationBean.getDomainFile())
							.getCategory()) + 1;
			request.setAttribute("onloadJavascript", "showSummary('" + ind
					+ "', " + allPublicationTypes.size() + ")");

			return summaryEdit(mapping, form, request, response);
		} else {
			return mapping.findForward("success");
		}
	}

	/**
	 * Handle delete request from Sample -> Publication -> Edit page.
	 * 
	 * @param mapping
	 * @param form
	 * @param request
	 * @param response
	 * @return
	 * @throws Exception
	 */
	public ActionForward delete(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		PublicationForm theForm = (PublicationForm) form;
		PublicationService service = new PublicationServiceLocalImpl();
		PublicationBean publicationBean = (PublicationBean) theForm
				.get("publication");
		String sampleId = (String) theForm.get("sampleId");
		UserBean user = (UserBean) request.getSession().getAttribute("user");
		service.removePublicationFromSample(sampleId, publicationBean, user);

		return summaryEdit(mapping, form, request, response);
	}

	public ActionForward setupNew(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		PublicationBean pubBean = new PublicationBean();
		String sampleId = request.getParameter("sampleId");
		PublicationForm theForm = (PublicationForm) form;
		theForm.set("sampleId", sampleId);
		// clear copy to otherSamples
		theForm.set("otherSamples", new String[0]);

		String type = request.getParameter("type");
		if (!StringUtils.isEmpty(type)) {
			((Publication) pubBean.getDomainFile()).setCategory(type);
		}
		theForm.set("publication", pubBean);
		InitPublicationSetup.getInstance().setPublicationDropdowns(request);
		ActionForward forward = mapping.getInputForward();
		if (!StringUtils.isEmpty(sampleId)) {
			InitSampleSetup.getInstance()
					.getOtherSampleNames(request, sampleId);
			theForm.set("addToSample", Boolean.TRUE);
			forward = mapping.findForward("sampleSubmitPublication");
		}
		request.setAttribute("onloadJavascript",
				"updateSubmitFormBasedOnCategory()");
		return forward;
	}

	public ActionForward setupUpdate(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		PublicationForm theForm = (PublicationForm) form;
		UserBean user = (UserBean) request.getSession().getAttribute("user");
		String publicationId = request.getParameter("publicationId");
		String sampleId = request.getParameter("sampleId");
		PublicationService publicationService = new PublicationServiceLocalImpl();
		PublicationBean pubBean = publicationService.findPublicationById(
				publicationId, user);
		theForm.set("publication", pubBean);
		theForm.set("sampleId", sampleId);
		theForm.set("otherSamples", new String[0]); // clear copy otherSamples.

		InitPublicationSetup.getInstance().setPublicationDropdowns(request);
		request.setAttribute("onloadJavascript",
				"updateSubmitFormBasedOnCategory();fillPubMedInfo();");
		if (!StringUtils.isEmpty(sampleId)) {
			InitSampleSetup.getInstance()
					.getOtherSampleNames(request, sampleId);
			return mapping.findForward("sampleSubmitPublication");
		} else {
			return mapping.findForward("publicationSubmitPublication");
		}
	}

	/**
	 * Handle summary report print request.
	 * 
	 * @param mapping
	 * @param form
	 * @param request
	 * @param response
	 * @return ActionForward
	 * @throws Exception
	 */
	public ActionForward summaryPrint(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		// Marker that indicates page is for printing (hide tabs, links, etc).
		request.setAttribute("printView", Boolean.TRUE);

		PublicationSummaryViewBean summaryBean = (PublicationSummaryViewBean) request
				.getSession().getAttribute("publicationSummaryView");
		if (summaryBean == null) {
			// Prepare data.
			this.prepareSummary(mapping, form, request, response);
			summaryBean = (PublicationSummaryViewBean) request.getSession()
					.getAttribute("publicationSummaryView");
		}

		// Filter out categories that not selected.
		this.filterType(request, summaryBean);

		return mapping.findForward("summaryPrint");
	}

	/**
	 * Handle summary report view request.
	 * 
	 * @param mapping
	 * @param form
	 * @param request
	 * @param response
	 * @return ActionForward
	 * @throws Exception
	 */
	public ActionForward summaryView(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		// Prepare data.
		this.prepareSummary(mapping, form, request, response);

		return mapping.findForward("summaryView");
	}

	/**
	 * Handle summary report edit request.
	 * 
	 * @param mapping
	 * @param form
	 * @param request
	 * @param response
	 * @return ActionForward
	 * @throws Exception
	 */
	public ActionForward summaryEdit(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		// if session is expired or the url is clicked on directly
		UserBean user = (UserBean) request.getSession().getAttribute("user");
		if (user == null) {
			return summaryView(mapping, form, request, response);
		}
		this.prepareSummary(mapping, form, request, response);

		return mapping.findForward("summaryEdit");
	}

	/**
	 * Handle summary report export request.
	 * 
	 * @param mapping
	 * @param form
	 * @param request
	 * @param response
	 * @return ActionForward
	 * @throws Exception
	 */
	public ActionForward summaryExport(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		SampleBean sampleBean = (SampleBean) request.getSession().getAttribute(
				"theSample");
		PublicationSummaryViewBean summaryBean = (PublicationSummaryViewBean) request
				.getSession().getAttribute("publicationSummaryView");
		if (sampleBean == null || summaryBean == null) {
			// Prepare data.
			this.prepareSummary(mapping, form, request, response);
			sampleBean = (SampleBean) request.getSession().getAttribute(
					"theSample");
			summaryBean = (PublicationSummaryViewBean) request.getSession()
					.getAttribute("publicationSummaryView");
		}
		this.filterType(request, summaryBean);

		// Get sample name for constructing file name.
		String type = request.getParameter("type");
		String fileName = ExportUtils.getExportFileName(sampleBean.getDomain()
				.getName(), "PublicationSummaryView", type);
		ExportUtils.prepareReponseForExcel(response, fileName);
		PublicationServiceLocalImpl.exportSummary(summaryBean, response
				.getOutputStream());

		return null;
	}

	/**
	 * Shared function for summaryView(), summaryEdit(), summaryExport() and
	 * summaryPrint().
	 * 
	 * @param mapping
	 * @param form
	 * @param request
	 * @param response
	 * @return ActionForward
	 * @throws Exception
	 */
	private void prepareSummary(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		// Remove previous result from session.
		HttpSession session = request.getSession();
		session.removeAttribute("publicationSummaryView");
		session.removeAttribute("theSample");

		PublicationForm theForm = (PublicationForm) form;
		String sampleId = theForm.getString("sampleId");
		String location = theForm.getString(Constants.LOCATION);
		SampleBean sampleBean = setupSample(theForm, request, location);
		InitSetup.getInstance().getDefaultAndOtherTypesByLookup(request,
				"publicationCategories", "publication", "category",
				"otherCategory", true);
		UserBean user = (UserBean) request.getSession().getAttribute("user");

		PublicationService publicationService = null;
		if (Constants.LOCAL_SITE.equals(location)) {
			publicationService = new PublicationServiceLocalImpl();
		} else {
			String serviceUrl = InitSetup.getInstance().getGridServiceUrl(
					request, location);
			publicationService = new PublicationServiceRemoteImpl(serviceUrl);
		}
		List<PublicationBean> publications = publicationService
				.findPublicationsBySampleId(sampleId, user);
		PublicationSummaryViewBean summaryView = new PublicationSummaryViewBean(
				publications);
		/**
		 * Set location for display name where location is needed for making
		 * URL.
		 */
		for (PublicationBean pubBean : publications) {
			pubBean.setLocation(location);
		}
		// Save sample & publication bean in session for printing/exporting.
		session.setAttribute("publicationSummaryView", summaryView);
		session.setAttribute("theSample", sampleBean);

		if ("true".equals(request.getParameter("clearTab"))) {
			request.getSession().removeAttribute("onloadJavascript");
		}
	}

	public ActionForward printDetailView(ActionMapping mapping,
			ActionForm form, HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		String location = request.getParameter(Constants.LOCATION);
		UserBean user = (UserBean) request.getSession().getAttribute("user");
		PublicationService publicationService = null;
		if (location.equals(Constants.LOCAL_SITE)) {
			publicationService = new PublicationServiceLocalImpl();
		}
		// else {
		// String serviceUrl = InitSetup.getInstance().getGridServiceUrl(
		// request, location);
		// publicationService = new PublicationServiceRemoteImpl(serviceUrl);
		// }
		String publicationId = request.getParameter("publicationId");
		PublicationBean pubBean = publicationService.findPublicationById(
				publicationId, user);
		PublicationForm theForm = (PublicationForm) form;
		theForm.set("publication", pubBean);
		return mapping.findForward("publicationDetailPrintView");
	}

	public ActionForward input(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		// save new entered other types
		InitPublicationSetup.getInstance().setPublicationDropdowns(request);
		PublicationForm theForm = (PublicationForm) form;

		PublicationBean publicationBean = (PublicationBean) theForm
				.get("publication");
		String selectedPublicationType = ((Publication) publicationBean
				.getDomainFile()).getCategory();
		if (selectedPublicationType != null) {
			SortedSet<String> types = (SortedSet<String>) request.getSession()
					.getAttribute("publicationCategories");
			if (types != null) {
				types.add(selectedPublicationType);
				request.getSession().setAttribute("publicationCategories",
						types);
			}
		}
		String selectedPublicationStatus = ((Publication) publicationBean
				.getDomainFile()).getStatus();
		if (selectedPublicationStatus != null) {
			SortedSet<String> statuses = (SortedSet<String>) request
					.getSession().getAttribute("publicationStatuses");
			if (statuses != null) {
				statuses.add(selectedPublicationStatus);
				request.getSession().setAttribute("publicationStatuses",
						statuses);
			}
		}
		theForm.set("publication", publicationBean);

		/**
		 * Set PubMedId from default value 0 to null for better displaying
		 * result.
		 */
		Publication pub = (Publication) publicationBean.getDomainFile();
		if (pub.getPubMedId() != null && pub.getPubMedId() == 0) {
			pub.setPubMedId(null);
		}
		request.setAttribute("onloadJavascript",
				"updateSubmitFormBasedOnCategory();fillPubMedInfo();");

		return mapping.findForward("publicationSubmitPublication");
	}

	public ActionForward detailView(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		String location = request.getParameter(Constants.LOCATION);
		UserBean user = (UserBean) request.getSession().getAttribute("user");
		PublicationService publicationService = null;
		if (Constants.LOCAL_SITE.equals(location)) {
			publicationService = new PublicationServiceLocalImpl();
		} else {
			String serviceUrl = InitSetup.getInstance().getGridServiceUrl(
					request, location);
			publicationService = new PublicationServiceRemoteImpl(serviceUrl);
		}
		String publicationId = request.getParameter("publicationId");
		PublicationBean pubBean = publicationService.findPublicationById(
				publicationId, user);
		PublicationForm theForm = (PublicationForm) form;
		theForm.set("publication", pubBean);

		ActionForward forward = null;
		String sampleId = request.getParameter("sampleId");
		if (StringUtils.isEmpty(sampleId)) {
			forward = mapping.findForward("publicationDetailView");
		} else {
			forward = mapping.findForward("sampleDetailView");
		}

		String requestUrl = request.getRequestURL().toString();
		String printLinkURL = requestUrl
				+ "?page=0&dispatch=printDetailView&sampleId=" + sampleId
				+ "&publicationId=" + publicationId + "&location=" + location;
		request.getSession().setAttribute("printDetailViewLinkURL",
				printLinkURL);

		return forward;
	}

	public ActionForward addAuthor(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		PublicationForm theForm = (PublicationForm) form;
		PublicationBean pbean = (PublicationBean) theForm.get("publication");
		pbean.addAuthor();

		return mapping.getInputForward();
	}

	protected boolean validateResearchAreas(HttpServletRequest request,
			String[] researchAreas) throws Exception {
		ActionMessages msgs = new ActionMessages();
		boolean noErrors = true;
		if (researchAreas == null || researchAreas.length == 0) {
			ActionMessage msg = new ActionMessage(
					"submitPublicationForm.file.researchArea", "researchAreas");
			msgs.add(ActionMessages.GLOBAL_MESSAGE, msg);
			this.saveErrors(request, msgs);
			noErrors = false;
		} else {
			System.out.println("validateResearchAreas =="
					+ Arrays.toString(researchAreas));
		}
		return noErrors;
	}

	public ActionForward exportDetail(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		String location = request.getParameter(Constants.LOCATION);
		UserBean user = (UserBean) request.getSession().getAttribute("user");
		PublicationService publicationService = null;
		if (location.equals(Constants.LOCAL_SITE)) {
			publicationService = new PublicationServiceLocalImpl();
		}
		// else {
		// String serviceUrl = InitSetup.getInstance().getGridServiceUrl(
		// request, location);
		// publicationService = new PublicationServiceRemoteImpl(serviceUrl);
		// }
		String publicationId = request.getParameter("publicationId");
		PublicationBean pubBean = publicationService.findPublicationById(
				publicationId, user);
		PublicationForm theForm = (PublicationForm) form;
		theForm.set("publication", pubBean);
		String title = pubBean.getDomainFile().getTitle();
		if (!StringUtils.isEmpty(title)) {
			title = title.substring(0, 10);
		}

		String fileName = this.getExportFileName(title, "detailView");
		ExportUtils.prepareReponseForExcel(response, fileName);
		PublicationServiceLocalImpl.exportDetail(pubBean, response
				.getOutputStream());

		return null;
	}

	private String getExportFileName(String titleName, String viewType) {
		List<String> nameParts = new ArrayList<String>();
		nameParts.add(titleName);
		nameParts.add("Publication");
		nameParts.add(viewType);
		nameParts.add(DateUtils.convertDateToString(Calendar.getInstance()
				.getTime()));
		String exportFileName = StringUtils.join(nameParts, "_");
		return exportFileName;
	}

	/**
	 * Shared function for summaryExport() and summaryPrint(). Filter out
	 * unselected types when user selected one type for print/export.
	 * 
	 * @param request
	 * @param compBean
	 */
	private void filterType(HttpServletRequest request,
			PublicationSummaryViewBean summaryBean) {
		// 1. Restore all data first as bean might be filtered before.
		SortedMap<String, List<PublicationBean>> dataMap = summaryBean
				.getCategory2Publications();
		summaryBean.setPublicationCategories(dataMap.keySet());

		// 2. Filter out categories that are not selected.
		String type = request.getParameter("type");
		if (!StringUtils.isEmpty(type)) {
			Set<String> cats = new HashSet<String>(1);
			cats.add(type);
			summaryBean.setPublicationCategories(cats);
		}
	}

	public Boolean canUserExecutePrivateDispatch(UserBean user)
			throws SecurityException {
		return InitSecuritySetup.getInstance().userHasCreatePrivilege(user,
				Constants.CSM_PG_PUBLICATION);
	}
}