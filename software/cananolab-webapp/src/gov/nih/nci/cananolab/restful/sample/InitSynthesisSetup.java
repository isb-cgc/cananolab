package gov.nih.nci.cananolab.restful.sample;

import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialElementBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurificationBean;
import gov.nih.nci.cananolab.restful.core.InitSetup;
import gov.nih.nci.cananolab.service.common.LookupService;
import gov.nih.nci.cananolab.util.ClassUtils;
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

    }

    public void setPurificationDropdowns(HttpServletRequest request) throws Exception {
        InitSampleSetup.getInstance().setSharedDropdowns(request);
    }

    public void persistPurificationDropdowns(HttpServletRequest request, SynthesisPurificationBean synthesisPurificationBean){

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
}
