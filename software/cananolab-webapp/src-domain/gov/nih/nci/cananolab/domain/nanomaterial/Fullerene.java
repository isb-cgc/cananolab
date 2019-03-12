package gov.nih.nci.cananolab.domain.nanomaterial;

import gov.nih.nci.cananolab.domain.particle.NanomaterialEntity;

import java.io.Serializable;
/**
	* One of three known pure forms of carbon that exhibits a spherical shape with a hollow interior. The number of carbon atoms comprising fullerenes is variable and several stable spherical carbon structures containing 70 or more atoms have been documented.
	**/

public class Fullerene extends NanomaterialEntity implements Serializable
{
	/**
	* An attribute to allow serialization of the domain objects
	*/
	private static final long serialVersionUID = 1234567890L;

	
	/**
	* The mean diameter of the fullerene component of a sample.
	**/
	
	private Float averageDiameter;
	/**
	* Retrieves the value of the averageDiameter attribute
	* @return averageDiameter
	**/

	public Float getAverageDiameter(){
		return averageDiameter;
	}

	/**
	* Sets the value of averageDiameter attribute
	**/

	public void setAverageDiameter(Float averageDiameter){
		this.averageDiameter = averageDiameter;
	}
	
	/**
	* A single undivided thing occurring in the composition of something else.The length of a straight line passing through the center of a circle or sphere and connecting two points on the circumference.
	**/
	
	private String averageDiameterUnit;
	/**
	* Retrieves the value of the averageDiameterUnit attribute
	* @return averageDiameterUnit
	**/

	public String getAverageDiameterUnit(){
		return averageDiameterUnit;
	}

	/**
	* Sets the value of averageDiameterUnit attribute
	**/

	public void setAverageDiameterUnit(String averageDiameterUnit){
		this.averageDiameterUnit = averageDiameterUnit;
	}
	
	/**
	* A numeral or string of numerals expressing value, quantity, or identification.A nonmetalic tetravalent element with symbol C, atomic number 6, and atomic weight 12.
	**/
	
	private Integer numberOfCarbon;
	/**
	* Retrieves the value of the numberOfCarbon attribute
	* @return numberOfCarbon
	**/

	public Integer getNumberOfCarbon(){
		return numberOfCarbon;
	}

	/**
	* Sets the value of numberOfCarbon attribute
	**/

	public void setNumberOfCarbon(Integer numberOfCarbon){
		this.numberOfCarbon = numberOfCarbon;
	}
	
	/**
	* Compares <code>obj</code> to it self and returns true if they both are same
	*
	* @param obj
	**/
	public boolean equals(Object obj)
	{
		if(obj instanceof Fullerene) 
		{
			Fullerene c =(Fullerene)obj; 			 
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