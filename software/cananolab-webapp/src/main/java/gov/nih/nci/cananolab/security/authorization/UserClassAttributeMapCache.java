/*L
 *  Copyright Ekagra Software Technologies Ltd.
 *  Copyright SAIC, SAIC-Frederick
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/common-security-module/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.security.authorization;



import gov.nih.nci.cananolab.security.AuthorizationManager;
import gov.nih.nci.cananolab.security.utils.FileLoader;
import gov.nih.nci.cananolab.security.utils.StringUtilities;
import java.net.URL;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import javax.persistence.EntityManager;
import java.util.Arrays;
import java.util.Collection;
import org.hibernate.metamodel.spi.MetamodelImplementor;
import org.hibernate.persister.entity.AbstractEntityPersister;
import org.hibernate.persister.entity.EntityPersister;

import net.sf.ehcache.Cache;
import net.sf.ehcache.CacheException;
import net.sf.ehcache.CacheManager;
import net.sf.ehcache.Element;

import org.hibernate.SessionFactory;
import org.hibernate.Session;
import org.springframework.dao.DataRetrievalFailureException;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;


public class UserClassAttributeMapCache
{
	//private static HashMap cache = new HashMap();
	private static Cache cache=null;
	protected static Logger log = LogManager.getLogger(UserClassAttributeMapCache.class.getName());
	
	private static void initializeCache()
	{
		URL url=null;
		FileLoader fileLoader = FileLoader.getInstance();
		try
		{
			url = fileLoader.getFileAsURL("csm.ehcache.xml");
		}
		catch (Exception e)
		{
			url = null;
		}
		
		CacheManager.create(url);
		cache = CacheManager.getInstance().getCache("gov.nih.nci.security.attributelevel.ClassAttributeMap");
		
	}
	
	
	public static List getAttributeMap(String userName, String className)
	{
		if(cache==null) initializeCache();
		
		List<String> strClassAttributeMapList=null;
		List<ClassAttributeMap> classAttributeMapList =  (List<ClassAttributeMap>)getClassAttributeMapListFromCache(userName);
		if(null!=classAttributeMapList && !classAttributeMapList.isEmpty())
		{
			strClassAttributeMapList = new ArrayList<String>();
			Iterator it = classAttributeMapList.iterator();
			while(it.hasNext())
			{
				ClassAttributeMap classAttributeMap = (ClassAttributeMap)it.next();
				if(null!= classAttributeMap.getAttributes() && !classAttributeMap.getAttributes().isEmpty()){
					if(classAttributeMap.getClassName().equalsIgnoreCase(className) )
						strClassAttributeMapList.addAll(classAttributeMap.getAttributes());
				}
					
			}
		}
		return strClassAttributeMapList;
	}
	

	@SuppressWarnings("unchecked")
	public static List getAttributeMapForGroup(String[] groupNames, String className)
	{	
		List<String> classAttributeMapForGroups =new ArrayList<String>();		
		for(int i=0;i<groupNames.length;i++)
		{
			String groupName = groupNames[i];
			if(!StringUtilities.isBlank(groupName))
			{
				List<ClassAttributeMap> gcamList =  (List<ClassAttributeMap>)getClassAttributeMapListFromCache(groupName);
				if(null!=gcamList && !gcamList.isEmpty())
				{
					Iterator it = gcamList.iterator();
					while(it.hasNext())
					{
						ClassAttributeMap gcam = (ClassAttributeMap)it.next();
						if(null!= gcam.getAttributes() && !gcam.getAttributes().isEmpty()) {
							if(gcam.getClassName().equalsIgnoreCase(className) )
								classAttributeMapForGroups.addAll(gcam.getAttributes());
						}
					}
				}
			}
		}	
		if(classAttributeMapForGroups.isEmpty()) 
			return null;
		
		return classAttributeMapForGroups;	
	}
	

	public static void setAttributeMap(String userName, SessionFactory sessionFactory, AuthorizationManager authorizationManager)
	{
		if(cache==null) initializeCache();
		
		String privilegeName = "READ";
		EntityManager myEntityManager= sessionFactory.createEntityManager();
		Session mySession = myEntityManager.unwrap(Session.class);
		MetamodelImplementor myMetamodelImplementor = (MetamodelImplementor)mySession.getMetamodel();
		Collection<EntityPersister> myEntityPersisterCollection = myMetamodelImplementor.entityPersisters().values();
		List<String> myClassNames = new ArrayList<String>();
		for (EntityPersister ep : myEntityPersisterCollection) {
			AbstractEntityPersister aep = (AbstractEntityPersister)ep;
			System.out.println("setAttributeMap: TableName=="+aep.getTableName());
			System.out.println(Arrays.toString(aep.getIdentifierColumnNames()));
			String name = aep.getClassMetadata().getMappedClass().getName();
			myClassNames.add(name);
	 	}
		 List<ClassAttributeMap> classAttributeMapList = new ArrayList<ClassAttributeMap>();
		 Iterator<String> iterator = myClassNames.iterator();
		 while (iterator.hasNext())
		 {
			 String className = iterator.next();
			 ClassAttributeMap classAttributeMap=null;
			 if(!StringUtilities.isBlank(className))
			 {
				 classAttributeMap = new ClassAttributeMap(className); 
			 }
			 List<String>  attributeList = authorizationManager.getAttributeMap(userName, className, privilegeName);
			 if (null!= attributeList && attributeList.size() != 0)
			 {
				 if(classAttributeMap!=null)
				 {
					 classAttributeMap.setAttributes(attributeList);
				 }
			 }
			 if(classAttributeMap!=null) classAttributeMapList.add(classAttributeMap);
		 }
		 
		 putClassAttributeMapInCache(userName,classAttributeMapList);
		 myEntityManager.close();
	}
	
	public static void setAttributeMapForGroup(String[] groupNames, SessionFactory sessionFactory, AuthorizationManager authorizationManager)
	{		
		if(cache==null) initializeCache();
		String privilegeName = "READ";

		EntityManager myEntityManager= sessionFactory.createEntityManager();
		Session mySession = myEntityManager.unwrap(Session.class);
		MetamodelImplementor myMetamodelImplementor = (MetamodelImplementor)mySession.getMetamodel();
		Collection<EntityPersister> myEntityPersisterCollection = myMetamodelImplementor.entityPersisters().values();
		List<String> myClassNames = new ArrayList<String>();
		for (EntityPersister ep : myEntityPersisterCollection) {
			AbstractEntityPersister aep = (AbstractEntityPersister)ep;
			System.out.println(aep.getTableName());
			System.out.println(Arrays.toString(aep.getIdentifierColumnNames()));
			String name = aep.getClassMetadata().getMappedClass().getName();
			myClassNames.add(name);
	 	}
	 	for(int i=0;i<groupNames.length;i++)
		{
			List<ClassAttributeMap> classAttributeMapList = new ArrayList<ClassAttributeMap>();
			
			String groupName = groupNames[i];
			
			Iterator iterator = myClassNames.iterator();
			while (iterator.hasNext())
			{
				String className = (String)iterator.next();
				ClassAttributeMap classAttributeMap=null;
				if(!StringUtilities.isBlank(className))
				{
					classAttributeMap = new ClassAttributeMap(className); 
				}
				List  attributeList = authorizationManager.getAttributeMapForGroup(groupName, className, privilegeName);
				if (null!= attributeList && attributeList.size() != 0)
				{
					if(classAttributeMap!=null)
					{
						classAttributeMap.setAttributes(attributeList);
					}
				}
				if(classAttributeMap!=null) classAttributeMapList.add(classAttributeMap);
			}
			putClassAttributeMapInCache(groupName,classAttributeMapList);
			
		}
		myEntityManager.close();
	}
	
	public static void removeAttributeMap(String userName)
	{
		cache.remove(userName);
	}
	
	private static List<ClassAttributeMap> getClassAttributeMapListFromCache(String userOrGroupName) 
	{
		Element element = null;

		try {
			element = cache.get(userOrGroupName);
		} catch (CacheException cacheException) {
			throw new DataRetrievalFailureException("Cache failure: "
					+ cacheException.getMessage());
		}

		if (element == null) {
			return null;
		} else {
			return (List<ClassAttributeMap>) element.getValue();
		}
	}
	
	private static void putClassAttributeMapInCache(String userOrGroupName, List<ClassAttributeMap> groupClassAttributeMapList) 
	{
		ArrayList arrayList = new ArrayList(groupClassAttributeMapList);
		Element element = new Element(userOrGroupName, (List)arrayList);
		cache.put(element);
	}
	
}
