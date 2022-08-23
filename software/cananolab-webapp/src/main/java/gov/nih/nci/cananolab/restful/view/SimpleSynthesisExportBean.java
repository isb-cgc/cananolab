package gov.nih.nci.cananolab.restful.view;

import java.util.List;

/**
 * Gson could not serialize a SimpleSynthesisBean to JSON needed for export/download as JSON.
 * This class provides only the data and works with Gson.
 */
public class SimpleSynthesisExportBean {
    private List<String> synthesisSections = null;
    private List synthesisFunctionalization = null;
    private List synthesisPurification = null;
    private List synthesisMaterials = null;

    public SimpleSynthesisExportBean( gov.nih.nci.cananolab.restful.view.SimpleSynthesisBean simpleSynthesisBean) {
        setSynthesisSections( simpleSynthesisBean.getSynthesisSections( ));
        setSynthesisFunctionalization(simpleSynthesisBean.getSynthesisFunctionalization());
        setSynthesisPurification( simpleSynthesisBean.getSynthesisPurification() );
        setSynthesisMaterials( simpleSynthesisBean.getSynthesisMaterials() );
    }

    public List<String> getSynthesisSections() {
        return synthesisSections;
    }

    public void setSynthesisSections( List<String> synthesisSections ) {
        this.synthesisSections = synthesisSections;
    }

    public List getSynthesisFunctionalization() {
        return synthesisFunctionalization;
    }

    public void setSynthesisFunctionalization( List synthesisFunctionalization ) {
        this.synthesisFunctionalization = synthesisFunctionalization;
    }

    public List getSynthesisPurification() {
        return synthesisPurification;
    }

    public void setSynthesisPurification( List synthesisPurification ) {
        this.synthesisPurification = synthesisPurification;
    }

    public List getSynthesisMaterials() {
        return synthesisMaterials;
    }

    public void setSynthesisMaterials( List synthesisMaterials ) {
        this.synthesisMaterials = synthesisMaterials;
    }
}
