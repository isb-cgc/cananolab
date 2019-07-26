package gov.nih.nci.cananolab.domain.function;


import java.io.Serializable;

/**
 * A functional unit of heredity which occupies a specific position (locus) on a particular chromosome, is capable of
 * reproducing itself exactly at each cell division, and directs the formation of a protein or other product.
 **/

public class Gene extends Target implements Serializable {
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
        if (obj instanceof Gene) {
            Gene c = (Gene) obj;
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