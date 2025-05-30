package gov.nih.nci.cananolab.domain.particle;
// Generated Oct 17, 2017 2:18:23 PM by Hibernate Tools 4.0.1.Final

import java.util.HashSet;
import java.util.Set;
import gov.nih.nci.cananolab.domain.common.File;

/**
 * SampleComposition generated by hbm2java
 */
public class SampleComposition implements java.io.Serializable {

	private Long id;
	private Set<NanomaterialEntity> nanomaterialEntityCollection = new HashSet<NanomaterialEntity>(0);
	private Set<FunctionalizingEntity> functionalizingEntityCollection = new HashSet<FunctionalizingEntity>(0);
	private Set<ChemicalAssociation> chemicalAssociationCollection = new HashSet<ChemicalAssociation>(0);
	private Set<File> fileCollection = new HashSet<File>(0);
	private Sample sample;

	public SampleComposition() {
	}

	public SampleComposition(Set nanomaterialEntityCollection, Set functionalizingEntityCollection,
			Set chemicalAssociationCollection, Set fileCollection, Sample sample) {
		this.nanomaterialEntityCollection = nanomaterialEntityCollection;
		this.functionalizingEntityCollection = functionalizingEntityCollection;
		this.chemicalAssociationCollection = chemicalAssociationCollection;
		this.fileCollection = fileCollection;
		this.sample = sample;
	}

	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Set<NanomaterialEntity> getNanomaterialEntityCollection() {
		return this.nanomaterialEntityCollection;
	}

	public void setNanomaterialEntityCollection(Set<NanomaterialEntity> nanomaterialEntityCollection) {
		this.nanomaterialEntityCollection = nanomaterialEntityCollection;
	}

	public Set<FunctionalizingEntity> getFunctionalizingEntityCollection() {
		return this.functionalizingEntityCollection;
	}

	public void setFunctionalizingEntityCollection(Set<FunctionalizingEntity> functionalizingEntityCollection) {
		this.functionalizingEntityCollection = functionalizingEntityCollection;
	}

	public Set<ChemicalAssociation> getChemicalAssociationCollection() {
		return this.chemicalAssociationCollection;
	}

	public void setChemicalAssociationCollection(Set<ChemicalAssociation> chemicalAssociationCollection) {
		this.chemicalAssociationCollection = chemicalAssociationCollection;
	}

	public Set<File> getFileCollection() {
		return this.fileCollection;
	}

	public void setFileCollection(Set<File> fileCollection) {
		this.fileCollection = fileCollection;
	}

	public Sample getSample() {
		return this.sample;
	}

	public void setSample(Sample sample) {
		this.sample = sample;
	}

}
