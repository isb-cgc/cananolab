package gov.nih.nci.cananolab.domain.characterization.physical;

import gov.nih.nci.cananolab.domain.particle.Characterization;

import java.io.Serializable;
/**
	* The act of describing distinctive characteristics or essential features of a natural phenomenon involving the physics of matter and energy.
	**/

public class PhysicoChemicalCharacterization extends Characterization implements Serializable
{
	/**
	* An attribute to allow serialization of the domain objects
	*/
	private static final long serialVersionUID = 1234567890L;

	
	/**
	* Compares <code>obj</code> to it self and returns true if they both are same
	*
	* @param obj
	**/
	public boolean equals(Object obj)
	{
		if(obj instanceof PhysicoChemicalCharacterization) 
		{
			PhysicoChemicalCharacterization c =(PhysicoChemicalCharacterization)obj;
            return getId() != null && getId().equals(c.getId());
		}
		return false;
	}
		
	/**
	* Returns hash code for the primary key of the object
	**/
	public int hashCode()
	{
		if(getId() != null)
			return getId().hashCode();
		return 0;
	}
	
}