package gov.nih.nci.cananolab.service.favorites.impl;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import gov.nih.nci.cananolab.dto.common.FavoriteBean;
import gov.nih.nci.cananolab.exception.FavoriteException;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;
import gov.nih.nci.cananolab.service.BaseServiceLocalImpl;
import gov.nih.nci.cananolab.service.favorites.FavoritesService;
import gov.nih.nci.cananolab.service.favorites.helper.FavoritesServiceHelper;
import gov.nih.nci.cananolab.system.applicationservice.CaNanoLabApplicationService;
import gov.nih.nci.cananolab.system.applicationservice.client.ApplicationServiceProvider;

@Component("favoritesService")
public class FavoritesServiceLocalImpl extends BaseServiceLocalImpl implements FavoritesService
{
	private static Logger logger = LogManager.getLogger(FavoritesServiceLocalImpl.class);
	
	@Autowired
	private FavoritesServiceHelper favoritesServiceHelper;

	@Autowired
	private SpringSecurityAclService springSecurityAclService;

	public void addFavorite(FavoriteBean bean, HttpServletRequest request) throws FavoriteException, NoAccessException
	{
		try{
		bean.setId(null);
		bean.setLoginName(SpringSecurityUtil.getLoggedInUserName());
		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();

		appService.saveOrUpdate(bean);
		}catch(Exception e){
			e.printStackTrace();
		}
	}

	@Override
	public void deleteFromFavorite(FavoriteBean bean, HttpServletRequest request) throws FavoriteException, NoAccessException
	{
		CaNanoLabApplicationService appService;
		try {
			appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
			appService.delete(bean);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

	@Override
	public FavoriteBean findFavoriteById(String dataId, String loginName) throws FavoriteException, NoAccessException
	{
		FavoriteBean bean = null;
		try {
			bean = favoritesServiceHelper.findFavouritesById(dataId, loginName);
			
		} catch (Exception e) {
			String err = "Problem finding the favorite by id: " + dataId;
			logger.error(err, e);
			throw new FavoriteException(err, e);
		}
		return bean;
	}

	@Override
	public List<FavoriteBean> findFavorites(HttpServletRequest request) throws FavoriteException, NoAccessException
	{
		List<FavoriteBean> list = null;
		try {
			list = favoritesServiceHelper.findFavourites(request);
			
		} catch (Exception e) {
			String err = "Problem finding the favorite ";
			logger.error(err, e);
			throw new FavoriteException(err, e);
		}
		return list;
	}

	@Override
	public SpringSecurityAclService getSpringSecurityAclService() {
		return springSecurityAclService;
	}

}
