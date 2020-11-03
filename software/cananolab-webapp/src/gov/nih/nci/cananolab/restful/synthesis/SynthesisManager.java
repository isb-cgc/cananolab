package gov.nih.nci.cananolab.restful.synthesis;


import gov.nih.nci.cananolab.restful.core.InitSetup;
import gov.nih.nci.cananolab.restful.sample.InitCharacterizationSetup;
import gov.nih.nci.cananolab.restful.util.CommonUtil;
import gov.nih.nci.cananolab.service.sample.SynthesisService;
import gov.nih.nci.cananolab.util.StringUtils;
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

    public List<String> getPurificationNames(HttpServletRequest httpServletRequest, String purfType) throws Exception {
        if (purfType.length() == 0) {
            return null;
        }
        //TODO should probably not be in Init
        SortedSet<String> charNames = InitSynthesisSetup.getInstance()
                .getPurificationNamesByType(httpServletRequest, purfType, synthesisService);
        String[] charNameArray = new String[charNames.size()];
        charNames.toArray(charNameArray);

        List<String> charNameList = new ArrayList<String>(charNames);

        return charNameList;
    }

    public List<String> getColumnNameOptionsByType(HttpServletRequest httpRequest, String columnType, String purfType, String purfName, String assayType) throws Exception{

        if (columnType.equals("datum"))
            return getDatumNameOptions(httpRequest, purfType, purfName, assayType);
        else if (columnType.equals("condition"))
            return getConditionOptions(httpRequest);

        return new ArrayList<String>();
    }

    public List<String> getColumnValueUnitOptions(HttpServletRequest httpRequest, String columnName, String conditionProperty, boolean addOther) throws Exception{
        String valueName = columnName;

        if (!StringUtils.isEmpty(conditionProperty)) {
            if (!conditionProperty.equalsIgnoreCase("null")) //quick fix
                valueName = conditionProperty;
        }

        SortedSet<String> units = InitSetup.getInstance()
                .getDefaultAndOtherTypesByLookup(httpRequest,
                        "valueUnits", valueName, "unit", "otherUnit", true);
        // add other value unit stored in the session for the char
        SortedSet<String> otherValueUnits = (SortedSet<String>) httpRequest
                .getSession().getAttribute("otherCharValueUnits");
        if (otherValueUnits != null) {
            units.addAll(otherValueUnits);
        }

        List<String> unitList = new ArrayList<String>(units);
        if (addOther)
            //TODO this isn't returning the actual list with "other" added.
            CommonUtil.addOtherToList(unitList);
        return unitList;
    }

    public List<String> getConditionPropertyOptions(HttpServletRequest httpRequest, String columnName)throws Exception {
        SortedSet<String> properties = InitSetup.getInstance()
                .getDefaultAndOtherTypesByLookup(httpRequest,
                        "conditionProperties", columnName, "property",
                        "otherProperty", true);
        // add other condition properties stored in the session for the char
        SortedSet<String> otherConditionProperties = (SortedSet<String>) httpRequest
                .getSession().getAttribute("otherCharConditionProperties");
        if (otherConditionProperties != null) {
            properties.addAll(otherConditionProperties);
        }

        List<String> props = new ArrayList<String>(properties);
        //TODO this isn't returning the actual list with "other" added.
        CommonUtil.addOtherToList(props);

        return props;
    }

    public List<String> getDatumNumberModifier(HttpServletRequest httpRequest, String columnName, String conditionProperty, boolean addOther)throws Exception {
        String valueName = columnName;

        if (!StringUtils.isEmpty(conditionProperty)) {
            if (!conditionProperty.equalsIgnoreCase("null")) //quick fix
                valueName = conditionProperty;
        }

        SortedSet<String> units = InitSetup.getInstance()
                .getDefaultAndOtherTypesByLookup(httpRequest,
                        "numberModifier", valueName, "unit", "numberModifier", true);
        // add other value unit stored in the session for the char
        SortedSet<String> numberModifiers = (SortedSet<String>) httpRequest
                .getSession().getAttribute("numberModifier");
        if (numberModifiers != null) {
            units.addAll(numberModifiers);
        }

        List<String> unitList = new ArrayList<String>(units);
        if (addOther)
            //TODO this isn't returning the actual list with "other" added.
            CommonUtil.addOtherToList(unitList);
        return unitList;
    }

    public List<String> getDatumNameOptions(HttpServletRequest request, String characterizationType,
                                            String characterizationName, String assayType) throws Exception {
        SortedSet<String> names = InitCharacterizationSetup.getInstance()
                .getDatumNamesByCharName(request,
                        characterizationType, characterizationName, assayType);
        // add other datum names stored in the session for the char
        SortedSet<String> otherColumnNames = (SortedSet<String>) request
                .getSession().getAttribute("otherCharDatumNames");
        if (otherColumnNames != null) {
            names.addAll(otherColumnNames);
        }

        List<String> nms = new ArrayList<String>(names);
        nms.add("other");
        return nms;
    }

    public List<String> getConditionOptions(HttpServletRequest request) throws Exception {
        SortedSet<String> conditions = InitSetup.getInstance()
                .getDefaultAndOtherTypesByLookup(request,
                        "datumConditions", "condition", "name", "otherName",
                        true);
        // add other condition names stored in the session for the char
        SortedSet<String> otherCharConditionNames = (SortedSet<String>) request
                .getSession().getAttribute("otherCharConditionNames");
        if (otherCharConditionNames != null) {
            conditions.addAll(otherCharConditionNames);
        }

        List<String> nms = new ArrayList<String>(conditions);
        nms.add("other");
        return nms;
    }
}
