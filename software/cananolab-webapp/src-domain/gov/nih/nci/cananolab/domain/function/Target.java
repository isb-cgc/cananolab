package gov.nih.nci.cananolab.domain.function;


import java.io.Serializable;
/**
	* An object fixed as a goal or point of examination; something to point at; a destination.
	**/

public abstract class Target  implements Serializable
{
	/**
	* An attribute to allow serialization of the domain objects
	*/
	private static final long serialVersionUID = 1234567890L;

	
	/**
	* Indicates the person or authoritative body who brought the item into existence.
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
	* The date of the process by which something is brought into existence; having been brought into existence
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
	* A written or verbal account, representation, statement, or explanation of something.
	**/
	
	private String description;
	/**
	* Retrieves the value of the description attribute
	* @return description
	**/

	public String getDescription(){
		return description;
	}

	/**
	* Sets the value of description attribute
	**/

	public void setDescription(String description){
		this.description = description;
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
	* The words or language units by which a thing is known.
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
	* An associated gov.nih.nci.cananolab.domain.function.TargetingFunction object
	**/
			
	private TargetingFunction targetingFunction;
	/**
	* Retrieves the value of the targetingFunction attribute
	* @return targetingFunction
	**/
	
	public TargetingFunction getTargetingFunction(){
		return targetingFunction;
	}
	/**
	* Sets the value of targetingFunction attribute
	**/

	public void setTargetingFunction(TargetingFunction targetingFunction){
		this.targetingFunction = targetingFunction;
	}
			
	/**
	* Compares <code>obj</code> to it self and returns true if they both are same
	*
	* @param obj
	**/
	public boolean equals(Object obj)
	{
		if(obj instanceof Target) 
		{
			Target c =(Target)obj; 			 
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