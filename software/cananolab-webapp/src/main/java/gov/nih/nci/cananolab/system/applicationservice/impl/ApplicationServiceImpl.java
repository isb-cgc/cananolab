package gov.nih.nci.cananolab.system.applicationservice.impl;

//import gov.nih.nci.cagrid.sdkquery4.processor.ParameterizedHqlQuery;


import gov.nih.nci.cananolab.system.applicationservice.TransactionInsertion;
import gov.nih.nci.cananolab.system.dao.DAO;

import gov.nih.nci.cananolab.system.dao.Request;
import gov.nih.nci.cananolab.system.dao.Response;
import gov.nih.nci.cananolab.system.query.hibernate.HQLCriteria;
import gov.nih.nci.cananolab.system.query.nestedcriteria.NestedCriteriaPath;
import gov.nih.nci.cananolab.system.util.ClassCache;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.StringTokenizer;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.QueryException;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.internal.CriteriaImpl;
import gov.nih.nci.cananolab.system.applicationservice.ApplicationException;
import gov.nih.nci.cananolab.system.applicationservice.ApplicationService;
import gov.nih.nci.cananolab.system.applicationservice.client.proxy.ListProxy;
import gov.nih.nci.cananolab.system.dao.orm.ORMDAOImpl;

/**
 * Implementation for the methods in the service layer
 * 
 * @author Satish Patel
 * @version 1.0
 */

//
// WJRL 4/28/23: IMPORTANT! Configuration in the application-config.xml file makes this class transactional!
// All methods called here are wrapped in a transaction.
//

public class ApplicationServiceImpl implements ApplicationService {

	private ClassCache classCache;	

	private Integer maxRecordCount = 1000;
	
	private static Logger log = LogManager.getLogger(ApplicationServiceImpl.class.getName());

	/**
	 * Default constructor. Cache is required and is expected to have a collection of DAO
	 * System properties is also a required parameter used to determine system specific parameters
	 * 
	 */
	public ApplicationServiceImpl(ClassCache classCache)
	{
		this.classCache = classCache;
		List<DAO> daoList = classCache.getDaoList();
		if(daoList!=null && daoList.size()>0)
		{
			DAO dao = daoList.get(0);
			if(dao instanceof ORMDAOImpl)
				maxRecordCount = ((ORMDAOImpl)dao).getResultCountPerQuery();
		}
	}
	
	/**
	 * @see ApplicationService#query(DetachedCriteria, String)
	 */
	public <E> List<E> query(DetachedCriteria detachedCriteria, String targetClassName) throws ApplicationException {
		return query(detachedCriteria);
	}

	/**
	 * @see ApplicationService#query(DetachedCriteria)
	 */
	public <E> List<E> query(DetachedCriteria detachedCriteria) throws ApplicationException {
		CriteriaImpl crit = (CriteriaImpl)detachedCriteria.getExecutableCriteria(null);
		String targetClassName = crit.getEntityOrClassName();

		//System.out.println("query targetClassName: " + targetClassName);

		return privateQuery(detachedCriteria, targetClassName);
	}

	public <E> E queryAndProcess(DetachedCriteria detachedCriteria, TransactionInsertion<E> post) throws ApplicationException {

		CriteriaImpl crit = (CriteriaImpl)detachedCriteria.getExecutableCriteria(null);
		String targetClassName = crit.getEntityOrClassName();
		List<E> resultList = privateQuery(detachedCriteria, targetClassName);

		if (resultList.size() != 0) {
			E retval = resultList.get(0);
			boolean success = post.executeInsideTransaction(retval);
			if (!success) {
				throw new ApplicationException();
			}
			return (retval);
		}
		return (null);
	}

	public <E> List<E> queryAndProcessList(DetachedCriteria detachedCriteria, TransactionInsertion<E> post) throws ApplicationException {

		CriteriaImpl crit = (CriteriaImpl)detachedCriteria.getExecutableCriteria(null);
		String targetClassName = crit.getEntityOrClassName();
		List<E> resultList = privateQuery(detachedCriteria, targetClassName);

		for (int i = 0; i < resultList.size(); i++) {
			E curr = resultList.get(i);
			boolean success = post.executeInsideTransaction(curr);
			if (!success) {
				throw new ApplicationException();
			}
		}
		return (resultList);
	}

	/**
	 * @see ApplicationService#query(HQLCriteria, String)
	 */
	public <E> List<E> query(HQLCriteria hqlCriteria, String targetClassName) throws ApplicationException {
		return query(hqlCriteria);
	}

	/**
	 * @see ApplicationService#query(HQLCriteria)
	 */
	public <E> List<E> query(HQLCriteria hqlCriteria) throws ApplicationException {
		String hql = hqlCriteria.getHqlString();

		String upperHQL = hql.toUpperCase();
		int index = upperHQL.indexOf(" FROM ");

		hql = hql.substring(index + " FROM ".length()).trim()+" ";
		String targetClassName = hql.substring(0,hql.indexOf(' ')).trim();
		return privateQuery(hqlCriteria, targetClassName);
	}

//	/**
//	 * @see gov.nih.nci.gov.nih.nci.cananolab.system.applicationservice.ApplicationService#query(gov.nih.nci.gov.nih.nci.cananolab.system.query.cql.CQLQuery, java.lang.String)
//	 */
//	public <E> List<E> query(CQLQuery cqlQuery, String targetClassName) throws ApplicationException {
//		return query(cqlQuery);
//	}

//	/**
//	 * @see gov.nih.nci.gov.nih.nci.cananolab.system.applicationservice.ApplicationService#query(gov.nih.nci.gov.nih.nci.cananolab.system.query.cql.CQLQuery)
//	 */
//	public <E> List<E> query(CQLQuery cqlQuery) throws ApplicationException {
//		return privateQuery(cqlQuery, cqlQuery.getTarget().getName());
//	}


	/**
	 * @see ApplicationService#search(Class, Object)
	 */
	public <E> List<E> search(Class targetClass, Object obj) throws ApplicationException {
		return search(targetClass.getName(), obj);
	}

	/**
	 * @see ApplicationService#search(Class, List)
	 */
	public <E> List<E> search(Class targetClass, List objList) throws ApplicationException {
		return search(targetClass.getName(), objList);
	}

	/**
	 * @see ApplicationService#search(String, Object)
	 */
	public <E> List<E> search(String path, Object obj) throws ApplicationException {
		List list = new ArrayList();
		list.add(obj);
		return search(path, list);
	}

	/**
	 * @see ApplicationService#query(Object, Integer, String)
	 */
	public <E> List<E> query(Object criteria, Integer firstRow, String targetClassName) throws ApplicationException {
		Request request = new Request(criteria);

		request.setIsCount(Boolean.valueOf(false));
		request.setFirstRow(firstRow);
		request.setDomainObjectName(targetClassName);

		Response response = query(request);

        return (List) response.getResponse();
	}

	/**
	 * @see ApplicationService#search(String, List)
	 */
	public <E> List<E> search(String path, List objList) throws ApplicationException {

		try{
			String targetClassName = "";
			StringTokenizer tokens = new StringTokenizer(path, ",");
			targetClassName = tokens.nextToken().trim();

			NestedCriteriaPath crit = new NestedCriteriaPath(path,objList);

            return privateQuery((Object)crit, targetClassName);
		}
		catch(Exception e)
		{
			String msg = "Error while executing nested search criteria query";
			log.error(msg,e);
			throw new ApplicationException(msg,e);
		}
	}

	/**
	 * @see ApplicationService#getQueryRowCount(Object, String)
	 */
	public Integer getQueryRowCount(Object criteria, String targetClassName) throws ApplicationException {
		Integer count = null;
		Response response = new Response();
		Request request = new Request(criteria);
		request.setIsCount(Boolean.TRUE);
		request.setDomainObjectName(targetClassName);

		response = query(request);
		count = response.getRowCount();

		if (count != null)
			return count;
		else
			return 0;
	}

	/**
	 * @see ApplicationService#getAssociation(Object, String)
	 */
	public <E> List<E> getAssociation(Object source, String associationName) throws ApplicationException {
		String assocType = "";
		try{
			assocType = classCache.getAssociationType(source.getClass(),associationName);
		}catch(Exception e)
		{
			throw new ApplicationException(e);
		}
		String hql = "";
		try {
			if(classCache.isCollection(source.getClass().getName(), associationName))
				//hql = "select dest from "+assocType+" as dest,"+source.getClass().getName()+" as src where dest in elements(src."+associationName+") and src=?";
				hql = "select dest from "+source.getClass().getName()+" as src inner join src."+associationName+" dest where src=?";
			else
				hql = "select dest from "+assocType+" as dest,"+source.getClass().getName()+" as src where src."+associationName+".id=dest.id and src=?";
		}
		catch (QueryException e) {
			e.printStackTrace();
		}

		List params = new ArrayList();
		params.add(source);
		HQLCriteria criteria = new HQLCriteria(hql,params);
		return query(criteria);
	}
	
	public Integer getMaxRecordsCount(){
		return maxRecordCount;
	}
	
	/**
	 * Prepares the gov.nih.nci.gov.nih.nci.cananolab.system.dao.Request object and uses {@link #query(Request)} to retrieve results
	 * from the data source. The results are converted in the list which is only partially loaded upto the maximum number 
	 * of record that the gov.nih.nci.cananolab.system can support at a time.
	 * 
	 * @param criteria
	 * @param targetClassName
	 * @return
	 * @throws ApplicationException
	 */
	protected <E> List<E> privateQuery(Object criteria, String targetClassName) throws ApplicationException {
		
		Request request = new Request(criteria);
		request.setIsCount(Boolean.FALSE);
		request.setFirstRow(0);
		request.setDomainObjectName(targetClassName);

		Response response = query(request);
		List results = (List) response.getResponse();
		//System.out.println("privateQuery results: " + results);

		List resultList = convertToListProxy(results,criteria,targetClassName);
		log.debug("response.getRowCount(): " + response.getRowCount());

		return resultList;

	}	

	protected <E> List<E> convertToListProxy(Collection originalList, Object query, String classname)
	{
		ListProxy resultList = new ListProxy();
		resultList.setAppService(this);

		//System.out.println("convertToListProxy originalList: " + originalList);

		// Set the value for ListProxy
		if (originalList != null) {
			resultList.addAll(originalList);
		}

		resultList.setOriginalStart(0);
		resultList.setMaxRecordsPerQuery(getMaxRecordsCount());
		resultList.setOriginalCriteria(query);
		resultList.setTargetClassName(classname);
		resultList.calculateRealSize();

		//System.out.println("convertToListProxy resultList.getListChunk(): " + resultList.getListChunk());
		//System.out.println("convertToListProxy resultList: " + resultList);

		return resultList;
	}
	
	/**
	 * Sends the request to the DAO. The DAO is determined by the object that the query specifies to be queried. 
	 * DAO returns the result which is in the form of a gov.nih.nci.gov.nih.nci.cananolab.system.dao.Response object.
	 * 
	 * @param request
	 * @return
	 * @throws ApplicationException
	 */
	protected Response query(Request request) throws ApplicationException
	{
		DAO dao = getDAO(request.getDomainObjectName());
		request.setClassCache(classCache);
		try
		{
			return dao.query(request);
			
		}  catch(Exception exception) {
			log.error("Error while querying DAO ", exception);
			throw new ApplicationException("Error while querying DAO: ", exception);
		}
	}
	
	protected DAO getDAO(String classname) throws ApplicationException
	{
		if (classname == null || classname.equals(""))
			throw new ApplicationException("No Domain Object name specified in the request; unable to locate corresponding DAO");
		
		DAO dao = classCache.getDAOForClass(classname);
		
		if(dao == null)
			throw new ApplicationException("Could not obtain DAO for: "+classname);
		
		return dao;
	}

	protected ClassCache getClassCache() {
		return classCache;
	}

//	public <E> List<E> query(gov.nih.nci.cagrid.cqlquery.CQLQuery cqlQuery) throws ApplicationException
//	{
//		try
//		{
//			CQL2ParameterizedHQL converter = new CQL2ParameterizedHQL(classCache,new RoleNameResolver(classCache),false);
//			ParameterizedHqlQuery query = converter.convertToHql(cqlQuery);
//			HQLCriteria hqlCriteria = new HQLCriteria(query.getHql(), query.getParameters());
//			return query(hqlCriteria);
//		}
//		catch (Exception e)
//		{
//			log.error(e.getMessage());
//			throw new ApplicationException(e.getMessage());
//		}
//	}
}