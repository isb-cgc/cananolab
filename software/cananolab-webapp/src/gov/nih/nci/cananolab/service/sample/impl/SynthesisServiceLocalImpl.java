package gov.nih.nci.cananolab.service.sample.impl;

import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisBean;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.exception.SynthesisException;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.service.BaseServiceLocalImpl;
import gov.nih.nci.cananolab.service.sample.SynthesisService;

public class SynthesisServiceLocalImpl extends BaseServiceLocalImpl implements SynthesisService {
    @Override
    public SpringSecurityAclService getSpringSecurityAclService() {
        return null;
    }

    @Override
    public SynthesisBean findSynthesisById(String sampleId, String dataId) throws SynthesisException, NoAccessException {
        return null;
    }

    @Override
    public SynthesisBean findSynthesisById(String sampleId) {
        return null;
    }
}
