'use strict';

var app = angular.module('angularApp')
.controller('EditSynthesisMaterialsCtrl', function (sampleService,utilsService,navigationService, groupService, $rootScope,$scope,$http,$location,$filter,$modal,$routeParams) {
  $scope.dropdowns = {};
  $scope.file = {}; // current file being edited //
  $scope.inherentFunction = {}; // current inherent function being edited //
  $scope.inherentFunctionFormIndex = null;
  $scope.materialElement = {}; // current material being edited //
  $scope.materialElementFormIndex = null;
  $scope.materialEditUrl = `/caNanoLab/rest/synthesisMaterial/edit?sampleId=${$scope.sampleId}&synMaterialId=${$scope.synMaterialId}`
  $scope.sampleId = $location.search()['sampleId'];  
  $scope.sampleName = '';
  $scope.synMaterialId = $location.search()['synMaterialId'];
  $scope.sampleName = sampleService.sampleName($scope.sampleId);

  // initial setup for dropdowns //
  $http({ method: 'GET', url: `/caNanoLab/rest/synthesisMaterial/setup?sampleId=${$scope.sampleId}`}).
    success(function (data, status, headers, config) {
      $scope.dropdowns = data;
      $scope.loader = false;
    }).error(function (data, status, headers, config) {
  });

  // function to return edit data for material //
  if ($scope.synMaterialId==-1) {
    $scope.material = { "sampleId": $scope.sampleId, "materialElements": [],"description":""};
  }
  else {
    $http({ method: 'GET', url: `/caNanoLab/rest/synthesisMaterial/edit?sampleId=${$scope.sampleId}&synMaterialId=${$scope.synMaterialId}` }).
      success(function (data, status, headers, config) {
        $scope.material = data;
        $scope.materialCopy = angular.copy($scope.material);
        $scope.loader = false;
      }).error(function (data, status, headers, config) {
      });  
  };

  // cancel inherent function //
  $scope.cancelInherentFunction = function (index, i) {
    console.log('dont do anything. Original Material stays as is');
    $scope.inherentFunctionFormIndex = null;
  };

  // cancel material element edit //
  $scope.cancelMaterialElement = function (me) {
    $scope.materialElementFormIndex = null;
  };

  // delete for material //
  $scope.deleteMaterial = function () {
    if (confirm("Are you sure you want to delete?")) {
      $http({ method: 'POST', url: '/caNanoLab/rest/synthesisMaterial/delete', data: $scope.material }).
        success(function (data, status, headers, config) {
          $location.search({ 'message': 'Synthesis Material successfully deleted.', 'sampleId': $scope.sampleId }).path('/editSynthesis').replace();
        }).
        error(function (data, status, headers, config) {
        });
    };
  };

  // deletes inherent function from material element //
  $scope.deleteInherentFunction = function(index, parentIndex, inherentFunction) {
    $scope.materialElement.inherentFunctionList.splice(index,1);
  };

  // delete material element //
  $scope.deleteMaterialElement = function(me,index) {
    $scope.material.materialElements.splice(index, 1)
  };

  // open the inherent function edit form //
  $scope.openInherentFunctionForm = function (index, parentIndex, inherentFunction) {
    if (index != -1) {
      $scope.inherentFunction = angular.copy(inherentFunction);
      $scope.inherentFunctionFormIndex = index;
    }
    else {
      $scope.inherentFunction = {"description":null, "type": null}
      $scope.inherentFunctionFormIndex = index;
    };
    if ($scope.showInherentFunctionForm == false) {
      $scope.showInherentFunctionForm = true;
    };
  };

  // opens material edit form //
  $scope.openMaterialEditForm = function(me,index,type) {
    if (index!=-1) {
      $scope.materialElement = angular.copy(me);
      $scope.materialElementFormIndex = index;
    }
    else {
      $scope.materialElementFormIndex = -1;
      $scope.materialElement = {};
    };
  };

  // save inherent function //
  $scope.saveInherentFunction = function (i) {
    if ($scope.inherentFunctionFormIndex == -1) {
      if (!$scope.materialElement.inherentFunctionList) {
        $scope.materialElement['inherentFunctionList'] = [];
      };
      $scope.materialElement.inherentFunctionList.push($scope.inherentFunction)
    }
    else {
      $scope.materialElement.inherentFunctionList[$scope.inherentFunctionFormIndex] = $scope.inherentFunction;
    }
    $scope.inherentFunctionFormIndex = null;
  };

  // save material element //
  $scope.saveMaterialElement = function(me) {
    if ($scope.materialElementFormIndex==-1) {
      $scope.material.materialElements.push($scope.materialElement)
    }
    else {
      $scope.material['materialElements'][$scope.materialElementFormIndex] = me;
    }
    $scope.materialElementFormIndex = null;
  };

  // submit the entire synthesis material //
  $scope.saveMaterial = function () {
    $http({ method: 'POST', url: '/caNanoLab/rest/synthesisMaterial/submit', data: $scope.material }).
      success(function (data, status, headers, config) {
        $location.search({ 'message': 'Synthesis Material successfully saved.', 'sampleId': $scope.sampleId }).path('/editSynthesis').replace();
      }).
      error(function (data, status, headers, config) {
        console.log('fail')
      });
  };

  $scope.setPageTitle = () => $scope.synMaterialId == -1 ? `Add ${$scope.sampleName.name} Synthesis - Material` : `Edit ${$scope.sampleName.name} Synthesis - Material`;
});