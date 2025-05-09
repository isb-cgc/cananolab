package gov.nih.nci.cananolab.restful.sample;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.common.Keyword;
import gov.nih.nci.cananolab.domain.function.ImagingFunction;
import gov.nih.nci.cananolab.domain.function.OtherFunction;
import gov.nih.nci.cananolab.domain.function.TargetingFunction;
import gov.nih.nci.cananolab.domain.function.TherapeuticFunction;
import gov.nih.nci.cananolab.domain.nanomaterial.NanoBiopolymer;
import gov.nih.nci.cananolab.domain.nanomaterial.CarbonNanotube;
import gov.nih.nci.cananolab.domain.nanomaterial.Dendrimer;
import gov.nih.nci.cananolab.domain.nanomaterial.Emulsion;
import gov.nih.nci.cananolab.domain.nanomaterial.Fullerene;
import gov.nih.nci.cananolab.domain.nanomaterial.Liposome;
import gov.nih.nci.cananolab.domain.nanomaterial.OtherNanomaterialEntity;
import gov.nih.nci.cananolab.domain.nanomaterial.Polymer;
import gov.nih.nci.cananolab.domain.particle.ComposingElement;
import gov.nih.nci.cananolab.domain.particle.Function;
import gov.nih.nci.cananolab.domain.particle.NanomaterialEntity;
import gov.nih.nci.cananolab.domain.particle.SampleComposition;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.particle.SampleBean;
import gov.nih.nci.cananolab.dto.particle.composition.ComposingElementBean;
import gov.nih.nci.cananolab.dto.particle.composition.FunctionBean;
import gov.nih.nci.cananolab.dto.particle.composition.NanomaterialEntityBean;
import gov.nih.nci.cananolab.exception.*;
import gov.nih.nci.cananolab.restful.core.BaseAnnotationBO;
import gov.nih.nci.cananolab.restful.core.InitSetup;
import gov.nih.nci.cananolab.restful.util.CompositionUtil;
import gov.nih.nci.cananolab.restful.util.PropertyUtil;
import gov.nih.nci.cananolab.restful.view.edit.SimpleComposingElementBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleFileBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleNanomaterialEntityBean;
import gov.nih.nci.cananolab.security.CananoUserDetails;
import gov.nih.nci.cananolab.security.enums.SecureClassesEnum;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;
import gov.nih.nci.cananolab.service.curation.CurationService;
import gov.nih.nci.cananolab.service.sample.CompositionService;
import gov.nih.nci.cananolab.service.sample.SampleService;
import gov.nih.nci.cananolab.ui.form.CompositionForm;
import gov.nih.nci.cananolab.util.Constants;
import gov.nih.nci.cananolab.util.DateUtils;
import gov.nih.nci.cananolab.util.StringUtils;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.io.IOException;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = false, propagation = Propagation.REQUIRED)
@Component("nanomaterialEntityBO")
public class NanomaterialEntityBO extends BaseAnnotationBO {
    private static Logger logger = LogManager.getLogger(NanomaterialEntityBO.class);

    @Autowired
    private CompositionService compositionService;

    @Autowired
    private CurationService curationServiceDAO;

    @Autowired
    private SampleService sampleService;

    @Autowired
    private SpringSecurityAclService springSecurityAclService;

    @Autowired
    private UserDetailsService userDetailsService;

    /**
     * Add or update the data to database
     *
     * @param nanoBean
     * @param request
     * @return
     * @throws Exception
     */
    public List<String> create(SimpleNanomaterialEntityBean nanoBean,
                               HttpServletRequest request)
            throws Exception {
        List<String> msgs = new ArrayList<String>();
        String sampleId = nanoBean.getSampleId();
        NanomaterialEntityBean entityBean = transferNanoMateriaEntityBean(nanoBean, request);
        SampleBean sampleBean = setupSampleById(sampleId, request);
        List<String> otherSampleNames = nanoBean.getOtherSampleNames();
        msgs = validateInputs(request, entityBean);
        if (msgs.size() > 0) {
            return msgs;
        }
        this.saveEntity(request, sampleId, entityBean);
        InitCompositionSetup.getInstance().persistNanomaterialEntityDropdowns(
                request, entityBean);
        SampleBean[] otherSampleBeans = null;
        if (otherSampleNames != null) {
            otherSampleBeans = prepareCopy(request, otherSampleNames, sampleBean);
        }
        if (otherSampleBeans != null) {
            compositionService.copyAndSaveNanomaterialEntity(entityBean, sampleBean, otherSampleBeans);
        }
        // save action messages in the session so composition.do know about them
        // to preselect nanomaterial entity after returning to the summary page
        msgs.add("success");
        request.getSession().setAttribute("tab", "1");
        return msgs;
    }

    private List<String> validateInputs(HttpServletRequest request,
                                        NanomaterialEntityBean entityBean) {
        List<String> msgs = new ArrayList<String>();

        msgs = validateEntity(request, msgs, entityBean);

        msgs = validateInherentFunctionType(request, msgs, entityBean);

        msgs = validateEntityFile(request, msgs, entityBean);

        return msgs;
    }

    public void input(CompositionForm form,
                      HttpServletRequest request)
            throws Exception {

        NanomaterialEntityBean entityBean = form.getNanomaterialEntity();
        escapeXmlForFileUri(entityBean.getTheFile());
        entityBean.updateEmptyFieldsToNull();
        // Save uploaded data in session to avoid asking user to upload again.
        FileBean theFile = entityBean.getTheFile();
        //preserveUploadedFile(request, theFile, "nanomaterialEntity");

        this.checkOpenForms(entityBean, request);
    }

    private List<String> saveEntity(HttpServletRequest request, String sampleId,
                                    NanomaterialEntityBean entityBean)
            throws ClassCastException, CompositionException, NotExistException,
                   SampleException, NoAccessException, CurationException,
                   InstantiationException, IllegalAccessException, IOException, ClassNotFoundException {
        List<String> msgs = new ArrayList<String>();
        SampleBean sampleBean = setupSampleById(sampleId, request);
        CananoUserDetails userDetails = SpringSecurityUtil.getPrincipal();

        Boolean newEntity = true;

        try {
            entityBean.setupDomainEntity(userDetails.getUsername());
            if (entityBean.getDomainEntity().getId() != null) {
                newEntity = false;
            }
        } catch (ClassCastException ex) {
            if (!StringUtils.isEmpty(ex.getMessage())
                    && !ex.getMessage().equalsIgnoreCase("java.lang.Object")) {
                msgs.add(entityBean.getType() + " is an invalid nanomaterial entity type. It is a pre-defined composition type.");
            } else {
                msgs.add(entityBean.getType() + " is an invalid nanomaterial entity type. It is a pre-defined composition type.");

                entityBean.setType(null);
            }
            entityBean.setType(null);
        }

        compositionService.saveNanomaterialEntity(sampleBean, entityBean);

        // retract from public if updating an existing public record and not curator
        if (!newEntity && !userDetails.isCurator() &&
                springSecurityAclService.checkObjectPublic(sampleBean.getDomain().getId(), SecureClassesEnum.SAMPLE.getClazz())) {
            retractFromPublic(request, sampleBean.getDomain().getId(), sampleBean.getDomain().getName(), "sample", SecureClassesEnum.SAMPLE.getClazz());
            msgs.add(PropertyUtil.getProperty("sample", "message.updateSample.retractFromPublic"));
            return msgs;
        }
        return msgs;
    }

    private List<String> validateInherentFunctionType(HttpServletRequest request, List<String> msgs,
                                                      NanomaterialEntityBean entityBean) {

        for (ComposingElementBean composingElementBean : entityBean
                .getComposingElements()) {
            if (composingElementBean.getDomain().getType() == null || composingElementBean.getDomain().getType().equals("")) {
                msgs.add("Composing Element Type is required.");
            }
            if (composingElementBean.getDomain().getName() == null || composingElementBean.getDomain().getName().equals("")) {
                msgs.add("Composing Element Chemical Name is required.");
            }
            for (FunctionBean functionBean : composingElementBean
                    .getInherentFunctions()) {
                if (StringUtils.isEmpty(functionBean.getType())) {
                    msgs.add("Inherent function type is required.");
                } else if (!StringUtils.xssValidate(functionBean.getType())) {
                    msgs.add(PropertyUtil.getProperty("sample", "function.type.invalid"));
                }
            }
        }
        return msgs;
    }

    // per app scan, can not easily validate in the validation.xml
    private List<String> validateEntity(HttpServletRequest request, List<String> msgs,
                                        NanomaterialEntityBean entityBean) {
        if (entityBean.getType() == null || entityBean.getType().equals("")) {
            msgs.add("Nanomaterial Entity Type is required.");
        }
        if (entityBean.getType().equalsIgnoreCase("biopolymer")) {
            if (entityBean.getBiopolymer().getName() == null) {
                msgs.add("Biopolymer Name is required.");
            }
            if (entityBean.getBiopolymer().getName() != null
                    && !StringUtils.xssValidate(entityBean.getBiopolymer()
                    .getName())) {
                msgs.add(PropertyUtil.getProperty("sample", "nanomaterialEntityForm.biopolymer.name.invalid"));
            }
            if (entityBean.getBiopolymer().getType() == null) {
                msgs.add("Biopolymer Type is required.");
            }
            if (entityBean.getBiopolymer().getType() != null
                    && !StringUtils.xssValidate(entityBean.getBiopolymer()
                    .getType())) {
                msgs.add(PropertyUtil.getProperty("sample", "nanomaterialEntityForm.biopolymer.type.invalid"));
            }
        } else if (entityBean.getType().equalsIgnoreCase("liposome")) {
            if (entityBean.getLiposome().getPolymerName() != null
                    && !StringUtils.xssValidate(entityBean.getLiposome()
                    .getPolymerName())) {
                msgs.add(PropertyUtil.getProperty("sample", "nanomaterialEntityForm.liposome.polymerName.invalid"));
            }
        } else if (entityBean.getType().equalsIgnoreCase("emulsion")) {
            if (entityBean.getEmulsion().getPolymerName() != null
                    && !StringUtils.xssValidate(entityBean.getEmulsion()
                    .getPolymerName())) {
                msgs.add(PropertyUtil.getProperty("sample", "nanomaterialEntityForm.emulsion.polymerName.invalid"));
            }
        } else if (entityBean.getType().equalsIgnoreCase("polymer")) {
            if (entityBean.getPolymer().getInitiator() != null
                    && !StringUtils.xssValidate(entityBean.getPolymer()
                    .getInitiator())) {
                msgs.add(PropertyUtil.getProperty("sample", "nanomaterialEntityForm.polymer.initiator.invalid"));
            }
        } else if (entityBean.getType().equalsIgnoreCase("dendrimer")) {
            if (entityBean.getDendrimer().getBranch() != null
                    && !StringUtils.xssValidate(entityBean.getDendrimer()
                    .getBranch())) {
                msgs.add(PropertyUtil.getProperty("sample", "nanomaterialEntityForm.dendrimer.branch.invalid"));
            }
        } else if (entityBean.getType().equalsIgnoreCase("carbon nanotube")) {
            if (entityBean.getCarbonNanotube().getAverageLengthUnit() != null
                    && !entityBean.getCarbonNanotube().getAverageLengthUnit()
                    .matches(Constants.UNIT_PATTERN)) {
                msgs.add(PropertyUtil.getProperty("sample", "nanomaterialEntityForm.carbonNanotube.averageLengthUnit.invalid"));
            }
            if (entityBean.getCarbonNanotube().getChirality() != null
                    && !StringUtils.xssValidate(entityBean.getCarbonNanotube()
                    .getChirality())) {
                msgs.add(PropertyUtil.getProperty("sample", "nanomaterialEntityForm.carbonNanotube.chirality.invalid"));
            }
            if (entityBean.getCarbonNanotube().getDiameterUnit() != null
                    && !entityBean.getCarbonNanotube().getDiameterUnit()
                    .matches(Constants.UNIT_PATTERN)) {
                msgs.add(PropertyUtil.getProperty("sample", "nanomaterialEntityForm.carbonNanotube.diameterUnit.invalid"));
            }
        } else if (entityBean.getType().equalsIgnoreCase("fullerene")) {
            if (entityBean.getFullerene().getAverageDiameterUnit() != null
                    && !entityBean.getFullerene().getAverageDiameterUnit()
                    .matches(Constants.UNIT_PATTERN)) {
                msgs.add(PropertyUtil.getProperty("sample", "nanomaterialEntityForm.fullerene.averageDiameterUnit.invalid"));
            }
        }
        return msgs;
    }

    private List<String> validateEntityFile(HttpServletRequest request, List<String> msgs,
                                            NanomaterialEntityBean entityBean) {
        //ActionMessages msgs = new ActionMessages();
        for (FileBean filebean : entityBean.getFiles()) {
            msgs = validateFileBean(request, msgs, filebean);
            if (msgs.size() > 0) {
                return msgs;
            }
        }
        return msgs;
    }

    public void setLookups(HttpServletRequest request) throws Exception {
        ServletContext appContext = request.getSession().getServletContext();
        InitCompositionSetup.getInstance().setNanomaterialEntityDropdowns(request);
        InitSetup.getInstance().getDefaultTypesByLookup(appContext,
                "wallTypes", "carbon nanotube", "wallType");

    }

    /**
     * Set up the input form for adding new nanomaterial entity
     *
     * @param request
     * @return
     * @throws Exception
     */
    public Map<String, Object> setupNew(String sampleId,
                                        HttpServletRequest request)
            throws Exception {
        NanomaterialEntityBean entityBean = new NanomaterialEntityBean();
        // set up other particles with the same primary point of contact
        InitSampleSetup.getInstance().getOtherSampleNames(request, sampleId, sampleService);
        this.setLookups(request);
        this.checkOpenForms(entityBean, request);
        // clear copy to otherSamples
        return CompositionUtil.reformatLocalSearchDropdownsInSessionForNanoEntity(request.getSession());

    }

    public SimpleNanomaterialEntityBean setupUpdate(String sampleId, String entityId, HttpServletRequest request)
            throws SampleException, CompositionException, NoAccessException,
                   IOException, ClassNotFoundException, LookupException {
        //	entityId = super.validateId(request, "dataId");
        CompositionForm form = new CompositionForm();
        // set up other particles with the same primary point of contact
        InitSampleSetup.getInstance().getOtherSampleNames(request, sampleId, sampleService);

        NanomaterialEntityBean entityBean = compositionService.findNanomaterialEntityById(sampleId, entityId);
        form.setNanomaterialEntity(entityBean);
        form.setOtherSamples(new String[0]);
        this.checkOpenForms(entityBean, request);
        request.getSession().setAttribute("sampleId", sampleId);
        SimpleNanomaterialEntityBean nano = new SimpleNanomaterialEntityBean();
        nano.transferNanoMaterialEntityBeanToSimple(entityBean, request, springSecurityAclService);
        return nano;
    }

    //unused code
	/*public void setupView(CompositionForm form, HttpServletRequest request) throws Exception {
		String entityId = super.validateId(request, "dataId");
		NanomaterialEntityBean entityBean = compositionService.findNanomaterialEntityById(form.getSampleId(), entityId);
		request.setAttribute("nanomaterialEntity", entityBean);
		String detailPage = null;
		if (entityBean.isWithProperties()) {
			detailPage = InitCompositionSetup.getInstance().getDetailPage(
					entityBean.getClassName(), "nanomaterialEntity");
		}
		request.setAttribute("entityDetailPage", detailPage);
	}*/

    public SimpleNanomaterialEntityBean saveComposingElement(SimpleNanomaterialEntityBean nanoBean, HttpServletRequest request) throws Exception {
        NanomaterialEntityBean entity = null;
        String sampleId = nanoBean.getSampleId();
        try {
            entity = transferNanoMateriaEntityBean(nanoBean, request);
            List<String> msgs = new ArrayList<String>();
            //Trusting form set theComposingElement to element being edited
//			ComposingElementBean composingElement = entity.getTheComposingElement();
//			composingElement.setupDomain(SpringSecurityUtil.getLoggedInUserName());
//			entity.addComposingElement(composingElement);

            // save nanomaterial entity
            msgs = validateInputs(request, entity);
            if (msgs.size() > 0) {
                SimpleNanomaterialEntityBean nano = new SimpleNanomaterialEntityBean();
                nano.setErrors(msgs);
                return nano;
            }
            msgs = this.saveEntity(request, sampleId, entity);


            for (ComposingElementBean composingElementBean : entity.getComposingElements()) {
                compositionService.assignAccesses(composingElementBean.getDomain());
            }

            // return to setupUpdate to retrieve the correct entity from database
            // after saving to database.
            request.setAttribute("dataId", entity.getDomainEntity().getId().toString());
        } catch (Exception e) {
            logger.error("Error while saving composing element.", e);
        }
        return setupUpdate(sampleId, entity.getDomainEntity().getId().toString(), request);
    }

    private NanomaterialEntityBean transferNanoMateriaEntityBean(
            SimpleNanomaterialEntityBean nanoBean, HttpServletRequest request) {
        NanomaterialEntityBean nanomaterialEntityBean = new NanomaterialEntityBean();
        NanomaterialEntity nanoEntity = null;
        String currentUser = SpringSecurityUtil.getLoggedInUserName();
        Collection<ComposingElement> coll = new HashSet<ComposingElement>();
        Collection<File> filecoll = new HashSet<File>();
        //setting up sampleComposition
        //Managed to get the sampleComposition in the backend to avoid lazy loading things

        SampleComposition sampleComp = null;
        try {
            sampleComp = compositionService.getHelper().findCompositionBySampleId(nanoBean.getSampleId().toString());
        } catch (Exception e1) {
            logger.error(e1);
        }

        //Setting up the ComposingElement
        ComposingElementBean compBean = new ComposingElementBean();

        SimpleComposingElementBean simpleCompBean = nanoBean.getSimpleCompBean();

        ComposingElement comp = new ComposingElement();


        ImagingFunction img = new ImagingFunction();
        Collection<Function> hash = new HashSet<Function>();
        List<Map<String, Object>> funclist;
        List<FunctionBean> inherentFunctions = new ArrayList<FunctionBean>();
        List<ComposingElementBean> compList = new ArrayList<ComposingElementBean>();
        if (simpleCompBean != null) {
            if (simpleCompBean.getId() != null && simpleCompBean.getId() > 0) {
                comp.setId(simpleCompBean.getId());
            }
            comp.setDescription(simpleCompBean.getDescription());
            comp.setType(simpleCompBean.getType());
            comp.setName(simpleCompBean.getName());
            comp.setPubChemDataSourceName(simpleCompBean.getPubChemDataSourceName());
            comp.setPubChemId(simpleCompBean.getPubChemId());
            if ((simpleCompBean.getId() != null) && (simpleCompBean.getId() > 0)) {
                comp.setId(simpleCompBean.getId());
                comp.setCreatedBy(simpleCompBean.getCreatedBy());
                comp.setCreatedDate(simpleCompBean.getCreatedDate());
            } else if ((nanoBean.getId() != null) && (nanoBean.getId() > 0)) {
                //TODO see if there is a way to grab user directly
                comp.setCreatedBy(nanoBean.getCreatedBy());
                comp.setCreatedDate(nanoBean.getCreatedDate());
            } else {
                comp.setCreatedBy(currentUser);
                comp.setCreatedDate(Calendar.getInstance().getTime());
            }


            comp.setMolecularFormula(simpleCompBean.getMolecularFormula());
            comp.setMolecularFormulaType(simpleCompBean.getMolecularFormulaType());
            comp.setValue(simpleCompBean.getValue());
            comp.setValueUnit(simpleCompBean.getValueUnit());
            funclist = simpleCompBean.getInherentFunction();
            FunctionBean functionBean = new FunctionBean();
            if (funclist != null) {
                for (int j = 0; j < funclist.size(); j++) {
					functionBean = new FunctionBean();
                    img.setModality((String) funclist.get(j).get("modality"));
                    functionBean.setType((String) funclist.get(j).get("type"));
                    functionBean.setDescription((String) funclist.get(j).get("description"));
                    functionBean.setImagingFunction(img);
                    Function function;

                    if(functionBean.getType().contains("targeting")){
                        function = new TargetingFunction();
                    } else if (functionBean.getType().contains("therapeutic")){
                        function =  new TherapeuticFunction();
                    } else if (functionBean.getType().contains("imaging")){
                        function = new ImagingFunction();
                        ((ImagingFunction) function).setModality(img.getModality());
                    } else {
                        function = new OtherFunction();
                         ((OtherFunction) function).setType(functionBean.getType());
                    }




                    function.setDescription((String) funclist.get(j).get("description"));

                    if (Long.valueOf((String) funclist.get(j).get("id")) > 0) {
                        function.setId(Long.valueOf((String) funclist.get(j).get("id")));
                        functionBean.setId((String) funclist.get(j).get("id"));
                        function.setCreatedBy((String) funclist.get(j).get("createdBy"));
                        function.setCreatedDate(new Date((Long) funclist.get(j).get("createdDate")));
                    } else {
                        function.setCreatedBy(currentUser);
                        function.setCreatedDate(Calendar.getInstance().getTime());
                    }
                    functionBean.setDomainFunction(function);
                    hash.add(function);
                    inherentFunctions.add(functionBean);

                }
            }
            compBean.setTheFunction(functionBean);
            comp.setNanomaterialEntityPkId(nanoBean.getId().toString());
            comp.setInherentFunctionCollection(hash);
            compBean.setDomain(comp);
            compBean.setInherentFunctions(inherentFunctions);

            nanomaterialEntityBean.addComposingElement(compBean);
            //
            // WJRL 2/17/23: This is how a single element that is important
            // for current context is being handled. E.g. if a composing
            // element is being deleted, it is set here. But it is used
            // to supply focus context to an element in other areas.
            //
            nanomaterialEntityBean.setTheComposingElement(compBean);
            compList.add(compBean);
        }
        //setting up composing elements if there exists composingElements
        List<SimpleComposingElementBean> list = nanoBean.getComposingElements();


        img = new ImagingFunction();


//		List<ComposingElementBean> compList = new ArrayList<ComposingElementBean>();
        if (list != null) {
            for (SimpleComposingElementBean simpleComp : list) {
                hash = new HashSet<Function>();
                compBean = new ComposingElementBean();
                comp = new ComposingElement();
                comp.setDescription(simpleComp.getDescription());
                comp.setType(simpleComp.getType());
                comp.setName(simpleComp.getName());
                comp.setPubChemDataSourceName(simpleComp.getPubChemDataSourceName());
                comp.setPubChemId(simpleComp.getPubChemId());
//			if(simpleComp.getId()!=null && simpleComp.getId()>0) {
//				comp.setId(simpleComp.getId());
//			}
                if ((simpleComp.getId() != null) && (simpleComp.getId() > 0)) {
                    comp.setId(simpleComp.getId());
                    comp.setCreatedBy(simpleComp.getCreatedBy());
                    comp.setCreatedDate(simpleComp.getCreatedDate());
                } else {
                    //TODO see if there is a way to grab user directly
                    comp.setCreatedBy(currentUser);
                    comp.setCreatedDate(Calendar.getInstance().getTime());
                }
                comp.setCreatedBy(simpleComp.getCreatedBy());
                comp.setCreatedDate(simpleComp.getCreatedDate());
                comp.setMolecularFormula(simpleComp.getMolecularFormula());
                comp.setMolecularFormulaType(simpleComp.getMolecularFormulaType());
                comp.setValue(simpleComp.getValue());
                comp.setValueUnit(simpleComp.getValueUnit());
                funclist = simpleComp.getInherentFunction();
                if (funclist != null) {
                    for (int j = 0; j < funclist.size(); j++) {
                        FunctionBean functionBean = new FunctionBean();
                        img.setModality((String) funclist.get(j).get("modality"));
                        functionBean.setType((String) funclist.get(j).get("type"));
                        functionBean.setDescription((String) funclist.get(j).get("description"));
                        functionBean.setImagingFunction(img);
                        Function function ;
                        if(functionBean.getType().contains("targeting")){
                            function = new TargetingFunction();
                        } else if (functionBean.getType().contains("therapeutic")){
                            function =  new TherapeuticFunction();
                        } else if (functionBean.getType().contains("imaging")){
                            function = new ImagingFunction();
                            ((ImagingFunction) function).setModality(img.getModality());
                        } else {
                            function = new OtherFunction();
                            ((OtherFunction) function).setType(functionBean.getType());
                        }
                        function.setDescription((String) funclist.get(j).get("description"));
                        if (Long.valueOf((String) funclist.get(j).get("id")) > 0) {
                            function.setId(Long.valueOf((String) funclist.get(j).get("id")));
                            functionBean.setId((String) funclist.get(j).get("id"));
                            function.setCreatedBy((String) funclist.get(j).get("createdBy"));
                            function.setCreatedDate(new Date((Long) funclist.get(j).get("createdDate")));
                        } else {
                            function.setCreatedBy(currentUser);
                            function.setCreatedDate(Calendar.getInstance().getTime());
                        }
                        hash.add(function);
                        functionBean.setDomainFunction(function);
                        compBean.addFunction(functionBean);
                    }
                }
                comp.setInherentFunctionCollection(hash);
                comp.setNanomaterialEntityPkId(nanoBean.getId().toString());
                coll.add(comp);
//			compBean.setTheFunction(func);
                compBean.setDomain(comp);

                if (simpleCompBean != null) {
                    Long id1 = simpleComp.getId();
                    Long id2 = simpleCompBean.getId();
                    if (!id1.equals(id2)) {
                        compList.add(compBean);
                    }
                } else {
                    compList.add(compBean);
                }
//			if(!(simpleCompBean.getId().equals(simpleComp.getId()))) {
//				compList.add(compBean);
//			}
            }
        }
        //setting up theFile
        SimpleFileBean fBean = nanoBean.getFileBean();
        FileBean fileBean = new FileBean();
        File file = new File();
        if (fBean != null) {

            file.setType(fBean.getType());
            file.setTitle(fBean.getTitle());
            file.setDescription(fBean.getDescription());
            file.setUri(fBean.getUri());
            file.setUriExternal(fBean.getUriExternal());
            fileBean.setKeywordsStr(fBean.getKeywordsStr());
            fileBean.setExternalUrl(fBean.getExternalUrl());
            fileBean.setTheAccess(fBean.getTheAccess());
            if (fBean.getId() != null) {
                file.setId(fBean.getId());
                file.setCreatedBy(fBean.getCreatedBy());
                file.setCreatedDate(fBean.getCreatedDate());
            }
            fileBean.setDomainFile(file);
        }
        nanomaterialEntityBean.setTheFile(fileBean);

        //setting up files
        List<SimpleFileBean> filelist = nanoBean.getFiles();

        List<FileBean> fileBeanList = new ArrayList<FileBean>();
        if (filelist != null) {
            for (SimpleFileBean sFBean : filelist) {
                fileBean = new FileBean();
                file = new File();
                file.setType(sFBean.getType());
                file.setTitle(sFBean.getTitle());
                file.setDescription(sFBean.getDescription());
                file.setUri(sFBean.getUri());
                file.setId(sFBean.getId());
                file.setCreatedBy(sFBean.getCreatedBy());
                file.setCreatedDate(sFBean.getCreatedDate());
                file.setUriExternal(sFBean.getUriExternal());
                fileBean.setKeywordsStr(sFBean.getKeywordsStr());
                file.setKeywordCollection(new HashSet<Keyword>());
                if (!StringUtils.isEmpty(sFBean.getKeywordsStr())) {
                    String[] strs = sFBean.getKeywordsStr().split("\r\n");
                    for (String str : strs) {
                        // change to upper case
                        Keyword keyword = new Keyword();
                        keyword.setName(str.toUpperCase());
                        file.getKeywordCollection().add(keyword);
                    }
                }
                fileBean.setTheAccess(sFBean.getTheAccess());
                fileBean.setExternalUrl(sFBean.getExternalUrl());
                fileBean.setDomainFile(file);
                filecoll.add(file);
                fileBeanList.add(fileBean);
            }
        }

        if (nanoBean.getType().equalsIgnoreCase("fullerene")) {
            Fullerene fullerene = new Fullerene();
            if (nanoBean.getDomainEntity() != null) {
                if (nanoBean.getDomainEntity().get("averageDiameter") != null)
                    fullerene.setAverageDiameter(Float.valueOf((String) nanoBean.getDomainEntity().get("averageDiameter")));
                if (nanoBean.getDomainEntity().get("averageDiameterUnit") != null)
                    fullerene.setAverageDiameterUnit((String) nanoBean.getDomainEntity().get("averageDiameterUnit"));
                if (nanoBean.getDomainEntity().get("numberOfCarbon") != null)
                    fullerene.setNumberOfCarbon(Integer.valueOf((String) nanoBean.getDomainEntity().get("numberOfCarbon")));
                if (nanoBean.getDomainEntity().get("id") != null) {
                    fullerene.setId(Long.valueOf((Integer) nanoBean.getDomainEntity().get("id")));
                    fullerene.setCreatedBy((String) nanoBean.getDomainEntity().get("createdBy"));
                    fullerene.setCreatedDate(new Date((Long) nanoBean.getDomainEntity().get("createdDate")));
                    fullerene.setSampleComposition(sampleComp);
                } else {
                    fullerene.setSampleComposition(null);
                    fullerene.setCreatedBy(currentUser);
                    fullerene.setCreatedDate(Calendar.getInstance().getTime());
                }
            }
            fullerene.setComposingElementCollection(coll);
            fullerene.setFileCollection(filecoll);
            nanomaterialEntityBean.setFullerene(fullerene);
            nanoEntity = fullerene;
        } else if (nanoBean.getType().equalsIgnoreCase("dendrimer")) {
            Dendrimer den = new Dendrimer();
            if (nanoBean.getDomainEntity() != null) {
                if (nanoBean.getDomainEntity().get("branch") != null)
                    den.setBranch((String) nanoBean.getDomainEntity().get("branch"));
                if (nanoBean.getDomainEntity().get("generation") != null)
                    den.setGeneration(Float.valueOf((String) nanoBean.getDomainEntity().get("generation")));
                if (nanoBean.getDomainEntity().get("id") != null) {
                    den.setId(Long.valueOf((Integer) nanoBean.getDomainEntity().get("id")));
                    den.setCreatedBy((String) nanoBean.getDomainEntity().get("createdBy"));
                    den.setCreatedDate(new Date((Long) nanoBean.getDomainEntity().get("createdDate")));
                    den.setSampleComposition(sampleComp);
                } else {
                    den.setSampleComposition(null);
                    den.setCreatedBy(currentUser);
                    den.setCreatedDate(Calendar.getInstance().getTime());
                }
            }
            den.setComposingElementCollection(coll);
            den.setFileCollection(filecoll);
            nanoEntity = den;
            nanomaterialEntityBean.setDendrimer(den);
        } else if (nanoBean.getType().equalsIgnoreCase("biopolymer")) {
            NanoBiopolymer bio = new NanoBiopolymer();
            if (nanoBean.getDomainEntity() != null) {
                if (nanoBean.getDomainEntity().get("type") != null)
                    bio.setType((String) nanoBean.getDomainEntity().get("type"));
                if (nanoBean.getDomainEntity().get("name") != null)
                    bio.setName((String) nanoBean.getDomainEntity().get("name"));
                if (nanoBean.getDomainEntity().get("sequence") != null)
                    bio.setSequence((String) nanoBean.getDomainEntity().get("sequence"));
                if (nanoBean.getDomainEntity().get("id") != null) {
                    bio.setId(Long.valueOf((Integer) nanoBean.getDomainEntity().get("id")));
                    bio.setCreatedBy((String) nanoBean.getDomainEntity().get("createdBy"));
                    bio.setCreatedDate(new Date((Long) nanoBean.getDomainEntity().get("createdDate")));
                    bio.setSampleComposition(sampleComp);
                } else {
                    bio.setSampleComposition(null);
                    bio.setCreatedBy(currentUser);
                    bio.setCreatedDate(Calendar.getInstance().getTime());
                }
            }
            bio.setComposingElementCollection(coll);
            bio.setFileCollection(filecoll);
            nanomaterialEntityBean.setBiopolymer(bio);
            nanoEntity = bio;

        } else if (nanoBean.getType().equalsIgnoreCase("Liposome")) {
            Liposome lipo = new Liposome();
            if (nanoBean.getDomainEntity() != null) {
                if (nanoBean.getDomainEntity().get("isPolymerized") != null) {
                    lipo.setPolymerized(Boolean.valueOf((String) nanoBean.getDomainEntity().get("isPolymerized")));
                    nanomaterialEntityBean.setIsPolymerized((String) nanoBean.getDomainEntity().get("isPolymerized"));
                }
                if (nanoBean.getDomainEntity().get("polymerName") != null)
                    lipo.setPolymerName((String) nanoBean.getDomainEntity().get("polymerName"));
                if (nanoBean.getDomainEntity().get("id") != null) {
                    lipo.setId(Long.valueOf((Integer) nanoBean.getDomainEntity().get("id")));
                    lipo.setCreatedBy((String) nanoBean.getDomainEntity().get("createdBy"));
                    lipo.setCreatedDate(new Date((Long) nanoBean.getDomainEntity().get("createdDate")));
                    lipo.setSampleComposition(sampleComp);
                } else {
                    lipo.setSampleComposition(null);
                    lipo.setCreatedBy(currentUser);
                    lipo.setCreatedDate(Calendar.getInstance().getTime());
                }
            }
            lipo.setComposingElementCollection(coll);
            lipo.setFileCollection(filecoll);
            nanoEntity = lipo;
            nanomaterialEntityBean.setLiposome(lipo);
        } else if (nanoBean.getType().equalsIgnoreCase("Emulsion")) {
            Emulsion em = new Emulsion();
            if (nanoBean.getDomainEntity() != null) {
                if (nanoBean.getDomainEntity().get("isPolymerized") != null) {
                    em.setPolymerized(Boolean.valueOf((String) nanoBean.getDomainEntity().get("isPolymerized")));
                    nanomaterialEntityBean.setIsPolymerized((String) nanoBean.getDomainEntity().get("isPolymerized"));
                }
                if (nanoBean.getDomainEntity().get("polymerName") != null)
                    em.setPolymerName((String) nanoBean.getDomainEntity().get("polymerName"));
                if (nanoBean.getDomainEntity().get("id") != null) {
                    em.setId(Long.valueOf((Integer) nanoBean.getDomainEntity().get("id")));
                    em.setCreatedBy((String) nanoBean.getDomainEntity().get("createdBy"));
                    em.setCreatedDate(new Date((Long) nanoBean.getDomainEntity().get("createdDate")));
                    em.setSampleComposition(sampleComp);
                } else {
                    em.setSampleComposition(null);
                    em.setCreatedBy(currentUser);
                    em.setCreatedDate(Calendar.getInstance().getTime());
                }
            }
            em.setComposingElementCollection(coll);
            em.setFileCollection(filecoll);
            nanomaterialEntityBean.setEmulsion(em);
            nanoEntity = em;
        } else if (nanoBean.getType().equalsIgnoreCase("Polymer")) {
            Polymer poly = new Polymer();
            if (nanoBean.getDomainEntity() != null) {
                if (nanoBean.getDomainEntity().get("isCrossLinked") != null) {
                    poly.setCrossLinked(Boolean.valueOf((String) nanoBean.getDomainEntity().get("isCrossLinked")));
                    nanomaterialEntityBean.setIsCrossLinked((String) nanoBean.getDomainEntity().get("isCrossLinked"));
                }
                if (nanoBean.getDomainEntity().get("crossLinkDegree") != null)
                    poly.setCrossLinkDegree(Float.valueOf((String) nanoBean.getDomainEntity().get("crossLinkDegree")));
                if (nanoBean.getDomainEntity().get("initiator") != null)
                    poly.setInitiator((String) nanoBean.getDomainEntity().get("initiator"));
                if (nanoBean.getDomainEntity().get("id") != null) {
                    poly.setId(Long.valueOf((Integer) nanoBean.getDomainEntity().get("id")));
                    poly.setCreatedBy((String) nanoBean.getDomainEntity().get("createdBy"));
                    poly.setCreatedDate(new Date((Long) nanoBean.getDomainEntity().get("createdDate")));
                    poly.setSampleComposition(sampleComp);
                } else {
                    poly.setSampleComposition(null);
                    poly.setCreatedBy(currentUser);
                    poly.setCreatedDate(Calendar.getInstance().getTime());
                }
            }
            poly.setComposingElementCollection(coll);
            poly.setFileCollection(filecoll);
            nanomaterialEntityBean.setPolymer(poly);
            nanoEntity = poly;
        } else if (nanoBean.getType().equalsIgnoreCase("carbon nanotube")) {
            CarbonNanotube ctube = new CarbonNanotube();
            if (nanoBean.getDomainEntity() != null) {
                if (nanoBean.getDomainEntity().get("averageLength") != null)
                    ctube.setAverageLength(Float.valueOf((String) nanoBean.getDomainEntity().get("averageLength")));
                if (nanoBean.getDomainEntity().get("averageLengthUnit") != null)
                    ctube.setAverageLengthUnit((String) nanoBean.getDomainEntity().get("averageLengthUnit"));
                if (nanoBean.getDomainEntity().get("chirality") != null)
                    ctube.setChirality((String) nanoBean.getDomainEntity().get("chirality"));
                if (nanoBean.getDomainEntity().get("diameter") != null)
                    ctube.setDiameter(Float.valueOf((String) nanoBean.getDomainEntity().get("diameter")));
                if (nanoBean.getDomainEntity().get("diameterUnit") != null)
                    ctube.setDiameterUnit((String) nanoBean.getDomainEntity().get("diameterUnit"));
                if (nanoBean.getDomainEntity().get("wallType") != null)
                    ctube.setWallType((String) nanoBean.getDomainEntity().get("wallType"));
                if (nanoBean.getDomainEntity().get("id") != null) {
                    ctube.setId(Long.valueOf((Integer) nanoBean.getDomainEntity().get("id")));
                    ctube.setCreatedBy((String) nanoBean.getDomainEntity().get("createdBy"));
                    ctube.setCreatedDate(new Date((Long) nanoBean.getDomainEntity().get("createdDate")));
                    ctube.setSampleComposition(sampleComp);
                } else {
                    ctube.setSampleComposition(null);
                    ctube.setCreatedBy(currentUser);
                    ctube.setCreatedDate(Calendar.getInstance().getTime());
                }
            }
            ctube.setComposingElementCollection(coll);
            ctube.setFileCollection(filecoll);
            nanomaterialEntityBean.setCarbonNanotube(ctube);
            nanoEntity = ctube;

        } else {
            nanoEntity = new OtherNanomaterialEntity();
            if (nanoBean.getDomainEntity() != null) {
                if (nanoBean.getDomainEntity().get("id") != null) {
                    nanoEntity.setId(Long.valueOf((Integer) nanoBean.getDomainEntity().get("id")));
                    nanoEntity.setCreatedBy((String) nanoBean.getDomainEntity().get("createdBy"));
                    nanoEntity.setCreatedDate((Date) nanoBean.getDomainEntity().get("createdDate"));
                    nanoEntity.setSampleComposition(sampleComp);

                } else
                    nanoEntity.setSampleComposition(null);
                    nanoEntity.setCreatedBy(currentUser);
                    nanoEntity.setCreatedDate(Calendar.getInstance().getTime());
            }
            nanoEntity.setComposingElementCollection(coll);

            nanoEntity.setFileCollection(filecoll);
        }

        nanomaterialEntityBean.setComposingElements(compList);
        nanomaterialEntityBean.setFiles(fileBeanList);
        nanomaterialEntityBean.setType(nanoBean.getType());
        nanomaterialEntityBean.setDescription(nanoBean.getDescription());
        nanomaterialEntityBean.setDomainEntity(nanoEntity);

        return nanomaterialEntityBean;
    }


    public SimpleNanomaterialEntityBean removeComposingElement(SimpleNanomaterialEntityBean nanoBean,
                                                               HttpServletRequest request)
            throws ChemicalAssociationViolationException, ClassCastException,
            NotExistException, SampleException, NoAccessException,
            InstantiationException, IllegalAccessException,
            IOException, ClassNotFoundException, LookupException, CompositionException, CurationException {

        List<String> msgs = new ArrayList<String>();
        NanomaterialEntityBean entity = transferNanoMateriaEntityBean(nanoBean, request);
        //Trusting that form sets theComposingElement as the element being edited.
        //
        // WJRL 2/17/23 The current style appears to be to provide the object to be removed
        // as "THE" composing element. The collection coming back from the client appears to
        // already have removed the element as well from the collection.
        //
        ComposingElementBean composingElement = entity.getTheComposingElement();


        // check if composing element is associated with an association
        SimpleNanomaterialEntityBean nano = new SimpleNanomaterialEntityBean();
        if (!compositionService.checkChemicalAssociationBeforeDelete(entity
                .getDomainEntity().getSampleComposition(), composingElement.getDomain())) {
            throw new ChemicalAssociationViolationException(
                    "The composing element is used in a chemical association. Please delete the chemical association first before deleting the nanomaterial entity.");
        }
        entity.removeComposingElement(composingElement);
        msgs = validateInputs(request, entity);
        if (msgs.size() > 0) {
            nano.setErrors(msgs);
            return nano;
        }
        this.saveEntity(request, nanoBean.getSampleId(), entity);
        //
        // WJRL 2/2023: It appears that at this time, the following call does not do anything at all (except check
        // is the user is authorized):
        //
        compositionService.removeAccesses(entity.getDomainEntity(), composingElement.getDomain());
        this.checkOpenForms(entity, request);
        return setupUpdate(nanoBean.getSampleId(), entity.getDomainEntity().getId().toString(), request);
    }

    public SimpleNanomaterialEntityBean removeComposingElement(SimpleNanomaterialEntityBean nanoBean, String composingElementId, HttpServletRequest request) throws Exception {
        List<String> msgs = new ArrayList<String>();
        NanomaterialEntityBean entity = transferNanoMateriaEntityBean(nanoBean, request);
        ComposingElementBean composingElement = entity.getComposingElementById(composingElementId);
//		ComposingElementBean composingElement = entity.getTheComposingElement();
//		ComposingElementBean composingElement = entity.getComposingElements().get(0);
        //TODO  EH. what?  So it doesn't even check what composing element to remove?  I don't even....

        // check if composing element is associated with an association

        if (!compositionService.checkChemicalAssociationBeforeDelete(entity
                .getDomainEntity().getSampleComposition(), composingElement.getDomain())) {
            throw new ChemicalAssociationViolationException(
                    "The composing element is used in a chemical association.  Please delete the chemical association first before deleting the nanomaterial entity.");
        }
        entity.removeComposingElement(composingElement);
        msgs = validateInputs(request, entity);
        if (msgs.size() > 0) {
            SimpleNanomaterialEntityBean nano = new SimpleNanomaterialEntityBean();
            nano.setErrors(msgs);
            return nano;
        }
        this.saveEntity(request, nanoBean.getSampleId(), entity);
        compositionService.removeAccesses(entity.getDomainEntity(), composingElement.getDomain());
        this.checkOpenForms(entity, request);
        return setupUpdate(nanoBean.getSampleId(), entity.getDomainEntity().getId().toString(), request);
    }

    public SimpleNanomaterialEntityBean saveFile(SimpleNanomaterialEntityBean nanoBean, HttpServletRequest request) throws Exception {
        NanomaterialEntityBean entity = transferNanoMateriaEntityBean(nanoBean, request);
        FileBean theFile = entity.getTheFile();
        SampleBean sampleBean = setupSampleById(nanoBean.getSampleId(), request);
        // setup domainFile uri for fileBean
        String internalUriPath = Constants.FOLDER_PARTICLE + '/'
                + sampleBean.getDomain().getName() + '/' + "nanomaterialEntity";
        theFile.setupDomainFile(internalUriPath, SpringSecurityUtil.getLoggedInUserName());

        String timestamp = DateUtils.convertDateToString(new Date(), "yyyyMMdd_HH-mm-ss-SSS");
        byte[] newFileData = (byte[]) request.getSession().getAttribute("newFileData");
        if (!theFile.getDomainFile().getUriExternal()) {
            if (newFileData != null) {
                theFile.setNewFileData((byte[]) request.getSession().getAttribute("newFileData"));
                theFile.getDomainFile().setUri(Constants.FOLDER_PARTICLE + '/'
                        + sampleBean.getDomain().getName() + '/' + "nanomaterialEntity" + "/" + timestamp + "_"
                        + theFile.getDomainFile().getName());
            } else if (theFile.getDomainFile().getId() != null) {
                theFile.getDomainFile().setUri(theFile.getDomainFile().getName());
            } else {
                theFile.getDomainFile().setUri(null);
            }
        }
        entity.addFile(theFile);

        // restore previously uploaded file from session.
        //restoreUploadedFile(request, theFile);

        // save nanomaterial entity to save file because inverse="false"
        List<String> msgs = validateInputs(request, entity);
        if (msgs.size() > 0) {
            SimpleNanomaterialEntityBean nano = new SimpleNanomaterialEntityBean();
            nano.setErrors(msgs);
            return nano;
        }
        this.saveEntity(request, nanoBean.getSampleId(), entity);
        compositionService.assignAccesses(entity.getDomainEntity().getSampleComposition(), theFile.getDomainFile());

        request.setAttribute("anchor", "file");
        request.setAttribute("dataId", entity.getDomainEntity().getId().toString());
        request.getSession().removeAttribute("newFileData");

        return setupUpdate(nanoBean.getSampleId(), entity.getDomainEntity().getId().toString(), request);
    }

    public SimpleNanomaterialEntityBean removeFile(SimpleNanomaterialEntityBean nanoBean,
                                                   HttpServletRequest request)
            throws Exception {
        NanomaterialEntityBean entity = transferNanoMateriaEntityBean(nanoBean, request);

        FileBean theFile = entity.getTheFile();
        entity.removeFile(theFile);
        entity.setTheFile(new FileBean());
        // save nanomaterial entity
        List<String> msgs = validateInputs(request, entity);
        if (msgs.size() > 0) {
            SimpleNanomaterialEntityBean nano = new SimpleNanomaterialEntityBean();
            nano.setErrors(msgs);
            return nano;
        }
        this.saveEntity(request, nanoBean.getSampleId(), entity);
        compositionService.removeAccesses(entity.getDomainEntity().getSampleComposition(), theFile.getDomainFile());
        request.setAttribute("anchor", "file");
        this.checkOpenForms(entity, request);
        return setupUpdate(nanoBean.getSampleId(), entity.getDomainEntity().getId().toString(), request);
    }

    public List<String> delete(SimpleNanomaterialEntityBean nanoBean, HttpServletRequest request) throws Exception {
        List<String> msgs = new ArrayList<String>();
        NanomaterialEntityBean entityBean = transferNanoMateriaEntityBean(nanoBean, request);

        entityBean.setupDomainEntity(SpringSecurityUtil.getLoggedInUserName());
        compositionService.deleteNanomaterialEntity(entityBean.getDomainEntity());
        compositionService.removeAccesses(entityBean.getDomainEntity());

        msgs.add("success");
        return msgs;
    }

    private void checkOpenForms(NanomaterialEntityBean entity, HttpServletRequest request)
        throws IOException, ClassNotFoundException, LookupException, CompositionException {

        String dispatch = request.getParameter("dispatch");
        String browserDispatch = getBrowserDispatch(request);
        HttpSession session = request.getSession();
//		Boolean openFile = false, openComposingElement = false;
//		if (dispatch.equals("input") && browserDispatch.equals("saveFile")) {
//			openFile = true;
//		}
//		session.setAttribute("openFile", openFile);
//		if (dispatch.equals("input")
//				&& browserDispatch.equals("saveComposingElement")
//				|| ((dispatch.equals("setupNew") || dispatch
//						.equals("setupUpdate")) && entity
//						.getComposingElements().isEmpty())) {
//			openComposingElement = true;
//		}
//		session.setAttribute("openComposingElement", openComposingElement);

        InitCompositionSetup.getInstance().persistNanomaterialEntityDropdowns(
                request, entity);
        /**
         * other nanomaterial entity types are not stored in the lookup are
         * retrieved through reflection only after saving to the database. Need
         * to update session variable before saving to the database
         */
        // Nanomaterial Entity Type
        String entityType = entity.getType();
        setOtherValueOption(request, entityType, "nanomaterialEntityTypes");
        // function type
        String functionType = entity.getTheComposingElement().getTheFunction()
                .getType();


        setOtherValueOption(request, functionType, "functionTypes");

        String detailPage = null;
        if (entity.isWithProperties()) {
            if (!StringUtils.isEmpty(entity.getType())) {
                detailPage = InitCompositionSetup.getInstance().getDetailPage(
                        entity.getType(), "nanomaterialEntity");
            }
            request.setAttribute("entityDetailPage", detailPage);
        }
    }

    public String download(String fileId, HttpServletRequest request, HttpServletResponse response)
            throws Exception {
        return downloadFile(compositionService, fileId, request, response);
    }

    public NanomaterialEntityBean setupNanoEntityForAdvSearch(String sampleId, String entityId, HttpServletRequest request)
            throws Exception {
        //	entityId = super.validateId(request, "dataId");
        CompositionForm form = new CompositionForm();
        // set up other particles with the same primary point of contact
        InitSampleSetup.getInstance().getOtherSampleNames(request, sampleId, sampleService);

        NanomaterialEntityBean entityBean = compositionService.findNanomaterialEntityById(sampleId, entityId);
        form.setNanomaterialEntity(entityBean);
        form.setOtherSamples(new String[0]);
        this.checkOpenForms(entityBean, request);
        request.getSession().setAttribute("sampleId", sampleId);
//		SimpleNanomaterialEntityBean nano = new SimpleNanomaterialEntityBean();
//		nano.transferNanoMaterialEntityBeanToSimple(entityBean, request);
        return entityBean;
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
        return springSecurityAclService;
    }

    @Override
    public UserDetailsService getUserDetailsService() {
        return userDetailsService;
    }

}
