(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cananolab-client-main-display-protocols-protocol-search-protocol-search-results-protocol-search-results-module"],{

/***/ "9p9H":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/protocols/protocol-search/protocol-search-results/protocol-search-results.module.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: ProtocolSearchResultsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtocolSearchResultsModule", function() { return ProtocolSearchResultsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _protocol_search_results_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./protocol-search-results.component */ "ecAG");
/* harmony import */ var _protocol_search_results_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./protocol-search-results-routing.module */ "oIcT");
/* harmony import */ var _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/modules/set-object-value/shared.module */ "0U9J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _protocol_search_results_display_title_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./protocol-search-results-display-title.pipe */ "SdJ4");
/* harmony import */ var _protocol_search_results_display_description_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./protocol-search-results-display-description.pipe */ "Q3yT");
/* harmony import */ var _protocol_search_results_display_href_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./protocol-search-results-display-href.pipe */ "HCSS");










class ProtocolSearchResultsModule {
}
ProtocolSearchResultsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProtocolSearchResultsModule });
ProtocolSearchResultsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProtocolSearchResultsModule_Factory(t) { return new (t || ProtocolSearchResultsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _protocol_search_results_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProtocolSearchResultsRoutingModule"],
            _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProtocolSearchResultsModule, { declarations: [_protocol_search_results_component__WEBPACK_IMPORTED_MODULE_2__["ProtocolSearchResultsComponent"],
        _protocol_search_results_display_title_pipe__WEBPACK_IMPORTED_MODULE_6__["ProtocolSearchResultsDisplayTitlePipe"],
        _protocol_search_results_display_description_pipe__WEBPACK_IMPORTED_MODULE_7__["ProtocolSearchResultsDisplayDescriptionPipe"],
        _protocol_search_results_display_href_pipe__WEBPACK_IMPORTED_MODULE_8__["ProtocolSearchResultsDisplayHrefPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _protocol_search_results_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProtocolSearchResultsRoutingModule"],
        _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProtocolSearchResultsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _protocol_search_results_component__WEBPACK_IMPORTED_MODULE_2__["ProtocolSearchResultsComponent"],
                    _protocol_search_results_display_title_pipe__WEBPACK_IMPORTED_MODULE_6__["ProtocolSearchResultsDisplayTitlePipe"],
                    _protocol_search_results_display_description_pipe__WEBPACK_IMPORTED_MODULE_7__["ProtocolSearchResultsDisplayDescriptionPipe"],
                    _protocol_search_results_display_href_pipe__WEBPACK_IMPORTED_MODULE_8__["ProtocolSearchResultsDisplayHrefPipe"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _protocol_search_results_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProtocolSearchResultsRoutingModule"],
                    _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "HCSS":
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/protocols/protocol-search/protocol-search-results/protocol-search-results-display-href.pipe.ts ***!
  \**********************************************************************************************************************************************/
/*! exports provided: ProtocolSearchResultsDisplayHrefPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtocolSearchResultsDisplayHrefPipe", function() { return ProtocolSearchResultsDisplayHrefPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProtocolSearchResultsDisplayHrefPipe {
    transform(value) {
        if (value === undefined) {
            return '';
        }
        let temp = value.replace(/^.*<a\s*href=/, '').replace(/\s*target=.*$/, '').replace(/<br>/gi, '');
        return temp;
    }
}
ProtocolSearchResultsDisplayHrefPipe.ɵfac = function ProtocolSearchResultsDisplayHrefPipe_Factory(t) { return new (t || ProtocolSearchResultsDisplayHrefPipe)(); };
ProtocolSearchResultsDisplayHrefPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "protocolSearchResultsDisplayHref", type: ProtocolSearchResultsDisplayHrefPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProtocolSearchResultsDisplayHrefPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'protocolSearchResultsDisplayHref'
            }]
    }], null, null); })();


/***/ }),

/***/ "Q3yT":
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/protocols/protocol-search/protocol-search-results/protocol-search-results-display-description.pipe.ts ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: ProtocolSearchResultsDisplayDescriptionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtocolSearchResultsDisplayDescriptionPipe", function() { return ProtocolSearchResultsDisplayDescriptionPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProtocolSearchResultsDisplayDescriptionPipe {
    transform(value) {
        if (value === undefined) {
            return '';
        }
        let temp = value.replace(/^.*Description:/, '').replace(/<a.*$/, '').replace(/<br>/gi, '');
        return temp;
    }
}
ProtocolSearchResultsDisplayDescriptionPipe.ɵfac = function ProtocolSearchResultsDisplayDescriptionPipe_Factory(t) { return new (t || ProtocolSearchResultsDisplayDescriptionPipe)(); };
ProtocolSearchResultsDisplayDescriptionPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "protocolSearchResultsDisplayDescription", type: ProtocolSearchResultsDisplayDescriptionPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProtocolSearchResultsDisplayDescriptionPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'protocolSearchResultsDisplayDescription'
            }]
    }], null, null); })();


/***/ }),

/***/ "SdJ4":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/protocols/protocol-search/protocol-search-results/protocol-search-results-display-title.pipe.ts ***!
  \***********************************************************************************************************************************************/
/*! exports provided: ProtocolSearchResultsDisplayTitlePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtocolSearchResultsDisplayTitlePipe", function() { return ProtocolSearchResultsDisplayTitlePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProtocolSearchResultsDisplayTitlePipe {
    transform(value) {
        if (value === undefined) {
            return '';
        }
        let temp = value.replace(/^Title:/, '').replace(/Description:.*$/, '').replace(/<br>/gi, '');
        return temp;
    }
}
ProtocolSearchResultsDisplayTitlePipe.ɵfac = function ProtocolSearchResultsDisplayTitlePipe_Factory(t) { return new (t || ProtocolSearchResultsDisplayTitlePipe)(); };
ProtocolSearchResultsDisplayTitlePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "protocolSearchResultsDisplayTitle", type: ProtocolSearchResultsDisplayTitlePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProtocolSearchResultsDisplayTitlePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'protocolSearchResultsDisplayTitle'
            }]
    }], null, null); })();


/***/ }),

/***/ "ecAG":
/*!**************************************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/protocols/protocol-search/protocol-search-results/protocol-search-results.component.ts ***!
  \**************************************************************************************************************************************/
/*! exports provided: ProtocolSearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtocolSearchResultsComponent", function() { return ProtocolSearchResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../constants */ "l207");
/* harmony import */ var _assets_properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../assets/properties */ "DzTi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_components_search_results_pager_search_results_pager_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/components/search-results-pager/search-results-pager.service */ "7nox");
/* harmony import */ var _common_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/services/util.service */ "WHaB");
/* harmony import */ var _protocols_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../protocols.service */ "zscP");
/* harmony import */ var _common_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/services/api.service */ "WHDV");
/* harmony import */ var _status_display_status_display_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../status-display/status-display.service */ "X3t+");
/* harmony import */ var src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/cananolab-client/main-display/main-display-heading/main-display-heading.component */ "AYD1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _common_components_search_results_pager_search_results_pager_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../common/components/search-results-pager/search-results-pager.component */ "vqvm");
//
















function ProtocolSearchResultsComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No search results found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProtocolSearchResultsComponent_div_1_div_2_ng_container_11_th_1_span_3_span_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "use", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "use", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProtocolSearchResultsComponent_div_1_div_2_ng_container_11_th_1_span_3_span_1__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "use", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProtocolSearchResultsComponent_div_1_div_2_ng_container_11_th_1_span_3_span_1__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "use", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProtocolSearchResultsComponent_div_1_div_2_ng_container_11_th_1_span_3_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProtocolSearchResultsComponent_div_1_div_2_ng_container_11_th_1_span_3_span_1_span_1_Template, 5, 0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProtocolSearchResultsComponent_div_1_div_2_ng_container_11_th_1_span_3_span_1__svg_svg_2_Template, 2, 0, "svg", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProtocolSearchResultsComponent_div_1_div_2_ng_container_11_th_1_span_3_span_1__svg_svg_3_Template, 2, 0, "svg", 21);
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
function ProtocolSearchResultsComponent_div_1_div_2_ng_container_11_th_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProtocolSearchResultsComponent_div_1_div_2_ng_container_11_th_1_span_3_span_1_Template, 4, 3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r6 > 0);
} }
const _c0 = function (a0) { return { "hidden": a0 }; };
function ProtocolSearchResultsComponent_div_1_div_2_ng_container_11_th_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProtocolSearchResultsComponent_div_1_div_2_ng_container_11_th_1_Template_th_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const colKeyValue_r8 = ctx.$implicit; const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.onSortClick(i_r6, colKeyValue_r8.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProtocolSearchResultsComponent_div_1_div_2_ng_container_11_th_1_span_3_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colKeyValue_r8 = ctx.$implicit;
    const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r7.isProtocolView(colKeyValue_r8)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", colKeyValue_r8.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r6 > 0);
} }
function ProtocolSearchResultsComponent_div_1_div_2_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProtocolSearchResultsComponent_div_1_div_2_ng_container_11_th_1_Template, 4, 5, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const col_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, col_r5));
} }
function ProtocolSearchResultsComponent_div_1_div_2_tr_12_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProtocolSearchResultsComponent_div_1_div_2_tr_12_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const res_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r28.onEditClick(res_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProtocolSearchResultsComponent_div_1_div_2_tr_12_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const res_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", res_r20["addedToFavorites"][0], " ");
} }
function ProtocolSearchResultsComponent_div_1_div_2_tr_12_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProtocolSearchResultsComponent_div_1_div_2_tr_12_a_5_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const res_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r32.addToFavorites(res_r20, res_r20.id, res_r20.viewName, res_r20.fileId, res_r20.editable, res_r20.fileTitle); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add to Favorites");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProtocolSearchResultsComponent_div_1_div_2_tr_12_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const res_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r27.formatFileField(res_r20["fileInfo"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
const _c1 = function (a0, a1) { return { "": a0, "rowOdd": a1 }; };
function ProtocolSearchResultsComponent_div_1_div_2_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProtocolSearchResultsComponent_div_1_div_2_tr_12_a_2_Template, 2, 0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProtocolSearchResultsComponent_div_1_div_2_tr_12_div_3_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProtocolSearchResultsComponent_div_1_div_2_tr_12_a_5_Template, 2, 0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProtocolSearchResultsComponent_div_1_div_2_tr_12_span_15_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const res_r20 = ctx.$implicit;
    const even_r21 = ctx.even;
    const odd_r22 = ctx.odd;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](14, _c1, even_r21, odd_r22));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, !ctx_r4.properties.LOGGED_IN));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.properties.LOGGED_IN);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", res_r20["addedToFavorites"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.properties.LOGGED_IN && !res_r20["addedToFavorites"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", res_r20["type"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", res_r20["viewName"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", res_r20["abbreviation"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", res_r20["version"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", res_r20["fileInfo"].length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 11, res_r20["createdDate"], "shortDate"), " ");
} }
function ProtocolSearchResultsComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Show ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProtocolSearchResultsComponent_div_1_div_2_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.pageLength = $event; })("change", function ProtocolSearchResultsComponent_div_1_div_2_Template_input_change_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.onPageLengthChange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " entries ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "canano-search-results-pager", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProtocolSearchResultsComponent_div_1_div_2_ng_container_11_Template, 3, 3, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ProtocolSearchResultsComponent_div_1_div_2_tr_12_Template, 19, 19, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "canano-search-results-pager", 10);
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
function ProtocolSearchResultsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProtocolSearchResultsComponent_div_1_div_1_Template, 2, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProtocolSearchResultsComponent_div_1_div_2_Template, 15, 12, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.searchResults.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.searchResults.length);
} }
class ProtocolSearchResultsComponent {
    constructor(router, searchResultsPagerService, utilService, protocolsService, apiService, statusDisplayService) {
        this.router = router;
        this.searchResultsPagerService = searchResultsPagerService;
        this.utilService = utilService;
        this.protocolsService = protocolsService;
        this.apiService = apiService;
        this.statusDisplayService = statusDisplayService;
        this.columnHeadings = [
            { Actions: 'Actions' },
            { type: 'Protocol Type' },
            { viewName: 'Protocol Name' },
            { abbreviation: 'Abbreviation' },
            { version: 'Version' },
            { fileInfo: 'File' },
            { createdDate: 'Created' }
        ];
        this.consts = _constants__WEBPACK_IMPORTED_MODULE_3__["Consts"];
        this.maxPageLength = _assets_properties__WEBPACK_IMPORTED_MODULE_4__["Properties"].MAX_PAGE_LENGTH;
        this.pageLength = _assets_properties__WEBPACK_IMPORTED_MODULE_4__["Properties"].DEFAULT_PAGE_LENGTH;
        this.pageCount = 10;
        this.searchResultsCount = -1;
        this.currentPage = 0;
        this.sortingStates = [
            _constants__WEBPACK_IMPORTED_MODULE_3__["SortState"].NO_SORT,
            _constants__WEBPACK_IMPORTED_MODULE_3__["SortState"].NO_SORT,
            _constants__WEBPACK_IMPORTED_MODULE_3__["SortState"].NO_SORT,
            _constants__WEBPACK_IMPORTED_MODULE_3__["SortState"].NO_SORT,
            _constants__WEBPACK_IMPORTED_MODULE_3__["SortState"].NO_SORT,
            _constants__WEBPACK_IMPORTED_MODULE_3__["SortState"].NO_SORT,
            _constants__WEBPACK_IMPORTED_MODULE_3__["SortState"].NO_SORT
        ];
        this.sortState = _constants__WEBPACK_IMPORTED_MODULE_3__["SortState"];
        this.properties = _assets_properties__WEBPACK_IMPORTED_MODULE_4__["Properties"];
        this.fileTitle = '';
        this.fileDescription = '';
        this.fileHref = '';
        this.userName = 'X';
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        this.searchResults = this.protocolsService.getProtocolSearchResults();
        this.searchResultsPagerService.currentPageChangeEmitter
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.ngUnsubscribe))
            .subscribe((data) => {
            this.currentPage = data;
            this.setupPage();
        });
        this.statusDisplayService.updateUserEmitter
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["timeout"])(_assets_properties__WEBPACK_IMPORTED_MODULE_4__["Properties"].HTTP_TIMEOUT))
            .subscribe((data) => {
            this.userName = data;
        });
        this.searchResultsCount = this.searchResults.length;
        this.pageCount = Math.ceil(this.searchResultsCount / this.pageLength);
        this.onPageLengthChange();
    }
    isProtocolView(column) {
        if (!_assets_properties__WEBPACK_IMPORTED_MODULE_4__["Properties"].LOGGED_IN) {
            if (column['key'] == 'Actions') {
                return true;
            }
        }
        return false;
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
        this.setupPage(); // Sets this page as the currently viewed search results.
    }
    setupPage() {
        this.searchResultsPageToDisplay = this.searchResults.slice(this.pageLength * this.currentPage, this.pageLength * (this.currentPage + 1));
    }
    formatFileField(data) {
        console.log(data);
        data = data.replace('rest/', _constants__WEBPACK_IMPORTED_MODULE_3__["Consts"].serverlUrl + '/rest/');
        return data;
    }
    parseFileData(fileData) { }
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
    onEditClick(protocolToEdit) {
        this.router.navigate([
            'home/protocols/edit-protocol',
            protocolToEdit.id,
        ]);
        // this.protocolsService.setCurrentProtocolScreen( ProtocolScreen.PROTOCOL_EDIT_SCREEN, protocolToEdit.id );
    }
    onViewClick(protocolToView) {
        this.protocolsService.setCurrentProtocolScreen(_constants__WEBPACK_IMPORTED_MODULE_3__["ProtocolScreen"].PROTOCOL_VIEW_SCREEN, protocolToView.id);
    }
    addToFavorites(res, protocolId, protocolName, fileId, editable, protocolFileTitle, lo) {
        // api.doPost
        let queryData = {
            dataType: 'protocol',
            dataName: protocolName,
            dataId: protocolId,
            protocolFileId: fileId,
            protocolFileTitle: protocolFileTitle,
            editable: true,
            loginName: _assets_properties__WEBPACK_IMPORTED_MODULE_4__["Properties"].current_user,
        };
        this.apiService
            .doPost(_constants__WEBPACK_IMPORTED_MODULE_3__["Consts"].QUERY_ADD_FAVORITE, queryData)
            .subscribe((data) => {
            res['addedToFavorites'] = data;
            console.log('Data back from addToFavorites: ', data);
        }, (err) => {
            console.error('ERR Data back from addToFavorites: ', err);
        });
    }
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
ProtocolSearchResultsComponent.ɵfac = function ProtocolSearchResultsComponent_Factory(t) { return new (t || ProtocolSearchResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_components_search_results_pager_search_results_pager_service__WEBPACK_IMPORTED_MODULE_6__["SearchResultsPagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_protocols_service__WEBPACK_IMPORTED_MODULE_8__["ProtocolsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_status_display_status_display_service__WEBPACK_IMPORTED_MODULE_10__["StatusDisplayService"])); };
ProtocolSearchResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProtocolSearchResultsComponent, selectors: [["canano-protocol-search-results"]], decls: 2, vars: 4, consts: [[3, "helpUrl", "toolHeadingName", "backUrl"], ["class", "mainSection", 4, "ngIf"], [1, "mainSection"], ["class", "mainBorder", 4, "ngIf"], [4, "ngIf"], [1, "mainBorder"], [1, "ml-2"], [1, "search-results-pager"], [1, "ml-5"], ["min", "1", "type", "number", 1, "number-spinner", "rows-per-page-spinner", 3, "max", "ngModel", "ngModelChange", "change"], [2, "float", "right", 3, "totalCount", "startingPageLength"], [1, "dataTable"], [4, "ngFor", "ngForOf"], ["class", "search-results-tr", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "unselectable hand", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "unselectable", "hand", 3, "ngClass", "click"], ["for", "sortClick", 1, "hand"], ["id", "sortClick", "class", "inline", 4, "ngIf"], ["id", "sortClick", 1, "inline"], ["class", "sortImages", 4, "ngIf"], [1, "sortImages"], ["width", "10", "height", "10", "fill", "currentColor", 4, "ngIf"], ["width", "10", "height", "10", "fill", "currentColor"], [0, "xlink", "href", "assets/images/bootstrap-icons.svg#caret-up-fill"], [0, "xlink", "href", "assets/images/bootstrap-icons.svg#caret-down-fill"], [1, "search-results-tr", 3, "ngClass"], [1, "search-results-td", 3, "ngClass"], [3, "click", 4, "ngIf"], [1, "search-results-td", "protocol-search-results-type-td"], [1, "search-results-td"], [1, "search-results-td", "protocol-search-results-abbreviation-td"], [1, "search-results-td", "protocol-search-results-version-td"], [1, "search-results-td", "protocol-search-results-created-td"], [3, "click"], [3, "innerHtml"]], template: function ProtocolSearchResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canano-main-display-heading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProtocolSearchResultsComponent_div_1_Template, 3, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("helpUrl", "https://wiki.nci.nih.gov/display/caNanoLab/Managing+Protocols+in+caNanoLab#ManagingProtocolsincaNanoLab-ProtocolResults")("toolHeadingName", "Protocol Search Results")("backUrl", "home/protocols/protocol-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchResults);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProtocolSearchResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'canano-protocol-search-results',
                templateUrl: './protocol-search-results.component.html',
                styleUrls: ['./protocol-search-results.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _common_components_search_results_pager_search_results_pager_service__WEBPACK_IMPORTED_MODULE_6__["SearchResultsPagerService"] }, { type: _common_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"] }, { type: _protocols_service__WEBPACK_IMPORTED_MODULE_8__["ProtocolsService"] }, { type: _common_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] }, { type: _status_display_status_display_service__WEBPACK_IMPORTED_MODULE_10__["StatusDisplayService"] }]; }, null); })();


/***/ }),

/***/ "oIcT":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/protocols/protocol-search/protocol-search-results/protocol-search-results-routing.module.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: ProtocolSearchResultsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProtocolSearchResultsRoutingModule", function() { return ProtocolSearchResultsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _protocol_search_results_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./protocol-search-results.component */ "ecAG");





const routes = [{ path: '', component: _protocol_search_results_component__WEBPACK_IMPORTED_MODULE_2__["ProtocolSearchResultsComponent"] }];
class ProtocolSearchResultsRoutingModule {
}
ProtocolSearchResultsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProtocolSearchResultsRoutingModule });
ProtocolSearchResultsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProtocolSearchResultsRoutingModule_Factory(t) { return new (t || ProtocolSearchResultsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProtocolSearchResultsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProtocolSearchResultsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=cananolab-client-main-display-protocols-protocol-search-protocol-search-results-protocol-search-results-module.js.map