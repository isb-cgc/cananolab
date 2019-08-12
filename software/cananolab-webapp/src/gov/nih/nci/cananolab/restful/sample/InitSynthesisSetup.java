package gov.nih.nci.cananolab.restful.sample;

import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurificationBean;
import gov.nih.nci.cananolab.restful.core.InitSetup;
import javax.servlet.http.HttpServletRequest;

public class InitSynthesisSetup {

    public static InitSynthesisSetup getInstance() {
        return new InitSynthesisSetup();
    }

//TODO write



    public void setSynthesisMaterialDropdowns(HttpServletRequest request) throws Exception {
        InitSampleSetup.getInstance().setSharedDropdowns(request);
        InitSetup.getInstance().getDefaultAndOtherTypesByReflection(request, "defaultSynMaterialTypes",
                "defaultSynthesisMaterial","gov.nih.nci.cananolab.domain.particle.SynthesisMaterial",
                "gov.nih.nci.cananolab.domain.synthesis.OtherSynthesisMaterial",true);


    }

    public void persistSynthesisMaterialDropdowns(HttpServletRequest request, SynthesisMaterialBean synthesisMaterialBean){}


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
}
