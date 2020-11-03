'use strict';
var app = angular.module('angularApp')
.controller('EditSynthesisMaterialsCtrl', function (sampleService,utilsService,navigationService, groupService, $rootScope,$scope,$http,$location,$filter,$modal,$routeParams) {
  $scope.tempShow = false;
  $scope.dropdowns = {};
  $scope.currentFile = {}; // current file being edited //
  $scope.fileArray = [];
  $scope.inherentFunction = {}; // current inherent function being edited //
  $scope.inherentFunctionFormIndex = null;
  $scope.fileFormIndex = null;
  $scope.materialElement = {}; // current material being edited //
  $scope.materialElementFormIndex = null;
  $scope.materialEditUrl = `/caNanoLab/rest/synthesisMaterial/edit?sampleId=${$scope.sampleId}&synMaterialId=${$scope.synMaterialId}`
  $scope.sampleId = $location.search()['sampleId'];  
  $scope.sampleName = '';
  $scope.synMaterialId = $location.search()['synMaterialId'];
  $scope.sampleName = sampleService.sampleName($scope.sampleId);
  $scope.fileId = null;

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

  // cancel file //
  $scope.cancelFile = function() {
    $scope.fileFormIndex = null;
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

  // gets file conditions to make save file button enabled or disabled //
  $scope.getFileConditions = function() {
    let saveButtonDisabled = false;
    if ($scope.fileId) { // file is existing //
      if ($scope.currentFile.uriExternal) { // file is external //
        saveButtonDisabled = !$scope.currentFile.externalUrl || !$scope.currentFile.type || !$scope.currentFile.title ? true:false;
      }
      else { // file is internal. Do not have to check file //
        saveButtonDisabled = !$scope.currentFile.title || !$scope.currentFile.type ? true : false;    
      };
    }
    else { // file is new //
      if ($scope.currentFile.uriExternal) { // file is external //
        saveButtonDisabled = !$scope.currentFile.externalUrl || !$scope.currentFile.type || !$scope.currentFile.title ? true : false;
      }
      else { // file is internal. Do not have to check file //
        saveButtonDisabled = !$scope.currentFile.title || !$scope.currentFile.type || !$scope.fileObject ? true : false;
      };
    };
    return saveButtonDisabled;
  };

  // open the file edit form //
  $scope.openFileForm = function (index, parentIndex, file) {
    $scope.uploadComplete = false;
    $scope.uploadError = false;

    $scope.fileObject = null;
    $('#uploadFile')[0].value = "";
    $scope.uploadError = null;
    $scope.fileId = null;
    $scope.fileErrorMessage = null;
    // uriExternal: true
    // externalUrl: https://google.com/fake.txt
    // type: document
    // title: test
    // keywordsStr: abc
    // description: 123
    // myFile: (binary)
    
    // uriExternal: false
    // type: document
    // title: title
    // keywordsStr: abc
    // description: 1234
    // myFile: (binary)

    if (index != -1) {
      $scope.fileFormIndex = index;
      $scope.fileId = file['id'];
      $scope.currentFile = { 
        "uri":file.uri, "uriExternal": file.uriExternal, 
        "externalUrl":file.externalUrl,"type":file.type,
        "title":file.title, "description":file.description }; // //
      console.log($scope.currentFile)
    }
    else {
      $scope.currentFile = {
        "uri": "", "uriExternal": false,
        "externalUrl": null, "type": "",
        "title": "", "description": ""
      }; // //
      $scope.fileFormIndex = index;
    };
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

  // save file //
  $scope.saveFile = function() {
    if ($scope.fileObject && !$scope.currentFile.uriExternal) {
      $scope.uploadFile();

      // watch upload complete //
      $scope.$watch('uploadComplete', function () {
        console.log($scope.uploadComplete)

        if ($scope.uploadComplete) {
          $scope.fileFormIndex = null;
          console.log('upload complete. Add to file')
        };
      });

      

      // watch upload error //
      $scope.$watch('uploadError', function () {
        if ($scope.uploadError) {
          $scope.fileErrorMessage = 'Error Uploading File';
        };
      });
    
    }
    else {
      console.log('just save. No new file or no file at all')
    }
  };

  // uploads file to server //
  $scope.uploadFile = function() {
    console.log('i am uploading')
    var fd = new FormData(); // create new form data object //
    fd.append('file', $scope.fileObject);
    $http.post('/caNanoLab/rest/core/uploadFile', fd, { withCredentials: false, headers: { 'Content-Type': undefined }, transformRequest: angular.identity }).
      success(function (data, status, headers, config) {
        $scope.uploadComplete = true;
      }).
      error(function (data, status, headers, config) {
        $scope.uploadError = true;
        $scope.fileErrorMessage = 'Error Uploading File';
      });
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
    // $scope.fileMaterial = angular.copy($scope.material);
    // $scope.fileMaterial['fileBeingEdited'] = { "uri": $scope.somefile.name, "title": "test", "type": "document", "uriExternal": false };
    // $http({ method: 'POST', url: '/caNanoLab/rest/synthesisMaterial/saveFile', data: $scope.fileMaterial }).
    //   success(function (data, status, headers, config) {
    //     $location.search({ 'message': 'Synthesis Material successfully saved.', 'sampleId': $scope.sampleId }).path('/editSynthesis').replace();
    //   }).
    //   error(function (data, status, headers, config) {
    //     console.log('fail')
    //   });

    $http({ method: 'POST', url: '/caNanoLab/rest/synthesisMaterial/submit', data: $scope.material }).
      success(function (data, status, headers, config) {
        $location.search({ 'message': 'Synthesis Material successfully saved.', 'sampleId': $scope.sampleId }).path('/editSynthesis').replace();
      }).
      error(function (data, status, headers, config) {
        console.log('fail')
      });   
  };

  // sets external url to true or false for current file //
  $scope.setFileType = (fileType) => {
    fileType ? $scope.currentFile.uriExternal = true : $scope.currentFile.uriExternal = false;
  };

  $scope.setPageTitle = () => $scope.synMaterialId == -1 ? `Add ${$scope.sampleName.name} Synthesis - Material` : `Edit ${$scope.sampleName.name} Synthesis - Material`;
});
