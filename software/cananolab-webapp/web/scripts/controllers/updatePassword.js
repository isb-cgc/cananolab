'use strict';
angular.module('angularApp')
    .controller('UpdatePasswordCtrl', function (navigationService, groupService, $rootScope, $scope, $http, $filter, $routeParams) {
        $rootScope.tabs = navigationService.get();
        $rootScope.groups = groupService.getGroups.data.get();

        $scope.message = $routeParams.message;
    });