package gov.nih.nci.cananolab.domain.nanomaterial;

import gov.nih.nci.cananolab.domain.particle.NanomaterialEntity;

import java.io.Serializable;
/**
	* A small, stable particle whose size is measured in nanometers. These particles are used in various biomedical applications in which they can be utilized as drug carriers or imaging agents. Various targeting agents, such as antibodies, drugs, imaging agents, and reporters can be attached to the surface of a nanoparticle. These particles are electropositive chemical elements characterised by ductility, malleability, luster, and conductance of heat and electricity. They can replace the hydrogen of an acid and form bases with hydroxyl radicals.
	**/

public class MetalParticle extends NanomaterialEntity implements Serializable
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
		if(obj instanceof MetalParticle) 
		{
			MetalParticle c =(MetalParticle)obj;
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