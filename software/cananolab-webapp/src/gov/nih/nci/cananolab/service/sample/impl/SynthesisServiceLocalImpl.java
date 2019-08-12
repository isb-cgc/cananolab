package gov.nih.nci.cananolab.service.sample.impl;

import gov.nih.nci.cananolab.domain.particle.Synthesis;
import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalization;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterial;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurification;
import gov.nih.nci.cananolab.dto.particle.SampleBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurificationBean;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.exception.SynthesisException;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.service.BaseServiceLocalImpl;
import gov.nih.nci.cananolab.service.sample.SynthesisService;
import gov.nih.nci.cananolab.service.sample.helper.SynthesisHelper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component("synthesisService")
public class SynthesisServiceLocalImpl extends BaseServiceLocalImpl implements SynthesisService {
    private static Logger logger = org.apache.log4j.Logger.getLogger(SynthesisServiceLocalImpl.class);
    private SynthesisHelper synthesisHelper;
    @Autowired
    private SpringSecurityAclService springSecurityAclService;


    @Override
    public SpringSecurityAclService getSpringSecurityAclService() {
        return springSecurityAclService;
    }


    public SynthesisHelper getHelper() {
        return synthesisHelper;
    }

    public SynthesisBean findSynthesisById(String sampleId, String dataId) throws SynthesisException, NoAccessException {
        return null;
    }




    public SynthesisBean findSynthesisBySampleId(String sampleId) throws SynthesisException {
        SynthesisBean synthesisBean = null;
        try{
            Synthesis synthesis = synthesisHelper.findSynthesisBySampleId(sampleId);
            if(synthesis!=null){
                synthesisBean = new SynthesisBean(synthesis);
            }
        } catch (Exception e){
            String err = "Error finding synthesis by sample ID: " + sampleId;
            throw new SynthesisException(err, e);
        }
        return synthesisBean;
    }


    public SynthesisMaterialBean findSynthesisMaterialById(String sampleId, String dataId) {
        return null;
    }


    public SynthesisFunctionalizationBean findSynthesisFunctionalizationById(String sampleId, String dataId) {
        return null;
    }


    public SynthesisPurificationBean findSynthesisPurificationById(String sampleId, String dataId) {
        return null;
    }


    public void copyAndSaveSynthesisMaterial(SynthesisMaterialBean entityBean, SampleBean oldSampleBean, SampleBean[] newSampleBeans) throws SynthesisException, NoAccessException {

    }


    public void copyAndSaveSynthesisFunctionalization(SynthesisFunctionalizationBean entityBean, SampleBean oldSampleBean, SampleBean[] newSampleBeans) throws SynthesisException, NoAccessException {

    }


    public void copyAndSaveSynthesisPurification(SynthesisPurificationBean entityBean, SampleBean oldSampleBean, SampleBean[] newSampleBeans) throws SynthesisException, NoAccessException {

    }


    public void deleteSynthesis(Synthesis synthesis) throws SynthesisException, NoAccessException {

    }


    public void deleteSynthesisMaterial(SynthesisMaterial synthesisMaterial) throws SynthesisException, NoAccessException {

    }


    public void deleteSynthesisFunctionalization(SynthesisFunctionalization synthesisFunctionalization) throws SynthesisException, NoAccessException {

    }


    public void deleteSynthesisPurification(SynthesisPurification synthesisPurification) throws SynthesisException,
            NoAccessException {

    }


    public void saveSynthesisMaterial(SampleBean sampleBean, SynthesisMaterialBean synthesisMaterialBean) throws SynthesisException, NoAccessException {

    }


    public void saveSynthesisFunctionalization(SampleBean sampleBean, SynthesisFunctionalizationBean synthesisFunctionalizationBean) throws SynthesisException, NoAccessException {

    }


    public void saveSynthesisPurification(SampleBean sampleBean, SynthesisPurificationBean synthesisPurificationBean) throws SynthesisException, NoAccessException {

    }


    public SynthesisBean findSynthesisById(String sampleId) {
        return null;
    }
}
