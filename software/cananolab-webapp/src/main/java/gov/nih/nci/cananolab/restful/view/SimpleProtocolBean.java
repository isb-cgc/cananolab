package gov.nih.nci.cananolab.restful.view;

import gov.nih.nci.cananolab.dto.common.ProtocolBean;
import gov.nih.nci.cananolab.dto.common.FileBean;


import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class SimpleProtocolBean {
    long protocolId; //
    String protocolAbbreviation; //
    Date createdDate; // ?
    String protocolName; //
    String protocolType; //
    String protocolVersion; //
    String doi; //
    Long fileId; //
    String fileTitle; //
    String fileDescription; //
    List<String> errors = new ArrayList<String>();
    String uri = "";
    Boolean uriExternal = false;
    String externalUrl = "";

    public String getUri() {
        return uri;
    }
    public void setUri(String uri) {
        this.uri = uri;
    }
    public Boolean getUriExternal() {
        return uriExternal;
    }
    public void setUriExternal(Boolean uriExternal) {
        this.uriExternal = uriExternal;
    }
    public String getExternalUrl() {
        return externalUrl;
    }
    public void setExternalUrl(String externalUrl) {
        this.externalUrl = externalUrl;
    }
    public Long getProtocolId() {
        return protocolId;
    }
    public void setProtocolId(Long protocolId) {
        this.protocolId = protocolId;
    }
    public Date getCreatedDate() {
        return createdDate;
    }
    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }
    public List<String> getErrors() { return errors; }
    public void setErrors(List<String> errors) {
        this.errors = errors;
    }
    public String getProtocolType() {
        return protocolType;
    }
    public void setProtocolType(String protocolType) {
        this.protocolType = protocolType;
    }
    public String getProtocolName() {
        return protocolName;
    }
    public void setProtocolName(String protocolName) {
        this.protocolName = protocolName;
    }
    public String getProtocolAbbreviation() {
        return protocolAbbreviation;
    }
    public void setProtocolAbbreviation(String protocolAbbreviation) {
        this.protocolAbbreviation = protocolAbbreviation;
    }
    public String getDoi() {
        return doi;
    }
    public void setDoi(String doi) {
        this.doi = doi;
    }
    public String getProtocolVersion() {
        return protocolVersion;
    }
    public void setProtocolVersion(String protocolVersion) {
        this.protocolVersion = protocolVersion;
    }
    public Long getFileId() {
        return fileId;
    }
    public void setFileId(Long fileId) {
        this.fileId = fileId;
    }
    public String getFileTitle() {
        return fileTitle;
    }
    public void setFileTitle(String fileTitle) {
        this.fileTitle = fileTitle;
    }
    public String getFileDescription() {
        return fileDescription;
    }
    public void setFileDescription(String fileDescription) {
        this.fileDescription = fileDescription;
    }

    public String getDisplayUri() {
        if(uriExternal) {
            return externalUrl;
        } else {
            return uri;
        }
    }

    public void transferProtocolBeanForSummaryView(ProtocolBean protocolBean) {
        if (protocolBean == null)
            return;

        setProtocolId(protocolBean.getDomain().getId());
        setProtocolAbbreviation(protocolBean.getDomain().getAbbreviation());
        setCreatedDate(protocolBean.getDomain().getCreatedDate());
        setProtocolName(protocolBean.getDomain().getName());
        setProtocolType(protocolBean.getDomain().getType());
        setProtocolVersion(protocolBean.getDomain().getVersion());
        setDoi(protocolBean.getDomain().getDoi());

        FileBean fileBean = protocolBean.getFileBean();
        setFileId(fileBean.getDomainFile().getId());
        setFileTitle(fileBean.getDomainFile().getTitle());
        setFileDescription(fileBean.getDomainFile().getDescription());
        setUri(fileBean.getDomainFile().getUri());
        setUriExternal(fileBean.getDomainFile().getUriExternal());
        setExternalUrl(fileBean.getExternalUrl());
    }
}
