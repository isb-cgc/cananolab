package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.particle.Synthesis;
import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalization;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterial;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurification;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.particle.composition.BaseCompositionEntityBean;
import gov.nih.nci.cananolab.util.Comparators;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.SortedSet;
import java.util.TreeSet;

public class SynthesisBean extends BaseCompositionEntityBean {
    public static final String FUNCTIONALIZATION_SELECTION = "synthesis functionalization";
    public static final String MATERIALS_SELECTION = "synthesis materials";
    public static final String PURIFICATION_SELECTION = "synthesis func purification";

    public static final String[] ALL_SYNTHESIS_SECTIONS = new String[] {
            FUNCTIONALIZATION_SELECTION, MATERIALS_SELECTION,
            PURIFICATION_SELECTION};

    private List<SynthesisFunctionalizationBean> synthesisFunctionalizationBeanList = new ArrayList<SynthesisFunctionalizationBean>();
    private List<SynthesisMaterialBean> synthesisMaterialBeanList = new ArrayList<SynthesisMaterialBean>();
    private List<SynthesisPurificationBean> synthesisPurificationBeanList = new ArrayList<SynthesisPurificationBean>();

    private gov.nih.nci.cananolab.domain.particle.Synthesis domain;
    private List<String> synthesisSections = new ArrayList<String>();
    private java.util.Map<String, java.util.SortedSet<SynthesisFunctionalizationBean>> type2FuncEntities = new java.util.HashMap<String, java.util.SortedSet<SynthesisFunctionalizationBean>>();
    private java.util.Map<String, java.util.SortedSet<SynthesisMaterialBean>> type2MatsEntities = new java.util.HashMap<String, java.util.SortedSet<SynthesisMaterialBean>>();
    private java.util.Map<String, java.util.SortedSet<SynthesisPurificationBean>> type2PurEntities = new java.util.HashMap<String, java.util.SortedSet<SynthesisPurificationBean>>();

    private java.util.SortedSet<String> synFuncTypes = new java.util.TreeSet<String>();
//    private java.util.SortedSet<String> synMatTypes = new java.util.TreeSet<String>();
    private java.util.SortedSet<String> synPureTypes = new java.util.TreeSet<String>();


    public SynthesisBean(){

    }

    public SynthesisBean(Synthesis synthesis){
        domain = synthesis;
        if(synthesis.getSynthesisMaterials()!=null){
            for(SynthesisMaterial materials:synthesis.getSynthesisMaterials()){
                synthesisMaterialBeanList.add(new SynthesisMaterialBean(materials));
            }
        }
        Collections.sort(synthesisMaterialBeanList,new Comparators.SynthesisMaterialBeanTypeDataComparator());

        if(synthesis.getSynthesisFunctionalizations()!=null){
            for(SynthesisFunctionalization functionalization:synthesis.getSynthesisFunctionalizations()){
                synthesisFunctionalizationBeanList.add(new SynthesisFunctionalizationBean(functionalization));
            }
        }
        Collections.sort(synthesisFunctionalizationBeanList, new Comparators.SynthesisFunctionalizationBeanTypeDataComparator());

        if(synthesis.getSynthesisPurifications()!=null){
            for(SynthesisPurification purification:synthesis.getSynthesisPurifications()){
                synthesisPurificationBeanList.add(new SynthesisPurificationBean(purification));
            }
        }
        Collections.sort(synthesisPurificationBeanList, new Comparators.SynthesisPurificationBeanTypeDataComparator());

        if(!synthesisMaterialBeanList.isEmpty()){
            synthesisSections.add(MATERIALS_SELECTION);
        }

        if(!synthesisFunctionalizationBeanList.isEmpty()){
            synthesisSections.add(FUNCTIONALIZATION_SELECTION);
        }

        if(!synthesisPurificationBeanList.isEmpty()){
            synthesisSections.add(PURIFICATION_SELECTION);
        }


//        SortedSet<SynthesisMaterialBean> typeSynMaterials;
//        for(SynthesisMaterialBean synthesisMaterialBean:synthesisMaterialBeanList){
//            String type=synthesisMaterialBean.getDomainEntity().getType();
//            if(type2MatsEntities.get(type)!=null){
//                typeSynMaterials=type2MatsEntities.get(type);
//            } else {
//                typeSynMaterials=new TreeSet<SynthesisMaterialBean>(new Comparators.SynthesisMaterialBeanTypeDataComparator());
//                type2MatsEntities.put(type, typeSynMaterials);
//            }
//            typeSynMaterials.add(synthesisMaterialBean);
//            synMatTypes.add(type);
//        }

//        SortedSet<SynthesisFunctionalizationBean> typeSynFunctionalization;
//        for(SynthesisFunctionalizationBean synthesisFunctionalizationBean:synthesisFunctionalizationBeanList){
//            String type=synthesisFunctionalizationBean.getDomainEntity().getType();
//            if(type2FuncEntities.get(type)!=null){
//                typeSynFunctionalization = type2FuncEntities.get(type);
//            }else {
//                typeSynFunctionalization=new TreeSet<SynthesisFunctionalizationBean>(new Comparators.SynthesisFunctionalizationBeanTypeDataComparator());
//                type2FuncEntities.put(type, typeSynFunctionalization);
//            }
//            typeSynFunctionalization.add(synthesisFunctionalizationBean);
//            synFuncTypes.add(type);
//        }


        SortedSet<SynthesisPurificationBean> typeSynPurification;
         for(SynthesisPurificationBean synthesisPurificationBean:synthesisPurificationBeanList){
             String type = synthesisPurificationBean.getDomainEntity().getType();
             if(type2PurEntities.get(type)!=null){
                 typeSynPurification=type2PurEntities.get(type);
             }else {
                 typeSynPurification=new TreeSet<SynthesisPurificationBean>(new Comparators.SynthesisPurificationBeanTypeDataComparator());
                 type2PurEntities.put(type, typeSynPurification);
             }
             typeSynPurification.add(synthesisPurificationBean);
             synPureTypes.add(type);
         }


    }

    public void resetDomainCopy(String createdBy, Synthesis copy, Boolean copyData){
        copy.setId(null);

        Collection<SynthesisMaterial> oldMaterials = copy.getSynthesisMaterials();
        //checking for null first so that isEmpty doesn't throw NPE
        if(oldMaterials==null || oldMaterials.isEmpty()){
            copy.setSynthesisMaterials(null);
        } else {
            copy.setSynthesisMaterials(new HashSet<SynthesisMaterial>(oldMaterials));
            for(SynthesisMaterial synthesisMaterial: copy.getSynthesisMaterials()){
                SynthesisMaterialBean synthesisMaterialBean = new SynthesisMaterialBean(synthesisMaterial);
                synthesisMaterialBean.resetDomainCopy(createdBy,synthesisMaterial);
            }
        }
        Collection<SynthesisFunctionalization> oldFunctionalizations = copy.getSynthesisFunctionalizations();
        if(oldFunctionalizations==null || oldFunctionalizations.isEmpty()){
            copy.setSynthesisFunctionalizations(null);
        } else {
            copy.setSynthesisFunctionalizations(new HashSet<SynthesisFunctionalization>(oldFunctionalizations));
            for(SynthesisFunctionalization synthesisFunctionalization: copy.getSynthesisFunctionalizations()){
                SynthesisFunctionalizationBean synthesisFunctionalizationBean = new SynthesisFunctionalizationBean(synthesisFunctionalization);
                synthesisFunctionalizationBean.resetDomainCopy(createdBy,  synthesisFunctionalization);
            }
        }
        Collection<SynthesisPurification> oldPurifications = copy.getSynthesisPurifications();
        if(oldPurifications==null || oldPurifications.isEmpty()){
            copy.setSynthesisPurifications(null);
        } else {
            copy.setSynthesisPurifications(new HashSet<SynthesisPurification>(oldPurifications));
            for(SynthesisPurification synthesisPurification: copy.getSynthesisPurifications()){
                SynthesisPurificationBean synthesisPurificationBean = new SynthesisPurificationBean(synthesisPurification);
                synthesisPurificationBean.resetDomainCopy(createdBy, synthesisPurification );
            }
        }

 }


    public static String[] getAllSynthesisSections() {
        return ALL_SYNTHESIS_SECTIONS;
    }

    public gov.nih.nci.cananolab.domain.particle.Synthesis getDomain() {
        return domain;
    }

    public void setDomain(gov.nih.nci.cananolab.domain.particle.Synthesis domain) {
        this.domain = domain;
    }


    public java.util.SortedSet<String> getSynFuncTypes() {
        return synFuncTypes;
    }

    public void setSynFuncTypes(java.util.SortedSet<String> synFuncTypes) {
        this.synFuncTypes = synFuncTypes;
    }

//    public java.util.SortedSet<String> getSynMatTypes() {
//        return synMatTypes;
//    }
//
//    public void setSynMatTypes(java.util.SortedSet<String> synMatTypes) {
//        this.synMatTypes = synMatTypes;
//    }

    public java.util.SortedSet<String> getSynPureTypes() {
        return synPureTypes;
    }

    public void setSynPureTypes(java.util.SortedSet<String> synPureTypes) {
        this.synPureTypes = synPureTypes;
    }

    public List<SynthesisFunctionalizationBean> getSynthesisFunctionalizationBeanList() {
        return synthesisFunctionalizationBeanList;
    }

    public void setSynthesisFunctionalizationBeanList(List<SynthesisFunctionalizationBean> synthesisFunctionalizationBeanList) {
        this.synthesisFunctionalizationBeanList = synthesisFunctionalizationBeanList;
    }

    public List<SynthesisMaterialBean> getSynthesisMaterialBeanList() {
        return synthesisMaterialBeanList;
    }

    public void setSynthesisMaterialBeanList(List<SynthesisMaterialBean> synthesisMaterialBeanList) {
        this.synthesisMaterialBeanList = synthesisMaterialBeanList;
    }

    public List<SynthesisPurificationBean> getSynthesisPurificationBeanList() {return synthesisPurificationBeanList;}

    public void setSynthesisPurificationBeanList(List<SynthesisPurificationBean> synthesisPurificationBeanList){
        this.synthesisPurificationBeanList = synthesisPurificationBeanList;
    }

    public List<String> getSynthesisSections() {
        return synthesisSections;
    }

    public void setSynthesisSections(List<String> synthesisSections) {
        this.synthesisSections = synthesisSections;
    }

    public FileBean getTheFile() {
        return theFile;
    }

    public void setTheFile(FileBean theFile) {
        this.theFile = theFile;
    }



    public Map<String, SortedSet<SynthesisFunctionalizationBean>> getType2FuncEntities() {
        return type2FuncEntities;
    }

    public void setType2FuncEntities(Map<String, java.util.SortedSet<SynthesisFunctionalizationBean>> type2FuncEntities) {
        this.type2FuncEntities = type2FuncEntities;
    }

    public Map<String, java.util.SortedSet<SynthesisMaterialBean>> getType2MatsEntities() {
        return type2MatsEntities;
    }

    public void setType2MatsEntities(Map<String, java.util.SortedSet<SynthesisMaterialBean>> type2MatsEntities) {
        this.type2MatsEntities = type2MatsEntities;
    }

    public Map<String, java.util.SortedSet<SynthesisPurificationBean>> getType2PurEntities() {
        return type2PurEntities;
    }

    public void setType2PurEntities(Map<String, java.util.SortedSet<SynthesisPurificationBean>> type2PurEntities) {
        this.type2PurEntities = type2PurEntities;
    }


}
