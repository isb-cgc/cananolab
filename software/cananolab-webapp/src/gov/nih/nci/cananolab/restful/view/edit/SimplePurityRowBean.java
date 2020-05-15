package gov.nih.nci.cananolab.restful.view.edit;

import gov.nih.nci.cananolab.dto.common.PurityRow;
import gov.nih.nci.cananolab.dto.common.Row;
import gov.nih.nci.cananolab.dto.common.table.PurityTableCell;
import gov.nih.nci.cananolab.dto.common.table.TableCell;
import java.util.ArrayList;
import java.util.List;

public class SimplePurityRowBean {
	List<SimplePurityCell> cells = new ArrayList<SimplePurityCell>();

	public List<SimplePurityCell> getCells() {
		return cells;
	}

	public void setCells(List<SimplePurityCell> cells) {
		this.cells = cells;
	}
	
	public void transferFromRow(PurityRow beanRow) {
		if (beanRow == null) return;
		
		List<PurityTableCell> cells = beanRow.getCells();
		this.cells.clear();
		if (cells == null) return;
		
		for (PurityTableCell cell : cells) {
			SimplePurityCell simpleCell = new SimplePurityCell();
			simpleCell.transferFromTableCell(cell);
			this.cells.add(simpleCell);
		}
	}
	
	public void transferToRow(PurityRow rowBean) {
		if (this.cells == null) return;
		if (rowBean == null) return;
		
		rowBean.getCells().clear();
		
		for (SimplePurityCell cell : cells) {
			PurityTableCell cellBean = new PurityTableCell();
			cell.transferToTableCell(cellBean);
			rowBean.getCells().add(cellBean);
		}
	}
}

