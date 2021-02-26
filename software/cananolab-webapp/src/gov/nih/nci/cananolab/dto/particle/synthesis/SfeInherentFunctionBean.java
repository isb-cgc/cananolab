package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.particle.SfeInherentFunction;
import gov.nih.nci.cananolab.util.StringUtils;

public class  SfeInherentFunctionBean {
    private SfeInherentFunction domain;

    public SfeInherentFunctionBean(){
    }

    public SfeInherentFunctionBean(SfeInherentFunction domain){
        this.domain = domain;
    }

    public String getType() {
        return domain.getType();
    }

    public void resetDomainCopy(String createdBy, SfeInherentFunction function) {
        //TODO write
    }
    public void setupDomain(){
        //TODO write
        if(domain ==null){
            domain = new SfeInherentFunction();
        }
    }

    public void setType(String type) {
        domain.setType(type);
    }

    public String getDescription() {
        return domain.getDescription();
    }

    public void setDescription(String description) {
        domain.setDescription(description);
    }

    public SfeInherentFunction getDomain() {
        return domain;
    }

    public void setDomain(SfeInherentFunction domain) {
        this.domain = domain;
    }



    public String getDisplayName() {
        StringBuffer buffer = new StringBuffer();
        if (!StringUtils.isEmpty(getType())) {
            buffer.append(getType());
        }
        if (!StringUtils.isEmpty(getDescription())) {
            buffer.append(": " + getDescription());
        }

        return buffer.toString();
    }
}
