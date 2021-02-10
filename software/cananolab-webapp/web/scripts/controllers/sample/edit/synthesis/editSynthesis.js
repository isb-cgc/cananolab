'use strict';

var app = angular.module('angularApp')
  .controller('EditSynthesisCtrl', function (sampleService, utilsService, navigationService, groupService, $rootScope, $scope, $http, $location, $filter, $modal, $routeParams) {
    $scope.sampleName = '';
    $scope.sampleId = $location.search()['sampleId'];
    $scope.message = $location.search()['message'];
    $scope.materials = [];
    $scope.functionalizations = [];
    $scope.purifications = [];
    $scope.showForm = false;
    $scope.openMaterialEditForm = function () {
      if ($scope.showForm == false) {
        $scope.showForm = true;
      } else {
        $scope.showForm = false;
      };
    };

    $scope.loader = true;

    // returns N/A is description is blank //
    $scope.getValueOfField = function (val) {
      return val ? val : 'N/A'
    };

    // select tabs //
    $scope.select = function (tab) {
      var size = 3,
        key;
      for (var x = 0; x < size; x++) {
        if (tab >= 0) {
          if (x == tab) {
            $scope['show' + x] = false;
          } else {
            $scope['show' + x] = true;
          }
        } else {
          $scope['show' + x] = false;
        }
      }
    };

    $http({
      method: 'GET',
      url: '/caNanoLab/rest/synthesis/summaryView?sampleId=' + $scope.sampleId
    }).
    then(function (data, status, headers, config) {
      data = data['data']
      $scope.sampleName = sampleService.sampleName($scope.sampleId);
      $scope.materials = data.synthesisMaterials;
      $scope.functionalizations = data.synthesisFunctionalization;
      $scope.purifications = data.synthesisPurification;
      $scope.loader = false;
    });

  });