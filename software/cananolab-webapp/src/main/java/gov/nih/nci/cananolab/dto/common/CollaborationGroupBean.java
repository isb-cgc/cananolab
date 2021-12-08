/*L
 *  Copyright Leidos
 *  Copyright Leidos Biomedical
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/cananolab/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.dto.common;

import gov.nih.nci.cananolab.security.AccessControlInfo;
import gov.nih.nci.cananolab.security.authorization.Group;
import gov.nih.nci.cananolab.security.enums.AccessTypeEnum;



public class CollaborationGroupBean extends SecuredDataBean
{
	private String id;
	private String name;
	private String originalName;
	private String description;
	private String ownerName;

	public CollaborationGroupBean() {
		for (AccessControlInfo access : this.getUserAccesses()) {
			access.setAccessType(AccessTypeEnum.USER.toString());
		}
	}

	//	public String getDescriptionDisplayName() {
	//		return StringUtils.escapeXmlButPreserveLineBreaks(description);
	//	}

	public CollaborationGroupBean(Group group) {
		this.name = group.getGroupName();
		this.originalName = group.getGroupName();
		this.description = group.getGroupDesc();
		this.id = group.getId().toString();
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

    public String getOriginalName()
    {
        return originalName;
    }

    public void setOriginalName( String originalName )
    {
        this.originalName = originalName;
    }

    public void addUserAccess( AccessControlInfo userAccess)
	{
		boolean found = false;
		for(int i = 0 ; i < this.getUserAccesses().size() ; i++)
		{
			if (this.getUserAccesses().get(i).getRecipient().equalsIgnoreCase(userAccess.getRecipient()))
			{
				found = true;
				break;
			}
		}
		if (!found)
			this.getUserAccesses().add(userAccess);
	}

	public void removeUserAccess(AccessControlInfo userAccess)
	{
		int i = 0;
		for (AccessControlInfo access : this.getUserAccesses())
		{
			if (access.getRecipient().equals(userAccess.getRecipient()))
			{
				this.getUserAccesses().remove(i);
				break;
			}
			i++;
		}
	}

	public String getOwnerName() {
		return ownerName;
	}

	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}


    @Override
    public String toString()
    {
        return "{\"CollaborationGroupBean\":\n"
                + super.toString()
                + ",                         \"id\":\"" + id + "\"\n"
                + ",                         \"name\":\"" + name + "\"\n"
                + ",                         \"originalName\":\"" + originalName + "\"\n"
                + ",                         \"description\":\"" + description + "\"\n"
                + ",                         \"ownerName\":\"" + ownerName + "\"\n"
                + ",                         \"createdBy\":\"" + createdBy + "\"\n"
                + "}";
    }
}
