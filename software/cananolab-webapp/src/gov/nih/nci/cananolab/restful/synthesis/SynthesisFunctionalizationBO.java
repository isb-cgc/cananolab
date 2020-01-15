package gov.nih.nci.cananolab.restful.synthesis;

import gov.nih.nci.cananolab.dto.particle.composition.FunctionalizingEntityBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurificationBean;
import gov.nih.nci.cananolab.restful.core.BaseAnnotationBO;
import gov.nih.nci.cananolab.restful.sample.InitSampleSetup;
import gov.nih.nci.cananolab.restful.util.CompositionUtil;
import gov.nih.nci.cananolab.restful.util.SynthesisUtil;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisFunctionalizationBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisPurificationBean;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.service.curation.CurationService;
import gov.nih.nci.cananolab.service.sample.SampleService;
import gov.nih.nci.cananolab.service.sample.SynthesisService;
import gov.nih.nci.cananolab.ui.form.SynthesisForm;
import org.apache.log4j.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.util.IllegalFormatConversionException;
import java.util.Map;

@Component("synthesisFunctionalizationBO")
public class SynthesisFunctionalizationBO extends BaseAnnotationBO {

    Logger logger = Logger.getLogger(SynthesisPurificationBO.class);

    @Override
    public CurationService getCurationServiceDAO() {
        return null;
    }


    @Override
    public SampleService getSampleService() {
        return null;
    }

    @Override
    public SpringSecurityAclService getSpringSecurityAclService() {
        return null;
    }

    @Override
    public UserDetailsService getUserDetailsService() {
        return null;
    }

    @Autowired
    private SynthesisService synthesisService;


    @Autowired
    private SpringSecurityAclService springSecurityAclService;


    public Map<String, Object> setupNew(String sampleId, HttpServletRequest httpRequest) {
        return null;
    }




    public SimpleSynthesisFunctionalizationBean setupUpdate(String sampleId, String dataId, HttpServletRequest httpRequest) throws Exception {

        try {
            SynthesisFunctionalizationBean synBean = synthesisService.findSynthesisFunctionalizationById(new Long(sampleId), new Long(dataId));

            this.checkOpenForms(synBean, httpRequest);

            httpRequest.getSession().setAttribute("sampleId", sampleId);
            httpRequest.getSession().setAttribute("dataId", dataId);

            SimpleSynthesisFunctionalizationBean simpleSynthesisFunctionalizationBean = new SimpleSynthesisFunctionalizationBean();
            simpleSynthesisFunctionalizationBean.transferSynthesisFunctionalizationToSimple(synBean, httpRequest, springSecurityAclService);

            return simpleSynthesisFunctionalizationBean;
        } catch (IllegalFormatConversionException e){
            logger.error("SimpleSynthesisFunctionalizationBean setupUpdate. ",e);
            throw e;
        }
    }

    private void checkOpenForms(SynthesisFunctionalizationBean synBean, HttpServletRequest httpRequest) {
    }


}
