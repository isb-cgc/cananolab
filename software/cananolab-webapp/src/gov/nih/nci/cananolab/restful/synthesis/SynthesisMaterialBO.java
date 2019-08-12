package gov.nih.nci.cananolab.restful.synthesis;

import gov.nih.nci.cananolab.dto.particle.SampleBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialBean;
import gov.nih.nci.cananolab.restful.core.BaseAnnotationBO;
import gov.nih.nci.cananolab.restful.sample.InitCompositionSetup;
import gov.nih.nci.cananolab.restful.sample.InitSampleSetup;
import gov.nih.nci.cananolab.restful.sample.InitSynthesisSetup;
import gov.nih.nci.cananolab.restful.util.SynthesisUtil;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisMaterialBean;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.service.curation.CurationService;
import gov.nih.nci.cananolab.service.sample.SampleService;
import gov.nih.nci.cananolab.service.sample.SynthesisService;
import gov.nih.nci.cananolab.ui.form.SynthesisForm;
import gov.nih.nci.cananolab.util.StringUtils;
import java.util.List;
import java.util.Map;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly=false, propagation= Propagation.REQUIRED)
@Component("synthesisMaterialEntityBO")
public class SynthesisMaterialBO extends BaseAnnotationBO {

    @Autowired
    private CurationService curationServiceDAO;

    @Autowired
    private SampleService sampleService;

    @Autowired
    private SpringSecurityAclService springSecurityAclService;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private SynthesisService synthesisService;

    public SynthesisMaterialBO() {
    }

    public List<String> create(SimpleSynthesisMaterialBean synMatBean,
                               HttpServletRequest request)
            throws Exception {
        List<String> msgs;
        String sampleId = synMatBean.getSampleId();
        SynthesisMaterialBean entityBean = transferSynthesisMateriaBean(synMatBean, request);
        SampleBean sampleBean = setupSampleById(sampleId, request);
        List<String> otherSampleNames = synMatBean.getOtherSampleNames();
        msgs = validateInputs(request, entityBean);
        if (msgs.size() > 0) {
            return msgs;
        }
        this.saveEntity(request, sampleId, entityBean);
        InitSynthesisSetup.getInstance().persistSynthesisMaterialDropdowns(
                request, entityBean);
        SampleBean[] otherSampleBeans = null;
        if (otherSampleNames != null) {
            otherSampleBeans = prepareCopy(request, otherSampleNames, sampleBean);
        }
        if (otherSampleBeans != null) {
            synthesisService.copyAndSaveSynthesisMaterial(entityBean, sampleBean, otherSampleBeans);
        }

        msgs.add("success");
        request.getSession().setAttribute("tab", "1");
        return msgs;
    }

    public List<String> delete(SynthesisMaterialBean synthesisMaterialBean, HttpServletRequest request){
        //todo write
        return null;
    }

    private SynthesisMaterialBean transferSynthesisMateriaBean(SimpleSynthesisMaterialBean synMatBean,
                                                               HttpServletRequest request) {
        //Transfer from the simple front-end bean to a full bean
        //TODO write
        return null;
    }

    private List<String> validateInputs(HttpServletRequest request, SynthesisMaterialBean entityBean) {
        //todo write
        return null;
    }

    private List<String> saveEntity(HttpServletRequest request, String sampleId, SynthesisMaterialBean entityBean) throws Exception {
        //todo write
        return null;
    }

    @Override
    public CurationService getCurationServiceDAO() {
        return this.curationServiceDAO;
    }

    @Override
    public SampleService getSampleService() {
        return this.sampleService;
    }

    @Override
    public SpringSecurityAclService getSpringSecurityAclService() {
        return this.springSecurityAclService;
    }

    @Override
    public UserDetailsService getUserDetailsService() {
        return this.userDetailsService;
    }

    public Map<String, Object> setupNew(String sampleId, HttpServletRequest request) throws Exception {
        SynthesisMaterialBean synthesisMaterialBean = new SynthesisMaterialBean();
        InitSampleSetup.getInstance().getOtherSampleNames(request, sampleId, sampleService);
        this.setLookups(request);
        this.checkOpenForms(synthesisMaterialBean, request);
        return SynthesisUtil.reformatLocalSearchDropdownsInSessionForSynthesisMaterial(request.getSession());
    }

    public void setLookups(HttpServletRequest request) throws Exception {
        ServletContext appContext = request.getSession().getServletContext();
        InitCompositionSetup.getInstance().setNanomaterialEntityDropdowns(request);
//        InitSetup.getInstance().getDefaultTypesByLookup(appContext,
//                "wallTypes", "carbon nanotube", "wallType");
    }

    private void checkOpenForms(SynthesisMaterialBean synthesisMaterialBean, HttpServletRequest request) throws Exception {
        String dispatch = request.getParameter("dispatch");
        String browserDispatch = getBrowserDispatch(request);
        HttpSession session = request.getSession();


        InitSynthesisSetup.getInstance().persistSynthesisMaterialDropdowns(
                request, synthesisMaterialBean);

        // Synthesis Type
        String entityType = synthesisMaterialBean.getType();
        setOtherValueOption(request, entityType, "synthesisMaterialTypes");
        // function type
        List<String> purificationTypes = SynthesisMaterialBean.getSynthesisMaterialElementPurificationTypes();


        String detailPage = null;
//        if (synthesisBean.isWithProperties()) {
        if (!StringUtils.isEmpty(synthesisMaterialBean.getType())) {
            detailPage = InitCompositionSetup.getInstance().getDetailPage(
                    synthesisMaterialBean.getType(), "synthesisMaterial");
        }
        request.setAttribute("synthesisDetailPage", detailPage);
//        }
    }

    public SimpleSynthesisMaterialBean setupUpdate(String sampleId, String dataId, HttpServletRequest httpRequest) throws Exception {
        SynthesisForm form = new SynthesisForm();
        // set up other particles with the same primary point of contact
//        InitSampleSetup.getInstance().getOtherSampleNames(httpRequest, sampleId, sampleService);

        SynthesisMaterialBean synBean = synthesisService.findSynthesisMaterialById(sampleId, dataId);
        form.setSynthesisMaterialBean(synBean);
        this.checkOpenForms(synBean, httpRequest);
        httpRequest.getSession().setAttribute("sampleId", sampleId);
        SimpleSynthesisMaterialBean simpleSynthesisMaterialBean = new SimpleSynthesisMaterialBean();
        simpleSynthesisMaterialBean.transferSynthesisMaterialBeanToSimple(synBean, httpRequest, springSecurityAclService);
        return simpleSynthesisMaterialBean;
    }
}
