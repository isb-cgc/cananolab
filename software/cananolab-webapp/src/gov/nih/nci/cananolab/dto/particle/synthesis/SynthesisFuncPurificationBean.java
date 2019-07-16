package gov.nih.nci.cananolab.dto.particle.synthesis;

public class SynthesisFuncPurificationBean {
    String type;

    public String getType(){
        return this.type;
    }

    private SynthesisFuncPurification purification;
    private PointOfContactBean pocBean = new PointOfContactBean();
    private String description;
    private Instrument theInstrument = new Instrument();

    public SynthesisFuncPurification getPurification() {
        return purification;
    }

    public SynthesisFuncPurificationBean getDomainCopy(String createdBy, boolean copyData) {
        SynthesisFuncPurificationBean copy = (SynthesisFuncPurificationBean) ClassUtils
                .deepCopy(domainChar);
        resetDomainCopy(createdBy, copy, copyData);
        return copy;
    }

    public void resetDomainCopy(String createdBy, SynthesisFuncPurificationBean copy,
                                boolean copyData) {
        //TODO write
    }
}
