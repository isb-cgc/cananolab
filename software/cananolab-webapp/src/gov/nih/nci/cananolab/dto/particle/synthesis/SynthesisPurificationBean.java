package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.common.Instrument;
import gov.nih.nci.cananolab.domain.common.PurificationConfig;
import gov.nih.nci.cananolab.domain.common.Technique;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurification;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurity;
import gov.nih.nci.cananolab.dto.common.PurificationConfigBean;
import gov.nih.nci.cananolab.dto.common.PurityBean;
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
//    private List<SynthesisPurityBean> synthesisPurityBeans = new ArrayList<SynthesisPurityBean>();
    private List<PurityBean> purityBeans = new ArrayList<PurityBean>();
    private List<PurificationConfigBean> purificationConfigs = new ArrayList<>();


    public SynthesisPurificationBean(SynthesisPurification purification){
        //TODO write
        this.domain=purification;
        this.displayName = purification.getMethodName();
        this.type = purification.getType();
        this.description = purification.getDesignMethodDescription();

        for(SynthesisPurity purity:purification.getPurities()){
//            SynthesisPurityBean purityBean = new SynthesisPurityBean(purity);
            PurityBean purityBean = new PurityBean(purity);
            purityBeans.add(purityBean);
        }
        for(PurificationConfig config: purification.getPurificationConfigs()){
            PurificationConfigBean pureBean = new PurificationConfigBean(config);
            purificationConfigs.add(pureBean);
        }

    }

    public SynthesisPurificationBean() {

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

    public List<PurityBean> getPurityBeans() {
        return purityBeans;
    }

    public void setPurityBeans(List<PurityBean> purityBeans) {
        this.purityBeans = purityBeans;
    }

    public List<PurificationConfigBean> getPurificationConfigs(){return purificationConfigs;}

    public void setPurificationConfigs(List<PurificationConfigBean> purificationConfigs){this.purificationConfigs= purificationConfigs;}


}
