package gov.nih.nci.cananolab.restful.view.edit;

import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurificationBean;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

public class SimpleSynthesisPurificationBean {
    //TODO write
    List<String> errors;
    String sampleId="";

    public List<String> getErrors() {
        return errors;
    }
    public void setErrors(List<String> msgs) {
        this.errors=errors;
    }

    public String getSampleId() {
        return sampleId;
    }
    public void setSampleId(String sampleId)
    {
        this.sampleId = sampleId;
    }


    public void transferSynthesisPurificationBeanToSimple(SynthesisPurificationBean synBean, HttpServletRequest httpRequest, SpringSecurityAclService springSecurityAclService) {
    }
}
