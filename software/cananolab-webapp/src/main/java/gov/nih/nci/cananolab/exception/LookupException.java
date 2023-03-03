/*L
 *  Copyright Leidos
 *  Copyright Leidos Biomedical
 *  Copyright 2023 Institute for Systems Biology
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/cananolab/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.exception;

/**
 * @author pansu
 * 
 */
public class LookupException extends BaseException {

	private static final long serialVersionUID = 1234567890L;

	public LookupException() {
		super("Exception building lookups");
	}

	public LookupException(String message) {
		super(message);
	}

	public LookupException(String message, Throwable cause) {
		super(message, cause);
	}

	public LookupException(Throwable cause) {
		super(cause);
	}
}
