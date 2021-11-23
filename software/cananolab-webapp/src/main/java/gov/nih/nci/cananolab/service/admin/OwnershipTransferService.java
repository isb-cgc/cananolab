/*L
 *  Copyright Leidos
 *  Copyright Leidos Biomedical
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/cananolab/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.service.admin;

import gov.nih.nci.cananolab.exception.AdministrationException;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.service.BaseService;

import java.util.List;

/**
 * Interface for transfer of ownership.
 */
public interface OwnershipTransferService {
	String DATA_TYPE_SAMPLE = "sample";
	String DATA_TYPE_PROTOCOL = "protocol";
	String DATA_TYPE_PUBLICATION = "publication";
	String DATA_TYPE_GROUP = "collaboration group";

	int transferOwner(BaseService baseService, List<String> dataIds,
                      String currentOwner, String newOwner)
			throws AdministrationException, NoAccessException;

	int transferOwner(List<String> dataIds, String dataType, String currentOwner,
                      String newOwner) throws AdministrationException, NoAccessException;

}
