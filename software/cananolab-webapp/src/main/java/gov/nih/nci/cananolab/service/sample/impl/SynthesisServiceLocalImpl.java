package gov.nih.nci.cananolab.service.sample.impl;


import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.common.Instrument;
import gov.nih.nci.cananolab.domain.common.PurificationConfig;
import gov.nih.nci.cananolab.domain.common.PurityColumnHeader;

import gov.nih.nci.cananolab.domain.common.PurityDatumCondition;
import gov.nih.nci.cananolab.domain.common.Supplier;


import gov.nih.nci.cananolab.domain.common.Technique;

import gov.nih.nci.cananolab.domain.particle.Sample;
import gov.nih.nci.cananolab.domain.particle.SfeInherentFunction;
import gov.nih.nci.cananolab.domain.particle.SmeInherentFunction;
import gov.nih.nci.cananolab.domain.particle.Synthesis;
import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalization;
import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalizationElement;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterial;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterialElement;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurification;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurity;
import gov.nih.nci.cananolab.dto.common.ColumnHeader;
import gov.nih.nci.cananolab.dto.common.FileBean;


import gov.nih.nci.cananolab.dto.common.PurityRow;
import gov.nih.nci.cananolab.dto.common.table.PurityTableCell;
import gov.nih.nci.cananolab.dto.particle.SampleBean;


import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationElementBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialElementBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurificationBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurityBean;

import gov.nih.nci.cananolab.exception.ApplicationProviderException;
import gov.nih.nci.cananolab.exception.NoAccessException;

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

import gov.nih.nci.cananolab.util.Constants;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.apache.logging.log4j.Logger;
import org.hibernate.StaleStateException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;

import org.springframework.orm.hibernate5.HibernateOptimisticLockingFailureException;
import org.springframework.stereotype.Component;


@Component("synthesisService")
public class SynthesisServiceLocalImpl extends BaseServiceLocalImpl implements SynthesisService {
    private static Logger logger = org.apache.logging.log4j.LogManager.getLogger(SynthesisServiceLocalImpl.class);

    @Autowired
    private SynthesisHelper synthesisHelper;

    @Autowired
    private SpringSecurityAclService springSecurityAclService;

    public void copyAndSaveSynthesisFunctionalization(SynthesisFunctionalizationBean entityBean,
                                                      SampleBean oldSampleBean, SampleBean[] newSampleBeans) throws SynthesisException, NoAccessException {
        try {
            for (SampleBean sampleBean : newSampleBeans) {
                SynthesisFunctionalizationBean copyBean ;
                SynthesisFunctionalization copy = entityBean.getDomainCopy(SpringSecurityUtil.getLoggedInUserName());
                try {
                    copyBean = new SynthesisFunctionalizationBean(copy);
                    for (FileBean fileBean : copyBean.getFiles()) {
                        fileUtils.updateClonedFileInfo(fileBean, oldSampleBean.getDomain().getName(),
                                sampleBean.getDomain().getName());
                    }
                }
                catch (Exception e) {
                    String err = "Problem saving Synthesis Functionalization";
                    logger.error(err, e);
                    throw new SynthesisException(err, e);
                }
                if (copyBean != null) {
                    saveSynthesisFunctionalization(sampleBean, copyBean);
                }

            }
        }
        catch (NoAccessException e) {
            throw e;
        }
        catch (Exception e) {
            String err = "Problem saving Synthesis Functionalization";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    public void copyAndSaveSynthesisMaterial(SynthesisMaterialBean entityBean, SampleBean oldSampleBean,
                                             SampleBean[] newSampleBeans) throws SynthesisException, NoAccessException {
        try {
            for (SampleBean sampleBean : newSampleBeans) {
                SynthesisMaterialBean copyBean ;
                SynthesisMaterial copy = entityBean.getDomainCopy(SpringSecurityUtil.getLoggedInUserName());
                try {
                    copyBean = new SynthesisMaterialBean(copy);
                    for (FileBean fileBean : copyBean.getFiles()) {
                        fileUtils.updateClonedFileInfo(fileBean, oldSampleBean.getDomain().getName(),
                                sampleBean.getDomain().getName());
                    }
                }
                catch (Exception e) {
                    String err = "Problem saving Synthesis Material";
                    logger.error(err, e);
                    throw new SynthesisException(err, e);
                }
                if (copyBean != null) {
                    saveSynthesisMaterial(sampleBean, copyBean);
                }

            }
        }
        catch (NoAccessException e) {
            throw e;
        }
        catch (Exception e) {
            String err = "Problem saving Synthesis Material";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }

    }

    public void copyAndSaveSynthesisPurification(SynthesisPurificationBean entityBean, SampleBean oldSampleBean,
                                                 SampleBean[] newSampleBeans) throws SynthesisException,
            NoAccessException {
        try {
            for (SampleBean sampleBean : newSampleBeans) {
                SynthesisPurificationBean copyBean ;
                SynthesisPurification copy = entityBean.getDomainCopy(SpringSecurityUtil.getLoggedInUserName(), true);
                try {
                    copyBean = new SynthesisPurificationBean(copy);
                    for (FileBean fileBean : copyBean.getFiles()) {
                        fileUtils.updateClonedFileInfo(fileBean, oldSampleBean.getDomain().getName(),
                                sampleBean.getDomain().getName());
                    }
                }
                catch (Exception e) {
                    String err = "Problem saving Synthesis Purification";
                    logger.error(err, e);
                    throw new SynthesisException(err, e);
                }
                if (copyBean != null) {
                    saveSynthesisPurification(sampleBean, copyBean);
                }

            }
        }
        catch (NoAccessException e) {
            throw e;
        }
        catch (Exception e) {
            String err = "Problem saving Synthesis Purification";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    public void deleteColumnHeader(PurityColumnHeader header) throws SynthesisException, NoAccessException {
        if (SpringSecurityUtil.getPrincipal() == null) {
            throw new NoAccessException();
        }
        try {
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
//            List<SmeInherentFunction> functionList = synthesisHelper.findSmeFunctionByElementId(sampleId, element
//            .getId(),"SynthesisMaterialElement");
//            element.setSmeInherentFunctions(new HashSet<SmeInherentFunction>(functionList));
//            element.getSmeInherentFunctions().remove(function);
            appService.delete(header);
        }
        catch (Exception e) {
            String err = "Error deleting purity column header " + header.getId();
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    public void deleteSynthesis(Synthesis synthesis) throws SynthesisException, NoAccessException {
        if (SpringSecurityUtil.getPrincipal() == null) {
            throw new NoAccessException();
        }
        Long sampleId = synthesis.getSample().getId();
        if (synthesis.getSynthesisPurifications() != null) {
            for (SynthesisPurification purification : synthesis.getSynthesisPurifications()) {
                deleteSynthesisPurification(sampleId, purification);
            }
        }
        synthesis.setSynthesisPurifications(null);

        if (synthesis.getSynthesisFunctionalizations() != null) {
            for (SynthesisFunctionalization functionalization : synthesis.getSynthesisFunctionalizations()) {
                deleteSynthesisFunctionalization(sampleId, functionalization);
            }
        }
        synthesis.setSynthesisFunctionalizations(null);

        if (synthesis.getSynthesisMaterials() != null) {
            for (SynthesisMaterial synthesisMaterial : synthesis.getSynthesisMaterials()) {
                deleteSynthesisMaterial(sampleId, synthesisMaterial);
            }
        }
        synthesis.setSynthesisMaterials(null);

        try {
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();

            appService.delete(synthesis);
        }
        catch (Exception e) {
            String err = "Problem deleting synthesis by id: " + synthesis.getId();
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }


    public List<String> deleteSynthesisFunctionalization(Long sampleId,
                                                         SynthesisFunctionalization synthesisFunctionalization) throws SynthesisException, NoAccessException {

        List<String> msgs = new ArrayList<String>();
            if (SpringSecurityUtil.getPrincipal() == null) {
                throw new NoAccessException();
            }
            try {
                //Delete attached files
                if(synthesisFunctionalization.getFiles()!= null){
                    for(File file:synthesisFunctionalization.getFiles()){
                        deleteSynthesisFunctionalizationFile(synthesisFunctionalization,file);
                    }
                }
                synthesisFunctionalization.setFiles(null);

                //Delete attached functionalization elements
                if(synthesisFunctionalization.getSynthesisFunctionalizationElements() !=null){
                    for(SynthesisFunctionalizationElement element: synthesisFunctionalization
                    .getSynthesisFunctionalizationElements()){
                        deleteSynthesisFunctionalizationElement(sampleId, synthesisFunctionalization,element);
                    }
                }
                synthesisFunctionalization.setSynthesisFunctionalizationElements(null);


                CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                        .getApplicationService();

                appService.delete(synthesisFunctionalization);
            } catch(StaleStateException e) {
                //row count error - is OK since we just deleted.
                //TODO
                msgs.add("Row count error on functionalization deletion");
                logger.info("Row count error on functionalization deletion");
            } catch(HibernateOptimisticLockingFailureException e){
                //TODO
                msgs.add("Row count error on functionalization deletion");
                logger.info("Row count error on functionalization deletion");
            }

            catch (Exception e) {
                String err = "Error deleting synthesis functionalization " + synthesisFunctionalization.getId();
                msgs.add("Error deleting synthesis functionalization " + synthesisFunctionalization.getId());
                logger.error(err, e);
                throw new SynthesisException(err, e);
            }
            return msgs;


    }

    public void deleteSynthesisMaterial(Long sampleId, SynthesisMaterial synthesisMaterial) throws SynthesisException
            , NoAccessException {
        if (SpringSecurityUtil.getPrincipal() == null) {
            throw new NoAccessException();
        }
        try {
            //Delete attached files
            if (synthesisMaterial.getFileCollection() != null) {
                for (File file : synthesisMaterial.getFileCollection()) {
                    deleteSynthesisMaterialFile(synthesisMaterial, file);
                }
            }

            //Delete attached material elements
            if (synthesisMaterial.getSynthesisMaterialElements() != null) {
                for (SynthesisMaterialElement element : synthesisMaterial.getSynthesisMaterialElements()) {
                    deleteSynthesisMaterialElement(sampleId, synthesisMaterial, element);
                }
            }

            //refresh the SynthesisMaterial object with the dependents removed
            SynthesisMaterial tempMat = synthesisHelper.findSynthesisMaterialById(sampleId, synthesisMaterial.getId());
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
//            appService.delete(synthesisMaterial);
            appService.delete(tempMat);
        }
        catch (Exception e) {
            String err = "Error deleting synthesis material " + synthesisMaterial.getId();
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    public void deleteSynthesisPurification(Long sampleId, SynthesisPurification synthesisPurification) throws SynthesisException,
            NoAccessException {
        if (SpringSecurityUtil.getPrincipal() == null) {
            throw new NoAccessException();
        }
        try {


            //Delete attached material elements
            if (synthesisPurification.getPurities() != null) {
                for (SynthesisPurity element : synthesisPurification.getPurities()) {
                    deleteSynthesisPurity(sampleId, synthesisPurification, element);
                }
            }
            synthesisPurification.setPurities(null);


            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
            appService.delete(synthesisPurification);
        }
        catch (Exception e) {
            String err = "Error deleting synthesis purification " + synthesisPurification.getId();
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    public void deleteSynthesisPurity(Long sampleId, SynthesisPurification synthesisPurification,
                                      SynthesisPurity element) throws SynthesisException{

        try {
            if (element.getFiles() != null) {
                for (File file : element.getFiles()) {
                    deleteSynthesisPurityFile(element, file);
                }

            }


            if (element.getPurityDatumCollection() != null) {
                Collection<PurityColumnHeader> deleteColumnHeaders= new ArrayList<PurityColumnHeader>();
                //delete datum
                for (PurityDatumCondition purityDatumCondition : element.getPurityDatumCollection()) {
                    PurityColumnHeader columnHeader = purityDatumCondition.getColumnHeader();
                    deletePurityDatum(sampleId, element, purityDatumCondition);
                    deleteColumnHeaders.add(columnHeader);

                }

                for(PurityColumnHeader columnHeader: deleteColumnHeaders){
                    deleteColumnHeader(columnHeader);
                }
            }



                CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                        .getApplicationService();
                appService.delete(element);



        } catch(SynthesisException syn){
            throw syn;
        } catch (NoAccessException nae){
            String err = "User does not have access to delete purity " + element.getId();
            logger.error(err, nae);
            throw new SynthesisException(err, nae);
        }
        catch (ApplicationException e) {
            String err = "Application Exception when deleting purity " + element.getId();
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
//        synthesisPurification.removePurity(element);

    }

    public SynthesisBean findSynthesisBySampleId(Long sampleId) throws SynthesisException {
        SynthesisBean synthesisBean = null;
        try {
            Synthesis synthesis = synthesisHelper.findSynthesisBySampleId(sampleId);
            if (synthesis != null) {
                synthesisBean = new SynthesisBean(synthesis);
            }
        }
        catch (Exception e) {
            String err = "Error finding synthesis by sample ID: " + sampleId;
            throw new SynthesisException(err, e);
        }
        return synthesisBean;
    }

    public Long findSynthesisIdBySampleId(Long sampleId) throws SynthesisException {
        try {
            Synthesis synthesis = synthesisHelper.findSynthesisBySampleId(sampleId);
            if (synthesis != null) {
                return synthesis.getId();
            }
        }
        catch (Exception e) {
            String err = "Error finding synthesis by sample ID: " + sampleId;
            throw new SynthesisException(err, e);
        }
        return null;
    }

    public SynthesisFunctionalizationBean findSynthesisFunctionalizationById(Long sampleId, Long dataId) throws NoAccessException, SynthesisException {
        SynthesisFunctionalizationBean sfBean = null;
        try {
            SynthesisFunctionalization synthesisFunctionalization =
                    synthesisHelper.findSynthesisFunctionalizationById(sampleId, dataId);
            //Add parent object to domain
            Synthesis synthesis;
            try {
                synthesis = getHelper().findSynthesisBySampleId(sampleId);
                synthesisFunctionalization.setSynthesis(synthesis);
            }
            catch (Exception e) {
                e.printStackTrace();
                logger.error(e);
            }
            if (synthesisFunctionalization != null) {
                sfBean = new SynthesisFunctionalizationBean(synthesisFunctionalization);
            }

        }
        catch (NoAccessException e) {
            throw e;
        }
        catch (Exception e) {
            String err = "Problem finding the synthesis functionalization entity by id: " + dataId;
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
        return sfBean;
    }

    public SynthesisMaterialBean findSynthesisMaterialById(Long sampleId, Long dataId) throws NoAccessException,
            SynthesisException {
        SynthesisMaterialBean smBean = null;
        try {
            SynthesisMaterial synthesisMaterial = synthesisHelper.findSynthesisMaterialById(sampleId, dataId);
            //Add parent object to domain
            Synthesis synthesis;
            try {
                synthesis = getHelper().findSynthesisBySampleId(sampleId);
                synthesisMaterial.setSynthesis(synthesis);

            }
            catch (Exception e) {
                e.printStackTrace();
                logger.error(e);
            }
            if (synthesisMaterial != null) {
                smBean = new SynthesisMaterialBean(synthesisMaterial);
            }

        }
        catch (NoAccessException e) {
            throw e;
        }
        catch (Exception e) {
            String err = "Problem finding the synthesis material entity by id: " + dataId;
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
        return smBean;
    }

    public SynthesisPurificationBean findSynthesisPurificationById(Long sampleId, Long dataId) throws NoAccessException, SynthesisException {
        SynthesisPurificationBean spBean = null;
        try {
            SynthesisPurification synthesisPurification = synthesisHelper.findSynthesisPurificationById(sampleId,
                    dataId);
            if (synthesisPurification != null) {
                Long synid = findSynthesisIdBySampleId(sampleId);
                synthesisPurification.setSynthesisId(synid);
                spBean = new SynthesisPurificationBean(synthesisPurification);
            }

        }
        catch (NoAccessException e) {
            throw e;
        }
        catch (Exception e) {
            String err = "Problem finding the synthesis purification entity by id: " + dataId;
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
        return spBean;
    }

    public SynthesisPurificationBean findSynthesisPurificationById(Long dataId) throws NoAccessException,
            SynthesisException {
        SynthesisPurificationBean spBean = null;
        try {
            SynthesisPurification synthesisPurification = synthesisHelper.findSynthesisPurificationById(
                    dataId);
            if (synthesisPurification != null) {
                Synthesis synthesis = synthesisHelper.findSynthesisById(synthesisPurification.getSynthesisId());
                synthesisPurification.setSynthesis(synthesis);
                spBean = new SynthesisPurificationBean(synthesisPurification);
            }

        }
        catch (NoAccessException e) {
            throw e;
        }
        catch (Exception e) {
            String err = "Problem finding the synthesis purification entity by id: " + dataId;
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
        return spBean;
    }

    public SynthesisHelper getHelper() {
        return synthesisHelper;
    }

    public Synthesis createSynthesis(SampleBean sampleBean) throws SynthesisException {

        try {
            Synthesis synthesis = new Synthesis();
            synthesis.setSample(sampleBean.getDomain());

            CaNanoLabApplicationService appService =
                    (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();

            appService.saveOrUpdate(synthesis);
            // save default access
            springSecurityAclService.saveDefaultAccessForNewObject(synthesis.getId(),
                    SecureClassesEnum.SYNTHESIS.getClazz());

            return synthesis;
        }
        catch (ApplicationException | ApplicationProviderException e) {
            logger.error("Error in saving the synthesis. ", e);
            throw new SynthesisException("Error in saving the synthesis. ", e);
        }
    }

    public void saveSynthesisFunctionalization(SampleBean sampleBean,
                                               SynthesisFunctionalizationBean synthesisFunctionalizationBean) throws SynthesisException, NoAccessException {

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

            if (!newEntity) {
                //Make doubly sure that the entity hasn't been left cached in memory but already removed from database
                try {
                    appService
                            .load(SynthesisFunctionalization.class,
                                    synthesisFunctionalizationBean.getDomainEntity().getId());
                }
                catch (Exception e) {
                    String err = "Object doesn't exist in the database anymore.  Please log in again.";
                    logger.error(err);
                    throw new SynthesisException(err, e);
                }
            }

            Synthesis synthesis;
            if (sample.getSynthesis() == null) {
                //This is a new synthesis.  We need to create it, as well as the functionalization
                synthesis = createSynthesis(sampleBean);
            } else {
                synthesis = sample.getSynthesis();
                newSynthesis = false;
            }
            synthesisFunctionalization.setSynthesis(synthesis);

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

            //add functionalization to synthesis

            for (FileBean fileBean : synthesisFunctionalizationBean.getFiles()) {
                fileUtils.prepareSaveFile(fileBean.getDomainFile());
            }
            //save
            appService.saveOrUpdate(synthesisFunctionalization);

            for (SynthesisFunctionalizationElementBean synthesisFunctionalizationElementBean :
                    synthesisFunctionalizationBean.getSynthesisFunctionalizationElements()) {
                this.saveSynthesisFunctionalizationElement(synthesisFunctionalization,
                        synthesisFunctionalizationElementBean);
            }


            for (FileBean fileBean : synthesisFunctionalizationBean.getFiles()) {
                fileUtils.writeFile(fileBean);
            }

        }
        catch (NoAccessException e) {
            throw e;
        }
        catch (Exception e) {
            String err = "Problem saving Synthesis Functionalization";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    public void saveSynthesisMaterial(SampleBean sampleBean, SynthesisMaterialBean synthesisMaterialBean) throws SynthesisException, NoAccessException {

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
            SynthesisMaterial synthesisMaterial = synthesisMaterialBean.getDomainEntity();
            Boolean newEntity = true;
            Boolean newSynthesis = true;
            //Check if this is a new material or an update of an existing
            if (synthesisMaterial.getId() != null) {
                newEntity = false;
            }
            //Make doubly sure that the entity hasn't been left cached in memory but already removed from database
            if (!newEntity) {
                try {
                    appService
                            .load(SynthesisMaterial.class, synthesisMaterialBean.getDomainEntity().getId());
                }
                catch (Exception e) {
                    String err = "Object doesn't exist in the database anymore.  Please log in again.";
                    logger.error(err);
                    throw new SynthesisException(err, e);
                }
            }


            Synthesis synthesis;
            if (sample.getSynthesis() == null) {
                //This is a new synthesis.  We need to create it, as well as the material
                synthesis = createSynthesis(sampleBean);
            } else {
                synthesis = sample.getSynthesis();
            }
//            synthesisMaterial.setSynthesis(synthesis);
            synthesisMaterial.setSynthesisId(synthesis.getId());
            if (!newEntity) {
                //Get the material by id from database
//                Long test1 = synthesisMaterial.getSynthesis().getId();
                Long test1 = synthesisMaterial.getSynthesisId();
                Long test2 = synthesis.getId();
                if (!synthesisMaterial.getSynthesisId().equals(synthesis.getId())) {
                    //something has gone wrong and the material does not attach to the correct synthesis
                    throw new SynthesisException("material does not match synthesis", new Exception());
                }

            }
            //We'll be adding or updating the material in Synthesis

            //add material to synthesis
            for (FileBean fileBean : synthesisMaterialBean.getFiles()) {
                fileUtils.prepareSaveFile(fileBean.getDomainFile());
            }
            //save

            for (SynthesisMaterialElementBean synthesisMaterialElementBean :
                    synthesisMaterialBean.getSynthesisMaterialElements()) {
                //check the if there is a new Supplier
                if (synthesisMaterialElementBean.getSupplier() != null && synthesisMaterialElementBean.getSupplier().getId() == null) {
                    Supplier supplier = createSupplierRecord(synthesisMaterialElementBean.getSupplier());
                    synthesisMaterialElementBean.getDomainEntity().setSupplier(supplier);
                } else if (synthesisMaterialElementBean.getSupplier() != null) {
                    appService.saveOrUpdate(synthesisMaterialElementBean.getSupplier());
                }

            }

            appService.saveOrUpdate(synthesisMaterial);
            synthesisMaterialBean.setDomainEntity(synthesisMaterial);

            for (SynthesisMaterialElementBean synthesisMaterialElementBean :
                    synthesisMaterialBean.getSynthesisMaterialElements()) {
                synthesisMaterialElementBean.getDomainEntity().setSynthesisMaterial(synthesisMaterial);
                this.saveSynthesisMaterialElement(synthesisMaterial, synthesisMaterialElementBean);
            }

            for (FileBean fileBean : synthesisMaterialBean.getFiles()) {
                fileUtils.writeFile(fileBean);

            }

        }
        catch (NoAccessException e) {
            String err = "Error writing file when saving Synthesis Material. ";
            logger.error(err, e);
            throw new SynthesisException(err, e);

        }
        catch (DataIntegrityViolationException e) {
            String err = "Database Integrity violation when saving Synthesis Material. ";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
        catch (Exception e) {
            String err = "Problem saving Synthesis Material :";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    public void saveSynthesisPurification(SampleBean sampleBean, SynthesisPurificationBean synthesisPurificationBean) throws SynthesisException, NoAccessException {

        try {
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
            SynthesisPurification synthesisPurification = synthesisPurificationBean.getDomainEntity();
            Boolean newEntity = true;
            Boolean newSynthesis = true;
            if (synthesisPurification.getId() != null) {
                newEntity = false;
            }
            Sample sample = sampleBean.getDomain();
            if (!springSecurityAclService.currentUserHasWritePermission(sample.getId(),
                    SecureClassesEnum.SAMPLE.getClazz())) {
                throw new NoAccessException();
            }

            Synthesis synthesis;
            if (sample.getSynthesis() == null) {
                //This is a new synthesis.  We need to create it, as well as the material
                synthesis = createSynthesis(sampleBean);
            } else {
                synthesis = sample.getSynthesis();
            }

            if (!newEntity) {
                try {
                    appService
                            .load(SynthesisPurification.class, synthesisPurificationBean.getDomainEntity().getId());
                }
                catch (Exception e) {
                    String err = "Object doesn't exist in the database anymore.  Please log in again.";
                    logger.error(err);
                    throw new SynthesisException(err, e);
                }
                //Get the purification by id from database
                Long test1 = synthesisPurification.getId();
                Long test2 = synthesis.getId();
                if (!synthesisPurification.getSynthesisId().equals(synthesis.getId())) {
                    //something has gone wrong and the purification does not attach to the correct synthesis
                    throw new SynthesisException("purification does not match synthesis", new Exception());
                }

            } else {
                synthesisPurification.setSynthesis(synthesis);
                synthesisPurification.setSynthesisId(synthesis.getId());
            }

            savePurificationConfig(synthesisPurification);

//            if(synthesisMaterialElementBean.getSupplier()!= null && synthesisMaterialElementBean.getSupplier()
//            .getId()==null){
//                Supplier supplier = createSupplierRecord(synthesisMaterialElementBean.getSupplier());
//                synthesisMaterialElementBean.getDomainEntity().setSupplier(supplier);
//            } else if(synthesisMaterialElementBean.getSupplier()!=null){
//                appService.saveOrUpdate(synthesisMaterialElementBean.getSupplier());
//            }

            for (FileBean fileBean : synthesisPurificationBean.getFiles()) {
                fileUtils.prepareSaveFile(fileBean.getDomainFile());
                synthesisPurification.addFile(fileBean.getDomainFile());
            }

//TODO figure out why Hibernate complains about Stale State
            appService.saveOrUpdate(synthesisPurification);

            Long debug = synthesisPurification.getId();

            //TODO detect if a purity has been removed
            for (SynthesisPurityBean synthesisPurityBean : synthesisPurificationBean.getPurityBeans()) {
                this.saveSynthesisPurity(synthesisPurityBean, synthesisPurificationBean);
            }


            for (FileBean fileBean : synthesisPurificationBean.getFiles()) {
                fileUtils.writeFile(fileBean);
            }


        }
        catch (ApplicationException e) {
            logger.error("Problem saving synthesis purification ", e);
            throw new SynthesisException("Error in saving synthesis purification ", e);
        }
        catch (Exception e) {
            logger.error("Problem saving synthesis purification ", e);
            throw new SynthesisException("Error in saving synthesis purification ", e);
        }
    }

    public void saveSynthesisPurity(SynthesisPurityBean synthesisPurityBean,
                                    SynthesisPurificationBean synthesisPurificationBean) throws SynthesisException {

        try {
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
            SynthesisPurity synthesisPurity = synthesisPurityBean.getDomain();
            Boolean newEntity = true;
            if (synthesisPurity.getId() != null) {
                newEntity = false;
            }

            if (!newEntity) {
                //Get the purification by id from database
                Long test1 = synthesisPurity.getSynthesisPurificationId();
                Long test2 = synthesisPurificationBean.getDomainEntity().getId();
                if(test1==null){
                    synthesisPurity.setSynthesisPurification(synthesisPurificationBean.getDomainEntity());
                }
                if(synthesisPurificationBean.getDomainEntity().getId()==null){
                    String err = "Saving purity when purification is not yet set";
                    throw new SynthesisException(err);
                }

               else if( !test1.equals(test2)){
                    //something has gone wrong and the material does not attach to the correct synthesis
                    throw new SynthesisException("element does not match purification", new Exception());
                }


                try {
                    SynthesisPurity tempPure = (SynthesisPurity) appService.getObject(SynthesisPurity.class, "id",
                            synthesisPurityBean.getDomain().getId());

                    synthesisPurity.setCreatedDate(tempPure.getCreatedDate());
                    synthesisPurity.setCreatedBy(tempPure.getCreatedBy());
                }
                catch (Exception e) {
                    String err = "Object doesn't exist in the database anymore.  Please log in again.";
                    logger.error(err);
                    throw new SynthesisException(err, e);
                }
            } else {
                synthesisPurity.setCreatedDate(new Date());
                synthesisPurity.setCreatedBy(SpringSecurityUtil.getLoggedInUserName());
            }

//            for (FileBean fileBean : synthesisPurityBean.getFiles()) {
//                fileUtils.prepareSaveFile(fileBean.getDomainFile());
////                fileUtils.writeFile(fileBean);
//                synthesisPurity.addFile(fileBean.getDomainFile());
//            }

           FileBean fileBean= synthesisPurityBean.getFileBeingEdited();
            if(fileBean!=null) {
                fileUtils.prepareSaveFile(fileBean.getDomainFile());
                fileUtils.writeFile(fileBean);
                synthesisPurity.addFile(fileBean.getDomainFile());
            }

//            synthesisPurity.setSynthesisPurification(synthesisPurificationBean.getDomainEntity());


//Need to save purity to get the ID for the dependents


            /*
            23:33:05,071 WARN  [org.hibernate.action.internal.UnresolvedEntityInsertActions] (default task-5) HHH000437:
            Attempting to save one or more entities that have a non-nullable association with an unsaved transient entity.
            The unsaved transient entity must be saved in an operation prior to saving these dependent entities.
	Unsaved transient entity: ([gov.nih.nci.cananolab.domain.particle.SynthesisPurification#<null>])
	Dependent entities: ([[gov.nih.nci.cananolab.domain.particle.SynthesisPurity#9]])
	Non-nullable association(s): ([gov.nih.nci.cananolab.domain.particle.SynthesisPurity.synthesisPurification])


             */
            System.out.println("fail here with new SynthPurity ");
            System.out.println("saving synthesis purity " + synthesisPurity.getId());
            appService.saveOrUpdate(synthesisPurity);
            System.out.println("saved synthesis purity " + synthesisPurity.getId());
            synthesisPurityBean = new SynthesisPurityBean(synthesisPurity);

            //TODO detect if columnHeaders have been removed
            //Next need to save the column headers
            HashMap<Integer, PurityColumnHeader> newHeaders = new HashMap<Integer, PurityColumnHeader>();
            for (PurityColumnHeader header : synthesisPurityBean.getPurityColumnHeaders()) {
                PurityColumnHeader newHeader = createColumnHeader(header);
                newHeaders.put(newHeader.getColumnOrder(), newHeader);
            }

            //TODO detect if datum have been removed
            //Update existing PurityDatumCondition
            Set<PurityDatumCondition> originalDatum = synthesisHelper.getPurityDatumByPurity(synthesisPurity.getId());
            HashMap<Long, PurityTableCell> cellHashMap = new HashMap<Long, PurityTableCell>();
            List<PurityTableCell> newCells = new ArrayList<PurityTableCell>();
            List<PurityRow> rows = synthesisPurityBean.getRows();
            for (PurityRow row : rows) {
                List<PurityTableCell> cells = row.getCells();
                for (PurityTableCell cell : cells) {
                    if (cell.getId() != null) {
                        cellHashMap.put(cell.getId(), cell);
                    } else {
                        newCells.add(cell);
                    }
                }
            }
            for (PurityDatumCondition condition : originalDatum) {
                PurityTableCell cell = cellHashMap.get(condition.getId());
                if (cell != null) {
                    update(condition, cell);
                }

            }
            if((originalDatum!=null)&&(originalDatum.size()>0)) {
                synthesisPurity.setPurityDatumCollection(originalDatum);
            }

//            for (PurityDatumCondition datum : synthesisPurity.getPurityDatumCollection()) {
            for (PurityDatumCondition datum : originalDatum) {
                datum.setColumnHeader(newHeaders.get(datum.getColumnHeader().getColumnOrder()));
                if (datum.getId() == null) {
                    //create new datum
                    datum.setPurity(synthesisPurity);
                    PurityDatumCondition newDatum = createDatum(datum);
//                    datum.setId(newDatum.getId());
                } else {
                    saveDatum(datum);
                }

            }

            for (PurityTableCell cell : newCells) {
                PurityDatumCondition datumCondition = new PurityDatumCondition();
                datumCondition.setColumnHeader(newHeaders.get(cell.getColumnOrder()));
                datumCondition.setName(datumCondition.getColumnHeader().getName());
                datumCondition.setType(datumCondition.getColumnHeader().getColumnType());
                //TODO remove this duplicate or figure out what it should be
                datumCondition.setValueType(datumCondition.getColumnHeader().getColumnType());
                datumCondition.setValueUnit(datumCondition.getColumnHeader().getValueUnit());
                datumCondition.setProperty(datumCondition.getColumnHeader().getConditionProperty());
                datumCondition.setPurity(synthesisPurity);
                datumCondition.setValue(cell.getValue());
                datumCondition.setOperand(cell.getOperand());
                datumCondition.setRowNumber(cell.getRowNumber());
                datumCondition.setCreatedDate(new Date());
                datumCondition.setCreatedBy(SpringSecurityUtil.getLoggedInUserName());
                saveCondition(datumCondition);
            }


            Long debug = synthesisPurity.getId();

//            for (FileBean fileBean : synthesisPurityBean.getFiles()) {
//                fileUtils.writeFile(fileBean);
//            }
        }
        catch (Exception e) {
            String err = "Problem saving Synthesis Purity ";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

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

    public List<String> getFunctionalizationActivationMethods() throws SynthesisException {
        try {
            return synthesisHelper.getAllActivationMethods();
        }
        catch (Exception e) {
            String err = "Error finding Activation Methods ";
            e.printStackTrace();
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    public Supplier createSupplierRecord(Supplier supplier) throws SynthesisException {
        try {
            CaNanoLabApplicationService appService =
                    (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
            appService.saveOrUpdate(supplier);
            return supplier;
        }
        catch (Exception e) {
            String err = "Problem saving new Supplier ";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    public void deleteSynthesisMaterialElement(Long sampleId, SynthesisMaterial synthesisMaterial,
                                               SynthesisMaterialElement element) throws NoAccessException,
            SynthesisException {
        if (SpringSecurityUtil.getPrincipal() == null) {
            throw new NoAccessException();
        }
        try {
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
            if (element.getFiles() != null) {
                for (File file : element.getFiles()) {
                    deleteSynthesisMaterialElementFile(sampleId, element, file);
                }
            }
            if (element.getSmeInherentFunctions() != null) {
                for (SmeInherentFunction function : element.getSmeInherentFunctions()) {
                    deleteSmeInherentFunction(sampleId, element, function);
                }
            }
            appService.delete(element);
        }
        catch (Exception e) {
            String err = "Error deleting synthesis material element " + element.getId();
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    public void deleteSmeInherentFunction(Long sampleId, SynthesisMaterialElement element,
                                          SmeInherentFunction function) throws SynthesisException {
        try {
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
            List<SmeInherentFunction> functionList = synthesisHelper.findSmeFunctionByElementId(sampleId,
                    element.getId(), "SynthesisMaterialElement");
            element.setSmeInherentFunctions(new HashSet<SmeInherentFunction>(functionList));
            element.getSmeInherentFunctions().remove(function);
            appService.delete(function);

        }
        catch (Exception e) {
            String err = "Error deleting SME Inherent Function " + element.getId();
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    public void deleteSynthesisFunctionalizationElement(Long sampleId,
                                                        SynthesisFunctionalization synthesisFunctionalization,
                                                        SynthesisFunctionalizationElement element) throws NoAccessException, SynthesisException {
        if (SpringSecurityUtil.getPrincipal() == null) {
            throw new NoAccessException();
        }
        try {
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
            if (element.getFiles() != null) {
                for (File file : element.getFiles()) {
                    deleteSynthesisFunctionalizationElementFile(sampleId, element, file);
                }
            }
            if (element.getSfeInherentFunctions() != null) {
                for (SfeInherentFunction function : element.getSfeInherentFunctions()) {
                    deleteSfeInherentFunction(sampleId, element, function);
                }
            }
//            synthesisFunctionalization.getSynthesisFunctionalizationElements().remove(element);
            appService.delete(element);
        }
        catch (Exception e) {
            String err = "Error deleting synthesis functionalization element " + element.getId();
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }

    }

    public void deleteSfeInherentFunction(Long sampleId, SynthesisFunctionalizationElement element,
                                          SfeInherentFunction function) throws SynthesisException {
        try {
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
            List<SfeInherentFunction> functionList = synthesisHelper.findSfeFunctionByElementId(sampleId,
                    element.getId(), "SynthesisFunctionalizationElement");
            element.setSfeInherentFunctions(new HashSet<SfeInherentFunction>(functionList));
            element.getSfeInherentFunctions().remove(function);
            appService.delete(function);

        }
        catch (Exception e) {
            String err = "Error deleting SFE Inherent Function " + element.getId();
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }

    }

    public PurityColumnHeader getColumnHeaderById(Long id) throws SynthesisException {
        try {
            return synthesisHelper.findPurityColumnHeaderById(id, "PurityColumnHeader");


        }
        catch (Exception e) {
            String err = "Problem fetching Purity Column Header ";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    public SynthesisPurity findPurityById(Long purityId) throws SynthesisException {
        try {
            SynthesisPurity purity = synthesisHelper.getPurityById(purityId);
            return purity;
        }
        catch (Exception e) {
            String err = "Error finding purity by ID: " + purityId;
            throw new SynthesisException(err, e);
        }

    }

    private void deleteSynthesisFunctionalizationElementFile(Long sampleId, SynthesisFunctionalizationElement element
            , File file) throws SynthesisException {
        try {
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
            List<File> fileList = synthesisHelper.findFilesBySynMatElement(sampleId, element.getId(),
                    "SynthesisFunctionalizationElement");
            element.setFiles(new HashSet<File>(fileList));
            element.getFiles().remove(file);
            appService.saveOrUpdate(element);
        }
        catch (Exception e) {
            String err = "Error deleting synthesis functionalization element file " + element.getId();
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    private void deleteSynthesisMaterialFile(SynthesisMaterial synthesisMaterial, File file) throws NoAccessException
            , SynthesisException {
        if (SpringSecurityUtil.getPrincipal() == null) {
            throw new NoAccessException();
        }
        try {
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
//            // load files first
            List<File> fileList = synthesisHelper.findFilesByMaterialId(synthesisMaterial.getSynthesisId(),
                    synthesisMaterial.getId(), "SynthesisMaterial");
            synthesisMaterial.setFileCollection(new HashSet<File>(fileList));
            synthesisMaterial.getFileCollection().remove(file);
            appService.saveOrUpdate(synthesisMaterial);


        }
        catch (Exception e) {
            String err = "Error deleting synthesis material  file " + file.getUri();
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    private void deleteSynthesisPurityFile(SynthesisPurity element, File file) {
        //TODO write
        //This file might be used by other options so we want to check
        //If file is used elsewhere, then set fileid to null and leave it
        //If not used elsewhere, then do we want to delete file record?
        //Will that leave the file itself orphaned on server?

    }

    private void deletePurityDatum(Long sampleId, SynthesisPurity purity, PurityDatumCondition element) throws SynthesisException {

        try {
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();

            appService.delete(element);
        }
        catch (Exception e) {
            String err = "Error deleting Purity Datum Condition " + element.getId();
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }

    }

    private void deleteSynthesisMaterialElementFile(Long sampleId, SynthesisMaterialElement element, File file) throws SynthesisException {
        try {
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
            List<File> fileList = synthesisHelper.findFilesBySynMatElement(sampleId, element.getId(),
                    "SynthesisMaterialElement");
            element.setFiles(new HashSet<File>(fileList));
            element.getFiles().remove(file);
            appService.saveOrUpdate(element);
        }
        catch (Exception e) {
            String err = "Error deleting synthesis material element file " + element.getId();
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    private void savePurificationConfig(SynthesisPurification purification) throws Exception {
        try {
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();

            Set<PurificationConfig> oldConfigs = synthesisHelper.findConfigByPurificationId(purification.getId());

            if(oldConfigs==null){
                oldConfigs = new HashSet<PurificationConfig>();
            }
            Set<PurificationConfig> configs = purification.getPurificationConfigs();
            if (configs != null ) {
                for (PurificationConfig config : configs) {
                    if (!oldConfigs.contains(config)) {
                        //TODO new config
                        if(config.getTechnique().getId()==null){
                            //New technique
                            appService.saveOrUpdate(config.getTechnique());
                        }
                        appService.saveOrUpdate(config);
                    }
                }
                for(PurificationConfig oldConfig: oldConfigs){
                    //check if a config has been removed
                    if(!configs.contains(oldConfig)){
                        appService.delete(oldConfig);
                    }
                    for (PurificationConfig config:configs){
                        //check if any instuments have been deleted
                        if(oldConfig.getPurificationConfigPkId()==config.getPurificationConfigPkId()) {
                            Set<Instrument> newInstruments = (Set<Instrument>) config.getInstrumentCollection();
                            Set<Instrument> oldInstruments = (Set<Instrument>) oldConfig.getInstrumentCollection();
                            for(Instrument instrument: oldInstruments){
                                if(!newInstruments.contains(instrument)){
                                    appService.delete(instrument);
                                }
                            }
                        }
                    }
                }
            }

//        if(configs!=null){
//            for(PurificationConfig config:configs){
//                if(config.getInstrumentCollection()!=null){
//                    for(Instrument instrument:config.getInstrumentCollection()){
//                        if(instrument.getId()==null){
//                            Instrument newInstrument = createInstrumentRecord(instrument);
//                            instrument.setId(newInstrument.getId());
//                        } else{
//                            appService.saveOrUpdate(instrument);
//                        }
//                    }
//                }
//
//                if(config.getPurificationConfigPkId()==null){
//                    PurificationConfig newConfig = createTechniqueRecord(config);
//                    config.setPurificationConfigPkId(newConfig.getPurificationConfigPkId());
//                } else{
//                    appService.saveOrUpdate(config);
//                }
//            }
//        }
        }
        catch (Exception e) {
            String err = "Problem saving Purification Configuration ";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    public PurityColumnHeader createColumnHeader(PurityColumnHeader header) throws SynthesisException {
        try {
            CaNanoLabApplicationService appService =
                    (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
            header.setCreatedDate(new Date());
            header.setCreatedBy(SpringSecurityUtil.getLoggedInUserName() + ":" + Constants.AUTO_COPY_ANNOTATION_PREFIX);
            appService.saveOrUpdate(header);
            return header;
        }
        catch (Exception e) {
            String err = "Problem saving new Purity Column Header ";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    public PurityDatumCondition update(PurityDatumCondition condition, PurityTableCell cell) {
        condition.setColumnId(cell.getColumnId());
        condition.setOperand(cell.getOperand());
        condition.setValue(cell.getValue());
        condition.setRowNumber(cell.getRowNumber());
        condition.setValueType(cell.getDatumOrCondition());
        return condition;
    }

//    private Supplier createSupplierRecord(HashMap<String,String> supplierMap) throws SynthesisException {
//        Supplier supplier = new Supplier();
//        supplier.setLot(supplierMap.get("Lot"));
//        supplier.setSupplierName(supplierMap.get("supplierMap"));
//        return createSupplierRecord(supplier);
//    }

    private PurityDatumCondition createDatum(PurityDatumCondition datum) throws SynthesisException {
        try {
            CaNanoLabApplicationService appService =
                    (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
//Need to blank condition until we have a datum id

            datum.setCreatedDate(new Date());
            datum.setCreatedBy(SpringSecurityUtil.getLoggedInUserName() + ":" + Constants.AUTO_COPY_ANNOTATION_PREFIX);
            appService.saveOrUpdate(datum);
//            Set<PurityDatumCondition> conditionHolder = datum.getConditionCollection();
//            datum.setConditionCollection(null);
//            for (PurityDatumCondition condition : datum.getConditionCollection()) {
////                condition.setPurityDatumPkId(datum.getId());
////                condition.setPurityDatum(datum);
//                PurityDatumCondition newCondition = createCondition(condition);
////                condition.setId(newCondition.getId());
//            }
//            datum.setConditionCollection(conditionHolder);
            //TODO get the id?
            return datum;
        }
        catch (Exception e) {
            String err = "Problem saving new Purity Datum ";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    private PurityDatumCondition saveDatum(PurityDatumCondition datum) throws SynthesisException {
        try {
//            if (datum.getConditionCollection() != null) {
//                for (PurityDatumCondition condition : datum.getConditionCollection()) {
//                    condition = saveCondition(condition);
//                }
//            }
            CaNanoLabApplicationService appService =
                    (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
            try {
                appService
                        .load(PurityDatumCondition.class, datum.getId());
//                SynthesisPurity tempDatum = (SynthesisPurity)appService.getObject(PurityDatumCondition.class, "id",
//                datum.getId());
                PurityDatumCondition tempDatum =
                        (PurityDatumCondition) appService.getObject(PurityDatumCondition.class, "id", datum.getId());

                datum.setCreatedDate(tempDatum.getCreatedDate());
                datum.setCreatedBy(tempDatum.getCreatedBy());
            }
            catch (Exception e) {
                String err = "Object doesn't exist in the database anymore.  Please log in again.";
                logger.error(err);
                throw new SynthesisException(err, e);
            }
//            Set<PurityDatumCondition> conditionSet = synthesisHelper.findPurityDatumConditionByDatum(datum.getId());
//
//            datum.setConditionCollection(conditionSet);
//            for (PurityDatumCondition condition : conditionSet) {
//                condition.setPurityDatum(datum);
//            }
            appService.saveOrUpdate(datum);
            return datum;
        }
        catch (Exception e) {
            String err = "Problem saving PurityDatumCondition ";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    public void saveSynthesisMaterialElement(SynthesisMaterial material,
                                             SynthesisMaterialElementBean synthesisMaterialElementBean) throws SynthesisException {

        try {
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
            SynthesisMaterialElement synthesisMaterialElement = synthesisMaterialElementBean.getDomainEntity();
            Boolean newEntity = true;
            if (synthesisMaterialElement.getId() != null) {
                newEntity = false;
            }

            if (!newEntity) {
                //Get the material by id from database
                Long test1 = synthesisMaterialElement.getSynthesisMaterialId();
                Long test2 = material.getId();
                if (!test1.equals(test2)) {
                    //something has gone wrong and the material does not attach to the correct synthesis
                    throw new SynthesisException("element does not match material", new Exception());
                }

                try {
                    appService
                            .load(SynthesisMaterialElement.class,
                                    synthesisMaterialElementBean.getDomainEntity().getId());
                }
                catch (Exception e) {
                    String err = "Object doesn't exist in the database anymore.  Please log in again.";
                    logger.error(err);
                    throw new SynthesisException(err, e);
                }
            }

            for (FileBean fileBean : synthesisMaterialElementBean.getFiles()) {
                fileUtils.prepareSaveFile(fileBean.getDomainFile());
            }

            //check if this is a new supplier (has no id). Create if needed
            if (synthesisMaterialElement.getSupplier() != null && synthesisMaterialElement.getSupplier().getId() == null) {
                Supplier supplier = createSupplierRecord(synthesisMaterialElement.getSupplier());
                synthesisMaterialElement.setSupplier(supplier);
            }

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

    public void saveSynthesisFunctionalizationElement(SynthesisFunctionalization functionalization,
                                                      SynthesisFunctionalizationElementBean synthesisFunctionalizationElementBean) throws SynthesisException {
        try {
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
            SynthesisFunctionalizationElement synthesisFunctionalizationElement =
                    synthesisFunctionalizationElementBean.getDomainEntity();
            Boolean newEntity = true;
            if (synthesisFunctionalizationElement.getId() != null) {
                newEntity = false;
            }

            if (!newEntity) {
                //Get the functionalization by id from database
                Long test1 = synthesisFunctionalizationElement.getSynthesisFunctionalization().getId();
                Long test2 = functionalization.getId();
                if (!test1.equals(test2)) {
                    //something has gone wrong and the functionalization does not attach to the correct synthesis
                    throw new SynthesisException("element does not match functionalization", new Exception());
                }

                try {
                    appService
                            .load(SynthesisFunctionalizationElement.class,
                                    synthesisFunctionalizationElementBean.getDomainEntity().getId());
                }
                catch (Exception e) {
                    String err = "Object doesn't exist in the database anymore.  Please log in again.";
                    logger.error(err);
                    throw new SynthesisException(err, e);
                }
            }

            for (FileBean fileBean : synthesisFunctionalizationElementBean.getFiles()) {
                fileUtils.prepareSaveFile(fileBean.getDomainFile());
            }


            appService.saveOrUpdate(synthesisFunctionalizationElement);
            for (SfeInherentFunction function : synthesisFunctionalizationElement.getSfeInherentFunctions()) {
                function.setSynthesisFunctionalizationElement(synthesisFunctionalizationElement);
                appService.saveOrUpdate(function);
            }

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


//    public SortedSet<String> getSupplierNames() throws Exception
//    {
//        try {
//            SortedSet<String> names = new TreeSet<String>(new Comparators.SortableNameComparator());
//            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
//            .getApplicationService();
//            HQLCriteria crit = new HQLCriteria("select org.name from gov.nih.nci.cananolab.domain.common
//            .Organization org");
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

    private PurityDatumCondition createCondition(PurityDatumCondition condition) throws SynthesisException {
        try {
            CaNanoLabApplicationService appService =
                    (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
            condition.setCreatedDate(new Date());
            condition.setCreatedBy(SpringSecurityUtil.getLoggedInUserName() + ":" + Constants.AUTO_COPY_ANNOTATION_PREFIX);
            appService.saveOrUpdate(condition);
            return condition;
        }
        catch (Exception e) {
            String err = "Problem saving new Condition ";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    public Instrument createInstrumentRecord(Instrument instrument) throws SynthesisException {
        try {
            CaNanoLabApplicationService appService =
                    (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
            appService.saveOrUpdate(instrument);
            return instrument;
        }
        catch (Exception e) {
            String err = "Problem saving new Technique ";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    public PurificationConfig createPurificationConfigRecord(PurificationConfig config) throws SynthesisException {
        try {
            CaNanoLabApplicationService appService =
                    (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
            appService.saveOrUpdate(config);
            return config;
        }
        catch (Exception e) {
            String err = "Problem saving new Technique ";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    public Technique createTechniqueRecord(Technique technique) throws SynthesisException {
        try {
            CaNanoLabApplicationService appService =
                    (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
            appService.saveOrUpdate(technique);
            return technique;
        }
        catch (Exception e) {
            String err = "Problem saving new Technique ";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    private void deletePurityDatumCondition(PurityDatumCondition element) throws SynthesisException {

        try {
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
//            List<SmeInherentFunction> functionList = synthesisHelper.findSmeFunctionByElementId(sampleId, element
//            .getId(),"SynthesisMaterialElement");
//            element.setSmeInherentFunctions(new HashSet<SmeInherentFunction>(functionList));
//            element.getSmeInherentFunctions().remove(function);
            appService.delete(element);

        }
        catch (Exception e) {
            String err = "Error deleting Purity Datum " + element.getId();
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    private void deleteSynthesisFunctionalizationFile(SynthesisFunctionalization synthesisFunctionalization,
                                                      File file) throws NoAccessException, SynthesisException {
        if (SpringSecurityUtil.getPrincipal() == null) {
            throw new NoAccessException();
        }
        try {
            CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
                    .getApplicationService();
//            // load files first
            List<File> fileList =
                    synthesisHelper.findFilesByFunctionalizationId(synthesisFunctionalization.getSynthesisId(),
                            synthesisFunctionalization.getId(), "SynthesisFunctionalization");
            synthesisFunctionalization.setFiles(new HashSet<File>(fileList));
            synthesisFunctionalization.getFiles().remove(file);
            appService.saveOrUpdate(synthesisFunctionalization);


        }
        catch (Exception e) {
            String err = "Error deleting synthesis functionalization  file " + file.getUri();
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }

    public int getNumberOfSuppliers() throws Exception {
        CaNanoLabApplicationService appService =
                (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
        HQLCriteria crit = new HQLCriteria("select id from gov.nih.nci.cananolab.domain.common.Supplier");
        List results = appService.query(crit);
        int cnt = 0;
        for (int i = 0; i < results.size(); i++) {
            cnt++;
        }
        return cnt;
    }

    @Override
    public SpringSecurityAclService getSpringSecurityAclService() {
        return springSecurityAclService;
    }

    private PurityDatumCondition saveCondition(PurityDatumCondition condition) throws SynthesisException {
        try {
            CaNanoLabApplicationService appService =
                    (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
            appService.saveOrUpdate(condition);
            return condition;
        }
        catch (Exception e) {
            System.out.println("Here is the exception " + e);

            String err = "Problem saving PurityDatumCondition ";
            // WJRL restore when done logger.error(err, e);
            throw new SynthesisException(err, e);
        }
    }
}
