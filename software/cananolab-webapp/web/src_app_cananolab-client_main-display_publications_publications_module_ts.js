"use strict";
(self["webpackChunkcananolab_client_new"] = self["webpackChunkcananolab_client_new"] || []).push([["src_app_cananolab-client_main-display_publications_publications_module_ts"],{

/***/ 8323:
/*!*******************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/publications/publications-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicationsRoutingModule": () => (/* binding */ PublicationsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _publications_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publications.component */ 8514);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _publications_component__WEBPACK_IMPORTED_MODULE_0__.PublicationsComponent
}];
class PublicationsRoutingModule {}
PublicationsRoutingModule.ɵfac = function PublicationsRoutingModule_Factory(t) {
  return new (t || PublicationsRoutingModule)();
};
PublicationsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: PublicationsRoutingModule
});
PublicationsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PublicationsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 8514:
/*!**************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/publications/publications.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicationsComponent": () => (/* binding */ PublicationsComponent)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants */ 4854);
/* harmony import */ var src_assets_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/properties */ 9552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _main_display_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-display.service */ 1147);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cananolab-client/main-display/main-display-heading/main-display-heading.component */ 4567);







function PublicationsComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Create a New Publication");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Select to create a new publication.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br")(6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
}
class PublicationsComponent {
  constructor(mainDisplayService) {
    this.mainDisplayService = mainDisplayService;
    /**
     * These will be provided to canano-main-display-heading as @Input
     */
    this.helpUrl = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.HELP_URL_PUBLICATIONS;
    this.properties = src_assets_properties__WEBPACK_IMPORTED_MODULE_1__.Properties;
    this.toolHeadingName = 'Manage Publications';
  }
  ngOnInit() {}
}
PublicationsComponent.ɵfac = function PublicationsComponent_Factory(t) {
  return new (t || PublicationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_main_display_service__WEBPACK_IMPORTED_MODULE_2__.MainDisplayService));
};
PublicationsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: PublicationsComponent,
  selectors: [["canano-publications"]],
  decls: 23,
  vars: 3,
  consts: [[3, "helpUrl", "toolHeadingName"], [1, "mainSection"], [1, "mainBorder"], [1, "links-panel", "card", "ml-1", "mt-2"], [1, "card-header", "mb-0", "pb-0"], [1, "card-title", "unselectable", "m-0", "p-0"], [1, "card-body"], [4, "ngIf"], ["routerLink", "publication-search", 1, "link-clicker"], ["routerLink", "sample-search-by-publication", 1, "link-clicker"], ["routerLink", "/home/samples/publications/publication/-1", 1, "link-clicker"]],
  template: function PublicationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "canano-main-display-heading", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "P");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " This is the manage publications section. Publications can include book chapters, editorials, peer review articles, reports, reviews and other forms of documents. In this section, depending on your authorization level, you may submit a new publication or search for an existing publication. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "span", 5)(8, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Publication Links");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, PublicationsComponent_ng_container_11_Template, 7, 0, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Search Existing Publication");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Enter search criteria to obtain information on publications of interest.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "br")(17, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Search for Samples by Publication");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, " Enter DOI/Pubmed Id to obtain the related sample information.");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("helpUrl", ctx.helpUrl)("toolHeadingName", ctx.toolHeadingName);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.properties.LOGGED_IN);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_3__.MainDisplayHeadingComponent],
});

/***/ }),

/***/ 8297:
/*!***********************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/publications/publications.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicationsModule": () => (/* binding */ PublicationsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _publications_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publications.component */ 8514);
/* harmony import */ var _publications_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publications-routing.module */ 8323);
/* harmony import */ var _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/modules/set-object-value/shared.module */ 5413);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






class PublicationsModule {}
PublicationsModule.ɵfac = function PublicationsModule_Factory(t) {
  return new (t || PublicationsModule)();
};
PublicationsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: PublicationsModule
});
PublicationsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _publications_routing_module__WEBPACK_IMPORTED_MODULE_1__.PublicationsRoutingModule, _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PublicationsModule, {
    declarations: [_publications_component__WEBPACK_IMPORTED_MODULE_0__.PublicationsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _publications_routing_module__WEBPACK_IMPORTED_MODULE_1__.PublicationsRoutingModule, _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_cananolab-client_main-display_publications_publications_module_ts.js.map