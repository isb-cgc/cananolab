/*L
 *  Copyright Ekagra Software Technologies Ltd.
 *  Copyright SAIC, SAIC-Frederick
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/common-security-module/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.security.authorization.jaas;

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








/**
 * PermissionAdapterFactory.java
 * @author ghuang  $Header: /share/content/cvsroot/security/api/src/gov/nih/nci/security/authorization/jaas/PermissionAdapterFactory.java,v 1.5 2005-04-26 17:59:09 copene Exp $ $Log: not supported by cvs2svn $
 * @author ghuang  $Header: /share/content/cvsroot/security/api/src/gov/nih/nci/security/authorization/jaas/PermissionAdapterFactory.java,v 1.5 2005-04-26 17:59:09 copene Exp $ Revision 1.3  2005/03/29 17:12:39  modik
 * @author ghuang  $Header: /share/content/cvsroot/security/api/src/gov/nih/nci/security/authorization/jaas/PermissionAdapterFactory.java,v 1.5 2005-04-26 17:59:09 copene Exp $ Commiting after changing the version number from 1.0 to 3.0
 * @author ghuang  $Header: /share/content/cvsroot/security/api/src/gov/nih/nci/security/authorization/jaas/PermissionAdapterFactory.java,v 1.5 2005-04-26 17:59:09 copene Exp $
 * @author ghuang  $Header: /share/content/cvsroot/security/api/src/gov/nih/nci/security/authorization/jaas/PermissionAdapterFactory.java,v 1.5 2005-04-26 17:59:09 copene Exp $ Revision 1.2  2005/03/18 19:23:08  modik
 * @author ghuang  $Header: /share/content/cvsroot/security/api/src/gov/nih/nci/security/authorization/jaas/PermissionAdapterFactory.java,v 1.5 2005-04-26 17:59:09 copene Exp $ Inserted the license text on top of every java file
 * @author ghuang  $Header: /share/content/cvsroot/security/api/src/gov/nih/nci/security/authorization/jaas/PermissionAdapterFactory.java,v 1.5 2005-04-26 17:59:09 copene Exp $
 * @author ghuang  $Header: /share/content/cvsroot/security/api/src/gov/nih/nci/security/authorization/jaas/PermissionAdapterFactory.java,v 1.5 2005-04-26 17:59:09 copene Exp $ Revision 1.1  2004/12/06 17:46:01  hustedb
 * @author ghuang  $Header: /share/content/cvsroot/security/api/src/gov/nih/nci/security/authorization/jaas/PermissionAdapterFactory.java,v 1.5 2005-04-26 17:59:09 copene Exp $ moving code to api dir
 * @author ghuang  $Header: /share/content/cvsroot/security/api/src/gov/nih/nci/security/authorization/jaas/PermissionAdapterFactory.java,v 1.5 2005-04-26 17:59:09 copene Exp $
 * @author ghuang  $Header: /share/content/cvsroot/security/api/src/gov/nih/nci/security/authorization/jaas/PermissionAdapterFactory.java,v 1.5 2005-04-26 17:59:09 copene Exp $ Revision 1.1  2004/12/03 19:05:51  hustedb
 * @author ghuang  $Header: /share/content/cvsroot/security/api/src/gov/nih/nci/security/authorization/jaas/PermissionAdapterFactory.java,v 1.5 2005-04-26 17:59:09 copene Exp $ initial release
 * @author ghuang  $Header: /share/content/cvsroot/security/api/src/gov/nih/nci/security/authorization/jaas/PermissionAdapterFactory.java,v 1.5 2005-04-26 17:59:09 copene Exp $
 * @version 1.0
 * @created 03-Dec-2004 1:17:50 AM
 */
public class PermissionAdapterFactory {

	protected PermissionAdapter _adapter;
	protected boolean _bOK = false;
	protected boolean _bFirst = true;
	private static PermissionAdapterFactory _instance;



	public void finalize() throws Throwable {

	}

	public PermissionAdapterFactory(){

	}

	public static PermissionAdapterFactory getInstance(){
		return null;
	}

	public static PermissionAdapter getAdapter(){
		return null;
	}

	protected PermissionAdapter getHandlerInternal(){
		return null;
	}

	public boolean prepare(){
		return false;
	}

	public PermissionAdapter instantiateAdapter(){
		return null;
	}

}
