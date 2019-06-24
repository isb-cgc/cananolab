'use strict';

var app = angular.module('angularApp')
.controller('EditSynthesisCtrl', function (sampleService,utilsService,navigationService, groupService, $rootScope,$scope,$http,$location,$filter,$modal,$routeParams) {
    $rootScope.tabs = navigationService.get();
    $rootScope.groups = groupService.getGroups.data.get();
    $scope.sampleData = sampleService.sampleData;
    $scope.sampleId = sampleService.sampleId;

    // Displays left hand nav for samples section. navTree shows nav and navDetail is page index //
    $scope.sampleData = sampleService.sampleData;

    if ($routeParams.isAdvancedSearch) {
      $scope.isAdvancedSearch = 1;
    };   

     $scope.goBack = function() {
        if ($scope.isAdvancedSearch) {
          $location.path("/advancedSampleSearch").replace();           
        }
        else {
          $location.path("/sampleResults").replace();           
        }
      $location.search('sampleId', null);      };
      
    if ($routeParams.sampleId) {
      $scope.sampleId.data = $routeParams.sampleId;
    };  
});