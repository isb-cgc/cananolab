'use strict';
var app = angular.module('angularApp')
  .controller('IndSampleCtrl', function (sampleService, navigationService, utilsService, groupService, $rootScope, $scope, $http, $filter, $location, $routeParams) {
    $rootScope.tabs = navigationService.get();
    $rootScope.groups = groupService.getGroups.data.get();
    $scope.sampleData = sampleService.sampleData;
    $scope.isAdvancedSearch = sampleService.isAdvancedSearch;
    console.log($scope.isAdvancedSearch)
    // $scope.data = {"sampleId":27131906,"sampleName":"UMC_HSTVAMC_NCL_NB-NChandaNNBM2010-01","pointOfContact":null,"composition":null,"functions":null,"characterizations":null,"dataAvailability":null,"createdDate":1275683278000,"keywords":"BIOCOMPATIBILITY<br>GOLD<br>GUM ARABIC","pointOfContactMap":{"organizationDisplayName":["UMC_RadiolD<br>Department of Radiology<br>University of Missouri-Columbia<br>Columbia MO 65212 USA","UMC_RadiolD<br>Department of Radiology<br>University of Missouri-Columbia<br>Columbia MO 65212 USA"],"primaryContact":["true","false"],"role":["investigator","investigator"],"contactPerson":["Raghuraman Kannan<br>kannanr@health.missouri.edu","Kattesh V Katti<br>kattik@health.missouri.edu"]},"pocBeanDomainId":27066372,"availableEntityNames":null,"caNanoLabScore":null,"mincharScore":null,"chemicalAssocs":null,"physicoChars":null,"invitroChars":null,"invivoChars":null,"caNano2MINChar":null,"caNanoMINChar":null};
    $scope.sampleId = sampleService.sampleId;
    console.log("View Sample Data")
    console.log($scope,$rootScope)
    if ($routeParams.isAdvancedSearch) {
      $scope.isAdvancedSearch = 1;
    };

    $scope.goBack = function () {
      if ($routeParams.fromMyWorkspace == 'true') {
        $location.path("/myWorkspace").replace();
        $location.search('sampleId', null);
        $location.search('fromMyWorkspace', null);
      } else {
        if ($scope.isAdvancedSearch) {
          $location.path("/advancedSampleResults").replace();
        }
        else {
          if ($routeParams.fromFavorites == 'true') {
            $location.path("/myFavorites").replace();
          }
          if ($routeParams.fromKeyword == 'true') {
            $location.path("/keywordSearchResults").replace();
          } else {
            $location.path("/sampleResults").replace();
          }
        }

        $location.search('sampleId', null);
      }
    };

    if ($routeParams.sampleId) {
      $scope.sampleId.data = $routeParams.sampleId;
    };


    $scope.exportJson = function () {
      $scope.loader = true;

      let postObject = new Object();
      postObject.sampleIds = $scope.sampleId.data;
      $http({
        url: '/rest/sample/fullSampleExportJsonAll',
        dataType: 'json',
        method: 'POST',
        data: postObject,
        headers: {
          "Content-Type": "application/json"
        }
      }).
      then(function (data) {
        data = data['data']
        let a = (window).document.createElement('a');
        a.href = (window).URL.createObjectURL(new Blob([JSON.stringify(data)], {
          type: 'application/json'
        }));
        a.download = 'caNanoLab_sample_data_' + $scope.sampleId.data + '.json';
        window.document.body.appendChild(a);
        a.click();
        (window).document.body.removeChild(a);
        $scope.loader = false;
      }).
      catch(function (data) {
        data = data['data']
        window.alert('ERROR: ' + data);
        $scope.loader = false;
        $scope.message = data;
      });
    };


    $scope.exportXml = function () {
      $scope.loader = true;

      let postObject = new Object();
      postObject.sampleIds = $scope.sampleId.data;
      $http({
        url: '/rest/sample/fullSampleExportXmlAll',
        dataType: 'json',
        method: 'POST',
        data: postObject,
        headers: {
          "Content-Type": "application/json"
        }
      }).
      then(function (data) {
        data = data['data']
        let a = (window).document.createElement('a');
        a.href = (window).URL.createObjectURL(new Blob([JSON.stringify(data)], {
          type: 'application/json'
        }));
        a.download = 'caNanoLab_sample_data_' + $scope.sampleId.data + '.xml';
        window.document.body.appendChild(a);
        a.click();
        (window).document.body.removeChild(a);
        $scope.loader = false;
      }).
      catch(function (data) {
        data = data['data']
        window.alert('ERROR: ' + data);
        $scope.loader = false;
        $scope.message = data;
      });
    };




    $scope.returnUserReadableBoolean = function (val) {
      if (val == 'true') {
        return "Yes";
      }
      return "No";
    }


    $scope.$on('$viewContentLoaded', function () {
      $scope.loader = true;
      $http({
        method: 'GET',
        url: '/rest/sample/view?sampleId=' + $scope.sampleId.data
      }).
      then(function (data, status, headers, config) {
        data = data['data']
        $scope.data = data;
        $scope.loader = false;
        $scope.sampleName = sampleService.sampleName($scope.sampleId.data);

      }).
      catch(function (data, status, headers, config) {
        data = data['data']
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        $scope.message = data;
        $scope.loader = false;

      });
    });



  });