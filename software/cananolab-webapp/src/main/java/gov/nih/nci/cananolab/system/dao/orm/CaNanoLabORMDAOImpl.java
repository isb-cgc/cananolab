/*L
 *  Copyright Leidos
 *  Copyright Leidos Biomedical
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/cananolab/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.system.dao.orm;

import gov.nih.nci.cananolab.system.dao.DAOException;
import java.io.Serializable;
import java.util.List;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.JDBCException;
import org.hibernate.SQLQuery;
import org.hibernate.Session;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Property;
import org.hibernate.type.AbstractStandardBasicType;
import org.springframework.orm.hibernate5.HibernateTemplate;

/**
 * Modified the original ORMDAOImpl to contain generic CRUD operations. Removed
 * CSM portion.
 *
 * modified by Sue Pan
 *
 * @author Satish Patel, Dan Dumitru
 */
public class CaNanoLabORMDAOImpl extends WritableORMDAOImpl implements CaNanoLabORMDAO {
	private static Logger log = LogManager.getLogger(CaNanoLabORMDAOImpl.class.getName());


	public Object load(Class domainClass, Serializable id) {
		logger.debug("in caNanoLabORMDAOImpl.load()");
		//System.out.println(domainClass + " " + id + " LO FlushMode = " + getHibernateTemplate().getSessionFactory().getCurrentSession().getFlushMode());
		//System.out.println("LO Status = " + getHibernateTemplate().getSessionFactory().getCurrentSession().getTransaction().getStatus());
		return getHibernateTemplate().load(domainClass, id);
	}

	public Object get(Class domainClass, Serializable id) {
		return getHibernateTemplate().get(domainClass, id);
	}

	public void saveOrUpdate(Object t) {
		//System.out.println(t.getClass() + " SOU FlushMode = " + getHibernateTemplate().getSessionFactory().getCurrentSession().getFlushMode());
		//System.out.println("SOU Status = " + getHibernateTemplate().getSessionFactory().getCurrentSession().getTransaction().getStatus());
		HibernateTemplate hibernateTemplate = getHibernateTemplate();
		hibernateTemplate.saveOrUpdate(t);
	}

	public void delete(Object t) {
		getHibernateTemplate().delete(t);
	}

	public void deleteById(Class domainClass, Serializable id) {
		Object obj = getHibernateTemplate().load(domainClass, id);
		delete(obj);
	}

	public List getAll(Class domainClass) {
		return getHibernateTemplate().loadAll(domainClass);
	}

	public Object getObject(Class domainClass, String uniqueKeyName,
			Object uniqueKeyValue) {

		DetachedCriteria crit = DetachedCriteria.forClass(domainClass).add(
				Property.forName(uniqueKeyName).eq(uniqueKeyValue));

		//System.out.println(uniqueKeyName +  " " + uniqueKeyValue + " GO2 FlushMode = " + getHibernateTemplate().getSessionFactory().getCurrentSession().getFlushMode());
		//System.out.println("GO2 Status = " + getHibernateTemplate().getSessionFactory().getCurrentSession().getTransaction().getStatus());

		List results = getHibernateTemplate().findByCriteria(crit);

		if (results != null && !results.isEmpty()) {
			return results.get(0);
		} else {
			return null;
		}
	}

	public List directSQL(String directSQL, String[] columns,
			Object[] columnTypes) throws DAOException {
		Session session = currentSession();
		try {
			SQLQuery query = session.createSQLQuery(directSQL);
			for (int i = 0; i < columns.length; i++) {
				query.addScalar(columns[i], (AbstractStandardBasicType) columnTypes[i]);
			}
            return query.list();
		} catch (JDBCException ex) {
			log.error("JDBC Exception in CustomORMDAOImpl ", ex);
			throw new DAOException("JDBC Exception in CustomORMDAOImpl ", ex);
		} catch (org.hibernate.HibernateException hbmEx) {
			log.error(hbmEx.getMessage());
			throw new DAOException("Hibernate problem ", hbmEx);
		} catch (Exception e) {
			log.error("Exception ", e);
			throw new DAOException("Exception in CustomORMDAOImpl ", e);
		}
	}
}
