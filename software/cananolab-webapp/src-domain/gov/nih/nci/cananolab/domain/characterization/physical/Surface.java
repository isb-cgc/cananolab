package gov.nih.nci.cananolab.domain.characterization.physical;


import java.io.Serializable;
/**
	* The extended two-dimensional outer boundary of a three-dimensional object.
	**/

public class Surface extends PhysicoChemicalCharacterization implements Serializable
{
	/**
	* An attribute to allow serialization of the domain objects
	*/
	private static final long serialVersionUID = 1234567890L;

	
	/**
	* The inherent characteristic of a molecule or substance to be immiscible in water. The property means that the moiety of interest does not dissolve in, absorb, or mix easily with water.
	**/
	
	private Boolean isHydrophobic;
	/**
	* Retrieves the value of the isHydrophobic attribute
	* @return isHydrophobic
	**/

	public Boolean getIsHydrophobic(){
		return isHydrophobic;
	}

	/**
	* Sets the value of isHydrophobic attribute
	**/

	public void setIsHydrophobic(Boolean isHydrophobic){
		this.isHydrophobic = isHydrophobic;
	}
	
	/**
	* Compares <code>obj</code> to it self and returns true if they both are same
	*
	* @param obj
	**/
	public boolean equals(Object obj)
	{
		if(obj instanceof Surface) 
		{
			Surface c =(Surface)obj;
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