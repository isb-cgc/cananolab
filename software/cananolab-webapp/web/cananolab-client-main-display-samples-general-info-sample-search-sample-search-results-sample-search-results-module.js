(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cananolab-client-main-display-samples-general-info-sample-search-sample-search-results-sample-search-results-module"],{

/***/ "HJ02":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/general-info/sample-search/sample-search-results/sample-search-results.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: SampleSearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleSearchResultsComponent", function() { return SampleSearchResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../constants */ "l207");
/* harmony import */ var _assets_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../assets/properties */ "DzTi");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _sample_search_results_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sample-search-results.service */ "iyRt");
/* harmony import */ var _common_components_search_results_pager_search_results_pager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../common/components/search-results-pager/search-results-pager.service */ "7nox");
/* harmony import */ var _status_display_status_display_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../status-display/status-display.service */ "X3t+");
/* harmony import */ var _common_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../common/services/api.service */ "WHDV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sample_availability_display_sample_availability_display_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sample-availability-display/sample-availability-display.service */ "dn6+");
/* harmony import */ var src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/cananolab-client/main-display/main-display-heading/main-display-heading.component */ "AYD1");
/* harmony import */ var src_app_cananolab_client_main_display_samples_general_info_sample_search_sample_search_results_sample_availability_display_sample_availability_display_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/cananolab-client/main-display/samples/general-info/sample-search/sample-search-results/sample-availability-display/sample-availability-display.component */ "F1Ef");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _common_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../common/components/loader/loader.component */ "FBEc");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _common_components_search_results_pager_search_results_pager_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../common/components/search-results-pager/search-results-pager.component */ "vqvm");


















function SampleSearchResultsComponent_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No search results found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SampleSearchResultsComponent_div_2_div_3_ng_container_11_th_1_span_3_span_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "use", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "use", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SampleSearchResultsComponent_div_2_div_3_ng_container_11_th_1_span_3_span_1__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "use", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SampleSearchResultsComponent_div_2_div_3_ng_container_11_th_1_span_3_span_1__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "use", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SampleSearchResultsComponent_div_2_div_3_ng_container_11_th_1_span_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SampleSearchResultsComponent_div_2_div_3_ng_container_11_th_1_span_3_span_1_span_1_Template, 5, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SampleSearchResultsComponent_div_2_div_3_ng_container_11_th_1_span_3_span_1__svg_svg_2_Template, 2, 0, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SampleSearchResultsComponent_div_2_div_3_ng_container_11_th_1_span_3_span_1__svg_svg_3_Template, 2, 0, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.sortingStates[i_r6] === ctx_r10.sortState.NO_SORT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.sortingStates[i_r6] === ctx_r10.sortState.SORT_UP);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.sortingStates[i_r6] === ctx_r10.sortState.SORT_DOWN);
} }
function SampleSearchResultsComponent_div_2_div_3_ng_container_11_th_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SampleSearchResultsComponent_div_2_div_3_ng_container_11_th_1_span_3_span_1_Template, 4, 3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r6 > 0);
} }
function SampleSearchResultsComponent_div_2_div_3_ng_container_11_th_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SampleSearchResultsComponent_div_2_div_3_ng_container_11_th_1_Template_th_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const colKeyValue_r8 = ctx.$implicit; const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.onSortClick(i_r6, colKeyValue_r8.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SampleSearchResultsComponent_div_2_div_3_ng_container_11_th_1_span_3_Template, 2, 1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colKeyValue_r8 = ctx.$implicit;
    const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", colKeyValue_r8.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r6 > 0);
} }
function SampleSearchResultsComponent_div_2_div_3_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SampleSearchResultsComponent_div_2_div_3_ng_container_11_th_1_Template, 4, 2, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const col_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, col_r5));
} }
function SampleSearchResultsComponent_div_2_div_3_tr_12_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SampleSearchResultsComponent_div_2_div_3_tr_12_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const samp_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r31.navigateToSampleEdit(samp_r20["sampleId"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SampleSearchResultsComponent_div_2_div_3_tr_12_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SampleSearchResultsComponent_div_2_div_3_tr_12_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const samp_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r34.navigateToSampleView(samp_r20["sampleId"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SampleSearchResultsComponent_div_2_div_3_tr_12_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const samp_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", samp_r20["addedToFavorites"][0], " ");
} }
function SampleSearchResultsComponent_div_2_div_3_tr_12_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SampleSearchResultsComponent_div_2_div_3_tr_12_a_6_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const samp_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r38.addToFavorites(samp_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add to Favorites");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SampleSearchResultsComponent_div_2_div_3_tr_12_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const samp_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", samp_r20["composition"][0], " ");
} }
function SampleSearchResultsComponent_div_2_div_3_tr_12_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const func_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", func_r42, " ");
} }
function SampleSearchResultsComponent_div_2_div_3_tr_12_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const char_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", char_r43, " ");
} }
const _c0 = function (a0, a1) { return { "": a0, "rowOdd": a1 }; };
function SampleSearchResultsComponent_div_2_div_3_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SampleSearchResultsComponent_div_2_div_3_tr_12_a_2_Template, 2, 0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SampleSearchResultsComponent_div_2_div_3_tr_12_a_3_Template, 2, 0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SampleSearchResultsComponent_div_2_div_3_tr_12_div_5_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SampleSearchResultsComponent_div_2_div_3_tr_12_a_6_Template, 2, 0, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SampleSearchResultsComponent_div_2_div_3_tr_12_span_11_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SampleSearchResultsComponent_div_2_div_3_tr_12_div_13_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SampleSearchResultsComponent_div_2_div_3_tr_12_div_15_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SampleSearchResultsComponent_div_2_div_3_tr_12_Template_span_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const samp_r20 = ctx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r45.onAvailabilityClick(samp_r20["sampleId"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const samp_r20 = ctx.$implicit;
    const even_r21 = ctx.even;
    const odd_r22 = ctx.odd;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c0, even_r21, odd_r22));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.properties.LOGGED_IN);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.properties.LOGGED_IN);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", samp_r20["addedToFavorites"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.properties.LOGGED_IN && !samp_r20["addedToFavorites"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](samp_r20["sampleName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", samp_r20["pointOfContact"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", samp_r20["composition"] !== undefined && samp_r20["composition"] !== null && samp_r20["composition"][0] !== undefined && samp_r20["composition"][0] !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", samp_r20["functions"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", samp_r20["characterizations"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", samp_r20["dataAvailability"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 12, samp_r20["createdDate"], "shortDate"), " ");
} }
function SampleSearchResultsComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Show ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SampleSearchResultsComponent_div_2_div_3_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r47.pageLength = $event; })("change", function SampleSearchResultsComponent_div_2_div_3_Template_input_change_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r49.onPageLengthChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " entries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "canano-search-results-pager", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SampleSearchResultsComponent_div_2_div_3_ng_container_11_Template, 3, 3, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SampleSearchResultsComponent_div_2_div_3_tr_12_Template, 22, 18, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "canano-search-results-pager", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", ctx_r2.searchResults.length, " Item", ctx_r2.searchResults.length > 1 ? "s" : "", " found, displaying ", ctx_r2.currentPage * ctx_r2.pageLength + 1, " -", ctx_r2.currentPage * ctx_r2.pageLength + ctx_r2.pageLength > ctx_r2.searchResults.length ? ctx_r2.searchResults.length : ctx_r2.currentPage * ctx_r2.pageLength + ctx_r2.pageLength, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("max", ctx_r2.maxPageLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.pageLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalCount", ctx_r2.searchResultsCount)("startingPageLength", ctx_r2.pageLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.columnHeadings);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.searchResultsPageToDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalCount", ctx_r2.searchResultsCount)("startingPageLength", ctx_r2.pageLength);
} }
function SampleSearchResultsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canano-loader", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SampleSearchResultsComponent_div_2_div_2_Template, 2, 0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SampleSearchResultsComponent_div_2_div_3_Template, 15, 12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx_r0.loading)("message", "Exporting Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.searchResults.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.searchResults.length);
} }
class SampleSearchResultsComponent {
    constructor(sampleSearchResultsService, searchResultsPagerService, statusDisplayService, apiService, router, sampleAvailabilityDisplayService) {
        this.sampleSearchResultsService = sampleSearchResultsService;
        this.searchResultsPagerService = searchResultsPagerService;
        this.statusDisplayService = statusDisplayService;
        this.apiService = apiService;
        this.router = router;
        this.sampleAvailabilityDisplayService = sampleAvailabilityDisplayService;
        this.columnHeadings = [
            { actions: 'Actions' },
            { sampleName: 'Sample Name' },
            { pointOfContact: 'Primary Point of Contact' },
            { composition: 'Composition' },
            { functions: 'Functions' },
            { characterizations: 'Characterizations' },
            { dataAvailability: 'Data Availability' },
            { createdDate: 'Created' }
        ];
        this.maxPageLength = _assets_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"].MAX_PAGE_LENGTH;
        this.pageLength = _assets_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"].DEFAULT_PAGE_LENGTH;
        this.sampleIds = [];
        this.helpUrl = _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].HELP_URL_SAMPLE_SEARCH;
        this.toolHeadingNameSearchSample = 'Sample Search Results';
        this.pageCount = 10;
        this.searchResultsCount = -1;
        this.currentPage = 0;
        this.sortingStates = [
            _constants__WEBPACK_IMPORTED_MODULE_1__["SortState"].NO_SORT,
            _constants__WEBPACK_IMPORTED_MODULE_1__["SortState"].NO_SORT,
            _constants__WEBPACK_IMPORTED_MODULE_1__["SortState"].NO_SORT,
            _constants__WEBPACK_IMPORTED_MODULE_1__["SortState"].NO_SORT,
            _constants__WEBPACK_IMPORTED_MODULE_1__["SortState"].NO_SORT,
            _constants__WEBPACK_IMPORTED_MODULE_1__["SortState"].NO_SORT,
            _constants__WEBPACK_IMPORTED_MODULE_1__["SortState"].NO_SORT,
            _constants__WEBPACK_IMPORTED_MODULE_1__["SortState"].NO_SORT
        ];
        this.sortState = _constants__WEBPACK_IMPORTED_MODULE_1__["SortState"];
        this.properties = _assets_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"];
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        setTimeout(() => {
            _assets_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"].SAMPLE_TOOLS = false;
        });
        this.searchResults = this.sampleSearchResultsService.getSearchResults();
        this.searchResultsCount = this.searchResults.length;
        this.sampleIds = this.sampleSearchResultsService.getSampleIds();
        this.searchResultsPagerService.currentPageChangeEmitter
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngUnsubscribe))
            .subscribe((data) => {
            this.currentPage = data;
            this.setupPage();
        });
        this.statusDisplayService.updateUserEmitter
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["timeout"])(_assets_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"].HTTP_TIMEOUT))
            .subscribe((data) => {
            this.userName = data;
        });
        this.searchResultsCount = this.searchResults.length;
        this.pageCount = Math.ceil(this.searchResultsCount / this.pageLength);
        this.onPageLengthChange();
    }
    navigateToSampleEdit(sampleId) {
        console.log('test');
        this.router.navigate(['home/samples/sample', sampleId]); // @FIXME  Don't hard code these
    }
    navigateToSampleView(sampleId, sampleName) {
        this.router.navigate(['home/samples/view-sample', sampleId]); // @FIXME  Don't hard code these
    }
    addToFavorites(samp) {
        console.log('addToFavorites samp: ', samp);
        let favObj = { dataType: 'sample', loginName: this.userName }; // @FIXME User real user name
        favObj['dataName'] = samp['sampleName'];
        favObj['dataId'] = samp['sampleId'];
        favObj['description'] = samp['nanoEntityDesc'];
        favObj['editable'] = samp['editable'];
        favObj['loginName'] = _assets_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"].current_user;
        console.log('favObj:', favObj);
        this.apiService.doPost(_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].QUERY_ADD_FAVORITE, favObj).subscribe((data) => {
            samp['addedToFavorites'] = data;
            console.log(samp);
            // console.log('set Fave results: ', data);
        }, (err) => {
            console.log('ERROR QUERY_ADD_FAVORITE: ', err);
        });
    }
    onAvailabilityClick(id) {
        this.apiService
            .doGet(_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].QUERY_SAMPLE_AVAILABILITY, 'sampleId=' + id)
            .subscribe((data) => {
            this.sampleAvailabilityDisplayService.displayStuff(data);
        }, (err) => {
            console.log('ERROR QUERY_SAMPLE_AVAILABILITY: ', err);
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
    setupPage() {
        this.searchResultsPageToDisplay = this.searchResults.slice(this.pageLength * this.currentPage, this.pageLength * (this.currentPage + 1));
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
        this.setupPage(); // Sets this page as the currently vied search results.
    }
    onSortClick(i, key) {
        if (i) {
            if (this.sortingStates[i]) {
                // clicking on column that already is sorted on //
                this.sortingStates[i] = this.sortingStates[i] == 1 ? 2 : 1;
            }
            else {
                // reset sorting states //
                this.sortingStates.forEach((item, index) => {
                    this.sortingStates[index] = 0;
                });
                this.sortingStates[i] = 1;
            }
            console.log(this.sortingStates);
            if (this.sortingStates[i] == 1) {
                this.searchResults.sort((a, b) => (this.getStringValue(a[key]) > this.getStringValue(b[key]) ? 1 : -1));
            }
            else {
                this.searchResults.sort((a, b) => (this.getStringValue(a[key]) < this.getStringValue(b[key]) ? 1 : -1));
            }
            this.setupPage();
        }
    }
    getStringValue(val) {
        if (val) {
            return val.toString().toUpperCase();
        }
        return '';
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
SampleSearchResultsComponent.ɵfac = function SampleSearchResultsComponent_Factory(t) { return new (t || SampleSearchResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sample_search_results_service__WEBPACK_IMPORTED_MODULE_5__["SampleSearchResultsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_components_search_results_pager_search_results_pager_service__WEBPACK_IMPORTED_MODULE_6__["SearchResultsPagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_status_display_status_display_service__WEBPACK_IMPORTED_MODULE_7__["StatusDisplayService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_sample_availability_display_sample_availability_display_service__WEBPACK_IMPORTED_MODULE_10__["SampleAvailabilityDisplayService"])); };
SampleSearchResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SampleSearchResultsComponent, selectors: [["canano-sample-search-results"]], decls: 3, vars: 7, consts: [[3, "helpUrl", "toolHeadingName", "exportXML", "exportJSON", "sampleIds", "backUrl", "downloadReady"], ["class", "mainSection", 4, "ngIf"], [1, "mainSection"], [3, "loading", "message"], ["class", "mainBorder", 4, "ngIf"], [4, "ngIf"], [1, "mainBorder"], [1, "ml-2"], [1, "search-results-pager"], [1, "ml-5"], ["min", "1", "type", "number", 1, "number-spinner", "rows-per-page-spinner", 3, "max", "ngModel", "ngModelChange", "change"], [2, "float", "right", 3, "totalCount", "startingPageLength"], [1, "dataTable"], [4, "ngFor", "ngForOf"], ["class", "search-results-tr", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "unselectable hand", 3, "click", 4, "ngFor", "ngForOf"], [1, "unselectable", "hand", 3, "click"], ["for", "sortClick", 1, "hand"], ["id", "sortClick", "class", "inline", 4, "ngIf"], ["id", "sortClick", 1, "inline"], ["class", "sortImages", 4, "ngIf"], [1, "sortImages"], ["width", "10", "height", "10", "fill", "currentColor", 4, "ngIf"], ["width", "10", "height", "10", "fill", "currentColor"], [0, "xlink", "href", "assets/images/bootstrap-icons.svg#caret-up-fill"], [0, "xlink", "href", "assets/images/bootstrap-icons.svg#caret-down-fill"], [1, "search-results-tr", 3, "ngClass"], [1, "search-results-td"], [3, "click", 4, "ngIf"], [1, "sample-search-results-poc-td", 3, "innerHTML"], [1, "link-clicker", 3, "click"], [3, "click"]], template: function SampleSearchResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "canano-main-display-heading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("downloadReady", function SampleSearchResultsComponent_Template_canano_main_display_heading_downloadReady_0_listener($event) { return ctx.downloadReady($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canano-sample-availability-display");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SampleSearchResultsComponent_div_2_Template, 4, 4, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("helpUrl", ctx.helpUrl)("toolHeadingName", ctx.toolHeadingNameSearchSample)("exportXML", true)("exportJSON", true)("sampleIds", ctx.sampleIds)("backUrl", "home/samples/sample-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchResults);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SampleSearchResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'canano-sample-search-results',
                templateUrl: './sample-search-results.component.html',
                styleUrls: ['./sample-search-results.component.scss'],
            }]
    }], function () { return [{ type: _sample_search_results_service__WEBPACK_IMPORTED_MODULE_5__["SampleSearchResultsService"] }, { type: _common_components_search_results_pager_search_results_pager_service__WEBPACK_IMPORTED_MODULE_6__["SearchResultsPagerService"] }, { type: _status_display_status_display_service__WEBPACK_IMPORTED_MODULE_7__["StatusDisplayService"] }, { type: _common_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: _sample_availability_display_sample_availability_display_service__WEBPACK_IMPORTED_MODULE_10__["SampleAvailabilityDisplayService"] }]; }, null); })();


/***/ }),

/***/ "YM7B":
/*!************************************************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/general-info/sample-search/sample-search-results/sample-search-results-routing.module.ts ***!
  \************************************************************************************************************************************************/
/*! exports provided: SampleSearchResultsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleSearchResultsRoutingModule", function() { return SampleSearchResultsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sample_search_results_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sample-search-results.component */ "HJ02");





const routes = [{ path: '', component: _sample_search_results_component__WEBPACK_IMPORTED_MODULE_2__["SampleSearchResultsComponent"] }];
class SampleSearchResultsRoutingModule {
}
SampleSearchResultsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SampleSearchResultsRoutingModule });
SampleSearchResultsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SampleSearchResultsRoutingModule_Factory(t) { return new (t || SampleSearchResultsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SampleSearchResultsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SampleSearchResultsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "uXD2":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/general-info/sample-search/sample-search-results/sample-search-results.module.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: SampleSearchResultsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleSearchResultsModule", function() { return SampleSearchResultsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sample_search_results_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sample-search-results.component */ "HJ02");
/* harmony import */ var _sample_search_results_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample-search-results-routing.module */ "YM7B");
/* harmony import */ var _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../common/modules/set-object-value/shared.module */ "0U9J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class SampleSearchResultsModule {
}
SampleSearchResultsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SampleSearchResultsModule });
SampleSearchResultsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SampleSearchResultsModule_Factory(t) { return new (t || SampleSearchResultsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _sample_search_results_routing_module__WEBPACK_IMPORTED_MODULE_3__["SampleSearchResultsRoutingModule"],
            _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SampleSearchResultsModule, { declarations: [_sample_search_results_component__WEBPACK_IMPORTED_MODULE_2__["SampleSearchResultsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _sample_search_results_routing_module__WEBPACK_IMPORTED_MODULE_3__["SampleSearchResultsRoutingModule"],
        _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SampleSearchResultsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_sample_search_results_component__WEBPACK_IMPORTED_MODULE_2__["SampleSearchResultsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _sample_search_results_routing_module__WEBPACK_IMPORTED_MODULE_3__["SampleSearchResultsRoutingModule"],
                    _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=cananolab-client-main-display-samples-general-info-sample-search-sample-search-results-sample-search-results-module.js.map