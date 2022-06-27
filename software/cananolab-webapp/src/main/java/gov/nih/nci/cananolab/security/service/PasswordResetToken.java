package gov.nih.nci.cananolab.security.service;

import gov.nih.nci.cananolab.security.CananoUserDetails;

import java.util.Date;

public class PasswordResetToken {

    private static final int EXPIRATION = 60 * 24;

    private Long id;

    private String token;

    private CananoUserDetails user;

    private Date expiryDate;

    public PasswordResetToken(CananoUserDetails user, String token) {
        this.user = user;
        this.token = token;
    }
}
