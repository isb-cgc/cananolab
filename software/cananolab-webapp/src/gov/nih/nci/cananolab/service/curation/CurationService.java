/*L
 *  Copyright SAIC
 *  Copyright SAIC-Frederick
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/cananolab/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.service.curation;

import gov.nih.nci.cananolab.dto.common.DataReviewStatusBean;
import gov.nih.nci.cananolab.exception.CurationException;
import gov.nih.nci.cananolab.exception.NoAccessException;

import java.util.List;

public interface CurationService
{
	void submitDataForReview(DataReviewStatusBean dataReviewStatusBean) throws CurationException, NoAccessException;

	List<DataReviewStatusBean> findDataPendingReview() throws CurationException, NoAccessException;

	DataReviewStatusBean findDataReviewStatusBeanByDataId(String dataId) throws CurationException, NoAccessException;
}