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
    } }, directives: [src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_5__["MainDisplayHeadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["html[_ngcontent-%COMP%] {\n  font-family: arial, helvetica, verdana, sans-serif !important;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: arial, helvetica, verdana, sans-serif !important;\n}\n\n.header[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\ntd.leftMenu[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  width: 160px;\n  margin: 0px;\n  padding: 0px;\n  vertical-align: top;\n}\n\ntd.mainContent[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding: 0px;\n  margin: 0px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  border: solid #88BCE2;\n  border-width: 1px 1px 1px 0px;\n}\n\n.parent-div[_ngcontent-%COMP%] {\n  \n  display: flex;\n  flex-direction: row;\n  background-color: #fff;\n  width: 100%;\n}\n\n.link-clicker[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n.link-clicker[_ngcontent-%COMP%]:hover {\n  color: #a90101;\n  cursor: pointer;\n}\n\n\n\na[_ngcontent-%COMP%]:link {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n\n\na[_ngcontent-%COMP%]:visited {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n\n\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #a90101;\n}\n\n\n\na[_ngcontent-%COMP%]:active {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.unselectable[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  text-transform: uppercase;\n}\n\n.hand[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.clicker[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.search-results-table[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 100%;\n  border: solid #ccc 1px;\n}\n\n.search-results-tr[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: solid #ccc 1px;\n}\n\n.search-results-th[_ngcontent-%COMP%] {\n  padding: 6px;\n  border: solid #ccc 1px;\n  background-color: #0073b9;\n  color: #fff;\n}\n\n.search-results-td[_ngcontent-%COMP%] {\n  padding: 6px;\n  border-left: solid #ccc 1px;\n  border-right: solid #ccc 1px;\n}\n\n.rowOdd[_ngcontent-%COMP%] {\n  background-color: #efeded;\n}\n\n.search-results--tr-odd[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-width: 0px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  padding-left: 160px;\n  text-align: center;\n}\n\n.spacer.center[_ngcontent-%COMP%] {\n  color: #02055a;\n}\n\n.footer[_ngcontent-%COMP%] {\n  padding: 0px 0px 0px 160px;\n  vertical-align: middle !important;\n  text-align: center;\n  background-color: #02055a;\n  border: solid #88BCE2;\n  border-width: 1px 1px 1px 0px;\n  font-size: 12px;\n}\n\n.footer.white[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 0px;\n  padding: 10px 0px 0px 0px;\n  font-size: 9.5px;\n  color: #333;\n}\n\n.footer.white[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.footer.white[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline !important;\n  color: #333;\n}\n\n.footer.white.release[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  font-weight: normal !important;\n  color: #4A49A8;\n}\n\n.footer.white[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  padding: 0px 10px 0px 10px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  vertical-align: middle;\n  list-style: none;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  display: inline-block;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  color: #81FFFE;\n  border: solid #88BCE2;\n  border-width: 0px 1px 0px 0px;\n  padding: 4px 15px 4px 15px;\n  margin: 0px;\n  vertical-align: top;\n  text-transform: uppercase;\n  font-weight: bold;\n  outline: 0;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item.left[_ngcontent-%COMP%] {\n  border: solid #88BCE2;\n  border-width: 0px 1px 0px 1px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item[_ngcontent-%COMP%]:hover {\n  background-color: #81FFFE;\n  color: #02055a;\n  margin: 0px;\n  vertical-align: top;\n}\n\n.rowOdd[_ngcontent-%COMP%] {\n  background-color: #efeded;\n}\n\ntable.dataTable[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #ccc;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  font-weight: bold;\n  padding: 3px 3px 3px 5px;\n  border: 1px solid #ccc;\n  text-transform: capitalize;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n  width: 250px;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%] {\n  width: 110px !important;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0px 4px 0px 0px;\n}\n\n.actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0px 4px 0px 0px;\n}\n\n.myFilters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.outer-input-frame[_ngcontent-%COMP%] {\n  border: solid #d4d4d4 2px;\n}\n\n.mainSection[_ngcontent-%COMP%] {\n  margin: 10px 0px 5px 7px;\n  padding: 0px;\n  font-size: 12px;\n  min-width: 1150px !important;\n}\n\n.mainBorder[_ngcontent-%COMP%] {\n  padding: 15px 15px 15px 15px;\n  border: 1px solid #ccc;\n  margin: 0px 0px 0px 2px;\n  width: 100%;\n}\n\n.mainBorder.loading[_ngcontent-%COMP%] {\n  background-color: #005d7e !important;\n  color: #fff;\n  padding: 15px !important;\n  margin-bottom: 15px;\n}\n\n.dataMain[_ngcontent-%COMP%] {\n  margin: 5px;\n  width: 90%;\n}\n\n.dataMain[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  width: 200px;\n  padding: 10px;\n  font-weight: bold;\n  vertical-align: top;\n}\n\n.dataMain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  vertical-align: top;\n}\n\n.dataMain[_ngcontent-%COMP%]   td.buttons[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.links-panel[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.links-panel.card.ml-1.mt-2[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n}\n\n.create-search-button-group[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.create-delete-button-group[_ngcontent-%COMP%] {\n  float: left;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-right: 5px !important;\n}\n\n.searchForm[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.searchForm[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding: 5px 10px 5px 0px;\n}\n\n.searchForm[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding-right: 20px;\n  width: 150px;\n}\n\n.searchForm[_ngcontent-%COMP%]   select.multiple[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.searchForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n\n.searchForm[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\n.submit[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.submit[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  margin: 10px;\n  text-align: right;\n}\n\n.buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #4A49A8;\n  text-align: center;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n  margin: 5px;\n  font-size: 14px !important;\n}\n\n.mainSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #00f !important;\n  text-decoration: underline !important;\n}\n\n.mainSection[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-bottom: 13px !important;\n  font-size: 12px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .blueHeader[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #0073b9;\n  color: #fff;\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: #005518;\n  color: #fff;\n  padding: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .editButton[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  text-align: right;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain.files[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 200px;\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties.files[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  width: 100%;\n  margin-bottom: 5px;\n}\n\n.experimentConfigurations[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  width: 300px;\n}\n\nul[_ngcontent-%COMP%] {\n  padding-left: 13px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%] {\n  min-width: 650px;\n}\n\n.files[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\nlabel.right[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%] {\n  width: 210px !important;\n  max-width: 210px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxjYW5hbm9sYWItY2xpZW50LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxteS1mYXZvcml0ZXMuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxtYWluLWRpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJBO0VBQ0ksNkRBRm9CO0FDZHhCOztBRG1CQTtFQUNJLDZEQU5vQjtBQ1Z4Qjs7QURrQkE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ2ZEOztBRG9CQTtFQUVJLHlCQTdCcUI7RUE4QnJCLFlBM0JZO0VBNEJmLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNsQkQ7O0FEcUJBO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ25CSjs7QURzQkE7RUFFSSx5QkE3Q3FCO0VBOENyQixxQkFBQTtFQUNBLDZCQUFBO0FDcEJKOztBRHVCQTtFQUNJLGtFQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDcEJKOztBRHdCQTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUNyQko7O0FEdUJJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNyQlI7O0FEeUJBLG1CQUFBOztBQUNBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ3RCSjs7QUR5QkEsaUJBQUE7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FDdEJKOztBRHlCQSxvQkFBQTs7QUFDQTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUN0Qko7O0FEeUJBLGtCQUFBOztBQUNBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ3RCSjs7QUR5QkE7RUFDSSxhQUFBO0FDdEJKOztBRHlCQTtFQUNJLDJCQUFBO0VBQ0EseUJBQUE7RUFJQSxpQkFBQTtFQUNBLHlCQUFB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QSxzQkFBQTtFQUNBLFlBQUE7QURnUko7O0FDN1FBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QURnUko7O0FDNVFBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBRCtRSjs7QUM1UUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBRCtRSjs7QUMzUUE7RUFDSSxnQkFBQTtBRDhRSjs7QUMzUUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7QUQ4UUo7O0FDM1FBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUQ4UUo7O0FDMVFBO0VBQ0ksaUJBQUE7QUQ2UUo7O0FBOWZBO0VBQ0MsdUJBQUE7RUFDRywyQkFBQTtBQWlnQkoiLCJmaWxlIjoibXktZmF2b3JpdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4kY2FuYW5vLWdyZWVuOiAjMDA1NTE4O1xyXG4kY2FuYW5vLWJsdWU6ICMwMDczYjk7XHJcbiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlOiAjMDIwNTVhO1xyXG4kbWVudUhlYWRpbmdCYWNrZ3JvdW5kQ29sb3I6ICMwMDVkN2U7XHJcbiRsZWZ0TWVudUJvcmRlckNvbG9yOiM4OEJDRTI7XHJcbiRsZWZ0TWVudVdpZHRoOiAxNjBweDtcclxuJGxlZnRNZW51TWFyZ2luOiAwcHg7XHJcbiRuYXZCdXR0b25Db2xvcjojODFGRkZFO1xyXG4kYm9yZGVyQ29sb3I6ICRsZWZ0TWVudUJvcmRlckNvbG9yO1xyXG4kbWFpbkZvbnRTaXplOjEycHg7XHJcbiRrZXl3b3JkU2VhcmNoRm9udFNpemU6IDEycHg7XHJcbiRvZGRSb3dDb2xvcjojZWZlZGVkO1xyXG4kbWFpbkRpc3BsYXlIZWFkaW5nSGVpZ2h0OiAyOHB4O1xyXG4kbWFpbkRpc3BsYXlIZWFkaW5nTWFyZ2luOiA4cHg7XHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOmFyaWFsLGhlbHZldGljYSx2ZXJkYW5hLHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxuaHRtbCB7XHJcbiAgICBmb250LWZhbWlseTokZm9udC1mYW1pbHktc2Fucy1zZXJpZjtcclxuXHJcbn1cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTokZm9udC1mYW1pbHktc2Fucy1zZXJpZjtcclxufVxyXG4uaGVhZGVyIHtcclxuXHRtYXJnaW46MHB4O1xyXG5cdHBhZGRpbmc6MHB4O1xyXG59XHJcbi5ob21lIHtcclxufVxyXG5cclxudGQubGVmdE1lbnUge1xyXG4gICAgQGV4dGVuZCAuaG9tZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6JGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU7XHJcbiAgICB3aWR0aDokbGVmdE1lbnVXaWR0aDtcclxuXHRtYXJnaW46MHB4O1xyXG5cdHBhZGRpbmc6MHB4O1xyXG5cdHZlcnRpY2FsLWFsaWduOnRvcDtcclxufVxyXG5cclxudGQubWFpbkNvbnRlbnQge1xyXG4gICAgQGV4dGVuZCAuaG9tZTtcclxuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgbWFyZ2luOjBweDtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgICBAZXh0ZW5kIC5ob21lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjokY2FuYW5vLWJhY2tncm91bmQtYmx1ZTtcclxuICAgIGJvcmRlcjpzb2xpZCAkbGVmdE1lbnVCb3JkZXJDb2xvcjtcclxuICAgIGJvcmRlci13aWR0aDoxcHggMXB4IDFweCAwcHg7XHJcbn1cclxuXHJcbi5wYXJlbnQtZGl2e1xyXG4gICAgLyoga2VlcCB0aGUgUXVlcnkgc2VjdGlvbiBhbmQgdGhlIERpc3BsYXkgc2VjdGlvbiBzaWRlIGJ5IHNpZGUuICAqL1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vIEBGSVhNRSAtIFRoZXNlIGNvbG9ycyBuZWVkIHZhcmlhYmxlc1xyXG4ubGluay1jbGlja2Vye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogIzMzMztcclxuXHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOiAjYTkwMTAxO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLyogdW52aXNpdGVkIGxpbmsgKi9cclxuYTpsaW5re1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG5cclxuLyogdmlzaXRlZCBsaW5rICovXHJcbmE6dmlzaXRlZHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi8qIG1vdXNlIG92ZXIgbGluayAqL1xyXG5hOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjb2xvcjogI2E5MDEwMTtcclxufVxyXG5cclxuLyogc2VsZWN0ZWQgbGluayAqL1xyXG5hOmFjdGl2ZXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5oaWRle1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnVuc2VsZWN0YWJsZXtcclxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uaGFuZCB7XHJcbiAgICBjdXJzb3I6cG9pbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2xpY2tlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi5zZWFyY2gtcmVzdWx0cy10YWJsZXtcclxuICAgIGZvbnQtc2l6ZTogJG1haW5Gb250U2l6ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAjY2NjIDFweDtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHRzLXRye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogc29saWQgI2NjYyAxcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0cy10aHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIC8vICBib3JkZXI6IHNvbGlkICNkZmRmZGYgMnB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAjY2NjIDFweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjYW5hbm8tYmx1ZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdHMtdGR7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAvLyBib3JkZXI6IHNvbGlkICNkZmRmZGYgMnB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkICNjY2MgMXB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAjY2NjIDFweDtcclxufVxyXG5cclxuLnJvd09kZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvZGRSb3dDb2xvcjtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHRzLS10ci1vZGR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pbWcge1xyXG5cdGJvcmRlci13aWR0aDowcHg7XHJcblx0bWFyZ2luOjBweDtcclxuXHRwYWRkaW5nOjBweDtcclxuXHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiRsZWZ0TWVudVdpZHRoO1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5zcGFjZXIuY2VudGVyIHtcclxuICAgIGNvbG9yOiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlO1xyXG59XHJcblxyXG5cclxuLmZvb3RlciB7XHJcblx0cGFkZGluZzowcHggMHB4IDBweCAxNjBweDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjptaWRkbGUgIWltcG9ydGFudDtcclxuXHR0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlO1xyXG4gICAgYm9yZGVyOnNvbGlkICRsZWZ0TWVudUJvcmRlckNvbG9yO1xyXG4gICAgYm9yZGVyLXdpZHRoOjFweCAxcHggMXB4IDBweDtcclxuICAgIGZvbnQtc2l6ZTokbWFpbkZvbnRTaXplO1xyXG59O1xyXG5cclxuXHJcbi5mb290ZXIud2hpdGV7XHJcblx0YmFja2dyb3VuZC1jb2xvcjojZmZmO1xyXG5cdGJvcmRlcjowcHg7XHJcblx0cGFkZGluZzoxMHB4IDBweCAwcHggMHB4O1xyXG5cdGZvbnQtc2l6ZTo5LjVweDtcclxuICAgIGNvbG9yOiMzMzM7XHJcbn07XHJcblxyXG4uZm9vdGVyLndoaXRlIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDtcclxufTtcclxuXHJcbi5mb290ZXIud2hpdGUgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjojMzMzO1xyXG59XHJcblxyXG4uZm9vdGVyLndoaXRlLnJlbGVhc2Uge1xyXG4gICAgZm9udC1zaXplOjEycHggIWltcG9ydGFudDtcclxuXHRmb250LXdlaWdodDpub3JtYWwgIWltcG9ydGFudDtcclxuXHRjb2xvcjojNEE0OUE4O1xyXG59XHJcblxyXG4uZm9vdGVyLndoaXRlIC5kaXZpZGVyIHtcclxuXHRwYWRkaW5nOjBweCAxMHB4IDBweCAxMHB4O1xyXG59O1xyXG5cclxuLmZvb3RlciB1bCB7XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgcGFkZGluZzowcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XHJcbiAgICBsaXN0LXN0eWxlOm5vbmU7XHJcbn07XHJcblxyXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIHtcclxuICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5cclxuLmZvb3RlciB1bCBsaS5mb290ZXItaXRlbSAubmF2LWxpbmsubmF2LW1lbnUtdG9wLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjokY2FuYW5vLWJhY2tncm91bmQtYmx1ZTtcclxuICAgIGNvbG9yOiRuYXZCdXR0b25Db2xvcjtcclxuICAgIGJvcmRlcjogc29saWQgJGxlZnRNZW51Qm9yZGVyQ29sb3I7XHJcbiAgICBib3JkZXItd2lkdGg6MHB4IDFweCAwcHggMHB4O1xyXG4gICAgcGFkZGluZzo0cHggMTVweCA0cHggMTVweDtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcblx0dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG5cdGZvbnQtd2VpZ2h0OmJvbGQ7XHJcblx0b3V0bGluZTowO1xyXG59XHJcblxyXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIC5uYXYtbGluay5uYXYtbWVudS10b3AtaXRlbS5sZWZ0e1xyXG4gICAgYm9yZGVyOiBzb2xpZCAkbGVmdE1lbnVCb3JkZXJDb2xvcjtcclxuICAgIGJvcmRlci13aWR0aDowcHggMXB4IDBweCAxcHg7XHJcbn1cclxuXHJcbi5mb290ZXIgdWwgbGkuZm9vdGVyLWl0ZW0gLm5hdi1saW5rLm5hdi1tZW51LXRvcC1pdGVtOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjokbmF2QnV0dG9uQ29sb3I7XHJcbiAgICBjb2xvcjokY2FuYW5vLWJhY2tncm91bmQtYmx1ZTtcclxuICAgIG1hcmdpbjowcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbn1cclxuXHJcbi5yb3dPZGQge1xyXG5cdGJhY2tncm91bmQtY29sb3I6JG9kZFJvd0NvbG9yO1xyXG59XHJcblxyXG50YWJsZS5kYXRhVGFibGV7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuXHJcbn1cclxuXHJcbnRhYmxlLmRhdGFUYWJsZSB0aHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDczYjk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzozcHggM3B4IDNweCA1cHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxudGFibGUuZGF0YVRhYmxlIHRke1xyXG5cdHBhZGRpbmc6NXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG5cdHdpZHRoOjI1MHB4O1xyXG59XHJcblxyXG50YWJsZS5kYXRhVGFibGUgdGQuYWN0aW9ucyAge1xyXG5cdHdpZHRoOjExMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRhYmxlLmRhdGFUYWJsZSB0ZC5hY3Rpb25zIGRpdiB7XHJcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblx0bWFyZ2luOjBweCA0cHggMHB4IDBweDtcclxufVxyXG5cclxuLmFjdGlvbnMgZGl2IHtcclxuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHRtYXJnaW46MHB4IDRweCAwcHggMHB4O1xyXG59XHJcblxyXG4ubXlGaWx0ZXJzIGxhYmVsIHtcclxuICAgIG1hcmdpbi1sZWZ0OjVweDtcclxufVxyXG4iLCJodG1sIHtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBoZWx2ZXRpY2EsIHZlcmRhbmEsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgaGVsdmV0aWNhLCB2ZXJkYW5hLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXIge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG50ZC5sZWZ0TWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjA1NWE7XG4gIHdpZHRoOiAxNjBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxudGQubWFpbkNvbnRlbnQge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyMDU1YTtcbiAgYm9yZGVyOiBzb2xpZCAjODhCQ0UyO1xuICBib3JkZXItd2lkdGg6IDFweCAxcHggMXB4IDBweDtcbn1cblxuLnBhcmVudC1kaXYge1xuICAvKiBrZWVwIHRoZSBRdWVyeSBzZWN0aW9uIGFuZCB0aGUgRGlzcGxheSBzZWN0aW9uIHNpZGUgYnkgc2lkZS4gICovXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5saW5rLWNsaWNrZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogIzMzMztcbn1cbi5saW5rLWNsaWNrZXI6aG92ZXIge1xuICBjb2xvcjogI2E5MDEwMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiB1bnZpc2l0ZWQgbGluayAqL1xuYTpsaW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi8qIHZpc2l0ZWQgbGluayAqL1xuYTp2aXNpdGVkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi8qIG1vdXNlIG92ZXIgbGluayAqL1xuYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjYTkwMTAxO1xufVxuXG4vKiBzZWxlY3RlZCBsaW5rICovXG5hOmFjdGl2ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi51bnNlbGVjdGFibGUge1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmhhbmQge1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmNsaWNrZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy10YWJsZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgI2NjYyAxcHg7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy10ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogc29saWQgI2NjYyAxcHg7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy10aCB7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyOiBzb2xpZCAjY2NjIDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzNiOTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy10ZCB7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkICNjY2MgMXB4O1xuICBib3JkZXItcmlnaHQ6IHNvbGlkICNjY2MgMXB4O1xufVxuXG4ucm93T2RkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWRlZDtcbn1cblxuLnNlYXJjaC1yZXN1bHRzLS10ci1vZGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5pbWcge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnNwYWNlciB7XG4gIHBhZGRpbmctbGVmdDogMTYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNwYWNlci5jZW50ZXIge1xuICBjb2xvcjogIzAyMDU1YTtcbn1cblxuLmZvb3RlciB7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDE2MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyMDU1YTtcbiAgYm9yZGVyOiBzb2xpZCAjODhCQ0UyO1xuICBib3JkZXItd2lkdGg6IDFweCAxcHggMXB4IDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZm9vdGVyLndoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAwcHg7XG4gIHBhZGRpbmc6IDEwcHggMHB4IDBweCAwcHg7XG4gIGZvbnQtc2l6ZTogOS41cHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uZm9vdGVyLndoaXRlIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmZvb3Rlci53aGl0ZSBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5mb290ZXIud2hpdGUucmVsZWFzZSB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNEE0OUE4O1xufVxuXG4uZm9vdGVyLndoaXRlIC5kaXZpZGVyIHtcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG59XG5cbi5mb290ZXIgdWwge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIC5uYXYtbGluay5uYXYtbWVudS10b3AtaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjA1NWE7XG4gIGNvbG9yOiAjODFGRkZFO1xuICBib3JkZXI6IHNvbGlkICM4OEJDRTI7XG4gIGJvcmRlci13aWR0aDogMHB4IDFweCAwcHggMHB4O1xuICBwYWRkaW5nOiA0cHggMTVweCA0cHggMTVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvdXRsaW5lOiAwO1xufVxuXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIC5uYXYtbGluay5uYXYtbWVudS10b3AtaXRlbS5sZWZ0IHtcbiAgYm9yZGVyOiBzb2xpZCAjODhCQ0UyO1xuICBib3JkZXItd2lkdGg6IDBweCAxcHggMHB4IDFweDtcbn1cblxuLmZvb3RlciB1bCBsaS5mb290ZXItaXRlbSAubmF2LWxpbmsubmF2LW1lbnUtdG9wLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFGRkZFO1xuICBjb2xvcjogIzAyMDU1YTtcbiAgbWFyZ2luOiAwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5yb3dPZGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZGVkO1xufVxuXG50YWJsZS5kYXRhVGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxudGFibGUuZGF0YVRhYmxlIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzNiOTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAzcHggM3B4IDNweCA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG50YWJsZS5kYXRhVGFibGUgdGQge1xuICBwYWRkaW5nOiA1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRkLmFjdGlvbnMge1xuICB3aWR0aDogMTEwcHggIWltcG9ydGFudDtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRkLmFjdGlvbnMgZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDBweCA0cHggMHB4IDBweDtcbn1cblxuLmFjdGlvbnMgZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDBweCA0cHggMHB4IDBweDtcbn1cblxuLm15RmlsdGVycyBsYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5vdXRlci1pbnB1dC1mcmFtZSB7XG4gIGJvcmRlcjogc29saWQgI2Q0ZDRkNCAycHg7XG59XG5cbi5tYWluU2VjdGlvbiB7XG4gIG1hcmdpbjogMTBweCAwcHggNXB4IDdweDtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1pbi13aWR0aDogMTE1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluQm9yZGVyIHtcbiAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWFpbkJvcmRlci5sb2FkaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWQ3ZSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZGF0YU1haW4ge1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmRhdGFNYWluIHRkLmxhYmVsIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmRhdGFNYWluIHRkIHtcbiAgcGFkZGluZzogMTBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmRhdGFNYWluIHRkLmJ1dHRvbnMge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmxpbmtzLXBhbmVsIHtcbiAgd2lkdGg6IDUwMHB4O1xufVxuXG4ubGlua3MtcGFuZWwuY2FyZC5tbC0xLm10LTIge1xuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jcmVhdGUtc2VhcmNoLWJ1dHRvbi1ncm91cCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmNyZWF0ZS1kZWxldGUtYnV0dG9uLWdyb3VwIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbmxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2hGb3JtIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5zZWFyY2hGb3JtIHRkIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDBweDtcbn1cblxuLnNlYXJjaEZvcm0gdGQubGFiZWwge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5zZWFyY2hGb3JtIHNlbGVjdC5tdWx0aXBsZSB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLnNlYXJjaEZvcm0gc2VsZWN0IHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi5zZWFyY2hGb3JtIHNwYW4ubGFiZWwge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uc3VibWl0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdWJtaXQgdGQ6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYnV0dG9ucyB7XG4gIG1hcmdpbjogMTBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5idXR0b25zIGRpdiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICM0QTQ5QTg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuXG4ubWFpblNlY3Rpb24gYSB7XG4gIGNvbG9yOiAjMDBmICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluU2VjdGlvbiB0ZCB7XG4gIHBhZGRpbmctYm90dG9tOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm1haW5TZWN0aW9uIC5ibHVlSGVhZGVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzNiOTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ubWFpblNlY3Rpb24gLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU1MTg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubWFpblNlY3Rpb24gLmhlYWRlciAuYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5tYWluU2VjdGlvbiAuZWRpdEJ1dHRvbiB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4uZmlsZXMge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gdGQge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXMge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIC5wcm9wZXJ0aWVzIHRoIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDE1MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gdGQubGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDIwMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXMgdGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTUwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllcy5maWxlcyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5leHBlcmltZW50Q29uZmlndXJhdGlvbnMgdGQge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbnVsIHtcbiAgcGFkZGluZy1sZWZ0OiAxM3B4O1xufVxuXG4uZGF0YUFuZENvbmRpdGlvbnMgdGQge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLmRhdGFBbmRDb25kaXRpb25zIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzNiOTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLnByb3BlcnRpZXMgdGQge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnByb3BlcnRpZXMgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3M2I5O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uZmlsZXMge1xuICBtaW4td2lkdGg6IDY1MHB4O1xufVxuXG4uZmlsZXMgdGQge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5maWxlcyB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDczYjk7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbmxhYmVsLnJpZ2h0IHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5cbnRhYmxlLmRhdGFUYWJsZSB0ZC5hY3Rpb25zIHtcbiAgd2lkdGg6IDIxMHB4ICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMjEwcHggIWltcG9ydGFudDtcbn0iLCJAaW1wb3J0ICcuLi9jYW5hbm9sYWItY2xpZW50LmNvbXBvbmVudC5zY3NzJztcclxuXHJcbi5vdXRlci1pbnB1dC1mcmFtZXtcclxuICAgIGJvcmRlcjogc29saWQgI2Q0ZDRkNCAycHg7XHJcbn1cclxuLm1haW5TZWN0aW9uIHtcclxuICAgIG1hcmdpbjoxMHB4IDBweCA1cHggN3B4O1xyXG4gICAgcGFkZGluZzowcHg7XHJcbiAgICBmb250LXNpemU6JG1haW5Gb250U2l6ZTtcclxuICAgIG1pbi13aWR0aDoxMTUwcHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuLm1haW5Cb3JkZXIge1xyXG4gICAgcGFkZGluZzoxNXB4IDE1cHggMTVweCAxNXB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG4gICAgbWFyZ2luOjBweCAwcHggMHB4IDJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxuLm1haW5Cb3JkZXIubG9hZGluZyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjokbWVudUhlYWRpbmdCYWNrZ3JvdW5kQ29sb3IgIWltcG9ydGFudDtcclxuXHRjb2xvcjojZmZmO1xyXG5cdHBhZGRpbmc6MTVweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbToxNXB4O1xyXG59XHJcblxyXG4uZGF0YU1haW4gIHtcclxuICAgIG1hcmdpbjo1cHg7XHJcbiAgICB3aWR0aDo5MCU7XHJcbn1cclxuXHJcbi5kYXRhTWFpbiB0ZC5sYWJlbCB7XHJcbiAgICB3aWR0aDoyMDBweDtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbn1cclxuLmRhdGFNYWluIHRkIHtcclxuICAgIHBhZGRpbmc6MTBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxufVxyXG5cclxuLmRhdGFNYWluIHRkLmJ1dHRvbnMge1xyXG4gICAgdGV4dC1hbGlnbjpyaWdodDtcclxufVxyXG5cclxuXHJcbi5saW5rcy1wYW5lbHtcclxuICAgIHdpZHRoOiA1MDBweDsgIC8vIEBGSVhNRSAtIG1ha2UgYSBjb25zdFxyXG59XHJcblxyXG4ubGlua3MtcGFuZWwuY2FyZC5tbC0xLm10LTIge1xyXG5cdG1hcmdpbi1sZWZ0OjBweCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5jcmVhdGUtc2VhcmNoLWJ1dHRvbi1ncm91cHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4uY3JlYXRlLWRlbGV0ZS1idXR0b24tZ3JvdXB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIG1hcmdpbi1yaWdodDo1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlYXJjaEZvcm0ge1xyXG4gICAgbWFyZ2luOjVweDtcclxufVxyXG5cclxuLnNlYXJjaEZvcm0gdGR7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbiAgICBwYWRkaW5nOjVweCAxMHB4IDVweCAwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2hGb3JtIHRkLmxhYmVse1xyXG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgcGFkZGluZy1yaWdodDoyMHB4O1xyXG4gICAgd2lkdGg6MTUwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2hGb3JtIHNlbGVjdC5tdWx0aXBsZSB7XHJcbiAgICB3aWR0aDoxNTBweDtcclxufVxyXG5cclxuLnNlYXJjaEZvcm0gc2VsZWN0IHtcclxuICAgIG1hcmdpbi1yaWdodDo0cHg7XHJcbn1cclxuXHJcbi5zZWFyY2hGb3JtIHNwYW4ubGFiZWwge1xyXG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xyXG59XHJcblxyXG4uc3VibWl0IHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi5zdWJtaXQgdGQ6bGFzdC1jaGlsZCB7XHJcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgICBtYXJnaW46MTBweDtcclxuICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbn1cclxuXHJcbi5idXR0b25zIGRpdiB7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBjb2xvcjojNEE0OUE4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5lcnJvciB7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICBtYXJnaW46NXB4O1xyXG4gICAgZm9udC1zaXplOjE0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1haW5TZWN0aW9uIGEge1xyXG4gICAgY29sb3I6IzAwZiAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1haW5TZWN0aW9uIHRkIHtcclxuICAgIHBhZGRpbmctYm90dG9tOjEzcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTokbWFpbkZvbnRTaXplO1xyXG5cclxufVxyXG4ubWFpblNlY3Rpb24gLmJsdWVIZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDczYjk7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLm1haW5TZWN0aW9uIC5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA1NTE4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIHBhZGRpbmc6MTBweDtcclxufVxyXG5cclxuICAgIC5tYWluU2VjdGlvbiAuaGVhZGVyIC5idG4ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICB9XHJcblxyXG4ubWFpblNlY3Rpb24gLmVkaXRCdXR0b257XHJcbiAgICBwYWRkaW5nLXRvcDo1cHg7XHJcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG59XHJcbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbi5maWxlc3tcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxufVxyXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gdGR7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbn1cclxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIC5wcm9wZXJ0aWVze1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIC5wcm9wZXJ0aWVzIHRoe1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgd2lkdGg6MTUwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XHJcbn1cclxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIHRkLmxhYmVse1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG59XHJcblxyXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXMgdGR7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgICB3aWR0aDoxNTBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcclxufVxyXG5cclxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIC5wcm9wZXJ0aWVzLmZpbGVze1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206NXB4O1xyXG59XHJcblxyXG4uZXhwZXJpbWVudENvbmZpZ3VyYXRpb25zIHRkIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcclxuICAgIHdpZHRoOjMwMHB4O1xyXG59XHJcbiB1bCB7XHJcbiAgIHBhZGRpbmctbGVmdDoxM3B4O1xyXG59XHJcblxyXG5cclxuLmRhdGFBbmRDb25kaXRpb25zIHRke1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XHJcbiAgICB3aWR0aDoyMDBweDtcclxufVxyXG5cclxuLmRhdGFBbmRDb25kaXRpb25zIHRoe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA3M2I5O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xyXG4gICAgYm9yZGVyOjFweCAgc29saWQgI2NjYztcclxuXHJcbn1cclxuXHJcbi5wcm9wZXJ0aWVzIHRke1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XHJcbiAgICB3aWR0aDoyMDBweDtcclxufVxyXG5cclxuLnByb3BlcnRpZXMgdGh7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDczYjk7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XHJcbiAgICBib3JkZXI6MXB4ICBzb2xpZCAjY2NjO1xyXG5cclxufVxyXG5cclxuLmZpbGVzIHtcclxuICAgIG1pbi13aWR0aDo2NTBweDtcclxufVxyXG5cclxuLmZpbGVzIHRke1xyXG4gICAgcGFkZGluZzo1cHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XHJcbn1cclxuXHJcbi5maWxlcyB0aHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwNzNiOTtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICAgIGJvcmRlcjoxcHggIHNvbGlkICNjY2M7XHJcblxyXG59XHJcblxyXG5sYWJlbC5yaWdodCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6NXB4O1xyXG59XHJcblxyXG4iXX0= */"] });
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