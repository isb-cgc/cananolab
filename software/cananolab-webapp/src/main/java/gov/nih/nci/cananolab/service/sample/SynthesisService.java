package gov.nih.nci.cananolab.service.sample;

import gov.nih.nci.cananolab.domain.common.PurityColumnHeader;
import gov.nih.nci.cananolab.domain.common.Supplier;
import gov.nih.nci.cananolab.domain.particle.*;

import gov.nih.nci.cananolab.dto.particle.SampleBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationElementBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialElementBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurificationBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurityBean;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.exception.SynthesisException;
import gov.nih.nci.cananolab.service.BaseService;
import gov.nih.nci.cananolab.service.sample.helper.SynthesisHelper;
import java.util.List;

public interface SynthesisService extends BaseService {
    void copyAndSaveSynthesisFunctionalization(SynthesisFunctionalizationBean entityBean, SampleBean oldSampleBean,
                                               SampleBean[] newSampleBeans) throws SynthesisException,
            NoAccessException;

    void copyAndSaveSynthesisMaterial(SynthesisMaterialBean entityBean, SampleBean oldSampleBean,
                                      SampleBean[] newSampleBeans) throws SynthesisException, NoAccessException;

    void copyAndSaveSynthesisPurification(SynthesisPurificationBean entityBean, SampleBean oldSampleBean,
                                          SampleBean[] newSampleBeans) throws SynthesisException, NoAccessException;

    void deleteColumnHeader(PurityColumnHeader header) throws NoAccessException, SynthesisException;

    void deleteSynthesis(Synthesis synthesis) throws SynthesisException, NoAccessException;

    List<String> deleteSynthesisFunctionalization(Long sampleId, SynthesisFunctionalization synthesisFunctionalization) throws SynthesisException, NoAccessException;

    void deleteSynthesisMaterial(Long sampleId, SynthesisMaterial synthesisMaterial) throws SynthesisException, NoAccessException;

    void deleteSynthesisPurification(Long sampleId, SynthesisPurification synthesisPurification) throws SynthesisException,
            NoAccessException;

    void deleteSynthesisPurity(Long sampleId, SynthesisPurification purification, SynthesisPurity purity) throws SynthesisException;


//    SynthesisBean findSynthesisById(Long sampleId, Long dataId) throws SynthesisException, NoAccessException;

    SynthesisBean findSynthesisBySampleId(Long sampleId) throws SynthesisException, NoAccessException;

    Long findSynthesisIdBySampleId(Long sampleId) throws SynthesisException, NoAccessException;

    SynthesisFunctionalizationBean findSynthesisFunctionalizationById(Long sampleId, Long dataId) throws SynthesisException, NoAccessException;

    SynthesisMaterialBean findSynthesisMaterialById(Long sampleId, Long dataId) throws SynthesisException,
            NoAccessException;

    SynthesisPurificationBean findSynthesisPurificationById(Long sampleId, Long dataId) throws SynthesisException
            , NoAccessException;

    SynthesisPurificationBean findSynthesisPurificationById(Long dataId) throws SynthesisException
            , NoAccessException;

    SynthesisHelper getHelper();

    Synthesis createSynthesis(SampleBean sampleBean) throws SynthesisException, NoAccessException;

    void saveSynthesisFunctionalization(SampleBean sampleBean, SynthesisFunctionalizationBean synthesisFunctionalizationBean) throws SynthesisException, NoAccessException;

    void saveSynthesisMaterial(SampleBean sampleBean, SynthesisMaterialBean synthesisMaterialBean) throws SynthesisException, NoAccessException;

    void saveSynthesisPurification(SampleBean sampleBean, SynthesisPurificationBean synthesisPurificationBean) throws SynthesisException, NoAccessException;

    void saveSynthesisPurity(SynthesisPurityBean synthesisPurityBean, SynthesisPurificationBean synthesisPurificationBean) throws SynthesisException;

    List<String> getSupplierNames() throws SynthesisException;

    List<String> getFunctionalizationActivationMethods() throws SynthesisException;

    Supplier createSupplierRecord(Supplier supplier) throws SynthesisException;

    void deleteSynthesisMaterialElement(Long sampleId, SynthesisMaterial synthesisMaterial, SynthesisMaterialElement element) throws NoAccessException, SynthesisException;

    void deleteSmeInherentFunction(Long sampleId, SynthesisMaterialElement element, SmeInherentFunction function) throws SynthesisException;

    void deleteSynthesisFunctionalizationElement(Long sampleId, SynthesisFunctionalization synthesisFunctionalization, SynthesisFunctionalizationElement element) throws NoAccessException, SynthesisException;

    void deleteSfeInherentFunction(Long sampleId, SynthesisFunctionalizationElement element, SfeInherentFunction function) throws SynthesisException;

    public PurityColumnHeader getColumnHeaderById(Long id) throws SynthesisException;

    public SynthesisPurity findPurityById(Long purityId) throws SynthesisException;

    void saveSynthesisMaterialElement(SynthesisMaterial material,
                                      SynthesisMaterialElementBean synthesisMaterialElementBean) throws SynthesisException;

    void saveSynthesisFunctionalizationElement(SynthesisFunctionalization functionalization,
                                               SynthesisFunctionalizationElementBean synthesisFunctionalizationElementBean) throws SynthesisException;

}