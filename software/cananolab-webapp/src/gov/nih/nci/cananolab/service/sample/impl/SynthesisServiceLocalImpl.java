package gov.nih.nci.cananolab.service.sample.impl;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.particle.Sample;
import gov.nih.nci.cananolab.domain.particle.Synthesis;
import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalization;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterial;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterialElement;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurification;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.particle.SampleBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurificationBean;
import gov.nih.nci.cananolab.exception.CompositionException;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.exception.SynthesisException;
import gov.nih.nci.cananolab.security.enums.SecureClassesEnum;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;
import gov.nih.nci.cananolab.service.BaseServiceLocalImpl;
import gov.nih.nci.cananolab.service.sample.SynthesisService;
import gov.nih.nci.cananolab.service.sample.helper.SynthesisHelper;
import gov.nih.nci.cananolab.system.applicationservice.CaNanoLabApplicationService;
import gov.nih.nci.cananolab.system.applicationservice.client.ApplicationServiceProvider;
import java.util.HashSet;
import java.util.List;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("synthesisService")
public class SynthesisServiceLocalImpl extends BaseServiceLocalImpl implements SynthesisService {
    private static Logger logger = org.apache.log4j.Logger.getLogger(SynthesisServiceLocalImpl.class);

    @Autowired
    private SynthesisHelper synthesisHelper;

    @Autowired
    private SpringSecurityAclService springSecurityAclService;


    @Override
    public SpringSecurityAclService getSpringSecurityAclService() {
        return springSecurityAclService;
    }


    public SynthesisHelper getHelper() {
        return synthesisHelper;
    }


    public SynthesisBean findSynthesisBySampleId(Long sampleId) throws SynthesisException {
        SynthesisBean synthesisBean = null;
        try{
            Synthesis synthesis = synthesisHelper.findSynthesisBySampleId(sampleId);
            if(synthesis!=null){
                synthesisBean = new SynthesisBean(synthesis);
            }
        } catch (Exception e){
            String err = "Error finding synthesis by sample ID: " + sampleId;
            throw new SynthesisException(err, e);
        }
        return synthesisBean;
    }



    public SynthesisMaterialBean findSynthesisMaterialById(Long sampleId, Long dataId) throws NoAccessException,SynthesisException{
        SynthesisMaterialBean smBean = null;
        try{
            SynthesisMaterial synthesisMaterial = synthesisHelper.findSynthesisMaterialById(sampleId, dataId);
            if (synthesisMaterial!=null){
                smBean = new SynthesisMaterialBean(synthesisMaterial);
            }

        } catch (NoAccessException e){
            throw e;
        } catch(Exception e){
            String err = "Problem finding the synthesis material entity by id: " + dataId;
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
        return smBean;
    }


    public SynthesisFunctionalizationBean findSynthesisFunctionalizationById(Long sampleId, Long dataId) throws NoAccessException,SynthesisException{
        SynthesisFunctionalizationBean sfBean = null;
        try {
            SynthesisFunctionalization synthesisFunctionalization = synthesisHelper.findSynthesisFunctionalizationById(sampleId, dataId);
            if (synthesisFunctionalization != null) {
                sfBean = new SynthesisFunctionalizationBean(synthesisFunctionalization);
            }

        } catch (NoAccessException e){
            throw e;
        } catch (Exception e) {
            String err = "Problem finding the synthesis functionalization entity by id: " + dataId;
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
        return sfBean;
    }


    public SynthesisPurificationBean findSynthesisPurificationById(Long sampleId, Long dataId) throws NoAccessException, SynthesisException{
        SynthesisPurificationBean spBean = null;
        try {
            SynthesisPurification synthesisPurification = synthesisHelper.findSynthesisPurificationById(sampleId, dataId);
            if (synthesisPurification != null) {
                spBean = new SynthesisPurificationBean(synthesisPurification);
            }

        } catch (NoAccessException e){
            throw e;
        } catch (Exception e) {
            String err = "Problem finding the synthesis functionalization entity by id: " + dataId;
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
        return spBean;
    }


    public void copyAndSaveSynthesisMaterial(SynthesisMaterialBean entityBean, SampleBean oldSampleBean, SampleBean[] newSampleBeans) throws SynthesisException, NoAccessException {
        try{
            for(SampleBean sampleBean:newSampleBeans){
                SynthesisMaterialBean copyBean = null;
                SynthesisMaterial copy = entityBean.getDomainCopy(SpringSecurityUtil.getLoggedInUserName());
                try{
                    copyBean = new SynthesisMaterialBean(copy);
                    for (FileBean fileBean : copyBean.getFiles()) {
                        fileUtils.updateClonedFileInfo(fileBean, oldSampleBean.getDomain().getName(),
                                sampleBean.getDomain().getName());
                    }
                } catch (Exception e){
                    String err = "Problem saving Synthesis Material";
                    logger.error(err, e);
                    throw new SynthesisException(err, e);
                }
                if(copyBean != null){
                    saveSynthesisMaterial(sampleBean, copyBean);
                }

            }
        } catch (NoAccessException e){
            throw e;
        } catch (Exception e){
            String err = "Problem saving Synthesis Material";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }

    }


    public void copyAndSaveSynthesisFunctionalization(SynthesisFunctionalizationBean entityBean, SampleBean oldSampleBean, SampleBean[] newSampleBeans) throws SynthesisException, NoAccessException {
        try{
            for(SampleBean sampleBean:newSampleBeans){
                SynthesisFunctionalizationBean copyBean = null;
                SynthesisFunctionalization copy = entityBean.getDomainCopy(SpringSecurityUtil.getLoggedInUserName());
                try{
                    copyBean = new SynthesisFunctionalizationBean(copy);
                    for (FileBean fileBean : copyBean.getFiles()) {
                        fileUtils.updateClonedFileInfo(fileBean, oldSampleBean.getDomain().getName(),
                                sampleBean.getDomain().getName());
                    }
                } catch (Exception e){
                    String err = "Problem saving Synthesis Functionalization";
                    logger.error(err, e);
                    throw new SynthesisException(err, e);
                }
                if(copyBean != null){
                    saveSynthesisFunctionalization(sampleBean, copyBean);
                }

            }
        } catch (NoAccessException e){
            throw e;
        } catch (Exception e){
            String err = "Problem saving Synthesis Functionalization";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }


    public void copyAndSaveSynthesisPurification(SynthesisPurificationBean entityBean, SampleBean oldSampleBean, SampleBean[] newSampleBeans) throws SynthesisException, NoAccessException {
        try{
            for(SampleBean sampleBean:newSampleBeans){
                SynthesisPurificationBean copyBean = null;
                SynthesisPurification copy = entityBean.getDomainCopy(SpringSecurityUtil.getLoggedInUserName(), true);
                try{
                    copyBean = new SynthesisPurificationBean(copy);
                    for (FileBean fileBean : copyBean.getFiles()) {
                        fileUtils.updateClonedFileInfo(fileBean, oldSampleBean.getDomain().getName(),
                                sampleBean.getDomain().getName());
                    }
                } catch (Exception e){
                    String err = "Problem saving Synthesis Purification";
                    logger.error(err, e);
                    throw new SynthesisException(err, e);
                }
                if(copyBean != null){
                    saveSynthesisPurification(sampleBean, copyBean);
                }

            }
        } catch (NoAccessException e){
            throw e;
        } catch (Exception e){
            String err = "Problem saving Synthesis Purification";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }


    public void deleteSynthesis(Synthesis synthesis) throws SynthesisException, NoAccessException {
        if (SpringSecurityUtil.getPrincipal() == null) {
            throw new NoAccessException();
        }
        Long sampleId = synthesis.getSample().getId();
        if(synthesis.getSynthesisPurifications() !=null){
            for(SynthesisPurification purification: synthesis.getSynthesisPurifications()){
                deleteSynthesisPurification(purification);
            }
        }
        synthesis.setSynthesisPurifications(null);

        if(synthesis.getSynthesisFunctionalizations()!=null){
            for(SynthesisFunctionalization functionalization:synthesis.getSynthesisFunctionalizations()){
                deleteSynthesisFunctionalization(functionalization);
            }
        }
        synthesis.setSynthesisFunctionalizations(null);

        if(synthesis.getSynthesisMaterials()!=null){
            for(SynthesisMaterial synthesisMaterial:synthesis.getSynthesisMaterials()){
                deleteSynthesisMaterial(sampleId, synthesisMaterial);
            }
        }
        synthesis.setSynthesisMaterials(null);

        try {
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
            appService.delete(synthesis);
        } catch (Exception e) {
            String err = "Problem deleting synthesis by id: " + synthesis.getId();
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }


    public void deleteSynthesisMaterial(Long sampleId, SynthesisMaterial synthesisMaterial) throws SynthesisException, NoAccessException {
        if (SpringSecurityUtil.getPrincipal() == null) {
            throw new NoAccessException();
        }
        try {
            //Delete attached files
            if(synthesisMaterial.getFiles()!= null){
                for(File file:synthesisMaterial.getFiles()){
                    deleteSynthesisMaterialFile(synthesisMaterial,file);
                }
            }

            //Delete attached material elements
            if(synthesisMaterial.getSynthesisMaterialElements() !=null){
                for(SynthesisMaterialElement element: synthesisMaterial.getSynthesisMaterialElements()){
                    deleteSynthesisMaterialElement(sampleId, synthesisMaterial,element);
                }
            }


            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
            appService.delete(synthesisMaterial);
        } catch (Exception e) {
            String err = "Error deleting synthesis material " + synthesisMaterial.getId();
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    private void deleteSynthesisMaterialElement(Long sampleId, SynthesisMaterial synthesisMaterial, SynthesisMaterialElement element) throws NoAccessException, SynthesisException {
        if (SpringSecurityUtil.getPrincipal() == null) {
            throw new NoAccessException();
        }
        try{
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
            if(element.getFiles()!= null){
                for(File file:element.getFiles()){
                    deleteSynthesisMaterialElementFile(sampleId,element,file);
                }
            }
            appService.delete(element);
        }catch (Exception e){
            String err = "Error deleting synthesis material element " + element.getId();
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    private void deleteSynthesisMaterialElementFile(Long sampleId, SynthesisMaterialElement element, File file) throws SynthesisException {
        try{
            List<File> fileList = synthesisHelper.findFilesBySynMatElement(sampleId, element.getId(),"SynthesisMaterialElement");
        } catch (Exception e){
            String err = "Error deleting synthesis material element file " + element.getId();
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    private void deleteSynthesisMaterialFile(SynthesisMaterial synthesisMaterial, File file) throws NoAccessException, SynthesisException {
        if (SpringSecurityUtil.getPrincipal() == null) {
            throw new NoAccessException();
        }
        try {
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
//            // load files first
            List<File> fileList = synthesisHelper.findFilesByMaterialId(synthesisMaterial.getSynthesis().getSample().getId(),synthesisMaterial.getId(),"SynthesisMaterial");
            synthesisMaterial.setFiles(new HashSet<File>(fileList));
            synthesisMaterial.getFiles().remove(file);
            appService.saveOrUpdate(synthesisMaterial);


        } catch (Exception e) {
            String err = "Error deleting synthesis material  file " + file.getUri();
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }


    public void deleteSynthesisFunctionalization(SynthesisFunctionalization synthesisFunctionalization) throws SynthesisException, NoAccessException {
        if (SpringSecurityUtil.getPrincipal() == null) {
            throw new NoAccessException();
        }
        try {
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
            appService.delete(synthesisFunctionalization);
        } catch (Exception e) {
            String err = "Error deleting synthesis material " + synthesisFunctionalization.getId();
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }


    public void deleteSynthesisPurification(SynthesisPurification synthesisPurification) throws SynthesisException,
            NoAccessException {
        if (SpringSecurityUtil.getPrincipal() == null) {
            throw new NoAccessException();
        }
        try {
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
            appService.delete(synthesisPurification);
        } catch (Exception e) {
            String err = "Error deleting synthesis material " + synthesisPurification.getId();
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }


    public void saveSynthesisMaterial(SampleBean sampleBean, SynthesisMaterialBean synthesisMaterialBean) throws SynthesisException, NoAccessException {
        if (SpringSecurityUtil.getPrincipal() == null) {
            throw new NoAccessException();
        }
        try{
            Sample sample = sampleBean.getDomain();
            if (!springSecurityAclService.currentUserHasWritePermission(sample.getId(),
                    SecureClassesEnum.SAMPLE.getClazz())) {
                throw new NoAccessException();
            }
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
            SynthesisMaterial synthesisMaterial = synthesisMaterialBean.getDomainEntity();
            Boolean newEntity=true;
            Boolean newSynthesis= true;
            if (synthesisMaterial.getId() != null) {
                newEntity = false;
            }
            //Make doubly sure that the entity hasn't been left cached in memory but already removed from database
            try {
                synthesisMaterial = (SynthesisMaterial) appService
                        .load(SynthesisMaterial.class, synthesisMaterial.getId());
            }catch (Exception e) {
                String err = "Object doesn't exist in the database anymore.  Please log in again.";
                logger.error(err);
                throw new SynthesisException(err, e);
            }
            if (sample.getSynthesis()!=null){
//TODO  FINISH this method
            }


        }catch (NoAccessException e){
            throw e;
        } catch (Exception e){
            String err = "Problem saving Synthesis Material";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }


    public void saveSynthesisFunctionalization(SampleBean sampleBean, SynthesisFunctionalizationBean synthesisFunctionalizationBean) throws SynthesisException, NoAccessException {
//TODO write
    }


    public void saveSynthesisPurification(SampleBean sampleBean, SynthesisPurificationBean synthesisPurificationBean) throws SynthesisException, NoAccessException {
//TODO write
    }


}
