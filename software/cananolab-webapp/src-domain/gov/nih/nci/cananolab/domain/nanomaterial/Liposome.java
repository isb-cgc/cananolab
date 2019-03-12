package gov.nih.nci.cananolab.domain.nanomaterial;

import gov.nih.nci.cananolab.domain.particle.NanomaterialEntity;

import java.io.Serializable;
/**
	* liposome -- Substances composed of layers of lipid that form hollow microscopic spheres within which drugs or agents could be contained for enhanced safety and efficacy.                A small, stable particle whose size is measured in nanometers. These particles are used in various biomedical applications in which they can be utilized as drug carriers or imaging agents. Various targeting agents, such as antibodies, drugs, imaging agents, and reporters can be attached to the surface of a nanoparticle.
	**/

public class Liposome extends NanomaterialEntity implements Serializable
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
	* The name of the polymer in the liposome.A molecule made up of a linked series of repeated monomers.
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
		if(obj instanceof Liposome) 
		{
			Liposome c =(Liposome)obj; 			 
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