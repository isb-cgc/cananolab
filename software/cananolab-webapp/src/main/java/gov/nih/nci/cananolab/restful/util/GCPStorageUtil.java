package gov.nih.nci.cananolab.restful.util;

import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;
import gov.nih.nci.cananolab.exception.FileException;

import java.util.Map;

public class GCPStorageUtil {
    private static Storage gcpStorageService = null;

    public static Storage getGCPStorageService() throws Exception {
        if (gcpStorageService != null) {
            return gcpStorageService;
        }

        try {
            gcpStorageService = StorageOptions.getDefaultInstance().getService();
            return gcpStorageService;
        } catch (Exception e) {
            System.out.println("ERROR: Cannot get GCP storage service");
            throw new FileException("Cannot get GCP storage service");
        }
    }

    public static String getGCPStorageBucketPath() {
        String bucketPath = System.getenv("GCP_STORAGE_BUCKET_PATH");
        System.out.println("GCPStorageUtil get bucket path: " + bucketPath);
        if (bucketPath == "" || bucketPath == null) {
            printAllSystemVars();
        }
        return bucketPath;
    }

    private static String printAllSystemVars() {
        String allVars = "";
        for (Map.Entry<String,String> entry : System.getenv().entrySet()) {
            allVars += String.format("Key: %s, value: %s\n", entry.getKey(), entry.getValue());
        }
        System.out.println("GCPStorageUtil all vars: " + allVars);
    }

    public static String getGCPStorageRootFolderPath() {
        String folderPath = System.getenv("GCP_STORAGE_ROOT_FOLDER_PATH");
        System.out.println("GCPStorageUtil get folder path: " + folderPath);
        if (folderPath == "" || folderPath == null) {
            printAllSystemVars();
        }
        return folderPath;
    }
}
