/*L
 *  Copyright Leidos
 *  Copyright Leidos Biomedical
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/cananolab/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.service.protocol;

import gov.nih.nci.cananolab.domain.common.Protocol;
import gov.nih.nci.cananolab.dto.common.ProtocolBean;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.exception.ProtocolException;
import gov.nih.nci.cananolab.security.AccessControlInfo;
import gov.nih.nci.cananolab.security.CananoUserDetails;
import gov.nih.nci.cananolab.service.BaseService;
import gov.nih.nci.cananolab.service.protocol.helper.ProtocolServiceHelper;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

/**
 * This interface defines methods involved in creating and searching protocols
 *
 * @author pansu
 *
 */
public interface ProtocolService extends BaseService {

	ProtocolBean findProtocolById(String protocolId)
			throws ProtocolException, NoAccessException;



	/**
	 * Persist a new protocol or update an existing protocol
	 *
	 * @throws Exception
	 */
    void saveProtocol(ProtocolBean protocolBean)
			throws ProtocolException, NoAccessException;

	List<ProtocolBean> findProtocolsBy(String protocolType,
                                       String protocolName, String protocolAbbreviation, String fileTite)
			throws ProtocolException;

	ProtocolBean findProtocolBy(String protocolType,
                                String protocolName, String protocolVersion)
			throws ProtocolException, NoAccessException;

	int getNumberOfPublicProtocols() throws ProtocolException;
	
	int getNumberOfPublicProtocolsForJob() throws ProtocolException;

	void deleteProtocol(Protocol protocol) throws ProtocolException,
			NoAccessException;

	void assignAccessibility(AccessControlInfo access, Protocol protocol)
			throws ProtocolException, NoAccessException;

	void removeAccessibility(AccessControlInfo access, Protocol protocol)
			throws ProtocolException, NoAccessException;

	List<String> findProtocolIdsByOwner(String currentOwner) throws ProtocolException;

	List<ProtocolBean> findProtocolsByType(String protocolType) throws ProtocolException;
	
	List<String> findProtocolIdsSharedWithUser(CananoUserDetails userDetails) throws ProtocolException;

	ProtocolBean findWorkspaceProtocolById(String protocolId)
			throws ProtocolException, NoAccessException;
	
	ProtocolServiceHelper getHelper();
	
	List<ProtocolBean> getProtocolsByChar(HttpServletRequest request,
                                          String characterizationType) throws Exception;

	List<ProtocolBean> getSynthesisProtocols(HttpServletRequest request) throws Exception;

	List<ProtocolBean> getPurificationProtocols(HttpServletRequest request) throws Exception;
}
