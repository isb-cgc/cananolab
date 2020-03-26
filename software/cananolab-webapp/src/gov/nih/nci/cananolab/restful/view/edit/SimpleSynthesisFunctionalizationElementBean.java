package gov.nih.nci.cananolab.restful.view.edit;

import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalizationElement;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationElementBean;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;
import java.util.Map;

public class SimpleSynthesisFunctionalizationElementBean {
    private String chemicalName;
    private String createdBy;
    private Date createdDate;
    private String description;
    private Long id;
    private List<Map<String,String>> functionList;
    private String molecularFormula;
    private String molecularFormulaType;
    private String pubChemDataSource;
    private Long pubChemId;
    private String type;
    private Float value;
    private String valueUnit;
    private String activationMethod;
    private String activationEffect;

    public String getActivationMethod() {
        return activationMethod;
    }

    public void setActivationMethod(String activationMethod) {
        this.activationMethod = activationMethod;
    }

    public String getActivationEffect() {
        return activationEffect;
    }

    public void setActivationEffect(String activationEffect) {
        this.activationEffect = activationEffect;
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

    public List<Map<String, String>> getInherentFunctionList() {
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

    public void setInherentFunctionList(List<Map<String, String>> functionList) {
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
