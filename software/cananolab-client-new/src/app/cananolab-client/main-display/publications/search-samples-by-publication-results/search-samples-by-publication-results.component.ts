import { Component, OnInit } from '@angular/core';
import { SearchSamplesByPublicationService } from '../search-samples-by-publication/search-samples-by-publication.service';
import { Consts } from 'src/app/constants';
@Component({
  selector: 'canano-search-samples-by-publication-results',
  templateUrl: './search-samples-by-publication-results.component.html',
  styleUrls: ['./search-samples-by-publication-results.component.scss']
})
export class SearchSamplesByPublicationResultsComponent implements OnInit {
    results;

    helpUrl = Consts.HELP_URL_SAMPLE_SEARCH_BY_PUBLICATIONS_RESULTS
    toolHeadingName = 'Sample Information by Publication'
    consts = Consts;
    constructor(private searchSamplesByPublicationService: SearchSamplesByPublicationService) { }

    ngOnInit(): void {
        this.results = this.searchSamplesByPublicationService.getPublicationSearchResults();
    }

}
