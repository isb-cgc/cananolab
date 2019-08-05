package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.particle.SynthesisMaterial;

public class SynthesisMaterialsBean {
    //TODO write

    private SynthesisMaterial domainEntity;
    public SynthesisMaterialsBean(SynthesisMaterial materials){
        //TODO write
        domainEntity = materials;
    }

    public SynthesisMaterial getDomainEntity(){
        return domainEntity;
    }
}
