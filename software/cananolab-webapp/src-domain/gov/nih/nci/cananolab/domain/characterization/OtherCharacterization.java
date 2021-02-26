package gov.nih.nci.cananolab.domain.characterization;

import gov.nih.nci.cananolab.domain.particle.Characterization;

import java.io.Serializable;
/**
	* 
	**/

public class OtherCharacterization extends Characterization implements Serializable
{
	/**
	* An attribute to allow serialization of the domain objects
	*/
	private static final long serialVersionUID = 1234567890L;

	
	/**
	* 
	**/
	
	private String assayCategory;
	/**
	* Retrieves the value of the assayCategory attribute
	* @return assayCategory
	**/

	public String getAssayCategory(){
		return assayCategory;
	}

	/**
	* Sets the value of assayCategory attribute
	**/

	public void setAssayCategory(String assayCategory){
		this.assayCategory = assayCategory;
	}
	
	/**
	* 
	**/
	
	private String name;
	/**
	* Retrieves the value of the name attribute
	* @return name
	**/

	public String getName(){
		return name;
	}

	/**
	* Sets the value of name attribute
	**/

	public void setName(String name){
		this.name = name;
	}
	
	/**
	* Compares <code>obj</code> to it self and returns true if they both are same
	*
	* @param obj
	**/
	public boolean equals(Object obj)
	{
		if(obj instanceof OtherCharacterization) 
		{
			OtherCharacterization c =(OtherCharacterization)obj;
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