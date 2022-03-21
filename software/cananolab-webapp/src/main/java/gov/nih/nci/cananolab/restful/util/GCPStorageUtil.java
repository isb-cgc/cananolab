package gov.nih.nci.cananolab.restful.util;

import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;
import gov.nih.nci.cananolab.exception.FileException;

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
        return System.getenv("GCP_STORAGE_BUCKET_PATH");
    }

    public static String getGCPStorageRootFolderPath() {
        return System.getenv("GCP_STORAGE_ROOT_FOLDER_PATH");
    }
}
