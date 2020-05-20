package gov.nih.nci.cananolab.restful.view.edit;

import gov.nih.nci.cananolab.domain.particle.*;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.common.ProtocolBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationElementBean;
import gov.nih.nci.cananolab.security.enums.SecureClassesEnum;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.service.protocol.ProtocolService;

import java.util.*;
import javax.servlet.http.HttpServletRequest;

public class SimpleSynthesisFunctionalizationBean {

    private Long id = 0L;
    private String sampleId="";
    private String dataId="";
    List<SimpleSynthesisFunctionalizationElementBean> functionalizationElements = new ArrayList<SimpleSynthesisFunctionalizationElementBean>() ;
    List<SimpleFileBean> fileElements;
    private List<String> errors = new ArrayList<String>();
    private Date date;
    private String createdBy="";
    private String description;
    private String type;
    ArrayList<SimpleProtocol> protocolLookup;
    SimpleProtocol simpleProtocol;


    SimpleFileBean fileBeingEdited;
    SimpleSynthesisFunctionalizationElementBean functionalizationElementBeingEdited;



    public SimpleFileBean getFileBeingEdited() {
        return fileBeingEdited;
    }

    public void setFileBeingEdited(SimpleFileBean fileBeingEdited) {
        this.fileBeingEdited = fileBeingEdited;
    }

    public List<SimpleFileBean> getFileElements() {
        return fileElements;
    }

    public void setFileElements(List<SimpleFileBean> fileElements) {
        this.fileElements = fileElements;
    }

    public SimpleSynthesisFunctionalizationElementBean getFunctionalizationElementBeingEdited() {
        return functionalizationElementBeingEdited;
    }

    public void setFunctionalizationElementBeingEdited(SimpleSynthesisFunctionalizationElementBean functionalizationElementBeingEdited) {
        this.functionalizationElementBeingEdited = functionalizationElementBeingEdited;
    }

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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getDataId() {
        return dataId;
    }

    public void setDataId(String dataId) {
        this.dataId = dataId;
    }

    public String getSampleId() {
        return sampleId;
    }

    public void setSampleId(String sampleId) {
        this.sampleId = sampleId;
    }


    public List<SimpleSynthesisFunctionalizationElementBean> getFunctionalizationElements() {
        return functionalizationElements;
    }

    public void setFunctionalizationElements(List<SimpleSynthesisFunctionalizationElementBean> functionalizationElements) {
        this.functionalizationElements = functionalizationElements;
    }

    public List<String> getErrors() {
        return errors;
    }

    public void setErrors(List<String> errors) {
        this.errors = errors;
    }

    public void transferSynthesisFunctionalizationBeanToSimple(SynthesisFunctionalizationBean  synBean, HttpServletRequest httpRequest, SpringSecurityAclService springSecurityAclService){

        SynthesisFunctionalization synthesisFunctionalization = synBean.getDomainEntity();
        setSampleId((String) httpRequest.getSession().getAttribute("sampleId"));
        setId(synBean.getDomainEntity().getId());
        setType(synBean.getType());
        setDescription(synBean.getDescription());
        setCreatedBy(synthesisFunctionalization.getCreatedBy());
        setDate(synthesisFunctionalization.getCreatedDate());
        if(synBean.getSynthesisFunctionalizationElements()!=null){
            functionalizationElements = new ArrayList<SimpleSynthesisFunctionalizationElementBean>();
            for(SynthesisFunctionalizationElementBean elementBean: synBean.getSynthesisFunctionalizationElements()){
                SimpleSynthesisFunctionalizationElementBean sSynFuncElementBean = new SimpleSynthesisFunctionalizationElementBean();
                SynthesisFunctionalizationElement synthesisFunctionalizationElement = elementBean.getDomainEntity();
                sSynFuncElementBean.setId(synthesisFunctionalizationElement.getId());
                sSynFuncElementBean.setDescription(synthesisFunctionalizationElement.getDescription());
                sSynFuncElementBean.setMolecularFormula(synthesisFunctionalizationElement.getMolecularFormula());
                sSynFuncElementBean.setMolecularFormulaType(synthesisFunctionalizationElement.getMolecularFormulaType());
                sSynFuncElementBean.setChemicalName( synthesisFunctionalizationElement.getChemicalName());
                sSynFuncElementBean.setType(synthesisFunctionalizationElement.getType());
                sSynFuncElementBean.setValue(synthesisFunctionalizationElement.getValue());
                sSynFuncElementBean.setValueUnit(synthesisFunctionalizationElement.getValueUnit());
                sSynFuncElementBean.setCreatedDate(synthesisFunctionalizationElement.getCreatedDate());
                sSynFuncElementBean.setCreatedBy(synthesisFunctionalizationElement.getCreatedBy());
                sSynFuncElementBean.setPubChemId(synthesisFunctionalizationElement.getPubChemId());
                sSynFuncElementBean.setPubChemDataSource(synthesisFunctionalizationElement.getPubChemDatasourceName());

                sSynFuncElementBean.setActivationEffect(synthesisFunctionalizationElement.getActivationEffect());
                sSynFuncElementBean.setActivationMethod(synthesisFunctionalizationElement.getActivationMethod());

                //Transfer inherent function
                if (synthesisFunctionalizationElement.getSfeInherentFunctions().size()>0){
                    List<Map<String,String>> functionList = new ArrayList<Map<String, String>>();
                    for(SfeInherentFunction sfeInherentFunction: synthesisFunctionalizationElement.getSfeInherentFunctions()){
                        Map<String,String> function = new HashMap<String, String>();
                        function.put("id",sfeInherentFunction.getId().toString());
                        function.put("type",sfeInherentFunction.getType());
                        function.put("description",sfeInherentFunction.getDescription());
                        functionList.add(function);
                    }
                    sSynFuncElementBean.setInherentFunctionList(functionList);
                }
                //Transfer files
                if(synthesisFunctionalizationElement.getFiles()!=null){
                    List<SimpleFileBean> sfeFiles = new ArrayList<SimpleFileBean>();
                    for(FileBean file : elementBean.getFiles()){
                        SimpleFileBean simpleFileBean = new SimpleFileBean(file,this.getSampleId());
                        sfeFiles.add(simpleFileBean);
                    }
                    sSynFuncElementBean.setFiles(sfeFiles);
                }
                functionalizationElements.add(sSynFuncElementBean);
            }
            setFunctionalizationElements(functionalizationElements);
        }

        if(synBean.getFiles()!=null){
            fileElements = new ArrayList<SimpleFileBean>();
            for(FileBean file : synBean.getFiles()){
                SimpleFileBean fBean = new SimpleFileBean();
                fBean.setDescription(file.getDescription());
                fBean.setType(file.getDomainFile().getType());
                fBean.setTitle(file.getDomainFile().getTitle());
                fBean.setUri(file.getDomainFile().getUri());
                fBean.setUriExternal(file.getDomainFile().getUriExternal());
                fBean.setExternalUrl(file.getExternalUrl());
                fBean.setKeywordsStr(file.getKeywordsStr());
                fBean.setId(file.getDomainFile().getId());
                fBean.setCreatedBy(file.getDomainFile().getCreatedBy());
                fBean.setCreatedDate(file.getDomainFile().getCreatedDate());
                fBean.setTheAccess(file.getTheAccess());
                boolean isPublic = springSecurityAclService.checkObjectPublic(Long.valueOf(getSampleId()), SecureClassesEnum.SAMPLE.getClazz());
                fBean.setIsPublic(isPublic);
                fileElements.add(fBean);
            }
            setFiles(fileElements);

        }

        if(synBean.getProtocolBean() !=null){
            simpleProtocol = new SimpleProtocol();
            simpleProtocol.transferFromProtocolBean(synBean.getProtocolBean());
        }

       // setDomainEntityInfo(synBean);
    }

    public SimpleProtocol getSimpleProtocol() {
        return simpleProtocol;
    }

    public void setSimpleProtocol(SimpleProtocol simpleProtocol) {
        this.simpleProtocol = simpleProtocol;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    private void setFiles(List<SimpleFileBean> fileElements) {
        this.fileElements = fileElements;
    }

    public void setProtocolLookup(HttpServletRequest request, ProtocolService protocolService)
            throws Exception {
        protocolLookup = new ArrayList<SimpleProtocol>();
        List<ProtocolBean> protoBeans = protocolService.getSynthesisProtocols(request);

        if (protoBeans == null)
            return;

        for (ProtocolBean protoBean : protoBeans) {
            SimpleProtocol simpleProto = new SimpleProtocol();
            simpleProto.transferFromProtocolBean(protoBean);
            protocolLookup.add(simpleProto);
        }
    }

    @Override
    public String toString()
    {
        return "{\"SimpleSynthesisFunctionalizationBean\":{"
                + "                        \"id\":\"" + id + "\""
                + ",                         \"sampleId\":\"" + sampleId + "\""
                + ",                         \"dataId\":\"" + dataId + "\""
                + ",                         \"funcElementBeans\":" + functionalizationElements
                + ",                         \"fileElements\":" + fileElements
                + ",                         \"errors\":" + errors
                + ",                         \"createdDate\":" + date
                + ",                         \"createdBy\":\"" + createdBy + "\""
                + "}}";
    }

}
