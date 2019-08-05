package gov.nih.nci.cananolab.domain.common;

import java.io.Serializable;
import java.util.Collection;

/**
 *
 **/

public class Author implements Serializable {
    /**
     * An attribute to allow serialization of the domain objects
     */
    private static final long serialVersionUID = 1234567890L;


    /**
     *
     **/

    private String createdBy;
    /**
     *
     **/

    private java.util.Date createdDate;
    /**
     *
     **/

    private String firstName;
    /**
     *
     **/

    private Long id;
    /**
     *
     **/

    private String initial;
    /**
     *
     **/

    private String lastName;
    /**
     * An associated gov.nih.nci.cananolab.domain.common.Publication object's collection
     **/

    private Collection<Publication> publicationCollection;

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
     * Retrieves the value of the firstName attribute
     *
     * @return firstName
     **/

    public String getFirstName() {
        return firstName;
    }

    /**
     * Sets the value of firstName attribute
     **/

    public void setFirstName(String firstName) {
        this.firstName = firstName;
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
     * Retrieves the value of the initial attribute
     *
     * @return initial
     **/

    public String getInitial() {
        return initial;
    }

    /**
     * Sets the value of initial attribute
     **/

    public void setInitial(String initial) {
        this.initial = initial;
    }

    /**
     * Retrieves the value of the lastName attribute
     *
     * @return lastName
     **/

    public String getLastName() {
        return lastName;
    }

    /**
     * Sets the value of lastName attribute
     **/

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    /**
     * Retrieves the value of the publicationCollection attribute
     *
     * @return publicationCollection
     **/

    public Collection<Publication> getPublicationCollection() {
        return publicationCollection;
    }

    /**
     * Sets the value of publicationCollection attribute
     **/

    public void setPublicationCollection(Collection<Publication> publicationCollection) {
        this.publicationCollection = publicationCollection;
    }

    /**
     * Compares <code>obj</code> to it self and returns true if they both are same
     *
     * @param obj
     **/
    public boolean equals(Object obj) {
        if (obj instanceof Author) {
            Author c = (Author) obj;
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