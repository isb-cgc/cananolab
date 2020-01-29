package gov.nih.nci.cananolab.restful.synthesis;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.common.Keyword;
import gov.nih.nci.cananolab.domain.common.Protocol;
import gov.nih.nci.cananolab.domain.particle.SmeInherentFunction;
import gov.nih.nci.cananolab.domain.particle.Synthesis;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterial;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterialElement;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.common.ProtocolBean;
import gov.nih.nci.cananolab.dto.particle.SampleBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SmeInherentFunctionBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialElementBean;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.exception.ProtocolException;
import gov.nih.nci.cananolab.exception.SynthesisException;
import gov.nih.nci.cananolab.restful.core.BaseAnnotationBO;
import gov.nih.nci.cananolab.restful.sample.InitSampleSetup;
import gov.nih.nci.cananolab.restful.sample.InitSynthesisSetup;
import gov.nih.nci.cananolab.restful.util.SynthesisUtil;
import gov.nih.nci.cananolab.restful.view.edit.SimpleFileBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleProtocol;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisMaterialBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisMaterialElementBean;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;
import gov.nih.nci.cananolab.service.curation.CurationService;
import gov.nih.nci.cananolab.service.protocol.ProtocolService;
import gov.nih.nci.cananolab.service.sample.SampleService;
import gov.nih.nci.cananolab.service.sample.SynthesisService;
import gov.nih.nci.cananolab.ui.form.SynthesisForm;
import gov.nih.nci.cananolab.util.StringUtils;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.IllegalFormatConversionException;
import java.util.List;
import java.util.Map;
import java.util.Set;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = false, propagation = Propagation.REQUIRED)
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

    @Autowired
    private ProtocolService protocolService;

    public SynthesisMaterialBO() {
    }

    public List<String> create(SimpleSynthesisMaterialBean synMatBean,
                               HttpServletRequest request)
            throws Exception {
        List<String> msgs;
        String sampleId = synMatBean.getSampleId();
        SynthesisMaterialBean entityBean = transferSynthesisMaterialBean(synMatBean, request);
        SampleBean sampleBean = setupSampleById(sampleId, request);
//        List<String> otherSampleNames = synMatBean.getOtherSampleNames();
        msgs = validateInputs(request, entityBean);
        if (msgs.size() > 0) {
            return msgs;
        }
        this.saveEntity(request, sampleId, entityBean);
        InitSynthesisSetup.getInstance().persistSynthesisMaterialDropdowns(
                request, entityBean);
//        SampleBean[] otherSampleBeans = null;
//        if (otherSampleNames != null) {
//            otherSampleBeans = prepareCopy(request, otherSampleNames, sampleBean);
//        }
//        if (otherSampleBeans != null) {
//            synthesisService.copyAndSaveSynthesisMaterial(entityBean, sampleBean, otherSampleBeans);
//        }

        msgs.add("success");
        request.getSession().setAttribute("tab", "1");
        return msgs;
    }

    private SynthesisMaterialBean transferSynthesisMaterialBean(SimpleSynthesisMaterialBean synMatBean,
                                                                HttpServletRequest request){
        //Transfer from the simple front-end bean to a full bean
        //TODO write
        SynthesisMaterialBean bean = new SynthesisMaterialBean();
        SynthesisMaterial material = null;


        //set up domain and bean
        material.setId(synMatBean.getId());
        material.setCreatedBy(synMatBean.getCreatedBy());
        material.setCreatedDate(synMatBean.getDate());
        material.setDescription(synMatBean.getDescription());
        bean.setDescription(synMatBean.getDescription());
        bean.setType(synMatBean.getType());

        //Add parent object to domain
        Synthesis synthesis = null;
        try{
            synthesis = synthesisService.getHelper().findSynthesisBySampleId(synMatBean.getSampleId());
            material.setSynthesis(synthesis);
        }
        catch (SynthesisException e) {
            e.printStackTrace();
            logger.error(e);
        }
        catch (Exception e) {
            e.printStackTrace();
            logger.error(e);
        }

        //Set files for domain and bean
        FileBean fileBean;
        File file;
        List<FileBean> fileBeanList = new ArrayList<FileBean>();
        Set<File> fileList = new HashSet<File>();
        for(SimpleFileBean sFileBean: synMatBean.getFileElements()){
            file = new File();
            fileBean = new FileBean();
            file.setCreatedBy(sFileBean.getCreatedBy());
            fileBean.setCreatedBy(sFileBean.getCreatedBy());
            file.setCreatedDate(sFileBean.getCreatedDate());
            file.setTitle(sFileBean.getTitle());
            file.setDescription(sFileBean.getDescription());
 //TODO figure out what name is supposed to do.  Eliminate if "nothing"  file.setName(sFileBean.get);
            file.setType(sFileBean.getType());
            file.setUri(sFileBean.getUri());
            file.setUriExternal(sFileBean.getUriExternal());
            fileBean.setExternalUrl(sFileBean.getExternalUrl());
            if(!StringUtils.isEmpty(sFileBean.getKeywordsStr())){
                String[] strs = sFileBean.getKeywordsStr().split("\r\n");
                for (String str : strs) {
                    // change to upper case
                    Keyword keyword = new Keyword();
                    keyword.setName(str.toUpperCase());
                    file.getKeywordCollection().add(keyword);
                }
            }
            fileBean.setTheAccess(sFileBean.getTheAccess());
            fileBean.setDomainFile(file);
            fileBeanList.add(fileBean);
            fileList.add(file);
        }
        bean.setFiles(fileBeanList);
        material.setFiles(fileList);


        //Set protocol for domain and bean
        try {
            SimpleProtocol sProtocol = synMatBean.getSimpleProtocol();
            ProtocolBean protocolBean = protocolService.findProtocolById(sProtocol.getDomainId().toString());
            Protocol protocol = protocolBean.getDomain();
            bean.setProtocolBean(protocolBean);
            material.setProtocol(protocol);
        }
        catch (ProtocolException e) {
            e.printStackTrace();
            logger.error(e);
        }
        catch (NoAccessException e) {
            e.printStackTrace();
            logger.error(e);
        }


        //Add synthesisMaterialElements to bean and domain
        Set<SynthesisMaterialElement> smes = new HashSet<SynthesisMaterialElement>();
        SynthesisMaterialElementBean smeBean = new SynthesisMaterialElementBean();
        SynthesisMaterialElement sme = new SynthesisMaterialElement();
        SmeInherentFunctionBean smeIfBean = new SmeInherentFunctionBean();
        Set<SmeInherentFunction> smeInherentFunctions = new HashSet<SmeInherentFunction>();

        List<SimpleSynthesisMaterialElementBean> sSMEbeans = synMatBean.getMaterialElements();
        if(sSMEbeans !=null){
            //Loop through simple beans, creating new material elements from each
            for(SimpleSynthesisMaterialElementBean sSMEBean: sSMEbeans){


                //Loop through functions
            }
        }

        return bean;
    }

    private List<String> validateInputs(HttpServletRequest request, SynthesisMaterialBean entityBean) {
        //todo write
        return null;
    }

    private List<String> saveEntity(HttpServletRequest request, String sampleId, SynthesisMaterialBean entityBean) throws Exception {
        //todo write
        return null;
    }

    public List<String> delete(SimpleSynthesisMaterialBean synthesisMaterialBean, HttpServletRequest request) throws Exception {

        List<String> msgs = new ArrayList<String>();
        SynthesisMaterialBean entityBean = transferSynthesisMaterialBean(synthesisMaterialBean, request);
        entityBean.setUpDomainEntity(SpringSecurityUtil.getLoggedInUserName());
        synthesisService.deleteSynthesisMaterial(entityBean.getDomainEntity());

        msgs.add("success");
        return msgs;
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

    public SimpleSynthesisMaterialBean removeFile(SimpleSynthesisMaterialBean simpleSynthesisMaterialBean,
                                                  String fileId, HttpServletRequest request) throws Exception {
        SynthesisMaterialBean entityBean = transferSynthesisMaterialBean(simpleSynthesisMaterialBean, request);
//        FileBean theFile = entityBean.getTheFile();
//        entityBean.removeFile(theFile);
//        entityBean.setTheFile(new FileBean());
        FileBean theFile = entityBean.getFile(fileId);
        entityBean.removeFile(theFile);

        List<String> msgs = validateInputs(request, entityBean);
        if (msgs.size() > 0) {
            SimpleSynthesisMaterialBean synMat = new SimpleSynthesisMaterialBean();
            synMat.setErrors(msgs);
            return synMat;
        }
        this.saveEntity(request, simpleSynthesisMaterialBean.getSampleId(), entityBean);
        request.setAttribute("anchor", "file");
        this.checkOpenForms(entityBean, request);
        return setupUpdate(simpleSynthesisMaterialBean.getSampleId(), entityBean.getDomainEntity().getId().toString()
                , request);
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
            SynthesisMaterialBean synBean = synthesisService.findSynthesisMaterialById(new Long(sampleId),
                    new Long(dataId));

            form.setSynthesisMaterialBean(synBean);
            this.checkOpenForms(synBean, httpRequest);
            httpRequest.getSession().setAttribute("sampleId", sampleId);
            SimpleSynthesisMaterialBean simpleSynthesisMaterialBean = new SimpleSynthesisMaterialBean();
            simpleSynthesisMaterialBean.transferSynthesisMaterialBeanToSimple(synBean, httpRequest,
                    springSecurityAclService);
            return simpleSynthesisMaterialBean;
        }
        catch (IllegalFormatConversionException e) {
            logger.error("Either sample id or data id is not an appropriate identifier", e);
            throw e;
        }
    }

    public SimpleSynthesisMaterialBean removeMaterialElement(SimpleSynthesisMaterialBean simpleSynthesisMaterialBean,
                                                             String materialElementId,
                                                             HttpServletRequest httpRequest) throws Exception {
        List<String> msgs = new ArrayList<String>();
        SynthesisMaterialBean entity = transferSynthesisMaterialBean(simpleSynthesisMaterialBean, httpRequest);
        SynthesisMaterialElementBean materialElementBean = entity.getSynthesisMaterialElementById(materialElementId);
        entity.removeMaterialElement(materialElementBean);
        msgs = validateInputs(httpRequest, entity);
        //If an error, return blank class
        if (msgs.size() > 0) {
            SimpleSynthesisMaterialBean nullBean = new SimpleSynthesisMaterialBean();
            nullBean.setErrors(msgs);
            return nullBean;
        }
        this.saveEntity(httpRequest, simpleSynthesisMaterialBean.getSampleId(), entity);
        this.checkOpenForms(entity, httpRequest);
        return setupUpdate(simpleSynthesisMaterialBean.getSampleId(), entity.getDomainEntity().getId().toString(),
                httpRequest);
    }

    public SimpleSynthesisMaterialBean saveFile(SimpleSynthesisMaterialBean simpleSynthesisMaterialBean,
                                                HttpServletRequest httpRequest) {
        //TODO write
        return null;
    }

    public SimpleSynthesisMaterialBean saveMaterialElement(SimpleSynthesisMaterialBean simpleSynthesisMaterialBean,
                                                           HttpServletRequest httpServletRequest) throws Exception {
        SynthesisMaterialBean entity = null;
        String sampleId = simpleSynthesisMaterialBean.getSampleId();
        try {
            entity = transferSynthesisMaterialBean(simpleSynthesisMaterialBean, httpServletRequest);
            List<String> msgs = new ArrayList<String>();
            List<SynthesisMaterialElementBean> synthesisMaterialElementBeans = entity.getSynthesisMaterialElements();
            for (SynthesisMaterialElementBean synthesisMaterialElementBean : synthesisMaterialElementBeans) {
                synthesisMaterialElementBean.setUpDomain(SpringSecurityUtil.getLoggedInUserName());
            }
            msgs = validateInputs(httpServletRequest, entity);
            if (msgs.size() > 0) {
                SimpleSynthesisMaterialBean simpleSynthesisMaterialBean_error = new SimpleSynthesisMaterialBean();
                simpleSynthesisMaterialBean_error.setErrors(msgs);
                return simpleSynthesisMaterialBean_error;
            }
            msgs = this.saveEntity(httpServletRequest, sampleId, entity);
            httpServletRequest.setAttribute("dataId", entity.getDomainEntity().getId().toString());


        }
        catch (Exception e) {
            logger.error("Error while saving Synthesis Material Element ", e);
        }
        return setupUpdate(sampleId, entity.getDomainEntity().getId().toString(), httpServletRequest);
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

    public SynthesisMaterialBean setupSynMaterialForAdvSearch(String sampleId, Long id,
                                                              HttpServletRequest httpRequest) {
        //TODO write
        return null;
    }


}
