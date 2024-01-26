package gov.nih.nci.cananolab.security.service;

import java.time.LocalDateTime;
import java.util.Date;

public class PasswordResetToken {

    public static final int EXPIRATION_HOURS = 2;
    public static final int EXPIRATION_HOURS_NEW_USER = 48;

    private String token;

    private String username;

    private LocalDateTime expiryDate;

    public String getToken() { return this.token; }

    public void setToken(String token) { this.token = token; }

    public String getUserName() { return this.username; }

    public void setUserName(String username) { this.username = username; }

    public LocalDateTime getExpiryDate() { return this.expiryDate; }

    public void setExpiryDate(LocalDateTime expiryDate) { this.expiryDate = expiryDate; }
}
