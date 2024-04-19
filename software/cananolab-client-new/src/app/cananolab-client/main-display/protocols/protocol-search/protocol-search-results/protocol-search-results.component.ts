//

import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchResultsPagerService } from '../../../../common/components/search-results-pager/search-results-pager.service';
import { takeUntil, timeout } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { UtilService } from '../../../../common/services/util.service';
import { Consts, ProtocolScreen, SortState } from '../../../../../constants';
import { Properties } from '../../../../../../assets/properties';
import { ProtocolsService } from '../../protocols.service';
import { ApiService } from '../../../../common/services/api.service';
import { StatusDisplayService } from '../../../../status-display/status-display.service';
import { Router } from '@angular/router';
import { timeoutWith } from 'rxjs/operators'
import { throwError } from 'rxjs'

@Component({
    selector: 'canano-protocol-search-results',
    templateUrl: './protocol-search-results.component.html',
    styleUrls: ['./protocol-search-results.component.scss'],
})
export class ProtocolSearchResultsComponent implements OnInit, OnDestroy {
    searchResults;
    columnHeadings = [
        {Actions: 'Actions'},
        {type: 'Protocol Type'},
        {viewName: 'Protocol Name'},
        {abbreviation: 'Abbreviation'},
        {version: 'Version'},
        {fileInfo: 'File'},
        {createdDate: 'Created'}
    ];
    consts = Consts;
    maxPageLength = Properties.MAX_PAGE_LENGTH;
    pageLength = Properties.DEFAULT_PAGE_LENGTH;
    pageCount = 10;
    searchResultsCount = -1;
    currentPage = 0;
    searchResultsPageToDisplay;
    helpUrl = Consts.HELP_URL_PROTOCOL_SEARCH_RESULTS;
    sortingStates = [
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

    fileTitle = '';
    fileDescription = '';
    fileHref = '';
    userName = 'X';

    private ngUnsubscribe: Subject<boolean> = new Subject<boolean>();

    constructor(
        private router: Router,
        private searchResultsPagerService: SearchResultsPagerService,
        private utilService: UtilService,
        private protocolsService: ProtocolsService,
        private apiService: ApiService,
        private statusDisplayService: StatusDisplayService
    ) {}

    ngOnInit() {
        this.searchResults = this.protocolsService.getProtocolSearchResults();
        this.searchResultsPagerService.currentPageChangeEmitter
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe((data) => {
                this.currentPage = data;
                this.setupPage();
            });

        this.statusDisplayService.updateUserEmitter
            .subscribe((data) => {
                this.userName = data;
            });

        this.searchResultsCount = this.searchResults.length;
        this.pageCount = Math.ceil(this.searchResultsCount / this.pageLength);
        this.onPageLengthChange();
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
        this.setupPage(); // Sets this page as the currently viewed search results.
    }

    setupPage() {
        this.searchResultsPageToDisplay = this.searchResults.slice(
            this.pageLength * this.currentPage,
            this.pageLength * (this.currentPage + 1)
        );
    }

    formatFileField(data) {
        // console.log(data)
        data = data.replace(/(^[^\/])/, '/$1');
        return data;
    }

    parseFileData(fileData: string) {}

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

    onEditClick(protocolToEdit) {
        this.router.navigate(['home/protocols/edit-protocol', protocolToEdit.id]);
        // this.protocolsService.setCurrentProtocolScreen( ProtocolScreen.PROTOCOL_EDIT_SCREEN, protocolToEdit.id );
    }

    onViewClick(protocolToView) {
        this.router.navigate(['home/protocols/view-protocol', protocolToView.id]);
    }

    navigateToProtocol(protocolId) {
        if (this.properties.LOGGED_IN) {
            let url = this.apiService.doGet(Consts.QUERY_PROTOCOL_WRITE_ACCESS, 'protocolId=' + protocolId);
            url.subscribe(data => {
                    let hasWriteAccess = data;
                    if (hasWriteAccess) {
                        console.log('has write access');
                        // current user have write access
                        this.router.navigate(['home/protocols/edit-protocol', protocolId]); // @FIXME  Don't hard code these
                    } else {
                        console.log('no write access');
                        this.router.navigate(['home/protocols/view-protocol', protocolId]); // @FIXME  Don't hard code these
                    }
                },
                error => {
                    console.log(error);
                })
        }
        else {
            // Not logged in
            console.log('not logged in');
            this.router.navigate(['home/protocols/view-protocol', protocolId]); // @FIXME  Don't hard code these
        }
    }

/*

    navigateToProtocol(protocol) {
        if (!this.properties.LOGGED_IN) {
            // not logged in
            this.router.navigate(['home/protocols/view-protocol', protocol.id]);
        } else {
            this.hasWriteAccess(protocol.id).subscribe(
                data => {
                    console.log(data);
                    let hasWriteAccess = data;

                    if (hasWriteAccess) {
                        this.router.navigate(['home/protocols/edit-protocol'], protocol.id);
                    } else {
                        this.router.navigate(['home/protocols/view-protocol'], protocol.id);
                    }
                },
                error => {
                    console.log(error);
                });
        }
    }

    hasWriteAccess(protocolId) {
        let hasWriteAccess;
        let getUrl = Consts.QUERY_PROTOCOL_WRITE_ACCESS;

        try {
            hasWriteAccess = this.apiService.doGet(getUrl, 'protocolId=' + protocolId);
        } catch(err) {
            console.error('doGet Exception: ' + err);
        }

        return hasWriteAccess;
    }

 */
    addToFavorites(res,
        protocolId,
        protocolName,
        fileId,
        editable,
        protocolFileTitle,
        lo
    ) {
        // api.doPost
        let queryData = {
            dataType: 'protocol',
            dataName: protocolName,
            dataId: protocolId,
            protocolFileId: fileId,
            protocolFileTitle: protocolFileTitle,
            editable: true,
            loginName: Properties.current_user,
        };

        this.apiService
            .doPost(Consts.QUERY_ADD_FAVORITE, <any>queryData)
            .subscribe(
                (data) => {
                    res['addedToFavorites'] = data;
                    console.log('Data back from addToFavorites: ', data);
                },
                (err) => {
                    console.error('ERR Data back from addToFavorites: ', err);
                }
            );
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
