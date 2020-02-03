package gov.nih.nci.cananolab.restful;

import gov.nih.nci.cananolab.domain.particle.SynthesisMaterialElement;
import gov.nih.nci.cananolab.restful.util.RestTestLoginUtil;
import gov.nih.nci.cananolab.restful.view.edit.SimpleFileBean;
import gov.nih.nci.cananolab.restful.view.edit.SimpleSynthesisMaterialBean;
import java.util.ArrayList;
import java.util.List;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.MultivaluedHashMap;
import javax.ws.rs.core.MultivaluedMap;
import org.apache.commons.collections.map.MultiValueMap;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class SynthesisMaterialServicesTest {

    @Before
    public void setUp() throws Exception {
    }

    @Test
    public void setup() {
    }

    @Test
    public void edit() {
    }

    @Test
    public void saveSynthesisMaterialElement() {
    }

    @Test
    public void removeSynthesisMaterialElement() {
    }

    @Test
    public void saveFile() {
    }

    @Test
    public void removeFile() {
        SimpleSynthesisMaterialBean materialBean = new SimpleSynthesisMaterialBean();
        materialBean.setSampleId("1000");
        materialBean.setId(new Long(1000));
        SimpleFileBean fileBean = new SimpleFileBean();
        fileBean.setType("TestType");
        fileBean.setTitle("TestTitle");
        fileBean.setUriExternal(true);
        fileBean.setExternalUrl("https:///somewhere.com");
        fileBean.setSampleId("1000");
        List<SimpleFileBean> fileBeans = new ArrayList<SimpleFileBean>();
        fileBeans.add(fileBean);
        materialBean.setFileElements(fileBeans);

//        String jsessionId = RestTestLoginUtil.loginTest();

        final Client aClient = ClientBuilder.newBuilder()
                .register(ObjectMapperProvider.class)
                .build();

        WebTarget webTarget = aClient.target("http://localhost:8080/caNanoLab/rest");
        webTarget.register(SynthesisMaterialServices.class);

        WebTarget submitWebTarget = webTarget.path("synthesisMaterial").path("removeFile");
        javax.ws.rs.core.Response postResponse =
                submitWebTarget.request("application/json")
                        .post(Entity.json(materialBean));

        assertNotNull(postResponse);
        assertTrue(postResponse.getStatus() == 302);
//        assertTrue(postResponse.getStatus() == 401);

        postResponse.bufferEntity();
        String json = (String) postResponse.readEntity(String.class);

        assertTrue(json.contains("Session expired"));
        RestTestLoginUtil.logoutTest();
    }

    @Test
    public void submit() {
    }

    @Test
    public void delete() {
    }

    @Test
    public void viewDetails() {
    }
}