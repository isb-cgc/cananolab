"use strict";
(self["webpackChunkcananolab_client_new"] = self["webpackChunkcananolab_client_new"] || []).push([["src_app_cananolab-client_main-display_protocols_protocols_module_ts"],{

/***/ 6909:
/*!*************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/protocols/protocols-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProtocolsRoutingModule": () => (/* binding */ ProtocolsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _protocols_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./protocols.component */ 7937);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _protocols_component__WEBPACK_IMPORTED_MODULE_0__.ProtocolsComponent
}];
class ProtocolsRoutingModule {}
ProtocolsRoutingModule.ɵfac = function ProtocolsRoutingModule_Factory(t) {
  return new (t || ProtocolsRoutingModule)();
};
ProtocolsRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ProtocolsRoutingModule
});
ProtocolsRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProtocolsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7937:
/*!********************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/protocols/protocols.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProtocolsComponent": () => (/* binding */ ProtocolsComponent)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants */ 4854);
/* harmony import */ var src_assets_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/assets/properties */ 9552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/cananolab-client/main-display/main-display-heading/main-display-heading.component */ 4567);






function ProtocolsComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Create a New Protocol");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Select to create a new protocol.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br")(6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
}
class ProtocolsComponent {
  constructor() {
    this.toolHeadingName = 'Manage Protocols';
    this.helpUrl = _constants__WEBPACK_IMPORTED_MODULE_0__.Consts.HELP_URL_PROTOCOL_MANAGE;
    this.properties = src_assets_properties__WEBPACK_IMPORTED_MODULE_1__.Properties;
  }
  ngOnInit() {
    console.log(src_assets_properties__WEBPACK_IMPORTED_MODULE_1__.Properties);
  }
}
ProtocolsComponent.ɵfac = function ProtocolsComponent_Factory(t) {
  return new (t || ProtocolsComponent)();
};
ProtocolsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ProtocolsComponent,
  selectors: [["canano-protocols"]],
  decls: 18,
  vars: 3,
  consts: [[3, "helpUrl", "toolHeadingName"], [1, "mainSection"], [1, "mainBorder"], [1, "links-panel", "card", "ml-1", "mt-2"], [1, "card-header", "mb-0", "pb-0"], [1, "card-title", "unselectable", "m-0", "p-0"], [1, "card-body"], [4, "ngIf"], ["routerLink", "protocol-search", 1, "link-clicker"], ["routerLink", "protocol-create", 1, "link-clicker"]],
  template: function ProtocolsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canano-main-display-heading", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "P");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " This is the manage protocols section. A protocol is a predefined procedural method used in the design and implementation of assays. For example, a protocol could describe the steps a laboratory used for characterizing nanomaterials. In this section, depending on your authorization level, you may submit a new protocol, or search for an existing protocol. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "span", 5)(8, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Protocol Links");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ProtocolsComponent_ng_container_11_Template, 7, 0, "ng-container", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Search Existing Protocols");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Enter search criteria to obtain information on protocols of interest.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "br")(17, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("helpUrl", ctx.helpUrl)("toolHeadingName", ctx.toolHeadingName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.properties.LOGGED_IN);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_2__.MainDisplayHeadingComponent],
});

/***/ }),

/***/ 1834:
/*!*****************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/protocols/protocols.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProtocolsModule": () => (/* binding */ ProtocolsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _protocols_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./protocols.component */ 7937);
/* harmony import */ var _protocols_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./protocols-routing.module */ 6909);
/* harmony import */ var _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/modules/set-object-value/shared.module */ 5413);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






class ProtocolsModule {}
ProtocolsModule.ɵfac = function ProtocolsModule_Factory(t) {
  return new (t || ProtocolsModule)();
};
ProtocolsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: ProtocolsModule
});
ProtocolsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _protocols_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProtocolsRoutingModule, _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ProtocolsModule, {
    declarations: [_protocols_component__WEBPACK_IMPORTED_MODULE_0__.ProtocolsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _protocols_routing_module__WEBPACK_IMPORTED_MODULE_1__.ProtocolsRoutingModule, _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_cananolab-client_main-display_protocols_protocols_module_ts.js.map