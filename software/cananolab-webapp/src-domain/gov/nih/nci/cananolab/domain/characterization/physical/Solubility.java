package gov.nih.nci.cananolab.domain.characterization.physical;


import java.io.Serializable;
/**
	* The ability of a particular substance to dissolve in a particular solvent (yielding a saturated solution).
	**/

public class Solubility extends PhysicoChemicalCharacterization implements Serializable
{
	/**
	* An attribute to allow serialization of the domain objects
	*/
	private static final long serialVersionUID = 1234567890L;

	
	/**
	* The concentration of a solute or dispersion above which spontaneous aggregation or precipitation occurs.
	**/
	
	private Float criticalConcentration;
	/**
	* Retrieves the value of the criticalConcentration attribute
	* @return criticalConcentration
	**/

	public Float getCriticalConcentration(){
		return criticalConcentration;
	}

	/**
	* Sets the value of criticalConcentration attribute
	**/

	public void setCriticalConcentration(Float criticalConcentration){
		this.criticalConcentration = criticalConcentration;
	}
	
	/**
	* The unit of the concentration of a solute or dispersion above which spontaneous aggregation or precipitation occurs.
	**/
	
	private String criticalConcentrationUnit;
	/**
	* Retrieves the value of the criticalConcentrationUnit attribute
	* @return criticalConcentrationUnit
	**/

	public String getCriticalConcentrationUnit(){
		return criticalConcentrationUnit;
	}

	/**
	* Sets the value of criticalConcentrationUnit attribute
	**/

	public void setCriticalConcentrationUnit(String criticalConcentrationUnit){
		this.criticalConcentrationUnit = criticalConcentrationUnit;
	}
	
	/**
	* The ability of a particular substance to dissolve 
	**/
	
	private Boolean isSoluble;
	/**
	* Retrieves the value of the isSoluble attribute
	* @return isSoluble
	**/

	public Boolean getIsSoluble(){
		return isSoluble;
	}

	/**
	* Sets the value of isSoluble attribute
	**/

	public void setIsSoluble(Boolean isSoluble){
		this.isSoluble = isSoluble;
	}
	
	/**
	* A liquid that dissolves or that is capable of dissolving; the component of a solution that is present in greater amount. Please refer to value domain SolventType.
	**/
	
	private String solvent;
	/**
	* Retrieves the value of the solvent attribute
	* @return solvent
	**/

	public String getSolvent(){
		return solvent;
	}

	/**
	* Sets the value of solvent attribute
	**/

	public void setSolvent(String solvent){
		this.solvent = solvent;
	}
	
	/**
	* Compares <code>obj</code> to it self and returns true if they both are same
	*
	* @param obj
	**/
	public boolean equals(Object obj)
	{
		if(obj instanceof Solubility) 
		{
			Solubility c =(Solubility)obj; 			 
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