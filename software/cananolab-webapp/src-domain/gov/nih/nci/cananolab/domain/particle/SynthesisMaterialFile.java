package gov.nih.nci.cananolab.domain.particle;

import gov.nih.nci.cananolab.domain.common.File;
import java.util.Objects;

public class SynthesisMaterialFile {
    private Long synthesisMaterialPkId;
    private Long filePkId;
    private SynthesisMaterial synthesisMaterialBySynthesisMaterialPkId;
    private File fileByFilePkId;

    public Long getSynthesisMaterialPkId() {
        return synthesisMaterialPkId;
    }

    public void setSynthesisMaterialPkId(Long synthesisMaterialPkId) {
        this.synthesisMaterialPkId = synthesisMaterialPkId;
    }

    public Long getFilePkId() {
        return filePkId;
    }

    public void setFilePkId(Long filePkId) {
        this.filePkId = filePkId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        SynthesisMaterialFile that = (SynthesisMaterialFile) o;
        return Objects.equals(synthesisMaterialPkId, that.synthesisMaterialPkId) &&
                Objects.equals(filePkId, that.filePkId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(synthesisMaterialPkId, filePkId);
    }

    public gov.nih.nci.cananolab.domain.particle.SynthesisMaterial getSynthesisMaterialBySynthesisMaterialPkId() {
        return synthesisMaterialBySynthesisMaterialPkId;
    }

    public void setSynthesisMaterialBySynthesisMaterialPkId(SynthesisMaterial synthesisMaterialBySynthesisMaterialPkId) {
        this.synthesisMaterialBySynthesisMaterialPkId = synthesisMaterialBySynthesisMaterialPkId;
    }

    public File getFileByFilePkId() {
        return fileByFilePkId;
    }

    public void setFileByFilePkId(File fileByFilePkId) {
        this.fileByFilePkId = fileByFilePkId;
    }
}
