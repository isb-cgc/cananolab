package gov.nih.nci.cananolab.domain;

import java.util.Objects;

public class FavoriteData {
    private Long favoriteDataId;
    private Long dataId;
    private String dataType;
    private String dataName;
    private String loginName;
    private Long protocolFileId;
    private Long pubmedId;
    private Byte editable;
    private String description;
    private String protocolFileTitle;

    public Long getFavoriteDataId() {
        return favoriteDataId;
    }

    public void setFavoriteDataId(Long favoriteDataId) {
        this.favoriteDataId = favoriteDataId;
    }

    public Long getDataId() {
        return dataId;
    }

    public void setDataId(Long dataId) {
        this.dataId = dataId;
    }

    public String getDataType() {
        return dataType;
    }

    public void setDataType(String dataType) {
        this.dataType = dataType;
    }

    public String getDataName() {
        return dataName;
    }

    public void setDataName(String dataName) {
        this.dataName = dataName;
    }

    public String getLoginName() {
        return loginName;
    }

    public void setLoginName(String loginName) {
        this.loginName = loginName;
    }

    public Long getProtocolFileId() {
        return protocolFileId;
    }

    public void setProtocolFileId(Long protocolFileId) {
        this.protocolFileId = protocolFileId;
    }

    public Long getPubmedId() {
        return pubmedId;
    }

    public void setPubmedId(Long pubmedId) {
        this.pubmedId = pubmedId;
    }

    public Byte getEditable() {
        return editable;
    }

    public void setEditable(Byte editable) {
        this.editable = editable;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getProtocolFileTitle() {
        return protocolFileTitle;
    }

    public void setProtocolFileTitle(String protocolFileTitle) {
        this.protocolFileTitle = protocolFileTitle;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        FavoriteData that = (FavoriteData) o;
        return Objects.equals(favoriteDataId, that.favoriteDataId) &&
                Objects.equals(dataId, that.dataId) &&
                Objects.equals(dataType, that.dataType) &&
                Objects.equals(dataName, that.dataName) &&
                Objects.equals(loginName, that.loginName) &&
                Objects.equals(protocolFileId, that.protocolFileId) &&
                Objects.equals(pubmedId, that.pubmedId) &&
                Objects.equals(editable, that.editable) &&
                Objects.equals(description, that.description) &&
                Objects.equals(protocolFileTitle, that.protocolFileTitle);
    }

    @Override
    public int hashCode() {
        return Objects.hash(favoriteDataId, dataId, dataType, dataName, loginName, protocolFileId, pubmedId, editable, description, protocolFileTitle);
    }
}
