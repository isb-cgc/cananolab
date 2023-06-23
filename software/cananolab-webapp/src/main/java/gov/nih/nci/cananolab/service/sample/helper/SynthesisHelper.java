package gov.nih.nci.cananolab.service.sample.helper;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.common.Instrument;
import gov.nih.nci.cananolab.domain.common.PurificationConfig;
import gov.nih.nci.cananolab.domain.common.PurityColumnHeader;

import gov.nih.nci.cananolab.domain.common.PurityDatumCondition;
import gov.nih.nci.cananolab.domain.particle.*;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.exception.SynthesisException;
import gov.nih.nci.cananolab.security.enums.SecureClassesEnum;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.system.applicationservice.ApplicationException;
import gov.nih.nci.cananolab.system.applicationservice.CaNanoLabApplicationService;
import gov.nih.nci.cananolab.system.applicationservice.client.ApplicationServiceProvider;
import gov.nih.nci.cananolab.system.query.hibernate.HQLCriteria;
import gov.nih.nci.cananolab.util.ClassUtils;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.FetchMode;
import org.hibernate.criterion.CriteriaSpecification;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Property;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import gov.nih.nci.cananolab.system.applicationservice.TransactionInsertion;
import gov.nih.nci.cananolab.domain.common.Protocol;
import gov.nih.nci.cananolab.domain.common.Keyword;
import gov.nih.nci.cananolab.domain.common.Supplier;
import gov.nih.nci.cananolab.domain.common.PurityColumnHeader;
import gov.nih.nci.cananolab.domain.common.Technique;

@Component("synthesisHelper")
public class SynthesisHelper
{
    private static Logger logger = LogManager.getLogger(SynthesisHelper.class);


    @Autowired
    private SpringSecurityAclService springSecurityAclService;

    public SynthesisHelper() {
    }



    public PurityColumnHeader findPurityColumnHeaderById(Long id, String fullClassName) throws Exception{
//        if (!springSecurityAclService.currentUserHasReadPermission(id, SecureClassesEnum.SAMPLE.getClazz()) &&
//                !springSecurityAclService.currentUserHasWritePermission(id, SecureClassesEnum.SAMPLE.getClazz())) {
//            throw new NoAccessException("User has no access to the purity column header " + id);
//        }
        PurityColumnHeader header = new PurityColumnHeader();
//        CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
//        String hql = "select anEntity.purityColumnHeader from " + fullClassName + " anEntity where anEntity.id = " + id;
//        HQLCriteria crit = new HQLCriteria(hql);
//        List result = appService.query(crit);
//        if (!result.isEmpty()){
//            header = (PurityColumnHeader)result.get(0);
//        }
//        return header;


        CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
//        DetachedCriteria crit = DetachedCriteria.forClass(SynthesisPurification.class).add(
//                Property.forName("id").eq(new Long(entityId)));
        DetachedCriteria crit = DetachedCriteria.forClass(PurityColumnHeader.class).add(
                Property.forName("id").eq(new Long(id)));
        List result = appService.query(crit);
        if (!result.isEmpty()){
            header = (PurityColumnHeader)result.get(0);
        }
        return header;

    }


    public List<SmeInherentFunction> findSmeFunctionByElementId(Long sampleId, Long id, String fullClassName) throws Exception{
        if (!springSecurityAclService.currentUserHasReadPermission(sampleId, SecureClassesEnum.SAMPLE.getClazz()) &&
                !springSecurityAclService.currentUserHasWritePermission(sampleId, SecureClassesEnum.SAMPLE.getClazz())) {
            throw new NoAccessException("User has no access to the sample " + sampleId);
        }
        List<SmeInherentFunction> functionList = new ArrayList<SmeInherentFunction>();
        CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
        String hql = "select anEntity.smeInherentFunctions from " + fullClassName + " anEntity where anEntity.id = " + id;
        HQLCriteria crit = new HQLCriteria(hql);
        List results = appService.query(crit);
        for (int i = 0; i < results.size(); i++) {
            SmeInherentFunction function = (SmeInherentFunction) results.get(i);
            if (springSecurityAclService.currentUserHasReadPermission(sampleId, SecureClassesEnum.SAMPLE.getClazz()) ||
                    springSecurityAclService.currentUserHasWritePermission(sampleId, SecureClassesEnum.SAMPLE.getClazz())) {
                functionList.add(function);
            } else {
                logger.debug("User doesn't have access to file of id:" + function.getId());
            }
        }
        return functionList;
    }

    public List<SfeInherentFunction> findSfeFunctionByElementId(Long sampleId, Long id, String fullClassName) throws Exception{
        if (!springSecurityAclService.currentUserHasReadPermission(sampleId, SecureClassesEnum.SAMPLE.getClazz()) &&
                !springSecurityAclService.currentUserHasWritePermission(sampleId, SecureClassesEnum.SAMPLE.getClazz())) {
            throw new NoAccessException("User has no access to the sample " + sampleId);
        }
        List<SfeInherentFunction> functionList = new ArrayList<SfeInherentFunction>();
        CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
        String hql = "select anEntity.sfeInherentFunctions from " + fullClassName + " anEntity where anEntity.id = " + id;
        HQLCriteria crit = new HQLCriteria(hql);
        List results = appService.query(crit);
        for (int i = 0; i < results.size(); i++) {
            SfeInherentFunction function = (SfeInherentFunction) results.get(i);
            if (springSecurityAclService.currentUserHasReadPermission(sampleId, SecureClassesEnum.SAMPLE.getClazz()) ||
                    springSecurityAclService.currentUserHasWritePermission(sampleId, SecureClassesEnum.SAMPLE.getClazz())) {
                functionList.add(function);
            } else {
                logger.debug("User doesn't have access to file of id:" + function.getId());
            }
        }
        return functionList;
    }


    public Synthesis findSynthesisBySampleId(String sampleId) throws SynthesisException {
        try{
            Long id = new Long(sampleId);
            return findSynthesisBySampleId(id);
        }
        catch (Exception e) {
            logger.error("Sample id is not integer "+ sampleId);
            logger.error("Exception: " + e.getMessage());
            throw new SynthesisException("Sample id is not integer", e);
        }
    }

    // 2023.5.29 rewrite per issue #214
    public Synthesis findSynthesisBySampleId(Long sampleId) throws Exception {
    	// test synthesis
        logger.debug("findSynthesisBySampleId sampleId==" + sampleId);
        Synthesis mySynthesis = null;
        CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
        DetachedCriteria crit = DetachedCriteria.forClass(Synthesis.class);
        crit.createAlias("sample", "sample");
        crit.add(Property.forName("sample.id").eq(sampleId));
        crit.setFetchMode("synthesis", FetchMode.JOIN);
        crit.setFetchMode("synthesisMaterials", FetchMode.JOIN);
        crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
        TransactionInsertion<Synthesis> myTransactionInsertion = new TransactionInsertion<Synthesis>() {
            @Override
            public boolean executeInsideTransaction(Synthesis mySynthesis) {
                // synthesis
                mySynthesis.getSample().setSynthesis(mySynthesis);
                logger.debug("mySynthesis.getId()==" + mySynthesis.getId());
                // synthesisMaterials
                Set<SynthesisMaterial> mySynthesisMaterialSet = mySynthesis.getSynthesisMaterials();
                for (SynthesisMaterial mySynthesisMaterial : mySynthesisMaterialSet) {
                    mySynthesisMaterial.toString();
                    logger.debug("mySynthesisMaterial.getId()==" + mySynthesisMaterial.getId());
                    // synthesisMaterials.protocol
                    Protocol myProtocol = mySynthesisMaterial.getProtocol();
                    if (myProtocol != null) {
                        myProtocol.toString();
                        logger.debug("mySynthesisMaterial.myProtocol.getId()=="+ myProtocol.getId());
                        // synthesisMaterials.protocol.file
                        File myFile = myProtocol.getFile();
                        if (myFile != null) {
                            myFile.toString();
                            logger.debug("mySynthesisMaterial.myProtocol.myFile.getId()=="+ myFile.getId());
                            // synthesisMaterials.protocol.file.keywordCollection
                            Collection<Keyword> myKeywordCollection = myFile.getKeywordCollection();
                            logger.debug("myKeywordCollection.size()==" + myKeywordCollection.size());
                            for (Keyword myKeyword : myKeywordCollection) {
                                myKeyword.toString();
                            }
                        }
                    }
                    // synthesisMaterials.files
                    Collection<File> myFileCollection = mySynthesisMaterial.getFileCollection();
                    logger.debug("myFileCollection.size()==" + myFileCollection.size());
                    for (File myFile : myFileCollection) {
                        myFile.toString();
                        // synthesisMaterials.files.keywordCollection
                        Collection<Keyword> myKeywordCollection = myFile.getKeywordCollection();
                        logger.debug("myKeywordCollection.size()==" + myKeywordCollection.size());
                        for (Keyword myKeyword : myKeywordCollection) {
                            myKeyword.toString();
                        }
                    }
                    // synthesisMaterials.synthesisMaterialElements
                    Set<SynthesisMaterialElement> mySynthesisMaterialElementSet = mySynthesisMaterial.getSynthesisMaterialElements();
                    for (SynthesisMaterialElement mySynthesisMaterialElement : mySynthesisMaterialElementSet) {
                        mySynthesisMaterialElement.toString();
                        logger.debug("mySynthesisMaterial.mySynthesisMaterialElement.getId()=="+ mySynthesisMaterialElement.getId());
                        // synthesisMaterials.synthesisMaterialElements.files
                        Set<File> myFileSet = mySynthesisMaterialElement.getFiles();
                        for (File myFile : myFileSet) {
                            myFile.toString();
                            logger.debug("mySynthesisMaterialElement.myFile.getId()=="+ myFile.getId());
                        }
                        // synthesisMaterials.synthesisMaterialElements.supplier
                        Supplier mySupplier = mySynthesisMaterialElement.getSupplier();
                        if (mySupplier != null) {
                            mySupplier.toString();
                            logger.debug("mySynthesisMaterialElement.mySupplier.getId()=="+ mySupplier.getId());
                        }
                        // synthesisMaterials.synthesisMaterialElements.smeInherentFunctions
                        Set<SmeInherentFunction> mySmeInherentFunctionSet = mySynthesisMaterialElement.getSmeInherentFunctions();
                        for (SmeInherentFunction mySmeInherentFunction : mySmeInherentFunctionSet) {
                            mySmeInherentFunction.toString();
                            logger.debug("mySynthesisMaterialElement.mySmeInherentFunction.getId()=="+ mySmeInherentFunction.getId());
                        }
                    }
                } // SynthesisMaterial

                // synthesisFunctionalizations
                Set<SynthesisFunctionalization> mySynthesisFunctionalizationSet = mySynthesis.getSynthesisFunctionalizations();
                for (SynthesisFunctionalization mySynthesisFunctionalization : mySynthesisFunctionalizationSet) {
                    mySynthesisFunctionalization.toString();
                    logger.debug("mySynthesisFunctionalization.getId()=="+ mySynthesisFunctionalization.getId());
                    // synthesisFunctionalizations.protocol
                    Protocol myProtocol = mySynthesisFunctionalization.getProtocol();
                    if (myProtocol != null) {
                        myProtocol.toString();
                        logger.debug("mySynthesisFunctionalization.myProtocol.getId()=="+ myProtocol.getId());
                    }
                    // synthesisFunctionalizations.synthesisFunctionalizationElements
                    Set<SynthesisFunctionalizationElement> mySynthesisFunctionalizationElementSet = mySynthesisFunctionalization.getSynthesisFunctionalizationElements();
                    for (SynthesisFunctionalizationElement mySynthesisFunctionalizationElement : mySynthesisFunctionalizationElementSet) {
                        mySynthesisFunctionalizationElement.toString();
                        logger.debug("mySynthesisFunctionalization.mySynthesisFunctionalizationElement.getId()=="+ mySynthesisFunctionalizationElement.getId());
                        // synthesisFunctionalizations.synthesisFunctionalizationElements.sfeInherentFunctions
                        Set<SfeInherentFunction> mySfeInherentFunctionSet = mySynthesisFunctionalizationElement.getSfeInherentFunctions();
                        for (SfeInherentFunction mySfeInherentFunction : mySfeInherentFunctionSet) {
                            mySfeInherentFunction.toString();
                            logger.debug("mySynthesisFunctionalizationElement.mySfeInherentFunction.getId()=="+ mySfeInherentFunction.getId());
                        }
                        // synthesisFunctionalizations.synthesisFunctionalizationElements.files
                        Set<File> myFileSet = mySynthesisFunctionalizationElement.getFiles();
                        for (File myFile : myFileSet) {
                            myFile.toString();
                            logger.debug("mySynthesisFunctionalizationElement.myFile.getId()==" + myFile.getId());

                            // synthesisFunctionalizations.synthesisFunctionalizationElements.files.keywordCollection
                            Collection<Keyword> myKeywordCollection = myFile.getKeywordCollection();
                            logger.debug("myKeywordCollection.size()==" + myKeywordCollection.size());
                            for (Keyword myKeyword : myKeywordCollection) {
                                myKeyword.toString();
                            }
                        }
                    }
                } // SynthesisFunctionalization

                // synthesisPurifications
                Set<SynthesisPurification> mySynthesisPurificationSet = mySynthesis.getSynthesisPurifications();
                for (SynthesisPurification mySynthesisPurification : mySynthesisPurificationSet) {
                    mySynthesisPurification.toString();
                    logger.debug("mySynthesisPurification.getId()=="+ mySynthesisPurification.getId());
                    // synthesisPurifications.protocol
                    Protocol myProtocol = mySynthesisPurification.getProtocol();
                    if (myProtocol != null) {
                        myProtocol.toString();
                        logger.debug("mySynthesisPurification.myProtocol.getId()==" + myProtocol.getId());
                        // synthesisPurifications.protocol.file
                        File myFile = myProtocol.getFile();
                        if (myFile != null) {
                            myFile.toString();
                            logger.debug("myProtocol.myFile.getId()==" + myFile.getId());
                            // synthesisPurifications.protocol.file.keywordCollection
                            Collection<Keyword> myKeywordCollection = myFile.getKeywordCollection();
                            logger.debug("myKeywordCollection.size()==" + myKeywordCollection.size());
                            for (Keyword myKeyword : myKeywordCollection) {
                                myKeyword.toString();
                            }
                        }
                    }

                    // synthesisPurifications.purities
                    Set<SynthesisPurity> mySynthesisPuritySet = mySynthesisPurification.getPurities();
                    for (SynthesisPurity mySynthesisPurity : mySynthesisPuritySet) {
                        mySynthesisPurity.toString();
                        logger.debug("mySynthesisPurification.mySynthesisPurity.getId()==" + mySynthesisPurity.getId());
                        // synthesisPurifications.purities.purityDatumCollection
                        Set<PurityDatumCondition> myPurityDatumConditionSet = mySynthesisPurity.getPurityDatumCollection();
                        for (PurityDatumCondition myPurityDatumCondition : myPurityDatumConditionSet) {
                            myPurityDatumCondition.toString();
                            logger.debug("mySynthesisPurity.myPurityDatumCondition.getId()=="+ myPurityDatumCondition.getId());
                            // synthesisPurifications.purities.purityDatumCollection.columnHeader
                            PurityColumnHeader myPurityColumnHeader = myPurityDatumCondition.getColumnHeader();
                            if (myPurityColumnHeader != null) {
                                myPurityColumnHeader.toString();
                                logger.debug("myPurityDatumCondition.myPurityColumnHeader.getId()=="+ myPurityColumnHeader.getId());
                            }
                        }
                        // synthesisPurifications.purities.files
                        Set<File> myFileSet = mySynthesisPurity.getFiles();
                        for (File myFile : myFileSet) {
                            myFile.toString();
                            logger.debug("mySynthesisPurity.myFile.getId()==" + myFile.getId());
                            // synthesisPurifications.purities.files.keywordCollection
                            Collection<Keyword> myKeywordCollection = myFile.getKeywordCollection();
                            logger.debug("myKeywordCollection.size()==" + myKeywordCollection.size());
                            for (Keyword myKeyword : myKeywordCollection) {
                                myKeyword.toString();
                            }
                        }
                    }

                    // synthesisPurifications.purificationConfigs
                    Set<PurificationConfig> myPurificationConfigSet = mySynthesisPurification.getPurificationConfigs();
                    for (PurificationConfig myPurificationConfig : myPurificationConfigSet) {
                        myPurificationConfig.toString();
                        logger.debug("mySynthesisPurification.myPurificationConfig.getDescription()=="+ myPurificationConfig.getDescription());
                        // synthesisPurifications.purificationConfigs.technique
                        Technique myTechnique = myPurificationConfig.getTechnique();
                        if (myTechnique != null) {
                            myTechnique.toString();
                            logger.debug("myPurificationConfig.myTechnique.getId()=="+ myTechnique.getId());
                        }
                        // synthesisPurifications.purificationConfigs.instrumentCollection
                        Collection<Instrument> myInstrumentCollection = myPurificationConfig.getInstrumentCollection();
                        logger.debug("myInstrumentCollection.size()==" + myInstrumentCollection.size());
                        for (Instrument myInstrument : myInstrumentCollection) {
                            myInstrument.toString();
                        }
                    } // PurificationConfig
                } // SynthesisPurification

                return true;
            }
        };
        mySynthesis = appService.queryAndProcess(crit, myTransactionInsertion);
        logger.debug("ran appService.queryAndProcess");
        return mySynthesis;
    }

    public Synthesis old_findSynthesisBySampleId(Long sampleId) throws Exception {
        if (!springSecurityAclService.currentUserHasReadPermission(sampleId, SecureClassesEnum.SAMPLE.getClazz()) &&
                !springSecurityAclService.currentUserHasWritePermission(sampleId, SecureClassesEnum.SAMPLE.getClazz())) {
            throw new NoAccessException("User has no access to the sample " + sampleId);
        }


        Synthesis synthesis =null;
        CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
        DetachedCriteria crit = DetachedCriteria.forClass(Synthesis.class);
        crit.createAlias("sample", "sample");
        crit.add(Property.forName("sample.id").eq(sampleId));
        crit.setFetchMode("synthesis", FetchMode.JOIN);
        crit.setFetchMode("synthesisMaterials", FetchMode.JOIN);
        crit.setFetchMode("synthesisMaterials,protocol", FetchMode.JOIN);
        crit.setFetchMode("synthesisMaterials.protocol.file", FetchMode.JOIN);
        crit.setFetchMode("synthesisMaterials.protocol.file.keywordCollection", FetchMode.JOIN);
        crit.setFetchMode("synthesisMaterials.files", FetchMode.JOIN);
        crit.setFetchMode("synthesisMaterials.files.keywordCollection", FetchMode.JOIN);
        crit.setFetchMode("synthesisMaterials.synthesisMaterialElements", FetchMode.JOIN);
        crit.setFetchMode("synthesisMaterials.synthesisMaterialElements.files", FetchMode.JOIN);
        crit.setFetchMode("synthesisMaterials.synthesisMaterialElements.supplier",FetchMode.JOIN);
        crit.setFetchMode("synthesisMaterials.synthesisMaterialElements.smeInherentFunctions", FetchMode.JOIN);
        crit.setFetchMode("synthesisFunctionalizations", FetchMode.JOIN);
        crit.setFetchMode("synthesisFunctionalizations.protocol", FetchMode.JOIN);
        crit.setFetchMode("synthesisFunctionalizations.synthesisFunctionalizationElements", FetchMode.JOIN);
        crit.setFetchMode("synthesisFunctionalizations.synthesisFunctionalizationElements.sfeInherentFunctions", FetchMode.JOIN);
        crit.setFetchMode("synthesisFunctionalizations.synthesisFunctionalizationElements.files", FetchMode.JOIN);
        crit.setFetchMode("synthesisFunctionalizations.synthesisFunctionalizationElements.files.keywordCollection", FetchMode.JOIN);
        crit.setFetchMode("synthesisPurifications", FetchMode.JOIN);
        crit.setFetchMode("synthesisPurifications.protocol", FetchMode.JOIN);
        crit.setFetchMode("synthesisPurifications.protocol.file", FetchMode.JOIN);
        crit.setFetchMode("synthesisPurifications.protocol.file.keywordCollection", FetchMode.JOIN);
        crit.setFetchMode("synthesisPurifications.purities", FetchMode.JOIN);
        crit.setFetchMode("synthesisPurifications.purities.purityDatumCollection", FetchMode.JOIN);
        crit.setFetchMode("synthesisPurifications.purities.purityDatumCollection.columnHeader",FetchMode.JOIN);
        crit.setFetchMode("synthesisPurifications.purities.files", FetchMode.JOIN);
        crit.setFetchMode("synthesisPurifications.purities.files.keywordCollection", FetchMode.JOIN);
        crit.setFetchMode("synthesisPurifications.purificationConfigs", FetchMode.JOIN);
        crit.setFetchMode("synthesisPurifications.purificationConfigs.technique", FetchMode.JOIN);
        crit.setFetchMode("synthesisPurifications.purificationConfigs.instrumentCollection", FetchMode.JOIN);
        crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
        List result = appService.query(crit);
        if (!result.isEmpty()){
            synthesis = (Synthesis)result.get(0);
            synthesis.getSample().setSynthesis(synthesis);
        }
        return synthesis;
    }

    public SynthesisFunctionalization findSynthesisFunctionalizationById(Long sampleId, Long entityId) throws Exception{

        SynthesisFunctionalization entity = null;
        if (!springSecurityAclService.currentUserHasReadPermission(Long.valueOf(sampleId), SecureClassesEnum.SAMPLE.getClazz()) &&
                !springSecurityAclService.currentUserHasWritePermission(Long.valueOf(sampleId), SecureClassesEnum.SAMPLE.getClazz())) {
            throw new NoAccessException("User has no access to the synthesis functionalization entity " + entityId);
        }
        CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
        DetachedCriteria crit = DetachedCriteria.forClass(SynthesisFunctionalization.class).add(
                Property.forName("id").eq(new Long(entityId)));
        crit.setFetchMode("files", FetchMode.JOIN);
        crit.setFetchMode("files.keywordConnection", FetchMode.JOIN);
        crit.setFetchMode("protocol", FetchMode.JOIN);
        crit.setFetchMode("protocol.file", FetchMode.JOIN);
        crit.setFetchMode("protocol.file.keywordCollection", FetchMode.JOIN);
        crit.setFetchMode("synthesisFunctionalizationElements", FetchMode.JOIN);
        crit.setFetchMode("synthesisFunctionalizationElements.sfeInherentFunctions", FetchMode.JOIN);
        crit.setFetchMode("synthesisFunctionalizationElements.files", FetchMode.JOIN);
        crit.setFetchMode("synthesisFunctionalizationElements.files.keywordCollection", FetchMode.JOIN);


        crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
        List result = appService.query(crit);
        if (!result.isEmpty()) {
            entity = (SynthesisFunctionalization) result.get(0);
        }
        return entity;
    }

    public Synthesis findSynthesisById(Long synthesisId) throws Exception {
        Synthesis synthesis =null;
        CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
        DetachedCriteria crit = DetachedCriteria.forClass(Synthesis.class);
//        crit.createAlias("synthesis", "synthesis");
        crit.add(Property.forName("id").eq(synthesisId));
        crit.setFetchMode("sample", FetchMode.JOIN);

        crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
        List result = appService.query(crit);
        if (!result.isEmpty()){
            synthesis = (Synthesis)result.get(0);
            synthesis.getSample().setSynthesis(synthesis);
        }
        return synthesis;
    }

    public List<String> getAllActivationMethods() throws Exception {
        CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
        HQLCriteria crit = new HQLCriteria("SELECT DISTINCT value  FROM gov.nih.nci.cananolab.domain.common.CommonLookup where name = 'activation method'");
        List results = appService.query(crit);
        List<String> activationMethods = new ArrayList<String>();
        for(int i = 0; i< results.size();i++){
            String activationMethod = (String) results.get(i).toString();
            activationMethods.add(activationMethod);
        }
        return activationMethods;
    }


    public SynthesisMaterial findSynthesisMaterialById(Long sampleId, Long entityId) throws Exception{
        SynthesisMaterial entity = null;
        if (!springSecurityAclService.currentUserHasReadPermission(Long.valueOf(sampleId), SecureClassesEnum.SAMPLE.getClazz()) &&
                !springSecurityAclService.currentUserHasWritePermission(Long.valueOf(sampleId), SecureClassesEnum.SAMPLE.getClazz())) {
            throw new NoAccessException("User has no access to the synthesis material entity " + entityId);
        }
        CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
        DetachedCriteria crit = DetachedCriteria.forClass(SynthesisMaterial.class).add(
                Property.forName("id").eq(new Long(entityId)));

        crit.setFetchMode("files", FetchMode.JOIN);
        crit.setFetchMode("files.keywordCollection", FetchMode.JOIN);
        crit.setFetchMode("protocol", FetchMode.JOIN);
        crit.setFetchMode("protocol.file", FetchMode.JOIN);
        crit.setFetchMode("protocol.file.keywordCollection", FetchMode.JOIN);
        crit.setFetchMode("synthesisMaterialElements", FetchMode.JOIN);
        crit.setFetchMode("synthesisMaterialElements.files", FetchMode.JOIN);
        crit.setFetchMode("synthesisMaterialElements.smeInherentFunctions", FetchMode.JOIN);

//        crit.setFetchMode("synthesisMaterials", FetchMode.JOIN);
//        crit.setFetchMode("synthesisMaterials.files", FetchMode.JOIN);
//        crit.setFetchMode("synthesisMaterials.files.keywordCollection", FetchMode.JOIN);
//        crit.setFetchMode("synthesisMaterials,protocol", FetchMode.JOIN);
//        crit.setFetchMode("synthesisMaterials.protocol.file", FetchMode.JOIN);
//        crit.setFetchMode("synthesisMaterials.protocol.file.keywordCollection", FetchMode.JOIN);
//        crit.setFetchMode("synthesisMaterials.synthesisMaterialElements", FetchMode.JOIN);
//        crit.setFetchMode("synthesisMaterials.synthesisMaterialElements.files", FetchMode.JOIN);
//        crit.setFetchMode("synthesisMaterials.synthesisMaterialElements.smeInherentFunctions", FetchMode.JOIN);
        crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
        List result = appService.query(crit);
        if (!result.isEmpty()) {
            entity = (SynthesisMaterial) result.get(0);
        }
        return entity;
    }

    public SynthesisPurification findSynthesisPurificationById(Long sampleId, Long entityId) throws Exception{
        SynthesisPurification entity = null;
        if (!springSecurityAclService.currentUserHasReadPermission(Long.valueOf(sampleId), SecureClassesEnum.SAMPLE.getClazz()) &&
                !springSecurityAclService.currentUserHasWritePermission(Long.valueOf(sampleId), SecureClassesEnum.SAMPLE.getClazz())) {
            throw new NoAccessException("User has no access to the synthesis purification entity " + entityId);
        }

        return findSynthesisPurificationById(entityId);
//        CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
////        DetachedCriteria crit = DetachedCriteria.forClass(SynthesisPurification.class).add(
////                Property.forName("id").eq(new Long(entityId)));
//        DetachedCriteria crit = DetachedCriteria.forClass(SynthesisPurification.class).add(
//                Property.forName("id").eq(new Long(entityId)));
//        crit.setFetchMode("files", FetchMode.JOIN);
//        crit.setFetchMode("files.keywordCollection", FetchMode.JOIN);
//        crit.setFetchMode("purities", FetchMode.JOIN);
//        crit.setFetchMode("purities.purityDatumCollection", FetchMode.JOIN);
//        crit.setFetchMode("purities.purityDatumCollection.columnHeader", FetchMode.JOIN);
////        crit.setFetchMode("purities.purityDatumCollection.conditionCollection", FetchMode.JOIN);
//        crit.setFetchMode("purities.files", FetchMode.JOIN);
//        crit.setFetchMode("purities.files.keywordCollection", FetchMode.JOIN);
//        crit.setFetchMode("purificationConfigs", FetchMode.JOIN);
//        crit.setFetchMode("purificationConfigs.technique", FetchMode.JOIN);
//        crit.setFetchMode("purificationConfigs.instrumentCollection", FetchMode.JOIN);
//        crit.setFetchMode("protocol", FetchMode.JOIN);
//        crit.setFetchMode("protocol.file", FetchMode.JOIN);
//        crit.setFetchMode("protocol.file.keywordCollection", FetchMode.JOIN);
//
////        crit.setFetchMode("synthesisPurifications", FetchMode.JOIN);
////        crit.setFetchMode("synthesisPurifications.files", FetchMode.JOIN);
////        crit.setFetchMode("synthesisPurifications.files.keywordCollection", FetchMode.JOIN);
////        crit.setFetchMode("synthesisPurifications.purities", FetchMode.JOIN);
////        crit.setFetchMode("synthesisPurifications.purities.purityDatumCollection", FetchMode.JOIN);
////        crit.setFetchMode("synthesisPurifications.purities.purityDatumCollection.conditionCollection", FetchMode.JOIN);
////        crit.setFetchMode("synthesisPurifications.purities.files", FetchMode.JOIN);
////        crit.setFetchMode("synthesisPurifications.purities.files.keywordCollection", FetchMode.JOIN);
////        crit.setFetchMode("synthesisPurifications.purificationConfigs", FetchMode.JOIN);
////        crit.setFetchMode("synthesisPurifications.purificationConfigs.technique", FetchMode.JOIN);
////        crit.setFetchMode("synthesisPurifications.purificationConfigs.instrumentCollection", FetchMode.JOIN);
//        crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
//        List result = appService.query(crit);
//        if (!result.isEmpty()) {
//            entity = (SynthesisPurification) result.get(0);
//        }
//        return entity;
    }

    public SynthesisPurification findSynthesisPurificationById(Long entityId) throws Exception {
        SynthesisPurification entity = null;


        CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
//        DetachedCriteria crit = DetachedCriteria.forClass(SynthesisPurification.class).add(
//                Property.forName("id").eq(new Long(entityId)));
        DetachedCriteria crit = DetachedCriteria.forClass(SynthesisPurification.class).add(
                Property.forName("id").eq(new Long(entityId)));
        crit.setFetchMode("files", FetchMode.JOIN);
        crit.setFetchMode("files.keywordCollection", FetchMode.JOIN);
        crit.setFetchMode("purities", FetchMode.JOIN);
        crit.setFetchMode("purities.purityDatumCollection", FetchMode.JOIN);
        crit.setFetchMode("purities.purityDatumCollection.columnHeader", FetchMode.JOIN);
//        crit.setFetchMode("purities.purityDatumCollection.conditionCollection", FetchMode.JOIN);
        crit.setFetchMode("purities.files", FetchMode.JOIN);
        crit.setFetchMode("purities.files.keywordCollection", FetchMode.JOIN);
        crit.setFetchMode("purificationConfigs", FetchMode.JOIN);
        crit.setFetchMode("purificationConfigs.technique", FetchMode.JOIN);
        crit.setFetchMode("purificationConfigs.instrumentCollection", FetchMode.JOIN);
        crit.setFetchMode("protocol", FetchMode.JOIN);
        crit.setFetchMode("protocol.file", FetchMode.JOIN);
        crit.setFetchMode("protocol.file.keywordCollection", FetchMode.JOIN);

//        crit.setFetchMode("synthesisPurifications", FetchMode.JOIN);
//        crit.setFetchMode("synthesisPurifications.files", FetchMode.JOIN);
//        crit.setFetchMode("synthesisPurifications.files.keywordCollection", FetchMode.JOIN);
//        crit.setFetchMode("synthesisPurifications.purities", FetchMode.JOIN);
//        crit.setFetchMode("synthesisPurifications.purities.purityDatumCollection", FetchMode.JOIN);
//        crit.setFetchMode("synthesisPurifications.purities.purityDatumCollection.conditionCollection", FetchMode.JOIN);
//        crit.setFetchMode("synthesisPurifications.purities.files", FetchMode.JOIN);
//        crit.setFetchMode("synthesisPurifications.purities.files.keywordCollection", FetchMode.JOIN);
//        crit.setFetchMode("synthesisPurifications.purificationConfigs", FetchMode.JOIN);
//        crit.setFetchMode("synthesisPurifications.purificationConfigs.technique", FetchMode.JOIN);
//        crit.setFetchMode("synthesisPurifications.purificationConfigs.instrumentCollection", FetchMode.JOIN);
        crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
        List result = appService.query(crit);
        if (!result.isEmpty()) {
            entity = (SynthesisPurification) result.get(0);
        }
        return entity;
    }

    public List<File> findFilesByMaterialId(Long synthesisId, Long synMatId, String className) throws Exception {
//        if (!springSecurityAclService.currentUserHasReadPermission(Long.valueOf(sampleId), SecureClassesEnum.SAMPLE.getClazz()) &&
//                !springSecurityAclService.currentUserHasWritePermission(Long.valueOf(sampleId), SecureClassesEnum.SAMPLE.getClazz())) {
//            throw new NoAccessException("User has no access to the synthesis entity " + sampleId);
//        }
        List<File> fileCollection = new ArrayList<File>();
        String fullClassName = null;
        if (ClassUtils.getFullClass(className) != null) {
            fullClassName = ClassUtils.getFullClass(className).getName();
        } else {
            return null;
        }
        CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
        String hql = "select anEntity.fileCollection from " + fullClassName + " anEntity where anEntity.id = " + synMatId;

        HQLCriteria crit = new HQLCriteria(hql);
        List results = appService.query(crit);
        for (int i = 0; i < results.size(); i++) {
            File file = (File) results.get(i);
            //TODO work out security for synthesis material
            if (springSecurityAclService.currentUserHasReadPermission(synthesisId, SecureClassesEnum.SYNTHESIS.getClazz()) ||
                    springSecurityAclService.currentUserHasWritePermission(synthesisId, SecureClassesEnum.SYNTHESIS.getClazz())) {
                fileCollection.add(file);
            } else {
                logger.debug("User doesn't have access to file of id:" + file.getId());
            }
        }
        return fileCollection;
    }

    public List<File> findFilesBySynFuncElement(Long sampleId, Long elementId, String className) throws Exception {
        List<File> fileCollection = new ArrayList<File>();
        String fullClassName = null;
        if (ClassUtils.getFullClass(className) != null) {
            fullClassName = ClassUtils.getFullClass(className).getName();
        } else {
            return null;
        }

        CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
        String hql = "select anEntity.files from " + fullClassName + " anEntity where anEntity.id = " + elementId;
        HQLCriteria crit = new HQLCriteria(hql);
        List results = appService.query(crit);
        for (int i = 0; i < results.size(); i++) {
            File file = (File) results.get(i);
            if (springSecurityAclService.currentUserHasReadPermission(sampleId, SecureClassesEnum.SAMPLE.getClazz()) ||
                    springSecurityAclService.currentUserHasWritePermission(sampleId, SecureClassesEnum.SAMPLE.getClazz())) {
                fileCollection.add(file);
            } else {
                logger.debug("User doesn't have access to file of id:" + file.getId());
            }
        }
        return fileCollection;

    }

    public List<Instrument> findInstrumentByType(String type) throws Exception {
        List<Instrument> instruments = new ArrayList<Instrument>();
        String fullClassName = null;
        if (ClassUtils.getFullClass("Instrument") != null){
            fullClassName = ClassUtils.getFullClass("Instrument").getName();
        } else {
            return null;
        }
        CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
        String hql = "select distinct manufacturer, model_name from " + fullClassName + " anEntity where anEntity.type = " + type;

        HQLCriteria crit = new HQLCriteria(hql);
        List results = appService.query(crit);
        for (int i = 0; i < results.size(); i++) {
            Instrument instrument = (Instrument) results.get(i);
            //TODO work out security for synthesis functionalization?
                instruments.add(instrument);

        }
        return instruments;
    }


    public List<File> findFilesByFunctionalizationId(Long synthesisId, Long synFuncId, String className) throws Exception {

        List<File> fileCollection = new ArrayList<File>();
        String fullClassName = null;
        if (ClassUtils.getFullClass(className) != null) {
            fullClassName = ClassUtils.getFullClass(className).getName();
        } else {
            return null;
        }
        CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
        String hql = "select anEntity.fileCollection from " + fullClassName + " anEntity where anEntity.id = " + synFuncId;

        HQLCriteria crit = new HQLCriteria(hql);
        List results = appService.query(crit);
        for (int i = 0; i < results.size(); i++) {
            File file = (File) results.get(i);
            //TODO work out security for synthesis functionalization?
            if (springSecurityAclService.currentUserHasReadPermission(synthesisId, SecureClassesEnum.SYNTHESIS.getClazz()) ||
                    springSecurityAclService.currentUserHasWritePermission(synthesisId, SecureClassesEnum.SYNTHESIS.getClazz())) {
                fileCollection.add(file);
            } else {
                logger.debug("User doesn't have access to file of id:" + file.getId());
            }
        }
        return fileCollection;
    }

    public List<File> findFilesBySynMatElement(Long sampleId, Long elementId, String className) throws Exception {
        List<File> fileCollection = new ArrayList<File>();
        String fullClassName = null;
        if (ClassUtils.getFullClass(className) != null) {
            fullClassName = ClassUtils.getFullClass(className).getName();
        } else {
            return null;
        }

        CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
        String hql = "select anEntity.files from " + fullClassName + " anEntity where anEntity.id = " + elementId;
        HQLCriteria crit = new HQLCriteria(hql);
        List results = appService.query(crit);
        for (int i = 0; i < results.size(); i++) {
            File file = (File) results.get(i);
            if (springSecurityAclService.currentUserHasReadPermission(sampleId, SecureClassesEnum.SAMPLE.getClazz()) ||
                    springSecurityAclService.currentUserHasWritePermission(sampleId, SecureClassesEnum.SAMPLE.getClazz())) {
                fileCollection.add(file);
            } else {
                logger.debug("User doesn't have access to file of id:" + file.getId());
            }
        }
        return fileCollection;

    }

//    public List<PurityDatumCondition>  findPurityDatumConditionByDatum(Long datumPkId) throws Exception {
//        List<PurityDatumCondition> conditionList = new ArrayList<PurityDatumCondition>();
//        CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
//        String fullClassName;
//        if (ClassUtils.getFullClass("PurityDatumCondition") != null) {
//            fullClassName = ClassUtils.getFullClass("PurityDatumCondition").getName();
//        } else {
//            return null;
//        }
//        DetachedCriteria crit = DetachedCriteria.forClass(PurityDatumCondition.class).add(
//                Property.forName("purityDatumPkId").eq(new Long(datumPkId)));
//        String hql = "select anEntity from " + fullClassName + " anEntity where anEntity.purity_datum_pk_id = " + datumPkId;
//        crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
//        List results = appService.query(crit);
//        for (int i = 0; i < results.size(); i++) {
//            PurityDatumCondition condition = (PurityDatumCondition) results.get(i);
//            conditionList.add(condition);
//        }
//        return conditionList;
//}

    public Set<PurityDatumCondition> findPurityDatumConditionByPurity(Long purityPkId) throws Exception
    {

        PurityDatumCondition datum;
        CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
        DetachedCriteria crit = DetachedCriteria.forClass(PurityDatumCondition.class);
//        crit.createAlias("datum", "datum");
//        crit.add(Property.forName("datum.id").eq(datumPkId));
        crit.add(Property.forName("id").eq(purityPkId));
        crit.setFetchMode("conditionCollection", FetchMode.JOIN);
        crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
        List results = appService.query(crit);


        if (!results.isEmpty()){
            Set<PurityDatumCondition> purityDatumConditions = new HashSet<PurityDatumCondition>();
            for(Object o:results){
            datum = (PurityDatumCondition) o;
//            return  datum.getConditionCollection();
            purityDatumConditions.add(datum);}
            return purityDatumConditions;
        }

        return null;

    }

    public SynthesisPurity getPurityById(Long purityId) throws Exception {
        SynthesisPurity synthesisPurity;
        CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
        DetachedCriteria crit = DetachedCriteria.forClass(SynthesisPurity.class);
        crit.add(Property.forName("id").eq(purityId));
        List results = appService.query(crit);
        if(!results.isEmpty()){
            synthesisPurity = (SynthesisPurity)results.get(0);
            return synthesisPurity;
        }
        return null;
    }

    public Set<PurityDatumCondition> getPurityDatumByPurity(Long purityId) throws Exception{
        SynthesisPurity synthesisPurity;
        CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
        DetachedCriteria crit = DetachedCriteria.forClass(SynthesisPurity.class);
        crit.add(Property.forName("id").eq(purityId));
        crit.setFetchMode("purityDatum",FetchMode.JOIN);
        List results = appService.query(crit);

        if(!results.isEmpty()){
            synthesisPurity = (SynthesisPurity)results.get(0);
            return synthesisPurity.getPurityDatumCollection();
        }
        return null;
    }

    public Set<PurificationConfig> findConfigByPurificationId(Long id) throws Exception {
        SynthesisPurification purification;
        CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
        DetachedCriteria crit = DetachedCriteria.forClass(SynthesisPurification.class);
        crit.add(Property.forName("id").eq(id));
        crit.setFetchMode("technique",FetchMode.JOIN);
//        crit.setFetchMode("purificationConfig", FetchMode.JOIN);

        List results = appService.query(crit);
        if(!results.isEmpty()){
            purification = (SynthesisPurification)results.get(0);
            return  purification.getPurificationConfigs();
        }
        return null;
    }


    public List<String> getAllSupplierNames() throws Exception {
        CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
        HQLCriteria crit = new HQLCriteria("select distinct supplierName from gov.nih.nci.cananolab.domain.common.Supplier");
        List results = appService.query(crit);
        List<String> supplierNames = new ArrayList<String>();
        for(int i = 0; i< results.size();i++){
            String supplier_name = (String) results.get(i).toString();
            supplierNames.add(supplier_name);
        }
        if(!supplierNames.contains("other")){
            supplierNames.add("other");
        }
        return supplierNames;
    }


}
