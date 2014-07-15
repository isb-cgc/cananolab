'use strict';
angular.module('angularApp',[
    'ngRoute'])
    .controller('PrintSamplePublicationCtrl', function ($rootScope,$scope,$http,$filter,$routeParams) {
        var sampleId = $routeParams.sampleId;
        $http({method: 'GET', url: 'http://localhost:8080/caNanoLab/rest/publication/summaryView?sampleId=' + sampleId}).
            success(function(data, status, headers, config) {
                $scope.publicationCategories = data.publicationCategories;
                $scope.publicationBean = data.publicationBean;
                $scope.category2Publications = data.category2Publications;
            }).
            error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $scope.message = data;

            });
        });