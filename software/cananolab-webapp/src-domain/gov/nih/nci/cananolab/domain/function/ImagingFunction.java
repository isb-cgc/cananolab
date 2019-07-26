package gov.nih.nci.cananolab.domain.function;

import gov.nih.nci.cananolab.domain.particle.Function;
import java.io.Serializable;

/**
 * An element that allows the sample to function as an imaging agent.
 **/

public class ImagingFunction extends Function implements Serializable {
    /**
     * An attribute to allow serialization of the domain objects
     */
    private static final long serialVersionUID = 1234567890L;


    /**
     * The specific method used for capturing images when the sample is able to function as an image contrast agent.
     **/

    private String modality;

    /**
     * Retrieves the value of the modality attribute
     *
     * @return modality
     **/

    public String getModality() {
        return modality;
    }

    /**
     * Sets the value of modality attribute
     **/

    public void setModality(String modality) {
        this.modality = modality;
    }

    /**
     * Compares <code>obj</code> to it self and returns true if they both are same
     *
     * @param obj
     **/
    public boolean equals(Object obj) {
        if (obj instanceof ImagingFunction) {
            ImagingFunction c = (ImagingFunction) obj;
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