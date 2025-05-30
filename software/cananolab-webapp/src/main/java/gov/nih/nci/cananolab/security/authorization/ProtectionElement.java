/*L
 *  Copyright Ekagra Software Technologies Ltd.
 *  Copyright SAIC, SAIC-Frederick
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/common-security-module/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.security.authorization;

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


import java.io.Serializable;
import java.util.Date;

import org.apache.commons.lang.builder.EqualsBuilder;
import org.apache.commons.lang.builder.HashCodeBuilder;
import org.apache.commons.lang.builder.ToStringBuilder;





/**
 * A ProtectionElement is a any resource that is a candidate for to be protected.
 * This way the access to different part of the data can be restricted.
 * @version 1.0
 * created 03-Dec-2004 1:17:50 AM
 */
public class ProtectionElement implements Comparable, Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 7057784494069084156L;
	/**
	 * It is the unique id by which it is identified in an application.
	 */
	private Long protectionElementId;
	/**
	 * It is the name of the protection element
	 */
	private String protectionElementName;
	/**
	 * It is the attribute of the object which is to be protected. It along with the
	 * attribute forms the unique key which can identify the protection element
	 */
	private String objectId;
	/**
	 * A collection of protection groups that this protection element belongs to.
	 */
	private java.util.Set protectionGroups;
	/**
	 * It is the attribute of the object which is to be protected. It along with the
	 * object id forms the unique key which can identify the protection element
	 */
	private String attribute;
	/**
	 * Stores the values in case the protectio element is used for the purpose of Instance Level Security. 
	 * It is the value of the attribute of the class name stored as the object id of the PE.
	 */
	private String value;

	/**
	 * A brief descrition of the protection element
	 */
	private String protectionElementDescription;
	/**
	 * A type of the protection element
	 */
	private String protectionElementType;	
	/**
	 * The date when the data for the protection element was updated
	 */
	private Date updateDate;
	/**
	 * The application to which the protection element belongs
	 */
	private Application application;
	/**
	 * The user which owns the protection element. It will be populated only if the
	 * protection element was created at run time by the user
	 */
	private java.util.Set owners;

	public ProtectionElement(){

	}

	/**
	 * 
	 * @exception Throwable
	 */
	public void finalize()
	  throws Throwable {

	}

	/**
	 * The application to which the protection element belongs
	 */
	public Application getApplication(){
		return application;
	}

	/**
	 * It is the attribute of the object which is to be protected. It along with the
	 * object id forms the unique key which can identify the protection element
	 */
	public String getAttribute(){
		return attribute;
	}

	/**
	 * It is the attribute of the object which is to be protected. It along with the
	 * attribute forms the unique key which can identify the protection element
	 */
	public String getObjectId(){
		return objectId;
	}

	/**
	 * The user which owns the protection element. It will be populated only if the
	 * protection element was created at run time by the user
	 */
	public java.util.Set getOwners(){
		return owners;
	}

	/**
	 * A brief descrition of the protection element
	 */
	public String getProtectionElementDescription(){
		return protectionElementDescription;
	}

	/**
	 * It is the unique id by which it is identified in an application.
	 */
	public Long getProtectionElementId(){
		return protectionElementId;
	}

	/**
	 * It is the name of the protection element
	 */
	public String getProtectionElementName(){
		return protectionElementName;
	}

	/**
	 * It is the type of the protection element
	 */
	public String getProtectionElementType()
	{
		return protectionElementType;
	}
	
	/**
	 * A collection of protection groups that this protection element belongs to.
	 */
	public java.util.Set getProtectionGroups(){
		return protectionGroups;
	}

	/**
	 * The date when the data for the protection element was updated
	 */
	public Date getUpdateDate(){
		return updateDate;
	}

	/**
	 * The application to which the protection element belongs
	 * @param newVal
	 * 
	 */
	public void setApplication(Application newVal){
		application = newVal;
	}

	/**
	 * It is the attribute of the object which is to be protected. It along with the
	 * object id forms the unique key which can identify the protection element
	 * @param newVal
	 * 
	 */
	public void setAttribute(String newVal){
		attribute = newVal;
	}

	/**
	 * It is the attribute of the object which is to be protected. It along with the
	 * attribute forms the unique key which can identify the protection element
	 * @param newVal
	 * 
	 */
	public void setObjectId(String newVal){
		objectId = newVal;
	}

	/**
	 * The user which owns the protection element. It will be populated only if the
	 * protection element was created at run time by the user
	 * @param newVal
	 * 
	 */
	public void setOwners(java.util.Set newVal){
		owners = newVal;
	}

	/**
	 * A brief descrition of the protection element
	 * @param newVal
	 * 
	 */
	public void setProtectionElementDescription(String newVal){
		protectionElementDescription = newVal;
	}

	/**
	 * A type of the protection element
	 * @param newVal the new value for the type
	 * 
	 */
	public void setProtectionElementType(String newVal){
		protectionElementType = newVal;
	}
	/**
	 * It is the unique id by which it is identified in an application.
	 * @param newVal
	 * 
	 */
	public void setProtectionElementId(Long newVal){
		protectionElementId = newVal;
	}

	/**
	 * It is the name of the protection element
	 * @param newVal
	 * 
	 */
	public void setProtectionElementName(String newVal){
		protectionElementName = newVal;
	}

	/**
	 * A collection of protection groups that this protection element belongs to.
	 * @param newVal
	 * 
	 */
	public void setProtectionGroups(java.util.Set newVal){
		protectionGroups = newVal;
	}

	/**
	 * The date when the data for the protection element was updated
	 * @param newVal
	 * 
	 */
	public void setUpdateDate(Date newVal){
		updateDate = newVal;
	}

	/**
	 * @param protectionGroups    protectionGroups
	 * 
	 */
	public void assignToGroups(ProtectionGroup[] protectionGroups){

	}
	
	
	public int compareTo(Object object) {

		if(object instanceof ProtectionElement){
			ProtectionElement obj = (ProtectionElement) object;	
			return this.getProtectionElementName().compareToIgnoreCase(obj.getProtectionElementName()); 
		}
		return 0;
	}

	
	public String getValue()
	{
		return value;
	}

	
	public void setValue(String value)
	{
		this.value = value;
	}


	
	public String toString() {
        return new ToStringBuilder(this)
        	.append("protectionElementId", protectionElementId)
            .append("protectionElementName", protectionElementName)
            .append("protectionElementType", protectionElementType)
            .append("attribute", attribute)
            .append("value", value)            
            .append("updateDate", updateDate.toString())            
            .toString();
	}
	
	public boolean equals(Object other) {
		if (this == other)
			return true;
		if ((other == null) || (other.getClass() != this.getClass()))
			return false;
		ProtectionElement castOther = (ProtectionElement) other;
		return new EqualsBuilder()
			.append(this.getProtectionElementId(),castOther.getProtectionElementId())
			.append(this.getProtectionElementName(),castOther.getProtectionElementName())
			.append(this.getProtectionElementType(),castOther.getProtectionElementType())
			.isEquals();
	}

	public int hashCode() {
		return new HashCodeBuilder().append(this.protectionElementId)
				.append(this.protectionElementName)
				.append(this.protectionElementType)
				.append(this.attribute)
				.append(this.value)
				.toHashCode();
	}

	

}
