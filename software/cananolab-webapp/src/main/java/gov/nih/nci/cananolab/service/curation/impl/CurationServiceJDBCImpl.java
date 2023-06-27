/*L
 *  Copyright Leidos
 *  Copyright Leidos Biomedical
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/cananolab/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.service.curation.impl;

import gov.nih.nci.cananolab.dto.common.DataReviewStatusBean;
import gov.nih.nci.cananolab.exception.CurationException;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.security.enums.SecureClassesEnum;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;
import gov.nih.nci.cananolab.service.curation.CurationService;
import java.sql.SQLException;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
//import org.springframework.jdbc.core.simple.ParameterizedRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Component;

//@Transactional(readOnly=false, propagation=Propagation.REQUIRED)
@Component("curationServiceDAO")
public class CurationServiceJDBCImpl extends JdbcDaoSupport implements CurationService
{
	@Autowired
	private DataSource dataSource;
	
	@PostConstruct
	private void initialize() {
		setDataSource(dataSource);
	}
	
	@Autowired
	private SpringSecurityAclService springSecurityAclService;

	// WJRL 12/1/22: This was hardwired to "canano.data_status_review". The database
	// is specified in the build properties, and should not be hardwired here:
	private static final String REVIEW_STATUS_TABLE = "data_review_status";
	private static final String REVIEW_STATUS_TABLE_DATA_ID_COL = "data_id";
	private static final String REVIEW_STATUS_TABLE_DATA_NAME_COL = "data_name";
	private static final String REVIEW_STATUS_TABLE_DATA_TYPE_COL = "data_type";
	private static final String REVIEW_STATUS_TABLE_STATUS_COL = "status";
	private static final String REVIEW_STATUS_TABLE_SUBMITTED_BY_COL = "submitted_by";
	private static final String REVIEW_STATUS_TABLE_SUBMITTED_DATE_COL = "submitted_date";
	private static final String REVIEW_STATUS_TABLE_ALL_COLS = REVIEW_STATUS_TABLE_DATA_ID_COL
			+ ", "
			+ REVIEW_STATUS_TABLE_DATA_NAME_COL
			+ ", "
			+ REVIEW_STATUS_TABLE_DATA_TYPE_COL
			+ ", "
			+ REVIEW_STATUS_TABLE_STATUS_COL
			+ ", "
			+ REVIEW_STATUS_TABLE_SUBMITTED_BY_COL
			+ ", "
			+ REVIEW_STATUS_TABLE_SUBMITTED_DATE_COL;

//	private ParameterizedRowMapper<DataReviewStatusBean> dataReviewStatusRowMapper;
	private RowMapper<DataReviewStatusBean> dataReviewStatusRowMapper;

//	public ParameterizedRowMapper<DataReviewStatusBean> getDataReviewStatusRowMapper()
//			throws SQLException {
		public RowMapper<DataReviewStatusBean> getDataReviewStatusRowMapper()
			throws SQLException {
		dataReviewStatusRowMapper = (rs, rowNum) -> {
			DataReviewStatusBean dataStatusBean = new DataReviewStatusBean();
			dataStatusBean.setDataId(rs
					.getString(REVIEW_STATUS_TABLE_DATA_ID_COL));
			dataStatusBean.setDataName(rs
					.getString(REVIEW_STATUS_TABLE_DATA_NAME_COL));
			dataStatusBean.setDataType(rs
					.getString(REVIEW_STATUS_TABLE_DATA_TYPE_COL));
			dataStatusBean.setReviewStatus(rs
					.getString(REVIEW_STATUS_TABLE_STATUS_COL));
			dataStatusBean.setSubmittedBy(rs
					.getString(REVIEW_STATUS_TABLE_SUBMITTED_BY_COL));
			dataStatusBean.setSubmittedDate(rs
					.getDate(REVIEW_STATUS_TABLE_SUBMITTED_DATE_COL));
			return dataStatusBean;
		};
		return dataReviewStatusRowMapper;
	}

	public List<DataReviewStatusBean> findDataPendingReview() throws CurationException, NoAccessException
	{
		List<DataReviewStatusBean> pendingDataList = null;
		if (!SpringSecurityUtil.getPrincipal().isCurator()) {
			throw new NoAccessException();
		}
		try {
			JdbcTemplate template = this.getJdbcTemplate();
			String sql = "select " + REVIEW_STATUS_TABLE_ALL_COLS + " from "
					+ REVIEW_STATUS_TABLE + " where "
					+ REVIEW_STATUS_TABLE_STATUS_COL + "=?";
			Object[] args = { DataReviewStatusBean.PENDING_STATUS };
			pendingDataList = template.query(sql, args, getDataReviewStatusRowMapper());
		} catch (Exception e) {
			String error = "Error retrieving data review status: ";
			throw new CurationException(error, e);
		}
		return pendingDataList;
	}

	public DataReviewStatusBean findDataReviewStatusBeanByDataId(String dataId, String classTag)
			throws CurationException, NoAccessException
	{
		DataReviewStatusBean dataReviewStatusBean = null;
		try {
//			if (!securityService.checkCreatePermission(dataId)) {
//				throw new NoAccessException();
//			}
			JdbcTemplate template = this.getJdbcTemplate();
			String sql = "SELECT " + REVIEW_STATUS_TABLE_ALL_COLS
					     + " FROM " + REVIEW_STATUS_TABLE
					     + " WHERE " + REVIEW_STATUS_TABLE_DATA_ID_COL + " = ?"
					     + " AND " + REVIEW_STATUS_TABLE_DATA_TYPE_COL + " = ?";
			Object[] args = { dataId, classTag };
			List result = template.query(sql, args, getDataReviewStatusRowMapper());
			if (result.size() > 1) {
				String error = "Multiple status review entries for ID and Type " + dataId + " " + classTag;
				throw new CurationException(error);
			} else if (result.size() == 1) {
				dataReviewStatusBean = (DataReviewStatusBean)result.get(0);
			}
		} catch (Exception e) {
			String error = "Error finding existing pending for review data by Id";
			throw new CurationException(error, e);
		}
		return dataReviewStatusBean;
	}

	private int insertDataReviewStatusBean(
			DataReviewStatusBean dataReviewStatusBean) {
		String sql = "insert into " + REVIEW_STATUS_TABLE + "("
				+ REVIEW_STATUS_TABLE_ALL_COLS + ") values(?,?,?,?,?,?)";
		Object[] args = { dataReviewStatusBean.getDataId(),
				dataReviewStatusBean.getDataName(),
				dataReviewStatusBean.getDataType(),
				dataReviewStatusBean.getReviewStatus(),
				dataReviewStatusBean.getSubmittedBy(),
				dataReviewStatusBean.getSubmittedDate() };
        return this.getJdbcTemplate().update(sql, args);
	}

	private void updateOrDeleteDataReviewStatusBean(DataReviewStatusBean dataReviewStatusBean) {
		//
		// WJRL 12/1/22: Previously, if a sample was deleted, it was entered
		// into this table as deleted (even if it was not originally here). Plus,
		// if the deletion was successful (not always true), we would be placing
		// a now freed-up primary key into this table which could be picked up
		// by the next item created (see issue #196). Thus, if an element
		// is being "updated" to deleted, the correct approach is to
		// delete it if it is present, and ignore it otherwise.
		//
		if (dataReviewStatusBean.getReviewStatus().equals(DataReviewStatusBean.DELETED_STATUS)) {
			String sql = "DELETE FROM " + REVIEW_STATUS_TABLE + " WHERE "
					+ REVIEW_STATUS_TABLE_DATA_TYPE_COL + " = \"" + dataReviewStatusBean.getDataType() +"\" AND "
					+ REVIEW_STATUS_TABLE_DATA_ID_COL + " = " + dataReviewStatusBean.getDataId();
			System.out.println("Submitting " + sql);
			this.getJdbcTemplate().execute(sql);
			System.out.println("finished " + sql + " to delete");
		} else {
			String sql = "update " + REVIEW_STATUS_TABLE + " set "
					+ REVIEW_STATUS_TABLE_DATA_NAME_COL + "= ?, "
					+ REVIEW_STATUS_TABLE_STATUS_COL + "=? where "
					+ REVIEW_STATUS_TABLE_DATA_ID_COL + "= ?";

			Object[] args = {dataReviewStatusBean.getDataName(),
					dataReviewStatusBean.getReviewStatus(),
					dataReviewStatusBean.getDataId()};
			this.getJdbcTemplate().update(sql, args);
		}
		return;
	}

	public void submitDataForReview(DataReviewStatusBean dataReviewStatusBean) throws CurationException, NoAccessException
	{
		try
		{
			String dataType = dataReviewStatusBean.getDataType();
			Class clazz = null;
			if (SecureClassesEnum.SAMPLE.toString().equalsIgnoreCase(dataType))
				clazz = SecureClassesEnum.SAMPLE.getClazz();
			else if (SecureClassesEnum.PROTOCOL.toString().equalsIgnoreCase(dataType))
				clazz = SecureClassesEnum.PROTOCOL.getClazz();
			else if (SecureClassesEnum.PUBLICATION.toString().equalsIgnoreCase(dataType))
				clazz = SecureClassesEnum.PUBLICATION.getClazz();
			System.out.println("submitDataForReview " + dataType);
			if (!springSecurityAclService.currentUserHasWritePermission(Long.valueOf(dataReviewStatusBean.getDataId()), clazz)) {
				String error = "Current user has no write access to item";
				throw new NoAccessException(error);
			}
			DataReviewStatusBean existingBean = findDataReviewStatusBeanByDataId(dataReviewStatusBean.getDataId(), dataType);

			if (existingBean != null) {
				System.out.println("updated or delete");
				this.updateOrDeleteDataReviewStatusBean(dataReviewStatusBean);
				System.out.println("successful return");
			} else if (!dataReviewStatusBean.getReviewStatus().equals(DataReviewStatusBean.DELETED_STATUS)) {
				this.insertDataReviewStatusBean(dataReviewStatusBean);
			}
		} catch (NoAccessException e) {
			throw e;
		} catch (Exception e) {
			System.out.println("Exception " + e);
			String error = "Error in submitting data for curator review";
			throw new CurationException(error, e);
		}
	}
}