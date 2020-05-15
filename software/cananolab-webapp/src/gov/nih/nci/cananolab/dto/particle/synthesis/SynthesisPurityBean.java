package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.common.PurityDatum;
import gov.nih.nci.cananolab.domain.common.PurityDatumCondition;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurity;
import gov.nih.nci.cananolab.dto.common.BadCellInputException;
import gov.nih.nci.cananolab.dto.common.ColumnHeader;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.common.PurityRow;
import gov.nih.nci.cananolab.dto.common.table.PurityTableCell;
import gov.nih.nci.cananolab.util.Comparators;
import gov.nih.nci.cananolab.util.Constants;
import gov.nih.nci.cananolab.util.DateUtils;
import gov.nih.nci.cananolab.util.StringUtils;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;

//public class SynthesisPurityBean {
//    //TODO write
//
//    SynthesisPurity domain;
//    private List<FileBean> files = new ArrayList<FileBean>();
//    private List<PurityDatum> datums = new ArrayList<PurityDatum>();
//    //CreatedBy
//    //CreatedDate
//
//    //purity_datum
//    //  -- purity_datum_condition
//    //  -- -- experiment_condition
//
//    public  SynthesisPurityBean(SynthesisPurity synthesisPurity){
//        domain = synthesisPurity;
//
//        for (File file: synthesisPurity.getFiles()){
//            files.add( new FileBean( file ) );
//        }
//        Collections.sort( files, new Comparators.FileBeanDateComparator() );
//
//        if( synthesisPurity.getPurityDatumCollection() != null )
//        {
//            datums = new ArrayList<PurityDatum>( synthesisPurity.getPurityDatumCollection() );
//            Collections.sort( datums, new Comparators.PurityDatumDateComparator() );
//        }
//
//    }
//
//    public List<FileBean> getFiles()
//    {
//        return files;
//    }
//
//    public void setFiles( List<FileBean> files )
//    {
//        this.files = files;
//    }
//
//    public List<PurityDatum> getDatum(){return datums;}
//    public void setDatum(List<PurityDatum> datums){
//        this.datums = datums;
//    }
//}

public class SynthesisPurityBean
{
    public static final String DATUM_TYPE = "purity datum";
    public static final String CONDITION_TYPE = "condition";
    private List<PurityRow> rows = new ArrayList<PurityRow>();
    private List<FileBean> files = new ArrayList<FileBean>();
    private List<ColumnHeader> columnHeaders = new ArrayList<ColumnHeader>();
    private int numberOfColumns;
    private int numberOfRows;
    private FileBean fileBeingEdited;
    private int theFileIndex;
    private SynthesisPurity domain = new SynthesisPurity();
    Long id;

    public SynthesisPurityBean()
    {
    }


    public SynthesisPurityBean( SynthesisPurity synthesisPurity)
    {
        //TODO rewrite?
        domain = synthesisPurity;
        id = synthesisPurity.getId();
        List<PurityDatum> data = null;
        if( synthesisPurity.getPurityDatumCollection() != null )
        {
            data = new ArrayList<PurityDatum>( synthesisPurity.getPurityDatumCollection() );
            Collections.sort( data, new Comparators.PurityDatumDateComparator() );
        }

        if( synthesisPurity.getFiles() != null
                && ! synthesisPurity.getFiles().isEmpty() )
        {
            for( File file : synthesisPurity.getFiles() )
            {
                files.add( new FileBean( file ) );
            }
            Collections.sort( files, new Comparators.FileBeanDateComparator() );
        }

        // generate matrix
        if( data != null && ! data.isEmpty() )
        {
            // get data matrix column headers and generate a map based
            // on headers.
            Map<ColumnHeader, List<PurityDatum>> datumMap = new HashMap<ColumnHeader, List<PurityDatum>>();
            Map<ColumnHeader, List<PurityDatumCondition>> conditionMap = new HashMap<ColumnHeader, List<PurityDatumCondition>>();

            List<PurityDatum> datumList = new ArrayList<PurityDatum>();
            List<PurityDatumCondition> conditionList = new ArrayList<PurityDatumCondition>();
            for( PurityDatum datum : data )
            {
                // add datum column
                ColumnHeader datumColumn = new ColumnHeader( datum );
                if( ! columnHeaders.contains( datumColumn ) )
                {
                    columnHeaders.add( datumColumn );
                }
                if( datumMap.get( datumColumn ) != null )
                {
                    datumList = datumMap.get( datumColumn );
                }
                else
                {
                    datumList = new ArrayList<PurityDatum>();
                    datumMap.put( datumColumn, datumList );
                }
                datumList.add( datum );
                // add condition columns
                if( datum.getConditionCollection() != null )
                {
                    List<PurityDatumCondition> conditions = new ArrayList<PurityDatumCondition>( datum
                            .getConditionCollection() );
                    Collections.sort( conditions,
                            new Comparators.PurityConditionDateComparator() );
                    for( PurityDatumCondition condition : conditions )
                    {
                        ColumnHeader conditionColumn = new ColumnHeader(
                                condition );
                        if( ! columnHeaders.contains( conditionColumn ) )
                        {
                            columnHeaders.add( conditionColumn );
                        }
                        if( conditionMap.get( conditionColumn ) != null )
                        {
                            conditionList = conditionMap.get( conditionColumn );
                        }
                        else
                        {
                            conditionList = new ArrayList<PurityDatumCondition>();
                            conditionMap.put( conditionColumn, conditionList );
                        }
                        // in case of copied Finding, ids are all null before
                        // persisting
                        if( condition.getId() != null )
                        {
                            if( ! conditionList.contains( condition ) )
                            {
                                conditionList.add( condition );
                            }
                        }
                        // use created_by field that contains the original ID to
                        // test whether condition is already in the list
                        else
                        {
                            boolean existed = false;
                            for( PurityDatumCondition cond : conditionList )
                            {
                                if( cond.getCreatedBy().equals(
                                        condition.getCreatedBy() ) )
                                {
                                    existed = true;
                                    break;
                                }
                            }
                            if( ! existed )
                            {
                                conditionList.add( condition );
                            }
                        }
                    }
                }
            }
            // sort column headers by created date and set column orders
            setupColumnOrder();

            int numRows = - 1;
            // iterate through all datum columns and find the biggest list size
            // as the number of rows
            for( Map.Entry<ColumnHeader, List<PurityDatum>> entry : datumMap
                    .entrySet() )
            {
                int numData = entry.getValue().size();
                if( numData > numRows )
                {
                    numRows = numData;
                }
            }
            // iterate through all condition columns and find the biggest list
            // size as the number of rows
            for( Map.Entry<ColumnHeader, List<PurityDatumCondition>> entry : conditionMap
                    .entrySet() )
            {
                int numConditions = entry.getValue().size();
                if( numConditions > numRows )
                {
                    numRows = numConditions;
                }
            }
            numberOfRows = numRows;
            numberOfColumns = columnHeaders.size();

            for( int i = 0; i < numberOfRows; i++ )
            {
                PurityRow row = new PurityRow();
                for( int j = 0; j < numberOfColumns; j++ )
                {
                    ColumnHeader theHeader = columnHeaders.get( j );
                    if( theHeader.getColumnType()
                            .equals( SynthesisPurityBean.DATUM_TYPE ) )
                    {
                        PurityDatum datum = new PurityDatum();
                        if( datumMap.get( theHeader ) != null
                                && datumMap.get( theHeader ).size() > i )
                        {
                            datum = datumMap.get( theHeader ).get( i );
                        }
                        row.getCells().add( new PurityTableCell( datum ) );
                    }
                    else if( theHeader.getColumnType().equals(
                            SynthesisPurityBean.CONDITION_TYPE ) )
                    {
                        PurityDatumCondition condition = new PurityDatumCondition();
                        if( conditionMap.get( theHeader ) != null
                                && conditionMap.get( theHeader ).size() > i )
                        {
                            condition = conditionMap.get( theHeader ).get( i );
                        }
                        row.getCells().add( new PurityTableCell( condition ) );
                    }
                }
                rows.add( row );
            }
            updateColumnOrder();
        }
    }

    public List<PurityRow> getRows()
    {
        return rows;
    }

    public void setRows( List<PurityRow> rows )
    {
        this.rows = rows;
    }

    public List<ColumnHeader> getColumnHeaders()
    {
        return columnHeaders;
    }

    public void setColumnHeaders( List<ColumnHeader> columnHeaders )
    {
        this.columnHeaders = columnHeaders;
    }

    public int getNumberOfColumns()
    {
        return numberOfColumns;
    }

    public void setNumberOfColumns( int numberOfColumns )
    {
        this.numberOfColumns = numberOfColumns;
    }

    public int getNumberOfRows()
    {
        return numberOfRows;
    }

    public void setNumberOfRows( int numberOfRows )
    {
        this.numberOfRows = numberOfRows;
    }

    public void updateMatrix( int numberOfColumns, int numberOfRows )
    {
        this.numberOfColumns = numberOfColumns;
        this.numberOfRows = numberOfRows;
        List<ColumnHeader> newColumns = new ArrayList<ColumnHeader>();
        if( columnHeaders.size() <= numberOfColumns )
        {
            newColumns.addAll( columnHeaders );
            for( int i = columnHeaders.size(); i < numberOfColumns; i++ )
            {
                newColumns.add( new ColumnHeader() );
            }
        }
        // remove the columnHeaders from the end
        else
        {
            for( int i = 0; i < numberOfColumns; i++ )
            {
                newColumns.add( columnHeaders.get( i ) );
            }
        }

        List<PurityRow> newRows = new ArrayList<PurityRow>();
        if( rows.size() <= numberOfRows )
        {
            newRows.addAll( rows );
            for( int i = rows.size(); i < numberOfRows; i++ )
            {
                newRows.add( new PurityRow() );
            }
        }
        // remove the rows from the end
        else
        {
            for( int i = 0; i < numberOfRows; i++ )
            {
                newRows.add( rows.get( i ) );
            }
        }
        for( int i = 0; i < numberOfRows; i++ )
        {
            PurityRow row = newRows.get( i );
            List<PurityTableCell> cells = row.getCells();
            List<PurityTableCell> newCells = new ArrayList<PurityTableCell>();
            if( cells.size() <= numberOfColumns )
            {
                newCells.addAll( cells );
                for( int j = cells.size(); j < numberOfColumns; j++ )
                {
                    newCells.add( new PurityTableCell() );
                }
            }
            // remove the columnHeaders from the end
            else
            {
                for( int j = 0; j < numberOfColumns; j++ )
                {
                    newCells.add( cells.get( i ) );
                }
            }
            row.setCells( newCells );
        }
        columnHeaders = new ArrayList<ColumnHeader>( newColumns );
        rows = new ArrayList<PurityRow>();
        rows.addAll( newRows );
    }

    public void removeColumn( int colIndex )
    {
        columnHeaders.remove( colIndex );
        for( int i = 0; i < rows.size(); i++ )
        {
            List<PurityTableCell> cells = rows.get( i ).getCells();
            cells.remove( colIndex );
        }
        numberOfColumns--;
    }

    public void removeRow( int rowIndex )
    {
        rows.remove( rowIndex );
        numberOfRows--;
    }

    public void setupDomain( String internalFileUriPath, String createdBy )
            throws Exception
    {

        if( domain.getId() != null && domain.getId() <= 0 )
        {
            domain.setId( null );
        }
        // updated created_date and created_by if id is null
        if( domain.getId() == null )
        {
            domain.setCreatedBy( createdBy );
            domain.setCreatedDate( Calendar.getInstance().getTime() );
        }
        // updated created_by if created_by contains copy, but keep the original
        // created_date
        if( domain.getId() != null
                || ! StringUtils.isEmpty( domain.getCreatedBy() )
                && domain.getCreatedBy().contains(
                Constants.AUTO_COPY_ANNOTATION_PREFIX ) )
        {
            domain.setCreatedBy( createdBy );
        }
        if( domain.getPurityDatumCollection() != null )
        {
            domain.getPurityDatumCollection().clear();
        }
        else
        {
            domain.setPurityDatumCollection( new HashSet<PurityDatum>() );
        }
        if( domain.getFiles() != null )
        {
            domain.getFiles().clear();
        }
        else
        {
            domain.setFiles( new HashSet<File>() );
        }

        for( FileBean fileBean : files )
        {
            fileBean.setupDomainFile( internalFileUriPath, createdBy );
            domain.getFiles().add( fileBean.getDomainFile() );
        }


        // Test each cell for valid value here, so we can give a complete error list.
        ArrayList<ArrayList<String>> errorDataArray = new ArrayList<>();
        boolean errorFlag = false;
        for( PurityRow row : rows )
        {
            int cInd = 0;
            for( PurityTableCell cell : row.getCells() )
            {
                ColumnHeader columnHeader = columnHeaders.get( cInd );
                if( SynthesisPurityBean.DATUM_TYPE.equals( columnHeader.getColumnType() ) )
                {

                    try
                    {
                        Float errorTestFloat = Float.valueOf( cell.getValue() );
                    }
                    catch( NumberFormatException e )
                    {
                        errorFlag = true;
                        ArrayList<String> errorData = new ArrayList<>();
                        errorData.add( cell.getValue() );
                        errorData.add( columnHeader.getColumnName() );
                        errorData.add( e.getMessage() );
                        errorDataArray.add( errorData );
                    }
                }
                cInd++;
            }
        }

        if( errorFlag )
        {
            throw new BadCellInputException( "Bad cell input data", errorDataArray );
        }

        int rInd = 0;
        for( PurityRow row : rows )
        {
            int cInd = 0;
            List<PurityDatumCondition> rowConditions = new ArrayList<PurityDatumCondition>();
            List<PurityDatum> rowData = new ArrayList<PurityDatum>();
            for( PurityTableCell cell : row.getCells() )
            {
                ColumnHeader columnHeader = columnHeaders.get( cInd );

                if( SynthesisPurityBean.DATUM_TYPE.equals( columnHeader.getColumnType() ) )
                {
                    PurityDatum datum = cell.getPurityDatum();
                    // set bogus empty cell
                    if( StringUtils.isEmpty( cell.getValue() ) )
                    {
                        datum.setValue( Float.valueOf( - 1 ) );
                        datum
                                .setCreatedBy( createdBy
                                        + ":"
                                        + Constants.PLACEHOLDER_DATUM_CONDITION_CREATED_BY );
                    }
                    else
                    {
                        // datum.setValue(Float.valueOf(cell.getValue()));

                        try
                        {
                            datum.setValue( Float.valueOf( cell.getValue() ) );
                        }
                        catch( NumberFormatException e )
                        {
                            e.printStackTrace();
                        }


                        datum.setOperand( cell.getOperand() );
                    }
                    datum.setValueType( columnHeader.getValueType() );
                    datum.setValueUnit( columnHeader.getValueUnit() );
                    datum.setName( columnHeader.getColumnName() );
                    rowData.add( datum );
                    if( datum.getId() != null && datum.getId() <= 0 )
                    {
                        datum.setId( null );
                    }
                    // Update createdBy if createdBy is empty or if copy
                    // or if bogus empty when the cell is not empty
                    if( StringUtils.isEmpty( datum.getCreatedBy() )
                            || datum.getCreatedBy().contains(
                            Constants.AUTO_COPY_ANNOTATION_PREFIX )
                            || datum
                            .getCreatedBy()
                            .contains(
                                    Constants.PLACEHOLDER_DATUM_CONDITION_CREATED_BY )
                            && ! StringUtils.isEmpty( cell.getValue() ) )
                    {
                        datum.setCreatedBy( createdBy );
                    }
                    // Update createdDate if id is null and created_date is
                    // null.
                    // When user updated order, created_date is reset according
                    // to the order
                    if( datum.getId() == null )
                    {
                        datum.setCreatedDate( DateUtils
                                .addSecondsToCurrentDate( rInd * 100 + cInd ) );
                    }

                }
                else if( SynthesisPurityBean.CONDITION_TYPE.equals( columnHeader
                        .getColumnType() ) )
                {
                    PurityDatumCondition condition = cell.getCondition();
                    if( StringUtils.isEmpty( cell.getValue() ) )
                    {
                        condition
                                .setValue( createdBy
                                        + ":"
                                        + Constants.PLACEHOLDER_DATUM_CONDITION_CREATED_BY );
                        condition
                                .setCreatedBy( createdBy
                                        + ":"
                                        + Constants.PLACEHOLDER_DATUM_CONDITION_CREATED_BY );
                    }
                    else
                    {
                        condition.setValue( cell.getValue() );
                    }
                    condition.setValueType( columnHeader.getValueType() );
                    condition.setValueUnit( columnHeader.getValueUnit() );
                    condition.setName( columnHeader.getColumnName() );
                    condition.setProperty( columnHeader.getConditionProperty() );
                    rowConditions.add( condition );
                    if( condition.getId() != null && condition.getId() <= 0 )
                    {
                        condition.setId( null );
                    }
                    // Update createdBy if createdBy is empty or if copy
                    if( StringUtils.isEmpty( condition.getCreatedBy() )
                            || condition.getCreatedBy().contains(
                            Constants.AUTO_COPY_ANNOTATION_PREFIX )
                            || condition
                            .getCreatedBy()
                            .contains(
                                    Constants.PLACEHOLDER_DATUM_CONDITION_CREATED_BY )
                            && ! StringUtils.isEmpty( cell.getValue() ) )
                    {
                        condition.setCreatedBy( createdBy );
                    }
                    // Update createdDate if id is null and created_date is
                    // null.
                    // When user updated order, created_date is reset according
                    // to the order
                    if( condition.getId() == null )
                    {
                        condition.setCreatedDate( DateUtils
                                .addSecondsToCurrentDate( rInd * 100 + cInd ) );
                    }
                }
                cInd++;
            }
            // associate conditions to each datum on each row
            for( PurityDatum datum : rowData )
            {
                if( datum.getConditionCollection() == null )
                {
                    datum.setConditionCollection( new HashSet<PurityDatumCondition>() );
                }
                else
                {
                    datum.getConditionCollection().clear();
                }
                for( PurityDatumCondition condition : rowConditions )
                {
                    datum.getConditionCollection().add( condition );
                }
                domain.getPurityDatumCollection().add( datum );
                datum.setSynthesisPurity( domain );
                rInd++;
            }
        }
    }

    /**
     * Compares <code>obj</code> to it self and returns true if they both are
     * same
     *
     * @param obj
     */
    public boolean equals( Object obj )
    {
        if( obj instanceof SynthesisPurityBean)
        {
            SynthesisPurityBean purityBean = (SynthesisPurityBean) obj;
            return domain.getId() != null
                    && domain.getId().equals(purityBean.getDomain().getId());
        }
        return false;
    }

    /**
     * Returns hash code for the primary key of the object
     */
    public int hashCode()
    {
        if( getDomain().getId() != null )
        {
            return getDomain().getId().hashCode();
        }
        return 0;
    }

    public FileBean getFileBeingEdited()
    {
        return fileBeingEdited;
    }

    public void setFileBeingEdited(FileBean fileBeingEdited)
    {
        this.fileBeingEdited = fileBeingEdited;
    }

    public List<FileBean> getFiles()
    {
        return files;
    }

    public void setFiles( List<FileBean> files )
    {
        this.files = files;
    }

    public SynthesisPurity getDomain()
    {
        return domain;
    }

    public void addFile( FileBean file, int index )
    {
        if( index == - 1 )
        {
            files.add( file );
            return;
        }
        if( ! files.isEmpty() )
        {
            files.remove( index );
        }
        files.add( index, file );
    }

    public void removeFile( int index )
    {
        files.remove( index );
    }

    public int getTheFileIndex()
    {
        return theFileIndex;
    }

    public void setTheFileIndex( int theFileIndex )
    {
        this.theFileIndex = theFileIndex;
    }

    public void resetDomainCopy(String createdBy, SynthesisPurity copy, Boolean copyData )
    {
        copy.setCreatedBy( createdBy + ":"
                + Constants.AUTO_COPY_ANNOTATION_PREFIX + ":" + copy.getId() );
        copy.setId( null );

        // copy data and condition
        if( ! copyData )
        {
            copy.setPurityDatumCollection( null );
        }
        else
        {
            Collection<PurityDatum> oldDatums = copy.getPurityDatumCollection();
            if( oldDatums == null || oldDatums.isEmpty() )
            {
                copy.setPurityDatumCollection( null );
            }
            else
            {
                copy.setPurityDatumCollection( new HashSet<PurityDatum>( oldDatums ) );
                for( PurityDatum datum : copy.getPurityDatumCollection() )
                {
                    String originalDatumId = datum.getId().toString();
                    datum.setId( null );
                    // keep the bogus place holder if empty datum
                    if( StringUtils.isEmpty( datum.getCreatedBy() )
                            || ! datum
                            .getCreatedBy()
                            .contains(
                                    Constants.PLACEHOLDER_DATUM_CONDITION_CREATED_BY )
                            && datum.getValue() != - 1 )
                    {
                        datum.setCreatedBy( createdBy + ":"
                                + Constants.AUTO_COPY_ANNOTATION_PREFIX + ":"
                                + originalDatumId );
                    }
                    // conditions
                    Collection<PurityDatumCondition> oldConditions = datum
                            .getConditionCollection();
                    if( oldConditions == null || oldConditions.isEmpty() )
                    {
                        datum.setConditionCollection( null );
                    }
                    else
                    {
                        datum.setConditionCollection( new HashSet<PurityDatumCondition>(
                                oldConditions ) );
                        for( PurityDatumCondition condition : datum
                                .getConditionCollection() )
                        {
                            String originalCondId = null;
                            // condition ID could have been set to null for the
                            // previous datum if the same condition is
                            // associated with multiple datum
                            if( condition.getId() != null )
                            {
                                originalCondId = condition.getId().toString();
                            }
                            condition.setId( null );
                            // keep the bogus place holder if empty
                            // condition
                            if( StringUtils.isEmpty( condition.getCreatedBy() )
                                    || ! condition
                                    .getCreatedBy()
                                    .contains(
                                            Constants.PLACEHOLDER_DATUM_CONDITION_CREATED_BY )
                                    && ! condition
                                    .getValue()
                                    .contains(
                                            Constants.PLACEHOLDER_DATUM_CONDITION_CREATED_BY ) )
                            {
                                if( originalCondId != null )
                                {
                                    condition
                                            .setCreatedBy( createdBy
                                                    + ":"
                                                    + Constants.AUTO_COPY_ANNOTATION_PREFIX
                                                    + ":" + originalCondId );
                                }
                            }
                        }
                    }
                }
            }
        }

        // copy file
        Collection<File> oldFiles = copy.getFiles();
        if( oldFiles == null || oldFiles.isEmpty() )
        {
            copy.setFiles( null );
        }
        else
        {
            copy.setFiles( new HashSet<File>( oldFiles ) );
            for( File file : copy.getFiles() )
            {
                FileBean fileBean = new FileBean( file );
                fileBean.resetDomainCopy( createdBy, file );
            }
        }
    }

    // FR# 26194, datum matrix column order.
    public void setupColumnOrder()
    {
        // sort columnHeaders by createdDate and set column orders
        Collections.sort( columnHeaders,
                new Comparators.ColumnHeaderCreatedDateComparator() );
        for( int i = 0; i < columnHeaders.size(); i++ )
        {
            columnHeaders.get( i ).setColumnOrder( i + 1 );
        }
    }

    // FR# 26194, datum matrix column order.
    public void updateColumnOrder()
    {
        if( ! rows.isEmpty() )
        {
            Comparators.PurityTableCellComparator cellComparator = new Comparators.PurityTableCellComparator();

            for( PurityRow row : rows )
            {
                int cInd = 0;
                for( PurityTableCell cell : row.getCells() )
                {
                    ColumnHeader columnHeader = columnHeaders.get( cInd++ );
                    cell.setColumnOrder( columnHeader.getColumnOrder() );
                }
                Collections.sort( row.getCells(), cellComparator );

            }
            Collections.sort( columnHeaders,
                    new Comparators.ColumnHeaderComparator() );

            // update created_date based on column order
            // update the created date regardless whether created date already
            // existed
            int rInd = 0;
            for( PurityRow row : rows )
            {
                int cInd = 0;
                for( PurityTableCell cell : row.getCells() )
                {
                    ColumnHeader columnHeader = columnHeaders.get( cInd );
                    if( gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurityBean.DATUM_TYPE.equals( columnHeader
                            .getColumnType() ) )
                    {
                        PurityDatum datum = cell.getPurityDatum();
                        datum.setCreatedDate( DateUtils
                                .addSecondsToCurrentDate( rInd * 100 + cInd ) );
                    }
                    else if( gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurityBean.CONDITION_TYPE.equals( columnHeader
                            .getColumnType() ) )
                    {
                        PurityDatumCondition condition = cell.getCondition();
                        condition.setCreatedDate( DateUtils
                                .addSecondsToCurrentDate( rInd * 100 + cInd ) );
                    }
                    cInd++;
                }
                rInd++;
            }
        }
    }

}
