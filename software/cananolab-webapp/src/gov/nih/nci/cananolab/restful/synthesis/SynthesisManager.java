package gov.nih.nci.cananolab.restful.synthesis;


import gov.nih.nci.cananolab.service.sample.SynthesisService;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly=false, propagation= Propagation.REQUIRED)
@Component("synthesisManager")
public class SynthesisManager {

    private final static Logger logger = Logger.getLogger(SynthesisManager.class);

    @Autowired
    private SynthesisService synthesisService;
}
