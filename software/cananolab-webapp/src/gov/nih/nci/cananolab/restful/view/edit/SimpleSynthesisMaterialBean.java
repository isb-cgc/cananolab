package gov.nih.nci.cananolab.restful.view.edit;

import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialBean;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

public class SimpleSynthesisMaterialBean {
    public List<String> getErrors() {
        //TODO write
        return null;
    }


    public String getSampleId() {
        //TODO write
    return null;
    }

    public List<String> getOtherSampleNames() {
        //TODO write
        return null;
    }

    public void transferSynthesisMaterialBeanToSimple(SynthesisMaterialBean synBean, HttpServletRequest httpRequest, SpringSecurityAclService springSecurityAclService) {
        //TODO write
    }
}
