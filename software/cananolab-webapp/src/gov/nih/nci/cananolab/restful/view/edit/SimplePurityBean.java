package gov.nih.nci.cananolab.restful.view.edit;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.common.PurityColumnHeader;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurity;
import gov.nih.nci.cananolab.dto.common.ColumnHeader;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.common.FindingBean;
import gov.nih.nci.cananolab.dto.common.PurityRow;
import gov.nih.nci.cananolab.dto.common.Row;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurityBean;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

public class SimplePurityBean {

    List<SimplePurityRowBean> rows = new ArrayList<SimplePurityRowBean>();
    List<SimpleFileBean> files = new ArrayList<SimpleFileBean>();
    File theFile; //file being edited
    Long id;

    int numberOfColumns = 0;
    int numberOfRows = 0;
//    private List<ColumnHeader> columnHeaders = new ArrayList<ColumnHeader>();
    private List<PurityColumnHeader> columnHeaders = new ArrayList<PurityColumnHeader>();
    boolean dirty = false;

//    String createdBy;
//    Date createdDate;

//    public String getCreatedBy() {
//        return this.createdBy;
//    }
//
//    public void setCreatedBy(String createdBy){
//        this.createdBy = createdBy;
//    }
//
//    public Date getCreatedDate() {
//        return this.createdDate;
//    }
//
//    public void setCreatedDate(Date date){
//        this.createdDate = date;
//    }

    public List<SimplePurityRowBean> getRows() {
        return rows;
    }

    public void setRows(List<SimplePurityRowBean> rows) {
        this.rows = rows;
        if(rows!=null) {
            this.numberOfRows = rows.size();
        }
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id){
        this.id = id;
    }


    public void setColumnHeaders(List<PurityColumnHeader> columnHeaders) {
        this.columnHeaders = columnHeaders;
        if(columnHeaders!=null){
            numberOfColumns=columnHeaders.size();
        }
    }

    public List<PurityColumnHeader> getColumnHeaders() {
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

    public File getTheFile(){
        return this.theFile;
    }

    public void setTheFile(File fileBeingEdited) {
        this.theFile = fileBeingEdited;
    }

    public void transferFromPurityBean(SynthesisPurityBean purityBean, String sampleId){
//        this.setCreatedDate(purityBean.getDomain().getCreatedDate());
//        this.setCreatedBy(purityBean.getDomain().getCreatedBy());
        this.setId(purityBean.getDomain().getId());
        this.transferRowsFromPurityBean(purityBean);
        this.transferFilesFromPurityBean(purityBean, sampleId);
        this.setColumnHeaders(purityBean.getPurityColumnHeaders());
    }

    public void transferFilesFromPurityBean(SynthesisPurityBean purityBean,String sampleId){
        List<FileBean> fileBeans = purityBean.getFiles();
        if(fileBeans!=null){
            for(FileBean fileBean:fileBeans){
                SimpleFileBean simpleFileBean= new SimpleFileBean(fileBean,sampleId.toString());
                this.addFile(simpleFileBean);
            }
        }
    }

    public void transferFromPurityBean(HttpServletRequest request, SynthesisPurityBean purityBean) {
        this.setId(purityBean.getDomain().getId());
        this.transferRowsFromPurityBean(purityBean);
        transferFilesFromPurityBean(request, purityBean.getFiles());
    }

    private void transferFilesFromPurityBean(HttpServletRequest request, List<FileBean> files) {

            this.files.clear();

            if (files == null) return;

            for (FileBean file : files) {
                SimpleFileBean simpleFile = new SimpleFileBean();
                simpleFile.transferSimpleFileBean(file, request);
                this.files.add(simpleFile);
            }

    }

    public void transferRowsFromPurityBean(SynthesisPurityBean purityBean) {
        if (purityBean == null) return;

//        this.columnHeaders= purityBean.getColumnHeaders();

        List<PurityRow> beanRows = purityBean.getRows();
        numberOfRows = beanRows.size();
        this.rows.clear();

        if (beanRows != null) {
            for (PurityRow beanRow : beanRows) {
                SimplePurityRowBean aRow = new SimplePurityRowBean();
                aRow.transferFromRow(beanRow);

                this.rows.add(aRow);
            }
        }
    }

    protected void transferRowsToPurityBean(SynthesisPurityBean purityBean) {
        if (this.rows == null) return;
        if (purityBean == null) return;

        purityBean.getRows().clear();
        for (SimplePurityRowBean simpleRow : this.rows) {
            PurityRow rowBean = new PurityRow();
            simpleRow.transferToRow(rowBean);
            purityBean.getRows().add(rowBean);
        }
    }
    public void setDefaultValuesForNullHeaders() {
        int headerIdx = 1;
//        for (ColumnHeader header : this.columnHeaders) {
//            if (header.getColumnName() == null || header.getColumnName().length() == 0) {
//                header.setColumnName("Column "  + headerIdx);
//                header.setColumnOrder(headerIdx);
//            }
//
//            headerIdx++;
//        }

        for (PurityColumnHeader header : this.columnHeaders) {
            if (header.getName() == null || header.getName().length() == 0) {
                header.setName("Column "  + headerIdx);
                header.setColumnOrder(headerIdx);
            }

            headerIdx++;
        }
    }

    public void transferTableNumbersToPurityBean(SynthesisPurityBean purityBean) {
        if (purityBean == null) return;

        purityBean.setNumberOfColumns(this.numberOfColumns);
        purityBean.setNumberOfRows(this.numberOfRows);
    }

    public boolean isDirty() {
        return dirty;
    }

    public void setDirty(boolean dirty) {
        this.dirty = dirty;
    }


    public int getNumberOfColumns() {
        return numberOfColumns;
    }

    public void setNumberOfColumns(int numberOfColumns) {
        this.numberOfColumns = numberOfColumns;
    }


    public int getNumberOfRows() {
        return numberOfRows;
    }

    public void setNumberOfRows(int numberOfRows) {
        this.numberOfRows = numberOfRows;
    }

}
