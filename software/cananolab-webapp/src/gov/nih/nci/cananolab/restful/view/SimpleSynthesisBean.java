package gov.nih.nci.cananolab.restful.view;

import gov.nih.nci.cananolab.dto.common.FileBean;
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

public class SimpleSynthesisBean {
    Long id;
    List<String> synthesisSections = new ArrayList<String>();
    MultiMap synthesisFunctionalization;
    MultiMap synthesisPurification;
    MultiMap synthesisMaterials;

    List<String> errors;

    public MultiMap getSynthesisMaterials() {
        return synthesisMaterials;
    }

    public MultiMap getSynthesisFunctionalization() {
        return synthesisFunctionalization;
    }

    public MultiMap getSynthesisPurification() {
        return synthesisPurification;
    }

    public List<String> getErrors() {
        return errors;
    }

    public void setSynthesisMaterials(MultiMap synthesisMaterials) {
        this.synthesisMaterials = synthesisMaterials;
    }

    public void setSynthesisFunctionalization(MultiMap synthesisFunctionalization) {
        this.synthesisFunctionalization = synthesisFunctionalization;
    }

    public void setSynthesisPurification(MultiMap synthesisPurification) {
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
        synthesisMaterials = new MultiValueMap();
        if (synBean.getSynthesisMaterialBeanList() != null) {
            HashMap<String, Object> matEntity;
            HashMap<String, Object> materialElement;
            List<Map<String, Object>> materialElements;
            for (String matType : synBean.getSynMatTypes()) {
                matEntity = new HashMap<String, Object>();
                for (SynthesisMaterialBean material : synBean.getType2MatsEntities().get(matType)) {
                    matEntity.put("Description", material.getDescriptionDisplayName());
                    matEntity.put("dataId", material.getDomainEntity().getId());

                    //Add SynthesisMaterialElements
                    materialElements = new ArrayList<Map<String, Object>>();
                    if (material.getSynthesisMaterialElements() != null) {
                        for (SynthesisMaterialElementBean elementBean : material.getSynthesisMaterialElements()) {
                            materialElement = new HashMap<String, Object>();
                            materialElement.put("Description", elementBean.getDescription());
                            materialElement.put("DisplayName", elementBean.getDisplayName());
                            materialElement.put("Function", elementBean.getFunctionDisplayNames());
                            materialElement.put("PubChemDataSourceName", elementBean.getDomainEntity().getPubChemDatasourceName());
                            materialElement.put("PubChemId", elementBean.getDomainEntity().getPubChemId());
                            materialElement.put("PubChemLink", elementBean.getPubChemLink());
                            materialElements.add(materialElement);
                        }
                        matEntity.put("MaterialElements", materialElements);
                    }

                    //AddFiles

                    if (material.getFiles() != null) {
                        fileList=addFiles(material.getFiles());
                        matEntity.put("Files", fileList);
                    }
                }
                synthesisMaterials.put(matType, matEntity);
            }



        }

        //Add SynthesisFunctionalization
        /* TODO write */
        synthesisFunctionalization = new MultiValueMap();
        if(synBean.getSynthesisFunctionalizationBeanList() !=null){

            Map<String,Object> functionalization;
            Map<String,Object> functionalizationElement;
            List<Map<String,Object>> functionalizationElements;
            for(String entityType:synBean.getSynFuncTypes()){

                for(SynthesisFunctionalizationBean functionalizationBean: synBean.getType2FuncEntities().get(entityType)){
                    functionalization = new HashMap<String, Object>();
                    functionalization.put("dataId", functionalizationBean.getDomainEntity().getId());
                    functionalization.put("Description", functionalizationBean.getDescription());
                    functionalization.put("Source", functionalizationBean.getSource());
                    functionalizationElements = new ArrayList<Map<String, Object>>();
                    for (SynthesisFunctionalizationElementBean sfeBean: functionalizationBean.getSynthesisFunctionalizationElements()) {
                        functionalizationElement = new HashMap<String, Object>();
                        functionalizationElement.put("DisplayName", sfeBean.getDisplayName());
                        functionalizationElement.put("Functions", sfeBean.getFunctionDisplayNames());
                        functionalizationElement.put("pubChemID", sfeBean.getDomain().getPubChemId());
                        functionalizationElement.put("pubChemLink", sfeBean.getPubChemLink());
                        functionalizationElement.put("pubChemDataSourceName", sfeBean.getDomain().getPubChemDatasourceName());
                    }
                }
            }
        }
        //Add SynthesisPurification
        /* TODO write */
        if(synBean.getSynthesisPurificationBeanList()!=null){

            Map<String,Object> purification;
            Map<String,Object> purificationPurity;
            List<Map<String,Object>> purificationPurityElements;
            for(String entityType:synBean.getSynPureTypes()){
                for(SynthesisPurificationBean purificationBean: synBean.getType2PurEntities().get(entityType)){
                    purification = new HashMap<String, Object>();
                    purification.put("dataId", purificationBean.getDomainEntity().getId());
                    purification.put("Description", purificationBean.getDescription());
                    purification.put("Source", purificationBean.getSource());
                    purification.put("Yield", purificationBean.getDomainEntity().getYield());
                    purification.put("Protocol", purificationBean.getDomainEntity().getProtocol());
                    for(SynthesisPurityBean purityBean : purificationBean.getPurityBeans()){
                        purificationPurity = new HashMap<String, Object>();
                        //TODO write
                        //loop through datum?


                    }
                }
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
