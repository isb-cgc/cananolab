package gov.nih.nci.cananolab.dto.particle.synthesis;

//import com.sun.xml.internal.ws.api.WSFeatureList;
import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.particle.SmeInherentFunction;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterial;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterialElement;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.common.ProtocolBean;
import gov.nih.nci.cananolab.util.ClassUtils;
import gov.nih.nci.cananolab.util.Comparators;
import gov.nih.nci.cananolab.util.Constants;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;

public class SynthesisMaterialBean extends BaseSynthesisEntityBean {
    //TODO write

    private SynthesisMaterial domainEntity;

    private List<SynthesisMaterialElementBean> synthesisMaterialElements = new ArrayList<SynthesisMaterialElementBean>();
    private ProtocolBean protocolBean = new ProtocolBean();





//    private String type;

    public SynthesisMaterialBean(){

    }

    public SynthesisMaterialBean(SynthesisMaterial material){

        domainEntity = material;
        if (material.getSynthesisMaterialElements() != null) {
            for(SynthesisMaterialElement synthesisMaterialElement : material.getSynthesisMaterialElements()){
                synthesisMaterialElements.add(new SynthesisMaterialElementBean(synthesisMaterialElement));
            }
        }
        Collections.sort(synthesisMaterialElements, new Comparators.SynthesisMaterialElementTypeDataComparator());
        if (material.getProtocol() != null) {
            protocolBean = new ProtocolBean(material.getProtocol());
        }
        this.setType("Synthesis");
        this.setDescription(material.getDescription());
        if(material.getFileCollection()!=null && material.getFileCollection().size()>0){
            for(File file:material.getFileCollection()){
                files.add(new FileBean(file));
            }
        }

    }

    public Long getId(){
        return this.domainEntity.getId();
    }

    public void setSynthesis(SynthesisBean synthesisBean){
        this.domainEntity.setSynthesis(synthesisBean.getDomain());
    }

//    public void setSynthesisId(Long id) {this.domainEntity.setSynthesisId(id);}

    public SynthesisMaterial getDomainEntity(){
        return domainEntity;
    }

    public void setDomainEntity (SynthesisMaterial domainEntity){
        this.domainEntity = domainEntity;
    }

  public SynthesisMaterial getDomainCopy(String createdBy){
      SynthesisMaterial copy = (SynthesisMaterial) ClassUtils.deepCopy(this
              .getDomainEntity());
      resetDomainCopy(createdBy, copy);
      return copy;
  }

//  public void setType(String type){
//        this.type=type;
//  }
//
//    public String getType() {
//        return type;
//    }

    public void removeMaterialElement(SynthesisMaterialElementBean materialElementBean) {
        synthesisMaterialElements.remove(materialElementBean);
    }

    public void resetDomainCopy(String createdBy, SynthesisMaterial synthesisMaterialCopy) {
        //TODO write
        synthesisMaterialCopy.setId(null);
        synthesisMaterialCopy.setCreatedBy(createdBy+":"+ Constants.AUTO_COPY_ANNOTATION_PREFIX);
        synthesisMaterialCopy.setProtocol(null);
        Collection<SynthesisMaterialElement> oldMaterialElements = synthesisMaterialCopy.getSynthesisMaterialElements();
        if (oldMaterialElements == null || oldMaterialElements.isEmpty()) {
            synthesisMaterialCopy.setSynthesisMaterialElements(null) ;
        } else {
            // have to create a new collection otherwise Hibernate complains
            synthesisMaterialCopy.setSynthesisMaterialElements(new HashSet<SynthesisMaterialElement>(oldMaterialElements));
            for(SynthesisMaterialElement sme: synthesisMaterialCopy.getSynthesisMaterialElements()){
                sme.setCreatedBy(createdBy + ":"
                        + Constants.AUTO_COPY_ANNOTATION_PREFIX + ":"
                        + sme.getId());
                sme.setId(null);
                Collection<SmeInherentFunction> oldFunctions = sme.getSmeInherentFunctions();
                if(oldFunctions==null | oldFunctions.isEmpty()){
                    sme.setSmeInherentFunctions(null);
                    } else {
                    sme.setSmeInherentFunctions(new HashSet<SmeInherentFunction>(oldFunctions));
                    for(SmeInherentFunction function: sme.getSmeInherentFunctions()){
                        SmeInherentFunctionBean functionBean = new SmeInherentFunctionBean(function);
                        functionBean.resetDomainCopy(createdBy, functionBean);
                    }
                }
            }
        }
        Collection<File> oldFiles = synthesisMaterialCopy.getFileCollection();
        if (oldFiles == null || oldFiles.isEmpty()) {
            synthesisMaterialCopy.setFileCollection(null);
        } else {
            synthesisMaterialCopy.setFileCollection(new HashSet<File>(oldFiles));
            for (File file : synthesisMaterialCopy.getFileCollection()) {
                FileBean fileBean = new FileBean(file);
                fileBean.resetDomainCopy(createdBy, file);
            }
        }
    }

    public List<SynthesisMaterialElementBean> getSynthesisMaterialElements() {
        return synthesisMaterialElements;
    }

    public SynthesisMaterialElementBean getSynthesisMaterialElementById(String id){
//        for(SynthesisMaterialElementBean element:synthesisMaterialElements){
//            if(element.getDomainEntity().getId().equals(id)){
//                return element;
//            }
//        }
//        return null;
        return getSynthesisMaterialElementById(new Long(id));
    }

    public  SynthesisMaterialElementBean getSynthesisMaterialElementById(Long id){
//        return getSynthesisMaterialElementById(id.toString());
        for(SynthesisMaterialElementBean element:synthesisMaterialElements){
            if(element.getDomainEntity().getId().equals(id)){
                return element;
            }
        }
        return null;
    }

    public void setSynthesisMaterialElements(List<SynthesisMaterialElementBean> synthesisMaterialElements) {
        this.synthesisMaterialElements = synthesisMaterialElements;
    }


    public void setUpDomainEntity(String loggedInUserName) throws Exception {
        logger.debug("In SynthesisMaterialBean.setupDomain");

        //forms defaults Ids to 0, so need to check both null and 0
        if(domainEntity.getId() !=null && domainEntity.getId()==0){
            domainEntity.setId(null);
        }

        if(domainEntity.getId()==null){
            logger.debug("call domain.setCreatedBy "+ loggedInUserName);
            domainEntity.setCreatedBy(loggedInUserName);
            domainEntity.setCreatedDate(Calendar.getInstance().getTime());
        } else {
            // updated created_by if created_by contains copy, but keep the original
            // created_date
            if(domainEntity.getCreatedBy()!=null&&domainEntity.getCreatedBy().contains(
                    Constants.AUTO_COPY_ANNOTATION_PREFIX)){
                domainEntity.setCreatedBy(loggedInUserName);
            }
        }

        // clear the old domain material elements in the domain
        if(domainEntity.getSynthesisMaterialElements() != null){
            domainEntity.getSynthesisMaterialElements().clear();
        } else {
            domainEntity.setSynthesisMaterialElements(new HashSet<SynthesisMaterialElement>());
        }

        //reset the domain material elements to what is in the bean
        for(SynthesisMaterialElementBean synthesisMaterialElement:synthesisMaterialElements){
            synthesisMaterialElement.setupDomain(loggedInUserName);
            domainEntity.addSynthesisMaterialElement(synthesisMaterialElement.getDomainEntity());
        }


        if (protocolBean != null && protocolBean.getDomain().getId() != null
                && protocolBean.getDomain().getId().longValue() != 0) {
            domainEntity.setProtocol(protocolBean.getDomain());
        } else {
            domainEntity.setProtocol(null);
        }
        domainEntity.getFileCollection();
        if (files.isEmpty()) {
            domainEntity.setFileCollection(null);
        } else if (domainEntity.getFileCollection() != null) {
            domainEntity.getFileCollection().clear();
        } else {
            domainEntity.setFileCollection(new HashSet<File>());
        }
        for (FileBean file : files) {
            domainEntity.getFileCollection().add(file.getDomainFile());
        }
        domainEntity.setDescription(description);
    }


    public ProtocolBean getProtocolBean() {
        return protocolBean;
    }

    public void setProtocolBean(ProtocolBean protocolBean) {
        this.protocolBean = protocolBean;
    }

}
