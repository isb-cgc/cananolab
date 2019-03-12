package gov.nih.nci.cananolab.domain.common;

import java.util.Collection;

import java.io.Serializable;
/**
	* 
	**/

public class Technique  implements Serializable
{
	/**
	* An attribute to allow serialization of the domain objects
	*/
	private static final long serialVersionUID = 1234567890L;

	
	/**
	* 
	**/
	
	private String abbreviation;
	/**
	* Retrieves the value of the abbreviation attribute
	* @return abbreviation
	**/

	public String getAbbreviation(){
		return abbreviation;
	}

	/**
	* Sets the value of abbreviation attribute
	**/

	public void setAbbreviation(String abbreviation){
		this.abbreviation = abbreviation;
	}
	
	/**
	* 
	**/
	
	private String createdBy;
	/**
	* Retrieves the value of the createdBy attribute
	* @return createdBy
	**/

	public String getCreatedBy(){
		return createdBy;
	}

	/**
	* Sets the value of createdBy attribute
	**/

	public void setCreatedBy(String createdBy){
		this.createdBy = createdBy;
	}
	
	/**
	* 
	**/
	
	private java.util.Date createdDate;
	/**
	* Retrieves the value of the createdDate attribute
	* @return createdDate
	**/

	public java.util.Date getCreatedDate(){
		return createdDate;
	}

	/**
	* Sets the value of createdDate attribute
	**/

	public void setCreatedDate(java.util.Date createdDate){
		this.createdDate = createdDate;
	}
	
	/**
	* 
	**/
	
	private Long id;
	/**
	* Retrieves the value of the id attribute
	* @return id
	**/

	public Long getId(){
		return id;
	}

	/**
	* Sets the value of id attribute
	**/

	public void setId(Long id){
		this.id = id;
	}
	
	/**
	* 
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
	* An associated gov.nih.nci.cananolab.domain.common.ExperimentConfig object's collection 
	**/
			
	private Collection<ExperimentConfig> experimentConfigCollection;
	/**
	* Retrieves the value of the experimentConfigCollection attribute
	* @return experimentConfigCollection
	**/

	public Collection<ExperimentConfig> getExperimentConfigCollection(){
		return experimentConfigCollection;
	}

	/**
	* Sets the value of experimentConfigCollection attribute
	**/

	public void setExperimentConfigCollection(Collection<ExperimentConfig> experimentConfigCollection){
		this.experimentConfigCollection = experimentConfigCollection;
	}
		
	/**
	* Compares <code>obj</code> to it self and returns true if they both are same
	*
	* @param obj
	**/
	public boolean equals(Object obj)
	{
		if(obj instanceof Technique) 
		{
			Technique c =(Technique)obj; 			 
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