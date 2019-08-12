package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.particle.SynthesisMaterial;
import java.util.List;

public class SynthesisMaterialBean {
    //TODO write

    private SynthesisMaterial domainEntity;


    public SynthesisMaterialBean(){

    }
    public SynthesisMaterialBean(SynthesisMaterial materials){
        //TODO write
        domainEntity = materials;
    }

    public static List<String> getSynthesisMaterialElementPurificationTypes() {
        //iterate through all the material elements and find out all the purification types
        return null;
    }

    public SynthesisMaterial getDomainEntity(){
        return domainEntity;
    }

    public String getType() {
        return null;
    }

    public void resetDomainCopy(String createdBy, SynthesisMaterial synthesisMaterial) {
    }
}
