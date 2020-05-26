package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.common.Instrument;
import gov.nih.nci.cananolab.domain.common.PurificationConfig;
import gov.nih.nci.cananolab.domain.common.Technique;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterialElement;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurification;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurity;
import gov.nih.nci.cananolab.dto.common.ProtocolBean;
import gov.nih.nci.cananolab.dto.common.PurificationConfigBean;

import gov.nih.nci.cananolab.util.ClassUtils;
import gov.nih.nci.cananolab.util.Constants;
import gov.nih.nci.cananolab.util.StringUtils;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashSet;
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
    private List<SynthesisPurityBean> purityBeans = new ArrayList<SynthesisPurityBean>();
    private List<PurificationConfigBean> purificationConfigs = new ArrayList<>();
    private ProtocolBean protocolBean = new ProtocolBean();


    public SynthesisPurificationBean(SynthesisPurification purification){
        //TODO write
        this.domain=purification;
        this.displayName = purification.getMethodName();
        this.type = purification.getType();
        this.description = purification.getDesignMethodDescription();
        this.protocolBean = new ProtocolBean(purification.getProtocol());

        for(SynthesisPurity purity:purification.getPurities()){
//            SynthesisPurityBean purityBean = new SynthesisPurityBean(purity);
            SynthesisPurityBean purityBean = new SynthesisPurityBean(purity);
            purityBean.getDomain().setSynthesisPurification(purification);
            purityBeans.add(purityBean);
        }
        for(PurificationConfig config: purification.getPurificationConfigs()){
            PurificationConfigBean pureBean = new PurificationConfigBean(config);
            purificationConfigs.add(pureBean);
        }

    }

    public SynthesisPurificationBean() {

    }

    public ProtocolBean getProtocolBean() {
        return protocolBean;
    }

    public void setProtocolBean(ProtocolBean protocolBean) {
        this.protocolBean = protocolBean;
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


    public void setUpDomainEntity(String username) throws Exception{
        //todo write
        logger.debug("in SynthesisPurificationBean.setUpDomainEntity");

        if(domain.getId() !=null && domain.getId()==0){
            domain.setId(null);
        }

        if(domain.getId()==null){
            logger.debug("call domain.setCreatedBy "+ domain);
            domain.setCreatedBy(username);
            domain.setCreatedDate(Calendar.getInstance().getTime());
        } else {
            // updated created_by if created_by contains copy, but keep the original
            // created_date
            if(domain.getCreatedBy()!=null&&domain.getCreatedBy().contains(
                    Constants.AUTO_COPY_ANNOTATION_PREFIX)){
                domain.setCreatedBy(username);
            }
        }

        // clear the old domain material elements in the domain
        if(domain.getPurities() != null){
            domain.getPurities().clear();
        } else {
            domain.setPurities(new HashSet<SynthesisPurity>());
        }

        //reset the domain material elements to what is in the bean
        for(SynthesisPurityBean synthesisPurityBean:purityBeans){
            String internalUriPath = Constants.FOLDER_PARTICLE
                    + '/'
                    + "synthesis"
                    + '/'
                    + StringUtils.getOneWordLowerCaseFirstLetter(this.displayName);
            synthesisPurityBean.setupDomain(internalUriPath,username);
            domain.addPurity(synthesisPurityBean.getDomain());
        }

    }
}
