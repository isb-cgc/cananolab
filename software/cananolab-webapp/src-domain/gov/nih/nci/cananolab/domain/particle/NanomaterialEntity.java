package gov.nih.nci.cananolab.domain.particle;

import gov.nih.nci.cananolab.domain.common.File;
import java.io.Serializable;
import java.util.Collection;

/**
 * The component of a sample that is a nanoparticle.
 **/

public class NanomaterialEntity implements Serializable {
    /**
     * An attribute to allow serialization of the domain objects
     */
    private static final long serialVersionUID = 1234567890L;


    /**
     * Indicates the person or authoritative body who brought the item into existence.
     **/

    private String createdBy;
    /**
     * The date of the process by which something is brought into existence; having been brought into existence.
     **/

    private java.util.Date createdDate;
    /**
     * A written or verbal account, representation, statement, or explanation of something.
     **/

    private String description;
    /**
     * One or more characters used to identify, name, or characterize the nature, properties, or contents of a thing.
     **/

    private Long id;
    /**
     * An associated gov.nih.nci.cananolab.domain.particle.ComposingElement object's collection
     **/

    private Collection<ComposingElement> composingElementCollection;
    /**
     * An associated gov.nih.nci.cananolab.domain.common.File object's collection
     **/

    private Collection<File> fileCollection;
    /**
     * An associated gov.nih.nci.cananolab.domain.particle.SampleComposition object
     **/

    private SampleComposition sampleComposition;

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
     * Retrieves the value of the composingElementCollection attribute
     *
     * @return composingElementCollection
     **/

    public Collection<ComposingElement> getComposingElementCollection() {
        return composingElementCollection;
    }

    /**
     * Sets the value of composingElementCollection attribute
     **/

    public void setComposingElementCollection(Collection<ComposingElement> composingElementCollection) {
        this.composingElementCollection = composingElementCollection;
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
     * Retrieves the value of the sampleComposition attribute
     *
     * @return sampleComposition
     **/

    public SampleComposition getSampleComposition() {
        return sampleComposition;
    }

    /**
     * Sets the value of sampleComposition attribute
     **/

    public void setSampleComposition(SampleComposition sampleComposition) {
        this.sampleComposition = sampleComposition;
    }

    /**
     * Compares <code>obj</code> to it self and returns true if they both are same
     *
     * @param obj
     **/
    public boolean equals(Object obj) {
        if (obj instanceof NanomaterialEntity) {
            NanomaterialEntity c = (NanomaterialEntity) obj;
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