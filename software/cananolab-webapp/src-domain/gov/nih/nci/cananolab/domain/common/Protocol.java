package gov.nih.nci.cananolab.domain.common;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
	* The formal plan of an experiment or research activity, including the objective, rationale, design, materials and methods for the conduct of the study; intervention description, and method of data analysis
	**/

@Entity
@Table(name="protocol")
public class Protocol  implements Serializable
{
	/**
	* An attribute to allow serialization of the domain objects
	*/
	private static final long serialVersionUID = 1234567890L;

	
	/**
	* 
	**/

	@Column(name="protocol_abbreviation")
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
	* Indicates the person or authoritative body who brought the item into existence.
	**/

	@Column(name="created_by")
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
	* The date of the process by which something is brought into existence; having been brought into existence.
	**/

	@Column(name="created_date")
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

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="protocol_pk_id")
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

	@Column(name="protocol_name")
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
	* Something distinguishable as an identifiable class based on common qualities. Please refer to value domain Protocol
	**/

	@Column(name="protocol_type")
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
	* 
	**/

	@Column(name="protocol_version")
	private String version;
	/**
	* Retrieves the value of the version attribute
	* @return version
	**/

	public String getVersion(){
		return version;
	}

	/**
	* Sets the value of version attribute
	**/

	public void setVersion(String version){
		this.version = version;
	}
	
	/**
	* An associated gov.nih.nci.cananolab.domain.common.File object
	**/

	@Column(name="file")
	private File file;
	/**
	* Retrieves the value of the file attribute
	* @return file
	**/
	
	public File getFile(){
		return file;
	}
	/**
	* Sets the value of file attribute
	**/

	public void setFile(File file){
		this.file = file;
	}
			
	/**
	* Compares <code>obj</code> to it self and returns true if they both are same
	*
	* @param obj
	**/
	public boolean equals(Object obj)
	{
		if(obj instanceof Protocol) 
		{
			Protocol c =(Protocol)obj;
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