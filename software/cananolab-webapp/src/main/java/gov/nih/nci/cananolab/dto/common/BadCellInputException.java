package gov.nih.nci.cananolab.dto.common;

import java.util.ArrayList;

/**
 * Exception when bad data causes save to fail when saving Finding Info data.
 */
public class BadCellInputException  extends Exception
{

    ArrayList<ArrayList<String>> errorData;
    String errorMessage = "";

    public BadCellInputException(  ArrayList<ArrayList<String>> errorData )
    {
        this.errorMessage = "Cell data error";
        this.errorData = errorData;
    }


    public BadCellInputException( String message,  ArrayList<ArrayList<String>> errorData )
    {
        this.errorMessage = message;
        this.errorData = errorData;
    }

    @Override
    public String getMessage()
    {
        StringBuilder sb = new StringBuilder( "Bad cell input data:\n" );
        for (ArrayList<String> row : errorData) {
            sb.append(  "\nColumn: " + row.get(1) + "\nCell data: " + row.get(0) +"\n");
        }

        return sb.toString();
    }

}
