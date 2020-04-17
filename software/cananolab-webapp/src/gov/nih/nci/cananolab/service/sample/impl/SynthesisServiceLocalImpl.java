package gov.nih.nci.cananolab.service.sample.impl;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.common.PurityDatum;
import gov.nih.nci.cananolab.domain.common.Supplier;
import gov.nih.nci.cananolab.domain.particle.*;
import gov.nih.nci.cananolab.dto.common.FileBean;

import gov.nih.nci.cananolab.dto.particle.SampleBean;


import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationElementBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialElementBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurificationBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurityBean;
import gov.nih.nci.cananolab.exception.CompositionException;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.exception.PointOfContactException;
import gov.nih.nci.cananolab.exception.SampleException;
import gov.nih.nci.cananolab.exception.SynthesisException;
import gov.nih.nci.cananolab.security.enums.SecureClassesEnum;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;
import gov.nih.nci.cananolab.service.BaseServiceLocalImpl;
import gov.nih.nci.cananolab.service.sample.SynthesisService;
import gov.nih.nci.cananolab.service.sample.helper.SynthesisHelper;
import gov.nih.nci.cananolab.system.applicationservice.ApplicationException;
import gov.nih.nci.cananolab.system.applicationservice.CaNanoLabApplicationService;
import gov.nih.nci.cananolab.system.applicationservice.client.ApplicationServiceProvider;
import gov.nih.nci.cananolab.system.query.hibernate.HQLCriteria;
import gov.nih.nci.cananolab.util.Comparators;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.SortedSet;
import java.util.TreeSet;
import net.sf.ehcache.management.sampled.SampledEhcacheMBeans;
import net.sf.ehcache.management.sampled.SampledMBeanRegistrationProvider;
import org.apache.log4j.Logger;
import org.bouncycastle.util.test.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.security.access.method.P;
import org.springframework.stereotype.Component;
import sun.tools.tree.ThisExpression;

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

    public Long findSynthesisIdBySampleId(Long sampleId) throws SynthesisException{
        try{
            Synthesis synthesis = synthesisHelper.findSynthesisBySampleId(sampleId);
            if(synthesis!=null){
                return synthesis.getId();
            }
        } catch (Exception e){
            String err = "Error finding synthesis by sample ID: " + sampleId;
            throw new SynthesisException(err, e);
        }
        return null;
    }

    public SynthesisMaterialBean findSynthesisMaterialById(Long sampleId, Long dataId) throws NoAccessException,SynthesisException{
        SynthesisMaterialBean smBean = null;
        try{
            SynthesisMaterial synthesisMaterial = synthesisHelper.findSynthesisMaterialById(sampleId, dataId);
            //Add parent object to domain
            Synthesis synthesis;
            try{
                synthesis = getHelper().findSynthesisBySampleId(sampleId);
                synthesisMaterial.setSynthesis(synthesis);

            }
            catch (Exception e) {
                e.printStackTrace();
                logger.error(e);
            }
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
                deleteSynthesisPurification(sampleId, purification);
            }
        }
        synthesis.setSynthesisPurifications(null);

        if(synthesis.getSynthesisFunctionalizations()!=null){
            for(SynthesisFunctionalization functionalization:synthesis.getSynthesisFunctionalizations()){
                deleteSynthesisFunctionalization(sampleId,functionalization);
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
            if(synthesisMaterial.getFileCollection()!= null){
                for(File file:synthesisMaterial.getFileCollection()){
                    deleteSynthesisMaterialFile(synthesisMaterial,file);
                }
            }

            //Delete attached material elements
            if(synthesisMaterial.getSynthesisMaterialElements() !=null){
                for(SynthesisMaterialElement element: synthesisMaterial.getSynthesisMaterialElements()){
                    deleteSynthesisMaterialElement(sampleId, synthesisMaterial,element);
                }
            }

            //refresh the SynthesisMaterial object with the dependents removed
            SynthesisMaterial tempMat = synthesisHelper.findSynthesisMaterialById(sampleId, synthesisMaterial.getId());
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
//            appService.delete(synthesisMaterial);
            appService.delete(tempMat);
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
            if(element.getSmeInherentFunctions()!=null){
                for(SmeInherentFunction function: element.getSmeInherentFunctions()){
                    deleteSmeInherentFunction(sampleId, element, function);
                }
            }
            appService.delete(element);
        }catch (Exception e){
            String err = "Error deleting synthesis material element " + element.getId();
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    private void deleteSmeInherentFunction(Long sampleId, SynthesisMaterialElement element, SmeInherentFunction function)throws SynthesisException {
        try {
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
            List<SmeInherentFunction> functionList = synthesisHelper.findSmeFunctionByElementId(sampleId, element.getId(),"SynthesisMaterialElement");
            element.setSmeInherentFunctions(new HashSet<SmeInherentFunction>(functionList));
            element.getSmeInherentFunctions().remove(function);
            appService.delete(function);

        }catch (Exception e){
            String err = "Error deleting SME Inherent Function " + element.getId();
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    private void deleteSynthesisMaterialElementFile(Long sampleId, SynthesisMaterialElement element, File file) throws SynthesisException {
        try{
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
            List<File> fileList = synthesisHelper.findFilesBySynMatElement(sampleId, element.getId(),"SynthesisMaterialElement");
            element.setFiles(new HashSet<File>(fileList));
            element.getFiles().remove(file);
            appService.saveOrUpdate(element);
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
            List<File> fileList = synthesisHelper.findFilesByMaterialId(synthesisMaterial.getSynthesisId(),synthesisMaterial.getId(),"SynthesisMaterial");
            synthesisMaterial.setFileCollection(new HashSet<File>(fileList));
            synthesisMaterial.getFileCollection().remove(file);
            appService.saveOrUpdate(synthesisMaterial);


        } catch (Exception e) {
            String err = "Error deleting synthesis material  file " + file.getUri();
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }


    // TODO
        public void deleteSynthesisFunctionalization(Long sampleId, SynthesisFunctionalization synthesisFunctionalization) throws SynthesisException, NoAccessException {
/*

            if (SpringSecurityUtil.getPrincipal() == null) {
                throw new NoAccessException();
            }
            try {
                //Delete attached files
                if(synthesisFunctionalization.getFileCollection()!= null){
                    for(File file:synthesisFunctionalization.getFileCollection()){
                        deleteSynthesisFunctionalizationFile(synthesisFunctionalization,file);
                    }
                }

                //Delete attached functionalization elements
                if(synthesisFunctionalization.getSynthesisFunctionalizationElements() !=null){
                    for(SynthesisFunctionalizationElement element: synthesisFunctionalization.getSynthesisFunctionalizationElements()){
                        deleteSynthesisFunctionalizationElement(sampleId, synthesisFunctionalization,element);
                    }
                }


                CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                        .getApplicationService();
                appService.delete(synthesisFunctionalization);
            } catch (Exception e) {
                String err = "Error deleting synthesis functionalization " + synthesisFunctionalization.getId();
                logger.error(err, e);
                throw new SynthesisException(err, e);
            }

*/
        }



        public void deleteSynthesisPurification(Long sampleId, SynthesisPurification synthesisPurification) throws SynthesisException,
            NoAccessException {
        if (SpringSecurityUtil.getPrincipal() == null) {
            throw new NoAccessException();
        }
        try {


            //Delete attached material elements
            if(synthesisPurification.getPurities() !=null){
                for(SynthesisPurity element: synthesisPurification.getPurities()){
                    deleteSynthesisPurity(sampleId, synthesisPurification,element);
                }
            }


            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
            appService.delete(synthesisPurification);
        } catch (Exception e) {
            String err = "Error deleting synthesis material " + synthesisPurification.getId();
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    private void deleteSynthesisPurity(Long sampleId, SynthesisPurification synthesisPurification, SynthesisPurity element) {
        //TODO write
        if (element.getFiles()!=null){
            for(File file:element.getFiles()){
                deleteSynthesisPurityFile(element,file);
            }

        }
        if(element.getPurityDatumCollection()!=null){
            //delete datum
            for(PurityDatum purityDatum:element.getPurityDatumCollection()){
                deletePurityDatum(sampleId, element, purityDatum);
            }

        }

    }

    private void deletePurityDatum(Long sampleId, SynthesisPurity element, PurityDatum purityDatum) {
        //TODO write
        
    }

    private void deleteSynthesisPurityFile(SynthesisPurity element, File file) {
        //TODO write

    }


    public void saveSynthesisMaterial(SampleBean sampleBean, SynthesisMaterialBean synthesisMaterialBean) throws SynthesisException, NoAccessException {
        //TODO reduce dependence on synthesis opbject, rely on synthesisId instead
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
            //Check if this is a new material or an update of an existing
            if (synthesisMaterial.getId() != null) {
                newEntity = false;
            }
            //Make doubly sure that the entity hasn't been left cached in memory but already removed from database
            if(!newEntity){
            try {
                appService
                        .load(SynthesisMaterial.class, synthesisMaterialBean.getDomainEntity().getId());
            }catch (Exception e) {
                String err = "Object doesn't exist in the database anymore.  Please log in again.";
                logger.error(err);
                throw new SynthesisException(err, e);
            }}


            Synthesis synthesis;
            if(sample.getSynthesis()==null){
                //This is a new synthesis.  We need to create it, as well as the material
                synthesis = createSynthesis(sampleBean);
            } else {
                synthesis = sample.getSynthesis();
            }
//            synthesisMaterial.setSynthesis(synthesis);
            synthesisMaterial.setSynthesisId(synthesis.getId());
            if(!newEntity){
                //Get the material by id from database
//                Long test1 = synthesisMaterial.getSynthesis().getId();
                Long test1 = synthesisMaterial.getSynthesisId();
                Long test2 = synthesis.getId();
                if(!synthesisMaterial.getSynthesisId().equals(synthesis.getId())){
                    //something has gone wrong and the material does not attach to the correct synthesis
                    throw new SynthesisException("material does not match synthesis", new Exception());
                }

            }
                //We'll be adding or updating the material in Synthesis

                    //add material to synthesis

                    for(FileBean fileBean:synthesisMaterialBean.getFiles()){
                        fileUtils.prepareSaveFile(fileBean.getDomainFile());
                    }
                    //save

            for(SynthesisMaterialElementBean synthesisMaterialElementBean: synthesisMaterialBean.getSynthesisMaterialElements()){
                //check the if there is a new Supplier
                if(synthesisMaterialElementBean.getSupplier()!= null && synthesisMaterialElementBean.getSupplier().getId()==null){
                    Supplier supplier = createSupplierRecord(synthesisMaterialElementBean.getSupplier());
                    synthesisMaterialElementBean.getDomainEntity().setSupplier(supplier);
                } else if(synthesisMaterialElementBean.getSupplier()!=null){
                    appService.saveOrUpdate(synthesisMaterialElementBean.getSupplier());
                }

            }

                    appService.saveOrUpdate(synthesisMaterial);

            for(SynthesisMaterialElementBean synthesisMaterialElementBean: synthesisMaterialBean.getSynthesisMaterialElements()){
                this.saveSynthesisMaterialElement(synthesisMaterial,synthesisMaterialElementBean);
            }
                    for (FileBean fileBean : synthesisMaterialBean.getFiles()) {
                        fileUtils.writeFile(fileBean);
                    }

        }catch (NoAccessException e) {
            String err="Error writing file when saving Synthesis Material. ";
            logger.error(err, e);
            throw new SynthesisException(err, e);

        }catch ( DataIntegrityViolationException e) {
            String err="Database Integrity violation when saving Synthesis Material. ";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        } catch (Exception e){
            String err = "Problem saving Synthesis Material :";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }


    public void saveSynthesisMaterialElement(SynthesisMaterial material, SynthesisMaterialElementBean synthesisMaterialElementBean) throws SynthesisException {
//TODO reduce dependence on synthesisMaterial object, rely on synthesisMaterialId instead
        try {
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
            SynthesisMaterialElement synthesisMaterialElement = synthesisMaterialElementBean.getDomainEntity();
            Boolean newEntity=true;
            if(synthesisMaterialElement.getId()!=null){
                newEntity=false;
            }

            if(!newEntity){
                //Get the material by id from database
                Long test1 = synthesisMaterialElement.getSynthesisMaterialId();
                Long test2 = material.getId();
                if(!test1.equals(test2)){
                    //something has gone wrong and the material does not attach to the correct synthesis
                    throw new SynthesisException("element does not match material", new Exception());
                }

            try {
                appService
                        .load(SynthesisMaterialElement.class, synthesisMaterialElementBean.getDomainEntity().getId());
            }catch (Exception e) {
                String err = "Object doesn't exist in the database anymore.  Please log in again.";
                logger.error(err);
                throw new SynthesisException(err, e);
            }}

            for(FileBean fileBean:synthesisMaterialElementBean.getFiles()){
                fileUtils.prepareSaveFile(fileBean.getDomainFile());
            }

            //check if this is a new supplier (has no id). Create if needed
            if(synthesisMaterialElement.getSupplier()!= null && synthesisMaterialElement.getSupplier().getId()==null){
                Supplier supplier = createSupplierRecord(synthesisMaterialElement.getSupplier());
                synthesisMaterialElement.setSupplier(supplier);
            }
            //TODO what will this do if there is no change
            appService.saveOrUpdate(synthesisMaterialElement);

            for (FileBean fileBean : synthesisMaterialElementBean.getFiles()) {
                fileUtils.writeFile(fileBean);
            }
        }
        catch (Exception e) {
            String err = "Problem saving Synthesis Material Element ";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    public void saveSynthesisFunctionalization(SampleBean sampleBean, SynthesisFunctionalizationBean synthesisFunctionalizationBean) throws SynthesisException, NoAccessException {
        //TODO reduce dependence on synthesis opbject, rely on synthesisId instead
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
            SynthesisFunctionalization synthesisFunctionalization = synthesisFunctionalizationBean.getDomainEntity();
            Boolean newEntity=true;
            Boolean newSynthesis= true;
            //Check if this is a new functionalization or an update of an existing
            if (synthesisFunctionalization.getId() != null) {
                newEntity = false;
            }
            //Make doubly sure that the entity hasn't been left cached in memory but already removed from database
            try {
                appService
                        .load(SynthesisFunctionalization.class, synthesisFunctionalizationBean.getDomainEntity().getId());
            }catch (Exception e) {
                String err = "Object doesn't exist in the database anymore.  Please log in again.";
                logger.error(err);
                throw new SynthesisException(err, e);
            }

            Synthesis synthesis;
            if(sample.getSynthesis()==null){
                //This is a new synthesis.  We need to create it, as well as the functionalization
                synthesis = createSynthesis(sampleBean);
            } else {
                synthesis = sample.getSynthesis();
            }
            synthesisFunctionalization.setSynthesis(synthesis);

            if(!newEntity){
                //Get the functionalization by id from database
                Long test1 = synthesisFunctionalization.getSynthesis().getId();
                Long test2 = synthesis.getId();
                if(!synthesisFunctionalization.getSynthesis().getId().equals(synthesis.getId())){
                    //something has gone wrong and the functionalization does not attach to the correct synthesis
                    throw new SynthesisException("functionalization does not match synthesis", new Exception());
                }

            }
                //We'll be adding or updating the functionalization in Synthesis

                    //add functionalization to synthesis

                    for(FileBean fileBean:synthesisFunctionalizationBean.getFiles()){
                        fileUtils.prepareSaveFile(fileBean.getDomainFile());
                    }
                    //save

            for(SynthesisFunctionalizationElementBean synthesisFunctionalizationElementBean: synthesisFunctionalizationBean.getSynthesisFunctionalizationElements()){
                this.saveSynthesisFunctionalizationElement(synthesisFunctionalization,synthesisFunctionalizationElementBean);
            }
                    appService.saveOrUpdate(synthesisFunctionalization);

                    for (FileBean fileBean : synthesisFunctionalizationBean.getFiles()) {
                        fileUtils.writeFile(fileBean);
                    }

        }catch (NoAccessException e){
            throw e;
        } catch (Exception e){
            String err = "Problem saving Synthesis Functionalization ";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    public void saveSynthesisFunctionalizationElement(SynthesisFunctionalization functionalization, SynthesisFunctionalizationElementBean synthesisFunctionalizationElementBean) throws SynthesisException {
        try {
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
            SynthesisFunctionalizationElement synthesisFunctionalizationElement = synthesisFunctionalizationElementBean.getDomainEntity();
            Boolean newEntity=true;
            if(synthesisFunctionalizationElement.getId()!=null){
                newEntity=false;
            }

            if(!newEntity){
                //Get the functionalization by id from database
                Long test1 = synthesisFunctionalizationElement.getSynthesisFunctionalization().getId();
                Long test2 = functionalization.getId();
                if(!test1.equals(test2)){
                    //something has gone wrong and the functionalization does not attach to the correct synthesis
                    throw new SynthesisException("element does not match functionalization", new Exception());
                }

            try {
                appService
                        .load(SynthesisFunctionalizationElement.class, synthesisFunctionalizationElementBean.getDomainEntity().getId());
            }catch (Exception e) {
                String err = "Object doesn't exist in the database anymore.  Please log in again.";
                logger.error(err);
                throw new SynthesisException(err, e);
            }}

            for(FileBean fileBean:synthesisFunctionalizationElementBean.getFiles()){
                fileUtils.prepareSaveFile(fileBean.getDomainFile());
            }
            //TODO what will this do if there is no change
            appService.saveOrUpdate(synthesisFunctionalizationElement);

            for (FileBean fileBean : synthesisFunctionalizationElementBean.getFiles()) {
                fileUtils.writeFile(fileBean);
            }
        }
        catch (Exception e) {
            String err = "Problem saving Synthesis Functionalization Element ";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }


    public void saveSynthesisFunctionalization00(SampleBean sampleBean, SynthesisFunctionalizationBean synthesisFunctionalizationBean) throws SynthesisException, NoAccessException {
        if (SpringSecurityUtil.getPrincipal() == null) {
            throw new NoAccessException();
        }
        try {
            Sample sample = sampleBean.getDomain();
            if (!springSecurityAclService.currentUserHasWritePermission(sample.getId(),
                    SecureClassesEnum.SAMPLE.getClazz())) {
                throw new NoAccessException();
            }
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
            SynthesisFunctionalization synthesisFunctionalization = synthesisFunctionalizationBean.getDomainEntity();
            Boolean newEntity = true;
            Boolean newSynthesis = true;
            //Check if this is a new functionalization or an update of an existing
            if (synthesisFunctionalization.getId() != null) {
                newEntity = false;
            }
            //Make doubly sure that the entity hasn't been left cached in memory but already removed from database
            try {
                appService
                        .load(SynthesisFunctionalization.class, synthesisFunctionalizationBean.getDomainEntity().getId());
            } catch (Exception e) {
                String err = "Object doesn't exist in the database anymore.  Please log in again.";
                logger.error(err);
                throw new SynthesisException(err, e);
            }

            Synthesis synthesis;
            if (sample.getSynthesis() == null) {
                //This is a new synthesis.  We need to create it, as well as the functionalization
                synthesis = createSynthesis(sampleBean);
            } else {
                synthesis = sample.getSynthesis();
            }

            if (!newEntity) {
                //Get the functionalization by id from database
                Long test1 = synthesisFunctionalization.getSynthesis().getId();
                Long test2 = synthesis.getId();
                if (!synthesisFunctionalization.getSynthesis().getId().equals(synthesis.getId())) {
                    //something has gone wrong and the functionalization does not attach to the correct synthesis
                    throw new SynthesisException("functionalization does not match synthesis", new Exception());
                }

            }
            //We'll be adding or updating the functionalization in Synthesis

            //add functionalization to synthesisF
            synthesisFunctionalization.setSynthesis(synthesis);
            for (FileBean fileBean : synthesisFunctionalizationBean.getFiles()) {
                fileUtils.prepareSaveFile(fileBean.getDomainFile());
            }

            //save
            for(SynthesisFunctionalizationElementBean synthesisFunctionalizationElementBean: synthesisFunctionalizationBean.getSynthesisFunctionalizationElements()){
                this.saveSynthesisFunctionalizationElement(synthesisFunctionalization,synthesisFunctionalizationElementBean);
            }

            appService.saveOrUpdate(synthesisFunctionalization);

            for (FileBean fileBean : synthesisFunctionalizationBean.getFiles()) {
                fileUtils.writeFile(fileBean);
            }

        } catch (NoAccessException e) {
            throw e;
        } catch (Exception e) {
            String err = "Problem saving Synthesis Functionalization";
            logger.error(err, e);
            throw new SynthesisException(err, e);

        }

    }

    public void saveSynthesisFunctionalizationElement00(SynthesisFunctionalization functionalization, SynthesisFunctionalizationElementBean synthesisFunctionalizationElementBean) throws SynthesisException {
        try {
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
            SynthesisFunctionalizationElement synthesisFunctionalizationElement = synthesisFunctionalizationElementBean.getDomainEntity();
            Boolean newEntity=true;
            if(synthesisFunctionalizationElement.getId()!=null){
                newEntity=false;
            }

            if(!newEntity){
                //Get the functionalization by id from database
                Long test1 = synthesisFunctionalizationElement.getSynthesisFunctionalization().getId();
                Long test2 = functionalization.getId();
                if(!test1.equals(test2)){
                    //something has gone wrong and the functionalization does not attach to the correct synthesis
                    throw new SynthesisException("element does not match functionalization", new Exception());
                }



                try {
                    appService
                            .load(SynthesisFunctionalizationElement.class, synthesisFunctionalizationElementBean.getDomainEntity().getId());
                }catch (Exception e) {
                    String err = "Object doesn't exist in the database anymore.  Please log in again.";
                    logger.error(err);
                    throw new SynthesisException(err, e);
                }}

            for(FileBean fileBean:synthesisFunctionalizationElementBean.getFiles()){
                fileUtils.prepareSaveFile(fileBean.getDomainFile());
            }
            //TODO what will this do if there is no change
            appService.saveOrUpdate(synthesisFunctionalizationElement);

            for (FileBean fileBean : synthesisFunctionalizationElementBean.getFiles()) {
                fileUtils.writeFile(fileBean);
            }
        }
        catch (Exception e) {
            String err = "Problem saving Synthesis Functionalization Element ";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }


    public void saveSynthesisPurification(SampleBean sampleBean, SynthesisPurificationBean synthesisPurificationBean) throws SynthesisException, NoAccessException {
//TODO write
        try{
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
            SynthesisPurification synthesisPurification = synthesisPurificationBean.getDomainEntity();
            Boolean newEntity=true;
            Boolean newSynthesis= true;
            if(synthesisPurification.getId()!=null){
                newEntity=false;
            }
            Sample sample = sampleBean.getDomain();
            if (!springSecurityAclService.currentUserHasWritePermission(sample.getId(),
                    SecureClassesEnum.SAMPLE.getClazz())) {
                throw new NoAccessException();
            }
            try {
                appService
                        .load(SynthesisPurification.class, synthesisPurificationBean.getDomainEntity().getId());
            }catch (Exception e) {
                String err = "Object doesn't exist in the database anymore.  Please log in again.";
                logger.error(err);
                throw new SynthesisException(err, e);
            }

            Synthesis synthesis;
            if(sample.getSynthesis()==null){
                //This is a new synthesis.  We need to create it, as well as the material
                synthesis = createSynthesis(sampleBean);
            } else {
                synthesis = sample.getSynthesis();
            }

            if(!newEntity){
                //Get the material by id from database
                Long test1 = synthesisPurification.getId();
                Long test2 = synthesis.getId();
                if(!synthesisPurification.getSynthesisId().equals(synthesis.getId())){
                    //something has gone wrong and the material does not attach to the correct synthesis
                    throw new SynthesisException("material does not match synthesis", new Exception());
                }

            } else {
                synthesisPurification.setSynthesisId(synthesis.getId());
            }

            for(FileBean fileBean:synthesisPurificationBean.getFiles()){
                fileUtils.prepareSaveFile(fileBean.getDomainFile());
            }

            for(SynthesisPurityBean synthesisPurityBean: synthesisPurificationBean.getPurityBeans()){
                this.saveSynthesisPurity(synthesisPurityBean,synthesisPurificationBean);
            }

            appService.saveOrUpdate(synthesisPurification);

            for (FileBean fileBean : synthesisPurificationBean.getFiles()) {
                fileUtils.writeFile(fileBean);
            }

        } catch(ApplicationException e){
            logger.error("Problem saving synthesis purification ", e);
            throw new SynthesisException("Error in saving synthesis purification ", e );
        }
        catch (Exception e) {
            logger.error("Problem saving synthesis purification ", e);
            throw new SynthesisException("Error in saving synthesis purification ",e );
        }
    }

    public void saveSynthesisPurity(SynthesisPurityBean synthesisPurityBean, SynthesisPurificationBean synthesisPurificationBean) throws SynthesisException {

        try {
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
            SynthesisPurity synthesisPurity = synthesisPurityBean.getDomain();
            Boolean newEntity=true;
            if(synthesisPurity.getId()!=null){
                newEntity=false;
            }

            if(!newEntity){
                //Get the material by id from database
                Long test1 = synthesisPurity.getSynthesisPurificationId();
                Long test2 = synthesisPurificationBean.getDomainEntity().getId();
                if(!test1.equals(test2)){
                    //something has gone wrong and the material does not attach to the correct synthesis
                    throw new SynthesisException("element does not match material", new Exception());
                }

                try {
                    appService
                            .load(SynthesisMaterialElement.class, synthesisPurificationBean.getDomainEntity().getId());
                }catch (Exception e) {
                    String err = "Object doesn't exist in the database anymore.  Please log in again.";
                    logger.error(err);
                    throw new SynthesisException(err, e);
                }}

            for(FileBean fileBean:synthesisPurityBean.getFiles()){
                fileUtils.prepareSaveFile(fileBean.getDomainFile());
            }
            //TODO what will this do if there is no change
            appService.saveOrUpdate(synthesisPurity);

            for (FileBean fileBean : synthesisPurityBean.getFiles()) {
                fileUtils.writeFile(fileBean);
            }
        }
        catch (Exception e) {
            String err = "Problem saving Synthesis Material Element ";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    private Synthesis createSynthesis(SampleBean sampleBean) throws SynthesisException, NoAccessException {

        try {
            Synthesis synthesis = new Synthesis();
            synthesis.setSample(sampleBean.getDomain());

            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();

            appService.saveOrUpdate(synthesis);
            // save default access
            springSecurityAclService.saveDefaultAccessForNewObject(synthesis.getId(), SecureClassesEnum.SYNTHESIS.getClazz());

            return synthesis;
        }
        catch (ApplicationException e) {
            logger.error("Error in saving the synthesis. ", e);
            throw new SynthesisException("Error in saving the synthesis. ", e);
        }
        catch (NoAccessException e) {
            logger.error("User does not have access to edit synthesis ", e);
            throw e;
        }
        catch (Exception e) {
            logger.error("Error in saving the synthesis. ", e);
            throw new SynthesisException("Error in saving the synthesis. ", e);
        }
    }

    public int getNumberOfSuppliers() throws Exception {
        CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
        HQLCriteria crit = new HQLCriteria("select id from gov.nih.nci.cananolab.domain.common.Supplier");
        List results = appService.query(crit);
        int cnt = 0;
        for (int i = 0; i< results.size();i++){
            cnt++;
        }
        return cnt;
    }

    private Supplier createSupplierRecord(HashMap<String,String> supplierMap) throws SynthesisException {
        Supplier supplier = new Supplier();
        supplier.setLot(supplierMap.get("Lot"));
        supplier.setSupplierName(supplierMap.get("supplierMap"));
        return createSupplierRecord(supplier);
    }

    public Supplier createSupplierRecord(Supplier supplier) throws SynthesisException {
        try {
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
            appService.saveOrUpdate(supplier);
            return supplier;
        }
        catch (Exception e) {
            String err = "Problem saving new Supplier ";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

//    public SortedSet<String> getSupplierNames() throws Exception
//    {
//        try {
//            SortedSet<String> names = new TreeSet<String>(new Comparators.SortableNameComparator());
//            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
//            HQLCriteria crit = new HQLCriteria("select org.name from gov.nih.nci.cananolab.domain.common.Organization org");
//            List results = appService.query(crit);
//
//            logger.debug("Completed select org.name from gov.nih.nci.cananolab.domain.common.Organization org");
//            for (int i = 0; i < results.size(); i++){
//                String name = ((String) results.get(i)).trim();
//                names.add(name);
//            }
//            return names;
//        } catch (Exception e) {
//            String err = "Error finding suppliers for " + SpringSecurityUtil.getLoggedInUserName();
//            logger.error(err, e);
//            throw new SynthesisException(err, e);
//        }
//    }

    public List<String> getSupplierNames() throws SynthesisException {
        try {
            return synthesisHelper.getAllSupplierNames();
        }
        catch (Exception e) {
            String err = "Error finding suppliers ";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }



}
