"use strict";
(self["webpackChunkcananolab_client_new"] = self["webpackChunkcananolab_client_new"] || []).push([["src_app_cananolab-client_main-display_publications_search-samples-by-publication_search-sampl-6e530e"],{

/***/ 3313:
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/publications/search-samples-by-publication/search-samples-by-publication-routing.module.ts ***!
  \******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchSamplesByPublicationRoutingModule": () => (/* binding */ SearchSamplesByPublicationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _search_samples_by_publication_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-samples-by-publication.component */ 1795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _search_samples_by_publication_component__WEBPACK_IMPORTED_MODULE_0__.SearchSamplesByPublicationComponent
}];
class SearchSamplesByPublicationRoutingModule {}
SearchSamplesByPublicationRoutingModule.ɵfac = function SearchSamplesByPublicationRoutingModule_Factory(t) {
  return new (t || SearchSamplesByPublicationRoutingModule)();
};
SearchSamplesByPublicationRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SearchSamplesByPublicationRoutingModule
});
SearchSamplesByPublicationRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SearchSamplesByPublicationRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1795:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/publications/search-samples-by-publication/search-samples-by-publication.component.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchSamplesByPublicationComponent": () => (/* binding */ SearchSamplesByPublicationComponent)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../constants */ 4854);
/* harmony import */ var src_assets_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/properties */ 9552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _search_samples_by_publication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search-samples-by-publication.service */ 9334);
/* harmony import */ var _common_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/api.service */ 6342);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/cananolab-client/main-display/main-display-heading/main-display-heading.component */ 4567);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);









function SearchSamplesByPublicationComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.errors["error"], " ");
  }
}
class SearchSamplesByPublicationComponent {
  constructor(router, searchSamplesByPublicationService, apiService) {
    this.router = router;
    this.searchSamplesByPublicationService = searchSamplesByPublicationService;
    this.apiService = apiService;
    this.helpUrl = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.HELP_URL_SAMPLE_SEARCH_BY_PUBLICATIONS;
    this.toolHeadingName = 'Sample Search by Publication';
    this.type = 'PubMed';
    this.inputId = '';
  }
  ngOnInit() {
    this.errors = {};
    setTimeout(() => {
      src_assets_properties__WEBPACK_IMPORTED_MODULE_1__.Properties.SAMPLE_TOOLS = false;
    });
  }
  onSearchSampByPubClick() {
    // Fix for issue #223. Wrong (Help!) URL provided here:
    this.apiService.doGet(_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.QUERY_SAMPLE_SEARCH_BY_PUBLICATION, 'id=' + this.inputId + '&type=' + this.type).subscribe(data => {
      this.searchSamplesByPublicationService.setPublicationSearchResults(data);
      this.router.navigate(['home/publications/sample-search-by-publication-results']);
    }, err => {
      this.errors = err;
      console.error('ERROR onSearchSampByPubClick: ', err);
    });
  }
  reset() {
    this.type = 'PubMed';
    this.inputId = '';
  }
}
SearchSamplesByPublicationComponent.ɵfac = function SearchSamplesByPublicationComponent_Factory(t) {
  return new (t || SearchSamplesByPublicationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_search_samples_by_publication_service__WEBPACK_IMPORTED_MODULE_2__.SearchSamplesByPublicationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_common_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService));
};
SearchSamplesByPublicationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: SearchSamplesByPublicationComponent,
  selectors: [["canano-search-samples-by-publication"]],
  decls: 26,
  vars: 6,
  consts: [[3, "helpUrl", "toolHeadingName"], [1, "mainSection"], ["class", "error", 4, "ngIf"], [1, "mainBorder"], [1, "searchForm"], [1, "label"], ["for", "id_input"], ["id", "id_input", "type", "text", 3, "ngModel", "ngModelChange"], ["for", "type_input"], ["name", "type", "id", "type_input", 3, "ngModel", "ngModelChange"], ["value", "PubMed"], ["value", "DOI"], [1, "buttons"], [1, "btn-canano", "btn-canano-danger", "btn-canano-lg", "mr-1", 3, "click"], [1, "btn-canano", "btn-canano-primary", "btn-canano-lg", "mr-1", 3, "disabled", "click"], [1, "error"]],
  template: function SearchSamplesByPublicationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "canano-main-display-heading", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SearchSamplesByPublicationComponent_div_2_Template, 2, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3)(4, "table", 4)(5, "tr")(6, "td", 5)(7, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " ID ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td")(10, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function SearchSamplesByPublicationComponent_Template_input_ngModelChange_10_listener($event) {
        return ctx.inputId = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "tr")(12, "td")(13, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " Type ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td")(16, "select", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function SearchSamplesByPublicationComponent_Template_select_ngModelChange_16_listener($event) {
        return ctx.type = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " PubMed ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, " DOI ");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 12)(22, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SearchSamplesByPublicationComponent_Template_button_click_22_listener() {
        return ctx.reset();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Reset");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "button", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SearchSamplesByPublicationComponent_Template_button_click_24_listener() {
        return ctx.onSearchSampByPubClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("helpUrl", ctx.helpUrl)("toolHeadingName", ctx.toolHeadingName);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.errors["error"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.inputId);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.type);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.inputId == "" || !ctx.inputId);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_4__.MainDisplayHeadingComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel],
});

/***/ }),

/***/ 7323:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/publications/search-samples-by-publication/search-samples-by-publication.module.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchSamplesByPublicationModule": () => (/* binding */ SearchSamplesByPublicationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _search_samples_by_publication_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search-samples-by-publication.component */ 1795);
/* harmony import */ var _search_samples_by_publication_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-samples-by-publication-routing.module */ 3313);
/* harmony import */ var _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/modules/set-object-value/shared.module */ 5413);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






class SearchSamplesByPublicationModule {}
SearchSamplesByPublicationModule.ɵfac = function SearchSamplesByPublicationModule_Factory(t) {
  return new (t || SearchSamplesByPublicationModule)();
};
SearchSamplesByPublicationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: SearchSamplesByPublicationModule
});
SearchSamplesByPublicationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _search_samples_by_publication_routing_module__WEBPACK_IMPORTED_MODULE_1__.SearchSamplesByPublicationRoutingModule, _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SearchSamplesByPublicationModule, {
    declarations: [_search_samples_by_publication_component__WEBPACK_IMPORTED_MODULE_0__.SearchSamplesByPublicationComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _search_samples_by_publication_routing_module__WEBPACK_IMPORTED_MODULE_1__.SearchSamplesByPublicationRoutingModule, _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_cananolab-client_main-display_publications_search-samples-by-publication_search-sampl-6e530e.js.map