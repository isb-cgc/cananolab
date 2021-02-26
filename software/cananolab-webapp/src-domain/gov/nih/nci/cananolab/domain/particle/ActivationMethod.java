package gov.nih.nci.cananolab.domain.particle;


import java.io.Serializable;

/**
 * The process that allows the sample to realize its intended functionality.
 **/

public class ActivationMethod implements Serializable {
    /**
     * An attribute to allow serialization of the domain objects
     */
    private static final long serialVersionUID = 1234567890L;


    /**
     * The result of having the sample undergo the process of activation.  (i.e. cleavage of a bond, release from
     * quenching or encapsulation)
     **/

    private String activationEffect;
    /**
     * One or more characters used to identify, name, or characterize the nature, properties, or contents of a thing.
     **/

    private Long id;
    /**
     * Something distinguishable as an identifiable class based on common qualities. Please refer to value domain
     * NanoparticleActivationType.
     **/

    private String type;
    /**
     * An associated gov.nih.nci.cananolab.domain.particle.FunctionalizingEntity object
     **/

    private FunctionalizingEntity functionalizingEntity;

    /**
     * Retrieves the value of the activationEffect attribute
     *
     * @return activationEffect
     **/

    public String getActivationEffect() {
        return activationEffect;
    }

    /**
     * Sets the value of activationEffect attribute
     **/

    public void setActivationEffect(String activationEffect) {
        this.activationEffect = activationEffect;
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
        if (obj instanceof ActivationMethod) {
            ActivationMethod c = (ActivationMethod) obj;
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