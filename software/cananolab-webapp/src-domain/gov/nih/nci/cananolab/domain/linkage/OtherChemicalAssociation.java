package gov.nih.nci.cananolab.domain.linkage;

import gov.nih.nci.cananolab.domain.particle.ChemicalAssociation;

import java.io.Serializable;
/**
	* Any process of combining chemical entities that is dependent upon chemical forces which is dfferent than the one(s) previously specified or mentioned.
	**/

public class OtherChemicalAssociation extends ChemicalAssociation implements Serializable
{
	/**
	* An attribute to allow serialization of the domain objects
	*/
	private static final long serialVersionUID = 1234567890L;

	
	/**
	* Something distinguishable as an identifiable class based on common qualities.
	**/
	
	private String type;
	/**
	* Retrieves the value of the type attribute
	* @return type
	**/

	public String getType(){
		return type;
	}

	/**
	* Sets the value of type attribute
	**/

	public void setType(String type){
		this.type = type;
	}
	
	/**
	* Compares <code>obj</code> to it self and returns true if they both are same
	*
	* @param obj
	**/
	public boolean equals(Object obj)
	{
		if(obj instanceof OtherChemicalAssociation) 
		{
			OtherChemicalAssociation c =(OtherChemicalAssociation)obj; 			 
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