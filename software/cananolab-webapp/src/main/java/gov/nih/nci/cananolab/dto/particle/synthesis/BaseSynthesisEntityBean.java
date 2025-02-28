package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.util.StringUtils;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

public class BaseSynthesisEntityBean {

    Logger logger = LogManager.getLogger("BaseSynthesisEntityBean.class");
    protected String description;
    protected String type, displayName;
    protected List<FileBean> files = new ArrayList<FileBean>();
    protected Long domainId;

    public String getDescription() {
        return description;
    }

    public BaseSynthesisEntityBean() {
    }

    // WJRL 2/6/23: Appears to be unused
    /*public String getDescriptionDisplayName() {
        return StringUtils.escapeXmlButPreserveLineBreaks(description);
    }*/

    public Object getPubChemLink() {
        //TODO FIGURE OUT WHERE TO PUT THIS
//        if ((domain.getPubChemId() != null)
//                && !StringUtils.isEmpty(domain.getPubChemDataSourceName())) {
//            pubChemLink = StringUtils.getPubChemURL(domain
//                    .getPubChemDataSourceName(), domain.getPubChemId());
//        }
//        return pubChemLink;
        return null;
    }

    public void setDescription(String description) {
        this.description = description;
    }



    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName){
        this.displayName = displayName;
    }

    public void addFile(FileBean file) {
        // if an old one exists, remove it first
        int index = files.indexOf(file);
        if (index != -1) {
            files.remove(file);
            // retain the original order
            files.add(index, file);
        } else {
            files.add(file);
        }
    }

    public void removeFile(FileBean file) {
        files.remove(file);
    }

    public List<FileBean> getFiles() {
        return files;
    }

    public void setFiles(List<FileBean> files) {
        this.files = files;
    }

//    public FileBean getFile(String fileId){
////        Set<File> files = domainEntity.getFiles();
//        for(FileBean file:files){
//            if (fileId.equals(file.getDomainFile().getId().toString())){
//                return file;
//            }
//        }
//        return null;
//    }

    public FileBean getFile(Long fileId){
        for(FileBean fileBean:files){
            if(fileId.equals(fileBean.getDomainFile().getId())){
                return fileBean;
            }
        }
        return null;
    }

    public Long getDomainId() {
        return domainId;
    }
}
