package gov.nih.nci.cananolab.restful.view.edit;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.dto.common.ColumnHeader;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class SimplePurityBean {
    List<ColumnHeader> columnHeaders = new ArrayList<ColumnHeader>();
    List<File> files = new ArrayList<File>();
    File fileBeingEdited;
    Long id;
    String createdBy;
    Date createdDate;

    public String getCreatedBy() {
        return this.createdBy;
    }

    public void setCreatedBy(String createdBy){
        this.createdBy = createdBy;
    }

    public Date getCreatedDate() {
        return this.createdDate;
    }

    public void setCreatedDate(Date data){
        this.createdDate = createdDate;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id){
        this.id = id;
    }


    public void setColumnHeaders(List<ColumnHeader> columnHeaders) {
        this.columnHeaders = columnHeaders;
    }

    public List<ColumnHeader> getColumnHeaders() {
        return this.columnHeaders;
    }

    public void setFiles(List<File> files) {
        this.files = files;
    }

    public List<File> getFiles() {
        return files;
    }

    public List<File> addFile(File file){
        files.add(file);
        return files;
    }

    public List<File> removeFile(File file){
        //TODO make this more robust
        files.remove(file);
        return files;
    }

    public File getFileBeingEdited(){
        return this.fileBeingEdited;
    }

    public void setFileBeingEdited(File fileBeingEdited) {
        this.fileBeingEdited = fileBeingEdited;
    }
}
