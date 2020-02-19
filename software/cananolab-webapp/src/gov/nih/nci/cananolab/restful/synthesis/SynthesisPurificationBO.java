package gov.nih.nci.cananolab.restful.synthesis;

import gov.nih.nci.cananolab.dto.common.PurityBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurificationBean;
import gov.nih.nci.cananolab.restful.core.BaseAnnotationBO;
import gov.nih.nci.cananolab.restful.view.edit.SimplePurityBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisPurificationBean;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.service.curation.CurationService;
import gov.nih.nci.cananolab.service.sample.SampleService;
import gov.nih.nci.cananolab.service.sample.SynthesisService;
import gov.nih.nci.cananolab.ui.form.SynthesisForm;
import java.util.IllegalFormatConversionException;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly=false, propagation= Propagation.REQUIRED)
@Component("synthesisPurificationBO")
public class SynthesisPurificationBO extends BaseAnnotationBO {
    //TODO write
    Logger logger = Logger.getLogger(SynthesisPurificationBO.class);
    @Autowired
    private SynthesisService synthesisService;

    @Autowired
    private SpringSecurityAclService springSecurityAclService;

    @Override
    public CurationService getCurationServiceDAO() {
        //TODO
        return null;
    }

    @Override
    public SampleService getSampleService() {
        //TODO
        return null;
    }

    @Override
    public SpringSecurityAclService getSpringSecurityAclService() {
        //TODO
        return null;
    }

    @Override
    public UserDetailsService getUserDetailsService() {
        //TODO
        return null;
    }

    public Map<String, Object> setupNew(String sampleId, HttpServletRequest httpRequest) {
        return null;
    }

    public SimpleSynthesisPurificationBean setupUpdate(String sampleId, String dataId, HttpServletRequest httpRequest) throws Exception {
        SynthesisForm form = new SynthesisForm();
        // set up other particles with the same primary point of contact
//        InitSampleSetup.getInstance().getOtherSampleNames(httpRequest, sampleId, sampleService);

        try {
            SynthesisPurificationBean synBean = synthesisService.findSynthesisPurificationById(new Long(sampleId), new Long(dataId));

            form.setSynthesisPurificationBean(synBean);
            this.checkOpenForms(synBean, httpRequest);
            httpRequest.getSession().setAttribute("sampleId", sampleId);
            SimpleSynthesisPurificationBean simpleSynthesisPurificationBean = new SimpleSynthesisPurificationBean();
            simpleSynthesisPurificationBean.transferSynthesisPurificationBeanToSimple(synBean, httpRequest, springSecurityAclService);
            return simpleSynthesisPurificationBean;
        } catch (IllegalFormatConversionException e){
            logger.error("Either sample id or data id is not an appropriate identifier. ",e);
            throw e;
        }
    }

    private void checkOpenForms(SynthesisPurificationBean synBean, HttpServletRequest httpRequest) {
    }

    private void create(){
        //TODO write
    }

    private void delete(){
        //TODO write
    }

    private void createPurity(){
        //TODO write
    }

    private void deletePurity(){
        //TODO write
    }

    private void saveFile(){
        //TODO write
    }

    private void deleteFile(){
        //TODO write
    }

    private void setupView(){
        //TODO write
    }

    private void saveExperiment(){
        //TODO write
    }

    private void deleteExperiment(){
        //TODO write
    }

    PurityBean transferSimplePurity(SimplePurityBean simplePurityBean, PurityBean purityBean){
        //TODO write all the transfer stuff
        return purityBean;
    }

    private void validateCharacterization(){
        //TODO write
    }
}
