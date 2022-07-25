(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cananolab-client-main-display-samples-publications-sample-publications-sample-publications-module"],{

/***/ "2yev":
/*!********************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/publications/sample-publications/sample-publications.pipe.ts ***!
  \********************************************************************************************************************/
/*! exports provided: SamplePublicationsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePublicationsPipe", function() { return SamplePublicationsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants */ "l207");



class SamplePublicationsPipe {
    transform(value, ...args) {
        let val = value;
        val = val.replace('rest/publication/download', src_app_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].QUERY_PUBLICATION_DOWNLOAD);
        return val;
    }
}
SamplePublicationsPipe.ɵfac = function SamplePublicationsPipe_Factory(t) { return new (t || SamplePublicationsPipe)(); };
SamplePublicationsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "samplePublications", type: SamplePublicationsPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SamplePublicationsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'samplePublications'
            }]
    }], null, null); })();


/***/ }),

/***/ "tvdF":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/publications/sample-publications/sample-publications.module.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: SamplePublicationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePublicationsModule", function() { return SamplePublicationsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sample_publications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sample-publications.component */ "yq6P");
/* harmony import */ var _sample_publications_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample-publications-routing.module */ "xw2C");
/* harmony import */ var _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/modules/set-object-value/shared.module */ "0U9J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _sample_publications_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sample-publications.pipe */ "2yev");








class SamplePublicationsModule {
}
SamplePublicationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SamplePublicationsModule });
SamplePublicationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SamplePublicationsModule_Factory(t) { return new (t || SamplePublicationsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _sample_publications_routing_module__WEBPACK_IMPORTED_MODULE_3__["SamplePublicationsRoutingModule"],
            _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SamplePublicationsModule, { declarations: [_sample_publications_component__WEBPACK_IMPORTED_MODULE_2__["SamplePublicationsComponent"], _sample_publications_pipe__WEBPACK_IMPORTED_MODULE_6__["SamplePublicationsPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _sample_publications_routing_module__WEBPACK_IMPORTED_MODULE_3__["SamplePublicationsRoutingModule"],
        _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SamplePublicationsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_sample_publications_component__WEBPACK_IMPORTED_MODULE_2__["SamplePublicationsComponent"], _sample_publications_pipe__WEBPACK_IMPORTED_MODULE_6__["SamplePublicationsPipe"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _sample_publications_routing_module__WEBPACK_IMPORTED_MODULE_3__["SamplePublicationsRoutingModule"],
                    _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "xw2C":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/publications/sample-publications/sample-publications-routing.module.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: SamplePublicationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePublicationsRoutingModule", function() { return SamplePublicationsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sample_publications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sample-publications.component */ "yq6P");





const routes = [{ path: '', component: _sample_publications_component__WEBPACK_IMPORTED_MODULE_2__["SamplePublicationsComponent"] }];
class SamplePublicationsRoutingModule {
}
SamplePublicationsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SamplePublicationsRoutingModule });
SamplePublicationsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SamplePublicationsRoutingModule_Factory(t) { return new (t || SamplePublicationsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SamplePublicationsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SamplePublicationsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yq6P":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/publications/sample-publications/sample-publications.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: SamplePublicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePublicationsComponent", function() { return SamplePublicationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../assets/properties */ "DzTi");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../constants */ "l207");
/* harmony import */ var src_app_cananolab_client_status_display_status_display_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cananolab-client/status-display/status-display.service */ "X3t+");
/* harmony import */ var _common_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/services/api.service */ "WHDV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/services/navigation.service */ "oLIu");
/* harmony import */ var src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/cananolab-client/main-display/main-display-heading/main-display-heading.component */ "AYD1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sample_publications_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sample-publications.pipe */ "2yev");
// --------------------------------------------------------------------------------------------
// ------ This is the Publications screen which is called from  -------------------------------
// ------ the top left "Navigation Tree" menu when a specific Sample has been selected. -------
// ------ Not to be confused with "Publications" in the top horizontal menu.  -----------------
// --------------------------------------------------------------------------------------------











function SamplePublicationsComponent_div_1_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SamplePublicationsComponent_div_1_li_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const category_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.showSection(category_r3.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r3.key);
} }
function SamplePublicationsComponent_div_1_ng_container_7_div_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SamplePublicationsComponent_div_1_ng_container_7_div_1_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const publicationCategory_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.addPublication(publicationCategory_r6.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SamplePublicationsComponent_div_1_ng_container_7_div_1_ng_container_5_tr_16_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const keyword_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", keyword_r18, " ");
} }
function SamplePublicationsComponent_div_1_ng_container_7_div_1_ng_container_5_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Keywords ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SamplePublicationsComponent_div_1_ng_container_7_div_1_ng_container_5_tr_16_li_5_Template, 2, 1, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publication_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.splitKeywords(publication_r13.keywordsStr));
} }
const _c0 = function (a0) { return { "last": a0 }; };
function SamplePublicationsComponent_div_1_ng_container_7_div_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SamplePublicationsComponent_div_1_ng_container_7_div_1_ng_container_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const publication_r13 = ctx.$implicit; const publicationCategory_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.editpublication(publicationCategory_r6.key, publication_r13.publicationId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Bibliography Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "samplePublications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SamplePublicationsComponent_div_1_ng_container_7_div_1_ng_container_5_tr_16_Template, 6, 1, "tr", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Publication Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const publication_r13 = ctx.$implicit;
    const last_r15 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, last_r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, publication_r13.displayName), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", publication_r13.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", publication_r13.keywordsStr != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", publication_r13.status, " ");
} }
function SamplePublicationsComponent_div_1_ng_container_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SamplePublicationsComponent_div_1_ng_container_7_div_1_button_3_Template, 2, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SamplePublicationsComponent_div_1_ng_container_7_div_1_ng_container_5_Template, 22, 9, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const publicationCategory_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", publicationCategory_r6.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.editUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.publicationData[publicationCategory_r6.key]);
} }
function SamplePublicationsComponent_div_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SamplePublicationsComponent_div_1_ng_container_7_div_1_Template, 6, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const publicationCategory_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", publicationCategory_r6.key == ctx_r2.sectionToShow || ctx_r2.sectionToShow == "all");
} }
function SamplePublicationsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SamplePublicationsComponent_div_1_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.showSection("all"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SamplePublicationsComponent_div_1_li_5_Template, 3, 1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SamplePublicationsComponent_div_1_ng_container_7_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 2, ctx_r0.publicationData));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 4, ctx_r0.publicationData));
} }
const _c1 = function (a0) { return [a0, "PUBLICATION"]; };
class SamplePublicationsComponent {
    constructor(statusDisplayService, apiService, router, navigationService, route) {
        this.statusDisplayService = statusDisplayService;
        this.apiService = apiService;
        this.router = router;
        this.navigationService = navigationService;
        this.route = route;
        this.sampleId = _assets_properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].CURRENT_SAMPLE_ID;
        this.helpUrl = _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].HELP_URL_SAMPLE_PUBLICATIONS;
        this.editUrl = false;
        this.sectionToShow = 'all';
    }
    ngOnInit() {
        this.editUrl = this.statusDisplayService.isEditUrl();
        this.publicationData = {};
        this.navigationService.setCurrentSelectedItem(3);
        this.route.params.subscribe((params) => {
            this.sampleId = params['sampleId'];
            this.apiService.getSampleName(this.sampleId).subscribe(data => this.toolHeadingNameManage = 'Sample ' + data['sampleName'] + ' Publication');
            if (this.sampleId <= 0) {
                this.sampleId = _assets_properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].CURRENT_SAMPLE_ID;
            }
            else {
                _assets_properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].CURRENT_SAMPLE_ID = this.sampleId;
            }
            ;
            let url = this.apiService.doGet(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].QUERY_PUBLICATION_SUMMARY_VIEW, 'sampleId=' + this.sampleId);
            url.subscribe(data => {
                console.log(data);
                this.data = data;
                this.propertiesLoaded = true;
                _assets_properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].SAMPLE_TOOLS = true;
                this.separateDataSets(data);
            }, error => {
            });
        });
    }
    addPublication(type) {
        this.router.navigate(['/home/samples/publications/publication', this.sampleId, type]);
    }
    editpublication(type, publicationId) {
        console.log(publicationId);
        this.router.navigate(['/home/samples/publications/publication', this.sampleId, publicationId, type]);
    }
    separateDataSets(data) {
        let setupUrl = this.apiService.doGet(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].QUERY_PUBLICATION_SETUP, '');
        setupUrl.subscribe(setupData => {
            let defaultCategories = setupData['publicationCategories'];
            defaultCategories.forEach(item => {
                this.publicationData[item] = [];
            });
            let keys = Object.keys(data.category2Publications);
            keys.forEach(category => {
                if (!this.publicationData[category]) {
                    this.publicationData[category] = [];
                }
                let currentArray = data.category2Publications[category];
                if (currentArray.length) {
                    currentArray.forEach(item => {
                        this.publicationData[category].push(item);
                    });
                }
            });
        });
    }
    splitKeywords(keywords) {
        return keywords.split('\n');
    }
    showSection(value) {
        this.sectionToShow = value;
    }
}
SamplePublicationsComponent.ɵfac = function SamplePublicationsComponent_Factory(t) { return new (t || SamplePublicationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_cananolab_client_status_display_status_display_service__WEBPACK_IMPORTED_MODULE_3__["StatusDisplayService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
SamplePublicationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SamplePublicationsComponent, selectors: [["canano-sample-publications"]], decls: 2, vars: 7, consts: [[3, "helpUrl", "toolHeadingName", "export", "print"], [4, "ngIf"], [1, "nav", "nav-tabs"], [1, "nav-item"], ["id", "all-tab", "data-toggle", "tab", 1, "nav-link", "active", 3, "click"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["id", "category-tab", "data-toggle", "tab", 1, "nav-link", 3, "click"], ["class", "mainSection", 4, "ngIf"], [1, "mainSection"], [1, "header"], ["class", "btn btn-primary btn-sm", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "mainBorder", 3, "ngClass"], [1, "editButton"], [1, "dataMain"], [1, "label"], [3, "innerHTML"], [3, "innerHtml"]], template: function SamplePublicationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canano-main-display-heading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SamplePublicationsComponent_div_1_Template, 9, 6, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("helpUrl", ctx.helpUrl)("toolHeadingName", ctx.toolHeadingNameManage)("export", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.sampleId))("print", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data);
    } }, directives: [src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_7__["MainDisplayHeadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["KeyValuePipe"], _sample_publications_pipe__WEBPACK_IMPORTED_MODULE_9__["SamplePublicationsPipe"]], styles: ["html[_ngcontent-%COMP%] {\n  font-family: arial, helvetica, verdana, sans-serif !important;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: arial, helvetica, verdana, sans-serif !important;\n}\n\n.header[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\ntd.leftMenu[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  width: 160px;\n  margin: 0px;\n  padding: 0px;\n  vertical-align: top;\n}\n\ntd.mainContent[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding: 0px;\n  margin: 0px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  border: solid #88BCE2;\n  border-width: 1px 1px 1px 0px;\n}\n\n.parent-div[_ngcontent-%COMP%] {\n  \n  display: flex;\n  flex-direction: row;\n  background-color: #fff;\n  width: 100%;\n}\n\n.link-clicker[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n.link-clicker[_ngcontent-%COMP%]:hover {\n  color: #a90101;\n  cursor: pointer;\n}\n\n\n\na[_ngcontent-%COMP%]:link {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n\n\na[_ngcontent-%COMP%]:visited {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n\n\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #a90101;\n}\n\n\n\na[_ngcontent-%COMP%]:active {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.unselectable[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  text-transform: uppercase;\n}\n\n.hand[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.clicker[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.search-results-table[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 100%;\n  border: solid #ccc 1px;\n}\n\n.search-results-tr[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: solid #ccc 1px;\n}\n\n.search-results-th[_ngcontent-%COMP%] {\n  padding: 6px;\n  border: solid #ccc 1px;\n  background-color: #0073b9;\n  color: #fff;\n}\n\n.search-results-td[_ngcontent-%COMP%] {\n  padding: 6px;\n  border-left: solid #ccc 1px;\n  border-right: solid #ccc 1px;\n}\n\n.rowOdd[_ngcontent-%COMP%] {\n  background-color: #efeded;\n}\n\n.search-results--tr-odd[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-width: 0px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  padding-left: 160px;\n  text-align: center;\n}\n\n.spacer.center[_ngcontent-%COMP%] {\n  color: #02055a;\n}\n\n.footer[_ngcontent-%COMP%] {\n  padding: 0px 0px 0px 160px;\n  vertical-align: middle !important;\n  text-align: center;\n  background-color: #02055a;\n  border: solid #88BCE2;\n  border-width: 1px 1px 1px 0px;\n  font-size: 12px;\n}\n\n.footer.white[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 0px;\n  padding: 10px 0px 0px 0px;\n  font-size: 9.5px;\n  color: #333;\n}\n\n.footer.white[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.footer.white[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline !important;\n  color: #333;\n}\n\n.footer.white.release[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  font-weight: normal !important;\n  color: #4A49A8;\n}\n\n.footer.white[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  padding: 0px 10px 0px 10px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  vertical-align: middle;\n  list-style: none;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  display: inline-block;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  color: #81FFFE;\n  border: solid #88BCE2;\n  border-width: 0px 1px 0px 0px;\n  padding: 4px 15px 4px 15px;\n  margin: 0px;\n  vertical-align: top;\n  text-transform: uppercase;\n  font-weight: bold;\n  outline: 0;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item.left[_ngcontent-%COMP%] {\n  border: solid #88BCE2;\n  border-width: 0px 1px 0px 1px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item[_ngcontent-%COMP%]:hover {\n  background-color: #81FFFE;\n  color: #02055a;\n  margin: 0px;\n  vertical-align: top;\n}\n\n.rowOdd[_ngcontent-%COMP%] {\n  background-color: #efeded;\n}\n\ntable.dataTable[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #ccc;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  font-weight: bold;\n  padding: 3px 3px 3px 5px;\n  border: 1px solid #ccc;\n  text-transform: capitalize;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n  width: 250px;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%] {\n  width: 110px !important;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0px 4px 0px 0px;\n}\n\n.actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0px 4px 0px 0px;\n}\n\n.myFilters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.outer-input-frame[_ngcontent-%COMP%] {\n  border: solid #d4d4d4 2px;\n}\n\n.mainSection[_ngcontent-%COMP%] {\n  margin: 10px 0px 5px 7px;\n  padding: 0px;\n  font-size: 12px;\n  min-width: 1150px !important;\n}\n\n.mainBorder[_ngcontent-%COMP%] {\n  padding: 15px 15px 15px 15px;\n  border: 1px solid #ccc;\n  margin: 0px 0px 0px 2px;\n  width: 100%;\n}\n\n.mainBorder.loading[_ngcontent-%COMP%] {\n  background-color: #005d7e !important;\n  color: #fff;\n  padding: 15px !important;\n  margin-bottom: 15px;\n}\n\n.dataMain[_ngcontent-%COMP%] {\n  margin: 5px;\n  width: 90%;\n}\n\n.dataMain[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  width: 200px;\n  padding: 10px;\n  font-weight: bold;\n  vertical-align: top;\n}\n\n.dataMain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  vertical-align: top;\n}\n\n.dataMain[_ngcontent-%COMP%]   td.buttons[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.links-panel[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.links-panel.card.ml-1.mt-2[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n}\n\n.create-search-button-group[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.create-delete-button-group[_ngcontent-%COMP%] {\n  float: left;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-right: 5px !important;\n}\n\n.searchForm[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.searchForm[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding: 5px 10px 5px 0px;\n}\n\n.searchForm[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding-right: 20px;\n  width: 150px;\n}\n\n.searchForm[_ngcontent-%COMP%]   select.multiple[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.searchForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n\n.searchForm[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\n.submit[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.submit[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  margin: 10px;\n  text-align: right;\n}\n\n.buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #4A49A8;\n  text-align: center;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n  margin: 5px;\n  font-size: 14px !important;\n}\n\n.mainSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #00f !important;\n  text-decoration: underline !important;\n}\n\n.mainSection[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-bottom: 13px !important;\n  font-size: 12px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .blueHeader[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #0073b9;\n  color: #fff;\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: #005518;\n  color: #fff;\n  padding: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .editButton[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  text-align: right;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain.files[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 200px;\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties.files[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  width: 100%;\n  margin-bottom: 5px;\n}\n\n.experimentConfigurations[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  width: 300px;\n}\n\nul[_ngcontent-%COMP%] {\n  padding-left: 13px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%] {\n  min-width: 650px;\n}\n\n.files[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\nlabel.right[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\n.mainBorder[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.mainBorder.last[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.header[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  margin-bottom: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.nav.nav-tabs[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-left: -6px;\n  border-bottom: none !important;\n  padding-top: 15px !important;\n}\n\n.mainSection[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\n\na.nav-link[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  text-decoration: none !important;\n}\n\na.nav-link.active[_ngcontent-%COMP%] {\n  border-color: #000 #000 #005518 !important;\n  text-decoration: none !important;\n  color: #fff !important;\n  background-color: #005518 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NhbmFub2xhYi1jbGllbnQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zYW1wbGUtcHVibGljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbWFpbi1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCQTtFQUNJLDZEQUZvQjtBQ2R4Qjs7QURtQkE7RUFDSSw2REFOb0I7QUNWeEI7O0FEa0JBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNmRDs7QURvQkE7RUFFSSx5QkE3QnFCO0VBOEJyQixZQTNCWTtFQTRCZixXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDbEJEOztBRHFCQTtFQUVJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNuQko7O0FEc0JBO0VBRUkseUJBN0NxQjtFQThDckIscUJBQUE7RUFDQSw2QkFBQTtBQ3BCSjs7QUR1QkE7RUFDSSxrRUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ3BCSjs7QUR3QkE7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FDckJKOztBRHVCSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDckJSOztBRHlCQSxtQkFBQTs7QUFDQTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUN0Qko7O0FEeUJBLGlCQUFBOztBQUNBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ3RCSjs7QUR5QkEsb0JBQUE7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDdEJKOztBRHlCQSxrQkFBQTs7QUFDQTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUN0Qko7O0FEeUJBO0VBQ0ksYUFBQTtBQ3RCSjs7QUR5QkE7RUFDSSwyQkFBQTtFQUNBLHlCQUFBO0VB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QUM3UUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FEZ1JKOztBQzdRQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FEZ1JKOztBQzVRQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUQrUUo7O0FDNVFBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUQrUUo7O0FDM1FBO0VBQ0ksZ0JBQUE7QUQ4UUo7O0FDM1FBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0FEOFFKOztBQzNRQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FEOFFKOztBQzFRQTtFQUNJLGlCQUFBO0FENlFKOztBQTlmQTtFQUNJLG1CQUFBO0FBaWdCSjs7QUE5ZkE7RUFDSSxrQkFBQTtBQWlnQko7O0FBOWZBO0VBQ0ksMEJBQUE7QUFpZ0JKOztBQS9mQTtFQUNJLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQWtnQko7O0FBOWZBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtBQWlnQko7O0FBL2ZBO0VBQ0ksZUFBQTtBQWtnQko7O0FBaGdCQTtFQUNJLDBCQUFBO0VBQ0EsZ0NBQUE7QUFtZ0JKOztBQWpnQkE7RUFDSSwwQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtBQW9nQkoiLCJmaWxlIjoic2FtcGxlLXB1YmxpY2F0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4kY2FuYW5vLWdyZWVuOiAjMDA1NTE4O1xuJGNhbmFuby1ibHVlOiAjMDA3M2I5O1xuJGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU6ICMwMjA1NWE7XG4kbWVudUhlYWRpbmdCYWNrZ3JvdW5kQ29sb3I6ICMwMDVkN2U7XG4kbGVmdE1lbnVCb3JkZXJDb2xvcjojODhCQ0UyO1xuJGxlZnRNZW51V2lkdGg6IDE2MHB4O1xuJGxlZnRNZW51TWFyZ2luOiAwcHg7XG4kbmF2QnV0dG9uQ29sb3I6IzgxRkZGRTtcbiRib3JkZXJDb2xvcjogJGxlZnRNZW51Qm9yZGVyQ29sb3I7XG4kbWFpbkZvbnRTaXplOjEycHg7XG4ka2V5d29yZFNlYXJjaEZvbnRTaXplOiAxMnB4O1xuJG9kZFJvd0NvbG9yOiNlZmVkZWQ7XG4kbWFpbkRpc3BsYXlIZWFkaW5nSGVpZ2h0OiAyOHB4O1xuJG1haW5EaXNwbGF5SGVhZGluZ01hcmdpbjogOHB4O1xuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6YXJpYWwsaGVsdmV0aWNhLHZlcmRhbmEsc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6JGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY7XG5cbn1cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiRmb250LWZhbWlseS1zYW5zLXNlcmlmO1xufVxuLmhlYWRlciB7XG5cdG1hcmdpbjowcHg7XG5cdHBhZGRpbmc6MHB4O1xufVxuLmhvbWUge1xufVxuXG50ZC5sZWZ0TWVudSB7XG4gICAgQGV4dGVuZCAuaG9tZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlO1xuICAgIHdpZHRoOiRsZWZ0TWVudVdpZHRoO1xuXHRtYXJnaW46MHB4O1xuXHRwYWRkaW5nOjBweDtcblx0dmVydGljYWwtYWxpZ246dG9wO1xufVxuXG50ZC5tYWluQ29udGVudCB7XG4gICAgQGV4dGVuZCAuaG9tZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgcGFkZGluZzowcHg7XG4gICAgbWFyZ2luOjBweDtcbn1cblxuLmZvb3RlciB7XG4gICAgQGV4dGVuZCAuaG9tZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlO1xuICAgIGJvcmRlcjpzb2xpZCAkbGVmdE1lbnVCb3JkZXJDb2xvcjtcbiAgICBib3JkZXItd2lkdGg6MXB4IDFweCAxcHggMHB4O1xufVxuXG4ucGFyZW50LWRpdntcbiAgICAvKiBrZWVwIHRoZSBRdWVyeSBzZWN0aW9uIGFuZCB0aGUgRGlzcGxheSBzZWN0aW9uIHNpZGUgYnkgc2lkZS4gICovXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4vLyBARklYTUUgLSBUaGVzZSBjb2xvcnMgbmVlZCB2YXJpYWJsZXNcbi5saW5rLWNsaWNrZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiAjMzMzO1xuXG4gICAgJjpob3ZlcntcbiAgICAgICAgY29sb3I6ICNhOTAxMDE7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbi8qIHVudmlzaXRlZCBsaW5rICovXG5hOmxpbmt7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4vKiB2aXNpdGVkIGxpbmsgKi9cbmE6dmlzaXRlZHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi8qIG1vdXNlIG92ZXIgbGluayAqL1xuYTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICNhOTAxMDE7XG59XG5cbi8qIHNlbGVjdGVkIGxpbmsgKi9cbmE6YWN0aXZle1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogIzMzMztcbn1cblxuLmhpZGV7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnVuc2VsZWN0YWJsZXtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmhhbmQge1xuICAgIGN1cnNvcjpwb2ludGVyICFpbXBvcnRhbnQ7XG59XG5cbi5jbGlja2Vye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4uc2VhcmNoLXJlc3VsdHMtdGFibGV7XG4gICAgZm9udC1zaXplOiAkbWFpbkZvbnRTaXplO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogc29saWQgI2NjYyAxcHg7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy10cntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogc29saWQgI2NjYyAxcHg7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy10aHtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgLy8gIGJvcmRlcjogc29saWQgI2RmZGZkZiAycHg7XG4gICAgYm9yZGVyOiBzb2xpZCAjY2NjIDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FuYW5vLWJsdWU7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy10ZHtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgLy8gYm9yZGVyOiBzb2xpZCAjZGZkZmRmIDJweDtcbiAgICBib3JkZXItbGVmdDogc29saWQgI2NjYyAxcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAjY2NjIDFweDtcbn1cblxuLnJvd09kZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb2RkUm93Q29sb3I7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy0tdHItb2Rke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbmltZyB7XG5cdGJvcmRlci13aWR0aDowcHg7XG5cdG1hcmdpbjowcHg7XG5cdHBhZGRpbmc6MHB4O1xuXG59XG5cbi5zcGFjZXIge1xuICAgIHBhZGRpbmctbGVmdDokbGVmdE1lbnVXaWR0aDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuLnNwYWNlci5jZW50ZXIge1xuICAgIGNvbG9yOiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlO1xufVxuXG5cbi5mb290ZXIge1xuXHRwYWRkaW5nOjBweCAwcHggMHB4IDE2MHB4O1xuXHR2ZXJ0aWNhbC1hbGlnbjptaWRkbGUgIWltcG9ydGFudDtcblx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6JGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU7XG4gICAgYm9yZGVyOnNvbGlkICRsZWZ0TWVudUJvcmRlckNvbG9yO1xuICAgIGJvcmRlci13aWR0aDoxcHggMXB4IDFweCAwcHg7XG4gICAgZm9udC1zaXplOiRtYWluRm9udFNpemU7XG59O1xuXG5cbi5mb290ZXIud2hpdGV7XG5cdGJhY2tncm91bmQtY29sb3I6I2ZmZjtcblx0Ym9yZGVyOjBweDtcblx0cGFkZGluZzoxMHB4IDBweCAwcHggMHB4O1xuXHRmb250LXNpemU6OS41cHg7XG4gICAgY29sb3I6IzMzMztcbn07XG5cbi5mb290ZXIud2hpdGUgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDtcbn07XG5cbi5mb290ZXIud2hpdGUgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiMzMzM7XG59XG5cbi5mb290ZXIud2hpdGUucmVsZWFzZSB7XG4gICAgZm9udC1zaXplOjEycHggIWltcG9ydGFudDtcblx0Zm9udC13ZWlnaHQ6bm9ybWFsICFpbXBvcnRhbnQ7XG5cdGNvbG9yOiM0QTQ5QTg7XG59XG5cbi5mb290ZXIud2hpdGUgLmRpdmlkZXIge1xuXHRwYWRkaW5nOjBweCAxMHB4IDBweCAxMHB4O1xufTtcblxuLmZvb3RlciB1bCB7XG4gICAgbWFyZ2luOjBweDtcbiAgICBwYWRkaW5nOjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG4gICAgbGlzdC1zdHlsZTpub25lO1xufTtcblxuLmZvb3RlciB1bCBsaS5mb290ZXItaXRlbSB7XG4gICAgcGFkZGluZzowcHg7XG4gICAgbWFyZ2luOjBweDtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbn1cblxuXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIC5uYXYtbGluay5uYXYtbWVudS10b3AtaXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjokY2FuYW5vLWJhY2tncm91bmQtYmx1ZTtcbiAgICBjb2xvcjokbmF2QnV0dG9uQ29sb3I7XG4gICAgYm9yZGVyOiBzb2xpZCAkbGVmdE1lbnVCb3JkZXJDb2xvcjtcbiAgICBib3JkZXItd2lkdGg6MHB4IDFweCAwcHggMHB4O1xuICAgIHBhZGRpbmc6NHB4IDE1cHggNHB4IDE1cHg7XG4gICAgbWFyZ2luOjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG5cdHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcblx0b3V0bGluZTowO1xufVxuXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIC5uYXYtbGluay5uYXYtbWVudS10b3AtaXRlbS5sZWZ0e1xuICAgIGJvcmRlcjogc29saWQgJGxlZnRNZW51Qm9yZGVyQ29sb3I7XG4gICAgYm9yZGVyLXdpZHRoOjBweCAxcHggMHB4IDFweDtcbn1cblxuLmZvb3RlciB1bCBsaS5mb290ZXItaXRlbSAubmF2LWxpbmsubmF2LW1lbnUtdG9wLWl0ZW06aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjokbmF2QnV0dG9uQ29sb3I7XG4gICAgY29sb3I6JGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU7XG4gICAgbWFyZ2luOjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG59XG5cbi5yb3dPZGQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiRvZGRSb3dDb2xvcjtcbn1cblxudGFibGUuZGF0YVRhYmxle1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcblxufVxuXG50YWJsZS5kYXRhVGFibGUgdGh7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzNiOTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOjNweCAzcHggM3B4IDVweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbnRhYmxlLmRhdGFUYWJsZSB0ZHtcblx0cGFkZGluZzo1cHg7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcblx0d2lkdGg6MjUwcHg7XG59XG5cbnRhYmxlLmRhdGFUYWJsZSB0ZC5hY3Rpb25zICB7XG5cdHdpZHRoOjExMHB4ICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlLmRhdGFUYWJsZSB0ZC5hY3Rpb25zIGRpdiB7XG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHRtYXJnaW46MHB4IDRweCAwcHggMHB4O1xufVxuXG4uYWN0aW9ucyBkaXYge1xuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcblx0bWFyZ2luOjBweCA0cHggMHB4IDBweDtcbn1cblxuLm15RmlsdGVycyBsYWJlbCB7XG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL21haW4tZGlzcGxheS9tYWluLWRpc3BsYXkuY29tcG9uZW50LnNjc3NcIjtcblxuLm1haW5Cb3JkZXIge1xuICAgIG1hcmdpbi1ib3R0b206MTVweDtcbn1cblxuLm1haW5Cb3JkZXIubGFzdCB7XG4gICAgbWFyZ2luLWJvdHRvbTowcHg7XG59XG5cbi5oZWFkZXIge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLm5hdi1pdGVtIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBtYXJnaW4tYm90dG9tOjBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOjBweCAhaW1wb3J0YW50O1xuXG59XG5cbi5uYXYubmF2LXRhYnMge1xuICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgIG1hcmdpbi1sZWZ0Oi02cHg7XG4gICAgYm9yZGVyLWJvdHRvbTpub25lICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6MTVweCAhaW1wb3J0YW50O1xufVxuLm1haW5TZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOjBweDtcbn1cbmEubmF2LWxpbmsge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuYS5uYXYtbGluay5hY3RpdmUge1xuICAgIGJvcmRlci1jb2xvcjogIzAwMCAjMDAwICRjYW5hbm8tZ3JlZW4gIWltcG9ydGFudDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICBjb2xvcjojZmZmICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjokY2FuYW5vLWdyZWVuICFpbXBvcnRhbnQ7XG59XG4iLCJAaW1wb3J0ICcuLi9jYW5hbm9sYWItY2xpZW50LmNvbXBvbmVudC5zY3NzJztcblxuLm91dGVyLWlucHV0LWZyYW1le1xuICAgIGJvcmRlcjogc29saWQgI2Q0ZDRkNCAycHg7XG59XG4ubWFpblNlY3Rpb24ge1xuICAgIG1hcmdpbjoxMHB4IDBweCA1cHggN3B4O1xuICAgIHBhZGRpbmc6MHB4O1xuICAgIGZvbnQtc2l6ZTokbWFpbkZvbnRTaXplO1xuICAgIG1pbi13aWR0aDoxMTUwcHggIWltcG9ydGFudDtcblxufVxuLm1haW5Cb3JkZXIge1xuICAgIHBhZGRpbmc6MTVweCAxNXB4IDE1cHggMTVweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgbWFyZ2luOjBweCAwcHggMHB4IDJweDtcbiAgICB3aWR0aDogMTAwJTtcblxufVxuXG4ubWFpbkJvcmRlci5sb2FkaW5nIHtcblx0YmFja2dyb3VuZC1jb2xvcjokbWVudUhlYWRpbmdCYWNrZ3JvdW5kQ29sb3IgIWltcG9ydGFudDtcblx0Y29sb3I6I2ZmZjtcblx0cGFkZGluZzoxNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbToxNXB4O1xufVxuXG4uZGF0YU1haW4gIHtcbiAgICBtYXJnaW46NXB4O1xuICAgIHdpZHRoOjkwJTtcbn1cblxuLmRhdGFNYWluIHRkLmxhYmVsIHtcbiAgICB3aWR0aDoyMDBweDtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG59XG4uZGF0YU1haW4gdGQge1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG59XG5cbi5kYXRhTWFpbiB0ZC5idXR0b25zIHtcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xufVxuXG5cbi5saW5rcy1wYW5lbHtcbiAgICB3aWR0aDogNTAwcHg7ICAvLyBARklYTUUgLSBtYWtlIGEgY29uc3Rcbn1cblxuLmxpbmtzLXBhbmVsLmNhcmQubWwtMS5tdC0yIHtcblx0bWFyZ2luLWxlZnQ6MHB4ICFpbXBvcnRhbnRcbn1cblxuLmNyZWF0ZS1zZWFyY2gtYnV0dG9uLWdyb3Vwe1xuICAgIGZsb2F0OiByaWdodDtcbn1cbi5jcmVhdGUtZGVsZXRlLWJ1dHRvbi1ncm91cHtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxubGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgbWFyZ2luLXJpZ2h0OjVweCAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoRm9ybSB7XG4gICAgbWFyZ2luOjVweDtcbn1cblxuLnNlYXJjaEZvcm0gdGR7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIHBhZGRpbmc6NXB4IDEwcHggNXB4IDBweDtcbn1cblxuLnNlYXJjaEZvcm0gdGQubGFiZWx7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcbiAgICB3aWR0aDoxNTBweDtcbn1cblxuLnNlYXJjaEZvcm0gc2VsZWN0Lm11bHRpcGxlIHtcbiAgICB3aWR0aDoxNTBweDtcbn1cblxuLnNlYXJjaEZvcm0gc2VsZWN0IHtcbiAgICBtYXJnaW4tcmlnaHQ6NHB4O1xufVxuXG4uc2VhcmNoRm9ybSBzcGFuLmxhYmVsIHtcbiAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XG59XG5cbi5zdWJtaXQge1xuICAgIHdpZHRoOjEwMCU7XG59XG5cbi5zdWJtaXQgdGQ6bGFzdC1jaGlsZCB7XG4gICAgdGV4dC1hbGlnbjpyaWdodDtcbn1cblxuLmJ1dHRvbnMge1xuICAgIG1hcmdpbjoxMHB4O1xuICAgIHRleHQtYWxpZ246cmlnaHQ7XG59XG5cbi5idXR0b25zIGRpdiB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiM0QTQ5QTg7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbi5lcnJvciB7XG4gICAgY29sb3I6cmVkO1xuICAgIG1hcmdpbjo1cHg7XG4gICAgZm9udC1zaXplOjE0cHggIWltcG9ydGFudDtcbn1cblxuLm1haW5TZWN0aW9uIGEge1xuICAgIGNvbG9yOiMwMGYgIWltcG9ydGFudDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xufVxuXG4ubWFpblNlY3Rpb24gdGQge1xuICAgIHBhZGRpbmctYm90dG9tOjEzcHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6JG1haW5Gb250U2l6ZTtcblxufVxuLm1haW5TZWN0aW9uIC5ibHVlSGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzoxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDczYjk7XG4gICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ubWFpblNlY3Rpb24gLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA1NTE4O1xuICAgIGNvbG9yOiNmZmY7XG4gICAgcGFkZGluZzoxMHB4O1xufVxuXG4gICAgLm1haW5TZWN0aW9uIC5oZWFkZXIgLmJ0biB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OjEwcHg7XG4gICAgfVxuXG4ubWFpblNlY3Rpb24gLmVkaXRCdXR0b257XG4gICAgcGFkZGluZy10b3A6NXB4O1xuICAgIHRleHQtYWxpZ246cmlnaHQ7XG59XG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4uZmlsZXN7XG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xufVxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIHRke1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbn1cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllc3tcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllcyB0aHtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgd2lkdGg6MTUwcHg7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcbn1cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiB0ZC5sYWJlbHtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIHdpZHRoOjIwMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbn1cblxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIC5wcm9wZXJ0aWVzIHRke1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICB3aWR0aDoxNTBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgcGFkZGluZy1yaWdodDoyMHB4O1xufVxuXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXMuZmlsZXN7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTo1cHg7XG59XG5cbi5leHBlcmltZW50Q29uZmlndXJhdGlvbnMgdGQge1xuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcbiAgICB3aWR0aDozMDBweDtcbn1cbiB1bCB7XG4gICBwYWRkaW5nLWxlZnQ6MTNweDtcbn1cblxuXG4uZGF0YUFuZENvbmRpdGlvbnMgdGR7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIHdpZHRoOjIwMHB4O1xufVxuXG4uZGF0YUFuZENvbmRpdGlvbnMgdGh7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA3M2I5O1xuICAgIGNvbG9yOiNmZmY7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIGJvcmRlcjoxcHggIHNvbGlkICNjY2M7XG5cbn1cblxuLnByb3BlcnRpZXMgdGR7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIHdpZHRoOjIwMHB4O1xufVxuXG4ucHJvcGVydGllcyB0aHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDczYjk7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBwYWRkaW5nOjVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgYm9yZGVyOjFweCAgc29saWQgI2NjYztcblxufVxuXG4uZmlsZXMge1xuICAgIG1pbi13aWR0aDo2NTBweDtcbn1cblxuLmZpbGVzIHRke1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbn1cblxuLmZpbGVzIHRoe1xuICAgIGJhY2tncm91bmQtY29sb3I6IzAwNzNiOTtcbiAgICBjb2xvcjojZmZmO1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbiAgICBib3JkZXI6MXB4ICBzb2xpZCAjY2NjO1xuXG59XG5cbmxhYmVsLnJpZ2h0IHtcbiAgICBwYWRkaW5nLWxlZnQ6NXB4O1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SamplePublicationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'canano-sample-publications',
                templateUrl: './sample-publications.component.html',
                styleUrls: ['./sample-publications.component.scss']
            }]
    }], function () { return [{ type: src_app_cananolab_client_status_display_status_display_service__WEBPACK_IMPORTED_MODULE_3__["StatusDisplayService"] }, { type: _common_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _common_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=cananolab-client-main-display-samples-publications-sample-publications-sample-publications-module.js.map