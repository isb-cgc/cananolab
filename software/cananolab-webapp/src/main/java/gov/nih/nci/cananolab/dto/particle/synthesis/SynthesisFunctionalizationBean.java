package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.particle.SfeInherentFunction;
import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalization;
import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalizationElement;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.common.ProtocolBean;
import gov.nih.nci.cananolab.util.ClassUtils;
import gov.nih.nci.cananolab.util.Comparators;
import gov.nih.nci.cananolab.util.Constants;

import java.util.*;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;


public class SynthesisFunctionalizationBean extends BaseSynthesisEntityBean {
    Logger logger = LogManager.getLogger( "SynthesisFunctionalizationBean.class" );
    private SynthesisFunctionalization domainEntity;
    private boolean withProperties = false;
    private ProtocolBean protocolBean = new ProtocolBean();

//    private PointOfContact source = new PointOfContact();

    List<SynthesisFunctionalizationElementBean> synthesisFunctionalizationElements = new ArrayList<SynthesisFunctionalizationElementBean>();

    public void SynthesisFunctionalizationBean0( SynthesisFunctionalization synthesisFunctionalization ) {
        this.domainEntity = synthesisFunctionalization;

        if( synthesisFunctionalization.getSynthesisFunctionalizationElements() != null ) {
            for( SynthesisFunctionalizationElement synthesisFunctionalizationElement : synthesisFunctionalization.getSynthesisFunctionalizationElements() ) {
                synthesisFunctionalizationElements.add( new SynthesisFunctionalizationElementBean( synthesisFunctionalizationElement ) );
            }

        }
        Collections.sort( synthesisFunctionalizationElements, new Comparators.SFEBeanTypeComparator() );

    }


    public SynthesisFunctionalizationBean(SynthesisFunctionalization functionalization){

        domainEntity = functionalization;
        if (functionalization.getSynthesisFunctionalizationElements() != null) {
            for(SynthesisFunctionalizationElement synthesisFunctionalizationElement : functionalization.getSynthesisFunctionalizationElements()){
                synthesisFunctionalizationElements.add(new SynthesisFunctionalizationElementBean(synthesisFunctionalizationElement));
            }
        }
        Collections.sort(synthesisFunctionalizationElements, new Comparators.SynthesisFunctionalizationElementTypeDataComparator());
        if (functionalization.getProtocol() != null) {
            protocolBean = new ProtocolBean(functionalization.getProtocol());
        }
        this.setType("Synthesis");
        this.setDescription(functionalization.getDescription());
        if(functionalization.getFiles() !=null && functionalization.getFiles().size()>0){
            for(File file:functionalization.getFiles()){
                files.add(new FileBean(file));
            }
        }

    }


    public SynthesisFunctionalizationBean() {
    }

    public Long getId() {
        return this.domainEntity.getId();
    }


    public SynthesisFunctionalization getDomainCopy( String createdBy ) {

        SynthesisFunctionalization copy = (SynthesisFunctionalization) ClassUtils.deepCopy( this
                .getDomainEntity() );
        resetDomainCopy( createdBy, copy );
        return copy;

    }


    public SynthesisFunctionalizationElementBean getSynthesisFunctionalizationElementById( String id ) {
        return getSynthesisFunctionalizationElementById( new Long( id ) );
    }

    public SynthesisFunctionalizationElementBean getSynthesisFunctionalizationElementById( Long id ) {
        for( SynthesisFunctionalizationElementBean element : synthesisFunctionalizationElements ) {
            if( (element.getDomainEntity().getId()!=null) && (element.getDomainEntity().getId().equals( id ) )) {
                return element;
            }
        }
        return null;
    }

    public void removeFunctionalizationElement( SynthesisFunctionalizationElementBean functionalizationElementBean ) {
        synthesisFunctionalizationElements.remove( functionalizationElementBean );
    }


    public void setUpDomainEntity( String loggedInUserName ) throws Exception {
        logger.debug( "In SynthesisFunctionalizationBean.setupDomain" );

        //forms defaults Ids to 0, so need to check both null and 0
        if( domainEntity.getId() != null && domainEntity.getId() == 0 ) {
            domainEntity.setId( null );
        }

        if( domainEntity.getId() == null ) {
            logger.debug( "call domain.setCreatedBy " + loggedInUserName );
            domainEntity.setCreatedBy( loggedInUserName );
            domainEntity.setCreatedDate( Calendar.getInstance().getTime() );
        } else {
            // updated created_by if created_by contains copy, but keep the original
            // created_date
            if( domainEntity.getCreatedBy() != null && domainEntity.getCreatedBy().contains(
                    Constants.AUTO_COPY_ANNOTATION_PREFIX ) ) {
                domainEntity.setCreatedBy( loggedInUserName );
            }
        }

        // clear the old domain functionalization elements in the domain
        if( domainEntity.getSynthesisFunctionalizationElements() != null ) {
            domainEntity.getSynthesisFunctionalizationElements().clear();
        } else {
            domainEntity.setSynthesisFunctionalizationElements( new HashSet<SynthesisFunctionalizationElement>() );
        }

        //reset the domain functionalization elements to what is in the bean
        for( SynthesisFunctionalizationElementBean synthesisFunctionalizationElement : synthesisFunctionalizationElements ) {
            synthesisFunctionalizationElement.setupDomain( loggedInUserName );
            domainEntity.addSynthesisFunctionalizationElement( synthesisFunctionalizationElement.getDomainEntity() );
        }


        if( protocolBean != null && protocolBean.getDomain().getId() != null
                && protocolBean.getDomain().getId().longValue() != 0 ) {
            domainEntity.setProtocol( protocolBean.getDomain() );
        } else {
            domainEntity.setProtocol( null );
        }
        domainEntity.getFiles();
        if( files.isEmpty() ) {
            domainEntity.setFiles( null );
        } else if( domainEntity.getFiles() != null ) {
            domainEntity.getFiles().clear();
        } else {
            domainEntity.setFiles( new HashSet<File>() );
        }
        for( FileBean file : files ) {
            domainEntity.getFiles().add( file.getDomainFile() );
        }
        domainEntity.setDescription( description );

    }


    public SynthesisFunctionalization getDomainEntity() {
        return domainEntity;
    }

    public void setDomainEntity( SynthesisFunctionalization domainEntity ) {
        this.domainEntity = domainEntity;
    }

    public void setSynthesis( SynthesisBean synthesisBean ) {
        this.domainEntity.setSynthesis( synthesisBean.getDomain() );
    }


//    public PointOfContact getSource() {
//        return source;
//    }

    public String getSource() {
        return domainEntity.getCreatedBy();
    }
//    public void setSource(PointOfContact source) {
//        this.source = source;
//    }

    public boolean isWithProperties() {
        return withProperties;
    }

    public void setWithProperties( boolean withProperties ) {
        this.withProperties = withProperties;
    }

    public void resetDomainCopy( String createdBy, SynthesisFunctionalization copy ) {

        copy.setCreatedBy( createdBy + ":"
                + Constants.AUTO_COPY_ANNOTATION_PREFIX + ":" + copy.getId());
        copy.setId( null );
        copy.setSynthesisId(null);
        Collection<SynthesisFunctionalizationElement> oldElements = copy.getSynthesisFunctionalizationElements();
        if( oldElements == null || oldElements.isEmpty() ) {
            copy.setSynthesisFunctionalizationElements( null );
        } else {
            copy.setSynthesisFunctionalizationElements( new HashSet<SynthesisFunctionalizationElement>( oldElements ) );
            for( SynthesisFunctionalizationElement sfe : copy.getSynthesisFunctionalizationElements() ) {
                sfe.setCreatedBy( createdBy + ":"
                        + Constants.AUTO_COPY_ANNOTATION_PREFIX + ":"
                        + sfe.getId() );
                sfe.setId( null );
                Collection<SfeInherentFunction> oldFunctions = sfe.getSfeInherentFunctions();
                if( oldFunctions == null || oldFunctions.isEmpty() ) {
                    sfe.setSfeInherentFunctions( null );
                } else {

                    sfe.setSfeInherentFunctions( new HashSet<SfeInherentFunction>( oldFunctions ) );
                    for( SfeInherentFunction function : sfe.getSfeInherentFunctions() ) {
                        SfeInherentFunctionBean functionBean = new SfeInherentFunctionBean( function );
                        functionBean.resetDomainCopy( createdBy, function );
                    }
                }
                Collection<File> oldFiles = sfe.getFiles();
                if( oldFiles == null || oldFiles.isEmpty() ) {
                    sfe.setFiles( null );
                } else {
                    sfe.setFiles( new HashSet<File>( oldFiles ) );
                    for( File file : sfe.getFiles() ) {
                        FileBean fileBean = new FileBean( file );
                        fileBean.resetDomainCopy( createdBy, file );
                    }
                }
            }
            Collection<File> oldFiles = copy.getFiles();
            if( oldFiles == null || oldFiles.isEmpty() ) {
                copy.setFiles( null );
            } else {
                copy.setFiles( new HashSet<File>( oldFiles ) );
                for( File file : copy.getFiles() ) {
                    FileBean fileBean = new FileBean( file );
                    fileBean.resetDomainCopy( createdBy, file );
                }
            }
        }

    }

    public String getDescription() {
        return domainEntity.getDescription();
    }

    public List<SynthesisFunctionalizationElementBean> getSynthesisFunctionalizationElements() {
        return synthesisFunctionalizationElements;
    }

    public void setSynthesisFunctionalizationElements( List<SynthesisFunctionalizationElementBean> synthesisFunctionalizationElements ) {
        this.synthesisFunctionalizationElements = synthesisFunctionalizationElements;
    }

    public Logger getLogger() {
        return logger;
    }

    public void setLogger( Logger logger ) {
        this.logger = logger;
    }

    public ProtocolBean getProtocolBean() {
        return protocolBean;
    }

    public void setProtocolBean( ProtocolBean protocolBean ) {
        this.protocolBean = protocolBean;
    }
}
