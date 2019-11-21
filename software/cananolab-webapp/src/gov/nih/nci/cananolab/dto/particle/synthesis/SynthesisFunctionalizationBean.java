package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.common.PointOfContact;
import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalization;
import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalizationElement;
import gov.nih.nci.cananolab.util.ClassUtils;
import gov.nih.nci.cananolab.util.Comparators;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import org.apache.log4j.Logger;


public class SynthesisFunctionalizationBean  extends BaseSynthesisEntityBean {
    Logger logger = Logger.getLogger("SynthesisFunctionalizationBean.class");
    private SynthesisFunctionalization domainEntity;
    private boolean withProperties = false;
//    private PointOfContact source = new PointOfContact();

    List<SynthesisFunctionalizationElementBean> synthesisFunctionalizationElements = new ArrayList<SynthesisFunctionalizationElementBean>();

    public SynthesisFunctionalizationBean(SynthesisFunctionalization synthesisFunctionalization){
        this.domainEntity=synthesisFunctionalization;
        if(synthesisFunctionalization.getSynthesisFunctionalizationElements()!=null){
            for(SynthesisFunctionalizationElement synthesisFunctionalizationElement: synthesisFunctionalization.getSynthesisFunctionalizationElements()){
                synthesisFunctionalizationElements.add(new SynthesisFunctionalizationElementBean(synthesisFunctionalizationElement));
            }
        }
        Collections.sort(synthesisFunctionalizationElements, new Comparators.SFEBeanTypeComparator());
    }



    public SynthesisFunctionalization getDomainCopy(String createdBy) {

        SynthesisFunctionalization copy = (SynthesisFunctionalization) ClassUtils.deepCopy(this
                .getDomainEntity());
        resetDomainCopy(createdBy, copy);
        return copy;

    }

    public SynthesisFunctionalization getDomainEntity() {
        return domainEntity;
    }

    public void setDomainEntity(SynthesisFunctionalization domainEntity) {
        this.domainEntity = domainEntity;
    }

//    public PointOfContact getSource() {
//        return source;
//    }

    public String getSource(){
        return domainEntity.getCreatedBy();
    }
//    public void setSource(PointOfContact source) {
//        this.source = source;
//    }

    public boolean isWithProperties() {
        return withProperties;
    }

    public void setWithProperties(boolean withProperties) {
        this.withProperties = withProperties;
    }

    public void resetDomainCopy(String createdBy, SynthesisFunctionalization synthesisFunctionalization) {
        //todo write
    }

    public String getDescription(){
        return domainEntity.getDescription();
    }

    public List<SynthesisFunctionalizationElementBean> getSynthesisFunctionalizationElements() {
        return synthesisFunctionalizationElements;
    }

    public void setSynthesisFunctionalizationElements(List<SynthesisFunctionalizationElementBean> synthesisFunctionalizationElements) {
        this.synthesisFunctionalizationElements = synthesisFunctionalizationElements;
    }
}
