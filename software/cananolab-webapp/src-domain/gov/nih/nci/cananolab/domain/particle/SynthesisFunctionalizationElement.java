package gov.nih.nci.cananolab.domain.particle;

import gov.nih.nci.cananolab.domain.common.File;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.*;

public class SynthesisFunctionalizationElement {
    private Long synthesisFunctionalizationElementPkId;
    private String molecularFormula;
    private String molecularFormulaType;
    private String description;
    private String createdBy;
    private Timestamp createdDate;
    private String chemicalName;
    private Float value;
    private String valueUnit;
    private String pubChemDatasourceName;
    private Long pubChemId;
    private Long synthesisFunctionalizationPkId;
    private String activationMethod;
    private String activationEffect;

    private Set<File> files;

    private Set<SfeInherentFunction> sfeInherentFunctions = new HashSet<SfeInherentFunction>();
    private SynthesisFunctionalization synthesisFunctionalization;


    public SynthesisFunctionalizationElement() {
    }

    public SynthesisFunctionalizationElement(SynthesisFunctionalizationElement sfe) {
        this.synthesisFunctionalizationElementPkId = sfe.getSynthesisFunctionalizationElementPkId();
        this.molecularFormula = sfe.getMolecularFormula();
        this.molecularFormulaType = sfe.getMolecularFormulaType();
        this.description = sfe.getDescription();
        this.createdBy = sfe.getCreatedBy();
        this.createdDate = sfe.getCreatedDate();
        this.chemicalName = sfe.getChemicalName();
        this.value = sfe.getValue();
        this.valueUnit = sfe.getValueUnit();
        this.pubChemDatasourceName = sfe.getPubChemDatasourceName();
        this.pubChemId = sfe.getPubChemId();
        this.synthesisFunctionalizationPkId = sfe.getSynthesisFunctionalizationPkId();
        this.activationMethod = sfe.getActivationMethod();
        this.activationEffect = sfe.getActivationEffect();
        this.files = sfe.getFiles();

        for(SfeInherentFunction sfeInherentFunction: sfe.getSfeInherentFunctions()){
            sfeInherentFunctions.add( new SfeInherentFunction(sfeInherentFunction.getId(), sfeInherentFunction.getType(), sfeInherentFunction.getDescription()  ) );
        }
    }

    public Long getSynthesisFunctionalizationElementPkId() {
        return synthesisFunctionalizationElementPkId;
    }

    public void setSynthesisFunctionalizationElementPkId(Long synthesisFunctionalizationElementPkId) {
        this.synthesisFunctionalizationElementPkId = synthesisFunctionalizationElementPkId;
    }

    public Set<SfeInherentFunction> getSfeInherentFunctions(){
        return sfeInherentFunctions;
    }

    public void setSfeInherentFunctions(Set<SfeInherentFunction> functions){
        this.sfeInherentFunctions= functions;
    }


    public Long getId() {
        return synthesisFunctionalizationElementPkId;
    }

    public void setId(Long synthesisFunctionalizationElementPkId) {
        this.synthesisFunctionalizationElementPkId = synthesisFunctionalizationElementPkId;
    }

    public String getMolecularFormula() {
        return molecularFormula;
    }

    public void setMolecularFormula(String molecularFormula) {
        this.molecularFormula = molecularFormula;
    }

    public String getMolecularFormulaType() {
        return molecularFormulaType;
    }

    public void setMolecularFormulaType(String molecularFormulaType) {
        this.molecularFormulaType = molecularFormulaType;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public Timestamp getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Timestamp createdDate) {
        this.createdDate = createdDate;
    }

    public String getChemicalName() {
        return chemicalName;
    }

    public void setChemicalName(String chemicalName) {
        this.chemicalName = chemicalName;
    }

    public Float getValue() {
        return value;
    }

    public void setValue(Float value) {
        this.value = value;
    }

    public String getValueUnit() {
        return valueUnit;
    }

    public void setValueUnit(String valueUnit) {
        this.valueUnit = valueUnit;
    }

    public String getPubChemDatasourceName() {
        return pubChemDatasourceName;
    }

    public void setPubChemDatasourceName(String pubChemDatasourceName) {
        this.pubChemDatasourceName = pubChemDatasourceName;
    }

    public Long getPubChemId() {
        return pubChemId;
    }

    public void setPubChemId(Long pubChemId) {
        this.pubChemId = pubChemId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        SynthesisFunctionalizationElement that = (SynthesisFunctionalizationElement) o;
        return Objects.equals(synthesisFunctionalizationElementPkId, that.getId()) &&
                Objects.equals(molecularFormula, that.getMolecularFormula()) &&
                Objects.equals(molecularFormulaType, that.getMolecularFormulaType()) &&
                Objects.equals(description, that.getDescription()) &&
                Objects.equals(createdBy, that.getCreatedBy()) &&
                Objects.equals(createdDate, that.getCreatedDate()) &&
                Objects.equals(chemicalName, that.getChemicalName()) &&
                Objects.equals(value, that.getValue()) &&
                Objects.equals(valueUnit, that.getValueUnit()) &&
                Objects.equals(pubChemDatasourceName, that.getPubChemDatasourceName()) &&
                Objects.equals(pubChemId, that.getPubChemId());
    }

    @Override
    public int hashCode() {
        return Objects.hash(synthesisFunctionalizationElementPkId, molecularFormula, molecularFormulaType,
                description, createdBy, createdDate, chemicalName, value, valueUnit, pubChemDatasourceName, pubChemId);
    }

    public Long getSynthesisFunctionalizationPkId() {
        return synthesisFunctionalizationPkId;
    }

    public void setSynthesisFunctionalizationPkId(Long synthesisFunctionalizationPkId) {
        this.synthesisFunctionalizationPkId = synthesisFunctionalizationPkId;
    }

    public SynthesisFunctionalization getSynthesisFunctionalization() {
        return synthesisFunctionalization;
    }

    public void setSynthesisFunctionalization(SynthesisFunctionalization synthesisFunctionalization) {
        this.synthesisFunctionalization = synthesisFunctionalization;
    }

    public Set<File> getFiles(){return this.files;}
    public void setFiles(Set<File> files){
        this.files = files;
    }

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



}