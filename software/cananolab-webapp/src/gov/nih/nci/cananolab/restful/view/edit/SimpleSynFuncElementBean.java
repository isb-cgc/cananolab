package gov.nih.nci.cananolab.restful.view.edit;

import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalizationElement;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationElementBean;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import javax.servlet.http.HttpServletRequest;

public class SimpleSynFuncElementBean {
    SynthesisFunctionalizationElement synthesisFunctionalizationElement = null;

    public void transferSimpleFunctionalizingBean(SynthesisFunctionalizationElementBean sfeBean, HttpServletRequest httpRequest, SpringSecurityAclService springSecurityAclService) {
        synthesisFunctionalizationElement = new SynthesisFunctionalizationElement(sfeBean.getDomain());
    }

    public SynthesisFunctionalizationElement getSynthesisFunctionalizationElement() {
        return synthesisFunctionalizationElement;
    }

    public void setSynthesisFunctionalizationElement(SynthesisFunctionalizationElement synthesisFunctionalizationElement) {
        this.synthesisFunctionalizationElement = synthesisFunctionalizationElement;
    }

}
