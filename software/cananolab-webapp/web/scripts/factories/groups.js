'use strict';

var app = angular.module('angularApp');
app.factory('groupService', function ($resource, $http) {
	var that = this;
	return {
		getGroups: {
			data: $resource('/caNanoLab/rest/security/getUserGroups')
		},
		isCurator: function (groups) {
			that.curator = 0;
			$http({
				method: 'GET',
				url: '/caNanoLab/rest/security/getUserGroups'
			}).
			then(function (data, status, headers, config) {
				data = data['data']

				var x = data;
				for (var key in x) {
					for (var y = 0; y < x[key].length; y++) {
						if (x[key][y] == 'Curator') {
							that.curator = 1;
						};
					};
				}
			}).
			catch(function (data, status, headers, config) {
				data = data['data']
				that.curator = "0";
			});
			return that;

		},
		getUserName: function () {
			that.name = '';
			$http({
				method: 'GET',
				url: '/caNanoLab/rest/security/getUserGroups'
			}).
			then(function (data, status, headers, config) {
				data = data['data']
				var x = data;
				for (var key in x) {
					that.name = key;
				}
			}).
			catch(function (data, status, headers, config) {
				data = data['data']
				that.name = '';
			});
			return that;

		}
	}
});