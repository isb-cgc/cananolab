package gov.nih.nci.cananolab.restful.view.edit;

import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalization;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

public class SimpleSynthesisFunctionalizationBean {

    Long id = 0L;
    String sampleId="";
    SimpleSynFuncElementBean funcElementBean;
    SimpleFileBean fileBean;
    List<String> errors;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSampleId() {
        return sampleId;
    }

    public void setSampleId(String sampleId) {
        this.sampleId = sampleId;
    }

    public SimpleFileBean getFileBean() {
        return fileBean;
    }

    public void setFileBean(SimpleFileBean fileBean) {
        this.fileBean = fileBean;
    }

    public List<String> getErrors() {
        return errors;
    }

    public void setErrors(List<String> errors) {
        this.errors = errors;
    }

    public void transferSynthesisFunctionalizationToSimple(SynthesisFunctionalization synthesisFunctionalization, HttpServletRequest httpRequest, SpringSecurityAclService springSecurityAclService){
        //todo write
    }

}
