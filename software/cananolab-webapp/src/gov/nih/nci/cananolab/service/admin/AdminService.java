/*L
 *  Copyright Leidos
 *  Copyright Leidos Biomedical
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/cananolab/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.service.admin;

import gov.nih.nci.cananolab.dto.admin.SitePreferenceBean;
import gov.nih.nci.cananolab.dto.admin.VisitorCountBean;
import gov.nih.nci.cananolab.service.security.UserBean;


/**
 * Interface for site preference and visitor counter.
 */
public interface AdminService {
	/**
	 * Get Site Preference, including site name and logo file name. 
	 * 
	 * @throws Exception
	 */
    SitePreferenceBean getSitePreference() throws Exception;

	/**
	 * Save Site Preference, including site name and logo file name. 
	 * 
	 * @param sitePreference
	 * @param user
	 * @return number of rows updated
	 * @throws Exception
	 */
    int updateSitePreference(SitePreferenceBean sitePreference,
                             UserBean user) throws Exception;

	/**
	 * Increase Visitor Count
	 * 
	 * @return number of rows updated
	 * @throws Exception
	 */
    int increaseVisitorCount() throws Exception;

	/**
	 * Get Visitor Count
	 * 
	 * @throws Exception
	 */
    VisitorCountBean getVisitorCount() throws Exception;

	/**
	 * Update Visitor Count
	 * 
	 * @param newCount
	 * @param user
	 * @return number of rows updated
	 * @throws Exception
	 */
    int updatedVisitorCount(VisitorCountBean newCount, UserBean user) throws Exception;
}
