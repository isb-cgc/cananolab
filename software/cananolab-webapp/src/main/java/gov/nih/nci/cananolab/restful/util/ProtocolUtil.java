package gov.nih.nci.cananolab.restful.util;

import gov.nih.nci.cananolab.security.enums.CaNanoPermissionEnum;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.SortedSet;

import javax.servlet.http.HttpSession;

public class ProtocolUtil
{

	public static Map<String, Object> reformatLocalSearchDropdownsInSession(HttpSession session)
	{
        if (session == null) 
        	return null;
        
		Map<String, Object> typeMap = new HashMap<String, Object>();
		
		SortedSet<String> types = (SortedSet<String>) session.getAttribute("protocolTypes");
		if (types != null) 
			typeMap.put("protocolTypes", new ArrayList<String>(types));
		
		Map<String, String> csmRoles = new HashMap<String, String>();
		csmRoles.put("R", CaNanoPermissionEnum.R.getPermValue());
		csmRoles.put("RWD", CaNanoPermissionEnum.R.getPermValue() + " " + CaNanoPermissionEnum.W.getPermValue() + " " + CaNanoPermissionEnum.D.getPermValue());
		if (types != null) 
			typeMap.put("csmRoleNames", csmRoles);
		
		return typeMap;
	}

}
