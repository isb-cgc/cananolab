/*
Copyright 2023, Institute for Systems Biology

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 */

package gov.nih.nci.cananolab.exception;

/**
 * @author WJRL
 * We see a case where an invalid input provided to the rest interface just threw a generic "Exception"
 * which messes up throws statments. Make this the specific exception to throw in those cases
 */
public class UserInputException extends BaseException {

	private static final long serialVersionUID = 1234567890L;

	public UserInputException() {
		super("Invalid user input");
	}

	public UserInputException(String message) {
		super(message);
	}

	public UserInputException(String message, Throwable cause) {
		super(message, cause);
	}

	public UserInputException(Throwable cause) {
		super(cause);
	}
}
