package gov.nih.nci.cananolab.restful.util;


import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;


import java.io.InputStream;

import java.util.Properties;
import java.util.Set;

public class AppPropertyUtil {
    private static Properties appProperties;
    private static boolean isLoaded = false;

    private static Logger logger = LogManager.getLogger(AppPropertyUtil.class);

    public static String getAppProperty(String key) {
        System.out.println("key=="+key+";");
        if (!isLoaded) {
            try {

                final Properties systemProperties = System.getProperties();
                final Set<String> keys = systemProperties.stringPropertyNames();
                System.out.println("System.getProperties().size()=="+keys.size());

                for (final String myKey : keys) {
                    final String value = systemProperties.getProperty(myKey);
                    System.out.println("myKey==" + myKey + "; value==" + value+";");
                }
                    
                InputStream inputStream = AppPropertyUtil.class.getResourceAsStream(System.getProperty("app.props.path","/.env"));
                System.out.println("[STATUS] Application properties file should be at: " + System.getProperty("app.props.path","/.env"));
                if (inputStream != null) {
                    appProperties = new Properties();
                    appProperties.load(inputStream);
                    isLoaded = true;
                    System.out.println("[STATUS] Application properties file loaded properties successfully.");
                } else {
                    throw new Exception("Couldn't load Application properties file!");
                }

            } catch (Exception e) {
                System.out.println("[STATUS] Application properties file cannot load properties: ");
                logger.error(e.getMessage());
                e.printStackTrace();
            }
        }

        return isLoaded ? appProperties.getProperty(key) : "";
    }
}
