package gov.nih.nci.cananolab.domain.characterization.invitro;


import java.io.Serializable;
/**
	* Enzyme Induction involves initiation of function of a biological molecule (usually protein, RNA, or DNA) that possesses catalytic activity.
	**/

public class EnzymeInduction extends InvitroCharacterization implements Serializable
{
	/**
	* An attribute to allow serialization of the domain objects
	*/
	private static final long serialVersionUID = 1234567890L;

	
	/**
	* 
	**/
	
	private String enzyme;
	/**
	* Retrieves the value of the enzyme attribute
	* @return enzyme
	**/

	public String getEnzyme(){
		return enzyme;
	}

	/**
	* Sets the value of enzyme attribute
	**/

	public void setEnzyme(String enzyme){
		this.enzyme = enzyme;
	}
	
	/**
	* Compares <code>obj</code> to it self and returns true if they both are same
	*
	* @param obj
	**/
	public boolean equals(Object obj)
	{
		if(obj instanceof EnzymeInduction) 
		{
			EnzymeInduction c =(EnzymeInduction)obj;
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