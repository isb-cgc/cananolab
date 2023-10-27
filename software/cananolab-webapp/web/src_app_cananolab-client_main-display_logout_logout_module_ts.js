"use strict";
(self["webpackChunkcananolab_client_new"] = self["webpackChunkcananolab_client_new"] || []).push([["src_app_cananolab-client_main-display_logout_logout_module_ts"],{

/***/ 7046:
/*!*******************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/logout/logout-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutRoutingModule": () => (/* binding */ LogoutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _logout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logout.component */ 2278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _logout_component__WEBPACK_IMPORTED_MODULE_0__.LogoutComponent
}];
class LogoutRoutingModule {}
LogoutRoutingModule.ɵfac = function LogoutRoutingModule_Factory(t) {
  return new (t || LogoutRoutingModule)();
};
LogoutRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: LogoutRoutingModule
});
LogoutRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LogoutRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7143:
/*!***********************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/logout/logout.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoutModule": () => (/* binding */ LogoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _logout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logout.component */ 2278);
/* harmony import */ var _logout_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logout-routing.module */ 7046);
/* harmony import */ var _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/modules/set-object-value/shared.module */ 5413);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






class LogoutModule {}
LogoutModule.ɵfac = function LogoutModule_Factory(t) {
  return new (t || LogoutModule)();
};
LogoutModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: LogoutModule
});
LogoutModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _logout_routing_module__WEBPACK_IMPORTED_MODULE_1__.LogoutRoutingModule, _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LogoutModule, {
    declarations: [_logout_component__WEBPACK_IMPORTED_MODULE_0__.LogoutComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _logout_routing_module__WEBPACK_IMPORTED_MODULE_1__.LogoutRoutingModule, _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_cananolab-client_main-display_logout_logout_module_ts.js.map