package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.particle.Synthesis;
import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalization;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterial;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurification;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.particle.composition.BaseCompositionEntityBean;
import gov.nih.nci.cananolab.util.Comparators;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.SortedSet;

public class SynthesisBean extends BaseCompositionEntityBean {
    private List<SynthesisFunctionalizationBean> synthesisFunctionalizationBeanList = new ArrayList<SynthesisFunctionalizationBean>();
    private List<SynthesisMaterialsBean> synthesisMaterialsBeanList = new ArrayList<SynthesisMaterialsBean>();
    private List<SynthesisPurificationBean> synthesisFuncPurificationBeanList = new ArrayList<SynthesisPurificationBean>();
    private List<FileBean> files = new ArrayList<FileBean>();
    private gov.nih.nci.cananolab.domain.particle.Synthesis domain;
    private List<String> synthesisSections = new ArrayList<String>();
    protected FileBean theFile = new FileBean();
    private java.util.Map<String, java.util.SortedSet<SynthesisFunctionalizationBean>> type2FuncEntities = new java.util.HashMap<String, java.util.SortedSet<SynthesisFunctionalizationBean>>();
    private java.util.Map<String, java.util.SortedSet<SynthesisMaterialsBean>> type2MatsEntities = new java.util.HashMap<String, java.util.SortedSet<SynthesisMaterialsBean>>();
    private java.util.Map<String, java.util.SortedSet<SynthesisPurificationBean>> type2PurEntities = new java.util.HashMap<String, java.util.SortedSet<SynthesisPurificationBean>>();

    public SynthesisBean(){

    }

    public SynthesisBean(Synthesis synthesis){
        domain = synthesis;
        if(synthesis.getSynthesisMaterials()!=null){
            for(SynthesisMaterial materials:synthesis.getSynthesisMaterials()){
                synthesisMaterialsBeanList.add(new SynthesisMaterialsBean(materials));
            }
        }
        Collections.sort(synthesisMaterialsBeanList,new Comparators.SynthesisMaterialsBeanTypeDataComparator());

        if(synthesis.getSynthesisFunctionalizations()!=null){
            for(SynthesisFunctionalization functionalization:synthesis.getSynthesisFunctionalizations()){
                synthesisFunctionalizationBeanList.add(new SynthesisFunctionalizationBean(functionalization));
            }
        }
        //TODO add sort

        if(synthesis.getSynthesisPurifications()!=null){
            for(SynthesisPurification purification:synthesis.getSynthesisPurifications()){
                synthesisFuncPurificationBeanList.add(new SynthesisPurificationBean(purification));
            }
        }
        //TODO add sort




    }

    public List<SynthesisFunctionalizationBean> getSynthesisFunctionalizationBeanList() {
        return synthesisFunctionalizationBeanList;
    }

    public void setSynthesisFunctionalizationBeanList(List<SynthesisFunctionalizationBean> synthesisFunctionalizationBeanList) {
        this.synthesisFunctionalizationBeanList = synthesisFunctionalizationBeanList;
    }

    public List<SynthesisMaterialsBean> getSynthesisMaterialsBeanList() {
        return synthesisMaterialsBeanList;
    }

    public void setSynthesisMaterialsBeanList(List<SynthesisMaterialsBean> synthesisMaterialsBeanList) {
        this.synthesisMaterialsBeanList = synthesisMaterialsBeanList;
    }

    public List<FileBean> getFiles() {
        return files;
    }

    public void setFiles(List<FileBean> files) {
        this.files = files;
    }

    public gov.nih.nci.cananolab.domain.particle.Synthesis getDomain() {
        return domain;
    }

    public void setDomain(gov.nih.nci.cananolab.domain.particle.Synthesis domain) {
        this.domain = domain;
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

    public Map<String, java.util.SortedSet<SynthesisMaterialsBean>> getType2MatsEntities() {
        return type2MatsEntities;
    }

    public void setType2MatsEntities(Map<String, java.util.SortedSet<SynthesisMaterialsBean>> type2MatsEntities) {
        this.type2MatsEntities = type2MatsEntities;
    }

    public Map<String, java.util.SortedSet<SynthesisPurificationBean>> getType2PurEntities() {
        return type2PurEntities;
    }

    public void setType2PurEntities(Map<String, java.util.SortedSet<SynthesisPurificationBean>> type2PurEntities) {
        this.type2PurEntities = type2PurEntities;
    }

    public Map<String, java.util.SortedSet<gov.nih.nci.cananolab.dto.common.FileBean>> getType2Files() {
        return type2Files;
    }

    public void setType2Files(Map<String, java.util.SortedSet<gov.nih.nci.cananolab.dto.common.FileBean>> type2Files) {
        this.type2Files = type2Files;
    }

    public java.util.SortedSet<String> getSynFuncTypes() {
        return synFuncTypes;
    }

    public void setSynFuncTypes(java.util.SortedSet<String> synFuncTypes) {
        this.synFuncTypes = synFuncTypes;
    }

    public java.util.SortedSet<String> getSynMatTypes() {
        return synMatTypes;
    }

    public void setSynMatTypes(java.util.SortedSet<String> synMatTypes) {
        this.synMatTypes = synMatTypes;
    }

    public java.util.SortedSet<String> getSynPureTypes() {
        return synPureTypes;
    }

    public void setSynPureTypes(java.util.SortedSet<String> synPureTypes) {
        this.synPureTypes = synPureTypes;
    }

    public java.util.SortedSet<String> getFileTypes() {
        return fileTypes;
    }

    public void setFileTypes(java.util.SortedSet<String> fileTypes) {
        this.fileTypes = fileTypes;
    }

    private java.util.Map<String, java.util.SortedSet<gov.nih.nci.cananolab.dto.common.FileBean>> type2Files = new java.util.HashMap<String, java.util.SortedSet<gov.nih.nci.cananolab.dto.common.FileBean>>();
    private java.util.SortedSet<String> synFuncTypes = new java.util.TreeSet<String>();
    private java.util.SortedSet<String> synMatTypes = new java.util.TreeSet<String>();
    private java.util.SortedSet<String> synPureTypes = new java.util.TreeSet<String>();
    private java.util.SortedSet<String> fileTypes = new java.util.TreeSet<String>();

    public static String[] getAllSynthesisSections() {
        return ALL_SYNTHESIS_SECTIONS;
    }

    public static final String FUNCTIONALIZATION_SELECTION = "synthesis functionalization";
    public static final String MATERIALS_SELECTION = "synthesis materials";
    public static final String PURIFICATION_SELECTION = "synthesis func purification";
    public static final String FILE_SELECTION = "synthesis file";

    public static final String[] ALL_SYNTHESIS_SECTIONS = new String[] {
            FUNCTIONALIZATION_SELECTION, MATERIALS_SELECTION,
            PURIFICATION_SELECTION, FILE_SELECTION };


}
