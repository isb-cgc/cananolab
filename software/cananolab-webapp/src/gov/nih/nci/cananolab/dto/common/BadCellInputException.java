package gov.nih.nci.cananolab.dto.common;

/**
 * Exception when bad data causes save to fail when saving Finding Info data.
 */
public class BadCellInputException  extends Exception {

    private String message;
    private String badData;
    private String columnName;
    private String columnType;

    public BadCellInputException( String badData) {
        this.badData = badData;
    }


    public BadCellInputException( String message, String badData, String columnName, String columnType )
    {
        this.badData = badData;
        this.message = message;
        this.columnName = columnName;
        this.columnType = columnType;
    }


    public String getBadData()
    {
        return badData;
    }

    public void setBadData( String badData )
    {
        this.badData = badData;
    }

    public String getColumnName()
    {
        return columnName;
    }

    public void setColumnName( String columnName )
    {
        this.columnName = columnName;
    }

    public String getColumnType()
    {
        return columnType;
    }

    public void setColumnType( String columnType )
    {
        this.columnType = columnType;
    }

    @Override
    public String getMessage()
    {
        return message + "\nColumn: " + columnName + "\nCell data: " + badData;
    }

    public void setMessage( String message )
    {
        this.message = message;
    }

    @Override
    public String toString()
    {
        return "{\n \"BadCellInputException\":\n"
                + " \"message\":\"" + message + "\",\n"
                + " \"badData\":\"" + badData + "\",\n"
                + " \"columnName\":\"" + columnName + "\",\n"
                + " \"columnType\":\"" + columnType + "\",\n"
                + "}";
    }
}
