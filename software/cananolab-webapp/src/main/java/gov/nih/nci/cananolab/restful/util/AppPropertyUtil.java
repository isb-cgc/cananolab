package gov.nih.nci.cananolab.restful.util;

import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;

public class AppPropertyUtil {
    private static Properties appProperties;
    private static boolean isLoaded = false;

    public static String getAppProperty(String key) {
        if (!isLoaded) {
            try {
                InputStream inputStream = AppPropertyUtil.class.getResourceAsStream("/.env");
                System.out.println("AppPropertyUtil.GetAppProperty() - env file path is " + inputStream);
                if (inputStream != null) {
                    appProperties = new Properties();
                    appProperties.load(inputStream);
                }

                isLoaded = true;
                System.out.println("AppPropertyUtil.GetAppProperty() - Loaded properties successfully");

            } catch (Exception e) {
                System.out.println("AppPropertyUtil.GetAppProperty() - Cannot load properties " + e.getMessage());
            }
        }

        return isLoaded ? appProperties.getProperty(key) : "";
    }
}
