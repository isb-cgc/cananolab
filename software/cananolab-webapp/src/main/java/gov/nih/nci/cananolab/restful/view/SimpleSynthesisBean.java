package gov.nih.nci.cananolab.restful.view;

import gov.nih.nci.cananolab.domain.common.PurityColumnHeader;
import gov.nih.nci.cananolab.domain.particle.SmeInherentFunction;
import gov.nih.nci.cananolab.dto.common.ColumnHeader;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.common.PurificationConfigBean;
import gov.nih.nci.cananolab.dto.common.PurityRow;
import gov.nih.nci.cananolab.dto.common.table.PurityTableCell;
import gov.nih.nci.cananolab.dto.particle.synthesis.SmeInherentFunctionBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationElementBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialElementBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurificationBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurityBean;
import gov.nih.nci.cananolab.restful.view.edit.SimplePurityBean;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.apache.log4j.Logger;

public class SimpleSynthesisBean {
//    Long id;
    List<String> synthesisSections = new ArrayList<String>();
    List synthesisFunctionalization;
    List synthesisPurification;
//    MultiMap synthesisMaterials;
    List synthesisMaterials;
    Long sampleId;

    List<String> errors;
    private Logger logger = Logger.getLogger(SimpleSynthesisBean.class);
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

    public List<String> getSynthesisSections() {
        return synthesisSections;
    }

    public void transferSynthesisForSummaryView( SynthesisBean synBean) {

        sampleId = synBean.getDomain().getSample().getId();
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
                            materialElement.put("dataId", elementBean.getDomainEntity().getId());
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
                            List<Map<String, Object>> meFileList;
                            if (elementBean.getFiles() !=null){
                                List<FileBean> fileBeans = elementBean.getFiles();
                                meFileList = addFiles(fileBeans);
                                materialElement.put("Files", meFileList);
                            }
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
        /* TODO write  */
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
                        functionalizationElement.put("dataId", sfeBean.getDomain().getId());
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
                        functionalizationElement.put("activationEffect", sfeBean.getDomain().getActivationEffect());
                        functionalizationElement.put("activationMethod", sfeBean.getDomain().getActivationMethod());

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
//            for(String entityType:synBean.getSynPureTypes()){
            Integer integer = 1;

                for(SynthesisPurificationBean purificationBean:synBean.getSynthesisPurificationBeanList()){
                    purification = new HashMap<String, Object>();
//                for(SynthesisPurificationBean purificationBean: synBean.getType2PurEntities().get(entityType)){
                    purification.put("displayName", purificationBean.getDisplayName());
                    purification.put("dataId", purificationBean.getDomainEntity().getId());
                    purification.put("Type", purificationBean.getType());
                    purification.put("Description", purificationBean.getDescription());
                    purification.put("Source", purificationBean.getSource());
                    purification.put("Date", purificationBean.getDomainEntity().getCreatedDate());
                    purification.put("Yield", purificationBean.getDomainEntity().getYield());
                    if(purificationBean.getDomainEntity().getProtocol() != null) {
                        purification.put("Protocol", purificationBean.getDomainEntity().getProtocol().getName());
                    }
                    purification.put("Analysis", purificationBean.getDomainEntity().getAnalysis());
                    if(purificationBean.getDomainEntity().getPurificationConfigs() != null){
                        List<Map<String, Object>> techniques = transferPurificationConfigurations(purificationBean);
                        purification.put("Techniques", techniques);
                    }
//                    purification.put("Technique", purificationBean.getDomainEntity().getPurificationConfigs());
                    purificationPurityElements = new ArrayList<Map<String,Object>>();
                    List<Object> testList = transferPurificationResults(purificationBean);
                    for(SynthesisPurityBean purityBean : purificationBean.getPurityBeans()){
                        purificationPurity = new HashMap<String, Object>();

//                        Map<String, List<Object>> oneCharResult = new HashMap<String, List<Object>>();
                        purificationPurity.put("dataId", purityBean.getDomain().getId());
//                        List<ColumnHeader>  colHeaders = purityBean.getColumnHeaders();
                        List<PurityColumnHeader>  colHeaders = purityBean.getPurityColumnHeaders();
                        purificationPurity.put("Column Headers", colHeaders);

                        List<Object> dataCondition = transferPurityResultsDataAndCondition(purityBean);

                        if (dataCondition != null && dataCondition.size() > 0){
//                            oneCharResult.put("Data and Conditions", dataCondition);

                            purificationPurity.put("Data and Conditions",dataCondition);}
                        List<Object> purityResults = transferPurityFindings(purityBean);
                        if(purityResults != null && purityResults.size()>0){
                            purificationPurity.put("Purification Findings", purityResults);
                        }

                        if (purityBean.getFiles()!=null){
                            fileList=addFiles(purityBean.getFiles());
                            purificationPurity.put("Files", fileList);
                        }
                        purificationPurityElements.add(purificationPurity);
                    }
                    purification.put("purificationElements", purificationPurityElements);

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

    protected List<Object> transferPurificationResults( SynthesisPurificationBean purificationBean) {

        List<Object> charResults = new ArrayList<Object>();

        List<SynthesisPurityBean> purities = purificationBean.getPurityBeans();


        for (SynthesisPurityBean purityBean  : purities) {

            Map<String, List<Object>> oneCharResult = new HashMap<String, List<Object>>();

            List<Object> dataCondition = transferPurityResultsDataAndCondition(purityBean);
            if (dataCondition != null && dataCondition.size() > 0)
                oneCharResult.put("Data and Conditions", dataCondition);

            List<Object> purityFindings = transferPurityFindings(purityBean);
            if (purityFindings != null && purityFindings.size() > 0)
                oneCharResult.put("Purity Findings", purityFindings);

            List<Object> files = transferPurityResultsFiles(purityBean);
            if (files != null && files.size() > 0)
                oneCharResult.put("Files", files);

            charResults.add(oneCharResult);
        }

        return charResults;
//        charBeanMap.put("Characterization Results", charResults);
//        SimpleCharacterizationUnitBean aUnit = new SimpleCharacterizationUnitBean("Characterization Results", charResults);
//        charBeanUnits.add(aUnit);
    }

    protected List transferPurityFindings(SynthesisPurityBean purityBean){
        SimplePurityBean simplePurityBean = new SimplePurityBean();
        simplePurityBean.transferFromPurityBean(purityBean, sampleId.toString());
        return simplePurityBean.getRows();
    }

    protected List transferPurityResultsDataAndCondition(SynthesisPurityBean purityBean) {

        logger.debug("Data and Conditions:");
        List<SimpleCharacterizationUnitBean> rowsOfTable = new ArrayList<SimpleCharacterizationUnitBean>();

        List<PurityRow> rows = purityBean.getRows();

        if (rows == null || rows.size() == 0)
            return rowsOfTable;

//        List<ColumnHeader>  colHeaders = purityBean.getColumnHeaders();
        List<PurityColumnHeader>  colHeaders = purityBean.getPurityColumnHeaders();
        int colSize = colHeaders.size();

        List<String> rowVals = new ArrayList<String>();
//        for (ColumnHeader colHeader : colHeaders) {
        for (PurityColumnHeader colHeader : colHeaders) {
//            String colTitle = colHeader.getDisplayName();
            String colTitle = colHeader.getName();
            logger.debug("==Header: " + colTitle);
            rowVals.add(colTitle);
        }

        rowsOfTable.add(new SimpleCharacterizationUnitBean("colTitles", rowVals));

        for (PurityRow aRow : rows) {
            rowVals = new ArrayList<String>();
            List<PurityTableCell> cells = aRow.getCells();
            for (PurityTableCell cell : cells) {
                rowVals.add(cell.getValue());
            }

            if (rowVals.size() == colSize)
                rowsOfTable.add(new SimpleCharacterizationUnitBean("colValues", rowVals));
            else
                logger.error("Size of Data and Conditions column values doesn't match column header size.");
        }

        return rowsOfTable;
    }

    protected List<Object> transferPurityResultsFiles (SynthesisPurityBean purityBean) {

        List<Object> files = new ArrayList<Object>();
        List<FileBean> fileBeans = purityBean.getFiles();

        if (fileBeans == null || fileBeans.size() ==0)
            return files;

        logger.debug("Files: ");

        for (FileBean fileBean : fileBeans) {

            Map<String, Object> aFile = new HashMap<String, Object>();

            aFile.put("fileId", fileBean.getDomainFile().getId());
            if (fileBean.getDomainFile().getUriExternal()) {
                logger.debug("uriExternal: " + fileBean.getDomainFile().getId());
                //aFile.put("fileId", fileBean.getDomainFile().getId());
                aFile.put("uri", fileBean.getDomainFile().getUri());
            } else if (fileBean.isImage()){
                logger.debug("Is image: " + fileBean.getDomainFile().getTitle());
                aFile.put("imageTitle", fileBean.getDomainFile().getTitle());
            } else {
                logger.debug("Have download link here");
                aFile.put("title", fileBean.getDomainFile().getTitle());
            }

            if (fileBean.getKeywordsStr() != null && fileBean.getKeywordsStr().length() > 0) {
                logger.debug("keyword displayname: " + fileBean.getKeywordsDisplayName());
                aFile.put("keywordsString", fileBean.getKeywordsDisplayName());
            }


            if (fileBean.getDomainFile().getDescription() != null && fileBean.getDomainFile().getDescription().length() > 0) {
                logger.debug("File description: " + fileBean.getDescription());
                aFile.put("description", fileBean.getDescription());
            }

            files.add(aFile);
        }

        return files;
    }

    protected List<Map<String, Object>> transferPurificationConfigurations( SynthesisPurificationBean pureBean) {
//TODO reorganize.  Is not connecting various elements of techique and instrument
//        Technique has a description and an array of instruments
//        Instruments have a name, type and manufacturer




        logger.debug("Experiment Configurations size: " + pureBean.getPurificationConfigs().size());
        List<PurificationConfigBean> expConfigBeans = pureBean.getPurificationConfigs();
        List<Map<String,Object>> techiqueList = new ArrayList<Map<String, Object>>();
        for (PurificationConfigBean configBean: expConfigBeans) {
            Map<String, Object> techniqueMap = new HashMap<String, Object>();
            //put technique name
            String techDisplayName = (configBean.getTechniqueDisplayName() == null) ? "" : configBean.getTechniqueDisplayName();
            techniqueMap.put("Technique", techDisplayName);
            techniqueMap.put("dataId", configBean.getDomain().getPurificationConfigPkId());
            //put config description
            String desc = (configBean.getDomain().getDescription() == null) ? "" : configBean.getDomain().getDescription();
            techniqueMap.put("Description", desc);
            //put array of instruments
            List<String> instrumentNames = new ArrayList<String>();
            if(configBean.getInstrumentDisplayNames()!=null){
            for (String instrumentDisplayName : configBean.getInstrumentDisplayNames()) {
                instrumentNames.add(instrumentDisplayName);
            }}
            techniqueMap.put("Instruments", instrumentNames);
            techiqueList.add(techniqueMap);
        }
        return techiqueList;

    }
}
