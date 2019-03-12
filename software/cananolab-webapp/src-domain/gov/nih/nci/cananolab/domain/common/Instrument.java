package gov.nih.nci.cananolab.domain.common;

import java.util.Collection;

import java.io.Serializable;
/**
	* Any object, or item of electrical or electronic equipment, which is designed to carry out a specific function or set of functions.
	**/

public class Instrument  implements Serializable
{
	/**
	* An attribute to allow serialization of the domain objects
	*/
	private static final long serialVersionUID = 1234567890L;

	
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
	* One or more characters used to identify, name, or characterize the nature, properties, or contents of a thing.
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
	* A person, an enterprise, or an entity that produces finished goods.
	**/
	
	private String manufacturer;
	/**
	* Retrieves the value of the manufacturer attribute
	* @return manufacturer
	**/

	public String getManufacturer(){
		return manufacturer;
	}

	/**
	* Sets the value of manufacturer attribute
	**/

	public void setManufacturer(String manufacturer){
		this.manufacturer = manufacturer;
	}
	
	/**
	* 
	**/
	
	private String modelName;
	/**
	* Retrieves the value of the modelName attribute
	* @return modelName
	**/

	public String getModelName(){
		return modelName;
	}

	/**
	* Sets the value of modelName attribute
	**/

	public void setModelName(String modelName){
		this.modelName = modelName;
	}
	
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
		if(obj instanceof Instrument) 
		{
			Instrument c =(Instrument)obj; 			 
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