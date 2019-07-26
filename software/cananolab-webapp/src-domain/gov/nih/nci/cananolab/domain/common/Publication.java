package gov.nih.nci.cananolab.domain.common;

import gov.nih.nci.cananolab.domain.particle.Sample;
import java.util.Collection;

import java.io.Serializable;
/**
	* 
	**/

public class Publication extends File implements Serializable
{
	/**
	* An attribute to allow serialization of the domain objects
	*/
	private static final long serialVersionUID = 1234567890L;

	
	/**
	* 
	**/
	
	private String category;
	/**
	* Retrieves the value of the category attribute
	* @return category
	**/

	public String getCategory(){
		return category;
	}

	/**
	* Sets the value of category attribute
	**/

	public void setCategory(String category){
		this.category = category;
	}
	
	/**
	* 
	**/
	
	private String digitalObjectId;
	/**
	* Retrieves the value of the digitalObjectId attribute
	* @return digitalObjectId
	**/

	public String getDigitalObjectId(){
		return digitalObjectId;
	}

	/**
	* Sets the value of digitalObjectId attribute
	**/

	public void setDigitalObjectId(String digitalObjectId){
		this.digitalObjectId = digitalObjectId;
	}
	
	/**
	* 
	**/
	
	private String endPage;
	/**
	* Retrieves the value of the endPage attribute
	* @return endPage
	**/

	public String getEndPage(){
		return endPage;
	}

	/**
	* Sets the value of endPage attribute
	**/

	public void setEndPage(String endPage){
		this.endPage = endPage;
	}
	
	/**
	* 
	**/
	
	private String journalName;
	/**
	* Retrieves the value of the journalName attribute
	* @return journalName
	**/

	public String getJournalName(){
		return journalName;
	}

	/**
	* Sets the value of journalName attribute
	**/

	public void setJournalName(String journalName){
		this.journalName = journalName;
	}
	
	/**
	* 
	**/
	
	private Long pubMedId;
	/**
	* Retrieves the value of the pubMedId attribute
	* @return pubMedId
	**/

	public Long getPubMedId(){
		return pubMedId;
	}

	/**
	* Sets the value of pubMedId attribute
	**/

	public void setPubMedId(Long pubMedId){
		this.pubMedId = pubMedId;
	}
	
	/**
	* 
	**/
	
	private String researchArea;
	/**
	* Retrieves the value of the researchArea attribute
	* @return researchArea
	**/

	public String getResearchArea(){
		return researchArea;
	}

	/**
	* Sets the value of researchArea attribute
	**/

	public void setResearchArea(String researchArea){
		this.researchArea = researchArea;
	}
	
	/**
	* 
	**/
	
	private String startPage;
	/**
	* Retrieves the value of the startPage attribute
	* @return startPage
	**/

	public String getStartPage(){
		return startPage;
	}

	/**
	* Sets the value of startPage attribute
	**/

	public void setStartPage(String startPage){
		this.startPage = startPage;
	}
	
	/**
	* 
	**/
	
	private String status;
	/**
	* Retrieves the value of the status attribute
	* @return status
	**/

	public String getStatus(){
		return status;
	}

	/**
	* Sets the value of status attribute
	**/

	public void setStatus(String status){
		this.status = status;
	}
	
	/**
	* 
	**/
	
	private String volume;
	/**
	* Retrieves the value of the volume attribute
	* @return volume
	**/

	public String getVolume(){
		return volume;
	}

	/**
	* Sets the value of volume attribute
	**/

	public void setVolume(String volume){
		this.volume = volume;
	}
	
	/**
	* 
	**/
	
	private Integer year;
	/**
	* Retrieves the value of the year attribute
	* @return year
	**/

	public Integer getYear(){
		return year;
	}

	/**
	* Sets the value of year attribute
	**/

	public void setYear(Integer year){
		this.year = year;
	}
	
	/**
	* An associated gov.nih.nci.cananolab.domain.common.Author object's collection 
	**/
			
	private Collection<Author> authorCollection;
	/**
	* Retrieves the value of the authorCollection attribute
	* @return authorCollection
	**/

	public Collection<Author> getAuthorCollection(){
		return authorCollection;
	}

	/**
	* Sets the value of authorCollection attribute
	**/

	public void setAuthorCollection(Collection<Author> authorCollection){
		this.authorCollection = authorCollection;
	}
		
	/**
	* Compares <code>obj</code> to it self and returns true if they both are same
	*
	* @param obj
	**/
	public boolean equals(Object obj)
	{
		if(obj instanceof Publication) 
		{
			Publication c =(Publication)obj;
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