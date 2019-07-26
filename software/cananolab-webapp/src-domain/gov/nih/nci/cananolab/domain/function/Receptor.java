package gov.nih.nci.cananolab.domain.function;


import java.io.Serializable;

/**
 * A receptor is a protein located on the cell surface, or in the cytoplasm, that binds to a specific signaling
 * factor, such as a hormone, antigen, or neurotransmitter, causing a conformational and functional change in the
 * receptor molecule.  The ligand-bound receptor then alters its interaction with target molecules, which leads to
 * changes in cellular physiology through modification of the activity of one or more signal transduction pathways
 **/

public class Receptor extends Target implements Serializable {
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
        if (obj instanceof Receptor) {
            Receptor c = (Receptor) obj;
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