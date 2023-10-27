"use strict";
(self["webpackChunkcananolab_client_new"] = self["webpackChunkcananolab_client_new"] || []).push([["src_app_cananolab-client_main-display_samples_characterization_characterization_module_ts"],{

/***/ 6957:
/*!***********************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/characterization/characterization-routing.module.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharacterizationRoutingModule": () => (/* binding */ CharacterizationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _characterization_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characterization.component */ 1863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _characterization_component__WEBPACK_IMPORTED_MODULE_0__.CharacterizationComponent
}];
class CharacterizationRoutingModule {}
CharacterizationRoutingModule.ɵfac = function CharacterizationRoutingModule_Factory(t) {
  return new (t || CharacterizationRoutingModule)();
};
CharacterizationRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: CharacterizationRoutingModule
});
CharacterizationRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CharacterizationRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 1863:
/*!******************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/characterization/characterization.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharacterizationComponent": () => (/* binding */ CharacterizationComponent)
/* harmony export */ });
/* harmony import */ var _assets_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../assets/properties */ 9552);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../constants */ 4854);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_cananolab_client_status_display_status_display_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cananolab-client/status-display/status-display.service */ 5934);
/* harmony import */ var _common_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/api.service */ 6342);
/* harmony import */ var _common_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/services/navigation.service */ 6489);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/services/util.service */ 7117);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/cananolab-client/main-display/main-display-heading/main-display-heading.component */ 4567);











function CharacterizationComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 2)(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CharacterizationComponent_li_5_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4);
      const type_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.showSection(type_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](type_r2);
  }
}
function CharacterizationComponent_ng_container_6_div_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CharacterizationComponent_ng_container_6_div_1_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const a_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r9.addCharacterization(a_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 17)(1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_div_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r22);
      const d_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const a_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4).$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r20.editCharacterization(d_r16.value.charId, a_r5, d_r16.value.charClassName));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_3_table_1_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const header_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", header_r34, " ");
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_3_table_1_tr_3_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "td", 26);
  }
  if (rf & 2) {
    const column_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", column_r38, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}
const _c0 = function (a0) {
  return {
    "rowOdd": a0
  };
};
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_3_table_1_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_3_table_1_tr_3_td_1_Template, 1, 1, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r35 = ctx.$implicit;
    const odd_r36 = ctx.odd;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c0, odd_r36));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", row_r35);
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_3_table_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "table", 22)(1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_3_table_1_th_2_Template, 2, 1, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_3_table_1_tr_3_Template, 2, 4, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const experiment_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", experiment_r31[1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", experiment_r31[0]);
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_3_table_1_Template, 4, 2, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const e_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r26.getExperiments(e_r24.value));
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_3_ng_container_3_tr_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th")(1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const title_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", title_r50, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](title_r50);
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_3_ng_container_3_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_3_ng_container_3_tr_1_th_1_Template, 3, 2, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entry_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", entry_r45.value);
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_3_ng_container_3_tr_2_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td")(1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const title_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", title_r53, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", title_r53, " ");
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_3_ng_container_3_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_3_ng_container_3_tr_2_td_1_Template, 3, 2, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const even_r46 = ctx_r54.even;
    const entry_r45 = ctx_r54.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](2, _c0, even_r46));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", entry_r45.value);
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_3_ng_container_3_tr_1_Template, 2, 1, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_3_ng_container_3_tr_2_Template, 2, 4, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const entry_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", entry_r45.name == "colTitles");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", entry_r45.name == "colValues");
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 28)(2, "table", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_3_ng_container_3_Template, 3, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const f_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", f_r41["Data and Conditions"]);
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_4_tr_10_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", ctx_r58.serverUrl + "/rest/sample/downloadImage?sampleId=" + ctx_r58.sampleId + "&fileId=" + file_r57.fileId, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r58.serverUrl + "/rest/sample/downloadImage?sampleId=" + ctx_r58.sampleId + "&fileId=" + file_r57.fileId, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_4_tr_10_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", ctx_r59.serverUrl + "/rest/sample/download?sampleId=" + ctx_r59.sampleId + "&fileId=" + file_r57.fileId, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", file_r57["title"], " ");
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_4_tr_10_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("href", file_r57["uri"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", file_r57["uri"], " ");
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_4_tr_10_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const keyword_r65 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHtml", keyword_r65, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_4_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_4_tr_10_a_2_Template, 2, 2, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_4_tr_10_a_3_Template, 2, 2, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_4_tr_10_a_4_Template, 2, 2, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td")(6, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_4_tr_10_li_7_Template, 2, 1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const file_r57 = ctx.$implicit;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", file_r57["imageTitle"] !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", file_r57["title"] !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", file_r57["title"] == undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r56.splitKeywords(file_r57["keywordsString"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", file_r57["description"], _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "table", 31)(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Files ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Keywords ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_4_tr_10_Template, 9, 5, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const f_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", f_r41["Files"]);
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, " Conditions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_3_Template, 4, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_div_4_Template, 11, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const f_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", f_r41["Data and Conditions"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", f_r41["Files"]);
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_ng_container_1_Template, 6, 2, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const e_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", e_r24.value.value);
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_5_tr_2_ng_container_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th")(1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const title_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", title_r73, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](title_r73);
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_5_tr_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_5_tr_2_ng_container_1_th_1_Template, 3, 2, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const entry_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", entry_r69.value);
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_5_tr_2_ng_container_2_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const title_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", title_r76, " ");
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_5_tr_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_5_tr_2_ng_container_2_td_1_Template, 2, 1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const entry_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", entry_r69.value);
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_5_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_5_tr_2_ng_container_1_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_5_tr_2_ng_container_2_Template, 2, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const entry_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", entry_r69.name == "colTitles");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", entry_r69.name == "colValues");
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td")(1, "table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_5_tr_2_Template, 3, 2, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const e_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", e_r24.value.value);
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "td", 26);
  }
  if (rf & 2) {
    const e_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", e_r24.value.value, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_3_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_4_Template, 2, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_5_Template, 3, 1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_td_6_Template, 1, 1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const e_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", e_r24.value.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", e_r24.value.name == "Experiment Configurations");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", e_r24.value.name == "Characterization Results");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", e_r24.value.name == "Properties");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", e_r24.value.name != "Characterization Results" && e_r24.value.name != "Experiment Configurations" && e_r24.value.name != "Properties");
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_tr_1_Template, 7, 5, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const e_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", e_r24.value.value.length);
  }
}
const _c1 = function (a0) {
  return {
    "last": a0
  };
};
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_div_1_Template, 3, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "table", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_ng_container_3_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const d_r16 = ctx.$implicit;
    const last_r17 = ctx.last;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](5, _c1, last_r17));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r15.editUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 3, d_r16.value["displayableItems"]));
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_div_4_Template, 5, 7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](c_r14.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 2, c_r14.value));
  }
}
function CharacterizationComponent_ng_container_6_div_1_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CharacterizationComponent_ng_container_6_div_1_ng_container_4_ng_container_1_Template, 6, 4, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const b_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, b_r12.charsByAssayType));
  }
}
function CharacterizationComponent_ng_container_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, CharacterizationComponent_ng_container_6_div_1_button_3_Template, 2, 0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, CharacterizationComponent_ng_container_6_div_1_ng_container_4_Template, 3, 3, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const a_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", a_r5, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r6.editUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r6.characterizationData[a_r5]);
  }
}
function CharacterizationComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CharacterizationComponent_ng_container_6_div_1_Template, 5, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const a_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r1.sectionToShow == "all" || ctx_r1.sectionToShow == a_r5);
  }
}
const _c2 = function (a0) {
  return [a0, "CHARACTERIZATION"];
};
class CharacterizationComponent {
  constructor(statusDisplayService, apiService, navigationService, router, route, utilService) {
    this.statusDisplayService = statusDisplayService;
    this.apiService = apiService;
    this.navigationService = navigationService;
    this.router = router;
    this.route = route;
    this.utilService = utilService;
    this.sampleId = _assets_properties__WEBPACK_IMPORTED_MODULE_0__.Properties.CURRENT_SAMPLE_ID;
    this.helpUrl = _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.HELP_URL_SAMPLE_CHARACTERIZATION;
    this.sectionToShow = 'all';
    this.serverUrl = _assets_properties__WEBPACK_IMPORTED_MODULE_0__.Properties.API_SERVER_URL;
    // This is all the data that is being displayed on the page!
    this.characterizationData = {};
    this.types = [];
    this.editUrl = false;
  }
  ngOnInit() {
    this.editUrl = this.statusDisplayService.isEditUrl();
    this.navigationService.setCurrentSelectedItem(2);
    this.route.params.subscribe(params => {
      setTimeout(() => {
        _assets_properties__WEBPACK_IMPORTED_MODULE_0__.Properties.SAMPLE_TOOLS = true;
      }, 200);
      this.sampleId = params['sampleId'];
      this.apiService.getSampleName(this.sampleId).subscribe(data => this.toolHeadingNameManage = 'Sample ' + data['sampleName'] + ' Characterization');
      if (this.sampleId <= 0) {
        this.sampleId = _assets_properties__WEBPACK_IMPORTED_MODULE_0__.Properties.CURRENT_SAMPLE_ID;
      } else {
        _assets_properties__WEBPACK_IMPORTED_MODULE_0__.Properties.CURRENT_SAMPLE_ID = this.sampleId;
      }
      // WJRL 2/2023: This called the setup edit page even in view mode:
      let useURL = this.editUrl ? _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.QUERY_CHARACTERIZATION_SETUP_EDIT : _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.QUERY_CHARACTERIZATION_VIEW;
      this.apiService.doGet(useURL, 'sampleId=' + this.sampleId).subscribe(data => {
        for (let x = 0; x < data.length; x++) {
          this.types.push(data[x]['type']);
          this.characterizationData[data[x]['type']] = [];
        }
        console.log(this.types);
        console.log(this.characterizationData);
        this.getCharacterizationData().subscribe(data => {
          this.tempData = data;
          this.separateDataSets(data);
        }, err => {
          console.error('Error ', err);
        });
      }, errors => {
        this.errors = errors;
      });
    });
  }
  // returns all data for this page //
  getCharacterizationData() {
    let results;
    try {
      results = this.apiService.doGet(_constants__WEBPACK_IMPORTED_MODULE_1__.Consts.QUERY_CHARACTERIZATION_VIEW, 'sampleId=' + this.sampleId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.timeout)(_assets_properties__WEBPACK_IMPORTED_MODULE_0__.Properties.HTTP_TIMEOUT));
    } catch (e) {
      console.error('doGet Exception: ' + e);
    }
    return results;
  }
  getExperiments(data) {
    let value = data.value;
    let rows = [];
    let rowLength = 0;
    let headers = [];
    value.forEach((data, index) => {
      let key = Object.keys(data)[0];
      headers.push(key);
      rowLength = data[key].length;
    });
    for (let x = 0; x < rowLength; x++) {
      let currentRow = [];
      value.forEach((data, index) => {
        let key = Object.keys(data)[0];
        currentRow.push(data[key][x]);
      });
      rows.push(currentRow);
    }
    return [rows, headers];
  }
  // separates out all data into subsets of physico, in vivo, in vitro and other characterization types //
  separateDataSets(data) {
    // console.log(data)
    // let types =['in vitro characterization','in vivo characterization','physico-chemical characterization']
    data.forEach(item => {
      item.charName = Object.keys(item.charsByAssayType)[0];
      this.characterizationData[item.type].push(item);
    });
  }
  // splits keywords for experiments and configurations //
  splitKeywords(keywords) {
    if (keywords) {
      return keywords.split('\n');
    } else {
      return '';
    }
  }
  // brings up new characterization form //
  addCharacterization(type) {
    this.router.navigate(['home/samples/characterization/edit-characterization', _assets_properties__WEBPACK_IMPORTED_MODULE_0__.Properties.CURRENT_SAMPLE_ID, type]); // @FIXME  Don't hard code these
  }
  // brings up existing characterization form //
  editCharacterization(charId, type, charClassName) {
    this.router.navigate(['home/samples/characterization/edit-characterization', _assets_properties__WEBPACK_IMPORTED_MODULE_0__.Properties.CURRENT_SAMPLE_ID, charId, charClassName, type]); // @FIXME  Don't hard code these
  }

  showSection(value) {
    this.sectionToShow = value;
  }
}
CharacterizationComponent.ɵfac = function CharacterizationComponent_Factory(t) {
  return new (t || CharacterizationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_cananolab_client_status_display_status_display_service__WEBPACK_IMPORTED_MODULE_2__.StatusDisplayService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_common_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_common_services_navigation_service__WEBPACK_IMPORTED_MODULE_4__.NavigationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_common_services_util_service__WEBPACK_IMPORTED_MODULE_5__.UtilService));
};
CharacterizationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: CharacterizationComponent,
  selectors: [["canano-characterization"]],
  decls: 7,
  vars: 8,
  consts: [[3, "helpUrl", "toolHeadingName", "export", "print"], [1, "nav", "nav-tabs"], [1, "nav-item"], ["id", "all-tab", "data-toggle", "tab", 1, "nav-link", "active", 3, "click"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["id", "all-tab", "data-toggle", "tab", 1, "nav-link", 3, "click"], ["class", "mainSection", 4, "ngIf"], [1, "mainSection"], [1, "header"], ["class", "btn btn-primary btn-sm", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "blueHeader"], ["class", "mainBorder", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "mainBorder", 3, "ngClass"], ["class", "editButton", 4, "ngIf"], [1, "dataMain"], [1, "editButton"], [4, "ngIf"], [1, "label"], [3, "innerHTML", 4, "ngIf"], ["class", "dataTable", 4, "ngIf"], [1, "dataTable"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [3, "innerHTML", 4, "ngFor", "ngForOf"], [3, "innerHTML"], ["for", "dataConditions"], [1, "scroll-table-container"], ["id", "dataConditions", 1, "dataTable"], [3, "ngClass", 4, "ngIf"], [1, "files"], [3, "href", 4, "ngIf"], ["target", "_blank", "rel", "nofollow noreferrer", 3, "href", 4, "ngIf"], [3, "href"], ["width", "150", 3, "src"], ["target", "_blank", "rel", "nofollow noreferrer", 3, "href"], [3, "innerHtml"]],
  template: function CharacterizationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "canano-main-display-heading", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "ul", 1)(2, "li", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CharacterizationComponent_Template_a_click_3_listener() {
        return ctx.showSection("all");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "All");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, CharacterizationComponent_li_5_Template, 3, 1, "li", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, CharacterizationComponent_ng_container_6_Template, 2, 1, "ng-container", 5);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("helpUrl", ctx.helpUrl)("toolHeadingName", ctx.toolHeadingNameManage)("export", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](6, _c2, ctx.sampleId))("print", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.types);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.types);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_6__.MainDisplayHeadingComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.KeyValuePipe],
  styles: ["html[_ngcontent-%COMP%] {\n  font-family: arial, helvetica, verdana, sans-serif !important;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: arial, helvetica, verdana, sans-serif !important;\n}\n\n.header[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\ntd.leftMenu[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  width: 160px;\n  margin: 0px;\n  padding: 0px;\n  vertical-align: top;\n}\n\ntd.mainContent[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding: 0px;\n  margin: 0px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  border: solid #88BCE2;\n  border-width: 1px 1px 1px 0px;\n}\n\n.parent-div[_ngcontent-%COMP%] {\n  \n  display: flex;\n  flex-direction: row;\n  background-color: #fff;\n  width: 100%;\n}\n\n.link-clicker[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n.link-clicker[_ngcontent-%COMP%]:hover {\n  color: #a90101;\n  cursor: pointer;\n}\n\n\na[_ngcontent-%COMP%]:link {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n\na[_ngcontent-%COMP%]:visited {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #a90101;\n}\n\n\na[_ngcontent-%COMP%]:active {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.unselectable[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  text-transform: uppercase;\n}\n\n.hand[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.clicker[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.search-results-table[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 100%;\n  border: solid #ccc 1px;\n}\n\n.search-results-tr[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: solid #ccc 1px;\n}\n\n.search-results-th[_ngcontent-%COMP%] {\n  padding: 6px;\n  border: solid #ccc 1px;\n  background-color: #0073b9;\n  color: #fff;\n}\n\n.search-results-td[_ngcontent-%COMP%] {\n  padding: 6px;\n  border-left: solid #ccc 1px;\n  border-right: solid #ccc 1px;\n}\n\n.rowOdd[_ngcontent-%COMP%] {\n  background-color: #efeded;\n}\n\n.search-results--tr-odd[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-width: 0px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  padding-left: 160px;\n  text-align: center;\n}\n\n.spacer.center[_ngcontent-%COMP%] {\n  color: #02055a;\n}\n\n.footer[_ngcontent-%COMP%] {\n  padding: 0px 0px 0px 160px;\n  vertical-align: middle !important;\n  text-align: center;\n  background-color: #02055a;\n  border: solid #88BCE2;\n  border-width: 1px 1px 1px 0px;\n  font-size: 12px;\n}\n\n.footer.white[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 0px;\n  padding: 10px 0px 0px 0px;\n  font-size: 9.5px;\n  color: #333;\n}\n\n.footer.white[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.footer.white[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline !important;\n  color: #333;\n}\n\n.footer.white.release[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  font-weight: normal !important;\n  color: #4A49A8;\n}\n\n.footer.white[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  padding: 0px 10px 0px 10px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  vertical-align: middle;\n  list-style: none;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  display: inline-block;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  color: #81FFFE;\n  border: solid #88BCE2;\n  border-width: 0px 1px 0px 0px;\n  padding: 4px 15px 4px 15px;\n  margin: 0px;\n  vertical-align: top;\n  text-transform: uppercase;\n  font-weight: bold;\n  outline: 0;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item.left[_ngcontent-%COMP%] {\n  border: solid #88BCE2;\n  border-width: 0px 1px 0px 1px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item[_ngcontent-%COMP%]:hover {\n  background-color: #81FFFE;\n  color: #02055a;\n  margin: 0px;\n  vertical-align: top;\n}\n\n.rowOdd[_ngcontent-%COMP%] {\n  background-color: #efeded;\n}\n\ntable.dataTable[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #ccc;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  font-weight: bold;\n  padding: 3px 3px 3px 5px;\n  border: 1px solid #ccc;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-letter {\n  text-transform: uppercase;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n  width: 250px;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%] {\n  width: 110px !important;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0px 4px 0px 0px;\n}\n\ndiv.scroll-table-container[_ngcontent-%COMP%] {\n  overflow: scroll;\n  max-width: 1200px;\n  max-height: 800px;\n}\n\n.actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0px 4px 0px 0px;\n}\n\n.myFilters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.outer-input-frame[_ngcontent-%COMP%] {\n  border: solid #d4d4d4 2px;\n}\n\n.mainSection[_ngcontent-%COMP%] {\n  margin: 10px 0px 5px 7px;\n  padding: 0px;\n  font-size: 12px;\n  min-width: 1150px !important;\n}\n\n.mainBorder[_ngcontent-%COMP%] {\n  padding: 15px 15px 15px 15px;\n  border: 1px solid #ccc;\n  margin: 0px 0px 0px 2px;\n  width: 100%;\n}\n\n.mainBorder.loading[_ngcontent-%COMP%] {\n  background-color: #005d7e !important;\n  color: #fff;\n  padding: 15px !important;\n  margin-bottom: 15px;\n}\n\n.dataMain[_ngcontent-%COMP%] {\n  margin: 5px;\n  width: 90%;\n}\n\n.dataMain[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  width: 200px;\n  padding: 10px;\n  font-weight: bold;\n  vertical-align: top;\n}\n\n.dataMain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  vertical-align: top;\n}\n\n.dataMain[_ngcontent-%COMP%]   td.buttons[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.links-panel[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.links-panel.card.ml-1.mt-2[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n}\n\n.create-search-button-group[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.create-delete-button-group[_ngcontent-%COMP%] {\n  float: left;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-right: 5px !important;\n}\n\n.searchForm[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.searchForm[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding: 5px 10px 5px 0px;\n}\n\n.searchForm[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding-right: 20px;\n  width: 150px;\n}\n\n.searchForm[_ngcontent-%COMP%]   select.multiple[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.searchForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n\n.searchForm[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\n.submit[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.submit[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  margin: 10px;\n  text-align: right;\n}\n\n.buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #4A49A8;\n  text-align: center;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n  margin: 5px;\n  font-size: 14px !important;\n}\n\n.mainSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #00f !important;\n  text-decoration: underline !important;\n}\n\n.mainSection[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-bottom: 13px !important;\n  font-size: 12px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .blueHeader[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #0073b9;\n  color: #fff;\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: #005518;\n  color: #fff;\n  padding: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .editButton[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  text-align: right;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain.files[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 200px;\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties.files[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  width: 100%;\n  margin-bottom: 5px;\n}\n\n.experimentConfigurations[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  width: 300px;\n}\n\nul[_ngcontent-%COMP%] {\n  padding-left: 13px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%] {\n  min-width: 650px;\n}\n\n.files[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\nlabel.right[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\n.mainSection[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-bottom: 13px !important;\n  font-size: 12px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .blueHeader[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #0073b9;\n  color: #fff;\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: #005518;\n  color: #fff;\n  padding: 10px;\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .editButton[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  text-align: right;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain.files[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 200px;\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties.files[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  width: 100%;\n  margin-bottom: 5px;\n}\n\n.experimentConfigurations[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  width: 300px;\n}\n\nul[_ngcontent-%COMP%] {\n  padding-left: 13px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%] {\n  min-width: 650px;\n}\n\n.files[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.mainBorder[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.mainBorder.last[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n\n.mainSection[_ngcontent-%COMP%] {\n  margin-top: 0px !important;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  margin-bottom: 0px !important;\n  padding-bottom: 0px !important;\n  text-transform: capitalize;\n}\n\n.nav.nav-tabs[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-left: -6px;\n  border-bottom: none !important;\n  padding-top: 15px !important;\n}\n\na.nav-link[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n  text-transform: capitalize !important;\n}\n\na.nav-link.active[_ngcontent-%COMP%] {\n  border-color: #000 #000 #005518 !important;\n  text-decoration: none !important;\n  color: #fff !important;\n  background-color: #005518 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FuYW5vbGFiLWNsaWVudC9jYW5hbm9sYWItY2xpZW50LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9jYW5hbm9sYWItY2xpZW50L21haW4tZGlzcGxheS9zYW1wbGVzL2NoYXJhY3Rlcml6YXRpb24vY2hhcmFjdGVyaXphdGlvbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FuYW5vbGFiLWNsaWVudC9tYWluLWRpc3BsYXkvbWFpbi1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCQTtFQUNJLDZEQUZvQjtBQ2R4Qjs7QURtQkE7RUFDSSw2REFOb0I7QUNWeEI7O0FEa0JBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNmRDs7QURvQkE7RUFFSSx5QkE3QnFCO0VBOEJyQixZQTNCWTtFQTRCZixXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDbEJEOztBRHFCQTtFQUVJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNuQko7O0FEc0JBO0VBRUkseUJBN0NxQjtFQThDckIscUJBQUE7RUFDQSw2QkFBQTtBQ3BCSjs7QUR1QkE7RUFDSSxrRUFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ3BCSjs7QUR3QkE7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FDckJKO0FEdUJJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNyQlI7O0FEeUJBLG1CQUFBO0FBQ0E7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FDdEJKOztBRHlCQSxpQkFBQTtBQUNBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQ3RCSjs7QUR5QkEsb0JBQUE7QUFDQTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUN0Qko7O0FEeUJBLGtCQUFBO0FBQ0E7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7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O1xuJGNhbmFuby1ibHVlOiAjMDA3M2I5O1xuJGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU6ICMwMjA1NWE7XG4kbWVudUhlYWRpbmdCYWNrZ3JvdW5kQ29sb3I6ICMwMDVkN2U7XG4kbGVmdE1lbnVCb3JkZXJDb2xvcjojODhCQ0UyO1xuJGxlZnRNZW51V2lkdGg6IDE2MHB4O1xuJGxlZnRNZW51TWFyZ2luOiAwcHg7XG4kbmF2QnV0dG9uQ29sb3I6IzgxRkZGRTtcbiRib3JkZXJDb2xvcjogJGxlZnRNZW51Qm9yZGVyQ29sb3I7XG4kbWFpbkZvbnRTaXplOjEycHg7XG4ka2V5d29yZFNlYXJjaEZvbnRTaXplOiAxMnB4O1xuJG9kZFJvd0NvbG9yOiNlZmVkZWQ7XG4kbWFpbkRpc3BsYXlIZWFkaW5nSGVpZ2h0OiAyOHB4O1xuJG1haW5EaXNwbGF5SGVhZGluZ01hcmdpbjogOHB4O1xuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6YXJpYWwsaGVsdmV0aWNhLHZlcmRhbmEsc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6JGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY7XG5cbn1cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiRmb250LWZhbWlseS1zYW5zLXNlcmlmO1xufVxuLmhlYWRlciB7XG5cdG1hcmdpbjowcHg7XG5cdHBhZGRpbmc6MHB4O1xufVxuLmhvbWUge1xufVxuXG50ZC5sZWZ0TWVudSB7XG4gICAgQGV4dGVuZCAuaG9tZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlO1xuICAgIHdpZHRoOiRsZWZ0TWVudVdpZHRoO1xuXHRtYXJnaW46MHB4O1xuXHRwYWRkaW5nOjBweDtcblx0dmVydGljYWwtYWxpZ246dG9wO1xufVxuXG50ZC5tYWluQ29udGVudCB7XG4gICAgQGV4dGVuZCAuaG9tZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgcGFkZGluZzowcHg7XG4gICAgbWFyZ2luOjBweDtcbn1cblxuLmZvb3RlciB7XG4gICAgQGV4dGVuZCAuaG9tZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlO1xuICAgIGJvcmRlcjpzb2xpZCAkbGVmdE1lbnVCb3JkZXJDb2xvcjtcbiAgICBib3JkZXItd2lkdGg6MXB4IDFweCAxcHggMHB4O1xufVxuXG4ucGFyZW50LWRpdntcbiAgICAvKiBrZWVwIHRoZSBRdWVyeSBzZWN0aW9uIGFuZCB0aGUgRGlzcGxheSBzZWN0aW9uIHNpZGUgYnkgc2lkZS4gICovXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4vLyBARklYTUUgLSBUaGVzZSBjb2xvcnMgbmVlZCB2YXJpYWJsZXNcbi5saW5rLWNsaWNrZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiAjMzMzO1xuXG4gICAgJjpob3ZlcntcbiAgICAgICAgY29sb3I6ICNhOTAxMDE7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbi8qIHVudmlzaXRlZCBsaW5rICovXG5hOmxpbmt7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4vKiB2aXNpdGVkIGxpbmsgKi9cbmE6dmlzaXRlZHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi8qIG1vdXNlIG92ZXIgbGluayAqL1xuYTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICNhOTAxMDE7XG59XG5cbi8qIHNlbGVjdGVkIGxpbmsgKi9cbmE6YWN0aXZle1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogIzMzMztcbn1cblxuLmhpZGV7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnVuc2VsZWN0YWJsZXtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmhhbmQge1xuICAgIGN1cnNvcjpwb2ludGVyICFpbXBvcnRhbnQ7XG59XG5cbi5jbGlja2Vye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4uc2VhcmNoLXJlc3VsdHMtdGFibGV7XG4gICAgZm9udC1zaXplOiAkbWFpbkZvbnRTaXplO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogc29saWQgI2NjYyAxcHg7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy10cntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogc29saWQgI2NjYyAxcHg7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy10aHtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgLy8gIGJvcmRlcjogc29saWQgI2RmZGZkZiAycHg7XG4gICAgYm9yZGVyOiBzb2xpZCAjY2NjIDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FuYW5vLWJsdWU7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy10ZHtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgLy8gYm9yZGVyOiBzb2xpZCAjZGZkZmRmIDJweDtcbiAgICBib3JkZXItbGVmdDogc29saWQgI2NjYyAxcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAjY2NjIDFweDtcbn1cblxuLnJvd09kZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb2RkUm93Q29sb3I7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy0tdHItb2Rke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbmltZyB7XG5cdGJvcmRlci13aWR0aDowcHg7XG5cdG1hcmdpbjowcHg7XG5cdHBhZGRpbmc6MHB4O1xuXG59XG5cbi5zcGFjZXIge1xuICAgIHBhZGRpbmctbGVmdDokbGVmdE1lbnVXaWR0aDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuLnNwYWNlci5jZW50ZXIge1xuICAgIGNvbG9yOiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlO1xufVxuXG5cbi5mb290ZXIge1xuXHRwYWRkaW5nOjBweCAwcHggMHB4IDE2MHB4O1xuXHR2ZXJ0aWNhbC1hbGlnbjptaWRkbGUgIWltcG9ydGFudDtcblx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6JGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU7XG4gICAgYm9yZGVyOnNvbGlkICRsZWZ0TWVudUJvcmRlckNvbG9yO1xuICAgIGJvcmRlci13aWR0aDoxcHggMXB4IDFweCAwcHg7XG4gICAgZm9udC1zaXplOiRtYWluRm9udFNpemU7XG59O1xuXG5cbi5mb290ZXIud2hpdGV7XG5cdGJhY2tncm91bmQtY29sb3I6I2ZmZjtcblx0Ym9yZGVyOjBweDtcblx0cGFkZGluZzoxMHB4IDBweCAwcHggMHB4O1xuXHRmb250LXNpemU6OS41cHg7XG4gICAgY29sb3I6IzMzMztcbn07XG5cbi5mb290ZXIud2hpdGUgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDtcbn07XG5cbi5mb290ZXIud2hpdGUgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiMzMzM7XG59XG5cbi5mb290ZXIud2hpdGUucmVsZWFzZSB7XG4gICAgZm9udC1zaXplOjEycHggIWltcG9ydGFudDtcblx0Zm9udC13ZWlnaHQ6bm9ybWFsICFpbXBvcnRhbnQ7XG5cdGNvbG9yOiM0QTQ5QTg7XG59XG5cbi5mb290ZXIud2hpdGUgLmRpdmlkZXIge1xuXHRwYWRkaW5nOjBweCAxMHB4IDBweCAxMHB4O1xufTtcblxuLmZvb3RlciB1bCB7XG4gICAgbWFyZ2luOjBweDtcbiAgICBwYWRkaW5nOjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG4gICAgbGlzdC1zdHlsZTpub25lO1xufTtcblxuLmZvb3RlciB1bCBsaS5mb290ZXItaXRlbSB7XG4gICAgcGFkZGluZzowcHg7XG4gICAgbWFyZ2luOjBweDtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbn1cblxuXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIC5uYXYtbGluay5uYXYtbWVudS10b3AtaXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjokY2FuYW5vLWJhY2tncm91bmQtYmx1ZTtcbiAgICBjb2xvcjokbmF2QnV0dG9uQ29sb3I7XG4gICAgYm9yZGVyOiBzb2xpZCAkbGVmdE1lbnVCb3JkZXJDb2xvcjtcbiAgICBib3JkZXItd2lkdGg6MHB4IDFweCAwcHggMHB4O1xuICAgIHBhZGRpbmc6NHB4IDE1cHggNHB4IDE1cHg7XG4gICAgbWFyZ2luOjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG5cdHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcblx0b3V0bGluZTowO1xufVxuXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIC5uYXYtbGluay5uYXYtbWVudS10b3AtaXRlbS5sZWZ0e1xuICAgIGJvcmRlcjogc29saWQgJGxlZnRNZW51Qm9yZGVyQ29sb3I7XG4gICAgYm9yZGVyLXdpZHRoOjBweCAxcHggMHB4IDFweDtcbn1cblxuLmZvb3RlciB1bCBsaS5mb290ZXItaXRlbSAubmF2LWxpbmsubmF2LW1lbnUtdG9wLWl0ZW06aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjokbmF2QnV0dG9uQ29sb3I7XG4gICAgY29sb3I6JGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU7XG4gICAgbWFyZ2luOjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG59XG5cbi5yb3dPZGQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiRvZGRSb3dDb2xvcjtcbn1cblxudGFibGUuZGF0YVRhYmxle1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcblxufVxuXG50YWJsZS5kYXRhVGFibGUgdGh7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzNiOTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOjNweCAzcHggM3B4IDVweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRoOmZpcnN0LWxldHRlciB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRke1xuXHRwYWRkaW5nOjVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuXHR3aWR0aDoyNTBweDtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRkLmFjdGlvbnMgIHtcblx0d2lkdGg6MTEwcHggIWltcG9ydGFudDtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRkLmFjdGlvbnMgZGl2IHtcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdG1hcmdpbjowcHggNHB4IDBweCAwcHg7XG59XG5cbmRpdi5zY3JvbGwtdGFibGUtY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDgwMHB4O1xufVxuXG4uYWN0aW9ucyBkaXYge1xuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcblx0bWFyZ2luOjBweCA0cHggMHB4IDBweDtcbn1cblxuLm15RmlsdGVycyBsYWJlbCB7XG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xufVxuIiwiQGltcG9ydCBcIi4uLy4uLy4uL21haW4tZGlzcGxheS9tYWluLWRpc3BsYXkuY29tcG9uZW50LnNjc3NcIjtcblxuICAgIC5tYWluU2VjdGlvbiB0ZCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOjEzcHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiRtYWluRm9udFNpemU7XG5cbiAgICB9XG4gICAgLm1haW5TZWN0aW9uIC5ibHVlSGVhZGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzAwNzNiOTtcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG5cbiAgICAubWFpblNlY3Rpb24gLmhlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IzAwNTUxODtcbiAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgcGFkZGluZzoxMHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG5cbiAgICAgICAgLm1haW5TZWN0aW9uIC5oZWFkZXIgLmJ0biB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDoxMHB4O1xuICAgICAgICB9XG5cbiAgICAubWFpblNlY3Rpb24gLmVkaXRCdXR0b257XG4gICAgICAgIHBhZGRpbmctdG9wOjVweDtcbiAgICAgICAgdGV4dC1hbGlnbjpyaWdodDtcbiAgICB9XG4gICAgLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluLmZpbGVze1xuICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XG4gICAgfVxuICAgIC5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiB0ZHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIH1cbiAgICAubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXN7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cbiAgICAubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXMgdGh7XG4gICAgICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICAgICAgd2lkdGg6MTUwcHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbiAgICAgICAgcGFkZGluZy1yaWdodDoyMHB4O1xuICAgIH1cbiAgICAubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gdGQubGFiZWx7XG4gICAgICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgICAgIHdpZHRoOjIwMHB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgfVxuXG4gICAgLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIC5wcm9wZXJ0aWVzIHRke1xuICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgICAgIHdpZHRoOjE1MHB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcbiAgICB9XG5cbiAgICAubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXMuZmlsZXN7XG4gICAgICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTo1cHg7XG4gICAgfVxuXG4gICAgLmV4cGVyaW1lbnRDb25maWd1cmF0aW9ucyB0ZCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcbiAgICAgICAgd2lkdGg6MzAwcHg7XG4gICAgfVxuICAgICB1bCB7XG4gICAgICAgcGFkZGluZy1sZWZ0OjEzcHg7XG4gICAgfVxuXG5cbiAgICAuZGF0YUFuZENvbmRpdGlvbnMgdGR7XG4gICAgICAgIHBhZGRpbmc6NXB4O1xuICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgICAgIHdpZHRoOjIwMHB4O1xuICAgIH1cblxuICAgIC5kYXRhQW5kQ29uZGl0aW9ucyB0aHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMDA3M2I5O1xuICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICBwYWRkaW5nOjVweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgICAgICBib3JkZXI6MXB4ICBzb2xpZCAjY2NjO1xuXG4gICAgfVxuXG4gICAgLnByb3BlcnRpZXMgdGR7XG4gICAgICAgIHBhZGRpbmc6NXB4O1xuICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgICAgIHdpZHRoOjIwMHB4O1xuICAgIH1cblxuICAgIC5wcm9wZXJ0aWVzIHRoe1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDczYjk7XG4gICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgIHBhZGRpbmc6NXB4O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgICAgIGJvcmRlcjoxcHggIHNvbGlkICNjY2M7XG5cbiAgICB9XG5cbiAgICAuZmlsZXMge1xuICAgICAgICBtaW4td2lkdGg6NjUwcHg7XG4gICAgfVxuXG4gICAgLmZpbGVzIHRke1xuICAgICAgICBwYWRkaW5nOjVweDtcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIH1cblxuICAgIC5maWxlcyB0aHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMDA3M2I5O1xuICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICBwYWRkaW5nOjVweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgICAgICBib3JkZXI6MXB4ICBzb2xpZCAjY2NjO1xuXG4gICAgfVxuXG4gICAgbGFiZWwge1xuICAgICAgICBmb250LXdlaWdodDpib2xkO1xuICAgIH1cblxuICAgIC8vIGtlZXAgdGhlc2UgaW4gaGVyZSAvL1xuICAgIC5tYWluQm9yZGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxNXB4O1xuICAgIH1cblxuICAgIC5tYWluQm9yZGVyLmxhc3Qge1xuICAgICAgICBtYXJnaW4tYm90dG9tOjBweDtcbiAgICB9XG4gICAgLm1haW5TZWN0aW9uIHtcbiAgICAgICAgbWFyZ2luLXRvcDowcHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubmF2LWl0ZW0ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOjBweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTowcHggIWltcG9ydGFudDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgfVxuXG4gICAgLm5hdi5uYXYtdGFicyB7XG4gICAgICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgICAgICBtYXJnaW4tbGVmdDotNnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOm5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy10b3A6MTVweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBhLm5hdi1saW5rIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIGEubmF2LWxpbmsuYWN0aXZlIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDAwICMwMDAgJGNhbmFuby1ncmVlbiAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6I2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiRjYW5hbm8tZ3JlZW4gIWltcG9ydGFudDtcbiAgICB9XG4iLCJAaW1wb3J0ICcuLi9jYW5hbm9sYWItY2xpZW50LmNvbXBvbmVudC5zY3NzJztcblxuLm91dGVyLWlucHV0LWZyYW1le1xuICAgIGJvcmRlcjogc29saWQgI2Q0ZDRkNCAycHg7XG59XG4ubWFpblNlY3Rpb24ge1xuICAgIG1hcmdpbjoxMHB4IDBweCA1cHggN3B4O1xuICAgIHBhZGRpbmc6MHB4O1xuICAgIGZvbnQtc2l6ZTokbWFpbkZvbnRTaXplO1xuICAgIG1pbi13aWR0aDoxMTUwcHggIWltcG9ydGFudDtcblxufVxuLm1haW5Cb3JkZXIge1xuICAgIHBhZGRpbmc6MTVweCAxNXB4IDE1cHggMTVweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgbWFyZ2luOjBweCAwcHggMHB4IDJweDtcbiAgICB3aWR0aDogMTAwJTtcblxufVxuXG4ubWFpbkJvcmRlci5sb2FkaW5nIHtcblx0YmFja2dyb3VuZC1jb2xvcjokbWVudUhlYWRpbmdCYWNrZ3JvdW5kQ29sb3IgIWltcG9ydGFudDtcblx0Y29sb3I6I2ZmZjtcblx0cGFkZGluZzoxNXB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbToxNXB4O1xufVxuXG4uZGF0YU1haW4gIHtcbiAgICBtYXJnaW46NXB4O1xuICAgIHdpZHRoOjkwJTtcbn1cblxuLmRhdGFNYWluIHRkLmxhYmVsIHtcbiAgICB3aWR0aDoyMDBweDtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG59XG4uZGF0YU1haW4gdGQge1xuICAgIHBhZGRpbmc6MTBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG59XG5cbi5kYXRhTWFpbiB0ZC5idXR0b25zIHtcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xufVxuXG5cbi5saW5rcy1wYW5lbHtcbiAgICB3aWR0aDogNTAwcHg7ICAvLyBARklYTUUgLSBtYWtlIGEgY29uc3Rcbn1cblxuLmxpbmtzLXBhbmVsLmNhcmQubWwtMS5tdC0yIHtcblx0bWFyZ2luLWxlZnQ6MHB4ICFpbXBvcnRhbnRcbn1cblxuLmNyZWF0ZS1zZWFyY2gtYnV0dG9uLWdyb3Vwe1xuICAgIGZsb2F0OiByaWdodDtcbn1cbi5jcmVhdGUtZGVsZXRlLWJ1dHRvbi1ncm91cHtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxubGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgbWFyZ2luLXJpZ2h0OjVweCAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoRm9ybSB7XG4gICAgbWFyZ2luOjVweDtcbn1cblxuLnNlYXJjaEZvcm0gdGR7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIHBhZGRpbmc6NXB4IDEwcHggNXB4IDBweDtcbn1cblxuLnNlYXJjaEZvcm0gdGQubGFiZWx7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcbiAgICB3aWR0aDoxNTBweDtcbn1cblxuLnNlYXJjaEZvcm0gc2VsZWN0Lm11bHRpcGxlIHtcbiAgICB3aWR0aDoxNTBweDtcbn1cblxuLnNlYXJjaEZvcm0gc2VsZWN0IHtcbiAgICBtYXJnaW4tcmlnaHQ6NHB4O1xufVxuXG4uc2VhcmNoRm9ybSBzcGFuLmxhYmVsIHtcbiAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XG59XG5cbi5zdWJtaXQge1xuICAgIHdpZHRoOjEwMCU7XG59XG5cbi5zdWJtaXQgdGQ6bGFzdC1jaGlsZCB7XG4gICAgdGV4dC1hbGlnbjpyaWdodDtcbn1cblxuLmJ1dHRvbnMge1xuICAgIG1hcmdpbjoxMHB4O1xuICAgIHRleHQtYWxpZ246cmlnaHQ7XG59XG5cbi5idXR0b25zIGRpdiB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGNvbG9yOiM0QTQ5QTg7XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbi5lcnJvciB7XG4gICAgY29sb3I6cmVkO1xuICAgIG1hcmdpbjo1cHg7XG4gICAgZm9udC1zaXplOjE0cHggIWltcG9ydGFudDtcbn1cblxuLm1haW5TZWN0aW9uIGEge1xuICAgIGNvbG9yOiMwMGYgIWltcG9ydGFudDtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xufVxuXG4ubWFpblNlY3Rpb24gdGQge1xuICAgIHBhZGRpbmctYm90dG9tOjEzcHggIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6JG1haW5Gb250U2l6ZTtcblxufVxuLm1haW5TZWN0aW9uIC5ibHVlSGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzoxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDczYjk7XG4gICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4ubWFpblNlY3Rpb24gLmhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA1NTE4O1xuICAgIGNvbG9yOiNmZmY7XG4gICAgcGFkZGluZzoxMHB4O1xufVxuXG4gICAgLm1haW5TZWN0aW9uIC5oZWFkZXIgLmJ0biB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OjEwcHg7XG4gICAgfVxuXG4ubWFpblNlY3Rpb24gLmVkaXRCdXR0b257XG4gICAgcGFkZGluZy10b3A6NXB4O1xuICAgIHRleHQtYWxpZ246cmlnaHQ7XG59XG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4uZmlsZXN7XG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xufVxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIHRke1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbn1cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllc3tcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllcyB0aHtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgd2lkdGg6MTUwcHg7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcbn1cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiB0ZC5sYWJlbHtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIHdpZHRoOjIwMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbn1cblxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIC5wcm9wZXJ0aWVzIHRke1xuICAgIHRleHQtYWxpZ246bGVmdDtcbiAgICB3aWR0aDoxNTBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgcGFkZGluZy1yaWdodDoyMHB4O1xufVxuXG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXMuZmlsZXN7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTo1cHg7XG59XG5cbi5leHBlcmltZW50Q29uZmlndXJhdGlvbnMgdGQge1xuICAgIHBhZGRpbmctcmlnaHQ6MTBweDtcbiAgICB3aWR0aDozMDBweDtcbn1cbiB1bCB7XG4gICBwYWRkaW5nLWxlZnQ6MTNweDtcbn1cblxuXG4uZGF0YUFuZENvbmRpdGlvbnMgdGR7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIHdpZHRoOjIwMHB4O1xufVxuXG4uZGF0YUFuZENvbmRpdGlvbnMgdGh7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA3M2I5O1xuICAgIGNvbG9yOiNmZmY7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIGJvcmRlcjoxcHggIHNvbGlkICNjY2M7XG5cbn1cblxuLnByb3BlcnRpZXMgdGR7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIHdpZHRoOjIwMHB4O1xufVxuXG4ucHJvcGVydGllcyB0aHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDczYjk7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBwYWRkaW5nOjVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgYm9yZGVyOjFweCAgc29saWQgI2NjYztcblxufVxuXG4uZmlsZXMge1xuICAgIG1pbi13aWR0aDo2NTBweDtcbn1cblxuLmZpbGVzIHRke1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbn1cblxuLmZpbGVzIHRoe1xuICAgIGJhY2tncm91bmQtY29sb3I6IzAwNzNiOTtcbiAgICBjb2xvcjojZmZmO1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbiAgICBib3JkZXI6MXB4ICBzb2xpZCAjY2NjO1xuXG59XG5cbmxhYmVsLnJpZ2h0IHtcbiAgICBwYWRkaW5nLWxlZnQ6NXB4O1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8885:
/*!***************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/samples/characterization/characterization.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CharacterizationModule": () => (/* binding */ CharacterizationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _characterization_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./characterization.component */ 1863);
/* harmony import */ var _characterization_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./characterization-routing.module */ 6957);
/* harmony import */ var _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/modules/set-object-value/shared.module */ 5413);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






class CharacterizationModule {}
CharacterizationModule.ɵfac = function CharacterizationModule_Factory(t) {
  return new (t || CharacterizationModule)();
};
CharacterizationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: CharacterizationModule
});
CharacterizationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _characterization_routing_module__WEBPACK_IMPORTED_MODULE_1__.CharacterizationRoutingModule, _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CharacterizationModule, {
    declarations: [_characterization_component__WEBPACK_IMPORTED_MODULE_0__.CharacterizationComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _characterization_routing_module__WEBPACK_IMPORTED_MODULE_1__.CharacterizationRoutingModule, _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_cananolab-client_main-display_samples_characterization_characterization_module_ts.js.map