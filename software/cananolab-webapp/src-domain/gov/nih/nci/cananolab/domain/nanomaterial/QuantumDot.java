package gov.nih.nci.cananolab.domain.nanomaterial;

import gov.nih.nci.cananolab.domain.particle.NanomaterialEntity;

import java.io.Serializable;
/**
	* Nanometer-sized semiconductor particles, made of cadmium selenide (CdSe), cadmium sulfide (CdS) or cadmium telluride (CdTe) with an inert polymer coating. The semiconductor material used for the core is chosen based upon the emission wavelength range being targeted: CdS for UV-blue, CdSe for the bulk of the visible spectrum, and CdTe for far red and near-infrared. The size of the particle determines the exact color of a given quantum dot. The polymer coating protects cells from cadmium toxicity but also facilitates the attachment of a variety of targeting molecules, including monoclonal antibodies directed to tumor-specific biomarkers. Because of their small size, quantum dots can function as cell- and even molecule-specific markers that will not interfere with the normal cellular functions.
	**/

public class QuantumDot extends NanomaterialEntity implements Serializable
{
	/**
	* An attribute to allow serialization of the domain objects
	*/
	private static final long serialVersionUID = 1234567890L;

	
	/**
	* Compares <code>obj</code> to it self and returns true if they both are same
	*
	* @param obj
	**/
	public boolean equals(Object obj)
	{
		if(obj instanceof QuantumDot) 
		{
			QuantumDot c =(QuantumDot)obj; 			 
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