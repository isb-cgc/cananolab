package gov.nih.nci.cananolab.restful.view.edit;

import java.util.ArrayList;
import java.util.List;

public class SimplePurificationConfigBean {

    Long techniqueid;
    String techniqueDisplayName;
    String techniqueType;
    String abbreviation;
    String description;
    Long id;

    boolean dirty;

    List<SimpleInstrumentBean> instruments = new ArrayList<SimpleInstrumentBean>();

    public Long getId(){
        return this.id;
    }
    public void setId(Long id){
        this.id = id;
    }

    public Long getTechniqueid() {
        return techniqueid;
    }

    public void setTechniqueid(Long techniqueid) {
        this.techniqueid = techniqueid;
    }

    public String getTechniqueDisplayName() {
        return techniqueDisplayName;
    }

    public void setTechniqueDisplayName(String techniqueDisplayName) {
        this.techniqueDisplayName = techniqueDisplayName;
    }

    public String getTechniqueType() {
        return techniqueType;
    }

    public void setTechniqueType(String techniqueType) {
        this.techniqueType = techniqueType;
    }

    public String getAbbreviation() {
        return abbreviation;
    }

    public void setAbbreviation(String abbreviation) {
        this.abbreviation = abbreviation;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isDirty() {
        return dirty;
    }

    public void setDirty(boolean dirty) {
        this.dirty = dirty;
    }

    public List<SimpleInstrumentBean> getInstruments() {
        return instruments;
    }

    public void setInstruments(List<SimpleInstrumentBean> instruments) {
        this.instruments = instruments;
    }
}
