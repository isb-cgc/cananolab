/*L
 *  Copyright Leidos
 *  Copyright Leidos Biomedical
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/cananolab/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.dto.common;

import gov.nih.nci.cananolab.dto.common.table.PurityTableCell;
import java.util.ArrayList;
import java.util.List;

/**
 * View bean for a row in a table
 *
 * @author pansu
 *
 */
public class PurityRow {
	private List<PurityTableCell> cells = new ArrayList<PurityTableCell>();

	public PurityRow() {
	}

	public List<PurityTableCell> getCells() {
		return cells;
	}

	public void setCells(List<PurityTableCell> cells) {
		this.cells = cells;
	}

	public void addCell(PurityTableCell cell){
		cells.add(cell);
	}

	public void removeCell(PurityTableCell cell){
		cells.remove(cell);
	}

	public void removeCellById(Long id){
		for (PurityTableCell cell:cells){
			if (cell.getId().equals(id)){
				removeCell(cell);
				return;
			}
		}
	}


}
