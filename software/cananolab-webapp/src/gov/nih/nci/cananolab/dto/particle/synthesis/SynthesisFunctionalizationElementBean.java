package gov.nih.nci.cananolab.dto.particle.synthesis;

import gov.nih.nci.cananolab.domain.particle.SfeInherentFunction;
import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalizationElement;
import gov.nih.nci.cananolab.util.StringUtils;
import java.util.ArrayList;
import java.util.List;

public class SynthesisFunctionalizationElementBean extends BaseSynthesisEntityBean{


    private SynthesisFunctionalizationElement domain;
    List<SfeInherentFunctionBean> functions = new ArrayList<SfeInherentFunctionBean>();
    String description;

    public SynthesisFunctionalizationElementBean(){}

    public SynthesisFunctionalizationElementBean(SynthesisFunctionalizationElement domain){
        this.domain=domain;
        for(SfeInherentFunction function:domain.getSfeInherentFunctions()){
            this.functions.add(new SfeInherentFunctionBean(function));
        }
    }

    public String getMolecularFormulaDisplayName() {
        StringBuilder buffer = new StringBuilder();
        if (!StringUtils.isEmpty(getDomain().getMolecularFormula())) {
            buffer.append(getDomain().getMolecularFormula());
            if (!StringUtils.isEmpty(domain.getMolecularFormulaType())) {
                buffer.append(" (");
                buffer.append(domain.getMolecularFormulaType());
                buffer.append(")");
            }
        }
        return buffer.toString();
    }

    public SynthesisFunctionalizationElement getDomain() {
        return domain;
    }

    public void setDomain(SynthesisFunctionalizationElement domain) {
        this.domain = domain;
    }

    public String[] getFunctionDisplayNames() {
        List<String> displayNames = new ArrayList<String>();
        for (SfeInherentFunctionBean function : functions) {
            displayNames.add(function.getDisplayName());
        }
        if (displayNames.isEmpty()) {
            return null;
        }
        return displayNames.toArray(new String[0]);
    }
}
