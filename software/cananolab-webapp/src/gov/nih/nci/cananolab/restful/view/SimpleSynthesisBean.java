package gov.nih.nci.cananolab.restful.view;

import gov.nih.nci.cananolab.domain.particle.SmeInherentFunction;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SmeInherentFunctionBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationElementBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialElementBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurificationBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurityBean;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.commons.collections.MultiMap;
import org.apache.commons.collections.map.MultiValueMap;
import org.apache.james.mime4j.field.address.MailboxList;

public class SimpleSynthesisBean {
    Long id;
    List<String> synthesisSections = new ArrayList<String>();
    List synthesisFunctionalization;
    List synthesisPurification;
//    MultiMap synthesisMaterials;
    List synthesisMaterials;

    List<String> errors;

//    public MultiMap getSynthesisMaterials() {
//        return synthesisMaterials;
//    }
    public List getSynthesisMaterials() { return synthesisMaterials;}

    public List getSynthesisFunctionalization() {
        return synthesisFunctionalization;
    }

    public List getSynthesisPurification() {
        return synthesisPurification;
    }

    public List<String> getErrors() {
        return errors;
    }

//    public void setSynthesisMaterials(MultiMap synthesisMaterials) {
//        this.synthesisMaterials = synthesisMaterials;
//    }

    public void setSynthesisMaterials(List synthesisMaterials) { this.synthesisMaterials = synthesisMaterials;}

    public void setSynthesisFunctionalization(List synthesisFunctionalization) {
        this.synthesisFunctionalization = synthesisFunctionalization;
    }

    public void setSynthesisPurification(List synthesisPurification) {
        this.synthesisPurification = synthesisPurification;
    }

    public void setSynthesisSections(List<String> synthesisSections) {
        this.synthesisSections = synthesisSections;
    }


    public void transferSynthesisForSummaryView(SynthesisBean synBean) {


        Map<String, Object> files;

        List<Map<String, Object>> fileList;
        setSynthesisSections(synBean.getSynthesisSections());

        //Add SynthesisMaterials
//        synthesisMaterials = new MultiValueMap();
        synthesisMaterials = new ArrayList<Map<String,Object>>();
        if (synBean.getSynthesisMaterialBeanList() != null) {
            HashMap<String, Object> matEntity;
            HashMap<String, Object> materialElement;
            List<Map<String, Object>> materialElements;
//            for (String matType : synBean.getSynMatTypes()) {
//                matEntity = new HashMap<String, Object>();
//                for (SynthesisMaterialBean material : synBean.getType2MatsEntities().get(matType)) {
            Integer integer = 1;
            for(SynthesisMaterialBean material : synBean.getSynthesisMaterialBeanList()){

                matEntity = new HashMap<String, Object>();
                    matEntity.put("DisplayName", "Material "+ integer++);
                    matEntity.put("Description", material.getDomainEntity().getDescription());
                    matEntity.put("dataId", material.getDomainEntity().getId());
//                    matEntity.put("Protocol", material.getDomainEntity().getProtocol().getName());
                //Protocol
                if (material.getProtocolBean().getDisplayName().length() > 0) {
                    matEntity.put("Protocol", material.getProtocolBean().getDisplayName());
                } else {
                    matEntity.put("Protocol", "N/A");
                }
                    //Add SynthesisMaterialElements
                    materialElements = new ArrayList<Map<String, Object>>();
                    if (material.getSynthesisMaterialElements() != null) {
                        for (SynthesisMaterialElementBean elementBean : material.getSynthesisMaterialElements()) {
                            materialElement = new HashMap<String, Object>();
                            materialElement.put("Description", elementBean.getDomainEntity().getDescription());
                            materialElement.put("DisplayName", elementBean.getDisplayName());
                            materialElement.put("Type", elementBean.getDomainEntity().getType());
                            materialElement.put("PubChemDataSourceName", elementBean.getDomainEntity().getPubChemDatasourceName());
                            materialElement.put("PubChemId", elementBean.getDomainEntity().getPubChemId());
                            materialElement.put("PubChemLink", elementBean.getPubChemLink());
                            materialElement.put("Amount", elementBean.getDomainEntity().getValue());
                            materialElement.put("ValueUnit", elementBean.getDomainEntity().getValueUnit());
                            materialElement.put("MolecularFormulaType", elementBean.getDomainEntity().getMolecularFormulaType());
                            materialElement.put("MolecularFormula", elementBean.getDomainEntity().getMolecularFormula());
                            materialElement.put("ChemicalName", elementBean.getDomainEntity().getChemicalName());
                            materialElement.put("Supplier",  elementBean.getDomainEntity().getSupplier());
                            List<Map<String, Object>> functions = new ArrayList<Map<String, Object>>();
                            for(SmeInherentFunction sme: elementBean.getDomainEntity().getSmeInherentFunctions()){
                                HashMap<String,Object> functionElement = new HashMap<String, Object>();
                                SmeInherentFunctionBean smeBean = new SmeInherentFunctionBean(sme);
                                functionElement.put("FunctionDescription", smeBean.getDescription());
                                functionElement.put("FunctionType", smeBean.getType());
                                functionElement.put("FunctionDisplayName", smeBean.getDisplayName());
                                functionElement.put("FunctionId", smeBean.getDomain().getId());
                                functions.add(functionElement);
                            }
                            materialElement.put("InherentFunctions", functions);
                            materialElements.add(materialElement);
                        }

                        matEntity.put("MaterialElements", materialElements);
                    }

                    //AddFiles

                    if (material.getFiles() != null) {
                        fileList=addFiles(material.getFiles());
                        matEntity.put("Files", fileList);
                    }
//                }
//                synthesisMaterials.put(matType, matEntity);
                    synthesisMaterials.add(matEntity);
            }



        }

        //Add SynthesisFunctionalization
        /* TODO write */
        synthesisFunctionalization = new ArrayList<Map<String,Object>>();
        if(synBean.getSynthesisFunctionalizationBeanList() !=null){
            Map<String,Object> funcEntity;
//            Map<String,Object> functionalization;
            Map<String,Object> functionalizationElement;
            List<Map<String,Object>> functionalizationElements;
//            for(String entityType:synBean.getSynFuncTypes()){
            Integer integer = 1;
//                for(SynthesisFunctionalizationBean functionalizationBean: synBean.getType2FuncEntities().get(entityType)){
                    for(SynthesisFunctionalizationBean functionalizationBean: synBean.getSynthesisFunctionalizationBeanList()){
                        funcEntity = new HashMap<String, Object>();
                        funcEntity.put("DisplayName", "Functionalization "+ integer++);
                    funcEntity.put("Description", functionalizationBean.getDomainEntity().getDescription());
                    funcEntity.put("dataId", functionalizationBean.getDomainEntity().getId());
                    funcEntity.put("source", functionalizationBean.getDomainEntity().getCreatedBy());
                    functionalizationElements = new ArrayList<Map<String, Object>>();
                    for (SynthesisFunctionalizationElementBean sfeBean: functionalizationBean.getSynthesisFunctionalizationElements()) {
                        functionalizationElement = new HashMap<String, Object>();
                        functionalizationElement.put("DisplayName", sfeBean.getDisplayName());
                        functionalizationElement.put("ChemicalName", sfeBean.getDomain().getChemicalName());
                        functionalizationElement.put("Description", sfeBean.getDescription());
                        functionalizationElement.put("Amount", sfeBean.getDomain().getValue());
                        functionalizationElement.put("AmountUnit", sfeBean.getDomain().getValueUnit());
                        functionalizationElement.put("MolecularFormula",sfeBean.getDomain().getMolecularFormula());
                        functionalizationElement.put("MolecularFormulaType", sfeBean.getDomain().getMolecularFormulaType());
                        functionalizationElement.put("Functions", sfeBean.getFunctionDisplayNames());
                        functionalizationElement.put("pubChemID", sfeBean.getDomain().getPubChemId());
                        functionalizationElement.put("pubChemLink", sfeBean.getPubChemLink());
                        functionalizationElement.put("pubChemDataSourceName", sfeBean.getDomain().getPubChemDatasourceName());
                        functionalizationElement.put("ActivationMethod", sfeBean.getDomain().getActivationMethod());
                        functionalizationElement.put("ActivationEffect", sfeBean.getDomain().getActivationEffect());
                        functionalizationElements.add(functionalizationElement);
                    }
                    funcEntity.put("FunctionalizationElements", functionalizationElements);
                    if (functionalizationBean.getFiles()!=null){
                        fileList=addFiles(functionalizationBean.getFiles());
                        funcEntity.put("Files", fileList);
                    }
//                }
//                synthesisFunctionalization.put(entityType, funcEntity);
                    synthesisFunctionalization.add(funcEntity);
            }
        }
        //Add SynthesisPurification
        /* TODO write */
//        synthesisPurification = new MultiValueMap();
        synthesisPurification = new ArrayList<Map<String,Object>>();
        if(synBean.getSynthesisPurificationBeanList()!=null){
            Map<String,Object> purification;
            Map<String,Object> purificationPurity;
            List<Map<String,Object>> purificationPurityElements;
            for(String entityType:synBean.getSynPureTypes()){
                purification = new HashMap<String, Object>();
                for(SynthesisPurificationBean purificationBean:synBean.getSynthesisPurificationBeanList()){
//                for(SynthesisPurificationBean purificationBean: synBean.getType2PurEntities().get(entityType)){
                    purification.put("DisplayName", purificationBean.getDomainEntity().getType());
                    purification.put("dataId", purificationBean.getDomainEntity().getId());
                    purification.put("Description", purificationBean.getDescription());
                    purification.put("Source", purificationBean.getSource());
                    purification.put("Date", purificationBean.getDomainEntity().getCreatedDate());
                    purification.put("Yield", purificationBean.getDomainEntity().getYield());
                    purification.put("Protocol", purificationBean.getDomainEntity().getProtocol().getName());
                    purification.put("Analysis", purificationBean.getDomainEntity().getAnalysis());
                    //TODO loop through purification config
                    purification.put("Technique", purificationBean.getDomainEntity().getPurificationConfigs());
                    purificationPurityElements = new ArrayList<Map<String,Object>>();
                    for(SynthesisPurityBean purityBean : purificationBean.getPurityBeans()){
                        purificationPurity = new HashMap<String, Object>();
                        purificationPurity.put("purity", purityBean.toString());
                        if (purityBean.getFiles()!=null){
                            fileList=addFiles(purityBean.getFiles());
                            purificationPurity.put("Files", fileList);
                        }

                        //TODO write
                        //loop through datum?
                        purificationPurityElements.add(purificationPurity);
                    }
                    purification.put("purificationElements", purificationPurityElements);
                }
//                synthesisPurification.put(entityType, purification);
                synthesisPurification.add(purification);
            }
        }
    }
    private List<Map<String, Object>>  addFiles(List<FileBean> fileBeans){
        Map<String,Object> files = new HashMap<String, Object>();
        List<Map<String, Object>> fileList = new ArrayList<Map<String, Object>>();
        for (FileBean file : fileBeans) {
            files = new HashMap<String, Object>();

            files.put("fileId", file.getDomainFile().getId());
            files.put("isImage", file.isImage());
            files.put("ExternalURI", new Boolean(file.getDomainFile().getUriExternal()).toString());
            files.put("Title", file.getDomainFile().getTitle());

            files.put("URI", file.getDomainFile().getUri());

            files.put("KeywordStr", file.getKeywordsStr());

            files.put("KeyWordDisplayName",
                    file.getKeywordsDisplayName());

            files.put("Description", file.getDomainFile()
                    .getDescription());
            fileList.add(files);
        }
        return fileList;
    }
}
