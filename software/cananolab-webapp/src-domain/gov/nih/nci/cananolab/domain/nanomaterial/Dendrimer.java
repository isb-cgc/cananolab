package gov.nih.nci.cananolab.domain.nanomaterial;

import gov.nih.nci.cananolab.domain.particle.NanomaterialEntity;

import java.io.Serializable;
/**
	* A polymeric molecule which has a highly-branched, three-dimensional architecture. Dendrimers are synthesized from monomers and new branches are added in discrete steps to form a tree-like architecture. A high level of synthetic control is achieved through step-wise reactions and purification at each step to regulate the size, architecture, functionality and monodispersity of the molecules. These polymers have desirable pharmacokinetic properties and a polyvalent array of surface groups that make them potential drug delivery vesicles.
	**/

public class Dendrimer extends NanomaterialEntity implements Serializable
{
	/**
	* An attribute to allow serialization of the domain objects
	*/
	private static final long serialVersionUID = 1234567890L;

	
	/**
	* An oligomeric or polymeric construct that extends from the parent macromolecule.
	**/
	
	private String branch;
	/**
	* Retrieves the value of the branch attribute
	* @return branch
	**/

	public String getBranch(){
		return branch;
	}

	/**
	* Sets the value of branch attribute
	**/

	public void setBranch(String branch){
		this.branch = branch;
	}
	
	/**
	* The number of polymerization cycles completed in the synthesis of a dendrimer.
	**/
	
	private Float generation;
	/**
	* Retrieves the value of the generation attribute
	* @return generation
	**/

	public Float getGeneration(){
		return generation;
	}

	/**
	* Sets the value of generation attribute
	**/

	public void setGeneration(Float generation){
		this.generation = generation;
	}
	
	/**
	* Compares <code>obj</code> to it self and returns true if they both are same
	*
	* @param obj
	**/
	public boolean equals(Object obj)
	{
		if(obj instanceof Dendrimer) 
		{
			Dendrimer c =(Dendrimer)obj;
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