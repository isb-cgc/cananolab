package gov.nih.nci.cananolab.restful.view.edit;

import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialBean;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

public class SimpleSynthesisMaterialBean {
    List<String> errors;

    Long id = 0L;
    String sampleId="";
    SimpleSynthesisMaterialElementBean simpleSynthesisMaterialElementBean;
    SimpleFileBean simpleFileBean;

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

    public List<String> getOtherSampleNames() {
        //TODO write
        return null;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public void transferSynthesisMaterialBeanToSimple(SynthesisMaterialBean synBean, HttpServletRequest httpRequest, SpringSecurityAclService springSecurityAclService) {
        //TODO write
    }
}
