"use strict";
(self["webpackChunkcananolab_client_new"] = self["webpackChunkcananolab_client_new"] || []).push([["src_app_cananolab-client_main-display_samples_publications_sample-publications_sample-publica-2d163e"],{

/***/ 9921:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/publications/sample-publications/sample-publications-routing.module.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SamplePublicationsRoutingModule": () => (/* binding */ SamplePublicationsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _sample_publications_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sample-publications.component */ 7204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _sample_publications_component__WEBPACK_IMPORTED_MODULE_0__.SamplePublicationsComponent
}];
class SamplePublicationsRoutingModule {}
SamplePublicationsRoutingModule.ɵfac = function SamplePublicationsRoutingModule_Factory(t) {
  return new (t || SamplePublicationsRoutingModule)();
};
SamplePublicationsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: SamplePublicationsRoutingModule
});
SamplePublicationsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SamplePublicationsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7204:
/*!*************************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/publications/sample-publications/sample-publications.component.ts ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SamplePublicationsComponent": () => (/* binding */ SamplePublicationsComponent)
/* harmony export */ });
/* harmony import */ var _assets_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../assets/properties */ 9552);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../constants */ 4854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_cananolab_client_status_display_status_display_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cananolab-client/status-display/status-display.service */ 5934);
/* harmony import */ var _common_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/services/api.service */ 6342);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/services/navigation.service */ 6489);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/cananolab-client/main-display/main-display-heading/main-display-heading.component */ 4567);
/* harmony import */ var _sample_publications_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sample-publications.pipe */ 9559);










function SamplePublicationsComponent_div_1_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 3)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SamplePublicationsComponent_div_1_li_5_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const category_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.showSection(category_r3.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](category_r3.key);
  }
}
function SamplePublicationsComponent_div_1_ng_container_7_div_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SamplePublicationsComponent_div_1_ng_container_7_div_1_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const publicationCategory_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.addPublication(publicationCategory_r6.key));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function SamplePublicationsComponent_div_1_ng_container_7_div_1_ng_container_5_tr_16_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const keyword_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", keyword_r18, " ");
  }
}
function SamplePublicationsComponent_div_1_ng_container_7_div_1_ng_container_5_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Keywords ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td")(4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, SamplePublicationsComponent_div_1_ng_container_7_div_1_ng_container_5_tr_16_li_5_Template, 2, 1, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const publication_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r16.splitKeywords(publication_r13.keywordsStr));
  }
}
const _c0 = function (a0) {
  return {
    "last": a0
  };
};
function SamplePublicationsComponent_div_1_ng_container_7_div_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 13)(2, "div", 14)(3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SamplePublicationsComponent_div_1_ng_container_7_div_1_ng_container_5_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const publication_r13 = restoredCtx.$implicit;
      const publicationCategory_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r20.editpublication(publicationCategory_r6.key, publication_r13.publicationId));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "table", 15)(6, "tr")(7, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " Bibliography Info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "samplePublications");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "tr")(12, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, SamplePublicationsComponent_div_1_ng_container_7_div_1_ng_container_5_tr_16_Template, 6, 1, "tr", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "tr")(18, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, " Publication Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const publication_r13 = ctx.$implicit;
    const last_r15 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](7, _c0, last_r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 5, publication_r13.displayName), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHtml", publication_r13.description, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", publication_r13.keywordsStr != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", publication_r13.status, " ");
  }
}
function SamplePublicationsComponent_div_1_ng_container_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, SamplePublicationsComponent_div_1_ng_container_7_div_1_button_3_Template, 2, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, SamplePublicationsComponent_div_1_ng_container_7_div_1_ng_container_5_Template, 22, 9, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const publicationCategory_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", publicationCategory_r6.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r7.editUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r7.publicationData[publicationCategory_r6.key]);
  }
}
function SamplePublicationsComponent_div_1_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SamplePublicationsComponent_div_1_ng_container_7_div_1_Template, 6, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const publicationCategory_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", publicationCategory_r6.key == ctx_r2.sectionToShow || ctx_r2.sectionToShow == "all");
  }
}
function SamplePublicationsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "ul", 2)(2, "li", 3)(3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SamplePublicationsComponent_div_1_Template_a_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r24.showSection("all"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, SamplePublicationsComponent_div_1_li_5_Template, 3, 1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, SamplePublicationsComponent_div_1_ng_container_7_Template, 2, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 2, ctx_r0.publicationData));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 4, ctx_r0.publicationData));
  }
}
const _c1 = function (a0) {
  return [a0, "PUBLICATION"];
};
class SamplePublicationsComponent {
  constructor(statusDisplayService, apiService, router, navigationService, route) {
    this.statusDisplayService = statusDisplayService;
    this.apiService = apiService;
    this.router = router;
    this.navigationService = navigationService;
    this.route = route;
    this.sampleId = _assets_properties__WEBPACK_IMPORTED_MODULE_0__.Properties.CURRENT_SAMPLE_ID;
    this.helpUrl = _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.HELP_URL_SAMPLE_PUBLICATIONS;
    this.editUrl = false;
    this.sectionToShow = 'all';
  }
  ngOnInit() {
    this.editUrl = this.statusDisplayService.isEditUrl();
    this.publicationData = {};
    this.navigationService.setCurrentSelectedItem(3);
    this.route.params.subscribe(params => {
      this.sampleId = params['sampleId'];
      this.apiService.getSampleName(this.sampleId).subscribe(data => this.toolHeadingNameManage = 'Sample ' + data['sampleName'] + ' Publication');
      if (this.sampleId <= 0) {
        this.sampleId = _assets_properties__WEBPACK_IMPORTED_MODULE_0__.Properties.CURRENT_SAMPLE_ID;
      } else {
        _assets_properties__WEBPACK_IMPORTED_MODULE_0__.Properties.CURRENT_SAMPLE_ID = this.sampleId;
      }
      ;
      let url = this.apiService.doGet(_constants__WEBPACK_IMPORTED_MODULE_1__.Consts.QUERY_PUBLICATION_SUMMARY_VIEW, 'sampleId=' + this.sampleId);
      url.subscribe(data => {
        //console.log(data)
        this.data = data;
        this.propertiesLoaded = true;
        _assets_properties__WEBPACK_IMPORTED_MODULE_0__.Properties.SAMPLE_TOOLS = true;
        this.separateDataSets(data);
      }, error => {});
    });
  }
  addPublication(type) {
    this.router.navigate(['/home/samples/publications/publication', this.sampleId, type]);
  }
  editpublication(type, publicationId) {
    console.log(publicationId);
    this.router.navigate(['/home/samples/publications/publication', this.sampleId, publicationId, type]);
  }
  separateDataSets(data) {
    let setupUrl = this.apiService.doGet(_constants__WEBPACK_IMPORTED_MODULE_1__.Consts.QUERY_PUBLICATION_SETUP, '');
    setupUrl.subscribe(setupData => {
      let defaultCategories = setupData['publicationCategories'];
      defaultCategories.forEach(item => {
        this.publicationData[item] = [];
      });
      let keys = Object.keys(data.category2Publications);
      keys.forEach(category => {
        if (!this.publicationData[category]) {
          this.publicationData[category] = [];
        }
        let currentArray = data.category2Publications[category];
        if (currentArray.length) {
          currentArray.forEach(item => {
            this.publicationData[category].push(item);
          });
        }
      });
    });
  }
  splitKeywords(keywords) {
    return keywords.split('\n');
  }
  showSection(value) {
    this.sectionToShow = value;
  }
}
SamplePublicationsComponent.ɵfac = function SamplePublicationsComponent_Factory(t) {
  return new (t || SamplePublicationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_cananolab_client_status_display_status_display_service__WEBPACK_IMPORTED_MODULE_2__.StatusDisplayService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_common_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_common_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute));
};
SamplePublicationsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: SamplePublicationsComponent,
  selectors: [["canano-sample-publications"]],
  decls: 2,
  vars: 7,
  consts: [[3, "helpUrl", "toolHeadingName", "export", "print"], [4, "ngIf"], [1, "nav", "nav-tabs"], [1, "nav-item"], ["id", "all-tab", "data-toggle", "tab", 1, "nav-link", "active", 3, "click"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["id", "category-tab", "data-toggle", "tab", 1, "nav-link", 3, "click"], ["class", "mainSection", 4, "ngIf"], [1, "mainSection"], [1, "header"], ["class", "btn btn-primary btn-sm", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "mainBorder", 3, "ngClass"], [1, "editButton"], [1, "dataMain"], [1, "label"], [3, "innerHTML"], [3, "innerHtml"]],
  template: function SamplePublicationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "canano-main-display-heading", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SamplePublicationsComponent_div_1_Template, 9, 6, "div", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("helpUrl", ctx.helpUrl)("toolHeadingName", ctx.toolHeadingNameManage)("export", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c1, ctx.sampleId))("print", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.data);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_5__.MainDisplayHeadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.KeyValuePipe, _sample_publications_pipe__WEBPACK_IMPORTED_MODULE_6__.SamplePublicationsPipe],
  styles: ["html[_ngcontent-%COMP%] {\n  font-family: arial, helvetica, verdana, sans-serif !important;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: arial, helvetica, verdana, sans-serif !important;\n}\n\n.header[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\ntd.leftMenu[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  width: 160px;\n  margin: 0px;\n  padding: 0px;\n  vertical-align: top;\n}\n\ntd.mainContent[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding: 0px;\n  margin: 0px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  border: solid #88BCE2;\n  border-width: 1px 1px 1px 0px;\n}\n\n.parent-div[_ngcontent-%COMP%] {\n  \n  display: flex;\n  flex-direction: row;\n  background-color: #fff;\n  width: 100%;\n}\n\n.link-clicker[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n.link-clicker[_ngcontent-%COMP%]:hover {\n  color: #a90101;\n  cursor: pointer;\n}\n\n\na[_ngcontent-%COMP%]:link {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n\na[_ngcontent-%COMP%]:visited {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #a90101;\n}\n\n\na[_ngcontent-%COMP%]:active {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.unselectable[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  text-transform: uppercase;\n}\n\n.hand[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.clicker[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.search-results-table[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 100%;\n  border: solid #ccc 1px;\n}\n\n.search-results-tr[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: solid #ccc 1px;\n}\n\n.search-results-th[_ngcontent-%COMP%] {\n  padding: 6px;\n  border: solid #ccc 1px;\n  background-color: #0073b9;\n  color: #fff;\n}\n\n.search-results-td[_ngcontent-%COMP%] {\n  padding: 6px;\n  border-left: solid #ccc 1px;\n  border-right: solid #ccc 1px;\n}\n\n.rowOdd[_ngcontent-%COMP%] {\n  background-color: #efeded;\n}\n\n.search-results--tr-odd[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-width: 0px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  padding-left: 160px;\n  text-align: center;\n}\n\n.spacer.center[_ngcontent-%COMP%] {\n  color: #02055a;\n}\n\n.footer[_ngcontent-%COMP%] {\n  padding: 0px 0px 0px 160px;\n  vertical-align: middle !important;\n  text-align: center;\n  background-color: #02055a;\n  border: solid #88BCE2;\n  border-width: 1px 1px 1px 0px;\n  font-size: 12px;\n}\n\n.footer.white[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 0px;\n  padding: 10px 0px 0px 0px;\n  font-size: 9.5px;\n  color: #333;\n}\n\n.footer.white[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.footer.white[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline !important;\n  color: #333;\n}\n\n.footer.white.release[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  font-weight: normal !important;\n  color: #4A49A8;\n}\n\n.footer.white[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  padding: 0px 10px 0px 10px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  vertical-align: middle;\n  list-style: none;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  display: inline-block;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  color: #81FFFE;\n  border: solid #88BCE2;\n  border-width: 0px 1px 0px 0px;\n  padding: 4px 15px 4px 15px;\n  margin: 0px;\n  vertical-align: top;\n  text-transform: uppercase;\n  font-weight: bold;\n  outline: 0;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item.left[_ngcontent-%COMP%] {\n  border: solid #88BCE2;\n  border-width: 0px 1px 0px 1px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item[_ngcontent-%COMP%]:hover {\n  background-color: #81FFFE;\n  color: #02055a;\n  margin: 0px;\n  vertical-align: top;\n}\n\n.rowOdd[_ngcontent-%COMP%] {\n  background-color: #efeded;\n}\n\ntable.dataTable[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #ccc;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  font-weight: bold;\n  padding: 3px 3px 3px 5px;\n  border: 1px solid #ccc;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-letter {\n  text-transform: uppercase;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n  width: 250px;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%] {\n  width: 110px !important;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0px 4px 0px 0px;\n}\n\ndiv.scroll-table-container[_ngcontent-%COMP%] {\n  overflow: scroll;\n  max-width: 1200px;\n  max-height: 800px;\n}\n\n.actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0px 4px 0px 0px;\n}\n\n.myFilters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.outer-input-frame[_ngcontent-%COMP%] {\n  border: solid #d4d4d4 2px;\n}\n\n.mainSection[_ngcontent-%COMP%] {\n  margin: 10px 0px 5px 7px;\n  padding: 0px;\n  font-size: 12px;\n  min-width: 1150px !important;\n}\n\n.mainBorder[_ngcontent-%COMP%] {\n  padding: 15px 15px 15px 15px;\n  border: 1px solid #ccc;\n  margin: 0px 0px 0px 2px;\n  width: 100%;\n}\n\n.mainBorder.loading[_ngcontent-%COMP%] {\n  background-color: #005d7e !important;\n  color: #fff;\n  padding: 15px !important;\n  margin-bottom: 15px;\n}\n\n.dataMain[_ngcontent-%COMP%] {\n  margin: 5px;\n  width: 90%;\n}\n\n.dataMain[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  width: 200px;\n  padding: 10px;\n  font-weight: bold;\n  vertical-align: top;\n}\n\n.dataMain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  vertical-align: top;\n}\n\n.dataMain[_ngcontent-%COMP%]   td.buttons[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.links-panel[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.links-panel.card.ml-1.mt-2[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n}\n\n.create-search-button-group[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.create-delete-button-group[_ngcontent-%COMP%] {\n  float: left;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-right: 5px !important;\n}\n\n.searchForm[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.searchForm[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding: 5px 10px 5px 0px;\n}\n\n.searchForm[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding-right: 20px;\n  width: 150px;\n}\n\n.searchForm[_ngcontent-%COMP%]   select.multiple[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.searchForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n\n.searchForm[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\n.submit[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.submit[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  margin: 10px;\n  text-align: right;\n}\n\n.buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #4A49A8;\n  text-align: center;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n  margin: 5px;\n  font-size: 14px !important;\n}\n\n.mainSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #00f !important;\n  text-decoration: underline !important;\n}\n\n.mainSection[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-bottom: 13px !important;\n  font-size: 12px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .blueHeader[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #0073b9;\n  color: #fff;\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: #005518;\n  color: #fff;\n  padding: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .editButton[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  text-align: right;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain.files[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 200px;\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties.files[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  width: 100%;\n  margin-bottom: 5px;\n}\n\n.experimentConfigurations[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  width: 300px;\n}\n\nul[_ngcontent-%COMP%] {\n  padding-left: 13px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%] {\n  min-width: 650px;\n}\n\n.files[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\nlabel.right[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\n.mainBorder[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.mainBorder.last[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.header[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  margin-bottom: 0px !important;\n  padding-bottom: 0px !important;\n}\n\n.nav.nav-tabs[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-left: -6px;\n  border-bottom: none !important;\n  padding-top: 15px !important;\n}\n\n.mainSection[_ngcontent-%COMP%] {\n  margin-top: 0px;\n}\n\na.nav-link[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  text-decoration: none !important;\n}\n\na.nav-link.active[_ngcontent-%COMP%] {\n  border-color: #000 #000 #005518 !important;\n  text-decoration: none !important;\n  color: #fff !important;\n  background-color: #005518 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FuYW5vbGFiLWNsaWVudC9jYW5hbm9sYWItY2xpZW50LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9jYW5hbm9sYWItY2xpZW50L21haW4tZGlzcGxheS9zYW1wbGVzL3B1YmxpY2F0aW9ucy9zYW1wbGUtcHVibGljYXRpb25zL3NhbXBsZS1wdWJsaWNhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2NhbmFub2xhYi1jbGllbnQvbWFpbi1kaXNwbGF5L21haW4tZGlzcGxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQkE7RUFDSSw2REFGb0I7QUNkeEI7O0FEbUJBO0VBQ0ksNkRBTm9CO0FDVnhCOztBRGtCQTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FDZkQ7O0FEb0JBO0VBRUkseUJBN0JxQjtFQThCckIsWUEzQlk7RUE0QmYsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ2xCRDs7QURxQkE7RUFFSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDbkJKOztBRHNCQTtFQUVJLHlCQTdDcUI7RUE4Q3JCLHFCQUFBO0VBQ0EsNkJBQUE7QUNwQko7O0FEdUJBO0VBQ0ksa0VBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNwQko7O0FEd0JBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ3JCSjtBRHVCSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDckJSOztBRHlCQSxtQkFBQTtBQUNBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ3RCSjs7QUR5QkEsaUJBQUE7QUFDQTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUN0Qko7O0FEeUJBLG9CQUFBO0FBQ0E7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDdEJKOztBRHlCQSxrQkFBQTtBQUNBO0VB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JGNhbmFuby1ibHVlOiAjMDA3M2I5O1xuJGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU6ICMwMjA1NWE7XG4kbWVudUhlYWRpbmdCYWNrZ3JvdW5kQ29sb3I6ICMwMDVkN2U7XG4kbGVmdE1lbnVCb3JkZXJDb2xvcjojODhCQ0UyO1xuJGxlZnRNZW51V2lkdGg6IDE2MHB4O1xuJGxlZnRNZW51TWFyZ2luOiAwcHg7XG4kbmF2QnV0dG9uQ29sb3I6IzgxRkZGRTtcbiRib3JkZXJDb2xvcjogJGxlZnRNZW51Qm9yZGVyQ29sb3I7XG4kbWFpbkZvbnRTaXplOjEycHg7XG4ka2V5d29yZFNlYXJjaEZvbnRTaXplOiAxMnB4O1xuJG9kZFJvd0NvbG9yOiNlZmVkZWQ7XG4kbWFpbkRpc3BsYXlIZWFkaW5nSGVpZ2h0OiAyOHB4O1xuJG1haW5EaXNwbGF5SGVhZGluZ01hcmdpbjogOHB4O1xuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6YXJpYWwsaGVsdmV0aWNhLHZlcmRhbmEsc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6JGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY7XG5cbn1cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiRmb250LWZhbWlseS1zYW5zLXNlcmlmO1xufVxuLmhlYWRlciB7XG5cdG1hcmdpbjowcHg7XG5cdHBhZGRpbmc6MHB4O1xufVxuLmhvbWUge1xufVxuXG50ZC5sZWZ0TWVudSB7XG4gICAgQGV4dGVuZCAuaG9tZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlO1xuICAgIHdpZHRoOiRsZWZ0TWVudVdpZHRoO1xuXHRtYXJnaW46MHB4O1xuXHRwYWRkaW5nOjBweDtcblx0dmVydGljYWwtYWxpZ246dG9wO1xufVxuXG50ZC5tYWluQ29udGVudCB7XG4gICAgQGV4dGVuZCAuaG9tZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgcGFkZGluZzowcHg7XG4gICAgbWFyZ2luOjBweDtcbn1cblxuLmZvb3RlciB7XG4gICAgQGV4dGVuZCAuaG9tZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlO1xuICAgIGJvcmRlcjpzb2xpZCAkbGVmdE1lbnVCb3JkZXJDb2xvcjtcbiAgICBib3JkZXItd2lkdGg6MXB4IDFweCAxcHggMHB4O1xufVxuXG4ucGFyZW50LWRpdntcbiAgICAvKiBrZWVwIHRoZSBRdWVyeSBzZWN0aW9uIGFuZCB0aGUgRGlzcGxheSBzZWN0aW9uIHNpZGUgYnkgc2lkZS4gICovXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4vLyBARklYTUUgLSBUaGVzZSBjb2xvcnMgbmVlZCB2YXJpYWJsZXNcbi5saW5rLWNsaWNrZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiAjMzMzO1xuXG4gICAgJjpob3ZlcntcbiAgICAgICAgY29sb3I6ICNhOTAxMDE7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbi8qIHVudmlzaXRlZCBsaW5rICovXG5hOmxpbmt7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4vKiB2aXNpdGVkIGxpbmsgKi9cbmE6dmlzaXRlZHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi8qIG1vdXNlIG92ZXIgbGluayAqL1xuYTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICNhOTAxMDE7XG59XG5cbi8qIHNlbGVjdGVkIGxpbmsgKi9cbmE6YWN0aXZle1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogIzMzMztcbn1cblxuLmhpZGV7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnVuc2VsZWN0YWJsZXtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmhhbmQge1xuICAgIGN1cnNvcjpwb2ludGVyICFpbXBvcnRhbnQ7XG59XG5cbi5jbGlja2Vye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4uc2VhcmNoLXJlc3VsdHMtdGFibGV7XG4gICAgZm9udC1zaXplOiAkbWFpbkZvbnRTaXplO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogc29saWQgI2NjYyAxcHg7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy10cntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogc29saWQgI2NjYyAxcHg7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy10aHtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgLy8gIGJvcmRlcjogc29saWQgI2RmZGZkZiAycHg7XG4gICAgYm9yZGVyOiBzb2xpZCAjY2NjIDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FuYW5vLWJsdWU7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy10ZHtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgLy8gYm9yZGVyOiBzb2xpZCAjZGZkZmRmIDJweDtcbiAgICBib3JkZXItbGVmdDogc29saWQgI2NjYyAxcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAjY2NjIDFweDtcbn1cblxuLnJvd09kZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb2RkUm93Q29sb3I7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy0tdHItb2Rke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbmltZyB7XG5cdGJvcmRlci13aWR0aDowcHg7XG5cdG1hcmdpbjowcHg7XG5cdHBhZGRpbmc6MHB4O1xuXG59XG5cbi5zcGFjZXIge1xuICAgIHBhZGRpbmctbGVmdDokbGVmdE1lbnVXaWR0aDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuLnNwYWNlci5jZW50ZXIge1xuICAgIGNvbG9yOiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlO1xufVxuXG5cbi5mb290ZXIge1xuXHRwYWRkaW5nOjBweCAwcHggMHB4IDE2MHB4O1xuXHR2ZXJ0aWNhbC1hbGlnbjptaWRkbGUgIWltcG9ydGFudDtcblx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6JGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU7XG4gICAgYm9yZGVyOnNvbGlkICRsZWZ0TWVudUJvcmRlckNvbG9yO1xuICAgIGJvcmRlci13aWR0aDoxcHggMXB4IDFweCAwcHg7XG4gICAgZm9udC1zaXplOiRtYWluRm9udFNpemU7XG59O1xuXG5cbi5mb290ZXIud2hpdGV7XG5cdGJhY2tncm91bmQtY29sb3I6I2ZmZjtcblx0Ym9yZGVyOjBweDtcblx0cGFkZGluZzoxMHB4IDBweCAwcHggMHB4O1xuXHRmb250LXNpemU6OS41cHg7XG4gICAgY29sb3I6IzMzMztcbn07XG5cbi5mb290ZXIud2hpdGUgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDtcbn07XG5cbi5mb290ZXIud2hpdGUgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiMzMzM7XG59XG5cbi5mb290ZXIud2hpdGUucmVsZWFzZSB7XG4gICAgZm9udC1zaXplOjEycHggIWltcG9ydGFudDtcblx0Zm9udC13ZWlnaHQ6bm9ybWFsICFpbXBvcnRhbnQ7XG5cdGNvbG9yOiM0QTQ5QTg7XG59XG5cbi5mb290ZXIud2hpdGUgLmRpdmlkZXIge1xuXHRwYWRkaW5nOjBweCAxMHB4IDBweCAxMHB4O1xufTtcblxuLmZvb3RlciB1bCB7XG4gICAgbWFyZ2luOjBweDtcbiAgICBwYWRkaW5nOjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG4gICAgbGlzdC1zdHlsZTpub25lO1xufTtcblxuLmZvb3RlciB1bCBsaS5mb290ZXItaXRlbSB7XG4gICAgcGFkZGluZzowcHg7XG4gICAgbWFyZ2luOjBweDtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbn1cblxuXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIC5uYXYtbGluay5uYXYtbWVudS10b3AtaXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjokY2FuYW5vLWJhY2tncm91bmQtYmx1ZTtcbiAgICBjb2xvcjokbmF2QnV0dG9uQ29sb3I7XG4gICAgYm9yZGVyOiBzb2xpZCAkbGVmdE1lbnVCb3JkZXJDb2xvcjtcbiAgICBib3JkZXItd2lkdGg6MHB4IDFweCAwcHggMHB4O1xuICAgIHBhZGRpbmc6NHB4IDE1cHggNHB4IDE1cHg7XG4gICAgbWFyZ2luOjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG5cdHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcblx0b3V0bGluZTowO1xufVxuXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIC5uYXYtbGluay5uYXYtbWVudS10b3AtaXRlbS5sZWZ0e1xuICAgIGJvcmRlcjogc29saWQgJGxlZnRNZW51Qm9yZGVyQ29sb3I7XG4gICAgYm9yZGVyLXdpZHRoOjBweCAxcHggMHB4IDFweDtcbn1cblxuLmZvb3RlciB1bCBsaS5mb290ZXItaXRlbSAubmF2LWxpbmsubmF2LW1lbnUtdG9wLWl0ZW06aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjokbmF2QnV0dG9uQ29sb3I7XG4gICAgY29sb3I6JGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU7XG4gICAgbWFyZ2luOjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG59XG5cbi5yb3dPZGQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiRvZGRSb3dDb2xvcjtcbn1cblxudGFibGUuZGF0YVRhYmxle1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcblxufVxuXG50YWJsZS5kYXRhVGFibGUgdGh7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzNiOTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOjNweCAzcHggM3B4IDVweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRoOmZpcnN0LWxldHRlciB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRke1xuXHRwYWRkaW5nOjVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuXHR3aWR0aDoyNTBweDtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRkLmFjdGlvbnMgIHtcblx0d2lkdGg6MTEwcHggIWltcG9ydGFudDtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRkLmFjdGlvbnMgZGl2IHtcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdG1hcmdpbjowcHggNHB4IDBweCAwcHg7XG59XG5cbmRpdi5zY3JvbGwtdGFibGUtY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDgwMHB4O1xufVxuXG4uYWN0aW9ucyBkaXYge1xuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcblx0bWFyZ2luOjBweCA0cHggMHB4IDBweDtcbn1cblxuLm15RmlsdGVycyBsYWJlbCB7XG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL21haW4tZGlzcGxheS9tYWluLWRpc3BsYXkuY29tcG9uZW50LnNjc3NcIjtcblxuLm1haW5Cb3JkZXIge1xuICAgIG1hcmdpbi1ib3R0b206MTVweDtcbn1cblxuLm1haW5Cb3JkZXIubGFzdCB7XG4gICAgbWFyZ2luLWJvdHRvbTowcHg7XG59XG5cbi5oZWFkZXIge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLm5hdi1pdGVtIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBtYXJnaW4tYm90dG9tOjBweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOjBweCAhaW1wb3J0YW50O1xuXG59XG5cbi5uYXYubmF2LXRhYnMge1xuICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgIG1hcmdpbi1sZWZ0Oi02cHg7XG4gICAgYm9yZGVyLWJvdHRvbTpub25lICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6MTVweCAhaW1wb3J0YW50O1xufVxuLm1haW5TZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOjBweDtcbn1cbmEubmF2LWxpbmsge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuYS5uYXYtbGluay5hY3RpdmUge1xuICAgIGJvcmRlci1jb2xvcjogIzAwMCAjMDAwICRjYW5hbm8tZ3JlZW4gIWltcG9ydGFudDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICBjb2xvcjojZmZmICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjokY2FuYW5vLWdyZWVuICFpbXBvcnRhbnQ7XG59XG4iLCJAaW1wb3J0ICcuLi9jYW5hbm9sYWItY2xpZW50LmNvbXBvbmVudC5zY3NzJztcblxuLm91dGVyLWlucHV0LWZyYW1le1xuICAgIGJvcmRlcjogc29saWQgI2Q0ZDRkNCAycHg7XG59XG4ubWFpblNlY3Rpb24ge1xuICAgIG1hcmdpbjoxMHB4IDBweCA1cHggN3B4O1xuICAgIHBhZGRpbmc6MHB4O1xuICAgIGZvbnQtc2l6ZTokbWFpbkZvbnRTaXplO1xuICAgIG1pbi13aWR0aDoxMTUwcHggIWltcG9ydGFudDtcblxufVxuLm1haW5Cb3JkZXIge1xuICAgIHBhZGRpbmc6MTVweCAxNXB4IDE1cHggMTVweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgbWFyZ2luOjBweCAwcHggMHB4IDJweDtcbiAgICB3aWR0aDogMTAwJTtcblxufVxuXG4ubWFpbkJvcmRlci5sb2FkaW5nIHtcblx0YmFja2dyb3VuZC1jb2xvcjokbWVudUhlYWRpbmdCYWNrZ3JvdW5kQ29sb3IgIWltcG9ydGFudDtcblx0Y29sb3I6I2ZmZjtcblx0cGFkZGluZzoxNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbToxNXB4O1xufVxuXG4uZGF0YU1haW4gIHtcbiAgICBtYXJnaW46NXB4O1xuICAgIHdpZHRoOjkwJTtcbn1cblxuLmRhdGFNYWluIHRkLmxhYmVsIHtcbiAgICB3aWR0aDoyMDBweDtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG59XG4uZGF0YU1haW4gdGQge1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG59XG5cbi5kYXRhTWFpbiB0ZC5idXR0b25zIHtcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xufVxuXG5cbi5saW5rcy1wYW5lbHtcbiAgICB3aWR0aDogNTAwcHg7ICAvLyBARklYTUUgLSBtYWtlIGEgY29uc3Rcbn1cblxuLmxpbmtzLXBhbmVsLmNhcmQubWwtMS5tdC0yIHtcblx0bWFyZ2luLWxlZnQ6MHB4ICFpbXBvcnRhbnRcbn1cblxuLmNyZWF0ZS1zZWFyY2gtYnV0dG9uLWdyb3Vwe1xuICAgIGZsb2F0OiByaWdodDtcbn1cbi5jcmVhdGUtZGVsZXRlLWJ1dHRvbi1ncm91cHtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxubGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgbWFyZ2luLXJpZ2h0OjVweCAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoRm9ybSB7XG4gICAgbWFyZ2luOjVweDtcbn1cblxuLnNlYXJjaEZvcm0gdGR7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIHBhZGRpbmc6NXB4IDEwcHggNXB4IDBweDtcbn1cblxuLnNlYXJjaEZvcm0gdGQubGFiZWx7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcbiAgICB3aWR0aDoxNTBweDtcbn1cblxuLnNlYXJjaEZvcm0gc2VsZWN0Lm11bHRpcGxlIHtcbiAgICB3aWR0aDoxNTBweDtcbn1cblxuLnNlYXJjaEZvcm0gc2VsZWN0IHtcbiAgICBtYXJnaW4tcmlnaHQ6NHB4O1xufVxuXG4uc2VhcmNoRm9ybSBzcGFuLmxhYmVsIHtcbiAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XG59XG5cbi5zdWJtaXQge1xuICAgIHdpZHRoOjEwMCU7XG59XG5cbi5zdWJtaXQgdGQ6bGFzdC1jaGlsZCB7XG4gICAgdGV4dC1hbGlnbjpyaWdodDtcbn1cblxuLmJ1dHRvbnMge1xuICAgIG1hcmdpbjoxMHB4O1xuICAgIHRleHQtYWxpZ246cmlnaHQ7XG59XG5cbi5idXR0b25zIGRpdiB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiM0QTQ5QTg7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbi5lcnJvciB7XG4gICAgY29sb3I6cmVkO1xuICAgIG1hcmdpbjo1cHg7XG4gICAgZm9udC1zaXplOjE0cHggIWltcG9ydGFudDtcbn1cblxuLm1haW5TZWN0aW9uIGEge1xuICAgIGNvbG9yOiMwMGYgIWltcG9ydGFudDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xufVxuXG4ubWFpblNlY3Rpb24gdGQge1xuICAgIHBhZGRpbmctYm90dG9tOjEzcHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6JG1haW5Gb250U2l6ZTtcblxufVxuLm1haW5TZWN0aW9uIC5ibHVlSGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzoxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDczYjk7XG4gICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ubWFpblNlY3Rpb24gLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA1NTE4O1xuICAgIGNvbG9yOiNmZmY7XG4gICAgcGFkZGluZzoxMHB4O1xufVxuXG4gICAgLm1haW5TZWN0aW9uIC5oZWFkZXIgLmJ0biB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OjEwcHg7XG4gICAgfVxuXG4ubWFpblNlY3Rpb24gLmVkaXRCdXR0b257XG4gICAgcGFkZGluZy10b3A6NXB4O1xuICAgIHRleHQtYWxpZ246cmlnaHQ7XG59XG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4uZmlsZXN7XG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xufVxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIHRke1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbn1cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllc3tcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllcyB0aHtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgd2lkdGg6MTUwcHg7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcbn1cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiB0ZC5sYWJlbHtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIHdpZHRoOjIwMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbn1cblxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIC5wcm9wZXJ0aWVzIHRke1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICB3aWR0aDoxNTBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgcGFkZGluZy1yaWdodDoyMHB4O1xufVxuXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXMuZmlsZXN7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTo1cHg7XG59XG5cbi5leHBlcmltZW50Q29uZmlndXJhdGlvbnMgdGQge1xuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcbiAgICB3aWR0aDozMDBweDtcbn1cbiB1bCB7XG4gICBwYWRkaW5nLWxlZnQ6MTNweDtcbn1cblxuXG4uZGF0YUFuZENvbmRpdGlvbnMgdGR7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIHdpZHRoOjIwMHB4O1xufVxuXG4uZGF0YUFuZENvbmRpdGlvbnMgdGh7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA3M2I5O1xuICAgIGNvbG9yOiNmZmY7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIGJvcmRlcjoxcHggIHNvbGlkICNjY2M7XG5cbn1cblxuLnByb3BlcnRpZXMgdGR7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIHdpZHRoOjIwMHB4O1xufVxuXG4ucHJvcGVydGllcyB0aHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDczYjk7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBwYWRkaW5nOjVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgYm9yZGVyOjFweCAgc29saWQgI2NjYztcblxufVxuXG4uZmlsZXMge1xuICAgIG1pbi13aWR0aDo2NTBweDtcbn1cblxuLmZpbGVzIHRke1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbn1cblxuLmZpbGVzIHRoe1xuICAgIGJhY2tncm91bmQtY29sb3I6IzAwNzNiOTtcbiAgICBjb2xvcjojZmZmO1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbiAgICBib3JkZXI6MXB4ICBzb2xpZCAjY2NjO1xuXG59XG5cbmxhYmVsLnJpZ2h0IHtcbiAgICBwYWRkaW5nLWxlZnQ6NXB4O1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8483:
/*!**********************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/publications/sample-publications/sample-publications.module.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SamplePublicationsModule": () => (/* binding */ SamplePublicationsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _sample_publications_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sample-publications.component */ 7204);
/* harmony import */ var _sample_publications_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sample-publications-routing.module */ 9921);
/* harmony import */ var _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/modules/set-object-value/shared.module */ 5413);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _sample_publications_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample-publications.pipe */ 9559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







class SamplePublicationsModule {}
SamplePublicationsModule.ɵfac = function SamplePublicationsModule_Factory(t) {
  return new (t || SamplePublicationsModule)();
};
SamplePublicationsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: SamplePublicationsModule
});
SamplePublicationsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _sample_publications_routing_module__WEBPACK_IMPORTED_MODULE_1__.SamplePublicationsRoutingModule, _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SamplePublicationsModule, {
    declarations: [_sample_publications_component__WEBPACK_IMPORTED_MODULE_0__.SamplePublicationsComponent, _sample_publications_pipe__WEBPACK_IMPORTED_MODULE_3__.SamplePublicationsPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _sample_publications_routing_module__WEBPACK_IMPORTED_MODULE_1__.SamplePublicationsRoutingModule, _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 9559:
/*!********************************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/publications/sample-publications/sample-publications.pipe.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SamplePublicationsPipe": () => (/* binding */ SamplePublicationsPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SamplePublicationsPipe {
  transform(value, ...args) {
    let val = value;
    val = val.replace(/(^[^\/])/, "/$1");
    return val;
  }
}
SamplePublicationsPipe.ɵfac = function SamplePublicationsPipe_Factory(t) {
  return new (t || SamplePublicationsPipe)();
};
SamplePublicationsPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
  name: "samplePublications",
  type: SamplePublicationsPipe,
  pure: true
});

/***/ })

}]);
//# sourceMappingURL=src_app_cananolab-client_main-display_samples_publications_sample-publications_sample-publica-2d163e.js.map