package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.common.PointOfContact;
import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalization;
import gov.nih.nci.cananolab.dto.particle.composition.BaseCompositionEntityBean;


public class SynthesisFunctionalizationBean  extends BaseCompositionEntityBean {
    private SynthesisFunctionalization domainEntity;
    private boolean withProperties = false;
    private PointOfContact source = new PointOfContact();

    public SynthesisFunctionalizationBean(SynthesisFunctionalization synthesisFunctionalization){
        this.domainEntity=synthesisFunctionalization;
        //TODO write
    }


    public PointOfContact getSource() {
        return source;
    }

    public void setSource(PointOfContact source) {
        this.source = source;
    }

    public SynthesisFunctionalization getDomainEntity() {
        return domainEntity;
    }

    public void setDomainEntity(SynthesisFunctionalization domainEntity) {
        this.domainEntity = domainEntity;
    }

    public boolean isWithProperties() {
        return withProperties;
    }

    public void setWithProperties(boolean withProperties) {
        this.withProperties = withProperties;
    }



    public SynthesisFunctionalizationBean (){}

}
