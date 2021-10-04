/*L
 *  Copyright Leidos
 *  Copyright Leidos Biomedical
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/cananolab/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.service.community;

import java.util.List;

import gov.nih.nci.cananolab.dto.common.CollaborationGroupBean;
import gov.nih.nci.cananolab.exception.CommunityException;
import gov.nih.nci.cananolab.exception.DuplicateEntriesException;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.security.AccessControlInfo;
import gov.nih.nci.cananolab.service.BaseService;

public interface CommunityService extends BaseService {
	void saveCollaborationGroup(CollaborationGroupBean collaborationGroup)
			throws CommunityException, NoAccessException,
			DuplicateEntriesException;

	List<CollaborationGroupBean> findCollaborationGroups()
			throws CommunityException;

	CollaborationGroupBean findCollaborationGroupById(String id)
			throws CommunityException;

	void deleteCollaborationGroup(
            CollaborationGroupBean collaborationGroup)
			throws CommunityException, NoAccessException;

	void assignOwner(String collaborationGroupId, String ownerLogin)
			throws CommunityException, NoAccessException;

	void assignAccessibility(AccessControlInfo access,
                             String collaborationGroupId) throws CommunityException,
			NoAccessException;

	void removeAccessibility(AccessControlInfo access,
                             String collaborationGroupId) throws CommunityException,
			NoAccessException;
}