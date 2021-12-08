/*L
 *  Copyright Ekagra Software Technologies Ltd.
 *  Copyright SAIC, SAIC-Frederick
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/common-security-module/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.security.utils;


import org.apache.commons.configuration.DataConfiguration;



public final class StringEncrypter {

	private static Encryption encryption = null;
	public static final StringEncrypter instance = new StringEncrypter();
	
	private StringEncrypter() {
		this("AES_ENCRYPTION");	
	}
	
	private StringEncrypter(String encryptionScheme) {
		try
		{
	 	if(encryptionScheme != null && encryptionScheme.equals("DES_ENCRYPTION") )
	 		encryption = new DESEncryption();
	 	else
	 	{	
	 		DataConfiguration config = null; 
	 		try {
				config = ConfigurationHelper.getConfiguration();
			} catch (Exception e){
	 			e.printStackTrace();
			}
	 		encryption = new AESEncryption(config.getString("AES_ENCRYPTION_KEY"), Boolean.parseBoolean(config.getString("MD5_HASH_KEY")));
	 	}
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}


	public synchronized String encrypt(String unencryptedString) throws  Exception 
	{
		return encryption.encrypt(unencryptedString);
	}

	public synchronized String decrypt(String encryptedString) throws  Exception 
	{
		return encryption.decrypt(encryptedString);
	}

}
