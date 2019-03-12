package gov.nih.nci.cananolab.domain.characterization.invivo;

import gov.nih.nci.cananolab.domain.particle.Characterization;

import java.io.Serializable;
/**
	* 
	**/

public class InvivoCharacterization extends Characterization implements Serializable
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
		if(obj instanceof InvivoCharacterization) 
		{
			InvivoCharacterization c =(InvivoCharacterization)obj; 			 
			if(getId() != null && getId().equals(c.getId()))
				return true;
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