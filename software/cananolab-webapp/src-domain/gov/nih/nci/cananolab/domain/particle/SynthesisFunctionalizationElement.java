package gov.nih.nci.cananolab.domain.particle;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.common.Supplier;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;



public class SynthesisFunctionalizationElement implements Serializable {

    private Long synthesisFunctionalizationElementPkId;
    private Long synthesisFunctionalizationId;
    private SynthesisFunctionalization synthesisFunctionalization;

    private String activationMethod;
    private String activationEffect;

    private String molecularFormula;
    private String molecularFormulaType;
    private String description;
    private String createdBy;
    private Date createdDate;
    private String chemicalName;
    private Float value;
    private String valueUnit;
    private String pubChemDatasourceName;
    private Long pubChemId;
    private Set<SfeInherentFunction> sfeInherentFunctions = new HashSet<SfeInherentFunction>( 0 );
    private Set<File> files = new HashSet<File>( 0 );
    /*
        private Supplier supplier;
    */
    private String type;


    public SynthesisFunctionalizationElement() {
    }

//	public SynthesisFunctionalizationElement(Long synthesisFunctionalizationElementPkId, SynthesisFunctionalization synthesisFunctionalization,
//			String createdBy, Date createdDate) {
//		this.synthesisFunctionalizationElementPkId = synthesisFunctionalizationElementPkId;
//		this.synthesisFunctionalization = synthesisFunctionalization;
//		this.createdBy = createdBy;
//		this.createdDate = createdDate;
//	}

    public SynthesisFunctionalizationElement( Long synthesisFunctionalizationElementPkId, Long synthesisFunctionalization,
                                              String createdBy, Date createdDate ) {
        this.synthesisFunctionalizationElementPkId = synthesisFunctionalizationElementPkId;
        this.synthesisFunctionalizationId = synthesisFunctionalization;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
    }

    public SynthesisFunctionalization getSynthesisFunctionalization() {
        return synthesisFunctionalization;
    }

    public void setSynthesisFunctionalization( SynthesisFunctionalization synthesisFunctionalization ) {
        this.synthesisFunctionalization = synthesisFunctionalization;
        this.setSynthesisFunctionalizationId( synthesisFunctionalization.getId() );
    }

    public Long getSynthesisFunctionalizationId() {
        return synthesisFunctionalizationId;
    }

    public void setSynthesisFunctionalizationId( Long functionalizationId ) {
        synthesisFunctionalizationId = functionalizationId;
    }


    public Long getId() {
        return this.synthesisFunctionalizationElementPkId;
    }

    public void setId( Long synthesisFunctionalizationElementPkId ) {
        this.synthesisFunctionalizationElementPkId = synthesisFunctionalizationElementPkId;
    }


    public String getMolecularFormula() {
        return this.molecularFormula;
    }

    public void setMolecularFormula( String molecularFormula ) {
        this.molecularFormula = molecularFormula;
    }

    public String getMolecularFormulaType() {
        return this.molecularFormulaType;
    }

    public void setMolecularFormulaType( String molecularFormulaType ) {
        this.molecularFormulaType = molecularFormulaType;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription( String description ) {
        this.description = description;
    }

    public String getCreatedBy() {
        return this.createdBy;
    }

    public void setCreatedBy( String createdBy ) {
        this.createdBy = createdBy;
    }

    public Date getCreatedDate() {
        return this.createdDate;
    }

    public void setCreatedDate( Date createdDate ) {
        this.createdDate = createdDate;
    }

    public String getChemicalName() {
        return this.chemicalName;
    }

    public void setChemicalName( String chemicalName ) {
        this.chemicalName = chemicalName;
    }

    public Float getValue() {
        return this.value;
    }

    public void setValue( Float value ) {
        this.value = value;
    }

    public String getValueUnit() {
        return this.valueUnit;
    }

    public void setValueUnit( String valueUnit ) {
        this.valueUnit = valueUnit;
    }

    public String getPubChemDatasourceName() {
        return this.pubChemDatasourceName;
    }

    public void setPubChemDatasourceName( String pubChemDatasourceName ) {
        this.pubChemDatasourceName = pubChemDatasourceName;
    }

    public Long getPubChemId() {
        return this.pubChemId;
    }

    public void setPubChemId( Long pubChemId ) {
        this.pubChemId = pubChemId;
    }

    public Set<SfeInherentFunction> getSfeInherentFunctions() {
        return this.sfeInherentFunctions;
    }

    public void setSfeInherentFunctions( Set<SfeInherentFunction> sfeInherentFunctions ) {
        this.sfeInherentFunctions = sfeInherentFunctions;
    }

    public void addSfeInherentFunction( SfeInherentFunction function ) {
        this.sfeInherentFunctions.add( function );
    }

/*
    public Supplier getSupplier() {
        return supplier;
    }

    public void setSupplier(Supplier supplier) {
        this.supplier = supplier;
    }
*/

    public Set<File> getFiles() {
        return this.files;
    }

    public void setFiles( Set<File> files ) {
        this.files = files;
    }

    public String getType() {
        return type;
    }

    public void setType( String type ) {
        this.type = type;
    }

    public String getActivationMethod() {
        return activationMethod;
    }

    public void setActivationMethod( String activationMethod ) {
        this.activationMethod = activationMethod;
    }


    public String getActivationEffect() {
        return activationEffect;
    }

    public void setActivationEffect( String activationEffect ) {
        this.activationEffect = activationEffect;
    }
}

