package gov.nih.nci.cananolab.restful.util;

import gov.nih.nci.cananolab.dto.common.ProtocolBean;
import gov.nih.nci.cananolab.restful.core.InitSetup;
import gov.nih.nci.cananolab.util.SampleConstants;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.SortedSet;
import java.util.TreeSet;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

public class SynthesisUtil {

    public static Map<String, Object> reformatLocalSearchDropdownsInSessionForSynthesisMaterial(HttpSession session){

        if (session==null){
            return null;
        }

        ServletContext appContext = session.getServletContext();
        Map<String, Object> typeMap = new HashMap<String, Object>();

        //TODO  "Reagent" is not on list returned.  "Synthesis" is.  Align this and clean it up
        SortedSet<String> types = (SortedSet<String>) session.getAttribute("materialTypes");
        if (types != null)
            typeMap.put("materialTypes", new ArrayList<String>(types));


        List<String> pubChemSources = Arrays.asList(SampleConstants.PUBCHEM_DS_LIST);
        if(pubChemSources != null)
            typeMap.put("pubChemDataSources", pubChemSources);


        types = (SortedSet<String>) session.getAttribute("fileTypes");
        if (types != null)
            typeMap.put("fileTypes", new ArrayList<String>(types));

        //TODO Supplier Name - currently free form text



        Map<String,Object> newMap = reformatLocalSearchDropdownsInSessionForSynthesisMaterialElement(session);
        typeMap.putAll(newMap);
        return typeMap;

    }


    public static Map<String,Object> reformatLocalSearchDropdownsInSessionForSynthesisMaterialElement(HttpSession session){
        if (session==null){
            return null;
        }

        ServletContext appContext = session.getServletContext();
        Map<String,Object> typeMap = new HashMap<String, Object>();

        SortedSet<String> types = (SortedSet<String>) session.getAttribute("amountUnits");
        if(types !=null){
            typeMap.put("amountUnits", types);
        }

        types = (SortedSet<String>) session.getAttribute("formulaTypes");
        if(types !=null){
            typeMap.put("formulaTypes", types);
        }

        types = (SortedSet<String>) session.getAttribute("inherentFunctionTypes");
        if(types !=null){
            typeMap.put("inherentFunctionTypes", types);
        }
        return typeMap;
    }

    public static Map<String, Object> reformatLocalSearchDropdownsInSessionForSynthesisPurification(HttpSession session) {
        //TODO write
        Map<String, Object> typeMap = new HashMap<String, Object>();
        SortedSet<String> types = (SortedSet<String>) session.getAttribute("purityTypes");
        if (types != null)
            typeMap.put("purificationTypes", new ArrayList<String>(types));

        types = (SortedSet<String>) session.getAttribute("supplierNames");
        if(types!=null)
            typeMap.put("supplierNames", types);
        return typeMap;
    }
}
