package gov.nih.nci.cananolab.restful.synthesis;

import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisMaterialBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisMaterialElementBean;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.Assert.*;
import static org.mockito.Mockito.mock;

public class SynthesisMaterialBOTest {

    @Autowired
    SynthesisMaterialBO synthesisMaterialBO;
    @Before
    public void setUp() throws Exception {
        synthesisMaterialBO = new SynthesisMaterialBO();
    }

    @After
    public void tearDown() throws Exception {
    }

    @Test
    public void testCreate() {
        HttpServletRequest request = mock(HttpServletRequest.class);
        HttpSession session = mock(HttpSession.class);

        SimpleSynthesisMaterialBean materialBean = new SimpleSynthesisMaterialBean();
        materialBean.setSampleId("1000");
        SimpleSynthesisMaterialElementBean elementBean = new SimpleSynthesisMaterialElementBean();
        elementBean.setChemicalName("TestChem");
        elementBean.setMolecularFormula("CHO2Si");
        elementBean.setMolecularFormulaType("Hill");
        elementBean.setDescription("Test material element");
        elementBean.setCreatedBy("");
        List<SimpleSynthesisMaterialElementBean> elementBeans = new ArrayList<SimpleSynthesisMaterialElementBean>();
        elementBeans.add(elementBean);
        materialBean.setMaterialElements(elementBeans);
        try {

            synthesisMaterialBO.create(materialBean, request);
        } catch (Exception e){
            e.printStackTrace();
        }
    }

    @Test
    public void testDelete() {
        HttpServletRequest request = mock(HttpServletRequest.class);
        HttpSession session = mock(HttpSession.class);
    }


    @Test
    public void testRemoveFile() {
        HttpServletRequest request = mock(HttpServletRequest.class);
        HttpSession session = mock(HttpSession.class);
    }

    @Test
    public void testSetupUpdate() {
        HttpServletRequest request = mock(HttpServletRequest.class);
        HttpSession session = mock(HttpSession.class);
    }

    @Test
    public void testRemoveMaterialElement() {
        HttpServletRequest request = mock(HttpServletRequest.class);
        HttpSession session = mock(HttpSession.class);
    }

    @Test
    public void testSaveFile() {
        HttpServletRequest request = mock(HttpServletRequest.class);
        HttpSession session = mock(HttpSession.class);
    }

    @Test
    public void testSaveMaterialElement() {
        HttpServletRequest request = mock(HttpServletRequest.class);
        HttpSession session = mock(HttpSession.class);
    }

    @Test
    public void testSetupNew() {
        HttpServletRequest request = mock(HttpServletRequest.class);
        HttpSession session = mock(HttpSession.class);
    }

    @Test
    public void testSetLookups() {
        HttpServletRequest request = mock(HttpServletRequest.class);
        HttpSession session = mock(HttpSession.class);
    }

    @Test
    public void testSetupSynMaterialForAdvSearch() {
        HttpServletRequest request = mock(HttpServletRequest.class);
        HttpSession session = mock(HttpSession.class);
    }
}