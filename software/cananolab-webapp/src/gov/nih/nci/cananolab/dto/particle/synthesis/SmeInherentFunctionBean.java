package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.particle.SmeInherentFunction;
import gov.nih.nci.cananolab.util.StringUtils;
import java.util.Calendar;

public class SmeInherentFunctionBean {
    private SmeInherentFunction domain;

    public SmeInherentFunctionBean() {
    }

    public SmeInherentFunctionBean(SmeInherentFunction domain){
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

    public String getDescription() {
        return domain.getDescription();
    }

    public void resetDomainCopy(String createdBy, SmeInherentFunctionBean functionBean) {
        //TODO write
    }

    public void setupDomain(){
        //TODO write
        if(domain ==null){
            domain = new SmeInherentFunction();
        }


    }

    public void setDescription(String description) {
        domain.setDescription(description);
    }

    public SmeInherentFunction getDomain() {
        return domain;
    }

    public void setDomain(SmeInherentFunction domain) {
        this.domain = domain;
    }

    public String getType() {
        return domain.getType();
    }

    public void setType(String type) {
        domain.setType(type);
    }

}
