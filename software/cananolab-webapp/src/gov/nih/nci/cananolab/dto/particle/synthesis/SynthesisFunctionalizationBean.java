package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.common.PointOfContact;
import gov.nih.nci.cananolab.domain.particle.Function;
import gov.nih.nci.cananolab.domain.particle.SfeInherentFunction;
import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalization;
import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalizationElement;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.util.ClassUtils;
import gov.nih.nci.cananolab.util.Comparators;
import gov.nih.nci.cananolab.util.Constants;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import org.apache.log4j.Logger;


public class SynthesisFunctionalizationBean  extends BaseSynthesisEntityBean {
    Logger logger = Logger.getLogger("SynthesisFunctionalizationBean.class");
    private SynthesisFunctionalization domainEntity;
    private boolean withProperties = false;
//    private PointOfContact source = new PointOfContact();

    List<SynthesisFunctionalizationElementBean> synthesisFunctionalizationElements = new ArrayList<SynthesisFunctionalizationElementBean>();

    public SynthesisFunctionalizationBean(SynthesisFunctionalization synthesisFunctionalization){
        this.domainEntity=synthesisFunctionalization;
        if(synthesisFunctionalization.getSynthesisFunctionalizationElements()!=null){
            for(SynthesisFunctionalizationElement synthesisFunctionalizationElement: synthesisFunctionalization.getSynthesisFunctionalizationElements()){
                synthesisFunctionalizationElements.add(new SynthesisFunctionalizationElementBean(synthesisFunctionalizationElement));
            }
        }
        Collections.sort(synthesisFunctionalizationElements, new Comparators.SFEBeanTypeComparator());
    }



    public SynthesisFunctionalization getDomainCopy(String createdBy) {

        SynthesisFunctionalization copy = (SynthesisFunctionalization) ClassUtils.deepCopy(this
                .getDomainEntity());
        resetDomainCopy(createdBy, copy);
        return copy;

    }

    public SynthesisFunctionalization getDomainEntity() {
        return domainEntity;
    }

    public void setDomainEntity(SynthesisFunctionalization domainEntity) {
        this.domainEntity = domainEntity;
    }

//    public PointOfContact getSource() {
//        return source;
//    }

    public String getSource(){
        return domainEntity.getCreatedBy();
    }
//    public void setSource(PointOfContact source) {
//        this.source = source;
//    }

    public boolean isWithProperties() {
        return withProperties;
    }

    public void setWithProperties(boolean withProperties) {
        this.withProperties = withProperties;
    }

    public void resetDomainCopy(String createdBy, SynthesisFunctionalization copy) {
        copy.setId(null);
        copy.setCreatedBy(createdBy + ":"
                + Constants.AUTO_COPY_ANNOTATION_PREFIX);

        Collection<SynthesisFunctionalizationElement> oldElements = copy.getSynthesisFunctionalizationElements();
        if (oldElements==null || oldElements.isEmpty()){
            copy.setSynthesisFunctionalizationElements(null);
        }else {
            copy.setSynthesisFunctionalizationElements(new HashSet<SynthesisFunctionalizationElement>(oldElements));
            for(SynthesisFunctionalizationElement sfe:copy.getSynthesisFunctionalizationElements()){
                sfe.setCreatedBy(createdBy + ":"
                        + Constants.AUTO_COPY_ANNOTATION_PREFIX + ":"
                        + sfe.getId());
                sfe.setId(null);
                Collection<SfeInherentFunction> oldFunctions = sfe.getSfeInherentFunctions();
                if (oldFunctions == null || oldFunctions.isEmpty()) {
                    sfe.setSfeInherentFunctions(null);
                } else {

                    sfe.setSfeInherentFunctions(new HashSet<SfeInherentFunction>(oldFunctions));
                    for (SfeInherentFunction function : sfe.getSfeInherentFunctions()) {
                        SfeInherentFunctionBean functionBean = new SfeInherentFunctionBean(function);
                        functionBean.resetDomainCopy(createdBy, function);
                    }
                }
                Collection<File> oldFiles = sfe.getFiles();
                if (oldFiles == null || oldFiles.isEmpty()) {
                    sfe.setFiles(null);
                } else {
                    sfe.setFiles(new HashSet<File>(oldFiles));
                    for (File file : sfe.getFiles()) {
                        FileBean fileBean = new FileBean(file);
                        fileBean.resetDomainCopy(createdBy, file);
                    }
                }
            }
            Collection<File> oldFiles = copy.getFiles();
            if (oldFiles == null || oldFiles.isEmpty()) {
                copy.setFiles(null);
            } else {
                copy.setFiles(new HashSet<File>(oldFiles));
                for (File file : copy.getFiles()) {
                    FileBean fileBean = new FileBean(file);
                    fileBean.resetDomainCopy(createdBy, file);
                }
            }
        }

    }

    public String getDescription(){
        return domainEntity.getDescription();
    }

    public List<SynthesisFunctionalizationElementBean> getSynthesisFunctionalizationElements() {
        return synthesisFunctionalizationElements;
    }

    public void setSynthesisFunctionalizationElements(List<SynthesisFunctionalizationElementBean> synthesisFunctionalizationElements) {
        this.synthesisFunctionalizationElements = synthesisFunctionalizationElements;
    }
}
