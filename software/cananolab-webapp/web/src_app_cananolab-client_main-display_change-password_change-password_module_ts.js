"use strict";
(self["webpackChunkcananolab_client_new"] = self["webpackChunkcananolab_client_new"] || []).push([["src_app_cananolab-client_main-display_change-password_change-password_module_ts"],{

/***/ 8491:
/*!*************************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/change-password/change-password-routing.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordRoutingModule": () => (/* binding */ ChangePasswordRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _change_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.component */ 2040);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _change_password_component__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordComponent
}];
class ChangePasswordRoutingModule {}
ChangePasswordRoutingModule.ɵfac = function ChangePasswordRoutingModule_Factory(t) {
  return new (t || ChangePasswordRoutingModule)();
};
ChangePasswordRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ChangePasswordRoutingModule
});
ChangePasswordRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ChangePasswordRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 2040:
/*!********************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/change-password/change-password.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordComponent": () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../constants */ 4854);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _common_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/services/api.service */ 6342);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);








function ChangePasswordComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u2713 Must contain at least one UPPERCASE character.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ChangePasswordComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u2717 Must contain at least one UPPERCASE character.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ChangePasswordComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u2713 Must contain at least one LOWERCASE character.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ChangePasswordComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u2717 Must contain at least one LOWERCASE character.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ChangePasswordComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u2713 Must contain at least one digit.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ChangePasswordComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u2717 Must contain at least one digit.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ChangePasswordComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u2713 Must contain at least one special character.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ChangePasswordComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u2717 Must contain at least one special character.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ChangePasswordComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u2713 Must be between ", ctx_r8.minCharCount, " and 32 characters.");
  }
}
function ChangePasswordComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u2717 Must be between ", ctx_r9.minCharCount, " and 32 characters.");
  }
}
function ChangePasswordComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u2713 Passwords must match.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ChangePasswordComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u2717 Passwords must match.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class ChangePasswordComponent {
  constructor(apiService, activatedRoute, router, httpClient) {
    this.apiService = apiService;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.httpClient = httpClient;
    this.newPwd = "";
    this.confirmPwd = "";
    this.isPwdMatch = false;
    this.hasNumber = false;
    this.hasLowercase = false;
    this.hasUppercase = false;
    this.isGoodLength = false;
    this.hasSpecialChar = false;
    this.allValidationPassed = false;
    this.isPrivilegeUser = false;
    this.minCharCount = 8;
    this.token = "";
    this.message = "";
    this.errorMessage = "";
    this.errors = {};
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.token = params.token;
      let url = this.apiService.doGet(_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.QUERY_RESET_PASSWORD_ACCOUNT_TYPE, 'token=' + this.token);
      url.subscribe(data => {
        this.isPrivilegeUser = data['isPrivilegeUser'];
        this.minCharCount = this.isPrivilegeUser ? 15 : 8;
      }, error => {
        this.errors = error;
      });
    });
  }
  onCancelClick() {
    console.log("Redirecting to home page...");
    this.router.navigate(['']);
  }
  onChangePasswordClick() {
    this.checkAllValidations();
    if (this.allValidationPassed) {
      this.saveResetUserPassword(this.token, this.newPwd);
      console.log("Send password!!");
    } else {
      console.log("Password not ready??");
    }
  }
  onNewPwdChanged(newValue) {
    this.newPwd = newValue;
    this.checkAllValidations();
  }
  onConfirmPwdChanged(newValue) {
    this.confirmPwd = newValue;
    this.checkAllValidations();
  }
  checkAllValidations() {
    this.isPwdMatch = this.newPwd === this.confirmPwd && this.newPwd != "";
    this.hasNumber = this.checkValidations(this.newPwd, 'number');
    this.hasLowercase = this.checkValidations(this.newPwd, 'lowercase');
    this.hasUppercase = this.checkValidations(this.newPwd, 'uppercase');
    this.isGoodLength = this.checkValidations(this.newPwd, 'length');
    this.hasSpecialChar = this.checkValidations(this.newPwd, 'special-character');
    this.allValidationPassed = this.isPwdMatch && this.hasNumber && this.hasLowercase && this.hasUppercase && this.isGoodLength && this.hasSpecialChar;
  }
  checkValidations(value, type) {
    switch (type) {
      case 'special-character':
        return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value);
        ;
      case 'number':
        return /\d/.test(value);
      case 'lowercase':
        return /[a-z]/.test(value);
      case 'uppercase':
        return /[A-Z]/.test(value);
      case 'length':
        return value.length >= this.minCharCount && value.length <= 32;
      default:
        return false;
    }
  }
  saveResetUserPassword(token, newPwd) {
    var resetData = {
      'token': this.token,
      'newpassword': this.newPwd
    };
    let params = [];
    Object.keys(resetData).forEach(key => {
      params.push(key + '=' + resetData[key]);
    });
    let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    let options = {
      headers: headers,
      method: 'post'
    };
    this.httpClient.post(_constants__WEBPACK_IMPORTED_MODULE_0__.Consts.SAVE_RESET_PASSWORD_URL, params.join('&'), options).subscribe(data => {
      console.log("'Password Reset Successfully");
      this.message = 'Password Reset Successfully';
      this.router.navigate(['']);
    }, errors => {
      if (errors.error.text == 'success') {
        this.errors = {};
        this.message = 'Password Reset Successfully';
      } else {
        this.errorMessage = errors.error;
        this.errors = errors;
      }
    });
  }
}
ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) {
  return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_common_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
};
ChangePasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ChangePasswordComponent,
  selectors: [["canano-change-password"]],
  decls: 59,
  vars: 15,
  consts: [["novalidate", "", 2, "margin-top", "10px", "margin-left", "20px"], [2, "font-family", "Helvetica,sans-serif", "font-size", "14px", "color", "blue", "align-content", "center"], ["ng-show", "message!=''"], [2, "font-family", "Helvetica,sans-serif", "font-size", "14px", "color", "red", "align-content", "center"], ["ng-show", "errorMessage!=''"], [1, "message"], [4, "ngIf"], ["style", "color:red", 4, "ngIf"], ["width", "100%", "align", "center", "summary", "layout"], ["width", "160", 1, "cellLabel"], ["for", "newPwd"], ["type", "password", "name", "newPwd", "size", "32", "ng-model-onblur", "", "id", "newPwd", 3, "ngModelChange", "ngModel"], [1, "cellLabel"], ["for", "confirmPwd"], ["type", "password", "name", "confirmPwd", "size", "32", "ng-model-onblur", "", "id", "confirmPwd", 3, "ngModelChange", "ngModel"], ["width", "100%", "summary", "layout", 1, "invisibleTable"], ["width", "102"], ["type", "button", 1, "btn-canano", "btn-canano-danger", 2, "background-color", "#A90101", 3, "click"], ["width", "300"], ["type", "button", 1, "btn-canano", "btn-canano-primary", 3, "disabled", "click"], [2, "color", "red"]],
  template: function ChangePasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div")(2, "form", 0)(3, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Change Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 1)(7, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 3)(10, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div")(13, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Password requirements:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ChangePasswordComponent_div_16_Template, 2, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ChangePasswordComponent_div_17_Template, 2, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ChangePasswordComponent_div_19_Template, 2, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ChangePasswordComponent_div_20_Template, 2, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ChangePasswordComponent_div_22_Template, 2, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, ChangePasswordComponent_div_23_Template, 2, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, ChangePasswordComponent_div_25_Template, 2, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ChangePasswordComponent_div_26_Template, 2, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, ChangePasswordComponent_div_28_Template, 2, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, ChangePasswordComponent_div_29_Template, 2, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, ChangePasswordComponent_div_31_Template, 2, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, ChangePasswordComponent_div_32_Template, 2, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "table", 8)(35, "tr")(36, "td", 9)(37, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "New Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "td")(40, "div")(41, "input", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_41_listener($event) {
        return ctx.onNewPwdChanged($event);
      })("ngModel", function ChangePasswordComponent_Template_input_ngModel_41_listener() {
        return ctx.newPwd;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "tr")(43, "td", 12)(44, "label", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Confirm Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "td")(47, "div")(48, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ChangePasswordComponent_Template_input_ngModelChange_48_listener($event) {
        return ctx.onConfirmPwdChanged($event);
      })("ngModel", function ChangePasswordComponent_Template_input_ngModel_48_listener() {
        return ctx.confirmPwd;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "table", 15)(51, "tbody")(52, "tr")(53, "td", 16)(54, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_54_listener() {
        return ctx.onCancelClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "td", 18)(57, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChangePasswordComponent_Template_button_click_57_listener() {
        return ctx.onChangePasswordClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Change Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.errorMessage, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasUppercase);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hasUppercase);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasLowercase);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hasLowercase);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hasNumber);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hasSpecialChar);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hasSpecialChar);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isGoodLength);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isGoodLength);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isPwdMatch);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isPwdMatch);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.allValidationPassed);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm],
});

/***/ }),

/***/ 5033:
/*!*****************************************************************************************!*\
  !*** ./src/app/cananolab-client/main-display/change-password/change-password.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordModule": () => (/* binding */ ChangePasswordModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password-routing.module */ 8491);
/* harmony import */ var _change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.component */ 2040);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





class ChangePasswordModule {}
ChangePasswordModule.ɵfac = function ChangePasswordModule_Factory(t) {
  return new (t || ChangePasswordModule)();
};
ChangePasswordModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: ChangePasswordModule
});
ChangePasswordModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ChangePasswordModule, {
    declarations: [_change_password_component__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_cananolab-client_main-display_change-password_change-password_module_ts.js.map