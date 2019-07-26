package gov.nih.nci.cananolab.domain.function;

import gov.nih.nci.cananolab.domain.particle.Function;
import java.io.Serializable;

/**
 * An element that allows the sample to function as an therapeutic agent.
 **/

public class TherapeuticFunction extends Function implements Serializable {
    /**
     * An attribute to allow serialization of the domain objects
     */
    private static final long serialVersionUID = 1234567890L;


    /**
     * Compares <code>obj</code> to it self and returns true if they both are same
     *
     * @param obj
     **/
    public boolean equals(Object obj) {
        if (obj instanceof TherapeuticFunction) {
            TherapeuticFunction c = (TherapeuticFunction) obj;
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