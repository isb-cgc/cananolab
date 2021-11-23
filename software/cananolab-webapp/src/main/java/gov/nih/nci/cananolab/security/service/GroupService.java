package gov.nih.nci.cananolab.security.service;

import java.util.List;

import gov.nih.nci.cananolab.security.authorization.Group;

public interface GroupService 
{
	Group getGroupByName(String groupName);
	
	Group getGroupById(Long groupId);
	
	Long createNewGroup(Group newGroup);
	
	int addGroupMember(Long groupId, String userName);
	
	int updateGroup(Long groupId, String groupDesc);

	int updateGroupWithName(Long groupId, String groupDesc, String groupName);

	List<String> getGroupMembers(Long groupId);
	
	int removeGroupMembers(Long groupId);
	
	int removeGroupMember(Long groupId, String userName);
	
	int removeGroup(Long groupId);
	
	List<Group> getGroupsAccessibleToUser(String userName);
	
	List<Group> getAllGroups();

}
