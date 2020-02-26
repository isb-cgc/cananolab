package gov.nih.nci.cananolab.restful.synthesis;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.common.Keyword;
import gov.nih.nci.cananolab.domain.common.Protocol;
import gov.nih.nci.cananolab.domain.common.Supplier;
import gov.nih.nci.cananolab.domain.particle.SmeInherentFunction;
import gov.nih.nci.cananolab.domain.particle.Synthesis;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterial;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterialElement;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.common.ProtocolBean;
import gov.nih.nci.cananolab.dto.particle.SampleBean;
import gov.nih.nci.cananolab.dto.particle.composition.NanomaterialEntityBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SmeInherentFunctionBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialElementBean;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.exception.ProtocolException;
import gov.nih.nci.cananolab.exception.SynthesisException;
import gov.nih.nci.cananolab.restful.core.BaseAnnotationBO;
import gov.nih.nci.cananolab.restful.sample.InitSampleSetup;
import gov.nih.nci.cananolab.restful.sample.InitSynthesisSetup;
import gov.nih.nci.cananolab.restful.util.PropertyUtil;
import gov.nih.nci.cananolab.restful.util.SynthesisUtil;
import gov.nih.nci.cananolab.restful.view.edit.SimpleFileBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleNanomaterialEntityBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleProtocol;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisMaterialBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisMaterialElementBean;
import gov.nih.nci.cananolab.security.CananoUserDetails;
import gov.nih.nci.cananolab.security.enums.SecureClassesEnum;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;
import gov.nih.nci.cananolab.service.curation.CurationService;
import gov.nih.nci.cananolab.service.protocol.ProtocolService;
import gov.nih.nci.cananolab.service.sample.SampleService;
import gov.nih.nci.cananolab.service.sample.SynthesisService;
import gov.nih.nci.cananolab.ui.form.SynthesisForm;
import gov.nih.nci.cananolab.util.Constants;
import gov.nih.nci.cananolab.util.DateUtils;
import gov.nih.nci.cananolab.util.StringUtils;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.IllegalFormatConversionException;
import java.util.List;
import java.util.Map;
import java.util.Set;
import javax.enterprise.inject.New;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import sun.text.resources.ro.JavaTimeSupplementary_ro;

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
        SynthesisMaterial material = new SynthesisMaterial();


        //set up domain and bean
//        material.setId(synMatBean.getId());

        if((synMatBean.getId()!=null)&&(synMatBean.getId()>0)){
            material.setId(synMatBean.getId());
            material.setCreatedBy(synMatBean.getCreatedBy());
            material.setCreatedDate(synMatBean.getDate());
        }  else {
            //TODO see if there is a way to grab user directly
            material.setCreatedBy(synMatBean.getCreatedBy());
            material.setCreatedDate(synMatBean.getDate());
        }

        material.setDescription(synMatBean.getDescription());
        bean.setDescription(synMatBean.getDescription());
        if(synMatBean.getType()!=null) {
            bean.setType(synMatBean.getType());
        } else
        {
            bean.setType("Synthesis");
        }

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
        if(synMatBean.getFileElements()!=null) {
            for (SimpleFileBean sFileBean : synMatBean.getFileElements()) {
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
                if (!StringUtils.isEmpty(sFileBean.getKeywordsStr())) {
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

                //TODO check if this can replace all of the above
                FileBean testFileBean = new FileBean(sFileBean);
                File testFile = testFileBean.getDomainFile();
            }
            bean.setFiles(fileBeanList);
            material.setFiles(fileList);
        }

        //Set protocol for domain and bean
        try {
            SimpleProtocol sProtocol = synMatBean.getSimpleProtocol();
            if (sProtocol != null) {
                ProtocolBean protocolBean = protocolService.findProtocolById(sProtocol.getDomainId().toString());
                Protocol protocol = protocolBean.getDomain();
                bean.setProtocolBean(protocolBean);
                material.setProtocol(protocol);
            }
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
        List<SynthesisMaterialElementBean> smeBeans = new ArrayList<SynthesisMaterialElementBean>();
        List<SimpleSynthesisMaterialElementBean> sSMEbeans = synMatBean.getMaterialElements();

        if(sSMEbeans !=null){
            //Loop through simple beans, creating new material elements from each
            for(SimpleSynthesisMaterialElementBean sSMEBean: sSMEbeans){
                SynthesisMaterialElement synthesisMaterialElement = new SynthesisMaterialElement();

                synthesisMaterialElement.setDescription(sSMEBean.getDescription());
                synthesisMaterialElement.setChemicalName(sSMEBean.getChemicalName());
                synthesisMaterialElement.setMolecularFormula(sSMEBean.getMolecularFormula());
                synthesisMaterialElement.setMolecularFormulaType(sSMEBean.getMolecularFormulaType());
                synthesisMaterialElement.setPubChemId(sSMEBean.getPubChemId());
                synthesisMaterialElement.setPubChemDatasourceName(sSMEBean.getPubChemDataSource());
                synthesisMaterialElement.setValue(sSMEBean.getValue());
                synthesisMaterialElement.setValueUnit(sSMEBean.getValueUnit());

                //check supplier
                //TODO this is clumsy.  Should probably be a simple bean
                Map<String, String> supplierMap = sSMEBean.getSupplierMap();
                Supplier supplier = new Supplier();
                supplier.setSupplierName(supplierMap.get("SupplierName"));
                supplier.setLot(supplierMap.get("Lot"));
                supplier.setId(new Long(supplierMap.get("id")));
                synthesisMaterialElement.setSupplier(supplier);


                //check for Files
                List<SimpleFileBean> sfileBeans = sSMEBean.getFiles();
                Set<File> files = new HashSet<File>();
                for(SimpleFileBean simpleFileBean: sfileBeans){

                    File file1 = new File();
                    file1.setUriExternal(simpleFileBean.getUriExternal());
                    file1.setUri(simpleFileBean.getUri());
                    file1.setType(simpleFileBean.getType());
                    file1.setDescription(simpleFileBean.getDescription());
                    file1.setTitle(simpleFileBean.getTitle());
                    file1.setCreatedDate(simpleFileBean.getCreatedDate());
                    file1.setCreatedBy(simpleFileBean.getCreatedBy());
                    files.add(file1);
                }
                synthesisMaterialElement.setFiles(files);

                //Loop through functions
                List<Map<String,Object>> functions = sSMEBean.getInherentFunctionList();
                Set<SmeInherentFunction> smeInherentFunctionSet = new HashSet<SmeInherentFunction>();
                for(Map<String, Object> function: functions){
                    //id, type, description
                    SmeInherentFunction smeInherentFunction = new SmeInherentFunction();

                    smeInherentFunction.setType(function.get("type").toString());
                    smeInherentFunction.setDescription(function.get("description").toString());
                    smeInherentFunction.setId((Long) function.get("id"));
                    //TODO this is circular.  Rework this
                    smeInherentFunction.setSynthesisMaterialElement(synthesisMaterialElement);
                    smeInherentFunctionSet.add(smeInherentFunction);
                }
                synthesisMaterialElement.setSmeInherentFunctions(smeInherentFunctionSet);
                SynthesisMaterialElementBean materialElementBean = new SynthesisMaterialElementBean(synthesisMaterialElement);
                smeBeans.add(materialElementBean);
            }
            bean.setSynthesisMaterialElements(smeBeans);

        }
        bean.setDomainEntity(material);
        return bean;
    }

    private List<String> validateInputs(HttpServletRequest request, SynthesisMaterialBean entityBean) {
        //todo write

        List<String> msgs = new ArrayList<String>();
        msgs = validateEntity(request, msgs, entityBean);
        msgs = validateMaterialElements(request, msgs, entityBean);
        msgs = validateFile(request, msgs, entityBean);

        String debugString = "Debug";
        msgs.add(debugString);
        return msgs;
        //TODO this is all debug text.  Replace with real results

    }

    private List<String> validateFile(HttpServletRequest request, List<String> msgs,
                                            SynthesisMaterialBean entityBean) {
        //ActionMessages msgs = new ActionMessages();
        for (FileBean filebean : entityBean.getFiles()) {
            msgs = validateFileBean(request, msgs, filebean);
            if (msgs.size()>0) {
                return msgs;
            }
        }
        return msgs;
    }

    private List<String> validateEntity(HttpServletRequest httpRequest, List<String> msgs, SynthesisMaterialBean synthesisMaterialBean){
        //TODO write

        return msgs;
    }

    private List<String> validateMaterialElements(HttpServletRequest httpRequest, List<String> msgs, SynthesisMaterialBean synthesisMaterialBean){
        //TODO write

        return msgs;
    }

    private List<String> saveEntity(HttpServletRequest request, String sampleId, SynthesisMaterialBean entityBean) throws Exception {

        List<String> msgs = new ArrayList<String>();
        SampleBean sampleBean = setupSampleById(sampleId, request);
        CananoUserDetails userDetails = SpringSecurityUtil.getPrincipal();

        Boolean newEntity = true;

        try {
            entityBean.setUpDomainEntity(userDetails.getUsername());
            if (entityBean.getDomainEntity().getId() != null) {
                newEntity = false;
            }
        } catch (ClassCastException ex) {

            entityBean.setType(null);
        }
        synthesisService.saveSynthesisMaterial(sampleBean, entityBean);
        // retract from public if updating an existing public record and not curator
        if (!newEntity && !userDetails.isCurator() &&
                springSecurityAclService.checkObjectPublic(sampleBean.getDomain().getId(), SecureClassesEnum.SAMPLE.getClazz())) {
            retractFromPublic(request, sampleBean.getDomain().getId(), sampleBean.getDomain().getName(), "sample", SecureClassesEnum.SAMPLE.getClazz());
            msgs.add(PropertyUtil.getProperty("sample", "message.updateSample.retractFromPublic"));
            return msgs;
        }
        return msgs;

    }

    public List<String> delete(SimpleSynthesisMaterialBean synthesisMaterialBean, HttpServletRequest request) throws Exception {

        List<String> msgs = new ArrayList<String>();
        SynthesisMaterialBean entityBean = transferSynthesisMaterialBean(synthesisMaterialBean, request);
        entityBean.setUpDomainEntity(SpringSecurityUtil.getLoggedInUserName());
        String sampleId = synthesisMaterialBean.getSampleId();
        synthesisService.deleteSynthesisMaterial(new Long(sampleId),entityBean.getDomainEntity());

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

    public SimpleSynthesisMaterialBean removeFile(SimpleSynthesisMaterialBean simpleSynthesisMaterialBean, HttpServletRequest httpRequest) throws Exception {
        //Assumption is they have ONE file submitted attached to the object.  That is the file to be removed
        SynthesisMaterialBean entityBean = transferSynthesisMaterialBean(simpleSynthesisMaterialBean, httpRequest);

//        List<FileBean> files = entityBean.getFiles();
//        if(files.size()>1){
//            throw new SynthesisException("Can only remove one file at a time from SynthesisMaterial");
//        }
//        FileBean theFile = files.get(0);
//        entityBean.removeFile(theFile);

        FileBean theFile = new FileBean(simpleSynthesisMaterialBean.getFileBeingEdited());
        entityBean.removeFile(theFile);

        List<String> msgs = validateInputs(httpRequest, entityBean);
        if (msgs.size() > 0) {
            SimpleSynthesisMaterialBean synMat = new SimpleSynthesisMaterialBean();
            synMat.setErrors(msgs);
            return synMat;
        }
        this.saveEntity(httpRequest, simpleSynthesisMaterialBean.getSampleId(), entityBean);
        httpRequest.setAttribute("anchor", "file");
        this.checkOpenForms(entityBean, httpRequest);
        return setupUpdate(simpleSynthesisMaterialBean.getSampleId(), entityBean.getDomainEntity().getId().toString()
                , httpRequest);
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


        String detailPage = InitSynthesisSetup.getInstance().getDetailPage(
                "synthesisMaterial");

        request.setAttribute("synthesisDetailPage", detailPage);

    }

    public SimpleSynthesisMaterialBean setupUpdate(String sampleId, String synMatId, HttpServletRequest httpRequest) throws Exception {
        SynthesisForm form = new SynthesisForm();
        // set up other particles with the same primary point of contact
//        InitSampleSetup.getInstance().getOtherSampleNames(httpRequest, sampleId, sampleService);

        try {
            SynthesisMaterialBean synthesisMaterialBean = synthesisService.findSynthesisMaterialById(new Long(sampleId),
                    new Long(synMatId));

            SynthesisBean synthesisBean = synthesisService.findSynthesisBySampleId(new Long(sampleId));
            synthesisMaterialBean.setSynthesis(synthesisBean);
            form.setSynthesisMaterialBean(synthesisMaterialBean);
            this.checkOpenForms(synthesisMaterialBean, httpRequest);
            httpRequest.getSession().setAttribute("sampleId", sampleId);
            SimpleSynthesisMaterialBean simpleSynthesisMaterialBean = new SimpleSynthesisMaterialBean();
            simpleSynthesisMaterialBean.transferSynthesisMaterialBeanToSimple(synthesisMaterialBean, httpRequest,
                    springSecurityAclService);
            return simpleSynthesisMaterialBean;
        }
        catch (IllegalFormatConversionException e) {
            logger.error("Either sample id or data id is not an appropriate identifier", e);
            throw e;
        }
    }

    public SimpleSynthesisMaterialBean removeMaterialElement(SimpleSynthesisMaterialBean simpleSynthesisMaterialBean,
                                                             HttpServletRequest httpRequest) throws Exception {
        List<String> msgs = new ArrayList<String>();
        SynthesisMaterialBean entity = transferSynthesisMaterialBean(simpleSynthesisMaterialBean, httpRequest);
        SimpleSynthesisMaterialElementBean elementBeingEdited = simpleSynthesisMaterialBean.getMaterialElementBeingEdited();
        SynthesisMaterialElementBean materialElementBean = entity.getSynthesisMaterialElementById(elementBeingEdited.getId());
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
                                                HttpServletRequest httpRequest) throws Exception{

        SynthesisMaterialBean synthesisMaterialBean = transferSynthesisMaterialBean(simpleSynthesisMaterialBean, httpRequest);
        List<FileBean> fileList = synthesisMaterialBean.getFiles();


        String timestamp = DateUtils.convertDateToString(new Date(), "yyyyMMdd_HH-mm-ss-SSS");

        SampleBean sampleBean = setupSampleById(simpleSynthesisMaterialBean.getSampleId(), httpRequest);
        FileBean theNewFile = new FileBean(simpleSynthesisMaterialBean.getFileBeingEdited());



        //Determine the directory for saving the file
        String internalUriPath = Constants.FOLDER_PARTICLE+'/'+sampleBean.getDomain().getName()+'/'+"synthesisMaterial";
        theNewFile.setupDomainFile(internalUriPath,SpringSecurityUtil.getLoggedInUserName());


        byte[] newFileData = (byte[]) httpRequest.getSession().getAttribute("newFileData");
        if(!theNewFile.getDomainFile().getUriExternal()){
            if(newFileData!=null){
                theNewFile.setNewFileData((byte[]) httpRequest.getSession().getAttribute("newFileData"));
                theNewFile.getDomainFile().setUri(Constants.FOLDER_PARTICLE + '/'
                        + sampleBean.getDomain().getName() + '/' + "nanomaterialEntity"+ "/" + timestamp + "_"
                        + theNewFile.getDomainFile().getName());
            }else if(theNewFile.getDomainFile().getId()!=null){
                theNewFile.getDomainFile().setUri(theNewFile.getDomainFile().getName());
            }else{
                theNewFile.getDomainFile().setUri(null);
            }
        }
        synthesisMaterialBean.addFile(theNewFile);

//
//        // save entity to save file because inverse="false"
        List<String> msgs = validateInputs(httpRequest, synthesisMaterialBean);
        if (msgs.size()>0) {
            SimpleSynthesisMaterialBean simpleSynMatBean = new SimpleSynthesisMaterialBean();
            simpleSynMatBean.setErrors(msgs);
            return simpleSynMatBean;
        }
        this.saveEntity(httpRequest,simpleSynthesisMaterialBean.getSampleId(), synthesisMaterialBean);
//        compositionService.assignAccesses(entity.getDomainEntity().getSampleComposition(), theFile.getDomainFile());

        httpRequest.setAttribute("anchor", "file");
        httpRequest.setAttribute("dataId", synthesisMaterialBean.getDomainEntity().getId().toString());
        httpRequest.getSession().removeAttribute("newFileData");

        return setupUpdate(simpleSynthesisMaterialBean.getSampleId(), synthesisMaterialBean.getDomainEntity().getId().toString(), httpRequest);


    }

    public SimpleSynthesisMaterialBean saveMaterialElement(SimpleSynthesisMaterialBean simpleSynthesisMaterialBean,
                                                           HttpServletRequest httpServletRequest) throws Exception {
        SynthesisMaterialBean entity = null;
        String sampleId = simpleSynthesisMaterialBean.getSampleId();
        try {
            entity = transferSynthesisMaterialBean(simpleSynthesisMaterialBean, httpServletRequest);
            List<String> msgs = new ArrayList<String>();
            SimpleSynthesisMaterialElementBean elementBeingEdited = simpleSynthesisMaterialBean.getMaterialElementBeingEdited();




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
        List<String> otherNames = InitSampleSetup.getInstance().getOtherSampleNames(request, sampleId, sampleService);
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
