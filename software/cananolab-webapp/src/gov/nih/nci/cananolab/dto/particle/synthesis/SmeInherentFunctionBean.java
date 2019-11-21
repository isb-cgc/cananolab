package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.particle.SmeInherentFunction;
import gov.nih.nci.cananolab.util.StringUtils;

public class SmeInherentFunctionBean {
    private String type;
    private String description;
    private SmeInherentFunction domain;

    public SmeInherentFunctionBean() {
    }

    public SmeInherentFunctionBean(SmeInherentFunction domain){
        this.domain = domain;
        this.type = domain.getType();
        this.description=domain.getDescription();
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

    public void setDescription(String description) {
        //TODO write a proper transfer to domain
        this.description = description;
    }

    public SmeInherentFunction getDomain() {
        return domain;
    }

    public void setDomain(SmeInherentFunction domain) {
        //TODO write a proper transfer to domain
        this.domain = domain;
    }

    public String getType() {
        return domain.getType();
    }

    public void setType(String type) {
        //TODO write a proper transfer to domain
        this.type = type;
    }

}
