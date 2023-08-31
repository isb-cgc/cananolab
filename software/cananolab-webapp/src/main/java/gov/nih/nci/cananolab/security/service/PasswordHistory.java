package gov.nih.nci.cananolab.security.service;
import java.time.LocalDateTime;

public class PasswordHistory {
    public static final int EXPIRATION_DAY = 120;

    private String password;

    private String username;

    private LocalDateTime createDate;

    private LocalDateTime expiryDate;

    public String getPassword() { return this.password; }

    public void setPassword(String password) { this.password = password; }

    public String getUserName() { return this.username; }

    public void setUserName(String username) { this.username = username; }

    public LocalDateTime getCreateDate() { return this.createDate; }

    public void setCreateDate(LocalDateTime createDate) { this.createDate = createDate; }

    public LocalDateTime getExpiryDate() { return this.expiryDate; }

    public void setExpiryDate(LocalDateTime expiryDate) { this.expiryDate = expiryDate; }
}
