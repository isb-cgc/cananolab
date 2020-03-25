'use strict';

var app = angular.module('angularApp')
.controller('EditSynthesisMaterialsCtrl', function (sampleService,utilsService,navigationService, groupService, $rootScope,$scope,$http,$location,$filter,$modal,$routeParams) {
  $scope.material = [];
  $scope.sampleName = '';
  $scope.sampleId = $location.search()['sampleId'];  
  $scope.synMaterialId = $location.search()['synMaterialId'];
  $scope.showMaterialElementForm = false;
  $scope.showInherentFunctionForm = false;
  $scope.materialEditUrl = `/caNanoLab/rest/synthesisMaterial/edit?sampleId=${$scope.sampleId}&synMaterialId=${$scope.synMaterialId}`
  $scope.dropdowns = {};

  $scope.materialElement = {}; // current material being edited //
  $scope.file = {}; // current file being edited //
  $scope.inherentFunction = {}; // current inherent function being edited //


  $scope.openInherentFunction = function(id) {
    if ($scope.showInherentFunctionForm == false) {
      $scope.showInherentFunctionForm = true;
    };
  }
  // opens material edit form //
  $scope.openMaterialEditForm = function(id,type) {
    if (id) {
      for (var x=0; x<$scope.material.materialElements.length; x++) {
        if ($scope.material.materialElements[x]['id']==id) {
          $scope.materialElement = $scope.material.materialElements[x];
        };
      };
    }
    else {
      console.log('this is an add. Create empty object')
    };
    if ($scope.showMaterialElementForm==false) {
      $scope.showMaterialElementForm = true;
    };
  };

  $http({ method: 'GET', url: `/caNanoLab/rest/synthesisMaterial/setup?sampleId=${$scope.sampleId}`}).
    success(function (data, status, headers, config) {
      $scope.dropdowns = data;
      $scope.loader = false;
    }).error(function (data, status, headers, config) {
      console.log("Error")
    });

  $http({ method: 'GET', url: `/caNanoLab/rest/synthesisMaterial/edit?sampleId=${$scope.sampleId}&synMaterialId=${$scope.synMaterialId}`}).
    success(function (data, status, headers, config) {
      $scope.sampleName = sampleService.sampleName($scope.sampleId);
      $scope.material = data;
      $scope.loader = false;
    }).error(function (data, status, headers, config) {
      console.log("Error")
    });    

});