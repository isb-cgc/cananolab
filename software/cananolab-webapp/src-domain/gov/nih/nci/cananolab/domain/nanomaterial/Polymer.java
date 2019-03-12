package gov.nih.nci.cananolab.domain.nanomaterial;

import gov.nih.nci.cananolab.domain.particle.NanomaterialEntity;

import java.io.Serializable;
/**
	* A molecule made up of a linked series of repeated monomers.
	**/

public class Polymer extends NanomaterialEntity implements Serializable
{
	/**
	* An attribute to allow serialization of the domain objects
	*/
	private static final long serialVersionUID = 1234567890L;

	
	/**
	* The degree of any covalent linkage between two polymers or between two different regions of the same polymer.
	**/
	
	private Float crossLinkDegree;
	/**
	* Retrieves the value of the crossLinkDegree attribute
	* @return crossLinkDegree
	**/

	public Float getCrossLinkDegree(){
		return crossLinkDegree;
	}

	/**
	* Sets the value of crossLinkDegree attribute
	**/

	public void setCrossLinkDegree(Float crossLinkDegree){
		this.crossLinkDegree = crossLinkDegree;
	}
	
	/**
	* Any covalent linkage between two polymers or between two different regions of the same polymer.
	**/
	
	private Boolean crossLinked;
	/**
	* Retrieves the value of the crossLinked attribute
	* @return crossLinked
	**/

	public Boolean getCrossLinked(){
		return crossLinked;
	}

	/**
	* Sets the value of crossLinked attribute
	**/

	public void setCrossLinked(Boolean crossLinked){
		this.crossLinked = crossLinked;
	}
	
	/**
	* A substance that initiates or facilitates the synthesis of a polymer. This substance may or may not reside in the final polymer.
	**/
	
	private String initiator;
	/**
	* Retrieves the value of the initiator attribute
	* @return initiator
	**/

	public String getInitiator(){
		return initiator;
	}

	/**
	* Sets the value of initiator attribute
	**/

	public void setInitiator(String initiator){
		this.initiator = initiator;
	}
	
	/**
	* Compares <code>obj</code> to it self and returns true if they both are same
	*
	* @param obj
	**/
	public boolean equals(Object obj)
	{
		if(obj instanceof Polymer) 
		{
			Polymer c =(Polymer)obj; 			 
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