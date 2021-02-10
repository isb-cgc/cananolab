'use strict';
var app = angular.module('angularApp');
app.service("loginService", function ($location) {
    // Currently this just keeps a message //
    this.statusMessage = "";

    this.getMessage = function () {
        return this.statusMessage;
    };

    this.setMessage = function (message) {
        this.statusMessage = message;
    };
});