package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.particle.Characterization;
import gov.nih.nci.cananolab.domain.particle.SmeInherentFunction;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterialElement;
import gov.nih.nci.cananolab.util.Constants;
import gov.nih.nci.cananolab.util.StringUtils;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import org.apache.log4j.Logger;


public class SynthesisMaterialElementBean extends BaseSynthesisEntityBean {
    Logger logger = Logger.getLogger("SynthesisMaterialElementBean.class");
    private SynthesisMaterialElement domain;
    private List<SmeInherentFunctionBean> functions = new ArrayList<SmeInherentFunctionBean>();
String description="";


    public List<SmeInherentFunctionBean> getFunctions() {
        return functions;
    }

    public SynthesisMaterialElementBean() {
    }


    public SynthesisMaterialElementBean(SynthesisMaterialElement domain){
        this.domain = domain;
        description = domain.getDescription();
        if(domain.getSmeInherentFunctions() !=null){
            for(SmeInherentFunction smeInherentFunction: domain.getSmeInherentFunctions()){
                functions.add(new SmeInherentFunctionBean(smeInherentFunction));
            }
        }

    }

    public SynthesisMaterialElement getDomainEntity() {
        return domain;
    }

    public void setDomain(SynthesisMaterialElement domain) {
        this.domain = domain;
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

    public void setUpDomain(String loggedInUserName) throws Exception{
        //TODO wriite

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
        }

        domain.setDescription(description);

        }


    }



