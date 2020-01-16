package gov.nih.nci.cananolab.restful.view.edit;

import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationElementBean;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import javax.servlet.http.HttpServletRequest;

public class SimpleSynFuncElementBean {
    String description;

    public void transferSimpleFunctionalizingBean(SynthesisFunctionalizationElementBean sfeBean, HttpServletRequest httpRequest, SpringSecurityAclService springSecurityAclService) {
        description = sfeBean.getDescription();

    }
    //todo write

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
