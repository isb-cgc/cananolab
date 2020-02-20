package gov.nih.nci.cananolab.restful.synthesis;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.common.Keyword;
import gov.nih.nci.cananolab.domain.particle.Synthesis;
import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalization;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.particle.SampleBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialBean;
import gov.nih.nci.cananolab.exception.SynthesisException;
import gov.nih.nci.cananolab.restful.core.BaseAnnotationBO;
import gov.nih.nci.cananolab.restful.util.PropertyUtil;
import gov.nih.nci.cananolab.restful.view.edit.SimpleFileBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisFunctionalizationBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisMaterialBean;
import gov.nih.nci.cananolab.security.CananoUserDetails;
import gov.nih.nci.cananolab.security.enums.SecureClassesEnum;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;
import gov.nih.nci.cananolab.service.curation.CurationService;
import gov.nih.nci.cananolab.service.sample.SampleService;
import gov.nih.nci.cananolab.service.sample.SynthesisService;
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

    @Override
    public CurationService getCurationServiceDAO() {
        return null;
    }


    @Override
    public SampleService getSampleService() {
        return null;
    }

    @Override
    public SpringSecurityAclService getSpringSecurityAclService() {
        return null;
    }

    @Override
    public UserDetailsService getUserDetailsService() {
        return null;
    }

    @Autowired
    private SynthesisService synthesisService;


    @Autowired
    private SpringSecurityAclService springSecurityAclService;


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
        SynthesisFunctionalization functionalization = null;
        //set up domain and bean
        functionalization.setId(synFuncBean.getId());
        functionalization.setCreatedBy(synFuncBean.getCreatedBy());
        functionalization.setCreatedDate(synFuncBean.getCreatedDate());

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

        //Set files for domain and bean
        FileBean fileBean;
        File file;
        List<FileBean> fileBeanList = new ArrayList<FileBean>();
        Set<File> fileList = new HashSet<File>();
        for(SimpleFileBean sFileBean: synFuncBean.getFileElements()){
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
        functionalization.setFiles(fileList);



        return bean;
    }

    public SimpleSynthesisFunctionalizationBean saveFile(SimpleSynthesisFunctionalizationBean simpleSynthesisFunctionalizationBean,
                                                HttpServletRequest httpRequest) {
        //TODO write
        SynthesisFunctionalizationBean bean = transferSynthesisFunctionalizationBean(simpleSynthesisFunctionalizationBean, httpRequest);

        return null;
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


    private List<String> saveEntity(HttpServletRequest request, String sampleId, SimpleSynthesisFunctionalizationBean entityBean) throws Exception {

        List<String> msgs = new ArrayList<String>();
/*
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
            msgs.add( PropertyUtil.getProperty("sample", "message.updateSample.retractFromPublic"));
            return msgs;
        }
*/
        return msgs;

    }


    public SimpleSynthesisFunctionalizationBean removeFileX(SimpleSynthesisFunctionalizationBean simpleSynthesisFunctionalizationBean,
                                                           String fileId,
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

    private List<String> validateInputs(HttpServletRequest request, SynthesisFunctionalizationBean entityBean) {
        // TODO
        return null;
    }



    public SimpleSynthesisFunctionalizationBean setupUpdate(String sampleId, String dataId, HttpServletRequest httpRequest) throws Exception {

        try {
            SynthesisFunctionalizationBean synBean = synthesisService.findSynthesisFunctionalizationById(new Long(sampleId), new Long(dataId));

            this.checkOpenForms(synBean, httpRequest);

            httpRequest.getSession().setAttribute("sampleId", sampleId);
            httpRequest.getSession().setAttribute("dataId", dataId);

            SimpleSynthesisFunctionalizationBean simpleSynthesisFunctionalizationBean = new SimpleSynthesisFunctionalizationBean();
            simpleSynthesisFunctionalizationBean.transferSynthesisFunctionalizationToSimple(synBean, httpRequest, springSecurityAclService);

            return simpleSynthesisFunctionalizationBean;
        } catch (IllegalFormatConversionException e){
            logger.error("SimpleSynthesisFunctionalizationBean setupUpdate. ",e);
            throw e;
        }
    }

    private void checkOpenForms(SynthesisFunctionalizationBean synBean, HttpServletRequest httpRequest) {
    }


}
