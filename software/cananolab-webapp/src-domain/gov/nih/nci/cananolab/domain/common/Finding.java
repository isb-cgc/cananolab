package gov.nih.nci.cananolab.domain.common;

import java.io.Serializable;
import java.util.Collection;

/**
 *
 **/

public class Finding implements Serializable {
    /**
     * An attribute to allow serialization of the domain objects
     */
    private static final long serialVersionUID = 1234567890L;

    private String createdBy;

    private java.util.Date createdDate;

    private Long id;
    /**
     * An associated gov.nih.nci.cananolab.domain.common.Datum object's collection
     **/

    private Collection<Datum> datumCollection;
    /**
     * An associated gov.nih.nci.cananolab.domain.common.File object's collection
     **/

    private Collection<File> fileCollection;

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
     * Retrieves the value of the datumCollection attribute
     *
     * @return datumCollection
     **/

    public Collection<Datum> getDatumCollection() {
        return datumCollection;
    }

    /**
     * Sets the value of datumCollection attribute
     **/

    public void setDatumCollection(Collection<Datum> datumCollection) {
        this.datumCollection = datumCollection;
    }

    /**
     * Retrieves the value of the fileCollection attribute
     *
     * @return fileCollection
     **/

    public Collection<File> getFileCollection() {
        return fileCollection;
    }

    /**
     * Sets the value of fileCollection attribute
     **/

    public void setFileCollection(Collection<File> fileCollection) {
        this.fileCollection = fileCollection;
    }

    /**
     * Compares <code>obj</code> to it self and returns true if they both are same
     *
     * @param obj
     **/
    public boolean equals(Object obj) {
        if (obj instanceof Finding) {
            Finding c = (Finding) obj;
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