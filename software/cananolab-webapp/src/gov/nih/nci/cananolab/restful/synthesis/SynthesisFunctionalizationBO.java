package gov.nih.nci.cananolab.restful.synthesis;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.common.Keyword;
import gov.nih.nci.cananolab.domain.common.Protocol;
import gov.nih.nci.cananolab.domain.particle.*;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.common.ProtocolBean;
import gov.nih.nci.cananolab.dto.particle.SampleBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.*;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.exception.SynthesisException;
import gov.nih.nci.cananolab.restful.core.BaseAnnotationBO;
import gov.nih.nci.cananolab.restful.sample.InitSampleSetup;
import gov.nih.nci.cananolab.restful.util.PropertyUtil;
import gov.nih.nci.cananolab.restful.util.SynthesisUtil;
import gov.nih.nci.cananolab.restful.view.edit.*;
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
import org.apache.log4j.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.*;

@Transactional(readOnly = false, propagation = Propagation.REQUIRED)
@Component("synthesisFunctionalizationBO")
public class SynthesisFunctionalizationBO extends BaseAnnotationBO {

    Logger logger = Logger.getLogger(SynthesisFunctionalizationBO.class);


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

    public SynthesisFunctionalizationBO() {
    }

    public List<String> create(SimpleSynthesisFunctionalizationBean synMatBean,
                               HttpServletRequest request)
            throws Exception {
        List<String> msgs;
        String sampleId = synMatBean.getSampleId();
        SynthesisFunctionalizationBean entityBean = transferSynthesisFunctionalizationBean(synMatBean, request);
//        SampleBean sampleBean = setupSampleById(sampleId, request);
//        List<String> otherSampleNames = synMatBean.getOtherSampleNames();
        msgs = validateInputs(request, entityBean);
        if (msgs.size() > 0) {
            return msgs;
        }
        this.saveEntity(request, sampleId, entityBean);
        InitSynthesisSetup.getInstance().persistSynthesisFunctionalizationDropdowns(
                request, entityBean);



        msgs.add("success");
        request.getSession().setAttribute("tab", "1");
        return msgs;
    }



    private SynthesisFunctionalizationBean transferSynthesisFunctionalizationBean(SimpleSynthesisFunctionalizationBean synFuncBean,
                                                                HttpServletRequest request){
        //Transfer from the simple front-end bean to a full bean
        //TODO write
        SynthesisFunctionalizationBean bean = new SynthesisFunctionalizationBean();
        SynthesisFunctionalization functionalization = new SynthesisFunctionalization();


        //set up domain and bean
//         functionalization.setId(synFuncBean.getId());

        if((synFuncBean.getId()!=null)&&(synFuncBean.getId()>0)){
            functionalization.setId(synFuncBean.getId());
        }
        functionalization.setCreatedBy(synFuncBean.getCreatedBy());
        functionalization.setCreatedDate(synFuncBean.getDate());

        functionalization.setDescription(synFuncBean.getDescription());
        bean.setDescription(synFuncBean.getDescription());
        if(synFuncBean.getType()!=null) {
            bean.setType(synFuncBean.getType());
        } else
        {
            bean.setType("Synthesis");
        }
// /////
        //Add parent object to domain
        Synthesis synthesis;
        try{
            synthesis = synthesisService.getHelper().findSynthesisBySampleId(synFuncBean.getSampleId());
            functionalization.setSynthesis(synthesis);

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
        if(synFuncBean.getFileElements()!=null) {
            for (SimpleFileBean sFileBean : synFuncBean.getFileElements()) {
                file = new File();
                fileBean = new FileBean();
                file.setId(sFileBean.getId());
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
            functionalization.setFiles(fileList);
        }

        //Set protocol for domain and bean
        //TODO why is this not null?
        try {
            SimpleProtocol sProtocol = synFuncBean.getSimpleProtocol();
            if (sProtocol != null && sProtocol.getDomainId() !=null) {
                ProtocolBean protocolBean = protocolService.findProtocolById(sProtocol.getDomainId().toString());
                Protocol protocol = protocolBean.getDomain();
                bean.setProtocolBean(protocolBean);
                functionalization.setProtocol(protocol);
            }
        }
        catch (Exception e) {
            e.printStackTrace();
            logger.error(e);
        }


//TODO check if any old functionalization elements have been removed and delete from data
        //TODO check if any new functionalization elements have been added and create row in data
        //Add synthesisFunctionalizationElements to bean and domain
        Set<SynthesisFunctionalizationElement> sfes = new HashSet<SynthesisFunctionalizationElement>();
        List<SynthesisFunctionalizationElementBean> sfeBeans = new ArrayList<SynthesisFunctionalizationElementBean>();
        List<SimpleSynthesisFunctionalizationElementBean> sSFEbeans = synFuncBean.getFunctionalizationElements();

        if(sSFEbeans !=null){
            //Loop through simple beans, creating new functionalization elements from each
            for(SimpleSynthesisFunctionalizationElementBean sSFEBean: sSFEbeans){
                SynthesisFunctionalizationElement synthesisFunctionalizationElement = new SynthesisFunctionalizationElement();

                synthesisFunctionalizationElement.setDescription(sSFEBean.getDescription());
                synthesisFunctionalizationElement.setChemicalName(sSFEBean.getChemicalName());
                synthesisFunctionalizationElement.setMolecularFormula(sSFEBean.getMolecularFormula());
                synthesisFunctionalizationElement.setMolecularFormulaType(sSFEBean.getMolecularFormulaType());
                synthesisFunctionalizationElement.setPubChemId(sSFEBean.getPubChemId());
                synthesisFunctionalizationElement.setPubChemDatasourceName(sSFEBean.getPubChemDataSource());
                synthesisFunctionalizationElement.setValue(sSFEBean.getValue());
                synthesisFunctionalizationElement.setValueUnit(sSFEBean.getValueUnit());
                synthesisFunctionalizationElement.setCreatedBy(sSFEBean.getCreatedBy());
                synthesisFunctionalizationElement.setCreatedDate(sSFEBean.getCreatedDate());
//                synthesisFunctionalizationElement.setSynthesisFunctionalization(functionalization);
                synthesisFunctionalizationElement.setId(sSFEBean.getId());
                synthesisFunctionalizationElement.setType(sSFEBean.getType());
                synthesisFunctionalizationElement.setActivationMethod(sSFEBean.getActivationMethod());
                synthesisFunctionalizationElement.setActivationEffect(sSFEBean.getActivationEffect());
                synthesisFunctionalizationElement.setSynthesisFunctionalizationId(synFuncBean.getId());


                //check for Files
                List<SimpleFileBean> sfileBeans = sSFEBean.getFiles();
                Set<File> files = new HashSet<File>();
                if(sfileBeans!=null){
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
                    }}
                synthesisFunctionalizationElement.setFiles(files);

                //Loop through functions
                List<Map<String,String>> functions = sSFEBean.getInherentFunctionList();
                Set<SfeInherentFunction> sfeInherentFunctionSet = new HashSet<SfeInherentFunction>();
                if (functions != null) {
                    for(Map<String, String> function: functions){
                        //id, type, description
                        SfeInherentFunction sfeInherentFunction = new SfeInherentFunction();

                        sfeInherentFunction.setType(function.get("type").toString());
                        sfeInherentFunction.setDescription(function.get("description").toString());
//                   Is this a new function or does it have an ID
                        if(function.get("id")!=null) {
                            sfeInherentFunction.setId(Long.valueOf(function.get("id")));
                        }
//                    sfeInherentFunction.setId(function.get("id"));
                        //TODO this is circular.  Rework this
                        sfeInherentFunction.setSynthesisFunctionalizationElement(synthesisFunctionalizationElement);
                        sfeInherentFunctionSet.add(sfeInherentFunction);
                    }}


                synthesisFunctionalizationElement.setSfeInherentFunctions(sfeInherentFunctionSet);

                sfes.add(synthesisFunctionalizationElement);
            }

            functionalization.setSynthesisFunctionalizationElements(sfes);

            //See if this can be avoided
            for (SynthesisFunctionalizationElement element:functionalization.getSynthesisFunctionalizationElements()){
                element.setSynthesisFunctionalization(functionalization);
                SynthesisFunctionalizationElementBean functionalizationElementBean = new SynthesisFunctionalizationElementBean(element);
                sfeBeans.add(functionalizationElementBean);
            }

            bean.setSynthesisFunctionalizationElements(sfeBeans);

        }
        bean.setDomainEntity(functionalization);
        return bean;
    }

    private List<String> validateInputs(HttpServletRequest request, SynthesisFunctionalizationBean entityBean) {
        //todo write

        List<String> msgs = new ArrayList<String>();
        msgs = validateEntity(request, msgs, entityBean);
        msgs = validateFunctionalizationElements(request, msgs, entityBean);
        msgs = validateFile(request, msgs, entityBean);

        return msgs;


    }

    private List<String> validateFile(HttpServletRequest request, List<String> msgs,
                                      SynthesisFunctionalizationBean entityBean) {
        //ActionMessages msgs = new ActionMessages();
        for (FileBean filebean : entityBean.getFiles()) {
            msgs = validateFileBean(request, msgs, filebean);
            if (msgs.size()>0) {
                return msgs;
            }
        }
        return msgs;
    }

    private List<String> validateEntity(HttpServletRequest httpRequest, List<String> msgs, SynthesisFunctionalizationBean synthesisFunctionalizationBean){
        //TODO write

        return msgs;
    }

    private List<String> validateFunctionalizationElements(HttpServletRequest httpRequest, List<String> msgs, SynthesisFunctionalizationBean synthesisFunctionalizationBean){
        //TODO write

        return msgs;
    }

    private List<String> saveEntity(HttpServletRequest request, String sampleIdString, SynthesisFunctionalizationBean entityBean) throws Exception {

        List<String> msgs = new ArrayList<String>();
        SampleBean sampleBean = setupSampleById(sampleIdString, request);
        CananoUserDetails userDetails = SpringSecurityUtil.getPrincipal();
        Long sampleId = new Long(sampleIdString);

        boolean newEntity = true;

        try {
            entityBean.setUpDomainEntity(userDetails.getUsername());
            if (entityBean.getDomainEntity().getId() != null) {
                newEntity = false;
            }
        } catch (ClassCastException ex) {

            entityBean.setType(null);
        }
        if(!newEntity){
            //detect removed elements
            detectRemovedElements(entityBean, sampleId);
        }

        synthesisService.saveSynthesisFunctionalization(sampleBean, entityBean);
        // retract from public if updating an existing public record and not curator
        if (!newEntity && !userDetails.isCurator() &&
                springSecurityAclService.checkObjectPublic(sampleBean.getDomain().getId(), SecureClassesEnum.SAMPLE.getClazz())) {
            retractFromPublic(request, sampleBean.getDomain().getId(), sampleBean.getDomain().getName(), "sample", SecureClassesEnum.SAMPLE.getClazz());
            msgs.add(PropertyUtil.getProperty("sample", "message.updateSample.retractFromPublic"));
            return msgs;
        }
        return msgs;

    }

    private void detectRemovedElements(SynthesisFunctionalizationBean entityBean, Long sampleId) throws SynthesisException {
        //Retrieve the old functionalization
        Long id = entityBean.getId();
        List<SynthesisFunctionalizationElementBean> removedElements = new ArrayList<SynthesisFunctionalizationElementBean>();
        try {
            SynthesisFunctionalizationBean originalSynMat = synthesisService.findSynthesisFunctionalizationById(sampleId, id);
            List<Long> codeMap = new ArrayList<Long>();
            for(SynthesisFunctionalizationElementBean elementBean: entityBean.getSynthesisFunctionalizationElements()){
                //If I've added new elements they will have a domainId of null
                if(elementBean.getDomainId()!=null) {
                    codeMap.add(elementBean.getDomainId());
                }
            }

            //check if any elements have been removed
            for (SynthesisFunctionalizationElementBean element : originalSynMat.getSynthesisFunctionalizationElements()){
                if(!codeMap.contains(element.getDomainId())){
                    logger.info("Functionalization element removed: "+ element.getDomainId().toString());
                    removedElements.add(element);
                    synthesisService.deleteSynthesisFunctionalizationElement(sampleId, entityBean.getDomainEntity(), element.getDomainEntity());

                } else {
                    detectRemovedFunctions(element, entityBean.getSynthesisFunctionalizationElementById(element.getDomainId()),sampleId);
                }
            }



        }
        catch (NoAccessException e) {
            logger.error("User does not have access to sample", e);
            throw new SynthesisException("User does not have access to sample", e);

        }


    }

    private void detectRemovedFunctions(SynthesisFunctionalizationElementBean originalElement, SynthesisFunctionalizationElementBean currentElement,Long sampleId) throws SynthesisException {

        List<SfeInherentFunctionBean> originalFunctionBeans = originalElement.getFunctions();
        List<SfeInherentFunctionBean> currentFunctionBeans = currentElement.getFunctions();
        List<SfeInherentFunctionBean> removedFunctions = new ArrayList<SfeInherentFunctionBean>();
        List<Long> functionIds = new ArrayList<Long>();
        for (SfeInherentFunctionBean function : currentFunctionBeans) {

            functionIds.add(function.getDomain().getId());
        }

        for (SfeInherentFunctionBean functionBean : originalFunctionBeans) {
            if (!functionIds.contains(functionBean.getDomain().getId())) {
                logger.info("Inherent function removed: " + functionBean.getDomain().toString());
                removedFunctions.add(functionBean);
                synthesisService.deleteSfeInherentFunction(sampleId, currentElement.getDomainEntity(), functionBean.getDomain());
            }
        }



    }

    public List<String> delete(SimpleSynthesisFunctionalizationBean synthesisFunctionalizationBean, HttpServletRequest request) throws Exception {

        List<String> msgs = new ArrayList<String>();
        SynthesisFunctionalizationBean entityBean = transferSynthesisFunctionalizationBean(synthesisFunctionalizationBean, request);
        entityBean.setUpDomainEntity(SpringSecurityUtil.getLoggedInUserName());
        String sampleId = synthesisFunctionalizationBean.getSampleId();
        synthesisService.deleteSynthesisFunctionalization(new Long(sampleId),entityBean.getDomainEntity());

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

    public SimpleSynthesisFunctionalizationBean removeFile(SimpleSynthesisFunctionalizationBean simpleSynthesisFunctionalizationBean, HttpServletRequest httpRequest) throws Exception {
        //Assumption is they have ONE file submitted attached to the object.  That is the file to be removed
        SynthesisFunctionalizationBean entityBean = transferSynthesisFunctionalizationBean(simpleSynthesisFunctionalizationBean, httpRequest);

//        List<FileBean> files = entityBean.getFiles();
//        if(files.size()>1){
//            throw new SynthesisException("Can only remove one file at a time from SynthesisFunctionalization");
//        }
//        FileBean theFile = files.get(0);
//        entityBean.removeFile(theFile);

//        FileBean theFile = new FileBean(simpleSynthesisFunctionalizationBean.getFileBeingEdited());
        //TODO needs a better match

        FileBean theFile = entityBean.getFile(simpleSynthesisFunctionalizationBean.getFileBeingEdited().getId());
        entityBean.removeFile(theFile);

        List<String> msgs = validateInputs(httpRequest, entityBean);
        if (msgs.size() > 0) {
            SimpleSynthesisFunctionalizationBean synMat = new SimpleSynthesisFunctionalizationBean();
            synMat.setErrors(msgs);
            return synMat;
        }
        this.saveEntity(httpRequest, simpleSynthesisFunctionalizationBean.getSampleId(), entityBean);
        httpRequest.setAttribute("anchor", "file");
        this.checkOpenForms(entityBean, httpRequest);
        return setupUpdate(simpleSynthesisFunctionalizationBean.getSampleId(), entityBean.getDomainEntity().getId().toString()
                , httpRequest);
    }



    private void checkOpenForms(SynthesisFunctionalizationBean synthesisFunctionalizationBean, HttpServletRequest request) throws Exception {
        String dispatch = request.getParameter("dispatch");
        String browserDispatch = getBrowserDispatch(request);
        HttpSession session = request.getSession();


        InitSynthesisSetup.getInstance().persistSynthesisFunctionalizationDropdowns(
                request, synthesisFunctionalizationBean);

        // Synthesis Functionalization Type
//        String entityType = synthesisFunctionalizationBean.getDomainEntity().getType();
//        setOtherValueOption(request, entityType, "synthesisFunctionalizationTypes");

        //TODO Check SynthesisFunctionalizationElement?


        String detailPage = InitSynthesisSetup.getInstance().getDetailPage(
                "synthesisFunctionalization");

        request.setAttribute("synthesisDetailPage", detailPage);

    }

    public SimpleSynthesisFunctionalizationBean setupUpdate(String sampleId, String synFunctId, HttpServletRequest httpRequest) throws Exception {
        SynthesisForm form = new SynthesisForm();
        // set up other particles with the same primary point of contact
//        InitSampleSetup.getInstance().getOtherSampleNames(httpRequest, sampleId, sampleService);

        try {
            SynthesisFunctionalizationBean synthesisFunctionalizationBean = synthesisService.findSynthesisFunctionalizationById(new Long(sampleId),
                    new Long(synFunctId));

            SynthesisBean synthesisBean = synthesisService.findSynthesisBySampleId(new Long(sampleId));
            synthesisFunctionalizationBean.setSynthesis(synthesisBean);
//            synthesisFunctionalizationBean.setSynthesisId(synthesisBean.getDomainId());
            form.setSynthesisFunctionalizationBean(synthesisFunctionalizationBean);
            this.checkOpenForms(synthesisFunctionalizationBean, httpRequest);
            httpRequest.getSession().setAttribute("sampleId", sampleId);
            SimpleSynthesisFunctionalizationBean simpleSynthesisFunctionalizationBean = new SimpleSynthesisFunctionalizationBean();
            simpleSynthesisFunctionalizationBean.transferSynthesisFunctionalizationBeanToSimple(synthesisFunctionalizationBean, httpRequest,
                    springSecurityAclService);
            simpleSynthesisFunctionalizationBean.setProtocolLookup(httpRequest, protocolService);
            return simpleSynthesisFunctionalizationBean;
        }
        catch (IllegalFormatConversionException e) {
            logger.error("Either sample id or data id is not an appropriate identifier", e);
            throw e;
        }
    }

    public SimpleSynthesisFunctionalizationBean removeFunctionalizationElement(SimpleSynthesisFunctionalizationBean simpleSynthesisFunctionalizationBean,
                                                             HttpServletRequest httpRequest) throws Exception {
        List<String> msgs = new ArrayList<String>();
        SynthesisFunctionalizationBean entity = transferSynthesisFunctionalizationBean(simpleSynthesisFunctionalizationBean, httpRequest);
        SimpleSynthesisFunctionalizationElementBean elementBeingEdited = simpleSynthesisFunctionalizationBean.getFunctionalizationElementBeingEdited();
        SynthesisFunctionalizationElementBean functionalizationElementBean = entity.getSynthesisFunctionalizationElementById(elementBeingEdited.getId());
        entity.removeFunctionalizationElement(functionalizationElementBean);
        msgs = validateInputs(httpRequest, entity);
        //If an error, return blank class
        if (msgs.size() > 0) {
            SimpleSynthesisFunctionalizationBean nullBean = new SimpleSynthesisFunctionalizationBean();
            nullBean.setErrors(msgs);
            return nullBean;
        }
        //TODO actually delete it
//        synthesisService.deleteSynthesisFunctionalizationElement();
        this.saveEntity(httpRequest, simpleSynthesisFunctionalizationBean.getSampleId(), entity);
        this.checkOpenForms(entity, httpRequest);
        return setupUpdate(simpleSynthesisFunctionalizationBean.getSampleId(), entity.getDomainEntity().getId().toString(),
                httpRequest);
    }


    public SimpleSynthesisFunctionalizationBean saveFile(SimpleSynthesisFunctionalizationBean simpleSynthesisFunctionalizationBean,
                                                HttpServletRequest httpRequest) throws Exception{

        SynthesisFunctionalizationBean synthesisFunctionalizationBean = transferSynthesisFunctionalizationBean(simpleSynthesisFunctionalizationBean, httpRequest);
        List<FileBean> fileList = synthesisFunctionalizationBean.getFiles();


        String timestamp = DateUtils.convertDateToString(new Date(), "yyyyMMdd_HH-mm-ss-SSS");

        SampleBean sampleBean = setupSampleById(simpleSynthesisFunctionalizationBean.getSampleId(), httpRequest);
        FileBean theNewFile = new FileBean(simpleSynthesisFunctionalizationBean.getFileBeingEdited());



        //Determine the directory for saving the file
        String internalUriPath = Constants.FOLDER_PARTICLE+'/'+sampleBean.getDomain().getName()+'/'+"synthesisFunctionalization";
        theNewFile.setupDomainFile(internalUriPath,SpringSecurityUtil.getLoggedInUserName());


        byte[] newFileData = (byte[]) httpRequest.getSession().getAttribute("newFileData");
        if(!theNewFile.getDomainFile().getUriExternal()){
            if(newFileData!=null){
                theNewFile.setNewFileData((byte[]) httpRequest.getSession().getAttribute("newFileData"));
                theNewFile.getDomainFile().setUri(Constants.FOLDER_PARTICLE + '/'
                        + sampleBean.getDomain().getName() + '/' + "nanofunctionalizationEntity"+ "/" + timestamp + "_"
                        + theNewFile.getDomainFile().getName());
            }else if(theNewFile.getDomainFile().getId()!=null){
                theNewFile.getDomainFile().setUri(theNewFile.getDomainFile().getName());
            }else{
                theNewFile.getDomainFile().setUri(null);
            }
        }
        synthesisFunctionalizationBean.addFile(theNewFile);

//
//        // save entity to save file because inverse="false"
        List<String> msgs = validateInputs(httpRequest, synthesisFunctionalizationBean);
        if (msgs.size()>0) {
            SimpleSynthesisFunctionalizationBean simpleSynMatBean = new SimpleSynthesisFunctionalizationBean();
            simpleSynMatBean.setErrors(msgs);
            return simpleSynMatBean;
        }
        this.saveEntity(httpRequest,simpleSynthesisFunctionalizationBean.getSampleId(), synthesisFunctionalizationBean);
//        compositionService.assignAccesses(entity.getDomainEntity().getSampleComposition(), theFile.getDomainFile());

        httpRequest.setAttribute("anchor", "file");
        httpRequest.setAttribute("dataId", synthesisFunctionalizationBean.getDomainEntity().getId().toString());
        httpRequest.getSession().removeAttribute("newFileData");

        return setupUpdate(simpleSynthesisFunctionalizationBean.getSampleId(), synthesisFunctionalizationBean.getDomainEntity().getId().toString(), httpRequest);


    }

    public SimpleSynthesisFunctionalizationBean saveFunctionalizationElement(SimpleSynthesisFunctionalizationBean simpleSynthesisFunctionalizationBean,
                                                           HttpServletRequest httpServletRequest) throws Exception {
        SynthesisFunctionalizationBean entity = null;
        String sampleId = simpleSynthesisFunctionalizationBean.getSampleId();
        try {
            entity = transferSynthesisFunctionalizationBean(simpleSynthesisFunctionalizationBean, httpServletRequest);

            SimpleSynthesisFunctionalizationElementBean elementBeingEdited = simpleSynthesisFunctionalizationBean.getFunctionalizationElementBeingEdited();
            SynthesisFunctionalizationElementBean newElementBean = new SynthesisFunctionalizationElementBean(elementBeingEdited);
            newElementBean.getDomainEntity().setSynthesisFunctionalizationId(entity.getId());
            newElementBean.getDomainEntity().setSynthesisFunctionalization(entity.getDomainEntity());
//            newElementBean.getDomainEntity().setSynthesisFunctionalization(entity.getDomainEntity());

            List<SynthesisFunctionalizationElementBean> synthesisFunctionalizationElementBeans = entity.getSynthesisFunctionalizationElements();
            synthesisFunctionalizationElementBeans.add(newElementBean);
            for (SynthesisFunctionalizationElementBean synthesisFunctionalizationElementBean : synthesisFunctionalizationElementBeans) {
                synthesisFunctionalizationElementBean.setupDomain(SpringSecurityUtil.getLoggedInUserName());

            }
            List<String> msgs,msgs2 = new ArrayList<String>();
            msgs = validateInputs(httpServletRequest, entity);
            msgs2 = this.saveEntity(httpServletRequest, sampleId, entity);
            if(msgs2.size()>0){
                msgs.addAll(msgs2);
            }
            if (msgs.size() > 0) {
                SimpleSynthesisFunctionalizationBean simpleSynthesisFunctionalizationBean_error = new SimpleSynthesisFunctionalizationBean();
                simpleSynthesisFunctionalizationBean_error.setErrors(msgs);
                return simpleSynthesisFunctionalizationBean_error;
            }

            httpServletRequest.setAttribute("dataId", entity.getDomainEntity().getId().toString());


        }
        catch (Exception e) {
            logger.error("Error while saving Synthesis Functionalization Element " + e.getMessage());
            e.printStackTrace();
            throw new SynthesisException("Error while saving Synthesis Functionalization Element ");
        }
        return setupUpdate(sampleId, entity.getDomainEntity().getId().toString(), httpServletRequest);
    }



    public Map<String, Object> setupNew(String sampleId, HttpServletRequest request) throws Exception {

        SynthesisFunctionalizationBean synthesisFunctionalizationBean = new SynthesisFunctionalizationBean();
        this.setLookups(request);
        this.checkOpenForms(synthesisFunctionalizationBean, request);
        Map<String,Object> testLookup = new HashMap<String, Object>();

 /*       List<ProtocolBean> protocolBeans =  protocolService.getSynthesisProtocols(request);
        testLookup.put("protocols", protocolBeans);
 //       testLookup.put("protocolLookup", this.setProtocolLookup(request));
*/
        testLookup.put("protocolLookup", this.setProtocolLookup(request));

        List<String> activationMethods = synthesisService.getFunctionalizationActivationMethods();
        testLookup.put("activationMethods",activationMethods);
        return testLookup;
    }



    public void setLookups(HttpServletRequest request) throws Exception {
        InitSynthesisSetup.getInstance().setSynthesisFunctionalizationDropdowns(request);
    //    ServletContext appContext = request.getSession().getServletContext();


//        List<ProtocolBean> protocols = protocolService.getSynthesisProtocols(request);

//        InitSetup.getInstance().getDefaultTypesByLookup(appContext,
//                "wallTypes", "carbon nanotube", "wallType");
    }

    public SynthesisFunctionalizationBean setupSynFunctionalizationForAdvSearch(String sampleId, Long id,
                                                              HttpServletRequest httpRequest) {
        //TODO write
        return null;
    }

    public List<SimpleProtocol> setProtocolLookup(HttpServletRequest request)
            throws Exception {
        List<SimpleProtocol> protocolLookup = new ArrayList<SimpleProtocol>();
        List<ProtocolBean> protoBeans = protocolService.getSynthesisProtocols(request);

        if (protoBeans == null)
            return protocolLookup;

        for (ProtocolBean protoBean : protoBeans) {
            SimpleProtocol simpleProto = new SimpleProtocol();
            simpleProto.transferFromProtocolBean(protoBean);
            protocolLookup.add(simpleProto);
        }
        return protocolLookup;
    }




}
