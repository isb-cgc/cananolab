package gov.nih.nci.cananolab.restful.view.edit;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.common.Instrument;
import gov.nih.nci.cananolab.domain.common.PurificationConfig;

import gov.nih.nci.cananolab.domain.particle.SynthesisPurification;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurity;
import gov.nih.nci.cananolab.dto.common.ColumnHeader;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.common.FindingBean;
import gov.nih.nci.cananolab.dto.common.PurificationConfigBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurificationBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurityBean;
import gov.nih.nci.cananolab.restful.core.InitSetup;
import gov.nih.nci.cananolab.restful.util.CommonUtil;
import gov.nih.nci.cananolab.security.enums.SecureClassesEnum;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import java.security.PrivateKey;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.SortedSet;
import javax.servlet.http.HttpServletRequest;

public class SimpleSynthesisPurificationBean {

    List<String> errors;
    String sampleId = "";
    Long id;
    SimpleProtocol simpleProtocol;
    private String createdBy;
    private Date createdDate;
    private String type;
    private String methodName;
    private String designMethodDescription;
    private String analysis;
    private Float yield;
    private List<SimplePurityBean> simplePurityBeans;
    private List<SimplePurificationConfigBean> purificationConfigBeans;
    private SimplePurityEditBean editBean = new SimplePurityEditBean();
    private List<ColumnHeader> columnHeaders = new ArrayList<ColumnHeader>();
//    private List<SimplePurityRowBean> rows;
    private List<SimpleFileBean> files = new ArrayList<SimpleFileBean>();
    private File theFile; //file being edited
    private int numberOfColumns;
    private int numberOfRows;
    private boolean dirty;

    public boolean getDirty(){
        return dirty;
    }

    public void setDirty(boolean dirt){
        dirty=dirt;
    }

    public List<SimpleFileBean> getFiles() {
        return files;
    }

    public void setFiles(List<SimpleFileBean> files) {
        this.files = files;
    }

    public File getTheFile() {
        return theFile;
    }

    public void setTheFile(File theFile) {
        this.theFile = theFile;
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



//    public List<SimplePurityRowBean> getRows() {
//        return rows;
//    }
//
//    public void setRows(List<SimplePurityRowBean> inRows){
//        rows = inRows;
//    }

    public List<String> getDatumConditionValueTypeLookup() {
        return datumConditionValueTypeLookup;
    }

    public void setDatumConditionValueTypeLookup(List<String> datumConditionValueTypeLookup) {
        this.datumConditionValueTypeLookup = datumConditionValueTypeLookup;
    }

    List<String> datumConditionValueTypeLookup = new ArrayList<String>();
    SimpleTechniqueAndInstrument techniqueInstruments = new SimpleTechniqueAndInstrument();


    public SimplePurityEditBean getEditBean() {
        return editBean;
    }

    public void setEditBean(SimplePurityEditBean editBean) {
        this.editBean = editBean;
    }


    public List<SimplePurificationConfigBean> getPurificationConfigBeans() {
        return purificationConfigBeans;
    }

    public void setPurificationConfigBeans(List<SimplePurificationConfigBean> purificationConfigBeans) {
        this.purificationConfigBeans = purificationConfigBeans;
    }

    public List<ColumnHeader> getColumnHeaders() {
        return columnHeaders;
    }

    public void setColumnHeaders(List<ColumnHeader> columnHeaders) {
        this.columnHeaders = columnHeaders;
    }



    public List<SimplePurificationConfigBean> getSimpleExperimentBeans() {
        return this.purificationConfigBeans;
    }

    public void setSimpleExperimentBeans(List<SimplePurificationConfigBean> purificationConfigBeans) {
        this.purificationConfigBeans = purificationConfigBeans;
    }

    public List<SimplePurityBean> getPurityBeans() {
        return simplePurityBeans;
    }

    public void setPurityBeans(List<SimplePurityBean> purityBeans) {
        this.simplePurityBeans = purityBeans;
    }

    public List<String> getErrors() {
        return errors;
    }

    public void setErrors(List<String> msgs) {
        this.errors = errors;
    }

    public String getSampleId() {
        return sampleId;
    }

    public void setSampleId(String sampleId) {
        this.sampleId = sampleId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public SimpleProtocol getSimpleProtocol() {
        return simpleProtocol;
    }

    public void setSimpleProtocol(SimpleProtocol simpleProtocol) {
        this.simpleProtocol = simpleProtocol;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date date) {
        this.createdDate = date;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getMethodName() {
        return methodName;
    }

    public void setMethodName(String methodName) {
        this.methodName = methodName;
    }

    public String getDesignMethodDescription() {
        return designMethodDescription;
    }

    public void setDesignMethodDescription(String designMethodDescription) {
        this.designMethodDescription = designMethodDescription;
    }

    public String getAnalysis() {
        return analysis;
    }

    public void setAnalysis(String analysis) {
        this.analysis = analysis;
    }

    public Float getYield() {
        return yield;
    }

    public void setYield(Float yield) {
        this.yield = yield;
    }

    public void transferSynthesisPurificationBeanToSimple(SynthesisPurificationBean synBean, HttpServletRequest httpRequest, SpringSecurityAclService springSecurityAclService) {
        SynthesisPurification synthesisPurification = synBean.getDomainEntity();
        setSampleId((String) httpRequest.getSession().getAttribute("sampleId"));
        setId(synBean.getDomainEntity().getId());
        setType(synBean.getType());
        setDesignMethodDescription(synBean.getDescription());
        setCreatedBy(synthesisPurification.getCreatedBy());
        setCreatedDate(synthesisPurification.getCreatedDate());
        setAnalysis(synthesisPurification.getAnalysis());
        setYield(synthesisPurification.getYield());
        if ((synBean.getPurityBeans() != null) && (synBean.getPurityBeans().size()>0)) {
            simplePurityBeans = new ArrayList<SimplePurityBean>();
            columnHeaders = synBean.getPurityBeans().get(0).getColumnHeaders();
            for (SynthesisPurityBean purityBean : synBean.getPurityBeans()) {
                SimplePurityBean simplePurityBean = new SimplePurityBean();
                simplePurityBean.transferFromPurityBean(purityBean, sampleId);
                simplePurityBeans.add(simplePurityBean);
            }

        }

        //*** Testing SimpleRowBean**//


        editBean.transferPurificationToPurificationEdit(this);

        if (synBean != null) {
            simpleProtocol = new SimpleProtocol();
            simpleProtocol.transferFromProtocolBean(synBean.getProtocolBean());

        }

        //technique and instrument
        List<SimplePurificationConfigBean> simpleExperimentBeans = new ArrayList<SimplePurificationConfigBean>();

        List<PurificationConfigBean> purificationConfigs = synBean.getPurificationConfigs();
        if (purificationConfigs != null) {
            for (PurificationConfigBean purificationConfigBean : purificationConfigs) {
                SimplePurificationConfigBean simpleExperimentBean = new SimplePurificationConfigBean();
                simpleExperimentBean.setId(purificationConfigBean.getDomain().getPurificationConfigPkId());
                simpleExperimentBean.setTechniqueDisplayName(purificationConfigBean.getTechniqueDisplayName());
                simpleExperimentBean.setDescription(purificationConfigBean.getDescription());
                simpleExperimentBean.setTechniqueid(purificationConfigBean.getDomain().getTechnique().getId());
                simpleExperimentBean.setTechniqueType(purificationConfigBean.getDomain().getTechnique().getType());
                simpleExperimentBean.setAbbreviation(purificationConfigBean.getDomain().getTechnique().getAbbreviation());
                List<SimpleInstrumentBean> simpleInstrumentBeans = new ArrayList<SimpleInstrumentBean>();
                if (purificationConfigBean.getInstruments() != null) {
                    for (Instrument instrument : purificationConfigBean.getInstruments()) {

                            SimpleInstrumentBean simpleInstrumentBean = new SimpleInstrumentBean();
                            simpleInstrumentBean.setManufacturer(instrument.getManufacturer());
                            simpleInstrumentBean.setModelName(instrument.getModelName());
                            simpleInstrumentBean.setType(instrument.getType());
                            simpleInstrumentBean.setId(instrument.getId());
                            simpleInstrumentBeans.add(simpleInstrumentBean);

                    }
                    simpleExperimentBean.setInstruments(simpleInstrumentBeans);
                    simpleExperimentBeans.add(simpleExperimentBean);
                }
            }
            setSimpleExperimentBeans(simpleExperimentBeans);

        }
        this.setupLookups(httpRequest);

    }

    protected void setupLookups(HttpServletRequest request) {
        SortedSet<String> valueTypes = (SortedSet<String>)request.getSession().getAttribute("datumConditionValueTypes");
        if (valueTypes != null)
            this.datumConditionValueTypeLookup.addAll(valueTypes);
        CommonUtil.addOtherToList(this.datumConditionValueTypeLookup);

        try {
            this.techniqueInstruments.setupLookups(request);
        }
        catch (Exception e) {
            //TODO improve error
            System.out.println("Issue getting dropdowns");
        }

    }


}