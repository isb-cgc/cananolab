package gov.nih.nci.cananolab.restful.synthesis;

import gov.nih.nci.cananolab.dto.particle.SampleBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialElementBean;
import gov.nih.nci.cananolab.restful.core.BaseAnnotationBO;
import gov.nih.nci.cananolab.restful.sample.InitSampleSetup;
import gov.nih.nci.cananolab.restful.sample.InitSynthesisSetup;
import gov.nih.nci.cananolab.restful.util.SynthesisUtil;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisMaterialBean;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;
import gov.nih.nci.cananolab.service.curation.CurationService;
import gov.nih.nci.cananolab.service.sample.SampleService;
import gov.nih.nci.cananolab.service.sample.SynthesisService;
import gov.nih.nci.cananolab.ui.form.SynthesisForm;
import gov.nih.nci.cananolab.util.StringUtils;
import java.util.ArrayList;
import java.util.IllegalFormatConversionException;
import java.util.List;
import java.util.Map;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly=false, propagation= Propagation.REQUIRED)
@Component("synthesisMaterialBO")
public class SynthesisMaterialBO extends BaseAnnotationBO {
    Logger logger = Logger.getLogger(SynthesisMaterialBO.class);

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
        SynthesisMaterialBean entityBean = transferSynthesisMaterialBean(synMatBean, request);
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

    public SimpleSynthesisMaterialBean removeFile(SimpleSynthesisMaterialBean simpleSynthesisMaterialBean, HttpServletRequest httpRequest) {
        //TODO write
        return null;
    }

    public SimpleSynthesisMaterialBean removeMaterialElement(SimpleSynthesisMaterialBean simpleSynthesisMaterialBean, String materialElementId, HttpServletRequest httpRequest)throws Exception {
        List<String> msgs = new ArrayList<String>();
        SynthesisMaterialBean entity = transferSynthesisMaterialBean(simpleSynthesisMaterialBean, httpRequest);
        SynthesisMaterialElementBean materialElementBean = entity.getSynthesisMaterialElementById(materialElementId);
        entity.removeMaterialElement(materialElementBean);
        msgs = validateInputs(httpRequest, entity);
        //If an error, return blank class
        if(msgs.size()>0){
            SimpleSynthesisMaterialBean nullBean = new SimpleSynthesisMaterialBean();
            nullBean.setErrors(msgs);
            return nullBean;
        }
        this.saveEntity(httpRequest, simpleSynthesisMaterialBean.getSampleId(), entity);
        this.checkOpenForms(entity, httpRequest);
        return setupUpdate(simpleSynthesisMaterialBean.getSampleId(), entity.getDomainEntity().getId().toString(), httpRequest);
    }

    public SimpleSynthesisMaterialBean saveFile(SimpleSynthesisMaterialBean simpleSynthesisMaterialBean, HttpServletRequest httpRequest) {
        //TODO write
        return null;
    }

    private SynthesisMaterialBean transferSynthesisMaterialBean(SimpleSynthesisMaterialBean synMatBean,
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
        InitSynthesisSetup.getInstance().setSynthesisMaterialDropdowns(request);
//        InitSetup.getInstance().getDefaultTypesByLookup(appContext,
//                "wallTypes", "carbon nanotube", "wallType");
    }

    private void checkOpenForms(SynthesisMaterialBean synthesisMaterialBean, HttpServletRequest request) throws Exception {
        String dispatch = request.getParameter("dispatch");
        String browserDispatch = getBrowserDispatch(request);
        HttpSession session = request.getSession();


        InitSynthesisSetup.getInstance().persistSynthesisMaterialDropdowns(
                request, synthesisMaterialBean);

        // Synthesis Material Type
//        String entityType = synthesisMaterialBean.getDomainEntity().getType();
//        setOtherValueOption(request, entityType, "synthesisMaterialTypes");

       //TODO Check SynthesisMaterialElement?


        String detailPage = null;


            detailPage = InitSynthesisSetup.getInstance().getDetailPage(
                     "synthesisMaterial");

        request.setAttribute("synthesisDetailPage", detailPage);

    }

    public SimpleSynthesisMaterialBean setupUpdate(String sampleId, String dataId, HttpServletRequest httpRequest) throws Exception {
        SynthesisForm form = new SynthesisForm();
        // set up other particles with the same primary point of contact
//        InitSampleSetup.getInstance().getOtherSampleNames(httpRequest, sampleId, sampleService);

        try {
            SynthesisMaterialBean synBean = synthesisService.findSynthesisMaterialById(new Long(sampleId), new Long(dataId));

            form.setSynthesisMaterialBean(synBean);
            this.checkOpenForms(synBean, httpRequest);
            httpRequest.getSession().setAttribute("sampleId", sampleId);
            SimpleSynthesisMaterialBean simpleSynthesisMaterialBean = new SimpleSynthesisMaterialBean();
            simpleSynthesisMaterialBean.transferSynthesisMaterialBeanToSimple(synBean, httpRequest, springSecurityAclService);
            return simpleSynthesisMaterialBean;
        } catch (IllegalFormatConversionException e){
            logger.error("Either sample id or data id is not an appropriate identifier",e);
            throw e;
        }
    }

    public SimpleSynthesisMaterialBean saveMaterialElement(SimpleSynthesisMaterialBean simpleSynthesisMaterialBean, HttpServletRequest httpServletRequest)throws Exception{
        SynthesisMaterialBean entity = null;
        String sampleId = simpleSynthesisMaterialBean.getSampleId();
        try{
            entity = transferSynthesisMaterialBean(simpleSynthesisMaterialBean, httpServletRequest);
            List<String> msgs = new ArrayList<String>();
            List<SynthesisMaterialElementBean> synthesisMaterialElementBeans = entity.getSynthesisMaterialElements();
            for(SynthesisMaterialElementBean synthesisMaterialElementBean: synthesisMaterialElementBeans){
                synthesisMaterialElementBean.setUpDomain(SpringSecurityUtil.getLoggedInUserName());
            }
            msgs = validateInputs(httpServletRequest, entity);
            if(msgs.size()>0){
                SimpleSynthesisMaterialBean simpleSynthesisMaterialBean_error = new SimpleSynthesisMaterialBean();
                simpleSynthesisMaterialBean_error.setErrors(msgs);
                return simpleSynthesisMaterialBean_error;
            }
            msgs = this.saveEntity(httpServletRequest,sampleId,entity);
            httpServletRequest.setAttribute("dataId", entity.getDomainEntity().getId().toString());


        } catch (Exception e){
            logger.error("Error while saving Synthesis Material Element ",e);
        }
        return setupUpdate(sampleId, entity.getDomainEntity().getId().toString(), httpServletRequest);
    }


}
