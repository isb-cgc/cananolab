package gov.nih.nci.cananolab.restful.sample;

import gov.nih.nci.cananolab.domain.common.Instrument;
import gov.nih.nci.cananolab.dto.common.ExperimentConfigBean;
import gov.nih.nci.cananolab.dto.common.PointOfContactBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialElementBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurificationBean;
import gov.nih.nci.cananolab.restful.core.InitSetup;
import gov.nih.nci.cananolab.service.common.LookupService;
import gov.nih.nci.cananolab.service.sample.SampleService;
import gov.nih.nci.cananolab.util.ClassUtils;
import gov.nih.nci.cananolab.util.StringUtils;
import java.util.ArrayList;
import java.util.List;
import java.util.SortedSet;
import javax.servlet.http.HttpServletRequest;

public class InitSynthesisSetup {

    public static InitSynthesisSetup getInstance() {
        return new InitSynthesisSetup();
    }

    public String getDetailPage(String synthesisMaterial) {
        //TODO write
        return "/caNanoLab/views/sample/composition/functionalizingEntity/SynthesisInfo.html";
    }





    public void setSynthesisMaterialDropdowns(HttpServletRequest request) throws Exception {
        InitSampleSetup.getInstance().setSharedDropdowns(request);

        InitSetup.getInstance().getDefaultAndOtherTypesByLookup(request,
                "materialTypes", "synthesis", "materialType",
                "otherType", true);

        InitSetup.getInstance().getDefaultAndOtherTypesByLookup(request,
                "pubchemDataSource", "pubchem", "data source",
                "otherDataSource", true);


        SortedSet<String> materialTypes = LookupService.getDefaultAndOtherLookupTypes("synthesis","materialType","otherType");
        List<String> sortedFormatted = new ArrayList<String>(materialTypes);

    }

    public void persistSynthesisMaterialDropdowns(HttpServletRequest request, SynthesisMaterialBean synthesisMaterialBean) throws Exception{
//        InitSetup.getInstance().persistLookup(request);
        InitSetup.getInstance().persistLookup(request, "synthesis", "materialType",
                "otherType", synthesisMaterialBean.getType());



    }


    public void setSynthesisFunctionalizationDropdowns(HttpServletRequest request) throws Exception {
        InitSampleSetup.getInstance().setSharedDropdowns(request);
    }

    public void persistSynthesisFunctionalizationDropdowns(HttpServletRequest request, SynthesisFunctionalizationBean synthesisFunctionalizationBean){
//TODO write
    }


    public void persistPurificationDropdowns(HttpServletRequest request, SynthesisPurificationBean synthesisPurificationBean){
//TODO write
    }

    public void persistSynthesisDropdowns(HttpServletRequest request, SynthesisBean synthesisBean) {
    }

    public void setSynthesisMaterialElementDropDown(HttpServletRequest request, SynthesisMaterialElementBean elementBean) throws Exception {
        InitSetup.getInstance().getDefaultAndOtherTypesByLookup(request,
                "valueUnit", "material", "value unit",
                "otherValueUnit", true);

        InitSetup.getInstance().getDefaultAndOtherTypesByLookup(request,
                "molecularFormulaTypes", "molecular formula", "type",
                "otherType", true);

        InitSetup.getInstance().getDefaultAndOtherTypesByLookup(request,
                "InherentFunctionType", "function", "type",
                "otherType", true);
    }

    public void persistSynthesisMaterialElementDropDown(HttpServletRequest request, SynthesisMaterialElementBean elementBean) throws Exception{
        InitSetup.getInstance().persistLookup(request,
                "material", "value unit",
                "otherValueUnit", elementBean.getDomainEntity().getValueUnit());

        InitSetup.getInstance().persistLookup(request,
                "molecular formula", "type",
                "otherType", elementBean.getDomainEntity().getMolecularFormulaType());


    }

    public void setSynthesisPurificationDropdowns(HttpServletRequest request, SynthesisPurificationBean elementBean) throws Exception {
        InitSetup.getInstance().persistLookup(request,
                "purity type", "purityType",
                "otherType", elementBean.getDomainEntity().getType());

        InitSetup.getInstance().getDefaultAndOtherTypesByLookup(request,
                "datumConditionValueTypes", "datum and condition", "valueType",
                "otherValueType", true);

        setExperimentConfigDropDowns(request);
    }

    public void setExperimentConfigDropDowns(HttpServletRequest request)
            throws Exception {
        // instrument manufacturers and techniques
        InitSetup.getInstance().getDefaultAndOtherTypesByLookup(request,
                "manufacturers", "instrument", "manufacturer",
                "otherManufacturer", true);

        InitSetup.getInstance().getDefaultAndOtherTypesByLookup(request,
                "techniqueTypes", "technique", "type", "otherType", true);
    }

    public void persistExperimentConfigDropdowns(HttpServletRequest request,
                                                 ExperimentConfigBean configBean) throws Exception {
        InitSetup.getInstance().persistLookup(request, "technique", "type",
                "otherType", configBean.getDomain().getTechnique().getType());
        for (Instrument instrument : configBean.getInstruments()) {
            InitSetup.getInstance().persistLookup(request,
                    configBean.getDomain().getTechnique().getType(),
                    "instrument", "otherInstrument", instrument.getType());
            InitSetup.getInstance().persistLookup(request, "instrument",
                    "manufacturer", "otherManufacturer",
                    instrument.getManufacturer());
        }
        setExperimentConfigDropDowns(request);
    }

    public void getInstrumentsForTechnique(HttpServletRequest request,
                                           String technique) throws Exception {
        InitSetup.getInstance().getDefaultAndOtherTypesByLookup(request,
                "techniqueInstruments", technique, "instrument",
                "otherInstrument", true);
    }

    public SortedSet<String> getDatumNamesByCharName(
            HttpServletRequest request, String charType, String charName,
            String assayType) throws Exception {

        SortedSet<String> allDatumNames = InitSetup.getInstance()
                .getDefaultAndOtherTypesByLookup(request, "charDatumNames",
                        charName, "datumName", "otherDatumName", true);
        // if assayType is empty, use charName to look up datums, as well as
        // look up all assay types and use assay type to look up datum
        if (StringUtils.isEmpty(assayType)) {
            SortedSet<String> assayTypes = InitSetup.getInstance()
                    .getDefaultAndOtherTypesByLookup(request, "charAssayTypes",
                            charName, "assayType", "otherAssayType", true);
            if (assayTypes != null && !assayTypes.isEmpty()) {
                for (String type : assayTypes) {
                    SortedSet<String> assayDatumNames = InitSetup.getInstance()
                            .getDefaultAndOtherTypesByLookup(request,
                                    "charDatumNames", type, "datumName",
                                    "otherDatumName", true);
                    allDatumNames.addAll(assayDatumNames);
                }
            }
        } else {
            allDatumNames.addAll(LookupService.getDefaultAndOtherLookupTypes(
                    assayType, "datumName", "otherDatumName"));
        }
        request.getSession().setAttribute("charDatumNames", allDatumNames);
        return allDatumNames;
    }



}
