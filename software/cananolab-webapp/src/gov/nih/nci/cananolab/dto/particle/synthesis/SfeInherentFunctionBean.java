package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.particle.SfeInherentFunction;
import gov.nih.nci.cananolab.util.StringUtils;

public class SfeInherentFunctionBean {
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public SfeInherentFunction getDomain() {
        return domain;
    }

    public void setDomain(SfeInherentFunction domain) {
        this.domain = domain;
    }

    //todo write
    private String type;
    private String description;
    private SfeInherentFunction domain;

    public SfeInherentFunctionBean(){

    }

    public SfeInherentFunctionBean(SfeInherentFunction domain){
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
}
