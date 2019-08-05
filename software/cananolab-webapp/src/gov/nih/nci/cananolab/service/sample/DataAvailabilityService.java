/*L
 *  Copyright Leidos
 *  Copyright Leidos Biomedical
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/cananolab/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.service.sample;

import gov.nih.nci.cananolab.dto.particle.DataAvailabilityBean;
import gov.nih.nci.cananolab.dto.particle.SampleBean;
import gov.nih.nci.cananolab.exception.DataAvailabilityException;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.exception.SampleException;
import gov.nih.nci.cananolab.exception.SecurityException;
import gov.nih.nci.cananolab.service.security.SecurityService;

import java.util.List;
import java.util.Set;

public interface DataAvailabilityService {

	/**
	 * find data availability for a sample
	 *
	 * @param sampleId
	 * @return
	 * @throws DataAvailabilityException
	 * @throws NoAccessException
	 * @throws SecurityException
	 */
    Set<DataAvailabilityBean> findDataAvailabilityBySampleId(String sampleId) throws DataAvailabilityException, NoAccessException, SecurityException;

	/**
	 * save data availability for the sample and persist to database table
	 *
	 * @param sampleBean
	 * @return
	 * @throws DataAvailabilityException
	 */

    Set<DataAvailabilityBean> saveDataAvailability(SampleBean sampleBean)
			throws DataAvailabilityException, NoAccessException, SecurityException;

	/**
	 * save data availability for the sample and persist to database table
	 *
	 * @param sampleId
	 * @return
	 * @throws DataAvailabilityException
	 * @throws SampleException
	 */
    Set<DataAvailabilityBean> saveDataAvailability(String sampleId) throws DataAvailabilityException,
			NoAccessException, SecurityException, SampleException;

	/*
	 * public List<DataAvailabilityBean> generateDataAvailability(SampleBean
	 * sampleBean, UserBean user) throws DataAvailabilityException;
	 */
	/**
	 * generate data availability for the sample and persist to database table
	 *
	 * @param sampleBean
	 * @param securityService
	 * @return
	 * @throws DataAvailabilityException
	 * @throws NoAccessException
	 * @throws SecurityException
	 */
	/*
	 * public Set<DataAvailabilityBean> generateDataAvailability( SampleBean
	 * sampleBean, SecurityService securityService) throws
	 * DataAvailabilityException, NoAccessException, SecurityException;
	 */

	/**
	 * find update to data availability for the sample and persist to database
	 * table
	 *
	 * @param sampleBean
	 * @param securityService
	 * @return
	 * @throws DataAvailabilityException
	 * @throws NoAccessException
	 * @throws SecurityException
	 */
	/*
	 * public Set<DataAvailabilityBean> saveDataAvailability( SampleBean
	 * sampleBean, SecurityService securityService) throws
	 * DataAvailabilityException, NoAccessException, SecurityException;
	 */

	/**
	 * delete data availability for the sample from database table
	 *
	 * @param sampleId
	 * @throws DataAvailabilityException
	 * @throws NoAccessException
	 * @throws SecurityException
	 */
    void deleteDataAvailability(String sampleId) throws DataAvailabilityException, NoAccessException, SecurityException;

	/**
	 *
	 * @param sampleIds
	 * @return number of samples that failed
	 * @throws Exception
	 */
    int saveBatchDataAvailability(List<String> sampleIds) throws Exception;

	void deleteBatchDataAvailability() throws Exception;

	/**
	 *
	 * @param sampleIds
	 * @return number of samples that failed
	 * @throws Exception
	 */
    int deleteBatchDataAvailability(List<String> sampleIds) throws Exception;

	List<String> findSampleIdsWithDataAvailability() throws Exception;
}
