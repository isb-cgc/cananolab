/*L
 *  Copyright Leidos
 *  Copyright Leidos Biomedical
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/cananolab/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.service.sample;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.particle.AssociatedElement;
import gov.nih.nci.cananolab.domain.particle.ChemicalAssociation;
import gov.nih.nci.cananolab.domain.particle.ComposingElement;
import gov.nih.nci.cananolab.domain.particle.Function;
import gov.nih.nci.cananolab.domain.particle.FunctionalizingEntity;
import gov.nih.nci.cananolab.domain.particle.NanomaterialEntity;
import gov.nih.nci.cananolab.domain.particle.SampleComposition;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.particle.SampleBean;
import gov.nih.nci.cananolab.dto.particle.composition.ChemicalAssociationBean;
import gov.nih.nci.cananolab.dto.particle.composition.CompositionBean;
import gov.nih.nci.cananolab.dto.particle.composition.FunctionalizingEntityBean;
import gov.nih.nci.cananolab.dto.particle.composition.NanomaterialEntityBean;
import gov.nih.nci.cananolab.exception.ChemicalAssociationViolationException;
import gov.nih.nci.cananolab.exception.CompositionException;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.service.BaseService;
import gov.nih.nci.cananolab.service.sample.helper.CompositionServiceHelper;

/**
 * Service methods involving composition.
 *
 * @author pansu
 *
 */
public interface CompositionService extends BaseService {
	void assignAccesses(ComposingElement composingElement)
			throws CompositionException, NoAccessException;

	void assignAccesses(SampleComposition comp, File file)
			throws CompositionException, NoAccessException;

	void assignAccesses(Function function)
			throws CompositionException, NoAccessException;

	boolean checkChemicalAssociationBeforeDelete(SampleComposition comp, AssociatedElement assocElement);

	/**
	 * Copy and save a functionalizing entity from one sample to other samples
	 *
	 * @param entityBean
	 * @param oldSampleBean
	 * @param newSampleBeans
	 * @throws CompositionException
	 * @throws NoAccessException
	 */
    void copyAndSaveFunctionalizingEntity(
            FunctionalizingEntityBean entityBean, SampleBean oldSampleBean,
            SampleBean[] newSampleBeans) throws CompositionException,
			NoAccessException;

	/**
	 * Copy and save a nanomaterial entity from one sample to other samples
	 *
	 * @param entityBean
	 * @param oldSampleBean
	 * @param newSampleBeans
	 * @throws CompositionException
	 * @throws NoAccessException
	 */
    void copyAndSaveNanomaterialEntity(
            NanomaterialEntityBean entityBean, SampleBean oldSampleBean,
            SampleBean[] newSampleBeans) throws CompositionException,
			NoAccessException;

	void deleteChemicalAssociation(ChemicalAssociation assoc)
			throws CompositionException, ChemicalAssociationViolationException,
			NoAccessException;

	void deleteComposition(SampleComposition comp)
			throws ChemicalAssociationViolationException, CompositionException,
			NoAccessException;

	void deleteCompositionFile(SampleComposition comp, File file)
			throws CompositionException, NoAccessException;

	void deleteFunctionalizingEntity(FunctionalizingEntity entity)
			throws CompositionException, ChemicalAssociationViolationException,
			NoAccessException;

	void deleteNanomaterialEntity(NanomaterialEntity entity)
			throws CompositionException, ChemicalAssociationViolationException,
			NoAccessException;

	ChemicalAssociationBean findChemicalAssociationById(String sampleId, String assocId)
			throws CompositionException, NoAccessException;
	
	CompositionBean findCompositionBySampleId(String sampleId)
			throws CompositionException, NoAccessException;

	FunctionalizingEntityBean findFunctionalizingEntityById(String sampleId,
                                                            String entityId) throws CompositionException, NoAccessException;

	NanomaterialEntityBean findNanomaterialEntityById(String sampleId, String entityId)
			throws CompositionException, NoAccessException;

	CompositionServiceHelper getHelper();

	void removeAccesses(NanomaterialEntity entity, ComposingElement composingElement)
			throws CompositionException, NoAccessException;

	void removeAccesses(NanomaterialEntity nanomaterialEntity)
			throws CompositionException, NoAccessException;

	void removeAccesses(FunctionalizingEntity functionalizingEntity)
			throws CompositionException, NoAccessException;

	void removeAccesses(ChemicalAssociation chemicalAssociation)
			throws CompositionException, NoAccessException;

	void removeAccesses(FunctionalizingEntity entity, Function function)
			throws CompositionException, NoAccessException;

	void removeAccesses(SampleComposition comp, File file)
			throws CompositionException, NoAccessException;

	void saveChemicalAssociation(SampleBean sampleBean,
                                 ChemicalAssociationBean assocBean) throws CompositionException,
			NoAccessException;

	void saveCompositionFile(SampleBean sampleBean, FileBean fileBean)
			throws CompositionException, NoAccessException;

	void saveFunctionalizingEntity(SampleBean sampleBean,
                                   FunctionalizingEntityBean entityBean) throws CompositionException,
			NoAccessException;
	
	void saveNanomaterialEntity(SampleBean sampleBean,
                                NanomaterialEntityBean entityBean) throws CompositionException,
			NoAccessException;

}