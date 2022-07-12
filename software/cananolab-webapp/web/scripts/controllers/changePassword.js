'use strict';
var app = angular.module('angularApp')
    .controller('ChangePasswordCtrl', function (navigationService, groupService, $rootScope, $scope, $http) {
        $scope.doChangePwd = function () {
            $scope.loader = true;
            // $scope.changePwd.username = $scope.userForm.username;
            $http({
                method: 'POST',
                url: '/rest/userself/savepwd',
                data: $scope.changePwd,
                transformRequest: function (obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).
            then(function (data, status, headers, config) {
                data = data['data']
                $scope.loader = false;
                $location.path("/").replace();
            }).
            catch(function (data, status, headers, config) {
                data = data['data']
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $scope.loader = false;
                $scope.messages = 'Error changing password for user with username "' + $scope.userForm.username + '"';
            });
        };

        $scope.cancelChangePwd = function () {
            $location.path("/").replace();
        };
    });
