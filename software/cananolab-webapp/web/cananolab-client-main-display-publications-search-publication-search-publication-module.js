(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cananolab-client-main-display-publications-search-publication-search-publication-module"],{

/***/ "QLei":
/*!***************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/publications/search-publication/search-publication.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: SearchPublicationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPublicationComponent", function() { return SearchPublicationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants */ "l207");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/api.service */ "WHDV");
/* harmony import */ var _search_publication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-publication.service */ "UB0d");
/* harmony import */ var src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/cananolab-client/main-display/main-display-heading/main-display-heading.component */ "AYD1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _common_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/components/loader/loader.component */ "FBEc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function SearchPublicationComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errors["error"], " ");
} }
function SearchPublicationComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", category_r4 == ctx_r1.data["category"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r4, " ");
} }
function SearchPublicationComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchPublicationComponent_td_21_Template_input_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.clickResearchArea($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const researchArea_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", "researchArea_" + researchArea_r5)("ngValue", researchArea_r5)("value", researchArea_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", researchArea_r5, " ");
} }
function SearchPublicationComponent_div_68_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r12, " ");
} }
function SearchPublicationComponent_div_68_option_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r13, " ");
} }
function SearchPublicationComponent_div_68_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r14, " ");
} }
function SearchPublicationComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Sample Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchPublicationComponent_div_68_Template_select_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.data.nameOperand = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "contains");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "equals");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchPublicationComponent_div_68_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.data.sampleName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Composition Nanomaterial Entity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchPublicationComponent_div_68_Template_select_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.data.nanomaterialEntityTypes = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, SearchPublicationComponent_div_68_option_20_Template, 2, 1, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Composition Functionalizing Entity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchPublicationComponent_div_68_Template_select_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.data.functionalizingEntityTypes = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, SearchPublicationComponent_div_68_option_26_Template, 2, 1, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Function ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchPublicationComponent_div_68_Template_select_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.data.functionTypes = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, SearchPublicationComponent_div_68_option_32_Template, 2, 1, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.data.nameOperand);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r3.data.sampleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", 7)("ngModel", ctx_r3.data.nanomaterialEntityTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.setupData.nanomaterialEntityTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", 7)("ngModel", ctx_r3.data.functionalizingEntityTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.setupData.functionalizingEntityTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", 7)("ngModel", ctx_r3.data.functionTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.setupData.functionTypes);
} }
class SearchPublicationComponent {
    constructor(router, apiService, searchPublicationService) {
        this.router = router;
        this.apiService = apiService;
        this.searchPublicationService = searchPublicationService;
        this.loadingMessage = src_app_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].searchingMessage;
        this.setupData = {
            publicationResearchAreas: [],
            publicationCategories: [],
        };
    }
    ngOnInit() {
        this.errors = {};
        this.getSetupData();
        this.data = {
            "category": null,
            "titleOperand": "contains",
            "nameOperand": "contains",
            "researchArea": [],
            "functionTypes": []
        };
        this.dataTrailer = JSON.parse(JSON.stringify(this.data));
    }
    clickResearchArea(event) {
        if (event.target.checked) {
            this.data['researchArea'].push(event.target.value);
        }
        else {
            this.data['researchArea'].splice(this.data.researchArea.indexOf(event.target.value), 1);
        }
    }
    getSetupData() {
        this.loading = true;
        this.loadingMessage = src_app_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].loadingMessage;
        let url = this.apiService.doGet(src_app_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].QUERY_PUBLICATION_SETUP, '');
        url.subscribe(data => {
            this.setupData = data;
            this.errors = {};
            this.loading = null;
        }, errors => {
            this.loading = null;
            this.errors = errors;
        });
    }
    reset() {
        this.data = JSON.parse(JSON.stringify(this.dataTrailer));
    }
    searchPublication() {
        this.loading = true;
        this.loadingMessage = src_app_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].searchingMessage;
        this.apiService.doPost(src_app_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].QUERY_PUBLICATION_SEARCH, this.data).subscribe(data => {
            this.errors = {};
            this.searchPublicationService.setPublicationSearchResults(data);
            this.router.navigate(['home/publications/publication-search-results']);
        }, error => {
            this.loading = null;
            this.errors = error;
        });
    }
}
SearchPublicationComponent.ɵfac = function SearchPublicationComponent_Factory(t) { return new (t || SearchPublicationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_search_publication_service__WEBPACK_IMPORTED_MODULE_4__["SearchPublicationService"])); };
SearchPublicationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchPublicationComponent, selectors: [["canano-search-publication"]], decls: 76, vars: 26, consts: [[3, "helpUrl", "toolHeadingName"], ["name", "publicationSearchForm"], [1, "mainSection"], [3, "loading", "message"], ["class", "error", 4, "ngIf"], [1, "mainBorder"], [1, "searchForm"], [1, "label"], ["for", "category"], [3, "colSpan"], ["id", "category", "name", "data.category", 3, "ngModel", "ngModelChange"], [3, "selected", "ngValue"], [3, "selected", 4, "ngFor", "ngForOf"], ["for", "researchArea"], [4, "ngFor", "ngForOf"], ["for", "pubMedId"], ["id", "pubMedId", "type", "text", "name", "pubMedId", "size", "30", 3, "ngModel", "ngModelChange"], ["for", "digitalObjectId"], ["id", "digitalObjectId", "type", "text", "name", "digitalObjectId", "size", "30", 3, "ngModel", "ngModelChange"], ["for", "title"], ["for", "titleOperand"], ["id", "titleOperand", "name", "titleOperand", 3, "ngModel", "ngModelChange"], [3, "selected"], ["id", "title", "type", "text", "name", "data.title", "size", "30", 3, "ngModel", "ngModelChange"], ["for", "authorsStr"], ["name", "authorsStr", "id", "authorsStr", "rows", "3", "cols", "50", 3, "ngModel", "ngModelChange"], ["for", "keywordsStr"], ["name", "keywordsStr", "id", "keywordsStr", "rows", "3", "cols", "50", 3, "ngModel", "ngModelChange"], ["class", "mainBorder", 4, "ngIf"], [1, "buttons"], [1, "btn-canano", "btn-canano-danger", "btn-canano-lg", "mr-1", 3, "disabled", "click"], [1, "btn-canano", "btn-canano-primary", "btn-canano-lg", "mr-1", 3, "disabled", "click"], [1, "error"], ["id", "researchArea", "type", "checkbox", 3, "name", "ngValue", "value", "click"], ["for", "sampleName"], ["colspan", "5"], ["for", "nameOperand"], ["name", "nameOperand", "id", "nameOperand", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "sampleName", "id", "sampleName", "size", "70", 3, "ngModel", "ngModelChange"], ["for", "nanomaterialEntityTypes"], ["name", "nanomaterialEntityTypes", "id", "nanomaterialEntityTypes", "multiple", "", 1, "multiple", 3, "size", "ngModel", "ngModelChange"], ["for", "functionalizingEntityTypes"], ["name", "functionTypes", "id", "functionalizingEntityTypes", "multiple", "", 1, "multiple", 3, "size", "ngModel", "ngModelChange"], ["for", "functionTypes"], ["name", "functionTypes", "id", "functionTypes", "multiple", "", 1, "multiple", 3, "size", "ngModel", "ngModelChange"]], template: function SearchPublicationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canano-main-display-heading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "canano-loader", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchPublicationComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Publication Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchPublicationComponent_Template_select_ngModelChange_13_listener($event) { return ctx.data.category = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "--Select--");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SearchPublicationComponent_option_16_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Research Category ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SearchPublicationComponent_td_21_Template, 4, 4, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " PubMed ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchPublicationComponent_Template_input_ngModelChange_27_listener($event) { return ctx.data.pubMedId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Digital Object ID ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchPublicationComponent_Template_input_ngModelChange_33_listener($event) { return ctx.data.digitalObjectId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Publication Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchPublicationComponent_Template_select_ngModelChange_40_listener($event) { return ctx.data.titleOperand = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "contains");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "equals");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchPublicationComponent_Template_input_ngModelChange_45_listener($event) { return ctx.data.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Authors ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "textarea", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchPublicationComponent_Template_textarea_ngModelChange_51_listener($event) { return ctx.data.authorsStr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "enter one author per line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Keywords ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchPublicationComponent_Template_textarea_ngModelChange_61_listener($event) { return ctx.data.keywordsStr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "enter one keyword per line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, SearchPublicationComponent_div_68_Template, 33, 12, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Searching without any parameters returns all publications. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchPublicationComponent_Template_button_click_72_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchPublicationComponent_Template_button_click_74_listener() { return ctx.searchPublication(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("helpUrl", "https://wiki.nci.nih.gov/display/caNanoLab/Managing+Publications+in+caNanoLab#ManagingPublicationsincaNanoLab-SearchPublications")("toolHeadingName", "Publication Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.loading)("message", ctx.loadingMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors["error"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", ctx.setupData.publicationResearchAreas.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.category);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.data["category"] == null)("ngValue", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.setupData.publicationCategories);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.setupData.publicationResearchAreas);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", ctx.setupData.publicationResearchAreas.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.pubMedId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", ctx.setupData.publicationResearchAreas.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.digitalObjectId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", ctx.setupData.publicationResearchAreas.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.titleOperand);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", ctx.setupData.publicationResearchAreas.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.authorsStr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", ctx.setupData.publicationResearchAreas.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.keywordsStr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.setupData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPublicationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'canano-search-publication',
                templateUrl: './search-publication.component.html',
                styleUrls: ['../../../../btn-bravo-canano.scss', './search-publication.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _common_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: _search_publication_service__WEBPACK_IMPORTED_MODULE_4__["SearchPublicationService"] }]; }, null); })();


/***/ }),

/***/ "YCk9":
/*!********************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/publications/search-publication/search-publication-routing.module.ts ***!
  \********************************************************************************************************************/
/*! exports provided: SearchPublicationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPublicationRoutingModule", function() { return SearchPublicationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _search_publication_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-publication.component */ "QLei");





const routes = [{ path: '', component: _search_publication_component__WEBPACK_IMPORTED_MODULE_2__["SearchPublicationComponent"] }];
class SearchPublicationRoutingModule {
}
SearchPublicationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SearchPublicationRoutingModule });
SearchPublicationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SearchPublicationRoutingModule_Factory(t) { return new (t || SearchPublicationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchPublicationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPublicationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "YoKz":
/*!************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/publications/search-publication/search-publication.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: SearchPublicationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPublicationModule", function() { return SearchPublicationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _search_publication_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-publication.component */ "QLei");
/* harmony import */ var _search_publication_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-publication-routing.module */ "YCk9");
/* harmony import */ var _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/modules/set-object-value/shared.module */ "0U9J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class SearchPublicationModule {
}
SearchPublicationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SearchPublicationModule });
SearchPublicationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SearchPublicationModule_Factory(t) { return new (t || SearchPublicationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _search_publication_routing_module__WEBPACK_IMPORTED_MODULE_3__["SearchPublicationRoutingModule"],
            _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchPublicationModule, { declarations: [_search_publication_component__WEBPACK_IMPORTED_MODULE_2__["SearchPublicationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _search_publication_routing_module__WEBPACK_IMPORTED_MODULE_3__["SearchPublicationRoutingModule"],
        _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPublicationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_search_publication_component__WEBPACK_IMPORTED_MODULE_2__["SearchPublicationComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _search_publication_routing_module__WEBPACK_IMPORTED_MODULE_3__["SearchPublicationRoutingModule"],
                    _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=cananolab-client-main-display-publications-search-publication-search-publication-module.js.map