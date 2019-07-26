package gov.nih.nci.cananolab.restful.view;

import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisBean;
import java.util.ArrayList;
import java.util.List;
import org.apache.commons.collections.MultiMap;

public class SimpleSynthesisBean {
    List<String> synthesisSections = new ArrayList<String>();
    MultiMap synthesisFunctionalization;
    MultiMap synthesisPurification;
    MultiMap synthesisMaterials;
    List<String> errors;

    public MultiMap getSynthesisMaterials() {
        return synthesisMaterials;
    }

    public MultiMap getSynthesisFunctionalization() {
        return synthesisFunctionalization;
    }

    public MultiMap getSynthesisPurification() {
        return synthesisPurification;
    }

    public List<String> getErrors() {
        return errors;
    }

    public void setSynthesisMaterials(MultiMap synthesisMaterials) {
        this.synthesisMaterials = synthesisMaterials;
    }

    public void setSynthesisFunctionalization(MultiMap synthesisFunctionalization) {
        this.synthesisFunctionalization = synthesisFunctionalization;
    }

    public void setSynthesisPurification(MultiMap synthesisPurification) {
        this.synthesisPurification = synthesisPurification;
    }



    public List<String> getSynthesisSections() {
        return synthesisSections;
    }

    public void setSynthesisSections(List<String> synthesisSections) {
        this.synthesisSections = synthesisSections;
    }

    public void transferSynthesisForSummaryView(SynthesisBean synBean){
        /* TODO write */

    }

}
