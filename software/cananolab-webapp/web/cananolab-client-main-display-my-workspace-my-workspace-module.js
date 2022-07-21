(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cananolab-client-main-display-my-workspace-my-workspace-module"],{

/***/ "3dZ4":
/*!***********************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/my-workspace/my-workspace.module.ts ***!
  \***********************************************************************************/
/*! exports provided: MyWorkspaceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWorkspaceModule", function() { return MyWorkspaceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _my_workspace_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-workspace.component */ "6t4c");
/* harmony import */ var _my_workspace_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-workspace-routing.module */ "vRwl");
/* harmony import */ var _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/modules/set-object-value/shared.module */ "0U9J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class MyWorkspaceModule {
}
MyWorkspaceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MyWorkspaceModule });
MyWorkspaceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MyWorkspaceModule_Factory(t) { return new (t || MyWorkspaceModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _my_workspace_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyWorkspaceRoutingModule"],
            _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyWorkspaceModule, { declarations: [_my_workspace_component__WEBPACK_IMPORTED_MODULE_2__["MyWorkspaceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _my_workspace_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyWorkspaceRoutingModule"],
        _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyWorkspaceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_my_workspace_component__WEBPACK_IMPORTED_MODULE_2__["MyWorkspaceComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _my_workspace_routing_module__WEBPACK_IMPORTED_MODULE_3__["MyWorkspaceRoutingModule"],
                    _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "6t4c":
/*!**************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/my-workspace/my-workspace.component.ts ***!
  \**************************************************************************************/
/*! exports provided: MyWorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWorkspaceComponent", function() { return MyWorkspaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "l207");
/* harmony import */ var _common_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/api.service */ "WHDV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _protocols_protocols_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../protocols/protocols.service */ "zscP");
/* harmony import */ var src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/cananolab-client/main-display/main-display-heading/main-display-heading.component */ "AYD1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function MyWorkspaceComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errors["error"], " ");
} }
function MyWorkspaceComponent_div_15_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " There are no samples in your workspace. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyWorkspaceComponent_div_15_table_4_tr_12_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyWorkspaceComponent_div_15_table_4_tr_12_div_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const workSamp_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.navigateToSampleEdit(workSamp_r7["id"], workSamp_r7["name"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyWorkspaceComponent_div_15_table_4_tr_12_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyWorkspaceComponent_div_15_table_4_tr_12_div_6_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const workSamp_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.navigateToSampleDelete(workSamp_r7["id"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "rowOdd": a0 }; };
function MyWorkspaceComponent_div_15_table_4_tr_12_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyWorkspaceComponent_div_15_table_4_tr_12_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const workSamp_r7 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17.navigateToSampleView(workSamp_r7["id"], workSamp_r7["name"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MyWorkspaceComponent_div_15_table_4_tr_12_div_5_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MyWorkspaceComponent_div_15_table_4_tr_12_div_6_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const workSamp_r7 = ctx.$implicit;
    const odd_r8 = ctx.odd;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, odd_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", workSamp_r7.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", workSamp_r7.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", workSamp_r7["name"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", workSamp_r7["submisstionStatus"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 7, workSamp_r7["createdDate"], "shortDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", workSamp_r7["access"], " ");
} }
function MyWorkspaceComponent_div_15_table_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Sample Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Sample Submission Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Created Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Sample Access ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MyWorkspaceComponent_div_15_table_4_tr_12_Template, 16, 12, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.samples);
} }
function MyWorkspaceComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My Samples");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MyWorkspaceComponent_div_15_div_3_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyWorkspaceComponent_div_15_table_4_Template, 13, 1, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.samples.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.samples.length);
} }
function MyWorkspaceComponent_div_16_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " There are no protocols in your workspace. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyWorkspaceComponent_div_16_table_5_tr_12_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyWorkspaceComponent_div_16_table_5_tr_12_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const workProtocol_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r26.navigateToProtocolEdit(workProtocol_r22["id"], workProtocol_r22["name"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyWorkspaceComponent_div_16_table_5_tr_12_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyWorkspaceComponent_div_16_table_5_tr_12_div_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const workProtocol_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r29.navigateToProtocolDelete(workProtocol_r22["id"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyWorkspaceComponent_div_16_table_5_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyWorkspaceComponent_div_16_table_5_tr_12_div_2_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MyWorkspaceComponent_div_16_table_5_tr_12_div_3_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const workProtocol_r22 = ctx.$implicit;
    const odd_r23 = ctx.odd;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, odd_r23));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", workProtocol_r22.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", workProtocol_r22.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", workProtocol_r22["name"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", workProtocol_r22["submisstionStatus"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 7, workProtocol_r22["createdDate"], "shortDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", workProtocol_r22["access"], " ");
} }
function MyWorkspaceComponent_div_16_table_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Protocol Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Protocol Submission Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Created Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Protocol Access ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MyWorkspaceComponent_div_16_table_5_tr_12_Template, 13, 12, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r20.protocols);
} }
function MyWorkspaceComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Protocols");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyWorkspaceComponent_div_16_div_4_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MyWorkspaceComponent_div_16_table_5_Template, 13, 1, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.protocols.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.protocols.length);
} }
function MyWorkspaceComponent_div_17_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " There are no publication in your workspace. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyWorkspaceComponent_div_17_table_5_tr_14_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyWorkspaceComponent_div_17_table_5_tr_14_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const workPub_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r39.navigateToPublicationEdit(workPub_r35["id"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyWorkspaceComponent_div_17_table_5_tr_14_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MyWorkspaceComponent_div_17_table_5_tr_14_div_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const workPub_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r42.navigateToPublicationDelete(workPub_r35["id"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MyWorkspaceComponent_div_17_table_5_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyWorkspaceComponent_div_17_table_5_tr_14_div_2_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MyWorkspaceComponent_div_17_table_5_tr_14_div_3_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const workPub_r35 = ctx.$implicit;
    const odd_r36 = ctx.odd;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, odd_r36));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", workPub_r35.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", workPub_r35.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", workPub_r35["pubMedDOIId"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", workPub_r35["name"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", workPub_r35["submisstionStatus"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 8, workPub_r35["createdDate"], "shortDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", workPub_r35["access"], " ");
} }
function MyWorkspaceComponent_div_17_table_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Publication ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Publication Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Publication Submission Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Created Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Protocol Access ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MyWorkspaceComponent_div_17_table_5_tr_14_Template, 15, 13, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r33.publications);
} }
function MyWorkspaceComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "My Publications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MyWorkspaceComponent_div_17_div_4_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MyWorkspaceComponent_div_17_table_5_Template, 15, 1, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.publications.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.publications.length);
} }
class MyWorkspaceComponent {
    constructor(apiService, router, protocolsService) {
        this.apiService = apiService;
        this.router = router;
        this.protocolsService = protocolsService;
        this.helpUrl = _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].HELP_URL_WORKSPACE;
        this.toolHeadingNameSearchSample = 'My Workspace';
        this.samples = [];
        this.protocols = [];
        this.publications = [];
        this.showSampleWorkspaces = true;
        this.showProtocolsWorkspaces = true;
        this.showPublicationsWorkspaces = true;
        this.errors = {};
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        this.apiService.doGet(_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].QUERY_GET_WORKSPACE, 'type=sample').subscribe(data => {
            this.samples = data['samples'];
            this.errors = {};
        }, (err) => {
            this.errors = err;
            console.log('ERROR QUERY_GET_WORKSPACE samples: ', err);
        });
        this.apiService.doGet(_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].QUERY_GET_WORKSPACE, 'type=protocol').subscribe(data => {
            this.errors = {};
            this.protocols = data['protocols'];
            console.log('QUERY_GET_WORKSPACE protocols: ', data);
        }, (err) => {
            this.errors = err;
            console.error('ERROR QUERY_GET_WORKSPACE protocols: ', err);
        });
        this.apiService.doGet(_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].QUERY_GET_WORKSPACE, 'type=publication').subscribe(data => {
            this.errors = {};
            this.publications = data['publications'];
            console.log('QUERY_GET_WORKSPACE publications: ', data);
        }, (err) => {
            this.errors = err;
            console.error('ERROR> QUERY_GET_WORKSPACE publications: ', err);
        });
    }
    navigateToSampleView(sampleId, sampleName) {
        this.router.navigate(['home/samples/view-sample', sampleId]);
    }
    navigateToSampleEdit(sampleId, sampleName) {
        this.router.navigate(['home/samples/sample', sampleId]);
    }
    /**
     * Delete from favorites
     * @param sampleId
     */
    navigateToSampleDelete(sampleId) {
        if (confirm("Are you sure you wish to delete this sample?")) {
            this.apiService.doGet(_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].QUERY_SAMPLE_DELETE_FROM_WORKSPACE, 'sampleId=' + sampleId).subscribe(data => {
                this.errors = {};
                this.loadData();
            }, (err) => {
                this.loadData();
                console.error('\'rest/sample/deleteSampleFromWorkspace?sampleId=\'' + sampleId + ':', err);
            });
        }
    }
    navigateToProtocolEdit(protocolId, protocolName) {
        this.protocolsService.setCurrentProtocolScreen(_constants__WEBPACK_IMPORTED_MODULE_1__["ProtocolScreen"].PROTOCOL_EDIT_SCREEN, protocolId);
        this.router.navigate(['home/protocols/edit-protocol', protocolId]);
    }
    navigateToProtocolDelete(protocolId) {
        if (confirm("Are you sure you wish to delete this protocol?")) {
            this.apiService.doGet(_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].QUERY_DELETE_PROTOCOL_BY_ID, 'protocolId=' + protocolId).subscribe(data => {
                this.errors = {};
                this.loadData();
            }, (err) => {
                this.errors = err;
                console.error('\'rest/sample/deleteProtocolById?protocolId=\'' + protocolId + ':', err);
            });
        }
    }
    navigateToPublicationEdit(publicationId) {
        this.protocolsService.setCurrentProtocolScreen(_constants__WEBPACK_IMPORTED_MODULE_1__["ProtocolScreen"].PROTOCOL_EDIT_SCREEN, publicationId);
        this.router.navigate(['home/samples/publications/publication', publicationId]);
    }
    navigateToPublicationDelete(publicationId) {
        if (confirm("Are you sure you wish to delete this publication?")) {
            this.apiService.doGet(_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].QUERY_DELETE_PUBLICATION_BY_ID, 'publicationId=' + publicationId).subscribe(data => {
                this.errors = {};
                this.loadData();
            }, (err) => {
                this.errors = err;
            });
        }
    }
}
MyWorkspaceComponent.ɵfac = function MyWorkspaceComponent_Factory(t) { return new (t || MyWorkspaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_protocols_protocols_service__WEBPACK_IMPORTED_MODULE_4__["ProtocolsService"])); };
MyWorkspaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyWorkspaceComponent, selectors: [["canano-my-workspace"]], decls: 18, vars: 9, consts: [[3, "helpUrl", "toolHeadingName"], [1, "mainSection"], ["class", "error", 4, "ngIf"], [1, "mainBorder"], ["id", "showSampleWorkspacesCheckbox", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["for", "showSampleWorkspacesCheckbox", 1, "right"], ["id", "showProtocolsWorkspacesCheckbox", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["for", "showProtocolsWorkspacesCheckbox", 1, "right"], ["id", "showPublicationsWorkspacesCheckbox", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["for", "showPublicationsWorkspacesCheckbox", 1, "right"], [4, "ngIf"], [1, "error"], ["class", "dataTable", 4, "ngIf"], [1, "dataTable"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "actions"], [3, "click"], [3, "innerHtml"]], template: function MyWorkspaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canano-main-display-heading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MyWorkspaceComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyWorkspaceComponent_Template_input_ngModelChange_5_listener($event) { return ctx.showSampleWorkspaces = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Samples ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyWorkspaceComponent_Template_input_ngModelChange_8_listener($event) { return ctx.showProtocolsWorkspaces = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Protocols ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MyWorkspaceComponent_Template_input_ngModelChange_11_listener($event) { return ctx.showPublicationsWorkspaces = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Publications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MyWorkspaceComponent_div_15_Template, 5, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MyWorkspaceComponent_div_16_Template, 6, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MyWorkspaceComponent_div_17_Template, 6, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("helpUrl", ctx.helpUrl)("toolHeadingName", ctx.toolHeadingNameSearchSample);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors["error"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.showSampleWorkspaces);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.showProtocolsWorkspaces);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.showPublicationsWorkspaces);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSampleWorkspaces);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showProtocolsWorkspaces);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showPublicationsWorkspaces);
    } }, directives: [src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_5__["MainDisplayHeadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["html[_ngcontent-%COMP%] {\n  font-family: arial, helvetica, verdana, sans-serif !important;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: arial, helvetica, verdana, sans-serif !important;\n}\n\n.header[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\ntd.leftMenu[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  width: 160px;\n  margin: 0px;\n  padding: 0px;\n  vertical-align: top;\n}\n\ntd.mainContent[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding: 0px;\n  margin: 0px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  border: solid #88BCE2;\n  border-width: 1px 1px 1px 0px;\n}\n\n.parent-div[_ngcontent-%COMP%] {\n  \n  display: flex;\n  flex-direction: row;\n  background-color: #fff;\n  width: 100%;\n}\n\n.link-clicker[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n.link-clicker[_ngcontent-%COMP%]:hover {\n  color: #a90101;\n  cursor: pointer;\n}\n\n\n\na[_ngcontent-%COMP%]:link {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n\n\na[_ngcontent-%COMP%]:visited {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n\n\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #a90101;\n}\n\n\n\na[_ngcontent-%COMP%]:active {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.unselectable[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  text-transform: uppercase;\n}\n\n.hand[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.clicker[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.search-results-table[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 100%;\n  border: solid #ccc 1px;\n}\n\n.search-results-tr[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: solid #ccc 1px;\n}\n\n.search-results-th[_ngcontent-%COMP%] {\n  padding: 6px;\n  border: solid #ccc 1px;\n  background-color: #0073b9;\n  color: #fff;\n}\n\n.search-results-td[_ngcontent-%COMP%] {\n  padding: 6px;\n  border-left: solid #ccc 1px;\n  border-right: solid #ccc 1px;\n}\n\n.rowOdd[_ngcontent-%COMP%] {\n  background-color: #efeded;\n}\n\n.search-results--tr-odd[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-width: 0px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  padding-left: 160px;\n  text-align: center;\n}\n\n.spacer.center[_ngcontent-%COMP%] {\n  color: #02055a;\n}\n\n.footer[_ngcontent-%COMP%] {\n  padding: 0px 0px 0px 160px;\n  vertical-align: middle !important;\n  text-align: center;\n  background-color: #02055a;\n  border: solid #88BCE2;\n  border-width: 1px 1px 1px 0px;\n  font-size: 12px;\n}\n\n.footer.white[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 0px;\n  padding: 10px 0px 0px 0px;\n  font-size: 9.5px;\n  color: #333;\n}\n\n.footer.white[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.footer.white[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline !important;\n  color: #333;\n}\n\n.footer.white.release[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  font-weight: normal !important;\n  color: #4A49A8;\n}\n\n.footer.white[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  padding: 0px 10px 0px 10px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  vertical-align: middle;\n  list-style: none;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  display: inline-block;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  color: #81FFFE;\n  border: solid #88BCE2;\n  border-width: 0px 1px 0px 0px;\n  padding: 4px 15px 4px 15px;\n  margin: 0px;\n  vertical-align: top;\n  text-transform: uppercase;\n  font-weight: bold;\n  outline: 0;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item.left[_ngcontent-%COMP%] {\n  border: solid #88BCE2;\n  border-width: 0px 1px 0px 1px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item[_ngcontent-%COMP%]:hover {\n  background-color: #81FFFE;\n  color: #02055a;\n  margin: 0px;\n  vertical-align: top;\n}\n\n.rowOdd[_ngcontent-%COMP%] {\n  background-color: #efeded;\n}\n\ntable.dataTable[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #ccc;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  font-weight: bold;\n  padding: 3px 3px 3px 5px;\n  border: 1px solid #ccc;\n  text-transform: capitalize;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n  width: 250px;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%] {\n  width: 110px !important;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0px 4px 0px 0px;\n}\n\n.actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0px 4px 0px 0px;\n}\n\n.myFilters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.outer-input-frame[_ngcontent-%COMP%] {\n  border: solid #d4d4d4 2px;\n}\n\n.mainSection[_ngcontent-%COMP%] {\n  margin: 10px 0px 5px 7px;\n  padding: 0px;\n  font-size: 12px;\n  min-width: 1150px !important;\n}\n\n.mainBorder[_ngcontent-%COMP%] {\n  padding: 15px 15px 15px 15px;\n  border: 1px solid #ccc;\n  margin: 0px 0px 0px 2px;\n  width: 100%;\n}\n\n.mainBorder.loading[_ngcontent-%COMP%] {\n  background-color: #005d7e !important;\n  color: #fff;\n  padding: 15px !important;\n  margin-bottom: 15px;\n}\n\n.dataMain[_ngcontent-%COMP%] {\n  margin: 5px;\n  width: 90%;\n}\n\n.dataMain[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  width: 200px;\n  padding: 10px;\n  font-weight: bold;\n  vertical-align: top;\n}\n\n.dataMain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  vertical-align: top;\n}\n\n.dataMain[_ngcontent-%COMP%]   td.buttons[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.links-panel[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.links-panel.card.ml-1.mt-2[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n}\n\n.create-search-button-group[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.create-delete-button-group[_ngcontent-%COMP%] {\n  float: left;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-right: 5px !important;\n}\n\n.searchForm[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.searchForm[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding: 5px 10px 5px 0px;\n}\n\n.searchForm[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding-right: 20px;\n  width: 150px;\n}\n\n.searchForm[_ngcontent-%COMP%]   select.multiple[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.searchForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n\n.searchForm[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\n.submit[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.submit[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  margin: 10px;\n  text-align: right;\n}\n\n.buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #4A49A8;\n  text-align: center;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n  margin: 5px;\n  font-size: 14px !important;\n}\n\n.mainSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #00f !important;\n  text-decoration: underline !important;\n}\n\n.mainSection[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-bottom: 13px !important;\n  font-size: 12px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .blueHeader[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #0073b9;\n  color: #fff;\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: #005518;\n  color: #fff;\n  padding: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .editButton[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  text-align: right;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain.files[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 200px;\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties.files[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  width: 100%;\n  margin-bottom: 5px;\n}\n\n.experimentConfigurations[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  width: 300px;\n}\n\nul[_ngcontent-%COMP%] {\n  padding-left: 13px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%] {\n  min-width: 650px;\n}\n\n.files[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\nlabel.right[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2NhbmFub2xhYi1jbGllbnQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9teS13b3Jrc3BhY2UuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9tYWluLWRpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJBO0VBQ0ksNkRBRm9CO0FDZHhCOztBRG1CQTtFQUNJLDZEQU5vQjtBQ1Z4Qjs7QURrQkE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ2ZEOztBRG9CQTtFQUVJLHlCQTdCcUI7RUE4QnJCLFlBM0JZO0VBNEJmLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNsQkQ7O0FEcUJBO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ25CSjs7QURzQkE7RUFFSSx5QkE3Q3FCO0VBOENyQixxQkFBQTtFQUNBLDZCQUFBO0FDcEJKOztBRHVCQTtFQUNJLGtFQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDcEJKOztBRHdCQTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUNyQko7O0FEdUJJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNyQlI7O0FEeUJBLG1CQUFBOztBQUNBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ3RCSjs7QUR5QkEsaUJBQUE7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FDdEJKOztBRHlCQSxvQkFBQTs7QUFDQTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUN0Qko7O0FEeUJBLGtCQUFBOztBQUNBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ3RCSjs7QUR5QkE7RUFDSSxhQUFBO0FDdEJKOztBRHlCQTtFQUNJLDJCQUFBO0VBQ0EseUJBQUE7RUFJQSxpQkFBQTtFQUNBLHlCQUFBO0FDdEJKOztBRHlCQTtFQUNJ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QURnUko7O0FDN1FBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QURnUko7O0FDNVFBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBRCtRSjs7QUM1UUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBRCtRSjs7QUMzUUE7RUFDSSxnQkFBQTtBRDhRSjs7QUMzUUE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7QUQ4UUo7O0FDM1FBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUQ4UUo7O0FDMVFBO0VBQ0ksaUJBQUE7QUQ2UUoiLCJmaWxlIjoibXktd29ya3NwYWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiRjYW5hbm8tZ3JlZW46ICMwMDU1MTg7XG4kY2FuYW5vLWJsdWU6ICMwMDczYjk7XG4kY2FuYW5vLWJhY2tncm91bmQtYmx1ZTogIzAyMDU1YTtcbiRtZW51SGVhZGluZ0JhY2tncm91bmRDb2xvcjogIzAwNWQ3ZTtcbiRsZWZ0TWVudUJvcmRlckNvbG9yOiM4OEJDRTI7XG4kbGVmdE1lbnVXaWR0aDogMTYwcHg7XG4kbGVmdE1lbnVNYXJnaW46IDBweDtcbiRuYXZCdXR0b25Db2xvcjojODFGRkZFO1xuJGJvcmRlckNvbG9yOiAkbGVmdE1lbnVCb3JkZXJDb2xvcjtcbiRtYWluRm9udFNpemU6MTJweDtcbiRrZXl3b3JkU2VhcmNoRm9udFNpemU6IDEycHg7XG4kb2RkUm93Q29sb3I6I2VmZWRlZDtcbiRtYWluRGlzcGxheUhlYWRpbmdIZWlnaHQ6IDI4cHg7XG4kbWFpbkRpc3BsYXlIZWFkaW5nTWFyZ2luOiA4cHg7XG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjphcmlhbCxoZWx2ZXRpY2EsdmVyZGFuYSxzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG5odG1sIHtcbiAgICBmb250LWZhbWlseTokZm9udC1mYW1pbHktc2Fucy1zZXJpZjtcblxufVxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6JGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY7XG59XG4uaGVhZGVyIHtcblx0bWFyZ2luOjBweDtcblx0cGFkZGluZzowcHg7XG59XG4uaG9tZSB7XG59XG5cbnRkLmxlZnRNZW51IHtcbiAgICBAZXh0ZW5kIC5ob21lO1xuICAgIGJhY2tncm91bmQtY29sb3I6JGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU7XG4gICAgd2lkdGg6JGxlZnRNZW51V2lkdGg7XG5cdG1hcmdpbjowcHg7XG5cdHBhZGRpbmc6MHB4O1xuXHR2ZXJ0aWNhbC1hbGlnbjp0b3A7XG59XG5cbnRkLm1haW5Db250ZW50IHtcbiAgICBAZXh0ZW5kIC5ob21lO1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbiAgICBwYWRkaW5nOjBweDtcbiAgICBtYXJnaW46MHB4O1xufVxuXG4uZm9vdGVyIHtcbiAgICBAZXh0ZW5kIC5ob21lO1xuICAgIGJhY2tncm91bmQtY29sb3I6JGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU7XG4gICAgYm9yZGVyOnNvbGlkICRsZWZ0TWVudUJvcmRlckNvbG9yO1xuICAgIGJvcmRlci13aWR0aDoxcHggMXB4IDFweCAwcHg7XG59XG5cbi5wYXJlbnQtZGl2e1xuICAgIC8qIGtlZXAgdGhlIFF1ZXJ5IHNlY3Rpb24gYW5kIHRoZSBEaXNwbGF5IHNlY3Rpb24gc2lkZSBieSBzaWRlLiAgKi9cbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi8vIEBGSVhNRSAtIFRoZXNlIGNvbG9ycyBuZWVkIHZhcmlhYmxlc1xuLmxpbmstY2xpY2tlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICMzMzM7XG5cbiAgICAmOmhvdmVye1xuICAgICAgICBjb2xvcjogI2E5MDEwMTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuLyogdW52aXNpdGVkIGxpbmsgKi9cbmE6bGlua3tcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi8qIHZpc2l0ZWQgbGluayAqL1xuYTp2aXNpdGVke1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogIzMzMztcbn1cblxuLyogbW91c2Ugb3ZlciBsaW5rICovXG5hOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogI2E5MDEwMTtcbn1cblxuLyogc2VsZWN0ZWQgbGluayAqL1xuYTphY3RpdmV7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4uaGlkZXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4udW5zZWxlY3RhYmxle1xuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaGFuZCB7XG4gICAgY3Vyc29yOnBvaW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmNsaWNrZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi5zZWFyY2gtcmVzdWx0cy10YWJsZXtcbiAgICBmb250LXNpemU6ICRtYWluRm9udFNpemU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBzb2xpZCAjY2NjIDFweDtcbn1cblxuLnNlYXJjaC1yZXN1bHRzLXRye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiBzb2xpZCAjY2NjIDFweDtcbn1cblxuLnNlYXJjaC1yZXN1bHRzLXRoe1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICAvLyAgYm9yZGVyOiBzb2xpZCAjZGZkZmRmIDJweDtcbiAgICBib3JkZXI6IHNvbGlkICNjY2MgMXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjYW5hbm8tYmx1ZTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLnNlYXJjaC1yZXN1bHRzLXRke1xuICAgIHBhZGRpbmc6IDZweDtcbiAgICAvLyBib3JkZXI6IHNvbGlkICNkZmRmZGYgMnB4O1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAjY2NjIDFweDtcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkICNjY2MgMXB4O1xufVxuXG4ucm93T2Rke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRvZGRSb3dDb2xvcjtcbn1cblxuLnNlYXJjaC1yZXN1bHRzLS10ci1vZGR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuaW1nIHtcblx0Ym9yZGVyLXdpZHRoOjBweDtcblx0bWFyZ2luOjBweDtcblx0cGFkZGluZzowcHg7XG5cbn1cblxuLnNwYWNlciB7XG4gICAgcGFkZGluZy1sZWZ0OiRsZWZ0TWVudVdpZHRoO1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG4uc3BhY2VyLmNlbnRlciB7XG4gICAgY29sb3I6JGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU7XG59XG5cblxuLmZvb3RlciB7XG5cdHBhZGRpbmc6MHB4IDBweCAwcHggMTYwcHg7XG5cdHZlcnRpY2FsLWFsaWduOm1pZGRsZSAhaW1wb3J0YW50O1xuXHR0ZXh0LWFsaWduOmNlbnRlcjtcblx0YmFja2dyb3VuZC1jb2xvcjokY2FuYW5vLWJhY2tncm91bmQtYmx1ZTtcbiAgICBib3JkZXI6c29saWQgJGxlZnRNZW51Qm9yZGVyQ29sb3I7XG4gICAgYm9yZGVyLXdpZHRoOjFweCAxcHggMXB4IDBweDtcbiAgICBmb250LXNpemU6JG1haW5Gb250U2l6ZTtcbn07XG5cblxuLmZvb3Rlci53aGl0ZXtcblx0YmFja2dyb3VuZC1jb2xvcjojZmZmO1xuXHRib3JkZXI6MHB4O1xuXHRwYWRkaW5nOjEwcHggMHB4IDBweCAwcHg7XG5cdGZvbnQtc2l6ZTo5LjVweDtcbiAgICBjb2xvcjojMzMzO1xufTtcblxuLmZvb3Rlci53aGl0ZSBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZSAhaW1wb3J0YW50O1xufTtcblxuLmZvb3Rlci53aGl0ZSBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IzMzMztcbn1cblxuLmZvb3Rlci53aGl0ZS5yZWxlYXNlIHtcbiAgICBmb250LXNpemU6MTJweCAhaW1wb3J0YW50O1xuXHRmb250LXdlaWdodDpub3JtYWwgIWltcG9ydGFudDtcblx0Y29sb3I6IzRBNDlBODtcbn1cblxuLmZvb3Rlci53aGl0ZSAuZGl2aWRlciB7XG5cdHBhZGRpbmc6MHB4IDEwcHggMHB4IDEwcHg7XG59O1xuXG4uZm9vdGVyIHVsIHtcbiAgICBtYXJnaW46MHB4O1xuICAgIHBhZGRpbmc6MHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbiAgICBsaXN0LXN0eWxlOm5vbmU7XG59O1xuXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIHtcbiAgICBwYWRkaW5nOjBweDtcbiAgICBtYXJnaW46MHB4O1xuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xufVxuXG5cbi5mb290ZXIgdWwgbGkuZm9vdGVyLWl0ZW0gLm5hdi1saW5rLm5hdi1tZW51LXRvcC1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlO1xuICAgIGNvbG9yOiRuYXZCdXR0b25Db2xvcjtcbiAgICBib3JkZXI6IHNvbGlkICRsZWZ0TWVudUJvcmRlckNvbG9yO1xuICAgIGJvcmRlci13aWR0aDowcHggMXB4IDBweCAwcHg7XG4gICAgcGFkZGluZzo0cHggMTVweCA0cHggMTVweDtcbiAgICBtYXJnaW46MHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcblx0dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xuXHRmb250LXdlaWdodDpib2xkO1xuXHRvdXRsaW5lOjA7XG59XG5cbi5mb290ZXIgdWwgbGkuZm9vdGVyLWl0ZW0gLm5hdi1saW5rLm5hdi1tZW51LXRvcC1pdGVtLmxlZnR7XG4gICAgYm9yZGVyOiBzb2xpZCAkbGVmdE1lbnVCb3JkZXJDb2xvcjtcbiAgICBib3JkZXItd2lkdGg6MHB4IDFweCAwcHggMXB4O1xufVxuXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIC5uYXYtbGluay5uYXYtbWVudS10b3AtaXRlbTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRuYXZCdXR0b25Db2xvcjtcbiAgICBjb2xvcjokY2FuYW5vLWJhY2tncm91bmQtYmx1ZTtcbiAgICBtYXJnaW46MHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbn1cblxuLnJvd09kZCB7XG5cdGJhY2tncm91bmQtY29sb3I6JG9kZFJvd0NvbG9yO1xufVxuXG50YWJsZS5kYXRhVGFibGV7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuXG59XG5cbnRhYmxlLmRhdGFUYWJsZSB0aHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3M2I5O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6M3B4IDNweCAzcHggNXB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRke1xuXHRwYWRkaW5nOjVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuXHR3aWR0aDoyNTBweDtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRkLmFjdGlvbnMgIHtcblx0d2lkdGg6MTEwcHggIWltcG9ydGFudDtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRkLmFjdGlvbnMgZGl2IHtcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdG1hcmdpbjowcHggNHB4IDBweCAwcHg7XG59XG5cbi5hY3Rpb25zIGRpdiB7XG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xuXHRtYXJnaW46MHB4IDRweCAwcHggMHB4O1xufVxuXG4ubXlGaWx0ZXJzIGxhYmVsIHtcbiAgICBtYXJnaW4tbGVmdDo1cHg7XG59XG4iLCJodG1sIHtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBoZWx2ZXRpY2EsIHZlcmRhbmEsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbCwgaGVsdmV0aWNhLCB2ZXJkYW5hLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXIge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG50ZC5sZWZ0TWVudSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjA1NWE7XG4gIHdpZHRoOiAxNjBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxudGQubWFpbkNvbnRlbnQge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyMDU1YTtcbiAgYm9yZGVyOiBzb2xpZCAjODhCQ0UyO1xuICBib3JkZXItd2lkdGg6IDFweCAxcHggMXB4IDBweDtcbn1cblxuLnBhcmVudC1kaXYge1xuICAvKiBrZWVwIHRoZSBRdWVyeSBzZWN0aW9uIGFuZCB0aGUgRGlzcGxheSBzZWN0aW9uIHNpZGUgYnkgc2lkZS4gICovXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5saW5rLWNsaWNrZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBjb2xvcjogIzMzMztcbn1cbi5saW5rLWNsaWNrZXI6aG92ZXIge1xuICBjb2xvcjogI2E5MDEwMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiB1bnZpc2l0ZWQgbGluayAqL1xuYTpsaW5rIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi8qIHZpc2l0ZWQgbGluayAqL1xuYTp2aXNpdGVkIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi8qIG1vdXNlIG92ZXIgbGluayAqL1xuYTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjYTkwMTAxO1xufVxuXG4vKiBzZWxlY3RlZCBsaW5rICovXG5hOmFjdGl2ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi51bnNlbGVjdGFibGUge1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmhhbmQge1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmNsaWNrZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy10YWJsZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgI2NjYyAxcHg7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy10ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogc29saWQgI2NjYyAxcHg7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy10aCB7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyOiBzb2xpZCAjY2NjIDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzNiOTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy10ZCB7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkICNjY2MgMXB4O1xuICBib3JkZXItcmlnaHQ6IHNvbGlkICNjY2MgMXB4O1xufVxuXG4ucm93T2RkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWRlZDtcbn1cblxuLnNlYXJjaC1yZXN1bHRzLS10ci1vZGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG5pbWcge1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnNwYWNlciB7XG4gIHBhZGRpbmctbGVmdDogMTYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNwYWNlci5jZW50ZXIge1xuICBjb2xvcjogIzAyMDU1YTtcbn1cblxuLmZvb3RlciB7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDE2MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAyMDU1YTtcbiAgYm9yZGVyOiBzb2xpZCAjODhCQ0UyO1xuICBib3JkZXItd2lkdGg6IDFweCAxcHggMXB4IDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZm9vdGVyLndoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAwcHg7XG4gIHBhZGRpbmc6IDEwcHggMHB4IDBweCAwcHg7XG4gIGZvbnQtc2l6ZTogOS41cHg7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uZm9vdGVyLndoaXRlIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmZvb3Rlci53aGl0ZSBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5mb290ZXIud2hpdGUucmVsZWFzZSB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNEE0OUE4O1xufVxuXG4uZm9vdGVyLndoaXRlIC5kaXZpZGVyIHtcbiAgcGFkZGluZzogMHB4IDEwcHggMHB4IDEwcHg7XG59XG5cbi5mb290ZXIgdWwge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIC5uYXYtbGluay5uYXYtbWVudS10b3AtaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjA1NWE7XG4gIGNvbG9yOiAjODFGRkZFO1xuICBib3JkZXI6IHNvbGlkICM4OEJDRTI7XG4gIGJvcmRlci13aWR0aDogMHB4IDFweCAwcHggMHB4O1xuICBwYWRkaW5nOiA0cHggMTVweCA0cHggMTVweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBvdXRsaW5lOiAwO1xufVxuXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIC5uYXYtbGluay5uYXYtbWVudS10b3AtaXRlbS5sZWZ0IHtcbiAgYm9yZGVyOiBzb2xpZCAjODhCQ0UyO1xuICBib3JkZXItd2lkdGg6IDBweCAxcHggMHB4IDFweDtcbn1cblxuLmZvb3RlciB1bCBsaS5mb290ZXItaXRlbSAubmF2LWxpbmsubmF2LW1lbnUtdG9wLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFGRkZFO1xuICBjb2xvcjogIzAyMDU1YTtcbiAgbWFyZ2luOiAwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5yb3dPZGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZGVkO1xufVxuXG50YWJsZS5kYXRhVGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxudGFibGUuZGF0YVRhYmxlIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzNiOTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAzcHggM3B4IDNweCA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG50YWJsZS5kYXRhVGFibGUgdGQge1xuICBwYWRkaW5nOiA1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRkLmFjdGlvbnMge1xuICB3aWR0aDogMTEwcHggIWltcG9ydGFudDtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRkLmFjdGlvbnMgZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDBweCA0cHggMHB4IDBweDtcbn1cblxuLmFjdGlvbnMgZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDBweCA0cHggMHB4IDBweDtcbn1cblxuLm15RmlsdGVycyBsYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5vdXRlci1pbnB1dC1mcmFtZSB7XG4gIGJvcmRlcjogc29saWQgI2Q0ZDRkNCAycHg7XG59XG5cbi5tYWluU2VjdGlvbiB7XG4gIG1hcmdpbjogMTBweCAwcHggNXB4IDdweDtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1pbi13aWR0aDogMTE1MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluQm9yZGVyIHtcbiAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgbWFyZ2luOiAwcHggMHB4IDBweCAycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWFpbkJvcmRlci5sb2FkaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNWQ3ZSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZGF0YU1haW4ge1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmRhdGFNYWluIHRkLmxhYmVsIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmRhdGFNYWluIHRkIHtcbiAgcGFkZGluZzogMTBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuLmRhdGFNYWluIHRkLmJ1dHRvbnMge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmxpbmtzLXBhbmVsIHtcbiAgd2lkdGg6IDUwMHB4O1xufVxuXG4ubGlua3MtcGFuZWwuY2FyZC5tbC0xLm10LTIge1xuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jcmVhdGUtc2VhcmNoLWJ1dHRvbi1ncm91cCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmNyZWF0ZS1kZWxldGUtYnV0dG9uLWdyb3VwIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbmxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2hGb3JtIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5zZWFyY2hGb3JtIHRkIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDBweDtcbn1cblxuLnNlYXJjaEZvcm0gdGQubGFiZWwge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5zZWFyY2hGb3JtIHNlbGVjdC5tdWx0aXBsZSB7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLnNlYXJjaEZvcm0gc2VsZWN0IHtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi5zZWFyY2hGb3JtIHNwYW4ubGFiZWwge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uc3VibWl0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zdWJtaXQgdGQ6bGFzdC1jaGlsZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYnV0dG9ucyB7XG4gIG1hcmdpbjogMTBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5idXR0b25zIGRpdiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6ICM0QTQ5QTg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgbWFyZ2luOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuXG4ubWFpblNlY3Rpb24gYSB7XG4gIGNvbG9yOiAjMDBmICFpbXBvcnRhbnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluU2VjdGlvbiB0ZCB7XG4gIHBhZGRpbmctYm90dG9tOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm1haW5TZWN0aW9uIC5ibHVlSGVhZGVyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzNiOTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ubWFpblNlY3Rpb24gLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDU1MTg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ubWFpblNlY3Rpb24gLmhlYWRlciAuYnRuIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5tYWluU2VjdGlvbiAuZWRpdEJ1dHRvbiB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4uZmlsZXMge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gdGQge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXMge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIC5wcm9wZXJ0aWVzIHRoIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDE1MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gdGQubGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2lkdGg6IDIwMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXMgdGQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMTUwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllcy5maWxlcyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5leHBlcmltZW50Q29uZmlndXJhdGlvbnMgdGQge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbnVsIHtcbiAgcGFkZGluZy1sZWZ0OiAxM3B4O1xufVxuXG4uZGF0YUFuZENvbmRpdGlvbnMgdGQge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLmRhdGFBbmRDb25kaXRpb25zIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzNiOTtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLnByb3BlcnRpZXMgdGQge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnByb3BlcnRpZXMgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3M2I5O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xufVxuXG4uZmlsZXMge1xuICBtaW4td2lkdGg6IDY1MHB4O1xufVxuXG4uZmlsZXMgdGQge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5maWxlcyB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDczYjk7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbmxhYmVsLnJpZ2h0IHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59IiwiQGltcG9ydCAnLi4vY2FuYW5vbGFiLWNsaWVudC5jb21wb25lbnQuc2Nzcyc7XG5cbi5vdXRlci1pbnB1dC1mcmFtZXtcbiAgICBib3JkZXI6IHNvbGlkICNkNGQ0ZDQgMnB4O1xufVxuLm1haW5TZWN0aW9uIHtcbiAgICBtYXJnaW46MTBweCAwcHggNXB4IDdweDtcbiAgICBwYWRkaW5nOjBweDtcbiAgICBmb250LXNpemU6JG1haW5Gb250U2l6ZTtcbiAgICBtaW4td2lkdGg6MTE1MHB4ICFpbXBvcnRhbnQ7XG5cbn1cbi5tYWluQm9yZGVyIHtcbiAgICBwYWRkaW5nOjE1cHggMTVweCAxNXB4IDE1cHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIG1hcmdpbjowcHggMHB4IDBweCAycHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbn1cblxuLm1haW5Cb3JkZXIubG9hZGluZyB7XG5cdGJhY2tncm91bmQtY29sb3I6JG1lbnVIZWFkaW5nQmFja2dyb3VuZENvbG9yICFpbXBvcnRhbnQ7XG5cdGNvbG9yOiNmZmY7XG5cdHBhZGRpbmc6MTVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206MTVweDtcbn1cblxuLmRhdGFNYWluICB7XG4gICAgbWFyZ2luOjVweDtcbiAgICB3aWR0aDo5MCU7XG59XG5cbi5kYXRhTWFpbiB0ZC5sYWJlbCB7XG4gICAgd2lkdGg6MjAwcHg7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xufVxuLmRhdGFNYWluIHRkIHtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xufVxuXG4uZGF0YU1haW4gdGQuYnV0dG9ucyB7XG4gICAgdGV4dC1hbGlnbjpyaWdodDtcbn1cblxuXG4ubGlua3MtcGFuZWx7XG4gICAgd2lkdGg6IDUwMHB4OyAgLy8gQEZJWE1FIC0gbWFrZSBhIGNvbnN0XG59XG5cbi5saW5rcy1wYW5lbC5jYXJkLm1sLTEubXQtMiB7XG5cdG1hcmdpbi1sZWZ0OjBweCAhaW1wb3J0YW50XG59XG5cbi5jcmVhdGUtc2VhcmNoLWJ1dHRvbi1ncm91cHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4uY3JlYXRlLWRlbGV0ZS1idXR0b24tZ3JvdXB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbmxhYmVsIHtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIG1hcmdpbi1yaWdodDo1cHggIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaEZvcm0ge1xuICAgIG1hcmdpbjo1cHg7XG59XG5cbi5zZWFyY2hGb3JtIHRke1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbiAgICBwYWRkaW5nOjVweCAxMHB4IDVweCAwcHg7XG59XG5cbi5zZWFyY2hGb3JtIHRkLmxhYmVse1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XG4gICAgd2lkdGg6MTUwcHg7XG59XG5cbi5zZWFyY2hGb3JtIHNlbGVjdC5tdWx0aXBsZSB7XG4gICAgd2lkdGg6MTUwcHg7XG59XG5cbi5zZWFyY2hGb3JtIHNlbGVjdCB7XG4gICAgbWFyZ2luLXJpZ2h0OjRweDtcbn1cblxuLnNlYXJjaEZvcm0gc3Bhbi5sYWJlbCB7XG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xufVxuXG4uc3VibWl0IHtcbiAgICB3aWR0aDoxMDAlO1xufVxuXG4uc3VibWl0IHRkOmxhc3QtY2hpbGQge1xuICAgIHRleHQtYWxpZ246cmlnaHQ7XG59XG5cbi5idXR0b25zIHtcbiAgICBtYXJnaW46MTBweDtcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xufVxuXG4uYnV0dG9ucyBkaXYge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBjb2xvcjojNEE0OUE4O1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG4uZXJyb3Ige1xuICAgIGNvbG9yOnJlZDtcbiAgICBtYXJnaW46NXB4O1xuICAgIGZvbnQtc2l6ZToxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluU2VjdGlvbiBhIHtcbiAgICBjb2xvcjojMDBmICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcbn1cblxuLm1haW5TZWN0aW9uIHRkIHtcbiAgICBwYWRkaW5nLWJvdHRvbToxM3B4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiRtYWluRm9udFNpemU7XG5cbn1cbi5tYWluU2VjdGlvbiAuYmx1ZUhlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6MTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMDA3M2I5O1xuICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLm1haW5TZWN0aW9uIC5oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IzAwNTUxODtcbiAgICBjb2xvcjojZmZmO1xuICAgIHBhZGRpbmc6MTBweDtcbn1cblxuICAgIC5tYWluU2VjdGlvbiAuaGVhZGVyIC5idG4ge1xuICAgICAgICBtYXJnaW4tbGVmdDoxMHB4O1xuICAgIH1cblxuLm1haW5TZWN0aW9uIC5lZGl0QnV0dG9ue1xuICAgIHBhZGRpbmctdG9wOjVweDtcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xufVxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluLmZpbGVze1xuICAgIG1hcmdpbi1ib3R0b206MTBweDtcbn1cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiB0ZHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG59XG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXN7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXMgdGh7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIHdpZHRoOjE1MHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XG59XG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gdGQubGFiZWx7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICB3aWR0aDoyMDBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG59XG5cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllcyB0ZHtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgd2lkdGg6MTUwcHg7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcbn1cblxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIC5wcm9wZXJ0aWVzLmZpbGVze1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206NXB4O1xufVxuXG4uZXhwZXJpbWVudENvbmZpZ3VyYXRpb25zIHRkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XG4gICAgd2lkdGg6MzAwcHg7XG59XG4gdWwge1xuICAgcGFkZGluZy1sZWZ0OjEzcHg7XG59XG5cblxuLmRhdGFBbmRDb25kaXRpb25zIHRke1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICB3aWR0aDoyMDBweDtcbn1cblxuLmRhdGFBbmRDb25kaXRpb25zIHRoe1xuICAgIGJhY2tncm91bmQtY29sb3I6IzAwNzNiOTtcbiAgICBjb2xvcjojZmZmO1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbiAgICBib3JkZXI6MXB4ICBzb2xpZCAjY2NjO1xuXG59XG5cbi5wcm9wZXJ0aWVzIHRke1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICB3aWR0aDoyMDBweDtcbn1cblxuLnByb3BlcnRpZXMgdGh7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA3M2I5O1xuICAgIGNvbG9yOiNmZmY7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIGJvcmRlcjoxcHggIHNvbGlkICNjY2M7XG5cbn1cblxuLmZpbGVzIHtcbiAgICBtaW4td2lkdGg6NjUwcHg7XG59XG5cbi5maWxlcyB0ZHtcbiAgICBwYWRkaW5nOjVweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG59XG5cbi5maWxlcyB0aHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDczYjk7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBwYWRkaW5nOjVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgYm9yZGVyOjFweCAgc29saWQgI2NjYztcblxufVxuXG5sYWJlbC5yaWdodCB7XG4gICAgcGFkZGluZy1sZWZ0OjVweDtcbn1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyWorkspaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'canano-my-workspace',
                templateUrl: './my-workspace.component.html',
                styleUrls: ['./my-workspace.component.scss']
            }]
    }], function () { return [{ type: _common_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _protocols_protocols_service__WEBPACK_IMPORTED_MODULE_4__["ProtocolsService"] }]; }, null); })();


/***/ }),

/***/ "vRwl":
/*!*******************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/my-workspace/my-workspace-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: MyWorkspaceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWorkspaceRoutingModule", function() { return MyWorkspaceRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _my_workspace_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-workspace.component */ "6t4c");





const routes = [{ path: '', component: _my_workspace_component__WEBPACK_IMPORTED_MODULE_2__["MyWorkspaceComponent"] }];
class MyWorkspaceRoutingModule {
}
MyWorkspaceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MyWorkspaceRoutingModule });
MyWorkspaceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MyWorkspaceRoutingModule_Factory(t) { return new (t || MyWorkspaceRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MyWorkspaceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyWorkspaceRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=cananolab-client-main-display-my-workspace-my-workspace-module.js.map