package gov.nih.nci.cananolab.restful.view.edit;

import gov.nih.nci.cananolab.domain.common.Supplier;
import gov.nih.nci.cananolab.domain.particle.SmeInherentFunction;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterial;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterialElement;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialElementBean;
import gov.nih.nci.cananolab.security.enums.SecureClassesEnum;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
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
    SimpleProtocol simpleProtocol;
    private String type;
    private String description;
    private String createdBy;
    private Date date;

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
                Supplier supplier = synthesisMaterialElement.getSupplier();
                if(supplier != null){
                    Map<String, Object> supplierMap = new HashMap<String, Object>();
                    supplierMap.put("Lot",supplier.getLot());
                    supplierMap.put("SupplierName",supplier.getSupplierName());
                    supplierMap.put("id",supplier.getId());
                    sSynMatElementBean.setSupplier(supplierMap);
                }
                if (synthesisMaterialElement.getSmeInherentFunctions().size()>0){
                    List<Map<String,Object>> functionList = new ArrayList<Map<String, Object>>();
                    for(SmeInherentFunction smeInherentFunction: synthesisMaterialElement.getSmeInherentFunctions()){
                        Map<String,Object> function = new HashMap<String, Object>();
                        function.put("id",smeInherentFunction.getId());
                        function.put("type",smeInherentFunction.getType());
                        function.put("description",smeInherentFunction.getDescription());
                        functionList.add(function);
                    }
                    sSynMatElementBean.setInherentFunction(functionList);
                }
                
            }
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

        setDomainEntityInfo(synBean);
    }

    private void setDomainEntityInfo(SynthesisMaterialBean synBean) {
        //possibly not needed
    }


    private void setFiles(List<SimpleFileBean> fileElements) {
        this.fileElements = fileElements;
    }

    private void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    private void setDescription(String description) {
        this.description = description;
    }

    private void setType(String type) {
        this.type = type;
    }
    
    private void setCreatedDate(Date date){
        this.date = date;
    }
}
