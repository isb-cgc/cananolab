/*L
 *  Copyright Leidos
 *  Copyright Leidos Biomedical
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/cananolab/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.dto.common;

import gov.nih.nci.cananolab.exception.CurationException;
import gov.nih.nci.cananolab.security.enums.SecureClassesEnum;

import java.util.Date;

public class DataReviewStatusBean {
	public static final String PENDING_STATUS = "pending"; //pending review
	public static final String PUBLIC_STATUS = "public"; //passed review and assigned to public
	public static final String RETRACTED_STATUS = "retracted"; //retracted from public
	public static final String DELETED_STATUS = "deleted"; //delete from database

	private String dataId;
	private String dataName;
	private String dataType;
	private Date submittedDate;
	private String submittedBy;
	private String reviewStatus;
	private String reviewLink;

	private final static String SAMPLE_LINK_PREFIX = "/#/editSample?sampleId=";
	private final static String PUBLICATION_LINK_PREFIX = "/#/editPublication?publicationId=";
	private final static String PROTOCOL_LINK_PREFIX = "/#/editProtocol?protocolId=";

	public DataReviewStatusBean() {
	}

	public String getDataId() {
		return dataId;
	}

	public void setDataId(String dataId) {
		this.dataId = dataId;
	}

	public String getDataName() {
		return dataName;
	}

	public void setDataName(String dataName) {
		this.dataName = dataName;
	}

	public String getDataType() {
		return dataType;
	}

	public void setDataType(String dataType) {
		this.dataType = dataType;
	}

	public Date getSubmittedDate() {
		return submittedDate;
	}

	public void setSubmittedDate(Date submittedDate) {
		this.submittedDate = submittedDate;
	}

	public String getSubmittedBy() {
		return submittedBy;
	}

	public void setSubmittedBy(String submittedBy) {
		this.submittedBy = submittedBy;
	}

	public String getReviewStatus() {
		return reviewStatus;
	}

	public void setReviewStatus(String reviewStatus) {
		this.reviewStatus = reviewStatus;
	}

	public String getReviewLink() {
		if (dataType.equalsIgnoreCase("sample")) {
			reviewLink = SAMPLE_LINK_PREFIX;
		} else if (dataType.equalsIgnoreCase("publication")) {
			reviewLink = PUBLICATION_LINK_PREFIX;
		} else if (dataType.equalsIgnoreCase("protocol")) {
			reviewLink = PROTOCOL_LINK_PREFIX;
		} else {
			reviewLink = "";
		}
		reviewLink += dataId;
		return reviewLink;
	}

	public static String getDataTypeTag(SecureClassesEnum dataType) {
		return (dataType.toString().toLowerCase());
	}
}
