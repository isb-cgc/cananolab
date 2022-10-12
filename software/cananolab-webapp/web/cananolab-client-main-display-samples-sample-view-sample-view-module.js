(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cananolab-client-main-display-samples-sample-view-sample-view-module"],{

/***/ "/in6":
/*!*************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/sample-view/sample-view-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: SampleViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleViewRoutingModule", function() { return SampleViewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sample_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sample-view.component */ "xABZ");





const routes = [{ path: '', component: _sample_view_component__WEBPACK_IMPORTED_MODULE_2__["SampleViewComponent"] }];
class SampleViewRoutingModule {
}
SampleViewRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SampleViewRoutingModule });
SampleViewRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SampleViewRoutingModule_Factory(t) { return new (t || SampleViewRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SampleViewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SampleViewRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "soEN":
/*!*****************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/sample-view/sample-view.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: SampleViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleViewModule", function() { return SampleViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sample_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sample-view.component */ "xABZ");
/* harmony import */ var _sample_view_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample-view-routing.module */ "/in6");
/* harmony import */ var _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/modules/set-object-value/shared.module */ "0U9J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class SampleViewModule {
}
SampleViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SampleViewModule });
SampleViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SampleViewModule_Factory(t) { return new (t || SampleViewModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _sample_view_routing_module__WEBPACK_IMPORTED_MODULE_3__["SampleViewRoutingModule"],
            _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SampleViewModule, { declarations: [_sample_view_component__WEBPACK_IMPORTED_MODULE_2__["SampleViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _sample_view_routing_module__WEBPACK_IMPORTED_MODULE_3__["SampleViewRoutingModule"],
        _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SampleViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_sample_view_component__WEBPACK_IMPORTED_MODULE_2__["SampleViewComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _sample_view_routing_module__WEBPACK_IMPORTED_MODULE_3__["SampleViewRoutingModule"],
                    _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "xABZ":
/*!********************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/sample-view/sample-view.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SampleViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleViewComponent", function() { return SampleViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../constants */ "l207");
/* harmony import */ var _assets_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../assets/properties */ "DzTi");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_cananolab_client_common_services_navigation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/cananolab-client/common/services/navigation.service */ "oLIu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_cananolab_client_common_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/cananolab-client/common/services/api.service */ "WHDV");
/* harmony import */ var src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/cananolab-client/main-display/main-display-heading/main-display-heading.component */ "AYD1");
/* harmony import */ var _common_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/components/loader/loader.component */ "FBEc");













function SampleViewComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const keyword_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", keyword_r2, " ");
} }
function SampleViewComponent_tr_34_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SampleViewComponent_tr_34_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function SampleViewComponent_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SampleViewComponent_tr_34_ng_container_2_Template, 2, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SampleViewComponent_tr_34_ng_container_3_Template, 2, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Org Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", contact_r3.primaryContact);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !contact_r3.primaryContact);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", contact_r3.contactPerson, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", contact_r3.organizationDisplayName, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", contact_r3.role, " ");
} }
const _c0 = function (a0) { return [a0]; };
class SampleViewComponent {
    constructor(navigationService, route, httpClient, router, apiService) {
        this.navigationService = navigationService;
        this.route = route;
        this.httpClient = httpClient;
        this.router = router;
        this.apiService = apiService;
        this.sampleId = -1;
        this.sampleName = '';
        this.helpUrl = _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].HELP_URL_SAMPLE_VIEW;
        this.toolHeadingNameViewSample = 'Sample ' + this.sampleName;
        this.pointOfContacts = [];
        this.keyWords = [];
    }
    ngOnInit() {
        this.navigationService.setCurrentSelectedItem(0);
        this.route.params.subscribe((params) => {
            this.sampleId = params['sampleId'].replace(/^.*\?sampleId=/, '').replace(/&.*$/, '');
            this.sampleName = params['sampleId'].replace(/^.*sampleName=/, '');
            this.toolHeadingNameViewSample = 'Sample ' + this.sampleName;
        });
        this.route.params.subscribe((params) => {
            this.sampleId = params['sampleId'].replace(/^.*\?sampleId=/, '');
            if (this.sampleId <= 0) {
                this.sampleId = _assets_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"].CURRENT_SAMPLE_ID;
            }
            else {
                _assets_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"].CURRENT_SAMPLE_ID = this.sampleId;
            }
            this.sampleData = this.getSampleViewData().subscribe(data => {
                _assets_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"].SAMPLE_TOOLS = true;
                this.sampleData = data;
                _assets_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"].CURRENT_SAMPLE_NAME = data['sampleName'];
                // this.pointOfContacts = this.sampleData['pointOfContactMap'];
                this.getPointOfContacts(data);
                this.keyWords = this.sampleData.keywords.split(/<br>/);
                this.toolHeadingNameViewSample = 'Sample ' + _assets_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"].CURRENT_SAMPLE_NAME;
            });
        });
    }
    downloadReady(event) {
        if (event == true) {
            this.loading = null;
        }
        if (event == false) {
            this.loading = true;
        }
    }
    topButtonGeneralInfo() {
        this.router.navigate(['home/samples/view-sample', '?sampleId=' + _assets_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"].CURRENT_SAMPLE_ID]);
    }
    topButtonComposition() {
        this.router.navigate(['home/samples/composition', _assets_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"].CURRENT_SAMPLE_ID]);
    }
    topButtonCharacterization() {
        this.router.navigate(['home/samples/characterization', _assets_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"].CURRENT_SAMPLE_ID]);
    }
    topButtonPublication() {
        this.router.navigate(['home/samples/publications', _assets_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"].CURRENT_SAMPLE_ID]);
    }
    getSampleViewData() {
        let getUrl = _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].QUERY_SAMPLE_VIEW;
        if (_assets_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"].DEBUG_CURL) {
            let curl = 'curl  -k \'' + getUrl + '\'';
            console.log(curl);
        }
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        let options = {
            headers: headers,
            method: 'get',
        };
        let results;
        try {
            results = this.apiService.doGet(getUrl, 'sampleId=' + this.sampleId);
        }
        catch (e) {
            // TODO react to error.
            console.error('doGet Exception: ' + e);
        }
        return results;
    }
    getPointOfContacts(data) {
        data['pointOfContactMap']['contactPerson'].forEach((element, index) => {
            let pointOfContact = {
                primaryContact: data['pointOfContactMap']['primaryContact'][index],
                organizationDisplayName: data['pointOfContactMap']['organizationDisplayName'][index],
                role: data['pointOfContactMap']['role'][index],
                contactPerson: data['pointOfContactMap']['contactPerson'][index]
            };
            this.pointOfContacts.push(pointOfContact);
        });
    }
    dateFormat(date) {
        if (date) {
            return Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(date, 'shortDate', 'en-US');
        }
    }
}
SampleViewComponent.ɵfac = function SampleViewComponent_Factory(t) { return new (t || SampleViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_cananolab_client_common_services_navigation_service__WEBPACK_IMPORTED_MODULE_5__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_cananolab_client_common_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"])); };
SampleViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SampleViewComponent, selectors: [["canano-sample-view"]], decls: 35, vars: 14, consts: [[3, "helpUrl", "toolHeadingName", "exportXML", "exportJSON", "sampleIds", "backUrl", "downloadReady"], [1, "mainSection"], [3, "loading", "message"], [1, "mainBorder"], [1, "dataMain"], [1, "label"], [4, "ngFor", "ngForOf"], [1, "dataTable"], [4, "ngIf"], [3, "innerHtml"]], template: function SampleViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "canano-main-display-heading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("downloadReady", function SampleViewComponent_Template_canano_main_display_heading_downloadReady_0_listener($event) { return ctx.downloadReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "canano-loader", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Sample Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Created Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Keywords ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SampleViewComponent_div_19_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Point of Contacts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Primary Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Contact Person ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Organization ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Role ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, SampleViewComponent_tr_34_Template, 11, 5, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("helpUrl", ctx.helpUrl)("toolHeadingName", ctx.toolHeadingNameViewSample)("exportXML", true)("exportJSON", true)("sampleIds", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.sampleId))("backUrl", "home/samples/sample-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.loading)("message", "Exporting Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.sampleData["sampleName"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dateFormat(ctx.sampleData["createdDate"]), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.keyWords);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pointOfContacts);
    } }, directives: [src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_8__["MainDisplayHeadingComponent"], _common_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["html[_ngcontent-%COMP%] {\n  font-family: arial, helvetica, verdana, sans-serif !important;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: arial, helvetica, verdana, sans-serif !important;\n}\n\n.header[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\ntd.leftMenu[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  width: 160px;\n  margin: 0px;\n  padding: 0px;\n  vertical-align: top;\n}\n\ntd.mainContent[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding: 0px;\n  margin: 0px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  border: solid #88BCE2;\n  border-width: 1px 1px 1px 0px;\n}\n\n.parent-div[_ngcontent-%COMP%] {\n  \n  display: flex;\n  flex-direction: row;\n  background-color: #fff;\n  width: 100%;\n}\n\n.link-clicker[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n.link-clicker[_ngcontent-%COMP%]:hover {\n  color: #a90101;\n  cursor: pointer;\n}\n\n\n\na[_ngcontent-%COMP%]:link {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n\n\na[_ngcontent-%COMP%]:visited {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n\n\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #a90101;\n}\n\n\n\na[_ngcontent-%COMP%]:active {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.unselectable[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  text-transform: uppercase;\n}\n\n.hand[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.clicker[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.search-results-table[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 100%;\n  border: solid #ccc 1px;\n}\n\n.search-results-tr[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: solid #ccc 1px;\n}\n\n.search-results-th[_ngcontent-%COMP%] {\n  padding: 6px;\n  border: solid #ccc 1px;\n  background-color: #0073b9;\n  color: #fff;\n}\n\n.search-results-td[_ngcontent-%COMP%] {\n  padding: 6px;\n  border-left: solid #ccc 1px;\n  border-right: solid #ccc 1px;\n}\n\n.rowOdd[_ngcontent-%COMP%] {\n  background-color: #efeded;\n}\n\n.search-results--tr-odd[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-width: 0px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  padding-left: 160px;\n  text-align: center;\n}\n\n.spacer.center[_ngcontent-%COMP%] {\n  color: #02055a;\n}\n\n.footer[_ngcontent-%COMP%] {\n  padding: 0px 0px 0px 160px;\n  vertical-align: middle !important;\n  text-align: center;\n  background-color: #02055a;\n  border: solid #88BCE2;\n  border-width: 1px 1px 1px 0px;\n  font-size: 12px;\n}\n\n.footer.white[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 0px;\n  padding: 10px 0px 0px 0px;\n  font-size: 9.5px;\n  color: #333;\n}\n\n.footer.white[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.footer.white[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline !important;\n  color: #333;\n}\n\n.footer.white.release[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  font-weight: normal !important;\n  color: #4A49A8;\n}\n\n.footer.white[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  padding: 0px 10px 0px 10px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  vertical-align: middle;\n  list-style: none;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  display: inline-block;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  color: #81FFFE;\n  border: solid #88BCE2;\n  border-width: 0px 1px 0px 0px;\n  padding: 4px 15px 4px 15px;\n  margin: 0px;\n  vertical-align: top;\n  text-transform: uppercase;\n  font-weight: bold;\n  outline: 0;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item.left[_ngcontent-%COMP%] {\n  border: solid #88BCE2;\n  border-width: 0px 1px 0px 1px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item[_ngcontent-%COMP%]:hover {\n  background-color: #81FFFE;\n  color: #02055a;\n  margin: 0px;\n  vertical-align: top;\n}\n\n.rowOdd[_ngcontent-%COMP%] {\n  background-color: #efeded;\n}\n\ntable.dataTable[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #ccc;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  font-weight: bold;\n  padding: 3px 3px 3px 5px;\n  border: 1px solid #ccc;\n  text-transform: capitalize;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n  width: 250px;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%] {\n  width: 110px !important;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0px 4px 0px 0px;\n}\n\n.actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0px 4px 0px 0px;\n}\n\n.myFilters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.outer-input-frame[_ngcontent-%COMP%] {\n  border: solid #d4d4d4 2px;\n}\n\n.mainSection[_ngcontent-%COMP%] {\n  margin: 10px 0px 5px 7px;\n  padding: 0px;\n  font-size: 12px;\n  min-width: 1150px !important;\n}\n\n.mainBorder[_ngcontent-%COMP%] {\n  padding: 15px 15px 15px 15px;\n  border: 1px solid #ccc;\n  margin: 0px 0px 0px 2px;\n  width: 100%;\n}\n\n.mainBorder.loading[_ngcontent-%COMP%] {\n  background-color: #005d7e !important;\n  color: #fff;\n  padding: 15px !important;\n  margin-bottom: 15px;\n}\n\n.dataMain[_ngcontent-%COMP%] {\n  margin: 5px;\n  width: 90%;\n}\n\n.dataMain[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  width: 200px;\n  padding: 10px;\n  font-weight: bold;\n  vertical-align: top;\n}\n\n.dataMain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  vertical-align: top;\n}\n\n.dataMain[_ngcontent-%COMP%]   td.buttons[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.links-panel[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.links-panel.card.ml-1.mt-2[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n}\n\n.create-search-button-group[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.create-delete-button-group[_ngcontent-%COMP%] {\n  float: left;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-right: 5px !important;\n}\n\n.searchForm[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.searchForm[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding: 5px 10px 5px 0px;\n}\n\n.searchForm[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding-right: 20px;\n  width: 150px;\n}\n\n.searchForm[_ngcontent-%COMP%]   select.multiple[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.searchForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n\n.searchForm[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\n.submit[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.submit[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  margin: 10px;\n  text-align: right;\n}\n\n.buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #4A49A8;\n  text-align: center;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n  margin: 5px;\n  font-size: 14px !important;\n}\n\n.mainSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #00f !important;\n  text-decoration: underline !important;\n}\n\n.mainSection[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-bottom: 13px !important;\n  font-size: 12px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .blueHeader[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #0073b9;\n  color: #fff;\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: #005518;\n  color: #fff;\n  padding: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .editButton[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  text-align: right;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain.files[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 200px;\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties.files[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  width: 100%;\n  margin-bottom: 5px;\n}\n\n.experimentConfigurations[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  width: 300px;\n}\n\nul[_ngcontent-%COMP%] {\n  padding-left: 13px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%] {\n  min-width: 650px;\n}\n\n.files[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\nlabel.right[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NhbmFub2xhYi1jbGllbnQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9zYW1wbGUtdmlldy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL21haW4tZGlzcGxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQkE7RUFDSSw2REFGb0I7QUNkeEI7O0FEbUJBO0VBQ0ksNkRBTm9CO0FDVnhCOztBRGtCQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDZkQ7O0FEb0JBO0VBRUkseUJBN0JxQjtFQThCckIsWUEzQlk7RUE0QmYsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ2xCRDs7QURxQkE7RUFFSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDbkJKOztBRHNCQTtFQUVJLHlCQTdDcUI7RUE4Q3JCLHFCQUFBO0VBQ0EsNkJBQUE7QUNwQko7O0FEdUJBO0VBQ0ksa0VBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNwQko7O0FEd0JBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ3JCSjs7QUR1Qkk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ3JCUjs7QUR5QkEsbUJBQUE7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FDdEJKOztBRHlCQSxpQkFBQTs7QUFDQTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUN0Qko7O0FEeUJBLG9CQUFBOztBQUNBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQ3RCSjs7QUR5QkEsa0JBQUE7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FDdEJKOztBRHlCQTtFQUNJLGFBQUE7QUN0Qko7O0FEeUJBO0VBQ0ksMkJBQUE7RUFDQSx5QkFBQTtFQUlBLGlCQUFBO0VBQ0EseUJBQUE7QUN0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QUFBO0VBQ0EsWUFBQTtBRGdSSjs7QUM3UUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBRGdSSjs7QUM1UUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FEK1FKOztBQzVRQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FEK1FKOztBQzNRQTtFQUNJLGdCQUFBO0FEOFFKOztBQzNRQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBRDhRSjs7QUMzUUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBRDhRSjs7QUMxUUE7RUFDSSxpQkFBQTtBRDZRSiIsImZpbGUiOiJzYW1wbGUtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4kY2FuYW5vLWdyZWVuOiAjMDA1NTE4O1xuJGNhbmFuby1ibHVlOiAjMDA3M2I5O1xuJGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU6ICMwMjA1NWE7XG4kbWVudUhlYWRpbmdCYWNrZ3JvdW5kQ29sb3I6ICMwMDVkN2U7XG4kbGVmdE1lbnVCb3JkZXJDb2xvcjojODhCQ0UyO1xuJGxlZnRNZW51V2lkdGg6IDE2MHB4O1xuJGxlZnRNZW51TWFyZ2luOiAwcHg7XG4kbmF2QnV0dG9uQ29sb3I6IzgxRkZGRTtcbiRib3JkZXJDb2xvcjogJGxlZnRNZW51Qm9yZGVyQ29sb3I7XG4kbWFpbkZvbnRTaXplOjEycHg7XG4ka2V5d29yZFNlYXJjaEZvbnRTaXplOiAxMnB4O1xuJG9kZFJvd0NvbG9yOiNlZmVkZWQ7XG4kbWFpbkRpc3BsYXlIZWFkaW5nSGVpZ2h0OiAyOHB4O1xuJG1haW5EaXNwbGF5SGVhZGluZ01hcmdpbjogOHB4O1xuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6YXJpYWwsaGVsdmV0aWNhLHZlcmRhbmEsc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6JGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY7XG5cbn1cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiRmb250LWZhbWlseS1zYW5zLXNlcmlmO1xufVxuLmhlYWRlciB7XG5cdG1hcmdpbjowcHg7XG5cdHBhZGRpbmc6MHB4O1xufVxuLmhvbWUge1xufVxuXG50ZC5sZWZ0TWVudSB7XG4gICAgQGV4dGVuZCAuaG9tZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlO1xuICAgIHdpZHRoOiRsZWZ0TWVudVdpZHRoO1xuXHRtYXJnaW46MHB4O1xuXHRwYWRkaW5nOjBweDtcblx0dmVydGljYWwtYWxpZ246dG9wO1xufVxuXG50ZC5tYWluQ29udGVudCB7XG4gICAgQGV4dGVuZCAuaG9tZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgcGFkZGluZzowcHg7XG4gICAgbWFyZ2luOjBweDtcbn1cblxuLmZvb3RlciB7XG4gICAgQGV4dGVuZCAuaG9tZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlO1xuICAgIGJvcmRlcjpzb2xpZCAkbGVmdE1lbnVCb3JkZXJDb2xvcjtcbiAgICBib3JkZXItd2lkdGg6MXB4IDFweCAxcHggMHB4O1xufVxuXG4ucGFyZW50LWRpdntcbiAgICAvKiBrZWVwIHRoZSBRdWVyeSBzZWN0aW9uIGFuZCB0aGUgRGlzcGxheSBzZWN0aW9uIHNpZGUgYnkgc2lkZS4gICovXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4vLyBARklYTUUgLSBUaGVzZSBjb2xvcnMgbmVlZCB2YXJpYWJsZXNcbi5saW5rLWNsaWNrZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiAjMzMzO1xuXG4gICAgJjpob3ZlcntcbiAgICAgICAgY29sb3I6ICNhOTAxMDE7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbi8qIHVudmlzaXRlZCBsaW5rICovXG5hOmxpbmt7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4vKiB2aXNpdGVkIGxpbmsgKi9cbmE6dmlzaXRlZHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi8qIG1vdXNlIG92ZXIgbGluayAqL1xuYTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICNhOTAxMDE7XG59XG5cbi8qIHNlbGVjdGVkIGxpbmsgKi9cbmE6YWN0aXZle1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogIzMzMztcbn1cblxuLmhpZGV7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnVuc2VsZWN0YWJsZXtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmhhbmQge1xuICAgIGN1cnNvcjpwb2ludGVyICFpbXBvcnRhbnQ7XG59XG5cbi5jbGlja2Vye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4uc2VhcmNoLXJlc3VsdHMtdGFibGV7XG4gICAgZm9udC1zaXplOiAkbWFpbkZvbnRTaXplO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogc29saWQgI2NjYyAxcHg7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy10cntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogc29saWQgI2NjYyAxcHg7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy10aHtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgLy8gIGJvcmRlcjogc29saWQgI2RmZGZkZiAycHg7XG4gICAgYm9yZGVyOiBzb2xpZCAjY2NjIDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FuYW5vLWJsdWU7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy10ZHtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgLy8gYm9yZGVyOiBzb2xpZCAjZGZkZmRmIDJweDtcbiAgICBib3JkZXItbGVmdDogc29saWQgI2NjYyAxcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAjY2NjIDFweDtcbn1cblxuLnJvd09kZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb2RkUm93Q29sb3I7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy0tdHItb2Rke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbmltZyB7XG5cdGJvcmRlci13aWR0aDowcHg7XG5cdG1hcmdpbjowcHg7XG5cdHBhZGRpbmc6MHB4O1xuXG59XG5cbi5zcGFjZXIge1xuICAgIHBhZGRpbmctbGVmdDokbGVmdE1lbnVXaWR0aDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuLnNwYWNlci5jZW50ZXIge1xuICAgIGNvbG9yOiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlO1xufVxuXG5cbi5mb290ZXIge1xuXHRwYWRkaW5nOjBweCAwcHggMHB4IDE2MHB4O1xuXHR2ZXJ0aWNhbC1hbGlnbjptaWRkbGUgIWltcG9ydGFudDtcblx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6JGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU7XG4gICAgYm9yZGVyOnNvbGlkICRsZWZ0TWVudUJvcmRlckNvbG9yO1xuICAgIGJvcmRlci13aWR0aDoxcHggMXB4IDFweCAwcHg7XG4gICAgZm9udC1zaXplOiRtYWluRm9udFNpemU7XG59O1xuXG5cbi5mb290ZXIud2hpdGV7XG5cdGJhY2tncm91bmQtY29sb3I6I2ZmZjtcblx0Ym9yZGVyOjBweDtcblx0cGFkZGluZzoxMHB4IDBweCAwcHggMHB4O1xuXHRmb250LXNpemU6OS41cHg7XG4gICAgY29sb3I6IzMzMztcbn07XG5cbi5mb290ZXIud2hpdGUgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDtcbn07XG5cbi5mb290ZXIud2hpdGUgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiMzMzM7XG59XG5cbi5mb290ZXIud2hpdGUucmVsZWFzZSB7XG4gICAgZm9udC1zaXplOjEycHggIWltcG9ydGFudDtcblx0Zm9udC13ZWlnaHQ6bm9ybWFsICFpbXBvcnRhbnQ7XG5cdGNvbG9yOiM0QTQ5QTg7XG59XG5cbi5mb290ZXIud2hpdGUgLmRpdmlkZXIge1xuXHRwYWRkaW5nOjBweCAxMHB4IDBweCAxMHB4O1xufTtcblxuLmZvb3RlciB1bCB7XG4gICAgbWFyZ2luOjBweDtcbiAgICBwYWRkaW5nOjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG4gICAgbGlzdC1zdHlsZTpub25lO1xufTtcblxuLmZvb3RlciB1bCBsaS5mb290ZXItaXRlbSB7XG4gICAgcGFkZGluZzowcHg7XG4gICAgbWFyZ2luOjBweDtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbn1cblxuXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIC5uYXYtbGluay5uYXYtbWVudS10b3AtaXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjokY2FuYW5vLWJhY2tncm91bmQtYmx1ZTtcbiAgICBjb2xvcjokbmF2QnV0dG9uQ29sb3I7XG4gICAgYm9yZGVyOiBzb2xpZCAkbGVmdE1lbnVCb3JkZXJDb2xvcjtcbiAgICBib3JkZXItd2lkdGg6MHB4IDFweCAwcHggMHB4O1xuICAgIHBhZGRpbmc6NHB4IDE1cHggNHB4IDE1cHg7XG4gICAgbWFyZ2luOjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG5cdHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcblx0b3V0bGluZTowO1xufVxuXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIC5uYXYtbGluay5uYXYtbWVudS10b3AtaXRlbS5sZWZ0e1xuICAgIGJvcmRlcjogc29saWQgJGxlZnRNZW51Qm9yZGVyQ29sb3I7XG4gICAgYm9yZGVyLXdpZHRoOjBweCAxcHggMHB4IDFweDtcbn1cblxuLmZvb3RlciB1bCBsaS5mb290ZXItaXRlbSAubmF2LWxpbmsubmF2LW1lbnUtdG9wLWl0ZW06aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjokbmF2QnV0dG9uQ29sb3I7XG4gICAgY29sb3I6JGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU7XG4gICAgbWFyZ2luOjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG59XG5cbi5yb3dPZGQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiRvZGRSb3dDb2xvcjtcbn1cblxudGFibGUuZGF0YVRhYmxle1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcblxufVxuXG50YWJsZS5kYXRhVGFibGUgdGh7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzNiOTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOjNweCAzcHggM3B4IDVweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbnRhYmxlLmRhdGFUYWJsZSB0ZHtcblx0cGFkZGluZzo1cHg7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcblx0d2lkdGg6MjUwcHg7XG59XG5cbnRhYmxlLmRhdGFUYWJsZSB0ZC5hY3Rpb25zICB7XG5cdHdpZHRoOjExMHB4ICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlLmRhdGFUYWJsZSB0ZC5hY3Rpb25zIGRpdiB7XG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHRtYXJnaW46MHB4IDRweCAwcHggMHB4O1xufVxuXG4uYWN0aW9ucyBkaXYge1xuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcblx0bWFyZ2luOjBweCA0cHggMHB4IDBweDtcbn1cblxuLm15RmlsdGVycyBsYWJlbCB7XG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xufVxuIiwiaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgaGVsdmV0aWNhLCB2ZXJkYW5hLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogYXJpYWwsIGhlbHZldGljYSwgdmVyZGFuYSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxudGQubGVmdE1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIwNTVhO1xuICB3aWR0aDogMTYwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbnRkLm1haW5Db250ZW50IHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjA1NWE7XG4gIGJvcmRlcjogc29saWQgIzg4QkNFMjtcbiAgYm9yZGVyLXdpZHRoOiAxcHggMXB4IDFweCAwcHg7XG59XG5cbi5wYXJlbnQtZGl2IHtcbiAgLyoga2VlcCB0aGUgUXVlcnkgc2VjdGlvbiBhbmQgdGhlIERpc3BsYXkgc2VjdGlvbiBzaWRlIGJ5IHNpZGUuICAqL1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubGluay1jbGlja2VyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6ICMzMzM7XG59XG4ubGluay1jbGlja2VyOmhvdmVyIHtcbiAgY29sb3I6ICNhOTAxMDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogdW52aXNpdGVkIGxpbmsgKi9cbmE6bGluayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4vKiB2aXNpdGVkIGxpbmsgKi9cbmE6dmlzaXRlZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4vKiBtb3VzZSBvdmVyIGxpbmsgKi9cbmE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogI2E5MDEwMTtcbn1cblxuLyogc2VsZWN0ZWQgbGluayAqL1xuYTphY3RpdmUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogIzMzMztcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udW5zZWxlY3RhYmxlIHtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5oYW5kIHtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG5cbi5jbGlja2VyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VhcmNoLXJlc3VsdHMtdGFibGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IHNvbGlkICNjY2MgMXB4O1xufVxuXG4uc2VhcmNoLXJlc3VsdHMtdHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IHNvbGlkICNjY2MgMXB4O1xufVxuXG4uc2VhcmNoLXJlc3VsdHMtdGgge1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlcjogc29saWQgI2NjYyAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDczYjk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2VhcmNoLXJlc3VsdHMtdGQge1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAjY2NjIDFweDtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAjY2NjIDFweDtcbn1cblxuLnJvd09kZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVkZWQ7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy0tdHItb2RkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuaW1nIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5zcGFjZXIge1xuICBwYWRkaW5nLWxlZnQ6IDE2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zcGFjZXIuY2VudGVyIHtcbiAgY29sb3I6ICMwMjA1NWE7XG59XG5cbi5mb290ZXIge1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAxNjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjA1NWE7XG4gIGJvcmRlcjogc29saWQgIzg4QkNFMjtcbiAgYm9yZGVyLXdpZHRoOiAxcHggMXB4IDFweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZvb3Rlci53aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMHB4O1xuICBwYWRkaW5nOiAxMHB4IDBweCAwcHggMHB4O1xuICBmb250LXNpemU6IDkuNXB4O1xuICBjb2xvcjogIzMzMztcbn1cblxuLmZvb3Rlci53aGl0ZSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5mb290ZXIud2hpdGUgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uZm9vdGVyLndoaXRlLnJlbGVhc2Uge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzRBNDlBODtcbn1cblxuLmZvb3Rlci53aGl0ZSAuZGl2aWRlciB7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xufVxuXG4uZm9vdGVyIHVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmZvb3RlciB1bCBsaS5mb290ZXItaXRlbSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmZvb3RlciB1bCBsaS5mb290ZXItaXRlbSAubmF2LWxpbmsubmF2LW1lbnUtdG9wLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIwNTVhO1xuICBjb2xvcjogIzgxRkZGRTtcbiAgYm9yZGVyOiBzb2xpZCAjODhCQ0UyO1xuICBib3JkZXItd2lkdGg6IDBweCAxcHggMHB4IDBweDtcbiAgcGFkZGluZzogNHB4IDE1cHggNHB4IDE1cHg7XG4gIG1hcmdpbjogMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3V0bGluZTogMDtcbn1cblxuLmZvb3RlciB1bCBsaS5mb290ZXItaXRlbSAubmF2LWxpbmsubmF2LW1lbnUtdG9wLWl0ZW0ubGVmdCB7XG4gIGJvcmRlcjogc29saWQgIzg4QkNFMjtcbiAgYm9yZGVyLXdpZHRoOiAwcHggMXB4IDBweCAxcHg7XG59XG5cbi5mb290ZXIgdWwgbGkuZm9vdGVyLWl0ZW0gLm5hdi1saW5rLm5hdi1tZW51LXRvcC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxRkZGRTtcbiAgY29sb3I6ICMwMjA1NWE7XG4gIG1hcmdpbjogMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ucm93T2RkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWRlZDtcbn1cblxudGFibGUuZGF0YVRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbnRhYmxlLmRhdGFUYWJsZSB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDczYjk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogM3B4IDNweCAzcHggNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRkIHtcbiAgcGFkZGluZzogNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB3aWR0aDogMjUwcHg7XG59XG5cbnRhYmxlLmRhdGFUYWJsZSB0ZC5hY3Rpb25zIHtcbiAgd2lkdGg6IDExMHB4ICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlLmRhdGFUYWJsZSB0ZC5hY3Rpb25zIGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwcHggNHB4IDBweCAwcHg7XG59XG5cbi5hY3Rpb25zIGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwcHggNHB4IDBweCAwcHg7XG59XG5cbi5teUZpbHRlcnMgbGFiZWwge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ub3V0ZXItaW5wdXQtZnJhbWUge1xuICBib3JkZXI6IHNvbGlkICNkNGQ0ZDQgMnB4O1xufVxuXG4ubWFpblNlY3Rpb24ge1xuICBtYXJnaW46IDEwcHggMHB4IDVweCA3cHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtaW4td2lkdGg6IDExNTBweCAhaW1wb3J0YW50O1xufVxuXG4ubWFpbkJvcmRlciB7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1haW5Cb3JkZXIubG9hZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVkN2UgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmRhdGFNYWluIHtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5kYXRhTWFpbiB0ZC5sYWJlbCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5kYXRhTWFpbiB0ZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5kYXRhTWFpbiB0ZC5idXR0b25zIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5saW5rcy1wYW5lbCB7XG4gIHdpZHRoOiA1MDBweDtcbn1cblxuLmxpbmtzLXBhbmVsLmNhcmQubWwtMS5tdC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY3JlYXRlLXNlYXJjaC1idXR0b24tZ3JvdXAge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jcmVhdGUtZGVsZXRlLWJ1dHRvbi1ncm91cCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoRm9ybSB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uc2VhcmNoRm9ybSB0ZCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAwcHg7XG59XG5cbi5zZWFyY2hGb3JtIHRkLmxhYmVsIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4uc2VhcmNoRm9ybSBzZWxlY3QubXVsdGlwbGUge1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5zZWFyY2hGb3JtIHNlbGVjdCB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4uc2VhcmNoRm9ybSBzcGFuLmxhYmVsIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLnN1Ym1pdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3VibWl0IHRkOmxhc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmJ1dHRvbnMge1xuICBtYXJnaW46IDEwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYnV0dG9ucyBkaXYge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjNEE0OUE4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbjogNXB4O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLm1haW5TZWN0aW9uIGEge1xuICBjb2xvcjogIzAwZiAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xufVxuXG4ubWFpblNlY3Rpb24gdGQge1xuICBwYWRkaW5nLWJvdHRvbTogMTNweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tYWluU2VjdGlvbiAuYmx1ZUhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDczYjk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLm1haW5TZWN0aW9uIC5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NTE4O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLm1haW5TZWN0aW9uIC5oZWFkZXIgLmJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubWFpblNlY3Rpb24gLmVkaXRCdXR0b24ge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluLmZpbGVzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIHRkIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIC5wcm9wZXJ0aWVzIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllcyB0aCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxNTBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIHRkLmxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAyMDBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIC5wcm9wZXJ0aWVzIHRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDE1MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXMuZmlsZXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uZXhwZXJpbWVudENvbmZpZ3VyYXRpb25zIHRkIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG51bCB7XG4gIHBhZGRpbmctbGVmdDogMTNweDtcbn1cblxuLmRhdGFBbmRDb25kaXRpb25zIHRkIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5kYXRhQW5kQ29uZGl0aW9ucyB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDczYjk7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5wcm9wZXJ0aWVzIHRkIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5wcm9wZXJ0aWVzIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzNiOTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLmZpbGVzIHtcbiAgbWluLXdpZHRoOiA2NTBweDtcbn1cblxuLmZpbGVzIHRkIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uZmlsZXMgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3M2I5O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG5sYWJlbC5yaWdodCB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufSIsIkBpbXBvcnQgJy4uL2NhbmFub2xhYi1jbGllbnQuY29tcG9uZW50LnNjc3MnO1xuXG4ub3V0ZXItaW5wdXQtZnJhbWV7XG4gICAgYm9yZGVyOiBzb2xpZCAjZDRkNGQ0IDJweDtcbn1cbi5tYWluU2VjdGlvbiB7XG4gICAgbWFyZ2luOjEwcHggMHB4IDVweCA3cHg7XG4gICAgcGFkZGluZzowcHg7XG4gICAgZm9udC1zaXplOiRtYWluRm9udFNpemU7XG4gICAgbWluLXdpZHRoOjExNTBweCAhaW1wb3J0YW50O1xuXG59XG4ubWFpbkJvcmRlciB7XG4gICAgcGFkZGluZzoxNXB4IDE1cHggMTVweCAxNXB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICBtYXJnaW46MHB4IDBweCAwcHggMnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuXG59XG5cbi5tYWluQm9yZGVyLmxvYWRpbmcge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiRtZW51SGVhZGluZ0JhY2tncm91bmRDb2xvciAhaW1wb3J0YW50O1xuXHRjb2xvcjojZmZmO1xuXHRwYWRkaW5nOjE1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOjE1cHg7XG59XG5cbi5kYXRhTWFpbiAge1xuICAgIG1hcmdpbjo1cHg7XG4gICAgd2lkdGg6OTAlO1xufVxuXG4uZGF0YU1haW4gdGQubGFiZWwge1xuICAgIHdpZHRoOjIwMHB4O1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbn1cbi5kYXRhTWFpbiB0ZCB7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbn1cblxuLmRhdGFNYWluIHRkLmJ1dHRvbnMge1xuICAgIHRleHQtYWxpZ246cmlnaHQ7XG59XG5cblxuLmxpbmtzLXBhbmVse1xuICAgIHdpZHRoOiA1MDBweDsgIC8vIEBGSVhNRSAtIG1ha2UgYSBjb25zdFxufVxuXG4ubGlua3MtcGFuZWwuY2FyZC5tbC0xLm10LTIge1xuXHRtYXJnaW4tbGVmdDowcHggIWltcG9ydGFudFxufVxuXG4uY3JlYXRlLXNlYXJjaC1idXR0b24tZ3JvdXB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLmNyZWF0ZS1kZWxldGUtYnV0dG9uLWdyb3Vwe1xuICAgIGZsb2F0OiBsZWZ0O1xufVxuXG5sYWJlbCB7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICBtYXJnaW4tcmlnaHQ6NXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2hGb3JtIHtcbiAgICBtYXJnaW46NXB4O1xufVxuXG4uc2VhcmNoRm9ybSB0ZHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgcGFkZGluZzo1cHggMTBweCA1cHggMHB4O1xufVxuXG4uc2VhcmNoRm9ybSB0ZC5sYWJlbHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgcGFkZGluZy1yaWdodDoyMHB4O1xuICAgIHdpZHRoOjE1MHB4O1xufVxuXG4uc2VhcmNoRm9ybSBzZWxlY3QubXVsdGlwbGUge1xuICAgIHdpZHRoOjE1MHB4O1xufVxuXG4uc2VhcmNoRm9ybSBzZWxlY3Qge1xuICAgIG1hcmdpbi1yaWdodDo0cHg7XG59XG5cbi5zZWFyY2hGb3JtIHNwYW4ubGFiZWwge1xuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcbn1cblxuLnN1Ym1pdCB7XG4gICAgd2lkdGg6MTAwJTtcbn1cblxuLnN1Ym1pdCB0ZDpsYXN0LWNoaWxkIHtcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xufVxuXG4uYnV0dG9ucyB7XG4gICAgbWFyZ2luOjEwcHg7XG4gICAgdGV4dC1hbGlnbjpyaWdodDtcbn1cblxuLmJ1dHRvbnMgZGl2IHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgY29sb3I6IzRBNDlBODtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuLmVycm9yIHtcbiAgICBjb2xvcjpyZWQ7XG4gICAgbWFyZ2luOjVweDtcbiAgICBmb250LXNpemU6MTRweCAhaW1wb3J0YW50O1xufVxuXG4ubWFpblNlY3Rpb24gYSB7XG4gICAgY29sb3I6IzAwZiAhaW1wb3J0YW50O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluU2VjdGlvbiB0ZCB7XG4gICAgcGFkZGluZy1ib3R0b206MTNweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTokbWFpbkZvbnRTaXplO1xuXG59XG4ubWFpblNlY3Rpb24gLmJsdWVIZWFkZXIge1xuICAgICAgICBwYWRkaW5nOjEwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IzAwNzNiOTtcbiAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5tYWluU2VjdGlvbiAuaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDU1MTg7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBwYWRkaW5nOjEwcHg7XG59XG5cbiAgICAubWFpblNlY3Rpb24gLmhlYWRlciAuYnRuIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTBweDtcbiAgICB9XG5cbi5tYWluU2VjdGlvbiAuZWRpdEJ1dHRvbntcbiAgICBwYWRkaW5nLXRvcDo1cHg7XG4gICAgdGV4dC1hbGlnbjpyaWdodDtcbn1cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbi5maWxlc3tcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XG59XG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gdGR7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xufVxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIC5wcm9wZXJ0aWVze1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIC5wcm9wZXJ0aWVzIHRoe1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICB3aWR0aDoxNTBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgcGFkZGluZy1yaWdodDoyMHB4O1xufVxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIHRkLmxhYmVse1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgd2lkdGg6MjAwcHg7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xufVxuXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXMgdGR7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIHdpZHRoOjE1MHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XG59XG5cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllcy5maWxlc3tcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOjVweDtcbn1cblxuLmV4cGVyaW1lbnRDb25maWd1cmF0aW9ucyB0ZCB7XG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xuICAgIHdpZHRoOjMwMHB4O1xufVxuIHVsIHtcbiAgIHBhZGRpbmctbGVmdDoxM3B4O1xufVxuXG5cbi5kYXRhQW5kQ29uZGl0aW9ucyB0ZHtcbiAgICBwYWRkaW5nOjVweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgd2lkdGg6MjAwcHg7XG59XG5cbi5kYXRhQW5kQ29uZGl0aW9ucyB0aHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDczYjk7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBwYWRkaW5nOjVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgYm9yZGVyOjFweCAgc29saWQgI2NjYztcblxufVxuXG4ucHJvcGVydGllcyB0ZHtcbiAgICBwYWRkaW5nOjVweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgd2lkdGg6MjAwcHg7XG59XG5cbi5wcm9wZXJ0aWVzIHRoe1xuICAgIGJhY2tncm91bmQtY29sb3I6IzAwNzNiOTtcbiAgICBjb2xvcjojZmZmO1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbiAgICBib3JkZXI6MXB4ICBzb2xpZCAjY2NjO1xuXG59XG5cbi5maWxlcyB7XG4gICAgbWluLXdpZHRoOjY1MHB4O1xufVxuXG4uZmlsZXMgdGR7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xufVxuXG4uZmlsZXMgdGh7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA3M2I5O1xuICAgIGNvbG9yOiNmZmY7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIGJvcmRlcjoxcHggIHNvbGlkICNjY2M7XG5cbn1cblxubGFiZWwucmlnaHQge1xuICAgIHBhZGRpbmctbGVmdDo1cHg7XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SampleViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'canano-sample-view',
                templateUrl: './sample-view.component.html',
                styleUrls: ['./sample-view.component.scss']
            }]
    }], function () { return [{ type: src_app_cananolab_client_common_services_navigation_service__WEBPACK_IMPORTED_MODULE_5__["NavigationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: src_app_cananolab_client_common_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=cananolab-client-main-display-samples-sample-view-sample-view-module.js.map