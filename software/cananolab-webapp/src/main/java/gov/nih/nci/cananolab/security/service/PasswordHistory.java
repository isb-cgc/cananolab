package gov.nih.nci.cananolab.security.service;
import java.util.Date;

public class PasswordHistory {
    public static final int EXPIRATION_DAY = 120;

    private String password;

    private String username;

    private Date createDate;

    private Date expiryDate;

    public String getPassword() { return this.password; }

    public void setPassword(String password) { this.password = password; }

    public String getUserName() { return this.username; }

    public void setUserName(String username) { this.username = username; }

    public Date getCreateDate() { return this.createDate; }

    public void setCreateDate(Date createDate) { this.createDate = createDate; }

    public Date getExpiryDate() { return this.expiryDate; }

    public void setExpiryDate(Date expiryDate) { this.expiryDate = expiryDate; }
}
