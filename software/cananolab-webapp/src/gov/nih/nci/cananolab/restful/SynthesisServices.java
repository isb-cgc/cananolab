package gov.nih.nci.cananolab.restful;

import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisBean;
import gov.nih.nci.cananolab.restful.synthesis.SynthesisBO;
import gov.nih.nci.cananolab.restful.view.SimpleSynthesisBean;
import gov.nih.nci.cananolab.ui.form.SynthesisForm;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.DefaultValue;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.Response;
import org.apache.log4j.Logger;

@Path("/synthesis")
public class SynthesisServices {
    private static final Logger logger = Logger.getLogger(SynthesisServices.class);


    @GET
    @Path("/summaryView")
    @Produces ("application/json")
    public Response view(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam("sampleId") String sampleId)
    {
        try {
            SynthesisForm form = new SynthesisForm();
            form.setSampleId(sampleId);

            SynthesisBO synthesisBO = (SynthesisBO) SpringApplicationContext.getBean(httpRequest, "synthesisBO");

            SynthesisBean synthesisBean = synthesisBO.summaryView(form, httpRequest);
            SimpleSynthesisBean view = new SimpleSynthesisBean();
            view.transferSynthesisForSummaryView(synthesisBean);

            return Response.ok(view).build();

        } catch (Exception e) {
            return Response.ok("Error while viewing the composition results" +e).build();
        }
    }

    @GET
    @Path("/summaryPrint")
    @Produces ("application/json")
    public Response summaryPrint(@Context HttpServletRequest httpRequest, @DefaultValue("") @QueryParam("sampleId") String sampleId)
    {
        try {
        SynthesisForm form = new SynthesisForm();
        form.setSampleId(sampleId);
        SynthesisBO synthesisBO = (SynthesisBO) SpringApplicationContext.getBean(httpRequest, "synthesisBO");
        SynthesisBean synthesisBean = synthesisBO.summaryPrint(form, httpRequest);
        SimpleSynthesisBean view = new SimpleSynthesisBean();
        view.transferSynthesisForSummaryView(synthesisBean);
        return Response.ok(view).build();
        } catch (Exception e){
            return Response.ok("Error while printing the file").build();
        }
    }

    @GET
    @Path("/summaryExport")
    @Produces ("application/vnd.ms-excel")
    public Response summaryExport(@Context HttpServletRequest httpRequest, @Context HttpServletResponse httpResponse,
                                  @DefaultValue("") @QueryParam("sampleId") String sampleId, @DefaultValue("") @QueryParam("type") String type)
    {
        try {
            SynthesisForm form = new SynthesisForm();
            form.setSampleId(sampleId);

            SynthesisBO synthesisBO = (SynthesisBO) SpringApplicationContext.getBean(httpRequest, "synthesisBO");

            String result = synthesisBO.summaryExport(form, type, httpRequest, httpResponse);

            return Response.ok("").build();
        } catch (Exception e) {
            return Response.ok("Error while exporting the file").build();
        }
    }

//    @GET
//    @Path("/download")
//    @Produces({"image/png", "application/json"})
//    public Response download(@Context HttpServletRequest httpRequest, @Context HttpServletResponse httpResponse,
//                             @DefaultValue("") @QueryParam("fileId") String fileId)
//    {
//        try {
//            SynthesisBO synthesisBO = (SynthesisBO) SpringApplicationContext.getBean(httpRequest, "synthesisBO");
//
//            String result = synthesisBO.download(fileId, httpRequest, httpResponse);
//            return Response.ok(result).build();
//        }
//        catch (Exception e) {
//            return Response.ok(e.getMessage()).build();
//        }
//    }

}
