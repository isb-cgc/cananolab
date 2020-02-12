package gov.nih.nci.cananolab.restful.view.edit;

import java.util.Date;
import java.util.List;
import java.util.Map;

public class SimpleSynthesisMaterialElementBean {
    String chemicalName;
    String createdBy;
    Date createdDate;
    String description;
    Long id;
    List<Map<String,Object>> functionList;
    String molecularFormula;
    String molecularFormulaType;
    String pubChemDataSource;
    Long pubChemId;
    Map<String,String> supplierMap;
    String type;
    Float value;
    String valueUnit;

    public void setFunctionList(List<Map<String, Object>> functionList) {
        this.functionList = functionList;
    }


    public List<SimpleFileBean> getFiles() {
        return files;
    }

    public void setFiles(List<SimpleFileBean> files) {
        this.files = files;
    }

    List<SimpleFileBean> files;

    public String getMolecularFormulaType() {
        return molecularFormulaType;
    }

    public String getChemicalName() {
        return chemicalName;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public String getDescription() {
        return description;
    }

    public Long getId() {
        return id;
    }

    public List<Map<String, Object>> getInherentFunctionList() {
        return functionList;
    }

    public String getMolecularFormula() {
        return molecularFormula;
    }

    public String getPubChemDataSource() {
        return pubChemDataSource;
    }

    public Long getPubChemId() {
        return pubChemId;
    }

    public Map<String, String> getSupplierMap() {
        return supplierMap;
    }

    public String getType() {
        return type;
    }

    public Float getValue() {
        return value;
    }

    public String getValueUnit() {
        return valueUnit;
    }

    public void setMolecularFormula(String molecularFormula){
        this.molecularFormula = molecularFormula;
    }

    public void setChemicalName(String chemicalName) {
        this.chemicalName = chemicalName;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setInherentFunctionList(List<Map<String, Object>> functionList) {
        this.functionList = functionList;
    }

    public void setMolecularFormulaType(String molecularFormulaType) {
        this.molecularFormulaType = molecularFormulaType;
    }

    public void setPubChemDataSource(String pubChemDatasourceName) {
        this.pubChemDataSource = pubChemDatasourceName;
    }

    public void setPubChemId(Long pubChemId) {
        this.pubChemId = pubChemId;
    }

    public void setSupplier(Map<String, String> supplierMap) {
        this.supplierMap = supplierMap;
    }

    public void setType(String type) {
        this.type = type;
    }

    public void setValue(Float value) {
        this.value = value;
    }

    public void setValueUnit(String valueUnit) {
        this.valueUnit = valueUnit;
    }
}
