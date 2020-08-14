'use strict';
var app = angular.module('angularApp')
  .controller('EditSynthesisPurificationCtrl', function (sampleService, utilsService, navigationService, groupService, $rootScope, $scope, $http, $location, $filter, $modal, $routeParams) {
    $scope.tempShow = false;
    $scope.dropdowns = {};
    $scope.currentFile = {}; // current file being edited //
    $scope.fileArray = [];
    $scope.technique = {}; // current inherent function being edited //
    $scope.techniqueFormIndex = null;
    $scope.fileFormIndex = null;
    $scope.sampleId = $location.search()['sampleId'];
    $scope.sampleName = '';
    $scope.dataId = $location.search()['dataId'];
    $scope.sampleName = sampleService.sampleName($scope.sampleId);
    $scope.fileId = null;

    // $scope.dummyData = { "errors": null, "sampleId": "1000", "id": 1000, "simpleProtocol": { "domainId": 66256896, "domainFileId": 66289664, "domainFileUri": "protocols/20200110_12-52-36-363_2020 Holiday & Pay Calendar.pdf", "displayName": "Synthesis Test Protocol (STP), version 1.0" }, "createdBy": "canano_user", "createdDate": 1575652500000, "type": "Interim Purification", "methodName": null, "designMethodDescription": "Test entry for synthesis purification", "analysis": "Analysis for synth 1", "yield": 84.7, "purityBeans": [{ "columnHeaders": [], "purityRows": [], "files": [{ "uriExternal": false, "uri": "https://evs.nci.nih.gov/ftp1/CTCAE/CTCAE_5.0/NCIt_CTCAE_5.0.xlsx", "type": "Excel", "title": "Synthesis File", "description": "dummy row for testing of synthesis", "keywordsStr": "", "id": 1333, "createdBy": "canano_curator", "createdDate": 1575652500000, "sampleId": "1000", "errors": null, "externalUrl": null, "theAccess": { "recipient": null, "recipientDisplayName": null, "accessType": null, "roleName": "", "roleDisplayName": "", "principal": false }, "isPublic": false }], "fileBeingEdited": null, "id": 1002, "createdBy": "canano_curator", "createdDate": 1566964800000 }, { "columnHeaders": [{ "columnName": "Purity datum 1", "conditionProperty": null, "valueType": "purity", "valueUnit": "%", "columnType": "purity datum", "displayName": "Purity datum 1<br>(purity,%)", "constantValue": "", "columnOrder": 1, "createdDate": 1575652500000 }, { "columnName": "Synthesis condition 1", "conditionProperty": "", "valueType": "observed", "valueUnit": "g", "columnType": "condition", "displayName": "Synthesis condition 1<br>(observed,g)", "constantValue": "", "columnOrder": 2, "createdDate": 1575652500000 }], "purityRows": [{ "cells": [{ "id": 1000, "value": "55.0", "datumOrCondition": "datum", "columnOrder": 1, "createdDate": 1575652500000, "createdBy": "canano_curator", "operand": "=" }, { "id": 1000, "value": "42", "datumOrCondition": "condition", "columnOrder": 2, "createdDate": 1575652500000, "createdBy": "canano_user", "operand": "=" }] }], "files": [], "fileBeingEdited": null, "id": 1000, "createdBy": "canano_curator", "createdDate": 1575652500000 }], "simpleExperimentBeans": [{ "openTechniqueInstrumentsFormniqueid": 1000, "techniqueDisplayName": "Interim purification technique(InP)", "techniqueType": "Interim purification technique", "abbreviation": "InP", "description": "Configuration for synthesis purification", "id": 1000, "dirty": false, "instruments": [{ "manufacturer": "Biome", "modelName": "Test Scale", "type": "scale", "id": 1000 }] }, { "techniqueid": 1000, "techniqueDisplayName": "Interim purification technique(InP)", "techniqueType": "Interim purification technique", "abbreviation": "InP", "description": "Configuration for purification 2", "id": 1001, "dirty": false, "instruments": [{ "manufacturer": "Invitrogen", "modelName": "Countess", "type": "cytometer", "id": 44793856 }, { "manufacturer": "Agilent", "modelName": "1200", "type": "HPLC system", "id": 62914561 }] }] }
    // $scope.dummyData2 = { "errors": null, "sampleId": "1000", "id": 1000, "simpleProtocol": { "domainId": 66256896, "domainFileId": 66289664, "domainFileUri": "protocols/20200110_12-52-36-363_2020 Holiday & Pay Calendar.pdf", "displayName": "Synthesis Test Protocol (STP), version 1.0" }, "createdBy": "canano_user", "createdDate": 1575652500000, "type": "Interim Purification", "methodName": null, "designMethodDescription": "Test entry for synthesis purification", "analysis": "Analysis for synth 1", "yield": 84.7, "purityBeans": [{ "columnHeaders": [], "purityRows": [], "files": [{ "uriExternal": false, "uri": "https://evs.nci.nih.gov/ftp1/CTCAE/CTCAE_5.0/NCIt_CTCAE_5.0.xlsx", "type": "Excel", "title": "Synthesis File", "description": "dummy row for testing of synthesis", "keywordsStr": "", "id": 1333, "createdBy": "canano_curator", "createdDate": 1575652500000, "sampleId": "1000", "errors": null, "externalUrl": null, "theAccess": { "recipient": null, "recipientDisplayName": null, "accessType": null, "roleName": "", "roleDisplayName": "", "principal": false }, "isPublic": false }], "fileBeingEdited": null, "id": 1002, "createdBy": "canano_curator", "createdDate": 1566964800000 }, { "columnHeaders": [{ "columnName": "Purity datum 1", "conditionProperty": null, "valueType": "purity", "valueUnit": "%", "columnType": "purity datum", "displayName": "Purity datum 1<br>(purity,%)", "constantValue": "", "columnOrder": 1, "createdDate": 1575652500000 }, { "columnName": "Synthesis condition 1", "conditionProperty": "", "valueType": "observed", "valueUnit": "g", "columnType": "condition", "displayName": "Synthesis condition 1<br>(observed,g)", "constantValue": "", "columnOrder": 2, "createdDate": 1575652500000 }], "purityRows": [{ "cells": [{ "id": 1000, "value": "55.0", "datumOrCondition": "datum", "columnOrder": 1, "createdDate": 1575652500000, "createdBy": "canano_curator", "operand": "=" }, { "id": 1000, "value": "42", "datumOrCondition": "condition", "columnOrder": 2, "createdDate": 1575652500000, "createdBy": "canano_user", "operand": "=" }] }], "files": [], "fileBeingEdited": null, "id": 1000, "createdBy": "canano_curator", "createdDate": 1575652500000 }], "simpleExperimentBeans": [{ "techniqueid": 1000, "techniqueDisplayName": "Interim purification technique(InP)", "techniqueType": "Interim purification technique", "abbreviation": "InP", "description": "Configuration for synthesis purification", "id": 1000, "dirty": false, "instruments": [{ "manufacturer": "Biome", "modelName": "Test Scale", "type": "scale", "id": 1000 }] }, { "techniqueid": 1000, "techniqueDisplayName": "Interim purification technique(InP)", "techniqueType": "Interim purification technique", "abbreviation": "InP", "description": "Configuration for purification 2", "id": 1001, "dirty": false, "instruments": [{ "manufacturer": "Invitrogen", "modelName": "Countess", "type": "cytometer", "id": 44793856 }, { "manufacturer": "Agilent", "modelName": "1200", "type": "HPLC system", "id": 62914561 }] }] }
    // $scope.dummyData3 = { "errors": null, "sampleId": "1000", "id": 1000, "simpleProtocol": { "domainId": null, "domainFileId": null, "domainFileUri": null, "displayName": "" }, "createdBy": "canano_user", "createdDate": 1575652500000, "type": "Final Purification", "methodName": null, "designMethodDescription": "This is a new save", "analysis": "This is a new analysis", "yield": 6969, "purityBeans": [{ "columnHeaders": [{ "columnName": "Purity datum 1", "conditionProperty": null, "valueType": "purity", "valueUnit": "%", "columnType": "purity datum", "displayName": "Purity datum 1<br>(purity,%)", "constantValue": "", "columnOrder": 1, "createdDate": 1575652500000 }, { "columnName": "Synthesis condition 1", "conditionProperty": "", "valueType": "observed", "valueUnit": "g", "columnType": "condition", "displayName": "Synthesis condition 1<br>(observed,g)", "constantValue": "", "columnOrder": 2, "createdDate": 1575652500000 }], "purityRows": [{ "cells": [{ "value": "55.0", "datumOrCondition": "datum", "columnOrder": 1, "createdDate": 1575652500000, "operand": "=" }, { "value": "42", "datumOrCondition": "condition", "columnOrder": 2, "createdDate": 1575652500000, "operand": "=" }] }, { "cells": [{ "value": "51.0", "datumOrCondition": "datum", "columnOrder": 1, "createdDate": 1575652500000, "operand": "=" }, { "value": "1000", "datumOrCondition": "condition", "columnOrder": 2, "createdDate": 1575652500000, "operand": "=" }] }], "files": [], "fileBeingEdited": null, "id": 1000, "createdBy": "canano_curator", "createdDate": 1575652500000 }, { "columnHeaders": [], "purityRows": [], "files": [{ "uriExternal": false, "uri": "https://evs.nci.nih.gov/ftp1/CTCAE/CTCAE_5.0/NCIt_CTCAE_5.0.xlsx", "type": "Excel", "title": "Synthesis File", "description": "dummy row for testing of synthesis", "keywordsStr": "", "id": 1000, "createdBy": "canano_curator", "createdDate": 1575652500000, "sampleId": "1000", "errors": null, "externalUrl": null, "theAccess": { "recipient": null, "recipientDisplayName": null, "accessType": null, "roleName": "", "roleDisplayName": "", "principal": false }, "isPublic": false }], "fileBeingEdited": null, "id": 1002, "createdBy": "canano_curator", "createdDate": 1566964800000 }], "simpleExperimentBeans": [{ "techniqueid": 1001, "techniqueDisplayName": "This is an edited technique", "techniqueType": "Interim purification technique", "abbreviation": "InP", "description": "Edited Configuartion Desc", "id": 1001, "dirty": true, "instruments": [{ "manufacturer": "Abbott", "modelName": "SomeModel", "type": "sometype", "id": 44793856 }, { "manufacturer": "Agilent", "modelName": "1200", "type": "HPLC system", "id": 62914561 }] }, { "techniqueid": 1000, "techniqueDisplayName": "Interim purification technique(InP)", "techniqueType": "Interim purification technique", "abbreviation": "InP", "description": "Configuration for synthesissadsdsadsd purification", "id": 1000, "dirty": false, "instruments": [{ "manufacturer": "Biome", "modelName": "Test Scale", "type": "scale", "id": 1000 }] }] }
    // $scope.dummyData4 = { "errors": null, "sampleId": "1000", "id": 1000, "simpleProtocol": { "domainId": null, "domainFileId": null, "domainFileUri": null, "displayName": "" }, "createdBy": "canano_user", "createdDate": 1575652500000, "type": "Final Purification", "methodName": null, "designMethodDescription": "This is a new save", "analysis": "This is a new analysis", "yield": 6969, "purityBeans": [{ "columnHeaders": [{ "columnName": "Purity datum 1", "conditionProperty": null, "valueType": "purity", "valueUnit": "%", "columnType": "purity datum", "displayName": "Purity datum 1<br>(purity,%)", "constantValue": "", "columnOrder": 1, "createdDate": 1575652500000 }, { "columnName": "Synthesis condition 1", "conditionProperty": "", "valueType": "observed", "valueUnit": "g", "columnType": "condition", "displayName": "Synthesis condition 1<br>(observed,g)", "constantValue": "", "columnOrder": 2, "createdDate": 1575652500000 }], "purityRows": [{ "cells": [{ "value": "55.0", "datumOrCondition": "datum", "columnOrder": 1, "createdDate": 1575652500000, "operand": "=" }, { "value": "42", "datumOrCondition": "condition", "columnOrder": 2, "createdDate": 1575652500000, "operand": "=" }] }, { "cells": [{ "value": "51.0", "datumOrCondition": "datum", "columnOrder": 1, "createdDate": 1575652500000, "operand": "=" }, { "value": "1000", "datumOrCondition": "condition", "columnOrder": 2, "createdDate": 1575652500000, "operand": "=" }] }], "files": [], "fileBeingEdited": null, "id": 1000, "createdBy": "canano_curator", "createdDate": 1575652500000 }, { "columnHeaders": [], "purityRows": [], "files": [{ "uriExternal": false, "uri": "https://evs.nci.nih.gov/ftp1/CTCAE/CTCAE_5.0/NCIt_CTCAE_5.0.xlsx", "type": "Excel", "title": "Synthesis File", "description": "dummy row for testing of synthesis", "keywordsStr": "", "id": 1000, "createdBy": "canano_curator", "createdDate": 1575652500000, "sampleId": "1000", "errors": null, "externalUrl": null, "theAccess": { "recipient": null, "recipientDisplayName": null, "accessType": null, "roleName": "", "roleDisplayName": "", "principal": false }, "isPublic": false }], "fileBeingEdited": null, "id": 1002, "createdBy": "canano_curator", "createdDate": 1566964800000 }], "simpleExperimentBeans": [{ "techniqueid": 1001, "techniqueDisplayName": "This is an edited technique", "techniqueType": "Interim purification technique", "abbreviation": "InP", "description": "Edited Configuartion Desc", "id": 1001, "dirty": true, "instruments": [{ "manufacturer": "Abbott", "modelName": "SomeModel", "type": "sometype", "id": 44793856 }, { "manufacturer": "Agilent", "modelName": "1200", "type": "HPLC system", "id": 62914561 }] }, { "techniqueid": 1000, "techniqueDisplayName": "Interim purification technique(InP)", "techniqueType": "Interim purification technique", "abbreviation": "InP", "description": "Configuration for synthesissadsdsadsd purification", "id": 1000, "dirty": false, "instruments": [{ "manufacturer": "Biome", "modelName": "Test Scale", "type": "scale", "id": 1000 }] }] }
    // $scope.dummyData5 = { "errors": null, "sampleId": "1000", "id": 1000, "simpleProtocol": { "domainId": null, "domainFileId": null, "domainFileUri": null, "displayName": "" }, "createdBy": "canano_user", "createdDate": 1575652500000, "type": "Final Purification", "methodName": null, "designMethodDescription": "This is a new save", "analysis": "This is a new analysis", "yield": 6969, "purityBeans": [{ "columnHeaders": [{ "columnName": "Purity datum 1", "conditionProperty": null, "valueType": "purity", "valueUnit": "%", "columnType": "purity datum", "displayName": "Purity datum 1<br>(purity,%)", "constantValue": "", "columnOrder": 1, "createdDate": 1575652500000 }, { "columnName": "Synthesis condition 1", "conditionProperty": "", "valueType": "observed", "valueUnit": "g", "columnType": "condition", "displayName": "Synthesis condition 1<br>(observed,g)", "constantValue": "", "columnOrder": 2, "createdDate": 1575652500000 }], "purityRows": [{ "cells": [{ "value": "55.0", "datumOrCondition": "datum", "columnOrder": 1, "createdDate": 1575652500000, "operand": "=" }, { "value": "42", "datumOrCondition": "condition", "columnOrder": 2, "createdDate": 1575652500000, "operand": "=" }] }, { "cells": [{ "value": "51.0", "datumOrCondition": "datum", "columnOrder": 1, "createdDate": 1575652500000, "operand": "=" }, { "value": "1000", "datumOrCondition": "condition", "columnOrder": 2, "createdDate": 1575652500000, "operand": "=" }] }], "files": [], "fileBeingEdited": null, "id": 1000, "createdBy": "canano_curator", "createdDate": 1575652500000 }, { "columnHeaders": [], "purityRows": [], "files": [{ "uriExternal": false, "uri": "https://evs.nci.nih.gov/ftp1/CTCAE/CTCAE_5.0/NCIt_CTCAE_5.0.xlsx", "type": "Excel", "title": "Synthesis File", "description": "dummy row for testing of synthesis", "keywordsStr": "", "id": 1000, "createdBy": "canano_curator", "createdDate": 1575652500000, "sampleId": "1000", "errors": null, "externalUrl": null, "theAccess": { "recipient": null, "recipientDisplayName": null, "accessType": null, "roleName": "", "roleDisplayName": "", "principal": false }, "isPublic": false }], "fileBeingEdited": null, "id": 1002, "createdBy": "canano_curator", "createdDate": 1566964800000 }], "simpleExperimentBeans": [{ "techniqueid": 1001, "techniqueDisplayName": "This is an edited technique", "techniqueType": "Interim purification technique", "abbreviation": "InP", "description": "Edited Configuartion Desc", "id": 1001, "dirty": true, "instruments": [{ "manufacturer": "Abbott", "modelName": "SomeModel", "type": "sometype", "id": 44793856 }, { "manufacturer": "Agilent", "modelName": "1200", "type": "HPLC system", "id": 62914561 }] }, { "techniqueid": 1000, "techniqueDisplayName": "Interim purification technique(InP)", "techniqueType": "Interim purification technique", "abbreviation": "InP", "description": "Configuration for synthesissadsdsadsd purification", "id": 1000, "dirty": false, "instruments": [{ "manufacturer": "Biome", "modelName": "Test Scale", "type": "scale", "id": 1000 }] }] }

    // initial setup for dropdowns //
    $http({ method: 'GET', url: `/caNanoLab/rest/synthesisPurification/setup?sampleId=${$scope.sampleId}` }).
      success(function (data, status, headers, config) {
        $scope.dropdowns = data;
        $scope.loader = false;
      }).error(function (data, status, headers, config) {
      });

    // function to return edit data for material //
    if ($scope.dataId == -1) {
      $scope.purification = { "sampleId": $scope.sampleId,  "designMethodDescription": "" };
    }
    else {
      $http({ method: 'GET', url: `/caNanoLab/rest/synthesisPurification/setupEdit?sampleId=${$scope.sampleId}&dataId=${$scope.dataId}` }).
        success(function (data, status, headers, config) {
          $scope.purification = data;
          $scope.purificationCopy = angular.copy($scope.purification);
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
    $scope.deleteInherentFunction = function (index, parentIndex, inherentFunction) {
      $scope.materialElement.inherentFunctionList.splice(index, 1);
    };

    // delete material element //
    $scope.deleteMaterialElement = function (me, index) {
      $scope.material.materialElements.splice(index, 1)
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
    $scope.openTechniqueInstrumentsForm = function (index, parentIndex, technique) {
      console.log(index)
      if (index != -1) {
        $scope.technique = angular.copy(technique);
        $scope.techniqueFormIndex = index;
      }
      else {
        $scope.technique = { "description": null, "type": null }
        $scope.techniqueFormIndex = index;
      };
    };


    // save file //
    $scope.saveFile = function () {
      $scope.uploadComplete = false;
      $scope.uploadError = false;

      if ($scope.fileObject && !$scope.currentFile.uriExternal) {
        $scope.uploadFile();

        // watch upload complete //
        $scope.$watch('uploadComplete', function () {
          if ($scope.uploadComplete) {
            console.log('upload complete', $scope.uploadComplete)
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
    $scope.openTechniqueInstruments = function (i) {
      if ($scope.techniqueFormIndex == -1) {
        if (!$scope.purification.instruments) {
          $scope.purification['instruments'] = [];
        };
        $scope.purification.instruments.push($scope.technique)
      }
      else {
        $scope.purification.instruments[$scope.inherentFunctionFormIndex] = $scope.technique;
      }
      $scope.inherentFunctionFormIndex = null;
    };

    // save material element //
    $scope.saveMaterialElement = function (me) {
      if ($scope.materialElementFormIndex == -1) {
        $scope.material.materialElements.push($scope.materialElement)
      }
      else {
        $scope.material['materialElements'][$scope.materialElementFormIndex] = me;
      }
      $scope.materialElementFormIndex = null;
    };

    // submit the entire synthesis material //
    $scope.savePurification = function () {
      // $scope.fileMaterial = angular.copy($scope.material);
      // $scope.fileMaterial['fileBeingEdited'] = { "uri": $scope.somefile.name, "title": "test", "type": "document", "uriExternal": false };
      // $http({ method: 'POST', url: '/caNanoLab/rest/synthesisMaterial/saveFile', data: $scope.fileMaterial }).
      //   success(function (data, status, headers, config) {
      //     $location.search({ 'message': 'Synthesis Material successfully saved.', 'sampleId': $scope.sampleId }).path('/editSynthesis').replace();
      //   }).
      //   error(function (data, status, headers, config) {
      //     console.log('fail')
      //   });

      $http({ method: 'POST', url: '/caNanoLab/rest/synthesisPurification/submit', data: $scope.purification }).
        success(function (data, status, headers, config) {
          $location.search({ 'message': 'Synthesis Purification successfully saved.', 'sampleId': $scope.sampleId }).path('/editSynthesis').replace();
        }).
        error(function (data, status, headers, config) {
          console.log('fail')
        });
    };

    // sets external url to true or false for current file //
    $scope.setFileType = (fileType) => {
      fileType ? $scope.currentFile.uriExternal = true : $scope.currentFile.uriExternal = false;
    };

    $scope.setPageTitle = () => $scope.dataId == -1 ? `Add ${$scope.sampleName.name} Synthesis - Purification` : `Edit ${$scope.sampleName.name} Synthesis - Purification`;



    $scope.testSave = () => {
      // $scope.fileMaterial = angular.copy($scope.material);
      // $scope.fileMaterial['fileBeingEdited'] = { "uri": $scope.somefile.name, "title": "test", "type": "document", "uriExternal": false };
      // $http({ method: 'POST', url: '/caNanoLab/rest/synthesisMaterial/saveFile', data: $scope.fileMaterial }).
      //   success(function (data, status, headers, config) {
      //     $location.search({ 'message': 'Synthesis Material successfully saved.', 'sampleId': $scope.sampleId }).path('/editSynthesis').replace();
      //   }).
      //   error(function (data, status, headers, config) {
      //     console.log('fail')
      //   });

      $http({ method: 'POST', url: '/caNanoLab/rest/synthesisPurification/savePurification', data: $scope.dummyData }).
        success(function (data, status, headers, config) {
          console.log(data)
          // $location.search({ 'message': 'Synthesis Material successfully saved.', 'sampleId': $scope.sampleId }).path('/editSynthesis').replace();
        }).
        error(function (data, status, headers, config) {
          console.log('fail')
        });
    };

    $scope.testSave2 = () => {
      // $scope.fileMaterial = angular.copy($scope.material);
      // $scope.fileMaterial['fileBeingEdited'] = { "uri": $scope.somefile.name, "title": "test", "type": "document", "uriExternal": false };
      // $http({ method: 'POST', url: '/caNanoLab/rest/synthesisMaterial/saveFile', data: $scope.fileMaterial }).
      //   success(function (data, status, headers, config) {
      //     $location.search({ 'message': 'Synthesis Material successfully saved.', 'sampleId': $scope.sampleId }).path('/editSynthesis').replace();
      //   }).
      //   error(function (data, status, headers, config) {
      //     console.log('fail')
      //   });

      $http({ method: 'POST', url: '/caNanoLab/rest/synthesisPurification/savePurification', data: $scope.dummyData3 }).
        success(function (data, status, headers, config) {
          console.log(data)
          // $location.search({ 'message': 'Synthesis Material successfully saved.', 'sampleId': $scope.sampleId }).path('/editSynthesis').replace();
        }).
        error(function (data, status, headers, config) {
          console.log('fail')
        });
    };    
  });

