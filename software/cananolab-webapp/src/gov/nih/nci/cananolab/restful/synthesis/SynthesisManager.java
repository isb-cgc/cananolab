package gov.nih.nci.cananolab.restful.synthesis;


import gov.nih.nci.cananolab.restful.core.InitSetup;
import gov.nih.nci.cananolab.service.sample.SynthesisService;
import java.util.ArrayList;
import java.util.List;
import java.util.SortedSet;
import javax.servlet.http.HttpServletRequest;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly=false, propagation= Propagation.REQUIRED)
@Component("synthesisManager")
public class SynthesisManager {

    private final static Logger logger = Logger.getLogger(SynthesisManager.class);

    @Autowired
    private SynthesisService synthesisService;

    public List<String> getAssayTypes(HttpServletRequest request, String purificationName)
            throws Exception {
        SortedSet<String> assayTypes = // setup Assay Type drop down.
                InitSetup.getInstance().getDefaultAndOtherTypesByLookup(
                        request, "purificationNameAssays",
                        purificationName, "assayType", "otherAssayType", true);

        List<String> types = new ArrayList<String>(assayTypes);
        return types;
    }

    public List<String> getPurificationNames(HttpServletRequest httpServletRequest, String purfType) {
        //TODO write
        return null;
    }

    public List<String> getColumnNameOptionsByType(HttpServletRequest httpRequest, String columnType, String purfType, String purfName, String assayType) {
        //TODO write
        return null;
    }

    public List<String> getColumnValueUnitOptions(HttpServletRequest httpRequest, String columnName, String conditionProperty, boolean b) {
        //TODO write
        return null;
    }

    public List<String> getConditionPropertyOptions(HttpServletRequest httpRequest, String columnName) {
        //TODO write
        return null;
    }

    public List<String> getDatumNumberModifier(HttpServletRequest httpRequest, String columnName, String conditionProperty, boolean b) {
        //TODO write
        return null;
    }

}
