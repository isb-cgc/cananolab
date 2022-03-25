'use strict';

var app = angular.module('angularApp');
app.factory('navigationService', function ($resource) {
	return $resource('/rest/core/getTabs');
});