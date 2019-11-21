package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.common.Instrument;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurification;
import gov.nih.nci.cananolab.dto.common.PointOfContactBean;
import gov.nih.nci.cananolab.util.ClassUtils;
import java.util.ArrayList;
import java.util.List;

public class SynthesisPurificationBean extends BaseSynthesisEntityBean {
//    private String type;
    private SynthesisPurification domainChar = new SynthesisPurification();
    private SynthesisPurification domainEntity;
//    private PointOfContactBean source = new PointOfContactBean();
    private Instrument theInstrument = new Instrument();
    private List<SynthesisPurityBean> purityBeans = new ArrayList<SynthesisPurityBean>();

    public SynthesisPurificationBean(SynthesisPurification purification){
        //TODO write
        this.domainEntity=purification;
    }

//
//    public String getType(){
//        return this.type;
//    }

    public String getDescription(){
        return domainEntity.getDesignMethodDescription();
    }

    public String getSource(){
        return domainEntity.getCreatedBy();
    }

    public SynthesisPurification getDomainChar() {
        return domainChar;
    }

    public void setDomainChar(SynthesisPurification domainChar) {
        this.domainChar = domainChar;
    }

    public SynthesisPurification getDomainCopy(String createdBy, boolean copyData) {
        SynthesisPurification copy = (SynthesisPurification) ClassUtils
                .deepCopy(domainChar);
        resetDomainCopy(createdBy, copy, copyData);
        return copy;
    }

    public void resetDomainCopy(String createdBy, SynthesisPurification copy,
                                boolean copyData) {
        //TODO write
    }

    public SynthesisPurification getDomainEntity() {
        return domainEntity;
    }

    public void setDomainEntity(SynthesisPurification domainEntity) {
        this.domainEntity = domainEntity;
    }

    public List<SynthesisPurityBean> getPurityBeans() {
        return purityBeans;
    }

    public void setPurityBeans(List<SynthesisPurityBean> purityBeans) {
        this.purityBeans = purityBeans;
    }

//    public PointOfContactBean getSource() {
//        return source;
//    }
//
//    public void setSource(PointOfContactBean source) {
//        this.source = source;
//    }

    public Instrument getTheInstrument() {
        return theInstrument;
    }

    public void setTheInstrument(Instrument theInstrument) {
        this.theInstrument = theInstrument;
    }

    public void resetDomainCopy(String createdBy, SynthesisPurification synthesisPurification) {
        //todo write
    }
}
