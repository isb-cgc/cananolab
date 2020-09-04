/*
 *  Copyright Leidos
 *  Copyright Leidos Biomedical
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/cananolab/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.dto.common.table;

import gov.nih.nci.cananolab.domain.common.PurityDatum;
import gov.nih.nci.cananolab.domain.common.PurityDatumCondition;
import gov.nih.nci.cananolab.dto.common.FindingBean;
import gov.nih.nci.cananolab.util.Constants;
import gov.nih.nci.cananolab.util.StringUtils;
import java.util.Date;

/**
 * View bean for a cell in a table
 *
 * @author pansu
 *
 */
public class PurityTableCell {
	Long id;
	String value;
	String operand = "=";
	String datumOrCondition;
	PurityDatumCondition condition = new PurityDatumCondition();
	PurityDatum datum = new PurityDatum();

	// FR# 26194, matrix column order.
	Integer columnOrder;
	Date createdDate;
	String createdBy;
	Long columnId;

	public PurityTableCell() {
	}


	public PurityTableCell(PurityDatum datum) {
		this.datumOrCondition = FindingBean.DATUM_TYPE;
		// display bogus placeholder datum as emtpy string
		if (datum.getValue() == null
				|| datum.getValue() == -1
				&& datum.getCreatedBy().contains(
				Constants.PLACEHOLDER_DATUM_CONDITION_CREATED_BY)) {
			this.value = "";
		}
		// remove .0 from boolean
		else if (datum.getValueType() != null
				&& datum.getValueType().equals("boolean")) {
			if (datum.getValue() == 1) {
				// remove .0 from number
				this.value = "1";
			} else if (datum.getValue() == 0) {
				this.value = "0";
			}
		} else {
			this.value = datum.getValue().toString();
			this.operand = datum.getOperand();
		}
		this.datum = datum;
		this.condition = null;
		this.createdDate = datum.getCreatedDate();
		this.id = datum.getId();
		this.createdBy = datum.getCreatedBy();
		this.columnId= datum.getColumnId();
	}

	public PurityTableCell(PurityDatumCondition condition) {
		this.datumOrCondition = "condition";
		if (!StringUtils.isEmpty(condition.getValue()) && condition.getValue().contains(
				Constants.PLACEHOLDER_DATUM_CONDITION_CREATED_BY)
				&& !StringUtils.isEmpty(condition.getCreatedBy()) && condition.getCreatedBy().contains(
						Constants.PLACEHOLDER_DATUM_CONDITION_CREATED_BY)) {
			this.value = "";
		} else {
			this.value = condition.getValue();
			this.operand=condition.getOperand();
		}
		this.condition = condition;
		this.datum = null;
		this.createdDate = condition.getCreatedDate();
		this.id=condition.getId();
		this.createdBy= condition.getCreatedBy();
		this.columnId= condition.getColumnId();
	}

	/**
	 * @return the datumOrCondition
	 */
	public String getDatumOrCondition() {
		return datumOrCondition;
	}

	/**
	 * @param datumOrCondition
	 *            the datumOrCondition to set
	 */
	public void setDatumOrCondition(String datumOrCondition) {
		this.datumOrCondition = datumOrCondition;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public PurityDatum getPurityDatum() {return datum;}

	public void setPurityDatum(PurityDatum purityDatum){
		this.datum = purityDatum;
	}

	public PurityDatumCondition getCondition() {
		return condition;
	}

	public void setCondition(PurityDatumCondition condition) {
		this.condition = condition;
	}

	public Integer getColumnOrder() {
		return columnOrder;
	}

	public void setColumnOrder(Integer columnOrder) {
		this.columnOrder = columnOrder;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}
	
	public String getOperand(){
		return this.operand;
	}
	
	public void setOperand(String operand){
		this.operand = operand;
	}

	public void setId(Long id){
		this.id = id;
	}

	public Long getId(){
		return this.id;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public void setColumnId(Long columnId) {
		this.columnId = columnId;
	}

	public Long getColumnId(){
		return columnId;
	}
}
