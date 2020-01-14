package gov.nih.nci.cananolab.service.sample.helper;

import gov.nih.nci.cananolab.domain.particle.NanomaterialEntity;
import gov.nih.nci.cananolab.domain.particle.Synthesis;
import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalization;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterial;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurification;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.security.enums.SecureClassesEnum;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.system.applicationservice.CaNanoLabApplicationService;
import gov.nih.nci.cananolab.system.applicationservice.client.ApplicationServiceProvider;
import java.util.List;
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
        crit.setFetchMode("synthesisPurifications.purities.purityDatumCollection.experimentConditions", FetchMode.JOIN);
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
        crit.setFetchMode("synthesisFunctionalizations", FetchMode.JOIN);
        crit.setFetchMode("synthesisFunctionalizations.files", FetchMode.JOIN);
        crit.setFetchMode("synthesisFunctionalizations.files.keywordConnection", FetchMode.JOIN);
        crit.setFetchMode("synthesisFunctionalizations.synthesisFunctionalizationElements", FetchMode.JOIN);

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
        crit.setFetchMode("synthesisMaterials", FetchMode.JOIN);
        crit.setFetchMode("synthesisMaterials.files", FetchMode.JOIN);
        crit.setFetchMode("synthesisMaterials.files.keywordCollection", FetchMode.JOIN);
        crit.setFetchMode("synthesisMaterials.synthesisMaterialElements", FetchMode.JOIN);
        crit.setFetchMode("synthesisMaterials.synthesisMaterialElements.files", FetchMode.JOIN);
        crit.setFetchMode("synthesisMaterials.synthesisMaterialElements.smeInherentFunctions", FetchMode.JOIN);
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
        DetachedCriteria crit = DetachedCriteria.forClass(SynthesisPurification.class).add(
                Property.forName("id").eq(new Long(entityId)));
        crit.setFetchMode("synthesisPurifications", FetchMode.JOIN);
        crit.setFetchMode("synthesisPurifications.files", FetchMode.JOIN);
        crit.setFetchMode("synthesisPurifications.files.keywordCollection", FetchMode.JOIN);
        crit.setFetchMode("synthesisPurifications.purities", FetchMode.JOIN);
        crit.setFetchMode("synthesisPurifications.purities.purityDatums", FetchMode.JOIN);
        crit.setFetchMode("synthesisPurifications.purities.files", FetchMode.JOIN);
        crit.setFetchMode("synthesisPurifications.purificationConfigs", FetchMode.JOIN);
        crit.setFetchMode("synthesisPurifications.purificationConfigs.instruments", FetchMode.JOIN);
        crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
        List result = appService.query(crit);
        if (!result.isEmpty()) {
            entity = (SynthesisPurification) result.get(0);
        }
        return entity;
    }
}
