/*L
 *  Copyright Leidos
 *  Copyright Leidos Biomedical
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/cananolab/LICENSE.txt for details.
 */

package gov.nih.nci.cananolab.dto.common;

import gov.nih.nci.cananolab.domain.common.File;
import gov.nih.nci.cananolab.domain.common.Keyword;
import gov.nih.nci.cananolab.restful.view.edit.SimpleFileBean;
import gov.nih.nci.cananolab.security.utils.SpringSecurityUtil;
import gov.nih.nci.cananolab.util.Constants;
import gov.nih.nci.cananolab.util.DateUtils;
import gov.nih.nci.cananolab.util.StringUtils;
import java.util.Calendar;
import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.SortedSet;
import java.util.TreeSet;

/**
 * This class represents attributes of a lab file to be viewed in a view page.
 *
 * @author pansu
 *
 */
public class FileBean extends SecuredDataBean {
	protected File domainFile = new File();

	private boolean image = false;

	private String keywordsStr;

	private String externalUrl; // url as an external link

	private byte[] newFileData; // data from uploadedFile if upload happened

	private String createdDateStr;

	public String getDescription() {
		return StringUtils.escapeXmlButPreserveLineBreaks(domainFile
				.getDescription());
	}

	public FileBean() {
		domainFile.setUriExternal(Boolean.FALSE);
	}

	public FileBean(File file) {
		this.domainFile = file;
		if (file != null) {
			SortedSet<String> keywordStrs = new TreeSet<String>();
			if (domainFile.getKeywordCollection() != null) {
				for (Keyword keyword : domainFile.getKeywordCollection()) {
					keywordStrs.add(keyword.getName());
				}
			}
			keywordsStr = StringUtils.join(keywordStrs, "\r\n");
			if (file.getUri() != null && file.getUriExternal()) {
				externalUrl = file.getUri();
			}
		}
	}

	public boolean isImage() {
		image = StringUtils.isImgFileExt(getDomainFile().getUri());
		return image;
	}

	public File getDomainFile() {
		return domainFile;
	}

	public String getKeywordsStr() {
		SortedSet<String> keywordStrs = new TreeSet<String>();
		if (domainFile.getKeywordCollection() != null) {
			for (Keyword keyword : domainFile.getKeywordCollection()) {
				keywordStrs.add(keyword.getName());
			}
		}
		keywordsStr = StringUtils.join(keywordStrs, "\r\n");
		return keywordsStr;
	}

	public String getKeywordsDisplayName() {
		String str = getKeywordsStr();
		return StringUtils.escapeXmlButPreserveLineBreaks(str);
	}

	public void setKeywordsStr(String keywordsStr) {
		this.keywordsStr = keywordsStr;
	}

	public String getExternalUrl() {
		return externalUrl;
	}

	public void setExternalUrl(String externalUrl) {
		this.externalUrl = externalUrl;
	}

	public String getUrlTarget() {
		if (domainFile.getUri()!=null && domainFile.getUriExternal()) {
			return "pop";
		}
		return "_self";
	}

	public void setupDomainFile(String internalUriPath, String createdBy)
			throws Exception {
		if (domainFile.getId() != null && domainFile.getId() == 0) {
			domainFile.setId(null);
		}
		// updated created_date and created_by if id is null
		if (domainFile.getId() == null) {
			domainFile.setCreatedBy(createdBy);
			domainFile.setCreatedDate(Calendar.getInstance().getTime());
		}
		// updated created_by if created_by contains copy, but keep the original
		// created_date
		if (domainFile.getId() != null
				|| !StringUtils.isEmpty(domainFile.getCreatedBy())
				&& domainFile.getCreatedBy().contains(
						Constants.AUTO_COPY_ANNOTATION_PREFIX)) {
			domainFile.setCreatedBy(createdBy);
		}

		if(!StringUtils.isEmpty(domainFile.getUri())){
			domainFile.setName(domainFile.getUri());

		}
		else {
			newFileData = null;
		}
		// if entered external url
		if (domainFile.getUriExternal() && !StringUtils.isEmpty(externalUrl)) {
			domainFile.setUri(externalUrl);
			domainFile.setName(externalUrl);
		} else {
			String timestamp = DateUtils.convertDateToString(new Date(),
					"yyyyMMdd_HH-mm-ss-SSS");
			// if uploaded new file
			if (newFileData != null) {
				domainFile.setUri(internalUriPath + "/" + timestamp + "_"
						+ domainFile.getName());
			}
		}

		if (!StringUtils.isEmpty(keywordsStr)) {
			if (domainFile.getKeywordCollection() != null) {
				domainFile.getKeywordCollection().clear();
			} else {
				domainFile.setKeywordCollection(new HashSet<Keyword>());
			}
			String[] strs = keywordsStr.split("\r\n");
			for (String str : strs) {
				// change to upper case
				Keyword keyword = new Keyword();
				keyword.setName(str.toUpperCase());
				domainFile.getKeywordCollection().add(keyword);
			}
		}
	}
	

	public byte[] getNewFileData() {
		return newFileData;
	}

	public void setDomainFile(File domainFile) {
		this.domainFile = domainFile;
	}

	public String getCreatedDateStr() {
		createdDateStr = DateUtils.convertDateToString(domainFile
				.getCreatedDate(), Constants.DATE_FORMAT);
		return createdDateStr;
	}

	public FileBean copy() {
		FileBean copy = new FileBean();
		copy.getDomainFile().setType(domainFile.getType());
		copy.getDomainFile().setTitle(domainFile.getTitle());
		copy.getDomainFile().setDescription(domainFile.getDescription());
		copy.getDomainFile().setUriExternal(domainFile.getUriExternal());
		copy.setKeywordsStr(keywordsStr);
		copy.setExternalUrl(externalUrl);
		copy.getDomainFile().setId(domainFile.getId());
		copy.getDomainFile().setUri(domainFile.getUri());
		return copy;
	}

	public boolean equals(Object obj) {
		boolean eq = false;
		if (obj instanceof FileBean) {
			FileBean f = (FileBean) obj;
			Long thisId = getDomainFile().getId();
			if (thisId != null && thisId.equals(f.getDomainFile().getId())) {
				eq = true;
			}
		}
		return eq;
	}

	public void setNewFileData(byte[] newFileData) {
		this.newFileData = newFileData;
	}

	public void resetDomainCopy(String createdBy, File copy) {
		// append original ID to assist in copy
		copy.setCreatedBy(createdBy + ":"
				+ Constants.AUTO_COPY_ANNOTATION_PREFIX + ":" + copy.getId());
		copy.setId(null);
		Collection<Keyword> oldKeywords = copy.getKeywordCollection();
		if (oldKeywords == null || oldKeywords.isEmpty()) {
			copy.setKeywordCollection(null);
		} else {
			copy.setKeywordCollection(new HashSet<Keyword>(oldKeywords));
			// don't need to set keyword IDs because keywords are shared
		}
	}

	 public FileBean(SimpleFileBean sFileBean){
		File file = new File();
		if(sFileBean.getCreatedBy()!=null&&sFileBean.getCreatedBy().length()>0) {
			file.setCreatedBy(sFileBean.getCreatedBy());
			setCreatedBy(sFileBean.getCreatedBy());
			file.setCreatedDate(sFileBean.getCreatedDate());
		} else {
			file.setCreatedBy(SpringSecurityUtil.getLoggedInUserName());
			file.setCreatedDate(new Date());
		}
		file.setTitle(sFileBean.getTitle());
		file.setDescription(sFileBean.getDescription());
		//TODO figure out what name is supposed to do.  Eliminate if "nothing"  file.setName(sFileBean.get);
		file.setType(sFileBean.getType());
		file.setUri(sFileBean.getUri());
		file.setUriExternal(sFileBean.getUriExternal());
		setExternalUrl(sFileBean.getExternalUrl());
		if (!StringUtils.isEmpty(sFileBean.getKeywordsStr())) {
			String[] strs = sFileBean.getKeywordsStr().split("\r\n");
			for (String str : strs) {
				// change to upper case
				Keyword keyword = new Keyword();
				keyword.setName(str.toUpperCase());
				file.getKeywordCollection().add(keyword);
			}
		}
		setTheAccess(sFileBean.getTheAccess());
		setDomainFile(file);
	}
}
