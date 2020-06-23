package gov.nih.nci.cananolab.restful.view.edit;

import gov.nih.nci.cananolab.domain.common.Instrument;
import gov.nih.nci.cananolab.domain.common.PurificationConfig;
import gov.nih.nci.cananolab.domain.common.PurityDatum;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurification;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurity;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.common.PurificationConfigBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurificationBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurityBean;
import gov.nih.nci.cananolab.security.enums.SecureClassesEnum;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;
import javax.servlet.http.HttpServletRequest;

public class SimpleSynthesisPurificationBean {

    List<String> errors;
    String sampleId="";
    Long id;
    SimpleProtocol simpleProtocol;
    private String createdBy;
    private Date createdDate;
    private String type;
    private String methodName;
    private String designMethodDescription;
    private String analysis;
    private Float yield;
    List<SimplePurityBean> purityBeans;
    List<SimplePurificationConfigBean> purificationConfigBeans;

    public List<SimplePurificationConfigBean> getSimpleExperimentBeans(){
        return this.purificationConfigBeans;
    }

    public void setSimpleExperimentBeans(List<SimplePurificationConfigBean> purificationConfigBeans){
        this.purificationConfigBeans = purificationConfigBeans;
    }

    public List<SimplePurityBean> getPurityBeans() {
        return purityBeans;
    }

    public void setPurityBeans(List<SimplePurityBean> purityBeans) {
        this.purityBeans = purityBeans;
    }

    public List<String> getErrors() {
        return errors;
    }
    public void setErrors(List<String> msgs) {
        this.errors=errors;
    }

    public String getSampleId() {
        return sampleId;
    }
    public void setSampleId(String sampleId)
    {
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

    public Date getcreatedDate() {
        return createdDate;
    }

    public void setcreatedDate(Date date) {
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
        setcreatedDate(synthesisPurification.getCreatedDate());
        setAnalysis(synthesisPurification.getAnalysis());
        setYield(synthesisPurification.getYield());
        if(synBean.getPurityBeans() !=null){
            purityBeans = new ArrayList<SimplePurityBean>();
            for(SynthesisPurityBean purityBean : synBean.getPurityBeans()){
                SimplePurityBean simplePurityBean = new SimplePurityBean();
//                SynthesisPurity purity = purityBean.getDomain();
                simplePurityBean.transferFromPurityBean(purityBean, sampleId);
//                simplePurityBean.setId(purity.getId());
//                simplePurityBean.setCreatedBy(purity.getCreatedBy());
//                simplePurityBean.setCreatedDate(purity.getCreatedDate());
//                if (purity.getFiles()!=null){
//                    List<SimpleFileBean> purityFiles = new ArrayList<SimpleFileBean>();
//                    for(FileBean fileBean: purityBean.getFiles()){
//                        SimpleFileBean simpleFileBean = new SimpleFileBean(fileBean, this.sampleId);
//                        boolean isPublic = springSecurityAclService.checkObjectPublic(Long.valueOf(getSampleId()), SecureClassesEnum.SAMPLE.getClazz());
//                        simpleFileBean.setIsPublic(isPublic);
//                        purityFiles.add(simpleFileBean);
//                    }
//                    simplePurityBean.setFiles(purityFiles);
//                }
//                simplePurityBean.transferRowsFromPurityBean(purityBean);
                purityBeans.add(simplePurityBean);
            }

        }
        if(synBean !=null){
            simpleProtocol = new SimpleProtocol();
            simpleProtocol.transferFromProtocolBean(synBean.getProtocolBean());

        }

        //technique and instrument
        List<SimplePurificationConfigBean> simpleExperimentBeans = new ArrayList<SimplePurificationConfigBean>();

        List<PurificationConfigBean> purificationConfigs = synBean.getPurificationConfigs();
        if(purificationConfigs!=null){
            for(PurificationConfigBean purificationConfigBean: purificationConfigs){
                SimplePurificationConfigBean simpleExperimentBean = new SimplePurificationConfigBean();
                simpleExperimentBean.setId(purificationConfigBean.getDomain().getPurificationConfigPkId());
                simpleExperimentBean.setTechniqueDisplayName(purificationConfigBean.getTechniqueDisplayName());
                simpleExperimentBean.setDescription(purificationConfigBean.getDescription());
                simpleExperimentBean.setTechniqueid(purificationConfigBean.getDomain().getTechnique().getId());
                simpleExperimentBean.setTechniqueType(purificationConfigBean.getDomain().getTechnique().getType());
                simpleExperimentBean.setAbbreviation(purificationConfigBean.getDomain().getTechnique().getAbbreviation());
                List<SimpleInstrumentBean> simpleInstrumentBeans = new ArrayList<SimpleInstrumentBean>();
                if(purificationConfigBean.getInstruments()!=null){
                    for(Instrument instrument:purificationConfigBean.getInstruments()){
                        SimpleInstrumentBean simpleInstrumentBean = new SimpleInstrumentBean();
                        simpleInstrumentBean.setManufacturer(instrument.getManufacturer());
                        simpleInstrumentBean.setModelName(instrument.getModelName());
                        simpleInstrumentBean.setType(instrument.getType());
                        simpleInstrumentBean.setId(instrument.getId());
                        simpleInstrumentBeans.add(simpleInstrumentBean);
                    }
                }
                simpleExperimentBean.setInstruments(simpleInstrumentBeans);
                simpleExperimentBeans.add(simpleExperimentBean);
            }
        }
        setSimpleExperimentBeans(simpleExperimentBeans);

    }
}
