package gov.nih.nci.cananolab.domain.common;

import java.io.Serializable;
/**
	* 
	**/

public class PointOfContact  implements Serializable
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
	 *
	 **/

	private java.util.Date updatedDate;
	/**
	 * Retrieves the value of the updatedDate attribute
	 * @return createdDate
	 **/

	public java.util.Date getUpdatedDate(){
		return updatedDate;
	}

	/**
	 * Sets the value of updatedDate attribute
	 **/

	public void setUpdatedDate(java.util.Date updatedDate){
		this.updatedDate = updatedDate;
	}

	/**
	* 
	**/
	
	private String email;
	/**
	* Retrieves the value of the email attribute
	* @return email
	**/

	public String getEmail(){
		return email;
	}

	/**
	* Sets the value of email attribute
	**/

	public void setEmail(String email){
		this.email = email;
	}
	
	/**
	* 
	**/
	
	private String firstName;
	/**
	* Retrieves the value of the firstName attribute
	* @return firstName
	**/

	public String getFirstName(){
		return firstName;
	}

	/**
	* Sets the value of firstName attribute
	**/

	public void setFirstName(String firstName){
		this.firstName = firstName;
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
	
	private String lastName;
	/**
	* Retrieves the value of the lastName attribute
	* @return lastName
	**/

	public String getLastName(){
		return lastName;
	}

	/**
	* Sets the value of lastName attribute
	**/

	public void setLastName(String lastName){
		this.lastName = lastName;
	}
	
	/**
	* 
	**/
	
	private String middleInitial;
	/**
	* Retrieves the value of the middleInitial attribute
	* @return middleInitial
	**/

	public String getMiddleInitial(){
		return middleInitial;
	}

	/**
	* Sets the value of middleInitial attribute
	**/

	public void setMiddleInitial(String middleInitial){
		this.middleInitial = middleInitial;
	}
	
	/**
	* 
	**/
	
	private String phone;
	/**
	* Retrieves the value of the phone attribute
	* @return phone
	**/

	public String getPhone(){
		return phone;
	}

	/**
	* Sets the value of phone attribute
	**/

	public void setPhone(String phone){
		this.phone = phone;
	}
	
	/**
	* 
	**/
	
	private String role;
	/**
	* Retrieves the value of the role attribute
	* @return role
	**/

	public String getRole(){
		return role;
	}

	/**
	* Sets the value of role attribute
	**/

	public void setRole(String role){
		this.role = role;
	}
	
	/**
	* An associated gov.nih.nci.cananolab.domain.common.Organization object
	**/
			
	private Organization organization;
	/**
	* Retrieves the value of the organization attribute
	* @return organization
	**/
	
	public Organization getOrganization(){
		return organization;
	}
	/**
	* Sets the value of organization attribute
	**/

	public void setOrganization(Organization organization){
		this.organization = organization;
	}
			
	/**
	* Compares <code>obj</code> to it self and returns true if they both are same
	*
	* @param obj
	**/
	public boolean equals(Object obj)
	{
		if(obj instanceof PointOfContact) 
		{
			PointOfContact c =(PointOfContact)obj;
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