package gov.nih.nci.cananolab.dto.particle.synthesis;

import java.util.ArrayList;
import java.util.List;

public class SynthesisFunctionalizationBean  extends BaseCompositionEntityBean {

    List<SynthesisFuncPurificationBean> purificationBeans = new ArrayList<SynthesisFuncPurificationBean>();

    public List<SynthesisFuncPurificationBean> getMethods(){
return purificationBeans;
    }

    private PointOfContact source = new PointOfContact();
    private List<SynthesisMaterialElement> synthesisMaterialElementList = new List<SynthesisMaterialElement>();

    public List<SynthesisFuncPurificationBean> getPurificationBeans() {
        return purificationBeans;
    }

    public void setPurificationBeans(List<SynthesisFuncPurificationBean> purificationBeans) {
        this.purificationBeans = purificationBeans;
    }

    public PointOfContact getSource() {
        return source;
    }

    public void setSource(PointOfContact source) {
        this.source = source;
    }

    public List<SynthesisMaterialElement> getSynthesisMaterialElementList() {
        return synthesisMaterialElementList;
    }

    public void setSynthesisMaterialElementList(List<SynthesisMaterialElement> synthesisMaterialElementList) {
        this.synthesisMaterialElementList = synthesisMaterialElementList;
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

    private SynthesisFunctionalization domainEntity;

    private boolean withProperties = false;

    public SynthesisFunctionalizationBean (){}

    public SynthesisFunctionalizationBean(SynthesisFunctionalization){
        //TODO write
         }
}
