package gov.nih.nci.cananolab.restful.view;

import java.util.ArrayList;
import java.util.List;

public class SimpleSortRequestBean {

	String sortOn;

	List<String> sampleIDs;

	String direction;

	int pageNum;

	int pageLength;

	public String getSortOn() {
		return sortOn;
	}
	public void setSortOn(String samples) {
		this.sortOn = sortOn;
	}
	public List<String> getSampleIDs() {
		return sampleIDs;
	}
	public void setSampleIDs(List<String> sampleIDs) {
		this.sampleIDs = sampleIDs;
	}
	public String getDirection() {
		return direction;
	}
	public void setDirection(String direction) {
		this.direction = direction;
	}
	public int getPageNum() {
		return pageNum;
	}
	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}
	public int getPageLength() {
		return pageLength;
	}
	public void setPageLength(int pageLength) {
		this.pageLength = pageLength;
	}
}
