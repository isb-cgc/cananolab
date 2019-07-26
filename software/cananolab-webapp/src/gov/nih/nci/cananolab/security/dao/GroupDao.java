package gov.nih.nci.cananolab.security.dao;

import java.util.List;

import gov.nih.nci.cananolab.security.Group;

public interface GroupDao
{
	Group getGroupByName(String groupName);
	
	Group getGroupById(Long groupId);
	
	int insertGroup(Group newGroup);
	
	int inserGroupMember(Long groupId, String userName);
	
	int updateGroup(Long groupId, String groupDesc);

    int updateGroupWithName(Long groupId, String groupDesc, String groupName);
	
	List<String> getGroupMembers(Long groupId);
	
	int removeGroupMembers(Long groupId);
	
	int removeGroupMember(Long groupId, String userName);
	
	int deleteGroup(Long groupId);
	
	List<Group> getGroupsWithMember(String username);
	
	List<Group> getAllGroups();

}
