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
            throw new FileException("Cannot get GCP storage service");
        }
    }

    public static String getGCPStorageBucketPath() {
        // TODO: replace with env var
        return "isb-cgc-ca-nano-dev-cbiit-assets";
    }

    public static String getGCPStorageRootFolderPath() {
        // TODO: replace with env var
        return "caNanoLab_asset_files";
    }

}
