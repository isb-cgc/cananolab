package gov.nih.nci.cananolab.system.applicationservice;


import gov.nih.nci.cananolab.system.query.SDKQuery;
import gov.nih.nci.cananolab.system.query.SDKQueryResult;
import java.util.List;

public interface WritableApplicationService extends ApplicationService
{
	public SDKQueryResult executeQuery(SDKQuery query) throws ApplicationException;
	
	public List<SDKQueryResult> executeBatchQuery(List<SDKQuery> batchQuery) throws ApplicationException;
}