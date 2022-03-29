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
        String bucketPath = AppPropertyUtil.getAppProperty("GCP_STORAGE_BUCKET_PATH");
        System.out.println("GCPStorageUtil get bucket path: " + bucketPath);
        if (bucketPath == "" || bucketPath == null) {
            // Temporary to check if dev tier work
            bucketPath = "isb-cgc-ca-nano-test-cbiit-assets";
//            printAllSystemVars();
        }
        return bucketPath;
    }

    private static void printAllSystemVars() {
        for (Map.Entry<String,String> entry : System.getenv().entrySet()) {
            System.out.println(String.format("GCPStorageUtil SysVar Key: %s, Value: %s", entry.getKey(), entry.getValue()));
        }
    }

    public static String getGCPStorageRootFolderPath() {
        String folderPath = AppPropertyUtil.getAppProperty("GCP_STORAGE_ROOT_FOLDER_PATH");
        System.out.println("GCPStorageUtil get folder path: " + folderPath);
        if (folderPath == "" || folderPath == null) {
            // Temporary to check if dev tier work
            folderPath = "caNanoLab_asset_files";
//            printAllSystemVars();
        }
        return folderPath;
    }
}
