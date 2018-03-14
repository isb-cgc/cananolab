package gov.nih.nci.cananolab.domain.characterization.invitro;


import java.io.Serializable;
/**
	* The adverse effect of some iatrogenic therapies. It is an accepted side effect in radiation therapy where the desired effect is to kill rapidly growing tumor cells.  In the killing of tumor cells, other cells that are rapidly growing e.g hair, mucous membranes are also killed.
	**/

public class Cytotoxicity extends InvitroCharacterization implements Serializable
{
	/**
	* An attribute to allow serialization of the domain objects
	*/
	private static final long serialVersionUID = 1234567890L;

	
	/**
	* A permanently established cell culture that will proliferate indefinitely given appropriate fresh medium and space.
	**/
	
	private String cellLine;
	/**
	* Retrieves the value of the cellLine attribute
	* @return cellLine
	**/

	public String getCellLine(){
		return cellLine;
	}

	/**
	* Sets the value of cellLine attribute
	**/

	public void setCellLine(String cellLine){
		this.cellLine = cellLine;
	}
	
	/**
	* Compares <code>obj</code> to it self and returns true if they both are same
	*
	* @param obj
	**/
	public boolean equals(Object obj)
	{
		if(obj instanceof Cytotoxicity) 
		{
			Cytotoxicity c =(Cytotoxicity)obj; 			 
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