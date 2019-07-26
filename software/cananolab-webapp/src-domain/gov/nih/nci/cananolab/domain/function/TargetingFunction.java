package gov.nih.nci.cananolab.domain.function;

import gov.nih.nci.cananolab.domain.particle.Function;
import java.io.Serializable;
import java.util.Collection;

/**
 * An element that allows the sample to function as an targeting agent.
 **/

public class TargetingFunction extends Function implements Serializable {
    /**
     * An attribute to allow serialization of the domain objects
     */
    private static final long serialVersionUID = 1234567890L;


    /**
     * An associated gov.nih.nci.cananolab.domain.function.Target object's collection
     **/

    private Collection<Target> targetCollection;

    /**
     * Retrieves the value of the targetCollection attribute
     *
     * @return targetCollection
     **/

    public Collection<Target> getTargetCollection() {
        return targetCollection;
    }

    /**
     * Sets the value of targetCollection attribute
     **/

    public void setTargetCollection(Collection<Target> targetCollection) {
        this.targetCollection = targetCollection;
    }

    /**
     * Compares <code>obj</code> to it self and returns true if they both are same
     *
     * @param obj
     **/
    public boolean equals(Object obj) {
        if (obj instanceof TargetingFunction) {
            TargetingFunction c = (TargetingFunction) obj;
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