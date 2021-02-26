package gov.nih.nci.cananolab.domain.particle;

import gov.nih.nci.cananolab.domain.common.File;
import java.util.Objects;

public class SynthesisFunctionalizationElementFile {
    private Long synthesisFunctionalizationElementPkId;
    private Long filePkId;
    private gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalizationElement synthesisFunctionalizationElement;
    private File fileByFilePkId;

    public Long getId() {
        return synthesisFunctionalizationElementPkId;
    }

    public void setId(Long synthesisFunctionalizationElementPkId) {
        this.synthesisFunctionalizationElementPkId = synthesisFunctionalizationElementPkId;
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
        SynthesisFunctionalizationElementFile that = (SynthesisFunctionalizationElementFile) o;
        return Objects.equals(synthesisFunctionalizationElementPkId, that.synthesisFunctionalizationElementPkId) &&
                Objects.equals(filePkId, that.filePkId);
    }

    @Override
    public int hashCode() {
        return Objects.hash(synthesisFunctionalizationElementPkId, filePkId);
    }

    public gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalizationElement getSynthesisFunctionalizationElement() {
        return synthesisFunctionalizationElement;
    }

    public void setSynthesisFunctionalizationElement(SynthesisFunctionalizationElement synthesisFunctionalizationElement) {
        this.synthesisFunctionalizationElement =
                synthesisFunctionalizationElement;
    }

    public File getFile() {
        return fileByFilePkId;
    }

    public void setFile(File fileByFilePkId) {
        this.fileByFilePkId = fileByFilePkId;
    }
}
