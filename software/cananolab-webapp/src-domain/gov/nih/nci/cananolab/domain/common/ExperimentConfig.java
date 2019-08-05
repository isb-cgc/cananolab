package gov.nih.nci.cananolab.domain.common;

import java.io.Serializable;
import java.util.Collection;

/**
 *
 **/

public class ExperimentConfig implements Serializable {
    /**
     * An attribute to allow serialization of the domain objects
     */
    private static final long serialVersionUID = 1234567890L;
    private String createdBy;
    private java.util.Date createdDate;
    private String description;


    private Long id;
    /**
     * An associated gov.nih.nci.cananolab.domain.common.Instrument object's collection
     **/

    private Collection<Instrument> instrumentCollection;
    /**
     * An associated gov.nih.nci.cananolab.domain.common.Technique object
     **/

    private Technique technique;

    /**
     * Retrieves the value of the createdBy attribute
     *
     * @return createdBy
     **/

    public String getCreatedBy() {
        return createdBy;
    }

    /**
     * Sets the value of createdBy attribute
     **/

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    /**
     * Retrieves the value of the createdDate attribute
     *
     * @return createdDate
     **/

    public java.util.Date getCreatedDate() {
        return createdDate;
    }

    /**
     * Sets the value of createdDate attribute
     **/

    public void setCreatedDate(java.util.Date createdDate) {
        this.createdDate = createdDate;
    }

    /**
     * Retrieves the value of the description attribute
     *
     * @return description
     **/

    public String getDescription() {
        return description;
    }

    /**
     * Sets the value of description attribute
     **/

    public void setDescription(String description) {
        this.description = description;
    }

    /**
     * Retrieves the value of the id attribute
     *
     * @return id
     **/

    public Long getId() {
        return id;
    }

    /**
     * Sets the value of id attribute
     **/

    public void setId(Long id) {
        this.id = id;
    }

    /**
     * Retrieves the value of the instrumentCollection attribute
     *
     * @return instrumentCollection
     **/

    public Collection<Instrument> getInstrumentCollection() {
        return instrumentCollection;
    }

    /**
     * Sets the value of instrumentCollection attribute
     **/

    public void setInstrumentCollection(Collection<Instrument> instrumentCollection) {
        this.instrumentCollection = instrumentCollection;
    }

    /**
     * Retrieves the value of the technique attribute
     *
     * @return technique
     **/

    public Technique getTechnique() {
        return technique;
    }

    /**
     * Sets the value of technique attribute
     **/

    public void setTechnique(Technique technique) {
        this.technique = technique;
    }

    /**
     * Compares <code>obj</code> to it self and returns true if they both are same
     *
     * @param obj
     **/
    public boolean equals(Object obj) {
        if (obj instanceof ExperimentConfig) {
            ExperimentConfig c = (ExperimentConfig) obj;
            return getId() != null && getId().equals(c.getId());
        }
        return false;
    }

    /**
     * Returns hash code for the primary key of the object
     **/
    public int hashCode() {
		if (getId() != null) {
			return getId().hashCode();
		}
        return 0;
    }

}