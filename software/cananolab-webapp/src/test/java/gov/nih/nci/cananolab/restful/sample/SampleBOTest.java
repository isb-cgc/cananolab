package gov.nih.nci.cananolab.restful.sample;

import gov.nih.nci.cananolab.dto.particle.SampleBean;
import gov.nih.nci.cananolab.restful.view.edit.SampleEditGeneralBean;
import java.util.ArrayList;
import java.util.TreeSet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;


//@RunWith(SpringJUnit4ClassRunner.class)
////@ContextConfiguration(locations = {"classpath:/applicationContext-strutsless.xml"})
//@ContextConfiguration(locations = {"file:test-rest/resources/applicationContext-strutsless.xml"})
public class SampleBOTest {
	
	//@Autowired
	SampleBO sampleBO = new SampleBO();

	@Test
	public void testFindMatchSampleInSession() {
		HttpServletRequest request = mock(HttpServletRequest.class);
		HttpSession session = mock(HttpSession.class);
		
		SampleBean sampleBean = new SampleBean();

		when(request.getSession()).thenReturn(session);
		when(session.getAttribute("theSample")).thenReturn(null);

		SampleBean sample = sampleBO.findMatchSampleInSession(request, 0);
		assertNull(sample);
		
		when(session.getAttribute("theSample")).thenReturn(sampleBean);
		sample = sampleBO.findMatchSampleInSession(request, 0);
		assertNotNull(sample);
		
		sample.getDomain().setId((long)234);
		when(session.getAttribute("theSample")).thenReturn(sampleBean);
		sample = sampleBO.findMatchSampleInSession(request, 234);
		assertNotNull(sample);
		
	}
	
	@Test
	public void testCreateNewSample() {

		HttpServletRequest request = mock(HttpServletRequest.class);
		HttpSession session = mock(HttpSession.class);

		when(request.getSession()).thenReturn(session);

		when(session.getAttribute("functionTypes")).thenReturn(new TreeSet<String>());
		when(session.getAttribute("nanomaterialEntityTypes")).thenReturn(new TreeSet<String>());
		when(session.getAttribute("functionalizingEntityTypes")).thenReturn(new TreeSet<String>());
		when(session.getAttribute("characterizationTypes")).thenReturn(new ArrayList<String>());
		try {
			SampleEditGeneralBean editBean = sampleBO.summaryEdit("44695553", request);
			editBean.setSampleId(44695553);
			editBean.setSampleName("SY-Monday2");
			editBean.setNewSampleName("CloneFromSY-Monday2");
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	@Test
	public void testDeleteSample(){
		HttpServletRequest request = mock(HttpServletRequest.class);
		HttpSession session = mock(HttpSession.class);

		when(request.getSession()).thenReturn(session);

		try{
			String result = sampleBO.delete("44695553", request);
			assertEquals("deleted", result);

		}catch (Exception e){
			System.out.println(e.getMessage());
		}
	}

}
