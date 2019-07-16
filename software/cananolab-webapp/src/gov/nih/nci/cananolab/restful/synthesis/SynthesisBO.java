package gov.nih.nci.cananolab.restful.synthesis;

import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFuncPurificationBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationBean;
import gov.nih.nci.cananolab.restful.core.BaseAnnotationBO;
import gov.nih.nci.cananolab.restful.core.InitSetup;
import gov.nih.nci.cananolab.restful.sample.InitCompositionSetup;
import gov.nih.nci.cananolab.restful.sample.InitSampleSetup;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.service.curation.CurationService;
import gov.nih.nci.cananolab.service.sample.CompositionService;
import gov.nih.nci.cananolab.service.sample.SampleService;
import gov.nih.nci.cananolab.util.StringUtils;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;

import static gov.nih.nci.cananolab.restful.util.CompositionUtil.reformatLocalSerachDropdownsInSessionForSynthesis;

public class SynthesisBO extends BaseAnnotationBO {

    @Autowired
    private CompositionService compositionService;

    @Autowired
    private CurationService curationServiceDAO;

    @Autowired
    private SampleService sampleService;

    @Autowired
    private SpringSecurityAclService springSecurityAclService;

    @Autowired
    private UserDetailsService userDetailsService;

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


    public Map<String, Object> setupNew(String sampleId, HttpServletRequest request) throws Exception{
        SynthesisBean synthesisBean = new SynthesisBean();
        InitSampleSetup.getInstance().getOtherSampleNames(request, sampleId, sampleService);
        this.setLookups(request);
        this.checkOpenForms(synthesisBean, request);
        return reformatLocalSerachDropdownsInSessionForSynthesis(request.getSession());
    }

    public void setLookups(HttpServletRequest request) throws Exception{
        ServletContext appContext = request.getSession().getServletContext();
        InitCompositionSetup.getInstance().setNanomaterialEntityDropdowns( request);
        InitSetup.getInstance().getDefaultTypesByLookup(appContext,
                "wallTypes", "carbon nanotube", "wallType");
    }


    private void checkOpenForms(SynthesisBean synthesisBean, HttpServletRequest request) throws Exception
    {
        String dispatch = request.getParameter("dispatch");
        String browserDispatch = getBrowserDispatch(request);
        HttpSession session = request.getSession();


        InitCompositionSetup.getInstance().persistSynthesisDropdowns(
                request, synthesisBean);

        // Synthesis Type
        String entityType = synthesisBean.getType();
        setOtherValueOption(request, entityType, "synthesisTypes");
        // function type
        List<String> purificationTypes=new ArrayList<String>();
        for(SynthesisFunctionalizationBean sfBean :synthesisBean.getPurificationTypes()){
            for(SynthesisFuncPurificationBean sfPurityBean: sfBean.getMethods()){
                    setOtherValueOption(request, sfPurityBean.getType(), "purificationTypes");
            }
        }


        String detailPage = null;
//        if (synthesisBean.isWithProperties()) {
            if (!StringUtils.isEmpty(synthesisBean.getType())) {
                detailPage = InitCompositionSetup.getInstance().getDetailPage(
                        synthesisBean.getType(), "synthesis");
            }
            request.setAttribute("synthesisDetailPage", detailPage);
//        }
    }
}
