'use strict';
var app = angular.module('angularApp')
  .controller('EditSynthesisFunctionalizationCtrl', function (sampleService, utilsService, navigationService, groupService, $rootScope, $scope, $http, $location, $filter, $modal, $routeParams) {
    $scope.tempShow = false;
    $scope.dropdowns = {};
    $scope.currentFile = {}; // current file being edited //
    $scope.fileArray = [];
    $scope.inherentFunction = {}; // current inherent function being edited //
    $scope.inherentFunctionFormIndex = null;
    $scope.fileFormIndex = null;
    $scope.functionalizationElement = {}; // current functionalization being edited //
    $scope.functionalizationElementFormIndex = null;
    $scope.functionalizationEditUrl = `/caNanoLab/rest/synthesisFunctionalization/edit?sampleId=${$scope.sampleId}&synFunctionalizationId=${$scope.synFunctionalizationId}`
    $scope.sampleId = $location.search()['sampleId'];
    $scope.sampleName = '';
    $scope.dataId = $location.search()['dataId'];
    $scope.sampleName = sampleService.sampleName($scope.sampleId);
    $scope.fileId = null;

    // initial setup for dropdowns //
    $http({ method: 'GET', url: `/caNanoLab/rest/synthesisFunctionalization/setup?sampleId=${$scope.sampleId}` }).
      success(function (data, status, headers, config) {
        $scope.dropdowns = data;
        $scope.loader = false;
      }).error(function (data, status, headers, config) {
      });

    // function to return edit data for functionalization //
    if ($scope.dataId == -1) {
      $scope.functionalization = { "sampleId": $scope.sampleId, "functionalizationElements": [], "description": "" };
    }
    else {
      $http({ method: 'GET', url: `/caNanoLab/rest/synthesisFunctionalization/edit?sampleId=${$scope.sampleId}&dataId=${$scope.dataId}` }).
        success(function (data, status, headers, config) {
          $scope.functionalization = data;
          $scope.functionalizationCopy = angular.copy($scope.functionalization);
          $scope.loader = false;
        }).error(function (data, status, headers, config) {
        });
    };

    // cancel file //
    $scope.cancelFile = function () {
      $scope.fileFormIndex = null;
    };

    // cancel inherent function //
    $scope.cancelInherentFunction = function (index, i) {
      console.log('dont do anything. Original Functionalization stays as is');
      $scope.inherentFunctionFormIndex = null;
    };

    // cancel functionalization element edit //
    $scope.cancelFunctionalizationElement = function (me) {
      $scope.functionalizationElementFormIndex = null;
    };

    // delete for functionalization //
    $scope.deleteFunctionalization = function () {
      if (confirm("Are you sure you want to delete?")) {
        $http({ method: 'POST', url: '/caNanoLab/rest/synthesisFunctionalization/delete', data: $scope.functionalization }).
          success(function (data, status, headers, config) {
            $location.search({ 'message': 'Synthesis Functionalization successfully deleted.', 'sampleId': $scope.sampleId }).path('/editSynthesis').replace();
          }).
          error(function (data, status, headers, config) {
          });
      };
    };

    // deletes inherent function from functionalization element //
    $scope.deleteInherentFunction = function (index, parentIndex, inherentFunction) {
      $scope.functionalizationElement.inherentFunctionList.splice(index, 1);
    };

    // delete functionalization element //
    $scope.deleteFunctionalizationElement = function (me, index) {
      $scope.functionalization.functionalizationElements.splice(index, 1)
    };

    // gets file conditions to make save file button enabled or disabled //
    $scope.getFileConditions = function () {
      let saveButtonDisabled = false;
      if ($scope.fileId) { // file is existing //
        if ($scope.currentFile.uriExternal) { // file is external //
          saveButtonDisabled = !$scope.currentFile.externalUrl || !$scope.currentFile.type || !$scope.currentFile.title ? true : false;
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
          "uri": file.uri, "uriExternal": file.uriExternal,
          "externalUrl": file.externalUrl, "type": file.type,
          "title": file.title, "description": file.description
        }; // //
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
        $scope.inherentFunction = { "description": null, "type": null }
        $scope.inherentFunctionFormIndex = index;
      };
    };

    // opens functionalization edit form //
    $scope.openFunctionalizationEditForm = function (me, index, type) {
      if (index != -1) {
        $scope.functionalizationElement = angular.copy(me);
        $scope.functionalizationElementFormIndex = index;
      }
      else {
        $scope.functionalizationElementFormIndex = -1;
        $scope.functionalizationElement = {};
      };
    };

    // save file //
    $scope.saveFile = function () {
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
    $scope.uploadFile = function () {
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
        if (!$scope.functionalizationElement.inherentFunctionList) {
          $scope.functionalizationElement['inherentFunctionList'] = [];
        };
        $scope.functionalizationElement.inherentFunctionList.push($scope.inherentFunction)
      }
      else {
        $scope.functionalizationElement.inherentFunctionList[$scope.inherentFunctionFormIndex] = $scope.inherentFunction;
      }
      $scope.inherentFunctionFormIndex = null;
    };

    // save functionalization element //
    $scope.saveFunctionalizationElement = function (me) {
      if ($scope.functionalizationElementFormIndex == -1) {
        $scope.functionalization.functionalizationElements.push($scope.functionalizationElement)
      }
      else {
        $scope.functionalization['functionalizationElements'][$scope.functionalizationElementFormIndex] = me;
      }
      $scope.functionalizationElementFormIndex = null;
    };

    // submit the entire synthesis functionalization //
    $scope.saveFunctionalization = function () {
      // $scope.fileFunctionalization = angular.copy($scope.functionalization);
      // $scope.fileFunctionalization['fileBeingEdited'] = { "uri": $scope.somefile.name, "title": "test", "type": "document", "uriExternal": false };
      // $http({ method: 'POST', url: '/caNanoLab/rest/synthesisFunctionalization/saveFile', data: $scope.fileFunctionalization }).
      //   success(function (data, status, headers, config) {
      //     $location.search({ 'message': 'Synthesis Functionalization successfully saved.', 'sampleId': $scope.sampleId }).path('/editSynthesis').replace();
      //   }).
      //   error(function (data, status, headers, config) {
      //     console.log('fail')
      //   });

      $http({ method: 'POST', url: '/caNanoLab/rest/synthesisFunctionalization/submit', data: $scope.functionalization }).
        success(function (data, status, headers, config) {
          $location.search({ 'message': 'Synthesis Functionalization successfully saved.', 'sampleId': $scope.sampleId }).path('/editSynthesis').replace();
        }).
        error(function (data, status, headers, config) {
          console.log('fail')
        });
    };

    // sets external url to true or false for current file //
    $scope.setFileType = (fileType) => {
      fileType ? $scope.currentFile.uriExternal = true : $scope.currentFile.uriExternal = false;
    };

    $scope.setPageTitle = () => $scope.synFunctionalizationId == -1 ? `Add ${$scope.sampleName.name} Synthesis - Functionalization` : `Edit ${$scope.sampleName.name} Synthesis - Functionalization`;
  });