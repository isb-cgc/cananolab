package gov.nih.nci.cananolab.restful.sample;

import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisBean;
import javax.servlet.http.HttpServletRequest;

public class InitSynthesisSetup {

    public static InitSynthesisSetup getInstance() {
        return new InitSynthesisSetup();
    }

//TODO write
    public void persistSynthesisDropdowns(HttpServletRequest request, SynthesisBean synthesisBean) {
    }
}
