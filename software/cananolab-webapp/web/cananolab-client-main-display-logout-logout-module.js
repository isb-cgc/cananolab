(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cananolab-client-main-display-logout-logout-module"],{

/***/ "GUtW":
/*!***********************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/logout/logout.module.ts ***!
  \***********************************************************************/
/*! exports provided: LogoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutModule", function() { return LogoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _logout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logout.component */ "kzQT");
/* harmony import */ var _logout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logout-routing.module */ "lslA");
/* harmony import */ var _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/modules/set-object-value/shared.module */ "0U9J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class LogoutModule {
}
LogoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LogoutModule });
LogoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LogoutModule_Factory(t) { return new (t || LogoutModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _logout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LogoutRoutingModule"],
            _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LogoutModule, { declarations: [_logout_component__WEBPACK_IMPORTED_MODULE_2__["LogoutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _logout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LogoutRoutingModule"],
        _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_logout_component__WEBPACK_IMPORTED_MODULE_2__["LogoutComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _logout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LogoutRoutingModule"],
                    _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "kzQT":
/*!**************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/logout/logout.component.ts ***!
  \**************************************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "l207");
/* harmony import */ var _assets_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/properties */ "DzTi");
/* harmony import */ var _common_components_idle_idle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/components/idle/idle.service */ "1xYR");
/* harmony import */ var _top_main_menu_top_main_menu_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../top-main-menu/top-main-menu.service */ "VE4C");
/* harmony import */ var _common_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/services/api.service */ "WHDV");
/* harmony import */ var _status_display_status_display_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../status-display/status-display.service */ "X3t+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/services/util.service */ "WHaB");










class LogoutComponent {
    constructor(idleService, topMainMenuService, apiService, statusDisplayService, router, utilService) {
        this.idleService = idleService;
        this.topMainMenuService = topMainMenuService;
        this.apiService = apiService;
        this.statusDisplayService = statusDisplayService;
        this.router = router;
        this.utilService = utilService;
        this.properties = _assets_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"];
    }
    ngOnInit() {
        this.logOut();
        this.properties['LOGGED_IN'] = false;
        this.properties['logged_in'] = false;
        this.topMainMenuService.showOnlyMenuItems([
            'HOME', 'HELP', 'GLOSSARY', 'PROTOCOLS', 'SAMPLES', 'PUBLICATIONS', 'LOGIN'
        ]);
        this.router.navigate([this.utilService.getRouteByName('HOME')]);
    }
    logOut() {
        this.apiService.doPost(_constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].QUERY_LOGOUT, '').subscribe(data => {
            _assets_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"].LOGGED_IN = false;
            this.statusDisplayService.updateUser('guest');
        }, err => {
            this.statusDisplayService.updateUser('unknown'); // CHECKME
            console.error('ERROR doPost Consts.QUERY_LOGOUT: ', err);
        });
        this.idleService.stopTimer();
    }
}
LogoutComponent.ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_components_idle_idle_service__WEBPACK_IMPORTED_MODULE_3__["IdleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_top_main_menu_top_main_menu_service__WEBPACK_IMPORTED_MODULE_4__["TopMainMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_status_display_status_display_service__WEBPACK_IMPORTED_MODULE_6__["StatusDisplayService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_common_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"])); };
LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoutComponent, selectors: [["canano-logout"]], decls: 2, vars: 0, template: function LogoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "logout works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'canano-logout',
                templateUrl: './logout.component.html',
                styleUrls: ['./logout.component.scss']
            }]
    }], function () { return [{ type: _common_components_idle_idle_service__WEBPACK_IMPORTED_MODULE_3__["IdleService"] }, { type: _top_main_menu_top_main_menu_service__WEBPACK_IMPORTED_MODULE_4__["TopMainMenuService"] }, { type: _common_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }, { type: _status_display_status_display_service__WEBPACK_IMPORTED_MODULE_6__["StatusDisplayService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _common_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"] }]; }, null); })();


/***/ }),

/***/ "lslA":
/*!*******************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/logout/logout-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: LogoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutRoutingModule", function() { return LogoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _logout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logout.component */ "kzQT");





const routes = [{ path: '', component: _logout_component__WEBPACK_IMPORTED_MODULE_2__["LogoutComponent"] }];
class LogoutRoutingModule {
}
LogoutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LogoutRoutingModule });
LogoutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LogoutRoutingModule_Factory(t) { return new (t || LogoutRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LogoutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=cananolab-client-main-display-logout-logout-module.js.map