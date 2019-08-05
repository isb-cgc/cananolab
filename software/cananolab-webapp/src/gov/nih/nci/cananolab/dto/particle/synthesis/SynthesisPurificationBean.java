package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.common.Instrument;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurification;
import gov.nih.nci.cananolab.dto.common.PointOfContactBean;
import gov.nih.nci.cananolab.util.ClassUtils;

public class SynthesisPurificationBean {
    String type;
    SynthesisPurification domainChar = new SynthesisPurification();

    public String getType(){
        return this.type;
    }

    private SynthesisPurification domainEntity;
    private PointOfContactBean pocBean = new PointOfContactBean();
    private String description;
    private Instrument theInstrument = new Instrument();

    public SynthesisPurification getDomainEntity() {
        return domainEntity;
    }

    public SynthesisPurificationBean getDomainCopy(String createdBy, boolean copyData) {
        SynthesisPurificationBean copy = (SynthesisPurificationBean) ClassUtils
                .deepCopy(domainChar);
        resetDomainCopy(createdBy, copy, copyData);
        return copy;
    }

    public void resetDomainCopy(String createdBy, SynthesisPurificationBean copy,
                                boolean copyData) {
        //TODO write
    }

    public SynthesisPurificationBean(SynthesisPurification purification){
        //TODO write
        this.domainEntity=purification;
    }
}
