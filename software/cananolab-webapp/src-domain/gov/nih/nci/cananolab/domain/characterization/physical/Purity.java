package gov.nih.nci.cananolab.domain.characterization.physical;


import java.io.Serializable;
/**
	* A quantitative assessment of the homogeneity or uniformity of a mixture. Alternatively, purity refers to the degree of being free of contaminants or heterogeneous components.
	**/

public class Purity extends PhysicoChemicalCharacterization implements Serializable
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
		if(obj instanceof Purity) 
		{
			Purity c =(Purity)obj;
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