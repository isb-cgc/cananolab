package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.common.PointOfContact;
import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalization;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterialElement;
import gov.nih.nci.cananolab.dto.particle.composition.BaseCompositionEntityBean;
import java.util.ArrayList;
import java.util.List;


public class SynthesisFunctionalizationBean  extends BaseCompositionEntityBean {

    private List<SynthesisPurificationBean> purificationBeans = new ArrayList<SynthesisPurificationBean>();

    public List<SynthesisPurificationBean> getMethods(){
return purificationBeans;
    }

    private PointOfContact source = new PointOfContact();
    private List<SynthesisMaterialElement> synthesisMaterialElementList = new ArrayList<SynthesisMaterialElement>();

    public List<SynthesisPurificationBean> getPurificationBeans() {
        return purificationBeans;
    }

    public void setPurificationBeans(List<SynthesisPurificationBean> purificationBeans) {
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

    public SynthesisFunctionalizationBean(SynthesisFunctionalization functionalization){
        //TODO write
         }
}
