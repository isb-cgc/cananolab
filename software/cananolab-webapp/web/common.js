(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "UB0d":
/*!*************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/publications/search-publication/search-publication.service.ts ***!
  \*************************************************************************************************************/
/*! exports provided: SearchPublicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPublicationService", function() { return SearchPublicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SearchPublicationService {
    constructor() { }
    // gets publication search results //
    getPublicationSearchResults() {
        let results = JSON.parse(localStorage.getItem('cananolab_publication_search_results'));
        if (results) {
            return results;
        }
        return this.publicationSearchResults;
    }
    // sets publicastion search results //
    setPublicationSearchResults(data) {
        this.publicationSearchResults = data;
        localStorage.setItem('cananolab_publication_search_results', JSON.stringify(data));
    }
}
SearchPublicationService.ɵfac = function SearchPublicationService_Factory(t) { return new (t || SearchPublicationService)(); };
SearchPublicationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchPublicationService, factory: SearchPublicationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPublicationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "iyRt":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/general-info/sample-search/sample-search-results/sample-search-results.service.ts ***!
  \*****************************************************************************************************************************************/
/*! exports provided: SampleSearchResultsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleSearchResultsService", function() { return SampleSearchResultsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SampleSearchResultsService {
    constructor() {
        this.sampleIds = [];
        this.searchResultsEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    setSearchResults(sr) {
        localStorage.setItem('cananolab_sample_search_results', JSON.stringify(sr));
        this.searchResults = sr;
        this.searchResultsEmitter.emit(sr);
    }
    getSearchResults() {
        let results = JSON.parse(localStorage.getItem('cananolab_sample_search_results'));
        if (results) {
            return results;
        }
        return this.searchResults;
    }
    getSampleIds() {
        this.sampleIds = [];
        let results = JSON.parse(localStorage.getItem('cananolab_sample_search_results'));
        if (results) {
            // do samples ids stuff
        }
        else {
            results = this.searchResults;
        }
        results.forEach(sample => {
            this.sampleIds.push(sample.sampleId);
        });
        console.log(this.sampleIds);
        return this.sampleIds;
    }
}
SampleSearchResultsService.ɵfac = function SampleSearchResultsService_Factory(t) { return new (t || SampleSearchResultsService)(); };
SampleSearchResultsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SampleSearchResultsService, factory: SampleSearchResultsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SampleSearchResultsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "nwsW":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/publications/search-samples-by-publication/search-samples-by-publication.service.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: SearchSamplesByPublicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchSamplesByPublicationService", function() { return SearchSamplesByPublicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SearchSamplesByPublicationService {
    constructor() { }
    // gets publication search results //
    getPublicationSearchResults() {
        let results = JSON.parse(localStorage.getItem('cananolab_samples_by_publication_results'));
        if (results) {
            return results;
        }
        return this.samplesByPublicationResults;
    }
    // sets publicastion search results //
    setPublicationSearchResults(data) {
        this.samplesByPublicationResults = data;
        localStorage.setItem('cananolab_samples_by_publication_results', JSON.stringify(data));
    }
}
SearchSamplesByPublicationService.ɵfac = function SearchSamplesByPublicationService_Factory(t) { return new (t || SearchSamplesByPublicationService)(); };
SearchSamplesByPublicationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchSamplesByPublicationService, factory: SearchSamplesByPublicationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchSamplesByPublicationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pmFI":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/general-info/sample-search/advanced-search/advanced-search.service.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: AdvancedSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedSearchService", function() { return AdvancedSearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AdvancedSearchService {
    constructor() { }
    getAdvancedSearchResults() {
        let results = JSON.parse(localStorage.getItem('cananolab_advanced_search_results'));
        if (results) {
            return results;
        }
        else {
            return this.advancedSearchResults;
        }
    }
    setAdvancedSearchResults(data) {
        this.advancedSearchResults = data;
        localStorage.setItem('cananolab_advanced_search_results', JSON.stringify(data));
    }
    getSampleIds() {
        this.sampleIds = [];
        let results = JSON.parse(localStorage.getItem('cananolab_advanced_search_results'));
        if (results) {
            // do samples ids stuff
        }
        else {
            results = this.advancedSearchResults;
        }
        results['resultTable']['dataRows'].forEach(sample => {
            this.sampleIds.push(sample.sampleId);
        });
        return this.sampleIds;
    }
}
AdvancedSearchService.ɵfac = function AdvancedSearchService_Factory(t) { return new (t || AdvancedSearchService)(); };
AdvancedSearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdvancedSearchService, factory: AdvancedSearchService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvancedSearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zscP":
/*!******************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/protocols/protocols.service.ts ***!
  \******************************************************************************/
/*! exports provided: ProtocolsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtocolsService", function() { return ProtocolsService; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants */ "l207");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ProtocolsService {
    constructor() {
        this.currentProtocolScreen = _constants__WEBPACK_IMPORTED_MODULE_0__["ProtocolScreen"].PROTOCOL_SEARCH_INPUT_SCREEN;
        this.currentProtocolScreenEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    // gets publication search results //
    getProtocolSearchResults() {
        let results = JSON.parse(localStorage.getItem('cananolab_protocol_search_results'));
        if (results) {
            return results;
        }
        return this.protocolSearchResults;
    }
    // sets publicastion search results //
    setProtocolSearchResults(data) {
        this.protocolSearchResults = data;
        localStorage.setItem('cananolab_protocol_search_results', JSON.stringify(data));
    }
    setCurrentProtocolScreen(ps, info) {
        this.currentProtocolScreen = ps;
        this.currentProtocolInfo = info;
        if (info !== undefined) {
            this.currentProtocolScreenEmitter.emit({ ps, info });
        }
        else {
            this.currentProtocolScreenEmitter.emit({ ps });
        }
    }
    getCurrentProtocolScreen() {
        return this.currentProtocolScreen;
    }
    getCurrentProtocolInfo() {
        return this.currentProtocolInfo;
    }
}
ProtocolsService.ɵfac = function ProtocolsService_Factory(t) { return new (t || ProtocolsService)(); };
ProtocolsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProtocolsService, factory: ProtocolsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProtocolsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map