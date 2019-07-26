package gov.nih.nci.cananolab.domain.linkage;

import gov.nih.nci.cananolab.domain.particle.ChemicalAssociation;

import java.io.Serializable;
/**
	* The act of affixing one thing to another.
	**/

public class Attachment extends ChemicalAssociation implements Serializable
{
	/**
	* An attribute to allow serialization of the domain objects
	*/
	private static final long serialVersionUID = 1234567890L;

	
	/**
	* Involves temporary, non-covalent binding of two or more molecules as a result of intermolecular physical forces and often involves spatial complementarity between the interacting objects. Please refer to value domain BondType.
	**/
	
	private String bondType;
	/**
	* Retrieves the value of the bondType attribute
	* @return bondType
	**/

	public String getBondType(){
		return bondType;
	}

	/**
	* Sets the value of bondType attribute
	**/

	public void setBondType(String bondType){
		this.bondType = bondType;
	}
	
	/**
	* Compares <code>obj</code> to it self and returns true if they both are same
	*
	* @param obj
	**/
	public boolean equals(Object obj)
	{
		if(obj instanceof Attachment) 
		{
			Attachment c =(Attachment)obj;
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