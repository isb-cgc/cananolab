'use strict';


var app = angular.module('angularApp')


app.controller('SynthesisCtrl', function (sampleService,utilsService,navigationService, groupService, $rootScope,$scope,$http,$location,$filter,$routeParams) {
    $rootScope.tabs = navigationService.get();
    $rootScope.groups = groupService.getGroups.data.get();
    $scope.sampleData = sampleService.sampleData;
    $scope.sampleId = sampleService.sampleId;
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
        $location.search('sampleId', null);
    };

    if ($routeParams.sampleId) {
        $scope.sampleId.data = $routeParams.sampleId;
    };

    $scope.select = function(tab) {
        console.log("SOMETHING HERE")
        var size = 3, key;
        for (var x=0; x<size;x++) {
            if (tab>=0) {
                if (x==tab){
                    $scope['show'+x]=false;                
                }
                else {
                    $scope['show'+x]=true;
                } 
            }    
            else {
                $scope['show'+x]=false;
            }      
        }
    }; 

    $scope.loader = true;
    $http({method: 'GET', url: '/caNanoLab/rest/synthesis/summaryView?sampleId=' + $scope.sampleId.data}).
    success(function(data, status, headers, config) {
        $scope.sampleName = sampleService.sampleName($scope.sampleId.data);
        $scope.compositionSections = data.compositionSections;
        $scope.nanomaterialentity = data.nanomaterialentity;
        $scope.functionalizingentity = data.functionalizingentity;
        $scope.chemicalassociation = data.chemicalassociation;
        $scope.synthesisentity = data.synthesisentity;
        $scope.compositionfile = data.compositionfile;
        $scope.sampleName = sampleService.sampleName($scope.sampleId.data);
        $scope.loader = false;

        $scope.nanomaterialentityEmpty = utilsService.isHashEmpty(data.nanomaterialentity);
        $scope.functionalizingentityEmpty = utilsService.isHashEmpty(data.functionalizingentity);
        $scope.chemicalassociationEmpty = utilsService.isHashEmpty($scope.chemicalassociation);
        $scope.compositionfileEmpty = utilsService.isHashEmpty(data.compositionfile);
        $scope.synthesisEmpty = utilsService.isHashEmpty(data.synthesisentity);
    });

});