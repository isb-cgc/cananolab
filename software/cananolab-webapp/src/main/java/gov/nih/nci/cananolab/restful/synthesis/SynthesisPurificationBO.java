package gov.nih.nci.cananolab.restful.synthesis;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.common.Instrument;
import gov.nih.nci.cananolab.domain.common.Protocol;
import gov.nih.nci.cananolab.domain.common.PurificationConfig;
import gov.nih.nci.cananolab.domain.common.PurityColumnHeader;
import gov.nih.nci.cananolab.domain.common.PurityDatumCondition;
import gov.nih.nci.cananolab.domain.common.Technique;
import gov.nih.nci.cananolab.domain.particle.Synthesis;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurification;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurity;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.common.PointOfContactBean;
import gov.nih.nci.cananolab.dto.common.ProtocolBean;
import gov.nih.nci.cananolab.dto.common.PurityRow;
import gov.nih.nci.cananolab.dto.common.table.PurityTableCell;
import gov.nih.nci.cananolab.dto.particle.SampleBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurificationBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurityBean;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.exception.SampleException;
import gov.nih.nci.cananolab.exception.SynthesisException;
import gov.nih.nci.cananolab.restful.SpringApplicationContext;
import gov.nih.nci.cananolab.restful.core.BaseAnnotationBO;
import gov.nih.nci.cananolab.restful.sample.ExperimentConfigManager;
import gov.nih.nci.cananolab.restful.sample.InitSampleSetup;
import gov.nih.nci.cananolab.restful.util.PropertyUtil;
import gov.nih.nci.cananolab.restful.util.SynthesisUtil;
import gov.nih.nci.cananolab.restful.view.SimpleSynthesisBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleFileBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleInstrumentBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleProtocol;
import gov.nih.nci.cananolab.restful.view.edit.SimplePurificationConfigBean;
import gov.nih.nci.cananolab.restful.view.edit.SimplePurityBean;
import gov.nih.nci.cananolab.restful.view.edit.SimplePurityCell;
import gov.nih.nci.cananolab.restful.view.edit.SimplePurityRowBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisMaterialBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisPurificationBean;
import gov.nih.nci.cananolab.security.CananoUserDetails;
import gov.nih.nci.cananolab.security.enums.SecureClassesEnum;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;
import gov.nih.nci.cananolab.service.curation.CurationService;
import gov.nih.nci.cananolab.service.protocol.ProtocolService;
import gov.nih.nci.cananolab.service.sample.SampleService;
import gov.nih.nci.cananolab.service.sample.SynthesisService;
import gov.nih.nci.cananolab.ui.form.SynthesisForm;
import gov.nih.nci.cananolab.util.Constants;
import gov.nih.nci.cananolab.util.DateUtils;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.IllegalFormatConversionException;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.TreeSet;
import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;


@Transactional(propagation = Propagation.REQUIRED)
@Component("synthesisPurificationBO")
public class SynthesisPurificationBO extends BaseAnnotationBO {

    Logger logger = Logger.getLogger(SynthesisPurificationBO.class);
    @Autowired
    private SynthesisService synthesisService;

    @Autowired
    private SpringSecurityAclService springSecurityAclService;

    @Autowired
    private CurationService curationServiceDAO;

    @Autowired
    private SampleService sampleService;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private ProtocolService protocolService;

    public void assignColumnHeadersForPurification(SynthesisPurificationBean purification) throws SynthesisException {
        //checks each purity in the purification and retrieves the connected column headers
        if (purification.getPurityBeans() != null) {
            for (SynthesisPurityBean purityBean : purification.getPurityBeans()) {
                List<PurityColumnHeader> headerList = getColumnHeaderForPurity(purityBean.getDomain());
                purityBean.setPurityColumnHeaders(headerList);
            }
        }
    }

    public List<PurityColumnHeader> getColumnHeaderForPurity(SynthesisPurity purity) throws SynthesisException {
        List<Long> columnIds = new ArrayList<Long>();
        if (purity.getPurityDatumCollection() != null && purity.getPurityDatumCollection().size() > 0) {
            for (PurityDatumCondition datum : purity.getPurityDatumCollection()) {
                columnIds.add(datum.getColumnId());
//                if(datum.getConditionCollection()!=null && datum.getConditionCollection().size()>0){
//                    for(PurityDatumCondition condition: datum.getConditionCollection()){
//                        columnIds.add(condition.getColumnId());
//                    }
//                }
//                break;
            }
        }
        try {
            List<PurityColumnHeader> columnHeaders = new ArrayList<PurityColumnHeader>();
            for (Long id : columnIds) {
                columnHeaders.add(synthesisService.getColumnHeaderById(id));
            }
            return columnHeaders;
        }
        catch (Exception e) {
            String err = "Problem retrieving Purity Column Headers";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }

    }

    /**
     * Create a new purification
     *
     * @param purificationBean
     * @param httpRequest
     * @return
     */
    public List<String> create(SimpleSynthesisPurificationBean purificationBean, HttpServletRequest httpRequest) throws Exception {

        List<String> msgs;
        SynthesisPurificationBean synthesisPurificationBean = transferSimplePurification(purificationBean, httpRequest);
        msgs = validatePurification(httpRequest, synthesisPurificationBean);

        if (msgs.size() > 0) {
            String err = "";
            for (String message : msgs) {
                err = err + message + ":";
            }
            throw new SynthesisException(err);
        }

        msgs = this.saveEntity(synthesisPurificationBean, purificationBean.getSampleId(), httpRequest);
        InitSynthesisSetup.getInstance().persistPurificationDropdowns(
                httpRequest, synthesisPurificationBean);
        msgs.add("success");
        httpRequest.getSession().setAttribute("tab", "1");
        return msgs;

    }

    /**
     * Transfer from SimpleSynthesisPurificationBean to SynthesisPurificationBean
     *
     * @param sSynPurificationBean
     * @param httpRequest
     * @return
     */
    private SynthesisPurificationBean transferSimplePurification(SimpleSynthesisPurificationBean sSynPurificationBean
            , HttpServletRequest httpRequest) throws SynthesisException {


        SynthesisPurification purification = new SynthesisPurification();

        if ((sSynPurificationBean.getId() != null) && (sSynPurificationBean.getId() > 0)) {
            purification.setId(sSynPurificationBean.getId());
        }
        //Name
        purification.setDisplayName(sSynPurificationBean.getDisplayName());

        //Add parent object to domain
        Synthesis synthesis;
        try {

            synthesis = synthesisService.getHelper().findSynthesisBySampleId(sSynPurificationBean.getSampleId());
//            purification.setSynthesisId(synthesis.getId());
            if (synthesis != null) {
                purification.setSynthesis(synthesis);
            } else {
                //New Synthesis
                SampleBean samplebean = sampleService.findSampleById(sSynPurificationBean.getSampleId(), true);
                synthesis = synthesisService.createSynthesis(samplebean);
                purification.setSynthesis(synthesis);
            }
        }
        catch (SynthesisException e) {
            String err = "Unable to retrieve Synthesis attached to this Purification. ";
            throw new SynthesisException(err, e);
        }
        catch (NoAccessException nae) {
            String err = "User does not have permission to add Synthesis to this sample. ";
            throw new SynthesisException(err, nae);
        }
        catch (SampleException se) {
            String err = "Issue retrieving sample for addition of synthesis element. ";
            throw new SynthesisException(err, se);
        }

        //Set protocol
        try {
            SimpleProtocol sProtocol = sSynPurificationBean.getSimpleProtocol();
            if (sProtocol != null && sProtocol.getDomainId() != null) {
                ProtocolBean protocolBean = protocolService.findProtocolById(sProtocol.getDomainId().toString());
                Protocol protocol = protocolBean.getDomain();
                purification.setProtocol(protocol);
            }
        }
        catch (Exception e) {
            e.printStackTrace();
            logger.error(e);
        }

        //type
        purification.setType(sSynPurificationBean.getType());
        purification.setDisplayName(sSynPurificationBean.getDisplayName());
        //source and date
        purification.setCreatedBy(sSynPurificationBean.getCreatedBy());
        purification.setCreatedDate(sSynPurificationBean.getCreatedDate());
        //design and methods description
        purification.setDesignMethodDescription(sSynPurificationBean.getDesignMethodDescription());
        //Technique and instrument

        //yield
        purification.setYield(sSynPurificationBean.getYield());
        //Analysis and conclusions
        purification.setAnalysis(sSynPurificationBean.getAnalysis());
        //Purity

        Set<SynthesisPurity> purities = new HashSet<SynthesisPurity>();
        List<SimplePurityBean> simplePurityBeans = sSynPurificationBean.getPurityBeans();
        if (simplePurityBeans != null) {
            for (SimplePurityBean sPurityBean : simplePurityBeans) {

                SynthesisPurityBean purityBean = transferSimplePurity(sPurityBean,
                        httpRequest);

//                purityBean.getDomain().setSynthesisPurificationId(sSynPurificationBean.getId());
                purityBean.getDomain().setSynthesisPurification(purification);
                purities.add(purityBean.getDomain());

            }
        }
        purification.setPurities(purities);

        List<SimplePurificationConfigBean> simpleExperimentBeans = sSynPurificationBean.getSimpleExperimentBeans();
        Set<PurificationConfig> purificationConfigs = new HashSet<PurificationConfig>();
        if (simpleExperimentBeans != null) {
            for (SimplePurificationConfigBean sExperimentBean : simpleExperimentBeans) {
                PurificationConfig config = new PurificationConfig();
                if (sExperimentBean.getTechniqueid() != null) {
                    Technique technique = new Technique();
                    technique.setId(sExperimentBean.getTechniqueid());
                    technique.setType(sExperimentBean.getTechniqueType());
                    technique.setAbbreviation(sExperimentBean.getAbbreviation());
                    technique.setCreatedBy(purification.getCreatedBy());
                    technique.setCreatedDate(purification.getCreatedDate());
                    config.setTechnique(technique);
                } else {
                    //TODO see if there is a matching technique for this listed type

                    ExperimentConfigManager experimentMgr =
                            (ExperimentConfigManager) SpringApplicationContext.getBean(httpRequest,
                                    "experimentConfigManager");

                    List<Technique> techniqueList =
                            experimentMgr.getTechniquesByType(sExperimentBean.getTechniqueType());
                    if (techniqueList.size() == 1) {
                        config.setTechnique(techniqueList.get(0));
                    } else {
                        //check for matches with other fields

                        for (Technique tempTech : techniqueList) {
                            if (tempTech.getAbbreviation().equals(sExperimentBean.getAbbreviation())) {
                                config.setTechnique(tempTech);
                                break;
                            }
                        }
                        if (config.getTechnique() == null) {
                            //There was no match in existing so need to create a new technique
                            Technique technique = new Technique();
                            technique.setType(sExperimentBean.getTechniqueType());
                            technique.setAbbreviation(sExperimentBean.getAbbreviation());
                            technique.setCreatedBy(purification.getCreatedBy());
                            technique.setCreatedDate(purification.getCreatedDate());

                            config.setTechnique(technique);
                        }

                    }

                }
                config.setPurificationConfigPkId(sExperimentBean.getId());
                config.setDescription(sExperimentBean.getDescription());
                if ((config.getPurificationConfigPkId() != null) && (config.getPurificationConfigPkId() > 0)) {
                    config.setPurificationConfigPkId(sExperimentBean.getId());
                    //TODO get created date and by from database
                    config.setCreatedBy(purification.getCreatedBy());
                    config.setCreatedDate(purification.getCreatedDate());

                } else {
                    //TODO might need to fix if purification not set
                    config.setCreatedBy(purification.getCreatedBy());
                    config.setCreatedDate(purification.getCreatedDate());
                }
                //Technique
                if (sExperimentBean.getInstruments() != null) {
                    Set<Instrument> instrumentSet = new HashSet<Instrument>();
                    for (SimpleInstrumentBean simpleInstrumentBean : sExperimentBean.getInstruments()) {
                        Instrument instrument = new Instrument();
                        if ((simpleInstrumentBean.getId() != null) && (simpleInstrumentBean.getId() > 0)) {
                            instrument.setId(simpleInstrumentBean.getId());
                            instrument.setCreatedBy(purification.getCreatedBy());
                            instrument.setCreatedDate(purification.getCreatedDate());
                        } else {
                            //TODO might need to fix if purification not set
                            instrument.setCreatedDate(purification.getCreatedDate());
                            instrument.setCreatedBy(purification.getCreatedBy());
                        }
                        instrument.setManufacturer(simpleInstrumentBean.getManufacturer());
                        instrument.setModelName(simpleInstrumentBean.getModelName());
                        instrument.setType(simpleInstrumentBean.getType());
                        instrumentSet.add(instrument);
                    }
                    config.setInstrumentCollection(instrumentSet);
                }

                purificationConfigs.add(config);
            }
            purification.setPurificationConfigs(purificationConfigs);
        }

        List<SimpleFileBean> sfileBeans = sSynPurificationBean.getFileElements();
        Set<File> files = new HashSet<File>();
        if ((sfileBeans != null) && (sfileBeans.size() > 0)) {

            for (SimpleFileBean simpleFileBean : sfileBeans) {
                FileBean fileBean = new FileBean(simpleFileBean);
                if (fileBean.getDomainFile().getId() != null) {
                    files.add(fileBean.getDomainFile());
                }
            }
            purification.setFiles(files);
        }

        SynthesisPurificationBean synthesisPurificationBean = new SynthesisPurificationBean(purification);
        return synthesisPurificationBean;
    }

    /**
     * @param httpRequest
     * @param synthesisPurificationBean
     * @return
     */
    private List<String> validatePurification(HttpServletRequest httpRequest,
                                              SynthesisPurificationBean synthesisPurificationBean) {

        List<String> msgs = new ArrayList<String>();
        CananoUserDetails userDetails = SpringSecurityUtil.getPrincipal();
        boolean newEntity = true;
        if ((synthesisPurificationBean.getType().equals(null)) || (synthesisPurificationBean.getType().length() == 0)) {
            msgs.add("Synthesis Purification requires a type Ex: Interim");
        }
        if (synthesisPurificationBean.getProtocolBean().equals(null)) {
            msgs.add("Synthesis Purification requires a protocol");
        }
        Float yield = synthesisPurificationBean.getDomainEntity().getYield();
        if (yield == null) {
            msgs.add("Synthesis Purification requires a yield");
        }


        return msgs;
    }

    /**
     * Save changes to an existing purification
     *
     * @param synthesisPurificationBean
     * @param httpRequest
     */
    private List<String> saveEntity(SynthesisPurificationBean synthesisPurificationBean, String sampleId,
                                    HttpServletRequest httpRequest) throws Exception {

        List<String> msgs = new ArrayList<String>();
        SampleBean sampleBean = setupSampleById(sampleId, httpRequest);
        CananoUserDetails userDetails = SpringSecurityUtil.getPrincipal();

        boolean newEntity = true;

        try {
            synthesisPurificationBean.setUpDomainEntity(userDetails.getUsername());
            if (synthesisPurificationBean.getDomainEntity().getId() != null) {
                newEntity = false;
            }
        }
        catch (ClassCastException ex) {

            synthesisPurificationBean.setType(null);
        }

        synthesisService.saveSynthesisPurification(sampleBean, synthesisPurificationBean);
        if (!newEntity && !userDetails.isCurator() &&
                springSecurityAclService.checkObjectPublic(sampleBean.getDomain().getId(),
                        SecureClassesEnum.SAMPLE.getClazz())) {
            retractFromPublic(httpRequest, sampleBean.getDomain().getId(), sampleBean.getDomain().getName(), "sample"
                    , SecureClassesEnum.SAMPLE.getClazz());
            msgs.add(PropertyUtil.getProperty("sample", "message.updateSample.retractFromPublic"));
            return msgs;
        }
        return msgs;

    }

    /**
     * Transfer from SimplePurityBean to SynthesisPurityBean
     *
     * @param simplePurityBean
     * @param httpRequest
     * @return
     */
    private SynthesisPurityBean transferSimplePurity(SimplePurityBean simplePurityBean,
                                                     HttpServletRequest httpRequest) throws SynthesisException {
        SynthesisPurityBean purityBean = new SynthesisPurityBean();
        SynthesisPurity purity = new SynthesisPurity();
        boolean newPurity = false;
        //id
        if ((simplePurityBean.getId() != null) && (simplePurityBean.getId() > 0)) {
            purity.setId(simplePurityBean.getId());
            try {
                SynthesisPurity purityById = synthesisService.getHelper().getPurityById(simplePurityBean.getId());
                purity.setCreatedBy(purityById.getCreatedBy());
                purity.setCreatedDate(purityById.getCreatedDate());
            }
            catch (Exception e) {
                e.printStackTrace();
                //TODO turn into message for sending to front end

            }
        } else {
            purity.setCreatedDate(Calendar.getInstance().getTime());
            purity.setCreatedBy(SpringSecurityUtil.getPrincipal().getUsername());
            newPurity = true;
        }

        //check for Files
        List<SimpleFileBean> sfileBeans = simplePurityBean.getFiles();
        Set<File> files = new HashSet<File>();
        List<FileBean> fileBeans = new ArrayList<FileBean>();
        if (sfileBeans != null) {
            for (SimpleFileBean simpleFileBean : sfileBeans) {
                if(simpleFileBean.getId()!=null) {
                    FileBean fileBean = new FileBean(simpleFileBean);
                    files.add(fileBean.getDomainFile());
                    fileBeans.add(fileBean);
                }
            }
        }
        purityBean.setFiles(fileBeans);
        purity.setFiles(files);


//        if(newPurity){
//            //the rows and columns come in order
//            int rowNumberTemp =1;
//            for (SimplePurityRowBean rowBean: simplePurityBean.getRows()){
//                rowBean.setRowNumber(rowNumberTemp++);
//                int columnOrderTemp=1;
//                {
//                    for(SimplePurityCell cell: rowBean.getCells()){
//                        cell.setColumnOrder(columnOrderTemp++);
//                    }
//                }
//            }
//        }


        //Columns
//        purityBean.setColumnHeaders(simplePurityBean.getColumnHeaders());
//        purityBean.setColumnHeaders(columnHeaders);
        purityBean.setPurityColumnHeaders(simplePurityBean.getColumnHeaders());
        List<SimplePurityRowBean> simplePurityRowBeans = simplePurityBean.getRows();
//        Set<PurityDatumCondition> datumSet = new HashSet<PurityDatumCondition>();

//        for(int columnNumber = 1; columnNumber<purityBean.getColumnHeaders().size(); columnNumber++){
//            ColumnHeader currentColumnHeader;
//            for (ColumnHeader header : purityBean.getColumnHeaders()) {
//                if (header.getColumnOrder() == columnNumber) {
//                    currentColumnHeader = header;
//                }
//            }
        for (SimplePurityRowBean simplePurityRowBean : simplePurityRowBeans) {
            int i = 1;
            List<SimplePurityCell> simpleCells = simplePurityRowBean.getCells();
            SimplePurityCell currentDatumCell = new SimplePurityCell();
            List<SimplePurityCell> currentConditionCells = new ArrayList<SimplePurityCell>();
            for (SimplePurityCell simpleCell : simpleCells) {
//                    if(simpleCell.getColumnOrder()==columnNumber){
                if (simpleCell.getDatumOrCondition().equalsIgnoreCase("datum")) {
                    currentDatumCell = simpleCell;
                } else {
                    currentConditionCells.add(simpleCell);
                }
//                    }
            }
            PurityRow newRow = createPurityRow(currentDatumCell, currentConditionCells,
                    purityBean.getPurityColumnHeaders());
            if (newRow.getRowNumber() == null || newRow.getRowNumber() == 0) {
                newRow.setRowNumber(i++);
            }
            purityBean.addRow(newRow);
        }

//        }


        purityBean.setNumberOfRows(purityBean.getRows().size());
//        purityBean.setNumberOfColumns(purityBean.getColumnHeaders().size());
        purityBean.setNumberOfColumns(purityBean.getPurityColumnHeaders().size());
        for (PurityRow row : purityBean.getRows()) {
            List<PurityTableCell> cells = row.getCells();
            PurityDatumCondition newDatum = new PurityDatumCondition();
            for (PurityTableCell cell : cells) {
                if (cell.getCondition() != null) {
                    newDatum = cell.getCondition();
                }

//            for(PurityTableCell cell: cells){
//                if (cell.getCondition()!= null) {
//                    newDatum.getConditionCollection().add(cell.getCondition());
//                }
//            }
                newDatum.setPurity(purity);
                purity.getPurityDatumCollection().add(newDatum);

            }
        }


//        purityBean.resetDomainCopy(purity.getCreatedBy(), purity, true);


        purityBean.setDomain(purity);

        //Column type (datum or condition)
        //column name
        //condition column properties
        //value type
        //value unit
        //value

        //File being edited (if any)
        //Files

        return purityBean;
    }

    private PurityRow createPurityRow(SimplePurityCell currentDatumCell, List<SimplePurityCell> currentConditionCells
            , List<PurityColumnHeader> columnHeaders) throws SynthesisException {
        List<String> msgs = new ArrayList<String>();
        try {

            PurityRow newRow = new PurityRow();

            //Loop through conditions first
            Set<PurityDatumCondition> conditionSet = new HashSet<PurityDatumCondition>();
            List<PurityTableCell> tableCells = new ArrayList<PurityTableCell>();
            for (SimplePurityCell sConditionCell : currentConditionCells) {
                PurityTableCell conditionCell = new PurityTableCell();
                PurityDatumCondition datumCondition = new PurityDatumCondition();
                conditionCell.setColumnOrder(sConditionCell.getColumnOrder());
                conditionCell.setDatumOrCondition("condition");
                datumCondition.setType("condition");
//            conditionCell.setCreatedBy(sConditionCell.getCreatedBy());
//            datumCondition.setCreatedBy(sConditionCell.getCreatedBy());
//            conditionCell.setCreatedDate(sConditionCell.getCreatedDate());
//            datumCondition.setCreatedDate(sConditionCell.getCreatedDate());
                conditionCell.setValue(sConditionCell.getValue());
                datumCondition.setValue(sConditionCell.getValue());
                conditionCell.setId(sConditionCell.getId());
                datumCondition.setId(sConditionCell.getId());
                conditionCell.setOperand(sConditionCell.getOperand());
                datumCondition.setOperand(sConditionCell.getOperand());
                conditionCell.setColumnId(sConditionCell.getColumnId());
                datumCondition.setColumnId(sConditionCell.getColumnId());
                conditionCell.setRowNumber(sConditionCell.getRowNumber());
                datumCondition.setRowNumber(sConditionCell.getRowNumber());
                //TODO createdBy and createdDate?
//            for (ColumnHeader header : columnHeaders) {
//                if (header.getColumnOrder().equals(conditionCell.getColumnOrder())) {
//                    datumCondition.setName(header.getColumnName());
//                    datumCondition.setValueType(header.getValueType());
//                    datumCondition.setValueUnit(header.getValueUnit());
//                    datumCondition.setProperty(header.getConditionProperty());
//                }
//            }
                for (PurityColumnHeader header : columnHeaders) {
                    if (header.getColumnOrder().equals(conditionCell.getColumnOrder())) {
                        datumCondition.setName(header.getName());
                        datumCondition.setValueType(header.getValueType());
                        datumCondition.setValueUnit(header.getValueUnit());
                        datumCondition.setProperty(header.getProperty());
                        datumCondition.setColumnHeader(header);
                    }
                }
                conditionSet.add(datumCondition);
                conditionCell.setCondition(datumCondition);
//            conditionCell.setPurityDatum(null);
                tableCells.add(conditionCell);
            }

            PurityDatumCondition datum = new PurityDatumCondition();
            PurityTableCell datumCell = new PurityTableCell();
            datumCell.setColumnOrder(currentDatumCell.getColumnOrder());
            datumCell.setDatumOrCondition("datum");
            datum.setType("datum");
//        datumCell.setCreatedBy(currentDatumCell.getCreatedBy());
//        datum.setCreatedBy(currentDatumCell.getCreatedBy());
//        datumCell.setCreatedDate(currentDatumCell.getCreatedDate());
//        datum.setCreatedDate(currentDatumCell.getCreatedDate());
            datumCell.setValue(currentDatumCell.getValue());
            datum.setValue(currentDatumCell.getValue());
            datumCell.setId(currentDatumCell.getId());
            datum.setId(currentDatumCell.getId());
            datumCell.setOperand(currentDatumCell.getOperand());
            datum.setOperand(currentDatumCell.getOperand());
            datumCell.setColumnId(currentDatumCell.getColumnId());
            datum.setColumnId(currentDatumCell.getColumnId());
            datum.setRowNumber(currentDatumCell.getRowNumber());
            datumCell.setRowNumber(currentDatumCell.getRowNumber());
//        for (ColumnHeader header : columnHeaders) {
//            if (header.getColumnOrder().equals(currentDatumCell.getColumnOrder())) {
//                datum.setName(header.getColumnName());
//                datum.setValueType(header.getValueType());
//                datum.setValueUnit(header.getValueUnit());
//            }
//        }
            for (PurityColumnHeader header : columnHeaders) {
                if (header.getColumnOrder().equals(currentDatumCell.getColumnOrder())) {
                    datum.setName(header.getName());
                    datum.setValueType(header.getValueType());
                    datum.setValueUnit(header.getValueUnit());
                    datum.setProperty(header.getProperty());
                    datum.setColumnHeader(header);
                }
            }

//        datum.setConditionCollection(conditionSet);
//        for(PurityDatumCondition condition:datum.getConditionCollection()){
////            condition.setPurityDatumPkId(datum.getId());
//            condition.setPurityDatum(datum);
//        }
            datumCell.setCondition(datum);
//        datumCell.setPurityDatum(datum);
            tableCells.add(datumCell);
            newRow.setCells(tableCells);
            return newRow;
        }
        catch (Exception e) {
            msgs.add("Error creating purity");
            throw new SynthesisException("Error creating purity", e);
        }

    }

    /**
     * Add a new purity to an existing purification
     *
     * @param editBean
     * @param httpRequest
     * @return
     */
    public SimpleSynthesisPurificationBean createPurity(SimpleSynthesisPurificationBean editBean,
                                                        HttpServletRequest httpRequest) throws SynthesisException {

        List<String> msgs = new ArrayList<String>();
        try {
            SynthesisPurificationBean synthesisPurificationBean = transferSimplePurification(editBean, httpRequest);
            List<SimplePurityBean> purityBeans = editBean.getPurityBeans();
            if ((purityBeans != null) && (purityBeans.size() > 0)) {
                for (SimplePurityBean bean : purityBeans) {
                    if (bean.getId() == null) {
                        //create a new purity
                        SynthesisPurityBean purityBean = transferSimplePurity(bean, httpRequest);
                        synthesisService.saveSynthesisPurity(purityBean, synthesisPurificationBean);
                    } else {
                        //check if edit needed
                        if (bean.isDirty()) {
                            //TODO edit data
                            //Moved to updatePurity??
                            updatePurity(httpRequest, editBean.getPurityBeingEdited());
                        }

                    }
                }
            }
//            List<SimplePurityRowBean> rows = editBean.getRows();
//            List<ColumnHeader> headers = editBean.getColumnHeaders();
//            if((rows!=null) && (headers!=null)){
//                //convert rows into purities
//                SimplePurityBean newBean = new SimplePurityBean();
//                newBean.setRows(rows);
//                newBean.setColumnHeaders(headers);
//                SynthesisPurityBean purityBean = transferSimplePurity(newBean, headers, httpRequest);
//                synthesisService.saveSynthesisPurity(purityBean, synthesisPurificationBean);
//            }

            //refresh synthesispurification bean
            Long sampleId = new Long(editBean.getSampleId());
            SynthesisPurificationBean purificationBean = synthesisService.findSynthesisPurificationById(sampleId,
                    editBean.getId());
            SimpleSynthesisPurificationBean simpleSynthesisPurificationBean =
                    new SimpleSynthesisPurificationBean(purificationBean, sampleId.toString(),
                            springSecurityAclService, httpRequest);
//            simpleSynthesisPurificationBean.transferSynthesisPurificationBeanToSimple(purificationBean, httpRequest);
            simpleSynthesisPurificationBean.setupLookups(httpRequest);
            simpleSynthesisPurificationBean.setErrors(msgs);
            return simpleSynthesisPurificationBean;
        }
        catch (SynthesisException | NoAccessException e) {
            msgs.add("Error editing purity");
            throw new SynthesisException("Error creating purity", e);
        }


    }

    public SimplePurityBean createPurityTemplate(SimplePurityBean purityBean, HttpServletRequest httpRequest) {
        SimplePurityBean simplePurityBean = new SimplePurityBean();

        return simplePurityBean;
    }

    /**
     * delete an existing purification
     *
     * @param editBean
     * @param httpRequest
     * @return
     */
    public SimpleSynthesisBean delete(SimpleSynthesisPurificationBean editBean, HttpServletRequest httpRequest) throws NoAccessException, SynthesisException {

        List<String> msgs = new ArrayList<String>();
        SynthesisPurificationBean entityBean = transferSimplePurification(editBean, httpRequest);
        try {
            entityBean.setUpDomainEntity(SpringSecurityUtil.getLoggedInUserName());

            String sampleId = editBean.getSampleId();
            synthesisService.deleteSynthesisPurification(new Long(sampleId), entityBean.getDomainEntity());

            SynthesisBean synthesisBean = synthesisService.findSynthesisBySampleId(new Long(sampleId));
            SimpleSynthesisBean simpleSynthesisBean = new SimpleSynthesisBean();
            simpleSynthesisBean.transferSynthesisForSummaryView(synthesisBean);

            msgs.add("success");
            return simpleSynthesisBean;
        }
        catch (Exception e) {
            msgs.add("Error deleting purification");
            throw new SynthesisException("Error deleting purification", e);
        }
    }

    public List<String> deleteColumnHeader(PurityColumnHeader header) {
        try {
            synthesisService.deleteColumnHeader(header);
        }
        catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }

    /**
     * Delete a file from an existing purification
     *
     * @param editBean
     * @param httpRequest
     * @return
     */
    public SimpleSynthesisPurificationBean deleteFile(SimpleSynthesisPurificationBean editBean, HttpServletRequest httpRequest) throws SynthesisException {

        try {
            SynthesisPurificationBean entityBean = transferSimplePurification(editBean, httpRequest);

            FileBean theFile = entityBean.getFile(editBean.getFileBeingEdited().getId());
            entityBean.removeFile(theFile);

            List<String> msgs = validateInputs(httpRequest, entityBean);
            if (msgs.size() > 0) {
                SimpleSynthesisPurificationBean synPure = new SimpleSynthesisPurificationBean();
                synPure.setErrors(msgs);
                return synPure;
            }
            this.saveEntity(entityBean, editBean.getSampleId(), httpRequest);
            httpRequest.setAttribute("anchor", "file");
            this.checkOpenForms(entityBean, httpRequest);
            return setupUpdate(editBean.getSampleId(), entityBean.getDomainEntity().getId().toString()
                    , httpRequest);
        } catch (SynthesisException s){
            throw s;
        }
        catch (Exception e) {
            e.printStackTrace();
            throw new SynthesisException("Unable to delete File",e);
        }
    }

    /**
     * Delete and existing purity from a purification
     *
     * @param editBean
     * @param httpRequest
     * @return
     */


    public SimpleSynthesisPurificationBean deletePurity(SimplePurityBean editBean, HttpServletRequest httpRequest) {

        try {

            if (editBean.getId() != null) {
                //Only need to delete from Database if it has been saved already

                SynthesisPurity purity = synthesisService.getHelper().getPurityById(new Long(editBean.getId()));
                SynthesisPurification purification = purity.getSynthesisPurification();
                Long purificationId = purification.getId();
                purification = synthesisService.getHelper().findSynthesisPurificationById(purificationId);
                Synthesis synthesis = synthesisService.getHelper().findSynthesisById(purification.getSynthesisId());
                Long sampleId = synthesis.getSample().getId();
                synthesisService.deleteSynthesisPurity(sampleId, purification, purity);

                purification = synthesisService.getHelper().findSynthesisPurificationById(sampleId, purificationId);
                SynthesisPurificationBean purificationBean = new SynthesisPurificationBean(purification);
                SimpleSynthesisPurificationBean simpleSynthesisPurificationBean =
                        new SimpleSynthesisPurificationBean(purificationBean, sampleId.toString(),
                                springSecurityAclService, httpRequest);
//                SynthesisPurification purification = purity.getSynthesisPurification();
//                Set<PurityDatumCondition> datumConditions = purity.getPurityDatumCollection();
//                Set<PurityColumnHeader> columnHeaders = new HashSet<PurityColumnHeader>();
//                for(PurityDatumCondition datumCondition: datumConditions){
//                    PurityColumnHeader columnHeader = datumCondition.getColumnHeader();
//                    deleteColumnHeader(columnHeader);
//                    s
//                }
                return simpleSynthesisPurificationBean;

            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * Remove a technique and instrument from a purification
     *
     * @param editBean
     * @param httpRequest
     * @return
     */
    public List<String> deleteTechniqueAndEquipment(SimpleSynthesisPurificationBean editBean,
                                                    HttpServletRequest httpRequest) throws SynthesisException {
        //TODO write
       List<String> msgs = new ArrayList<String>();
        try {
            if (editBean.getId() != null) {
                Set<PurificationConfig> config = synthesisService.getHelper().findConfigByPurificationId(new Long(editBean.getId()));
            }
        } catch (SynthesisException s){
            throw s;
        }
        catch (Exception e) {
            e.printStackTrace();
            throw new SynthesisException("Unable to delete technique", e);
        }
        return msgs;
    }

    public SimplePurityBean drawMatrix(HttpServletRequest request, SimplePurityBean simplePurityBean)
            throws Exception {

        if (simplePurityBean.getId() == null) {
            return drawNewMatrix(request, simplePurityBean);
        }


        //This is just a matrix redraw.  We are not saving to the database yet.

        SynthesisPurityBean oldPurityBean = this.findMatchPurityBean(simplePurityBean);


        simplePurityBean.transferTableNumbersToPurityBean(oldPurityBean);

        //update matrix in bean, which will add or delete columns and rows
        oldPurityBean.updateMatrix(oldPurityBean.getNumberOfColumns(),
                oldPurityBean.getNumberOfRows());

        //pull the bean matrix back to the simple bean
        simplePurityBean.transferFromPurityBean(request, oldPurityBean);

        //prep new column headers to receive data
        simplePurityBean.setDefaultValuesForNullHeaders();

        return simplePurityBean;


    }

    public SimplePurityBean drawNewMatrix(HttpServletRequest request, SimplePurityBean simplePurity)
            throws Exception {

//		CharacterizationBean achar = (CharacterizationBean) request.getSession().getAttribute("theChar");
//		SimpleCharacterizationEditBean editBean =
//				(SimpleCharacterizationEditBean) request.getSession().getAttribute("theEditChar");
//		request.setAttribute("anchor", "result");


        SynthesisPurityBean purityBean = new SynthesisPurityBean();


        simplePurity.transferTableNumbersToPurityBean(purityBean);

        purityBean.updateMatrix(purityBean.getNumberOfColumns(),
                purityBean.getNumberOfRows());

        simplePurity.transferFromPurityBean(request, purityBean);
        simplePurity.setColumnHeaders(purityBean.getPurityColumnHeaders());
        simplePurity.setDefaultValuesForNullHeaders();

//		request.setAttribute("anchor", "submitFinding");

        //this.checkOpenForms(achar, theForm, request);
        // set columnHeaders in the session so jsp can check duplicate columns
//		request.getSession().setAttribute("columnHeaders",
//				findingBean.getColumnHeaders());
        //return mapping.findForward("inputForm");

        return simplePurity;
    }

    @Override
    public CurationService getCurationServiceDAO() {
        return this.curationServiceDAO;
    }

    @Override
    public SampleService getSampleService() {
        return this.sampleService;
    }

    @Override
    public SpringSecurityAclService getSpringSecurityAclService() {
        return this.springSecurityAclService;
    }

    @Override
    public UserDetailsService getUserDetailsService() {
        return this.userDetailsService;
    }

    /**
     * add or edit a file on and existing purification
     *
     * @param editBean
     * @param httpRequest
     * @return
     */
    public SimpleSynthesisPurificationBean saveFile(SimpleSynthesisPurificationBean editBean,
                                                    HttpServletRequest httpRequest) throws Exception {
        SynthesisPurificationBean synthesisPurificationBean = transferSimplePurification(editBean, httpRequest);
//        List<FileBean> fileList = synthesisPurificationBean.getFiles();


        String timestamp = DateUtils.convertDateToString(new Date(), "yyyyMMdd_HH-mm-ss-SSS");

        SampleBean sampleBean = setupSampleById(editBean.getSampleId(), httpRequest);
        FileBean theNewFile = new FileBean(editBean.getFileBeingEdited());


        //Determine the directory for saving the file
        String internalUriPath = Constants.FOLDER_PARTICLE + '/' + sampleBean.getDomain().getName() + '/' +
                "synthesisPurification";
        byte[] newFileData = (byte[]) httpRequest.getSession().getAttribute("newFileData");
        theNewFile.setNewFileData(newFileData);
        theNewFile.setupDomainFile(internalUriPath, SpringSecurityUtil.getLoggedInUserName());



//        if (!theNewFile.getDomainFile().getUriExternal()) {
//            if (newFileData != null) {
//                theNewFile.setNewFileData((byte[]) httpRequest.getSession().getAttribute("newFileData"));
//                theNewFile.getDomainFile().setUri(Constants.FOLDER_PARTICLE + '/'
//                        + sampleBean.getDomain().getName() + '/' + "synthesisPurification" + "/" + timestamp + "_"
//                        + theNewFile.getDomainFile().getName());
//            } else if (theNewFile.getDomainFile().getId() != null) {
//                theNewFile.getDomainFile().setUri(theNewFile.getDomainFile().getName());
//            } else {
//                theNewFile.getDomainFile().setUri(null);
//            }
//        }
        synthesisPurificationBean.addFile(theNewFile);

//
//        // save entity to save file because inverse="false"
        List<String> msgs = validateInputs(httpRequest, synthesisPurificationBean);
        if (msgs.size() > 0) {
            SimpleSynthesisPurificationBean simpleSynPurBean = new SimpleSynthesisPurificationBean();
            simpleSynPurBean.setErrors(msgs);
            return simpleSynPurBean;
        }
        this.saveEntity(synthesisPurificationBean, editBean.getSampleId(), httpRequest);
//        compositionService.assignAccesses(entity.getDomainEntity().getSampleComposition(), theFile.getDomainFile());

        httpRequest.setAttribute("anchor", "file");
        httpRequest.setAttribute("dataId", synthesisPurificationBean.getDomainEntity().getId().toString());
        httpRequest.getSession().removeAttribute("newFileData");

        return setupUpdate(editBean.getSampleId(), synthesisPurificationBean.getDomainEntity().getId().toString(),
                httpRequest);

    }

    private List<String> validateInputs(HttpServletRequest request, SynthesisPurificationBean entityBean) {


        List<String> msgs = new ArrayList<String>();
        msgs = validateEntity(request, msgs, entityBean);
        msgs = validatePurificationElements(request, msgs, entityBean);
        msgs = validateFile(request, msgs, entityBean);

        return msgs;


    }

    /**
     * Returns current purification information and fields for editing that purification
     *
     * @param sampleId
     * @param dataId      - id of purification to view/edit
     * @param httpRequest
     * @return
     *
     * @throws Exception
     */
    public SimpleSynthesisPurificationBean setupUpdate(String sampleId, String dataId,
                                                       HttpServletRequest httpRequest) throws SynthesisException {
        SynthesisForm form = new SynthesisForm();
        // set up other particles with the same primary point of contact
//        InitSampleSetup.getInstance().getOtherSampleNames(httpRequest, sampleId, sampleService);

        try {
            SynthesisPurificationBean synBean = synthesisService.findSynthesisPurificationById(new Long(sampleId),
                    new Long(dataId));
//            assignColumnHeadersForPurification(synBean);
            form.setSynthesisPurificationBean(synBean);
            this.setDataAndConditionLookup(httpRequest, sampleId);
            this.setLookups(httpRequest, sampleId);
            this.checkOpenForms(synBean, httpRequest);
            httpRequest.getSession().setAttribute("sampleId", sampleId);
            SimpleSynthesisPurificationBean simpleSynthesisPurificationBean =
                    new SimpleSynthesisPurificationBean(synBean, sampleId, springSecurityAclService, httpRequest);
//            simpleSynthesisPurificationBean.transferSynthesisPurificationBeanToSimple(synBean, httpRequest);
            return simpleSynthesisPurificationBean;
        }
        catch (IllegalFormatConversionException e) {
            logger.error("Either sample id or data id is not an appropriate identifier. ", e);
            throw new SynthesisException("Either sample id or data id is not an appropriate identifier. ", e);
        }
        catch (NoAccessException e) {
            String err = "User has no access to edit " + sampleId;
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }
        catch (Exception e) {
            String err = "Problem retrieving dropdowns for purification";
            logger.error(err, e);
            throw new SynthesisException(err, e);
        }

    }

    private List<String> validateEntity(HttpServletRequest httpRequest, List<String> msgs,
                                        SynthesisPurificationBean synthesisPurificationBean) {
        //TODO write

        return msgs;
    }

    private List<String> validatePurificationElements(HttpServletRequest httpRequest, List<String> msgs,
                                                      SynthesisPurificationBean synthesisPurificationBean) {
        //TODO write

        return msgs;
    }

    private List<String> validateFile(HttpServletRequest request, List<String> msgs,
                                      SynthesisPurificationBean entityBean) {
        //ActionMessages msgs = new ActionMessages();
        for (FileBean filebean : entityBean.getFiles()) {
            msgs = validateFileBean(request, msgs, filebean);
            if (msgs.size() > 0) {
                return msgs;
            }
        }
        return msgs;
    }

    private void setDataAndConditionLookup(HttpServletRequest request, String sampleId) throws Exception {
        InitSynthesisSetup.getInstance().setSynthesisPurityDropDowns(request, sampleId);
    }



    /**
     * Crafts the lookups for the purification web form
     *
     * @param httpRequest
     * @param sampleId
     * @throws Exception
     */
    private void setLookups(HttpServletRequest httpRequest, String sampleId) throws Exception {
        ServletContext appContext = httpRequest.getSession().getServletContext();
        InitSynthesisSetup.getInstance().setSynthesisPurificationDropdowns(httpRequest, sampleId);
    }

    /**
     * @param synBean
     * @param httpRequest
     */
    private void checkOpenForms(SynthesisPurificationBean synBean, HttpServletRequest httpRequest) {
        //TODO write
    }

    public SimpleSynthesisPurificationBean savePurityFile(SimpleSynthesisPurificationBean purificationBean,
                                                          HttpServletRequest httpRequest) throws Exception {
        String timestamp = DateUtils.convertDateToString(new Date(), "yyyyMMdd_HH-mm-ss-SSS");
        SimplePurityBean editBean = purificationBean.getPurityBeingEdited();
        editBean.setFileBeingEdited(purificationBean.getFileBeingEdited());
        SampleBean sampleBean = setupSampleById(purificationBean.getSampleId(), httpRequest);

        FileBean theNewFile;
        if(editBean.getFileBeingEdited()!=null) {
            theNewFile = new FileBean(editBean.getFileBeingEdited());

        }
//        else if(purificationBean.getFileBeingEdited()!=null){
//            theNewFile = new FileBean(purificationBean.getFileBeingEdited());
//            editBean.setFileBeingEdited(purificationBean.getFileBeingEdited());
//            purificationBean.setFileBeingEdited(null);
//        }
        else{
            String err = "No file passed in";
            throw new SynthesisException(err);
        }
//        SampleBean sampleBean = setupSampleById(purificationBean.getSampleId(), httpRequest);
//        //Determine the directory for saving the file
        String internalUriPath = Constants.FOLDER_PARTICLE+'/'+sampleBean.getDomain().getName()+'/'+"synthesisPurity";
        byte[] newFileData = (byte[]) httpRequest.getSession().getAttribute("newFileData");
        theNewFile.setNewFileData(newFileData);
        theNewFile.setupDomainFile(internalUriPath,SpringSecurityUtil.getLoggedInUserName());

//        if(!theNewFile.getDomainFile().getUriExternal()){
//            if(newFileData!=null){
//                theNewFile.setNewFileData((byte[]) httpRequest.getSession().getAttribute("newFileData"));
//                theNewFile.getDomainFile().setUri(internalUriPath + "/" + timestamp + "_"
//                        + theNewFile.getDomainFile().getName());
//            }else if(theNewFile.getDomainFile().getId()!=null){
//                theNewFile.getDomainFile().setUri(theNewFile.getDomainFile().getName());
//            }else{
//                theNewFile.getDomainFile().setUri(null);
//            }
//        }

        SynthesisPurityBean synthesisPurityBean = transferSimplePurity(editBean, httpRequest);
        SynthesisPurificationBean synthesisPurificationBean = transferSimplePurification(purificationBean, httpRequest);

//        synthesisPurityBean.addFile(theNewFile);
        synthesisPurityBean.setFileBeingEdited(theNewFile);



        List<String> msgs = validateInputs(httpRequest, synthesisPurityBean);
//        if (msgs.size()>0) {
//            SimplePurityBean simplePurityBean = new SimplePurityBean();
//            simplePurityBean.setErrors(msgs);
//            return simplePurityBean;
//        }

        if (msgs.size() > 0) {
            SimpleSynthesisPurificationBean newSimplePurificationBean = new SimpleSynthesisPurificationBean();
            newSimplePurificationBean.setErrors(msgs);
            return newSimplePurificationBean;
        }
        this.savePurity(synthesisPurificationBean, synthesisPurityBean, httpRequest);

        httpRequest.setAttribute("anchor", "file");
        httpRequest.setAttribute("dataId", synthesisPurityBean.getDomain().getId().toString());
        httpRequest.getSession().removeAttribute("newFileData");

        SimplePurityBean newSimplePurityBean = new SimplePurityBean();
        newSimplePurityBean.transferFromPurityBean(httpRequest, synthesisPurityBean);

        SimpleSynthesisPurificationBean newSimplePurificationBean = new SimpleSynthesisPurificationBean();
        newSimplePurificationBean.transferSynthesisPurificationBeanToSimple(synthesisPurificationBean, httpRequest,
                springSecurityAclService);
//        return newSimplePurityBean;
        return newSimplePurificationBean;
    }

    private List<String> validateInputs(HttpServletRequest request, SynthesisPurityBean entityBean) {


        List<String> msgs = new ArrayList<String>();
//        msgs = validateEntity(request, msgs, entityBean);
//        msgs = validatePurificationElements(request, msgs, entityBean);
        msgs = validateFile(request, msgs, entityBean);

        return msgs;


    }

    private List<String> savePurity(SynthesisPurificationBean synthesisPurificationBean,
                                    SynthesisPurityBean purityBean, HttpServletRequest httpServletRequest) throws Exception {
        List<String> msgs = new ArrayList<String>();
        CananoUserDetails userDetails = SpringSecurityUtil.getPrincipal();
        boolean newEntity = true;

        String internalURL = "";
        try {
            purityBean.setupDomain(internalURL, userDetails.getUsername());

            if (purityBean.getDomain().getId() != null) {
                newEntity = false;
            }

            synthesisService.saveSynthesisPurity(purityBean, synthesisPurificationBean);
        }
        catch (Exception ex) {
            String err = "Unable to save purity " ;
            logger.error(err, ex);
            throw new SynthesisException(err, ex);

        }

        return msgs;
    }

    private List<String> validateFile(HttpServletRequest request, List<String> msgs,
                                      SynthesisPurityBean entityBean) {
        //ActionMessages msgs = new ActionMessages();
        for (FileBean filebean : entityBean.getFiles()) {
            msgs = validateFileBean(request, msgs, filebean);
            if (msgs.size() > 0) {
                return msgs;
            }
        }
        return msgs;
    }

    /**
     * Add or edit a technique and instrument to a purification
     *
     * @param editBean
     * @param httpRequest
     * @return
     */
    public List<String> saveTechniqueAndEquipment(SimpleSynthesisPurificationBean editBean,
                                                  HttpServletRequest httpRequest) throws Exception {
        List<String> msgs = new ArrayList<String>();
        try{
        SynthesisPurification purification = synthesisService.getHelper().findSynthesisPurificationById(editBean.getId());

        List<SimplePurificationConfigBean> simpleExperimentBeans = editBean.getSimpleExperimentBeans();
        Set<PurificationConfig> purificationConfigs = new HashSet<PurificationConfig>();
        if (simpleExperimentBeans != null) {
            for (SimplePurificationConfigBean sExperimentBean : simpleExperimentBeans) {
                PurificationConfig config = new PurificationConfig();
                if (sExperimentBean.getTechniqueid() != null) {
                    Technique technique = new Technique();
                    technique.setId(sExperimentBean.getTechniqueid());
                    technique.setType(sExperimentBean.getTechniqueType());
                    technique.setAbbreviation(sExperimentBean.getAbbreviation());
                    technique.setCreatedBy(purification.getCreatedBy());
                    technique.setCreatedDate(purification.getCreatedDate());
                    config.setTechnique(technique);
                } else {
                    ExperimentConfigManager experimentMgr =
                            (ExperimentConfigManager) SpringApplicationContext.getBean(httpRequest,
                                    "experimentConfigManager");

                    List<Technique> techniqueList =
                            experimentMgr.getTechniquesByType(sExperimentBean.getTechniqueType());
                    if (techniqueList.size() == 1) {
                        config.setTechnique(techniqueList.get(0));
                    } else {
                        //check for matches with other fields

                        for (Technique tempTech : techniqueList) {
                            if (tempTech.getAbbreviation().equals(sExperimentBean.getAbbreviation())) {
                                config.setTechnique(tempTech);
                                break;
                            }
                        }
                        if (config.getTechnique() == null) {
                            //There was no match in existing so need to create a new technique
                            Technique technique = new Technique();
                            technique.setType(sExperimentBean.getTechniqueType());
                            technique.setAbbreviation(sExperimentBean.getAbbreviation());
                            technique.setCreatedBy(purification.getCreatedBy());
                            technique.setCreatedDate(purification.getCreatedDate());

                            config.setTechnique(technique);
                        }

                    }

                }
                config.setPurificationConfigPkId(sExperimentBean.getId());
                config.setDescription(sExperimentBean.getDescription());
                if ((config.getPurificationConfigPkId() != null) && (config.getPurificationConfigPkId() > 0)) {
                    config.setPurificationConfigPkId(sExperimentBean.getId());
                    //TODO get created date and by from database
                    config.setCreatedBy(purification.getCreatedBy());
                    config.setCreatedDate(purification.getCreatedDate());

                } else {
                    //TODO might need to fix if purification not set
                    config.setCreatedBy(purification.getCreatedBy());
                    config.setCreatedDate(purification.getCreatedDate());
                }
                //Technique
                if (sExperimentBean.getInstruments() != null) {
                    Set<Instrument> instrumentSet = new HashSet<Instrument>();
                    for (SimpleInstrumentBean simpleInstrumentBean : sExperimentBean.getInstruments()) {
                        Instrument instrument = new Instrument();
                        if ((simpleInstrumentBean.getId() != null) && (simpleInstrumentBean.getId() > 0)) {
                            instrument.setId(simpleInstrumentBean.getId());
                            instrument.setCreatedBy(purification.getCreatedBy());
                            instrument.setCreatedDate(purification.getCreatedDate());
                        } else {
                            //TODO might need to fix if purification not set
                            instrument.setCreatedDate(purification.getCreatedDate());
                            instrument.setCreatedBy(purification.getCreatedBy());
                        }
                        instrument.setManufacturer(simpleInstrumentBean.getManufacturer());
                        instrument.setModelName(simpleInstrumentBean.getModelName());
                        instrument.setType(simpleInstrumentBean.getType());
                        instrumentSet.add(instrument);
                    }
                    config.setInstrumentCollection(instrumentSet);
                }

                purificationConfigs.add(config);
            }
            purification.setPurificationConfigs(purificationConfigs);

        }}catch (Exception e){
            msgs.add("Unable to save Technique and instrument");

        }
        return msgs;
    }

    /**
     * Returns dropdown and other information for creating a new Purification object
     *
     * @param sampleId
     * @param httpRequest
     * @return
     *
     * @throws Exception
     */
    public Map<String, Object> setupNew(String sampleId, HttpServletRequest httpRequest) throws Exception {
        SynthesisPurificationBean synthesisPurificationBean = new SynthesisPurificationBean();
        List<String> otherNames = InitSampleSetup.getInstance().getOtherSampleNames(httpRequest, sampleId,
                sampleService);
        this.setLookups(httpRequest, sampleId);
        this.checkOpenForms(synthesisPurificationBean, httpRequest);

        Map<String, Object> testLookup = new HashMap<String, Object>();
        testLookup.put("protocolLookup", this.setProtocolLookup(httpRequest));
        testLookup.put("Sources", this.setPOCDropdown(httpRequest, sampleId));
        Map<String, Object> utilMap =
                SynthesisUtil.reformatLocalSearchDropdownsInSessionForSynthesisPurification(httpRequest.getSession());
        testLookup.putAll(utilMap);
        return testLookup;

    }

    public List<SimpleProtocol> setProtocolLookup(HttpServletRequest request)
            throws Exception {
        List<SimpleProtocol> protocolLookup = new ArrayList<SimpleProtocol>();
        List<ProtocolBean> protoBeans = protocolService.getPurificationProtocols(request);

        if (protoBeans == null) {
            return protocolLookup;
        }

        for (ProtocolBean protoBean : protoBeans) {
            SimpleProtocol simpleProto = new SimpleProtocol();
            simpleProto.transferFromProtocolBean(protoBean);
            protocolLookup.add(simpleProto);
        }
        return protocolLookup;
    }

    public Set setPOCDropdown(HttpServletRequest request, String sampleId)
            throws Exception {
        List<PointOfContactBean> pocs = sampleService.findPointOfContactsBySampleId(sampleId);
        Set<String> displaySet = new TreeSet<String>();
        for (PointOfContactBean pointOfContactBean : pocs) {
            String display =
                    pointOfContactBean.getDomain().getOrganization().getName() + " (" + pointOfContactBean.getDomain().getCreatedBy() + ")";
            displaySet.add(display);
        }

        return displaySet;
    }

    public SimpleSynthesisPurificationBean setupUpdate(Long dataId,
                                                       HttpServletRequest httpRequest) throws SynthesisException,
            NoAccessException {
        SynthesisForm form = new SynthesisForm();
        // set up other particles with the same primary point of contact
//        InitSampleSetup.getInstance().getOtherSampleNames(httpRequest, sampleId, sampleService);


        SynthesisPurificationBean synBean = synthesisService.findSynthesisPurificationById(
                new Long(dataId));
        Synthesis synthesis = synBean.getDomainEntity().getSynthesis();
        Long sampleId = synthesis.getSample().getId();

        return setupUpdate(sampleId.toString(), dataId.toString(), httpRequest);

    }



//    private void transferPurityRows() {
//        /**We will get a set of simple rows.  We need to transfer them to full rows
//         * with PurityDatums with Condition collections
//         * These will be held in PurityRoWs
//         */
//
//    }

    public SimplePurityBean updatePurity(HttpServletRequest httpServletRequest, SimplePurityBean newSimplePurityBean) throws SynthesisException {
/**
 Option: add rows, keep columns -
 add column, keep rows -
 add rows, add columns -
 delete rows, keep columns - disallowed
 delete columns, keep rows - disallowed
 delete rows, delete columns - disallowed
 keep rows, columns, change data
 keep rows, columns, change column headers - still enforce 1 datum.
 **/
        try {
            SynthesisPurityBean oldPurityBean = this.findMatchPurityBean(newSimplePurityBean);

            List<String> msgs = new ArrayList<String>();


            //editing column headers
            oldPurityBean.setPurityColumnHeaders(newSimplePurityBean.getColumnHeaders());

            //editing row data
            List<PurityRow> purityRows = new ArrayList<PurityRow>();
            for (SimplePurityRowBean newRowBean : newSimplePurityBean.getRows()) {
                //turn into a PurityRowBean
                PurityRow row = new PurityRow();
                newRowBean.transferToRow(row);
                purityRows.add(row);
            }
            oldPurityBean.setRows(purityRows);

            Long purificationId = oldPurityBean.getDomain().getSynthesisPurificationId();
            SynthesisPurification purification =
                    synthesisService.getHelper().findSynthesisPurificationById(purificationId);
            SynthesisPurificationBean purificationBean = new SynthesisPurificationBean(purification);
            purificationBean.getPurityBeans();


            synthesisService.saveSynthesisPurity(oldPurityBean, purificationBean);

//            Long synthesisId = purificationBean.getDomainEntity().getSynthesisId();
//            Synthesis synthesis = synthesisService.getHelper().findSynthesisById(synthesisId);
//            Long sampleId = synthesis.getSample().getId();
//            SimpleSynthesisPurificationBean newSimplePurificationBean = new SimpleSynthesisPurificationBean
//            (purificationBean, sampleId.toString());
//            return newSimplePurificationBean;

            //return the updated simple purity
            SynthesisPurityBean newPurityBean = this.findMatchPurityBean(newSimplePurityBean);
            SimplePurityBean simplePurityBean = new SimplePurityBean();
            simplePurityBean.transferFromPurityBean(httpServletRequest, newPurityBean);
            return simplePurityBean;
//            return msgs;


        }
        catch (Exception e) {
            throw new SynthesisException("Error updating purity matrix", e);
        }
    }

    protected SynthesisPurityBean findMatchPurityBean(
            SimplePurityBean simplePurityBean)
            throws Exception {


        SynthesisPurity oldPurity = synthesisService.getHelper().getPurityById(simplePurityBean.getId());
        if (oldPurity == null) {
            throw new Exception("Current purification has no finding matching input purity id: " + simplePurityBean.getId());
        }

//        for (SynthesisPurityBean finding : findingBeans) {
//            if (finding.getDomain() != null) {
//                Long id = finding.getDomain().getId();
//                if (id == null && simplePurityBean.getId() == 0 || //could be a new finding bean added when saving
//                a file
//                        id != null && id.longValue() == simplePurityBean.getId()) {
////                    achar.setTheFinding(finding);
//                    return finding;
//                }
//            }
//        }

        if (simplePurityBean.getId() <= 0) {//new finding
            SynthesisPurityBean newBean = new SynthesisPurityBean();
//            achar.setTheFinding(newBean);
            return newBean;
        }
        SynthesisPurityBean newBean = new SynthesisPurityBean(oldPurity);
        return newBean;

    }

}
