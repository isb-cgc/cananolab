package gov.nih.nci.cananolab.restful.synthesis;

import gov.nih.nci.cananolab.dto.particle.SampleBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisBean;
import gov.nih.nci.cananolab.restful.core.BaseAnnotationBO;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.service.curation.CurationService;
import gov.nih.nci.cananolab.service.sample.SampleService;
import gov.nih.nci.cananolab.service.sample.SynthesisService;
import gov.nih.nci.cananolab.ui.form.SynthesisForm;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;

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

    public static String summaryExport(SynthesisForm form, String type, HttpServletRequest httpRequest, HttpServletResponse httpResponse) {
        //TODO write
        return null;
    }

    public SynthesisBean summaryPrint(SynthesisForm form, HttpServletRequest httpRequest) {
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

        SynthesisBean synthesisBean = synthesisService.findSynthesisBySampleId(sampleId);
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
