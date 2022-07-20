(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cananolab-client-main-display-my-favorites-my-favorites-module"],{

/***/ "8glW":
/*!**************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/my-favorites/my-favorites.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MyFavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFavoritesComponent", function() { return MyFavoritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "l207");
/* harmony import */ var _common_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/api.service */ "WHDV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _protocols_protocols_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../protocols/protocols.service */ "zscP");
/* harmony import */ var src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/cananolab-client/main-display/main-display-heading/main-display-heading.component */ "AYD1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function MyFavoritesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errors["error"], " ");
} }
function MyFavoritesComponent_div_15_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " There are no samples in your favorites. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyFavoritesComponent_div_15_table_4_tr_8_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyFavoritesComponent_div_15_table_4_tr_8_div_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const fav_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r10.navigateToSampleEdit(fav_r7["dataId"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "rowOdd": a0 }; };
function MyFavoritesComponent_div_15_table_4_tr_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyFavoritesComponent_div_15_table_4_tr_8_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const fav_r7 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.navigateToSampleView(fav_r7["dataId"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MyFavoritesComponent_div_15_table_4_tr_8_div_5_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyFavoritesComponent_div_15_table_4_tr_8_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const fav_r7 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.deleteSampleFromFavorites(fav_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Delete from Favorites ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fav_r7 = ctx.$implicit;
    const odd_r8 = ctx.odd;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, odd_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", fav_r7.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fav_r7["dataName"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fav_r7["description"], " ");
} }
function MyFavoritesComponent_div_15_table_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Sample Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Nanomaterial Entity Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MyFavoritesComponent_div_15_table_4_tr_8_Template, 14, 6, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.favSamples);
} }
function MyFavoritesComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Samples");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MyFavoritesComponent_div_15_div_3_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyFavoritesComponent_div_15_table_4_Template, 9, 1, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.favSamples);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.favSamples);
} }
function MyFavoritesComponent_div_16_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " There are no protocols in your favorites. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyFavoritesComponent_div_16_table_5_tr_8_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyFavoritesComponent_div_16_table_5_tr_8_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const fav_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r22.navigateToProtocolEdit(fav_r19["dataId"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyFavoritesComponent_div_16_table_5_tr_8_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyFavoritesComponent_div_16_table_5_tr_8_div_2_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyFavoritesComponent_div_16_table_5_tr_8_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const fav_r19 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r25.deleteProtocolFromFavorites(fav_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Delete from Favorites ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fav_r19 = ctx.$implicit;
    const odd_r20 = ctx.odd;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, odd_r20));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", fav_r19.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fav_r19["dataName"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fav_r19["protocolFileTitle"], " ");
} }
function MyFavoritesComponent_div_16_table_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Protocol Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Protocol File Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MyFavoritesComponent_div_16_table_5_tr_8_Template, 11, 6, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r17.favProtocols);
} }
function MyFavoritesComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Protocols");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyFavoritesComponent_div_16_div_4_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MyFavoritesComponent_div_16_table_5_Template, 9, 1, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.favProtocols);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.favProtocols);
} }
function MyFavoritesComponent_div_17_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " There are no publications in your favorites. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyFavoritesComponent_div_17_table_5_tr_6_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyFavoritesComponent_div_17_table_5_tr_6_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const fav_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r33.navigateToPublicationEdit(fav_r30["dataId"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyFavoritesComponent_div_17_table_5_tr_6_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyFavoritesComponent_div_17_table_5_tr_6_div_2_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyFavoritesComponent_div_17_table_5_tr_6_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const fav_r30 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r36.deletePublicationFromFavorites(fav_r30); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Delete from Favorites ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const fav_r30 = ctx.$implicit;
    const odd_r31 = ctx.odd;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, odd_r31));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", fav_r30.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", fav_r30["dataName"], " ");
} }
function MyFavoritesComponent_div_17_table_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Publication Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MyFavoritesComponent_div_17_table_5_tr_6_Template, 9, 5, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r28.favPublications);
} }
function MyFavoritesComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Publications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyFavoritesComponent_div_17_div_4_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MyFavoritesComponent_div_17_table_5_Template, 7, 1, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.favPublications);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.favPublications);
} }
class MyFavoritesComponent {
    constructor(apiService, router, protocolsService) {
        this.apiService = apiService;
        this.router = router;
        this.protocolsService = protocolsService;
        this.errors = {};
        this.helpUrl = _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].HELP_URL_FAVORITE;
        this.toolHeadingNameSearchSample = 'My Favorites';
        this.showSampleFavs = true;
        this.showProtocolsFavs = true;
        this.showPublicationsFavs = true;
        this.favSamples = [];
        this.favProtocols = [];
        this.favPublications = [];
        this.protocolScreen = _constants__WEBPACK_IMPORTED_MODULE_1__["ProtocolScreen"];
        this.protocolScreenToShow = _constants__WEBPACK_IMPORTED_MODULE_1__["ProtocolScreen"].PROTOCOL_SEARCH_INPUT_SCREEN;
    }
    ngOnInit() {
        this.apiService.doGet(_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].QUERY_GET_FAVORITE, '').subscribe(data => {
            this.errors = {};
            this.favSamples = data['samples'];
            this.favProtocols = data['protocols'];
            this.favPublications = data['publications'];
        }, (err) => {
            this.errors = err;
            console.error('ERROR QUERY_GET_FAVORITE: ', err);
        });
    }
    deleteProtocolFromFavorites(favToDelete) {
        this.apiService.doPost(_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].QUERY_DELETE_FAVORITE, favToDelete).subscribe(data => {
            this.errors = {};
            this.favSamples = data['samples'];
            this.favProtocols = data['protocols'];
            this.favPublications = data['publications'];
        }, err => {
            this.errors = err;
            console.log('ERROR deleteSampleFromFavorites: ', err);
        });
    }
    deletePublicationFromFavorites(favToDelete) {
        this.apiService.doPost(_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].QUERY_DELETE_FAVORITE, favToDelete).subscribe(data => {
            this.errors = {};
            this.favSamples = data['samples'];
            this.favProtocols = data['protocols'];
            this.favPublications = data['publications'];
        }, err => {
            this.errors = err;
            console.error('ERROR deleteSampleFromFavorites: ', err);
        });
    }
    deleteSampleFromFavorites(favToDelete) {
        this.apiService.doPost(_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].QUERY_DELETE_FAVORITE, favToDelete).subscribe(data => {
            this.errors = {};
            this.favSamples = data['samples'];
            this.favProtocols = data['protocols'];
            this.favPublications = data['publications'];
        }, err => {
            this.errors = err;
            console.log('ERROR deleteSampleFromFavorites: ', err);
        });
    }
    navigateToSampleEdit(sampleId) {
        this.router.navigate(['home/samples/sample', sampleId]); // @FIXME  Don't hard code these
    }
    navigateToSampleView(sampleId) {
        this.router.navigate(['home/samples/view-sample', sampleId]); // @FIXME  Don't hard code these
    }
    navigateToProtocolEdit(protocolId) {
        this.protocolsService.setCurrentProtocolScreen(_constants__WEBPACK_IMPORTED_MODULE_1__["ProtocolScreen"].PROTOCOL_EDIT_SCREEN, protocolId);
        this.router.navigate(['home/protocols/edit-protocol', protocolId]); // @FIXME  Don't hard code these
    }
    navigateToPublicationEdit(publicationId) {
        this.router.navigate(['home/samples/publications/publication', publicationId]); // @FIXME  Don't hard code these
    }
}
MyFavoritesComponent.ɵfac = function MyFavoritesComponent_Factory(t) { return new (t || MyFavoritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_protocols_protocols_service__WEBPACK_IMPORTED_MODULE_4__["ProtocolsService"])); };
MyFavoritesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyFavoritesComponent, selectors: [["canano-my-favorites"]], decls: 18, vars: 9, consts: [[3, "helpUrl", "toolHeadingName"], [1, "mainSection"], ["class", "error", 4, "ngIf"], [1, "mainBorder"], ["id", "showSampleFavsCheckbox", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["for", "showSampleFavsCheckbox", 1, "right"], ["id", "showProtocolsFavsCheckbox", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["for", "showProtocolsFavsCheckbox", 1, "right"], ["id", "showPublicationsFavsCheckbox", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["for", "showPublicationsFavsCheckbox", 1, "right"], [4, "ngIf"], [1, "error"], ["class", "dataTable", 4, "ngIf"], [1, "dataTable"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "actions"], [3, "click"], ["src", "assets/images/trash_caNanoLab.png", "alt", "trash_icon", 2, "width", "10px"], [1, "actions", "favorites"]], template: function MyFavoritesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canano-main-display-heading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyFavoritesComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyFavoritesComponent_Template_input_ngModelChange_5_listener($event) { return ctx.showSampleFavs = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Samples ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyFavoritesComponent_Template_input_ngModelChange_8_listener($event) { return ctx.showProtocolsFavs = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Protocols ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyFavoritesComponent_Template_input_ngModelChange_11_listener($event) { return ctx.showPublicationsFavs = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Publications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MyFavoritesComponent_div_15_Template, 5, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MyFavoritesComponent_div_16_Template, 6, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MyFavoritesComponent_div_17_Template, 6, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("helpUrl", ctx.helpUrl)("toolHeadingName", ctx.toolHeadingNameSearchSample);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors["error"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.showSampleFavs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.showProtocolsFavs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.showPublicationsFavs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSampleFavs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showProtocolsFavs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPublicationsFavs);
    } }, directives: [src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_5__["MainDisplayHeadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["html[_ngcontent-%COMP%] {\n  font-family: arial, helvetica, verdana, sans-serif !important;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: arial, helvetica, verdana, sans-serif !important;\n}\n\n.header[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\ntd.leftMenu[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  width: 160px;\n  margin: 0px;\n  padding: 0px;\n  vertical-align: top;\n}\n\ntd.mainContent[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding: 0px;\n  margin: 0px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  border: solid #88BCE2;\n  border-width: 1px 1px 1px 0px;\n}\n\n.parent-div[_ngcontent-%COMP%] {\n  \n  display: flex;\n  flex-direction: row;\n  background-color: #fff;\n  width: 100%;\n}\n\n.link-clicker[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n.link-clicker[_ngcontent-%COMP%]:hover {\n  color: #a90101;\n  cursor: pointer;\n}\n\n\n\na[_ngcontent-%COMP%]:link {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n\n\na[_ngcontent-%COMP%]:visited {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n\n\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #a90101;\n}\n\n\n\na[_ngcontent-%COMP%]:active {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.unselectable[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  text-transform: uppercase;\n}\n\n.hand[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.clicker[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.search-results-table[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 100%;\n  border: solid #ccc 1px;\n}\n\n.search-results-tr[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: solid #ccc 1px;\n}\n\n.search-results-th[_ngcontent-%COMP%] {\n  padding: 6px;\n  border: solid #ccc 1px;\n  background-color: #0073b9;\n  color: #fff;\n}\n\n.search-results-td[_ngcontent-%COMP%] {\n  padding: 6px;\n  border-left: solid #ccc 1px;\n  border-right: solid #ccc 1px;\n}\n\n.rowOdd[_ngcontent-%COMP%] {\n  background-color: #efeded;\n}\n\n.search-results--tr-odd[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-width: 0px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  padding-left: 160px;\n  text-align: center;\n}\n\n.spacer.center[_ngcontent-%COMP%] {\n  color: #02055a;\n}\n\n.footer[_ngcontent-%COMP%] {\n  padding: 0px 0px 0px 160px;\n  vertical-align: middle !important;\n  text-align: center;\n  background-color: #02055a;\n  border: solid #88BCE2;\n  border-width: 1px 1px 1px 0px;\n  font-size: 12px;\n}\n\n.footer.white[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 0px;\n  padding: 10px 0px 0px 0px;\n  font-size: 9.5px;\n  color: #333;\n}\n\n.footer.white[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.footer.white[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline !important;\n  color: #333;\n}\n\n.footer.white.release[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  font-weight: normal !important;\n  color: #4A49A8;\n}\n\n.footer.white[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  padding: 0px 10px 0px 10px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  vertical-align: middle;\n  list-style: none;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  display: inline-block;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  color: #81FFFE;\n  border: solid #88BCE2;\n  border-width: 0px 1px 0px 0px;\n  padding: 4px 15px 4px 15px;\n  margin: 0px;\n  vertical-align: top;\n  text-transform: uppercase;\n  font-weight: bold;\n  outline: 0;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item.left[_ngcontent-%COMP%] {\n  border: solid #88BCE2;\n  border-width: 0px 1px 0px 1px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item[_ngcontent-%COMP%]:hover {\n  background-color: #81FFFE;\n  color: #02055a;\n  margin: 0px;\n  vertical-align: top;\n}\n\n.rowOdd[_ngcontent-%COMP%] {\n  background-color: #efeded;\n}\n\ntable.dataTable[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #ccc;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  font-weight: bold;\n  padding: 3px 3px 3px 5px;\n  border: 1px solid #ccc;\n  text-transform: capitalize;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n  width: 250px;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%] {\n  width: 110px !important;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0px 4px 0px 0px;\n}\n\n.actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0px 4px 0px 0px;\n}\n\n.myFilters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.outer-input-frame[_ngcontent-%COMP%] {\n  border: solid #d4d4d4 2px;\n}\n\n.mainSection[_ngcontent-%COMP%] {\n  margin: 10px 0px 5px 7px;\n  padding: 0px;\n  font-size: 12px;\n  min-width: 1150px !important;\n}\n\n.mainBorder[_ngcontent-%COMP%] {\n  padding: 15px 15px 15px 15px;\n  border: 1px solid #ccc;\n  margin: 0px 0px 0px 2px;\n  width: 100%;\n}\n\n.mainBorder.loading[_ngcontent-%COMP%] {\n  background-color: #005d7e !important;\n  color: #fff;\n  padding: 15px !important;\n  margin-bottom: 15px;\n}\n\n.dataMain[_ngcontent-%COMP%] {\n  margin: 5px;\n  width: 90%;\n}\n\n.dataMain[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  width: 200px;\n  padding: 10px;\n  font-weight: bold;\n  vertical-align: top;\n}\n\n.dataMain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  vertical-align: top;\n}\n\n.dataMain[_ngcontent-%COMP%]   td.buttons[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.links-panel[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.links-panel.card.ml-1.mt-2[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n}\n\n.create-search-button-group[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.create-delete-button-group[_ngcontent-%COMP%] {\n  float: left;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-right: 5px !important;\n}\n\n.searchForm[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.searchForm[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding: 5px 10px 5px 0px;\n}\n\n.searchForm[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding-right: 20px;\n  width: 150px;\n}\n\n.searchForm[_ngcontent-%COMP%]   select.multiple[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.searchForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n\n.searchForm[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\n.submit[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.submit[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  margin: 10px;\n  text-align: right;\n}\n\n.buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #4A49A8;\n  text-align: center;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n  margin: 5px;\n  font-size: 14px !important;\n}\n\n.mainSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #00f !important;\n  text-decoration: underline !important;\n}\n\n.mainSection[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-bottom: 13px !important;\n  font-size: 12px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .blueHeader[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #0073b9;\n  color: #fff;\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: #005518;\n  color: #fff;\n  padding: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .editButton[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  text-align: right;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain.files[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 200px;\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties.files[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  width: 100%;\n  margin-bottom: 5px;\n}\n\n.experimentConfigurations[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  width: 300px;\n}\n\nul[_ngcontent-%COMP%] {\n  padding-left: 13px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%] {\n  min-width: 650px;\n}\n\n.files[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\nlabel.right[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%] {\n  width: 210px !important;\n  max-width: 210px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NhbmFub2xhYi1jbGllbnQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9teS1mYXZvcml0ZXMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9tYWluLWRpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJBO0VBQ0ksNkRBRm9CO0FDZHhCOztBRG1CQTtFQUNJLDZEQU5vQjtBQ1Z4Qjs7QURrQkE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ2ZEOztBRG9CQTtFQUVJLHlCQTdCcUI7RUE4QnJCLFlBM0JZO0VBNEJmLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNsQkQ7O0FEcUJBO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ25CSjs7QURzQkE7RUFFSSx5QkE3Q3FCO0VBOENyQixxQkFBQTtFQUNBLDZCQUFBO0FDcEJKOztBRHVCQTtFQUNJLGtFQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDcEJKOztBRHdCQTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUNyQko7O0FEdUJJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNyQlI7O0FEeUJBLG1CQUFBOztBQUNBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ3RCSjs7QUR5QkEsaUJBQUE7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FDdEJKOztBRHlCQSxvQkFBQTs7QUFDQTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUN0Qko7O0FEeUJBLGtCQUFBOztBQUNBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ3RCSjs7QUR5QkE7RUFDSSxhQUFBO0FDdEJKOztBRHlCQTtFQUNJLDJCQUFBO0VBQ0EseUJBQUE7RUFJQSxpQkFBQTtFQUNBLHlCQUFBO0FDdEJKOztBRHlCQTtFQUNJ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QURnUko7O0FDN1FBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QURnUko7O0FDNVFBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBRCtRSjs7QUM1UUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBRCtRSjs7QUMzUUE7RUFDSSxnQkFBQTtBRDhRSjs7QUMzUUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7QUQ4UUo7O0FDM1FBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUQ4UUo7O0FDMVFBO0VBQ0ksaUJBQUE7QUQ2UUo7O0FBOWZBO0VBQ0MsdUJBQUE7RUFDRywyQkFBQTtBQWlnQkoiLCJmaWxlIjoibXktZmF2b3JpdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiRjYW5hbm8tZ3JlZW46ICMwMDU1MTg7XG4kY2FuYW5vLWJsdWU6ICMwMDczYjk7XG4kY2FuYW5vLWJhY2tncm91bmQtYmx1ZTogIzAyMDU1YTtcbiRtZW51SGVhZGluZ0JhY2tncm91bmRDb2xvcjogIzAwNWQ3ZTtcbiRsZWZ0TWVudUJvcmRlckNvbG9yOiM4OEJDRTI7XG4kbGVmdE1lbnVXaWR0aDogMTYwcHg7XG4kbGVmdE1lbnVNYXJnaW46IDBweDtcbiRuYXZCdXR0b25Db2xvcjojODFGRkZFO1xuJGJvcmRlckNvbG9yOiAkbGVmdE1lbnVCb3JkZXJDb2xvcjtcbiRtYWluRm9udFNpemU6MTJweDtcbiRrZXl3b3JkU2VhcmNoRm9udFNpemU6IDEycHg7XG4kb2RkUm93Q29sb3I6I2VmZWRlZDtcbiRtYWluRGlzcGxheUhlYWRpbmdIZWlnaHQ6IDI4cHg7XG4kbWFpbkRpc3BsYXlIZWFkaW5nTWFyZ2luOiA4cHg7XG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjphcmlhbCxoZWx2ZXRpY2EsdmVyZGFuYSxzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG5odG1sIHtcbiAgICBmb250LWZhbWlseTokZm9udC1mYW1pbHktc2Fucy1zZXJpZjtcblxufVxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6JGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY7XG59XG4uaGVhZGVyIHtcblx0bWFyZ2luOjBweDtcblx0cGFkZGluZzowcHg7XG59XG4uaG9tZSB7XG59XG5cbnRkLmxlZnRNZW51IHtcbiAgICBAZXh0ZW5kIC5ob21lO1xuICAgIGJhY2tncm91bmQtY29sb3I6JGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU7XG4gICAgd2lkdGg6JGxlZnRNZW51V2lkdGg7XG5cdG1hcmdpbjowcHg7XG5cdHBhZGRpbmc6MHB4O1xuXHR2ZXJ0aWNhbC1hbGlnbjp0b3A7XG59XG5cbnRkLm1haW5Db250ZW50IHtcbiAgICBAZXh0ZW5kIC5ob21lO1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbiAgICBwYWRkaW5nOjBweDtcbiAgICBtYXJnaW46MHB4O1xufVxuXG4uZm9vdGVyIHtcbiAgICBAZXh0ZW5kIC5ob21lO1xuICAgIGJhY2tncm91bmQtY29sb3I6JGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU7XG4gICAgYm9yZGVyOnNvbGlkICRsZWZ0TWVudUJvcmRlckNvbG9yO1xuICAgIGJvcmRlci13aWR0aDoxcHggMXB4IDFweCAwcHg7XG59XG5cbi5wYXJlbnQtZGl2e1xuICAgIC8qIGtlZXAgdGhlIFF1ZXJ5IHNlY3Rpb24gYW5kIHRoZSBEaXNwbGF5IHNlY3Rpb24gc2lkZSBieSBzaWRlLiAgKi9cbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi8vIEBGSVhNRSAtIFRoZXNlIGNvbG9ycyBuZWVkIHZhcmlhYmxlc1xuLmxpbmstY2xpY2tlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICMzMzM7XG5cbiAgICAmOmhvdmVye1xuICAgICAgICBjb2xvcjogI2E5MDEwMTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuLyogdW52aXNpdGVkIGxpbmsgKi9cbmE6bGlua3tcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi8qIHZpc2l0ZWQgbGluayAqL1xuYTp2aXNpdGVke1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogIzMzMztcbn1cblxuLyogbW91c2Ugb3ZlciBsaW5rICovXG5hOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogI2E5MDEwMTtcbn1cblxuLyogc2VsZWN0ZWQgbGluayAqL1xuYTphY3RpdmV7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4uaGlkZXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4udW5zZWxlY3RhYmxle1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaGFuZCB7XG4gICAgY3Vyc29yOnBvaW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmNsaWNrZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi5zZWFyY2gtcmVzdWx0cy10YWJsZXtcbiAgICBmb250LXNpemU6ICRtYWluRm9udFNpemU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBzb2xpZCAjY2NjIDFweDtcbn1cblxuLnNlYXJjaC1yZXN1bHRzLXRye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBzb2xpZCAjY2NjIDFweDtcbn1cblxuLnNlYXJjaC1yZXN1bHRzLXRoe1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICAvLyAgYm9yZGVyOiBzb2xpZCAjZGZkZmRmIDJweDtcbiAgICBib3JkZXI6IHNvbGlkICNjY2MgMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjYW5hbm8tYmx1ZTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLnNlYXJjaC1yZXN1bHRzLXRke1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICAvLyBib3JkZXI6IHNvbGlkICNkZmRmZGYgMnB4O1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAjY2NjIDFweDtcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkICNjY2MgMXB4O1xufVxuXG4ucm93T2Rke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRvZGRSb3dDb2xvcjtcbn1cblxuLnNlYXJjaC1yZXN1bHRzLS10ci1vZGR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuaW1nIHtcblx0Ym9yZGVyLXdpZHRoOjBweDtcblx0bWFyZ2luOjBweDtcblx0cGFkZGluZzowcHg7XG5cbn1cblxuLnNwYWNlciB7XG4gICAgcGFkZGluZy1sZWZ0OiRsZWZ0TWVudVdpZHRoO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG4uc3BhY2VyLmNlbnRlciB7XG4gICAgY29sb3I6JGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU7XG59XG5cblxuLmZvb3RlciB7XG5cdHBhZGRpbmc6MHB4IDBweCAwcHggMTYwcHg7XG5cdHZlcnRpY2FsLWFsaWduOm1pZGRsZSAhaW1wb3J0YW50O1xuXHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0YmFja2dyb3VuZC1jb2xvcjokY2FuYW5vLWJhY2tncm91bmQtYmx1ZTtcbiAgICBib3JkZXI6c29saWQgJGxlZnRNZW51Qm9yZGVyQ29sb3I7XG4gICAgYm9yZGVyLXdpZHRoOjFweCAxcHggMXB4IDBweDtcbiAgICBmb250LXNpemU6JG1haW5Gb250U2l6ZTtcbn07XG5cblxuLmZvb3Rlci53aGl0ZXtcblx0YmFja2dyb3VuZC1jb2xvcjojZmZmO1xuXHRib3JkZXI6MHB4O1xuXHRwYWRkaW5nOjEwcHggMHB4IDBweCAwcHg7XG5cdGZvbnQtc2l6ZTo5LjVweDtcbiAgICBjb2xvcjojMzMzO1xufTtcblxuLmZvb3Rlci53aGl0ZSBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZSAhaW1wb3J0YW50O1xufTtcblxuLmZvb3Rlci53aGl0ZSBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IzMzMztcbn1cblxuLmZvb3Rlci53aGl0ZS5yZWxlYXNlIHtcbiAgICBmb250LXNpemU6MTJweCAhaW1wb3J0YW50O1xuXHRmb250LXdlaWdodDpub3JtYWwgIWltcG9ydGFudDtcblx0Y29sb3I6IzRBNDlBODtcbn1cblxuLmZvb3Rlci53aGl0ZSAuZGl2aWRlciB7XG5cdHBhZGRpbmc6MHB4IDEwcHggMHB4IDEwcHg7XG59O1xuXG4uZm9vdGVyIHVsIHtcbiAgICBtYXJnaW46MHB4O1xuICAgIHBhZGRpbmc6MHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbiAgICBsaXN0LXN0eWxlOm5vbmU7XG59O1xuXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIHtcbiAgICBwYWRkaW5nOjBweDtcbiAgICBtYXJnaW46MHB4O1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xufVxuXG5cbi5mb290ZXIgdWwgbGkuZm9vdGVyLWl0ZW0gLm5hdi1saW5rLm5hdi1tZW51LXRvcC1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlO1xuICAgIGNvbG9yOiRuYXZCdXR0b25Db2xvcjtcbiAgICBib3JkZXI6IHNvbGlkICRsZWZ0TWVudUJvcmRlckNvbG9yO1xuICAgIGJvcmRlci13aWR0aDowcHggMXB4IDBweCAwcHg7XG4gICAgcGFkZGluZzo0cHggMTVweCA0cHggMTVweDtcbiAgICBtYXJnaW46MHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcblx0dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xuXHRmb250LXdlaWdodDpib2xkO1xuXHRvdXRsaW5lOjA7XG59XG5cbi5mb290ZXIgdWwgbGkuZm9vdGVyLWl0ZW0gLm5hdi1saW5rLm5hdi1tZW51LXRvcC1pdGVtLmxlZnR7XG4gICAgYm9yZGVyOiBzb2xpZCAkbGVmdE1lbnVCb3JkZXJDb2xvcjtcbiAgICBib3JkZXItd2lkdGg6MHB4IDFweCAwcHggMXB4O1xufVxuXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIC5uYXYtbGluay5uYXYtbWVudS10b3AtaXRlbTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRuYXZCdXR0b25Db2xvcjtcbiAgICBjb2xvcjokY2FuYW5vLWJhY2tncm91bmQtYmx1ZTtcbiAgICBtYXJnaW46MHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbn1cblxuLnJvd09kZCB7XG5cdGJhY2tncm91bmQtY29sb3I6JG9kZFJvd0NvbG9yO1xufVxuXG50YWJsZS5kYXRhVGFibGV7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuXG59XG5cbnRhYmxlLmRhdGFUYWJsZSB0aHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3M2I5O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6M3B4IDNweCAzcHggNXB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRke1xuXHRwYWRkaW5nOjVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuXHR3aWR0aDoyNTBweDtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRkLmFjdGlvbnMgIHtcblx0d2lkdGg6MTEwcHggIWltcG9ydGFudDtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRkLmFjdGlvbnMgZGl2IHtcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdG1hcmdpbjowcHggNHB4IDBweCAwcHg7XG59XG5cbi5hY3Rpb25zIGRpdiB7XG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHRtYXJnaW46MHB4IDRweCAwcHggMHB4O1xufVxuXG4ubXlGaWx0ZXJzIGxhYmVsIHtcbiAgICBtYXJnaW4tbGVmdDo1cHg7XG59XG4iLCJAaW1wb3J0ICcuLi9tYWluLWRpc3BsYXkuY29tcG9uZW50LnNjc3MnO1xuXG50YWJsZS5kYXRhVGFibGUgdGQuYWN0aW9ucyB7XG5cdHdpZHRoOjIxMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOjIxMHB4ICFpbXBvcnRhbnQ7XG59XG4iLCJAaW1wb3J0ICcuLi9jYW5hbm9sYWItY2xpZW50LmNvbXBvbmVudC5zY3NzJztcblxuLm91dGVyLWlucHV0LWZyYW1le1xuICAgIGJvcmRlcjogc29saWQgI2Q0ZDRkNCAycHg7XG59XG4ubWFpblNlY3Rpb24ge1xuICAgIG1hcmdpbjoxMHB4IDBweCA1cHggN3B4O1xuICAgIHBhZGRpbmc6MHB4O1xuICAgIGZvbnQtc2l6ZTokbWFpbkZvbnRTaXplO1xuICAgIG1pbi13aWR0aDoxMTUwcHggIWltcG9ydGFudDtcblxufVxuLm1haW5Cb3JkZXIge1xuICAgIHBhZGRpbmc6MTVweCAxNXB4IDE1cHggMTVweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgbWFyZ2luOjBweCAwcHggMHB4IDJweDtcbiAgICB3aWR0aDogMTAwJTtcblxufVxuXG4ubWFpbkJvcmRlci5sb2FkaW5nIHtcblx0YmFja2dyb3VuZC1jb2xvcjokbWVudUhlYWRpbmdCYWNrZ3JvdW5kQ29sb3IgIWltcG9ydGFudDtcblx0Y29sb3I6I2ZmZjtcblx0cGFkZGluZzoxNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbToxNXB4O1xufVxuXG4uZGF0YU1haW4gIHtcbiAgICBtYXJnaW46NXB4O1xuICAgIHdpZHRoOjkwJTtcbn1cblxuLmRhdGFNYWluIHRkLmxhYmVsIHtcbiAgICB3aWR0aDoyMDBweDtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG59XG4uZGF0YU1haW4gdGQge1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG59XG5cbi5kYXRhTWFpbiB0ZC5idXR0b25zIHtcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xufVxuXG5cbi5saW5rcy1wYW5lbHtcbiAgICB3aWR0aDogNTAwcHg7ICAvLyBARklYTUUgLSBtYWtlIGEgY29uc3Rcbn1cblxuLmxpbmtzLXBhbmVsLmNhcmQubWwtMS5tdC0yIHtcblx0bWFyZ2luLWxlZnQ6MHB4ICFpbXBvcnRhbnRcbn1cblxuLmNyZWF0ZS1zZWFyY2gtYnV0dG9uLWdyb3Vwe1xuICAgIGZsb2F0OiByaWdodDtcbn1cbi5jcmVhdGUtZGVsZXRlLWJ1dHRvbi1ncm91cHtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxubGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgbWFyZ2luLXJpZ2h0OjVweCAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoRm9ybSB7XG4gICAgbWFyZ2luOjVweDtcbn1cblxuLnNlYXJjaEZvcm0gdGR7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIHBhZGRpbmc6NXB4IDEwcHggNXB4IDBweDtcbn1cblxuLnNlYXJjaEZvcm0gdGQubGFiZWx7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcbiAgICB3aWR0aDoxNTBweDtcbn1cblxuLnNlYXJjaEZvcm0gc2VsZWN0Lm11bHRpcGxlIHtcbiAgICB3aWR0aDoxNTBweDtcbn1cblxuLnNlYXJjaEZvcm0gc2VsZWN0IHtcbiAgICBtYXJnaW4tcmlnaHQ6NHB4O1xufVxuXG4uc2VhcmNoRm9ybSBzcGFuLmxhYmVsIHtcbiAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XG59XG5cbi5zdWJtaXQge1xuICAgIHdpZHRoOjEwMCU7XG59XG5cbi5zdWJtaXQgdGQ6bGFzdC1jaGlsZCB7XG4gICAgdGV4dC1hbGlnbjpyaWdodDtcbn1cblxuLmJ1dHRvbnMge1xuICAgIG1hcmdpbjoxMHB4O1xuICAgIHRleHQtYWxpZ246cmlnaHQ7XG59XG5cbi5idXR0b25zIGRpdiB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiM0QTQ5QTg7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbi5lcnJvciB7XG4gICAgY29sb3I6cmVkO1xuICAgIG1hcmdpbjo1cHg7XG4gICAgZm9udC1zaXplOjE0cHggIWltcG9ydGFudDtcbn1cblxuLm1haW5TZWN0aW9uIGEge1xuICAgIGNvbG9yOiMwMGYgIWltcG9ydGFudDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xufVxuXG4ubWFpblNlY3Rpb24gdGQge1xuICAgIHBhZGRpbmctYm90dG9tOjEzcHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6JG1haW5Gb250U2l6ZTtcblxufVxuLm1haW5TZWN0aW9uIC5ibHVlSGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzoxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDczYjk7XG4gICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ubWFpblNlY3Rpb24gLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA1NTE4O1xuICAgIGNvbG9yOiNmZmY7XG4gICAgcGFkZGluZzoxMHB4O1xufVxuXG4gICAgLm1haW5TZWN0aW9uIC5oZWFkZXIgLmJ0biB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OjEwcHg7XG4gICAgfVxuXG4ubWFpblNlY3Rpb24gLmVkaXRCdXR0b257XG4gICAgcGFkZGluZy10b3A6NXB4O1xuICAgIHRleHQtYWxpZ246cmlnaHQ7XG59XG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4uZmlsZXN7XG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xufVxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIHRke1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbn1cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllc3tcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllcyB0aHtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgd2lkdGg6MTUwcHg7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcbn1cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiB0ZC5sYWJlbHtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIHdpZHRoOjIwMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbn1cblxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIC5wcm9wZXJ0aWVzIHRke1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICB3aWR0aDoxNTBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgcGFkZGluZy1yaWdodDoyMHB4O1xufVxuXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXMuZmlsZXN7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTo1cHg7XG59XG5cbi5leHBlcmltZW50Q29uZmlndXJhdGlvbnMgdGQge1xuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcbiAgICB3aWR0aDozMDBweDtcbn1cbiB1bCB7XG4gICBwYWRkaW5nLWxlZnQ6MTNweDtcbn1cblxuXG4uZGF0YUFuZENvbmRpdGlvbnMgdGR7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIHdpZHRoOjIwMHB4O1xufVxuXG4uZGF0YUFuZENvbmRpdGlvbnMgdGh7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA3M2I5O1xuICAgIGNvbG9yOiNmZmY7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIGJvcmRlcjoxcHggIHNvbGlkICNjY2M7XG5cbn1cblxuLnByb3BlcnRpZXMgdGR7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIHdpZHRoOjIwMHB4O1xufVxuXG4ucHJvcGVydGllcyB0aHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDczYjk7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBwYWRkaW5nOjVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgYm9yZGVyOjFweCAgc29saWQgI2NjYztcblxufVxuXG4uZmlsZXMge1xuICAgIG1pbi13aWR0aDo2NTBweDtcbn1cblxuLmZpbGVzIHRke1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbn1cblxuLmZpbGVzIHRoe1xuICAgIGJhY2tncm91bmQtY29sb3I6IzAwNzNiOTtcbiAgICBjb2xvcjojZmZmO1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbiAgICBib3JkZXI6MXB4ICBzb2xpZCAjY2NjO1xuXG59XG5cbmxhYmVsLnJpZ2h0IHtcbiAgICBwYWRkaW5nLWxlZnQ6NXB4O1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyFavoritesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'canano-my-favorites',
                templateUrl: './my-favorites.component.html',
                styleUrls: ['./my-favorites.component.scss']
            }]
    }], function () { return [{ type: _common_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _protocols_protocols_service__WEBPACK_IMPORTED_MODULE_4__["ProtocolsService"] }]; }, null); })();


/***/ }),

/***/ "q3J9":
/*!*******************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/my-favorites/my-favorites-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: MyFavoritesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFavoritesRoutingModule", function() { return MyFavoritesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_favorites_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-favorites.component */ "8glW");





const routes = [{ path: '', component: _my_favorites_component__WEBPACK_IMPORTED_MODULE_2__["MyFavoritesComponent"] }];
class MyFavoritesRoutingModule {
}
MyFavoritesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MyFavoritesRoutingModule });
MyFavoritesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MyFavoritesRoutingModule_Factory(t) { return new (t || MyFavoritesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyFavoritesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyFavoritesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "yBTy":
/*!***********************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/my-favorites/my-favorites.module.ts ***!
  \***********************************************************************************/
/*! exports provided: MyFavoritesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFavoritesModule", function() { return MyFavoritesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _my_favorites_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-favorites.component */ "8glW");
/* harmony import */ var _my_favorites_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-favorites-routing.module */ "q3J9");
/* harmony import */ var _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/modules/set-object-value/shared.module */ "0U9J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class MyFavoritesModule {
}
MyFavoritesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MyFavoritesModule });
MyFavoritesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MyFavoritesModule_Factory(t) { return new (t || MyFavoritesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _my_favorites_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyFavoritesRoutingModule"],
            _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyFavoritesModule, { declarations: [_my_favorites_component__WEBPACK_IMPORTED_MODULE_2__["MyFavoritesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _my_favorites_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyFavoritesRoutingModule"],
        _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyFavoritesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_my_favorites_component__WEBPACK_IMPORTED_MODULE_2__["MyFavoritesComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _my_favorites_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyFavoritesRoutingModule"],
                    _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=cananolab-client-main-display-my-favorites-my-favorites-module.js.map