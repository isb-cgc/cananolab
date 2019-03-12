package gov.nih.nci.cananolab.domain.function;


import java.io.Serializable;
/**
	* Any substance, generally a protein, that stimulates the immune system and elicits an immune response.  Recognition by the immune system elicits either a T-lymphocyte response, recognizing processed antigens, or a B-lymphocyte response, producing antibodies that bind to unprocessed antigens.
	**/

public class Antigen extends Target implements Serializable
{
	/**
	* An attribute to allow serialization of the domain objects
	*/
	private static final long serialVersionUID = 1234567890L;

	
	/**
	* A group of organisms that differ from all other groups of organisms and that are capable of breeding and producing fertile offspring.
	**/
	
	private String species;
	/**
	* Retrieves the value of the species attribute
	* @return species
	**/

	public String getSpecies(){
		return species;
	}

	/**
	* Sets the value of species attribute
	**/

	public void setSpecies(String species){
		this.species = species;
	}
	
	/**
	* Compares <code>obj</code> to it self and returns true if they both are same
	*
	* @param obj
	**/
	public boolean equals(Object obj)
	{
		if(obj instanceof Antigen) 
		{
			Antigen c =(Antigen)obj; 			 
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