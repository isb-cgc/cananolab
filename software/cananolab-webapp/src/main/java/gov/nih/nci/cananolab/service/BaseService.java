/*L
 *  Copyright Leidos
 *  Copyright Leidos Biomedical
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/cananolab/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.service;

import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.exception.ApplicationProviderException;
import gov.nih.nci.cananolab.system.applicationservice.ApplicationException;

public interface BaseService
{
	FileBean findFileById(String id) throws ApplicationException, ApplicationProviderException;
}
