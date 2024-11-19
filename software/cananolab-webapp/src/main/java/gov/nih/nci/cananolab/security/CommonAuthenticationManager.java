/*L
 *  Copyright Ekagra Software Technologies Ltd.
 *  Copyright SAIC, SAIC-Frederick
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/common-security-module/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.security;

/**
 *
 *<!-- LICENSE_TEXT_START -->
 *
 *The NCICB Common Security Module (CSM) Software License, Version 3.0 Copyright
 *2004-2005 Ekagra Software Technologies Limited ('Ekagra')
 *
 *Copyright Notice.  The software subject to this notice and license includes both
 *human readable source code form and machine readable, binary, object code form
 *(the 'CSM Software').  The CSM Software was developed in conjunction with the
 *National Cancer Institute ('NCI') by NCI employees and employees of Ekagra.  To
 *the extent government employees are authors, any rights in such works shall be
 *subject to Title 17 of the United States Code, section 105.
 *
 *This CSM Software License (the 'License') is between NCI and You.  'You (or
 *'Your') shall mean a person or an entity, and all other entities that control,
 *are controlled by, or are under common control with the entity.  'Control' for
 *purposes of this definition means (i) the direct or indirect power to cause the
 *direction or management of such entity, whether by contract or otherwise, or
 *(ii) ownership of fifty percent (50%) or more of the outstanding shares, or
 *(iii) beneficial ownership of such entity.
 *
 *This License is granted provided that You agree to the conditions described
 *below.  NCI grants You a non-exclusive, worldwide, perpetual, fully-paid-up,
 *no-charge, irrevocable, transferable and royalty-free right and license in its
 *rights in the CSM Software to (i) use, install, access, operate, execute, copy,
 *modify, translate, market, publicly display, publicly perform, and prepare
 *derivative works of the CSM Software; (ii) distribute and have distributed to
 *and by third parties the CSM Software and any modifications and derivative works
 *thereof; and (iii) sublicense the foregoing rights set out in (i) and (ii) to
 *third parties, including the right to license such rights to further third
 *parties.  For sake of clarity, and not by way of limitation, NCI shall have no
 *right of accounting or right of payment from You or Your sublicensees for the
 *rights granted under this License.  This License is granted at no charge to You.
 *
 *1.	Your redistributions of the source code for the Software must retain the
 *above copyright notice, this list of conditions and the disclaimer and
 *limitation of liability of Article 6 below.  Your redistributions in object code
 *form must reproduce the above copyright notice, this list of conditions and the
 *disclaimer of Article 6 in the documentation and/or other materials provided
 *with the distribution, if any.
 *2.	Your end-user documentation included with the redistribution, if any, must
 *include the following acknowledgment: 'This product includes software developed
 *by Ekagra and the National Cancer Institute.'  If You do not include such
 *end-user documentation, You shall include this acknowledgment in the Software
 *itself, wherever such third-party acknowledgments normally appear.
 *
 *3.	You may not use the names 'The National Cancer Institute', 'NCI' 'Ekagra
 *Software Technologies Limited' and 'Ekagra' to endorse or promote products
 *derived from this Software.  This License does not authorize You to use any
 *trademarks, service marks, trade names, logos or product names of either NCI or
 *Ekagra, except as required to comply with the terms of this License.
 *
 *4.	For sake of clarity, and not by way of limitation, You may incorporate this
 *Software into Your proprietary programs and into any third party proprietary
 *programs.  However, if You incorporate the Software into third party proprietary
 *programs, You agree that You are solely responsible for obtaining any permission
 *from such third parties required to incorporate the Software into such third
 *party proprietary programs and for informing Your sublicensees, including
 *without limitation Your end-users, of their obligation to secure any required
 *permissions from such third parties before incorporating the Software into such
 *third party proprietary software programs.  In the event that You fail to obtain
 *such permissions, You agree to indemnify NCI for any claims against NCI by such
 *third parties, except to the extent prohibited by law, resulting from Your
 *failure to obtain such permissions.
 *
 *5.	For sake of clarity, and not by way of limitation, You may add Your own
 *copyright statement to Your modifications and to the derivative works, and You
 *may provide additional or different license terms and conditions in Your
 *sublicenses of modifications of the Software, or any derivative works of the
 *Software as a whole, provided Your use, reproduction, and distribution of the
 *Work otherwise complies with the conditions stated in this License.
 *
 *6.	THIS SOFTWARE IS PROVIDED 'AS IS,' AND ANY EXPRESSED OR IMPLIED WARRANTIES,
 *(INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY,
 *NON-INFRINGEMENT AND FITNESS FOR A PARTICULAR PURPOSE) ARE DISCLAIMED.  IN NO
 *EVENT SHALL THE NATIONAL CANCER INSTITUTE, EKAGRA, OR THEIR AFFILIATES BE LIABLE
 *FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 *DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 *SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 *CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
 *TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 *THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 *<!-- LICENSE_TEXT_END -->
 *
 */


//
//
//import java.util.regex.Pattern;
//
//import gov.nih.nci.logging.api.user.UserInfoHelper;
//import gov.nih.nci.security.AuthenticationManager;
//import gov.nih.nci.security.acegi.authentication.CSMLoginContext;
//import gov.nih.nci.security.authentication.callback.CSMCallbackHandler;
//import gov.nih.nci.security.authentication.loginmodules.CSMLoginModule;
//import gov.nih.nci.security.exceptions.Exception;
//import gov.nih.nci.security.exceptions.Exception;
//import gov.nih.nci.security.exceptions.Exception;
//import gov.nih.nci.security.exceptions.Exception;
//import gov.nih.nci.security.exceptions.Exception;
//import gov.nih.nci.security.exceptions.Exception;
//import gov.nih.nci.security.exceptions.Exception;
//import gov.nih.nci.security.exceptions.Exception;
//import gov.nih.nci.security.exceptions.CSTransactionException;
//import gov.nih.nci.security.exceptions.Exception;
//import gov.nih.nci.security.exceptions.internal.Exception;
//import gov.nih.nci.security.exceptions.internal.Exception;
//import gov.nih.nci.security.util.ConfigurationHelper;
//import gov.nih.nci.security.util.StringUtilities;

import gov.nih.nci.cananolab.security.utils.ConfigurationHelper;
import gov.nih.nci.cananolab.security.utils.StringUtilities;
import javax.security.auth.Subject;
import javax.security.auth.callback.CallbackHandler;
import javax.security.auth.login.AccountExpiredException;
import javax.security.auth.login.CredentialExpiredException;
import javax.security.auth.login.FailedLoginException;
import javax.security.auth.login.LoginContext;
import javax.security.auth.login.LoginException;
import javax.security.auth.spi.LoginModule;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;


/**
 * This is the default implementation of the {@link AuthenticationManager} interface.
 * It provides methods to perform the authentication using the provided user credentials.
 * It uses JAAS to perform this authentication. This class accepts the Application Context/Name,
 * and instantiate a corresponding {@link LoginContext} for the same. It accepts the
 * user credentials and creates a {@link CallbackHandler} class using the same. Using the
 * {@link LoginContext} and the {@link CallbackHandler} created JAAS instantiate the configured
 * {@link LoginModule} for the application and uses the same to authenticate the user credentials
 * against the credential providers.
 *
 * @author Kunal Modi (Ekagra Software Technologies Ltd.)
 *
 */
public class CommonAuthenticationManager implements AuthenticationManager{

	private static final Logger log = LogManager.getLogger(CommonAuthenticationManager.class);
	private static final Logger auditLog = LogManager.getLogger("CSM.Audit.Logging.Event.Authentication");


	private String applicationContextName = null;


	/**
	 * This method accepts the user credentials as parameter and uses the same to authenticate the user
	 * against the registered credential providers. It creates an instance of the  CSMCallbackHandler class
	 * and populates the same with the user credentials. It also creates a JAAS {@link LoginContext} class using the
	 * Application Context/Name as parameter. It then calls the <code>login</code> method on the {@link LoginContext} class.
	 * The login Method then uses the registered {@link LoginModule} for the given Application Context/Name in the JAAS policy file
	 * and authenticate the user credentials. There can be more than one {@link LoginModule} class registered for the application.

	 *
	 */
	public boolean login(String userName, String password) {
		boolean result = false;
		try {
			result = this.login(userName, password, null);
		} catch (Exception e) {
			// Should never occur
			e.printStackTrace();
		}
		return result;
	}

	/*
	 * This method accepts the user credentials as parameter and uses the same to authenticate the user
	 * against the registered credential providers. It creates an instance of the  CSMCallbackHandler class
	 * and populates the same with the user credentials. It also creates a JAAS {@link LoginContext} class using the
	 * Application Context/Name as parameter. It then calls the <code>login</code> method on the {@link LoginContext} class.
	 * The login Method then uses the registered {@link LoginModule} for the given Application Context/Name in the JAAS policy file
	 * and authenticate the user credentails. There can be more than one {@link LoginModule} class registered for the application.
	 *
	 */
	/*
	public Subject authenticate(String userName, String password) throws Exception {
		Subject subject = new Subject();
		this.login(userName, password, subject);
		return subject;
	}
	*/


	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthenticationManager#authenticate(javax.security.auth.Subject)
	 */
	/*
	public boolean authenticate(Subject subject) throws Exception {
		 LoginContext ctx = null;

		if (null == subject)
		{
			throw new Exception("Subject cannot be blank");
		}
		// Check if subject - username or Cerfiticate is available. Atleast one should be available.
	    try {

			ctx = new LoginContext( "gov.nih.nci.security.authentication.loginmodules.X509LoginModule", subject );
			ctx.login();
		} catch (LoginException e) {

			if (log.isDebugEnabled())
				log.debug("Authentication||login|Failure.");
			throw new Exception(e.getMessage());
		}

		subject.setReadOnly();
		return true;
	}
	 */


	private boolean login(String userName, String password, Subject subject) throws Exception {
		if (null == userName || userName.trim().isEmpty()) {
			throw new Exception("User Name cannot be blank");
		}
		if (null == password || password.trim().isEmpty()) {
			throw new Exception("Password cannot be blank");
		}

//		LockoutManager lockoutManager = LockoutManager.getInstance();
//		UserInfoHelper.setUserInfo(userName, null);

		boolean loginSuccessful = false;
		LoginContext loginContext = null;
		try {
			//System.out.println("lockoutManager.getAllowedAttempts:::" + lockoutManager.getAllowedAttempts());
//			if (lockoutManager.isUserLockedOut(userName))
//			{
//				auditLog.info("Allowed Attempts Reached ! User " + userName + " is locked out !");
//				throw new Exception ("Allowed Attempts Reached ! User Name is locked out !");
//			}
//			CSMCallbackHandler csmCallbackHandler = new CSMCallbackHandler(userName, password);
//			if (null == subject)
//				loginContext = new LoginContext(applicationContextName, csmCallbackHandler);
//			else
//				loginContext = new LoginContext(applicationContextName, subject, csmCallbackHandler);
			loginContext.login();
			loginSuccessful = true;
			if (log.isDebugEnabled())
				log.debug("Authentication|"+applicationContextName+"|"+userName+"|login|Success| Authentication is "+loginSuccessful+" for user "+userName+"|");
			auditLog.info("Successful Login attempt for user "+ userName);
		} catch (Exception csiiae) {
			csiiae.printStackTrace();
			loginSuccessful = false;
			if (log.isDebugEnabled())
				log.debug("Authentication|"+applicationContextName+"|"+userName+"|login|Failure| Error in Configuration for "+userName+"|" + csiiae.getMessage());
			throw new Exception(csiiae.getMessage());
		}
//		catch (Exception csice)
//		{
//			csice.printStackTrace();
//			loginSuccessful = false;
//			if (log.isDebugEnabled())
//				log.debug("Authentication|"+applicationContextName+"|"+userName+"|login|Failure| Error in Configuration for "+userName+"|" + csice.getMessage());
//			throw new Exception(csice.getMessage());
//		}
//		catch (FailedLoginException le)
//		{
//			le.printStackTrace();
//			loginSuccessful = false;
//			if (log.isDebugEnabled())
//				log.debug("Authentication|"+applicationContextName+"|"+userName+"|login|Failure| User Loging in first time: Must change password "+userName+"|" + le.getMessage());
//
//			auditLog.info("User Loging in first time: Must change password "+ userName);
//			throw new Exception (le.getMessage(), le);
//		}
//		catch (AccountExpiredException le)
//		{
//			le.printStackTrace();
//			loginSuccessful = false;
//			if (log.isDebugEnabled())
//				log.debug("Authentication|"+applicationContextName+"|"+userName+"|login|Failure| User is not active "+userName+"|" + le.getMessage());
//
//			auditLog.info("User is not active "+ userName);
//			throw new Exception (le.getMessage(), le);
//		}
//		catch (CredentialExpiredException le)
//		{
//			le.printStackTrace();
//			loginSuccessful = false;
//			if (log.isDebugEnabled())
//				log.debug("Authentication|"+applicationContextName+"|"+userName+"|login|Failure| Password expired for user "+userName+"|" + le.getMessage());
//
//			auditLog.info("Password expired for user "+ userName);
//			throw new Exception (le.getMessage(), le);
//		}
//		catch (LoginException le)
//		{
//			le.printStackTrace();
//			loginSuccessful = false;
//			if (log.isDebugEnabled())
//				log.debug("Authentication|"+applicationContextName+"|"+userName+"|login|Failure| Authentication is not successful for user "+userName+"|" + le.getMessage());
////			boolean isUserLockedOut = lockoutManager.setFailedAttempt(userName);
////			if (isUserLockedOut)
////			{
////				auditLog.info("Allowed Attempts Reached ! User " + userName + " is locked out !");
////				throw new Exception ("Allowed Attempts Reached ! User Name is locked out !");
////			}
//			auditLog.info("Unsuccessful Login attempt for user "+ userName);
//			throw new Exception (le.getMessage(), le);
//		}
		return loginSuccessful;
	}



	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthenticationManager#initialize(java.lang.String)
	 */
	public void initialize(String applicationContextName) {
		this.applicationContextName = applicationContextName;
		//new ConfigurationHelper(applicationContextName);
	}

	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthenticationManager#setApplicationContextName(java.lang.String)
	 */
	public void setApplicationContextName(String applicationContextName) {
		this.applicationContextName = applicationContextName;
	}

	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthenticationManager#getApplicationContextName()
	 */
	public String getApplicationContextName() {
		return this.applicationContextName;
	}

	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthenticationManager#getAuthenticatedObject()
	 */
	public Object getAuthenticatedObject() {
		// TODO Auto-generated method stub
		return null;
	}

	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthenticationManager#getSubject()
	 */
	public Subject getSubject() {
		// TODO Auto-generated method stub
		return null;
	}

	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthenticationManager#setAuditUserInfo(java.lang.String, java.lang.String)
	 */
	public void setAuditUserInfo(String userName, String sessionId)
	{
//		UserInfoHelper.setUserInfo(userName, sessionId);
	}

	/* (non-Javadoc)
	 * @see gov.nih.nci.security.AuthenticationManager#logout(java.lang.String)
	 */
	public void logout(String userName)
	{
//		UserInfoHelper.setUserInfo(userName, null);
//		auditLog.info("Successful log out for user "+ userName);
	}

	public boolean changePassword(String userName, String password, String newPassword, String passwordConfirmation) throws Exception {
		if (null == userName || userName.trim().isEmpty()) {
			throw new Exception("User Name cannot be blank");
		}
		if (null == password || password.trim().isEmpty()) {
			throw new Exception("Password cannot be blank");
		}
		if (null == newPassword || newPassword.trim().isEmpty()) {
			throw new Exception("New Password cannot be blank");
		}
		if (null == passwordConfirmation || passwordConfirmation.trim().isEmpty()) {
			throw new Exception("Password Confirmation cannot be blank");
		}
		if(!newPassword.equals(passwordConfirmation)) {
			throw new Exception("Password and Password Confirmation should match");
		}
		if(!validatePassword(passwordConfirmation)) {
			throw new Exception("The password should have at least 8 characters, a special character, a number and an upper case character");
		}
//		LockoutManager lockoutManager = LockoutManager.getInstance();
//
//		UserInfoHelper.setUserInfo(userName, null);
//		boolean changePasswordSuccessful = false;
//		CSMLoginContext loginContext = null;
//		try
//		{
//			CSMCallbackHandler csmCallbackHandler = new CSMCallbackHandler(userName, password);
//			loginContext = new CSMLoginContext(applicationContextName, new Subject(), csmCallbackHandler,null);
//
//		//	ClassLoader cl = Thread.currentThread().getContextClassLoader();
//		//	Class c = Class.forName("gov.nih.nci.security.authentication.loginmodules.CSMLoginModule", true, cl);
//		//	CSMLoginModule csmLoginModule = (CSMLoginModule) c.newInstance();
//		//	csmLoginModule.initialize(null, callbackHandler, sharedState, options)
//
//			loginContext.changePassword(newPassword);
//			changePasswordSuccessful = true;
//			if (log.isDebugEnabled())
//				log.debug("Authentication|"+applicationContextName+"|"+userName+"|login|Success| Authentication is "+changePasswordSuccessful+" for user "+userName+"|");
//			auditLog.info("Successful Login attempt for user "+ userName);
//		}
//
//		catch (Exception csiiae)
//		{
//			csiiae.printStackTrace();
//			changePasswordSuccessful = false;
//			if (log.isDebugEnabled())
//				log.debug("Authentication|"+applicationContextName+"|"+userName+"|login|Failure| Error in Configuration for "+userName+"|" + csiiae.getMessage());
//			throw new Exception(csiiae.getMessage());
//		}
//		catch (Exception csice)
//		{
//			csice.printStackTrace();
//			changePasswordSuccessful = false;
//			if (log.isDebugEnabled())
//				log.debug("Authentication|"+applicationContextName+"|"+userName+"|login|Failure| Error in Configuration for "+userName+"|" + csice.getMessage());
//			throw new Exception(csice.getMessage());
//		}
//		catch (CredentialExpiredException le)
//		{
//			le.printStackTrace();
//			changePasswordSuccessful = false;
//			if (log.isDebugEnabled())
//				log.debug("Authentication|"+applicationContextName+"|"+userName+"|login|Failure| Password expired for user "+userName+"|" + le.getMessage());
//
//			auditLog.info("Password expired for user "+ userName);
//			throw new Exception (le.getMessage(), le);
//		}
//		catch (LoginException le)
//		{
//			le.printStackTrace();
//			changePasswordSuccessful = false;
//			if (log.isDebugEnabled())
//				log.debug("Authentication|"+applicationContextName+"|"+userName+"|login|Failure| Authentication is not successful for user "+userName+"|" + le.getMessage());
//			boolean isUserLockedOut = lockoutManager.setFailedAttempt(userName);
//			if (isUserLockedOut)
//			{
//				auditLog.info("Allowed Attempts Reached ! User " + userName + " is locked out !");
//				throw new Exception ("Allowed Attempts Reached ! User Name is locked out !");
//			}
//			auditLog.info("Unsuccessful Login attempt for user "+ userName);
//			throw new Exception (le.getMessage(), le);
//		}
//		return changePasswordSuccessful;
		return true;
	}

	private boolean validatePassword(String password){
		String pattern =null;
		try {
			pattern = ConfigurationHelper.getConfiguration().getString("PASSWORD_PATTERN_MATCH");
		} catch (Exception e) {
			if (log.isDebugEnabled())
				log.debug("Authorization|||Configuration Exception while getting the pattern |" + e.getMessage());
		}
		return StringUtilities.checkPatternMatches(password,pattern);
	}


}
