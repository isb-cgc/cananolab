(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cananolab-client-main-display-samples-characterization-characterization-module"],{

/***/ "RoXP":
/*!***********************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/characterization/characterization-routing.module.ts ***!
  \***********************************************************************************************************/
/*! exports provided: CharacterizationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterizationRoutingModule", function() { return CharacterizationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _characterization_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./characterization.component */ "S3/A");





const routes = [{ path: '', component: _characterization_component__WEBPACK_IMPORTED_MODULE_2__["CharacterizationComponent"] }];
class CharacterizationRoutingModule {
}
CharacterizationRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CharacterizationRoutingModule });
CharacterizationRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CharacterizationRoutingModule_Factory(t) { return new (t || CharacterizationRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CharacterizationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharacterizationRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "S3/A":
/*!******************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/characterization/characterization.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: CharacterizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterizationComponent", function() { return CharacterizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _assets_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../assets/properties */ "DzTi");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constants */ "l207");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_cananolab_client_status_display_status_display_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/cananolab-client/status-display/status-display.service */ "X3t+");
/* harmony import */ var _common_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/services/api.service */ "WHDV");
/* harmony import */ var _common_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/services/navigation.service */ "oLIu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/services/util.service */ "WHaB");
/* harmony import */ var src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/cananolab-client/main-display/main-display-heading/main-display-heading.component */ "AYD1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");












function CharacterizationComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CharacterizationComponent_li_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const type_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.showSection(type_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](type_r2);
} }
function CharacterizationComponent_ng_container_6_div_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CharacterizationComponent_ng_container_6_div_1_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const a_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.addCharacterization(a_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const d_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const a_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.editCharacterization(d_r16.value.charId, a_r5, d_r16.value.charClassName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_3_table_1_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const header_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", header_r34, " ");
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_3_table_1_tr_3_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r38);
} }
const _c0 = function (a0) { return { "rowOdd": a0 }; };
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_3_table_1_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_3_table_1_tr_3_td_1_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r35 = ctx.$implicit;
    const odd_r36 = ctx.odd;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, odd_r36));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r35);
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_3_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_3_table_1_th_2_Template, 2, 1, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_3_table_1_tr_3_Template, 2, 4, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const experiment_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", experiment_r31[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", experiment_r31[0]);
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_3_table_1_Template, 4, 2, "table", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r26.getExperiments(e_r24.value));
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_3_ng_container_2_tr_1_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", title_r50, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](title_r50);
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_3_ng_container_2_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_3_ng_container_2_tr_1_th_1_Template, 3, 2, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", entry_r45.value);
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_3_ng_container_2_tr_2_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", title_r53, " ");
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_3_ng_container_2_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_3_ng_container_2_tr_2_td_1_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const even_r46 = ctx_r54.even;
    const entry_r45 = ctx_r54.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, even_r46));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", entry_r45.value);
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_3_ng_container_2_tr_1_Template, 2, 1, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_3_ng_container_2_tr_2_Template, 2, 4, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const entry_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r45.name == "colTitles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r45.name == "colValues");
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_3_ng_container_2_Template, 3, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", f_r41["Data and Conditions"]);
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_4_tr_10_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r58.serverUrl + "/rest/sample/download?fileId=" + file_r57.fileId, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r58.serverUrl + "/rest/sample/download?fileId=" + file_r57.fileId, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_4_tr_10_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r59.serverUrl + "/rest/sample/download?fileId=" + file_r57.fileId, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", file_r57["title"], " ");
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_4_tr_10_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", file_r57["uri"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", file_r57["uri"], " ");
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_4_tr_10_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const keyword_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", keyword_r65, " ");
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_4_tr_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_4_tr_10_a_2_Template, 2, 2, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_4_tr_10_a_3_Template, 2, 2, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_4_tr_10_a_4_Template, 2, 2, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_4_tr_10_li_7_Template, 2, 1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r57 = ctx.$implicit;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", file_r57["imageTitle"] !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", file_r57["title"] !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", file_r57["title"] == undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r56.splitKeywords(file_r57["keywordsString"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](file_r57["description"]);
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Files ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Keywords ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_4_tr_10_Template, 10, 5, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const f_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", f_r41["Files"]);
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Conditions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_3_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_4_Template, 11, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const f_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r41["Data and Conditions"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r41["Files"]);
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_Template, 6, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", e_r24.value.value);
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_5_tr_2_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", title_r73, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](title_r73);
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_5_tr_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_5_tr_2_ng_container_1_th_1_Template, 3, 2, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const entry_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", entry_r69.value);
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_5_tr_2_ng_container_2_td_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const title_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", title_r76, " ");
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_5_tr_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_5_tr_2_ng_container_2_td_1_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const entry_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", entry_r69.value);
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_5_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_5_tr_2_ng_container_1_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_5_tr_2_ng_container_2_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r69.name == "colTitles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", entry_r69.name == "colValues");
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_5_tr_2_Template, 3, 2, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", e_r24.value.value);
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", e_r24.value.value, " ");
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_3_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_5_Template, 3, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_6_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const e_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", e_r24.value.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", e_r24.value.name == "Experiment Configurations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", e_r24.value.name == "Characterization Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", e_r24.value.name == "Properties");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", e_r24.value.name != "Characterization Results" && e_r24.value.name != "Experiment Configurations" && e_r24.value.name != "Properties");
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_Template, 7, 5, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const e_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", e_r24.value.value.length);
} }
const _c1 = function (a0) { return { "last": a0 }; };
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_div_1_Template, 3, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r16 = ctx.$implicit;
    const last_r17 = ctx.last;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, last_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r15.editUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, d_r16.value["displayableItems"]));
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_Template, 5, 7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const c_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](c_r14.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, c_r14.value));
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_Template, 6, 4, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const b_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, b_r12.charsByAssayType));
} }
function CharacterizationComponent_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CharacterizationComponent_ng_container_6_div_1_button_3_Template, 2, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CharacterizationComponent_ng_container_6_div_1_ng_container_4_Template, 3, 3, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", a_r5, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.editUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.characterizationData[a_r5]);
} }
function CharacterizationComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CharacterizationComponent_ng_container_6_div_1_Template, 5, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const a_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.sectionToShow == "all" || ctx_r1.sectionToShow == a_r5);
} }
const _c2 = function (a0) { return [a0, "CHARACTERIZATION"]; };
class CharacterizationComponent {
    constructor(statusDisplayService, apiService, navigationService, router, route, utilService) {
        this.statusDisplayService = statusDisplayService;
        this.apiService = apiService;
        this.navigationService = navigationService;
        this.router = router;
        this.route = route;
        this.utilService = utilService;
        this.sampleId = _assets_properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].CURRENT_SAMPLE_ID;
        this.helpUrl = _constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].HELP_URL_SAMPLE_CHARACTERIZATION;
        this.sectionToShow = 'all';
        this.serverUrl = _assets_properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].API_SERVER_URL;
        this.characterizationData = {};
        this.types = [];
        this.editUrl = false;
    }
    ngOnInit() {
        this.editUrl = this.statusDisplayService.isEditUrl();
        this.navigationService.setCurrentSelectedItem(2);
        this.route.params.subscribe((params) => {
            setTimeout(() => {
                _assets_properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].SAMPLE_TOOLS = true;
            }, 200);
            this.sampleId = params['sampleId'];
            this.apiService.getSampleName(this.sampleId).subscribe(data => this.toolHeadingNameManage = 'Sample ' + data['sampleName'] + ' Characterization');
            if (this.sampleId <= 0) {
                this.sampleId = _assets_properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].CURRENT_SAMPLE_ID;
            }
            else {
                _assets_properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].CURRENT_SAMPLE_ID = this.sampleId;
            }
            ;
            this.apiService.doGet(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].QUERY_CHARACTERIZATION_SETUP_EDIT, 'sampleId=' + this.sampleId).subscribe(data => {
                for (var x = 0; x < data.length; x++) {
                    this.types.push(data[x]['type']);
                    this.characterizationData[data[x]['type']] = [];
                }
                console.log(this.types);
                console.log(this.characterizationData);
                this.getCharacterizationData().subscribe(data => {
                    this.tempData = data;
                    this.separateDataSets(data);
                }, err => {
                    console.error('Error ', err);
                });
            }, errors => {
                this.errors = errors;
            });
        });
    }
    // returns all data for this page //
    getCharacterizationData() {
        let results;
        try {
            results = this.apiService.doGet(_constants__WEBPACK_IMPORTED_MODULE_2__["Consts"].QUERY_CHARACTERIZATION_VIEW, 'sampleId=' + this.sampleId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(_assets_properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].HTTP_TIMEOUT));
        }
        catch (e) {
            console.error('doGet Exception: ' + e);
        }
        return results;
    }
    getExperiments(data) {
        let value = data.value;
        let rows = [];
        let rowLength = 0;
        let headers = [];
        value.forEach((data, index) => {
            let key = Object.keys(data)[0];
            headers.push(key);
            rowLength = data[key].length;
        });
        for (var x = 0; x < rowLength; x++) {
            let currentRow = [];
            value.forEach((data, index) => {
                let key = Object.keys(data)[0];
                currentRow.push(data[key][x]);
            });
            rows.push(currentRow);
        }
        return [rows, headers];
    }
    // separates out all data into subsets of physico, in vivo, in vitro and other characterization types //
    separateDataSets(data) {
        console.log(data);
        // let types =['in vitro characterization','in vivo characterization','physico-chemical characterization']
        data.forEach(item => {
            item.charName = Object.keys(item.charsByAssayType)[0];
            this.characterizationData[item.type].push(item);
        });
    }
    // splits keywords for experiments and configurations //
    splitKeywords(keywords) {
        if (keywords) {
            return keywords.split('\n');
        }
        else {
            return '';
        }
    }
    // brings up new characterization form //
    addCharacterization(type) {
        this.router.navigate(['home/samples/characterization/edit-characterization', _assets_properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].CURRENT_SAMPLE_ID, type]); // @FIXME  Don't hard code these
    }
    // brings up existing characterization form //
    editCharacterization(charId, type, charClassName) {
        this.router.navigate(['home/samples/characterization/edit-characterization', _assets_properties__WEBPACK_IMPORTED_MODULE_1__["Properties"].CURRENT_SAMPLE_ID, charId, charClassName, type]); // @FIXME  Don't hard code these
    }
    showSection(value) {
        this.sectionToShow = value;
    }
}
CharacterizationComponent.ɵfac = function CharacterizationComponent_Factory(t) { return new (t || CharacterizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_cananolab_client_status_display_status_display_service__WEBPACK_IMPORTED_MODULE_4__["StatusDisplayService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"])); };
CharacterizationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CharacterizationComponent, selectors: [["canano-characterization"]], decls: 7, vars: 8, consts: [[3, "helpUrl", "toolHeadingName", "export", "print"], [1, "nav", "nav-tabs"], [1, "nav-item"], ["id", "all-tab", "data-toggle", "tab", 1, "nav-link", "active", 3, "click"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["id", "all-tab", "data-toggle", "tab", 1, "nav-link", 3, "click"], ["class", "mainSection", 4, "ngIf"], [1, "mainSection"], [1, "header"], ["class", "btn btn-primary btn-sm", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "blueHeader"], ["class", "mainBorder", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "mainBorder", 3, "ngClass"], ["class", "editButton", 4, "ngIf"], [1, "dataMain"], [1, "editButton"], [4, "ngIf"], [1, "label"], ["class", "dataTable", 4, "ngIf"], [1, "dataTable"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["for", "dataConditions"], ["id", "dataConditions", 1, "dataTable"], [3, "ngClass", 4, "ngIf"], [3, "innerHTML"], [1, "files"], [3, "href", 4, "ngIf"], ["target", "_blank", "rel", "nofollow noreferrer", 3, "href", 4, "ngIf"], [3, "href"], ["width", "150", 3, "src"], ["target", "_blank", "rel", "nofollow noreferrer", 3, "href"]], template: function CharacterizationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canano-main-display-heading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CharacterizationComponent_Template_a_click_3_listener() { return ctx.showSection("all"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CharacterizationComponent_li_5_Template, 3, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CharacterizationComponent_ng_container_6_Template, 2, 1, "ng-container", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("helpUrl", ctx.helpUrl)("toolHeadingName", ctx.toolHeadingNameManage)("export", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, ctx.sampleId))("print", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.types);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.types);
    } }, directives: [src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_9__["MainDisplayHeadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["KeyValuePipe"]], styles: ["html[_ngcontent-%COMP%] {\n  font-family: arial, helvetica, verdana, sans-serif !important;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: arial, helvetica, verdana, sans-serif !important;\n}\n\n.header[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\ntd.leftMenu[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  width: 160px;\n  margin: 0px;\n  padding: 0px;\n  vertical-align: top;\n}\n\ntd.mainContent[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding: 0px;\n  margin: 0px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  border: solid #88BCE2;\n  border-width: 1px 1px 1px 0px;\n}\n\n.parent-div[_ngcontent-%COMP%] {\n  \n  display: flex;\n  flex-direction: row;\n  background-color: #fff;\n  width: 100%;\n}\n\n.link-clicker[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n.link-clicker[_ngcontent-%COMP%]:hover {\n  color: #a90101;\n  cursor: pointer;\n}\n\n\n\na[_ngcontent-%COMP%]:link {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n\n\na[_ngcontent-%COMP%]:visited {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n\n\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #a90101;\n}\n\n\n\na[_ngcontent-%COMP%]:active {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.unselectable[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  text-transform: uppercase;\n}\n\n.hand[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.clicker[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.search-results-table[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 100%;\n  border: solid #ccc 1px;\n}\n\n.search-results-tr[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: solid #ccc 1px;\n}\n\n.search-results-th[_ngcontent-%COMP%] {\n  padding: 6px;\n  border: solid #ccc 1px;\n  background-color: #0073b9;\n  color: #fff;\n}\n\n.search-results-td[_ngcontent-%COMP%] {\n  padding: 6px;\n  border-left: solid #ccc 1px;\n  border-right: solid #ccc 1px;\n}\n\n.rowOdd[_ngcontent-%COMP%] {\n  background-color: #efeded;\n}\n\n.search-results--tr-odd[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-width: 0px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  padding-left: 160px;\n  text-align: center;\n}\n\n.spacer.center[_ngcontent-%COMP%] {\n  color: #02055a;\n}\n\n.footer[_ngcontent-%COMP%] {\n  padding: 0px 0px 0px 160px;\n  vertical-align: middle !important;\n  text-align: center;\n  background-color: #02055a;\n  border: solid #88BCE2;\n  border-width: 1px 1px 1px 0px;\n  font-size: 12px;\n}\n\n.footer.white[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 0px;\n  padding: 10px 0px 0px 0px;\n  font-size: 9.5px;\n  color: #333;\n}\n\n.footer.white[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.footer.white[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline !important;\n  color: #333;\n}\n\n.footer.white.release[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  font-weight: normal !important;\n  color: #4A49A8;\n}\n\n.footer.white[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  padding: 0px 10px 0px 10px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  vertical-align: middle;\n  list-style: none;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  display: inline-block;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  color: #81FFFE;\n  border: solid #88BCE2;\n  border-width: 0px 1px 0px 0px;\n  padding: 4px 15px 4px 15px;\n  margin: 0px;\n  vertical-align: top;\n  text-transform: uppercase;\n  font-weight: bold;\n  outline: 0;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item.left[_ngcontent-%COMP%] {\n  border: solid #88BCE2;\n  border-width: 0px 1px 0px 1px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item[_ngcontent-%COMP%]:hover {\n  background-color: #81FFFE;\n  color: #02055a;\n  margin: 0px;\n  vertical-align: top;\n}\n\n.rowOdd[_ngcontent-%COMP%] {\n  background-color: #efeded;\n}\n\ntable.dataTable[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #ccc;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  font-weight: bold;\n  padding: 3px 3px 3px 5px;\n  border: 1px solid #ccc;\n  text-transform: capitalize;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n  width: 250px;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%] {\n  width: 110px !important;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0px 4px 0px 0px;\n}\n\n.actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0px 4px 0px 0px;\n}\n\n.myFilters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.outer-input-frame[_ngcontent-%COMP%] {\n  border: solid #d4d4d4 2px;\n}\n\n.mainSection[_ngcontent-%COMP%] {\n  margin: 10px 0px 5px 7px;\n  padding: 0px;\n  font-size: 12px;\n  min-width: 1150px !important;\n}\n\n.mainBorder[_ngcontent-%COMP%] {\n  padding: 15px 15px 15px 15px;\n  border: 1px solid #ccc;\n  margin: 0px 0px 0px 2px;\n  width: 100%;\n}\n\n.mainBorder.loading[_ngcontent-%COMP%] {\n  background-color: #005d7e !important;\n  color: #fff;\n  padding: 15px !important;\n  margin-bottom: 15px;\n}\n\n.dataMain[_ngcontent-%COMP%] {\n  margin: 5px;\n  width: 90%;\n}\n\n.dataMain[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  width: 200px;\n  padding: 10px;\n  font-weight: bold;\n  vertical-align: top;\n}\n\n.dataMain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  vertical-align: top;\n}\n\n.dataMain[_ngcontent-%COMP%]   td.buttons[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.links-panel[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.links-panel.card.ml-1.mt-2[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n}\n\n.create-search-button-group[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.create-delete-button-group[_ngcontent-%COMP%] {\n  float: left;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-right: 5px !important;\n}\n\n.searchForm[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.searchForm[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding: 5px 10px 5px 0px;\n}\n\n.searchForm[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding-right: 20px;\n  width: 150px;\n}\n\n.searchForm[_ngcontent-%COMP%]   select.multiple[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.searchForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n\n.searchForm[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\n.submit[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.submit[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  margin: 10px;\n  text-align: right;\n}\n\n.buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #4A49A8;\n  text-align: center;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n  margin: 5px;\n  font-size: 14px !important;\n}\n\n.mainSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #00f !important;\n  text-decoration: underline !important;\n}\n\n.mainSection[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-bottom: 13px !important;\n  font-size: 12px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .blueHeader[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #0073b9;\n  color: #fff;\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: #005518;\n  color: #fff;\n  padding: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .editButton[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  text-align: right;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain.files[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 200px;\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties.files[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  width: 100%;\n  margin-bottom: 5px;\n}\n\n.experimentConfigurations[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  width: 300px;\n}\n\nul[_ngcontent-%COMP%] {\n  padding-left: 13px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%] {\n  min-width: 650px;\n}\n\n.files[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\nlabel.right[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\n.mainSection[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-bottom: 13px !important;\n  font-size: 12px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .blueHeader[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #0073b9;\n  color: #fff;\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: #005518;\n  color: #fff;\n  padding: 10px;\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .editButton[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  text-align: right;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain.files[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 200px;\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties.files[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  width: 100%;\n  margin-bottom: 5px;\n}\n\n.experimentConfigurations[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  width: 300px;\n}\n\nul[_ngcontent-%COMP%] {\n  padding-left: 13px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%] {\n  min-width: 650px;\n}\n\n.files[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.mainBorder[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.mainBorder.last[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.mainSection[_ngcontent-%COMP%] {\n  margin-top: 0px !important;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  margin-bottom: 0px !important;\n  padding-bottom: 0px !important;\n  text-transform: capitalize;\n}\n\n.nav.nav-tabs[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-left: -6px;\n  border-bottom: none !important;\n  padding-top: 15px !important;\n}\n\na.nav-link[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n  text-transform: capitalize !important;\n}\n\na.nav-link.active[_ngcontent-%COMP%] {\n  border-color: #000 #000 #005518 !important;\n  text-decoration: none !important;\n  color: #fff !important;\n  background-color: #005518 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL2NhbmFub2xhYi1jbGllbnQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9jaGFyYWN0ZXJpemF0aW9uLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbWFpbi1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCQTtFQUNJLDZEQUZvQjtBQ2R4Qjs7QURtQkE7RUFDSSw2REFOb0I7QUNWeEI7O0FEa0JBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNmRDs7QURvQkE7RUFFSSx5QkE3QnFCO0VBOEJyQixZQTNCWTtFQTRCZixXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDbEJEOztBRHFCQTtFQUVJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNuQko7O0FEc0JBO0VBRUkseUJBN0NxQjtFQThDckIscUJBQUE7RUFDQSw2QkFBQTtBQ3BCSjs7QUR1QkE7RUFDSSxrRUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ3BCSjs7QUR3QkE7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FDckJKOztBRHVCSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDckJSOztBRHlCQSxtQkFBQTs7QUFDQTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUN0Qko7O0FEeUJBLGlCQUFBOztBQUNBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ3RCSjs7QUR5QkEsb0JBQUE7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDdEJKOztBRHlCQSxrQkFBQTs7QUFDQTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUN0Qko7O0FEeUJBO0VBQ0ksYUFBQTtBQ3RCSjs7QUR5QkE7RUFDSSwyQkFBQTtFQUNBLHlCQUFBO0VBSUEsaUJBQUE7RUFDQSx5QkFB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dWdCUDs7QUFuZ0JJO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQXNnQlI7O0FBbmdCSTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBc2dCUjs7QUFsZ0JJO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQXFnQlI7O0FBbGdCSTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBcWdCUjs7QUFqZ0JJO0VBQ0ksZ0JBQUE7QUFvZ0JSOztBQWpnQkk7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7QUFvZ0JSOztBQWpnQkk7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQW9nQlI7O0FBaGdCSTtFQUNJLGlCQUFBO0FBbWdCUjs7QUEvZkk7RUFDSSxtQkFBQTtBQWtnQlI7O0FBL2ZJO0VBQ0ksa0JBQUE7QUFrZ0JSOztBQWhnQkk7RUFDSSwwQkFBQTtBQW1nQlI7O0FBaGdCSTtFQUNJLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtBQW1nQlI7O0FBaGdCSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7QUFtZ0JSOztBQWpnQkk7RUFDSSxnQ0FBQTtFQUNBLHFDQUFBO0FBb2dCUjs7QUFsZ0JJO0VBQ0ksMENBQUE7RUFDQSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7QUFxZ0JSIiwiZmlsZSI6ImNoYXJhY3Rlcml6YXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuJGNhbmFuby1ncmVlbjogIzAwNTUxODtcbiRjYW5hbm8tYmx1ZTogIzAwNzNiOTtcbiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlOiAjMDIwNTVhO1xuJG1lbnVIZWFkaW5nQmFja2dyb3VuZENvbG9yOiAjMDA1ZDdlO1xuJGxlZnRNZW51Qm9yZGVyQ29sb3I6Izg4QkNFMjtcbiRsZWZ0TWVudVdpZHRoOiAxNjBweDtcbiRsZWZ0TWVudU1hcmdpbjogMHB4O1xuJG5hdkJ1dHRvbkNvbG9yOiM4MUZGRkU7XG4kYm9yZGVyQ29sb3I6ICRsZWZ0TWVudUJvcmRlckNvbG9yO1xuJG1haW5Gb250U2l6ZToxMnB4O1xuJGtleXdvcmRTZWFyY2hGb250U2l6ZTogMTJweDtcbiRvZGRSb3dDb2xvcjojZWZlZGVkO1xuJG1haW5EaXNwbGF5SGVhZGluZ0hlaWdodDogMjhweDtcbiRtYWluRGlzcGxheUhlYWRpbmdNYXJnaW46IDhweDtcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOmFyaWFsLGhlbHZldGljYSx2ZXJkYW5hLHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbmh0bWwge1xuICAgIGZvbnQtZmFtaWx5OiRmb250LWZhbWlseS1zYW5zLXNlcmlmO1xuXG59XG5ib2R5IHtcbiAgICBmb250LWZhbWlseTokZm9udC1mYW1pbHktc2Fucy1zZXJpZjtcbn1cbi5oZWFkZXIge1xuXHRtYXJnaW46MHB4O1xuXHRwYWRkaW5nOjBweDtcbn1cbi5ob21lIHtcbn1cblxudGQubGVmdE1lbnUge1xuICAgIEBleHRlbmQgLmhvbWU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjokY2FuYW5vLWJhY2tncm91bmQtYmx1ZTtcbiAgICB3aWR0aDokbGVmdE1lbnVXaWR0aDtcblx0bWFyZ2luOjBweDtcblx0cGFkZGluZzowcHg7XG5cdHZlcnRpY2FsLWFsaWduOnRvcDtcbn1cblxudGQubWFpbkNvbnRlbnQge1xuICAgIEBleHRlbmQgLmhvbWU7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIHBhZGRpbmc6MHB4O1xuICAgIG1hcmdpbjowcHg7XG59XG5cbi5mb290ZXIge1xuICAgIEBleHRlbmQgLmhvbWU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjokY2FuYW5vLWJhY2tncm91bmQtYmx1ZTtcbiAgICBib3JkZXI6c29saWQgJGxlZnRNZW51Qm9yZGVyQ29sb3I7XG4gICAgYm9yZGVyLXdpZHRoOjFweCAxcHggMXB4IDBweDtcbn1cblxuLnBhcmVudC1kaXZ7XG4gICAgLyoga2VlcCB0aGUgUXVlcnkgc2VjdGlvbiBhbmQgdGhlIERpc3BsYXkgc2VjdGlvbiBzaWRlIGJ5IHNpZGUuICAqL1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLy8gQEZJWE1FIC0gVGhlc2UgY29sb3JzIG5lZWQgdmFyaWFibGVzXG4ubGluay1jbGlja2Vye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogIzMzMztcblxuICAgICY6aG92ZXJ7XG4gICAgICAgIGNvbG9yOiAjYTkwMTAxO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4vKiB1bnZpc2l0ZWQgbGluayAqL1xuYTpsaW5re1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogIzMzMztcbn1cblxuLyogdmlzaXRlZCBsaW5rICovXG5hOnZpc2l0ZWR7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4vKiBtb3VzZSBvdmVyIGxpbmsgKi9cbmE6aG92ZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiAjYTkwMTAxO1xufVxuXG4vKiBzZWxlY3RlZCBsaW5rICovXG5hOmFjdGl2ZXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi5oaWRle1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi51bnNlbGVjdGFibGV7XG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5oYW5kIHtcbiAgICBjdXJzb3I6cG9pbnRlciAhaW1wb3J0YW50O1xufVxuXG4uY2xpY2tlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLnNlYXJjaC1yZXN1bHRzLXRhYmxle1xuICAgIGZvbnQtc2l6ZTogJG1haW5Gb250U2l6ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IHNvbGlkICNjY2MgMXB4O1xufVxuXG4uc2VhcmNoLXJlc3VsdHMtdHJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IHNvbGlkICNjY2MgMXB4O1xufVxuXG4uc2VhcmNoLXJlc3VsdHMtdGh7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIC8vICBib3JkZXI6IHNvbGlkICNkZmRmZGYgMnB4O1xuICAgIGJvcmRlcjogc29saWQgI2NjYyAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNhbmFuby1ibHVlO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uc2VhcmNoLXJlc3VsdHMtdGR7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIC8vIGJvcmRlcjogc29saWQgI2RmZGZkZiAycHg7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkICNjY2MgMXB4O1xuICAgIGJvcmRlci1yaWdodDogc29saWQgI2NjYyAxcHg7XG59XG5cbi5yb3dPZGR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9kZFJvd0NvbG9yO1xufVxuXG4uc2VhcmNoLXJlc3VsdHMtLXRyLW9kZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5pbWcge1xuXHRib3JkZXItd2lkdGg6MHB4O1xuXHRtYXJnaW46MHB4O1xuXHRwYWRkaW5nOjBweDtcblxufVxuXG4uc3BhY2VyIHtcbiAgICBwYWRkaW5nLWxlZnQ6JGxlZnRNZW51V2lkdGg7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbi5zcGFjZXIuY2VudGVyIHtcbiAgICBjb2xvcjokY2FuYW5vLWJhY2tncm91bmQtYmx1ZTtcbn1cblxuXG4uZm9vdGVyIHtcblx0cGFkZGluZzowcHggMHB4IDBweCAxNjBweDtcblx0dmVydGljYWwtYWxpZ246bWlkZGxlICFpbXBvcnRhbnQ7XG5cdHRleHQtYWxpZ246Y2VudGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlO1xuICAgIGJvcmRlcjpzb2xpZCAkbGVmdE1lbnVCb3JkZXJDb2xvcjtcbiAgICBib3JkZXItd2lkdGg6MXB4IDFweCAxcHggMHB4O1xuICAgIGZvbnQtc2l6ZTokbWFpbkZvbnRTaXplO1xufTtcblxuXG4uZm9vdGVyLndoaXRle1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG5cdGJvcmRlcjowcHg7XG5cdHBhZGRpbmc6MTBweCAwcHggMHB4IDBweDtcblx0Zm9udC1zaXplOjkuNXB4O1xuICAgIGNvbG9yOiMzMzM7XG59O1xuXG4uZm9vdGVyLndoaXRlIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjpub25lICFpbXBvcnRhbnQ7XG59O1xuXG4uZm9vdGVyLndoaXRlIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUgIWltcG9ydGFudDtcbiAgICBjb2xvcjojMzMzO1xufVxuXG4uZm9vdGVyLndoaXRlLnJlbGVhc2Uge1xuICAgIGZvbnQtc2l6ZToxMnB4ICFpbXBvcnRhbnQ7XG5cdGZvbnQtd2VpZ2h0Om5vcm1hbCAhaW1wb3J0YW50O1xuXHRjb2xvcjojNEE0OUE4O1xufVxuXG4uZm9vdGVyLndoaXRlIC5kaXZpZGVyIHtcblx0cGFkZGluZzowcHggMTBweCAwcHggMTBweDtcbn07XG5cbi5mb290ZXIgdWwge1xuICAgIG1hcmdpbjowcHg7XG4gICAgcGFkZGluZzowcHg7XG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xuICAgIGxpc3Qtc3R5bGU6bm9uZTtcbn07XG5cbi5mb290ZXIgdWwgbGkuZm9vdGVyLWl0ZW0ge1xuICAgIHBhZGRpbmc6MHB4O1xuICAgIG1hcmdpbjowcHg7XG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG59XG5cblxuLmZvb3RlciB1bCBsaS5mb290ZXItaXRlbSAubmF2LWxpbmsubmF2LW1lbnUtdG9wLWl0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6JGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU7XG4gICAgY29sb3I6JG5hdkJ1dHRvbkNvbG9yO1xuICAgIGJvcmRlcjogc29saWQgJGxlZnRNZW51Qm9yZGVyQ29sb3I7XG4gICAgYm9yZGVyLXdpZHRoOjBweCAxcHggMHB4IDBweDtcbiAgICBwYWRkaW5nOjRweCAxNXB4IDRweCAxNXB4O1xuICAgIG1hcmdpbjowcHg7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuXHR0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XG5cdG91dGxpbmU6MDtcbn1cblxuLmZvb3RlciB1bCBsaS5mb290ZXItaXRlbSAubmF2LWxpbmsubmF2LW1lbnUtdG9wLWl0ZW0ubGVmdHtcbiAgICBib3JkZXI6IHNvbGlkICRsZWZ0TWVudUJvcmRlckNvbG9yO1xuICAgIGJvcmRlci13aWR0aDowcHggMXB4IDBweCAxcHg7XG59XG5cbi5mb290ZXIgdWwgbGkuZm9vdGVyLWl0ZW0gLm5hdi1saW5rLm5hdi1tZW51LXRvcC1pdGVtOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6JG5hdkJ1dHRvbkNvbG9yO1xuICAgIGNvbG9yOiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlO1xuICAgIG1hcmdpbjowcHg7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xufVxuXG4ucm93T2RkIHtcblx0YmFja2dyb3VuZC1jb2xvcjokb2RkUm93Q29sb3I7XG59XG5cbnRhYmxlLmRhdGFUYWJsZXtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG5cbn1cblxudGFibGUuZGF0YVRhYmxlIHRoe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDczYjk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZzozcHggM3B4IDNweCA1cHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG50YWJsZS5kYXRhVGFibGUgdGR7XG5cdHBhZGRpbmc6NXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG5cdHdpZHRoOjI1MHB4O1xufVxuXG50YWJsZS5kYXRhVGFibGUgdGQuYWN0aW9ucyAge1xuXHR3aWR0aDoxMTBweCAhaW1wb3J0YW50O1xufVxuXG50YWJsZS5kYXRhVGFibGUgdGQuYWN0aW9ucyBkaXYge1xuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcblx0bWFyZ2luOjBweCA0cHggMHB4IDBweDtcbn1cblxuLmFjdGlvbnMgZGl2IHtcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdG1hcmdpbjowcHggNHB4IDBweCAwcHg7XG59XG5cbi5teUZpbHRlcnMgbGFiZWwge1xuICAgIG1hcmdpbi1sZWZ0OjVweDtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9tYWluLWRpc3BsYXkvbWFpbi1kaXNwbGF5LmNvbXBvbmVudC5zY3NzXCI7XG5cbiAgICAubWFpblNlY3Rpb24gdGQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbToxM3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTokbWFpbkZvbnRTaXplO1xuXG4gICAgfVxuICAgIC5tYWluU2VjdGlvbiAuYmx1ZUhlYWRlciB7XG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDczYjk7XG4gICAgICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxuXG4gICAgLm1haW5TZWN0aW9uIC5oZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDU1MTg7XG4gICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgIHBhZGRpbmc6MTBweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxuXG4gICAgICAgIC5tYWluU2VjdGlvbiAuaGVhZGVyIC5idG4ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6MTBweDtcbiAgICAgICAgfVxuXG4gICAgLm1haW5TZWN0aW9uIC5lZGl0QnV0dG9ue1xuICAgICAgICBwYWRkaW5nLXRvcDo1cHg7XG4gICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XG4gICAgfVxuICAgIC5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbi5maWxlc3tcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxMHB4O1xuICAgIH1cbiAgICAubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gdGR7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbiAgICB9XG4gICAgLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIC5wcm9wZXJ0aWVze1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG4gICAgLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIC5wcm9wZXJ0aWVzIHRoe1xuICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgICAgIHdpZHRoOjE1MHB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcbiAgICB9XG4gICAgLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIHRkLmxhYmVse1xuICAgICAgICBmb250LXdlaWdodDpib2xkO1xuICAgICAgICB3aWR0aDoyMDBweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIH1cblxuICAgIC5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllcyB0ZHtcbiAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgICAgICB3aWR0aDoxNTBweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XG4gICAgfVxuXG4gICAgLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIC5wcm9wZXJ0aWVzLmZpbGVze1xuICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206NXB4O1xuICAgIH1cblxuICAgIC5leHBlcmltZW50Q29uZmlndXJhdGlvbnMgdGQge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XG4gICAgICAgIHdpZHRoOjMwMHB4O1xuICAgIH1cbiAgICAgdWwge1xuICAgICAgIHBhZGRpbmctbGVmdDoxM3B4O1xuICAgIH1cblxuXG4gICAgLmRhdGFBbmRDb25kaXRpb25zIHRke1xuICAgICAgICBwYWRkaW5nOjVweDtcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgICAgICB3aWR0aDoyMDBweDtcbiAgICB9XG5cbiAgICAuZGF0YUFuZENvbmRpdGlvbnMgdGh7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IzAwNzNiOTtcbiAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgcGFkZGluZzo1cHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbiAgICAgICAgYm9yZGVyOjFweCAgc29saWQgI2NjYztcblxuICAgIH1cblxuICAgIC5wcm9wZXJ0aWVzIHRke1xuICAgICAgICBwYWRkaW5nOjVweDtcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgICAgICB3aWR0aDoyMDBweDtcbiAgICB9XG5cbiAgICAucHJvcGVydGllcyB0aHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMDA3M2I5O1xuICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICBwYWRkaW5nOjVweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgICAgICBib3JkZXI6MXB4ICBzb2xpZCAjY2NjO1xuXG4gICAgfVxuXG4gICAgLmZpbGVzIHtcbiAgICAgICAgbWluLXdpZHRoOjY1MHB4O1xuICAgIH1cblxuICAgIC5maWxlcyB0ZHtcbiAgICAgICAgcGFkZGluZzo1cHg7XG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICB9XG5cbiAgICAuZmlsZXMgdGh7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IzAwNzNiOTtcbiAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgcGFkZGluZzo1cHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbiAgICAgICAgYm9yZGVyOjFweCAgc29saWQgI2NjYztcblxuICAgIH1cblxuICAgIGxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICB9XG5cbiAgICAvLyBrZWVwIHRoZXNlIGluIGhlcmUgLy9cbiAgICAubWFpbkJvcmRlciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206MTVweDtcbiAgICB9XG5cbiAgICAubWFpbkJvcmRlci5sYXN0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTowcHg7XG4gICAgfVxuICAgIC5tYWluU2VjdGlvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLm5hdi1pdGVtIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTowcHggIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cblxuICAgIC5uYXYubmF2LXRhYnMge1xuICAgICAgICBmb250LXNpemU6MTJweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6LTZweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTpub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmctdG9wOjE1cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgYS5uYXYtbGluayB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBhLm5hdi1saW5rLmFjdGl2ZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwMCAjMDAwICRjYW5hbm8tZ3JlZW4gIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjokY2FuYW5vLWdyZWVuICFpbXBvcnRhbnQ7XG4gICAgfVxuIiwiQGltcG9ydCAnLi4vY2FuYW5vbGFiLWNsaWVudC5jb21wb25lbnQuc2Nzcyc7XG5cbi5vdXRlci1pbnB1dC1mcmFtZXtcbiAgICBib3JkZXI6IHNvbGlkICNkNGQ0ZDQgMnB4O1xufVxuLm1haW5TZWN0aW9uIHtcbiAgICBtYXJnaW46MTBweCAwcHggNXB4IDdweDtcbiAgICBwYWRkaW5nOjBweDtcbiAgICBmb250LXNpemU6JG1haW5Gb250U2l6ZTtcbiAgICBtaW4td2lkdGg6MTE1MHB4ICFpbXBvcnRhbnQ7XG5cbn1cbi5tYWluQm9yZGVyIHtcbiAgICBwYWRkaW5nOjE1cHggMTVweCAxNXB4IDE1cHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIG1hcmdpbjowcHggMHB4IDBweCAycHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbn1cblxuLm1haW5Cb3JkZXIubG9hZGluZyB7XG5cdGJhY2tncm91bmQtY29sb3I6JG1lbnVIZWFkaW5nQmFja2dyb3VuZENvbG9yICFpbXBvcnRhbnQ7XG5cdGNvbG9yOiNmZmY7XG5cdHBhZGRpbmc6MTVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206MTVweDtcbn1cblxuLmRhdGFNYWluICB7XG4gICAgbWFyZ2luOjVweDtcbiAgICB3aWR0aDo5MCU7XG59XG5cbi5kYXRhTWFpbiB0ZC5sYWJlbCB7XG4gICAgd2lkdGg6MjAwcHg7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xufVxuLmRhdGFNYWluIHRkIHtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xufVxuXG4uZGF0YU1haW4gdGQuYnV0dG9ucyB7XG4gICAgdGV4dC1hbGlnbjpyaWdodDtcbn1cblxuXG4ubGlua3MtcGFuZWx7XG4gICAgd2lkdGg6IDUwMHB4OyAgLy8gQEZJWE1FIC0gbWFrZSBhIGNvbnN0XG59XG5cbi5saW5rcy1wYW5lbC5jYXJkLm1sLTEubXQtMiB7XG5cdG1hcmdpbi1sZWZ0OjBweCAhaW1wb3J0YW50XG59XG5cbi5jcmVhdGUtc2VhcmNoLWJ1dHRvbi1ncm91cHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4uY3JlYXRlLWRlbGV0ZS1idXR0b24tZ3JvdXB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbmxhYmVsIHtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIG1hcmdpbi1yaWdodDo1cHggIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaEZvcm0ge1xuICAgIG1hcmdpbjo1cHg7XG59XG5cbi5zZWFyY2hGb3JtIHRke1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbiAgICBwYWRkaW5nOjVweCAxMHB4IDVweCAwcHg7XG59XG5cbi5zZWFyY2hGb3JtIHRkLmxhYmVse1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XG4gICAgd2lkdGg6MTUwcHg7XG59XG5cbi5zZWFyY2hGb3JtIHNlbGVjdC5tdWx0aXBsZSB7XG4gICAgd2lkdGg6MTUwcHg7XG59XG5cbi5zZWFyY2hGb3JtIHNlbGVjdCB7XG4gICAgbWFyZ2luLXJpZ2h0OjRweDtcbn1cblxuLnNlYXJjaEZvcm0gc3Bhbi5sYWJlbCB7XG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xufVxuXG4uc3VibWl0IHtcbiAgICB3aWR0aDoxMDAlO1xufVxuXG4uc3VibWl0IHRkOmxhc3QtY2hpbGQge1xuICAgIHRleHQtYWxpZ246cmlnaHQ7XG59XG5cbi5idXR0b25zIHtcbiAgICBtYXJnaW46MTBweDtcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xufVxuXG4uYnV0dG9ucyBkaXYge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBjb2xvcjojNEE0OUE4O1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG4uZXJyb3Ige1xuICAgIGNvbG9yOnJlZDtcbiAgICBtYXJnaW46NXB4O1xuICAgIGZvbnQtc2l6ZToxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluU2VjdGlvbiBhIHtcbiAgICBjb2xvcjojMDBmICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcbn1cblxuLm1haW5TZWN0aW9uIHRkIHtcbiAgICBwYWRkaW5nLWJvdHRvbToxM3B4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiRtYWluRm9udFNpemU7XG5cbn1cbi5tYWluU2VjdGlvbiAuYmx1ZUhlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6MTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMDA3M2I5O1xuICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLm1haW5TZWN0aW9uIC5oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IzAwNTUxODtcbiAgICBjb2xvcjojZmZmO1xuICAgIHBhZGRpbmc6MTBweDtcbn1cblxuICAgIC5tYWluU2VjdGlvbiAuaGVhZGVyIC5idG4ge1xuICAgICAgICBtYXJnaW4tbGVmdDoxMHB4O1xuICAgIH1cblxuLm1haW5TZWN0aW9uIC5lZGl0QnV0dG9ue1xuICAgIHBhZGRpbmctdG9wOjVweDtcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xufVxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluLmZpbGVze1xuICAgIG1hcmdpbi1ib3R0b206MTBweDtcbn1cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiB0ZHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG59XG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXN7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXMgdGh7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIHdpZHRoOjE1MHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XG59XG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gdGQubGFiZWx7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICB3aWR0aDoyMDBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG59XG5cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllcyB0ZHtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgd2lkdGg6MTUwcHg7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcbn1cblxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIC5wcm9wZXJ0aWVzLmZpbGVze1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206NXB4O1xufVxuXG4uZXhwZXJpbWVudENvbmZpZ3VyYXRpb25zIHRkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XG4gICAgd2lkdGg6MzAwcHg7XG59XG4gdWwge1xuICAgcGFkZGluZy1sZWZ0OjEzcHg7XG59XG5cblxuLmRhdGFBbmRDb25kaXRpb25zIHRke1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICB3aWR0aDoyMDBweDtcbn1cblxuLmRhdGFBbmRDb25kaXRpb25zIHRoe1xuICAgIGJhY2tncm91bmQtY29sb3I6IzAwNzNiOTtcbiAgICBjb2xvcjojZmZmO1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbiAgICBib3JkZXI6MXB4ICBzb2xpZCAjY2NjO1xuXG59XG5cbi5wcm9wZXJ0aWVzIHRke1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICB3aWR0aDoyMDBweDtcbn1cblxuLnByb3BlcnRpZXMgdGh7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA3M2I5O1xuICAgIGNvbG9yOiNmZmY7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIGJvcmRlcjoxcHggIHNvbGlkICNjY2M7XG5cbn1cblxuLmZpbGVzIHtcbiAgICBtaW4td2lkdGg6NjUwcHg7XG59XG5cbi5maWxlcyB0ZHtcbiAgICBwYWRkaW5nOjVweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG59XG5cbi5maWxlcyB0aHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDczYjk7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBwYWRkaW5nOjVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgYm9yZGVyOjFweCAgc29saWQgI2NjYztcblxufVxuXG5sYWJlbC5yaWdodCB7XG4gICAgcGFkZGluZy1sZWZ0OjVweDtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharacterizationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'canano-characterization',
                templateUrl: './characterization.component.html',
                styleUrls: ['./characterization.component.scss']
            }]
    }], function () { return [{ type: src_app_cananolab_client_status_display_status_display_service__WEBPACK_IMPORTED_MODULE_4__["StatusDisplayService"] }, { type: _common_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }, { type: _common_services_navigation_service__WEBPACK_IMPORTED_MODULE_6__["NavigationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _common_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"] }]; }, null); })();


/***/ }),

/***/ "uS1h":
/*!***************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/characterization/characterization.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: CharacterizationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterizationModule", function() { return CharacterizationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _characterization_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./characterization.component */ "S3/A");
/* harmony import */ var _characterization_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characterization-routing.module */ "RoXP");
/* harmony import */ var _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/modules/set-object-value/shared.module */ "0U9J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class CharacterizationModule {
}
CharacterizationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CharacterizationModule });
CharacterizationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CharacterizationModule_Factory(t) { return new (t || CharacterizationModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _characterization_routing_module__WEBPACK_IMPORTED_MODULE_3__["CharacterizationRoutingModule"],
            _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CharacterizationModule, { declarations: [_characterization_component__WEBPACK_IMPORTED_MODULE_2__["CharacterizationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _characterization_routing_module__WEBPACK_IMPORTED_MODULE_3__["CharacterizationRoutingModule"],
        _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharacterizationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_characterization_component__WEBPACK_IMPORTED_MODULE_2__["CharacterizationComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _characterization_routing_module__WEBPACK_IMPORTED_MODULE_3__["CharacterizationRoutingModule"],
                    _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=cananolab-client-main-display-samples-characterization-characterization-module.js.map