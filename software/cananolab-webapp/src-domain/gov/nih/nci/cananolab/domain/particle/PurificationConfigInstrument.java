package gov.nih.nci.cananolab.domain.particle;

import gov.nih.nci.cananolab.domain.common.Instrument;
import gov.nih.nci.cananolab.domain.common.PurificationConfig;
import java.util.Objects;

public class PurificationConfigInstrument {
    private Long purificationConfigPkId;
    private Long instrumentPkId;
    private PurificationConfig purificationConfig;
    private Instrument instrument;

    public Long getPurificationConfigPkId() {
        return purificationConfigPkId;
    }

    public void setPurificationConfigPkId(Long purificationConfigPkId) {
        this.purificationConfigPkId = purificationConfigPkId;
    }

    public Long getInstrumentPkId() {
        return instrumentPkId;
    }

    public void setInstrumentPkId(Long instrumentPkId) {
        this.instrumentPkId = instrumentPkId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        PurificationConfigInstrument that = (PurificationConfigInstrument) o;
        return Objects.equals(purificationConfigPkId, that.purificationConfigPkId) &&
                Objects.equals(instrumentPkId, that.instrumentPkId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(purificationConfigPkId, instrumentPkId);
    }

    public PurificationConfig getPurificationConfig() {
        return purificationConfig;
    }

    public void setPurificationConfigCollection(PurificationConfig purificationConfig) {
        this.purificationConfig = purificationConfig;
    }

    public Instrument getInstrument() {
        return this.instrument;
    }

    public void setInstrument(Instrument instrument) {
        this.instrument = instrument;
    }
}
