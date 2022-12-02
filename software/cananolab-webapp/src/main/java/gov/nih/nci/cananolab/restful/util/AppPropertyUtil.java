package gov.nih.nci.cananolab.restful.util;

import gov.nih.nci.cananolab.util.DateUtils;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;

public class AppPropertyUtil {
    private static Properties appProperties;
    private static boolean isLoaded = false;

    private static Logger logger = LogManager.getLogger(AppPropertyUtil.class);

    public static String getAppProperty(String key) {
        if (!isLoaded) {
            try {
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
