'use strict';
var app = angular.module('angularApp')
    .controller('NoDatumColumnCtrl', function ($rootScope, $scope, $modalInstance) {
        $scope.onDoneClick = function () {
            $modalInstance.close();
        };

    });