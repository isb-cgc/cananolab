package gov.nih.nci.cananolab.domain.particle;


import java.io.Serializable;

/**
 * The characteristic behavior of a nanoparticle that results from the chemical and physical composition and
 * properties of the entity.
 **/

public class Function implements Serializable {
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
     * An associated gov.nih.nci.cananolab.domain.particle.ComposingElement object
     **/

    private ComposingElement composingElement;
    /**
     * An associated gov.nih.nci.cananolab.domain.particle.FunctionalizingEntity object
     **/

    private FunctionalizingEntity functionalizingEntity;

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
     * Retrieves the value of the composingElement attribute
     *
     * @return composingElement
     **/

    public ComposingElement getComposingElement() {
        return composingElement;
    }

    /**
     * Sets the value of composingElement attribute
     **/

    public void setComposingElement(ComposingElement composingElement) {
        this.composingElement = composingElement;
    }

    /**
     * Retrieves the value of the functionalizingEntity attribute
     *
     * @return functionalizingEntity
     **/

    public FunctionalizingEntity getFunctionalizingEntity() {
        return functionalizingEntity;
    }

    /**
     * Sets the value of functionalizingEntity attribute
     **/

    public void setFunctionalizingEntity(FunctionalizingEntity functionalizingEntity) {
        this.functionalizingEntity = functionalizingEntity;
    }

    /**
     * Compares <code>obj</code> to it self and returns true if they both are same
     *
     * @param obj
     **/
    public boolean equals(Object obj) {
        if (obj instanceof Function) {
            Function c = (Function) obj;
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