/*L
 *  Copyright SAIC
 *  Copyright SAIC-Frederick
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/cananolab/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.system.applicationservice;


import java.io.Serializable;
import java.util.List;

/**
 * Customized to contain more CRUD operations.
 *
 * @author pansu
 *
 */
public interface CaNanoLabApplicationService extends WritableApplicationService {

	void saveOrUpdate(Object object) throws ApplicationException;

	Object load(Class domainClass, Serializable id)
			throws ApplicationException;

	Object get(Class domainClass, Serializable id)
			throws ApplicationException;

	void delete(Object object) throws ApplicationException;

	void deleteById(Class domainClass, Serializable id)
			throws ApplicationException;

	List getAll(Class domainClass) throws ApplicationException;

	Object getObject(Class domainClass, String uniqueKeyName,
                     Object uniqueKeyValue) throws ApplicationException;

	List directSQL(String directSQL, String[] columns,
                   Object[] columnTypes) throws ApplicationException;

	List<String> getAllPublicData() throws ApplicationException;
}
