package gov.nih.nci.cananolab.ui.form;

import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialsBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurificationBean;

public class SynthesisForm {

    SynthesisBean synthesisBean;
    SynthesisMaterialsBean synthesisMaterialsBean;
    SynthesisFunctionalizationBean synthesisFunctionalizationBean;
    SynthesisPurificationBean synthesisPurificationBean;

    String sampleId;

    public SynthesisBean getSynthesisBean() {
        return synthesisBean;
    }

    public void setSynthesisBean(SynthesisBean synthesisBean) {
        this.synthesisBean = synthesisBean;
    }

    public SynthesisMaterialsBean getSynthesisMaterialsBean() {
        return synthesisMaterialsBean;
    }

    public void setSynthesisMaterialsBean(SynthesisMaterialsBean synthesisMaterialsBean) {
        this.synthesisMaterialsBean = synthesisMaterialsBean;
    }

    public SynthesisFunctionalizationBean getSynthesisFunctionalizationBean() {
        return synthesisFunctionalizationBean;
    }

    public void setSynthesisFunctionalizationBean(SynthesisFunctionalizationBean synthesisFunctionalizationBean) {
        this.synthesisFunctionalizationBean = synthesisFunctionalizationBean;
    }

    public SynthesisPurificationBean getSynthesisPurificationBean() {
        return synthesisPurificationBean;
    }

    public void setSynthesisPurificationBean(SynthesisPurificationBean synthesisPurificationBean) {
        this.synthesisPurificationBean = synthesisPurificationBean;
    }

    public String getSampleId() {
        return sampleId;
    }

    public void setSampleId(String sampleId) {
        this.sampleId = sampleId;
    }


}
