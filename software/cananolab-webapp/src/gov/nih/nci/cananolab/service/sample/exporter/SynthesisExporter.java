package gov.nih.nci.cananolab.service.sample.exporter;

import gov.nih.nci.cananolab.domain.particle.SynthesisMaterial;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterialElement;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialElementBean;
import gov.nih.nci.cananolab.util.ExportUtils;
import gov.nih.nci.cananolab.util.StringUtils;
import java.util.List;
import javax.servlet.ServletOutputStream;
import org.apache.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFFont;
import org.apache.poi.hssf.usermodel.HSSFPatriarch;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hssf.util.HSSFColor;

public class SynthesisExporter {
    public static Logger logger = Logger.getLogger(SynthesisExporter.class);

    public static void exportSummary(SynthesisBean synthesisBean, String downloadURL,
                                     ServletOutputStream outputStream) throws Exception {
        if (outputStream != null) {
            HSSFWorkbook wb = new HSSFWorkbook();
            outputSummarySheet(synthesisBean, downloadURL, wb);
            wb.write(outputStream);
            outputStream.flush();
            outputStream.close();
        }
    }



    private static int outputMaterialEntites(SynthesisBean synthesisBean, HSSFWorkbook wb, HSSFCellStyle headerStyle,
                                             HSSFCellStyle hlinkStyle, int entityCount, String downloadURL) {
        List<SynthesisMaterialBean> synthesisMaterialBeans = synthesisBean.getSynthesisMaterialBeanList();
        if (synthesisMaterialBeans != null && !synthesisMaterialBeans.isEmpty()) {
            StringBuilder stringBuilder = new StringBuilder();
            for (SynthesisMaterialBean synthesisMaterialBean : synthesisMaterialBeans) {
                if (!StringUtils.isEmpty(synthesisMaterialBean.getType())) {
                    int rowIndex = 0;
                    stringBuilder.setLength(0);
                    stringBuilder.append(entityCount++).append('.').append(synthesisMaterialBean.getType());

                    //Create one worksheet for each Synthesis Material
                    HSSFSheet sheet = wb.createSheet(stringBuilder.toString());
                    HSSFPatriarch patriarch = sheet.createDrawingPatriarch();

                    //output header
                    rowIndex = outputHeader(SynthesisBean.MATERIALS_SELECTION, synthesisMaterialBean.getType(), sheet
                            , headerStyle, rowIndex);

                    //output Synthesis Material description at (4,0)
                    String description = synthesisMaterialBean.getDomainEntity().getDescription();
                    if (!StringUtils.isEmpty(description)) {
                        HSSFRow row = sheet.createRow(rowIndex++);
                        ExportUtils.createCell(row, 0, headerStyle, "Description");
                        ExportUtils.createCell(row, 0, description);

                    }

                    //Output Synthesis Material properties
                    HSSFRow row = sheet.createRow(rowIndex++);
                    ExportUtils.createCell(row, 0, headerStyle, "Properties");
                    SynthesisMaterial synthesisMaterial = synthesisMaterialBean.getDomainEntity();
                    rowIndex = outputSynthesisMaterialProperties(synthesisMaterial, sheet, headerStyle, rowIndex);
                    rowIndex++;

// Output Synthesis Material Elements
                    /**    private String molecularFormula;
                     private String molecularFormulaType;
                     private String description;
                     private String createdBy;
                     private Date createdDate;
                     private String chemicalName;
                     private Float value;
                     private String valueUnit;
                     private String pubChemDatasourceName;
                     private Long pubChemId;
                     private Set<SmeInherentFunction> SmeInherentFunction = new HashSet<SmeInherentFunction>(0);
                     private Set<File> files = new HashSet<File>(0);
                     private Supplier supplier;
                     **/
                    List<SynthesisMaterialElementBean> synthesisMaterialElements =
                            synthesisMaterialBean.getSynthesisMaterialElements();
                    if (synthesisMaterialElements != null && !synthesisMaterialElements.isEmpty()) {
                        row = sheet.createRow(rowIndex++);
                        ExportUtils.createCell(row, 0, headerStyle, "Synthesis Materials");

                        row = sheet.createRow(rowIndex++);
                        ExportUtils.createCell(row, 0, headerStyle, "Type");
                        ExportUtils.createCell(row, 1, headerStyle, "PubChem ID");
                        ExportUtils.createCell(row, 2, headerStyle, "Name");
                        ExportUtils.createCell(row, 3, headerStyle, "Amount");
                        ExportUtils.createCell(row, 4, headerStyle, "Supplier");
                        ExportUtils.createCell(row, 5, headerStyle,
                                "Molecular Formula");
                        ExportUtils.createCell(row, 6, headerStyle, "Function");
                        ExportUtils.createCell(row, 7, headerStyle,
                                "Description");
                        for (SynthesisMaterialElementBean synMatElementBean : synthesisMaterialElements) {
                            row = sheet.createRow(rowIndex++);
                            SynthesisMaterialElement synthesisMaterialElement = synMatElementBean.getDomain();

                            //output type
                            ExportUtils.createCell(row, 0, synthesisMaterialElement.getMolecularFormulaType());

                            //output pubchem ID
                            if (synthesisMaterialElement.getPubChemId() != null) {
                                Long pubChemID = synthesisMaterialElement.getPubChemId();
                                String pubChemDS = synthesisMaterialElement.getPubChemDatasourceName();
                                stringBuilder.setLength(0);
                                stringBuilder.append(pubChemID).append(' ');
                                ExportUtils.createCell(row, 1, hlinkStyle, stringBuilder.toString(),
                                        StringUtils.getPubChemURL(pubChemDS, pubChemID));
                            }

                            //output name
                            //TODO get correct name
                            ExportUtils.createCell(row, 2, synthesisMaterialElement.getChemicalName());

                            //output amount
                            stringBuilder.setLength(0);
                            stringBuilder.append(synthesisMaterialElement.getValue()).append(' ');
                            stringBuilder.append(synthesisMaterialElement.getValueUnit());
                            ExportUtils.createCell(row, 3, stringBuilder.toString());

                            //output supplier
                            stringBuilder.setLength(0);
                            stringBuilder.append(synthesisMaterialElement.getSupplier().getSupplierName()).append(' ');
                            stringBuilder.append(synthesisMaterialElement.getSupplier().getLot());
                            ExportUtils.createCell(row, 4, stringBuilder.toString());

                            if (!StringUtils.isEmpty(synMatElementBean.getMolecularFormulaDisplayName())) {
                                //todo Should be molecular formula display name?
                                ExportUtils.createCell(row, 5, synMatElementBean.getMolecularFormulaDisplayName());
                            }

                            //output Synthesis Material Element Inherent Functions
                            String[] funcNames = synMatElementBean.getFunctionDisplayNames();
                            if (funcNames != null && funcNames.length > 0) {
                                stringBuilder.setLength(0);
                                for (String funcName : funcNames) {
                                    stringBuilder.append(',').append(' ').append(funcName);
                                }
                                ExportUtils.createCell(row, 6, stringBuilder.substring(2));
                            }

                            if (!StringUtils.isEmpty(synthesisMaterialElement.getDescription())) {
                                ExportUtils.createCell(row, 7, synthesisMaterialElement.getDescription());
                            }
                            rowIndex++;
                        } //End of SynthesisMaterialElement loop


                    }

                }
            }// end of SynthesisMaterial loop
        } return entityCount;
    }





    private static void outputSummarySheet(SynthesisBean synthesisBean, String downloadURL, HSSFWorkbook wb) {
        HSSFFont headerFont = wb.createFont();
        headerFont.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);
        HSSFCellStyle headerStyle = wb.createCellStyle();
        headerStyle.setFont(headerFont);

        HSSFCellStyle hlinkStyle = wb.createCellStyle();
        HSSFFont hlinkFont = wb.createFont();
        hlinkFont.setUnderline((HSSFFont.U_SINGLE));
        hlinkFont.setColor(HSSFColor.BLUE.index);
        hlinkStyle.setFont(hlinkFont);

        int entityCount = 1;
        entityCount = outputMaterialEntites(synthesisBean, wb, headerStyle, hlinkStyle, entityCount, downloadURL);
        entityCount = outputFunctionalizationEnities(synthesisBean, wb, headerStyle, hlinkStyle, entityCount,
                downloadURL);
        entityCount = outputPurificationEntities(synthesisBean, wb, headerStyle, hlinkStyle, entityCount, downloadURL);

    }

    private static int outputPurificationEntities(SynthesisBean synthesisBean, HSSFWorkbook wb,
                                                  HSSFCellStyle headerStyle, HSSFCellStyle hlinkStyle,
                                                  int entityCount, String downloadURL) {
        //TODO write
        return 0;
    }

    private static int outputSynthesisMaterialProperties(SynthesisMaterial synthesisMaterial, HSSFSheet sheet,
                                                         HSSFCellStyle headerStyle, int rowIndex) {
        //TODO write
        return 0;
    }

    private static int outputFunctionalizationEnities(SynthesisBean synthesisBean, HSSFWorkbook wb,
                                                      HSSFCellStyle headerStyle, HSSFCellStyle hlinkStyle,
                                                      int entityCount, String downloadURL) {
        //TODO write
        return 0;
    }

    private static int outputHeader(String materialsSelection, String type, HSSFSheet sheet,
                                    HSSFCellStyle headerStyle, int rowIndex) {
        //TODO write
        return 0;
    }

    private static void outputFiles(List<FileBean> fileBeans, String downloadURL, HSSFWorkbook wb, HSSFSheet sheet, HSSFCellStyle headerStyle, HSSFCellStyle hlinkStyle, HSSFPatriarch patriarch, int rowIndex) {
    }
}