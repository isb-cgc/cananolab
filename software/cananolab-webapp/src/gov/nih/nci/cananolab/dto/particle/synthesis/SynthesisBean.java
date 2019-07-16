package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.dto.particle.composition.BaseCompositionEntityBean;
import java.util.ArrayList;
import java.util.List;
import sun.jvm.hotspot.runtime.JavaVFrame;

public class SynthesisBean extends BaseCompositionEntityBean {
    private List<SynthesisFunctionalizationBean> synthesisFunctionalizationBeanList = new ArrayList<SynthesisFunctionalizationBean>();
    private List<SynthesisMaterialsBean> synthesisMaterialsBeanList = new ArrayList<SynthesisMaterialsBean>();
    private List<SynthesisFuncPurificationBean> synthesisMaterialsBeanList = new ArrayList<SythesisFuncPurificationBean>();
    private List<FileBean> files = new ArrayList<FileBean>();
    private Synthesis domain;
    private List<String> compositionSections = new ArrayList<String>();
    protected FileBean theFile = new FileBean();
    private Map<String, SortedSet<SynthesisFunctionalizationBean>> type2FuncEntities = new HashMap<String, SortedSet<SynthesisFunctionalizationBean>>();
    private Map<String, SortedSet<SynthesisMaterialsBean>> type2MatsEntities = new HashMap<String, SortedSet<SynthesisMaterialsBean>>();
    private Map<String, SortedSet<SynthesisFuncPurificationBean>> type2PurEntities = new HashMap<String, SortedSet<SynthesisFuncPurificationBean>>();

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

    public Synthesis getDomain() {
        return domain;
    }

    public void setDomain(Synthesis domain) {
        this.domain = domain;
    }

    public List<String> getCompositionSections() {
        return compositionSections;
    }

    public void setCompositionSections(List<String> compositionSections) {
        this.compositionSections = compositionSections;
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

    public void setType2FuncEntities(Map<String, SortedSet<SynthesisFunctionalizationBean>> type2FuncEntities) {
        this.type2FuncEntities = type2FuncEntities;
    }

    public Map<String, SortedSet<SynthesisMaterialsBean>> getType2MatsEntities() {
        return type2MatsEntities;
    }

    public void setType2MatsEntities(Map<String, SortedSet<SynthesisMaterialsBean>> type2MatsEntities) {
        this.type2MatsEntities = type2MatsEntities;
    }

    public Map<String, SortedSet<SynthesisFuncPurificationBean>> getType2PurEntities() {
        return type2PurEntities;
    }

    public void setType2PurEntities(Map<String, SortedSet<SynthesisFuncPurificationBean>> type2PurEntities) {
        this.type2PurEntities = type2PurEntities;
    }

    public Map<String, SortedSet<FileBean>> getType2Files() {
        return type2Files;
    }

    public void setType2Files(Map<String, SortedSet<FileBean>> type2Files) {
        this.type2Files = type2Files;
    }

    public SortedSet<String> getSynFuncTypes() {
        return synFuncTypes;
    }

    public void setSynFuncTypes(SortedSet<String> synFuncTypes) {
        this.synFuncTypes = synFuncTypes;
    }

    public SortedSet<String> getSynMatTypes() {
        return synMatTypes;
    }

    public void setSynMatTypes(SortedSet<String> synMatTypes) {
        this.synMatTypes = synMatTypes;
    }

    public SortedSet<String> getSynPureTypes() {
        return synPureTypes;
    }

    public void setSynPureTypes(SortedSet<String> synPureTypes) {
        this.synPureTypes = synPureTypes;
    }

    public SortedSet<String> getFileTypes() {
        return fileTypes;
    }

    public void setFileTypes(SortedSet<String> fileTypes) {
        this.fileTypes = fileTypes;
    }

    private Map<String, SortedSet<FileBean>> type2Files = new HashMap<String, SortedSet<FileBean>>();
    private SortedSet<String> synFuncTypes = new TreeSet<String>();
    private SortedSet<String> synMatTypes = new TreeSet<String>();
    private SortedSet<String> synPureTypes = new TreeSet<String>();
    private SortedSet<String> fileTypes = new TreeSet<String>();

    public static String[] getAllSynthesisSections() {
        return ALL_SYNTHESIS_SECTIONS;
    }

    public static final String[] ALL_SYNTHESIS_SECTIONS = new String[] {
            FUNCTIONALIZATION_SELECTION, MATERIALS_SELECTION,
            PURIFICATION_SELECTION, FILE_SELECTION };

}
