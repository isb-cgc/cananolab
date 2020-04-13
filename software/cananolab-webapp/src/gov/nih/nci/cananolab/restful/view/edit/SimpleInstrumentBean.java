package gov.nih.nci.cananolab.restful.view.edit;

public class SimpleInstrumentBean {
	
	String manufacturer = "";
	String modelName = "";
	String type = "";
	Long id;
	
	public String getManufacturer() {
		return manufacturer;
	}
	public void setManufacturer(String manufacturer) {
		if (manufacturer != null)
			this.manufacturer = manufacturer;
	}
	public String getModelName() {
		return modelName;
	}
	public void setModelName(String modelName) {
		if (modelName != null)
			this.modelName = modelName;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		if (type != null)
			this.type = type;
	}
	public Long getId(){return this.id;}
	public void setId(Long id){this.id = id;}
	

}
