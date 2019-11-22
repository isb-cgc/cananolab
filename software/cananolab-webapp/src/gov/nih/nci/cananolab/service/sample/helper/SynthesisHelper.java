package gov.nih.nci.cananolab.service.sample.helper;

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
//        crit.setFetchMode("synthesisMaterials.protocol", FetchMode.JOIN);
        crit.setFetchMode("synthesisMaterials.files", FetchMode.JOIN);
        crit.setFetchMode("synthesisMaterials.files.keywordCollection", FetchMode.JOIN);
        crit.setFetchMode("synthesisMaterials.synthesisMaterialElements", FetchMode.JOIN);
        crit.setFetchMode("synthesisMaterials.synthesisMaterialElements.files", FetchMode.JOIN);
        crit.setFetchMode("synthesisMaterials.synthesisMaterialElements.smeInherentFunctions", FetchMode.JOIN);
        crit.setFetchMode("synthesisFunctionalizations", FetchMode.JOIN);
//        crit.setFetchMode("synthesisFunctionalizations.protocol", FetchMode.JOIN);
        crit.setFetchMode("synthesisFunctionalizations.synthesisFunctionalizationElements", FetchMode.JOIN);
        crit.setFetchMode("synthesisFunctionalizations.synthesisFunctionalizationElements.sfeInherentFunctions", FetchMode.JOIN);
        crit.setFetchMode("synthesisFunctionalizations.synthesisFunctionalizationElements.files", FetchMode.JOIN);
        crit.setFetchMode("synthesisFunctionalizations.synthesisFunctionalizationElements.files.keywordCollection", FetchMode.JOIN);
        crit.setFetchMode("synthesisPurifications", FetchMode.JOIN);
//        crit.setFetchMode("synthesisPurifications.protocol", FetchMode.JOIN);
        crit.setFetchMode("synthesisPurifications.purities", FetchMode.JOIN);
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

    public SynthesisFunctionalization findSynthesisFunctionalizationzationById(Long sampleId, Long dataId) {
        //TODO write
        return null;
    }

    public SynthesisMaterial findSynthesisMaterialById(Long sampleId, Long dataId) {
        //TODO write
        return null;
    }

    public SynthesisPurification findSynthesisPurificationById(Long sampleId, Long dataId) {
        //TODO write
        return null;
    }
}
