package gov.nih.nci.cananolab.domain.nanomaterial;

import gov.nih.nci.cananolab.domain.particle.NanomaterialEntity;

import java.io.Serializable;
/**
	* A suspension of liquid within another liquid or a dispersion consisting of two or more liquid phases.
	**/

public class Emulsion extends NanomaterialEntity implements Serializable
{
	/**
	* An attribute to allow serialization of the domain objects
	*/
	private static final long serialVersionUID = 1234567890L;

	
	/**
	* The act or process of changing to a polymeric form. Polymerization consists of reactions that form a compound (polymer), usually of high molecular weight, by combination of simpler molecules (monomers).
	**/
	
	private Boolean polymerized;
	/**
	* Retrieves the value of the polymerized attribute
	* @return polymerized
	**/

	public Boolean getPolymerized(){
		return polymerized;
	}

	/**
	* Sets the value of polymerized attribute
	**/

	public void setPolymerized(Boolean polymerized){
		this.polymerized = polymerized;
	}
	
	/**
	* The words or language units by which a thing is known.
	**/
	
	private String polymerName;
	/**
	* Retrieves the value of the polymerName attribute
	* @return polymerName
	**/

	public String getPolymerName(){
		return polymerName;
	}

	/**
	* Sets the value of polymerName attribute
	**/

	public void setPolymerName(String polymerName){
		this.polymerName = polymerName;
	}
	
	/**
	* Compares <code>obj</code> to it self and returns true if they both are same
	*
	* @param obj
	**/
	public boolean equals(Object obj)
	{
		if(obj instanceof Emulsion) 
		{
			Emulsion c =(Emulsion)obj;
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