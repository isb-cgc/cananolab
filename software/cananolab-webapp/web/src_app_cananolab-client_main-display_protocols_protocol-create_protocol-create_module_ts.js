"use strict";
(self["webpackChunkcananolab_client_new"] = self["webpackChunkcananolab_client_new"] || []).push([["src_app_cananolab-client_main-display_protocols_protocol-create_protocol-create_module_ts"],{

/***/ 5506:
/*!***********************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/protocols/protocol-create/protocol-create-routing.module.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProtocolCreateRoutingModule": () => (/* binding */ ProtocolCreateRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _protocol_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./protocol-create.component */ 9163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _protocol_create_component__WEBPACK_IMPORTED_MODULE_0__.ProtocolCreateComponent
}];
class ProtocolCreateRoutingModule {}
ProtocolCreateRoutingModule.ɵfac = function ProtocolCreateRoutingModule_Factory(t) {
  return new (t || ProtocolCreateRoutingModule)();
};
ProtocolCreateRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ProtocolCreateRoutingModule
});
ProtocolCreateRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProtocolCreateRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9163:
/*!******************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/protocols/protocol-create/protocol-create.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProtocolCreateComponent": () => (/* binding */ ProtocolCreateComponent)
/* harmony export */ });
/* harmony import */ var _Users_mi_software_cananolab_software_cananolab_client_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../constants */ 4854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _common_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/services/api.service */ 6342);
/* harmony import */ var _common_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/services/util.service */ 7117);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/cananolab-client/main-display/main-display-heading/main-display-heading.component */ 4567);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _common_components_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/components/disclaimer/disclaimer.component */ 4923);











function ProtocolCreateComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.errors["error"], " ");
  }
}
function ProtocolCreateComponent_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.message, " ");
  }
}
function ProtocolCreateComponent_div_1_option_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const type_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", type_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](type_r10);
  }
}
function ProtocolCreateComponent_div_1_div_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("href", ctx_r4.downloadUrl + "?protocolId=" + ctx_r4.protocolId + "&fileId=" + ctx_r4.data.fileId, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r4.data.uri, " ");
  }
}
function ProtocolCreateComponent_div_1_span_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " [");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "canano-disclaimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "]");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProtocolCreateComponent_div_1_ng_container_75_tr_1_tr_10_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProtocolCreateComponent_div_1_ng_container_75_tr_1_tr_10_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      const groupIndex_r15 = ctx_r19.index;
      const group_r14 = ctx_r19.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r18.editAccess(groupIndex_r15, group_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "rowOdd": a0
  };
};
function ProtocolCreateComponent_div_1_ng_container_75_tr_1_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 43)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ProtocolCreateComponent_div_1_ng_container_75_tr_1_tr_10_button_6_Template, 2, 0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const group_r14 = ctx.$implicit;
    const odd_r16 = ctx.odd;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](4, _c0, odd_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](group_r14.recipientDisplayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](group_r14.roleDisplayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.shouldShowAccessEditButton(group_r14));
  }
}
function ProtocolCreateComponent_div_1_ng_container_75_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "td")(3, "table", 41)(4, "tr")(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Group Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Access");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ProtocolCreateComponent_div_1_ng_container_75_tr_1_tr_10_Template, 7, 6, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r11.data.groupAccesses);
  }
}
function ProtocolCreateComponent_div_1_ng_container_75_tr_2_tr_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 43)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td")(6, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProtocolCreateComponent_div_1_ng_container_75_tr_2_tr_10_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const userIndex_r23 = restoredCtx.index;
      const user_r22 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r25.editAccess(userIndex_r23, user_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const user_r22 = ctx.$implicit;
    const odd_r24 = ctx.odd;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c0, odd_r24));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r22.recipientDisplayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](user_r22.roleDisplayName);
  }
}
function ProtocolCreateComponent_div_1_ng_container_75_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "td")(3, "table", 41)(4, "tr")(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "User Login Name\t");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Access");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ProtocolCreateComponent_div_1_ng_container_75_tr_2_tr_10_Template, 8, 5, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r12.data.userAccesses);
  }
}
function ProtocolCreateComponent_div_1_ng_container_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProtocolCreateComponent_div_1_ng_container_75_tr_1_Template, 11, 1, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ProtocolCreateComponent_div_1_ng_container_75_tr_2_Template, 11, 1, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.data.groupAccesses.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.data.userAccesses.length);
  }
}
function ProtocolCreateComponent_div_1_tr_76_tr_5_input_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProtocolCreateComponent_div_1_tr_76_tr_5_input_13_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r33.changeAccessType($event));
    })("ngModelChange", function ProtocolCreateComponent_div_1_tr_76_tr_5_input_13_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r35.theAccess["accessType"] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", "role")("ngModel", ctx_r31.theAccess["accessType"]);
  }
}
function ProtocolCreateComponent_div_1_tr_76_tr_5_label_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Public ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProtocolCreateComponent_div_1_tr_76_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 7)(2, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Access By* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td", 55)(5, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProtocolCreateComponent_div_1_tr_76_tr_5_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r36.changeAccessType($event));
    })("ngModelChange", function ProtocolCreateComponent_div_1_tr_76_tr_5_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r38.theAccess["accessType"] = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "label", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " Collaboration Group ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProtocolCreateComponent_div_1_tr_76_tr_5_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r39.changeAccessType($event));
    })("ngModelChange", function ProtocolCreateComponent_div_1_tr_76_tr_5_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r40.theAccess.accessType = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "label", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " User ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ProtocolCreateComponent_div_1_tr_76_tr_5_input_13_Template, 1, 2, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ProtocolCreateComponent_div_1_tr_76_tr_5_label_14_Template, 2, 0, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", "group")("ngModel", ctx_r27.theAccess["accessType"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", "user")("ngModel", ctx_r27.theAccess.accessType);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r27.data.isCuratorEditing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r27.data.isCuratorEditing);
  }
}
function ProtocolCreateComponent_div_1_tr_76_tr_6_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Collaboration Group* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProtocolCreateComponent_div_1_tr_76_tr_6_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " User* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProtocolCreateComponent_div_1_tr_76_tr_6_ng_container_8_ng_container_5_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const group_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", group_r47, " ");
  }
}
function ProtocolCreateComponent_div_1_tr_76_tr_6_ng_container_8_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProtocolCreateComponent_div_1_tr_76_tr_6_ng_container_8_ng_container_5_option_1_Template, 2, 1, "option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r44.recipientList);
  }
}
function ProtocolCreateComponent_div_1_tr_76_tr_6_ng_container_8_ng_container_6_option_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", user_r49.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", user_r49.value, " ");
  }
}
function ProtocolCreateComponent_div_1_tr_76_tr_6_ng_container_8_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProtocolCreateComponent_div_1_tr_76_tr_6_ng_container_8_ng_container_6_option_1_Template, 2, 2, "option", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r45.recipientList));
  }
}
function ProtocolCreateComponent_div_1_tr_76_tr_6_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "select", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProtocolCreateComponent_div_1_tr_76_tr_6_ng_container_8_Template_select_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r50.theAccess.recipient = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "--select");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ProtocolCreateComponent_div_1_tr_76_tr_6_ng_container_8_ng_container_5_Template, 2, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ProtocolCreateComponent_div_1_tr_76_tr_6_ng_container_8_ng_container_6_Template, 3, 3, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r43.theAccess.recipient);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selected", ctx_r43.theAccess.recipient === "")("ngValue", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r43.theAccess.accessType == "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r43.theAccess.accessType == "user");
  }
}
function ProtocolCreateComponent_div_1_tr_76_tr_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 7)(2, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ProtocolCreateComponent_div_1_tr_76_tr_6_span_3_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ProtocolCreateComponent_div_1_tr_76_tr_6_span_4_Template, 2, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td", 48)(6, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProtocolCreateComponent_div_1_tr_76_tr_6_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r52.getRecipientList());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ProtocolCreateComponent_div_1_tr_76_tr_6_ng_container_8_Template, 7, 5, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r28.theAccess.accessType == "group");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r28.theAccess.accessType == "user");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r28.recipientList);
  }
}
function ProtocolCreateComponent_div_1_tr_76_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const role_r54 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", role_r54.key)("selected", role_r54.key == ctx_r29.theAccess.roleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", role_r54.value, " ");
  }
}
function ProtocolCreateComponent_div_1_tr_76_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProtocolCreateComponent_div_1_tr_76_button_19_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r55.deleteAccess());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProtocolCreateComponent_div_1_tr_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "td")(3, "div", 4)(4, "table", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ProtocolCreateComponent_div_1_tr_76_tr_5_Template, 15, 6, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ProtocolCreateComponent_div_1_tr_76_tr_6_Template, 9, 3, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "tr")(8, "td", 7)(9, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, " Access to the Protocol* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td", 48)(12, "select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProtocolCreateComponent_div_1_tr_76_Template_select_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r58);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r57.theAccess.roleName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "--Select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ProtocolCreateComponent_div_1_tr_76_option_15_Template, 2, 3, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "tr")(18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ProtocolCreateComponent_div_1_tr_76_button_19_Template, 2, 0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "td")(21, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProtocolCreateComponent_div_1_tr_76_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r58);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r59.saveAccess());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProtocolCreateComponent_div_1_tr_76_Template_button_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r58);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r60.cancelAccess());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r7.editingAccessRow);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.theAccess.accessType && ctx_r7.theAccess.accessType != "role" && !ctx_r7.editingAccessRow);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r7.theAccess.accessType == "role")("ngModel", ctx_r7.theAccess.roleName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selected", ctx_r7.theAccess.roleName === "")("ngValue", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 9, ctx_r7.setupData.csmRoleNames));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.accessIndex != -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r7.theAccess.accessType == "" || ctx_r7.theAccess.roleName == "" || ctx_r7.theAccess.recipient == "");
  }
}
function ProtocolCreateComponent_div_1_button_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProtocolCreateComponent_div_1_button_81_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r62);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r61.delete());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProtocolCreateComponent_div_1_button_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProtocolCreateComponent_div_1_button_87_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r64);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r63.submitForReview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Submit For Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r9.data.type == "" || ctx_r9.data.name == "");
  }
}
const _c1 = function (a0) {
  return {
    "hide": a0
  };
};
function ProtocolCreateComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProtocolCreateComponent_div_1_div_1_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ProtocolCreateComponent_div_1_div_2_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 4)(4, "form", 5)(5, "table", 6)(6, "tr")(7, "td", 7)(8, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " Protocol Type* ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td")(11, "select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProtocolCreateComponent_div_1_Template_select_ngModelChange_11_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r65.data.type = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "--Select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ProtocolCreateComponent_div_1_option_14_Template, 2, 2, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "tr")(16, "td", 7)(17, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, " Protocol Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "sup")(20, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "td")(23, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("focusout", function ProtocolCreateComponent_div_1_Template_input_focusout_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r67.getProtocol($event));
    })("ngModelChange", function ProtocolCreateComponent_div_1_Template_input_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r68.data.name = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "tr")(25, "td", 7)(26, "label", 14)(27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Protocol");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Abbreviation");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "td")(32, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProtocolCreateComponent_div_1_Template_input_ngModelChange_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r69.data.abbreviation = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "tr")(34, "td", 7)(35, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, " Protocol Version ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "td")(38, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProtocolCreateComponent_div_1_Template_input_ngModelChange_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r70.data.version = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "tr")(40, "td", 7)(41, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, " Protocol File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "td")(44, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProtocolCreateComponent_div_1_Template_input_click_44_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r71.onUpload());
    })("ngModelChange", function ProtocolCreateComponent_div_1_Template_input_ngModelChange_44_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r72.data.uriExternal = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, " Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProtocolCreateComponent_div_1_Template_input_click_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r73.onEnterFileUrl());
    })("ngModelChange", function ProtocolCreateComponent_div_1_Template_input_ngModelChange_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r74.data.uriExternal = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, " Enter File URL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ProtocolCreateComponent_div_1_Template_input_change_51_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r75.uploadFile($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](52, ProtocolCreateComponent_div_1_div_52_Template, 3, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProtocolCreateComponent_div_1_Template_input_ngModelChange_53_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r76.data.externalUrl = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, ProtocolCreateComponent_div_1_span_54_Template, 4, 0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "tr")(56, "td", 7)(57, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, " File Title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "td")(60, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProtocolCreateComponent_div_1_Template_input_ngModelChange_60_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r77.data.fileTitle = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "tr")(62, "td", 7)(63, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "td")(66, "textarea", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProtocolCreateComponent_div_1_Template_textarea_ngModelChange_66_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r78.data.fileDescription = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](67, "                    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "tr")(69, "td", 7)(70, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](71, " Access to the Protocol ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "td")(73, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProtocolCreateComponent_div_1_Template_button_click_73_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r79.addAccess());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](75, ProtocolCreateComponent_div_1_ng_container_75_Template, 3, 2, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](76, ProtocolCreateComponent_div_1_tr_76_Template, 25, 11, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 32)(78, "table", 33)(79, "tr")(80, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](81, ProtocolCreateComponent_div_1_button_81_Template, 2, 0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "td")(83, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProtocolCreateComponent_div_1_Template_button_click_83_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r80.onReset());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProtocolCreateComponent_div_1_Template_button_click_85_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r66);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r81.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](87, ProtocolCreateComponent_div_1_button_87_Template, 2, 1, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.errors["error"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.data.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", "")("selected", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.setupData.protocolTypes);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.data.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.data.abbreviation);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.data.version);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", false)("checked", !ctx_r0.data.uriExternal)("ngModel", ctx_r0.data.uriExternal);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", true)("checked", ctx_r0.data.uriExternal)("ngModel", ctx_r0.data.uriExternal);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](28, _c1, ctx_r0.data.uriExternal));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.data.uri);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](30, _c1, !ctx_r0.data.uriExternal))("ngModel", ctx_r0.data.externalUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.data.uriExternal);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.data.fileTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.data.fileDescription);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.data.type == "" || ctx_r0.data.name == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.data["groupAccesses"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.accessIndex != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.showDeleteButton());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r0.data.type == "" || ctx_r0.data.name == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.data.review && ctx_r0.submitReviewButton);
  }
}
class ProtocolCreateComponent {
  constructor(httpClient, route, router, apiService, utilService) {
    this.httpClient = httpClient;
    this.route = route;
    this.router = router;
    this.apiService = apiService;
    this.utilService = utilService;
    this.currentRoute = 'protocol-create';
    this.defaultProtocolType = 'radio labeling'; // Find a way to set this in time to protocolTypes[0]
    this.downloadUrl = _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.QUERY_DOWNLOAD_FILE;
    this.haveDupStatus = false;
    this.toolHeadingName = 'Create Protocol';
    this.isDup = false;
    this.setupData = {};
    this.theAccess = {};
    this.helpUrl = _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.HELP_URL_PROTOCOL_CREATE;
    this.submitReviewButton = true;
    this.editingAccessRow = false;
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.protocolId = params['protocolId'];
      if (params['message']) {
        if (params['message'] == 'deleted') {
          this.message = 'Protocol Deleted Successfully';
        } else {
          this.message = 'Protocol Created Successfully';
        }
      }
      this.init();
    });
    this.errors = {};
  }
  addAccess() {
    this.accessIndex = -1;
    this.recipientList = null;
    this.theAccess = {
      "accessType": "",
      "recipient": "",
      "roleName": "",
      "recipientDisplayName": ""
    };
    this.editingAccessRow = false;
  }
  shouldShowAccessEditButton(group) {
    if (group.recipient == 'ROLE_CURATOR') {
      return false;
    } else if (group.recipient == 'ROLE_ANONYMOUS') {
      return this.data != null && this.data['isCuratorEditing'];
    }
    return true;
  }
  buildExternalUriForm() {
    let formData = new FormData();
    formData.append('uriExternal', 'true');
    formData.append('review', 'false');
    formData.append('isPublic', 'false');
    formData.append('type', this.data.type);
    return formData;
  }
  cancelAccess() {
    this.accessIndex = null;
  }
  uploadFile(event) {
    this.fileToUpload = new FormData();
    const tFile = event.target.files.item(0);
    this.fileToUpload.append('myFile', tFile, tFile.name);
    this.fileToUpload.append('uriExternal', 'false');
    this.fileToUpload.append('review', 'false');
    this.fileToUpload.append('isPublic', 'false');
    this.fileToUpload.append('type', this.data.type);
    console.log(this.fileToUpload);
  }
  delete() {
    if (confirm("Are you sure you wish to delete this protocol?")) {
      this.apiService.doPost(_constants__WEBPACK_IMPORTED_MODULE_1__.Consts.QUERY_DELETE_PROTOCOL, this.data).subscribe(data => {
        this.router.navigate(['home/protocols/protocol-create/deleted']);
      }, errors => {
        this.errors = errors;
      });
    }
  }
  showDeleteButton() {
    if (this.router.url.includes('edit-protocol')) {
      return true;
    }
    return false;
  }
  changeAccessType(event) {
    this.recipientList = null;
    this.theAccess['recipient'] = '';
    this.theAccess['roleName'] = '';
    if (event == 'role') {
      this.theAccess['recipientDisplayName'] = 'Public';
      this.theAccess['recipient'] = 'ROLE_ANONYMOUS';
      this.theAccess['roleName'] = "R";
    }
    ;
  }
  deleteAccess() {
    if (confirm("Are you sure you wish to delete this " + this.theAccess['accessType'] + "?")) {
      this.data['theAccess'] = this.theAccess;
      let url = this.apiService.doPost(_constants__WEBPACK_IMPORTED_MODULE_1__.Consts.QUERY_PROTOCOL_DELETE_ACCESS, this.data);
      url.subscribe(data => {
        this.data = data;
        this.accessIndex = null;
        this.errors = {};
      }, error => {
        this.errors = error;
      });
    }
  }
  duplicateCheck() {
    let formValues = this.data;
    let dupQuery = '';
    if (formValues['version'] === undefined) {
      dupQuery = 'protocolType=' + formValues['type'] + '&protocolName=' + formValues['name'];
    } else {
      dupQuery = 'protocolType=' + formValues['type'] + '&protocolName=' + formValues['name'] + '&protocolVersion=' + formValues['version'];
    }
    this.apiService.doGet(_constants__WEBPACK_IMPORTED_MODULE_1__.Consts.QUERY_GET_PROTOCOL, dupQuery).subscribe(
    // It already exists
    data => {
      this.existingData = data;
      this.errors = {};
      this.isDup = true;
      this.haveDupStatus = true;
      return true;
    },
    // It does NOT already exist
    err => {
      this.isDup = false;
      this.haveDupStatus = true;
      return false;
    });
  }
  editAccess(index, access) {
    console.log(index, access);
    this.accessIndex = index;
    this.recipientList = null;
    this.theAccess = JSON.parse(JSON.stringify(access));
    this.editingAccessRow = true;
  }
  getRecipientList() {
    var url;
    if (this.theAccess['accessType'] == 'group') {
      url = this.apiService.doGet(_constants__WEBPACK_IMPORTED_MODULE_1__.Consts.QUERY_GET_COLLABORATION_GROUPS, 'searchStr=');
    }
    if (this.theAccess['accessType'] == 'user') {
      url = this.apiService.doGet(_constants__WEBPACK_IMPORTED_MODULE_1__.Consts.QUERY_GET_USERS, 'searchStr=');
    }
    url.subscribe(data => {
      this.recipientList = data;
      this.errors = {};
    }, error => {
      this.errors = error;
    });
  }
  init() {
    if (this.protocolId) {
      this.currentRoute = 'edit-protocol';
      this.toolHeadingName = 'Edit Protocol';
      this.helpUrl = _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.HELP_URL_PROTOCOL_EDIT;
      this.apiService.doGet(_constants__WEBPACK_IMPORTED_MODULE_1__.Consts.QUERY_EDIT_PROTOCOL, 'protocolId=' + this.protocolId).subscribe(data => {
        this.data = data;
      }, errors => {
        this.errors = errors;
      });
    } else {
      this.toolHeadingName = 'Create Protocol';
      this.helpUrl = _constants__WEBPACK_IMPORTED_MODULE_1__.Consts.HELP_URL_PROTOCOL_CREATE;
      this.data = {
        "uriExternal": false,
        "type": "",
        "name": "",
        "abbreviation": "",
        "version": "",
        "fileTitle": "",
        "fileDescription": ""
      };
    }
    // Get list of Protocol types for dropdown
    this.apiService.doGet(_constants__WEBPACK_IMPORTED_MODULE_1__.Consts.QUERY_PROTOCOL_SETUP, '').subscribe(data => {
      this.errors = {};
      this.setupData = data;
      if (!this.protocolId) {
        this.data["isCuratorEditing"] = this.setupData["isCuratorEditing"];
      }
      // this.defaultProtocolType = this.protocolTypes[0]; // SET default - This doesn't work @CHECKME  I had to hard code the default
    }, errors => {
      this.errors = errors;
    });
  }
  onReset() {
    this.init();
  }
  onSubmit() {
    var _this = this;
    return (0,_Users_mi_software_cananolab_software_cananolab_client_new_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // ////////////////////////////////////////////////////////
      // Check for dups
      if (!_this.protocolId) {
        _this.haveDupStatus = false;
        console.log('duplicate check?');
        _this.duplicateCheck();
        // Wait until we know if it already exists
        while (!_this.haveDupStatus) {
          yield _this.utilService.sleep(_constants__WEBPACK_IMPORTED_MODULE_1__.Consts.waitTime);
        }
        if (_this.isDup) {
          if (confirm("A database record with the same protocol type and protocol name already exists. Load it and update?")) {
            _this.router.navigate(['home/protocols/edit-protocol', _this.existingData['id']]);
          }
          return;
        }
      }
      // ////////////////////////////////////////////////////////
      // Do we need to send a file?
      // Send the file
      if (!_this.data.uriExternal) {
        if (_this.fileToUpload) {
          let uploadUrl = _this.httpClient.post(_constants__WEBPACK_IMPORTED_MODULE_1__.Consts.QUERY_UPLOAD_FILE, _this.fileToUpload);
          uploadUrl.subscribe(data => {
            _this.errors = {};
            _this.data.fileId = "0";
            _this.data.uri = data['fileName'];
            _this.submitProtocol();
          }, error => {});
        } else {
          // we dont have a file //
          _this.submitProtocol();
        }
      } // END  Send the file
      // Send an external URI
      else {
        let formData = _this.buildExternalUriForm();
        _this.data.uriExternal = true;
        _this.submitProtocol();
      }
    })();
  }
  ngAfterViewInit() {
    //  this.defaultProtocolType = this.protocolTypes[0]; // SET default - This doesn't work @CHECKME  I had to hard code the default
  }
  onEnterFileUrl() {
    this.data.uriExternal = true;
  }
  onUpload() {
    this.data.uriExternal = false;
  }
  saveAccess() {
    this.data['theAccess'] = this.theAccess;
    let url = this.apiService.doPost(_constants__WEBPACK_IMPORTED_MODULE_1__.Consts.QUERY_PROTOCOL_SAVE_ACCESS, this.data);
    url.subscribe(data => {
      this.data = data;
      this.errors = {};
      if (this.fileToUpload) {
        this.onSubmit();
      } else {
        if (this.currentRoute == 'protocol-create') {
          this.router.navigate(['home/protocols/edit-protocol', data['id'], 'success']);
        }
      }
      ;
    }, error => {
      this.errors = error;
    });
    this.accessIndex = null;
  }
  submitProtocol() {
    this.apiService.doPost(_constants__WEBPACK_IMPORTED_MODULE_1__.Consts.QUERY_CREATE_PROTOCOL, this.data).subscribe(data => {
      this.errors = {};
      this.data.theAccess = this.theAccess;
      this.externalUrl = decodeURIComponent(this.externalUrl); // Make it look right in the UI
      let protocolId = data.replaceAll('"', '').replace('[', '').replace(']', '').split(',')[1];
      if (this.currentRoute == 'protocol-create') {
        this.router.navigate(['home/protocols/edit-protocol', protocolId, 'success']);
      } else {
        this.message = 'Protocol Successfully Updated';
      }
    }, err => {
      this.errors = err;
      this.externalUrl = decodeURIComponent(this.externalUrl); // Make it look right in the UI
    });
  }

  getProtocol(event) {
    let url = this.apiService.doGet(_constants__WEBPACK_IMPORTED_MODULE_1__.Consts.QUERY_GET_PROTOCOL, 'protocolType=' + this.data.type + '&protocolName=' + this.data.name + '&protocolVersion=' + this.data.version);
    url.subscribe(data => {
      if (confirm("A database record with the same protocol type and protocol name already exists. Load it and update?")) {
        this.router.navigate(['home/protocols/edit-protocol', data['id']]);
      }
    });
  }
  submitForReview() {
    console.log(this.data);
    let url = this.apiService.doPost(_constants__WEBPACK_IMPORTED_MODULE_1__.Consts.QUERY_PROTOCOL_SUBMIT_REVIEW, {
      dataId: this.data.id,
      dataName: this.data.name,
      dataType: "protocol"
    }, 'text');
    url.subscribe(data => {
      this.submitReviewButton = false;
    });
  }
}
ProtocolCreateComponent.ɵfac = function ProtocolCreateComponent_Factory(t) {
  return new (t || ProtocolCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_common_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_common_services_util_service__WEBPACK_IMPORTED_MODULE_3__.UtilService));
};
ProtocolCreateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ProtocolCreateComponent,
  selectors: [["canano-protocol-create"]],
  decls: 2,
  vars: 3,
  consts: [[3, "helpUrl", "toolHeadingName"], ["class", "mainSection", 4, "ngIf"], [1, "mainSection"], ["class", "error", 4, "ngIf"], [1, "mainBorder"], ["name", "searchForm"], [1, "dataMain"], [1, "label"], ["for", "protocolType"], ["id", "protocolType", "name", "type", 3, "ngModel", "ngModelChange"], [3, "ngValue", "selected"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "protocolName"], ["type", "text", "name", "name", "id", "protocolName", 3, "ngModel", "focusout", "ngModelChange"], ["for", "abbreviation"], ["id", "abbreviation", "name", "abbreviation", "type", "text", 3, "ngModel", "ngModelChange"], ["for", "protocolVersion"], ["id", "protocolVersion", "name", "version", "type", "text", 3, "ngModel", "ngModelChange"], ["for", "protocolFile"], ["name", "create_protocol_file_radio", "id", "create_protocol_file_radio0", "type", "radio", 3, "value", "checked", "ngModel", "click", "ngModelChange"], ["for", "create_protocol_file_radio0", 1, "right"], ["name", "create_protocol_file_radio", "id", "create_protocol_file_radio1", "type", "radio", 3, "value", "checked", "ngModel", "click", "ngModelChange"], ["for", "create_protocol_file_radio1", 1, "right"], ["type", "file", 3, "ngClass", "change"], [4, "ngIf"], ["placeholder", "File URL", "type", "text", "id", "externalUrl", "name", "externalUrl", 3, "ngClass", "ngModel", "ngModelChange"], ["for", "fileTitle"], ["name", "fileTitle", "id", "fileTitle", "type", "text", 3, "ngModel", "ngModelChange"], ["for", "description"], ["name", "fileDescription", "id", "description", "cols", "60", "rows", "3", 3, "ngModel", "ngModelChange"], ["for", "accessToProtocol"], [1, "btn-canano", "btn-canano-primary", "btn-canano-xs", "mr-1", 3, "disabled", "click"], ["id", "buttons"], [1, "dataMain", "submit"], ["class", "btn btn-danger m-1", 3, "click", 4, "ngIf"], [1, "btn-canano", "btn-canano-danger", "btn-canano-lg", "mr-1", 3, "click"], [1, "btn-canano", "btn-canano-primary", "btn-canano-lg", "mr-1", 3, "disabled", "click"], ["class", "btn-canano btn-canano-primary btn-canano-lg mr-1", 3, "disabled", "click", 4, "ngIf"], [1, "error"], [3, "value"], [3, "href"], [1, "dataTable"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["class", "btn-canano btn-canano-primary btn-canano-xs mr-1", 3, "click", 4, "ngIf"], [1, "btn-canano", "btn-canano-primary", "btn-canano-xs", "mr-1", 3, "click"], [1, "authorForm"], ["for", "access.roleName"], [1, "field"], ["name", "access.roleName", 3, "disabled", "ngModel", "ngModelChange"], [3, "selected", "ngValue"], [3, "ngValue", "selected", 4, "ngFor", "ngForOf"], ["class", "btn-canano btn-canano-danger btn-canano-xs mr-1", 3, "click", 4, "ngIf"], [1, "btn-canano", "btn-canano-default", "btn-canano-xs", "mr-1", 3, "click"], ["for", "accessType"], ["colspan", "2", 1, "field"], ["type", "radio", "name", "accessType.group", "id", "accessType.group", 3, "value", "ngModel", "ngModelChange"], ["for", "accessType.group", 1, "right"], ["type", "radio", "name", "theAccess.accessType", "id", "theAccess.accessType.user", 3, "value", "ngModel", "ngModelChange"], ["for", "theAccess.accessType.user", 1, "right"], ["type", "radio", "name", "accessType.role", "id", "accessType.role", 3, "value", "ngModel", "ngModelChange", 4, "ngIf"], ["for", "accessType.role", "class", "right", 4, "ngIf"], ["type", "radio", "name", "accessType.role", "id", "accessType.role", 3, "value", "ngModel", "ngModelChange"], ["for", "accessType.role", 1, "right"], ["for", "access.recipient"], ["name", "access.recipient", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], [3, "ngValue", 4, "ngFor", "ngForOf"], [3, "ngValue"], [1, "btn-canano", "btn-canano-danger", "btn-canano-xs", "mr-1", 3, "click"], [1, "btn", "btn-danger", "m-1", 3, "click"]],
  template: function ProtocolCreateComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "canano-main-display-heading", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ProtocolCreateComponent_div_1_Template, 88, 32, "div", 1);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("helpUrl", ctx.helpUrl)("toolHeadingName", ctx.toolHeadingName);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.data && ctx.setupData);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_4__.MainDisplayHeadingComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _common_components_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_5__.DisclaimerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.KeyValuePipe],
});

/***/ }),

/***/ 2100:
/*!***************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/protocols/protocol-create/protocol-create.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProtocolCreateModule": () => (/* binding */ ProtocolCreateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _protocol_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./protocol-create.component */ 9163);
/* harmony import */ var _protocol_create_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./protocol-create-routing.module */ 5506);
/* harmony import */ var _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/modules/set-object-value/shared.module */ 5413);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_cananolab_client_common_components_disclaimer_disclaimer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/cananolab-client/common/components/disclaimer/disclaimer.module */ 5869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







class ProtocolCreateModule {}
ProtocolCreateModule.ɵfac = function ProtocolCreateModule_Factory(t) {
  return new (t || ProtocolCreateModule)();
};
ProtocolCreateModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: ProtocolCreateModule
});
ProtocolCreateModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _protocol_create_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProtocolCreateRoutingModule, _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, src_app_cananolab_client_common_components_disclaimer_disclaimer_module__WEBPACK_IMPORTED_MODULE_3__.DisclaimerModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ProtocolCreateModule, {
    declarations: [_protocol_create_component__WEBPACK_IMPORTED_MODULE_0__.ProtocolCreateComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _protocol_create_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProtocolCreateRoutingModule, _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, src_app_cananolab_client_common_components_disclaimer_disclaimer_module__WEBPACK_IMPORTED_MODULE_3__.DisclaimerModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_cananolab-client_main-display_protocols_protocol-create_protocol-create_module_ts.js.map