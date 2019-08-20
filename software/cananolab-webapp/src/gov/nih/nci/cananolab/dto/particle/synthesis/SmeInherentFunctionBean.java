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
    }

    public String getDisplayName() {
        StringBuffer buffer = new StringBuffer();
        if (!StringUtils.isEmpty(type)) {
            buffer.append(type);
        }
        if (!StringUtils.isEmpty(getDescription())) {
            buffer.append(": " + description);
        }

        return buffer.toString();
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public SmeInherentFunction getDomain() {
        return domain;
    }

    public void setDomain(SmeInherentFunction domain) {
        this.domain = domain;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

}
