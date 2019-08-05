package gov.nih.nci.cananolab.service.sample;

import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisBean;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.exception.SynthesisException;
import gov.nih.nci.cananolab.service.BaseService;

public interface SynthesisService extends BaseService {
    SynthesisBean findSynthesisById(String sampleId, String dataId)throws SynthesisException, NoAccessException;


    SynthesisBean findSynthesisById(String sampleId);
}
