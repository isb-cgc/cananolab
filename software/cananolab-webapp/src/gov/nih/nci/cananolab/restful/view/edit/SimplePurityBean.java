package gov.nih.nci.cananolab.restful.view.edit;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.dto.common.ColumnHeader;
import gov.nih.nci.cananolab.dto.common.FindingBean;
import gov.nih.nci.cananolab.dto.common.PurityRow;
import gov.nih.nci.cananolab.dto.common.Row;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurityBean;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class SimplePurityBean {
    List<ColumnHeader> columnHeaders = new ArrayList<ColumnHeader>();
    List<SimplePurityRowBean> purityRows = new ArrayList<SimplePurityRowBean>();
    List<SimpleFileBean> files = new ArrayList<SimpleFileBean>();
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

    public void setCreatedDate(Date date){
        this.createdDate = date;
    }

    public List<SimplePurityRowBean> getPurityRows() {
        return purityRows;
    }

    public void setPurityRows(List<SimplePurityRowBean> purityRows) {
        this.purityRows = purityRows;
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

    public void setFiles(List<SimpleFileBean> files) {
        this.files = files;
    }

    public List<SimpleFileBean> getFiles() {
        return files;
    }

    public List<SimpleFileBean> addFile(SimpleFileBean file){
        files.add(file);
        return files;
    }

    public List<SimpleFileBean> removeFile(SimpleFileBean file){
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

    public void transferRowsFromPurityBean(SynthesisPurityBean purityBean) {
        if (purityBean == null) return;

        this.columnHeaders= purityBean.getColumnHeaders();

        List<PurityRow> beanRows = purityBean.getRows();
        this.purityRows.clear();

        if (beanRows != null) {
            for (PurityRow beanRow : beanRows) {
                SimplePurityRowBean aRow = new SimplePurityRowBean();
                aRow.transferFromRow(beanRow);

                this.purityRows.add(aRow);
            }
        }
    }

    protected void transferRowsToPurityBean(SynthesisPurityBean purityBean) {
        if (this.purityRows == null) return;
        if (purityBean == null) return;

        purityBean.getRows().clear();
        for (SimplePurityRowBean simpleRow : this.purityRows) {
            PurityRow rowBean = new PurityRow();
            simpleRow.transferToRow(rowBean);
            purityBean.getRows().add(rowBean);
        }
    }
}
