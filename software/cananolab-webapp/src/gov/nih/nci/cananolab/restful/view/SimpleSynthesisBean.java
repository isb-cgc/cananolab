package gov.nih.nci.cananolab.restful.view;

import org.apache.commons.collections4.MultiMap;

import java.util.ArrayList;
import java.util.List;

public class SimpleSynthesisBean {
    List<String> synthesisSections = new ArrayList<String>();
    MultiMap synthesisFunctionalization;
    MultiMap synthesisPurification;
    MultiMap synthesisMaterials;

    public MultiMap getSynthesisMaterials() {
        return synthesisMaterials;
    }

    public MultiMap getSynthesisFunctionalization() {
        return synthesisFunctionalization;
    }

    public MultiMap getSynthesisPurification() {
        return synthesisPurification;
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

    transferSynthesisForSummaryView(SynthesisBean synBean){
        /* TODO write */

    }

}
