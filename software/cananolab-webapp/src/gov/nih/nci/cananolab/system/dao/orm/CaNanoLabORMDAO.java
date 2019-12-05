/*L
 *  Copyright Leidos
 *  Copyright Leidos Biomedical
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/cananolab/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.system.dao.orm;


import gov.nih.nci.cananolab.system.dao.DAOException;
import gov.nih.nci.cananolab.system.dao.WritableDAO;
import java.io.Serializable;
import java.util.List;

/**
 * Customized to contain generic CRUD operations.
 * 
 * @author pansu
 * 
 */
public interface CaNanoLabORMDAO extends WritableDAO {

	void saveOrUpdate(Object object);

	Object load(Class domainClass, Serializable id);

	Object get(Class domainClass, Serializable id);

	void delete(Object object);

	void deleteById(Class domainClass, Serializable id);

	List getAll(Class domainClass);

	Object getObject(Class domainClass, String uniqueKeyName,
                     Object uniqueKeyValue);

	List directSQL(String directSQL, String[] columns,
                   Object[] columnTypes) throws DAOException;
}
