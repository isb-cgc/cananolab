package gov.nih.nci.cananolab.domain.characterization.invitro;


import java.io.Serializable;
/**
	* Assays that examine how the sample interacts with whole blood, blood-borne molecular components, platelets or red blood cells.
	**/

public class BloodContact extends InvitroCharacterization implements Serializable
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
		if(obj instanceof BloodContact) 
		{
			BloodContact c =(BloodContact)obj;
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