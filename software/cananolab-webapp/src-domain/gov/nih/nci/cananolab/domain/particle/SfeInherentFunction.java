package gov.nih.nci.cananolab.domain.particle;

import java.util.Objects;


public class SfeInherentFunction {
    private Long sfeInherentFunctionPkId;
    private SynthesisFunctionalizationElement synthesisFunctionalizationElement;
    private String type;
    private String description;

    public SfeInherentFunction(){}

    public SfeInherentFunction(Long sfeInherentFunctionPkId, SynthesisFunctionalizationElement synthesisFunctionalizationElement){
        this.sfeInherentFunctionPkId=sfeInherentFunctionPkId;
        this.synthesisFunctionalizationElement=synthesisFunctionalizationElement;
    }

    public SfeInherentFunction(Long sfeInherentFunctionPkId, SynthesisFunctionalizationElement synthesisFunctionalizationElement, String type, String description){
        this.sfeInherentFunctionPkId=sfeInherentFunctionPkId;
        this.synthesisFunctionalizationElement=synthesisFunctionalizationElement;
        this.type=type;
        this.description=description;
    }

    public SfeInherentFunction(Long sfeInherentFunctionPkId, String type, String description){
        this.sfeInherentFunctionPkId=sfeInherentFunctionPkId;
        this.type=type;
        this.description=description;
    }

    public Long getId() {
        return sfeInherentFunctionPkId;
    }

    public void setId(Long sfeInherentFunctionPkId) {
        this.sfeInherentFunctionPkId = sfeInherentFunctionPkId;
    }

    public SynthesisFunctionalizationElement getSynthesisFunctionalizationElement() {
        return synthesisFunctionalizationElement;
    }

    public void setSynthesisFunctionalizationElement(SynthesisFunctionalizationElement synthesisFunctionalizationElement) {
        this.synthesisFunctionalizationElement = synthesisFunctionalizationElement;
    }

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
    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        gov.nih.nci.cananolab.domain.particle.SfeInherentFunction that = (gov.nih.nci.cananolab.domain.particle.SfeInherentFunction) o;
        return Objects.equals(sfeInherentFunctionPkId, that.sfeInherentFunctionPkId) &&
                Objects.equals(type, that.type) &&
                Objects.equals(description, that.description);
    }
    @Override
    public int hashCode() {
        return Objects.hash(sfeInherentFunctionPkId, type, description);
    }

}
