"use strict";
(self["webpackChunkcananolab_client_new"] = self["webpackChunkcananolab_client_new"] || []).push([["src_app_cananolab-client_main-display_samples_samples_module_ts"],{

/***/ 8238:
/*!*********************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/samples-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SamplesRoutingModule": () => (/* binding */ SamplesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _samples_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./samples.component */ 697);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _samples_component__WEBPACK_IMPORTED_MODULE_0__.SamplesComponent
}];
class SamplesRoutingModule {}
SamplesRoutingModule.ɵfac = function SamplesRoutingModule_Factory(t) {
  return new (t || SamplesRoutingModule)();
};
SamplesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SamplesRoutingModule
});
SamplesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SamplesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 697:
/*!****************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/samples.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SamplesComponent": () => (/* binding */ SamplesComponent)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants */ 4854);
/* harmony import */ var _assets_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/properties */ 9552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _common_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/services/api.service */ 6342);
/* harmony import */ var _common_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/services/util.service */ 7117);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/cananolab-client/main-display/main-display-heading/main-display-heading.component */ 4567);








function SamplesComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.message);
  }
}
function SamplesComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Create a New Sample");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Select to create a new sample. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "br")(6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Copy an Existing Sample");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " Select to copy information from an existing sample to a new sample. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "br")(12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
}
class SamplesComponent {
  constructor(apiService, utilService) {
    this.apiService = apiService;
    this.utilService = utilService;
    // QUERY_SAMPLE_SETUP
    this.sampleScreen = _constants__WEBPACK_IMPORTED_MODULE_0__.SampleScreen;
    this.sampleScreenToShow = _constants__WEBPACK_IMPORTED_MODULE_0__.SampleScreen.SAMPLE_MANAGE_SCREEN; // Starting screen for Samples
    this.properties = _assets_properties__WEBPACK_IMPORTED_MODULE_1__.Properties;
    this.toolHeadingNameManage = 'Manage Samples';
    this.helpUrl = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.HELP_URL_SAMPLE_SEARCH;
    this.toolHeadingNameSearchResults = 'Sample Search Results';
    this.toolHeadingNameSearch = 'Sample Search';
  }
  ngOnInit() {
    setTimeout(() => {
      _assets_properties__WEBPACK_IMPORTED_MODULE_1__.Properties.SAMPLE_TOOLS = false;
    });
  }
  onCreateSampleClick() {}
}
SamplesComponent.ɵfac = function SamplesComponent_Factory(t) {
  return new (t || SamplesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_common_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_common_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService));
};
SamplesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: SamplesComponent,
  selectors: [["canano-samples"]],
  decls: 23,
  vars: 4,
  consts: [[3, "helpUrl", "toolHeadingName"], [1, "mainSection"], ["class", "error", 4, "ngIf"], [1, "mainBorder"], [1, "links-panel", "card", "ml-1", "mt-2"], [1, "card-header", "mb-0", "pb-0"], [1, "card-title", "unselectable", "m-0", "p-0"], [1, "card-body"], [4, "ngIf"], ["routerLink", "sample-search", 1, "link-clicker"], ["routerLink", "sample-advanced-search", 1, "link-clicker"], [1, "error"], ["routerLink", "sample-create", 1, "link-clicker"], ["routerLink", "sample-copy", 1, "link-clicker"]],
  template: function SamplesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "canano-main-display-heading", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SamplesComponent_div_2_Template, 2, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3)(4, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " This is the manage samples section which allows users to enter general information about the sample, detailed information about the composition of the sample, and information about the physico-chemical, in vitro, and other characterizations performed on the sample. A sample is a formulation of a base nanomaterial platform and any additional components that contribute to the function(s) of the nanomaterial. A sample can also be a control used in comparative analysis. In this section, depending on your authorization level, you may submit new sample information or search for an existing sample for editing, copying, viewing, printing, or exporting. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "span", 6)(9, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Sample Links");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, SamplesComponent_ng_container_12_Template, 13, 0, "ng-container", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Search Existing Samples");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, " Enter search criteria to obtain information on samples of interest. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "br")(18, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Advanced Sample Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, " Enter advanced search criteria based on caNanoLab metadata to obtain information on samples of interest. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("helpUrl", ctx.helpUrl)("toolHeadingName", ctx.toolHeadingNameManage);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.message);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.properties.LOGGED_IN);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_4__.MainDisplayHeadingComponent],
});

/***/ }),

/***/ 9549:
/*!*************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/samples.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SamplesModule": () => (/* binding */ SamplesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _samples_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./samples.component */ 697);
/* harmony import */ var _samples_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./samples-routing.module */ 8238);
/* harmony import */ var _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/modules/set-object-value/shared.module */ 5413);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class SamplesModule {}
SamplesModule.ɵfac = function SamplesModule_Factory(t) {
  return new (t || SamplesModule)();
};
SamplesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: SamplesModule
});
SamplesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _samples_routing_module__WEBPACK_IMPORTED_MODULE_1__.SamplesRoutingModule, _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SamplesModule, {
    declarations: [_samples_component__WEBPACK_IMPORTED_MODULE_0__.SamplesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _samples_routing_module__WEBPACK_IMPORTED_MODULE_1__.SamplesRoutingModule, _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_cananolab-client_main-display_samples_samples_module_ts.js.map