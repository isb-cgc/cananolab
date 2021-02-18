package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.common.Supplier;
import gov.nih.nci.cananolab.domain.particle.SfeInherentFunction;
import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalizationElement;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleFileBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisFunctionalizationElementBean;
import gov.nih.nci.cananolab.util.Constants;
import gov.nih.nci.cananolab.util.StringUtils;
import org.apache.log4j.Logger;

import java.util.*;

public class SynthesisFunctionalizationElementBean extends BaseSynthesisEntityBean {
    Logger logger = Logger.getLogger( "SynthesisFunctionalizationElementBean.class" );
    private SynthesisFunctionalizationElement domain;
    private List<SfeInherentFunctionBean> functions = new ArrayList<SfeInherentFunctionBean>();

    public SynthesisFunctionalizationElement getDomain() {
        return domain;
    }

    public List<SfeInherentFunctionBean> getFunctions() {
        return functions;
    }

    public SynthesisFunctionalizationElementBean() {
    }


    public SynthesisFunctionalizationElementBean( SynthesisFunctionalizationElement domain ) {
        this.setDomain( domain );
    }

    public SynthesisFunctionalizationElement getDomainEntity() {
        return domain;
    }

    public void setDomain( SynthesisFunctionalizationElement domain ) {
        this.domain = domain;
        this.setDescription( domain.getDescription() );
        this.setType( domain.getType() );
        this.setDisplayName( domain.getChemicalName() );
        this.domainId = domain.getId();

        if( domain.getSfeInherentFunctions() != null ) {
            for( SfeInherentFunction sfeInherentFunction : domain.getSfeInherentFunctions() ) {
                functions.add( new SfeInherentFunctionBean( sfeInherentFunction ) );
            }
        }
        if( domain.getFiles() != null ) {
            for( File file : domain.getFiles() ) {
                files.add( new FileBean( file ) );
            }
        }
    }


    public String getDisplayName() {
        return this.domain.getChemicalName();
    }

    public String getMolecularFormulaDisplayName() {
        StringBuilder buffer = new StringBuilder();
        if( !StringUtils.isEmpty( getDomainEntity().getMolecularFormula() ) ) {
            buffer.append( getDomainEntity().getMolecularFormula() );
            if( !StringUtils.isEmpty( domain.getMolecularFormulaType() ) ) {
                buffer.append( " (" );
                buffer.append( domain.getMolecularFormulaType() );
                buffer.append( ")" );
            }
        }
        return buffer.toString();
    }

    public String[] getFunctionDisplayNames() {
        List<String> displayNames = new ArrayList<String>();
        for( SfeInherentFunctionBean function : functions ) {
            displayNames.add( function.getDisplayName() );
        }
        if( displayNames.isEmpty() ) {
            return null;
        }
        return displayNames.toArray( new String[0] );
    }

    public void setupDomain( String loggedInUserName ) throws Exception {

        if( domain == null ) {
            domain = new SynthesisFunctionalizationElement();
        }

        if( domain.getId() == null ) {
            domain.setCreatedBy( loggedInUserName );
            domain.setCreatedDate( Calendar.getInstance().getTime() );
        }

        if( domain.getId() != null || !StringUtils.isEmpty( domain.getCreatedBy() ) && domain.getCreatedBy().contains( Constants.AUTO_COPY_ANNOTATION_PREFIX ) ) {
            domain.setCreatedBy( loggedInUserName );
            domain.setCreatedDate( Calendar.getInstance().getTime() );
            domainId = domain.getId();
        }
        //TODO blank out the rest
        if( domain.getSfeInherentFunctions() != null ) {
            domain.getSfeInherentFunctions().clear();
        } else {
            domain.setSfeInherentFunctions( new HashSet<SfeInherentFunction>() );
        }

        for( SfeInherentFunctionBean functionBean : functions ) {
            logger.debug( "call setupDomainFunction " + loggedInUserName );
            functionBean.setupDomain();

            domain.addSfeInherentFunction( functionBean.getDomain() );
        }

    }

/*
    public void setSuppler(Supplier supplier){
        this.domain.setSupplier(supplier);
    }

    public Supplier getSupplier(){
        return this.domain.getSupplier();
    }
*/

    public SynthesisFunctionalizationElementBean( SimpleSynthesisFunctionalizationElementBean sSFEBean ) {
        SynthesisFunctionalizationElement synthesisFunctionalizationElement = new SynthesisFunctionalizationElement();
        synthesisFunctionalizationElement.setDescription( sSFEBean.getDescription() );
        synthesisFunctionalizationElement.setChemicalName( sSFEBean.getChemicalName() );
        synthesisFunctionalizationElement.setMolecularFormula( sSFEBean.getMolecularFormula() );
        synthesisFunctionalizationElement.setMolecularFormulaType( sSFEBean.getMolecularFormulaType() );
        synthesisFunctionalizationElement.setPubChemId( sSFEBean.getPubChemId() );
        synthesisFunctionalizationElement.setPubChemDatasourceName( sSFEBean.getPubChemDataSource() );
        synthesisFunctionalizationElement.setValue( sSFEBean.getValue() );
        synthesisFunctionalizationElement.setValueUnit( sSFEBean.getValueUnit() );
        synthesisFunctionalizationElement.setActivationMethod( sSFEBean.getActivationMethod() );
        synthesisFunctionalizationElement.setActivationEffect( sSFEBean.getActivationEffect() );


        //check for Files
        List<SimpleFileBean> sfileBeans = sSFEBean.getFiles();
//            Set<File> files = new HashSet<File>();
        if( sfileBeans != null ) {
            List<FileBean> fileBeans = new ArrayList<FileBean>();
            for( SimpleFileBean simpleFileBean : sfileBeans ) {

//                File file1 = new File();
//                file1.setUriExternal(simpleFileBean.getUriExternal());
//                file1.setUri(simpleFileBean.getUri());
//                file1.setType(simpleFileBean.getType());
//                file1.setDescription(simpleFileBean.getDescription());
//                file1.setTitle(simpleFileBean.getTitle());
//                file1.setCreatedDate(simpleFileBean.getCreatedDate());
//                file1.setCreatedBy(simpleFileBean.getCreatedBy());
//                files.add(file1);

                FileBean fileBean = new FileBean( simpleFileBean );
                fileBeans.add( fileBean );
            }
            this.setFiles( fileBeans );
        }
        //Loop through functions
        List<Map<String, String>> functions = sSFEBean.getInherentFunctionList(); // TODO
        if( functions != null ) {
            Set<SfeInherentFunction> sfeInherentFunctionSet = new HashSet<SfeInherentFunction>();
            for( Map<String, String> function : functions ) {
                //id, type, description
                SfeInherentFunction sfeInherentFunction = new SfeInherentFunction();

                sfeInherentFunction.setType( function.get( "type" ).toString() );
                sfeInherentFunction.setDescription( function.get( "description" ).toString() );
                sfeInherentFunction.setId( Long.valueOf( function.get( "id" ) ) );
                //TODO this is circular.  Rework this
                sfeInherentFunction.setSynthesisFunctionalizationElement( synthesisFunctionalizationElement );
                sfeInherentFunctionSet.add( sfeInherentFunction );
            }
            synthesisFunctionalizationElement.setSfeInherentFunctions( sfeInherentFunctionSet );
        }
        this.setDomain( synthesisFunctionalizationElement );

    }

}
