(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cananolab-client-main-display-publications-publications-module"],{

/***/ "2GcZ":
/*!**************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/publications/publications.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PublicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationsComponent", function() { return PublicationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants */ "l207");
/* harmony import */ var src_assets_properties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/assets/properties */ "DzTi");
/* harmony import */ var _main_display_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main-display.service */ "5CVF");
/* harmony import */ var src_app_cananolab_client_main_display_main_display_heading_main_display_heading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/cananolab-client/main-display/main-display-heading/main-display-heading.component */ "AYD1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








function PublicationsComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create a New Publication");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Select to create a new publication.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class PublicationsComponent {
    constructor(mainDisplayService) {
        this.mainDisplayService = mainDisplayService;
        /**
         * These will be provided to canano-main-display-heading as @Input
         */
        this.helpUrl = _constants__WEBPACK_IMPORTED_MODULE_1__["Consts"].HELP_URL_PUBLICATIONS;
        this.properties = src_assets_properties__WEBPACK_IMPORTED_MODULE_2__["Properties"];
        this.toolHeadingName = 'Manage Publications';
    }
    ngOnInit() {
    }
}
PublicationsComponent.ɵfac = function PublicationsComponent_Factory(t) { return new (t || PublicationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_main_display_service__WEBPACK_IMPORTED_MODULE_3__["MainDisplayService"])); };
PublicationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PublicationsComponent, selectors: [["canano-publications"]], decls: 23, vars: 3, consts: [[3, "helpUrl", "toolHeadingName"], [1, "mainSection"], [1, "mainBorder"], [1, "links-panel", "card", "ml-1", "mt-2"], [1, "card-header", "mb-0", "pb-0"], [1, "card-title", "unselectable", "m-0", "p-0"], [1, "card-body"], [4, "ngIf"], ["routerLink", "publication-search", 1, "link-clicker"], ["routerLink", "sample-search-by-publication", 1, "link-clicker"], ["routerLink", "/home/samples/publications/publication/-1", 1, "link-clicker"]], template: function PublicationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canano-main-display-heading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " This is the manage publications section. Publications can include book chapters, editorials, peer review articles, reports, reviews and other forms of documents. In this section, depending on your authorization level, you may submit a new publication or search for an existing publication. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Publication Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PublicationsComponent_ng_container_11_Template, 7, 0, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Search Existing Publication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Enter search criteria to obtain information on publications of interest.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Search for Samples by Publication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Enter DOI/Pubmed Id to obtain the related sample information.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("helpUrl", ctx.helpUrl)("toolHeadingName", ctx.toolHeadingName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.properties.LOGGED_IN);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'canano-publications',
                templateUrl: './publications.component.html',
                styleUrls: ['./publications.component.scss']
            }]
    }], function () { return [{ type: _main_display_service__WEBPACK_IMPORTED_MODULE_3__["MainDisplayService"] }]; }, null); })();


/***/ }),

/***/ "2c4C":
/*!*******************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/publications/publications-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: PublicationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationsRoutingModule", function() { return PublicationsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _publications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publications.component */ "2GcZ");





const routes = [{ path: '', component: _publications_component__WEBPACK_IMPORTED_MODULE_2__["PublicationsComponent"] }];
class PublicationsRoutingModule {
}
PublicationsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PublicationsRoutingModule });
PublicationsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PublicationsRoutingModule_Factory(t) { return new (t || PublicationsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PublicationsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicationsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "X5jv":
/*!***********************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/publications/publications.module.ts ***!
  \***********************************************************************************/
/*! exports provided: PublicationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationsModule", function() { return PublicationsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _publications_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publications.component */ "2GcZ");
/* harmony import */ var _publications_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./publications-routing.module */ "2c4C");
/* harmony import */ var _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/modules/set-object-value/shared.module */ "0U9J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class PublicationsModule {
}
PublicationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PublicationsModule });
PublicationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PublicationsModule_Factory(t) { return new (t || PublicationsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _publications_routing_module__WEBPACK_IMPORTED_MODULE_3__["PublicationsRoutingModule"],
            _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PublicationsModule, { declarations: [_publications_component__WEBPACK_IMPORTED_MODULE_2__["PublicationsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _publications_routing_module__WEBPACK_IMPORTED_MODULE_3__["PublicationsRoutingModule"],
        _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicationsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_publications_component__WEBPACK_IMPORTED_MODULE_2__["PublicationsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _publications_routing_module__WEBPACK_IMPORTED_MODULE_3__["PublicationsRoutingModule"],
                    _common_modules_set_object_value_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=cananolab-client-main-display-publications-publications-module.js.map