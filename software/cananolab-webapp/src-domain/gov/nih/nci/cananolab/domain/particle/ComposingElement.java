package gov.nih.nci.cananolab.domain.particle;

import java.io.Serializable;
import java.util.Collection;

/**
 * A distinguishable part of an entity. (i.e. a monomer found in a polymer, a terminal group for a dendrimer)
 **/

public class ComposingElement extends AssociatedElement implements Serializable {
    /**
     * An attribute to allow serialization of the domain objects
     */
    private static final long serialVersionUID = 1234567890L;


    /**
     * Something distinguishable as an identifiable class based on common qualities. Please refer to value domain
     * ComposingElementType.
     **/

    private String type;
    /**
     * An associated gov.nih.nci.cananolab.domain.particle.Function object's collection
     **/

    private Collection<Function> inherentFunctionCollection;
    /**
     * An associated gov.nih.nci.cananolab.domain.particle.NanomaterialEntity object
     **/

    private NanomaterialEntity nanomaterialEntity;
    private String nanomaterialEntityPkId;

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
     * Retrieves the value of the inherentFunctionCollection attribute
     *
     * @return inherentFunctionCollection
     **/

    public Collection<Function> getInherentFunctionCollection() {
        return inherentFunctionCollection;
    }

    /**
     * Sets the value of inherentFunctionCollection attribute
     **/

    public void setInherentFunctionCollection(Collection<Function> inherentFunctionCollection) {
        this.inherentFunctionCollection = inherentFunctionCollection;
    }

    /**
     * Add a new function to an existing collection.
     */
    public void addInherentFunction(Function func) {
        inherentFunctionCollection.add(func);
    }

    /**
     * Retrieves the value of the nanomaterialEntity attribute
     *
     * @return nanomaterialEntity
     **/

    public NanomaterialEntity getNanomaterialEntity() {
        return nanomaterialEntity;
    }

    /**
     * Sets the value of nanomaterialEntity attribute
     **/

    public void setNanomaterialEntity(NanomaterialEntity nanomaterialEntity) {
        this.nanomaterialEntity = nanomaterialEntity;
    }

    public String getNanomaterialEntityPkId() {
        return nanomaterialEntityPkId;
    }

    public void setNanomaterialEntityPkId(String nanomaterialEntityPkId) {
        this.nanomaterialEntityPkId = nanomaterialEntityPkId;
    }

    /**
     * Compares <code>obj</code> to it self and returns true if they both are same
     *
     * @param obj
     **/
    public boolean equals(Object obj) {
        if (obj instanceof ComposingElement) {
            ComposingElement c = (ComposingElement) obj;
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