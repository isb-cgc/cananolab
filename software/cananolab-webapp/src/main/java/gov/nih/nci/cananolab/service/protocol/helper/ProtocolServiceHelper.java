/*L
 *  Copyright Leidos
 *  Copyright Leidos Biomedical
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/cananolab/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.service.protocol.helper;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.common.Keyword;
import gov.nih.nci.cananolab.domain.common.Protocol;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.security.dao.AclDao;
import gov.nih.nci.cananolab.security.enums.CaNanoRoleEnum;
import gov.nih.nci.cananolab.security.enums.SecureClassesEnum;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.system.applicationservice.CaNanoLabApplicationService;
import gov.nih.nci.cananolab.util.StringUtils;
import gov.nih.nci.cananolab.util.TextMatchMode;
import gov.nih.nci.cananolab.system.applicationservice.client.ApplicationServiceProvider;
import gov.nih.nci.cananolab.system.query.hibernate.HQLCriteria;
import java.util.ArrayList;
import java.util.List;
import java.util.SortedSet;
import java.util.TreeSet;

import net.sf.ehcache.hibernate.HibernateUtil;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.FetchMode;
import org.hibernate.criterion.CriteriaSpecification;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Expression;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Property;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.*;

/**
 * This class includes methods involved in searching protocols that can be used
 * in both local and remote searches
 *
 * @author pansu
 *
 */
@Component("protocolServiceHelper")
public class ProtocolServiceHelper
{
	private static Logger logger = LogManager.getLogger(ProtocolServiceHelper.class);

	@Autowired
	private SpringSecurityAclService springSecurityAclService;

	@Autowired
	private AclDao aclDao;

	public List<Protocol> findProtocolsBy(String protocolType, String protocolName, String protocolAbbreviation, String fileTitle, String doi)
			throws Exception {
		List<Protocol> protocols = new ArrayList<Protocol>();
		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
		DetachedCriteria crit = DetachedCriteria.forClass(Protocol.class);
		crit.createAlias("file", "file", CriteriaSpecification.LEFT_JOIN);
		crit.setFetchMode("file.keywordCollection", FetchMode.JOIN);
		if (!StringUtils.isEmpty(protocolType)) {
			// case insensitive
			crit.add(Restrictions.ilike("type", protocolType, MatchMode.EXACT));
		}
		if (!StringUtils.isEmpty(protocolName)) {
			TextMatchMode protocolNameMatchMode = new TextMatchMode(protocolName);
			crit.add(Restrictions.ilike("name",
					protocolNameMatchMode.getUpdatedText(),
					protocolNameMatchMode.getMatchMode()));
		}
		if (!StringUtils.isEmpty(protocolAbbreviation)) {
			TextMatchMode protocolAbbreviationMatchMode = new TextMatchMode(protocolAbbreviation);
			crit.add(Restrictions.ilike("abbreviation",
					protocolAbbreviationMatchMode.getUpdatedText(),
					protocolAbbreviationMatchMode.getMatchMode()));
		}
		if (!StringUtils.isEmpty(fileTitle)) {
			TextMatchMode titleMatchMode = new TextMatchMode(fileTitle);
			crit.add(Restrictions.ilike("file.title",
					titleMatchMode.getUpdatedText(),
					titleMatchMode.getMatchMode()));
		}
		if (!StringUtils.isEmpty(doi)) {
			TextMatchMode doiMatchMode = new TextMatchMode(doi);
			crit.add(Restrictions.ilike("doi",
					doiMatchMode.getUpdatedText(),
					doiMatchMode.getMatchMode()));
		}
		crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
		List results = appService.query(crit);
		for (int i=0; i< results.size(); i++) {
			Protocol protocol = (Protocol) results.get(i);
			if (springSecurityAclService.currentUserHasReadPermission(protocol.getId(), SecureClassesEnum.PROTOCOL.getClazz()) ||
					springSecurityAclService.currentUserHasWritePermission(protocol.getId(), SecureClassesEnum.PROTOCOL.getClazz())) {
				protocols.add(protocol);
			} else {
				logger.debug("User doesn't have access to protocol with id " + protocol.getId());
			}
		}
		return protocols;
	}

	// OLD VERSION
	public List<Protocol> findProtocolsByType(String protocolType) throws Exception{
		if (StringUtils.isEmpty(protocolType) ) {
			return null;
		}
		List<Protocol> protocols = new ArrayList<Protocol>();
		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();

		DetachedCriteria crit = DetachedCriteria.forClass(Protocol.class)
				.add(Property.forName("type").eq(protocolType).ignoreCase());

		crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
		List results = appService.query(crit);
		for(int i=0;i< results.size();i++){
			Protocol protocol = (Protocol) results.get(i);
			if (springSecurityAclService.currentUserHasReadPermission(protocol.getId(), SecureClassesEnum.PROTOCOL.getClazz()) ||
					springSecurityAclService.currentUserHasWritePermission(protocol.getId(), SecureClassesEnum.PROTOCOL.getClazz())) {
				protocols.add(protocol);
			} else {
				logger.debug("User doesn't have access to protocol with id " + protocol.getId());
			}
		}
		return protocols;
	}



	/* LAW: a reworked query (untested) for the switch over to JPA's Criteria API
	public List<Protocol> findProtocolsByType(String protocolType) throws Exception{
		System.out.println("In findProtocolsByType");
		if (StringUtils.isEmpty(protocolType) ) {
			return null;
		}
		List<Protocol> protocols = new ArrayList<>();

		EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("canano-persistence-unit");
		EntityManager entityManager = entityManagerFactory.createEntityManager();
		CriteriaBuilder cb = entityManager.getCriteriaBuilder();
		CriteriaQuery<Protocol> query = cb.createQuery(Protocol.class);
		Root<Protocol> root = query.from(Protocol.class);
		// LAW: cb.lower() makes the attribute and search values effectively case-insensitive prior to comparison--
		// a workaround for ignoreCase(), which existed in Hibernate Criteria API but has no JPA equivalent
		query.select(root).where(cb.equal(cb.lower(root.get("type")), cb.lower(cb.literal(protocolType))));
		TypedQuery<Protocol> typedQuery = entityManager.createQuery(query);
		List<Protocol> results = typedQuery.getResultList();

		System.out.println("Results: " + results);

		for(int i = 0; i < results.size(); i++){
			Protocol protocol = results.get(i);
			if (springSecurityAclService.currentUserHasReadPermission(protocol.getId(), SecureClassesEnum.PROTOCOL.getClazz()) ||
					springSecurityAclService.currentUserHasWritePermission(protocol.getId(), SecureClassesEnum.PROTOCOL.getClazz())) {
				protocols.add(protocol);
			} else {
				logger.debug("User doesn't have access to protocol with id " + protocol.getId());
			}
		}
		return protocols;
	}
	 */

	public Protocol findProtocolBy(String protocolType, String protocolName, String protocolVersion) throws Exception {
		// protocol type and protocol name are required
		if (StringUtils.isEmpty(protocolType) && StringUtils.isEmpty(protocolName)) {
			return null;
		}
		Protocol protocol = null;
		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
		DetachedCriteria crit = DetachedCriteria.forClass(Protocol.class)
				.add(Property.forName("type").eq(protocolType).ignoreCase())
				.add(Property.forName("name").eq(protocolName).ignoreCase());
		if (!StringUtils.isEmpty(protocolVersion)) {
			crit.add(Property.forName("version").eq(protocolVersion).ignoreCase());
		}
		crit.setFetchMode("file", FetchMode.JOIN);
		crit.setFetchMode("file.keywordCollection", FetchMode.JOIN);
		crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
		List results = appService.query(crit);
		if (results.isEmpty()) {
			return null;
		}
		if (results.size() > 1) {
			return null;
		}
		protocol = (Protocol) results.get(0);

		if (springSecurityAclService.currentUserHasReadPermission(protocol.getId(), SecureClassesEnum.PROTOCOL.getClazz()) ||
				springSecurityAclService.currentUserHasWritePermission(protocol.getId(), SecureClassesEnum.PROTOCOL.getClazz())) {
			return protocol;
		} else {
			throw new NoAccessException();
		}
	}

	public File findFileByProtocolId(String protocolId) throws Exception
	{
		if (!springSecurityAclService.currentUserHasReadPermission(Long.valueOf(protocolId), SecureClassesEnum.PROTOCOL.getClazz()) &&
				!springSecurityAclService.currentUserHasWritePermission(Long.valueOf(protocolId), SecureClassesEnum.PROTOCOL.getClazz())) {
			throw new NoAccessException("User has no access to the protocol " + protocolId);
		}
		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
		HQLCriteria crit = new HQLCriteria("select aProtocol.file from gov.nih.nci.cananolab.domain.common.Protocol aProtocol where aProtocol.id = "
				+ protocolId);
		List result = appService.query(crit);
		File file = null;
		if (!result.isEmpty()) {
			file = (File) result.get(0);
		}
		return file;
	}

	public int getNumberOfPublicProtocols() throws Exception {
		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
		HQLCriteria crit = new HQLCriteria("select id from gov.nih.nci.cananolab.domain.common.Protocol");
		List results = appService.query(crit);
		int cnt = 0;
		for (int i = 0; i< results.size();i++){
			Long id = Long.valueOf(results.get(i).toString());
			if (springSecurityAclService.checkObjectPublic(id, SecureClassesEnum.PROTOCOL.getClazz()))
				cnt++;
		}
		return cnt;
	}

	public int getNumberOfPublicProtocolsForJob() throws Exception {
		List<Long> publicData = aclDao.getIdsOfClassForSid(SecureClassesEnum.PROTOCOL.getClazz().getName(), CaNanoRoleEnum.ROLE_ANONYMOUS.toString());
		return (publicData != null) ? publicData.size() : 0;
	}

	public Protocol findProtocolById(String protocolId) throws Exception {
		if (!springSecurityAclService.currentUserHasReadPermission(Long.valueOf(protocolId), SecureClassesEnum.PROTOCOL.getClazz()) &&
				!springSecurityAclService.currentUserHasWritePermission(Long.valueOf(protocolId), SecureClassesEnum.PROTOCOL.getClazz())) {
			throw new NoAccessException("User has no access to the protocol " + protocolId);
		}
		Protocol protocol = null;

		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
		DetachedCriteria crit = DetachedCriteria.forClass(Protocol.class).add(Property.forName("id").eq(Long.valueOf(protocolId)));
		crit.setFetchMode("file", FetchMode.JOIN);
		crit.setFetchMode("file.keywordCollection", FetchMode.JOIN);
		List result = appService.query(crit);
		if (!result.isEmpty()) {
			protocol = (Protocol) result.get(0);
		}
		return protocol;
	}

	/* LAW: a reworked query (untested) for the switch over to JPA's Criteria API
	public Protocol findProtocolById(String protocolId) throws Exception {
		if (!springSecurityAclService.currentUserHasReadPermission(Long.valueOf(protocolId), SecureClassesEnum.PROTOCOL.getClazz()) &&
				!springSecurityAclService.currentUserHasWritePermission(Long.valueOf(protocolId), SecureClassesEnum.PROTOCOL.getClazz())) {
			throw new NoAccessException("User has no access to the protocol " + protocolId);
		}

		EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("canano-persistence-unit");
		EntityManager entityManager = entityManagerFactory.createEntityManager();
		CriteriaBuilder cb = entityManager.getCriteriaBuilder();
		CriteriaQuery<Protocol> query = cb.createQuery(Protocol.class);
		query.from(Protocol.class);

		//List<Protocol> results = entityManager.createQuery(query).getResultList();

		//System.out.println("results: " + results);

		Root<Protocol> protocolRoot = query.from(Protocol.class);
		Join<Protocol, File> protocolFile = protocolRoot.join("file", JoinType.LEFT);
		Join<File, Keyword> fileKeyword = protocolFile.join("keywordCollection", JoinType.LEFT);

		query.multiselect(protocolRoot, protocolFile, fileKeyword).where(cb.equal(protocolRoot.get("id"), Long.valueOf(protocolId)));

		Protocol protocol = entityManager.createQuery(query).getResultStream().findFirst().orElse(null);

		//Protocol protocol = results.get(0);

		return protocol;
	}
	 */

	public SortedSet<String> getProtocolNamesBy(String protocolType) throws Exception
	{
		SortedSet<String> protocolNames = new TreeSet<String>();
		List<Protocol> protocols = this.findProtocolsBy(protocolType, null, null, null, null);
		for (Protocol protocol : protocols) {
			protocolNames.add(protocol.getName());
		}
		return protocolNames;
	}

	public SortedSet<String> getProtocolVersionsBy(String protocolType,
												   String protocolName) throws Exception {
		SortedSet<String> protocolVersions = new TreeSet<String>();
		List<Protocol> protocols = this.findProtocolsBy(protocolType, protocolName, null, null, null);
		for (Protocol protocol : protocols) {
			protocolVersions.add(protocol.getVersion());
		}
		return protocolVersions;
	}

	public List<String> findProtocolIdsByOwner(String currentOwner) throws Exception
	{
		List<String> protocolIds = new ArrayList<String>();
		DetachedCriteria crit = DetachedCriteria.forClass(Protocol.class)
				.setProjection(Projections.projectionList().add(Projections.property("id")));
		Criterion crit1 = Restrictions.eq("createdBy", currentOwner);
		// in case of copy createdBy is like lijowskim:COPY
		Criterion crit2 = Restrictions.like("createdBy", currentOwner + ":", MatchMode.START);
		crit.add(Expression.or(crit1, crit2));

		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
		List results = appService.query(crit);
		for(int i = 0; i < results.size(); i++){
			String protocolId = results.get(i).toString();
			if (springSecurityAclService.currentUserHasReadPermission(Long.valueOf(protocolId), SecureClassesEnum.PROTOCOL.getClazz()) ||
					springSecurityAclService.currentUserHasWritePermission(Long.valueOf(protocolId), SecureClassesEnum.PROTOCOL.getClazz())) {
				protocolIds.add(protocolId);
			} else {
				logger.debug("User doesn't have access to protocol of ID: " + protocolId);
				System.out.println("User doesn't have access to protocol of ID: " + protocolId);
			}
		}
		return protocolIds;
	}


	public List<String> getAllProtocols() throws Exception {
		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
		HQLCriteria crit = new HQLCriteria("select id from gov.nih.nci.cananolab.domain.common.Protocol");
		List results = appService.query(crit);
		List<String> publicIds = new ArrayList<String>();
		for(int i = 0; i< results.size();i++){
			String id = (String) results.get(i).toString();
			publicIds.add(id);
		}
		return publicIds;
	}
}
