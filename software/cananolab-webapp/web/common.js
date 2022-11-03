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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPublicationService, [{
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SampleSearchResultsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "kzQT":
/*!**************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/logout/logout.component.ts ***!
  \**************************************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "l207");
/* harmony import */ var _assets_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/properties */ "DzTi");
/* harmony import */ var _top_main_menu_top_main_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../top-main-menu/top-main-menu.service */ "VE4C");
/* harmony import */ var _common_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/services/api.service */ "WHDV");
/* harmony import */ var _status_display_status_display_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../status-display/status-display.service */ "X3t+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/services/util.service */ "WHaB");









class LogoutComponent {
    constructor(topMainMenuService, apiService, statusDisplayService, router, utilService) {
        this.topMainMenuService = topMainMenuService;
        this.apiService = apiService;
        this.statusDisplayService = statusDisplayService;
        this.router = router;
        this.utilService = utilService;
        this.properties = _assets_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"];
    }
    ngOnInit() {
        if (!_assets_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"].LOGGING_OUT) {
            _assets_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"].LOGGING_OUT = true;
            (_assets_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"].LOGGED_IN) ? this.logOut() : console.log("User is already logged out.");
        }
        else {
            console.log("Logout process underway elsewhere--updating display only.");
        }
        this.topMainMenuService.showOnlyMenuItems([
            'HOME', 'HELP', 'GLOSSARY', 'PROTOCOLS', 'SAMPLES', 'PUBLICATIONS', 'LOGIN'
        ]);
        this.router.navigate([this.utilService.getRouteByName('HOME')]);
    }
    logOut() {
        this.apiService.doPost(_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].QUERY_LOGOUT, '').subscribe(data => {
            console.log("User logged out.");
            _assets_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"].LOGGED_IN = false;
            _assets_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"].logged_in = false;
            this.statusDisplayService.updateUser('guest');
            _assets_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"].LOGGING_OUT = false;
        }, err => {
            this.statusDisplayService.updateUser('unknown'); // CHECKME
            console.log('ERROR doPost Consts.QUERY_LOGOUT: ');
            console.log(err);
            _assets_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"].LOGGING_OUT = false;
        });
    }
}
LogoutComponent.ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_top_main_menu_top_main_menu_service__WEBPACK_IMPORTED_MODULE_3__["TopMainMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_status_display_status_display_service__WEBPACK_IMPORTED_MODULE_5__["StatusDisplayService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"])); };
LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoutComponent, selectors: [["canano-logout"]], decls: 0, vars: 0, template: function LogoutComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'canano-logout',
                templateUrl: './logout.component.html',
                styleUrls: ['./logout.component.scss']
            }]
    }], function () { return [{ type: _top_main_menu_top_main_menu_service__WEBPACK_IMPORTED_MODULE_3__["TopMainMenuService"] }, { type: _common_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _status_display_status_display_service__WEBPACK_IMPORTED_MODULE_5__["StatusDisplayService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: _common_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"] }]; }, null); })();


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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchSamplesByPublicationService, [{
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvancedSearchService, [{
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProtocolsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map