/*L
 *  Copyright Ekagra Software Technologies Ltd.
 *  Copyright SAIC, SAIC-Frederick
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/common-security-module/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.security.utils;

import gov.nih.nci.cananolab.security.ApplicationSessionFactory;
import java.lang.reflect.Field;
import java.util.Properties;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;
import org.apache.commons.configuration.DataConfiguration;
import org.apache.commons.configuration.DatabaseConfiguration;
import org.apache.commons.lang.StringUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.SessionFactory;

import org.hibernate.internal.SessionFactoryImpl;

/**
 * @author narram
 * 
 */
public class ConfigurationHelper {
        private static final String KEY_COLUMN = "PROPERTY_KEY";
        private static final String VALUE_COLUMN = "PROPERTY_VALUE";
        private static final String TABLE_NAME = "CSM_CONFIGURATION_PROPS";                
        private static DataConfiguration dataConfig = null;
        private static ConfigurationHelper configHelper= null;
        private static final String CSM_CONTEXT_NAME = "csmupt";
        private static final Logger log = LogManager.getLogger(ConfigurationHelper.class);
        
		private ConfigurationHelper(String applicationContextName)
        {	

	        DataSource ds = getDataSourceForContext(applicationContextName);         			
	        DatabaseConfiguration config = new DatabaseConfiguration(ds,
	                        TABLE_NAME, KEY_COLUMN, VALUE_COLUMN);
			
//	        ConfigurationListener listener = new LockoutConfigurationListener();
//	        config.addConfigurationListener(listener);
//	        config.addErrorListener((ConfigurationErrorListener) listener);
	        config.setDelimiterParsingDisabled(true);
	        dataConfig = new DataConfiguration(config);
        }
		
        public static ConfigurationHelper getInstance(String applicationContextName) throws  Exception
        {
        	if (null == configHelper) {
        		configHelper = new ConfigurationHelper(applicationContextName);
        	}
	        return configHelper;
        }
		
        public static DataConfiguration getConfiguration() throws  Exception
        {
        	getInstance(CSM_CONTEXT_NAME);
	        return dataConfig;
        }
        
        private DataSource getDataSourceForContext(String applicationContextName) 
        {
			SessionFactory sf = null;
			DataSource ds = null;
			try {
				sf = ApplicationSessionFactory.getSessionFactory(applicationContextName);
			} catch ( Exception e) {
				log.info("Exception occured while creating session factory "+ e.getMessage());
			}
	
			Field f = null;
			try {
				f = SessionFactoryImpl.class.getDeclaredField("properties");
			} catch (SecurityException e) {
				log.info("Exception occured while reading the properties::"+ e.getMessage());
			} catch (NoSuchFieldException e) {
				log.info("Exception occured while reading the properties::"+ e.getMessage());
			}
			f.setAccessible(true);
			try {
				Properties configPropetries = (Properties)f.get(sf);
				ds = getDataSourceFromConfiguration(configPropetries);

			} catch (IllegalArgumentException e) {
				log.info("Exception occured while reading the properties::"+ e.getMessage());
			} catch (IllegalAccessException e) {
				log.info("Exception occured while reading the properties::"+ e.getMessage());
			}
			//DataSource ds= SessionFactoryUtils.getDataSource(sf);
			
//			ConnectionProvider cp = ((SessionFactoryImplementor) sf).getConnectionProvider();
//			
//			
//			if (cp instanceof DatasourceConnectionProvider) {
//				ds = ((DatasourceConnectionProvider) cp).getDataSource();
//			}
//			
			return ds;
        }

        private DataSource getDataSourceFromConfiguration(
				Properties configPropetries) {
			DataSource ds = null;
			if(configPropetries != null)
			{
				String datasource = configPropetries.getProperty("hibernate.connection.datasource");
				if ( !StringUtils.isEmpty(datasource))
				{
					log.info("Datasource::"+ datasource);
			        try {
			        	InitialContext initialContext = new InitialContext();
						ds = (DataSource) initialContext.lookup(datasource);
					} catch (NamingException ex) {										
						log.info("Exception occured while looking up datasource::"+ datasource);						
					}
				}
				else
				{				
					String urlProperty = configPropetries.getProperty("hibernate.connection.url");		 
					String usernameProperty = configPropetries.getProperty("hibernate.connection.username");
					String passwordProperty = configPropetries.getProperty("hibernate.connection.password");
					String driverProperty = configPropetries.getProperty("hibernate.connection.driver_class");
					
					log.info("Connection:user:"+ configPropetries.getProperty("hibernate.connection.username"));
					log.info("Connection:url:"+configPropetries.getProperty("hibernate.connection.url"));					
					
//					DriverManagerDataSource dataSource = new DriverManagerDataSource();
//					dataSource.setDriverClassName(driverProperty);
//					dataSource.setUrl(urlProperty);
//					dataSource.setUsername(usernameProperty);
//					dataSource.setPassword(passwordProperty);
//					ds = dataSource;
				}
			}	
			return ds;
		}
}
