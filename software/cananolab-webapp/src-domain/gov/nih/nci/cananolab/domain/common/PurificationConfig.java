package gov.nih.nci.cananolab.domain.common;

import gov.nih.nci.cananolab.domain.particle.SynthesisPurification;
import java.util.Collection;
import java.util.Date;
import java.util.Objects;

public class PurificationConfig {
    private Long purificationConfigPkId;
    private String description;
    private String createdBy;
    private Date createdDate;
    private Long synthesisPurificationPkId;
    private Long techniquePkId;
    private SynthesisPurification synthesisPurificationBySynthesisPurificationPkId;
    private Technique technique;
    private Collection<Instrument> instrumentCollection;


    public Long getPurificationConfigPkId() {
        return purificationConfigPkId;
    }

    public void setPurificationConfigPkId(Long purificationConfigPkId) {
        this.purificationConfigPkId = purificationConfigPkId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        PurificationConfig that = (PurificationConfig) o;
        return Objects.equals(purificationConfigPkId, that.purificationConfigPkId) &&
                Objects.equals(description, that.description) &&
                Objects.equals(createdBy, that.createdBy) &&
                Objects.equals(createdDate, that.createdDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(purificationConfigPkId, description, createdBy, createdDate);
    }

    public Long getSynthesisPurificationPkId() {
        return synthesisPurificationPkId;
    }

    public void setSynthesisPurificationPkId(Long synthesisPurificationPkId) {
        this.synthesisPurificationPkId = synthesisPurificationPkId;
    }

    public Long getTechniquePkId() {
        return techniquePkId;
    }

    public void setTechniquePkId(Long techniquePkId) {
        this.techniquePkId = techniquePkId;
    }

    public SynthesisPurification getSynthesisPurificationBySynthesisPurificationPkId() {
        return synthesisPurificationBySynthesisPurificationPkId;
    }

    public void setSynthesisPurificationBySynthesisPurificationPkId(SynthesisPurification synthesisPurificationBySynthesisPurificationPkId) {
        this.synthesisPurificationBySynthesisPurificationPkId = synthesisPurificationBySynthesisPurificationPkId;
    }

    public Technique getTechnique() {
        return technique;
    }

    public void setTechnique(Technique techniqueByTechniquePkId) {
        this.technique = techniqueByTechniquePkId;
    }

    public Collection<Instrument> getInstrumentCollection() {
        return instrumentCollection;
    }

    public void setInstrumentCollection(Collection<Instrument> purificationConfigInstruments) {
        this.instrumentCollection = purificationConfigInstruments;
    }
}
