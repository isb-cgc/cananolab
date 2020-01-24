package gov.nih.nci.cananolab.restful.view.edit;

import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalization;
import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalizationElement;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationElementBean;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

public class SimpleSynthesisFunctionalizationBean {

    private Long id = 0L;
    private String sampleId="";
    private String dataId="";
//    private SimpleSynFuncElementBean funcElementBean;
    List<SimpleSynFuncElementBean> funcElementBeans = new ArrayList<SimpleSynFuncElementBean>() ;
//    private SimpleFileBean fileBean;
    List<SimpleFileBean> fileBeans = new ArrayList<SimpleFileBean>();
    private List<String> errors = new ArrayList<String>();
//    private SynthesisFunctionalization domainEntity;
//    private SynthesisFunctionalizationBean synthesisFunctionalizationBean;
    private Date createdDate;
    private String createdBy="";

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public String getDataId() {
        return dataId;
    }

    public void setDataId(String dataId) {
        this.dataId = dataId;
    }
//
//    public SynthesisFunctionalization getDomainEntity() {
//        return domainEntity;
//    }
//
//    public void setDomainEntity(SynthesisFunctionalization domainEntity) {
//        this.domainEntity = domainEntity;
//    }
//
//    public SynthesisFunctionalizationBean getSynthesisFunctionalizationBean() {
//        return synthesisFunctionalizationBean;
//    }
//
//    public void setSynthesisFunctionalizationBean(SynthesisFunctionalizationBean synthesisFunctionalizationBean) {
//        this.synthesisFunctionalizationBean = synthesisFunctionalizationBean;
//    }

    public String getSampleId() {
        return sampleId;
    }

    public void setSampleId(String sampleId) {
        this.sampleId = sampleId;
    }

//    public SimpleFileBean getFileBean() {
//        return fileBean;
//    }
//
//    public void setFileBean(SimpleFileBean fileBean) {
//        this.fileBean = fileBean;
//    }


    public List<SimpleSynFuncElementBean> getFuncElementBeans() {
        return funcElementBeans;
    }

    public void setFuncElementBeans(List<SimpleSynFuncElementBean> funcElementBeans) {
        this.funcElementBeans = funcElementBeans;
    }

    public List<SimpleFileBean> getFileBeans() {
        return fileBeans;
    }

    public void setFileBeans(List<SimpleFileBean> fileBeans) {
        this.fileBeans = fileBeans;
    }

    public List<String> getErrors() {
        return errors;
    }

    public void setErrors(List<String> errors) {
        this.errors = errors;
    }

    public void transferSynthesisFunctionalizationToSimple(SynthesisFunctionalizationBean synthesisFunctionalizationBean, HttpServletRequest httpRequest, SpringSecurityAclService springSecurityAclService){
        setSampleId( httpRequest.getParameter ("sampleId"));
        setDataId(httpRequest.getParameter ("dataId"));
        setCreatedDate( synthesisFunctionalizationBean.getDomainEntity().getCreatedDate());
        setCreatedBy( synthesisFunctionalizationBean.getDomainEntity().getCreatedBy());

        for(FileBean fileBean: synthesisFunctionalizationBean.getFiles()){
            fileBeans.add(new SimpleFileBean(fileBean, (String) httpRequest.getSession().getAttribute("sampleId")));
        }

        for(SynthesisFunctionalizationElementBean sfeBean: synthesisFunctionalizationBean.getSynthesisFunctionalizationElements()){
            SimpleSynFuncElementBean  simpleSFEBean = new SimpleSynFuncElementBean();
            simpleSFEBean.transferSimpleFunctionalizingBean(sfeBean,httpRequest,springSecurityAclService);
            funcElementBeans.add(simpleSFEBean);
        }

    }

}
