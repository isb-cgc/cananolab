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
                String envFilePath = System.getProperty("app.props.path") + ".env";
                System.out.println("AppPropertyUtil.GetAppProperty() - env file path is " + envFilePath);

                InputStream envFile = new FileInputStream(envFilePath);
                appProperties = new Properties();
                appProperties.load(envFile);

                isLoaded = true;
                System.out.println("AppPropertyUtil.GetAppProperty() - Loaded properties successfully");

            } catch (Exception e) {
                System.out.println("AppPropertyUtil.GetAppProperty() - Cannot load properties " + e.getMessage());
            }
        }

        return isLoaded ? appProperties.getProperty(key) : "";
    }
}
