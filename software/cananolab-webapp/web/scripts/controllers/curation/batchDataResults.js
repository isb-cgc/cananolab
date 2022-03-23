'use strict';
var app = angular.module('angularApp')
    .controller('BatchDataResultsCtrl', function (navigationService, groupService, $rootScope, $scope, $http, $filter, $location, $routeParams) {
        $rootScope.tabs = navigationService.get();
        $rootScope.groups = groupService.getGroups.data.get();
        $scope.dataExists = false;

        $scope.$on('$viewContentLoaded', function () {
            $scope.loader = true;
            $http({
                method: 'GET',
                url: '/rest/curation/manageResult'
            }).
            then(function (data, status, headers, config) {
                data = data['data']
                $scope.data = data;
                $scope.loader = false;

                if (data != null && data != '' && data.length > 0) {
                    $scope.dataExists = true;
                }

            }).
            catch(function (data, status, headers, config) {
                data = data['data']
                $scope.message = data;
                $scope.loader = false;

            });
        });


        //$scope.data = [{'type':'asdsadsadsad', 'status':'sdafefrerwerwe'}];
        //$scope.dataExists = true;

    });