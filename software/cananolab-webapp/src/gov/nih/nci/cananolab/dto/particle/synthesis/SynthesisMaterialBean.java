package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.particle.SynthesisMaterial;
import gov.nih.nci.cananolab.util.ClassUtils;
import java.util.ArrayList;
import java.util.List;

public class SynthesisMaterialBean extends BaseSynthesisEntityBean {
    //TODO write

    private SynthesisMaterial domainEntity;

    private List<SynthesisMaterialElementBean> synthesisMaterialElements = new ArrayList<SynthesisMaterialElementBean>();

    public SynthesisMaterialBean(){

    }

    public SynthesisMaterialBean(SynthesisMaterial material){
        //TODO write
        domainEntity = material;
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

    public String getType() {
        return null;
    }

    public void removeMaterialElement(SynthesisMaterialElementBean materialElementBean) {
        synthesisMaterialElements.remove(materialElementBean);
    }

    public void resetDomainCopy(String createdBy, SynthesisMaterial synthesisMaterial) {
        //TODO write
    }

    public List<SynthesisMaterialElementBean> getSynthesisMaterialElements() {
        return synthesisMaterialElements;
    }

    public SynthesisMaterialElementBean getSynthesisMaterialElementById(String id){
        for(SynthesisMaterialElementBean element:synthesisMaterialElements){
            if(element.getDomain().getId().equals(id)){
                return element;
            }
        }
        return null;
    }

    public void setSynthesisMaterialElements(List<SynthesisMaterialElementBean> synthesisMaterialElements) {
        this.synthesisMaterialElements = synthesisMaterialElements;
    }


}
