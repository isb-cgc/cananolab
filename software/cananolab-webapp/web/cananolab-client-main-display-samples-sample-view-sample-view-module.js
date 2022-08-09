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
    } }, directives: [src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_8__["MainDisplayHeadingComponent"], _common_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["html[_ngcontent-%COMP%] {\n  font-family: arial, helvetica, verdana, sans-serif !important;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: arial, helvetica, verdana, sans-serif !important;\n}\n\n.header[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\ntd.leftMenu[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  width: 160px;\n  margin: 0px;\n  padding: 0px;\n  vertical-align: top;\n}\n\ntd.mainContent[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding: 0px;\n  margin: 0px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  border: solid #88BCE2;\n  border-width: 1px 1px 1px 0px;\n}\n\n.parent-div[_ngcontent-%COMP%] {\n  \n  display: flex;\n  flex-direction: row;\n  background-color: #fff;\n  width: 100%;\n}\n\n.link-clicker[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n.link-clicker[_ngcontent-%COMP%]:hover {\n  color: #a90101;\n  cursor: pointer;\n}\n\n\n\na[_ngcontent-%COMP%]:link {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n\n\na[_ngcontent-%COMP%]:visited {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n\n\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #a90101;\n}\n\n\n\na[_ngcontent-%COMP%]:active {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.unselectable[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  text-transform: uppercase;\n}\n\n.hand[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.clicker[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.search-results-table[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 100%;\n  border: solid #ccc 1px;\n}\n\n.search-results-tr[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: solid #ccc 1px;\n}\n\n.search-results-th[_ngcontent-%COMP%] {\n  padding: 6px;\n  border: solid #ccc 1px;\n  background-color: #0073b9;\n  color: #fff;\n}\n\n.search-results-td[_ngcontent-%COMP%] {\n  padding: 6px;\n  border-left: solid #ccc 1px;\n  border-right: solid #ccc 1px;\n}\n\n.rowOdd[_ngcontent-%COMP%] {\n  background-color: #efeded;\n}\n\n.search-results--tr-odd[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-width: 0px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  padding-left: 160px;\n  text-align: center;\n}\n\n.spacer.center[_ngcontent-%COMP%] {\n  color: #02055a;\n}\n\n.footer[_ngcontent-%COMP%] {\n  padding: 0px 0px 0px 160px;\n  vertical-align: middle !important;\n  text-align: center;\n  background-color: #02055a;\n  border: solid #88BCE2;\n  border-width: 1px 1px 1px 0px;\n  font-size: 12px;\n}\n\n.footer.white[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 0px;\n  padding: 10px 0px 0px 0px;\n  font-size: 9.5px;\n  color: #333;\n}\n\n.footer.white[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.footer.white[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline !important;\n  color: #333;\n}\n\n.footer.white.release[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  font-weight: normal !important;\n  color: #4A49A8;\n}\n\n.footer.white[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  padding: 0px 10px 0px 10px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  vertical-align: middle;\n  list-style: none;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  display: inline-block;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  color: #81FFFE;\n  border: solid #88BCE2;\n  border-width: 0px 1px 0px 0px;\n  padding: 4px 15px 4px 15px;\n  margin: 0px;\n  vertical-align: top;\n  text-transform: uppercase;\n  font-weight: bold;\n  outline: 0;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item.left[_ngcontent-%COMP%] {\n  border: solid #88BCE2;\n  border-width: 0px 1px 0px 1px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item[_ngcontent-%COMP%]:hover {\n  background-color: #81FFFE;\n  color: #02055a;\n  margin: 0px;\n  vertical-align: top;\n}\n\n.rowOdd[_ngcontent-%COMP%] {\n  background-color: #efeded;\n}\n\ntable.dataTable[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #ccc;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  font-weight: bold;\n  padding: 3px 3px 3px 5px;\n  border: 1px solid #ccc;\n  text-transform: capitalize;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n  width: 250px;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%] {\n  width: 110px !important;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0px 4px 0px 0px;\n}\n\n.actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0px 4px 0px 0px;\n}\n\n.myFilters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.outer-input-frame[_ngcontent-%COMP%] {\n  border: solid #d4d4d4 2px;\n}\n\n.mainSection[_ngcontent-%COMP%] {\n  margin: 10px 0px 5px 7px;\n  padding: 0px;\n  font-size: 12px;\n  min-width: 1150px !important;\n}\n\n.mainBorder[_ngcontent-%COMP%] {\n  padding: 15px 15px 15px 15px;\n  border: 1px solid #ccc;\n  margin: 0px 0px 0px 2px;\n  width: 100%;\n}\n\n.mainBorder.loading[_ngcontent-%COMP%] {\n  background-color: #005d7e !important;\n  color: #fff;\n  padding: 15px !important;\n  margin-bottom: 15px;\n}\n\n.dataMain[_ngcontent-%COMP%] {\n  margin: 5px;\n  width: 90%;\n}\n\n.dataMain[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  width: 200px;\n  padding: 10px;\n  font-weight: bold;\n  vertical-align: top;\n}\n\n.dataMain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  vertical-align: top;\n}\n\n.dataMain[_ngcontent-%COMP%]   td.buttons[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.links-panel[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.links-panel.card.ml-1.mt-2[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n}\n\n.create-search-button-group[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.create-delete-button-group[_ngcontent-%COMP%] {\n  float: left;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-right: 5px !important;\n}\n\n.searchForm[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.searchForm[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding: 5px 10px 5px 0px;\n}\n\n.searchForm[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding-right: 20px;\n  width: 150px;\n}\n\n.searchForm[_ngcontent-%COMP%]   select.multiple[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.searchForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n\n.searchForm[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\n.submit[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.submit[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  margin: 10px;\n  text-align: right;\n}\n\n.buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #4A49A8;\n  text-align: center;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n  margin: 5px;\n  font-size: 14px !important;\n}\n\n.mainSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #00f !important;\n  text-decoration: underline !important;\n}\n\n.mainSection[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-bottom: 13px !important;\n  font-size: 12px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .blueHeader[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #0073b9;\n  color: #fff;\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: #005518;\n  color: #fff;\n  padding: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .editButton[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  text-align: right;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain.files[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 200px;\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties.files[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  width: 100%;\n  margin-bottom: 5px;\n}\n\n.experimentConfigurations[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  width: 300px;\n}\n\nul[_ngcontent-%COMP%] {\n  padding-left: 13px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%] {\n  min-width: 650px;\n}\n\n.files[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\nlabel.right[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNhbmFub2xhYi1jbGllbnQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzYW1wbGUtdmlldy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbi1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCQTtFQUNJLDZEQUZvQjtBQ2R4Qjs7QURtQkE7RUFDSSw2REFOb0I7QUNWeEI7O0FEa0JBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNmRDs7QURvQkE7RUFFSSx5QkE3QnFCO0VBOEJyQixZQTNCWTtFQTRCZixXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDbEJEOztBRHFCQTtFQUVJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNuQko7O0FEc0JBO0VBRUkseUJBN0NxQjtFQThDckIscUJBQUE7RUFDQSw2QkFBQTtBQ3BCSjs7QUR1QkE7RUFDSSxrRUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ3BCSjs7QUR3QkE7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FDckJKOztBRHVCSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDckJSOztBRHlCQSxtQkFBQTs7QUFDQTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUN0Qko7O0FEeUJBLGlCQUFBOztBQUNBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ3RCSjs7QUR5QkEsb0JBQUE7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDdEJKOztBRHlCQSxrQkFBQTs7QUFDQTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUN0Qko7O0FEeUJBO0VBQ0ksYUFBQTtBQ3RCSjs7QUR5QkE7RUFDSSwyQkFBQTtFQUNBLHlCQUFBO0VB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QUM3UUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FEZ1JKOztBQzdRQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FEZ1JKOztBQzVRQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUQrUUo7O0FDNVFBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUQrUUo7O0FDM1FBO0VBQ0ksZ0JBQUE7QUQ4UUo7O0FDM1FBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0FEOFFKOztBQzNRQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FEOFFKOztBQzFRQTtFQUNJLGlCQUFBO0FENlFKIiwiZmlsZSI6InNhbXBsZS12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4kY2FuYW5vLWdyZWVuOiAjMDA1NTE4O1xyXG4kY2FuYW5vLWJsdWU6ICMwMDczYjk7XHJcbiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlOiAjMDIwNTVhO1xyXG4kbWVudUhlYWRpbmdCYWNrZ3JvdW5kQ29sb3I6ICMwMDVkN2U7XHJcbiRsZWZ0TWVudUJvcmRlckNvbG9yOiM4OEJDRTI7XHJcbiRsZWZ0TWVudVdpZHRoOiAxNjBweDtcclxuJGxlZnRNZW51TWFyZ2luOiAwcHg7XHJcbiRuYXZCdXR0b25Db2xvcjojODFGRkZFO1xyXG4kYm9yZGVyQ29sb3I6ICRsZWZ0TWVudUJvcmRlckNvbG9yO1xyXG4kbWFpbkZvbnRTaXplOjEycHg7XHJcbiRrZXl3b3JkU2VhcmNoRm9udFNpemU6IDEycHg7XHJcbiRvZGRSb3dDb2xvcjojZWZlZGVkO1xyXG4kbWFpbkRpc3BsYXlIZWFkaW5nSGVpZ2h0OiAyOHB4O1xyXG4kbWFpbkRpc3BsYXlIZWFkaW5nTWFyZ2luOiA4cHg7XHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOmFyaWFsLGhlbHZldGljYSx2ZXJkYW5hLHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuaHRtbCB7XHJcbiAgICBmb250LWZhbWlseTokZm9udC1mYW1pbHktc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTokZm9udC1mYW1pbHktc2Fucy1zZXJpZjtcclxufVxyXG4uaGVhZGVyIHtcclxuXHRtYXJnaW46MHB4O1xyXG5cdHBhZGRpbmc6MHB4O1xyXG59XHJcbi5ob21lIHtcclxufVxyXG5cclxudGQubGVmdE1lbnUge1xyXG4gICAgQGV4dGVuZCAuaG9tZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6JGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU7XHJcbiAgICB3aWR0aDokbGVmdE1lbnVXaWR0aDtcclxuXHRtYXJnaW46MHB4O1xyXG5cdHBhZGRpbmc6MHB4O1xyXG5cdHZlcnRpY2FsLWFsaWduOnRvcDtcclxufVxyXG5cclxudGQubWFpbkNvbnRlbnQge1xyXG4gICAgQGV4dGVuZCAuaG9tZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgbWFyZ2luOjBweDtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICBAZXh0ZW5kIC5ob21lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjokY2FuYW5vLWJhY2tncm91bmQtYmx1ZTtcclxuICAgIGJvcmRlcjpzb2xpZCAkbGVmdE1lbnVCb3JkZXJDb2xvcjtcclxuICAgIGJvcmRlci13aWR0aDoxcHggMXB4IDFweCAwcHg7XHJcbn1cclxuXHJcbi5wYXJlbnQtZGl2e1xyXG4gICAgLyoga2VlcCB0aGUgUXVlcnkgc2VjdGlvbiBhbmQgdGhlIERpc3BsYXkgc2VjdGlvbiBzaWRlIGJ5IHNpZGUuICAqL1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vIEBGSVhNRSAtIFRoZXNlIGNvbG9ycyBuZWVkIHZhcmlhYmxlc1xyXG4ubGluay1jbGlja2Vye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogIzMzMztcclxuXHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiAjYTkwMTAxO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLyogdW52aXNpdGVkIGxpbmsgKi9cclxuYTpsaW5re1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLyogdmlzaXRlZCBsaW5rICovXHJcbmE6dmlzaXRlZHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi8qIG1vdXNlIG92ZXIgbGluayAqL1xyXG5hOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogI2E5MDEwMTtcclxufVxyXG5cclxuLyogc2VsZWN0ZWQgbGluayAqL1xyXG5hOmFjdGl2ZXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5oaWRle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnVuc2VsZWN0YWJsZXtcclxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uaGFuZCB7XHJcbiAgICBjdXJzb3I6cG9pbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2xpY2tlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi5zZWFyY2gtcmVzdWx0cy10YWJsZXtcclxuICAgIGZvbnQtc2l6ZTogJG1haW5Gb250U2l6ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAjY2NjIDFweDtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHRzLXRye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogc29saWQgI2NjYyAxcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0cy10aHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIC8vICBib3JkZXI6IHNvbGlkICNkZmRmZGYgMnB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAjY2NjIDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjYW5hbm8tYmx1ZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdHMtdGR7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAvLyBib3JkZXI6IHNvbGlkICNkZmRmZGYgMnB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkICNjY2MgMXB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAjY2NjIDFweDtcclxufVxyXG5cclxuLnJvd09kZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvZGRSb3dDb2xvcjtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHRzLS10ci1vZGR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pbWcge1xyXG5cdGJvcmRlci13aWR0aDowcHg7XHJcblx0bWFyZ2luOjBweDtcclxuXHRwYWRkaW5nOjBweDtcclxuXHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiRsZWZ0TWVudVdpZHRoO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5zcGFjZXIuY2VudGVyIHtcclxuICAgIGNvbG9yOiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlO1xyXG59XHJcblxyXG5cclxuLmZvb3RlciB7XHJcblx0cGFkZGluZzowcHggMHB4IDBweCAxNjBweDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjptaWRkbGUgIWltcG9ydGFudDtcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlO1xyXG4gICAgYm9yZGVyOnNvbGlkICRsZWZ0TWVudUJvcmRlckNvbG9yO1xyXG4gICAgYm9yZGVyLXdpZHRoOjFweCAxcHggMXB4IDBweDtcclxuICAgIGZvbnQtc2l6ZTokbWFpbkZvbnRTaXplO1xyXG59O1xyXG5cclxuXHJcbi5mb290ZXIud2hpdGV7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG5cdGJvcmRlcjowcHg7XHJcblx0cGFkZGluZzoxMHB4IDBweCAwcHggMHB4O1xyXG5cdGZvbnQtc2l6ZTo5LjVweDtcclxuICAgIGNvbG9yOiMzMzM7XHJcbn07XHJcblxyXG4uZm9vdGVyLndoaXRlIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDtcclxufTtcclxuXHJcbi5mb290ZXIud2hpdGUgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjojMzMzO1xyXG59XHJcblxyXG4uZm9vdGVyLndoaXRlLnJlbGVhc2Uge1xyXG4gICAgZm9udC1zaXplOjEycHggIWltcG9ydGFudDtcclxuXHRmb250LXdlaWdodDpub3JtYWwgIWltcG9ydGFudDtcclxuXHRjb2xvcjojNEE0OUE4O1xyXG59XHJcblxyXG4uZm9vdGVyLndoaXRlIC5kaXZpZGVyIHtcclxuXHRwYWRkaW5nOjBweCAxMHB4IDBweCAxMHB4O1xyXG59O1xyXG5cclxuLmZvb3RlciB1bCB7XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgcGFkZGluZzowcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbiAgICBsaXN0LXN0eWxlOm5vbmU7XHJcbn07XHJcblxyXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIHtcclxuICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5cclxuLmZvb3RlciB1bCBsaS5mb290ZXItaXRlbSAubmF2LWxpbmsubmF2LW1lbnUtdG9wLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjokY2FuYW5vLWJhY2tncm91bmQtYmx1ZTtcclxuICAgIGNvbG9yOiRuYXZCdXR0b25Db2xvcjtcclxuICAgIGJvcmRlcjogc29saWQgJGxlZnRNZW51Qm9yZGVyQ29sb3I7XHJcbiAgICBib3JkZXItd2lkdGg6MHB4IDFweCAwcHggMHB4O1xyXG4gICAgcGFkZGluZzo0cHggMTVweCA0cHggMTVweDtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcblx0dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0b3V0bGluZTowO1xyXG59XHJcblxyXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIC5uYXYtbGluay5uYXYtbWVudS10b3AtaXRlbS5sZWZ0e1xyXG4gICAgYm9yZGVyOiBzb2xpZCAkbGVmdE1lbnVCb3JkZXJDb2xvcjtcclxuICAgIGJvcmRlci13aWR0aDowcHggMXB4IDBweCAxcHg7XHJcbn1cclxuXHJcbi5mb290ZXIgdWwgbGkuZm9vdGVyLWl0ZW0gLm5hdi1saW5rLm5hdi1tZW51LXRvcC1pdGVtOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjokbmF2QnV0dG9uQ29sb3I7XHJcbiAgICBjb2xvcjokY2FuYW5vLWJhY2tncm91bmQtYmx1ZTtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbn1cclxuXHJcbi5yb3dPZGQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6JG9kZFJvd0NvbG9yO1xyXG59XHJcblxyXG50YWJsZS5kYXRhVGFibGV7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuXHJcbn1cclxuXHJcbnRhYmxlLmRhdGFUYWJsZSB0aHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDczYjk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzozcHggM3B4IDNweCA1cHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxudGFibGUuZGF0YVRhYmxlIHRke1xyXG5cdHBhZGRpbmc6NXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG5cdHdpZHRoOjI1MHB4O1xyXG59XHJcblxyXG50YWJsZS5kYXRhVGFibGUgdGQuYWN0aW9ucyAge1xyXG5cdHdpZHRoOjExMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRhYmxlLmRhdGFUYWJsZSB0ZC5hY3Rpb25zIGRpdiB7XHJcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblx0bWFyZ2luOjBweCA0cHggMHB4IDBweDtcclxufVxyXG5cclxuLmFjdGlvbnMgZGl2IHtcclxuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHRtYXJnaW46MHB4IDRweCAwcHggMHB4O1xyXG59XHJcblxyXG4ubXlGaWx0ZXJzIGxhYmVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OjVweDtcclxufVxyXG4iLCJodG1sIHtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBoZWx2ZXRpY2EsIHZlcmRhbmEsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgaGVsdmV0aWNhLCB2ZXJkYW5hLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXIge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG50ZC5sZWZ0TWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjA1NWE7XG4gIHdpZHRoOiAxNjBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxudGQubWFpbkNvbnRlbnQge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyMDU1YTtcbiAgYm9yZGVyOiBzb2xpZCAjODhCQ0UyO1xuICBib3JkZXItd2lkdGg6IDFweCAxcHggMXB4IDBweDtcbn1cblxuLnBhcmVudC1kaXYge1xuICAvKiBrZWVwIHRoZSBRdWVyeSBzZWN0aW9uIGFuZCB0aGUgRGlzcGxheSBzZWN0aW9uIHNpZGUgYnkgc2lkZS4gICovXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5saW5rLWNsaWNrZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogIzMzMztcbn1cbi5saW5rLWNsaWNrZXI6aG92ZXIge1xuICBjb2xvcjogI2E5MDEwMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiB1bnZpc2l0ZWQgbGluayAqL1xuYTpsaW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi8qIHZpc2l0ZWQgbGluayAqL1xuYTp2aXNpdGVkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi8qIG1vdXNlIG92ZXIgbGluayAqL1xuYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjYTkwMTAxO1xufVxuXG4vKiBzZWxlY3RlZCBsaW5rICovXG5hOmFjdGl2ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi51bnNlbGVjdGFibGUge1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmhhbmQge1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmNsaWNrZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy10YWJsZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgI2NjYyAxcHg7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy10ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogc29saWQgI2NjYyAxcHg7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy10aCB7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyOiBzb2xpZCAjY2NjIDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzNiOTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy10ZCB7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkICNjY2MgMXB4O1xuICBib3JkZXItcmlnaHQ6IHNvbGlkICNjY2MgMXB4O1xufVxuXG4ucm93T2RkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWRlZDtcbn1cblxuLnNlYXJjaC1yZXN1bHRzLS10ci1vZGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5pbWcge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnNwYWNlciB7XG4gIHBhZGRpbmctbGVmdDogMTYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNwYWNlci5jZW50ZXIge1xuICBjb2xvcjogIzAyMDU1YTtcbn1cblxuLmZvb3RlciB7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDE2MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyMDU1YTtcbiAgYm9yZGVyOiBzb2xpZCAjODhCQ0UyO1xuICBib3JkZXItd2lkdGg6IDFweCAxcHggMXB4IDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZm9vdGVyLndoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAwcHg7XG4gIHBhZGRpbmc6IDEwcHggMHB4IDBweCAwcHg7XG4gIGZvbnQtc2l6ZTogOS41cHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uZm9vdGVyLndoaXRlIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmZvb3Rlci53aGl0ZSBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5mb290ZXIud2hpdGUucmVsZWFzZSB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNEE0OUE4O1xufVxuXG4uZm9vdGVyLndoaXRlIC5kaXZpZGVyIHtcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG59XG5cbi5mb290ZXIgdWwge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIC5uYXYtbGluay5uYXYtbWVudS10b3AtaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjA1NWE7XG4gIGNvbG9yOiAjODFGRkZFO1xuICBib3JkZXI6IHNvbGlkICM4OEJDRTI7XG4gIGJvcmRlci13aWR0aDogMHB4IDFweCAwcHggMHB4O1xuICBwYWRkaW5nOiA0cHggMTVweCA0cHggMTVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvdXRsaW5lOiAwO1xufVxuXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIC5uYXYtbGluay5uYXYtbWVudS10b3AtaXRlbS5sZWZ0IHtcbiAgYm9yZGVyOiBzb2xpZCAjODhCQ0UyO1xuICBib3JkZXItd2lkdGg6IDBweCAxcHggMHB4IDFweDtcbn1cblxuLmZvb3RlciB1bCBsaS5mb290ZXItaXRlbSAubmF2LWxpbmsubmF2LW1lbnUtdG9wLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFGRkZFO1xuICBjb2xvcjogIzAyMDU1YTtcbiAgbWFyZ2luOiAwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5yb3dPZGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZGVkO1xufVxuXG50YWJsZS5kYXRhVGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxudGFibGUuZGF0YVRhYmxlIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzNiOTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAzcHggM3B4IDNweCA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG50YWJsZS5kYXRhVGFibGUgdGQge1xuICBwYWRkaW5nOiA1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRkLmFjdGlvbnMge1xuICB3aWR0aDogMTEwcHggIWltcG9ydGFudDtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRkLmFjdGlvbnMgZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDBweCA0cHggMHB4IDBweDtcbn1cblxuLmFjdGlvbnMgZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDBweCA0cHggMHB4IDBweDtcbn1cblxuLm15RmlsdGVycyBsYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5vdXRlci1pbnB1dC1mcmFtZSB7XG4gIGJvcmRlcjogc29saWQgI2Q0ZDRkNCAycHg7XG59XG5cbi5tYWluU2VjdGlvbiB7XG4gIG1hcmdpbjogMTBweCAwcHggNXB4IDdweDtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1pbi13aWR0aDogMTE1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluQm9yZGVyIHtcbiAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWFpbkJvcmRlci5sb2FkaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWQ3ZSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZGF0YU1haW4ge1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmRhdGFNYWluIHRkLmxhYmVsIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmRhdGFNYWluIHRkIHtcbiAgcGFkZGluZzogMTBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmRhdGFNYWluIHRkLmJ1dHRvbnMge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmxpbmtzLXBhbmVsIHtcbiAgd2lkdGg6IDUwMHB4O1xufVxuXG4ubGlua3MtcGFuZWwuY2FyZC5tbC0xLm10LTIge1xuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jcmVhdGUtc2VhcmNoLWJ1dHRvbi1ncm91cCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmNyZWF0ZS1kZWxldGUtYnV0dG9uLWdyb3VwIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbmxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2hGb3JtIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5zZWFyY2hGb3JtIHRkIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDBweDtcbn1cblxuLnNlYXJjaEZvcm0gdGQubGFiZWwge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5zZWFyY2hGb3JtIHNlbGVjdC5tdWx0aXBsZSB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLnNlYXJjaEZvcm0gc2VsZWN0IHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi5zZWFyY2hGb3JtIHNwYW4ubGFiZWwge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uc3VibWl0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdWJtaXQgdGQ6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYnV0dG9ucyB7XG4gIG1hcmdpbjogMTBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5idXR0b25zIGRpdiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICM0QTQ5QTg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuXG4ubWFpblNlY3Rpb24gYSB7XG4gIGNvbG9yOiAjMDBmICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluU2VjdGlvbiB0ZCB7XG4gIHBhZGRpbmctYm90dG9tOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm1haW5TZWN0aW9uIC5ibHVlSGVhZGVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzNiOTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ubWFpblNlY3Rpb24gLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU1MTg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubWFpblNlY3Rpb24gLmhlYWRlciAuYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5tYWluU2VjdGlvbiAuZWRpdEJ1dHRvbiB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4uZmlsZXMge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gdGQge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXMge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIC5wcm9wZXJ0aWVzIHRoIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDE1MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gdGQubGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDIwMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXMgdGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTUwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllcy5maWxlcyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5leHBlcmltZW50Q29uZmlndXJhdGlvbnMgdGQge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbnVsIHtcbiAgcGFkZGluZy1sZWZ0OiAxM3B4O1xufVxuXG4uZGF0YUFuZENvbmRpdGlvbnMgdGQge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLmRhdGFBbmRDb25kaXRpb25zIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzNiOTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLnByb3BlcnRpZXMgdGQge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnByb3BlcnRpZXMgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3M2I5O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uZmlsZXMge1xuICBtaW4td2lkdGg6IDY1MHB4O1xufVxuXG4uZmlsZXMgdGQge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5maWxlcyB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDczYjk7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbmxhYmVsLnJpZ2h0IHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59IiwiQGltcG9ydCAnLi4vY2FuYW5vbGFiLWNsaWVudC5jb21wb25lbnQuc2Nzcyc7XHJcblxyXG4ub3V0ZXItaW5wdXQtZnJhbWV7XHJcbiAgICBib3JkZXI6IHNvbGlkICNkNGQ0ZDQgMnB4O1xyXG59XHJcbi5tYWluU2VjdGlvbiB7XHJcbiAgICBtYXJnaW46MTBweCAwcHggNXB4IDdweDtcclxuICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgZm9udC1zaXplOiRtYWluRm9udFNpemU7XHJcbiAgICBtaW4td2lkdGg6MTE1MHB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi5tYWluQm9yZGVyIHtcclxuICAgIHBhZGRpbmc6MTVweCAxNXB4IDE1cHggMTVweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcclxuICAgIG1hcmdpbjowcHggMHB4IDBweCAycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbn1cclxuXHJcbi5tYWluQm9yZGVyLmxvYWRpbmcge1xyXG5cdGJhY2tncm91bmQtY29sb3I6JG1lbnVIZWFkaW5nQmFja2dyb3VuZENvbG9yICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6I2ZmZjtcclxuXHRwYWRkaW5nOjE1cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206MTVweDtcclxufVxyXG5cclxuLmRhdGFNYWluICB7XHJcbiAgICBtYXJnaW46NXB4O1xyXG4gICAgd2lkdGg6OTAlO1xyXG59XHJcblxyXG4uZGF0YU1haW4gdGQubGFiZWwge1xyXG4gICAgd2lkdGg6MjAwcHg7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG59XHJcbi5kYXRhTWFpbiB0ZCB7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbn1cclxuXHJcbi5kYXRhTWFpbiB0ZC5idXR0b25zIHtcclxuICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbn1cclxuXHJcblxyXG4ubGlua3MtcGFuZWx7XHJcbiAgICB3aWR0aDogNTAwcHg7ICAvLyBARklYTUUgLSBtYWtlIGEgY29uc3RcclxufVxyXG5cclxuLmxpbmtzLXBhbmVsLmNhcmQubWwtMS5tdC0yIHtcclxuXHRtYXJnaW4tbGVmdDowcHggIWltcG9ydGFudFxyXG59XHJcblxyXG4uY3JlYXRlLXNlYXJjaC1idXR0b24tZ3JvdXB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmNyZWF0ZS1kZWxldGUtYnV0dG9uLWdyb3Vwe1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6NXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWFyY2hGb3JtIHtcclxuICAgIG1hcmdpbjo1cHg7XHJcbn1cclxuXHJcbi5zZWFyY2hGb3JtIHRke1xyXG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgcGFkZGluZzo1cHggMTBweCA1cHggMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoRm9ybSB0ZC5sYWJlbHtcclxuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG59XHJcblxyXG4uc2VhcmNoRm9ybSBzZWxlY3QubXVsdGlwbGUge1xyXG4gICAgd2lkdGg6MTUwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2hGb3JtIHNlbGVjdCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6NHB4O1xyXG59XHJcblxyXG4uc2VhcmNoRm9ybSBzcGFuLmxhYmVsIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcclxufVxyXG5cclxuLnN1Ym1pdCB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4uc3VibWl0IHRkOmxhc3QtY2hpbGQge1xyXG4gICAgdGV4dC1hbGlnbjpyaWdodDtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gICAgbWFyZ2luOjEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG59XHJcblxyXG4uYnV0dG9ucyBkaXYge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY29sb3I6IzRBNDlBODtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgbWFyZ2luOjVweDtcclxuICAgIGZvbnQtc2l6ZToxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYWluU2VjdGlvbiBhIHtcclxuICAgIGNvbG9yOiMwMGYgIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYWluU2VjdGlvbiB0ZCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbToxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6JG1haW5Gb250U2l6ZTtcclxuXHJcbn1cclxuLm1haW5TZWN0aW9uIC5ibHVlSGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMDA3M2I5O1xyXG4gICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5tYWluU2VjdGlvbiAuaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwNTUxODtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbn1cclxuXHJcbiAgICAubWFpblNlY3Rpb24gLmhlYWRlciAuYnRuIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgfVxyXG5cclxuLm1haW5TZWN0aW9uIC5lZGl0QnV0dG9ue1xyXG4gICAgcGFkZGluZy10b3A6NXB4O1xyXG4gICAgdGV4dC1hbGlnbjpyaWdodDtcclxufVxyXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4uZmlsZXN7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbn1cclxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIHRke1xyXG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG59XHJcbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllc3tcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllcyB0aHtcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgcGFkZGluZy1yaWdodDoyMHB4O1xyXG59XHJcbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiB0ZC5sYWJlbHtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICB3aWR0aDoyMDBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxufVxyXG5cclxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIC5wcm9wZXJ0aWVzIHRke1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgd2lkdGg6MTUwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XHJcbn1cclxuXHJcbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllcy5maWxlc3tcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOjVweDtcclxufVxyXG5cclxuLmV4cGVyaW1lbnRDb25maWd1cmF0aW9ucyB0ZCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbiAgICB3aWR0aDozMDBweDtcclxufVxyXG4gdWwge1xyXG4gICBwYWRkaW5nLWxlZnQ6MTNweDtcclxufVxyXG5cclxuXHJcbi5kYXRhQW5kQ29uZGl0aW9ucyB0ZHtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG4gICAgd2lkdGg6MjAwcHg7XHJcbn1cclxuXHJcbi5kYXRhQW5kQ29uZGl0aW9ucyB0aHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwNzNiOTtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgIGJvcmRlcjoxcHggIHNvbGlkICNjY2M7XHJcblxyXG59XHJcblxyXG4ucHJvcGVydGllcyB0ZHtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG4gICAgd2lkdGg6MjAwcHg7XHJcbn1cclxuXHJcbi5wcm9wZXJ0aWVzIHRoe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA3M2I5O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgYm9yZGVyOjFweCAgc29saWQgI2NjYztcclxuXHJcbn1cclxuXHJcbi5maWxlcyB7XHJcbiAgICBtaW4td2lkdGg6NjUwcHg7XHJcbn1cclxuXHJcbi5maWxlcyB0ZHtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG59XHJcblxyXG4uZmlsZXMgdGh7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDczYjk7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbiAgICBib3JkZXI6MXB4ICBzb2xpZCAjY2NjO1xyXG5cclxufVxyXG5cclxubGFiZWwucmlnaHQge1xyXG4gICAgcGFkZGluZy1sZWZ0OjVweDtcclxufVxyXG5cclxuIl19 */"] });
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