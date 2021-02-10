'use strict';
var app = angular.module('angularApp');
app.factory("sampleService", function ($http) {
	var that = this;
	// Service keeps data search results and current sample in memory to pass between controllers //
	return {
		sampleData: {
			data: null
		},
		sampleId: {
			data: null
		},
		type: {
			data: null
		},
		charId: {
			data: null
		},
		charClassName: {
			data: null
		},
		isEdit: {
			data: null
		},
		scratchPad: {
			data: null
		},
		pocData: {
			data: null
		},
		message: {
			data: null
		},
		simpleDialog: function () {},
		sampleQueries: [],
		compositionQueries: [],
		characterizationQueries: [],
		sampleName: function (sampleId) {
			that.name = "";
			$http({
				method: 'GET',
				url: '/caNanoLab/rest/sample/getCurrentSampleName?sampleId=' + sampleId
			}).
			then(function (data, status, headers, config) {
				data = data['data']
				that.name = data.sampleName;
			}).
			catch(function (data, status, headers, config) {
				data = data['data']
			});
			return that;
		}
	}

});