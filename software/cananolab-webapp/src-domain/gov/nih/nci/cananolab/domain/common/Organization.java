package gov.nih.nci.cananolab.domain.common;

import java.util.Collection;

import java.io.Serializable;
/**
	* Where something is available or from where it originates.
	**/

public class Organization  implements Serializable
{
	/**
	* An attribute to allow serialization of the domain objects
	*/
	private static final long serialVersionUID = 1234567890L;

	
	/**
	* A large and densely populated urban area; a city specified in an address.
	**/
	
	private String city;
	/**
	* Retrieves the value of the city attribute
	* @return city
	**/

	public String getCity(){
		return city;
	}

	/**
	* Sets the value of city attribute
	**/

	public void setCity(String city){
		this.city = city;
	}
	
	/**
	* A collective generic term that refers here to a wide variety of dependencies, areas of special sovereignty, uninhabited islands, and other entities in addition to the traditional countries or independent states.
	**/
	
	private String country;
	/**
	* Retrieves the value of the country attribute
	* @return country
	**/

	public String getCountry(){
		return country;
	}

	/**
	* Sets the value of country attribute
	**/

	public void setCountry(String country){
		this.country = country;
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
	* The name of organizational unit like a laboratory, institute or consortium.
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
	* Any system designed to expedite the sorting and delivery of mail by assigning a series of alphanumeric codes to each delivery area.  Also used to refer to any individual delivery area code.
	**/
	
	private String postalCode;
	/**
	* Retrieves the value of the postalCode attribute
	* @return postalCode
	**/

	public String getPostalCode(){
		return postalCode;
	}

	/**
	* Sets the value of postalCode attribute
	**/

	public void setPostalCode(String postalCode){
		this.postalCode = postalCode;
	}
	
	/**
	* One of the fifty states which is a member of the federation known as the United States of America. Other US geographic areas, such as Puerto Rico and the District of Columbia, are essentially equivalent to State when used in an address.
	**/
	
	private String state;
	/**
	* Retrieves the value of the state attribute
	* @return state
	**/

	public String getState(){
		return state;
	}

	/**
	* Sets the value of state attribute
	**/

	public void setState(String state){
		this.state = state;
	}
	
	/**
	* 
	**/
	
	private String streetAddress1;
	/**
	* Retrieves the value of the streetAddress1 attribute
	* @return streetAddress1
	**/

	public String getStreetAddress1(){
		return streetAddress1;
	}

	/**
	* Sets the value of streetAddress1 attribute
	**/

	public void setStreetAddress1(String streetAddress1){
		this.streetAddress1 = streetAddress1;
	}
	
	/**
	* A standardized representation of the location of a person, business, building, or organization.
	**/
	
	private String streetAddress2;
	/**
	* Retrieves the value of the streetAddress2 attribute
	* @return streetAddress2
	**/

	public String getStreetAddress2(){
		return streetAddress2;
	}

	/**
	* Sets the value of streetAddress2 attribute
	**/

	public void setStreetAddress2(String streetAddress2){
		this.streetAddress2 = streetAddress2;
	}
	
	/**
	* An associated gov.nih.nci.cananolab.domain.common.PointOfContact object's collection 
	**/
			
	private Collection<PointOfContact> pointOfContactCollection;
	/**
	* Retrieves the value of the pointOfContactCollection attribute
	* @return pointOfContactCollection
	**/

	public Collection<PointOfContact> getPointOfContactCollection(){
		return pointOfContactCollection;
	}

	/**
	* Sets the value of pointOfContactCollection attribute
	**/

	public void setPointOfContactCollection(Collection<PointOfContact> pointOfContactCollection){
		this.pointOfContactCollection = pointOfContactCollection;
	}
		
	/**
	* Compares <code>obj</code> to it self and returns true if they both are same
	*
	* @param obj
	**/
	public boolean equals(Object obj)
	{
		if(obj instanceof Organization) 
		{
			Organization c =(Organization)obj; 			 
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