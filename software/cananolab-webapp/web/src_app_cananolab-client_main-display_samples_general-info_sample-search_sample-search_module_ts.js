"use strict";
(self["webpackChunkcananolab_client_new"] = self["webpackChunkcananolab_client_new"] || []).push([["src_app_cananolab-client_main-display_samples_general-info_sample-search_sample-search_module_ts"],{

/***/ 5877:
/*!******************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/general-info/sample-search/sample-search-routing.module.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SampleSearchRoutingModule": () => (/* binding */ SampleSearchRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _sample_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sample-search.component */ 6801);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _sample_search_component__WEBPACK_IMPORTED_MODULE_0__.SampleSearchComponent
}];
class SampleSearchRoutingModule {}
SampleSearchRoutingModule.ɵfac = function SampleSearchRoutingModule_Factory(t) {
  return new (t || SampleSearchRoutingModule)();
};
SampleSearchRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SampleSearchRoutingModule
});
SampleSearchRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SampleSearchRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6801:
/*!*************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/general-info/sample-search/sample-search.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SampleSearchComponent": () => (/* binding */ SampleSearchComponent)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../constants */ 4854);
/* harmony import */ var src_assets_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/properties */ 9552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _common_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/services/api.service */ 6342);
/* harmony import */ var _common_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/services/util.service */ 7117);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _sample_search_results_sample_search_results_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sample-search-results/sample-search-results.service */ 2928);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/cananolab-client/main-display/main-display-heading/main-display-heading.component */ 4567);
/* harmony import */ var _common_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/components/loader/loader.component */ 4110);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);











const _c0 = ["f"];
function SampleSearchComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.errors["error"], " ");
  }
}
function SampleSearchComponent_option_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const samp_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", samp_r7, " ");
  }
}
function SampleSearchComponent_option_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const samp_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", samp_r8, " ");
  }
}
function SampleSearchComponent_option_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const samp_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", samp_r9, " ");
  }
}
function SampleSearchComponent_option_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const charType_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", charType_r10, " ");
  }
}
function SampleSearchComponent_ng_container_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Characterization ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
}
function SampleSearchComponent_ng_container_72_option_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const samp_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", samp_r12, " ");
  }
}
function SampleSearchComponent_ng_container_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SampleSearchComponent_ng_container_72_Template_select_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.data.characterizations = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, SampleSearchComponent_ng_container_72_option_2_Template, 2, 1, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 7)("ngModel", ctx_r6.data.characterizations);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r6.characterizationsList);
  }
}
const _c1 = function () {
  return {
    title: "Advanced Search",
    link: "home/samples/sample-advanced-search"
  };
};
class SampleSearchComponent {
  // QUERY_SAMPLE_SETUP
  constructor(apiService, utilService, router, sampleSearchResultsService) {
    this.apiService = apiService;
    this.utilService = utilService;
    this.router = router;
    this.sampleSearchResultsService = sampleSearchResultsService;
    this.helpUrl = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.HELP_URL_SAMPLE_SEARCH;
    this.toolHeadingName = 'Sample Search';
    this.sampleSetupData = {};
    this.loadingMessage = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.searchingMessage;
    this.pocOperand = 'contains';
    this.nameOperand = 'contains';
    this.nanomaterialEntityTypes = [];
    this.functionTypes = [];
    this.functionalizingEntityTypes = [];
    this.characterizationsList = [];
    this.characterizations = [];
  }
  ngOnInit() {
    setTimeout(() => {
      src_assets_properties__WEBPACK_IMPORTED_MODULE_1__.Properties.SAMPLE_TOOLS = false;
    });
    this.errors = {};
    this.data = {
      'text': '',
      'sampleName': '',
      'samplePointOfContact': '',
      'pocOperand': 'contains',
      'nameOperand': 'contains',
      'nanomaterialEntityTypes': [],
      'functionalizingEntityTypes': [],
      'functionTypes': [],
      'characterizationType': '',
      'characterizations': []
    };
    this.dataTrailer = JSON.parse(JSON.stringify(this.data));
    this.init();
  }
  init() {
    this.loading = true;
    this.loadingMessage = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.loadingMessage;
    this.apiService.doGet(_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.QUERY_SAMPLE_SETUP, '').subscribe(data => {
      this.loading = null;
      this.sampleSetupData = data;
    }, error => {
      this.loading = null;
    });
  }
  onCharacterizationType(charType) {
    this.characterizationType = charType;
    // QUERY_GET_CHARACTERIZATION_BY_TYPE
    this.apiService.doGet(_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.QUERY_GET_CHARACTERIZATION_BY_TYPE, 'type=' + charType).subscribe(data => {
      this.characterizationsList = data;
    });
  }
  onSubmit() {
    this.loading = true;
    this.loadingMessage = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.searchingMessage;
    // QUERY_SEARCH_SAMPLE
    this.apiService.doPost(_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.QUERY_SEARCH_SAMPLE, this.data).subscribe(data => {
      this.searchResults = data;
      this.loading = null;
      // send search results to samplesSearchResults
      this.sampleSearchResultsService.setSearchResults(this.searchResults);
      this.router.navigate(['home/samples/sample-search-results']); // @FIXME TESTING  Don't hard code this!!!
    }, error => {
      this.loading = null;
      this.errors = error;
    });
  }
  reset() {
    this.data = JSON.parse(JSON.stringify(this.dataTrailer));
  }
}
SampleSearchComponent.ɵfac = function SampleSearchComponent_Factory(t) {
  return new (t || SampleSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_common_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_common_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_sample_search_results_sample_search_results_service__WEBPACK_IMPORTED_MODULE_4__.SampleSearchResultsService));
};
SampleSearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: SampleSearchComponent,
  selectors: [["canano-sample-search"]],
  viewQuery: function SampleSearchComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sampleSearchForm = _t.first);
    }
  },
  decls: 80,
  vars: 31,
  consts: [[3, "helpUrl", "toolHeadingName", "otherUrl"], [1, "mainSection"], ["class", "error", 4, "ngIf"], [3, "loading", "message"], ["name", "sampleSearchForm"], [1, "mainBorder"], [1, "searchForm"], [1, "label"], ["for", "keywords"], ["colspan", "5"], ["name", "keywords", "id", "keywords", "rows", "3", "cols", "60", 3, "ngModel", "ngModelChange"], ["for", "sampleName"], ["for", "nameOperand"], ["name", "nameOperand", 3, "ngModel", "ngModelChange"], [3, "selected"], ["type", "text", "id", "sampleName", "name", "data.sampleName", "size", "60", 3, "ngModel", "ngModelChange"], ["for", "samplePointOfContact"], ["for", "pocOperand"], ["name", "pocOperand", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "data.samplePointOfContact", "id", "samplePointOfContact", "size", "60", 3, "ngModel", "ngModelChange"], ["for", "nanomaterialEntityTypes"], ["multiple", "", "name", "data.nanomaterialEntityTypes", "id", "nanomaterialEntityTypes", 1, "multiple", 3, "size", "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["for", "functionalizingEntityTypes"], ["multiple", "", "name", "data.functionalizingEntityTypes", "id", "functionalizingEntityTypes", 1, "multiple", 3, "size", "ngModel", "ngModelChange"], ["for", "functionTypes"], ["multiple", "", "name", "data.functionTypes", "id", "functionTypes", 1, "multiple", 3, "size", "ngModel", "ngModelChange"], ["for", "characterizationType"], ["name", "characterizationType", "id", "characterizationType", 3, "ngModel", "ngModelChange"], [3, "selected", "ngValue"], [4, "ngIf"], ["colspan", "3"], [1, "buttons"], [1, "btn-canano", "btn-canano-danger", "btn-canano-lg", "mr-1", 3, "disabled", "click"], [1, "btn-canano", "btn-canano-primary", "btn-canano-lg", "mr-1", 3, "disabled", "click"], [1, "error"], ["for", "characterizations"], ["multiple", "", "name", "data.characterizations", "id", "characterizations", 1, "multiple", 3, "size", "ngModel", "ngModelChange"]],
  template: function SampleSearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "canano-main-display-heading", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, SampleSearchComponent_div_2_Template, 2, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "canano-loader", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form", 4)(5, "div", 5)(6, "table", 6)(7, "tr")(8, "td", 7)(9, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Keywords ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "td", 9)(12, "textarea", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SampleSearchComponent_Template_textarea_ngModelChange_12_listener($event) {
        return ctx.data.text = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "\n                        ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "i");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, " searching characterization keywords, publication keywords and text in characterization descriptions enter one keyword per line ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "tr")(18, "td", 7)(19, "label", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, " Sample Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "td", 9)(22, "label", 12)(23, "select", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SampleSearchComponent_Template_select_ngModelChange_23_listener($event) {
        return ctx.data.nameOperand = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "contains");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "equals");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SampleSearchComponent_Template_input_ngModelChange_28_listener($event) {
        return ctx.data.sampleName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "tr")(30, "td", 7)(31, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, " Sample Point of Contact ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "td", 9)(34, "label", 17)(35, "select", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SampleSearchComponent_Template_select_ngModelChange_35_listener($event) {
        return ctx.data.pocOperand = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "option", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "contains");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "option");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "equals");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SampleSearchComponent_Template_input_ngModelChange_40_listener($event) {
        return ctx.data.samplePointOfContact = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "tr")(42, "td", 7)(43, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, " Nanomaterial Entity ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "td")(46, "select", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SampleSearchComponent_Template_select_ngModelChange_46_listener($event) {
        return ctx.data.nanomaterialEntityTypes = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, SampleSearchComponent_option_47_Template, 2, 1, "option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "td", 7)(49, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, " Functionalizing Entity Types ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "td")(52, "select", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SampleSearchComponent_Template_select_ngModelChange_52_listener($event) {
        return ctx.data.functionalizingEntityTypes = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, SampleSearchComponent_option_53_Template, 2, 1, "option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "td", 7)(55, "label", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, " Function Types ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "td")(58, "select", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SampleSearchComponent_Template_select_ngModelChange_58_listener($event) {
        return ctx.data.functionTypes = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, SampleSearchComponent_option_59_Template, 2, 1, "option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "tr")(61, "td", 7)(62, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](63, " Characterization Type ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "td")(65, "select", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function SampleSearchComponent_Template_select_ngModelChange_65_listener($event) {
        return ctx.onCharacterizationType($event);
      })("ngModelChange", function SampleSearchComponent_Template_select_ngModelChange_65_listener($event) {
        return ctx.data.characterizationType = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "option", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67, "--Select--");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](68, SampleSearchComponent_option_68_Template, 2, 1, "option", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](70, SampleSearchComponent_ng_container_70_Template, 3, 0, "ng-container", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](71, "td", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](72, SampleSearchComponent_ng_container_72_Template, 3, 3, "ng-container", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "div", 32)(74, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75, " Searching without any parameters returns all samples. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "button", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SampleSearchComponent_Template_button_click_76_listener() {
        return ctx.reset();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, "Reset");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "button", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SampleSearchComponent_Template_button_click_78_listener() {
        return ctx.onSubmit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](79, "Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("helpUrl", ctx.helpUrl)("toolHeadingName", ctx.toolHeadingName)("otherUrl", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](30, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.errors["error"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("loading", ctx.loading)("message", ctx.loadingMessage);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.data.text);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.data.nameOperand);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("selected", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.data.sampleName);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.data.pocOperand);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("selected", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.data.samplePointOfContact);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 7)("ngModel", ctx.data.nanomaterialEntityTypes);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.sampleSetupData["nanomaterialEntityTypes"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 7)("ngModel", ctx.data.functionalizingEntityTypes);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.sampleSetupData["functionalizingEntityTypes"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 7)("ngModel", ctx.data.functionTypes);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.sampleSetupData["functionTypes"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.data.characterizationType);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("selected", true)("ngValue", "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.sampleSetupData["characterizationTypes"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.data.characterizationType != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.data.characterizationType != "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.loading);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_5__.MainDisplayHeadingComponent, _common_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectMultipleControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm],
});

/***/ }),

/***/ 3621:
/*!**********************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/general-info/sample-search/sample-search.module.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SampleSearchModule": () => (/* binding */ SampleSearchModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _sample_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sample-search.component */ 6801);
/* harmony import */ var _sample_search_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sample-search-routing.module */ 5877);
/* harmony import */ var _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/modules/set-object-value/shared.module */ 5413);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






class SampleSearchModule {}
SampleSearchModule.ɵfac = function SampleSearchModule_Factory(t) {
  return new (t || SampleSearchModule)();
};
SampleSearchModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: SampleSearchModule
});
SampleSearchModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _sample_search_routing_module__WEBPACK_IMPORTED_MODULE_1__.SampleSearchRoutingModule, _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SampleSearchModule, {
    declarations: [_sample_search_component__WEBPACK_IMPORTED_MODULE_0__.SampleSearchComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _sample_search_routing_module__WEBPACK_IMPORTED_MODULE_1__.SampleSearchRoutingModule, _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_cananolab-client_main-display_samples_general-info_sample-search_sample-search_module_ts.js.map