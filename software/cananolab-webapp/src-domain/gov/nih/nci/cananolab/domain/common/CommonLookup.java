package gov.nih.nci.cananolab.domain.common;


import java.io.Serializable;
/**
	* A set of data contained in a data field.  It may represent a numeric quantity, a textual characterization, a date or time measurement, or some other state, depending on the nature of the attribute.
	**/

public class CommonLookup  implements Serializable
{
	/**
	* An attribute to allow serialization of the domain objects
	*/
	private static final long serialVersionUID = 1234567890L;

	
	/**
	* Any of the properties, roles, or associations, that define a concept.
	**/
	
	private String attribute;
	/**
	* Retrieves the value of the attribute attribute
	* @return attribute
	**/

	public String getAttribute(){
		return attribute;
	}

	/**
	* Sets the value of attribute attribute
	**/

	public void setAttribute(String attribute){
		this.attribute = attribute;
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
	* A numerical quantity measured or assigned or computed.
	**/
	
	private String value;
	/**
	* Retrieves the value of the value attribute
	* @return value
	**/

	public String getValue(){
		return value;
	}

	/**
	* Sets the value of value attribute
	**/

	public void setValue(String value){
		this.value = value;
	}
	
	/**
	* Compares <code>obj</code> to it self and returns true if they both are same
	*
	* @param obj
	**/
	public boolean equals(Object obj)
	{
		if(obj instanceof CommonLookup) 
		{
			CommonLookup c =(CommonLookup)obj;
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