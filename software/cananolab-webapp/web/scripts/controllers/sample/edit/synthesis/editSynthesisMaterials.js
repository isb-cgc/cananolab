'use strict';

var app = angular.module('angularApp')
.controller('EditSynthesisMaterialsCtrl', function (sampleService,utilsService,navigationService, groupService, $rootScope,$scope,$http,$location,$filter,$modal,$routeParams) {
  $scope.material = [];
  $scope.materialCopy = []; // used if canceled //
  $scope.sampleName = '';
  $scope.sampleId = $location.search()['sampleId'];  
  $scope.synMaterialId = $location.search()['synMaterialId'];
  $scope.materialElementFormIndex = -1;
  $scope.inherentFunctionFormIndex = -1;
  $scope.materialEditUrl = `/caNanoLab/rest/synthesisMaterial/edit?sampleId=${$scope.sampleId}&synMaterialId=${$scope.synMaterialId}`
  $scope.dropdowns = {};

  $scope.materialElement = {}; // current material being edited //
  $scope.file = {}; // current file being edited //
  $scope.inherentFunction = {}; // current inherent function being edited //

  // initial setup
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
      $scope.materialCopy = angular.copy($scope.material);
      $scope.loader = false;
    }).error(function (data, status, headers, config) {
      console.log("Error")
    });   



  // opens material edit form //
  $scope.openMaterialEditForm = function(me,index,type) {
    if (index!=-1) {
      $scope.materialElement = angular.copy(me);
      $scope.materialElementFormIndex = index;
    }
    else {
      console.log('this is an add. Create empty object')
    };
  };
  // cancel material element edit //
  $scope.cancelMaterialElement = function (index, me) {
    console.log('dont do anything. Original Material stays as is');
    $scope.materialElementFormIndex = -1;
  };
  // save material element //
  // this will be rest service //
  $scope.saveMaterialElement = function(index, me) {
    $scope.material['materialElements'][index] = me;
    $scope.materialElementFormIndex = -1;
  };

  // open the inherent function edit form //
  $scope.openInherentFunctionForm = function (index, parentIndex, inherentFunction) {
    if (index != -1) {
      $scope.inherentFunction = angular.copy(inherentFunction);
      $scope.inherentFunctionFormIndex = index;
    }
    else {
      console.log('this is an add. Create empty object')
    };
    if ($scope.showInherentFunctionForm == false) {
      $scope.showInherentFunctionForm = true;
    };
  };
  // save inherent function //
  // this will be rest service //
  $scope.saveInherentFunction = function (index, i) {
    $scope.materialElement['inherentFunctionList'][index] = i;
    console.log($scope.materialElement['inherentFunctionList'][index])
    $scope.inherentFunctionFormIndex = -1;
  };
  // cancel inherent function //
  $scope.cancelInherentFunction = function (index, i) {
    console.log('dont do anything. Original Material stays as is');
    $scope.inherentFunctionFormIndex = -1;
  };

  // submit the entire synthesis material //
  $scope.doSubmit = function () {
    $http({ method: 'POST', url: '/caNanoLab/rest/synthesisMaterial/submit', data: $scope.material }).
      success(function (data, status, headers, config) {
        console.log('success')
      }).
      error(function (data, status, headers, config) {
        console.log('fail')
      });
  };

});