"use strict";
(self["webpackChunkcananolab_client_new"] = self["webpackChunkcananolab_client_new"] || []).push([["src_app_cananolab-client_main-display_protocols_protocol-search_protocol-search_module_ts"],{

/***/ 1883:
/*!***********************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/protocols/protocol-search/protocol-search-routing.module.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProtocolSearchRoutingModule": () => (/* binding */ ProtocolSearchRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _protocol_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./protocol-search.component */ 3554);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _protocol_search_component__WEBPACK_IMPORTED_MODULE_0__.ProtocolSearchComponent
}];
class ProtocolSearchRoutingModule {}
ProtocolSearchRoutingModule.ɵfac = function ProtocolSearchRoutingModule_Factory(t) {
  return new (t || ProtocolSearchRoutingModule)();
};
ProtocolSearchRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ProtocolSearchRoutingModule
});
ProtocolSearchRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProtocolSearchRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3554:
/*!******************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/protocols/protocol-search/protocol-search.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProtocolSearchComponent": () => (/* binding */ ProtocolSearchComponent)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../constants */ 4854);
/* harmony import */ var _assets_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../assets/properties */ 9552);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 5921);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _top_main_menu_top_main_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../top-main-menu/top-main-menu.service */ 8898);
/* harmony import */ var _common_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/api.service */ 6342);
/* harmony import */ var _common_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services/util.service */ 7117);
/* harmony import */ var _protocols_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../protocols.service */ 7311);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/cananolab-client/main-display/main-display-heading/main-display-heading.component */ 4567);
/* harmony import */ var _common_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/components/loader/loader.component */ 4110);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);














function ProtocolSearchComponent_div_1_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("value", option_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", option_r2, " ");
  }
}
function ProtocolSearchComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "canano-loader", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "form", 4)(3, "div", 5)(4, "table")(5, "tr")(6, "td", 6)(7, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, " Protocol Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "td")(10, "select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ProtocolSearchComponent_div_1_Template_select_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r3.protocolSearchForm.protocolType = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "--Select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, ProtocolSearchComponent_div_1_option_13_Template, 2, 2, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "tr")(15, "td", 6)(16, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, " Protocol Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "td")(19, "label", 12)(20, "select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ProtocolSearchComponent_div_1_Template_select_ngModelChange_20_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r5.protocolSearchForm.nameOperand = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "contains");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "equals");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ProtocolSearchComponent_div_1_Template_input_ngModelChange_25_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r6.protocolSearchForm.protocolName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "tr")(27, "td")(28, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, " Protocol Abbreviation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "td")(31, "label", 18)(32, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ProtocolSearchComponent_div_1_Template_select_ngModelChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r7.protocolSearchForm.abbreviationOperand = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34, "contains");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](36, "equals");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ProtocolSearchComponent_div_1_Template_input_ngModelChange_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r8.protocolSearchForm.protocolAbbreviation = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "tr")(39, "td")(40, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](41, " Protcol File Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "td")(43, "label", 22)(44, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ProtocolSearchComponent_div_1_Template_select_ngModelChange_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r9.protocolSearchForm.titleOperand = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "contains");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](48, "equals");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function ProtocolSearchComponent_div_1_Template_input_ngModelChange_49_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r10.protocolSearchForm.fileTitle = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 25)(51, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](52, " Searching without any parameters returns all protocols. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProtocolSearchComponent_div_1_Template_button_click_53_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r11.onResetClick());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](54, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function ProtocolSearchComponent_div_1_Template_button_click_55_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r12.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("loading", ctx_r0.loading)("message", ctx_r0.loadingMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r0.protocolSearchForm.protocolType);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selected", ctx_r0.protocolSearchForm.protocolType == "")("ngValue", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r0.protocolTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r0.protocolSearchForm.nameOperand);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r0.protocolSearchForm.protocolName);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r0.protocolSearchForm.abbreviationOperand);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r0.protocolSearchForm.protocolAbbreviation);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r0.protocolSearchForm.titleOperand);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r0.protocolSearchForm.fileTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r0.loading);
  }
}
class ProtocolSearchComponent {
  constructor(router, topMainMenuService, apiService, utilService, protocolsService) {
    this.router = router;
    this.topMainMenuService = topMainMenuService;
    this.apiService = apiService;
    this.utilService = utilService;
    this.protocolsService = protocolsService;
    this.loadingMessage = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.searchingMessage;
    this.helpUrl = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.HELP_URL_PROTOCOL_SEARCH;
    this.toolHeadingName = 'Protocol Search';
    this.toolHeadingNameSearchResults = 'Protocol Search Results';
    // List for the dropdown
    this.protocolTypes = [];
    this.protocol_search_protocol_name = '';
    this.protocolSearchProtocolType = '';
    this.protocolSearchProtocolType1 = '';
    this.protocolScreenToShow = _constants__WEBPACK_IMPORTED_MODULE_0__.ProtocolScreen.PROTOCOL_SEARCH_INPUT_SCREEN;
    this.protocolScreenInfo = '';
    this.searchResults = [];
    this.defaultOperand = 'contains';
    this.nameOperand = '';
    this.titleOperand = '';
    this.abbreviationOperand = '';
    this.protocolType = '';
    this.resetting = false;
    this.protocolScreen = _constants__WEBPACK_IMPORTED_MODULE_0__.ProtocolScreen;
    this.protocolName = '';
    this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
  }
  ngOnInit() {
    this.errors = {};
    this.protocolSearchForm = {
      "nameOperand": this.defaultOperand,
      "titleOperand": this.defaultOperand,
      "abbreviationOperand": this.defaultOperand,
      "fileTitle": "",
      "protocolType": "",
      "protocolName": ""
    };
    this.initData = JSON.parse(JSON.stringify(this.protocolSearchForm));
    // Listen for changing Protocol screens
    this.protocolsService.currentProtocolScreenEmitter.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.ngUnsubscribe)).subscribe(data => {
      this.errors = {};
      this.protocolScreenToShow = data.ps;
      this.protocolScreenInfo = data.info;
    }, error => {
      this.errors = error;
    });
    // Get Protocol types from server
    this.init();
  }
  onSubmit() {
    this.loading = true;
    this.loadingMessage = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.searchingMessage;
    this.apiService.doPost(_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.QUERY_SEARCH_PROTOCOL, this.protocolSearchForm).subscribe(data => {
      this.protocolsService.setProtocolSearchResults(data);
      this.router.navigate(['home/protocols/protocol-search-results']);
      this.errors = {};
      this.loading = null;
    }, err => {
      if (err.status === 404) {
        // @checkme
        this.errors = err;
        this.loading = null;
      }
    });
  }
  init() {
    // Get list of Protocol types for dropdown
    if (_assets_properties__WEBPACK_IMPORTED_MODULE_1__.Properties.PROTOCOL_TYPES.length < 1) {
      this.loading = true;
      this.loadingMessage = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.loadingMessage;
      this.apiService.doGet(_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.QUERY_PROTOCOL_SETUP, '').subscribe(data => {
        this.errors = {};
        this.protocolTypes = data['protocolTypes'];
        _assets_properties__WEBPACK_IMPORTED_MODULE_1__.Properties.PROTOCOL_TYPES = this.protocolTypes; // Cache it
        this.loading = false;
      }, error => {
        this.loading = null;
        this.errors = error;
      });
    } else {
      this.protocolTypes = _assets_properties__WEBPACK_IMPORTED_MODULE_1__.Properties.PROTOCOL_TYPES;
    }
  }
  onResetClick() {
    this.resetting = true;
    this.protocolSearchForm = JSON.parse(JSON.stringify(this.initData));
  }
  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
ProtocolSearchComponent.ɵfac = function ProtocolSearchComponent_Factory(t) {
  return new (t || ProtocolSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_top_main_menu_top_main_menu_service__WEBPACK_IMPORTED_MODULE_2__.TopMainMenuService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_common_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_common_services_util_service__WEBPACK_IMPORTED_MODULE_4__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_protocols_service__WEBPACK_IMPORTED_MODULE_5__.ProtocolsService));
};
ProtocolSearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: ProtocolSearchComponent,
  selectors: [["canano-protocol-search"]],
  decls: 2,
  vars: 3,
  consts: [[3, "helpUrl", "toolHeadingName"], ["class", "mainSection", 4, "ngIf"], [1, "mainSection"], [3, "loading", "message"], ["name", "protocolSearchForm"], [1, "mainBorder"], [1, "label"], ["for", "protocolType"], ["name", "protocolType", "id", "protocolType", 3, "ngModel", "ngModelChange"], [3, "selected", "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "protocolName"], ["for", "nameOperand"], ["name", "nameOperand", "id", "nameOperand", 3, "ngModel", "ngModelChange"], ["value", "contains"], ["value", "equals"], ["type", "text", "name", "protocolName", "id", "protocolName", 3, "ngModel", "ngModelChange"], ["for", "protocolAbbreviation"], ["for", "abbreviationOperand"], ["name", "abbreviationOperand", "id", "abbreviationOperand", 3, "ngModel", "ngModelChange"], ["id", "protocolAbbreviation", "name", "protocolAbbreviation", "type", "text", 3, "ngModel", "ngModelChange"], ["for", "fileTitle"], ["for", "titleOperand"], ["name", "titleOperand", "id", "titleOperand", 3, "ngModel", "ngModelChange"], ["name", "fileTitle", "id", "fileTitle", "type", "text", 3, "ngModel", "ngModelChange"], [1, "buttons"], [1, "btn-canano", "btn-canano-danger", "btn-canano-lg", "mr-1", 3, "disabled", "click"], [1, "btn-canano", "btn-canano-primary", "btn-canano-lg", "mr-1", 3, "disabled", "click"], [3, "value"]],
  template: function ProtocolSearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "canano-main-display-heading", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, ProtocolSearchComponent_div_1_Template, 57, 14, "div", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("helpUrl", "https://wiki.nci.nih.gov/x/TYFDHg")("toolHeadingName", "Protocol Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.protocolSearchForm);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_6__.MainDisplayHeadingComponent, _common_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_7__.LoaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm],
});

/***/ }),

/***/ 9268:
/*!***************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/protocols/protocol-search/protocol-search.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProtocolSearchModule": () => (/* binding */ ProtocolSearchModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _protocol_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./protocol-search.component */ 3554);
/* harmony import */ var _protocol_search_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./protocol-search-routing.module */ 1883);
/* harmony import */ var _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/modules/set-object-value/shared.module */ 5413);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






class ProtocolSearchModule {}
ProtocolSearchModule.ɵfac = function ProtocolSearchModule_Factory(t) {
  return new (t || ProtocolSearchModule)();
};
ProtocolSearchModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ProtocolSearchModule
});
ProtocolSearchModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _protocol_search_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProtocolSearchRoutingModule, _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProtocolSearchModule, {
    declarations: [_protocol_search_component__WEBPACK_IMPORTED_MODULE_0__.ProtocolSearchComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _protocol_search_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProtocolSearchRoutingModule, _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_cananolab-client_main-display_protocols_protocol-search_protocol-search_module_ts.js.map