package gov.nih.nci.cananolab.restful.synthesis;

import gov.nih.nci.cananolab.dto.particle.SampleBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurificationBean;
import gov.nih.nci.cananolab.restful.core.BaseAnnotationBO;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;
import gov.nih.nci.cananolab.service.curation.CurationService;
import gov.nih.nci.cananolab.service.sample.SampleService;
import gov.nih.nci.cananolab.service.sample.SynthesisService;
import gov.nih.nci.cananolab.service.sample.exporter.SynthesisExporter;
import gov.nih.nci.cananolab.ui.form.SynthesisForm;
import gov.nih.nci.cananolab.util.ExportUtils;
import gov.nih.nci.cananolab.util.StringUtils;
import java.util.Collections;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

@Component("synthesisBO")
public class SynthesisBO extends BaseAnnotationBO {


    @Autowired
    private CurationService curationServiceDAO;

    @Autowired
    private SampleService sampleService;

    @Autowired
    private SpringSecurityAclService springSecurityAclService;

    @Autowired
    private SynthesisService synthesisService;

    @Autowired
    private UserDetailsService userDetailsService;

    public SynthesisBO() {
    }

//    public String download(String fileId, HttpServletRequest httpRequest, HttpServletResponse httpResponse) {
//        return null;
//    }


    public CurationService getCurationServiceDAO() {
        return this.curationServiceDAO;
    }

    public SampleService getSampleService() {
        return this.sampleService;
    }

    public SpringSecurityAclService getSpringSecurityAclService() {
        return this.springSecurityAclService;
    }

    public UserDetailsService getUserDetailsService() {
        return this.userDetailsService;
    }

    public String summaryExport(SynthesisForm form, String type, HttpServletRequest httpRequest, HttpServletResponse httpResponse) throws Exception{
        // Retrieve compBean from session to avoid re-querying.
        SynthesisBean synthesisBean = (SynthesisBean) httpRequest.getSession()
                .getAttribute("compBean");
        SampleBean sampleBean = (SampleBean) httpRequest.getSession().getAttribute(
                "theSample");
        if (synthesisBean == null || sampleBean == null) {
            // Call shared function to prepare CompositionBean for viewing.
            this.prepareSummary( form, httpRequest);
            synthesisBean = (SynthesisBean) httpRequest.getSession().getAttribute(
                    "synthesisBean");
            sampleBean = (SampleBean) httpRequest.getSession().getAttribute(
                    "theSample");
        }

        // Export only the selected type.
        this.filterType(httpRequest, synthesisBean);

        // Get sample name for constructing file name.
        //	String type = request.getParameter("type");

        //per app scan
        if (!StringUtils.xssValidate(type)) {
            type="";
        }
        String fileName = ExportUtils.getExportFileName(sampleBean.getDomain()
                .getName(), "SynthesisSummaryView", type);
        ExportUtils.prepareReponseForExcel(httpResponse, fileName);

        StringBuilder sb = getDownloadUrl(httpRequest);
        SynthesisExporter.exportSummary(synthesisBean, sb.toString(), httpResponse
                .getOutputStream());

        return new String("Export successful");
    }

    public SynthesisBean summaryPrint(SynthesisForm form, HttpServletRequest httpRequest) throws Exception {
        SynthesisBean synthesisBean = (SynthesisBean) httpRequest.getSession();
        SampleBean sampleBean = (SampleBean) httpRequest.getSession().getAttribute(
                "theSample");
        if (synthesisBean == null || sampleBean == null)
        {
            this.prepareSummary(form, httpRequest);
            synthesisBean = (SynthesisBean) httpRequest.getSession().getAttribute(
                    "synthesisBean");
            sampleBean = (SampleBean) httpRequest.getSession().getAttribute(
                    "theSample");
        }
        httpRequest.setAttribute("printView", Boolean.TRUE);
        this.filterType(httpRequest,synthesisBean);
        return synthesisBean;
    }

    private void filterType(HttpServletRequest request, SynthesisBean synthesisBean) {
        // 1. Restore all data first.
        HttpSession session = request.getSession();
        List<SynthesisMaterialBean> synBeans = (List<SynthesisMaterialBean>) session
                .getAttribute(SynthesisBean.MATERIALS_SELECTION);
        synthesisBean.setSynthesisMaterialBeanList(synBeans);
        List<SynthesisFunctionalizationBean> funcBeans = (List<SynthesisFunctionalizationBean>) session
                .getAttribute(SynthesisBean.FUNCTIONALIZATION_SELECTION);
        synthesisBean.setSynthesisFunctionalizationBeanList(funcBeans);
        List<SynthesisPurificationBean> purBeans = (List<SynthesisPurificationBean>) session
                .getAttribute(SynthesisBean.PURIFICATION_SELECTION);
        synthesisBean.setSynthesisPurificationBeanList(purBeans);

        // 2. Filter out unselected type.
        String type = request.getParameter("type");
        if (!StringUtils.isEmpty(type)) {
            if( !type.equals("all") ) {
                if (!type.equals(SynthesisBean.MATERIALS_SELECTION)) {
                    synthesisBean.setSynthesisMaterialBeanList(Collections.EMPTY_LIST);
                }
                if (!type.equals(SynthesisBean.FUNCTIONALIZATION_SELECTION)) {
                    synthesisBean.setSynthesisFunctionalizationBeanList(Collections.EMPTY_LIST);
                }
                if (!type.equals(SynthesisBean.PURIFICATION_SELECTION)) {
                     synthesisBean.setSynthesisPurificationBeanList(Collections.EMPTY_LIST);
                }
            }
        }
    }


    public SynthesisBean summaryView(SynthesisForm form,
                                       HttpServletRequest request)
            throws Exception {
        // Call shared function to prepare CompositionBean for viewing.
        this.prepareSummary(form, request);

        SynthesisBean synthesisBean = (SynthesisBean) request.getSession()
                .getAttribute("synthesisBean");
        setSummaryTab(request, synthesisBean.getSynthesisSections().size());
        //return mapping.findForward("summaryView");
        return synthesisBean;
    }

    private SynthesisBean prepareSummary(SynthesisForm form,
                                           HttpServletRequest request)
            throws Exception {
        // Remove previous result from session.
        HttpSession session = request.getSession();
        session.removeAttribute(SynthesisBean.MATERIALS_SELECTION);
        session.removeAttribute(SynthesisBean.FUNCTIONALIZATION_SELECTION);
        session.removeAttribute(SynthesisBean.PURIFICATION_SELECTION);
        session.removeAttribute("theSample");

        //	DynaValidatorForm theForm = (DynaValidatorForm) form;
        if(form==null) {
            throw new Exception("SynthesisForm is null");
        }
        String sampleId = form.getSampleId();  //Sting(SampleConstants.SAMPLE_ID);

        SampleBean sampleBean = setupSampleById(sampleId, request);

        SynthesisBean synthesisBean = synthesisService.findSynthesisBySampleId(new Long(sampleId));
        form.setSynthesisBean(synthesisBean);

        // Save result bean in session for later use - export/print.
        session.setAttribute("synthesisBean", synthesisBean);
        session.setAttribute("theSample", sampleBean); // for showing title.
        if (synthesisBean != null) {
            session.setAttribute(SynthesisBean.MATERIALS_SELECTION, synthesisBean.getSynthesisMaterialBeanList());
            session.setAttribute(SynthesisBean.FUNCTIONALIZATION_SELECTION,
                    synthesisBean.getSynthesisFunctionalizationBeanList());
            session.setAttribute(SynthesisBean.PURIFICATION_SELECTION,
                    synthesisBean.getSynthesisFunctionalizationBeanList());
        }

        // retain action messages from send redirects
        //	ActionMessages msgs = (ActionMessages) session
        //			.getAttribute(ActionMessages.GLOBAL_MESSAGE);
        //	saveMessages(request, msgs);
        //	session.removeAttribute(ActionMessages.GLOBAL_MESSAGE);
        return synthesisBean;
    }

}
