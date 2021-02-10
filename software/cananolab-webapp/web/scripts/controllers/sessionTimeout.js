'use strict';
var app = angular.module('angularApp')
	.controller('SessionTimeoutCtrl', function ($rootScope, $scope, $modalInstance, $interval, $http, $location, loginService) {
		window.ls = loginService;
		var timeoutTime = 300;
		$scope.displayTime = "5 minutes";

		$scope.calculateTime = function () {
			timeoutTime -= 1;
			var minutes = Math.floor(timeoutTime / 60).toString();
			var seconds = (timeoutTime - minutes * 60).toString();
			var timeString = "";
			var minuteString = "minutes";
			var secondString = "seconds";
			if (minutes == "1") {
				minuteString = "minute";
			};
			if (seconds == "1") {
				secondString = "second";
			};

			if (seconds == "0") {
				timeString = minutes + ' ' + minuteString;
			} else if (minutes == "0") {
				timeString = seconds + ' ' + secondString
			} else {
				timeString = minutes + ' ' + minuteString + ' and ' + seconds + ' ' + secondString;
			};
			return timeString;
		};

		// timer for logout countdown //
		var popupinterval = $interval(function () {
			$modalInstance.close();
			logout();
			$rootScope.modalOpen = false;
		}, 300000, 1); // 5 minutes (5*60*1000 milliseconds)

		// timer to set time every second //
		var timeDisplayed = $interval(function () {
			$scope.displayTime = $scope.calculateTime();
		}, 1000, $scope.timeoutTime);

		$modalInstance.result.then(function () {},
			function () {
				$interval.cancel(popupinterval);
				$interval.cancel(timeDisplayed);

				console.log("user closed window")
				$rootScope.modalOpen = false;
				$http({
					method: 'GET',
					url: '/caNanoLab/rest/core/getTabs'
				}) // send heartbeat type call //
			});

		function logout() {
			$http({
				method: 'GET',
				url: '/caNanoLab/logout'
			}).
			then(function (data, status, headers, config) {
				data = data['data']
				$rootScope.groups = null;
				$rootScope.loggedInUser = '';
				loginService.setMessage("You have been logged out due to inactivity.")
				$location.path('/login').replace();
			});
		};

		$scope.close = function () {
			$interval.cancel(popupinterval);
			$interval.cancel(timeDisplayed);
			$modalInstance.close();
			$rootScope.modalOpen = false;
			$http({
				method: 'GET',
				url: '/caNanoLab/rest/core/getTabs'
			}) // send heartbeat type call //				
		};
	});