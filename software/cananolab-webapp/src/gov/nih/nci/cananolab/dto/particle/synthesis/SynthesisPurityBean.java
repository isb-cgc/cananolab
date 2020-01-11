package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.common.PurityDatum;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurity;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.util.Comparators;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class SynthesisPurityBean {
    //TODO write

    SynthesisPurity domain;
    private List<FileBean> files = new ArrayList<FileBean>();
    private List<PurityDatum> datums = new ArrayList<PurityDatum>();
    //CreatedBy
    //CreatedDate

    //purity_datum
    //  -- purity_datum_condition
    //  -- -- experiment_condition

    public  SynthesisPurityBean(SynthesisPurity synthesisPurity){
        domain = synthesisPurity;

        for (File file: synthesisPurity.getFiles()){
            files.add( new FileBean( file ) );
        }
        Collections.sort( files, new Comparators.FileBeanDateComparator() );

        if( synthesisPurity.getPurityDatumCollection() != null )
        {
            datums = new ArrayList<PurityDatum>( synthesisPurity.getPurityDatumCollection() );
            Collections.sort( datums, new Comparators.PurityDatumDateComparator() );
        }

    }

    public List<FileBean> getFiles()
    {
        return files;
    }

    public void setFiles( List<FileBean> files )
    {
        this.files = files;
    }

    public List<PurityDatum> getDatum(){return datums;}
    public void setDatum(List<PurityDatum> datums){
        this.datums = datums;
    }
}
