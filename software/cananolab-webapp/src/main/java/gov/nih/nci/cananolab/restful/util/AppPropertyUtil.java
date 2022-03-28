package gov.nih.nci.cananolab.restful.util;

import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;
//import org.jboss.logging.Logger;
import org.apache.logging.log4j.*;

public class AppPropertyUtil {
    private static Properties appProperties;
    private static boolean isLoaded = false;
    private static Logger logger = LogManager.getLogger(AppPropertyUtil.class);

    public static String getAppProperty(String key) {
        if (!isLoaded) {
            try {
                String envFilePath = System.getProperty("app.props.path") + ".env";
                logger.info("AppPropertyUtil.GetAppProperty() - env file path is " + envFilePath);

                InputStream envFile = new FileInputStream(envFilePath);
                appProperties = new Properties();
                appProperties.load(envFile);

                isLoaded = true;
                logger.info("AppPropertyUtil.GetAppProperty() - Loaded properties successfully");

            } catch (Exception e) {
                logger.info("AppPropertyUtil.GetAppProperty() - Cannot load properties" + e.getMessage());
            }
        }

        return isLoaded ? appProperties.getProperty(key) : "";
    }
}
