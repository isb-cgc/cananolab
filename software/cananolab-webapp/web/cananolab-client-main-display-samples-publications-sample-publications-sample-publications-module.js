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
    } }, directives: [src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_7__["MainDisplayHeadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["KeyValuePipe"], _sample_publications_pipe__WEBPACK_IMPORTED_MODULE_9__["SamplePublicationsPipe"]], styles: ["html[_ngcontent-%COMP%] {\n  font-family: arial, helvetica, verdana, sans-serif !important;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: arial, helvetica, verdana, sans-serif !important;\n}\n\n.header[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\ntd.leftMenu[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  width: 160px;\n  margin: 0px;\n  padding: 0px;\n  vertical-align: top;\n}\n\ntd.mainContent[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding: 0px;\n  margin: 0px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  border: solid #88BCE2;\n  border-width: 1px 1px 1px 0px;\n}\n\n.parent-div[_ngcontent-%COMP%] {\n  \n  display: flex;\n  flex-direction: row;\n  background-color: #fff;\n  width: 100%;\n}\n\n.link-clicker[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n.link-clicker[_ngcontent-%COMP%]:hover {\n  color: #a90101;\n  cursor: pointer;\n}\n\n\n\na[_ngcontent-%COMP%]:link {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n\n\na[_ngcontent-%COMP%]:visited {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n\n\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #a90101;\n}\n\n\n\na[_ngcontent-%COMP%]:active {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.unselectable[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  text-transform: uppercase;\n}\n\n.hand[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.clicker[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.search-results-table[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 100%;\n  border: solid #ccc 1px;\n}\n\n.search-results-tr[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: solid #ccc 1px;\n}\n\n.search-results-th[_ngcontent-%COMP%] {\n  padding: 6px;\n  border: solid #ccc 1px;\n  background-color: #0073b9;\n  color: #fff;\n}\n\n.search-results-td[_ngcontent-%COMP%] {\n  padding: 6px;\n  border-left: solid #ccc 1px;\n  border-right: solid #ccc 1px;\n}\n\n.rowOdd[_ngcontent-%COMP%] {\n  background-color: #efeded;\n}\n\n.search-results--tr-odd[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-width: 0px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  padding-left: 160px;\n  text-align: center;\n}\n\n.spacer.center[_ngcontent-%COMP%] {\n  color: #02055a;\n}\n\n.footer[_ngcontent-%COMP%] {\n  padding: 0px 0px 0px 160px;\n  vertical-align: middle !important;\n  text-align: center;\n  background-color: #02055a;\n  border: solid #88BCE2;\n  border-width: 1px 1px 1px 0px;\n  font-size: 12px;\n}\n\n.footer.white[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 0px;\n  padding: 10px 0px 0px 0px;\n  font-size: 9.5px;\n  color: #333;\n}\n\n.footer.white[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.footer.white[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline !important;\n  color: #333;\n}\n\n.footer.white.release[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  font-weight: normal !important;\n  color: #4A49A8;\n}\n\n.footer.white[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  padding: 0px 10px 0px 10px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  vertical-align: middle;\n  list-style: none;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  display: inline-block;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  color: #81FFFE;\n  border: solid #88BCE2;\n  border-width: 0px 1px 0px 0px;\n  padding: 4px 15px 4px 15px;\n  margin: 0px;\n  vertical-align: top;\n  text-transform: uppercase;\n  font-weight: bold;\n  outline: 0;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item.left[_ngcontent-%COMP%] {\n  border: solid #88BCE2;\n  border-width: 0px 1px 0px 1px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item[_ngcontent-%COMP%]:hover {\n  background-color: #81FFFE;\n  color: #02055a;\n  margin: 0px;\n  vertical-align: top;\n}\n\n.rowOdd[_ngcontent-%COMP%] {\n  background-color: #efeded;\n}\n\ntable.dataTable[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #ccc;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  font-weight: bold;\n  padding: 3px 3px 3px 5px;\n  border: 1px solid #ccc;\n  text-transform: capitalize;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n  width: 250px;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%] {\n  width: 110px !important;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0px 4px 0px 0px;\n}\n\n.actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0px 4px 0px 0px;\n}\n\n.myFilters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.outer-input-frame[_ngcontent-%COMP%] {\n  border: solid #d4d4d4 2px;\n}\n\n.mainSection[_ngcontent-%COMP%] {\n  margin: 10px 0px 5px 7px;\n  padding: 0px;\n  font-size: 12px;\n  min-width: 1150px !important;\n}\n\n.mainBorder[_ngcontent-%COMP%] {\n  padding: 15px 15px 15px 15px;\n  border: 1px solid #ccc;\n  margin: 0px 0px 0px 2px;\n  width: 100%;\n}\n\n.mainBorder.loading[_ngcontent-%COMP%] {\n  background-color: #005d7e !important;\n  color: #fff;\n  padding: 15px !important;\n  margin-bottom: 15px;\n}\n\n.dataMain[_ngcontent-%COMP%] {\n  margin: 5px;\n  width: 90%;\n}\n\n.dataMain[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  width: 200px;\n  padding: 10px;\n  font-weight: bold;\n  vertical-align: top;\n}\n\n.dataMain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  vertical-align: top;\n}\n\n.dataMain[_ngcontent-%COMP%]   td.buttons[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.links-panel[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.links-panel.card.ml-1.mt-2[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n}\n\n.create-search-button-group[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.create-delete-button-group[_ngcontent-%COMP%] {\n  float: left;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-right: 5px !important;\n}\n\n.searchForm[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.searchForm[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding: 5px 10px 5px 0px;\n}\n\n.searchForm[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding-right: 20px;\n  width: 150px;\n}\n\n.searchForm[_ngcontent-%COMP%]   select.multiple[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.searchForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n\n.searchForm[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\n.submit[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.submit[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  margin: 10px;\n  text-align: right;\n}\n\n.buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #4A49A8;\n  text-align: center;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n  margin: 5px;\n  font-size: 14px !important;\n}\n\n.mainSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #00f !important;\n  text-decoration: underline !important;\n}\n\n.mainSection[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-bottom: 13px !important;\n  font-size: 12px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .blueHeader[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #0073b9;\n  color: #fff;\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: #005518;\n  color: #fff;\n  padding: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .editButton[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  text-align: right;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain.files[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 200px;\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties.files[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  width: 100%;\n  margin-bottom: 5px;\n}\n\n.experimentConfigurations[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  width: 300px;\n}\n\nul[_ngcontent-%COMP%] {\n  padding-left: 13px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%] {\n  min-width: 650px;\n}\n\n.files[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\nlabel.right[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\n.mainBorder[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.mainBorder.last[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.header[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  margin-bottom: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.nav.nav-tabs[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-left: -6px;\n  border-bottom: none !important;\n  padding-top: 15px !important;\n}\n\n.mainSection[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\n\na.nav-link[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  text-decoration: none !important;\n}\n\na.nav-link.active[_ngcontent-%COMP%] {\n  border-color: #000 #000 #005518 !important;\n  text-decoration: none !important;\n  color: #fff !important;\n  background-color: #005518 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcY2FuYW5vbGFiLWNsaWVudC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzYW1wbGUtcHVibGljYXRpb25zLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXG1haW4tZGlzcGxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQkE7RUFDSSw2REFGb0I7QUNkeEI7O0FEbUJBO0VBQ0ksNkRBTm9CO0FDVnhCOztBRGtCQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDZkQ7O0FEb0JBO0VBRUkseUJBN0JxQjtFQThCckIsWUEzQlk7RUE0QmYsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ2xCRDs7QURxQkE7RUFFSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDbkJKOztBRHNCQTtFQUVJLHlCQTdDcUI7RUE4Q3JCLHFCQUFBO0VBQ0EsNkJBQUE7QUNwQko7O0FEdUJBO0VBQ0ksa0VBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNwQko7O0FEd0JBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ3JCSjs7QUR1Qkk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ3JCUjs7QUR5QkEsbUJBQUE7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FDdEJKOztBRHlCQSxpQkFBQTs7QUFDQTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUN0Qko7O0FEeUJBLG9CQUFBOztBQUNBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQ3RCSjs7QUR5QkEsa0JBQUE7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FDdEJKOztBRHlCQTtFQUNJLGFBQUE7QUN0Qko7O0FE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Uko7O0FDOVFDO0VBQ0Usa0JBQUE7QURpUkg7O0FDN1FBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBRGdSSjs7QUM3UUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBRGdSSjs7QUM1UUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FEK1FKOztBQzVRQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FEK1FKOztBQzNRQTtFQUNJLGdCQUFBO0FEOFFKOztBQzNRQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBRDhRSjs7QUMzUUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBRDhRSjs7QUMxUUE7RUFDSSxpQkFBQTtBRDZRSjs7QUE5ZkE7RUFDSSxtQkFBQTtBQWlnQko7O0FBOWZBO0VBQ0ksa0JBQUE7QUFpZ0JKOztBQTlmQTtFQUNJLDBCQUFBO0FBaWdCSjs7QUEvZkE7RUFDSSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUFrZ0JKOztBQTlmQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7QUFpZ0JKOztBQS9mQTtFQUNJLGVBQUE7QUFrZ0JKOztBQWhnQkE7RUFDSSwwQkFBQTtFQUNBLGdDQUFBO0FBbWdCSjs7QUFqZ0JBO0VBQ0ksMENBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7QUFvZ0JKIiwiZmlsZSI6InNhbXBsZS1wdWJsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiRjYW5hbm8tZ3JlZW46ICMwMDU1MTg7XHJcbiRjYW5hbm8tYmx1ZTogIzAwNzNiOTtcclxuJGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU6ICMwMjA1NWE7XHJcbiRtZW51SGVhZGluZ0JhY2tncm91bmRDb2xvcjogIzAwNWQ3ZTtcclxuJGxlZnRNZW51Qm9yZGVyQ29sb3I6Izg4QkNFMjtcclxuJGxlZnRNZW51V2lkdGg6IDE2MHB4O1xyXG4kbGVmdE1lbnVNYXJnaW46IDBweDtcclxuJG5hdkJ1dHRvbkNvbG9yOiM4MUZGRkU7XHJcbiRib3JkZXJDb2xvcjogJGxlZnRNZW51Qm9yZGVyQ29sb3I7XHJcbiRtYWluRm9udFNpemU6MTJweDtcclxuJGtleXdvcmRTZWFyY2hGb250U2l6ZTogMTJweDtcclxuJG9kZFJvd0NvbG9yOiNlZmVkZWQ7XHJcbiRtYWluRGlzcGxheUhlYWRpbmdIZWlnaHQ6IDI4cHg7XHJcbiRtYWluRGlzcGxheUhlYWRpbmdNYXJnaW46IDhweDtcclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6YXJpYWwsaGVsdmV0aWNhLHZlcmRhbmEsc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xyXG5odG1sIHtcclxuICAgIGZvbnQtZmFtaWx5OiRmb250LWZhbWlseS1zYW5zLXNlcmlmO1xyXG5cclxufVxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiRmb250LWZhbWlseS1zYW5zLXNlcmlmO1xyXG59XHJcbi5oZWFkZXIge1xyXG5cdG1hcmdpbjowcHg7XHJcblx0cGFkZGluZzowcHg7XHJcbn1cclxuLmhvbWUge1xyXG59XHJcblxyXG50ZC5sZWZ0TWVudSB7XHJcbiAgICBAZXh0ZW5kIC5ob21lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjokY2FuYW5vLWJhY2tncm91bmQtYmx1ZTtcclxuICAgIHdpZHRoOiRsZWZ0TWVudVdpZHRoO1xyXG5cdG1hcmdpbjowcHg7XHJcblx0cGFkZGluZzowcHg7XHJcblx0dmVydGljYWwtYWxpZ246dG9wO1xyXG59XHJcblxyXG50ZC5tYWluQ29udGVudCB7XHJcbiAgICBAZXh0ZW5kIC5ob21lO1xyXG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgcGFkZGluZzowcHg7XHJcbiAgICBtYXJnaW46MHB4O1xyXG59XHJcblxyXG4uZm9vdGVyIHtcclxuICAgIEBleHRlbmQgLmhvbWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlO1xyXG4gICAgYm9yZGVyOnNvbGlkICRsZWZ0TWVudUJvcmRlckNvbG9yO1xyXG4gICAgYm9yZGVyLXdpZHRoOjFweCAxcHggMXB4IDBweDtcclxufVxyXG5cclxuLnBhcmVudC1kaXZ7XHJcbiAgICAvKiBrZWVwIHRoZSBRdWVyeSBzZWN0aW9uIGFuZCB0aGUgRGlzcGxheSBzZWN0aW9uIHNpZGUgYnkgc2lkZS4gICovXHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLy8gQEZJWE1FIC0gVGhlc2UgY29sb3JzIG5lZWQgdmFyaWFibGVzXHJcbi5saW5rLWNsaWNrZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG5cclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6ICNhOTAxMDE7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiB1bnZpc2l0ZWQgbGluayAqL1xyXG5hOmxpbmt7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4vKiB2aXNpdGVkIGxpbmsgKi9cclxuYTp2aXNpdGVke1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLyogbW91c2Ugb3ZlciBsaW5rICovXHJcbmE6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiAjYTkwMTAxO1xyXG59XHJcblxyXG4vKiBzZWxlY3RlZCBsaW5rICovXHJcbmE6YWN0aXZle1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLmhpZGV7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udW5zZWxlY3RhYmxle1xyXG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5oYW5kIHtcclxuICAgIGN1cnNvcjpwb2ludGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jbGlja2Vye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuLnNlYXJjaC1yZXN1bHRzLXRhYmxle1xyXG4gICAgZm9udC1zaXplOiAkbWFpbkZvbnRTaXplO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IHNvbGlkICNjY2MgMXB4O1xyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdHMtdHJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAjY2NjIDFweDtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHRzLXRoe1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgLy8gIGJvcmRlcjogc29saWQgI2RmZGZkZiAycHg7XHJcbiAgICBib3JkZXI6IHNvbGlkICNjY2MgMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNhbmFuby1ibHVlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0cy10ZHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIC8vIGJvcmRlcjogc29saWQgI2RmZGZkZiAycHg7XHJcbiAgICBib3JkZXItbGVmdDogc29saWQgI2NjYyAxcHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkICNjY2MgMXB4O1xyXG59XHJcblxyXG4ucm93T2Rke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9kZFJvd0NvbG9yO1xyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdHMtLXRyLW9kZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmltZyB7XHJcblx0Ym9yZGVyLXdpZHRoOjBweDtcclxuXHRtYXJnaW46MHB4O1xyXG5cdHBhZGRpbmc6MHB4O1xyXG5cclxufVxyXG5cclxuLnNwYWNlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6JGxlZnRNZW51V2lkdGg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLnNwYWNlci5jZW50ZXIge1xyXG4gICAgY29sb3I6JGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU7XHJcbn1cclxuXHJcblxyXG4uZm9vdGVyIHtcclxuXHRwYWRkaW5nOjBweCAwcHggMHB4IDE2MHB4O1xyXG5cdHZlcnRpY2FsLWFsaWduOm1pZGRsZSAhaW1wb3J0YW50O1xyXG5cdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6JGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU7XHJcbiAgICBib3JkZXI6c29saWQgJGxlZnRNZW51Qm9yZGVyQ29sb3I7XHJcbiAgICBib3JkZXItd2lkdGg6MXB4IDFweCAxcHggMHB4O1xyXG4gICAgZm9udC1zaXplOiRtYWluRm9udFNpemU7XHJcbn07XHJcblxyXG5cclxuLmZvb3Rlci53aGl0ZXtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcblx0Ym9yZGVyOjBweDtcclxuXHRwYWRkaW5nOjEwcHggMHB4IDBweCAwcHg7XHJcblx0Zm9udC1zaXplOjkuNXB4O1xyXG4gICAgY29sb3I6IzMzMztcclxufTtcclxuXHJcbi5mb290ZXIud2hpdGUgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZSAhaW1wb3J0YW50O1xyXG59O1xyXG5cclxuLmZvb3Rlci53aGl0ZSBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiMzMzM7XHJcbn1cclxuXHJcbi5mb290ZXIud2hpdGUucmVsZWFzZSB7XHJcbiAgICBmb250LXNpemU6MTJweCAhaW1wb3J0YW50O1xyXG5cdGZvbnQtd2VpZ2h0Om5vcm1hbCAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiM0QTQ5QTg7XHJcbn1cclxuXHJcbi5mb290ZXIud2hpdGUgLmRpdmlkZXIge1xyXG5cdHBhZGRpbmc6MHB4IDEwcHggMHB4IDEwcHg7XHJcbn07XHJcblxyXG4uZm9vdGVyIHVsIHtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBwYWRkaW5nOjBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxuICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxufTtcclxuXHJcbi5mb290ZXIgdWwgbGkuZm9vdGVyLWl0ZW0ge1xyXG4gICAgcGFkZGluZzowcHg7XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcblxyXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIC5uYXYtbGluay5uYXYtbWVudS10b3AtaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlO1xyXG4gICAgY29sb3I6JG5hdkJ1dHRvbkNvbG9yO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAkbGVmdE1lbnVCb3JkZXJDb2xvcjtcclxuICAgIGJvcmRlci13aWR0aDowcHggMXB4IDBweCAwcHg7XHJcbiAgICBwYWRkaW5nOjRweCAxNXB4IDRweCAxNXB4O1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuXHR0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcclxuXHRvdXRsaW5lOjA7XHJcbn1cclxuXHJcbi5mb290ZXIgdWwgbGkuZm9vdGVyLWl0ZW0gLm5hdi1saW5rLm5hdi1tZW51LXRvcC1pdGVtLmxlZnR7XHJcbiAgICBib3JkZXI6IHNvbGlkICRsZWZ0TWVudUJvcmRlckNvbG9yO1xyXG4gICAgYm9yZGVyLXdpZHRoOjBweCAxcHggMHB4IDFweDtcclxufVxyXG5cclxuLmZvb3RlciB1bCBsaS5mb290ZXItaXRlbSAubmF2LWxpbmsubmF2LW1lbnUtdG9wLWl0ZW06aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRuYXZCdXR0b25Db2xvcjtcclxuICAgIGNvbG9yOiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlO1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxufVxyXG5cclxuLnJvd09kZCB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjokb2RkUm93Q29sb3I7XHJcbn1cclxuXHJcbnRhYmxlLmRhdGFUYWJsZXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG5cclxufVxyXG5cclxudGFibGUuZGF0YVRhYmxlIHRoe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzNiOTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOjNweCAzcHggM3B4IDVweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG50YWJsZS5kYXRhVGFibGUgdGR7XHJcblx0cGFkZGluZzo1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XHJcblx0d2lkdGg6MjUwcHg7XHJcbn1cclxuXHJcbnRhYmxlLmRhdGFUYWJsZSB0ZC5hY3Rpb25zICB7XHJcblx0d2lkdGg6MTEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxudGFibGUuZGF0YVRhYmxlIHRkLmFjdGlvbnMgZGl2IHtcclxuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHRtYXJnaW46MHB4IDRweCAwcHggMHB4O1xyXG59XHJcblxyXG4uYWN0aW9ucyBkaXYge1xyXG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdG1hcmdpbjowcHggNHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5teUZpbHRlcnMgbGFiZWwge1xyXG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG59XHJcbiIsImh0bWwge1xuICBmb250LWZhbWlseTogYXJpYWwsIGhlbHZldGljYSwgdmVyZGFuYSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBoZWx2ZXRpY2EsIHZlcmRhbmEsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlciB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbnRkLmxlZnRNZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyMDU1YTtcbiAgd2lkdGg6IDE2MHB4O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG50ZC5tYWluQ29udGVudCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIwNTVhO1xuICBib3JkZXI6IHNvbGlkICM4OEJDRTI7XG4gIGJvcmRlci13aWR0aDogMXB4IDFweCAxcHggMHB4O1xufVxuXG4ucGFyZW50LWRpdiB7XG4gIC8qIGtlZXAgdGhlIFF1ZXJ5IHNlY3Rpb24gYW5kIHRoZSBEaXNwbGF5IHNlY3Rpb24gc2lkZSBieSBzaWRlLiAgKi9cbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxpbmstY2xpY2tlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjMzMzO1xufVxuLmxpbmstY2xpY2tlcjpob3ZlciB7XG4gIGNvbG9yOiAjYTkwMTAxO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIHVudmlzaXRlZCBsaW5rICovXG5hOmxpbmsge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogIzMzMztcbn1cblxuLyogdmlzaXRlZCBsaW5rICovXG5hOnZpc2l0ZWQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogIzMzMztcbn1cblxuLyogbW91c2Ugb3ZlciBsaW5rICovXG5hOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6ICNhOTAxMDE7XG59XG5cbi8qIHNlbGVjdGVkIGxpbmsgKi9cbmE6YWN0aXZlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnVuc2VsZWN0YWJsZSB7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaGFuZCB7XG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG4uY2xpY2tlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlYXJjaC1yZXN1bHRzLXRhYmxlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBzb2xpZCAjY2NjIDFweDtcbn1cblxuLnNlYXJjaC1yZXN1bHRzLXRyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiBzb2xpZCAjY2NjIDFweDtcbn1cblxuLnNlYXJjaC1yZXN1bHRzLXRoIHtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXI6IHNvbGlkICNjY2MgMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3M2I5O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNlYXJjaC1yZXN1bHRzLXRkIHtcbiAgcGFkZGluZzogNnB4O1xuICBib3JkZXItbGVmdDogc29saWQgI2NjYyAxcHg7XG4gIGJvcmRlci1yaWdodDogc29saWQgI2NjYyAxcHg7XG59XG5cbi5yb3dPZGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZGVkO1xufVxuXG4uc2VhcmNoLXJlc3VsdHMtLXRyLW9kZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbmltZyB7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uc3BhY2VyIHtcbiAgcGFkZGluZy1sZWZ0OiAxNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3BhY2VyLmNlbnRlciB7XG4gIGNvbG9yOiAjMDIwNTVhO1xufVxuXG4uZm9vdGVyIHtcbiAgcGFkZGluZzogMHB4IDBweCAwcHggMTYwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIwNTVhO1xuICBib3JkZXI6IHNvbGlkICM4OEJDRTI7XG4gIGJvcmRlci13aWR0aDogMXB4IDFweCAxcHggMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5mb290ZXIud2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDBweDtcbiAgcGFkZGluZzogMTBweCAwcHggMHB4IDBweDtcbiAgZm9udC1zaXplOiA5LjVweDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5mb290ZXIud2hpdGUgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZm9vdGVyLndoaXRlIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzMzMztcbn1cblxuLmZvb3Rlci53aGl0ZS5yZWxlYXNlIHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgY29sb3I6ICM0QTQ5QTg7XG59XG5cbi5mb290ZXIud2hpdGUgLmRpdmlkZXIge1xuICBwYWRkaW5nOiAwcHggMTBweCAwcHggMTBweDtcbn1cblxuLmZvb3RlciB1bCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5mb290ZXIgdWwgbGkuZm9vdGVyLWl0ZW0ge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5mb290ZXIgdWwgbGkuZm9vdGVyLWl0ZW0gLm5hdi1saW5rLm5hdi1tZW51LXRvcC1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyMDU1YTtcbiAgY29sb3I6ICM4MUZGRkU7XG4gIGJvcmRlcjogc29saWQgIzg4QkNFMjtcbiAgYm9yZGVyLXdpZHRoOiAwcHggMXB4IDBweCAwcHg7XG4gIHBhZGRpbmc6IDRweCAxNXB4IDRweCAxNXB4O1xuICBtYXJnaW46IDBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG91dGxpbmU6IDA7XG59XG5cbi5mb290ZXIgdWwgbGkuZm9vdGVyLWl0ZW0gLm5hdi1saW5rLm5hdi1tZW51LXRvcC1pdGVtLmxlZnQge1xuICBib3JkZXI6IHNvbGlkICM4OEJDRTI7XG4gIGJvcmRlci13aWR0aDogMHB4IDFweCAwcHggMXB4O1xufVxuXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIC5uYXYtbGluay5uYXYtbWVudS10b3AtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MUZGRkU7XG4gIGNvbG9yOiAjMDIwNTVhO1xuICBtYXJnaW46IDBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLnJvd09kZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVkZWQ7XG59XG5cbnRhYmxlLmRhdGFUYWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG50YWJsZS5kYXRhVGFibGUgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3M2I5O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDNweCAzcHggM3B4IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbnRhYmxlLmRhdGFUYWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG50YWJsZS5kYXRhVGFibGUgdGQuYWN0aW9ucyB7XG4gIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xufVxuXG50YWJsZS5kYXRhVGFibGUgdGQuYWN0aW9ucyBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMHB4IDRweCAwcHggMHB4O1xufVxuXG4uYWN0aW9ucyBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMHB4IDRweCAwcHggMHB4O1xufVxuXG4ubXlGaWx0ZXJzIGxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLm91dGVyLWlucHV0LWZyYW1lIHtcbiAgYm9yZGVyOiBzb2xpZCAjZDRkNGQ0IDJweDtcbn1cblxuLm1haW5TZWN0aW9uIHtcbiAgbWFyZ2luOiAxMHB4IDBweCA1cHggN3B4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWluLXdpZHRoOiAxMTUwcHggIWltcG9ydGFudDtcbn1cblxuLm1haW5Cb3JkZXIge1xuICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBtYXJnaW46IDBweCAwcHggMHB4IDJweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYWluQm9yZGVyLmxvYWRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1ZDdlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5kYXRhTWFpbiB7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogOTAlO1xufVxuXG4uZGF0YU1haW4gdGQubGFiZWwge1xuICB3aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uZGF0YU1haW4gdGQge1xuICBwYWRkaW5nOiAxMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uZGF0YU1haW4gdGQuYnV0dG9ucyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubGlua3MtcGFuZWwge1xuICB3aWR0aDogNTAwcHg7XG59XG5cbi5saW5rcy1wYW5lbC5jYXJkLm1sLTEubXQtMiB7XG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLmNyZWF0ZS1zZWFyY2gtYnV0dG9uLWdyb3VwIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uY3JlYXRlLWRlbGV0ZS1idXR0b24tZ3JvdXAge1xuICBmbG9hdDogbGVmdDtcbn1cblxubGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaEZvcm0ge1xuICBtYXJnaW46IDVweDtcbn1cblxuLnNlYXJjaEZvcm0gdGQge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMHB4O1xufVxuXG4uc2VhcmNoRm9ybSB0ZC5sYWJlbCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLnNlYXJjaEZvcm0gc2VsZWN0Lm11bHRpcGxlIHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4uc2VhcmNoRm9ybSBzZWxlY3Qge1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLnNlYXJjaEZvcm0gc3Bhbi5sYWJlbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5zdWJtaXQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnN1Ym1pdCB0ZDpsYXN0LWNoaWxkIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5idXR0b25zIHtcbiAgbWFyZ2luOiAxMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmJ1dHRvbnMgZGl2IHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogIzRBNDlBODtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xuICBtYXJnaW46IDVweDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluU2VjdGlvbiBhIHtcbiAgY29sb3I6ICMwMGYgIWltcG9ydGFudDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcbn1cblxuLm1haW5TZWN0aW9uIHRkIHtcbiAgcGFkZGluZy1ib3R0b206IDEzcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubWFpblNlY3Rpb24gLmJsdWVIZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3M2I5O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5tYWluU2VjdGlvbiAuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTUxODtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5tYWluU2VjdGlvbiAuaGVhZGVyIC5idG4ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLm1haW5TZWN0aW9uIC5lZGl0QnV0dG9uIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbi5maWxlcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiB0ZCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllcyB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXMgdGgge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTUwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiB0ZC5sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMjAwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllcyB0ZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxNTBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIC5wcm9wZXJ0aWVzLmZpbGVzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmV4cGVyaW1lbnRDb25maWd1cmF0aW9ucyB0ZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxudWwge1xuICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG59XG5cbi5kYXRhQW5kQ29uZGl0aW9ucyB0ZCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uZGF0YUFuZENvbmRpdGlvbnMgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3M2I5O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4ucHJvcGVydGllcyB0ZCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4ucHJvcGVydGllcyB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDczYjk7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5maWxlcyB7XG4gIG1pbi13aWR0aDogNjUwcHg7XG59XG5cbi5maWxlcyB0ZCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLmZpbGVzIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzNiOTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxubGFiZWwucmlnaHQge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cblxuLm1haW5Cb3JkZXIge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ubWFpbkJvcmRlci5sYXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5uYXYtaXRlbSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4ubmF2Lm5hdi10YWJzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogLTZweDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMTVweCAhaW1wb3J0YW50O1xufVxuXG4ubWFpblNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbmEubmF2LWxpbmsge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmEubmF2LWxpbmsuYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDAwICMwMDAgIzAwNTUxOCAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTUxOCAhaW1wb3J0YW50O1xufSIsIkBpbXBvcnQgJy4uL2NhbmFub2xhYi1jbGllbnQuY29tcG9uZW50LnNjc3MnO1xyXG5cclxuLm91dGVyLWlucHV0LWZyYW1le1xyXG4gICAgYm9yZGVyOiBzb2xpZCAjZDRkNGQ0IDJweDtcclxufVxyXG4ubWFpblNlY3Rpb24ge1xyXG4gICAgbWFyZ2luOjEwcHggMHB4IDVweCA3cHg7XHJcbiAgICBwYWRkaW5nOjBweDtcclxuICAgIGZvbnQtc2l6ZTokbWFpbkZvbnRTaXplO1xyXG4gICAgbWluLXdpZHRoOjExNTBweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4ubWFpbkJvcmRlciB7XHJcbiAgICBwYWRkaW5nOjE1cHggMTVweCAxNXB4IDE1cHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XHJcbiAgICBtYXJnaW46MHB4IDBweCAwcHggMnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG59XHJcblxyXG4ubWFpbkJvcmRlci5sb2FkaW5nIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiRtZW51SGVhZGluZ0JhY2tncm91bmRDb2xvciAhaW1wb3J0YW50O1xyXG5cdGNvbG9yOiNmZmY7XHJcblx0cGFkZGluZzoxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOjE1cHg7XHJcbn1cclxuXHJcbi5kYXRhTWFpbiAge1xyXG4gICAgbWFyZ2luOjVweDtcclxuICAgIHdpZHRoOjkwJTtcclxufVxyXG5cclxuLmRhdGFNYWluIHRkLmxhYmVsIHtcclxuICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxufVxyXG4uZGF0YU1haW4gdGQge1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG59XHJcblxyXG4uZGF0YU1haW4gdGQuYnV0dG9ucyB7XHJcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG59XHJcblxyXG5cclxuLmxpbmtzLXBhbmVse1xyXG4gICAgd2lkdGg6IDUwMHB4OyAgLy8gQEZJWE1FIC0gbWFrZSBhIGNvbnN0XHJcbn1cclxuXHJcbi5saW5rcy1wYW5lbC5jYXJkLm1sLTEubXQtMiB7XHJcblx0bWFyZ2luLWxlZnQ6MHB4ICFpbXBvcnRhbnRcclxufVxyXG5cclxuLmNyZWF0ZS1zZWFyY2gtYnV0dG9uLWdyb3Vwe1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5jcmVhdGUtZGVsZXRlLWJ1dHRvbi1ncm91cHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VhcmNoRm9ybSB7XHJcbiAgICBtYXJnaW46NXB4O1xyXG59XHJcblxyXG4uc2VhcmNoRm9ybSB0ZHtcclxuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgIHBhZGRpbmc6NXB4IDEwcHggNXB4IDBweDtcclxufVxyXG5cclxuLnNlYXJjaEZvcm0gdGQubGFiZWx7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XHJcbiAgICB3aWR0aDoxNTBweDtcclxufVxyXG5cclxuLnNlYXJjaEZvcm0gc2VsZWN0Lm11bHRpcGxlIHtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG59XHJcblxyXG4uc2VhcmNoRm9ybSBzZWxlY3Qge1xyXG4gICAgbWFyZ2luLXJpZ2h0OjRweDtcclxufVxyXG5cclxuLnNlYXJjaEZvcm0gc3Bhbi5sYWJlbCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbn1cclxuXHJcbi5zdWJtaXQge1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLnN1Ym1pdCB0ZDpsYXN0LWNoaWxkIHtcclxuICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICAgIG1hcmdpbjoxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjpyaWdodDtcclxufVxyXG5cclxuLmJ1dHRvbnMgZGl2IHtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIGNvbG9yOiM0QTQ5QTg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLmVycm9yIHtcclxuICAgIGNvbG9yOnJlZDtcclxuICAgIG1hcmdpbjo1cHg7XHJcbiAgICBmb250LXNpemU6MTRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFpblNlY3Rpb24gYSB7XHJcbiAgICBjb2xvcjojMDBmICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFpblNlY3Rpb24gdGQge1xyXG4gICAgcGFkZGluZy1ib3R0b206MTNweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiRtYWluRm9udFNpemU7XHJcblxyXG59XHJcbi5tYWluU2VjdGlvbiAuYmx1ZUhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IzAwNzNiOTtcclxuICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4ubWFpblNlY3Rpb24gLmhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDU1MTg7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG59XHJcblxyXG4gICAgLm1haW5TZWN0aW9uIC5oZWFkZXIgLmJ0biB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTBweDtcclxuICAgIH1cclxuXHJcbi5tYWluU2VjdGlvbiAuZWRpdEJ1dHRvbntcclxuICAgIHBhZGRpbmctdG9wOjVweDtcclxuICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbn1cclxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluLmZpbGVze1xyXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG59XHJcbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiB0ZHtcclxuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxufVxyXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXN7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXMgdGh7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICB3aWR0aDoxNTBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcclxufVxyXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gdGQubGFiZWx7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgd2lkdGg6MjAwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbn1cclxuXHJcbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllcyB0ZHtcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgcGFkZGluZy1yaWdodDoyMHB4O1xyXG59XHJcblxyXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXMuZmlsZXN7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTo1cHg7XHJcbn1cclxuXHJcbi5leHBlcmltZW50Q29uZmlndXJhdGlvbnMgdGQge1xyXG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xyXG4gICAgd2lkdGg6MzAwcHg7XHJcbn1cclxuIHVsIHtcclxuICAgcGFkZGluZy1sZWZ0OjEzcHg7XHJcbn1cclxuXHJcblxyXG4uZGF0YUFuZENvbmRpdGlvbnMgdGR7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcclxuICAgIHdpZHRoOjIwMHB4O1xyXG59XHJcblxyXG4uZGF0YUFuZENvbmRpdGlvbnMgdGh7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDczYjk7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbiAgICBib3JkZXI6MXB4ICBzb2xpZCAjY2NjO1xyXG5cclxufVxyXG5cclxuLnByb3BlcnRpZXMgdGR7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcclxuICAgIHdpZHRoOjIwMHB4O1xyXG59XHJcblxyXG4ucHJvcGVydGllcyB0aHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwNzNiOTtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgIGJvcmRlcjoxcHggIHNvbGlkICNjY2M7XHJcblxyXG59XHJcblxyXG4uZmlsZXMge1xyXG4gICAgbWluLXdpZHRoOjY1MHB4O1xyXG59XHJcblxyXG4uZmlsZXMgdGR7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcclxufVxyXG5cclxuLmZpbGVzIHRoe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA3M2I5O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgYm9yZGVyOjFweCAgc29saWQgI2NjYztcclxuXHJcbn1cclxuXHJcbmxhYmVsLnJpZ2h0IHtcclxuICAgIHBhZGRpbmctbGVmdDo1cHg7XHJcbn1cclxuXHJcbiJdfQ== */"] });
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