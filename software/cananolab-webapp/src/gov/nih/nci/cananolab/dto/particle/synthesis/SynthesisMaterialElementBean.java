package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.common.Supplier;
import gov.nih.nci.cananolab.domain.particle.Characterization;
import gov.nih.nci.cananolab.domain.particle.SmeInherentFunction;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterialElement;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.particle.composition.FunctionBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleFileBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisMaterialElementBean;
import gov.nih.nci.cananolab.util.Constants;
import gov.nih.nci.cananolab.util.StringUtils;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.apache.log4j.Logger;


public class SynthesisMaterialElementBean extends BaseSynthesisEntityBean {
    Logger logger = Logger.getLogger("SynthesisMaterialElementBean.class");
    private SynthesisMaterialElement domain;
    private List<SmeInherentFunctionBean> functions = new ArrayList<SmeInherentFunctionBean>();
//    private List<FileBean> files = new ArrayList<FileBean>();



    public List<SmeInherentFunctionBean> getFunctions() {
        return functions;
    }

    public SynthesisMaterialElementBean() {
    }


    public SynthesisMaterialElementBean(SynthesisMaterialElement domain){
        this.setDomain(domain);
//        this.domain = domain;
//        this.setDescription(domain.getDescription());
//        this.setType(domain.getType());
//        this.setDisplayName(domain.getChemicalName());
//
//        if(domain.getSmeInherentFunctions() !=null){
//            for(SmeInherentFunction smeInherentFunction: domain.getSmeInherentFunctions()){
//                functions.add(new SmeInherentFunctionBean(smeInherentFunction));
//            }
//        }
//        if (domain.getFiles()!=null){
//            for(File file : domain.getFiles()){
//                files.add(new FileBean(file));
//            }
//        }

    }

    public SynthesisMaterialElement getDomainEntity() {
        return domain;
    }

    public void setDomain(SynthesisMaterialElement domain) {
        this.domain = domain;
        this.setDescription(domain.getDescription());
        this.setType(domain.getType());
        this.setDisplayName(domain.getChemicalName());
        this.domainId = domain.getId();
        if(domain.getSmeInherentFunctions() !=null){
            for(SmeInherentFunction smeInherentFunction: domain.getSmeInherentFunctions()){
                functions.add(new SmeInherentFunctionBean(smeInherentFunction));
            }
        }
        if (domain.getFiles()!=null){
            for(File file : domain.getFiles()){
                files.add(new FileBean(file));
            }
        }

    }


    public String getDisplayName(){
        return this.domain.getChemicalName();
    }

    public String getMolecularFormulaDisplayName() {
        StringBuilder buffer = new StringBuilder();
        if (!StringUtils.isEmpty(getDomainEntity().getMolecularFormula())) {
            buffer.append(getDomainEntity().getMolecularFormula());
            if (!StringUtils.isEmpty(domain.getMolecularFormulaType())) {
                buffer.append(" (");
                buffer.append(domain.getMolecularFormulaType());
                buffer.append(")");
            }
        }
        return buffer.toString();
    }

    public String[] getFunctionDisplayNames() {
        List<String> displayNames = new ArrayList<String>();
        for (SmeInherentFunctionBean function : functions) {
            displayNames.add(function.getDisplayName());
        }
        if (displayNames.isEmpty()) {
            return null;
        }
        return displayNames.toArray(new String[0]);
    }

    public void setupDomain(String loggedInUserName) throws Exception{
        //TODO write - this will set up empty domain for new Element

        if(domain == null){
            domain = new SynthesisMaterialElement();
        }

        if(domain.getId()==null){
            domain.setCreatedBy(loggedInUserName);
            domain.setCreatedDate(Calendar.getInstance().getTime());
        }

        if(domain.getId() != null || !StringUtils.isEmpty(domain.getCreatedBy())&& domain.getCreatedBy().contains(Constants.AUTO_COPY_ANNOTATION_PREFIX)){
            domain.setCreatedBy(loggedInUserName);
            domain.setCreatedDate(Calendar.getInstance().getTime());
            domainId = domain.getId();
        }
        //TODO blank out the rest
        if(domain.getSmeInherentFunctions()!=null){
            domain.getSmeInherentFunctions().clear();
        } else {
            domain.setSmeInherentFunctions(new HashSet<SmeInherentFunction>());
        }

        for (SmeInherentFunctionBean functionBean : functions) {
            logger.debug("call setupDomainFunction "+ loggedInUserName);
            functionBean.setupDomain();

            domain.addSmeInherentFunction(functionBean.getDomain());
            }

        }

        public void setSuppler(Supplier supplier){
        this.domain.setSupplier(supplier);
        }

        public Supplier getSupplier(){
        return this.domain.getSupplier();
        }

        public SynthesisMaterialElementBean(SimpleSynthesisMaterialElementBean sSMEBean){
            SynthesisMaterialElement synthesisMaterialElement = new SynthesisMaterialElement();
            synthesisMaterialElement.setDescription(sSMEBean.getDescription());
            synthesisMaterialElement.setChemicalName(sSMEBean.getChemicalName());
            synthesisMaterialElement.setMolecularFormula(sSMEBean.getMolecularFormula());
            synthesisMaterialElement.setMolecularFormulaType(sSMEBean.getMolecularFormulaType());
            synthesisMaterialElement.setPubChemId(sSMEBean.getPubChemId());
            synthesisMaterialElement.setPubChemDatasourceName(sSMEBean.getPubChemDataSource());
            synthesisMaterialElement.setValue(sSMEBean.getValue());
            synthesisMaterialElement.setValueUnit(sSMEBean.getValueUnit());
            synthesisMaterialElement.setId(sSMEBean.getId());
            synthesisMaterialElement.setCreatedBy(sSMEBean.getCreatedBy());
            synthesisMaterialElement.setCreatedDate(sSMEBean.getCreatedDate());
            synthesisMaterialElement.setType(sSMEBean.getType());


            //check supplier
            //TODO this is clumsy.  Should probably be a simple bean
//            Map<String, String> supplierMap = sSMEBean.getSupplierMap();
            Supplier supplier = sSMEBean.getSupplier();
//            Supplier supplier = new Supplier();
//            supplier.setSupplierName(supplierMap.get("SupplierName"));
//            supplier.setLot(supplierMap.get("Lot"));
//            supplier.setId(new Long(supplierMap.get("id")));
            synthesisMaterialElement.setSupplier(supplier);


            //check for Files
            List<SimpleFileBean> sfileBeans = sSMEBean.getFiles();
//            Set<File> files = new HashSet<File>();
            List<FileBean> fileBeans = new ArrayList<FileBean>();
            if(sfileBeans!=null ) {
                for (SimpleFileBean simpleFileBean : sfileBeans) {

//                File file1 = new File();
//                file1.setUriExternal(simpleFileBean.getUriExternal());
//                file1.setUri(simpleFileBean.getUri());
//                file1.setType(simpleFileBean.getType());
//                file1.setDescription(simpleFileBean.getDescription());
//                file1.setTitle(simpleFileBean.getTitle());
//                file1.setCreatedDate(simpleFileBean.getCreatedDate());
//                file1.setCreatedBy(simpleFileBean.getCreatedBy());
//                files.add(file1);

                    FileBean fileBean = new FileBean(simpleFileBean);
                    fileBeans.add(fileBean);
                }
                this.setFiles(fileBeans);
            }

            //Loop through functions
            List<Map<String,String>> functions = sSMEBean.getInherentFunctionList();
            Set<SmeInherentFunction> smeInherentFunctionSet = new HashSet<SmeInherentFunction>();
            if(functions!=null) {
                for (Map<String, String> function : functions) {
                    //id, type, description
                    SmeInherentFunction smeInherentFunction = new SmeInherentFunction();

                    smeInherentFunction.setType(function.get("type").toString());
                    smeInherentFunction.setDescription(function.get("description").toString());
                    smeInherentFunction.setId(Long.valueOf(function.get("id")));
                    //TODO this is circular.  Rework this
                    smeInherentFunction.setSynthesisMaterialElement(synthesisMaterialElement);
                    smeInherentFunctionSet.add(smeInherentFunction);
                }
                synthesisMaterialElement.setSmeInherentFunctions(smeInherentFunctionSet);
            }

            this.setDomain(synthesisMaterialElement);

        }

}



