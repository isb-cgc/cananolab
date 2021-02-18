'use strict';
var app = angular.module('angularApp')
    .controller('DataColumnHeaderResetCtrl', function ($rootScope, $scope, $modalInstance, col) {
        $scope.col = col;
        $scope.onDoneClick = function (status) {
            $modalInstance.close(status);
        };
    });