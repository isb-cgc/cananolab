package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.common.Instrument;
import gov.nih.nci.cananolab.domain.common.PurificationConfig;
import gov.nih.nci.cananolab.domain.common.Technique;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurification;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurity;
import gov.nih.nci.cananolab.dto.common.PurificationConfigBean;
import gov.nih.nci.cananolab.util.ClassUtils;
import java.util.ArrayList;
import java.util.List;
import org.springframework.security.access.method.P;

public class SynthesisPurificationBean extends BaseSynthesisEntityBean {

    /*From BaseSynthesisEntityBean
        protected String description;
        protected String type, displayName;
        protected List<FileBean> files = new ArrayList<FileBean>();
     */
//purification_config
   // Technique
    //-- Instruments

    private SynthesisPurification domain;
    private List<SynthesisPurityBean> purityBeans = new ArrayList<SynthesisPurityBean>();
    private List<PurificationConfigBean> purificationConfigs = new ArrayList<>();


    public SynthesisPurificationBean(SynthesisPurification purification){
        //TODO write
        this.domain=purification;
        for(SynthesisPurity purity:purification.getPurities()){
            SynthesisPurityBean purityBean = new SynthesisPurityBean(purity);
            purityBeans.add(purityBean);
        }
        for(PurificationConfig config: purification.getPurificationConfigs()){
            PurificationConfigBean pureBean = new PurificationConfigBean(config);
            purificationConfigs.add(pureBean);
        }

    }

    public String getSource(){
        return domain.getCreatedBy();
    }

    public SynthesisPurification getDomainEntity() {
        return domain;
    }

    public void setDomainEntity(SynthesisPurification domain) {
        this.domain = domain;
    }

    public SynthesisPurification getDomainCopy(String createdBy, boolean copyData) {
        SynthesisPurification copy = (SynthesisPurification) ClassUtils
                .deepCopy(domain);
        resetDomainCopy(createdBy, copy, copyData);
        return copy;
    }

    public void resetDomainCopy(String createdBy, SynthesisPurification copy,
                                boolean copyData) {
        //TODO write
    }

    public void resetDomainCopy(String createdBy, SynthesisPurification synthesisPurification) {
        //todo write
    }

    public List<SynthesisPurityBean> getPurityBeans() {
        return purityBeans;
    }

    public void setPurityBeans(List<SynthesisPurityBean> purityBeans) {
        this.purityBeans = purityBeans;
    }

    public List<PurificationConfigBean> getPurificationConfigs(){return purificationConfigs;}

    public void setPurificationConfigs(List<PurificationConfigBean> purificationConfigs){this.purificationConfigs= purificationConfigs;}


}
