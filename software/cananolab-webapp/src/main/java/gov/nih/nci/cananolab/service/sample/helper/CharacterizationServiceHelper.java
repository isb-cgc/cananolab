/*L
 *  Copyright Leidos
 *  Copyright Leidos Biomedical
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/cananolab/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.service.sample.helper;

import gov.nih.nci.cananolab.domain.common.ExperimentConfig;
import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.common.Finding;
import gov.nih.nci.cananolab.domain.common.Protocol;
import gov.nih.nci.cananolab.domain.common.Datum;
import gov.nih.nci.cananolab.domain.common.Condition;
import gov.nih.nci.cananolab.domain.common.Keyword;
import gov.nih.nci.cananolab.domain.common.PointOfContact;
import gov.nih.nci.cananolab.domain.common.Organization;
import gov.nih.nci.cananolab.domain.common.Technique;
import gov.nih.nci.cananolab.domain.common.Instrument;
import gov.nih.nci.cananolab.domain.particle.Characterization;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.security.dao.AclDao;
import gov.nih.nci.cananolab.security.enums.CaNanoRoleEnum;
import gov.nih.nci.cananolab.security.enums.SecureClassesEnum;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.system.applicationservice.CaNanoLabApplicationService;
import gov.nih.nci.cananolab.system.applicationservice.TransactionInsertion;
import gov.nih.nci.cananolab.util.ClassUtils;
import gov.nih.nci.cananolab.system.applicationservice.client.ApplicationServiceProvider;
import gov.nih.nci.cananolab.system.query.hibernate.HQLCriteria;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.FetchMode;
import org.hibernate.criterion.CriteriaSpecification;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Property;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * Service methods involving characterizations
 *
 * @author tanq, pansu
 */
@Component("characterizationServiceHelper")
public class CharacterizationServiceHelper
{
	private static Logger logger = LogManager.getLogger(CharacterizationServiceHelper.class);
	
	@Autowired
	private SpringSecurityAclService springSecurityAclService;

	@Autowired
	private AclDao aclDao;
	
	public Protocol findProtocolByCharacterizationId(String characterizationId) throws Exception
	{
		if (!springSecurityAclService.currentUserHasReadPermission(Long.valueOf(characterizationId), SecureClassesEnum.CHAR.getClazz()) &&
			!springSecurityAclService.currentUserHasWritePermission(Long.valueOf(characterizationId), SecureClassesEnum.CHAR.getClazz())) {
			throw new NoAccessException("User has no access to the characterization " + characterizationId);
		}
		Protocol protocol = null;
		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
		String hql = "select aChar.protocol from gov.nih.nci.cananolab.domain.particle.Characterization aChar where aChar.id="
				+ characterizationId;
		HQLCriteria crit = new HQLCriteria(hql);
		List results = appService.query(crit);
		for (int i = 0; i < results.size(); i++) {
			protocol = (Protocol) results.get(i);
			if (springSecurityAclService.currentUserHasReadPermission(protocol.getId(), SecureClassesEnum.PROTOCOL.getClazz()) ||
				springSecurityAclService.currentUserHasWritePermission(protocol.getId(), SecureClassesEnum.PROTOCOL.getClazz())) {
				return protocol;
			} else {
				logger.debug("User doesn't have access to the protocol " + protocol.getId());
			}
		}
		return protocol;
	}

	public List<Finding> findFindingsByCharacterizationId(String charId)
			throws Exception {
//		if (!springSecurityAclService.currentUserHasReadPermission(Long.valueOf(charId), SecureClassesEnum.CHAR.getClazz()) &&
//			!springSecurityAclService.currentUserHasWritePermission(Long.valueOf(charId), SecureClassesEnum.CHAR.getClazz())) {
//			new NoAccessException("User has no access to the characterization " + charId);
//		}
			List<Finding> findings = new ArrayList<Finding>();

			CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
			DetachedCriteria crit = DetachedCriteria.forClass(
					Characterization.class).add(
					Property.forName("id").eq(new Long(charId)));
			crit.setFetchMode("findingCollection", FetchMode.JOIN);
			crit.setFetchMode("findingCollection.fileCollection", FetchMode.JOIN);
			crit.setFetchMode("findingCollection.fileCollection.keywordCollection",
					FetchMode.JOIN);
			crit.setFetchMode("findingCollection.datumCollection", FetchMode.JOIN);
			crit.setFetchMode(
					"findingCollection.datumCollection.conditionCollection",
					FetchMode.JOIN);
			List result = appService.query(crit);
			if (!result.isEmpty()) {
				Characterization achar = (Characterization) result.get(0);
				findings.addAll(achar.getFindingCollection());
			}
			return findings;
		}

	public List<Finding> findFindingsByCharacterizationIdLazyLoad(String charId)
			throws Exception {
//		if (!springSecurityAclService.currentUserHasReadPermission(Long.valueOf(charId), SecureClassesEnum.CHAR.getClazz()) &&
//			!springSecurityAclService.currentUserHasWritePermission(Long.valueOf(charId), SecureClassesEnum.CHAR.getClazz())) {
//			new NoAccessException("User has no access to the characterization " + charId);
//		}
		List<Finding> findings = new ArrayList<Finding>();

		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
		DetachedCriteria crit = DetachedCriteria.forClass(
				Characterization.class).add(
				Property.forName("id").eq(new Long(charId)));
		TransactionInsertion<Characterization> lazyLoads = new TransactionInsertion<Characterization>() {
			@Override
			public boolean executeInsideTransaction(Characterization ca) {

				String id;
				Set<Finding> fic = ca.getFindingCollection();
				for (Finding fi : fic) {
					Collection<Datum> dac = fi.getDatumCollection();
					for (Datum da : dac) {
						Set<Condition> coc = da.getConditionCollection();
						for (Condition co : coc) {
							id = co.toString();
						}
					}
					Collection<File> flic = fi.getFileCollection();
					for (File fli : flic) {
						Set<Keyword> fikc = fli.getKeywordCollection();
						for (Keyword kw : fikc) {
							id = kw.toString();
						}
					}
				}
				return true;
			}
		};

		Characterization achar = appService.queryAndProcess(crit, lazyLoads);
		if (achar != null) {
			findings.addAll(achar.getFindingCollection());
		}
		return findings;
	}

	public List<ExperimentConfig> findExperimentConfigsByCharacterizationId(String charId) throws Exception
	{
		if (!springSecurityAclService.currentUserHasReadPermission(Long.valueOf(charId), SecureClassesEnum.CHAR.getClazz()) &&
			!springSecurityAclService.currentUserHasWritePermission(Long.valueOf(charId), SecureClassesEnum.CHAR.getClazz())) {
			throw new NoAccessException("User has no access to the characterization " + charId);
		}
		List<ExperimentConfig> configs = new ArrayList<ExperimentConfig>();
		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
		DetachedCriteria crit = DetachedCriteria.forClass(
				Characterization.class).add(
				Property.forName("id").eq(new Long(charId)));
		crit.setFetchMode("experimentConfigCollection", FetchMode.JOIN);
		crit.setFetchMode("experimentConfigCollection.technique",
				FetchMode.JOIN);
		crit.setFetchMode("experimentConfigCollection.instrumentCollection",
				FetchMode.JOIN);
		List result = appService.query(crit);
		if (!result.isEmpty()) {
			Characterization achar = (Characterization) result.get(0);
			configs.addAll(achar.getExperimentConfigCollection());
		}
		return configs;
	}

	public ExperimentConfig findExperimentConfigById(String sampleId, String id) throws Exception 
	{
		if (!springSecurityAclService.currentUserHasReadPermission(Long.valueOf(sampleId), SecureClassesEnum.SAMPLE.getClazz()) &&
			!springSecurityAclService.currentUserHasWritePermission(Long.valueOf(sampleId), SecureClassesEnum.SAMPLE.getClazz())) {
			throw new NoAccessException("User has no access to the experiment config " + id);
		}
		ExperimentConfig config = null;

		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
		DetachedCriteria crit = DetachedCriteria.forClass(
				ExperimentConfig.class).add(
				Property.forName("id").eq(new Long(id)));
		crit.setFetchMode("technique", FetchMode.JOIN);
		crit.setFetchMode("instrumentCollection", FetchMode.JOIN);
		List result = appService.query(crit);
		if (!result.isEmpty()) {
			config = (ExperimentConfig) result.get(0);
		}
		return config;
	}

	public List<Characterization> findCharacterizationsBySampleId(String sampleId) throws Exception
	{
		List<Characterization> chars = new ArrayList<Characterization>();

		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
		DetachedCriteria crit = DetachedCriteria.forClass(Characterization.class);
		crit.createAlias("sample", "sample");
		crit.add(Property.forName("sample.id").eq(new Long(sampleId)));
		// fully load characterization
		crit.setFetchMode("pointOfContact", FetchMode.JOIN);
		crit.setFetchMode("pointOfContact.organization", FetchMode.JOIN);
		crit.setFetchMode("protocol", FetchMode.JOIN);
		crit.setFetchMode("protocol.file", FetchMode.JOIN);
		crit.setFetchMode("protocol.file.keywordCollection", FetchMode.JOIN);
		crit.setFetchMode("experimentConfigCollection", FetchMode.JOIN);
		crit.setFetchMode("experimentConfigCollection.technique", FetchMode.JOIN);
		crit.setFetchMode("experimentConfigCollection.instrumentCollection", FetchMode.JOIN);
		crit.setFetchMode("findingCollection", FetchMode.JOIN);
		crit.setFetchMode("findingCollection.datumCollection", FetchMode.JOIN);
		crit.setFetchMode("findingCollection.datumCollection.conditionCollection", FetchMode.JOIN);
		crit.setFetchMode("findingCollection.fileCollection", FetchMode.JOIN);
		crit.setFetchMode("findingCollection.fileCollection.keywordCollection", FetchMode.JOIN);
		crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
		List results = appService.query(crit);

		for (int i = 0; i < results.size(); i++) {
			Characterization achar = (Characterization) results.get(i);
			if (springSecurityAclService.currentUserHasReadPermission(achar.getId(), SecureClassesEnum.CHAR.getClazz()) ||
				springSecurityAclService.currentUserHasWritePermission(achar.getId(), SecureClassesEnum.CHAR.getClazz())) {
				checkAssociatedVisibility(achar);
				chars.add(achar);
			} else {
				logger.debug("User doesn't have access ot characterization with id " + achar.getId());
			}
		}
		return chars;
	}

	public List<Characterization> findCharacterizationsBySampleIdLazyLoad(String sampleId) throws Exception
	{
		List<Characterization> chars = new ArrayList<Characterization>();

		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
		DetachedCriteria crit = DetachedCriteria.forClass(Characterization.class);
		crit.createAlias("sample", "sample");
		crit.add(Property.forName("sample.id").eq(new Long(sampleId)));
		crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);

		TransactionInsertion<Characterization> lazyLoads = new TransactionInsertion<Characterization>() {
			@Override
			public boolean executeInsideTransaction(Characterization ca) {

				String id;
				int fcount = 0;
				int count = 0;

				Set<Finding> fic = ca.getFindingCollection();
				for (Finding fi : fic) {
					fcount++;
					Collection<Datum> dac = fi.getDatumCollection();
					for (Datum da : dac) {
						count++;
						Set<Condition> coc = da.getConditionCollection();
						for (Condition co : coc) {
							id = co.toString();
						}
					}
					Collection<File> flic = fi.getFileCollection();
					for (File fli : flic) {
						Set<Keyword> fikc = fli.getKeywordCollection();
						for (Keyword kw : fikc) {
							id = kw.toString();
						}
					}
				}
				Set<ExperimentConfig> ecc = ca.getExperimentConfigCollection();
				if (ecc != null) {
					for (ExperimentConfig ec : ecc) {
						Collection<Instrument> inc = ec.getInstrumentCollection();
						for (Instrument in : inc) {
							id = in.toString();
						}
						Technique tq = ec.getTechnique();
						if (tq != null) {
							id = tq.getType();
						}
					}
				}
				PointOfContact pc = ca.getPointOfContact();
				if (pc != null) {
					Organization org = pc.getOrganization();
					id = org.toString();
				}
				Protocol pro = ca.getProtocol();
				if (pro != null) {
					File fli = pro.getFile();
					if (fli != null) {
						Set<Keyword> fikc = fli.getKeywordCollection();
						for (Keyword kw : fikc) {
							id = kw.toString();
						}
					}
				}
				System.out.println("saw " + fcount + " findings");
				System.out.println("saw " + count + " datum");
				return true;
			}
		};

		List<Characterization> results = appService.queryAndProcessList(crit, lazyLoads);
		for (int i = 0; i < results.size(); i++) {
			Characterization achar = (Characterization) results.get(i);
			if (springSecurityAclService.currentUserHasReadPermission(achar.getId(), SecureClassesEnum.CHAR.getClazz()) ||
					springSecurityAclService.currentUserHasWritePermission(achar.getId(), SecureClassesEnum.CHAR.getClazz())) {
				checkAssociatedVisibility(achar);
				chars.add(achar);
			} else {
				logger.debug("User doesn't have access ot characterization with id " + achar.getId());
			}
		}
		return chars;
	}

	public Characterization findCharacterizationById(String charId) throws Exception
	{
		if (!springSecurityAclService.currentUserHasReadPermission(Long.valueOf(charId), SecureClassesEnum.CHAR.getClazz()) &&
			!springSecurityAclService.currentUserHasWritePermission(Long.valueOf(charId), SecureClassesEnum.CHAR.getClazz())) {
			throw new NoAccessException("User has no access to the characterization " + charId);
		}
		Characterization achar = null;
		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
		DetachedCriteria crit = DetachedCriteria.forClass(Characterization.class).add(Property.forName("id").eq(new Long(charId)));
		// fully load characterization
		crit.setFetchMode("pointOfContact", FetchMode.JOIN);
		crit.setFetchMode("pointOfContact.organization", FetchMode.JOIN);
		crit.setFetchMode("protocol", FetchMode.JOIN);
		crit.setFetchMode("protocol.file", FetchMode.JOIN);
		crit.setFetchMode("protocol.file.keywordCollection", FetchMode.JOIN);
		crit.setFetchMode("experimentConfigCollection", FetchMode.JOIN);
		crit.setFetchMode("experimentConfigCollection.technique", FetchMode.JOIN);
		crit.setFetchMode("experimentConfigCollection.instrumentCollection", FetchMode.JOIN);
		crit.setFetchMode("findingCollection", FetchMode.JOIN);
		crit.setFetchMode("findingCollection.datumCollection", FetchMode.JOIN);
		crit.setFetchMode("findingCollection.datumCollection.conditionCollection", FetchMode.JOIN);
		crit.setFetchMode("findingCollection.fileCollection", FetchMode.JOIN);
		crit.setFetchMode("findingCollection.fileCollection.keywordCollection", FetchMode.JOIN);
		crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);

		List result = appService.query(crit);
		if (!result.isEmpty()) {
			achar = (Characterization) result.get(0);
			checkAssociatedVisibility(achar);
		}
		return achar;
	}

	private void checkAssociatedVisibility(Characterization achar) throws Exception
	{
		if (springSecurityAclService.currentUserHasReadPermission(achar.getId(), SecureClassesEnum.CHAR.getClazz()) ||
			springSecurityAclService.currentUserHasWritePermission(achar.getId(), SecureClassesEnum.CHAR.getClazz())) {
			if (achar.getProtocol() != null) {
				if (!springSecurityAclService.currentUserHasReadPermission(achar.getProtocol().getId(), SecureClassesEnum.PROTOCOL.getClazz()) &&
					!springSecurityAclService.currentUserHasWritePermission(achar.getProtocol().getId(), SecureClassesEnum.PROTOCOL.getClazz())) {
					achar.setProtocol(null);
				}
			}
		}
	}

	public Finding findFindingById(String findingId) throws Exception
	{
		if (!springSecurityAclService.currentUserHasReadPermission(Long.valueOf(findingId), SecureClassesEnum.FINDING.getClazz()) &&
			!springSecurityAclService.currentUserHasWritePermission(Long.valueOf(findingId), SecureClassesEnum.FINDING.getClazz())) {
			throw new NoAccessException("User has no access to the finding " + findingId);
		}
		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
		DetachedCriteria crit = DetachedCriteria.forClass(Finding.class).add(Property.forName("id").eq(new Long(findingId)));
		crit.setFetchMode("datumCollection", FetchMode.JOIN);
		crit.setFetchMode("datumCollection.conditionCollection", FetchMode.JOIN);
		crit.setFetchMode("fileCollection", FetchMode.JOIN);
		crit.setFetchMode("fileCollection.keywordCollection", FetchMode.JOIN);
		List result = appService.query(crit);
		Finding finding = null;
		if (!result.isEmpty()) {
			finding = (Finding) result.get(0);
			if (finding.getFileCollection() != null) {
				removeUnaccessibleFiles(finding.getFileCollection());
			}
		}
		return finding;
	}

	public int getNumberOfPublicCharacterizations(String characterizationClassName) throws Exception
	{
		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
		DetachedCriteria crit = DetachedCriteria.forClass(ClassUtils.getFullClass(characterizationClassName))
				.setProjection(Projections.distinct(Property.forName("id")));
		List results = appService.query(crit);
		int count = 0;
		for (int i = 0; i < results.size(); i++) {
			Long id = Long.valueOf(results.get(i).toString());
			if (springSecurityAclService.checkObjectPublic(id, SecureClassesEnum.CHAR.getClazz()))
				count++;
		}
		return count;
	}
	
	public int getNumberOfPublicCharacterizationsForJob(List<String> characterizationClassNames) throws Exception
	{
		List<Long> publicData = aclDao.getCountOfPublicCharacterization(SecureClassesEnum.CHAR.getClazz().getName(), CaNanoRoleEnum.ROLE_ANONYMOUS.toString(), characterizationClassNames);
        return (publicData != null) ? publicData.size() : 0;
	}

	private void removeUnaccessibleFiles(Collection<File> files) throws Exception
	{
		Set<File> copiedFiles = new HashSet<File>(files);
		for (File file : copiedFiles) {
			// check whether user can access the file, if not remove from the list
			if (!springSecurityAclService.currentUserHasReadPermission(file.getId(), SecureClassesEnum.FILE.getClazz()) &&
				!springSecurityAclService.currentUserHasWritePermission(file.getId(), SecureClassesEnum.FILE.getClazz())) {
				files.remove(file);
				logger.debug("User can't access file of id:" + file.getId());
			}
		}
	}
}