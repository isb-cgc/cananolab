package gov.nih.nci.cananolab.dto.particle.synthesis;

//import com.sun.xml.internal.ws.api.WSFeatureList;
import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.particle.SmeInherentFunction;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterial;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterialElement;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.util.ClassUtils;
import gov.nih.nci.cananolab.util.Comparators;
import gov.nih.nci.cananolab.util.Constants;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;

public class SynthesisMaterialBean extends BaseSynthesisEntityBean {
    //TODO write

    private SynthesisMaterial domainEntity;

    private List<SynthesisMaterialElementBean> synthesisMaterialElements = new ArrayList<SynthesisMaterialElementBean>();

//    private String type;

    public SynthesisMaterialBean(){

    }

    public SynthesisMaterialBean(SynthesisMaterial material){
        //TODO write
        domainEntity = material;
        if (material.getSynthesisMaterialElements() != null) {
            for(SynthesisMaterialElement synthesisMaterialElement : material.getSynthesisMaterialElements()){
                synthesisMaterialElements.add(new SynthesisMaterialElementBean(synthesisMaterialElement));
            }
        }
        Collections.sort(synthesisMaterialElements, new Comparators.SynthesisMaterialElementTypeDataComparator());

    }



    public SynthesisMaterial getDomainEntity(){
        return domainEntity;
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
        Collection<File> oldFiles = synthesisMaterialCopy.getFiles();
        if (oldFiles == null || oldFiles.isEmpty()) {
            synthesisMaterialCopy.setFiles(null);
        } else {
            synthesisMaterialCopy.setFiles(new HashSet<File>(oldFiles));
            for (File file : synthesisMaterialCopy.getFiles()) {
                FileBean fileBean = new FileBean(file);
                fileBean.resetDomainCopy(createdBy, file);
            }
        }
    }

    public List<SynthesisMaterialElementBean> getSynthesisMaterialElements() {
        return synthesisMaterialElements;
    }

    public SynthesisMaterialElementBean getSynthesisMaterialElementById(String id){
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


}
