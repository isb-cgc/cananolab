/*L
 *  Copyright Leidos
 *  Copyright Leidos Biomedical
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/cananolab/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.service.sample.helper;

import gov.nih.nci.cananolab.domain.agentmaterial.OtherFunctionalizingEntity;
import gov.nih.nci.cananolab.domain.characterization.OtherCharacterization;
import gov.nih.nci.cananolab.domain.common.Keyword;
import gov.nih.nci.cananolab.domain.common.Organization;
import gov.nih.nci.cananolab.domain.common.PointOfContact;
import gov.nih.nci.cananolab.domain.common.Protocol;
import gov.nih.nci.cananolab.domain.function.OtherFunction;
import gov.nih.nci.cananolab.domain.linkage.OtherChemicalAssociation;
import gov.nih.nci.cananolab.domain.nanomaterial.OtherNanomaterialEntity;
import gov.nih.nci.cananolab.domain.particle.Characterization;
import gov.nih.nci.cananolab.domain.particle.ChemicalAssociation;
import gov.nih.nci.cananolab.domain.particle.ComposingElement;
import gov.nih.nci.cananolab.domain.particle.Function;
import gov.nih.nci.cananolab.domain.particle.FunctionalizingEntity;
import gov.nih.nci.cananolab.domain.particle.NanomaterialEntity;
import gov.nih.nci.cananolab.domain.particle.Sample;
import gov.nih.nci.cananolab.domain.particle.SampleComposition;
import gov.nih.nci.cananolab.domain.particle.SfeInherentFunction;
import gov.nih.nci.cananolab.domain.particle.SmeInherentFunction;
import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalization;
import gov.nih.nci.cananolab.domain.particle.SynthesisFunctionalizationElement;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurification;
import gov.nih.nci.cananolab.domain.particle.AssociatedElement;
import gov.nih.nci.cananolab.domain.particle.ActivationMethod;
import gov.nih.nci.cananolab.domain.common.Supplier;
import gov.nih.nci.cananolab.domain.common.Author;
import gov.nih.nci.cananolab.domain.particle.SynthesisPurity;
import gov.nih.nci.cananolab.domain.common.PurityDatumCondition;
import gov.nih.nci.cananolab.domain.common.PurityColumnHeader;
import gov.nih.nci.cananolab.domain.common.PurificationConfig;

import gov.nih.nci.cananolab.domain.particle.Synthesis;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterial;
import gov.nih.nci.cananolab.domain.particle.SynthesisMaterialElement;
import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.common.Finding;
import gov.nih.nci.cananolab.domain.common.Datum;
import gov.nih.nci.cananolab.domain.common.Condition;
import gov.nih.nci.cananolab.domain.common.ExperimentConfig;
import gov.nih.nci.cananolab.domain.common.Instrument;
import gov.nih.nci.cananolab.domain.common.Technique;
import gov.nih.nci.cananolab.domain.common.Publication;

import gov.nih.nci.cananolab.exception.ApplicationProviderException;
import gov.nih.nci.cananolab.exception.NoAccessException;
import gov.nih.nci.cananolab.exception.SampleException;
import gov.nih.nci.cananolab.security.dao.AclDao;
import gov.nih.nci.cananolab.security.enums.CaNanoRoleEnum;
import gov.nih.nci.cananolab.security.enums.SecureClassesEnum;
import gov.nih.nci.cananolab.security.service.SpringSecurityAclService;
import gov.nih.nci.cananolab.system.applicationservice.ApplicationException;
import gov.nih.nci.cananolab.system.applicationservice.CaNanoLabApplicationService;
import gov.nih.nci.cananolab.system.applicationservice.TransactionInsertion;
import gov.nih.nci.cananolab.util.ClassUtils;
import gov.nih.nci.cananolab.util.Comparators;
import gov.nih.nci.cananolab.util.Constants;
import gov.nih.nci.cananolab.util.StringUtils;
import gov.nih.nci.cananolab.util.TextMatchMode;
import gov.nih.nci.cananolab.system.applicationservice.client.ApplicationServiceProvider;
import gov.nih.nci.cananolab.system.query.hibernate.HQLCriteria;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.SortedSet;
import java.util.TreeSet;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.FetchMode;
import org.hibernate.criterion.CriteriaSpecification;
import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.DetachedCriteria;
import org.hibernate.criterion.Disjunction;
import org.hibernate.criterion.Expression;
import org.hibernate.criterion.MatchMode;
import org.hibernate.criterion.ProjectionList;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Property;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

//import gov.nih.nci.system.web.struts.action.Criteria;

/**
 * Helper class providing implementations of search methods needed for both
 * local implementation of SampleService and grid service *
 *
 * @author pansu, tanq
 *
 */
@Component("sampleServiceHelper")
public class SampleServiceHelper
{
	private static Logger logger = LogManager.getLogger(SampleServiceHelper.class);

	@Autowired
	private AclDao aclDao;

	@Autowired
	private SpringSecurityAclService springSecurityAclService;


	public List<String> findSampleIdsBy(String sampleName,
			String samplePointOfContact, String[] nanomaterialEntityClassNames,
			String[] otherNanomaterialEntityTypes,
			String[] functionalizingEntityClassNames,
			String[] otherFunctionalizingEntityTypes,
			String[] functionClassNames, String[] otherFunctionTypes,
			String[] characterizationClassNames,
			String[] otherCharacterizationTypes, String[] wordList)
			throws Exception {
		List<String> sampleIds = new ArrayList<String>();

		//logger.error("Processing: " + sampleName);

		// can't query for the entire Sample object due to
		// limitations in pagination in SDK

		// added createdDate and sample name in the results so data can be
		// sorted by date and name
		DetachedCriteria crit = DetachedCriteria.forClass(Sample.class)
				.setProjection(
						Projections.projectionList()
								.add(Projections.property("id"))
								.add(Projections.property("name"))
								.add(Projections.property("createdDate")));
		if (!StringUtils.isEmpty(sampleName)) {
			TextMatchMode nameMatchMode = new TextMatchMode(sampleName);
			crit.add(Restrictions.ilike("name", nameMatchMode.getUpdatedText(),
					nameMatchMode.getMatchMode()));
		}
		if (!StringUtils.isEmpty(samplePointOfContact)) {
			TextMatchMode pocMatchMode = new TextMatchMode(samplePointOfContact);
			Disjunction disjunction = Restrictions.disjunction();
			crit.createAlias("primaryPointOfContact", "pointOfContact");
			crit.createAlias("pointOfContact.organization", "organization");
			crit.createAlias("otherPointOfContactCollection", "otherPoc",
					CriteriaSpecification.LEFT_JOIN);
			crit.createAlias("otherPoc.organization", "otherOrg",
					CriteriaSpecification.LEFT_JOIN);
            String[] critStrs = {"pointOfContact.lastName",
                    "pointOfContact.firstName", "pointOfContact.role",
                    "organization.name", "otherPoc.lastName",
                    "otherPoc.firstName", "otherOrg.name"};
			for (String critStr : critStrs) {
				Criterion pocCrit = Restrictions.ilike(critStr,
						pocMatchMode.getUpdatedText(),
						pocMatchMode.getMatchMode());
				disjunction.add(pocCrit);
			}
			crit.add(disjunction);
		}

		// join composition
		if (nanomaterialEntityClassNames != null
				&& nanomaterialEntityClassNames.length > 0
				|| otherNanomaterialEntityTypes != null
				&& otherNanomaterialEntityTypes.length > 0
				|| functionClassNames != null && functionClassNames.length > 0
				|| otherFunctionTypes != null && otherFunctionTypes.length > 0
				|| functionalizingEntityClassNames != null
				&& functionalizingEntityClassNames.length > 0
				|| otherFunctionalizingEntityTypes != null
				&& otherFunctionalizingEntityTypes.length > 0) {
			crit.createAlias("sampleComposition", "comp",
					CriteriaSpecification.LEFT_JOIN);
		}
		// join nanomaterial entity
		if (nanomaterialEntityClassNames != null
				&& nanomaterialEntityClassNames.length > 0
				|| otherNanomaterialEntityTypes != null
				&& otherNanomaterialEntityTypes.length > 0
				|| functionClassNames != null && functionClassNames.length > 0
				|| otherFunctionTypes != null && otherFunctionTypes.length > 0) {
			crit.createAlias("comp.nanomaterialEntityCollection", "nanoEntity",
					CriteriaSpecification.LEFT_JOIN);
		}

		// join functionalizing entity
		if (functionalizingEntityClassNames != null
				&& functionalizingEntityClassNames.length > 0
				|| otherFunctionalizingEntityTypes != null
				&& otherFunctionalizingEntityTypes.length > 0
				|| functionClassNames != null && functionClassNames.length > 0
				|| otherFunctionTypes != null && otherFunctionTypes.length > 0) {
			crit.createAlias("comp.functionalizingEntityCollection",
					"funcEntity", CriteriaSpecification.LEFT_JOIN);
		}

		// nanomaterial entity
		if (nanomaterialEntityClassNames != null
				&& nanomaterialEntityClassNames.length > 0
				|| otherNanomaterialEntityTypes != null
				&& otherNanomaterialEntityTypes.length > 0
				|| functionClassNames != null && functionClassNames.length > 0
				|| otherFunctionTypes != null && otherFunctionTypes.length > 0) {
			Disjunction disjunction = Restrictions.disjunction();
			if (nanomaterialEntityClassNames != null
					&& nanomaterialEntityClassNames.length > 0) {
				Criterion nanoEntityCrit = Restrictions.in("nanoEntity.class",
						(Object[])nanomaterialEntityClassNames);
				disjunction.add(nanoEntityCrit);
			}
			if (otherNanomaterialEntityTypes != null
					&& otherNanomaterialEntityTypes.length > 0) {
				Criterion otherNanoCrit1 = Restrictions.eq("nanoEntity.class",
						"OtherNanomaterialEntity");
				Criterion otherNanoCrit2 = Restrictions.in("nanoEntity.type",
						(Object[])otherNanomaterialEntityTypes);
				Criterion otherNanoCrit = Restrictions.and(otherNanoCrit1,
						otherNanoCrit2);
				disjunction.add(otherNanoCrit);
			}
			crit.add(disjunction);
		}

		// functionalizing entity
		// need to turn class names into integers in order for the .class
		// clause to work
		if (functionalizingEntityClassNames != null
				&& functionalizingEntityClassNames.length > 0
				|| otherFunctionalizingEntityTypes != null
				&& otherFunctionalizingEntityTypes.length > 0
				|| functionClassNames != null && functionClassNames.length > 0
				|| otherFunctionTypes != null && otherFunctionTypes.length > 0) {
			Disjunction disjunction = Restrictions.disjunction();
			if (functionalizingEntityClassNames != null
					&& functionalizingEntityClassNames.length > 0) {
				Integer[] functionalizingEntityClassNameIntegers = this
						.convertToFunctionalizingEntityClassOrderNumber(functionalizingEntityClassNames);
				Criterion funcEntityCrit = Restrictions.in("funcEntity.class",
						(Object[])functionalizingEntityClassNameIntegers);
				disjunction.add(funcEntityCrit);
			}
			if (otherFunctionalizingEntityTypes != null
					&& otherFunctionalizingEntityTypes.length > 0) {
				Integer classOrderNumber = Constants.FUNCTIONALIZING_ENTITY_SUBCLASS_ORDER_MAP
						.get("OtherFunctionalizingEntity");
				Criterion otherFuncCrit1 = Restrictions.eq("funcEntity.class",
						classOrderNumber);
				Criterion otherFuncCrit2 = Restrictions.in("funcEntity.type",
						(Object[])otherFunctionalizingEntityTypes);
				Criterion otherFuncCrit = Restrictions.and(otherFuncCrit1,
						otherFuncCrit2);
				disjunction.add(otherFuncCrit);
			}
			crit.add(disjunction);
		}

		// function
		if (functionClassNames != null && functionClassNames.length > 0
				|| otherFunctionTypes != null && otherFunctionTypes.length > 0) {
			Disjunction disjunction = Restrictions.disjunction();
			crit.createAlias("nanoEntity.composingElementCollection",
					"compElement", CriteriaSpecification.LEFT_JOIN)
					.createAlias("compElement.inherentFunctionCollection",
							"inFunc", CriteriaSpecification.LEFT_JOIN);
			crit.createAlias("funcEntity.functionCollection", "func",
					CriteriaSpecification.LEFT_JOIN);
			if (functionClassNames != null && functionClassNames.length > 0) {
				Criterion funcCrit1 = Restrictions.in("inFunc.class",
						(Object[])functionClassNames);
				Criterion funcCrit2 = Restrictions.in("func.class",
						(Object[])functionClassNames);
				disjunction.add(funcCrit1).add(funcCrit2);
			}
			if (otherFunctionTypes != null && otherFunctionTypes.length > 0) {
				Criterion otherFuncCrit1 = Restrictions.and(
						Restrictions.eq("inFunc.class", "OtherFunction"),
						Restrictions.in("inFunc.type", (Object[])otherFunctionTypes));
				Criterion otherFuncCrit2 = Restrictions.and(
						Restrictions.eq("func.class", "OtherFunction"),
						Restrictions.in("func.type", (Object[])otherFunctionTypes));
				disjunction.add(otherFuncCrit1).add(otherFuncCrit2);
			}
			crit.add(disjunction);
		}

		// join characterization
		if (characterizationClassNames != null
				&& characterizationClassNames.length > 0
				|| otherCharacterizationTypes != null
				&& otherCharacterizationTypes.length > 0 || wordList != null
				&& wordList.length > 0) {
			crit.createAlias("characterizationCollection", "chara",
					CriteriaSpecification.LEFT_JOIN);
		}
		// characterization
		if (characterizationClassNames != null
				&& characterizationClassNames.length > 0
				|| otherCharacterizationTypes != null
				&& otherCharacterizationTypes.length > 0) {
			Disjunction disjunction = Restrictions.disjunction();
			if (characterizationClassNames != null
					&& characterizationClassNames.length > 0) {
				Criterion charCrit = Restrictions.in("chara.class",
						(Object[])characterizationClassNames);
				disjunction.add(charCrit);
			}
			if (otherCharacterizationTypes != null
					&& otherCharacterizationTypes.length > 0) {
				Criterion otherCharCrit1 = Restrictions.eq("chara.class",
						"OtherCharacterization");
				Criterion otherCharCrit2 = Restrictions.in("chara.name",
						(Object[])otherCharacterizationTypes);
				Criterion otherCharCrit = Restrictions.and(otherCharCrit1,
						otherCharCrit2);
				disjunction.add(otherCharCrit);
			}
			crit.add(disjunction);
		}
		// join keyword, finding, publication
		if (wordList != null && wordList.length > 0) {
			crit.createAlias("keywordCollection", "keyword1",
					CriteriaSpecification.LEFT_JOIN);
			crit.createAlias("chara.findingCollection", "finding",
					CriteriaSpecification.LEFT_JOIN)
					.createAlias("finding.fileCollection", "charFile",
							CriteriaSpecification.LEFT_JOIN)
					.createAlias("charFile.keywordCollection", "keyword2",
							CriteriaSpecification.LEFT_JOIN);
			// publication keywords
			crit.createAlias("publicationCollection", "pub1",
					CriteriaSpecification.LEFT_JOIN);
			crit.createAlias("pub1.keywordCollection", "keyword3",
					CriteriaSpecification.LEFT_JOIN);
		}

		// keyword
		if (wordList != null && wordList.length > 0) {
			Disjunction disjunction = Restrictions.disjunction();
			for (String keyword : wordList) {
				// strip wildcards from either ends of keyword
				keyword = StringUtils.stripWildcards(keyword);
				Criterion keywordCrit1 = Restrictions.ilike("keyword1.name",
						keyword, MatchMode.ANYWHERE);
				Criterion keywordCrit2 = Restrictions.ilike("keyword2.name",
						keyword, MatchMode.ANYWHERE);
				Criterion keywordCrit3 = Restrictions.ilike("keyword3.name",
						keyword, MatchMode.ANYWHERE);
				disjunction.add(keywordCrit1);
				disjunction.add(keywordCrit2);
				disjunction.add(keywordCrit3);
			}
			for (String word : wordList) {
				Criterion summaryCrit1 = Restrictions.ilike(
						"chara.designMethodsDescription", word,
						MatchMode.ANYWHERE);
				Criterion summaryCrit2 = Restrictions.ilike(
						"charFile.description", word, MatchMode.ANYWHERE);
				Criterion summaryCrit = Restrictions.or(summaryCrit1,
						summaryCrit2);
				disjunction.add(summaryCrit);
			}
			crit.add(disjunction);
		}

		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();

		List results = appService.query(crit);

		int resSize = results.size();
		/*
		 * We will look only though the maximum amount of allowed records to avoid Exceptions
		 */
		int maxCount = appService.getMaxRecordsCount();
		Set<Sample> samples = new HashSet<Sample>();
		long idTrailer = -1;
		for(int i = 0; (i < resSize) && (i < maxCount); i++){
			try {
                boolean haveIt = false;

                /*
				 * There is a bug when searching with keyword "tes", where the following line
				 * whould trigger a ClassCastException. Reason unknow but suspected to be reaching
				 * the last row of a dataset.
				 */
//				Object[] row = (Object[]) obj;
				Object[] row = (Object[]) results.get(i);

				Long sampleId = (Long) row[0];
                if( sampleId == idTrailer){
                    haveIt = true;
                }
                // Duplicate IDs are grouped together, so this works
                idTrailer = sampleId;

                if(
                    ( ! haveIt ) &&
                    ((springSecurityAclService.currentUserHasReadPermission(sampleId, SecureClassesEnum.SAMPLE.getClazz()) ||
					 springSecurityAclService.currentUserHasWritePermission(sampleId, SecureClassesEnum.SAMPLE.getClazz())))
                )
                {
					Sample sample = new Sample();
					sample.setId(sampleId);
					sample.setName((String) row[1]);
					sample.setCreatedDate((Date) row[2]);
					samples.add(sample);
				} else {
					logger.debug("User doesn't have access to sample of ID: " + sampleId);
				}

			} catch (ClassCastException e) {
				logger.error("Got ClassCastException: " + e.getMessage());
				break;
			}
		}

		List<Sample> orderedSamples = new ArrayList<Sample>(samples);
		// Collections.sort(orderedSamples,
		// Collections.reverseOrder(new Comparators.SampleDateComparator()));

		Collections.sort(orderedSamples, new Comparators.SampleDateComparator());

		for (Sample sample : orderedSamples) {
			sampleIds.add(sample.getId().toString());
		}

		return sampleIds;
	}


	/**
	 * Return all stored functionalizing entity class names. In case of
	 * OtherFunctionalizingEntity, store the OtherFunctionalizingEntity type
	 *
	 * @param sample
	 * @return
	 */
	public SortedSet<String> getStoredFunctionalizingEntityClassNames( Sample sample) {
		SortedSet<String> storedEntities = new TreeSet<String>();

		SampleComposition samComposition = sample.getSampleComposition();
		if (samComposition != null && samComposition.getFunctionalizingEntityCollection() != null) {
			for (FunctionalizingEntity entity : samComposition.getFunctionalizingEntityCollection())
			{
				if (entity instanceof OtherFunctionalizingEntity) {
					storedEntities.add(((OtherFunctionalizingEntity) entity).getType());
				} else {
					storedEntities.add(ClassUtils.getShortClassName(entity.getClass().getCanonicalName()));
				}
			}
		}
		return storedEntities;
	}

	/**
	 * Return all stored function class names. In case of OtherFunction, store
	 * the otherFunction type
	 *
	 * @param sample
	 * @return
	 */
	public SortedSet<String> getStoredFunctionClassNames(Sample sample) {
		SortedSet<String> storedFunctions = new TreeSet<String>();

		if (sample.getSampleComposition() != null) {
			if (sample.getSampleComposition().getNanomaterialEntityCollection() != null) {
				for (NanomaterialEntity entity : sample.getSampleComposition()
						.getNanomaterialEntityCollection()) {
					if (entity.getComposingElementCollection() != null) {
						for (ComposingElement element : entity
								.getComposingElementCollection()) {
							if (element.getInherentFunctionCollection() != null) {
								for (Function function : element
										.getInherentFunctionCollection()) {
									if (function instanceof OtherFunction) {
										storedFunctions
												.add(((OtherFunction) function)
														.getType());
									} else {
										storedFunctions.add(ClassUtils
												.getShortClassName(function
														.getClass()
														.getCanonicalName()));
									}
								}
							}
						}
					}
				}
			}
			if (sample.getSampleComposition()
					.getFunctionalizingEntityCollection() != null) {
				for (FunctionalizingEntity entity : sample
						.getSampleComposition()
						.getFunctionalizingEntityCollection()) {
					if (entity.getFunctionCollection() != null) {
						for (Function function : entity.getFunctionCollection()) {
							if (function instanceof OtherFunction) {
								storedFunctions.add(((OtherFunction) function)
										.getType());
							} else {
								storedFunctions.add(ClassUtils
										.getShortClassName(function.getClass()
												.getCanonicalName()));
							}
						}
					}
				}
			}
		}
		return storedFunctions;
	}

	/**
	 * Return all stored nanomaterial entity class names. In case of
	 * OtherNanomaterialEntity, store the otherNanomaterialEntity type
	 *
	 * @param sample
	 * @return
	 */
	public SortedSet<String> getStoredNanomaterialEntityClassNames(Sample sample) {
		SortedSet<String> storedEntities = new TreeSet<String>();

		if (sample.getSampleComposition() != null
				&& sample.getSampleComposition()
						.getNanomaterialEntityCollection() != null) {
			for (NanomaterialEntity entity : sample.getSampleComposition()
					.getNanomaterialEntityCollection()) {
				if (entity instanceof OtherNanomaterialEntity) {
					storedEntities.add(((OtherNanomaterialEntity) entity)
							.getType());
				} else {
					storedEntities.add(ClassUtils.getShortClassName(entity
							.getClass().getCanonicalName()));
				}
			}
		}
		return storedEntities;
	}

	public SortedSet<String> getStoredChemicalAssociationClassNames(Sample sample) {
		SortedSet<String> storedAssocs = new TreeSet<String>();
		if (sample.getSampleComposition() != null
				&& sample.getSampleComposition()
						.getChemicalAssociationCollection() != null) {
			for (ChemicalAssociation assoc : sample.getSampleComposition()
					.getChemicalAssociationCollection()) {
				if (assoc instanceof OtherChemicalAssociation) {
					storedAssocs.add(((OtherChemicalAssociation) assoc)
							.getType());
				} else {
					storedAssocs.add(ClassUtils.getShortClassName(assoc
							.getClass().getCanonicalName()));
				}
			}
		}
		return storedAssocs;
	}

	public SortedSet<String> getStoredCharacterizationClassNames(Sample sample) {
		SortedSet<String> storedChars = new TreeSet<String>();
		if (sample.getCharacterizationCollection() != null) {
			for (Characterization achar : sample
					.getCharacterizationCollection()) {
				if (achar instanceof OtherCharacterization) {
					storedChars.add(((OtherCharacterization) achar).getName());
				} else {
					storedChars.add(ClassUtils.getShortClassName(achar
							.getClass().getCanonicalName()));
				}
			}
		}
		return storedChars;
	}

	public SortedSet<String> getStoredSynthesisClassNames(Sample sample){
		SortedSet<String> storedSynthesis = new TreeSet<String>();
		if(sample.getSynthesis() !=null){
			//This should only have one element
//			for (Synthesis synthesis: sample.getSynthesisCollection()){
				storedSynthesis.add(ClassUtils.getShortClassName(sample.getSynthesis().getClass().getCanonicalName()));
//			}
		}
		return storedSynthesis;
	}


	public Sample findSampleByName(String sampleName) throws ApplicationException, NoAccessException, ApplicationProviderException
	{
		logger.debug("findSampleByName sampleName=="+sampleName+";");
		Sample mySample= null;
		CaNanoLabApplicationService appService= (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
		DetachedCriteria myDetachedCriteria= DetachedCriteria.forClass(Sample.class).add( Property.forName("name").eq(sampleName).ignoreCase());
		myDetachedCriteria.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
		TransactionInsertion<Sample> myTransactionInsertion= getSampleTransactionInsertion();
        	mySample= appService.queryAndProcess(myDetachedCriteria, myTransactionInsertion);
        	logger.debug("ran appService.queryAndProcess");
        	return mySample;
	}

	public List<Keyword> findKeywordsBySampleId(String sampleId) throws Exception
	{
		// check whether user has access to the sample

		if (!springSecurityAclService.currentUserHasReadPermission(Long.valueOf(sampleId), SecureClassesEnum.SAMPLE.getClazz()) &&
			!springSecurityAclService.currentUserHasWritePermission(Long.valueOf(sampleId), SecureClassesEnum.SAMPLE.getClazz())) {
			throw new NoAccessException("User doesn't have access to the sample : " + sampleId);
		}
		List<Keyword> keywords = new ArrayList<Keyword>();

		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
		DetachedCriteria crit = DetachedCriteria.forClass(Sample.class).add(Property.forName("id").eq(Long.valueOf(sampleId)));
		crit.setFetchMode("keywordCollection", FetchMode.JOIN);
		List result = appService.query(crit);
		Sample sample = null;
		if (!result.isEmpty()) {
			sample = (Sample) result.get(0);
			keywords.addAll(sample.getKeywordCollection());
		}
		return keywords;
	}

	public PointOfContact findPrimaryPointOfContactBySampleId(String sampleId) throws Exception
	{
		if (!springSecurityAclService.currentUserHasReadPermission(Long.valueOf(sampleId), SecureClassesEnum.SAMPLE.getClazz()) &&
			!springSecurityAclService.currentUserHasWritePermission(Long.valueOf(sampleId), SecureClassesEnum.SAMPLE.getClazz())) {
			throw new NoAccessException("User has no access to the sample " + sampleId);
		}
		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
		DetachedCriteria crit = DetachedCriteria.forClass(Sample.class).add(
				Property.forName("id").eq(Long.valueOf(sampleId)));
		crit.setFetchMode("primaryPointOfContact", FetchMode.JOIN);
		crit.setFetchMode("primaryPointOfContact.organization", FetchMode.JOIN);
		crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
		List results = appService.query(crit);
		PointOfContact poc = null;
		for(int i = 0; i < results.size(); i++){
			Sample sample = (Sample) results.get(i);
			poc = sample.getPrimaryPointOfContact();
		}
		return poc;
	}

	public List<PointOfContact> findOtherPointOfContactsBySampleId(String sampleId) throws Exception {
		if (!springSecurityAclService.currentUserHasReadPermission(Long.valueOf(sampleId), SecureClassesEnum.SAMPLE.getClazz()) &&
			!springSecurityAclService.currentUserHasWritePermission(Long.valueOf(sampleId), SecureClassesEnum.SAMPLE.getClazz())) {
			throw new NoAccessException("User has no access to the sample " + sampleId);
		}
		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
				.getApplicationService();
		DetachedCriteria crit = DetachedCriteria.forClass(Sample.class).add(
				Property.forName("id").eq(Long.valueOf(sampleId)));
		crit.setFetchMode("otherPointOfContactCollection", FetchMode.JOIN);
		crit.setFetchMode("otherPointOfContactCollection.organization",
				FetchMode.JOIN);
		crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
		List results = appService.query(crit);
		List<PointOfContact> pointOfContacts = new ArrayList<PointOfContact>();
		for(int i = 0; i < results.size(); i++){
			Sample sample = (Sample) results.get(i);
			Collection<PointOfContact> otherPOCs = sample
					.getOtherPointOfContactCollection();
            pointOfContacts.addAll(otherPOCs);
		}
		return pointOfContacts;
	}


	public Sample findSampleById(String sampleId) throws SampleException {
        try{
            Long id = Long.valueOf(sampleId);
            return findSampleById(id);
        } catch (NumberFormatException nfex) {
			logger.error("sampleId is not integer: "+ sampleId);
			logger.error("Exception: " + nfex.getMessage());
			throw new SampleException("sampleId " + sampleId + " is not an integer", nfex);
		} catch (ApplicationException aex) {
			logger.error("Application Exception: "+ sampleId);
			logger.error("Exception: " + aex.getMessage());
			throw new SampleException("sampleId " + sampleId + " generates Application Exception", aex);
		} catch (NoAccessException naex) {
			logger.error("No Access: "+ sampleId);
			logger.error("Exception: " + naex.getMessage());
			throw new SampleException("sampleId " + sampleId + " generates No Access Exception", naex);
		} catch (ApplicationProviderException apex) {
            logger.error("Application Provider Exception: "+ sampleId);
            logger.error("Exception: " + apex.getMessage());
			throw new SampleException("sampleId " + sampleId + " generates Application Provider Exception", apex);
		} catch (NullPointerException npex) {
			logger.error("Null Pointer Exception: "+ sampleId);
			logger.error("Exception: " + npex.getMessage());
			throw new SampleException("sampleId " + sampleId + " generates Null Pointer Exception", npex);
		}
	}

private TransactionInsertion<Sample> getSampleTransactionInsertion() {

    /* generated by convert_hibernate_method.py on 2023.16.06
       code is commented with the following:
        1. comments such as "// crit.setFetchMode(..." to indicate code blocks that replaced specific crit.setFetchMode lines in original method
        2. file names used during parsing/code generation
            e.g. "// Sample fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/particle/Sample.java
        3. comments such as "// (PointOfContact)" to indicate nested classes ommitted from parsing to avoid infinite recursion
            note: as opposed to "// PointOfContact" which simply labels the end of an iteration over a collection of PointOfContact
    */ 
            TransactionInsertion<Sample> myTransactionInsertion = new TransactionInsertion<Sample>() {
            @Override
            public boolean executeInsideTransaction(Sample mySample) {
            String myString= null;
 // Sample fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/particle/Sample.java
// crit.setFetchMode("primaryPointOfContact", FetchMode.JOIN);
PointOfContact myPrimaryPointOfContact= mySample.getPrimaryPointOfContact();
if(myPrimaryPointOfContact!=null) {
    myString= myPrimaryPointOfContact.toString();
    logger.debug("mySample.myPrimaryPointOfContact.getId()==" + myPrimaryPointOfContact.getId());
     // PrimaryPointOfContact fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/PointOfContact.java
// crit.setFetchMode("primaryPointOfContact.organization", FetchMode.JOIN);
    Organization myOrganization= myPrimaryPointOfContact.getOrganization();
    if(myOrganization!=null) {
        myString= myOrganization.toString();
        logger.debug("myPrimaryPointOfContact.myOrganization.getId()==" + myOrganization.getId());
         // Organization fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/Organization.java
        Collection<PointOfContact> myOrganizationPointOfContactCollection= myOrganization.getPointOfContactCollection();
        for(PointOfContact myOrganizationPointOfContact:myOrganizationPointOfContactCollection) {
            myString= myOrganizationPointOfContact.toString();
            logger.debug("myOrganizationPointOfContact.getId()==" + myOrganizationPointOfContact.getId());
            // (PointOfContact)
        } // PointOfContact

    }
} // myPrimaryPointOfContact
// crit.setFetchMode("characterizationCollection", FetchMode.JOIN);
Set<Characterization> myCharacterizationSet= mySample.getCharacterizationCollection();
for(Characterization myCharacterization : myCharacterizationSet) {
    myString= myCharacterization.toString();
    logger.debug("mySample.myCharacterization.getId()==" + myCharacterization.getId());
     // Characterization fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/particle/Characterization.java
    Protocol myProtocol= myCharacterization.getProtocol();
    if(myProtocol!=null) {
        myString= myProtocol.toString();
        logger.debug("myCharacterization.myProtocol.getId()==" + myProtocol.getId());
         // Protocol fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/Protocol.java
        File myFile= myProtocol.getFile();
        if(myFile!=null) {
            myString= myFile.toString();
            logger.debug("myProtocol.myFile.getId()==" + myFile.getId());
             // File fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/File.java
            Set<Keyword> myKeywordSet= myFile.getKeywordCollection();
            for(Keyword myKeyword : myKeywordSet) {
                myString= myKeyword.toString();
                logger.debug("myFile.myKeyword.getId()==" + myKeyword.getId());
                 // Keyword fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/Keyword.java
                // (File)
            } // Keyword

        }
    }
    Set<ExperimentConfig> myExperimentConfigSet= myCharacterization.getExperimentConfigCollection();
    for(ExperimentConfig myExperimentConfig : myExperimentConfigSet) {
        myString= myExperimentConfig.toString();
        logger.debug("myCharacterization.myExperimentConfig.getId()==" + myExperimentConfig.getId());
         // ExperimentConfig fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/ExperimentConfig.java
        Collection<Instrument> myInstrumentCollection= myExperimentConfig.getInstrumentCollection();
        for(Instrument myInstrument:myInstrumentCollection) {
            myString= myInstrument.toString();
            logger.debug("myExperimentConfig.myInstrument.getId()==" + myInstrument.getId());
             // Instrument fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/Instrument.java
        } // Instrument

        Technique myTechnique= myExperimentConfig.getTechnique();
        if(myTechnique!=null) {
            myString= myTechnique.toString();
            logger.debug("myExperimentConfig.myTechnique.getId()==" + myTechnique.getId());
             // Technique fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/Technique.java
        }
    } // ExperimentConfig

    PointOfContact myCharacterizationPointOfContact= myCharacterization.getPointOfContact();
    if(myCharacterizationPointOfContact!=null) {
        myString= myCharacterizationPointOfContact.toString();
        logger.debug("myCharacterizationPointOfContact.getId()==" + myCharacterizationPointOfContact.getId());
         // PointOfContact fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/PointOfContact.java
// crit.setFetchMode("otherPointOfContactCollection.organization",FetchMode.JOIN);
        Organization myPointOfContactOrganization= myCharacterizationPointOfContact.getOrganization();
        if(myPointOfContactOrganization!=null) {
            myString= myPointOfContactOrganization.toString();
            logger.debug("myCharacterizationPointOfContact.myPointOfContactOrganization.getId()==" + myPointOfContactOrganization.getId());
             // Organization fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/Organization.java
            Collection<PointOfContact> myOrganizationPointOfContactCollection= myPointOfContactOrganization.getPointOfContactCollection();
            for(PointOfContact myOrganizationPointOfContact:myOrganizationPointOfContactCollection) {
                myString= myOrganizationPointOfContact.toString();
                logger.debug("myPointOfContactOrganization.myOrganizationPointOfContact.getId()==" + myOrganizationPointOfContact.getId());
                // (PointOfContact)
            } // PointOfContact

        }
    }
    Set<Finding> myFindingSet= myCharacterization.getFindingCollection();
    for(Finding myFinding : myFindingSet) {
        myString= myFinding.toString();
        logger.debug("myCharacterization.myFinding.getId()==" + myFinding.getId());
         // Finding fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/Finding.java
        Collection<Datum> myDatumCollection= myFinding.getDatumCollection();
        for(Datum myDatum:myDatumCollection) {
            myString= myDatum.toString();
            logger.debug("myFinding.myDatum.getId()==" + myDatum.getId());
             // Datum fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/Datum.java
            Set<Condition> myConditionSet= myDatum.getConditionCollection();
            for(Condition myCondition : myConditionSet) {
                myString= myCondition.toString();
                logger.debug("myDatum.myCondition.getId()==" + myCondition.getId());
                 // Condition fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/Condition.java
            } // Condition

            Finding myDatumFinding= myDatum.getFinding();
            if(myDatumFinding!=null) {
                myString= myDatumFinding.toString();
                logger.debug("myDatumFinding.getId()==" + myDatumFinding.getId());
                // (Finding)
            }
        } // Datum

        Collection<File> myFindingFileCollection= myFinding.getFileCollection();
        for(File myFindingFile:myFindingFileCollection) {
            myString= myFindingFile.toString();
            logger.debug("myFindingFile.getId()==" + myFindingFile.getId());
             // File fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/File.java
            Set<Keyword> myFileKeywordSet= myFindingFile.getKeywordCollection();
            for(Keyword myFileKeyword : myFileKeywordSet) {
                myString= myFileKeyword.toString();
                logger.debug("myFindingFile.myKeyword.getId()==" + myFileKeyword.getId());
                 // Keyword fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/Keyword.java
                // (File)
            } // Keyword

        } // File

    } // Finding

    Sample myCharacterizationSample= myCharacterization.getSample();
    if(myCharacterizationSample!=null) {
        myString= myCharacterizationSample.toString();
        logger.debug("myCharacterizationSample.getId()==" + myCharacterizationSample.getId());
        // (Sample)
    }
} // Characterization

SampleComposition mySampleComposition= mySample.getSampleComposition();
if(mySampleComposition!=null) {
    myString= mySampleComposition.toString();
    logger.debug("mySampleComposition.getId()==" + mySampleComposition.getId());
     // SampleComposition fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/particle/SampleComposition.java
// crit.setFetchMode("sampleComposition.nanomaterialEntityCollection",FetchMode.JOIN);
    Set<NanomaterialEntity> myNanomaterialEntitySet= mySampleComposition.getNanomaterialEntityCollection();
    for(NanomaterialEntity myNanomaterialEntity : myNanomaterialEntitySet) {
        myString= myNanomaterialEntity.toString();
        logger.debug("mySampleComposition.myNanomaterialEntity.getId()==" + myNanomaterialEntity.getId());
         // NanomaterialEntity fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/particle/NanomaterialEntity.java
// crit.setFetchMode("sampleComposition.nanomaterialEntityCollection.composingElementCollection",FetchMode.JOIN);
        Collection<ComposingElement> myComposingElementCollection= myNanomaterialEntity.getComposingElementCollection();
        for(ComposingElement myComposingElement:myComposingElementCollection) {
            myString= myComposingElement.toString();
            logger.debug("myNanomaterialEntity.myComposingElement.getId()==" + myComposingElement.getId());
             // ComposingElement fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/particle/ComposingElement.java
// crit.setFetchMode("sampleComposition.nanomaterialEntityCollection.composingElementCollection.inherentFunctionCollection",FetchMode.JOIN);
            Collection<Function> myFunctionCollection= myComposingElement.getInherentFunctionCollection();
            for(Function myFunction:myFunctionCollection) {
                myString= myFunction.toString();
                logger.debug("myComposingElement.myFunction.getId()==" + myFunction.getId());
                 // Function fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/particle/Function.java
                ComposingElement myFunctionComposingElement= myFunction.getComposingElement();
                if(myFunctionComposingElement!=null) {
                    myString= myFunctionComposingElement.toString();
                    logger.debug("myFunctionComposingElement.getId()==" + myFunctionComposingElement.getId());
                    // (ComposingElement)
                }
                FunctionalizingEntity myFunctionalizingEntity= myFunction.getFunctionalizingEntity();
                if(myFunctionalizingEntity!=null) {
                    myString= myFunctionalizingEntity.toString();
                    logger.debug("myFunctionalizingEntity.getId()==" + myFunctionalizingEntity.getId());
                     // FunctionalizingEntity fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/particle/FunctionalizingEntity.java
                    Set<File> myFunctionalizingEntityFileSet= myFunctionalizingEntity.getFileCollection();
                    for(File myFunctionalizingEntityFile : myFunctionalizingEntityFileSet) {
                        myString= myFunctionalizingEntityFile.toString();
                        logger.debug("myFunctionalizingEntity.myFile.getId()==" + myFunctionalizingEntityFile.getId());
                         // File fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/File.java
                        Set<Keyword> myFileKeywordSet= myFunctionalizingEntityFile.getKeywordCollection();
                        for(Keyword myFileKeyword : myFileKeywordSet) {
                            myString= myFileKeyword.toString();
                            logger.debug("myFunctionalizingEntityFile.myKeyword.getId()==" + myFileKeyword.getId());
                             // Keyword fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/Keyword.java
                            // (File)
                        } // Keyword

                    } // File

                    SampleComposition myFunctionalizingEntitySampleComposition= myFunctionalizingEntity.getSampleComposition();
                    if(myFunctionalizingEntitySampleComposition!=null) {
                        myString= myFunctionalizingEntitySampleComposition.toString();
                        logger.debug("myFunctionalizingEntitySampleComposition.getId()==" + myFunctionalizingEntitySampleComposition.getId());
                        // (SampleComposition)
                    }
                    ActivationMethod myActivationMethod= myFunctionalizingEntity.getActivationMethod();
                    if(myActivationMethod!=null) {
                        myString= myActivationMethod.toString();
                        logger.debug("myFunctionalizingEntity.myActivationMethod.getId()==" + myActivationMethod.getId());
                         // ActivationMethod fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/particle/ActivationMethod.java
                        FunctionalizingEntity myActivationMethodFunctionalizingEntity= myActivationMethod.getFunctionalizingEntity();
                        if(myActivationMethodFunctionalizingEntity!=null) {
                            myString= myActivationMethodFunctionalizingEntity.toString();
                            logger.debug("myActivationMethodFunctionalizingEntity.getId()==" + myActivationMethodFunctionalizingEntity.getId());
                            // (FunctionalizingEntity)
                        }
                    }
// crit.setFetchMode("sampleComposition.functionalizingEntityCollection.functionCollection",FetchMode.JOIN);
                    Set<Function> myFunctionalizingEntityFunctionSet= myFunctionalizingEntity.getFunctionCollection();
                    for(Function myFunctionalizingEntityFunction : myFunctionalizingEntityFunctionSet) {
                        myString= myFunctionalizingEntityFunction.toString();
                        logger.debug("myFunctionalizingEntity.myFunction.getId()==" + myFunctionalizingEntityFunction.getId());
                        // (Function)
                    } // Function

                }
            } // Function

            NanomaterialEntity myComposingElementNanomaterialEntity= myComposingElement.getNanomaterialEntity();
            if(myComposingElementNanomaterialEntity!=null) {
                myString= myComposingElementNanomaterialEntity.toString();
                logger.debug("myComposingElementNanomaterialEntity.getId()==" + myComposingElementNanomaterialEntity.getId());
                // (NanomaterialEntity)
            }
        } // ComposingElement

        Collection<File> myNanomaterialEntityFileCollection= myNanomaterialEntity.getFileCollection();
        for(File myNanomaterialEntityFile:myNanomaterialEntityFileCollection) {
            myString= myNanomaterialEntityFile.toString();
            logger.debug("myNanomaterialEntityFile.getId()==" + myNanomaterialEntityFile.getId());
             // File fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/File.java
            Set<Keyword> myFileKeywordSet= myNanomaterialEntityFile.getKeywordCollection();
            for(Keyword myFileKeyword : myFileKeywordSet) {
                myString= myFileKeyword.toString();
                logger.debug("myNanomaterialEntityFile.myKeyword.getId()==" + myFileKeyword.getId());
                 // Keyword fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/Keyword.java
                // (File)
            } // Keyword

        } // File

        SampleComposition myNanomaterialEntitySampleComposition= myNanomaterialEntity.getSampleComposition();
        if(myNanomaterialEntitySampleComposition!=null) {
            myString= myNanomaterialEntitySampleComposition.toString();
            logger.debug("myNanomaterialEntitySampleComposition.getId()==" + myNanomaterialEntitySampleComposition.getId());
            // (SampleComposition)
        }
    } // NanomaterialEntity

// crit.setFetchMode("sampleComposition.functionalizingEntityCollection",FetchMode.JOIN);
    Set<FunctionalizingEntity> mySampleCompositionFunctionalizingEntitySet= mySampleComposition.getFunctionalizingEntityCollection();
    for(FunctionalizingEntity mySampleCompositionFunctionalizingEntity : mySampleCompositionFunctionalizingEntitySet) {
        myString= mySampleCompositionFunctionalizingEntity.toString();
         // FunctionalizingEntity fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/particle/FunctionalizingEntity.java
        Set<File> myFunctionalizingEntityFileSet= mySampleCompositionFunctionalizingEntity.getFileCollection();
        for(File myFunctionalizingEntityFile : myFunctionalizingEntityFileSet) {
            myString= myFunctionalizingEntityFile.toString();
            logger.debug("mySampleCompositionFunctionalizingEntity.myFile.getId()==" + myFunctionalizingEntityFile.getId());
             // File fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/File.java
            Set<Keyword> myFileKeywordSet= myFunctionalizingEntityFile.getKeywordCollection();
            for(Keyword myFileKeyword : myFileKeywordSet) {
                myString= myFileKeyword.toString();
                logger.debug("myFunctionalizingEntityFile.myKeyword.getId()==" + myFileKeyword.getId());
                 // Keyword fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/Keyword.java
                // (File)
            } // Keyword

        } // File

        SampleComposition myFunctionalizingEntitySampleComposition= mySampleCompositionFunctionalizingEntity.getSampleComposition();
        if(myFunctionalizingEntitySampleComposition!=null) {
            myString= myFunctionalizingEntitySampleComposition.toString();
            logger.debug("mySampleCompositionFunctionalizingEntity.myFunctionalizingEntitySampleComposition.getId()==" + myFunctionalizingEntitySampleComposition.getId());
            // (SampleComposition)
        }
        ActivationMethod myFunctionalizingEntityActivationMethod= mySampleCompositionFunctionalizingEntity.getActivationMethod();
        if(myFunctionalizingEntityActivationMethod!=null) {
            myString= myFunctionalizingEntityActivationMethod.toString();
            logger.debug("mySampleCompositionFunctionalizingEntity.myFunctionalizingEntityActivationMethod.getId()==" + myFunctionalizingEntityActivationMethod.getId());
             // ActivationMethod fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/particle/ActivationMethod.java
            FunctionalizingEntity myActivationMethodFunctionalizingEntity= myFunctionalizingEntityActivationMethod.getFunctionalizingEntity();
            if(myActivationMethodFunctionalizingEntity!=null) {
                myString= myActivationMethodFunctionalizingEntity.toString();
                logger.debug("myFunctionalizingEntityActivationMethod.myActivationMethodFunctionalizingEntity.getId()==" + myActivationMethodFunctionalizingEntity.getId());
                // (FunctionalizingEntity)
            }
        }
        Set<Function> myFunctionalizingEntityFunctionSet= mySampleCompositionFunctionalizingEntity.getFunctionCollection();
        for(Function myFunctionalizingEntityFunction : myFunctionalizingEntityFunctionSet) {
            myString= myFunctionalizingEntityFunction.toString();
            logger.debug("mySampleCompositionFunctionalizingEntity.myFunction.getId()==" + myFunctionalizingEntityFunction.getId());
             // Function fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/particle/Function.java
            ComposingElement myFunctionComposingElement= myFunctionalizingEntityFunction.getComposingElement();
            if(myFunctionComposingElement!=null) {
                myString= myFunctionComposingElement.toString();
                logger.debug("myFunctionalizingEntityFunction.myFunctionComposingElement.getId()==" + myFunctionComposingElement.getId());
                 // ComposingElement fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/particle/ComposingElement.java
                Collection<Function> myComposingElementFunctionCollection= myFunctionComposingElement.getInherentFunctionCollection();
                for(Function myComposingElementFunction:myComposingElementFunctionCollection) {
                    myString= myComposingElementFunction.toString();
                    logger.debug("myFunctionComposingElement.myComposingElementFunction.getId()==" + myComposingElementFunction.getId());
                    // (Function)
                } // Function

                NanomaterialEntity myComposingElementNanomaterialEntity= myFunctionComposingElement.getNanomaterialEntity();
                if(myComposingElementNanomaterialEntity!=null) {
                    myString= myComposingElementNanomaterialEntity.toString();
                    logger.debug("myFunctionComposingElement.myComposingElementNanomaterialEntity.getId()==" + myComposingElementNanomaterialEntity.getId());
                    // (NanomaterialEntity)
                }
            }
            FunctionalizingEntity myFunctionFunctionalizingEntity= myFunctionalizingEntityFunction.getFunctionalizingEntity();
            if(myFunctionFunctionalizingEntity!=null) {
                myString= myFunctionFunctionalizingEntity.toString();
                logger.debug("myFunctionalizingEntityFunction.myFunctionFunctionalizingEntity.getId()==" + myFunctionFunctionalizingEntity.getId());
                // (FunctionalizingEntity)
            }
        } // Function

    } // FunctionalizingEntity

// crit.setFetchMode("sampleComposition.chemicalAssociationCollection",FetchMode.JOIN);
    Set<ChemicalAssociation> myChemicalAssociationSet= mySampleComposition.getChemicalAssociationCollection();
    for(ChemicalAssociation myChemicalAssociation : myChemicalAssociationSet) {
        myString= myChemicalAssociation.toString();
        logger.debug("mySampleComposition.myChemicalAssociation.getId()==" + myChemicalAssociation.getId());
         // ChemicalAssociation fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/particle/ChemicalAssociation.java
        AssociatedElement myAssociatedElement= myChemicalAssociation.getAssociatedElementA();
        if(myAssociatedElement!=null) {
            myString= myAssociatedElement.toString();
            logger.debug("myChemicalAssociation.myAssociatedElement.getId()==" + myAssociatedElement.getId());
             // AssociatedElement fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/particle/AssociatedElement.java
            // (ChemicalAssociation)
            // (ChemicalAssociation)
        }
        AssociatedElement myChemicalAssociationAssociatedElement= myChemicalAssociation.getAssociatedElementB();
        if(myChemicalAssociationAssociatedElement!=null) {
            myString= myChemicalAssociationAssociatedElement.toString();
            logger.debug("myChemicalAssociationAssociatedElement.getId()==" + myChemicalAssociationAssociatedElement.getId());
             // AssociatedElement fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/particle/AssociatedElement.java
            // (ChemicalAssociation)
            // (ChemicalAssociation)
        }
        SampleComposition myChemicalAssociationSampleComposition= myChemicalAssociation.getSampleComposition();
        if(myChemicalAssociationSampleComposition!=null) {
            myString= myChemicalAssociationSampleComposition.toString();
            logger.debug("myChemicalAssociationSampleComposition.getId()==" + myChemicalAssociationSampleComposition.getId());
            // (SampleComposition)
        }
        Collection<File> myChemicalAssociationFileCollection= myChemicalAssociation.getFileCollection();
        for(File myChemicalAssociationFile:myChemicalAssociationFileCollection) {
            myString= myChemicalAssociationFile.toString();
            logger.debug("myChemicalAssociationFile.getId()==" + myChemicalAssociationFile.getId());
             // File fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/File.java
            Set<Keyword> myFileKeywordSet= myChemicalAssociationFile.getKeywordCollection();
            for(Keyword myFileKeyword : myFileKeywordSet) {
                myString= myFileKeyword.toString();
                logger.debug("myChemicalAssociationFile.myKeyword.getId()==" + myFileKeyword.getId());
                 // Keyword fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/Keyword.java
                // (File)
            } // Keyword

        } // File

    } // ChemicalAssociation

    Set<File> mySampleCompositionFileSet= mySampleComposition.getFileCollection();
    for(File mySampleCompositionFile : mySampleCompositionFileSet) {
        myString= mySampleCompositionFile.toString();
        logger.debug("mySampleComposition.myFile.getId()==" + mySampleCompositionFile.getId());
         // File fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/File.java
        Set<Keyword> myFileKeywordSet= mySampleCompositionFile.getKeywordCollection();
        for(Keyword myFileKeyword : myFileKeywordSet) {
            myString= myFileKeyword.toString();
            logger.debug("mySampleCompositionFile.myKeyword.getId()==" + myFileKeyword.getId());
             // Keyword fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/Keyword.java
            // (File)
        } // Keyword

    } // File

    Sample mySampleCompositionSample= mySampleComposition.getSample();
    if(mySampleCompositionSample!=null) {
        myString= mySampleCompositionSample.toString();
        logger.debug("mySampleCompositionSample.getId()==" + mySampleCompositionSample.getId());
        // (Sample)
    }
}
// crit.setFetchMode("publicationCollection", FetchMode.JOIN);
Set<Publication> myPublicationSet= mySample.getPublicationCollection();
for(Publication myPublication : myPublicationSet) {
    myString= myPublication.toString();
     // Publication fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/Publication.java
    Collection<Author> myAuthorCollection= myPublication.getAuthorCollection();
    for(Author myAuthor:myAuthorCollection) {
        myString= myAuthor.toString();
        logger.debug("myPublication.myAuthor.getId()==" + myAuthor.getId());
         // Author fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/Author.java
        Collection<Publication> myAuthorPublicationCollection= myAuthor.getPublicationCollection();
        for(Publication myAuthorPublication:myAuthorPublicationCollection) {
            myString= myAuthorPublication.toString();
            logger.debug("myAuthorPublication.getId()==" + myAuthorPublication.getId());
            // (Publication)
        } // Publication

    } // Author

} // Publication

// crit.setFetchMode("otherPointOfContactCollection", FetchMode.JOIN);
Set<PointOfContact> mySamplePointOfContactSet= mySample.getOtherPointOfContactCollection();
for(PointOfContact mySamplePointOfContact : mySamplePointOfContactSet) {
    myString= mySamplePointOfContact.toString();
    logger.debug("mySample.myPointOfContact.getId()==" + mySamplePointOfContact.getId());
     // PointOfContact fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/PointOfContact.java
    Organization myPointOfContactOrganization= mySamplePointOfContact.getOrganization();
    if(myPointOfContactOrganization!=null) {
        myString= myPointOfContactOrganization.toString();
        logger.debug("mySamplePointOfContact.myPointOfContactOrganization.getId()==" + myPointOfContactOrganization.getId());
         // Organization fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/Organization.java
        Collection<PointOfContact> myOrganizationPointOfContactCollection= myPointOfContactOrganization.getPointOfContactCollection();
        for(PointOfContact myOrganizationPointOfContact:myOrganizationPointOfContactCollection) {
            myString= myOrganizationPointOfContact.toString();
            logger.debug("myPointOfContactOrganization.myOrganizationPointOfContact.getId()==" + myOrganizationPointOfContact.getId());
            // (PointOfContact)
        } // PointOfContact

    }
} // PointOfContact

// crit.setFetchMode("keywordCollection", FetchMode.JOIN);
Set<Keyword> mySampleKeywordSet= mySample.getKeywordCollection();
for(Keyword mySampleKeyword : mySampleKeywordSet) {
    myString= mySampleKeyword.toString();
    logger.debug("mySample.myKeyword.getId()==" + mySampleKeyword.getId());
     // Keyword fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/Keyword.java
    Set<File> myKeywordFileSet= mySampleKeyword.getFileCollection();
    for(File myKeywordFile:myKeywordFileSet) {
        myString= myKeywordFile.toString();
        logger.debug("myKeywordFile.getId()==" + myKeywordFile.getId());
         // File fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/File.java
        Set<Keyword> myFileKeywordSet= myKeywordFile.getKeywordCollection();
        for(Keyword myFileKeyword : myFileKeywordSet) {
            myString= myFileKeyword.toString();
            logger.debug("myKeywordFile.myKeyword.getId()==" + myFileKeyword.getId());
            // (Keyword)
        } // Keyword

    } // File

} // Keyword

// crit.setFetchMode("synthesis", FetchMode.JOIN);
Synthesis mySynthesis= mySample.getSynthesis();
if(mySynthesis!=null) {
    myString= mySynthesis.toString();
    logger.debug("mySample.mySynthesis.getId()==" + mySynthesis.getId());
     // Synthesis fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/particle/Synthesis.java
// crit.setFetchMode("synthesis.synthesisPurifications",FetchMode.JOIN);
    Set<SynthesisPurification> mySynthesisPurificationSet= mySynthesis.getSynthesisPurifications();
    for(SynthesisPurification mySynthesisPurification : mySynthesisPurificationSet) {
        myString= mySynthesisPurification.toString();
        logger.debug("mySynthesisPurification.getId()==" + mySynthesisPurification.getId());
         // SynthesisPurification fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/particle/SynthesisPurification.java
        Synthesis mySynthesisPurificationSynthesis= mySynthesisPurification.getSynthesis();
        if(mySynthesisPurificationSynthesis!=null) {
            myString= mySynthesisPurificationSynthesis.toString();
            logger.debug("mySynthesisPurificationSynthesis.getId()==" + mySynthesisPurificationSynthesis.getId());
            // (Synthesis)
        }
        Protocol mySynthesisPurificationProtocol= mySynthesisPurification.getProtocol();
        if(mySynthesisPurificationProtocol!=null) {
            myString= mySynthesisPurificationProtocol.toString();
            logger.debug("mySynthesisPurificationProtocol.getId()==" + mySynthesisPurificationProtocol.getId());
             // Protocol fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/Protocol.java
            File myProtocolFile= mySynthesisPurificationProtocol.getFile();
            if(myProtocolFile!=null) {
                myString= myProtocolFile.toString();
                logger.debug("mySynthesisPurificationProtocol.myProtocolFile.getId()==" + myProtocolFile.getId());
                 // File fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/File.java
                Set<Keyword> myFileKeywordSet= myProtocolFile.getKeywordCollection();
                for(Keyword myFileKeyword : myFileKeywordSet) {
                    myString= myFileKeyword.toString();
                    logger.debug("myProtocolFile.myKeyword.getId()==" + myFileKeyword.getId());
                    // (Keyword)
                } // Keyword

            }
        }
        Set<SynthesisPurity> mySynthesisPuritySet= mySynthesisPurification.getPurities();
        for(SynthesisPurity mySynthesisPurity : mySynthesisPuritySet) {
            myString= mySynthesisPurity.toString();
            logger.debug("mySynthesisPurification.mySynthesisPurity.getId()==" + mySynthesisPurity.getId());
             // SynthesisPurity fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/particle/SynthesisPurity.java
            Set<File> mySynthesisPurityFileSet= mySynthesisPurity.getFiles();
            for(File mySynthesisPurityFile : mySynthesisPurityFileSet) {
                myString= mySynthesisPurityFile.toString();
                logger.debug("mySynthesisPurity.myFile.getId()==" + mySynthesisPurityFile.getId());
                 // File fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/File.java
                Set<Keyword> myFileKeywordSet= mySynthesisPurityFile.getKeywordCollection();
                for(Keyword myFileKeyword : myFileKeywordSet) {
                    myString= myFileKeyword.toString();
                    logger.debug("mySynthesisPurityFile.myKeyword.getId()==" + myFileKeyword.getId());
                    // (Keyword)
                } // Keyword

            } // File

            Set<PurityDatumCondition> myPurityDatumConditionSet= mySynthesisPurity.getPurityDatumCollection();
            for(PurityDatumCondition myPurityDatumCondition : myPurityDatumConditionSet) {
                myString= myPurityDatumCondition.toString();
                logger.debug("mySynthesisPurity.myPurityDatumCondition.getPurityPkId()==" + myPurityDatumCondition.getPurityPkId());
                 // PurityDatumCondition fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/PurityDatumCondition.java
                SynthesisPurity myPurityDatumConditionSynthesisPurity= myPurityDatumCondition.getPurity();
                if(myPurityDatumConditionSynthesisPurity!=null) {
                    myString= myPurityDatumConditionSynthesisPurity.toString();
                    logger.debug("myPurityDatumConditionSynthesisPurity.getId()==" + myPurityDatumConditionSynthesisPurity.getId());
                // (SynthesisPurity)
                }
                PurityColumnHeader myPurityColumnHeader= myPurityDatumCondition.getColumnHeader();
                if(myPurityColumnHeader!=null) {
                    myString= myPurityColumnHeader.toString();
                    logger.debug("myPurityDatumCondition.myPurityColumnHeader.getId()==" + myPurityColumnHeader.getId());
                     // PurityColumnHeader fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/PurityColumnHeader.java
                }
            } // PurityDatumCondition

            SynthesisPurification mySynthesisPuritySynthesisPurification= mySynthesisPurity.getSynthesisPurification();
            if(mySynthesisPuritySynthesisPurification!=null) {
                myString= mySynthesisPuritySynthesisPurification.toString();
                logger.debug("mySynthesisPuritySynthesisPurification.getId()==" + mySynthesisPuritySynthesisPurification.getId());
                // (SynthesisPurification)
            }
        } // SynthesisPurity

        Set<PurificationConfig> myPurificationConfigSet= mySynthesisPurification.getPurificationConfigs();
        for(PurificationConfig myPurificationConfig : myPurificationConfigSet) {
            myString= myPurificationConfig.toString();
            logger.debug("mySynthesisPurification.myPurificationConfig.getPurificationConfigPkId()==" + myPurificationConfig.getPurificationConfigPkId());
             // PurificationConfig fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/PurificationConfig.java
            Technique myPurificationConfigTechnique= myPurificationConfig.getTechnique();
            if(myPurificationConfigTechnique!=null) {
                myString= myPurificationConfigTechnique.toString();
                logger.debug("myPurificationConfigTechnique.getId()==" + myPurificationConfigTechnique.getId());
                 // Technique fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/Technique.java
            }
            Collection<Instrument> myPurificationConfigInstrumentCollection= myPurificationConfig.getInstrumentCollection();
            for(Instrument myPurificationConfigInstrument:myPurificationConfigInstrumentCollection) {
                myString= myPurificationConfigInstrument.toString();
                logger.debug("myPurificationConfigInstrument.getId()==" + myPurificationConfigInstrument.getId());
                 // Instrument fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/Instrument.java
            } // Instrument

        } // PurificationConfig

        Set<File> mySynthesisPurificationFileSet= mySynthesisPurification.getFiles();
        for(File mySynthesisPurificationFile : mySynthesisPurificationFileSet) {
            myString= mySynthesisPurificationFile.toString();
            logger.debug("mySynthesisPurification.myFile.getId()==" + mySynthesisPurificationFile.getId());
             // File fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/File.java
            Set<Keyword> myFileKeywordSet= mySynthesisPurificationFile.getKeywordCollection();
            for(Keyword myFileKeyword : myFileKeywordSet) {
                myString= myFileKeyword.toString();
                logger.debug("mySynthesisPurificationFile.myKeyword.getId()==" + myFileKeyword.getId());
                // (Keyword)
            } // Keyword

        } // File

    } // SynthesisPurification

// crit.setFetchMode("synthesis.synthesisFunctionalizations", FetchMode.JOIN);
    Set<SynthesisFunctionalization> mySynthesisFunctionalizationSet= mySynthesis.getSynthesisFunctionalizations();
    for(SynthesisFunctionalization mySynthesisFunctionalization : mySynthesisFunctionalizationSet) {
        myString= mySynthesisFunctionalization.toString();
        logger.debug("mySynthesisFunctionalization.getSynthesisFunctionalizationPkId()==" + mySynthesisFunctionalization.getSynthesisFunctionalizationPkId());
         // SynthesisFunctionalization fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/particle/SynthesisFunctionalization.java
        Synthesis mySynthesisFunctionalizationSynthesis= mySynthesisFunctionalization.getSynthesis();
        if(mySynthesisFunctionalizationSynthesis!=null) {
            myString= mySynthesisFunctionalizationSynthesis.toString();
            logger.debug("mySynthesisFunctionalizationSynthesis.getId()==" + mySynthesisFunctionalizationSynthesis.getId());
            // (Synthesis)
        }
        Protocol mySynthesisFunctionalizationProtocol= mySynthesisFunctionalization.getProtocol();
        if(mySynthesisFunctionalizationProtocol!=null) {
            myString= mySynthesisFunctionalizationProtocol.toString();
            logger.debug("mySynthesisFunctionalizationProtocol.getId()==" + mySynthesisFunctionalizationProtocol.getId());
             // Protocol fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/Protocol.java
            File myProtocolFile= mySynthesisFunctionalizationProtocol.getFile();
            if(myProtocolFile!=null) {
                myString= myProtocolFile.toString();
                logger.debug("mySynthesisFunctionalizationProtocol.myProtocolFile.getId()==" + myProtocolFile.getId());
                 // File fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/File.java
                Set<Keyword> myFileKeywordSet= myProtocolFile.getKeywordCollection();
                for(Keyword myFileKeyword : myFileKeywordSet) {
                    myString= myFileKeyword.toString();
                    logger.debug("myProtocolFile.myKeyword.getId()==" + myFileKeyword.getId());
                    // (Keyword)
                } // Keyword

            }
        }
        Set<SynthesisFunctionalizationElement> mySynthesisFunctionalizationElementSet= mySynthesisFunctionalization.getSynthesisFunctionalizationElements();
        for(SynthesisFunctionalizationElement mySynthesisFunctionalizationElement : mySynthesisFunctionalizationElementSet) {
            myString= mySynthesisFunctionalizationElement.toString();
            logger.debug("mySynthesisFunctionalizationElement.getId()==" + mySynthesisFunctionalizationElement.getId());
             // SynthesisFunctionalizationElement fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/particle/SynthesisFunctionalizationElement.java
            SynthesisFunctionalization mySynthesisFunctionalizationElementSynthesisFunctionalization= mySynthesisFunctionalizationElement.getSynthesisFunctionalization();
            if(mySynthesisFunctionalizationElementSynthesisFunctionalization!=null) {
                myString= mySynthesisFunctionalizationElementSynthesisFunctionalization.toString();
                logger.debug("mySynthesisFunctionalizationElementSynthesisFunctionalization.getId()==" + mySynthesisFunctionalizationElementSynthesisFunctionalization.getId());
                // (SynthesisFunctionalization)
            }
            Set<SfeInherentFunction> mySfeInherentFunctionSet= mySynthesisFunctionalizationElement.getSfeInherentFunctions();
            for(SfeInherentFunction mySfeInherentFunction : mySfeInherentFunctionSet) {
                myString= mySfeInherentFunction.toString();
                logger.debug("mySynthesisFunctionalizationElement.mySfeInherentFunction.getId()==" + mySfeInherentFunction.getId());
                 // SfeInherentFunction fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/particle/SfeInherentFunction.java
                SynthesisFunctionalizationElement mySfeInherentFunctionSynthesisFunctionalizationElement= mySfeInherentFunction.getSynthesisFunctionalizationElement();
                if(mySfeInherentFunctionSynthesisFunctionalizationElement!=null) {
                    myString= mySfeInherentFunctionSynthesisFunctionalizationElement.toString();
                    logger.debug("mySfeInherentFunctionSynthesisFunctionalizationElement.getId()==" + mySfeInherentFunctionSynthesisFunctionalizationElement.getId());
                    // (SynthesisFunctionalizationElement)
                }
            } // SfeInherentFunction

            Set<File> mySynthesisFunctionalizationElementFileSet= mySynthesisFunctionalizationElement.getFiles();
            for(File mySynthesisFunctionalizationElementFile : mySynthesisFunctionalizationElementFileSet) {
                myString= mySynthesisFunctionalizationElementFile.toString();
                logger.debug("mySynthesisFunctionalizationElement.myFile.getId()==" + mySynthesisFunctionalizationElementFile.getId());
                 // File fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/File.java
                Set<Keyword> myFileKeywordSet= mySynthesisFunctionalizationElementFile.getKeywordCollection();
                for(Keyword myFileKeyword : myFileKeywordSet) {
                    myString= myFileKeyword.toString();
                    logger.debug("mySynthesisFunctionalizationElementFile.myKeyword.getId()==" + myFileKeyword.getId());
                    // (Keyword)
                } // Keyword

            } // File

        } // SynthesisFunctionalizationElement

        Set<File> mySynthesisFunctionalizationFileSet= mySynthesisFunctionalization.getFiles();
        for(File mySynthesisFunctionalizationFile : mySynthesisFunctionalizationFileSet) {
            myString= mySynthesisFunctionalizationFile.toString();
            logger.debug("mySynthesisFunctionalization.myFile.getId()==" + mySynthesisFunctionalizationFile.getId());
             // File fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/File.java
            Set<Keyword> myFileKeywordSet= mySynthesisFunctionalizationFile.getKeywordCollection();
            for(Keyword myFileKeyword : myFileKeywordSet) {
                myString= myFileKeyword.toString();
                logger.debug("mySynthesisFunctionalizationFile.myKeyword.getId()==" + myFileKeyword.getId());
                // (Keyword)
            } // Keyword

        } // File

    } // SynthesisFunctionalization

// crit.setFetchMode("synthesis.synthesisMaterials", FetchMode.JOIN);
    Set<SynthesisMaterial> mySynthesisMaterialSet= mySynthesis.getSynthesisMaterials();
    for(SynthesisMaterial mySynthesisMaterial : mySynthesisMaterialSet) {
        myString= mySynthesisMaterial.toString();
        logger.debug("mySynthesisMaterial.getId()==" + mySynthesisMaterial.getId());
         // SynthesisMaterial fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/particle/SynthesisMaterial.java
        Set<File> mySynthesisMaterialFileSet= mySynthesisMaterial.getFileCollection();
        for(File mySynthesisMaterialFile : mySynthesisMaterialFileSet) {
            myString= mySynthesisMaterialFile.toString();
            logger.debug("mySynthesisMaterial.myFile.getId()==" + mySynthesisMaterialFile.getId());
             // File fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/File.java
            Set<Keyword> myFileKeywordSet= mySynthesisMaterialFile.getKeywordCollection();
            for(Keyword myFileKeyword : myFileKeywordSet) {
                myString= myFileKeyword.toString();
                logger.debug("mySynthesisMaterialFile.myKeyword.getId()==" + myFileKeyword.getId());
                // (Keyword)
            } // Keyword

        } // File

        Protocol mySynthesisMaterialProtocol= mySynthesisMaterial.getProtocol();
        if(mySynthesisMaterialProtocol!=null) {
            myString= mySynthesisMaterialProtocol.toString();
            logger.debug("mySynthesisMaterialProtocol.getId()==" + mySynthesisMaterialProtocol.getId());
             // Protocol fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/Protocol.java
            File myProtocolFile= mySynthesisMaterialProtocol.getFile();
            if(myProtocolFile!=null) {
                myString= myProtocolFile.toString();
                logger.debug("mySynthesisMaterialProtocol.myProtocolFile.getId()==" + myProtocolFile.getId());
                // (File)
            }
        }
        Synthesis mySynthesisMaterialSynthesis= mySynthesisMaterial.getSynthesis();
        if(mySynthesisMaterialSynthesis!=null) {
            myString= mySynthesisMaterialSynthesis.toString();
            logger.debug("mySynthesisMaterialSynthesis.getId()==" + mySynthesisMaterialSynthesis.getId());
            // (Synthesis)
        }
        Set<SynthesisMaterialElement> mySynthesisMaterialElementSet= mySynthesisMaterial.getSynthesisMaterialElements();
        for(SynthesisMaterialElement mySynthesisMaterialElement : mySynthesisMaterialElementSet) {
            myString= mySynthesisMaterialElement.toString();
            logger.debug("mySynthesisMaterialElement.getId()==" + mySynthesisMaterialElement.getId());
             // SynthesisMaterialElement fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/particle/SynthesisMaterialElement.java
            SynthesisMaterial mySynthesisMaterialElementSynthesisMaterial= mySynthesisMaterialElement.getSynthesisMaterial();
            if(mySynthesisMaterialElementSynthesisMaterial!=null) {
                myString= mySynthesisMaterialElementSynthesisMaterial.toString();
                logger.debug("mySynthesisMaterialElementSynthesisMaterial.getId()==" + mySynthesisMaterialElementSynthesisMaterial.getId());
                // (SynthesisMaterial)
            }
            Set<SmeInherentFunction> mySmeInherentFunctionSet= mySynthesisMaterialElement.getSmeInherentFunctions();
            for(SmeInherentFunction mySmeInherentFunction : mySmeInherentFunctionSet) {
                myString= mySmeInherentFunction.toString();
                logger.debug("mySynthesisMaterialElement.mySmeInherentFunction.getId()==" + mySmeInherentFunction.getId());
                 // SmeInherentFunction fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/particle/SmeInherentFunction.java
                SynthesisMaterialElement mySmeInherentFunctionSynthesisMaterialElement= mySmeInherentFunction.getSynthesisMaterialElement();
                if(mySmeInherentFunctionSynthesisMaterialElement!=null) {
                    myString= mySmeInherentFunctionSynthesisMaterialElement.toString();
                    logger.debug("mySmeInherentFunctionSynthesisMaterialElement.getId()==" + mySmeInherentFunctionSynthesisMaterialElement.getId());
                    // (SynthesisMaterialElement)
                }
            } // SmeInherentFunction

            Supplier mySupplier= mySynthesisMaterialElement.getSupplier();
            if(mySupplier!=null) {
                myString= mySupplier.toString();
                logger.debug("mySynthesisMaterialElement.mySupplier.getId()==" + mySupplier.getId());
                 // Supplier fn ./software/cananolab-webapp/src-domain/gov/nih/nci/cananolab/domain/common/Supplier.java
            }
            Set<File> mySynthesisMaterialElementFileSet= mySynthesisMaterialElement.getFiles();
            for(File mySynthesisMaterialElementFile : mySynthesisMaterialElementFileSet) {
                myString= mySynthesisMaterialElementFile.toString();
                logger.debug("mySynthesisMaterialElement.myFile.getId()==" + mySynthesisMaterialElementFile.getId());
                // (File)
            } // File

        } // SynthesisMaterialElement

    } // SynthesisMaterial

    Sample mySynthesisSample= mySynthesis.getSample();
    if(mySynthesisSample!=null) {
        myString= mySynthesisSample.toString();
        logger.debug("mySynthesisSample.getId()==" + mySynthesisSample.getId());
        // (Sample)
    }
}
return true;
}
};
return myTransactionInsertion;
}

	public Sample findSampleById(Long sampleId) throws ApplicationException, NoAccessException, ApplicationProviderException {
		if (!springSecurityAclService.currentUserHasReadPermission(sampleId, SecureClassesEnum.SAMPLE.getClazz()) &&
			!springSecurityAclService.currentUserHasWritePermission(sampleId, SecureClassesEnum.SAMPLE.getClazz())) {
			throw new NoAccessException("User has no access to sampleId " + sampleId);
		}
		logger.debug("findSampleById sampleId=="+sampleId+";");
		Sample mySample= null;
		CaNanoLabApplicationService appService= (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();
		DetachedCriteria crit= DetachedCriteria.forClass(Sample.class).add( Property.forName("id").eq(sampleId));
		//crit.setFetchMode("publicationCollection", FetchMode.JOIN);
		crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
		TransactionInsertion<Sample> myTransactionInsertion= getSampleTransactionInsertion();
        	mySample = appService.queryAndProcess(crit, myTransactionInsertion);
        	logger.debug("ran appService.queryAndProcess");
        	return mySample;
	}

	public Sample old_findSampleById(String sampleId) throws Exception
	{
		if (!springSecurityAclService.currentUserHasReadPermission(Long.valueOf(sampleId), SecureClassesEnum.SAMPLE.getClazz()) &&
			!springSecurityAclService.currentUserHasWritePermission(Long.valueOf(sampleId), SecureClassesEnum.SAMPLE.getClazz())) {
			throw new NoAccessException("User has no access to the sample " + sampleId);
		}

		logger.debug("===============Finding a sample by id: " + System.currentTimeMillis());
		Sample sample = null;
		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();

		DetachedCriteria crit = DetachedCriteria.forClass(Sample.class).add(
				Property.forName("id").eq(Long.valueOf(sampleId)));
		crit.setFetchMode("primaryPointOfContact", FetchMode.JOIN);
		crit.setFetchMode("primaryPointOfContact.organization", FetchMode.JOIN);
		crit.setFetchMode("otherPointOfContactCollection", FetchMode.JOIN);
		crit.setFetchMode("otherPointOfContactCollection.organization",
				FetchMode.JOIN);
		crit.setFetchMode("keywordCollection", FetchMode.JOIN);
		crit.setFetchMode("characterizationCollection", FetchMode.JOIN);
		crit.setFetchMode("sampleComposition.chemicalAssociationCollection",
				FetchMode.JOIN);
		crit.setFetchMode("sampleComposition.nanomaterialEntityCollection",
				FetchMode.JOIN);
		crit.setFetchMode(
				"sampleComposition.nanomaterialEntityCollection.composingElementCollection",
				FetchMode.JOIN);
		crit.setFetchMode(
				"sampleComposition.nanomaterialEntityCollection.composingElementCollection.inherentFunctionCollection",
				FetchMode.JOIN);

		crit.setFetchMode("sampleComposition.functionalizingEntityCollection",
				FetchMode.JOIN);
		crit.setFetchMode(
				"sampleComposition.functionalizingEntityCollection.functionCollection",
				FetchMode.JOIN);
		crit.setFetchMode("publicationCollection", FetchMode.JOIN);
		crit.setFetchMode("synthesis", FetchMode.JOIN);
		crit.setFetchMode("synthesis.synthesisMaterials", FetchMode.JOIN);
		crit.setFetchMode("synthesis.synthesisFunctionalizations", FetchMode.JOIN);
		crit.setFetchMode("synthesis.synthesisPurifications",FetchMode.JOIN);
		crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);

		List result = appService.query(crit);
		if (result.size() != 0) {
			sample = (Sample) result.get(0);
		}
		return sample;
	}

	public Sample findSampleByIdLazyLoad(String sampleId) throws Exception
	{
		if (!springSecurityAclService.currentUserHasReadPermission(Long.valueOf(sampleId), SecureClassesEnum.SAMPLE.getClazz()) &&
			!springSecurityAclService.currentUserHasWritePermission(Long.valueOf(sampleId), SecureClassesEnum.SAMPLE.getClazz())) {
			throw new NoAccessException("User has no access to the sample " + sampleId);
		}

		logger.debug("===============Finding a sample by id: " + System.currentTimeMillis());
		Sample sample = null;
		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();

		DetachedCriteria crit = DetachedCriteria.forClass(Sample.class).add(
				Property.forName("id").eq(Long.valueOf(sampleId)));

		crit.setFetchMode("publicationCollection", FetchMode.JOIN);
		crit.setFetchMode("synthesis", FetchMode.JOIN);
		crit.setFetchMode("synthesis.synthesisMaterials", FetchMode.JOIN);
		crit.setFetchMode("synthesis.synthesisFunctionalizations", FetchMode.JOIN);
		crit.setFetchMode("synthesis.synthesisPurifications",FetchMode.JOIN);
		crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);

		TransactionInsertion<Sample> lazyLoads = new TransactionInsertion<Sample>() {
			@Override
			public boolean executeInsideTransaction(Sample sample) {
				PointOfContact poc = sample.getPrimaryPointOfContact();
				String id = poc.toString();
				Organization org = poc.getOrganization();
				// It appears we actually need to do something with the org to get it to lazy load:
				id = org.toString();
				Set<PointOfContact> others = sample.getOtherPointOfContactCollection();
				for (PointOfContact poci : others) {
					Organization orgi = poci.getOrganization();
					id = orgi.toString();
				}
				Set<Keyword> keys = sample.getKeywordCollection();
				for (Keyword key : keys) {
					id = key.toString();
				}
				SampleComposition scomp = sample.getSampleComposition();
				if (scomp != null) {
					Set<NanomaterialEntity> nec = scomp.getNanomaterialEntityCollection();
					if (nec != null) {
						for (NanomaterialEntity ne : nec) {
							Collection<ComposingElement> cec = ne.getComposingElementCollection();
							if (cec != null) {
								for (ComposingElement ce : cec) {
									Collection<Function> ifc = ce.getInherentFunctionCollection();
									if (ifc != null) {
										for (Function fc : ifc) {
											FunctionalizingEntity fe = fc.getFunctionalizingEntity();
											id = fc.toString();
										}
									}
								}
							}
						}
					}
					Set<ChemicalAssociation> cac = scomp.getChemicalAssociationCollection();
					for (ChemicalAssociation ca : cac) {
						AssociatedElement a = ca.getAssociatedElementA();
						id = a.toString();
						AssociatedElement b = ca.getAssociatedElementB();
						id = b.toString();
						SampleComposition sa = ca.getSampleComposition();
						id = sa.toString();
						Collection<File> fic = ca.getFileCollection();
						for (File fi : fic) {
							Set<Keyword> fikc = fi.getKeywordCollection();
							for (Keyword kw : fikc) {
								id = kw.toString();
							}
						}
					}
					Set<FunctionalizingEntity> fec = scomp.getFunctionalizingEntityCollection();
					for (FunctionalizingEntity fe : fec) {
						Collection<Function> ifc = fe.getFunctionCollection();
						for (Function fc : ifc) {
							FunctionalizingEntity fet = fc.getFunctionalizingEntity();
							id = fet.toString();
						}
						Collection<File> fic = fe.getFileCollection();
						for (File fi : fic) {
							Set<Keyword> fikc = fi.getKeywordCollection();
							for (Keyword kw : fikc) {
								id = kw.toString();
							}
						}
						ActivationMethod am = fe.getActivationMethod();
						SampleComposition sa = fe.getSampleComposition();
					}
				}
				Set<Characterization> cs = sample.getCharacterizationCollection();
				for (Characterization ca : cs) {
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
					Set<ExperimentConfig> ecc = ca.getExperimentConfigCollection();
					for (ExperimentConfig ec : ecc) {
						Collection<Instrument> inc = ec.getInstrumentCollection();
						for (Instrument in : inc) {
							id = in.toString();
						}
						Technique tq = ec.getTechnique();
						id = tq.getType();
					}
					PointOfContact pc = ca.getPointOfContact();
				}
				return true;
			}
		};

		sample = appService.queryAndProcess(crit, lazyLoads);
		return sample;
	}

	/**
	 * WJRL 4/30/23: Use this for loading sample search results. Note that the system currently requires that a
	 * Sample gets wrapped into a SampleBean so it can then be handed to:
	 * SimpleSearchSampleBean.transferSampleBeanForBasicResultView(SampleBean sampleBean)
	 * and thus more stuff is loaded to create the SampleBean than is needed for the final result. Investigate
	 * ways to minimize the database queries even more.
	*/

	public Sample findShallowSampleByIdLazyLoad(String sampleId) throws Exception
	{
		if (!springSecurityAclService.currentUserHasReadPermission(Long.valueOf(sampleId), SecureClassesEnum.SAMPLE.getClazz()) &&
				!springSecurityAclService.currentUserHasWritePermission(Long.valueOf(sampleId), SecureClassesEnum.SAMPLE.getClazz())) {
			throw new NoAccessException("User has no access to the sample " + sampleId);
		}

		logger.debug("===============Finding a sample by id: " + System.currentTimeMillis());
		Sample sample = null;
		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();

		DetachedCriteria crit = DetachedCriteria.forClass(Sample.class).add(
				Property.forName("id").eq(Long.valueOf(sampleId)));
		crit.setFetchMode("publicationCollection", FetchMode.JOIN);
		crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
		System.out.println("Shallow Lazy load for search");

		TransactionInsertion<Sample> lazyLoads = new TransactionInsertion<Sample>() {
			@Override
			public boolean executeInsideTransaction(Sample sample) {
				PointOfContact poc = sample.getPrimaryPointOfContact();
				String id = poc.toString();
				Organization org = poc.getOrganization();
				// It appears we actually need to do something with the org to get it to lazy load:
				id = org.toString();
				Set<PointOfContact> others = sample.getOtherPointOfContactCollection();
				for (PointOfContact poci : others) {
					Organization orgi = poci.getOrganization();
					id = orgi.toString();
				}
				Set<Keyword> keys = sample.getKeywordCollection();
				for (Keyword key : keys) {
					id = key.toString();
				}
				SampleComposition scomp = sample.getSampleComposition();
				if (scomp != null) {
					Set<NanomaterialEntity> nec = scomp.getNanomaterialEntityCollection();
					if (nec != null) {
						for (NanomaterialEntity ne : nec) {
							Collection<ComposingElement> cec = ne.getComposingElementCollection();
							if (cec != null) {
								for (ComposingElement ce : cec) {
									Collection<Function> ifc = ce.getInherentFunctionCollection();
									if (ifc != null) {
										for (Function fc : ifc) {
											FunctionalizingEntity fe = fc.getFunctionalizingEntity();
											if (fe != null) {
												fe.getClass();
											}
										}
									}
								}
							}
						}
					}
					Set<FunctionalizingEntity> fec = scomp.getFunctionalizingEntityCollection();
					if (fec != null) {
						for (FunctionalizingEntity fe : fec) {
							Collection<Function> ifc = fe.getFunctionCollection();
							if (ifc != null) {
								for (Function fc : ifc) {
									FunctionalizingEntity fet = fc.getFunctionalizingEntity();
									if (fet != null) {
										fet.getClass();
									}
								}
							}
						}
					}
				}
				Set<Characterization> cs = sample.getCharacterizationCollection();
				for (Characterization ca : cs) {
					PointOfContact pc = ca.getPointOfContact();
					ca.getClass();
				}
				return true;
			}
		};

		sample = appService.queryAndProcess(crit, lazyLoads);
		return sample;
	}

	public Sample findSampleBasicById(String sampleId) throws Exception {
		if (!springSecurityAclService.currentUserHasReadPermission(Long.valueOf(sampleId), SecureClassesEnum.SAMPLE.getClazz()) &&
			!springSecurityAclService.currentUserHasWritePermission(Long.valueOf(sampleId), SecureClassesEnum.SAMPLE.getClazz())) {
			throw new NoAccessException("User has no access to the sample " + sampleId);
		}
		Sample sample = null;
		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
				.getApplicationService();

		DetachedCriteria crit = DetachedCriteria.forClass(Sample.class).add(
				Property.forName("id").eq(Long.valueOf(sampleId)));

		crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);

		List result = appService.query(crit);
		if (!result.isEmpty()) {
			sample = (Sample) result.get(0);
		}
		return sample;
	}

	public int getNumberOfPublicSamplesForJob() throws Exception
	{
		List<Long> publicData = aclDao.getIdsOfClassForSid(SecureClassesEnum.SAMPLE.getClazz().getName(), CaNanoRoleEnum.ROLE_ANONYMOUS.toString());
        return (publicData != null) ? publicData.size() : 0;
	}

	public int getNumberOfPublicSampleSources() throws Exception
	{
		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();

		Set<Organization> publicOrgs = new HashSet<Organization>();

		DetachedCriteria crit = DetachedCriteria.forClass(PointOfContact.class);
		crit.setFetchMode("organization", FetchMode.JOIN);
		List results = appService.query(crit);
		// get organizations associated with public point of contacts
		for(int i = 0; i< results.size(); i++)
		{
			PointOfContact poc = (PointOfContact) results.get(i);
			if (springSecurityAclService.checkObjectPublic(poc.getId(), SecureClassesEnum.POC.getClazz()))
				publicOrgs.add(poc.getOrganization());
		}

		return publicOrgs.size();
	}

	public int getNumberOfPublicSampleSourcesForJob() throws Exception
	{
		List<Long> publicData = aclDao.getIdsOfClassForSid(SecureClassesEnum.ORG.getClazz().getName(), CaNanoRoleEnum.ROLE_ANONYMOUS.toString());
        return (publicData != null) ? publicData.size() : 0;
	}

	public List<Long> getSampleAccessibleToACollabGrp(String groupName)
	{
        return aclDao.getIdsOfClassForSid(SecureClassesEnum.SAMPLE.getClazz().getName(), groupName);
	}

	public String[] getSampleViewStrs(Sample sample) {
		List<String> columns = new ArrayList<String>(7);
		columns.clear();
		columns.add(sample.getId().toString());
		columns.add(sample.getName());
		if (sample.getPrimaryPointOfContact() != null) {
			PointOfContact primaryPOC = sample.getPrimaryPointOfContact();
			columns.add(primaryPOC.getFirstName());
			columns.add(primaryPOC.getLastName());
			columns.add(primaryPOC.getOrganization().getName());
		} else {
			columns.add(null);
			columns.add(null);
			columns.add(null);
		}
		columns.add(StringUtils.join(
				getStoredNanomaterialEntityClassNames(sample),
				Constants.VIEW_CLASSNAME_DELIMITER));
		columns.add(StringUtils.join(
				getStoredFunctionalizingEntityClassNames(sample),
				Constants.VIEW_CLASSNAME_DELIMITER));
		columns.add(StringUtils.join(getStoredFunctionClassNames(sample),
				Constants.VIEW_CLASSNAME_DELIMITER));
		columns.add(StringUtils.join(
				getStoredChemicalAssociationClassNames(sample),
				Constants.VIEW_CLASSNAME_DELIMITER));
		columns.add(StringUtils.join(
				getStoredCharacterizationClassNames(sample),
				Constants.VIEW_CLASSNAME_DELIMITER));
		columns.add(StringUtils.join(getStoredSynthesisClassNames(sample), Constants.VIEW_CLASSNAME_DELIMITER));
		return columns.toArray(new String[0]);
	}

	public Integer[] convertToFunctionalizingEntityClassOrderNumber(String[] classNames) {
		Integer[] orderNumbers = new Integer[classNames.length];
		int i = 0;
		for (String name : classNames) {
			orderNumbers[i] = Constants.FUNCTIONALIZING_ENTITY_SUBCLASS_ORDER_MAP.get(name);
			i++;
		}
		return orderNumbers;
	}

	public Organization findOrganizationByName(String orgName) throws Exception {
		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
				.getApplicationService();
		DetachedCriteria crit = DetachedCriteria.forClass(Organization.class);
		crit.add(Restrictions.eq("name", orgName).ignoreCase());
		crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);

		List results = appService.query(crit);
		Organization org = null;
		for(int i = 0; i < results.size(); i++){
			org = (Organization) results.get(i);
		}
		return org;
	}

	public PointOfContact findPointOfContactById(String pocId) throws Exception {
		PointOfContact poc = null;

		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
				.getApplicationService();
		DetachedCriteria crit = DetachedCriteria.forClass(PointOfContact.class).add(Property.forName("id").eq(Long.valueOf(pocId)));
		crit.setFetchMode("organization", FetchMode.JOIN);
		List results = appService.query(crit);
        for (Object result : results) {
            poc = (PointOfContact) result;
        }
		return poc;
	}

	public List<PointOfContact> findPointOfContactsBySampleId(String sampleId)
			throws Exception {
		if (!springSecurityAclService.currentUserHasReadPermission(Long.valueOf(sampleId), SecureClassesEnum.SAMPLE.getClazz()) &&
			!springSecurityAclService.currentUserHasWritePermission(Long.valueOf(sampleId), SecureClassesEnum.SAMPLE.getClazz())) {
			throw new NoAccessException("User has no access to the sample " + sampleId);
		}
		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
				.getApplicationService();
		DetachedCriteria crit = DetachedCriteria.forClass(Sample.class).add(
				Property.forName("id").eq(Long.valueOf(sampleId)));
		crit.setFetchMode("primaryPointOfContact", FetchMode.JOIN);
		crit.setFetchMode("primaryPointOfContact.organization", FetchMode.JOIN);
		crit.setFetchMode("otherPointOfContactCollection", FetchMode.JOIN);
		crit.setFetchMode("otherPointOfContactCollection.organization",
				FetchMode.JOIN);
		crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);
		List<Object> results = appService.query(crit);
		List<PointOfContact> pointOfContacts = new ArrayList<PointOfContact>();
        for (Object result : results) {
            Sample sample = (Sample) result;
            PointOfContact primaryPOC = sample.getPrimaryPointOfContact();
            pointOfContacts.add(primaryPOC);
            Collection<PointOfContact> otherPOCs = sample.getOtherPointOfContactCollection();
            pointOfContacts.addAll(otherPOCs);
        }
		return pointOfContacts;
	}

	/**
	 * search sampleNames based on sample name str. The str can contain just a
	 * partial sample name or multiple partial names one per line
	 *
	 * @param nameStr
	 * @return
	 * @throws Exception
	 */
	public List<String> findSampleNamesBy(String nameStr) throws Exception {
		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider.getApplicationService();

		DetachedCriteria crit = DetachedCriteria.forClass(Sample.class);
		if (!StringUtils.isEmpty(nameStr)) {
			// split nameStr to multiple words if needed
			List<String> nameStrs = StringUtils.parseToWords(nameStr, "\n");
			if (nameStrs.size() == 1) {
				crit.add(Restrictions.ilike("name", nameStr, MatchMode.ANYWHERE));
			} else {
				Disjunction disjunction = Restrictions.disjunction();
				for (String str : nameStrs) {
					Criterion strCrit = Restrictions.ilike("name", str, MatchMode.ANYWHERE);
					disjunction.add(strCrit);
				}
				crit.add(disjunction);
			}
		}
		List results = appService.query(crit);
		List<String> sampleNames = new ArrayList<String>();
		for(int i = 0; i < results.size(); i++){
			Sample sample = (Sample) results.get(i);
			if (springSecurityAclService.currentUserHasReadPermission(sample.getId(), SecureClassesEnum.SAMPLE.getClazz()) ||
				springSecurityAclService.currentUserHasWritePermission(sample.getId(), SecureClassesEnum.SAMPLE.getClazz())) {
				sampleNames.add(sample.getName());
			} else {
				logger.debug("User doesn't have access to sample of name: " + sample.getName());
			}
		}
		return sampleNames;
	}

	public Set<String> findOtherSamplesFromSamePrimaryOrganization(
			String sampleId) throws Exception {
		Set<String> otherSamples = new TreeSet<String>();

		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
				.getApplicationService();
		HQLCriteria crit = new HQLCriteria(
				"select other.name, other.id from gov.nih.nci.cananolab.domain.particle.Sample as other "
						+ "where exists ("
						+ "select sample.name from gov.nih.nci.cananolab.domain.particle.Sample as sample "
						+ "where sample.primaryPointOfContact.organization.name=other.primaryPointOfContact.organization.name and sample.id="
						+ sampleId + " and other.name!=sample.name)");
		List results = appService.query(crit);
		for(int i = 0; i < results.size(); i++){
			Object[] row = (Object[]) results.get(i);
			String name = row[0].toString();
			String id = row[1].toString();
			if (//springSecurityAclService.currentUserHasReadPermission(Long.valueOf(id), SecureClassesEnum.SAMPLE.getClazz()) ||
				springSecurityAclService.currentUserHasWritePermission(Long.valueOf(id), SecureClassesEnum.SAMPLE.getClazz())) {
				otherSamples.add(name);
			} else {
				logger.debug("User doesn't have access to sample of name: " + name);
			}
		}
		return otherSamples;
	}

	public PointOfContact findPointOfContactByNameAndOrg(String firstName,
			String lastName, String orgName)
		throws ApplicationException, ApplicationProviderException
	{
		PointOfContact poc = null;

		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
				.getApplicationService();
		DetachedCriteria crit = DetachedCriteria.forClass(PointOfContact.class);
		crit.createAlias("organization", "organization");
		if (!StringUtils.isEmpty(lastName))
			crit.add(Restrictions.eq("lastName", lastName));
		if (!StringUtils.isEmpty(firstName))
			crit.add(Restrictions.eq("firstName", firstName));
		if (!StringUtils.isEmpty(orgName))
			crit.add(Restrictions.eq("organization.name", orgName));
		crit.setResultTransformer(CriteriaSpecification.DISTINCT_ROOT_ENTITY);

		List results = appService.query(crit);
		for(int i = 0; i < results.size(); i++){
			poc = (PointOfContact) results.get(i);
		}
		return poc;
	}

	public List<String> findSampleIdsByOwner(String currentOwner)
			throws ApplicationException, ApplicationProviderException
	{
		List<String> sampleIds = new ArrayList<String>();

		// can't query for the entire Sample object due to
		// limitations in pagination in SDK
		// Sample sample = new Sample();
		ProjectionList projectionList = Projections.projectionList();
		projectionList.add(Projections.property("id"));
		DetachedCriteria crit = DetachedCriteria.forClass(Sample.class);
		crit.setProjection(Projections.distinct(projectionList));
		Criterion crit1 = Restrictions.eq("createdBy", currentOwner);
		// in case of copy createdBy is like lijowskim:COPY
		Criterion crit2 = Restrictions.like("createdBy", currentOwner + ":",
				MatchMode.START);
		crit.add(Expression.or(crit1, crit2));
		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
				.getApplicationService();

		List<Object> results = appService.query(crit);
        for (Object result : results) {
            String id = result.toString();
            if (springSecurityAclService.currentUserHasReadPermission(Long.valueOf(id), SecureClassesEnum.SAMPLE.getClazz()) ||
                    springSecurityAclService.currentUserHasWritePermission(Long.valueOf(id), SecureClassesEnum.SAMPLE.getClazz())) {
                sampleIds.add(id);
            } else {
                logger.debug("User doesn't have access to sample of ID: " + id);
            }
        }
		return sampleIds;
	}

	public List<String> getAllSamples()
			throws ApplicationException, ApplicationProviderException
	{
		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
				.getApplicationService();
		HQLCriteria crit = new HQLCriteria(
				"select id from gov.nih.nci.cananolab.domain.particle.Sample");
		List<Object> results = appService.query(crit);
		List<String> publicIds = new ArrayList<String>();
        for (Object result : results) {
            String id = (String) result.toString();
            publicIds.add(id);
        }
		return publicIds;
	}
	public List<Sample> findSamplesBy(String sampleName,
			String samplePointOfContact, String[] nanomaterialEntityClassNames,
			String[] otherNanomaterialEntityTypes,
			String[] functionalizingEntityClassNames,
			String[] otherFunctionalizingEntityTypes,
			String[] functionClassNames, String[] otherFunctionTypes,
			String[] characterizationClassNames,
			String[] otherCharacterizationTypes, String[] wordList)
			throws ApplicationException, ApplicationProviderException
	{
		List<String> sampleIds = new ArrayList<String>();

		//logger.error("Processing: " + sampleName);

		// can't query for the entire Sample object due to
		// limitations in pagination in SDK

		// added createdDate and sample name in the results so data can be
		// sorted by date and name
		DetachedCriteria crit = DetachedCriteria.forClass(Sample.class);
//				.setProjection(
//						Projections.projectionList()
//								.add(Projections.property("id"))
//								.add(Projections.property("name"))
//								.add(Projections.property("createdDate")));
		if (!StringUtils.isEmpty(sampleName)) {
			TextMatchMode nameMatchMode = new TextMatchMode(sampleName);
			crit.add(Restrictions.ilike("name", nameMatchMode.getUpdatedText(),
					nameMatchMode.getMatchMode()));
		}
		if (!StringUtils.isEmpty(samplePointOfContact)) {
			TextMatchMode pocMatchMode = new TextMatchMode(samplePointOfContact);
			Disjunction disjunction = Restrictions.disjunction();
			crit.createAlias("primaryPointOfContact", "pointOfContact");
			crit.createAlias("pointOfContact.organization", "organization");
			crit.createAlias("otherPointOfContactCollection", "otherPoc",
					CriteriaSpecification.LEFT_JOIN);
			crit.createAlias("otherPoc.organization", "otherOrg",
					CriteriaSpecification.LEFT_JOIN);
            String[] critStrs = {"pointOfContact.lastName",
                    "pointOfContact.firstName", "pointOfContact.role",
                    "organization.name", "otherPoc.lastName",
                    "otherPoc.firstName", "otherOrg.name"};
			for (String critStr : critStrs) {
				Criterion pocCrit = Restrictions.ilike(critStr,
						pocMatchMode.getUpdatedText(),
						pocMatchMode.getMatchMode());
				disjunction.add(pocCrit);
			}
			crit.add(disjunction);
		}

		// join composition
		if (nanomaterialEntityClassNames != null
				&& nanomaterialEntityClassNames.length > 0
				|| otherNanomaterialEntityTypes != null
				&& otherNanomaterialEntityTypes.length > 0
				|| functionClassNames != null && functionClassNames.length > 0
				|| otherFunctionTypes != null && otherFunctionTypes.length > 0
				|| functionalizingEntityClassNames != null
				&& functionalizingEntityClassNames.length > 0
				|| otherFunctionalizingEntityTypes != null
				&& otherFunctionalizingEntityTypes.length > 0) {
			crit.createAlias("sampleComposition", "comp",
					CriteriaSpecification.LEFT_JOIN);
		}
		// join nanomaterial entity
		if (nanomaterialEntityClassNames != null
				&& nanomaterialEntityClassNames.length > 0
				|| otherNanomaterialEntityTypes != null
				&& otherNanomaterialEntityTypes.length > 0
				|| functionClassNames != null && functionClassNames.length > 0
				|| otherFunctionTypes != null && otherFunctionTypes.length > 0) {
			crit.createAlias("comp.nanomaterialEntityCollection", "nanoEntity",
					CriteriaSpecification.LEFT_JOIN);
		}

		// join functionalizing entity
		if (functionalizingEntityClassNames != null
				&& functionalizingEntityClassNames.length > 0
				|| otherFunctionalizingEntityTypes != null
				&& otherFunctionalizingEntityTypes.length > 0
				|| functionClassNames != null && functionClassNames.length > 0
				|| otherFunctionTypes != null && otherFunctionTypes.length > 0) {
			crit.createAlias("comp.functionalizingEntityCollection",
					"funcEntity", CriteriaSpecification.LEFT_JOIN);
		}

		// nanomaterial entity
		if (nanomaterialEntityClassNames != null
				&& nanomaterialEntityClassNames.length > 0
				|| otherNanomaterialEntityTypes != null
				&& otherNanomaterialEntityTypes.length > 0
				|| functionClassNames != null && functionClassNames.length > 0
				|| otherFunctionTypes != null && otherFunctionTypes.length > 0) {
			Disjunction disjunction = Restrictions.disjunction();
			if (nanomaterialEntityClassNames != null
					&& nanomaterialEntityClassNames.length > 0) {
				Criterion nanoEntityCrit = Restrictions.in("nanoEntity.class",
						(Object[])nanomaterialEntityClassNames);
				disjunction.add(nanoEntityCrit);
			}
			if (otherNanomaterialEntityTypes != null
					&& otherNanomaterialEntityTypes.length > 0) {
				Criterion otherNanoCrit1 = Restrictions.eq("nanoEntity.class",
						"OtherNanomaterialEntity");
				Criterion otherNanoCrit2 = Restrictions.in("nanoEntity.type",
						(Object[])otherNanomaterialEntityTypes);
				Criterion otherNanoCrit = Restrictions.and(otherNanoCrit1,
						otherNanoCrit2);
				disjunction.add(otherNanoCrit);
			}
			crit.add(disjunction);
		}

		// functionalizing entity
		// need to turn class names into integers in order for the .class
		// clause to work
		if (functionalizingEntityClassNames != null
				&& functionalizingEntityClassNames.length > 0
				|| otherFunctionalizingEntityTypes != null
				&& otherFunctionalizingEntityTypes.length > 0
				|| functionClassNames != null && functionClassNames.length > 0
				|| otherFunctionTypes != null && otherFunctionTypes.length > 0) {
			Disjunction disjunction = Restrictions.disjunction();
			if (functionalizingEntityClassNames != null
					&& functionalizingEntityClassNames.length > 0) {
				Integer[] functionalizingEntityClassNameIntegers = this
						.convertToFunctionalizingEntityClassOrderNumber(functionalizingEntityClassNames);
				Criterion funcEntityCrit = Restrictions.in("funcEntity.class",
						(Object[])functionalizingEntityClassNameIntegers);
				disjunction.add(funcEntityCrit);
			}
			if (otherFunctionalizingEntityTypes != null
					&& otherFunctionalizingEntityTypes.length > 0) {
				Integer classOrderNumber = Constants.FUNCTIONALIZING_ENTITY_SUBCLASS_ORDER_MAP
						.get("OtherFunctionalizingEntity");
				Criterion otherFuncCrit1 = Restrictions.eq("funcEntity.class",
						classOrderNumber);
				Criterion otherFuncCrit2 = Restrictions.in("funcEntity.type",
						(Object[])otherFunctionalizingEntityTypes);
				Criterion otherFuncCrit = Restrictions.and(otherFuncCrit1,
						otherFuncCrit2);
				disjunction.add(otherFuncCrit);
			}
			crit.add(disjunction);
		}

		// function
		if (functionClassNames != null && functionClassNames.length > 0
				|| otherFunctionTypes != null && otherFunctionTypes.length > 0) {
			Disjunction disjunction = Restrictions.disjunction();
			crit.createAlias("nanoEntity.composingElementCollection",
					"compElement", CriteriaSpecification.LEFT_JOIN)
					.createAlias("compElement.inherentFunctionCollection",
							"inFunc", CriteriaSpecification.LEFT_JOIN);
			crit.createAlias("funcEntity.functionCollection", "func",
					CriteriaSpecification.LEFT_JOIN);
			if (functionClassNames != null && functionClassNames.length > 0) {
				Criterion funcCrit1 = Restrictions.in("inFunc.class",
						(Object[])functionClassNames);
				Criterion funcCrit2 = Restrictions.in("func.class",
						(Object[])functionClassNames);
				disjunction.add(funcCrit1).add(funcCrit2);
			}
			if (otherFunctionTypes != null && otherFunctionTypes.length > 0) {
				Criterion otherFuncCrit1 = Restrictions.and(
						Restrictions.eq("inFunc.class", "OtherFunction"),
						Restrictions.in("inFunc.type", (Object[])otherFunctionTypes));
				Criterion otherFuncCrit2 = Restrictions.and(
						Restrictions.eq("func.class", "OtherFunction"),
						Restrictions.in("func.type", (Object[])otherFunctionTypes));
				disjunction.add(otherFuncCrit1).add(otherFuncCrit2);
			}
			crit.add(disjunction);
		}

		// join characterization
		if (characterizationClassNames != null
				&& characterizationClassNames.length > 0
				|| otherCharacterizationTypes != null
				&& otherCharacterizationTypes.length > 0 || wordList != null
				&& wordList.length > 0) {
			crit.createAlias("characterizationCollection", "chara",
					CriteriaSpecification.LEFT_JOIN);
		}
		// characterization
		if (characterizationClassNames != null
				&& characterizationClassNames.length > 0
				|| otherCharacterizationTypes != null
				&& otherCharacterizationTypes.length > 0) {
			Disjunction disjunction = Restrictions.disjunction();
			if (characterizationClassNames != null
					&& characterizationClassNames.length > 0) {
				Criterion charCrit = Restrictions.in("chara.class",
						(Object[])characterizationClassNames);
				disjunction.add(charCrit);
			}
			if (otherCharacterizationTypes != null
					&& otherCharacterizationTypes.length > 0) {
				Criterion otherCharCrit1 = Restrictions.eq("chara.class",
						"OtherCharacterization");
				Criterion otherCharCrit2 = Restrictions.in("chara.name",
						(Object[])otherCharacterizationTypes);
				Criterion otherCharCrit = Restrictions.and(otherCharCrit1,
						otherCharCrit2);
				disjunction.add(otherCharCrit);
			}
			crit.add(disjunction);
		}
		// join keyword, finding, publication
		if (wordList != null && wordList.length > 0) {
			crit.createAlias("keywordCollection", "keyword1",
					CriteriaSpecification.LEFT_JOIN);
			crit.createAlias("chara.findingCollection", "finding",
					CriteriaSpecification.LEFT_JOIN)
					.createAlias("finding.fileCollection", "charFile",
							CriteriaSpecification.LEFT_JOIN)
					.createAlias("charFile.keywordCollection", "keyword2",
							CriteriaSpecification.LEFT_JOIN);
			// publication keywords
			crit.createAlias("publicationCollection", "pub1",
					CriteriaSpecification.LEFT_JOIN);
			crit.createAlias("pub1.keywordCollection", "keyword3",
					CriteriaSpecification.LEFT_JOIN);
		}

		// keyword
		if (wordList != null && wordList.length > 0) {
			Disjunction disjunction = Restrictions.disjunction();
			for (String keyword : wordList) {
				// strip wildcards from either ends of keyword
				keyword = StringUtils.stripWildcards(keyword);
				Criterion keywordCrit1 = Restrictions.ilike("keyword1.name",
						keyword, MatchMode.ANYWHERE);
				Criterion keywordCrit2 = Restrictions.ilike("keyword2.name",
						keyword, MatchMode.ANYWHERE);
				Criterion keywordCrit3 = Restrictions.ilike("keyword3.name",
						keyword, MatchMode.ANYWHERE);
				disjunction.add(keywordCrit1);
				disjunction.add(keywordCrit2);
				disjunction.add(keywordCrit3);
			}
			for (String word : wordList) {
				Criterion summaryCrit1 = Restrictions.ilike(
						"chara.designMethodsDescription", word,
						MatchMode.ANYWHERE);
				Criterion summaryCrit2 = Restrictions.ilike(
						"charFile.description", word, MatchMode.ANYWHERE);
				Criterion summaryCrit = Restrictions.or(summaryCrit1,
						summaryCrit2);
				disjunction.add(summaryCrit);
			}
			crit.add(disjunction);
		}

		CaNanoLabApplicationService appService = (CaNanoLabApplicationService) ApplicationServiceProvider
				.getApplicationService();

		List results = appService.query(crit);
		List<Sample> samples = new ArrayList<Sample>();
//		List<String> accessibleData = getAccessibleData();
		for(int i = 0; i < results.size(); i++){

			try {
				Sample sample = (Sample) results.get(i);
				System.out.println("sample ID test === "+sample.getId());
				samples.add(sample);
			} catch (ClassCastException e) {
				logger.error("Got ClassCastException: " + e.getMessage());
				break;
			}
		}

		List<Sample> orderedSamples = new ArrayList<Sample>(samples);
		// Collections.sort(orderedSamples,
		// Collections.reverseOrder(new Comparators.SampleDateComparator()));

		Collections
				.sort(orderedSamples, new Comparators.SampleDateComparator());

		for (Sample sample : orderedSamples) {
			sampleIds.add(sample.getId().toString());
		}


		return samples;
	}
}
