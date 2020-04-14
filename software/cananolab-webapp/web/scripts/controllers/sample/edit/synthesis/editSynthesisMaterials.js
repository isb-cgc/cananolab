'use strict';

var app = angular.module('angularApp')
.controller('EditSynthesisMaterialsCtrl', function (sampleService,utilsService,navigationService, groupService, $rootScope,$scope,$http,$location,$filter,$modal,$routeParams) {
  // $scope.material = [];
  // $scope.materialCopy = []; // used if canceled //
  $scope.sampleName = '';
  $scope.sampleId = $location.search()['sampleId'];  
  $scope.synMaterialId = $location.search()['synMaterialId'];
  $scope.materialElementFormIndex = null;
  $scope.inherentFunctionFormIndex = null;
  $scope.materialEditUrl = `/caNanoLab/rest/synthesisMaterial/edit?sampleId=${$scope.sampleId}&synMaterialId=${$scope.synMaterialId}`
  $scope.dropdowns = {};

  $scope.materialElement = {}; // current material being edited //
  $scope.file = {}; // current file being edited //
  $scope.inherentFunction = {}; // current inherent function being edited //
  
  // initial setup for dropdowns //
  $http({ method: 'GET', url: `/caNanoLab/rest/synthesisMaterial/setup?sampleId=${$scope.sampleId}`}).
    success(function (data, status, headers, config) {
      $scope.dropdowns = data;
      $scope.loader = false;
    }).error(function (data, status, headers, config) {
      console.log("Error")
  });

  // function to return edit data for material //
  if ($scope.synMaterialId==-1) {
    // $scope.material = { 
    //   "errors": null, 
    //   "sampleId": $scope.sampleId, 
    //   "materialElements": [], 
    //   "fileElements": [], 
    //   "simpleProtocol": { "displayName": null }, 
    //   "type": null, 
    //   "description": null 
    // };
    $scope.material = { "sampleId": $scope.sampleId, "materialElements": [],"description":""};
  }
  else {
    $http({ method: 'GET', url: `/caNanoLab/rest/synthesisMaterial/edit?sampleId=${$scope.sampleId}&synMaterialId=${$scope.synMaterialId}` }).
      success(function (data, status, headers, config) {
        $scope.sampleName = sampleService.sampleName($scope.sampleId);
        $scope.material = data;
        $scope.materialCopy = angular.copy($scope.material);
        $scope.loader = false;
      }).error(function (data, status, headers, config) {
        console.log("Error")
      });  
  };




  // opens material edit form //
  $scope.openMaterialEditForm = function(me,index,type) {
    if (index!=-1) {
      $scope.materialElement = angular.copy(me);
      $scope.materialElementFormIndex = index;
    }
    else {
      $scope.materialElementFormIndex = -1;
      // $scope.materialElement = {
      //   "chemicalName":null,
      //   "createdBy":null,
      //   "description":null,
      //   "molecularFormula":null,
      //   "molecularFormulaType":null,
      //   "pubChemDataSource":null,
      //   "pubChemId":null,
      //   "supplierMap": { "Lot":null,"SupplierName": null},
      //   "type":null,
      //   "value":null,
      //   "valueUnit":null,
      //   "files": [],
      //   "inherentFunctionList": []
      // };
      $scope.materialElement = {};
    };
  };
  // cancel material element edit //
  $scope.cancelMaterialElement = function (index, me) {
    console.log('dont do anything. Original Material stays as is');
    $scope.materialElementFormIndex = null;
  };
  // save material element //
  // this will be rest service //
  $scope.saveMaterialElement = function(me) {
    if ($scope.materialElementFormIndex==-1) {
      $scope.material.materialElements.push($scope.materialElement)
    }
    else {
      console.log($scope.materialElementFormIndex, 'thisis index')
      $scope.material['materialElements'][$scope.materialElementFormIndex] = me;
    }
    $scope.materialElementFormIndex = null;
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
  // save inherent function //
  // this will be rest service //
  $scope.saveInherentFunction = function (i) {
    if ($scope.inherentFunctionFormIndex==-1) {
      // inherent function list is null. Create array //
      if (!$scope.materialElement.inherentFunctionList) {
        $scope.materialElement['inherentFunctionList']=[];
      };
      $scope.materialElement.inherentFunctionList.push($scope.inherentFunction)
    }
    else {
      $scope.materialElement.inherentFunctionList[$scope.inherentFunctionFormIndex]=$scope.inherentFunction;
    }
    // console.log($scope.inherentFunctionFormIndex,i)
    $scope.inherentFunctionFormIndex = null;
  };
  // cancel inherent function //
  $scope.cancelInherentFunction = function (index, i) {
    console.log('dont do anything. Original Material stays as is');
    $scope.inherentFunctionFormIndex = null;
  };

  // submit the entire synthesis material //
  $scope.doSubmit = function () {
    $http({ method: 'POST', url: '/caNanoLab/rest/synthesisMaterial/submit', data: $scope.material }).
      success(function (data, status, headers, config) {
        $location.search({ 'message': 'Synthesis Material successfully saved.', 'sampleId': $scope.sampleId }).path('/editSynthesis').replace();
      }).
      error(function (data, status, headers, config) {
        console.log('fail')
      });
  };

  // delete for material //
  $scope.doDelete = function() {
    if (confirm("Are you sure you want to delete?")) {
      $http({ method: 'POST', url: '/caNanoLab/rest/synthesisMaterial/delete', data: $scope.material }).
        success(function (data, status, headers, config) {
          $location.search({'message':'Synthesis Material successfully deleted.', 'sampleId':$scope.sampleId}).path('/editSynthesis').replace();

          // $scope.publicationForm = data;

          // $scope.groupAccesses = $scope.publicationForm.groupAccesses;
          // $scope.userAccesses = $scope.publicationForm.userAccesses;

          // if ($scope.userAccesses != null && $scope.userAccesses.length > 0) {
          //   $scope.accessExists = true;
          // }

          // if ($scope.groupAccesses != null && $scope.groupAccesses.length > 1) {
          //   $scope.accessExists = true;
          // }

          // $scope.loader = false;
        }).
        error(function (data, status, headers, config) {
          // $scope.loader = false;
          // $scope.messages = data;
        });
    };
  };

});