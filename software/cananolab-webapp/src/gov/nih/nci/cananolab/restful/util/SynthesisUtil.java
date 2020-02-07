package gov.nih.nci.cananolab.restful.util;

import gov.nih.nci.cananolab.restful.core.InitSetup;
import gov.nih.nci.cananolab.util.SampleConstants;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.SortedSet;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

public class SynthesisUtil {

    public static Map<String, Object> reformatLocalSearchDropdownsInSessionForSynthesisMaterial(HttpSession session){

        if (session==null){
            return null;
        }

        ServletContext appContext = session.getServletContext();
        Map<String, Object> typeMap = new HashMap<String, Object>();

        SortedSet<String> types = (SortedSet<String>) session.getAttribute("materialTypes");
        if (types != null)
            typeMap.put("materialTypes", new ArrayList<String>(types));

        List<String> pubChemSources = Arrays.asList(SampleConstants.PUBCHEM_DS_LIST);
        if(pubChemSources != null)
            typeMap.put("pubChemDataSources", pubChemSources);

        return typeMap;

    }

    public static Map<String,Object> reformatLocalSearchDropdownsInSessionForSynthesisMaterialElement(HttpSession session){
        if (session==null){
            return null;
        }

        ServletContext appContext = session.getServletContext();
        Map<String,Object> typeMap = new HashMap<String, Object>();

        SortedSet<String> types = (SortedSet<String>) session.getAttribute("valueUnit");
        if(types !=null){
            typeMap.put("valueUnit", types);
        }

        types = (SortedSet<String>) session.getAttribute("molecularFormulaTypes");
        if(types !=null){
            typeMap.put("molecularFormulaTypes", types);
        }

        types = (SortedSet<String>) session.getAttribute("InherentFunctionType");
        if(types !=null){
            typeMap.put("InherentFunctionType", types);
        }
        return typeMap;
    }
}
