package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.common.PointOfContact;
import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalization;
import java.util.ArrayList;
import java.util.List;
import org.apache.log4j.Logger;


public class SynthesisFunctionalizationBean  extends BaseSynthesisEntityBean {
    Logger logger = Logger.getLogger("SynthesisFunctionalizationBean.class");
    private SynthesisFunctionalization domainEntity;
    private boolean withProperties = false;
    private PointOfContact source = new PointOfContact();



    List<SynthesisFunctionalizationElementBean> synthesisFunctionalizationElements = new ArrayList<SynthesisFunctionalizationElementBean>();

    public SynthesisFunctionalizationBean(SynthesisFunctionalization synthesisFunctionalization){
        this.domainEntity=synthesisFunctionalization;
        //TODO write
    }


    public SynthesisFunctionalizationBean (){}

    public SynthesisFunctionalization getDomainEntity() {
        return domainEntity;
    }

    public void setDomainEntity(SynthesisFunctionalization domainEntity) {
        this.domainEntity = domainEntity;
    }

    public PointOfContact getSource() {
        return source;
    }

    public void setSource(PointOfContact source) {
        this.source = source;
    }

    public boolean isWithProperties() {
        return withProperties;
    }

    public void setWithProperties(boolean withProperties) {
        this.withProperties = withProperties;
    }

    public void resetDomainCopy(String createdBy, SynthesisFunctionalization synthesisFunctionalization) {
        //todo write
    }

    public List<SynthesisFunctionalizationElementBean> getSynthesisFunctionalizationElements() {
        return synthesisFunctionalizationElements;
    }

    public void setSynthesisFunctionalizationElements(List<SynthesisFunctionalizationElementBean> synthesisFunctionalizationElements) {
        this.synthesisFunctionalizationElements = synthesisFunctionalizationElements;
    }
}
