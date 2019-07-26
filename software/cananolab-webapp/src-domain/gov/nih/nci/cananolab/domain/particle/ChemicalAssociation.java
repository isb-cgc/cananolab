package gov.nih.nci.cananolab.domain.particle;

import gov.nih.nci.cananolab.domain.common.File;
import java.util.Collection;

import java.io.Serializable;
/**
	* Any process of combining chemical entities that is dependent upon chemical forces. 
	**/

public class ChemicalAssociation  implements Serializable
{
	/**
	* An attribute to allow serialization of the domain objects
	*/
	private static final long serialVersionUID = 1234567890L;

	
	/**
	* Indicates the person or authoritative body who brought the item into existence
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
	* The date of the process by which something is brought into existence; having been brought into existence. 
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
	* An associated gov.nih.nci.cananolab.domain.particle.AssociatedElement object
	**/
			
	private AssociatedElement associatedElementA;
	/**
	* Retrieves the value of the associatedElementA attribute
	* @return associatedElementA
	**/
	
	public AssociatedElement getAssociatedElementA(){
		return associatedElementA;
	}
	/**
	* Sets the value of associatedElementA attribute
	**/

	public void setAssociatedElementA(AssociatedElement associatedElementA){
		this.associatedElementA = associatedElementA;
	}
			
	/**
	* An associated gov.nih.nci.cananolab.domain.particle.AssociatedElement object
	**/
			
	private AssociatedElement associatedElementB;
	/**
	* Retrieves the value of the associatedElementB attribute
	* @return associatedElementB
	**/
	
	public AssociatedElement getAssociatedElementB(){
		return associatedElementB;
	}
	/**
	* Sets the value of associatedElementB attribute
	**/

	public void setAssociatedElementB(AssociatedElement associatedElementB){
		this.associatedElementB = associatedElementB;
	}
			
	/**
	* An associated gov.nih.nci.cananolab.domain.particle.SampleComposition object
	**/
			
	private SampleComposition sampleComposition;
	/**
	* Retrieves the value of the sampleComposition attribute
	* @return sampleComposition
	**/
	
	public SampleComposition getSampleComposition(){
		return sampleComposition;
	}
	/**
	* Sets the value of sampleComposition attribute
	**/

	public void setSampleComposition(SampleComposition sampleComposition){
		this.sampleComposition = sampleComposition;
	}
			
	/**
	* An associated gov.nih.nci.cananolab.domain.common.File object's collection 
	**/
			
	private Collection<File> fileCollection;
	/**
	* Retrieves the value of the fileCollection attribute
	* @return fileCollection
	**/

	public Collection<File> getFileCollection(){
		return fileCollection;
	}

	/**
	* Sets the value of fileCollection attribute
	**/

	public void setFileCollection(Collection<File> fileCollection){
		this.fileCollection = fileCollection;
	}
		
	/**
	* Compares <code>obj</code> to it self and returns true if they both are same
	*
	* @param obj
	**/
	public boolean equals(Object obj)
	{
		if(obj instanceof ChemicalAssociation) 
		{
			ChemicalAssociation c =(ChemicalAssociation)obj;
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