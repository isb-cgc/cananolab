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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r58.serverUrl + "/caNanoLab/rest/sample/download?fileId=" + file_r57.fileId, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r58.serverUrl + "/caNanoLab/rest/sample/download?fileId=" + file_r57.fileId, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_4_tr_10_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const file_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r59.serverUrl + "/caNanoLab/rest/sample/download?fileId=" + file_r57.fileId, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
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
    } }, directives: [src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_9__["MainDisplayHeadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["KeyValuePipe"]], styles: ["html[_ngcontent-%COMP%] {\n  font-family: arial, helvetica, verdana, sans-serif !important;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: arial, helvetica, verdana, sans-serif !important;\n}\n\n.header[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\ntd.leftMenu[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  width: 160px;\n  margin: 0px;\n  padding: 0px;\n  vertical-align: top;\n}\n\ntd.mainContent[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding: 0px;\n  margin: 0px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  border: solid #88BCE2;\n  border-width: 1px 1px 1px 0px;\n}\n\n.parent-div[_ngcontent-%COMP%] {\n  \n  display: flex;\n  flex-direction: row;\n  background-color: #fff;\n  width: 100%;\n}\n\n.link-clicker[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n.link-clicker[_ngcontent-%COMP%]:hover {\n  color: #a90101;\n  cursor: pointer;\n}\n\n\n\na[_ngcontent-%COMP%]:link {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n\n\na[_ngcontent-%COMP%]:visited {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n\n\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #a90101;\n}\n\n\n\na[_ngcontent-%COMP%]:active {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.unselectable[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  text-transform: uppercase;\n}\n\n.hand[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.clicker[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.search-results-table[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 100%;\n  border: solid #ccc 1px;\n}\n\n.search-results-tr[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: solid #ccc 1px;\n}\n\n.search-results-th[_ngcontent-%COMP%] {\n  padding: 6px;\n  border: solid #ccc 1px;\n  background-color: #0073b9;\n  color: #fff;\n}\n\n.search-results-td[_ngcontent-%COMP%] {\n  padding: 6px;\n  border-left: solid #ccc 1px;\n  border-right: solid #ccc 1px;\n}\n\n.rowOdd[_ngcontent-%COMP%] {\n  background-color: #efeded;\n}\n\n.search-results--tr-odd[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-width: 0px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  padding-left: 160px;\n  text-align: center;\n}\n\n.spacer.center[_ngcontent-%COMP%] {\n  color: #02055a;\n}\n\n.footer[_ngcontent-%COMP%] {\n  padding: 0px 0px 0px 160px;\n  vertical-align: middle !important;\n  text-align: center;\n  background-color: #02055a;\n  border: solid #88BCE2;\n  border-width: 1px 1px 1px 0px;\n  font-size: 12px;\n}\n\n.footer.white[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 0px;\n  padding: 10px 0px 0px 0px;\n  font-size: 9.5px;\n  color: #333;\n}\n\n.footer.white[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.footer.white[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline !important;\n  color: #333;\n}\n\n.footer.white.release[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  font-weight: normal !important;\n  color: #4A49A8;\n}\n\n.footer.white[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  padding: 0px 10px 0px 10px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  vertical-align: middle;\n  list-style: none;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  display: inline-block;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  color: #81FFFE;\n  border: solid #88BCE2;\n  border-width: 0px 1px 0px 0px;\n  padding: 4px 15px 4px 15px;\n  margin: 0px;\n  vertical-align: top;\n  text-transform: uppercase;\n  font-weight: bold;\n  outline: 0;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item.left[_ngcontent-%COMP%] {\n  border: solid #88BCE2;\n  border-width: 0px 1px 0px 1px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item[_ngcontent-%COMP%]:hover {\n  background-color: #81FFFE;\n  color: #02055a;\n  margin: 0px;\n  vertical-align: top;\n}\n\n.rowOdd[_ngcontent-%COMP%] {\n  background-color: #efeded;\n}\n\ntable.dataTable[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #ccc;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  font-weight: bold;\n  padding: 3px 3px 3px 5px;\n  border: 1px solid #ccc;\n  text-transform: capitalize;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n  width: 250px;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%] {\n  width: 110px !important;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0px 4px 0px 0px;\n}\n\n.actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0px 4px 0px 0px;\n}\n\n.myFilters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.outer-input-frame[_ngcontent-%COMP%] {\n  border: solid #d4d4d4 2px;\n}\n\n.mainSection[_ngcontent-%COMP%] {\n  margin: 10px 0px 5px 7px;\n  padding: 0px;\n  font-size: 12px;\n  min-width: 1150px !important;\n}\n\n.mainBorder[_ngcontent-%COMP%] {\n  padding: 15px 15px 15px 15px;\n  border: 1px solid #ccc;\n  margin: 0px 0px 0px 2px;\n  width: 100%;\n}\n\n.mainBorder.loading[_ngcontent-%COMP%] {\n  background-color: #005d7e !important;\n  color: #fff;\n  padding: 15px !important;\n  margin-bottom: 15px;\n}\n\n.dataMain[_ngcontent-%COMP%] {\n  margin: 5px;\n  width: 90%;\n}\n\n.dataMain[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  width: 200px;\n  padding: 10px;\n  font-weight: bold;\n  vertical-align: top;\n}\n\n.dataMain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  vertical-align: top;\n}\n\n.dataMain[_ngcontent-%COMP%]   td.buttons[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.links-panel[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.links-panel.card.ml-1.mt-2[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n}\n\n.create-search-button-group[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.create-delete-button-group[_ngcontent-%COMP%] {\n  float: left;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-right: 5px !important;\n}\n\n.searchForm[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.searchForm[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding: 5px 10px 5px 0px;\n}\n\n.searchForm[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding-right: 20px;\n  width: 150px;\n}\n\n.searchForm[_ngcontent-%COMP%]   select.multiple[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.searchForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n\n.searchForm[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\n.submit[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.submit[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  margin: 10px;\n  text-align: right;\n}\n\n.buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #4A49A8;\n  text-align: center;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n  margin: 5px;\n  font-size: 14px !important;\n}\n\n.mainSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #00f !important;\n  text-decoration: underline !important;\n}\n\n.mainSection[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-bottom: 13px !important;\n  font-size: 12px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .blueHeader[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #0073b9;\n  color: #fff;\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: #005518;\n  color: #fff;\n  padding: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .editButton[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  text-align: right;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain.files[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 200px;\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties.files[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  width: 100%;\n  margin-bottom: 5px;\n}\n\n.experimentConfigurations[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  width: 300px;\n}\n\nul[_ngcontent-%COMP%] {\n  padding-left: 13px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%] {\n  min-width: 650px;\n}\n\n.files[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\nlabel.right[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\n.mainSection[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-bottom: 13px !important;\n  font-size: 12px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .blueHeader[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #0073b9;\n  color: #fff;\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: #005518;\n  color: #fff;\n  padding: 10px;\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .editButton[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  text-align: right;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain.files[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 200px;\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties.files[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  width: 100%;\n  margin-bottom: 5px;\n}\n\n.experimentConfigurations[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  width: 300px;\n}\n\nul[_ngcontent-%COMP%] {\n  padding-left: 13px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%] {\n  min-width: 650px;\n}\n\n.files[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.mainBorder[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.mainBorder.last[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.mainSection[_ngcontent-%COMP%] {\n  margin-top: 0px !important;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  margin-bottom: 0px !important;\n  padding-bottom: 0px !important;\n  text-transform: capitalize;\n}\n\n.nav.nav-tabs[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-left: -6px;\n  border-bottom: none !important;\n  padding-top: 15px !important;\n}\n\na.nav-link[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n  text-transform: capitalize !important;\n}\n\na.nav-link.active[_ngcontent-%COMP%] {\n  border-color: #000 #000 #005518 !important;\n  text-decoration: none !important;\n  color: #fff !important;\n  background-color: #005518 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNhbmFub2xhYi1jbGllbnQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxjaGFyYWN0ZXJpemF0aW9uLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxtYWluLWRpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJBO0VBQ0ksNkRBRm9CO0FDZHhCOztBRG1CQTtFQUNJLDZEQU5vQjtBQ1Z4Qjs7QURrQkE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ2ZEOztBRG9CQTtFQUVJLHlCQTdCcUI7RUE4QnJCLFlBM0JZO0VBNEJmLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNsQkQ7O0FEcUJBO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ25CSjs7QURzQkE7RUFFSSx5QkE3Q3FCO0VBOENyQixxQkFBQTtFQUNBLDZCQUFBO0FDcEJKOztBRHVCQTtFQUNJLGtFQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDcEJKOztBRHdCQTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUNyQko7O0FEdUJJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNyQlI7O0FEeUJBLG1CQUFBOztBQUNBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ3RCSjs7QUR5QkEsaUJBQUE7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FDdEJKOztBRHlCQSxvQkFBQTs7QUFDQTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUN0Qko7O0FEeUJBLGtCQUFBOztBQUNBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ3RCSjs7QUR5QkE7RUFDSSxhQUFBO0FDdEJKOztBRHlCQTtFQUNJLDJCQUFBO0VBQ0EseUJB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Ujs7QUFwZ0JLO0VBQ0Usa0JBQUE7QUF1Z0JQOztBQW5nQkk7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBc2dCUjs7QUFuZ0JJO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFzZ0JSOztBQWxnQkk7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBcWdCUjs7QUFsZ0JJO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFxZ0JSOztBQWpnQkk7RUFDSSxnQkFBQTtBQW9nQlI7O0FBamdCSTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtBQW9nQlI7O0FBamdCSTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBb2dCUjs7QUFoZ0JJO0VBQ0ksaUJBQUE7QUFtZ0JSOztBQS9mSTtFQUNJLG1CQUFBO0FBa2dCUjs7QUEvZkk7RUFDSSxrQkFBQTtBQWtnQlI7O0FBaGdCSTtFQUNJLDBCQUFBO0FBbWdCUjs7QUFoZ0JJO0VBQ0ksNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0FBbWdCUjs7QUFoZ0JJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtBQW1nQlI7O0FBamdCSTtFQUNJLGdDQUFBO0VBQ0EscUNBQUE7QUFvZ0JSOztBQWxnQkk7RUFDSSwwQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtBQXFnQlIiLCJmaWxlIjoiY2hhcmFjdGVyaXphdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuJGNhbmFuby1ncmVlbjogIzAwNTUxODtcclxuJGNhbmFuby1ibHVlOiAjMDA3M2I5O1xyXG4kY2FuYW5vLWJhY2tncm91bmQtYmx1ZTogIzAyMDU1YTtcclxuJG1lbnVIZWFkaW5nQmFja2dyb3VuZENvbG9yOiAjMDA1ZDdlO1xyXG4kbGVmdE1lbnVCb3JkZXJDb2xvcjojODhCQ0UyO1xyXG4kbGVmdE1lbnVXaWR0aDogMTYwcHg7XHJcbiRsZWZ0TWVudU1hcmdpbjogMHB4O1xyXG4kbmF2QnV0dG9uQ29sb3I6IzgxRkZGRTtcclxuJGJvcmRlckNvbG9yOiAkbGVmdE1lbnVCb3JkZXJDb2xvcjtcclxuJG1haW5Gb250U2l6ZToxMnB4O1xyXG4ka2V5d29yZFNlYXJjaEZvbnRTaXplOiAxMnB4O1xyXG4kb2RkUm93Q29sb3I6I2VmZWRlZDtcclxuJG1haW5EaXNwbGF5SGVhZGluZ0hlaWdodDogMjhweDtcclxuJG1haW5EaXNwbGF5SGVhZGluZ01hcmdpbjogOHB4O1xyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjphcmlhbCxoZWx2ZXRpY2EsdmVyZGFuYSxzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbmh0bWwge1xyXG4gICAgZm9udC1mYW1pbHk6JGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY7XHJcblxyXG59XHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6JGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY7XHJcbn1cclxuLmhlYWRlciB7XHJcblx0bWFyZ2luOjBweDtcclxuXHRwYWRkaW5nOjBweDtcclxufVxyXG4uaG9tZSB7XHJcbn1cclxuXHJcbnRkLmxlZnRNZW51IHtcclxuICAgIEBleHRlbmQgLmhvbWU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlO1xyXG4gICAgd2lkdGg6JGxlZnRNZW51V2lkdGg7XHJcblx0bWFyZ2luOjBweDtcclxuXHRwYWRkaW5nOjBweDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbn1cclxuXHJcbnRkLm1haW5Db250ZW50IHtcclxuICAgIEBleHRlbmQgLmhvbWU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbiAgICBwYWRkaW5nOjBweDtcclxuICAgIG1hcmdpbjowcHg7XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gICAgQGV4dGVuZCAuaG9tZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6JGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU7XHJcbiAgICBib3JkZXI6c29saWQgJGxlZnRNZW51Qm9yZGVyQ29sb3I7XHJcbiAgICBib3JkZXItd2lkdGg6MXB4IDFweCAxcHggMHB4O1xyXG59XHJcblxyXG4ucGFyZW50LWRpdntcclxuICAgIC8qIGtlZXAgdGhlIFF1ZXJ5IHNlY3Rpb24gYW5kIHRoZSBEaXNwbGF5IHNlY3Rpb24gc2lkZSBieSBzaWRlLiAgKi9cclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vLyBARklYTUUgLSBUaGVzZSBjb2xvcnMgbmVlZCB2YXJpYWJsZXNcclxuLmxpbmstY2xpY2tlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcblxyXG4gICAgJjpob3ZlcntcclxuICAgICAgICBjb2xvcjogI2E5MDEwMTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIHVudmlzaXRlZCBsaW5rICovXHJcbmE6bGlua3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi8qIHZpc2l0ZWQgbGluayAqL1xyXG5hOnZpc2l0ZWR7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4vKiBtb3VzZSBvdmVyIGxpbmsgKi9cclxuYTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6ICNhOTAxMDE7XHJcbn1cclxuXHJcbi8qIHNlbGVjdGVkIGxpbmsgKi9cclxuYTphY3RpdmV7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4uaGlkZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi51bnNlbGVjdGFibGV7XHJcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmhhbmQge1xyXG4gICAgY3Vyc29yOnBvaW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNsaWNrZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4uc2VhcmNoLXJlc3VsdHMtdGFibGV7XHJcbiAgICBmb250LXNpemU6ICRtYWluRm9udFNpemU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgI2NjYyAxcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0cy10cntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IHNvbGlkICNjY2MgMXB4O1xyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdHMtdGh7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAvLyAgYm9yZGVyOiBzb2xpZCAjZGZkZmRmIDJweDtcclxuICAgIGJvcmRlcjogc29saWQgI2NjYyAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FuYW5vLWJsdWU7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHRzLXRke1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgLy8gYm9yZGVyOiBzb2xpZCAjZGZkZmRmIDJweDtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAjY2NjIDFweDtcclxuICAgIGJvcmRlci1yaWdodDogc29saWQgI2NjYyAxcHg7XHJcbn1cclxuXHJcbi5yb3dPZGR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb2RkUm93Q29sb3I7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0cy0tdHItb2Rke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaW1nIHtcclxuXHRib3JkZXItd2lkdGg6MHB4O1xyXG5cdG1hcmdpbjowcHg7XHJcblx0cGFkZGluZzowcHg7XHJcblxyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICAgIHBhZGRpbmctbGVmdDokbGVmdE1lbnVXaWR0aDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uc3BhY2VyLmNlbnRlciB7XHJcbiAgICBjb2xvcjokY2FuYW5vLWJhY2tncm91bmQtYmx1ZTtcclxufVxyXG5cclxuXHJcbi5mb290ZXIge1xyXG5cdHBhZGRpbmc6MHB4IDBweCAwcHggMTYwcHg7XHJcblx0dmVydGljYWwtYWxpZ246bWlkZGxlICFpbXBvcnRhbnQ7XHJcblx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0YmFja2dyb3VuZC1jb2xvcjokY2FuYW5vLWJhY2tncm91bmQtYmx1ZTtcclxuICAgIGJvcmRlcjpzb2xpZCAkbGVmdE1lbnVCb3JkZXJDb2xvcjtcclxuICAgIGJvcmRlci13aWR0aDoxcHggMXB4IDFweCAwcHg7XHJcbiAgICBmb250LXNpemU6JG1haW5Gb250U2l6ZTtcclxufTtcclxuXHJcblxyXG4uZm9vdGVyLndoaXRle1xyXG5cdGJhY2tncm91bmQtY29sb3I6I2ZmZjtcclxuXHRib3JkZXI6MHB4O1xyXG5cdHBhZGRpbmc6MTBweCAwcHggMHB4IDBweDtcclxuXHRmb250LXNpemU6OS41cHg7XHJcbiAgICBjb2xvcjojMzMzO1xyXG59O1xyXG5cclxuLmZvb3Rlci53aGl0ZSBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lICFpbXBvcnRhbnQ7XHJcbn07XHJcblxyXG4uZm9vdGVyLndoaXRlIGE6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IzMzMztcclxufVxyXG5cclxuLmZvb3Rlci53aGl0ZS5yZWxlYXNlIHtcclxuICAgIGZvbnQtc2l6ZToxMnB4ICFpbXBvcnRhbnQ7XHJcblx0Zm9udC13ZWlnaHQ6bm9ybWFsICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6IzRBNDlBODtcclxufVxyXG5cclxuLmZvb3Rlci53aGl0ZSAuZGl2aWRlciB7XHJcblx0cGFkZGluZzowcHggMTBweCAwcHggMTBweDtcclxufTtcclxuXHJcbi5mb290ZXIgdWwge1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG4gICAgbGlzdC1zdHlsZTpub25lO1xyXG59O1xyXG5cclxuLmZvb3RlciB1bCBsaS5mb290ZXItaXRlbSB7XHJcbiAgICBwYWRkaW5nOjBweDtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxufVxyXG5cclxuXHJcbi5mb290ZXIgdWwgbGkuZm9vdGVyLWl0ZW0gLm5hdi1saW5rLm5hdi1tZW51LXRvcC1pdGVtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6JGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU7XHJcbiAgICBjb2xvcjokbmF2QnV0dG9uQ29sb3I7XHJcbiAgICBib3JkZXI6IHNvbGlkICRsZWZ0TWVudUJvcmRlckNvbG9yO1xyXG4gICAgYm9yZGVyLXdpZHRoOjBweCAxcHggMHB4IDBweDtcclxuICAgIHBhZGRpbmc6NHB4IDE1cHggNHB4IDE1cHg7XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG5cdHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuXHRmb250LXdlaWdodDpib2xkO1xyXG5cdG91dGxpbmU6MDtcclxufVxyXG5cclxuLmZvb3RlciB1bCBsaS5mb290ZXItaXRlbSAubmF2LWxpbmsubmF2LW1lbnUtdG9wLWl0ZW0ubGVmdHtcclxuICAgIGJvcmRlcjogc29saWQgJGxlZnRNZW51Qm9yZGVyQ29sb3I7XHJcbiAgICBib3JkZXItd2lkdGg6MHB4IDFweCAwcHggMXB4O1xyXG59XHJcblxyXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIC5uYXYtbGluay5uYXYtbWVudS10b3AtaXRlbTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6JG5hdkJ1dHRvbkNvbG9yO1xyXG4gICAgY29sb3I6JGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU7XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG59XHJcblxyXG4ucm93T2RkIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiRvZGRSb3dDb2xvcjtcclxufVxyXG5cclxudGFibGUuZGF0YVRhYmxle1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcblxyXG59XHJcblxyXG50YWJsZS5kYXRhVGFibGUgdGh7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3M2I5O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmc6M3B4IDNweCAzcHggNXB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbnRhYmxlLmRhdGFUYWJsZSB0ZHtcclxuXHRwYWRkaW5nOjVweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcclxuXHR3aWR0aDoyNTBweDtcclxufVxyXG5cclxudGFibGUuZGF0YVRhYmxlIHRkLmFjdGlvbnMgIHtcclxuXHR3aWR0aDoxMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50YWJsZS5kYXRhVGFibGUgdGQuYWN0aW9ucyBkaXYge1xyXG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdG1hcmdpbjowcHggNHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5hY3Rpb25zIGRpdiB7XHJcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblx0bWFyZ2luOjBweCA0cHggMHB4IDBweDtcclxufVxyXG5cclxuLm15RmlsdGVycyBsYWJlbCB7XHJcbiAgICBtYXJnaW4tbGVmdDo1cHg7XHJcbn1cclxuIiwiaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgaGVsdmV0aWNhLCB2ZXJkYW5hLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogYXJpYWwsIGhlbHZldGljYSwgdmVyZGFuYSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xufVxuXG4uaGVhZGVyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxudGQubGVmdE1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIwNTVhO1xuICB3aWR0aDogMTYwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbnRkLm1haW5Db250ZW50IHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjA1NWE7XG4gIGJvcmRlcjogc29saWQgIzg4QkNFMjtcbiAgYm9yZGVyLXdpZHRoOiAxcHggMXB4IDFweCAwcHg7XG59XG5cbi5wYXJlbnQtZGl2IHtcbiAgLyoga2VlcCB0aGUgUXVlcnkgc2VjdGlvbiBhbmQgdGhlIERpc3BsYXkgc2VjdGlvbiBzaWRlIGJ5IHNpZGUuICAqL1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubGluay1jbGlja2VyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6ICMzMzM7XG59XG4ubGluay1jbGlja2VyOmhvdmVyIHtcbiAgY29sb3I6ICNhOTAxMDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogdW52aXNpdGVkIGxpbmsgKi9cbmE6bGluayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4vKiB2aXNpdGVkIGxpbmsgKi9cbmE6dmlzaXRlZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4vKiBtb3VzZSBvdmVyIGxpbmsgKi9cbmE6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogI2E5MDEwMTtcbn1cblxuLyogc2VsZWN0ZWQgbGluayAqL1xuYTphY3RpdmUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogIzMzMztcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udW5zZWxlY3RhYmxlIHtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5oYW5kIHtcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XG59XG5cbi5jbGlja2VyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VhcmNoLXJlc3VsdHMtdGFibGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IHNvbGlkICNjY2MgMXB4O1xufVxuXG4uc2VhcmNoLXJlc3VsdHMtdHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IHNvbGlkICNjY2MgMXB4O1xufVxuXG4uc2VhcmNoLXJlc3VsdHMtdGgge1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlcjogc29saWQgI2NjYyAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDczYjk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2VhcmNoLXJlc3VsdHMtdGQge1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAjY2NjIDFweDtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAjY2NjIDFweDtcbn1cblxuLnJvd09kZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVkZWQ7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy0tdHItb2RkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuaW1nIHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5zcGFjZXIge1xuICBwYWRkaW5nLWxlZnQ6IDE2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zcGFjZXIuY2VudGVyIHtcbiAgY29sb3I6ICMwMjA1NWE7XG59XG5cbi5mb290ZXIge1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAxNjBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjA1NWE7XG4gIGJvcmRlcjogc29saWQgIzg4QkNFMjtcbiAgYm9yZGVyLXdpZHRoOiAxcHggMXB4IDFweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmZvb3Rlci53aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMHB4O1xuICBwYWRkaW5nOiAxMHB4IDBweCAwcHggMHB4O1xuICBmb250LXNpemU6IDkuNXB4O1xuICBjb2xvcjogIzMzMztcbn1cblxuLmZvb3Rlci53aGl0ZSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5mb290ZXIud2hpdGUgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uZm9vdGVyLndoaXRlLnJlbGVhc2Uge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzRBNDlBODtcbn1cblxuLmZvb3Rlci53aGl0ZSAuZGl2aWRlciB7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xufVxuXG4uZm9vdGVyIHVsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmZvb3RlciB1bCBsaS5mb290ZXItaXRlbSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmZvb3RlciB1bCBsaS5mb290ZXItaXRlbSAubmF2LWxpbmsubmF2LW1lbnUtdG9wLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDIwNTVhO1xuICBjb2xvcjogIzgxRkZGRTtcbiAgYm9yZGVyOiBzb2xpZCAjODhCQ0UyO1xuICBib3JkZXItd2lkdGg6IDBweCAxcHggMHB4IDBweDtcbiAgcGFkZGluZzogNHB4IDE1cHggNHB4IDE1cHg7XG4gIG1hcmdpbjogMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3V0bGluZTogMDtcbn1cblxuLmZvb3RlciB1bCBsaS5mb290ZXItaXRlbSAubmF2LWxpbmsubmF2LW1lbnUtdG9wLWl0ZW0ubGVmdCB7XG4gIGJvcmRlcjogc29saWQgIzg4QkNFMjtcbiAgYm9yZGVyLXdpZHRoOiAwcHggMXB4IDBweCAxcHg7XG59XG5cbi5mb290ZXIgdWwgbGkuZm9vdGVyLWl0ZW0gLm5hdi1saW5rLm5hdi1tZW51LXRvcC1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxRkZGRTtcbiAgY29sb3I6ICMwMjA1NWE7XG4gIG1hcmdpbjogMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ucm93T2RkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWRlZDtcbn1cblxudGFibGUuZGF0YVRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbnRhYmxlLmRhdGFUYWJsZSB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDczYjk7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZzogM3B4IDNweCAzcHggNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRkIHtcbiAgcGFkZGluZzogNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB3aWR0aDogMjUwcHg7XG59XG5cbnRhYmxlLmRhdGFUYWJsZSB0ZC5hY3Rpb25zIHtcbiAgd2lkdGg6IDExMHB4ICFpbXBvcnRhbnQ7XG59XG5cbnRhYmxlLmRhdGFUYWJsZSB0ZC5hY3Rpb25zIGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwcHggNHB4IDBweCAwcHg7XG59XG5cbi5hY3Rpb25zIGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwcHggNHB4IDBweCAwcHg7XG59XG5cbi5teUZpbHRlcnMgbGFiZWwge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ub3V0ZXItaW5wdXQtZnJhbWUge1xuICBib3JkZXI6IHNvbGlkICNkNGQ0ZDQgMnB4O1xufVxuXG4ubWFpblNlY3Rpb24ge1xuICBtYXJnaW46IDEwcHggMHB4IDVweCA3cHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtaW4td2lkdGg6IDExNTBweCAhaW1wb3J0YW50O1xufVxuXG4ubWFpbkJvcmRlciB7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1haW5Cb3JkZXIubG9hZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDVkN2UgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmRhdGFNYWluIHtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5kYXRhTWFpbiB0ZC5sYWJlbCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5kYXRhTWFpbiB0ZCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5kYXRhTWFpbiB0ZC5idXR0b25zIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5saW5rcy1wYW5lbCB7XG4gIHdpZHRoOiA1MDBweDtcbn1cblxuLmxpbmtzLXBhbmVsLmNhcmQubWwtMS5tdC0yIHtcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY3JlYXRlLXNlYXJjaC1idXR0b24tZ3JvdXAge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jcmVhdGUtZGVsZXRlLWJ1dHRvbi1ncm91cCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG5sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tcmlnaHQ6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoRm9ybSB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uc2VhcmNoRm9ybSB0ZCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAwcHg7XG59XG5cbi5zZWFyY2hGb3JtIHRkLmxhYmVsIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4uc2VhcmNoRm9ybSBzZWxlY3QubXVsdGlwbGUge1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5zZWFyY2hGb3JtIHNlbGVjdCB7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuXG4uc2VhcmNoRm9ybSBzcGFuLmxhYmVsIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLnN1Ym1pdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc3VibWl0IHRkOmxhc3QtY2hpbGQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmJ1dHRvbnMge1xuICBtYXJnaW46IDEwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYnV0dG9ucyBkaXYge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiAjNEE0OUE4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIG1hcmdpbjogNXB4O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLm1haW5TZWN0aW9uIGEge1xuICBjb2xvcjogIzAwZiAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xufVxuXG4ubWFpblNlY3Rpb24gdGQge1xuICBwYWRkaW5nLWJvdHRvbTogMTNweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tYWluU2VjdGlvbiAuYmx1ZUhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDczYjk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLm1haW5TZWN0aW9uIC5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NTE4O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLm1haW5TZWN0aW9uIC5oZWFkZXIgLmJ0biB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubWFpblNlY3Rpb24gLmVkaXRCdXR0b24ge1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluLmZpbGVzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIHRkIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIC5wcm9wZXJ0aWVzIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllcyB0aCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxNTBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIHRkLmxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAyMDBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIC5wcm9wZXJ0aWVzIHRkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDE1MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXMuZmlsZXMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uZXhwZXJpbWVudENvbmZpZ3VyYXRpb25zIHRkIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG51bCB7XG4gIHBhZGRpbmctbGVmdDogMTNweDtcbn1cblxuLmRhdGFBbmRDb25kaXRpb25zIHRkIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5kYXRhQW5kQ29uZGl0aW9ucyB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDczYjk7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5wcm9wZXJ0aWVzIHRkIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB3aWR0aDogMjAwcHg7XG59XG5cbi5wcm9wZXJ0aWVzIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzNiOTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLmZpbGVzIHtcbiAgbWluLXdpZHRoOiA2NTBweDtcbn1cblxuLmZpbGVzIHRkIHtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uZmlsZXMgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3M2I5O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG5sYWJlbC5yaWdodCB7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xufVxuXG4ubWFpblNlY3Rpb24gdGQge1xuICBwYWRkaW5nLWJvdHRvbTogMTNweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tYWluU2VjdGlvbiAuYmx1ZUhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDczYjk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLm1haW5TZWN0aW9uIC5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NTE4O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5tYWluU2VjdGlvbiAuaGVhZGVyIC5idG4ge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLm1haW5TZWN0aW9uIC5lZGl0QnV0dG9uIHtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbi5maWxlcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiB0ZCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllcyB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXMgdGgge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTUwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiB0ZC5sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMjAwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllcyB0ZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiAxNTBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIC5wcm9wZXJ0aWVzLmZpbGVzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmV4cGVyaW1lbnRDb25maWd1cmF0aW9ucyB0ZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxudWwge1xuICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG59XG5cbi5kYXRhQW5kQ29uZGl0aW9ucyB0ZCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uZGF0YUFuZENvbmRpdGlvbnMgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3M2I5O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4ucHJvcGVydGllcyB0ZCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4ucHJvcGVydGllcyB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDczYjk7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5maWxlcyB7XG4gIG1pbi13aWR0aDogNjUwcHg7XG59XG5cbi5maWxlcyB0ZCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLmZpbGVzIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzNiOTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxubGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1haW5Cb3JkZXIge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ubWFpbkJvcmRlci5sYXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubWFpblNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLm5hdi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5uYXYubmF2LXRhYnMge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAtNnB4O1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbmEubmF2LWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn1cblxuYS5uYXYtbGluay5hY3RpdmUge1xuICBib3JkZXItY29sb3I6ICMwMDAgIzAwMCAjMDA1NTE4ICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NTE4ICFpbXBvcnRhbnQ7XG59IiwiQGltcG9ydCAnLi4vY2FuYW5vbGFiLWNsaWVudC5jb21wb25lbnQuc2Nzcyc7XHJcblxyXG4ub3V0ZXItaW5wdXQtZnJhbWV7XHJcbiAgICBib3JkZXI6IHNvbGlkICNkNGQ0ZDQgMnB4O1xyXG59XHJcbi5tYWluU2VjdGlvbiB7XHJcbiAgICBtYXJnaW46MTBweCAwcHggNXB4IDdweDtcclxuICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgZm9udC1zaXplOiRtYWluRm9udFNpemU7XHJcbiAgICBtaW4td2lkdGg6MTE1MHB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi5tYWluQm9yZGVyIHtcclxuICAgIHBhZGRpbmc6MTVweCAxNXB4IDE1cHggMTVweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcclxuICAgIG1hcmdpbjowcHggMHB4IDBweCAycHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbn1cclxuXHJcbi5tYWluQm9yZGVyLmxvYWRpbmcge1xyXG5cdGJhY2tncm91bmQtY29sb3I6JG1lbnVIZWFkaW5nQmFja2dyb3VuZENvbG9yICFpbXBvcnRhbnQ7XHJcblx0Y29sb3I6I2ZmZjtcclxuXHRwYWRkaW5nOjE1cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206MTVweDtcclxufVxyXG5cclxuLmRhdGFNYWluICB7XHJcbiAgICBtYXJnaW46NXB4O1xyXG4gICAgd2lkdGg6OTAlO1xyXG59XHJcblxyXG4uZGF0YU1haW4gdGQubGFiZWwge1xyXG4gICAgd2lkdGg6MjAwcHg7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG59XHJcbi5kYXRhTWFpbiB0ZCB7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbn1cclxuXHJcbi5kYXRhTWFpbiB0ZC5idXR0b25zIHtcclxuICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbn1cclxuXHJcblxyXG4ubGlua3MtcGFuZWx7XHJcbiAgICB3aWR0aDogNTAwcHg7ICAvLyBARklYTUUgLSBtYWtlIGEgY29uc3RcclxufVxyXG5cclxuLmxpbmtzLXBhbmVsLmNhcmQubWwtMS5tdC0yIHtcclxuXHRtYXJnaW4tbGVmdDowcHggIWltcG9ydGFudFxyXG59XHJcblxyXG4uY3JlYXRlLXNlYXJjaC1idXR0b24tZ3JvdXB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLmNyZWF0ZS1kZWxldGUtYnV0dG9uLWdyb3Vwe1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6NXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWFyY2hGb3JtIHtcclxuICAgIG1hcmdpbjo1cHg7XHJcbn1cclxuXHJcbi5zZWFyY2hGb3JtIHRke1xyXG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgcGFkZGluZzo1cHggMTBweCA1cHggMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoRm9ybSB0ZC5sYWJlbHtcclxuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG59XHJcblxyXG4uc2VhcmNoRm9ybSBzZWxlY3QubXVsdGlwbGUge1xyXG4gICAgd2lkdGg6MTUwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2hGb3JtIHNlbGVjdCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6NHB4O1xyXG59XHJcblxyXG4uc2VhcmNoRm9ybSBzcGFuLmxhYmVsIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcclxufVxyXG5cclxuLnN1Ym1pdCB7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4uc3VibWl0IHRkOmxhc3QtY2hpbGQge1xyXG4gICAgdGV4dC1hbGlnbjpyaWdodDtcclxufVxyXG5cclxuLmJ1dHRvbnMge1xyXG4gICAgbWFyZ2luOjEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG59XHJcblxyXG4uYnV0dG9ucyBkaXYge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY29sb3I6IzRBNDlBODtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uZXJyb3Ige1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgbWFyZ2luOjVweDtcclxuICAgIGZvbnQtc2l6ZToxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYWluU2VjdGlvbiBhIHtcclxuICAgIGNvbG9yOiMwMGYgIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYWluU2VjdGlvbiB0ZCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbToxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6JG1haW5Gb250U2l6ZTtcclxuXHJcbn1cclxuLm1haW5TZWN0aW9uIC5ibHVlSGVhZGVyIHtcclxuICAgICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMDA3M2I5O1xyXG4gICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5tYWluU2VjdGlvbiAuaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwNTUxODtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbn1cclxuXHJcbiAgICAubWFpblNlY3Rpb24gLmhlYWRlciAuYnRuIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgfVxyXG5cclxuLm1haW5TZWN0aW9uIC5lZGl0QnV0dG9ue1xyXG4gICAgcGFkZGluZy10b3A6NXB4O1xyXG4gICAgdGV4dC1hbGlnbjpyaWdodDtcclxufVxyXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4uZmlsZXN7XHJcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbn1cclxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIHRke1xyXG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG59XHJcbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllc3tcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllcyB0aHtcclxuICAgIHRleHQtYWxpZ246bGVmdDtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgcGFkZGluZy1yaWdodDoyMHB4O1xyXG59XHJcbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiB0ZC5sYWJlbHtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICB3aWR0aDoyMDBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxufVxyXG5cclxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIC5wcm9wZXJ0aWVzIHRke1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgd2lkdGg6MTUwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XHJcbn1cclxuXHJcbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllcy5maWxlc3tcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOjVweDtcclxufVxyXG5cclxuLmV4cGVyaW1lbnRDb25maWd1cmF0aW9ucyB0ZCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbiAgICB3aWR0aDozMDBweDtcclxufVxyXG4gdWwge1xyXG4gICBwYWRkaW5nLWxlZnQ6MTNweDtcclxufVxyXG5cclxuXHJcbi5kYXRhQW5kQ29uZGl0aW9ucyB0ZHtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG4gICAgd2lkdGg6MjAwcHg7XHJcbn1cclxuXHJcbi5kYXRhQW5kQ29uZGl0aW9ucyB0aHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwNzNiOTtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgIGJvcmRlcjoxcHggIHNvbGlkICNjY2M7XHJcblxyXG59XHJcblxyXG4ucHJvcGVydGllcyB0ZHtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG4gICAgd2lkdGg6MjAwcHg7XHJcbn1cclxuXHJcbi5wcm9wZXJ0aWVzIHRoe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA3M2I5O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgYm9yZGVyOjFweCAgc29saWQgI2NjYztcclxuXHJcbn1cclxuXHJcbi5maWxlcyB7XHJcbiAgICBtaW4td2lkdGg6NjUwcHg7XHJcbn1cclxuXHJcbi5maWxlcyB0ZHtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG59XHJcblxyXG4uZmlsZXMgdGh7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDczYjk7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbiAgICBib3JkZXI6MXB4ICBzb2xpZCAjY2NjO1xyXG5cclxufVxyXG5cclxubGFiZWwucmlnaHQge1xyXG4gICAgcGFkZGluZy1sZWZ0OjVweDtcclxufVxyXG5cclxuIl19 */"] });
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