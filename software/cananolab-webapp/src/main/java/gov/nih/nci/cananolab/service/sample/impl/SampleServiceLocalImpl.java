/*L
 *  Copyright Leidos
 *  Copyright Leidos Biomedical
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/cananolab/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.service.sample.impl;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.common.Keyword;
import gov.nih.nci.cananolab.domain.common.Organization;
import gov.nih.nci.cananolab.domain.common.PointOfContact;
import gov.nih.nci.cananolab.domain.common.Publication;
import gov.nih.nci.cananolab.domain.particle.AssociatedElement;
import gov.nih.nci.cananolab.domain.particle.Characterization;
import gov.nih.nci.cananolab.domain.particle.ChemicalAssociation;
import gov.nih.nci.cananolab.domain.particle.ComposingElement;
import gov.nih.nci.cananolab.domain.particle.FunctionalizingEntity;
import gov.nih.nci.cananolab.domain.particle.NanomaterialEntity;
import gov.nih.nci.cananolab.domain.particle.Sample;
import gov.nih.nci.cananolab.domain.particle.SampleComposition;
import gov.nih.nci.cananolab.domain.particle.SmeInherentFunction;
import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalization;
import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalizationElement;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterial;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterialElement;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurification;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurity;
import gov.nih.nci.cananolab.dto.common.ExperimentConfigBean;
import gov.nih.nci.cananolab.dto.common.FileBean;
import gov.nih.nci.cananolab.dto.common.FindingBean;
import gov.nih.nci.cananolab.dto.common.PointOfContactBean;
import gov.nih.nci.cananolab.dto.common.PublicationBean;
import gov.nih.nci.cananolab.dto.particle.AdvancedSampleBean;
import gov.nih.nci.cananolab.dto.particle.AdvancedSampleSearchBean;
import gov.nih.nci.cananolab.dto.particle.SampleBasicBean;
import gov.nih.nci.cananolab.dto.particle.SampleBean;
import gov.nih.nci.cananolab.dto.particle.characterization.CharacterizationBean;
import gov.nih.nci.cananolab.dto.particle.composition.ChemicalAssociationBean;
import gov.nih.nci.cananolab.dto.particle.composition.FunctionalizingEntityBean;
import gov.nih.nci.cananolab.dto.particle.composition.NanomaterialEntityBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SmeInherentFunctionBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisFunctionalizationElementBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisMaterialElementBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurificationBean;
import gov.nih.nci.cananolab.dto.particle.synthesis.SynthesisPurityBean;
import gov.nih.nci.cananolab.exception.*;
import gov.nih.nci.cananolab.security.AccessControlInfo;
import gov.nih.nci.cananolab.security.CananoUserDetails;
import gov.nih.nci.cananolab.security.dao.AclDao;
import gov.nih.nci.cananolab.security.enums.CaNanoRoleEnum;
import gov.nih.nci.cananolab.security.enums.SecureClassesEnum;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;
import gov.nih.nci.cananolab.service.BaseServiceLocalImpl;
import gov.nih.nci.cananolab.service.publication.PublicationService;
import gov.nih.nci.cananolab.service.sample.CharacterizationService;
import gov.nih.nci.cananolab.service.sample.CompositionService;
import gov.nih.nci.cananolab.service.sample.SampleService;
import gov.nih.nci.cananolab.service.sample.SynthesisService;
import gov.nih.nci.cananolab.service.sample.helper.AdvancedSampleServiceHelper;
import gov.nih.nci.cananolab.service.sample.helper.SampleServiceHelper;
import gov.nih.nci.cananolab.system.applicationservice.ApplicationException;
import gov.nih.nci.cananolab.system.applicationservice.CaNanoLabApplicationService;
import gov.nih.nci.cananolab.util.Comparators;
import gov.nih.nci.cananolab.util.Constants;
import gov.nih.nci.cananolab.system.applicationservice.client.ApplicationServiceProvider;
import gov.nih.nci.cananolab.system.query.hibernate.HQLCriteria;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.SortedSet;
import java.util.TreeSet;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.FetchMode;
import org.hibernate.StaleStateException;
import org.hibernate.criterion.CriteriaSpecification;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Property;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateOptimisticLockingFailureException;
import org.springframework.stereotype.Component;

/**
 * Service methods involving samples
 *
 * @author pansu
 * 
 */
@Component("sampleService")
public class SampleServiceLocalImpl extends BaseServiceLocalImpl implements SampleService
{
	private static Logger logger = LogManager.getLogger(SampleServiceLocalImpl.class);

	@Autowired
	private SampleServiceHelper sampleServiceHelper;
	
	@Autowired
	private SpringSecurityAclService springSecurityAclService;
	
	@Autowired
	private AdvancedSampleServiceHelper advancedHelper;
	
	@Autowired
	private CharacterizationService characterizationService;
	
	@Autowired
	private CompositionService compositionService;
	
	@Autowired
	private PublicationService publicationService;

	@Autowired
	private SynthesisService synthesisService;
	
	@Autowired
	private AclDao aclDao;

	/**
	 * Persist a new sample or update an existing canano sample
	 *
	 * @throws SampleException
	 *             , DuplicateEntriesException
	 */
	public void saveSample(SampleBean sampleBean) throws SampleException, DuplicateEntriesException, NoAccessException
	{
		if (SpringSecurityUtil.getPrincipal() == null) {
			throw new NoAccessException();
		}
		Boolean newSample = true;
		if (sampleBean.getDomain().getId() != null) {
			newSample = false;
		}
		Sample sample = sampleBean.getDomain();
		try
		{
			if (!newSample && !springSecurityAclService.currentUserHasWritePermission(sampleBean.getDomain().getId(), SecureClassesEnum.SAMPLE.getClazz())) {
				throw new NoAccessException();
			}
			CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
			Sample dbSample = (Sample) appService.getObject(Sample.class,
					"name", sample.getName());
			if (dbSample != null && !dbSample.getId().equals(sample.getId())) {
				throw new DuplicateEntriesException();
			}
			if (sample.getKeywordCollection() != null) {
				Collection<Keyword> keywords = new HashSet<Keyword>(sample
						.getKeywordCollection());
				sample.getKeywordCollection().clear();
				for (Keyword keyword : keywords) {
					Keyword dbKeyword = (Keyword) appService.getObject(
							Keyword.class, "name", keyword.getName());
					if (dbKeyword != null) {
						keyword.setId(dbKeyword.getId());
					} else {
						keyword.setId(null);
					}
					// turned off cascade save-update in order to share the same
					// keyword instance with File keywords.
					appService.saveOrUpdate(keyword);
					sample.getKeywordCollection().add(keyword);
				}
			}
			// WJRL 2/13/23: This is a problem with issue #258. This is causing:
			// nested exception is org.hibernate.NonUniqueObjectException: A different object with the same
			// identifier value was already associated with the session :
			// [gov.nih.nci.cananolab.domain.particle.Sample#115900438]
			appService.saveOrUpdate(sample);
			// save default access
			if (newSample) {
				springSecurityAclService.saveDefaultAccessForNewObject(sample.getId(), SecureClassesEnum.SAMPLE.getClazz());
			}
		} catch (NoAccessException | DuplicateEntriesException e) {
			throw e;
		} catch (ApplicationException | ApplicationProviderException e) {
			logger.error("ApplicationException/ApplicationProviderException  in saving the sample. ", e);
			throw new SampleException("Error in saving the sample. ", e);
		}
	}

	public void savePointOfContact(PointOfContactBean pocBean) throws PointOfContactException, NoAccessException
	{
		if (SpringSecurityUtil.getPrincipal() == null) {
			throw new NoAccessException();
		}
		try {
			PointOfContact dbPointOfContact = null;
			Long oldPOCId = null;
			String oldOrgName = null;
			Boolean newPOC = true;
			Boolean newOrg = true;
			CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
			System.out.println("SampleServiceLocalImpl savePointOfContact pocBean.getDomain(): " + pocBean.getDomain());
			System.out.println();
			PointOfContact domainPOC = pocBean.getDomain();
			System.out.println("Point A domainPOC");
			Organization domainOrg = domainPOC.getOrganization();
			System.out.println("domainOrg: " + domainOrg);
			// get existing organization from database and reuse ID,
			// created by and created date
			// address information will be updated
			Organization dbOrganization = sampleServiceHelper.findOrganizationByName(domainOrg.getName());
			if (dbOrganization != null) {
				domainOrg.setId(dbOrganization.getId());
				domainOrg.setCreatedBy(dbOrganization.getCreatedBy());
				domainOrg.setCreatedDate(dbOrganization.getCreatedDate());
				newOrg = false;
			}
			// create a new org if not an existing one
			else {
				domainOrg.setId(null);
			}
			// if point of contact has no ID
			if (domainPOC.getId() == null) {
				// check if org name, first name and last name matches existing
				// one
				dbPointOfContact = sampleServiceHelper.findPointOfContactByNameAndOrg(
						domainPOC.getFirstName(), domainPOC.getLastName(),
						domainPOC.getOrganization().getName());
				// if found, reuse ID, created_date and created_by
				if (dbPointOfContact != null) {
					domainPOC.setId(dbPointOfContact.getId());
					domainPOC.setCreatedDate(dbPointOfContact.getCreatedDate());
					domainPOC.setCreatedBy(dbPointOfContact.getCreatedBy());
					domainPOC.setUpdatedDate(dbPointOfContact.getUpdatedDate());
					newPOC = false;
				}
			} else {
				// check if organization is changed
				System.out.println("domainPOC.getId().toString(): " + domainPOC.getId().toString());
				dbPointOfContact = sampleServiceHelper.findPointOfContactById(domainPOC.getId().toString());
				System.out.println("dbPointOfContact: " + dbPointOfContact);
				Organization dbOrg = dbPointOfContact.getOrganization();
				// if organization information is changed, create a new POC
				if (!dbOrg.getName().equals(domainOrg.getName())) {
					oldPOCId = domainPOC.getId();
					oldOrgName = dbOrg.getName();
					domainPOC.setId(null);
					newPOC = true;
				}
				// if name information is changed, create a new POC
				else if (domainPOC.getFirstName() != null
						&& !domainPOC.getFirstName().equalsIgnoreCase(dbPointOfContact.getFirstName())
						|| domainPOC.getLastName() != null
						&& !domainPOC.getLastName().equalsIgnoreCase(dbPointOfContact.getLastName())) {
					newPOC = true;
				} else {
					domainPOC.setId(dbPointOfContact.getId());
					domainPOC.setCreatedBy(dbPointOfContact.getCreatedBy());
					domainPOC.setCreatedDate(dbPointOfContact.getCreatedDate());
					domainPOC.setUpdatedDate(dbPointOfContact.getUpdatedDate());
					newPOC = false;
				}
			}
			appService.saveOrUpdate(domainPOC);
			if (newOrg) {
				springSecurityAclService.savePublicAccessForObject(domainPOC.getOrganization().getId(), SecureClassesEnum.ORG.getClazz());
			}
			if (newPOC) {
				springSecurityAclService.saveAccessForChildObject(domainPOC.getOrganization().getId(), SecureClassesEnum.ORG.getClazz(), domainPOC.getId(), SecureClassesEnum.POC.getClazz());
			}
			
		} catch (Exception e) {
			String err = "Error in saving the PointOfContact.";
			logger.error(err, e);
			throw new PointOfContactException(err, e);
		}
	}

	/**
	 *
	 * @param nanomaterialEntityClassNames
	 * @param functionalizingEntityClassNames
	 * @param otherFunctionalizingEntityTypes
	 * @param functionClassNames
	 * @param otherFunctionTypes
	 * @param characterizationClassNames
	 * @param wordList
	 * @return
	 * @throws SampleException
	 */
	public List<String> findSampleIdsBy(String sampleName,
			String samplePointOfContact, String[] nanomaterialEntityClassNames,
			String[] otherNanomaterialEntityTypes,
			String[] functionalizingEntityClassNames,
			String[] otherFunctionalizingEntityTypes,
			String[] functionClassNames, String[] otherFunctionTypes,
			String[] characterizationClassNames,
			String[] otherCharacterizationTypes, String[] wordList)
			throws SampleException {
		try {
            return sampleServiceHelper.findSampleIdsBy(sampleName,
                    samplePointOfContact, nanomaterialEntityClassNames,
                    otherNanomaterialEntityTypes,
                    functionalizingEntityClassNames,
                    otherFunctionalizingEntityTypes, functionClassNames,
                    otherFunctionTypes, characterizationClassNames,
                    otherCharacterizationTypes, wordList);
		} catch (Exception e) {
			String err = "Problem finding samples with the given search parameters. " + e.getMessage();
			logger.error(err, e);
			throw new SampleException(err, e);
		}
	}

	public SampleBean findSampleById(String sampleId, Boolean loadAccessInfo) throws SampleException, NoAccessException
	{
		SampleBean sampleBean = null;
		try {
			Sample sample = sampleServiceHelper.findSampleById(sampleId);
			if (sample != null) {
				if (loadAccessInfo) {
					sampleBean = loadSampleBean(sample);
				} else {
					sampleBean = new SampleBean(sample);
				}
			}
		} catch (NoAccessException e) {
			throw e;
		} catch (Exception e) {
			String err = "Problem finding the sample by id: " + sampleId + ". " + e.getMessage();
			logger.error(err, e);
			throw new SampleException(err, e);
		}
		return sampleBean;
	}

	public SampleBean findSampleForSearchById(String sampleId, Boolean loadAccessInfo) throws SampleException, NoAccessException
	{
		SampleBean sampleBean = null;
		try {
			Sample sample = sampleServiceHelper.findShallowSampleByIdLazyLoad(sampleId);
			if (sample != null) {
				if (loadAccessInfo) {
					sampleBean = loadSampleBean(sample);
				} else {
					sampleBean = new SampleBean(sample);
				}
			}
		} catch (NoAccessException e) {
			throw e;
		} catch (Exception e) {
			String err = "Problem finding the sample by id: " + sampleId + ". " + e.getMessage();
			logger.error(err, e);
			throw new SampleException(err, e);
		}
		return sampleBean;
	}

	/**
	 * Only load sample core data.
	 * 
	 * Do not check read permission because workspace items are owned by user.
	 */
	public SampleBasicBean findSWorkspaceSampleById(String sampleId, boolean loadAccessInfo)
			throws SampleException, NoAccessException {
		SampleBasicBean sampleBean = null;
		try {
			Sample sample = sampleServiceHelper.findSampleBasicById(sampleId);
			if (sample != null) {
				if (loadAccessInfo) {
					sampleBean = loadSampleBean(sample, false);
				} else {
					sampleBean = new SampleBasicBean(sample);
				}
			}
		} catch (NoAccessException e) {
			throw e;
		} catch (Exception e) {
			String err = "Problem finding the sample by id: " + sampleId + ". " + e.getMessage();
			logger.error(err, e);
			throw new SampleException(err, e);
		}
		return sampleBean;
	}

	private Sample findFullyLoadedSampleByName(String sampleName)
		throws ApplicationException, ApplicationProviderException, NotExistException
	{
		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
		// load composition and characterization separate because of Hibernate
		// join limitation
		DetachedCriteria crit = DetachedCriteria.forClass(Sample.class).add(Property.forName("name").eq(sampleName).ignoreCase());
		Sample sample = null;

		// load composition and characterization separate because of
		// Hibernate join limitation
		crit.setFetchMode("primaryPointOfContact", FetchMode.JOIN);
		crit.setFetchMode("primaryPointOfContact.organization", FetchMode.JOIN);
		crit.setFetchMode("otherPointOfContactCollection", FetchMode.JOIN);
		crit.setFetchMode("otherPointOfContactCollection.organization", FetchMode.JOIN);
		crit.setFetchMode("keywordCollection", FetchMode.JOIN);
		crit.setFetchMode("publicationCollection", FetchMode.JOIN);
		crit.setFetchMode("publicationCollection.authorCollection", FetchMode.JOIN);
		crit.setFetchMode("publicationCollection.keywordCollection", FetchMode.JOIN);
		crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);

		List result = appService.query(crit);
		if (!result.isEmpty()) {
			sample = (Sample) result.get(0);
		}
		if (sample == null) {
			throw new NotExistException("Sample doesn't exist in the database");
		}

		// fully load composition
		SampleComposition comp = this.loadComposition(sample.getId().toString());
		sample.setSampleComposition(comp);

		// fully load characterizations
		List<Characterization> chars = this.loadCharacterizations(sample.getId().toString());
		if (chars != null && !chars.isEmpty()) {
			sample.setCharacterizationCollection(new HashSet<Characterization>(chars));
		} else {
			sample.setCharacterizationCollection(null);
		}
		return sample;
	}

	private SampleComposition loadComposition(String sampleId)
		throws ApplicationException, ApplicationProviderException
	{
		SampleComposition composition = null;

		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
		DetachedCriteria crit = DetachedCriteria.forClass(SampleComposition.class);
		crit.createAlias("sample", "sample");
		crit.add(Property.forName("sample.id").eq(Long.valueOf(sampleId)));
		crit.setFetchMode("nanomaterialEntityCollection", FetchMode.JOIN);
		crit.setFetchMode("nanomaterialEntityCollection.fileCollection", FetchMode.JOIN);
		crit.setFetchMode("nanomaterialEntityCollection.fileCollection.keywordCollection", FetchMode.JOIN);
		crit.setFetchMode("nanomaterialEntityCollection.composingElementCollection", FetchMode.JOIN);
		crit.setFetchMode("nanomaterialEntityCollection.composingElementCollection.inherentFunctionCollection", FetchMode.JOIN);
		crit.setFetchMode("nanomaterialEntityCollection.composingElementCollection.inherentFunctionCollection.targetCollection", FetchMode.JOIN);
		crit.setFetchMode("functionalizingEntityCollection", FetchMode.JOIN);
		crit.setFetchMode("functionalizingEntityCollection.fileCollection", FetchMode.JOIN);
		crit.setFetchMode("functionalizingEntityCollection.fileCollection.keywordCollection", FetchMode.JOIN);
		crit.setFetchMode("functionalizingEntityCollection.functionCollection", FetchMode.JOIN);
		crit.setFetchMode("functionalizingEntityCollection.functionCollection.targetCollection", FetchMode.JOIN);
		crit.setFetchMode("functionalizingEntityCollection.activationMethod", FetchMode.JOIN);
		crit.setFetchMode("chemicalAssociationCollection", FetchMode.JOIN);
		crit.setFetchMode("chemicalAssociationCollection.fileCollection", FetchMode.JOIN);
		crit.setFetchMode("chemicalAssociationCollection.fileCollection.keywordCollection", FetchMode.JOIN);
		crit.setFetchMode("chemicalAssociationCollection.associatedElementA", FetchMode.JOIN);
		crit.setFetchMode("chemicalAssociationCollection.associatedElementB", FetchMode.JOIN);
		crit.setFetchMode("fileCollection", FetchMode.JOIN);
		crit.setFetchMode("fileCollection.keywordCollection", FetchMode.JOIN);
		crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
		List result = appService.query(crit);

		if (!result.isEmpty()) {
			composition = (SampleComposition) result.get(0);
		}
		return composition;
	}

	private List<Characterization> loadCharacterizations(String sampleId)
		throws ApplicationException, ApplicationProviderException
	{
		List<Characterization> chars = new ArrayList<Characterization>();

		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
		DetachedCriteria crit = DetachedCriteria.forClass(Characterization.class);
		crit.createAlias("sample", "sample");
		crit.add(Property.forName("sample.id").eq(Long.valueOf(sampleId)));
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

		for (int i = 0; i < results.size(); i++)
		{
			Characterization achar = (Characterization) results.get(i);
			chars.add(achar);
		}
		return chars;
	}

	private SampleBean loadSampleBean(Sample sample)
			throws NoAccessException
	{
		SampleBean sampleBean = new SampleBean(sample);
		if (springSecurityAclService.currentUserHasReadPermission(sample.getId(), SecureClassesEnum.SAMPLE.getClazz()))
			springSecurityAclService.loadAccessControlInfoForObject(sample.getId(), SecureClassesEnum.SAMPLE.getClazz(), sampleBean);
		else
			throw new NoAccessException();
		return sampleBean;
	}

	public void loadAccessesForBasicSampleBean(SampleBasicBean sampleBean)
			throws NoAccessException
	{
		Sample sample = sampleBean.getDomain();
		if (springSecurityAclService.currentUserHasReadPermission(sample.getId(), SecureClassesEnum.SAMPLE.getClazz()))
			springSecurityAclService.loadAccessControlInfoForObject(sample.getId(), SecureClassesEnum.SAMPLE.getClazz(), sampleBean);
		else
			throw new NoAccessException();
		
	}
	
	private SampleBasicBean loadSampleBean(Sample sample, boolean checkReadPermission)
			throws NoAccessException
	{
		SampleBasicBean sampleBean = new SampleBasicBean(sample);
		if (springSecurityAclService.currentUserHasReadPermission(sample.getId(), SecureClassesEnum.SAMPLE.getClazz()))
			springSecurityAclService.loadAccessControlInfoForObject(sample.getId(), SecureClassesEnum.SAMPLE.getClazz(), sampleBean);
		else
			throw new NoAccessException();
		return sampleBean;
	}

	public SampleBean findSampleByName(String sampleName) throws SampleException, NoAccessException
	{
		try {
			Sample sample = sampleServiceHelper.findSampleByName(sampleName);
			SampleBean sampleBean = null;
			if (sample != null) {
				sampleBean = loadSampleBean(sample);
			}
			return sampleBean;
		} catch (NoAccessException e) {
			throw e;
		} catch (Exception e) {
			String err = "Problem finding the sample by name: " + sampleName + ". " + e.getMessage();
			logger.error(err, e);
			throw new SampleException(err, e);
		}
	}
	
	public int getNumberOfPublicSamplesForJob() throws SampleException
	{
		try {
            return sampleServiceHelper.getNumberOfPublicSamplesForJob();
		} catch (Exception e) {
			String err = "Error finding counts of public samples. " + e.getMessage();
			logger.error(err, e);
			throw new SampleException(err, e);

		}
	}

	public int getNumberOfPublicSampleSources() throws SampleException
	{
		try {
            return sampleServiceHelper.getNumberOfPublicSampleSources();
		} catch (Exception e) {
			String err = "Error finding counts of public sample sources. " + e.getMessage();
            logger.error(err, e);
			throw new SampleException(err, e);

		}
	}
	
	public int getNumberOfPublicSampleSourcesForJob() throws SampleException
	{
		try {
            return sampleServiceHelper.getNumberOfPublicSampleSourcesForJob();
		} catch (Exception e) {
			String err = "Error finding counts of public sample sources. " + e.getMessage();
            logger.error(err, e);
			throw new SampleException(err, e);

		}
	}

	public PointOfContactBean findPointOfContactById(String pocId) throws PointOfContactException
	{
		PointOfContactBean pocBean = null;
		try {
			PointOfContact poc = sampleServiceHelper.findPointOfContactById(pocId);
			pocBean = new PointOfContactBean(poc);
		} catch (Exception e) {
			String err = "Problem finding point of contact for the given id. " + e.getMessage();
            logger.error(err, e);
			throw new PointOfContactException(err, e);
		}
		return pocBean;
	}

	public List<PointOfContactBean> findPointOfContactsBySampleId(String sampleId) throws PointOfContactException
	{
		try {
			CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
			DetachedCriteria crit = DetachedCriteria.forClass(Sample.class).add(Property.forName("id").eq(Long.valueOf(sampleId)));
			crit.setFetchMode("primaryPointOfContact", FetchMode.JOIN);
			crit.setFetchMode("primaryPointOfContact.organization", FetchMode.JOIN);
			crit.setFetchMode("otherPointOfContactCollection", FetchMode.JOIN);
			crit.setFetchMode("otherPointOfContactCollection.organization", FetchMode.JOIN);
			crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
			List results = appService.query(crit);
			List<PointOfContactBean> pointOfContactCollection = new ArrayList<PointOfContactBean>();
			for (int i = 0; i < results.size(); i++){
				Sample particle = (Sample) results.get(i);
				PointOfContact primaryPOC = particle.getPrimaryPointOfContact();
				Collection<PointOfContact> otherPOCs = particle.getOtherPointOfContactCollection();
				pointOfContactCollection.add(new PointOfContactBean(primaryPOC));
				for (PointOfContact poc : otherPOCs) {
					pointOfContactCollection.add(new PointOfContactBean(poc));
				}
			}
			return pointOfContactCollection;
		} catch (Exception e) {
			String err = "Problem finding all PointOfContact collections with the given sample ID.";
			logger.error(err, e);
			throw new PointOfContactException(err, e);
		}
	}

	public SortedSet<String> getAllOrganizationNames() throws PointOfContactException
	{
		try {
			SortedSet<String> names = new TreeSet<String>(new Comparators.SortableNameComparator());
			CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
			HQLCriteria crit = new HQLCriteria("select org.name from gov.nih.nci.cananolab.domain.common.Organization org");
			List results = appService.query(crit);
			
			logger.debug("Completed select org.name from gov.nih.nci.cananolab.domain.common.Organization org");
			for (int i = 0; i < results.size(); i++){
				String name = ((String) results.get(i)).trim();
				names.add(name);
			}
			return names;
		} catch (Exception e) {
			String err = "Error finding organization for " + SpringSecurityUtil.getLoggedInUserName();
			logger.error(err, e);
			throw new PointOfContactException(err, e);
		}
	}

	public List<String> findSampleIdsByAdvancedSearch(AdvancedSampleSearchBean searchBean) throws SampleException
	{
		try {
			return advancedHelper.findSampleIdsByAdvancedSearch(searchBean);
		} catch (Exception e) {
			String err = "Problem finding samples with the given advanced search parameters. " + e.getMessage();
			logger.error(err, e);
			throw new SampleException(err, e);
		}
	}

	public AdvancedSampleBean findAdvancedSampleByAdvancedSearch(String sampleId, AdvancedSampleSearchBean searchBean)
			throws SampleException 
	{
		try {
			return advancedHelper.findAdvancedSampleByAdvancedSearch(sampleId, searchBean);
		} catch (Exception e) {
			String err = "Problem finding advanced sample details with the given advanced search parameters. " + e.getMessage();
			logger.error(err, e);
			throw new SampleException(err, e);
		}
	}

	public SampleBean cloneSample(String originalSampleName, String newSampleName)
			throws SampleException, NoAccessException,
			       DuplicateEntriesException, NotExistException, PointOfContactException,
			       ExperimentConfigException, ApplicationException,
			       ApplicationProviderException, CompositionException,
	               FileException, CharacterizationException,
			       PublicationException, SynthesisException
	{
		if (SpringSecurityUtil.getPrincipal() == null) {
			throw new NoAccessException();
		}
		SampleBean newSampleBean = null;
		Sample origSample = null;
		SampleBean origSampleBean = null;
		SampleBean newSampleBean0 = null;
		Sample newSample0 = new Sample();
		Long newID = 0L;
		try {
			CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
			// WJRL 3/2023: THIS IS A DETACHED CRITERIA SEARCH
			Sample dbNewSample = (Sample) appService.getObject(Sample.class, "name", newSampleName);
			if (dbNewSample != null) {
				throw new DuplicateEntriesException();
			}
			// fully load original sample
			origSample = findFullyLoadedSampleByName(originalSampleName);
			origSampleBean = new SampleBean(origSample);
			newSample0.setName(newSampleName);
			newSample0.setCreatedBy(SpringSecurityUtil.getLoggedInUserName() + ":" + Constants.AUTO_COPY_ANNOTATION_PREFIX);
			newSample0.setCreatedDate(new Date());
			// save the sample so later up just update the cloned the
			// associations.
			newSampleBean0 = new SampleBean(newSample0);

			// save the sample to get an ID before saving associations
			// This calls a detached query for the sample before it saves it!
			saveSample(newSampleBean0);
			newID = newSample0.getId();
		} catch (NotExistException | DuplicateEntriesException e) {
			throw e;
	 	} catch (ApplicationException e) {
			String err = "Error in loading the original sample " + originalSampleName + ". " + e.getMessage();
			logger.error(err, e);
			throw new SampleException(err, e);
		}
		try {
			// clone the sample
			// WJRL 2/13/23: This is creating a very extensive and deep copy of the existing sample,
			// while also going through and nulling out the domain IDs as well as changing the created
			// by tags to annotate the copy status.
			//
			Sample newSample = origSampleBean.getDomainCopy(SpringSecurityUtil.getLoggedInUserName());
			newSample.setName(newSampleName);
			newSample.setCreatedBy(SpringSecurityUtil.getLoggedInUserName() + ":" + Constants.AUTO_COPY_ANNOTATION_PREFIX);
			newSample.setCreatedDate(new Date());

			// keep the id
			newSample.setId(newID);
			newSampleBean = new SampleBean(newSample);

			// retrieve accessibilities of the original sample
			springSecurityAclService.loadAccessControlInfoForObject(origSampleBean.getDomain().getId(), SecureClassesEnum.SAMPLE.getClazz(), origSampleBean);

			// WJRL 2/13/23 Here is where we take the Java objects hanging off of the newSampleBean, which
			// were generated using getDomainCopy() above, and get them persisted into the
			// database. Original comment:

			// need to save associations one by one (except keywords)
			// Hibernate mapping settings for most use cases
			saveClonedPOCs(newSampleBean);
			saveClonedCharacterizations(origSample.getName(), newSampleBean);
			// This was cause of #258, so I broke it out to isolate the issue:
			saveClonedCompositionFiles(origSampleBean, newSampleBean);
			saveClonedComposition(origSampleBean, newSampleBean);
			saveClonedSynthesis(origSampleBean, newSampleBean);
			//
			// WJRL 3/23: Issue #270: If the user is public/anonymous, they can try to copy a sample that
			// has a non-public publication attached. They will not see the attached publication, and will
			// have no understanding why the clone failed. We should catch that access error here and be specific
			// with the error message:
			//
			saveClonedPublications(origSampleBean, newSampleBean);
			CaNanoLabApplicationService appService = (CaNanoLabApplicationService)ApplicationServiceProvider.getApplicationService();
			// WJRL 3/23: I originally tried this, to merge the two copies, but there were lots of issues.
			// It appears that Hibernate does not mind the first saved sample used above to harvest the
			// sample ID, followed by the creation of a clone with the same domain ID. What it did not like
			// was a sample created with the same domain ID to do a search for the associated SampleComposition.
			// With that sample duplication eliminated it worked fine; merge was not needed.
			//newSampleBean.setDomain(mergeSample(newSampleBean.getDomain()));

			// WJRL 2/13/23: This was where issue #258 was triggered. This caused:
			// nested exception is org.hibernate.NonUniqueObjectException: A different object with the same
			// identifier value was already associated with the session
			//
			// WJRL 3/23: This originally reported two objects with same ID, and failed.
			// Trying to use merge, the merge was complaining it was read only (flush-mode = manual)
			// Forcing the flush mode to auto, it then complained that multiple representations of the same entity
			// cannot be merged. That resulted in finding and ditching the sample creation needed to do a
			// findCompositionBySampleId() call used to clone files. Once that was fixed, the merge was actually
			// not needed.
			//
			saveSample(newSampleBean);

			//Commented while removing CSM
			//newSampleBean.setUser(user);

			// assign accessibility for the new sample
			for (AccessControlInfo access : origSampleBean.getAllAccesses()) {
				this.assignAccessibility(access, newSampleBean.getDomain());
			}
		} catch (RuntimeException | NoAccessException | PointOfContactException | ExperimentConfigException |
				 ApplicationException | ApplicationProviderException | CompositionException |
				 FileException | CharacterizationException | PublicationException | SynthesisException e) {
			// delete the already persisted new sample in case of error
			try {
				this.deleteSampleWhenError(newSample0.getName());
			} catch (Exception ex) {
				String err = "Error in deleting the errored cloned-sample "
						+ newSample0.getName() + ". " + ex.getMessage();
				logger.error(err, e);
				throw new SampleException(err, ex);
			}
			String err = "Error in cloning the sample " + originalSampleName + ". " + e.getMessage();
			logger.error(err, e);
			throw e;
		}
		return newSampleBean;
	}

	private void saveClonedPOCs(SampleBean sampleBean) throws PointOfContactException, NoAccessException {
		savePointOfContact(sampleBean.getPrimaryPOCBean());
		if (sampleBean.getOtherPOCBeans() != null && !sampleBean.getOtherPOCBeans().isEmpty()) {
			for (PointOfContactBean pocBean : sampleBean.getOtherPOCBeans()) {
				savePointOfContact(pocBean);
			}
		}
	}



	private void saveClonedCharacterizations(String origSampleName, SampleBean sampleBean)
			throws ExperimentConfigException, NoAccessException, ApplicationException,
			ApplicationProviderException, FileException, CharacterizationException
	{
		if (sampleBean.getDomain().getCharacterizationCollection() != null) {
			String newSampleName = sampleBean.getDomain().getName();
			for (Characterization achar : sampleBean.getDomain()
					.getCharacterizationCollection()) {
				CharacterizationBean charBean = new CharacterizationBean(achar);
				if (charBean.getExperimentConfigs() != null) {
					for (ExperimentConfigBean configBean : charBean
							.getExperimentConfigs()) {
						characterizationService.saveExperimentConfig(sampleBean.getDomain().getId() + "", configBean);
					}
				}
				if (charBean.getFindings() != null) {
					for (FindingBean findingBean : charBean.getFindings()) {
						for (FileBean fileBean : findingBean.getFiles()) {
							fileUtils.updateClonedFileInfo(fileBean,
									origSampleName, newSampleName);
						}
						characterizationService.saveFinding(findingBean);
					}
				}
				characterizationService.saveCharacterization(sampleBean, charBean);
			}
		}
	}

	private void saveClonedSynthesis(SampleBean origSampleBean, SampleBean sampleBean)
			throws SynthesisException, NoAccessException, ApplicationException,
			       ApplicationProviderException, FileException {

		if (sampleBean.getDomain().getSynthesis()!=null){
			synthesisService.createSynthesis(sampleBean);
			if(sampleBean.getDomain().getSynthesis().getSynthesisMaterials()!=null){
				saveClonedSynthesisMaterials(origSampleBean, sampleBean);
			}
			if(sampleBean.getDomain().getSynthesis().getSynthesisFunctionalizations()!=null){
				saveClonedSynthesisFunctionalization(origSampleBean, sampleBean);
			}
			if(sampleBean.getDomain().getSynthesis().getSynthesisPurifications()!=null){
				saveClonedSynthesisPurification(origSampleBean, sampleBean);
			}
		}
	}

	private void saveClonedSynthesisMaterials(SampleBean origSampleBean, SampleBean sampleBean)
			throws ApplicationException, ApplicationProviderException, FileException,
			SynthesisException, NoAccessException
		{
		Collection<SynthesisMaterial> materials = sampleBean.getDomain().getSynthesis().getSynthesisMaterials();
		for(SynthesisMaterial material:materials){
			SynthesisMaterialBean materialBean = new SynthesisMaterialBean(material);
			if(materialBean.getFiles()!=null){
				for (FileBean fileBean : materialBean.getFiles()) {
					fileUtils.updateClonedFileInfo(fileBean,
							origSampleBean.getDomain().getName(), sampleBean.getDomain().getName());
				}
			}

			synthesisService.saveSynthesisMaterial(sampleBean, materialBean);
			if (material.getSynthesisMaterialElements()!=null){
				for(SynthesisMaterialElement materialElement: material.getSynthesisMaterialElements()){
					SynthesisMaterialElementBean materialElementBean = new SynthesisMaterialElementBean(materialElement);
//					if(materialElementBean.getFunctions()!=null){
//						for (SmeInherentFunctionBean function: materialElementBean.getFunctions()){
//							//TODO write
//							synthesisService.saveSynthesisMaterialElement(material, function);
//						}
//					}
					synthesisService.saveSynthesisMaterialElement(material, materialElementBean);
				}
			}
		}
	}

	private void saveClonedSynthesisFunctionalization(SampleBean origSampleBean, SampleBean sampleBean)
			throws ApplicationException, ApplicationProviderException, FileException,
			SynthesisException, NoAccessException
	{
		Collection<SynthesisFunctionalization> functionalizations = sampleBean.getDomain().getSynthesis().getSynthesisFunctionalizations();
		for(SynthesisFunctionalization functionalization: functionalizations){
			SynthesisFunctionalizationBean functionalizationBean = new SynthesisFunctionalizationBean(functionalization);
			if(functionalizationBean.getFiles()!=null){
				for (FileBean fileBean : functionalizationBean.getFiles()) {
					fileUtils.updateClonedFileInfo(fileBean,
							origSampleBean.getDomain().getName(), sampleBean.getDomain().getName());
				}
			}

			synthesisService.saveSynthesisFunctionalization(sampleBean, functionalizationBean);
			for(SynthesisFunctionalizationElement functionalizationElement: functionalization.getSynthesisFunctionalizationElements()){
				SynthesisFunctionalizationElementBean functionalizationElementBean = new SynthesisFunctionalizationElementBean(functionalizationElement);
				synthesisService.saveSynthesisFunctionalizationElement(functionalization, functionalizationElementBean);
			}
		}
	}

	private void saveClonedSynthesisPurification(SampleBean origSampleBean, SampleBean sampleBean)
			throws SynthesisException, NoAccessException, ApplicationException,
			ApplicationProviderException, FileException
	{
		Collection<SynthesisPurification> purifications = sampleBean.getDomain().getSynthesis().getSynthesisPurifications();
		for(SynthesisPurification purification: purifications){
			SynthesisPurificationBean purificationBean = new SynthesisPurificationBean(purification);
			if(purification.getFiles()!=null){
				for (FileBean fileBean : purificationBean.getFiles()) {
					fileUtils.updateClonedFileInfo(fileBean,
							origSampleBean.getDomain().getName(), sampleBean.getDomain().getName());
				}
			}

			synthesisService.saveSynthesisPurification(sampleBean, purificationBean);
			for(SynthesisPurity purity: purification.getPurities()){
				SynthesisPurityBean purityBean = new SynthesisPurityBean(purity);
				synthesisService.saveSynthesisPurity(purityBean, purificationBean);
			}
		}
	}

	//
	// Decided to break this out from function below to isolate cloning issue
	//
	private void saveClonedCompositionFiles(SampleBean origSampleBean, SampleBean sampleBean)
			throws ApplicationException, ApplicationProviderException,
			       FileException, NoAccessException, CompositionException {
		String origSampleName = origSampleBean.getDomain().getName();
		String newSampleName = sampleBean.getDomain().getName();

		if (sampleBean.getDomain().getSampleComposition() != null) {
			// save files
			if (sampleBean.getDomain().getSampleComposition().getFileCollection() != null) {
				for (File file : sampleBean.getDomain().getSampleComposition().getFileCollection()) {
					FileBean fileBean = new FileBean(file);
					fileUtils.updateClonedFileInfo(fileBean, origSampleName, newSampleName);
					compositionService.saveCompositionFile(sampleBean, fileBean, true);
				}
			}
		}
	}

	private void saveClonedComposition(SampleBean origSampleBean, SampleBean sampleBean)
			throws ApplicationException, ApplicationProviderException,
			       FileException, NoAccessException, CompositionException {
		String origSampleName = origSampleBean.getDomain().getName();
		String newSampleName = sampleBean.getDomain().getName();

		if (sampleBean.getDomain().getSampleComposition() != null) {

			// save nanomaterial entities
			if (sampleBean.getDomain().getSampleComposition().getNanomaterialEntityCollection() != null) {
				for (NanomaterialEntity entity : sampleBean.getDomain()
						.getSampleComposition()
						.getNanomaterialEntityCollection()) {
					NanomaterialEntityBean entityBean = new NanomaterialEntityBean(entity);
					for (FileBean fileBean : entityBean.getFiles()) {
						fileUtils.updateClonedFileInfo(fileBean,
								origSampleName, newSampleName);
					}
					compositionService.saveNanomaterialEntity(sampleBean, entityBean);
				}
			}
			// save functionalizing entities
			if (sampleBean.getDomain().getSampleComposition()
					.getFunctionalizingEntityCollection() != null) {
				for (FunctionalizingEntity entity : sampleBean.getDomain()
						.getSampleComposition()
						.getFunctionalizingEntityCollection()) {
					FunctionalizingEntityBean entityBean = new FunctionalizingEntityBean(entity);
					for (FileBean fileBean : entityBean.getFiles()) {
						fileUtils.updateClonedFileInfo(fileBean, origSampleName, newSampleName);
					}
					compositionService.saveFunctionalizingEntity(sampleBean, entityBean);
				}
			}
			// save chemical association
			if (sampleBean.getDomain().getSampleComposition()
					.getChemicalAssociationCollection() != null) {
				for (ChemicalAssociation assoc : sampleBean.getDomain()
						.getSampleComposition()
						.getChemicalAssociationCollection()) {
					ChemicalAssociationBean assocBean = new ChemicalAssociationBean(assoc);
					// set the correct IDs for associated elements
					updateAssociatedElementId(sampleBean.getDomain()
							.getSampleComposition(), assoc
							.getAssociatedElementA());
					updateAssociatedElementId(sampleBean.getDomain()
							.getSampleComposition(), assoc
							.getAssociatedElementB());
					for (FileBean fileBean : assocBean.getFiles()) {
						fileUtils.updateClonedFileInfo(fileBean, origSampleName, newSampleName);
					}
					compositionService.saveChemicalAssociation(sampleBean, assocBean);
				}
			}
		}
	}

	private void updateAssociatedElementId(SampleComposition comp, AssociatedElement associatedElement) {
		if (associatedElement != null) {
			int copyInd = associatedElement.getCreatedBy().indexOf(
					Constants.AUTO_COPY_ANNOTATION_PREFIX);
			String origId = null;
			if (copyInd != -1) {
				origId = associatedElement.getCreatedBy()
						.substring(copyInd + 5);
			}

			// finding the matching functionalizing entity
			if (associatedElement instanceof FunctionalizingEntity) {
				for (FunctionalizingEntity entity : comp
						.getFunctionalizingEntityCollection()) {
					int copyEInd = entity.getCreatedBy().indexOf(
							Constants.AUTO_COPY_ANNOTATION_PREFIX);
					String entityOrigId = null;
					if (copyEInd != -1) {
						entityOrigId = entity.getCreatedBy().substring(
								copyEInd + 5);
					}
					if (entityOrigId.equals(origId)) {
						associatedElement.setId(entity.getId());
						break;
					}
				}
			}
			if (associatedElement instanceof ComposingElement) {
				for (NanomaterialEntity entity : comp
						.getNanomaterialEntityCollection()) {
					if (entity.getComposingElementCollection() != null) {
						for (ComposingElement ce : entity
								.getComposingElementCollection()) {
							int copyCEInd = ce.getCreatedBy().indexOf(
									Constants.AUTO_COPY_ANNOTATION_PREFIX);
							String ceOrigId = null;
							if (copyCEInd != -1) {
								ceOrigId = ce.getCreatedBy().substring(
										copyCEInd + 5);
							}
							if (ceOrigId.equals(origId)) {
								associatedElement.setId(ce.getId());
								break;
							}
						}
					}
				}
			}
		}
	}

	private void saveClonedPublications(SampleBean origSampleBean, SampleBean sampleBean)
			throws PublicationException, NoAccessException {
		if (sampleBean.getDomain().getPublicationCollection() != null) {
			for (Publication pub : sampleBean.getDomain()
					.getPublicationCollection()) {
				PublicationBean pubBean = new PublicationBean(pub);
				pubBean.setFromSamplePage(true);
				// don't need to reset sample names because savePublication
				// takes care of empty sample names.
				publicationService.savePublication(pubBean);
				// don't need to save access because the cloned publications
				// shared the same IDs with the source publications
			}
		}
	}

	private void deleteSampleWhenError(String sampleName)
		throws ApplicationException, ApplicationProviderException,
			   NotExistException, NoAccessException,
			   CharacterizationException, ChemicalAssociationViolationException, CompositionException
	{
		Sample sample = this.findFullyLoadedSampleByName(sampleName);
		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
				.getApplicationService();
		// delete characterizations
		if (sample.getCharacterizationCollection() != null) {
			for (Characterization achar : sample
					.getCharacterizationCollection()) {
				characterizationService.deleteCharacterization(achar);
			}
		}

		// delete composition
		if (sample.getSampleComposition() != null) {
			compositionService.deleteComposition(sample.getSampleComposition());
		}
		sample.setSampleComposition(null);

		// remove publication associations
		if (sample.getPublicationCollection() != null) {
			sample.setPublicationCollection(null);
		}
		// remove keyword associations
		if (sample.getKeywordCollection() != null) {
			sample.setKeywordCollection(null);
		}
		appService.saveOrUpdate(sample);
		appService.delete(sample);
		// remove all csm entries associated with sample
		springSecurityAclService.deleteAccessObject(sample.getId(), SecureClassesEnum.SAMPLE.getClazz());
	}

	public void deleteSample(String sampleName) throws SampleException, NoAccessException, NotExistException
	{
		if (SpringSecurityUtil.getPrincipal() == null) {
			throw new NoAccessException();
		}
		Sample sample = null;
		try {
			// / / fully load original sample
			sample = findFullyLoadedSampleByName(sampleName);
			CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
					.getApplicationService();
			// / / delete characterizations
			if (sample.getCharacterizationCollection() != null) {
				for (Characterization achar : sample.getCharacterizationCollection()) {
					characterizationService.deleteCharacterization(achar);
				}
			}

			// / / delete composition
			SampleComposition compositon = sample.getSampleComposition();

			// LAW 25-04-17 Fixing issue with deleting chemical associations
			Set<ChemicalAssociation> chemicalAssociations = compositon.getChemicalAssociationCollection();
			compositon.setChemicalAssociationCollection(null);

			if (chemicalAssociations != null) {
				for (ChemicalAssociation chemicalAssociation : chemicalAssociations) {
					compositionService.deleteChemicalAssociation(chemicalAssociation);
				}
			}

			sample.setSampleComposition(null);

			if (compositon != null) {
				compositionService.deleteComposition(compositon);
			}

			if(sample.getSynthesis() !=null){
				synthesisService.deleteSynthesis(sample.getSynthesis());
			}
			sample.setSynthesis(null);

			// / / remove publication associations
			if (sample.getPublicationCollection() != null) {
				sample.setPublicationCollection(null);
			}
			// / / remove keyword associations
			if (sample.getKeywordCollection() != null) {
				sample.setKeywordCollection(null);
			}
			appService.saveOrUpdate(sample);
			appService.delete(sample);
		} catch (NotExistException e) {
			throw e;
		} catch (HibernateOptimisticLockingFailureException e){
//Batch update returned unexpected row count from update [0]; actual row count: 0; expected: 1
			String debug = "Already deleted?";
		} catch (Exception e) {
			String err = "Error in deleting the sample " + sampleName + ". " + e.getMessage();
			logger.error(err, e);
			throw new SampleException(err, e);
		}
	}

	public void updatePOCAssociatedWithCharacterizations(String sampleName, Long oldPOCId, Long newPOCId) throws SampleException
	{
		try {
			CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
			DetachedCriteria crit = DetachedCriteria.forClass(Characterization.class);
			crit.createAlias("sample", "sample");
			crit.createAlias("pointOfContact", "poc");
			crit.add(Property.forName("poc.id").eq(oldPOCId));
			crit.add(Property.forName("sample.name").eq(sampleName));
			crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
			List results = appService.query(crit);
			for (int i = 0; i < results.size(); i++){
				Characterization achar = (Characterization) results.get(i);
				// update POC to the new ID
				achar.getPointOfContact().setId(newPOCId);
				appService.saveOrUpdate(achar);
			}
		} catch (Exception e) {
			String err = "Error in updating POC associated sample characterizations "
					+ sampleName + ". " + e.getMessage();
			logger.error(err, e);
			throw new SampleException(err, e);
		}
	}

	// public void updateSampleVisibilityWithPOCChange(SampleBean sampleBean,
	// String oldPOCId) throws SampleException {
	// try {
	// // remove oldOrg from sample visibility
	// PointOfContact oldPOC = getHelper()
	// .findPointOfContactById(oldPOCId);
	// String oldOrgName = oldPOC.getOrganization().getName();
	// String[] sampleVisGroups = sampleBean.getVisibilityGroups();
	// String[] updatedGroups = StringUtils.removeFromArray(
	// sampleVisGroups, oldOrgName);
	// sampleBean.setVisibilityGroups(updatedGroups);
	// } catch (Exception e) {
	// String err = "Error in updating sample visibility with POC change for "
	// + sampleBean.getDomain().getName();
	// logger.error(err, e);
	// throw new SampleException(err, e);
	// }
	// }

	public List<String> findOtherSampleNamesFromSamePrimaryOrganization(String sampleId) throws SampleException
	{
		List<String> sortedNames = null;
		try {
			Set<String> names = sampleServiceHelper.findOtherSamplesFromSamePrimaryOrganization(sampleId);
			sortedNames = new ArrayList<String>(names);
			Collections.sort(sortedNames, new Comparators.SortableNameComparator());

		} catch (Exception e) {
			String err = "Error in deleting the sample " + sampleId + ". " + e.getMessage();
			logger.error(err, e);
			throw new SampleException(err, e);
		}
		return sortedNames;
	}

	public void assignAccessibility(AccessControlInfo accessInfo, Sample sample)
			throws SampleException, NoAccessException
	{
		Long sampleId = sample.getId();
		
		if (!springSecurityAclService.isOwnerOfObject(sampleId, SecureClassesEnum.SAMPLE.getClazz()))
			throw new NoAccessException();
		
		try
		{
			// if access is Public, remove all other access except Public, Curator and owner
			if (CaNanoRoleEnum.ROLE_ANONYMOUS.toString().equalsIgnoreCase(accessInfo.getRecipient()))
			{
				springSecurityAclService.deleteAllAccessExceptPublicAndDefault(sampleId, SecureClassesEnum.SAMPLE.getClazz());
			}
			// if sample is already public, retract from public
			else
			{
				springSecurityAclService.retractObjectFromPublic(sampleId, SecureClassesEnum.SAMPLE.getClazz());
			}
			
			springSecurityAclService.saveAccessForObject(sampleId, SecureClassesEnum.SAMPLE.getClazz(), accessInfo.getRecipient(), 
														 accessInfo.isPrincipal(), accessInfo.getRoleName());
			
			// fully load sample
			sample = this.findFullyLoadedSampleByName(sample.getName());
			// assign POC to public is handled when adding POC
			// TODO check this logic when working with COPPA on organization

			// assign characterization accessibility
			if (sample.getCharacterizationCollection() != null) {
				for (Characterization achar : sample.getCharacterizationCollection()) {
					springSecurityAclService.saveAccessForChildObject(sampleId, SecureClassesEnum.SAMPLE.getClazz(), 
							  										  achar.getId(), SecureClassesEnum.CHAR.getClazz());
				}
			}
			/*// assign composition accessibility
			if (sample.getSampleComposition() != null) {
				springSecurityAclService.saveAccessForChildObject(sampleId, SecureClassesEnum.SAMPLE.getClazz(), 
						  										  sample.getSampleComposition().getId(), SecureClassesEnum.COMPOSITION.getClazz());
			}*/
		} catch (ApplicationException | ApplicationProviderException | NotExistException e) {
			String err = "Error in assigning accessibility to the sample " + sampleId + ". " + e.getMessage();
			logger.error(err, e);
			throw new SampleException(err, e);
		}
	}

	public void removeAccessibility(AccessControlInfo access, Sample sample) throws SampleException, NoAccessException
	{
		if (!springSecurityAclService.isOwnerOfObject(sample.getId(), SecureClassesEnum.SAMPLE.getClazz())) {
			throw new NoAccessException();
		}
		String sampleId = sample.getId().toString();
		try {
			springSecurityAclService.retractAccessToObjectForSid(sample.getId(), SecureClassesEnum.SAMPLE.getClazz(), access.getRecipient());
			// fully load sample
			sample = this.findFullyLoadedSampleByName(sample.getName());
			// keep POC public
			//Characterization and Composition access automatically deleted due to inheritance set up.

		} catch (ApplicationException | ApplicationProviderException | NotExistException e) {
			String err = "Error in deleting the access for sample " + sampleId + ". " + e.getMessage();
			logger.error(err, e);
			throw new SampleException(err, e);
		}
	}

	public List<String> findSampleIdsByOwner(String currentOwner) throws SampleException
	{
		List<String> sampleIds = new ArrayList<String>();
		try {
			sampleIds = sampleServiceHelper.findSampleIdsByOwner(currentOwner);
		} catch (Exception e) {
			String error = "Error in retrieving sampleIds by owner. " + e.getMessage();
			throw new SampleException(error, e);
		}
		return sampleIds;
	}
	
	@Override
	public List<String> findSampleIdsSharedWithUser(CananoUserDetails userDetails) throws SampleException
	{
		List<String> sampleIds = new ArrayList<String>();
		try
		{
			List<String> sharedWithSids = new ArrayList<String>(userDetails.getGroups());
			sharedWithSids.add(userDetails.getUsername());
		
			sampleIds = aclDao.getIdsOfClassSharedWithSid(SecureClassesEnum.SAMPLE, userDetails.getUsername(), sharedWithSids);
		}catch (Exception e) {
			String error = "Error in retrieving sampleIds shared with logged in user. " + e.getMessage();
			throw new SampleException(error, e);
		}
		return sampleIds;
	}

	/*public List<String> removeAccesses(Sample sample, Boolean removeLater) throws SampleException, NoAccessException {
		List<String> ids = new ArrayList<String>();
		try {
			if (!springSecurityAclService.currentUserHasWritePermission(sample.getId(), SecureClassesEnum.SAMPLE.getClazz()))
			{
				throw new NoAccessException();
			}
			ids.add(sample.getId().toString());
			// fully load sample
			Sample fullSample = this.findFullyLoadedSampleByName(sample.getName());
			// find sample accesses
			List<AccessibilityBean> sampleAccesses = super.findSampleAccesses(sample.getId().toString());
			for (AccessibilityBean access : sampleAccesses) {
				if (fullSample.getCharacterizationCollection() != null) {
					for (Characterization achar : fullSample.getCharacterizationCollection()) {
						ids.addAll(accessUtils.removeAccessibility(access,
								achar, removeLater));
					}
				}
				if (fullSample.getSampleComposition() != null) {
					ids.addAll(accessUtils.removeAccessibility(access,
							fullSample.getSampleComposition(), removeLater));
				}
			}
		} catch (NoAccessException e) {
			throw e;
		} catch (Exception e) {
			String error = "Error in removing sample accesses" + ". " + e.getMessage();
			throw new SampleException(error, e);
		}
		return ids;
	}
*/
	@Override
	public SampleBasicBean findSampleBasicById(String sampleId, Boolean loadAccessInfo) throws SampleException, NoAccessException
	{
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Map<String, String> findSampleIdNamesByAdvancedSearch(
			AdvancedSampleSearchBean searchBean) throws SampleException {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Sample> findSamplesBy(String sampleName,
			String samplePointOfContact, String[] nanomaterialEntityClassNames,
			String[] otherNanomaterialEntityTypes,
			String[] functionalizingEntityClassNames,
			String[] otherFunctionalizingEntityTypes,
			String[] functionClassNames, String[] otherFunctionTypes,
			String[] characterizationClassNames,
			String[] otherCharacterizationTypes, String[] wordList)
			throws SampleException {
		try {
            return sampleServiceHelper.findSamplesBy(sampleName,
                    samplePointOfContact, nanomaterialEntityClassNames,
                    otherNanomaterialEntityTypes,
                    functionalizingEntityClassNames,
                    otherFunctionalizingEntityTypes, functionClassNames,
                    otherFunctionTypes, characterizationClassNames,
                    otherCharacterizationTypes, wordList);
		} catch (Exception e) {
			String err = "Problem finding samples with the given search parameters. " + e.getMessage();
			logger.error(err, e);
			throw new SampleException(err, e);
		}
	}
	
	public List<String> findSampleNamesBy(String nameStr) throws SampleException 
	{
		List<String> sampleNames = new ArrayList<String>();
		try {
			sampleNames = sampleServiceHelper.findSampleNamesBy(nameStr);
		} catch (Exception e) {
			logger.error("Problem finding samples with the given search parameters.", e);
			throw new SampleException("Problem finding samples with the given search parameters.", e);
		}
		return sampleNames;
	}
	
	@Override
	public void setUpdateDeleteFlags(SampleBean sample)
	{
		sample.setUserUpdatable(springSecurityAclService.currentUserHasWritePermission(sample.getDomain().getId(), SecureClassesEnum.SAMPLE.getClazz()));
		sample.setUserDeletable(springSecurityAclService.currentUserHasDeletePermission(sample.getDomain().getId(), SecureClassesEnum.SAMPLE.getClazz()));
	}

	@Override
	public SpringSecurityAclService getSpringSecurityAclService() {
		return springSecurityAclService;
	}

	@Override
	public boolean checkIfCurrentUserHasWriteAccess(SampleBean sampleBean) {

		if (SpringSecurityUtil.getPrincipal() == null) {
			return false;
		}

		Boolean newSample = true;
		if (sampleBean.getDomain().getId() != null) {
			newSample = false;
		}

		try {
			return newSample || springSecurityAclService.currentUserHasWritePermission(sampleBean.getDomain().getId(), SecureClassesEnum.SAMPLE.getClazz());
		} catch (Exception e) {
			String err = "Error in checkIfCurrentUserHasWriteAccess.";
			logger.error(err, e);
			return false;
		}
	}
}
