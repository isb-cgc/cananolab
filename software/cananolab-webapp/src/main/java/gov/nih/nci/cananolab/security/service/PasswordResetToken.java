package gov.nih.nci.cananolab.security.service;

import gov.nih.nci.cananolab.security.CananoUserDetails;

import java.util.Date;

public class PasswordResetToken {

    public static final int EXPIRATION_HOURS = 24;

    private String token;

    private String username;

    private Date expiryDate;

    public String getToken() { return this.token; }

    public void setToken(String token) { this.token = token; }

    public String getUserName() { return this.username; }

    public void setUserName(String username) { this.username = username; }

    public Date getExpiryDate() { return this.expiryDate; }

    public void setExpiryDate(Date expiryDate) { this.expiryDate = expiryDate; }
}
