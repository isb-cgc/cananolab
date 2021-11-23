/*L
 *  Copyright Leidos
 *  Copyright Leidos Biomedical
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/cananolab/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.service.sample;

import gov.nih.nci.cananolab.domain.particle.Sample;
import gov.nih.nci.cananolab.dto.common.PointOfContactBean;
import gov.nih.nci.cananolab.dto.particle.AdvancedSampleBean;
import gov.nih.nci.cananolab.dto.particle.AdvancedSampleSearchBean;
import gov.nih.nci.cananolab.dto.particle.SampleBasicBean;
import gov.nih.nci.cananolab.dto.particle.SampleBean;
import gov.nih.nci.cananolab.exception.DuplicateEntriesException;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.exception.NotExistException;
import gov.nih.nci.cananolab.exception.PointOfContactException;
import gov.nih.nci.cananolab.exception.SampleException;
import gov.nih.nci.cananolab.security.AccessControlInfo;
import gov.nih.nci.cananolab.security.CananoUserDetails;
import gov.nih.nci.cananolab.service.BaseService;
import java.util.List;
import java.util.Map;
import java.util.SortedSet;

/**
 * Interface defining service methods involving samples
 *
 * @author pansu
 *
 */
public interface SampleService extends BaseService {
	/**
	 * Persist a new sample or update an existing sample
	 *
	 * @throws SampleException
	 *             , DuplicateEntriesException
	 */
    void saveSample(SampleBean sampleBean) throws SampleException,
			DuplicateEntriesException, NoAccessException;

	List<String> findSampleIdsBy(String sampleName,
                                 String samplePointOfContact, String[] nanomaterialEntityClassNames,
                                 String[] otherNanomaterialEntityTypes,
                                 String[] functionalizingEntityClassNames,
                                 String[] otherFunctionalizingEntityTypes,
                                 String[] functionClassNames, String[] otherFunctionTypes,
                                 String[] characterizationClassNames,
                                 String[] otherCharacterizationTypes, String[] wordList)
			throws SampleException;

	SampleBean findSampleById(String sampleId, Boolean loadAccessInfo)
			throws SampleException, NoAccessException;

	SampleBean findSampleByName(String sampleName)
			throws SampleException, NoAccessException;

	int getNumberOfPublicSamplesForJob() throws SampleException;

	PointOfContactBean findPointOfContactById(String pocId) throws PointOfContactException;

	List<PointOfContactBean> findPointOfContactsBySampleId(String sampleId) throws PointOfContactException;

	SortedSet<String> getAllOrganizationNames() throws PointOfContactException;

	void savePointOfContact(PointOfContactBean pointOfContactBean)
			throws PointOfContactException, NoAccessException;

	List<String> findSampleIdsByAdvancedSearch(
            AdvancedSampleSearchBean searchBean) throws SampleException;

	AdvancedSampleBean findAdvancedSampleByAdvancedSearch(
            String sampleName, AdvancedSampleSearchBean searchBean)
			throws SampleException;

	SampleBean cloneSample(String originalSampleName,
                           String newSampleName) throws SampleException, NoAccessException,
			DuplicateEntriesException, NotExistException;

	void deleteSample(String sampleName) throws SampleException,
			NoAccessException, NotExistException;

	int getNumberOfPublicSampleSources() throws SampleException;
	
	int getNumberOfPublicSampleSourcesForJob() throws SampleException;

	List<String> findOtherSampleNamesFromSamePrimaryOrganization(
            String sampleId) throws SampleException;
	
	void assignAccessibility(AccessControlInfo accessInfo, Sample sample) throws SampleException, NoAccessException;

	void removeAccessibility(AccessControlInfo access, Sample sample)
			throws SampleException, NoAccessException;

	//may not be used
	/*public List<String> removeAccesses(Sample sample, Boolean removeLater)
			throws SampleException, NoAccessException;*/

	List<String> findSampleIdsByOwner(String currentOwner) throws SampleException;
	
	List<String> findSampleIdsSharedWithUser(CananoUserDetails userDetails) throws SampleException;

	SampleBasicBean findSampleBasicById(String sampleId, Boolean loadAccessInfo)
			throws SampleException, NoAccessException;
	
	Map<String, String> findSampleIdNamesByAdvancedSearch(AdvancedSampleSearchBean searchBean)
			throws SampleException;
	
	SampleBasicBean findSWorkspaceSampleById(String sampleId, boolean loadAccessInfo)
			throws SampleException, NoAccessException;
	
	List<Sample> findSamplesBy(String sampleName,
                               String samplePointOfContact, String[] nanomaterialEntityClassNames,
                               String[] otherNanomaterialEntityTypes,
                               String[] functionalizingEntityClassNames,
                               String[] otherFunctionalizingEntityTypes,
                               String[] functionClassNames, String[] otherFunctionTypes,
                               String[] characterizationClassNames,
                               String[] otherCharacterizationTypes, String[] wordList)
			throws SampleException;
	
	void updatePOCAssociatedWithCharacterizations(String sampleName, Long oldPOCId, Long newPOCId) throws SampleException;
	
	List<String> findSampleNamesBy(String nameStr) throws Exception;
	
	void setUpdateDeleteFlags(SampleBean sample);
	
}
