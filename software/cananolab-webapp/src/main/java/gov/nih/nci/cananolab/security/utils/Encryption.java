/*L
 *  Copyright Ekagra Software Technologies Ltd.
 *  Copyright SAIC, SAIC-Frederick
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/common-security-module/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.security.utils;



public interface Encryption {

	public abstract String encrypt(String unencryptedString)
			throws Exception;

	public abstract String decrypt(String encryptedString)
			throws Exception;

}