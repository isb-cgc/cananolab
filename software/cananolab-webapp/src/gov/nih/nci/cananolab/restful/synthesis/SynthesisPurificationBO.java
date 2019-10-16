package gov.nih.nci.cananolab.restful.synthesis;

import gov.nih.nci.cananolab.restful.core.BaseAnnotationBO;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.service.curation.CurationService;
import gov.nih.nci.cananolab.service.sample.SampleService;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly=false, propagation= Propagation.REQUIRED)
@Component("synthesisPurificationBO")
public class SynthesisPurificationBO extends BaseAnnotationBO {
    //TODO write

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

    public Map<String, Object> setupNew(String sampleId, HttpServletRequest httpRequest) {
        return null;
    }
}
