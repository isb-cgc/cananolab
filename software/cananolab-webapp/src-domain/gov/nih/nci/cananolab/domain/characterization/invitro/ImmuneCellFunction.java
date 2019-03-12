package gov.nih.nci.cananolab.domain.characterization.invitro;


import java.io.Serializable;
/**
	* A set of laboratory assays that examine the responses of lymphoid or myeloid cells after exposure to an experimental material.
	**/

public class ImmuneCellFunction extends InvitroCharacterization implements Serializable
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
		if(obj instanceof ImmuneCellFunction) 
		{
			ImmuneCellFunction c =(ImmuneCellFunction)obj; 			 
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