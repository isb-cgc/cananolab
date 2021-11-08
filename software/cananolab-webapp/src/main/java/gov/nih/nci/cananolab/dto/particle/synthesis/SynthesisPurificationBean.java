package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.common.Instrument;
import gov.nih.nci.cananolab.domain.common.PurificationConfig;
import gov.nih.nci.cananolab.domain.common.PurityDatumCondition;
import gov.nih.nci.cananolab.domain.common.Technique;
import gov.nih.nci.cananolab.domain.particle.SfeInherentFunction;
import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalizationElement;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterialElement;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurification;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurity;
import gov.nih.nci.cananolab.dto.common.ColumnHeader;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.common.ProtocolBean;
import gov.nih.nci.cananolab.dto.common.PurificationConfigBean;

import gov.nih.nci.cananolab.util.ClassUtils;
import gov.nih.nci.cananolab.util.Constants;
import gov.nih.nci.cananolab.util.StringUtils;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.Date;
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
//    private List<ColumnHeader> columnHeaders = new ArrayList<ColumnHeader>();
    private Date createdDate = new Date();
    private String createdBy = new String();
    private List<FileBean> files = new ArrayList<FileBean>() ;


    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }


    public List<FileBean> getFiles() {
        return files;
    }

    public void setFiles(List<FileBean> files) {
        this.files = files;
    }

    public void addFile(FileBean file){
        this.files.add(file);
    }

    public void removeFile(FileBean file){
        this.files.remove(file);
    }

    public SynthesisPurificationBean(SynthesisPurification purification){

        this.domain=purification;
        this.domainId=purification.getId();
        this.displayName = purification.getDisplayName();
        this.type = purification.getType();
        this.description = purification.getDesignMethodDescription();
        this.createdBy = purification.getCreatedBy();
        this.createdDate = purification.getCreatedDate();

        for(File file:purification.getFiles()){
            FileBean fileBean = new FileBean(file);
            this.files.add(fileBean);
        }

        if(purification.getProtocol()!=null) {
            this.protocolBean = new ProtocolBean(purification.getProtocol());
        }

        for(SynthesisPurity purity:purification.getPurities()){
//            SynthesisPurityBean purityBean = new SynthesisPurityBean(purity);
            if(purity.getId()!=null) {
                SynthesisPurityBean purityBean = new SynthesisPurityBean(purity);
                purityBean.getDomain().setSynthesisPurification(purification);
//                if (columnHeaders.size() < purityBean.getColumnHeaders().size()) {
//                    columnHeaders = purityBean.getColumnHeaders();
//                }
                purityBeans.add(purityBean);
            }
        }

        for(SynthesisPurity purity:purification.getPurities()){
            if(purity.getId()==null){
//                SynthesisPurityBean purityBean = new SynthesisPurityBean(purity, columnHeaders);
                SynthesisPurityBean purityBean = new SynthesisPurityBean(purity);
                purityBeans.add(purityBean);
            }
        }

//        for(SynthesisPurityBean purityBean: purityBeans){
//            purityBean.setColumnHeaders(columnHeaders);
//        }
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
        this.domainId =domain.getId();
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

        synthesisPurification.setCreatedBy( createdBy + ":"
                + Constants.AUTO_COPY_ANNOTATION_PREFIX +":"+ synthesisPurification.getId());
        synthesisPurification.setId(null);
        synthesisPurification.setSynthesisId(null);

        Collection<SynthesisPurity> oldPurities = synthesisPurification.getPurities();
        if( oldPurities == null || oldPurities.isEmpty() ) {
            synthesisPurification.setPurities( null );
        } else {
            synthesisPurification.setPurities(new HashSet<SynthesisPurity>( oldPurities ) );
            for(SynthesisPurity purity: synthesisPurification.getPurities()){
                SynthesisPurityBean purityBean = new SynthesisPurityBean(purity);
                purityBean.resetDomainCopy(createdBy, purity, true);

            }
        }
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
