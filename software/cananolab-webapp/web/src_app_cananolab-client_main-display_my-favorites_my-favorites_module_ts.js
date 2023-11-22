"use strict";
(self["webpackChunkcananolab_client_new"] = self["webpackChunkcananolab_client_new"] || []).push([["src_app_cananolab-client_main-display_my-favorites_my-favorites_module_ts"],{

/***/ 999:
/*!*******************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/my-favorites/my-favorites-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyFavoritesRoutingModule": () => (/* binding */ MyFavoritesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _my_favorites_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-favorites.component */ 918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _my_favorites_component__WEBPACK_IMPORTED_MODULE_0__.MyFavoritesComponent
}];
class MyFavoritesRoutingModule {}
MyFavoritesRoutingModule.ɵfac = function MyFavoritesRoutingModule_Factory(t) {
  return new (t || MyFavoritesRoutingModule)();
};
MyFavoritesRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: MyFavoritesRoutingModule
});
MyFavoritesRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MyFavoritesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 918:
/*!**************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/my-favorites/my-favorites.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyFavoritesComponent": () => (/* binding */ MyFavoritesComponent)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants */ 4854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _common_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/services/api.service */ 6342);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _protocols_protocols_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../protocols/protocols.service */ 7311);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cananolab-client/main-display/main-display-heading/main-display-heading.component */ 4567);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);








function MyFavoritesComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.errors["error"], " ");
  }
}
function MyFavoritesComponent_div_15_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " There are no samples in your favorites. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MyFavoritesComponent_div_15_table_4_tr_8_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MyFavoritesComponent_div_15_table_4_tr_8_div_5_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const fav_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.navigateToSampleEdit(fav_r7["dataId"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
const _c0 = function (a0) {
  return {
    "rowOdd": a0
  };
};
function MyFavoritesComponent_div_15_table_4_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 15)(1, "td", 16)(2, "div")(3, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MyFavoritesComponent_div_15_table_4_tr_8_Template_a_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const fav_r7 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.navigateToSampleView(fav_r7["dataId"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " View ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MyFavoritesComponent_div_15_table_4_tr_8_div_5_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div")(7, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MyFavoritesComponent_div_15_table_4_tr_8_Template_a_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const fav_r7 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.deleteSampleFromFavorites(fav_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Delete from Favorites ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fav_r7 = ctx.$implicit;
    const odd_r8 = ctx.odd;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, odd_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", fav_r7.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", fav_r7["dataName"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", fav_r7["description"], " ");
  }
}
function MyFavoritesComponent_div_15_table_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 13)(1, "tr")(2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Sample Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Nanomaterial Entity Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, MyFavoritesComponent_div_15_table_4_tr_8_Template, 14, 6, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5.favSamples);
  }
}
function MyFavoritesComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "My Samples");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MyFavoritesComponent_div_15_div_3_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MyFavoritesComponent_div_15_table_4_Template, 9, 1, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.favSamples);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.favSamples);
  }
}
function MyFavoritesComponent_div_16_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " There are no protocols in your favorites. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MyFavoritesComponent_div_16_table_5_tr_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MyFavoritesComponent_div_16_table_5_tr_8_div_2_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24);
      const fav_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.navigateToProtocolEdit(fav_r19["dataId"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function MyFavoritesComponent_div_16_table_5_tr_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 15)(1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MyFavoritesComponent_div_16_table_5_tr_8_div_2_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div")(4, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MyFavoritesComponent_div_16_table_5_tr_8_Template_a_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26);
      const fav_r19 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r25.deleteProtocolFromFavorites(fav_r19));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Delete from Favorites ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fav_r19 = ctx.$implicit;
    const odd_r20 = ctx.odd;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, odd_r20));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", fav_r19.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", fav_r19["dataName"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", fav_r19["protocolFileTitle"], " ");
  }
}
function MyFavoritesComponent_div_16_table_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 13)(1, "tr")(2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Protocol Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Protocol File Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, MyFavoritesComponent_div_16_table_5_tr_8_Template, 11, 6, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r17.favProtocols);
  }
}
function MyFavoritesComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "My Protocols");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MyFavoritesComponent_div_16_div_4_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MyFavoritesComponent_div_16_table_5_Template, 9, 1, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.favProtocols);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.favProtocols);
  }
}
function MyFavoritesComponent_div_17_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " There are no publications in your favorites. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MyFavoritesComponent_div_17_table_5_tr_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MyFavoritesComponent_div_17_table_5_tr_6_div_2_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35);
      const fav_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r33.navigateToPublicationEdit(fav_r30["dataId"]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function MyFavoritesComponent_div_17_table_5_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 15)(1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MyFavoritesComponent_div_17_table_5_tr_6_div_2_Template, 3, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div")(4, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MyFavoritesComponent_div_17_table_5_tr_6_Template_a_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r37);
      const fav_r30 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r36.deletePublicationFromFavorites(fav_r30));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Delete from Favorites ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fav_r30 = ctx.$implicit;
    const odd_r31 = ctx.odd;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, odd_r31));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", fav_r30.editable);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", fav_r30["dataName"], " ");
  }
}
function MyFavoritesComponent_div_17_table_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "table", 13)(1, "tr")(2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Action ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Publication Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, MyFavoritesComponent_div_17_table_5_tr_6_Template, 9, 5, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r28.favPublications);
  }
}
function MyFavoritesComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "My Publications");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MyFavoritesComponent_div_17_div_4_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MyFavoritesComponent_div_17_table_5_Template, 7, 1, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r3.favPublications);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.favPublications);
  }
}
class MyFavoritesComponent {
  constructor(apiService, router, protocolsService) {
    this.apiService = apiService;
    this.router = router;
    this.protocolsService = protocolsService;
    this.errors = {};
    this.helpUrl = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.HELP_URL_FAVORITE;
    this.toolHeadingNameSearchSample = 'My Favorites';
    this.showSampleFavs = true;
    this.showProtocolsFavs = true;
    this.showPublicationsFavs = true;
    this.favSamples = [];
    this.favProtocols = [];
    this.favPublications = [];
    this.protocolScreen = _constants__WEBPACK_IMPORTED_MODULE_0__.ProtocolScreen;
    this.protocolScreenToShow = _constants__WEBPACK_IMPORTED_MODULE_0__.ProtocolScreen.PROTOCOL_SEARCH_INPUT_SCREEN;
  }
  ngOnInit() {
    this.apiService.doGet(_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.QUERY_GET_FAVORITE, '').subscribe(data => {
      this.errors = {};
      this.favSamples = data['samples'];
      this.favProtocols = data['protocols'];
      this.favPublications = data['publications'];
    }, err => {
      this.errors = err;
      console.error('ERROR QUERY_GET_FAVORITE: ', err);
    });
  }
  deleteProtocolFromFavorites(favToDelete) {
    this.apiService.doPost(_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.QUERY_DELETE_FAVORITE, favToDelete).subscribe(data => {
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
    this.apiService.doPost(_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.QUERY_DELETE_FAVORITE, favToDelete).subscribe(data => {
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
    this.apiService.doPost(_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.QUERY_DELETE_FAVORITE, favToDelete).subscribe(data => {
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
    this.protocolsService.setCurrentProtocolScreen(_constants__WEBPACK_IMPORTED_MODULE_0__.ProtocolScreen.PROTOCOL_EDIT_SCREEN, protocolId);
    this.router.navigate(['home/protocols/edit-protocol', protocolId]); // @FIXME  Don't hard code these
  }

  navigateToPublicationEdit(publicationId) {
    this.router.navigate(['home/samples/publications/publication', publicationId]); // @FIXME  Don't hard code these
  }
}

MyFavoritesComponent.ɵfac = function MyFavoritesComponent_Factory(t) {
  return new (t || MyFavoritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_common_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_protocols_protocols_service__WEBPACK_IMPORTED_MODULE_2__.ProtocolsService));
};
MyFavoritesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: MyFavoritesComponent,
  selectors: [["canano-my-favorites"]],
  decls: 18,
  vars: 9,
  consts: [[3, "helpUrl", "toolHeadingName"], [1, "mainSection"], ["class", "error", 4, "ngIf"], [1, "mainBorder"], ["id", "showSampleFavsCheckbox", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["for", "showSampleFavsCheckbox", 1, "right"], ["id", "showProtocolsFavsCheckbox", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["for", "showProtocolsFavsCheckbox", 1, "right"], ["id", "showPublicationsFavsCheckbox", "type", "checkbox", 3, "ngModel", "ngModelChange"], ["for", "showPublicationsFavsCheckbox", 1, "right"], [4, "ngIf"], [1, "error"], ["class", "dataTable", 4, "ngIf"], [1, "dataTable"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "actions"], [3, "click"], ["src", "assets/images/trash_caNanoLab.png", "alt", "trash_icon", 2, "width", "10px"], [1, "actions", "favorites"]],
  template: function MyFavoritesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "canano-main-display-heading", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MyFavoritesComponent_div_2_Template, 2, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "div")(5, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MyFavoritesComponent_Template_input_ngModelChange_5_listener($event) {
        return ctx.showSampleFavs = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Samples ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MyFavoritesComponent_Template_input_ngModelChange_8_listener($event) {
        return ctx.showProtocolsFavs = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Protocols ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function MyFavoritesComponent_Template_input_ngModelChange_11_listener($event) {
        return ctx.showPublicationsFavs = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, " Publications ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, MyFavoritesComponent_div_15_Template, 5, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, MyFavoritesComponent_div_16_Template, 6, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, MyFavoritesComponent_div_17_Template, 6, 2, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("helpUrl", ctx.helpUrl)("toolHeadingName", ctx.toolHeadingNameSearchSample);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.errors["error"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.showSampleFavs);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.showProtocolsFavs);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.showPublicationsFavs);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showSampleFavs);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showProtocolsFavs);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showPublicationsFavs);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_3__.MainDisplayHeadingComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel],
  styles: ["html[_ngcontent-%COMP%] {\n  font-family: arial, helvetica, verdana, sans-serif !important;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: arial, helvetica, verdana, sans-serif !important;\n}\n\n.header[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n}\n\ntd.leftMenu[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  width: 160px;\n  margin: 0px;\n  padding: 0px;\n  vertical-align: top;\n}\n\ntd.mainContent[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding: 0px;\n  margin: 0px;\n}\n\n.footer[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  border: solid #88BCE2;\n  border-width: 1px 1px 1px 0px;\n}\n\n.parent-div[_ngcontent-%COMP%] {\n  \n  display: flex;\n  flex-direction: row;\n  background-color: #fff;\n  width: 100%;\n}\n\n.link-clicker[_ngcontent-%COMP%] {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n.link-clicker[_ngcontent-%COMP%]:hover {\n  color: #a90101;\n  cursor: pointer;\n}\n\n\na[_ngcontent-%COMP%]:link {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n\na[_ngcontent-%COMP%]:visited {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n\na[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #a90101;\n}\n\n\na[_ngcontent-%COMP%]:active {\n  cursor: pointer;\n  text-decoration: underline;\n  color: #333;\n}\n\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.unselectable[_ngcontent-%COMP%] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  user-select: none;\n  text-transform: uppercase;\n}\n\n.hand[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.clicker[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.search-results-table[_ngcontent-%COMP%] {\n  font-size: 12px;\n  width: 100%;\n  border: solid #ccc 1px;\n}\n\n.search-results-tr[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: solid #ccc 1px;\n}\n\n.search-results-th[_ngcontent-%COMP%] {\n  padding: 6px;\n  border: solid #ccc 1px;\n  background-color: #0073b9;\n  color: #fff;\n}\n\n.search-results-td[_ngcontent-%COMP%] {\n  padding: 6px;\n  border-left: solid #ccc 1px;\n  border-right: solid #ccc 1px;\n}\n\n.rowOdd[_ngcontent-%COMP%] {\n  background-color: #efeded;\n}\n\n.search-results--tr-odd[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\nimg[_ngcontent-%COMP%] {\n  border-width: 0px;\n  margin: 0px;\n  padding: 0px;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  padding-left: 160px;\n  text-align: center;\n}\n\n.spacer.center[_ngcontent-%COMP%] {\n  color: #02055a;\n}\n\n.footer[_ngcontent-%COMP%] {\n  padding: 0px 0px 0px 160px;\n  vertical-align: middle !important;\n  text-align: center;\n  background-color: #02055a;\n  border: solid #88BCE2;\n  border-width: 1px 1px 1px 0px;\n  font-size: 12px;\n}\n\n.footer.white[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: 0px;\n  padding: 10px 0px 0px 0px;\n  font-size: 9.5px;\n  color: #333;\n}\n\n.footer.white[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.footer.white[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline !important;\n  color: #333;\n}\n\n.footer.white.release[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  font-weight: normal !important;\n  color: #4A49A8;\n}\n\n.footer.white[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n  padding: 0px 10px 0px 10px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0px;\n  padding: 0px;\n  vertical-align: middle;\n  list-style: none;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  display: inline-block;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item[_ngcontent-%COMP%] {\n  background-color: #02055a;\n  color: #81FFFE;\n  border: solid #88BCE2;\n  border-width: 0px 1px 0px 0px;\n  padding: 4px 15px 4px 15px;\n  margin: 0px;\n  vertical-align: top;\n  text-transform: uppercase;\n  font-weight: bold;\n  outline: 0;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item.left[_ngcontent-%COMP%] {\n  border: solid #88BCE2;\n  border-width: 0px 1px 0px 1px;\n}\n\n.footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.footer-item[_ngcontent-%COMP%]   .nav-link.nav-menu-top-item[_ngcontent-%COMP%]:hover {\n  background-color: #81FFFE;\n  color: #02055a;\n  margin: 0px;\n  vertical-align: top;\n}\n\n.rowOdd[_ngcontent-%COMP%] {\n  background-color: #efeded;\n}\n\ntable.dataTable[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1px solid #ccc;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  font-weight: bold;\n  padding: 3px 3px 3px 5px;\n  border: 1px solid #ccc;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-letter {\n  text-transform: uppercase;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n  width: 250px;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%] {\n  width: 110px !important;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0px 4px 0px 0px;\n}\n\ndiv.scroll-table-container[_ngcontent-%COMP%] {\n  overflow: scroll;\n  max-width: 1200px;\n  max-height: 800px;\n}\n\n.actions[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0px 4px 0px 0px;\n}\n\n.myFilters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.outer-input-frame[_ngcontent-%COMP%] {\n  border: solid #d4d4d4 2px;\n}\n\n.mainSection[_ngcontent-%COMP%] {\n  margin: 10px 0px 5px 7px;\n  padding: 0px;\n  font-size: 12px;\n  min-width: 1150px !important;\n}\n\n.mainBorder[_ngcontent-%COMP%] {\n  padding: 15px 15px 15px 15px;\n  border: 1px solid #ccc;\n  margin: 0px 0px 0px 2px;\n  width: 100%;\n}\n\n.mainBorder.loading[_ngcontent-%COMP%] {\n  background-color: #005d7e !important;\n  color: #fff;\n  padding: 15px !important;\n  margin-bottom: 15px;\n}\n\n.dataMain[_ngcontent-%COMP%] {\n  margin: 5px;\n  width: 90%;\n}\n\n.dataMain[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  width: 200px;\n  padding: 10px;\n  font-weight: bold;\n  vertical-align: top;\n}\n\n.dataMain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  vertical-align: top;\n}\n\n.dataMain[_ngcontent-%COMP%]   td.buttons[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.links-panel[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.links-panel.card.ml-1.mt-2[_ngcontent-%COMP%] {\n  margin-left: 0px !important;\n}\n\n.create-search-button-group[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.create-delete-button-group[_ngcontent-%COMP%] {\n  float: left;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-right: 5px !important;\n}\n\n.searchForm[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.searchForm[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding: 5px 10px 5px 0px;\n}\n\n.searchForm[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  vertical-align: top;\n  padding-right: 20px;\n  width: 150px;\n}\n\n.searchForm[_ngcontent-%COMP%]   select.multiple[_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.searchForm[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n\n.searchForm[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\n.submit[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.submit[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  margin: 10px;\n  text-align: right;\n}\n\n.buttons[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #4A49A8;\n  text-align: center;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: red;\n  margin: 5px;\n  font-size: 14px !important;\n}\n\n.mainSection[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #00f !important;\n  text-decoration: underline !important;\n}\n\n.mainSection[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-bottom: 13px !important;\n  font-size: 12px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .blueHeader[_ngcontent-%COMP%] {\n  padding: 10px;\n  background-color: #0073b9;\n  color: #fff;\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: #005518;\n  color: #fff;\n  padding: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   .editButton[_ngcontent-%COMP%] {\n  padding-top: 5px;\n  text-align: right;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain.files[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   td.label[_ngcontent-%COMP%] {\n  font-weight: bold;\n  width: 200px;\n  vertical-align: top;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  text-align: left;\n  width: 150px;\n  vertical-align: top;\n  padding-right: 20px;\n}\n\n.mainSection[_ngcontent-%COMP%]   table.dataMain[_ngcontent-%COMP%]   .properties.files[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  width: 100%;\n  margin-bottom: 5px;\n}\n\n.experimentConfigurations[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  width: 300px;\n}\n\nul[_ngcontent-%COMP%] {\n  padding-left: 13px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.dataAndConditions[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.properties[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n  width: 200px;\n}\n\n.properties[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%] {\n  min-width: 650px;\n}\n\n.files[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  border: 1px solid #ccc;\n}\n\n.files[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #0073b9;\n  color: #fff;\n  padding: 5px;\n  vertical-align: top;\n  border: 1px solid #ccc;\n}\n\nlabel.right[_ngcontent-%COMP%] {\n  padding-left: 5px;\n}\n\ntable.dataTable[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%] {\n  width: 210px !important;\n  max-width: 210px !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2FuYW5vbGFiLWNsaWVudC9jYW5hbm9sYWItY2xpZW50LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9jYW5hbm9sYWItY2xpZW50L21haW4tZGlzcGxheS9teS1mYXZvcml0ZXMvbXktZmF2b3JpdGVzLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9jYW5hbm9sYWItY2xpZW50L21haW4tZGlzcGxheS9tYWluLWRpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJBO0VBQ0ksNkRBRm9CO0FDZHhCOztBRG1CQTtFQUNJLDZEQU5vQjtBQ1Z4Qjs7QURrQkE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtBQ2ZEOztBRG9CQTtFQUVJLHlCQTdCcUI7RUE4QnJCLFlBM0JZO0VBNEJmLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNsQkQ7O0FEcUJBO0VBRUksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ25CSjs7QURzQkE7RUFFSSx5QkE3Q3FCO0VBOENyQixxQkFBQTtFQUNBLDZCQUFBO0FDcEJKOztBRHVCQTtFQUNJLGtFQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDcEJKOztBRHdCQTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUNyQko7QUR1Qkk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ3JCUjs7QUR5QkEsbUJBQUE7QUFDQTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUN0Qko7O0FEeUJBLGlCQUFBO0FBQ0E7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FDdEJKOztBRHlCQSxvQkFBQTtBQUNBO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQ3RCSjs7QUR5QkEsa0JBQUE7QUFDQTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUN0Qko7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QTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FENFJKOztBQ3pSQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FENFJKOztBQ3pSQTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtBRDRSSjs7QUMxUkM7RUFDRSxrQkFBQTtBRDZSSDs7QUN6UkE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FENFJKOztBQ3pSQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FENFJKOztBQ3hSQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUQyUko7O0FDeFJBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUQyUko7O0FDdlJBO0VBQ0ksZ0JBQUE7QUQwUko7O0FDdlJBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0FEMFJKOztBQ3ZSQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FEMFJKOztBQ3RSQTtFQUNJLGlCQUFBO0FEeVJKOztBQTFnQkE7RUFDQyx1QkFBQTtFQUNHLDJCQUFBO0FBNmdCSiIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4kY2FuYW5vLWdyZWVuOiAjMDA1NTE4O1xuJGNhbmFuby1ibHVlOiAjMDA3M2I5O1xuJGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU6ICMwMjA1NWE7XG4kbWVudUhlYWRpbmdCYWNrZ3JvdW5kQ29sb3I6ICMwMDVkN2U7XG4kbGVmdE1lbnVCb3JkZXJDb2xvcjojODhCQ0UyO1xuJGxlZnRNZW51V2lkdGg6IDE2MHB4O1xuJGxlZnRNZW51TWFyZ2luOiAwcHg7XG4kbmF2QnV0dG9uQ29sb3I6IzgxRkZGRTtcbiRib3JkZXJDb2xvcjogJGxlZnRNZW51Qm9yZGVyQ29sb3I7XG4kbWFpbkZvbnRTaXplOjEycHg7XG4ka2V5d29yZFNlYXJjaEZvbnRTaXplOiAxMnB4O1xuJG9kZFJvd0NvbG9yOiNlZmVkZWQ7XG4kbWFpbkRpc3BsYXlIZWFkaW5nSGVpZ2h0OiAyOHB4O1xuJG1haW5EaXNwbGF5SGVhZGluZ01hcmdpbjogOHB4O1xuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6YXJpYWwsaGVsdmV0aWNhLHZlcmRhbmEsc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuaHRtbCB7XG4gICAgZm9udC1mYW1pbHk6JGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY7XG5cbn1cbmJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiRmb250LWZhbWlseS1zYW5zLXNlcmlmO1xufVxuLmhlYWRlciB7XG5cdG1hcmdpbjowcHg7XG5cdHBhZGRpbmc6MHB4O1xufVxuLmhvbWUge1xufVxuXG50ZC5sZWZ0TWVudSB7XG4gICAgQGV4dGVuZCAuaG9tZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlO1xuICAgIHdpZHRoOiRsZWZ0TWVudVdpZHRoO1xuXHRtYXJnaW46MHB4O1xuXHRwYWRkaW5nOjBweDtcblx0dmVydGljYWwtYWxpZ246dG9wO1xufVxuXG50ZC5tYWluQ29udGVudCB7XG4gICAgQGV4dGVuZCAuaG9tZTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgcGFkZGluZzowcHg7XG4gICAgbWFyZ2luOjBweDtcbn1cblxuLmZvb3RlciB7XG4gICAgQGV4dGVuZCAuaG9tZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlO1xuICAgIGJvcmRlcjpzb2xpZCAkbGVmdE1lbnVCb3JkZXJDb2xvcjtcbiAgICBib3JkZXItd2lkdGg6MXB4IDFweCAxcHggMHB4O1xufVxuXG4ucGFyZW50LWRpdntcbiAgICAvKiBrZWVwIHRoZSBRdWVyeSBzZWN0aW9uIGFuZCB0aGUgRGlzcGxheSBzZWN0aW9uIHNpZGUgYnkgc2lkZS4gICovXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4vLyBARklYTUUgLSBUaGVzZSBjb2xvcnMgbmVlZCB2YXJpYWJsZXNcbi5saW5rLWNsaWNrZXJ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiAjMzMzO1xuXG4gICAgJjpob3ZlcntcbiAgICAgICAgY29sb3I6ICNhOTAxMDE7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbi8qIHVudmlzaXRlZCBsaW5rICovXG5hOmxpbmt7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGNvbG9yOiAjMzMzO1xufVxuXG4vKiB2aXNpdGVkIGxpbmsgKi9cbmE6dmlzaXRlZHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICMzMzM7XG59XG5cbi8qIG1vdXNlIG92ZXIgbGluayAqL1xuYTpob3ZlcntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICNhOTAxMDE7XG59XG5cbi8qIHNlbGVjdGVkIGxpbmsgKi9cbmE6YWN0aXZle1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICBjb2xvcjogIzMzMztcbn1cblxuLmhpZGV7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnVuc2VsZWN0YWJsZXtcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmhhbmQge1xuICAgIGN1cnNvcjpwb2ludGVyICFpbXBvcnRhbnQ7XG59XG5cbi5jbGlja2Vye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4uc2VhcmNoLXJlc3VsdHMtdGFibGV7XG4gICAgZm9udC1zaXplOiAkbWFpbkZvbnRTaXplO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogc29saWQgI2NjYyAxcHg7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy10cntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogc29saWQgI2NjYyAxcHg7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy10aHtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgLy8gIGJvcmRlcjogc29saWQgI2RmZGZkZiAycHg7XG4gICAgYm9yZGVyOiBzb2xpZCAjY2NjIDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FuYW5vLWJsdWU7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy10ZHtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgLy8gYm9yZGVyOiBzb2xpZCAjZGZkZmRmIDJweDtcbiAgICBib3JkZXItbGVmdDogc29saWQgI2NjYyAxcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAjY2NjIDFweDtcbn1cblxuLnJvd09kZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb2RkUm93Q29sb3I7XG59XG5cbi5zZWFyY2gtcmVzdWx0cy0tdHItb2Rke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbmltZyB7XG5cdGJvcmRlci13aWR0aDowcHg7XG5cdG1hcmdpbjowcHg7XG5cdHBhZGRpbmc6MHB4O1xuXG59XG5cbi5zcGFjZXIge1xuICAgIHBhZGRpbmctbGVmdDokbGVmdE1lbnVXaWR0aDtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuLnNwYWNlci5jZW50ZXIge1xuICAgIGNvbG9yOiRjYW5hbm8tYmFja2dyb3VuZC1ibHVlO1xufVxuXG5cbi5mb290ZXIge1xuXHRwYWRkaW5nOjBweCAwcHggMHB4IDE2MHB4O1xuXHR2ZXJ0aWNhbC1hbGlnbjptaWRkbGUgIWltcG9ydGFudDtcblx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6JGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU7XG4gICAgYm9yZGVyOnNvbGlkICRsZWZ0TWVudUJvcmRlckNvbG9yO1xuICAgIGJvcmRlci13aWR0aDoxcHggMXB4IDFweCAwcHg7XG4gICAgZm9udC1zaXplOiRtYWluRm9udFNpemU7XG59O1xuXG5cbi5mb290ZXIud2hpdGV7XG5cdGJhY2tncm91bmQtY29sb3I6I2ZmZjtcblx0Ym9yZGVyOjBweDtcblx0cGFkZGluZzoxMHB4IDBweCAwcHggMHB4O1xuXHRmb250LXNpemU6OS41cHg7XG4gICAgY29sb3I6IzMzMztcbn07XG5cbi5mb290ZXIud2hpdGUgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDtcbn07XG5cbi5mb290ZXIud2hpdGUgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiMzMzM7XG59XG5cbi5mb290ZXIud2hpdGUucmVsZWFzZSB7XG4gICAgZm9udC1zaXplOjEycHggIWltcG9ydGFudDtcblx0Zm9udC13ZWlnaHQ6bm9ybWFsICFpbXBvcnRhbnQ7XG5cdGNvbG9yOiM0QTQ5QTg7XG59XG5cbi5mb290ZXIud2hpdGUgLmRpdmlkZXIge1xuXHRwYWRkaW5nOjBweCAxMHB4IDBweCAxMHB4O1xufTtcblxuLmZvb3RlciB1bCB7XG4gICAgbWFyZ2luOjBweDtcbiAgICBwYWRkaW5nOjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG4gICAgbGlzdC1zdHlsZTpub25lO1xufTtcblxuLmZvb3RlciB1bCBsaS5mb290ZXItaXRlbSB7XG4gICAgcGFkZGluZzowcHg7XG4gICAgbWFyZ2luOjBweDtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbn1cblxuXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIC5uYXYtbGluay5uYXYtbWVudS10b3AtaXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjokY2FuYW5vLWJhY2tncm91bmQtYmx1ZTtcbiAgICBjb2xvcjokbmF2QnV0dG9uQ29sb3I7XG4gICAgYm9yZGVyOiBzb2xpZCAkbGVmdE1lbnVCb3JkZXJDb2xvcjtcbiAgICBib3JkZXItd2lkdGg6MHB4IDFweCAwcHggMHB4O1xuICAgIHBhZGRpbmc6NHB4IDE1cHggNHB4IDE1cHg7XG4gICAgbWFyZ2luOjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG5cdHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcblx0Zm9udC13ZWlnaHQ6Ym9sZDtcblx0b3V0bGluZTowO1xufVxuXG4uZm9vdGVyIHVsIGxpLmZvb3Rlci1pdGVtIC5uYXYtbGluay5uYXYtbWVudS10b3AtaXRlbS5sZWZ0e1xuICAgIGJvcmRlcjogc29saWQgJGxlZnRNZW51Qm9yZGVyQ29sb3I7XG4gICAgYm9yZGVyLXdpZHRoOjBweCAxcHggMHB4IDFweDtcbn1cblxuLmZvb3RlciB1bCBsaS5mb290ZXItaXRlbSAubmF2LWxpbmsubmF2LW1lbnUtdG9wLWl0ZW06aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjokbmF2QnV0dG9uQ29sb3I7XG4gICAgY29sb3I6JGNhbmFuby1iYWNrZ3JvdW5kLWJsdWU7XG4gICAgbWFyZ2luOjBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG59XG5cbi5yb3dPZGQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiRvZGRSb3dDb2xvcjtcbn1cblxudGFibGUuZGF0YVRhYmxle1xuICAgIHdpZHRoOjEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcblxufVxuXG50YWJsZS5kYXRhVGFibGUgdGh7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzNiOTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOjNweCAzcHggM3B4IDVweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRoOmZpcnN0LWxldHRlciB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRke1xuXHRwYWRkaW5nOjVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuXHR3aWR0aDoyNTBweDtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRkLmFjdGlvbnMgIHtcblx0d2lkdGg6MTEwcHggIWltcG9ydGFudDtcbn1cblxudGFibGUuZGF0YVRhYmxlIHRkLmFjdGlvbnMgZGl2IHtcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XG5cdG1hcmdpbjowcHggNHB4IDBweCAwcHg7XG59XG5cbmRpdi5zY3JvbGwtdGFibGUtY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDgwMHB4O1xufVxuXG4uYWN0aW9ucyBkaXYge1xuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcblx0bWFyZ2luOjBweCA0cHggMHB4IDBweDtcbn1cblxuLm15RmlsdGVycyBsYWJlbCB7XG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xufVxuIiwiQGltcG9ydCAnLi4vbWFpbi1kaXNwbGF5LmNvbXBvbmVudC5zY3NzJztcblxudGFibGUuZGF0YVRhYmxlIHRkLmFjdGlvbnMge1xuXHR3aWR0aDoyMTBweCAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDoyMTBweCAhaW1wb3J0YW50O1xufVxuIiwiQGltcG9ydCAnLi4vY2FuYW5vbGFiLWNsaWVudC5jb21wb25lbnQuc2Nzcyc7XG5cbi5vdXRlci1pbnB1dC1mcmFtZXtcbiAgICBib3JkZXI6IHNvbGlkICNkNGQ0ZDQgMnB4O1xufVxuLm1haW5TZWN0aW9uIHtcbiAgICBtYXJnaW46MTBweCAwcHggNXB4IDdweDtcbiAgICBwYWRkaW5nOjBweDtcbiAgICBmb250LXNpemU6JG1haW5Gb250U2l6ZTtcbiAgICBtaW4td2lkdGg6MTE1MHB4ICFpbXBvcnRhbnQ7XG5cbn1cbi5tYWluQm9yZGVyIHtcbiAgICBwYWRkaW5nOjE1cHggMTVweCAxNXB4IDE1cHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjY2NjO1xuICAgIG1hcmdpbjowcHggMHB4IDBweCAycHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbn1cblxuLm1haW5Cb3JkZXIubG9hZGluZyB7XG5cdGJhY2tncm91bmQtY29sb3I6JG1lbnVIZWFkaW5nQmFja2dyb3VuZENvbG9yICFpbXBvcnRhbnQ7XG5cdGNvbG9yOiNmZmY7XG5cdHBhZGRpbmc6MTVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206MTVweDtcbn1cblxuLmRhdGFNYWluICB7XG4gICAgbWFyZ2luOjVweDtcbiAgICB3aWR0aDo5MCU7XG59XG5cbi5kYXRhTWFpbiB0ZC5sYWJlbCB7XG4gICAgd2lkdGg6MjAwcHg7XG4gICAgcGFkZGluZzoxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xufVxuLmRhdGFNYWluIHRkIHtcbiAgICBwYWRkaW5nOjEwcHg7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xufVxuXG4uZGF0YU1haW4gdGQuYnV0dG9ucyB7XG4gICAgdGV4dC1hbGlnbjpyaWdodDtcbn1cblxuXG4ubGlua3MtcGFuZWx7XG4gICAgd2lkdGg6IDUwMHB4OyAgLy8gQEZJWE1FIC0gbWFrZSBhIGNvbnN0XG59XG5cbi5saW5rcy1wYW5lbC5jYXJkLm1sLTEubXQtMiB7XG5cdG1hcmdpbi1sZWZ0OjBweCAhaW1wb3J0YW50XG59XG5cbi5jcmVhdGUtc2VhcmNoLWJ1dHRvbi1ncm91cHtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4uY3JlYXRlLWRlbGV0ZS1idXR0b24tZ3JvdXB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbmxhYmVsIHtcbiAgICBmb250LXdlaWdodDpib2xkO1xuICAgIG1hcmdpbi1yaWdodDo1cHggIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaEZvcm0ge1xuICAgIG1hcmdpbjo1cHg7XG59XG5cbi5zZWFyY2hGb3JtIHRke1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbiAgICBwYWRkaW5nOjVweCAxMHB4IDVweCAwcHg7XG59XG5cbi5zZWFyY2hGb3JtIHRkLmxhYmVse1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XG4gICAgd2lkdGg6MTUwcHg7XG59XG5cbi5zZWFyY2hGb3JtIHNlbGVjdC5tdWx0aXBsZSB7XG4gICAgd2lkdGg6MTUwcHg7XG59XG5cbi5zZWFyY2hGb3JtIHNlbGVjdCB7XG4gICAgbWFyZ2luLXJpZ2h0OjRweDtcbn1cblxuLnNlYXJjaEZvcm0gc3Bhbi5sYWJlbCB7XG4gICAgcGFkZGluZy1yaWdodDoxMHB4O1xufVxuXG4uc3VibWl0IHtcbiAgICB3aWR0aDoxMDAlO1xufVxuXG4uc3VibWl0IHRkOmxhc3QtY2hpbGQge1xuICAgIHRleHQtYWxpZ246cmlnaHQ7XG59XG5cbi5idXR0b25zIHtcbiAgICBtYXJnaW46MTBweDtcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xufVxuXG4uYnV0dG9ucyBkaXYge1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBjb2xvcjojNEE0OUE4O1xuICAgIHRleHQtYWxpZ246Y2VudGVyO1xufVxuXG4uZXJyb3Ige1xuICAgIGNvbG9yOnJlZDtcbiAgICBtYXJnaW46NXB4O1xuICAgIGZvbnQtc2l6ZToxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluU2VjdGlvbiBhIHtcbiAgICBjb2xvcjojMDBmICFpbXBvcnRhbnQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgIWltcG9ydGFudDtcbn1cblxuLm1haW5TZWN0aW9uIHRkIHtcbiAgICBwYWRkaW5nLWJvdHRvbToxM3B4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiRtYWluRm9udFNpemU7XG5cbn1cbi5tYWluU2VjdGlvbiAuYmx1ZUhlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6MTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMDA3M2I5O1xuICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLm1haW5TZWN0aW9uIC5oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IzAwNTUxODtcbiAgICBjb2xvcjojZmZmO1xuICAgIHBhZGRpbmc6MTBweDtcbn1cblxuICAgIC5tYWluU2VjdGlvbiAuaGVhZGVyIC5idG4ge1xuICAgICAgICBtYXJnaW4tbGVmdDoxMHB4O1xuICAgIH1cblxuLm1haW5TZWN0aW9uIC5lZGl0QnV0dG9ue1xuICAgIHBhZGRpbmctdG9wOjVweDtcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xufVxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluLmZpbGVze1xuICAgIG1hcmdpbi1ib3R0b206MTBweDtcbn1cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiB0ZHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG59XG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXN7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gLnByb3BlcnRpZXMgdGh7XG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgIHdpZHRoOjE1MHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbiAgICBwYWRkaW5nLXJpZ2h0OjIwcHg7XG59XG4ubWFpblNlY3Rpb24gdGFibGUuZGF0YU1haW4gdGQubGFiZWx7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbiAgICB3aWR0aDoyMDBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG59XG5cbi5tYWluU2VjdGlvbiB0YWJsZS5kYXRhTWFpbiAucHJvcGVydGllcyB0ZHtcbiAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgd2lkdGg6MTUwcHg7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIHBhZGRpbmctcmlnaHQ6MjBweDtcbn1cblxuLm1haW5TZWN0aW9uIHRhYmxlLmRhdGFNYWluIC5wcm9wZXJ0aWVzLmZpbGVze1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206NXB4O1xufVxuXG4uZXhwZXJpbWVudENvbmZpZ3VyYXRpb25zIHRkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OjEwcHg7XG4gICAgd2lkdGg6MzAwcHg7XG59XG4gdWwge1xuICAgcGFkZGluZy1sZWZ0OjEzcHg7XG59XG5cblxuLmRhdGFBbmRDb25kaXRpb25zIHRke1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICB3aWR0aDoyMDBweDtcbn1cblxuLmRhdGFBbmRDb25kaXRpb25zIHRoe1xuICAgIGJhY2tncm91bmQtY29sb3I6IzAwNzNiOTtcbiAgICBjb2xvcjojZmZmO1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIHZlcnRpY2FsLWFsaWduOnRvcDtcbiAgICBib3JkZXI6MXB4ICBzb2xpZCAjY2NjO1xuXG59XG5cbi5wcm9wZXJ0aWVzIHRke1xuICAgIHBhZGRpbmc6NXB4O1xuICAgIGJvcmRlcjoxcHggc29saWQgI2NjYztcbiAgICB3aWR0aDoyMDBweDtcbn1cblxuLnByb3BlcnRpZXMgdGh7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMDA3M2I5O1xuICAgIGNvbG9yOiNmZmY7XG4gICAgcGFkZGluZzo1cHg7XG4gICAgdmVydGljYWwtYWxpZ246dG9wO1xuICAgIGJvcmRlcjoxcHggIHNvbGlkICNjY2M7XG5cbn1cblxuLmZpbGVzIHtcbiAgICBtaW4td2lkdGg6NjUwcHg7XG59XG5cbi5maWxlcyB0ZHtcbiAgICBwYWRkaW5nOjVweDtcbiAgICBib3JkZXI6MXB4IHNvbGlkICNjY2M7XG59XG5cbi5maWxlcyB0aHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDczYjk7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBwYWRkaW5nOjVweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgYm9yZGVyOjFweCAgc29saWQgI2NjYztcblxufVxuXG5sYWJlbC5yaWdodCB7XG4gICAgcGFkZGluZy1sZWZ0OjVweDtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8547:
/*!***********************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/my-favorites/my-favorites.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyFavoritesModule": () => (/* binding */ MyFavoritesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _my_favorites_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-favorites.component */ 918);
/* harmony import */ var _my_favorites_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-favorites-routing.module */ 999);
/* harmony import */ var _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/modules/set-object-value/shared.module */ 5413);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






class MyFavoritesModule {}
MyFavoritesModule.ɵfac = function MyFavoritesModule_Factory(t) {
  return new (t || MyFavoritesModule)();
};
MyFavoritesModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: MyFavoritesModule
});
MyFavoritesModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _my_favorites_routing_module__WEBPACK_IMPORTED_MODULE_1__.MyFavoritesRoutingModule, _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MyFavoritesModule, {
    declarations: [_my_favorites_component__WEBPACK_IMPORTED_MODULE_0__.MyFavoritesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _my_favorites_routing_module__WEBPACK_IMPORTED_MODULE_1__.MyFavoritesRoutingModule, _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_cananolab-client_main-display_my-favorites_my-favorites_module_ts.js.map