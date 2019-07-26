package gov.nih.nci.cananolab.domain.linkage;

import gov.nih.nci.cananolab.domain.particle.ChemicalAssociation;

import java.io.Serializable;
/**
	* 
	**/

public class Entrapment extends ChemicalAssociation implements Serializable
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
		if(obj instanceof Entrapment) 
		{
			Entrapment c =(Entrapment)obj;
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