package gov.nih.nci.cananolab.restful.view.edit;

import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalization;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationBean;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;

import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

public class SimpleSynthesisFunctionalizationBean {

    private Long id = 0L;
    private String sampleId="";
    private String dataId="";
    private SimpleSynFuncElementBean funcElementBean;
    private SimpleFileBean fileBean;
    private List<String> errors;
    private String description;
    private SynthesisFunctionalization domainEntity;
    private SynthesisFunctionalizationBean synthesisFunctionalizationBean;
    private Date createdDate;
    private String createdBy="";

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDataId() {
        return dataId;
    }

    public void setDataId(String dataId) {
        this.dataId = dataId;
    }

    public SynthesisFunctionalization getDomainEntity() {
        return domainEntity;
    }

    public void setDomainEntity(SynthesisFunctionalization domainEntity) {
        this.domainEntity = domainEntity;
    }

    public SynthesisFunctionalizationBean getSynthesisFunctionalizationBean() {
        return synthesisFunctionalizationBean;
    }

    public void setSynthesisFunctionalizationBean(SynthesisFunctionalizationBean synthesisFunctionalizationBean) {
        this.synthesisFunctionalizationBean = synthesisFunctionalizationBean;
    }

    public String getSampleId() {
        return sampleId;
    }

    public void setSampleId(String sampleId) {
        this.sampleId = sampleId;
    }

    public SimpleFileBean getFileBean() {
        return fileBean;
    }

    public void setFileBean(SimpleFileBean fileBean) {
        this.fileBean = fileBean;
    }

    public List<String> getErrors() {
        return errors;
    }

    public void setErrors(List<String> errors) {
        this.errors = errors;
    }

    public void transferSynthesisFunctionalizationToSimple(SynthesisFunctionalizationBean synthesisFunctionalizationBean, HttpServletRequest httpRequest, SpringSecurityAclService springSecurityAclService){

        System.out.println( "getDomainEntity: " + synthesisFunctionalizationBean.getDomainEntity().getClass().getName());
        System.out.println( "getDomainEntity: " + synthesisFunctionalizationBean.getDomainEntity().getDescription());
        System.out.println( "getDescription: " + synthesisFunctionalizationBean.getDescription());
        System.out.println( "getSource: " + synthesisFunctionalizationBean.getSource());

        System.out.println( " synthesisFunctionalizationBean.getSynthesisFunctionalizationElements().size(): " + synthesisFunctionalizationBean.getSynthesisFunctionalizationElements().size());
        System.out.println( " synthesisFunctionalizationBean.isWithProperties(): " + synthesisFunctionalizationBean.isWithProperties());

        System.out.println( "getType: " + synthesisFunctionalizationBean.getType());
        System.out.println( "getDescriptionDisplayName: " + synthesisFunctionalizationBean.getDescriptionDisplayName());
        System.out.println( "httpRequest getQueryString: " + httpRequest.getQueryString());
        System.out.println( "httpRequest getParameter(\"sampleId\"): " + httpRequest.getParameter ("sampleId"));
        System.out.println( "httpRequest getParameter(\"dataId\"): " + httpRequest.getParameter ("dataId"));

        setDescription( synthesisFunctionalizationBean.getDescription());
        setSampleId( httpRequest.getParameter ("sampleId"));
        setDataId(httpRequest.getParameter ("dataId"));
        setCreatedDate( synthesisFunctionalizationBean.getDomainEntity().getCreatedDate());
        setCreatedBy( synthesisFunctionalizationBean.getDomainEntity().getCreatedBy());

  /*
  Things in a synthesisFunctionalizationBean.getDomainEntity()
    private Long synthesisFunctionalizationPkId;
	private Synthesis synthesis;
	private Protocol protocol;
	private String description;
	private Date createdDate;
	private String createdBy;
	private Set<SynthesisFunctionalizationElement> synthesisFunctionalizationElements = new HashSet<SynthesisFunctionalizationElement>();
	private Set<File> files = new HashSet<File>();
 */
    }

}
