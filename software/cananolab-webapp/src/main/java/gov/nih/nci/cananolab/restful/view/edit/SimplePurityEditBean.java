package gov.nih.nci.cananolab.restful.view.edit;

import gov.nih.nci.cananolab.domain.common.Finding;
import gov.nih.nci.cananolab.domain.common.PurityColumnHeader;
import gov.nih.nci.cananolab.dto.common.ColumnHeader;
import gov.nih.nci.cananolab.dto.common.FindingBean;
import gov.nih.nci.cananolab.dto.common.PurityRow;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurityBean;
import java.security.PrivateKey;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import javax.enterprise.inject.New;
import javax.servlet.http.HttpServletRequest;


public class SimplePurityEditBean {
    int numberOfColumns = 0;
    int numberOfRows = 0;
    //TODO write
    private String name = "Purification Results";
    private Set<DataAndConditions> dataAndConditions = new HashSet<DataAndConditions>();

    public Set<DataAndConditions> getDataAndConditions() {
        return dataAndConditions;
    }

    public void setDataAndConditions(Set<DataAndConditions> dataAndConditions) {
        this.dataAndConditions = dataAndConditions;
    }

    public String getName() {
        return name;

    }

    public void setName(String name) {
        this.name = name;
    }

    public void transferPurificationToPurificationEdit(SimpleSynthesisPurificationBean purificationBean) {
//        List<ColumnHeader> columnHeaders = purificationBean.getColumnHeaders();
//        List<PurityColumnHeader> columnHeaders = purificationBean.getColumnHeaders();
        DataAndConditions colHeaders = new DataAndConditions();
        colHeaders.setName("colTitles");
        HashSet<String> colTitles = new HashSet<String>();
        HashMap<Integer, String> columnMap = new HashMap<Integer, String>();
        int columnCount;
        //Need to build a data object called colTitles with all the columns in order
        int i = 1;
//        for(ColumnHeader header: columnHeaders){
//            colTitles.add(header.getColumnName());
//            columnMap.put(i,header.getColumnName());
//            i++;
//        }
//        for(PurityColumnHeader header: columnHeaders){
//            colTitles.add(header.getName());
//            columnMap.put(i,header.getName());
//            i++;
//        }
        colHeaders.setValues(colTitles);

        dataAndConditions.add(colHeaders);
//        columnCount = columnHeaders.size();
//        numberOfColumns = columnHeaders.size();
        HashSet<HashMap<Integer, String>> rowSet = new HashSet<HashMap<Integer, String>>();
        if (purificationBean.getPurityBeans() != null) {
            for (SimplePurityBean purityBean : purificationBean.getPurityBeans()) {

                List<PurityColumnHeader> columnHeaders = purityBean.getColumnHeaders();
                for (PurityColumnHeader header : columnHeaders) {
                    colTitles.add(header.getName());
                    columnMap.put(i, header.getName());
                    i++;
                }
                HashMap<String, Set<DataAndConditions>> rowSets = new HashMap<String, Set<DataAndConditions>>();
                int rowCount = purityBean.getRows().size();
                numberOfRows = purityBean.getRows().size();

                for (SimplePurityRowBean rowBean : purityBean.getRows()) {
                    HashMap<Integer, String> rowMap = new HashMap<Integer, String>();
                    HashSet<String> values = new HashSet<String>();
                    DataAndConditions datumRow = new DataAndConditions();

                    for (SimplePurityCell cell : rowBean.getCells()) {
                        rowMap.put(cell.columnOrder, cell.value);
                        values.add(cell.value);

                    }
                    rowSet.add(rowMap);
                    datumRow.setValues(values);
                    datumRow.setName("Row " + rowBean.getRowNumber());
                    dataAndConditions.add(datumRow);

                }


            }
        }

    }

//    public void transferTableNumbersToEditBean(SynthesisPurityBean findingBean) {
//        if (findingBean == null) {
//            return;
//        }
//
//        findingBean.setNumberOfColumns(this.numberOfColumns);
//        findingBean.setNumberOfRows(this.numberOfRows);
//    }


}
