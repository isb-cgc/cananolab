package gov.nih.nci.cananolab.restful.synthesis;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.common.Keyword;
import gov.nih.nci.cananolab.domain.particle.*;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.particle.SampleBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.*;
import gov.nih.nci.cananolab.exception.SynthesisException;
import gov.nih.nci.cananolab.restful.core.BaseAnnotationBO;
import gov.nih.nci.cananolab.restful.util.PropertyUtil;
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

import javax.servlet.http.HttpServletRequest;
import java.util.*;

@Component("synthesisFunctionalizationBO")
public class SynthesisFunctionalizationBO extends BaseAnnotationBO {

    Logger logger = Logger.getLogger(SynthesisPurificationBO.class);



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




    public Map<String, Object> setupNew(String sampleId, HttpServletRequest httpRequest) {
        SynthesisFunctionalizationBean synthesisFunctionalizationBean = new SynthesisFunctionalizationBean();
        return null;
    }


//    public Map<String, Object> setupNew(String sampleId, HttpServletRequest request) throws Exception {
//        SynthesisMaterialBean synthesisMaterialBean = new SynthesisMaterialBean();
//        InitSampleSetup.getInstance().getOtherSampleNames(request, sampleId, sampleService);
//        this.setLookups(request);
//        this.checkOpenForms(synthesisMaterialBean, request);
//        return SynthesisUtil.reformatLocalSearchDropdownsInSessionForSynthesisMaterial(request.getSession());
//    }

    private SynthesisFunctionalizationBean transferSynthesisFunctionalizationBean(SimpleSynthesisFunctionalizationBean synFuncBean,
                                                                                  HttpServletRequest request) {
        //Transfer from the simple front-end bean to a full bean
        SynthesisFunctionalizationBean bean = new SynthesisFunctionalizationBean();
        SynthesisFunctionalization functionalization =new SynthesisFunctionalization();
        //set up domain and bean
        functionalization.setId(synFuncBean.getId());
        functionalization.setCreatedBy(synFuncBean.getCreatedBy());
        functionalization.setCreatedDate(synFuncBean.getDate());

        //Add parent object to domain
        Synthesis synthesis = null;
        try{
            synthesis = synthesisService.getHelper().findSynthesisBySampleId(synFuncBean.getSampleId());
            functionalization.setSynthesis(synthesis);
        }
        catch (SynthesisException e) {
            e.printStackTrace();
            logger.error(e);
        }
        catch (Exception e) {
            e.printStackTrace();
            logger.error(e);
        }

        // Files
        FileBean fileBean;
        File file;
        List<FileBean> fileBeanList = new ArrayList<FileBean>();
        Set<File> fileList = new HashSet<File>();
        for(SimpleFileBean sFileBean: synFuncBean.getFileElements()){
            file = new File();
            file.setCreatedBy(sFileBean.getCreatedBy());
            file.setCreatedDate(sFileBean.getCreatedDate());
            file.setTitle(sFileBean.getTitle());
            file.setDescription(sFileBean.getDescription());

            file.setType(sFileBean.getType());
            file.setUri(sFileBean.getUri());
            file.setUriExternal(sFileBean.getUriExternal());
            fileBean = new FileBean(file);
            fileBean.setCreatedBy(sFileBean.getCreatedBy());
            fileBean.setExternalUrl(sFileBean.getExternalUrl());
            if(!StringUtils.isEmpty(sFileBean.getKeywordsStr())){
                String[] strs = sFileBean.getKeywordsStr().split("\r\n");
                for (String str : strs) {
                    // upper case
                    Keyword keyword = new Keyword();
                    keyword.setName(str.toUpperCase());
                    file.getKeywordCollection().add(keyword);
                }
            }
            fileBean.setTheAccess(sFileBean.getTheAccess());
            fileBean.setDomainFile(file);
            fileBeanList.add(fileBean);

            //TODO check if this can replace all of the above
            FileBean testFileBean = new FileBean(sFileBean);
            fileList.add(testFileBean.getDomainFile());


        }
        bean.setFiles(fileBeanList);
        functionalization.setFiles(fileList);

        //set up domain and bean

        if((synFuncBean.getId()!=null)&&(synFuncBean.getId()>0)){
            functionalization.setId(synFuncBean.getId());
            functionalization.setCreatedBy(synFuncBean.getCreatedBy());
            functionalization.setCreatedDate(synFuncBean.getDate());
        }  else {
            //TODO see if there is a way to grab user directly
            functionalization.setCreatedBy(synFuncBean.getCreatedBy());
            functionalization.setCreatedDate(synFuncBean.getDate());
        }

        functionalization.setDescription(synFuncBean.getDescription());
        bean.setDescription(synFuncBean.getDescription());
        if(synFuncBean.getType()!=null) {
            bean.setType(synFuncBean.getType());
        } else
        {
            bean.setType("Synthesis");
        }

        // Add SynthesisFunctionalizationElement to bean and domain
        Set<SynthesisFunctionalizationElement> sfes = new HashSet<SynthesisFunctionalizationElement>();
        List<SynthesisFunctionalizationElementBean> sfeBean =  new ArrayList<SynthesisFunctionalizationElementBean>();
        
/*
        SynthesisFunctionalizationElement sfe = new SynthesisFunctionalizationElement();
        SfeInherentFunctionBean sfeIfBean = new SfeInherentFunctionBean();
        Set<SfeInherentFunction> sfeInherentFunctions = new HashSet<SfeInherentFunction>();
        List<SynthesisFunctionalizationElementBean> sfeBeans = new ArrayList<SynthesisFunctionalizationElementBean>();
*/
        List<SimpleSynthesisFunctionalizationElementBean> sSFEbeans = synFuncBean.getFunctionalizationElements();

        if(sSFEbeans !=null) {
            //Loop through simple beans, creating new Functionalization elements from each
            for (SimpleSynthesisFunctionalizationElementBean sSFEbean : sSFEbeans) {
                SynthesisFunctionalizationElement synthesisFunctionalizationElement = new SynthesisFunctionalizationElement();
                synthesisFunctionalizationElement.setActivationEffect(sSFEbean.getActivationEffect());
                synthesisFunctionalizationElement.setActivationMethod(sSFEbean.getActivationMethod());



                synthesisFunctionalizationElement.setDescription(sSFEbean.getDescription());
                synthesisFunctionalizationElement.setChemicalName(sSFEbean.getChemicalName());
                synthesisFunctionalizationElement.setMolecularFormula(sSFEbean.getMolecularFormula());
                synthesisFunctionalizationElement.setMolecularFormulaType(sSFEbean.getMolecularFormulaType());
                synthesisFunctionalizationElement.setPubChemId(sSFEbean.getPubChemId());
                synthesisFunctionalizationElement.setPubChemDatasourceName(sSFEbean.getPubChemDataSource());
                synthesisFunctionalizationElement.setValue(sSFEbean.getValue());
                synthesisFunctionalizationElement.setValueUnit(sSFEbean.getValueUnit());
                synthesisFunctionalizationElement.setCreatedBy(sSFEbean.getCreatedBy());
                synthesisFunctionalizationElement.setCreatedDate(sSFEbean.getCreatedDate());
                synthesisFunctionalizationElement.setSynthesisFunctionalizationId(functionalization.getId());
                synthesisFunctionalizationElement.setSynthesisFunctionalization(functionalization);

                synthesisFunctionalizationElement.setId(sSFEbean.getId());
                synthesisFunctionalizationElement.setType(sSFEbean.getType());


                // Files
                List<SimpleFileBean> sfileBeans = sSFEbean.getFiles();
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
                List<Map<String,String>> functions = sSFEbean.getInherentFunctionList();
                Set<SfeInherentFunction> sfeInherentFunctionSet = new HashSet<SfeInherentFunction>();
                if (functions != null) {
                    for(Map<String, String> function: functions){
                        //id, type, description
                        SfeInherentFunction sfeInherentFunction = new SfeInherentFunction();

                        sfeInherentFunction.setType(function.get("type").toString());
                        sfeInherentFunction.setDescription(function.get("description").toString());
                        sfeInherentFunction.setId(Long.valueOf(function.get("id")));

                        //TODO this is circular.  Rework this
                        sfeInherentFunction.setSynthesisFunctionalizationElement(synthesisFunctionalizationElement);
                        sfeInherentFunctionSet.add(sfeInherentFunction);
                    }}

                synthesisFunctionalizationElement.setSfeInherentFunctions(sfeInherentFunctionSet);
                SynthesisFunctionalizationElementBean functionalizationElementBean = new SynthesisFunctionalizationElementBean( synthesisFunctionalizationElement );
                sfeBean.add(functionalizationElementBean);
                sfes.add(synthesisFunctionalizationElement);
            }
            bean.setSynthesisFunctionalizationElements(sfeBean);
            functionalization.setSynthesisFunctionalizationElements(sfes);

        }

        bean.setDomainEntity(functionalization);

                return bean;
    }

    public SimpleSynthesisFunctionalizationBean saveFile(SimpleSynthesisFunctionalizationBean simpleSynthesisFunctionalizationBean,
                                                HttpServletRequest httpRequest)  throws Exception{
        SynthesisFunctionalizationBean synthesisFunctionalizationBean = transferSynthesisFunctionalizationBean(simpleSynthesisFunctionalizationBean, httpRequest);
        List<FileBean> fileList = synthesisFunctionalizationBean.getFiles();
        String timestamp = DateUtils.convertDateToString(new Date(), "yyyyMMdd_HH-mm-ss-SSS");
        FileBean theNewFile = new FileBean(simpleSynthesisFunctionalizationBean.getFileBeingEdited());


        SampleBean sampleBean = setupSampleById(simpleSynthesisFunctionalizationBean.getSampleId(), httpRequest);
        //Determine the directory for saving the file
        String internalUriPath = Constants.FOLDER_PARTICLE+'/'+sampleBean.getDomain().getName()+'/'+"Functionalization";
        theNewFile.setupDomainFile(internalUriPath,SpringSecurityUtil.getLoggedInUserName());


        byte[] newFileData = (byte[]) httpRequest.getSession().getAttribute("newFileData");
        if(!theNewFile.getDomainFile().getUriExternal()){
            if(newFileData!=null){
                theNewFile.setNewFileData((byte[]) httpRequest.getSession().getAttribute("newFileData"));
                theNewFile.getDomainFile().setUri(Constants.FOLDER_PARTICLE + '/'
                        + sampleBean.getDomain().getName() + '/' + "functionalizationEntity"+ "/" + timestamp + "_"
                        + theNewFile.getDomainFile().getName());
            }else if(theNewFile.getDomainFile().getId()!=null){
                theNewFile.getDomainFile().setUri(theNewFile.getDomainFile().getName());
            }else{
                theNewFile.getDomainFile().setUri(null);
            }
        }
        synthesisFunctionalizationBean.addFile(theNewFile);

        //        // save entity to save file because inverse="false"
        List<String> msgs = validateInputs(httpRequest, synthesisFunctionalizationBean);
        if (msgs.size()>0) {
            SimpleSynthesisFunctionalizationBean simpleSynFuncBean = new SimpleSynthesisFunctionalizationBean();
            simpleSynFuncBean.setErrors(msgs);
            return simpleSynFuncBean;
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
            newElementBean.getDomainEntity().setSynthesisFunctionalization(entity.getDomainEntity());

            List<SynthesisFunctionalizationElementBean> synthesisFunctionalizationElementBeans = entity.getSynthesisFunctionalizationElements();
            synthesisFunctionalizationElementBeans.add(newElementBean);
            for (SynthesisFunctionalizationElementBean synthesisFunctionalizationElementBean : synthesisFunctionalizationElementBeans) {
                synthesisFunctionalizationElementBean.setupDomain(SpringSecurityUtil.getLoggedInUserName());
            }

            List<String> msgs,msgs2 = new ArrayList<String>();
            msgs = validateInputs(httpServletRequest, entity);
            msgs2 = this.saveEntity(httpServletRequest, sampleId, entity);
            if(msgs2.size()>0){
                for(String msg:msgs2){
                    msgs.add(msg);
                }
            }
            if (msgs.size() > 0) {
                SimpleSynthesisFunctionalizationBean simpleSynthesisFunctionalizationBean_error = new SimpleSynthesisFunctionalizationBean();
                simpleSynthesisFunctionalizationBean_error.setErrors(msgs);
                return simpleSynthesisFunctionalizationBean_error;
            }

            httpServletRequest.setAttribute("dataId", entity.getDomainEntity().getId().toString());


        }
        catch (Exception e) {
            logger.error("Error while saving Synthesis Functionalization Element ", e);
            throw new SynthesisException("Error while saving Synthesis Functionalization Element ");
        }
        return setupUpdate(sampleId, entity.getDomainEntity().getId().toString(), httpServletRequest);
    }




    public SimpleSynthesisFunctionalizationBean removeFile( SimpleSynthesisFunctionalizationBean simpleSynthesisFunctionalizationBean, HttpServletRequest httpRequest) throws Exception {
        //Assumption is they have ONE file submitted attached to the object.  That is the file to be removed
        SynthesisFunctionalizationBean entityBean = transferSynthesisFunctionalizationBean(simpleSynthesisFunctionalizationBean, httpRequest);

        List<FileBean> files = entityBean.getFiles();
        if(files.size()>1){
            throw new SynthesisException("Can only remove one file at a time from SynthesisMaterial");
        }
        FileBean theFile = files.get(0);
        entityBean.removeFile(theFile);

        List<String> msgs = validateInputs(httpRequest, entityBean);
        if (msgs.size() > 0) {
            SimpleSynthesisFunctionalizationBean synthFunc = new SimpleSynthesisFunctionalizationBean();
            synthFunc.setErrors(msgs);
            return synthFunc;
        }
     //   this.saveEntity(httpRequest, simpleSynthesisFunctionalizationBean.getSampleId(), entityBean);

        httpRequest.setAttribute("anchor", "file");
        this.checkOpenForms(entityBean, httpRequest);
        return setupUpdate(simpleSynthesisFunctionalizationBean.getSampleId(), entityBean.getDomainEntity().getId().toString()
                , httpRequest);
    }


    private List<String> saveEntity(HttpServletRequest request, String sampleId, SynthesisFunctionalizationBean entityBean) throws Exception {

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


    public SimpleSynthesisFunctionalizationBean removeFileX(SimpleSynthesisFunctionalizationBean simpleSynthesisFunctionalizationBean,
                                                           Long fileId,
                                                           HttpServletRequest request) throws Exception {
        SynthesisFunctionalizationBean entityBean = transferSynthesisFunctionalizationBean(simpleSynthesisFunctionalizationBean, request);
//        FileBean theFile = entityBean.getTheFile();
//        entityBean.removeFile(theFile);
//        entityBean.setTheFile(new FileBean());
        FileBean theFile = entityBean.getFile(fileId);
        entityBean.removeFile(theFile);

        List<String> msgs = validateInputs(request, entityBean);
        if (msgs.size() > 0) {
            SimpleSynthesisFunctionalizationBean synFunc = new SimpleSynthesisFunctionalizationBean();
            synFunc.setErrors(msgs);
            return synFunc;
        }
        // this.saveEntity(request, simpleSynthesisFunctionalizationBean.getSampleId(), entityBean);
        request.setAttribute("anchor", "file");
        this.checkOpenForms(entityBean, request);
        return setupUpdate(simpleSynthesisFunctionalizationBean.getSampleId(), entityBean.getDomainEntity().getId().toString()
                , request);
    }

    // TODO
    private List<String> validateInputs(HttpServletRequest request, SynthesisFunctionalizationBean entityBean) {
        List<String> msgs = new ArrayList<String>();

        return msgs;
    }



    public SimpleSynthesisFunctionalizationBean setupUpdate0(String sampleId, String dataId, HttpServletRequest httpRequest) throws Exception {
System.out.println("MHL 0000");
        try {
            SynthesisFunctionalizationBean synBean = synthesisService.findSynthesisFunctionalizationById(new Long(sampleId), new Long(dataId));

            this.checkOpenForms(synBean, httpRequest);

            httpRequest.getSession().setAttribute("sampleId", sampleId);
            httpRequest.getSession().setAttribute("dataId", dataId);

            SimpleSynthesisFunctionalizationBean simpleSynthesisFunctionalizationBean = new SimpleSynthesisFunctionalizationBean();
            simpleSynthesisFunctionalizationBean.transferSynthesisFunctionalizationBeanToSimple(synBean, httpRequest, springSecurityAclService);

            return simpleSynthesisFunctionalizationBean;
        } catch (IllegalFormatConversionException e){
            logger.error("SimpleSynthesisFunctionalizationBean setupUpdate. ",e);
            throw e;
        }
    }

    public SimpleSynthesisFunctionalizationBean setupUpdate(String sampleId, String synFuncId, HttpServletRequest httpRequest) throws Exception {
        SynthesisForm form = new SynthesisForm();

        try {
            SynthesisFunctionalizationBean synthesisFunctionalizationBean = synthesisService.findSynthesisFunctionalizationById(new Long(sampleId),
                    new Long(synFuncId));

            SynthesisBean synthesisBean = synthesisService.findSynthesisBySampleId(new Long(sampleId));
            synthesisFunctionalizationBean.setSynthesis(synthesisBean);
            form.setSynthesisFunctionalizationBean(synthesisFunctionalizationBean);
            this.checkOpenForms(synthesisFunctionalizationBean, httpRequest);
            httpRequest.getSession().setAttribute("sampleId", sampleId);
            SimpleSynthesisFunctionalizationBean simpleSynthesisFunctionalizationBean = new SimpleSynthesisFunctionalizationBean();
            simpleSynthesisFunctionalizationBean.transferSynthesisFunctionalizationBeanToSimple(synthesisFunctionalizationBean, httpRequest,

                    springSecurityAclService);
            return simpleSynthesisFunctionalizationBean;
        }
        catch (IllegalFormatConversionException e) {
            logger.error("Either sample id or data id is not an appropriate identifier", e);
            throw e;
        }
    }


    private void checkOpenForms(SynthesisFunctionalizationBean synBean, HttpServletRequest httpRequest) {
    }


}
