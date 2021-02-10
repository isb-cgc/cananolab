'use strict';
var app = angular.module('angularApp')
	.controller('LogoutCtrl', function ($rootScope, $scope, $location, $http) {

		$http({
			method: 'GET',
			url: '/caNanoLab/logout'
		}).
		then(function (data, status, headers, config) {
			data = data['data']
			// this callback will be called asynchronously
			// when the response is available
			//alert(data);

			$scope.message = data;
			$rootScope.groups = null;
			$rootScope.loggedInUser = '';
			$location.path('/login?logout').replace();

		}).
		catch(function (data, status, headers, config) {
			data = data['data']
			// called asynchronously if an error occurs
			// or server returns response with an error status.
			//alert(data);
			$scope.message = data;
		});

	});