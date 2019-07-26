package gov.nih.nci.cananolab.domain.nanomaterial;

import gov.nih.nci.cananolab.domain.particle.NanomaterialEntity;

import java.io.Serializable;
/**
	* Fullerene-like nanostructures that consist of graphene cylinders. The ends of the construct are closed with pentagonal-shaped rings.
	**/

public class CarbonNanotube extends NanomaterialEntity implements Serializable
{
	/**
	* An attribute to allow serialization of the domain objects
	*/
	private static final long serialVersionUID = 1234567890L;

	
	/**
	* The average of the linear extent in space from one end of something to the other end, or the extent of something from beginning to end.
	**/
	
	private Float averageLength;
	/**
	* Retrieves the value of the averageLength attribute
	* @return averageLength
	**/

	public Float getAverageLength(){
		return averageLength;
	}

	/**
	* Sets the value of averageLength attribute
	**/

	public void setAverageLength(Float averageLength){
		this.averageLength = averageLength;
	}
	
	/**
	* The average length of a single undivided thing occurring in the composition of something else.
	**/
	
	private String averageLengthUnit;
	/**
	* Retrieves the value of the averageLengthUnit attribute
	* @return averageLengthUnit
	**/

	public String getAverageLengthUnit(){
		return averageLengthUnit;
	}

	/**
	* Sets the value of averageLengthUnit attribute
	**/

	public void setAverageLengthUnit(String averageLengthUnit){
		this.averageLengthUnit = averageLengthUnit;
	}
	
	/**
	* A measure of the degree of geometrical symmetry in the structure of the nanotube. The resultant symmetry is quantified based upon the on the material properties of the construct.
	**/
	
	private String chirality;
	/**
	* Retrieves the value of the chirality attribute
	* @return chirality
	**/

	public String getChirality(){
		return chirality;
	}

	/**
	* Sets the value of chirality attribute
	**/

	public void setChirality(String chirality){
		this.chirality = chirality;
	}
	
	/**
	* The length of a straight line passing through the center of a circle or sphere and connecting two points on the circumference.
	**/
	
	private Float diameter;
	/**
	* Retrieves the value of the diameter attribute
	* @return diameter
	**/

	public Float getDiameter(){
		return diameter;
	}

	/**
	* Sets the value of diameter attribute
	**/

	public void setDiameter(Float diameter){
		this.diameter = diameter;
	}
	
	/**
	* The unit of the length of a straight line passing through the center of a circle or sphere and connecting two points on the circumference.
	**/
	
	private String diameterUnit;
	/**
	* Retrieves the value of the diameterUnit attribute
	* @return diameterUnit
	**/

	public String getDiameterUnit(){
		return diameterUnit;
	}

	/**
	* Sets the value of diameterUnit attribute
	**/

	public void setDiameterUnit(String diameterUnit){
		this.diameterUnit = diameterUnit;
	}
	
	/**
	* The type of a layer of material that encloses space or that encloses a structure. Please refer to value domain CarbonNanotubeWallType.
	**/
	
	private String wallType;
	/**
	* Retrieves the value of the wallType attribute
	* @return wallType
	**/

	public String getWallType(){
		return wallType;
	}

	/**
	* Sets the value of wallType attribute
	**/

	public void setWallType(String wallType){
		this.wallType = wallType;
	}
	
	/**
	* Compares <code>obj</code> to it self and returns true if they both are same
	*
	* @param obj
	**/
	public boolean equals(Object obj)
	{
		if(obj instanceof CarbonNanotube) 
		{
			CarbonNanotube c =(CarbonNanotube)obj;
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