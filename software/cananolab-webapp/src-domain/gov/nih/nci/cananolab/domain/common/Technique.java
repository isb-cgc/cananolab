package gov.nih.nci.cananolab.domain.common;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import java.util.Set;

/**
 *
 **/

public class Technique implements Serializable {
    /**
     * An attribute to allow serialization of the domain objects
     */
    private static final long serialVersionUID = 1234567890L;


    private String abbreviation;
    private String createdBy;
    private Date createdDate;
    private Long id;
    private String type;


    /**
     * Retrieves the value of the abbreviation attribute
     *
     * @return abbreviation
     **/

    public String getAbbreviation() {
        return abbreviation;
    }

    /**
     * Sets the value of abbreviation attribute
     **/

    public void setAbbreviation(String abbreviation) {
        this.abbreviation = abbreviation;
    }

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

    public Date getCreatedDate() {
        return createdDate;
    }

    /**
     * Sets the value of createdDate attribute
     **/

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
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
     * Retrieves the value of the type attribute
     *
     * @return type
     **/

    public String getType() {
        return type;
    }

    /**
     * Sets the value of type attribute
     **/

    public void setType(String type) {
        this.type = type;
    }

    /**
     * Retrieves the value of the experimentConfigCollection attribute
     *
     * @return experimentConfigCollection
     **/

//    public Collection<ExperimentConfig> getExperimentConfigCollection() {
//        return experimentConfigCollection;
//    }
//
//    /**
//     * Sets the value of experimentConfigCollection attribute
//     **/
//
//    public void setExperimentConfigCollection(Collection<ExperimentConfig> experimentConfigCollection) {
//        this.experimentConfigCollection = experimentConfigCollection;
//    }

    /**
     * Compares <code>obj</code> to it self and returns true if they both are same
     *
     * @param obj
     **/
    public boolean equals(Object obj) {
        if (obj instanceof Technique) {
            Technique c = (Technique) obj;
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