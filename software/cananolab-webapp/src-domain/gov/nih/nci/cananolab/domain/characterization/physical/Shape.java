package gov.nih.nci.cananolab.domain.characterization.physical;


import java.io.Serializable;
/**
	* The spatial arrangement of something as distinct from its substance.
	**/

public class Shape extends PhysicoChemicalCharacterization implements Serializable
{
	/**
	* An attribute to allow serialization of the domain objects
	*/
	private static final long serialVersionUID = 1234567890L;

	
	/**
	* The ratio between the longest and shortest dimension of an object.
	**/
	
	private Float aspectRatio;
	/**
	* Retrieves the value of the aspectRatio attribute
	* @return aspectRatio
	**/

	public Float getAspectRatio(){
		return aspectRatio;
	}

	/**
	* Sets the value of aspectRatio attribute
	**/

	public void setAspectRatio(Float aspectRatio){
		this.aspectRatio = aspectRatio;
	}
	
	/**
	* The maximum magnitude of something in a particular direction, especially length or width or height.
	**/
	
	private Float maxDimension;
	/**
	* Retrieves the value of the maxDimension attribute
	* @return maxDimension
	**/

	public Float getMaxDimension(){
		return maxDimension;
	}

	/**
	* Sets the value of maxDimension attribute
	**/

	public void setMaxDimension(Float maxDimension){
		this.maxDimension = maxDimension;
	}
	
	/**
	* The unit of maximum dimension
	**/
	
	private String maxDimensionUnit;
	/**
	* Retrieves the value of the maxDimensionUnit attribute
	* @return maxDimensionUnit
	**/

	public String getMaxDimensionUnit(){
		return maxDimensionUnit;
	}

	/**
	* Sets the value of maxDimensionUnit attribute
	**/

	public void setMaxDimensionUnit(String maxDimensionUnit){
		this.maxDimensionUnit = maxDimensionUnit;
	}
	
	/**
	* The minimum magnitude of something in a particular direction, especially length or width or height.
	**/
	
	private Float minDimension;
	/**
	* Retrieves the value of the minDimension attribute
	* @return minDimension
	**/

	public Float getMinDimension(){
		return minDimension;
	}

	/**
	* Sets the value of minDimension attribute
	**/

	public void setMinDimension(Float minDimension){
		this.minDimension = minDimension;
	}
	
	/**
	* The unit of minimum dimension.
	**/
	
	private String minDimensionUnit;
	/**
	* Retrieves the value of the minDimensionUnit attribute
	* @return minDimensionUnit
	**/

	public String getMinDimensionUnit(){
		return minDimensionUnit;
	}

	/**
	* Sets the value of minDimensionUnit attribute
	**/

	public void setMinDimensionUnit(String minDimensionUnit){
		this.minDimensionUnit = minDimensionUnit;
	}
	
	/**
	* Something distinguishable as an identifiable class based on common qualities. Please refer to value domain ShapeType.
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
	* Compares <code>obj</code> to it self and returns true if they both are same
	*
	* @param obj
	**/
	public boolean equals(Object obj)
	{
		if(obj instanceof Shape) 
		{
			Shape c =(Shape)obj;
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