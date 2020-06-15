package gov.nih.nci.cananolab.service.sample.helper;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.common.PurityDatum;
import gov.nih.nci.cananolab.domain.common.PurityDatumCondition;
import gov.nih.nci.cananolab.domain.particle.*;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.exception.SynthesisException;
import gov.nih.nci.cananolab.security.enums.SecureClassesEnum;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.system.applicationservice.CaNanoLabApplicationService;
import gov.nih.nci.cananolab.system.applicationservice.client.ApplicationServiceProvider;
import gov.nih.nci.cananolab.system.query.hibernate.HQLCriteria;
import gov.nih.nci.cananolab.util.ClassUtils;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import org.apache.log4j.Logger;
import org.hibernate.FetchMode;
import org.hibernate.criterion.CriteriaSpecification;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Property;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("synthesisHelper")
public class SynthesisHelper
{
    private static Logger logger = Logger.getLogger(SynthesisHelper.class);


    @Autowired
    private SpringSecurityAclService springSecurityAclService;

    public SynthesisHelper() {
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
        String hql = "select anEntity.smeInherentFunctions from " + fullClassName + " anEntity where anEntity.id = " + id;
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

    public Synthesis findSynthesisBySampleId(Long sampleId) throws Exception {
        if (!springSecurityAclService.currentUserHasReadPermission(sampleId, SecureClassesEnum.SAMPLE.getClazz()) &&
                !springSecurityAclService.currentUserHasWritePermission(sampleId, SecureClassesEnum.SAMPLE.getClazz())) {
            throw new NoAccessException("User has no access to the sample " + sampleId);
        }


        Synthesis synthesis =null;
        CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
        DetachedCriteria crit = DetachedCriteria.forClass(Synthesis.class);
        crit.createAlias("sample", "sample");
        crit.add(Property.forName("sample.id").eq(sampleId));
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
        crit.setFetchMode("synthesisPurifications.purities.purityDatumCollection.conditionCollection", FetchMode.JOIN);
        crit.setFetchMode("synthesisPurifications.purities.files", FetchMode.JOIN);
        crit.setFetchMode("synthesisPurifications.purities.files.keywordCollection", FetchMode.JOIN);
        crit.setFetchMode("synthesisPurifications.purificationConfigs", FetchMode.JOIN);
        crit.setFetchMode("synthesisPurifications.purificationConfigs.technique", FetchMode.JOIN);
        crit.setFetchMode("synthesisPurifications.purificationConfigs.instrumentCollection", FetchMode.JOIN);
        crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
        List result = appService.query(crit);
        if (!result.isEmpty()){
            synthesis = (Synthesis)result.get(0);
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

//        crit.setFetchMode("synthesisFunctionalizationElements.activationMethod", FetchMode.JOIN);
//        crit.setFetchMode("synthesisFunctionalizationElements.activationEffect", FetchMode.JOIN);


//        crit.setFetchMode("synthesisFunctionalizations", FetchMode.JOIN);
//        crit.setFetchMode("synthesisFunctionalizations.files", FetchMode.JOIN);
//        crit.setFetchMode("synthesisFunctionalizations.files.keywordConnection", FetchMode.JOIN);
//        crit.setFetchMode("synthesisFunctionalizations.synthesisFunctionalizationElements", FetchMode.JOIN);
//        crit.setFetchMode("synthesisFunctionalizations.synthesisFunctionalizationElements.sfeInherentFunctions", FetchMode.JOIN);
//        crit.setFetchMode("synthesisFunctionalizations.synthesisFunctionalizationElements.files", FetchMode.JOIN);
//        crit.setFetchMode("synthesisFunctionalizations.synthesisFunctionalizationElements.files.keywordCollection", FetchMode.JOIN);

        crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
        List result = appService.query(crit);
        if (!result.isEmpty()) {
            entity = (SynthesisFunctionalization) result.get(0);
        }
        return entity;
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

        CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
//        DetachedCriteria crit = DetachedCriteria.forClass(SynthesisPurification.class).add(
//                Property.forName("id").eq(new Long(entityId)));
        DetachedCriteria crit = DetachedCriteria.forClass(SynthesisPurification.class).add(
                Property.forName("id").eq(new Long(entityId)));
        crit.setFetchMode("files", FetchMode.JOIN);
        crit.setFetchMode("files.keywordCollection", FetchMode.JOIN);
        crit.setFetchMode("purities", FetchMode.JOIN);
        crit.setFetchMode("purities.purityDatumCollection", FetchMode.JOIN);
        crit.setFetchMode("purities.purityDatumCollection.conditionCollection", FetchMode.JOIN);
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

    public Set<PurityDatumCondition> findPurityDatumConditionByDatum(Long datumPkId) throws Exception
    {

        PurityDatum datum;
        CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
        DetachedCriteria crit = DetachedCriteria.forClass(PurityDatum.class);
//        crit.createAlias("datum", "datum");
//        crit.add(Property.forName("datum.id").eq(datumPkId));
        crit.add(Property.forName("id").eq(datumPkId));
        crit.setFetchMode("conditionCollection", FetchMode.JOIN);
        crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
        List results = appService.query(crit);

        if (!results.isEmpty()){
            datum = (PurityDatum)results.get(0);
            return  datum.getConditionCollection();
        }

        return null;

    }

    public Set<PurityDatum> getPurityDatumByPurity(Long purityId) throws Exception{
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

    //TODO retrieve list of Supplier names
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
