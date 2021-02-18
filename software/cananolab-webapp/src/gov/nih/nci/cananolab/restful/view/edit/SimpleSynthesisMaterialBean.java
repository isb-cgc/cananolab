package gov.nih.nci.cananolab.restful.view.edit;

import gov.nih.nci.cananolab.domain.common.Supplier;
import gov.nih.nci.cananolab.domain.particle.SmeInherentFunction;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterial;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterialElement;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.common.ProtocolBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialElementBean;
import gov.nih.nci.cananolab.security.enums.SecureClassesEnum;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.service.protocol.ProtocolService;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;

public class SimpleSynthesisMaterialBean {
    List<String> errors;
    Long id = 0L;
    String sampleId="";
    List<SimpleSynthesisMaterialElementBean> materialElements;
    List<SimpleFileBean> fileElements;
    ArrayList<SimpleProtocol> protocolLookup;
    SimpleProtocol simpleProtocol;
    private String type;
    private String description;
    private String createdBy;
    private Date date;

    //Passed in from front end when a file is being manipulated
    SimpleFileBean fileBeingEdited;
    SimpleSynthesisMaterialElementBean materialElementBeingEdited;

    public SimpleProtocol getSimpleProtocol() {
        return simpleProtocol;
    }

    public void setSimpleProtocol(SimpleProtocol simpleProtocol) {
        this.simpleProtocol = simpleProtocol;
    }

    public List<SimpleFileBean> getFileElements() {
        return fileElements;
    }

    public void setFileElements(List<SimpleFileBean> fileElements) {
        this.fileElements = fileElements;
    }

    public SimpleFileBean getFileBeingEdited() {
        return fileBeingEdited;
    }

    public void setFileBeingEdited(SimpleFileBean fileBeingEdited){
        this.fileBeingEdited = fileBeingEdited;
    }

    public SimpleSynthesisMaterialElementBean getMaterialElementBeingEdited(){
        return materialElementBeingEdited;
    }

    public void setMaterialElementBeingEdited(SimpleSynthesisMaterialElementBean materialElementBeingEdited) {
         this.materialElementBeingEdited = materialElementBeingEdited;
    }

    public String getType() {
        return type;
    }

    public String getDescription() {
        return description;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
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

    public List<SimpleSynthesisMaterialElementBean> getMaterialElements() {
        return materialElements;
    }

    public void setMaterialElements(List<SimpleSynthesisMaterialElementBean> materialElements) {
        this.materialElements = materialElements;
    }

    public void transferSynthesisMaterialBeanToSimple(SynthesisMaterialBean synBean, HttpServletRequest httpRequest, SpringSecurityAclService springSecurityAclService) {
        

        SynthesisMaterial synthesisMaterial = synBean.getDomainEntity();
        setSampleId((String) httpRequest.getSession().getAttribute("sampleId"));
        setId(synBean.getDomainEntity().getId());
        setType(synBean.getType());
        setDescription(synBean.getDescription());
        setCreatedBy(synthesisMaterial.getCreatedBy());
        setCreatedDate(synthesisMaterial.getCreatedDate());
        if(synBean.getSynthesisMaterialElements()!=null){
            materialElements = new ArrayList<SimpleSynthesisMaterialElementBean>();
            for(SynthesisMaterialElementBean elementBean: synBean.getSynthesisMaterialElements()){
                SimpleSynthesisMaterialElementBean sSynMatElementBean = new SimpleSynthesisMaterialElementBean();
                SynthesisMaterialElement synthesisMaterialElement = elementBean.getDomainEntity();
                sSynMatElementBean.setId(synthesisMaterialElement.getId());
                sSynMatElementBean.setDescription(synthesisMaterialElement.getDescription());
                sSynMatElementBean.setMolecularFormula(synthesisMaterialElement.getMolecularFormula());
                sSynMatElementBean.setMolecularFormulaType(synthesisMaterialElement.getMolecularFormulaType());
                sSynMatElementBean.setChemicalName( synthesisMaterialElement.getChemicalName());
                sSynMatElementBean.setType(synthesisMaterialElement.getType());
                sSynMatElementBean.setValue(synthesisMaterialElement.getValue());
                sSynMatElementBean.setValueUnit(synthesisMaterialElement.getValueUnit());
                sSynMatElementBean.setCreatedDate(synthesisMaterialElement.getCreatedDate());
                sSynMatElementBean.setCreatedBy(synthesisMaterialElement.getCreatedBy());
                sSynMatElementBean.setPubChemId(synthesisMaterialElement.getPubChemId());
                sSynMatElementBean.setPubChemDataSource(synthesisMaterialElement.getPubChemDatasourceName());
                //Transfer supplier

                sSynMatElementBean.setSupplier(synthesisMaterialElement.getSupplier());
//                Supplier supplier = synthesisMaterialElement.getSupplier();
//
//                if(supplier != null){
//                    Map<String, String> supplierMap = new HashMap<String, String>();
//                    supplierMap.put("Lot",supplier.getLot());
//                    supplierMap.put("SupplierName",supplier.getSupplierName());
//                    supplierMap.put("id",supplier.getId().toString());
//                    sSynMatElementBean.setSupplier(supplierMap);
//                }
                //Transfer inherent function
                if (synthesisMaterialElement.getSmeInherentFunctions().size()>0){
                    List<Map<String,String>> functionList = new ArrayList<Map<String, String>>();
                    for(SmeInherentFunction smeInherentFunction: synthesisMaterialElement.getSmeInherentFunctions()){
                        Map<String,String> function = new HashMap<String, String>();
                        function.put("id",smeInherentFunction.getId().toString());
                        function.put("type",smeInherentFunction.getType());
                        function.put("description",smeInherentFunction.getDescription());
                        functionList.add(function);
                    }
                    sSynMatElementBean.setInherentFunctionList(functionList);
                }
                //Transfer files
                if(synthesisMaterialElement.getFiles()!=null){
                    List<SimpleFileBean> sfeFiles = new ArrayList<SimpleFileBean>();
                    for(FileBean file : elementBean.getFiles()){
                        SimpleFileBean simpleFileBean = new SimpleFileBean(file,this.getSampleId());
//                        SimpleFileBean fBean = new SimpleFileBean();
//                        fBean.setDescription(file.getDescription());
//                        fBean.setType(file.getDomainFile().getType());
//                        fBean.setTitle(file.getDomainFile().getTitle());
//                        fBean.setUri(file.getDomainFile().getUri());
//                        fBean.setUriExternal(file.getDomainFile().getUriExternal());
//                        fBean.setExternalUrl(file.getExternalUrl());
//                        fBean.setKeywordsStr(file.getKeywordsStr());
//                        fBean.setId(file.getDomainFile().getId());
//                        fBean.setCreatedBy(file.getDomainFile().getCreatedBy());
//                        fBean.setCreatedDate(file.getDomainFile().getCreatedDate());
//                        fBean.setTheAccess(file.getTheAccess());
//                        boolean isPublic = springSecurityAclService.checkObjectPublic(Long.valueOf(getSampleId()), SecureClassesEnum.SAMPLE.getClazz());
//                        fBean.setIsPublic(isPublic);
                        boolean isPublic = springSecurityAclService.checkObjectPublic(Long.valueOf(getSampleId()), SecureClassesEnum.SAMPLE.getClazz());
                        simpleFileBean.setIsPublic(isPublic);
                        sfeFiles.add(simpleFileBean);
                    }
                sSynMatElementBean.setFiles(sfeFiles);
                }
                materialElements.add(sSynMatElementBean);
            }
            setMaterialElements(materialElements);
        }

        if(synBean.getFiles()!=null){
            fileElements = new ArrayList<SimpleFileBean>();
            for(FileBean file : synBean.getFiles()){
                SimpleFileBean simpleFileBean = new SimpleFileBean(file,this.getSampleId());
//                SimpleFileBean fBean = new SimpleFileBean();
//                fBean.setDescription(file.getDescription());
//                fBean.setType(file.getDomainFile().getType());
//                fBean.setTitle(file.getDomainFile().getTitle());
//                fBean.setUri(file.getDomainFile().getUri());
//                fBean.setUriExternal(file.getDomainFile().getUriExternal());
//                fBean.setExternalUrl(file.getExternalUrl());
//                fBean.setKeywordsStr(file.getKeywordsStr());
//                fBean.setId(file.getDomainFile().getId());
//                fBean.setCreatedBy(file.getDomainFile().getCreatedBy());
//                fBean.setCreatedDate(file.getDomainFile().getCreatedDate());
//                fBean.setTheAccess(file.getTheAccess());
                boolean isPublic = springSecurityAclService.checkObjectPublic(Long.valueOf(getSampleId()), SecureClassesEnum.SAMPLE.getClazz());
                simpleFileBean.setIsPublic(isPublic);
                fileElements.add(simpleFileBean);
            }
            setFiles(fileElements);

        }

        if(synBean.getProtocolBean() !=null){
            simpleProtocol = new SimpleProtocol();
            simpleProtocol.transferFromProtocolBean(synBean.getProtocolBean());
        }

        setDomainEntityInfo(synBean);
    }

    private void setDomainEntityInfo(SynthesisMaterialBean synBean) {
        //TODO possibly not needed
    }


    public void setFiles(List<SimpleFileBean> fileElements) {
        this.fileElements = fileElements;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setType(String type) {
        this.type = type;
    }
    
    public void setCreatedDate(Date date){
        this.date = date;
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
}
