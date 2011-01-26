/* set the submit point of contact form */
function clearPointOfContact(parent) {
	// go to server and clean form bean
	POCManager.resetThePointOfContact(parent, populatePointOfContact);
	hide("deletePointOfContact");
}

function setThePointOfContact(id, isPrimary, parent) {
	// add a timeout to allow correct refresh order
	window.setTimeout("fillPointOfContact(" + id + ", " + isPrimary + ", "
			+ parent + ")", 100);
	disableOuterButtons();
}

function fillPointOfContact(id, isPrimary, parent) {
	POCManager.getPointOfContactById(id, isPrimary, parent,
			populatePointOfContact);
	// openSubmissionForm("PointOfContact");
	show("addPointOfContact");
	show("newPointOfContact");
}

function openOnePointOfContact(id, isPrimary) {
	setThePointOfContact(id, isPrimary);
	window.setTimeout("show('addPointOfContact')", 200);
}

function populatePointOfContact(poc) {
	if (poc != null) {
		dwr.util.setValues(poc);
		if (poc.domain.id != null && poc.primaryStatus == false) {
			show("deletePointOfContact");
		} else {
			hide("deletePointOfContact");
		}
		if (poc.primaryStatus) {
			show("primaryTitle");
			hide("secondaryTitle");
		} else {
			hide("primaryTitle");
			show("secondaryTitle");
		}
	} else {
		sessionTimeout();
	}
}
function addPointOfContact(actionName) {
	enableOuterButtons();
	submitAction(document.forms[0], actionName, "savePointOfContact", 3);
}
function removePointOfContact(actionName) {
	submitAction(document.forms[0], actionName, "removePointOfContact", 3);
}
function updateOrganizationInfo() {
	var orgName = dwr.util.getValue("domain.organization.name");
	POCManager.getOrganizationByName(orgName, populateOrganization);
}
function populateOrganization(organization) {
	if (organization != null) {
		dwr.util.setValue("domain.organization.streetAddress1",
				organization.streetAddress1);
		dwr.util.setValue("domain.organization.streetAddress2",
				organization.streetAddress2);
		dwr.util.setValue("domain.organization.city", organization.city);
		dwr.util.setValue("domain.organization.state", organization.state);
		dwr.util.setValue("domain.organization.postalCode",
				organization.postalCode);
		dwr.util.setValue("domain.organization.country", organization.country);
	} else {
		dwr.util.setValue("domain.organization.streetAddress1", "");
		dwr.util.setValue("domain.organization.streetAddress2", "");
		dwr.util.setValue("domain.organization.city", "");
		dwr.util.setValue("domain.organization.state", "");
		dwr.util.setValue("domain.organization.postalCode", "");
		dwr.util.setValue("domain.organization.country", "");
	}
}

function updatePersonInfo() {
	var firstName = dwr.util.getValue("domain.firstName");
	var lastName = dwr.util.getValue("domain.lastName");
	var orgName = dwr.util.getValue("domain.organization.name");
	// only load if either first name or last name and orgName is not null
	if ((firstName.length > 0 || lastName.length > 0) && orgName.length > 0) {
		POCManager.getPointOfContactByNameAndOrg(firstName, lastName, orgName,
				function(data) {
					if (data != null) {
						// load phone, email information
				dwr.util.setValue("domain.phone", data.domain.phone);
				dwr.util.setValue("domain.email", data.domain.email);
			}
		});
	}
}
/* end of submit point of contact form */
