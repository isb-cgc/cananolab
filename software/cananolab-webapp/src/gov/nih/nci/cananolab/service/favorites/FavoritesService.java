package gov.nih.nci.cananolab.service.favorites;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import gov.nih.nci.cananolab.dto.common.FavoriteBean;
import gov.nih.nci.cananolab.exception.FavoriteException;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.service.BaseService;

/**
 * This interface defines methods involved in adding and deleting the samples, publications and protocols to the myFavourites section
 *
 * @author jonnalah
 *
 */
public interface FavoritesService extends BaseService{

	void addFavorite(FavoriteBean bean, HttpServletRequest request)
			throws FavoriteException, NoAccessException;
	
	void deleteFromFavorite(FavoriteBean bean, HttpServletRequest request)
			throws FavoriteException, NoAccessException;
	
	FavoriteBean findFavoriteById(String dataId, String loginName)
			throws FavoriteException, NoAccessException;

	List<FavoriteBean> findFavorites(HttpServletRequest request)
			throws FavoriteException, NoAccessException;
}
