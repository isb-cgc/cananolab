'use strict';
var app = angular.module('angularApp')

  .controller('SampleSearchCtrl', function (sampleService, navigationService, groupService, $rootScope, $scope, $http, $location) {
    $scope.searchSampleForm = {};
    $scope.sampleData = sampleService.sampleData;
    $rootScope.tabs = navigationService.get();
    $rootScope.groups = groupService.getGroups.data.get();

    $scope.$on('$viewContentLoaded', function () {
      $http({
        method: 'GET',
        url: '/rest/sample/setup'
      }).
      then(function (data, status, headers, config) {
        data = data['data']
        $scope.functionalizingEntityTypesList = data.functionalizingEntityTypes;
        $scope.characterizationTypesList = data.characterizationTypes;
        $scope.nanomaterialEntityTypesList = data.nanomaterialEntityTypes;
        $scope.functionTypesList = data.functionTypes;
      }).
      catch(function (data, status, headers, config) {
        data = data['data']
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        $scope.message = data;
      });
    });

    $scope.setCharacterizationOptionsByCharType = function () {
      $http({
        method: 'GET',
        url: '/rest/sample/getCharacterizationByType',
        params: {
          "type": $scope.searchSampleForm.characterizationType
        }
      }).
      then(function (data, status, headers, config) {
        data = data['data']
        $scope.characterizationsList = data;
      }).
      catch(function (data, status, headers, config) {
        data = data['data']
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        $scope.message = data;
      });
    };


    $scope.doSearch = function () {
      $scope.loader = true;

      $http({
        method: 'POST',
        url: '/rest/sample/searchSample',
        data: $scope.searchSampleForm
      }).
      then(function (data, status, headers, config) {
        data = data['data']
        // $rootScope.sampleData = data;
        $scope.sampleData.data = data;
        if (data.length) {
          $location.path("/sampleResults").replace();
        } else {
          $scope.message = 'No samples were found for the given parameters.';
        }

      }).
      catch(function (data, status, headers, config) {
        data = data['data']
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        // $rootScope.sampleData = data;
        $scope.loader = false;
        $scope.message = 'No samples were found for the given parameters.';
      });
    };

    $scope.resetForm = function () {
      $scope.searchSampleForm = {};
      $scope.characterizationsList = [];
    };

  });