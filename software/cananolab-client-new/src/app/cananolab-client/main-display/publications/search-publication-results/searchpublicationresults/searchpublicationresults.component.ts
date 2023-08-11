import { Component, OnInit } from '@angular/core';
import { SearchPublicationService } from '../../search-publication/search-publication.service';
import { Properties } from '../../../../../../assets/properties';
import { SearchResultsPagerService } from '../../../../common/components/search-results-pager/search-results-pager.service';
import { takeUntil, timeout } from 'rxjs/operators';
import { Consts, SortState } from '../../../../../constants';
import { StatusDisplayService } from '../../../../status-display/status-display.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from '../../../../common/services/api.service';
import { timeoutWith } from 'rxjs/operators'
import { throwError } from 'rxjs'

@Component({
    selector: 'canano-searchpublicationresults',
    templateUrl: './searchpublicationresults.component.html',
    styleUrls: ['./searchpublicationresults.component.scss'],
})
export class SearchpublicationresultsComponent implements OnInit {
    maxPageLength = Properties.MAX_PAGE_LENGTH;
    pageLength = Properties.DEFAULT_PAGE_LENGTH;
    columnHeadings = [
        { Actions: 'Actions' },
        { displayName: 'Bibliography Info' },
        { publicationType: 'Type' },
        { researchAreas: 'Research Category' },
        { sampleNames: 'Associated Sample Names' },
        { descriptionDetail: 'Description' },
        { status: 'Status' },
        { createdDate: 'Created' }
    ];
    errors = {};
    searchResults;
    helpUrl = Consts.HELP_URL_PUBLICATION_SEARCH_RESULTS;
    toolHeadingName = 'Publication Search Results';
    pageCount = 10;
    searchResultsCount = -1;
    currentPage = 0;
    searchResultsPageToDisplay;

    sortingStates = [
        SortState.NO_SORT,
        SortState.NO_SORT,
        SortState.NO_SORT,
        SortState.NO_SORT,
        SortState.NO_SORT,
        SortState.NO_SORT,
        SortState.NO_SORT,
        SortState.NO_SORT

    ];

    sortState = SortState;
    properties = Properties;
    userName;

    private ngUnsubscribe: Subject<boolean> = new Subject<boolean>();

    constructor(
        private apiService: ApiService,
        private router: Router,
        private statusDisplayService: StatusDisplayService,
        private searchResultsPagerService: SearchResultsPagerService,
        private searchPublicationService: SearchPublicationService
    ) {}

    ngOnInit(): void {
        this.searchResults =
            this.searchPublicationService.getPublicationSearchResults();
        this.searchResultsCount = this.searchResults.length;

        this.searchResultsPagerService.currentPageChangeEmitter
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(
                (data) => {
                    this.currentPage = data;
                    this.setupPage();
                    this.errors = {};
                },
                (error) => {
                    this.errors = error;
                }
            );

        console.log(this.properties);
        this.statusDisplayService.updateUserEmitter
            .subscribe(
                (data) => {
                    this.errors = {};
                    this.userName = data;
                },
                (error) => {
                    this.errors = error;
                }
            );

        this.searchResultsCount = this.searchResults.length;
        this.pageCount = Math.ceil(this.searchResultsCount / this.pageLength);
        this.onPageLengthChange();
    }

    navigateToPublication(publicationId) {
        this.router.navigate([
            '/home/samples/publications/publication',
            publicationId,
        ]);
    }

    addToFavorites(publication) {
        let data = {
            dataId: publication.id,
            dataName: publication.title,
            dataType: 'publication',
            editable: publication.editable,
            loginName: Properties.current_user,
            pubmedId: publication.pubmedId,
        };
        this.errors = {};
        this.apiService
            .doPost('/rest/core/addFavorite', data)
            .subscribe(
                (data) => {
                    publication['addedToFavorites']=data;
                    console.log('added to favorites');
                },
                (error) => {
                    this.errors = error;
                }
            );
    }

    onPageLengthChange() {
        if (this.pageLength < 1) {
            this.pageLength = 1;
        }
        if (this.pageLength > this.maxPageLength) {
            this.pageLength = this.maxPageLength;
        }

        this.pageCount = Math.ceil(this.searchResultsCount / this.pageLength);
        this.searchResultsPagerService.setPageCount(this.pageCount);
        this.setupPage(); // Sets this page as the currently vied search results.
    }

    onSortClick(i, key) {
        if (i) {
            if (this.sortingStates[i]) {
                // clicking on column that already is sorted on //
                this.sortingStates[i] = this.sortingStates[i] == 1 ? 2 : 1;
            } else {
                // reset sorting states //
                this.sortingStates.forEach((item, index) => {
                    this.sortingStates[index] = 0;
                });
                this.sortingStates[i] = 1;
            }
            console.log(this.sortingStates)
            if (this.sortingStates[i] == 1) {
                this.searchResults.sort((a, b) => (this.getStringValue(a[key]) > this.getStringValue(b[key]) ? 1 : -1));
            } else {
                this.searchResults.sort((a, b) => (this.getStringValue(a[key]) < this.getStringValue(b[key]) ? 1 : -1));
            }
            this.setupPage();
        }
    }

    getStringValue(val) {
        if (val) {
            return val.toString().toUpperCase()
        }
        return ''
    }

    setupPage() {
        this.searchResultsPageToDisplay = this.searchResults.slice(
            this.pageLength * this.currentPage,
            this.pageLength * (this.currentPage + 1)
        );
    }
}
