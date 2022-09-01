'use strict';
var app = angular.module('angularApp')
  .controller('MainCtrl', function (sampleService, publicationService, protocolService, navigationService, groupService, $rootScope, $scope, $location, $http, $route, $cookies, $window) {

    if ($rootScope.loggedInUser && $rootScope.loggedInUser.length > 0 && $rootScope.loggedInUser != 'anonymousUser')
      $scope.loginShow = 0;
    else
      $scope.loginShow = 1;

    $scope.loginBlockShow = 1;
    $scope.resetPasswordShow = 1;

    $scope.loginId = '';
    $scope.password = '';

    $scope.authErrors = 0;
    $scope.homepage = true;
    $scope.errorMessages = [];
    $rootScope.tabs = navigationService.get({
      'homePage': 'true'
    });
    $rootScope.groups = groupService.getGroups.data.get();
    $scope.searchSampleForm = {};
    $scope.sampleData = sampleService.sampleData;
    $scope.publicationData = publicationService.publicationData;
    $scope.protocolData = protocolService.protocolData;

    $scope.$on('$viewContentLoaded', function () {
      $http({
        method: 'GET',
        url: '/rest/core/initSetup'
      }).
      then(function (data, status, headers, config) {
        data = data['data']
        $scope.numOfPublicProtocols = data.numOfPublicProtocols;
        $scope.numOfPublicCharacterizations = data.numOfPublicCharacterizations;
        $scope.numOfPublicInvitroCharacterizations = data.numOfPublicInvitroCharacterizations;
        $scope.numOfPublicInvivoCharacterizations = data.numOfPublicInvivoCharacterizations;
        $scope.numOfPublicOtherCharacterizations = data.numOfPublicOtherCharacterizations;
        $scope.numOfPublicPhysicoChemicalCharacterizations = data.numOfPublicPhysicoChemicalCharacterizations;
        $scope.numOfPublicPublications = data.numOfPublicPublications;
        $scope.numOfPublicSamples = data.numOfPublicSamples;
        $scope.numOfPublicSources = data.numOfPublicSources;
      }).
      catch(function (data, status, headers, config) {
        data = data['data']
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        //alert(data);
        $scope.authErrors = data;
      });
    });

    $scope.doUserAction = function () {
      $scope.errorMessages = [];
      if ($scope.userActions == 1) {
        $scope.loginShow = 0;
        window.location.href = "/#/searchSample";

      } else if ($scope.userActions == 2) {
        $scope.loginShow = 1;
        $scope.loginId = '';
        $scope.password = '';
        $scope.authErrors = 0;
      }
    }



    $scope.resetDo = function () {
      $scope.errorMessages = [];

      var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;
      var str = $scope.new_password;


      if (!$scope.reset_loginId) {
        $scope.errorMessages.push("LOGIN ID is required")
      }
      if (!$scope.old_password) {
        $scope.errorMessages.push("OLD PASSWORD is required")
      }
      if (!$scope.new_password) {
        $scope.errorMessages.push("NEW PASSWORD is required")
      } else {
        if (!re.exec(str)) {
          $scope.errorMessages.push("Password must contain 1 upper case letter, 1 lower case letter, 1 symbol and be 8 or more characters in length")
        } else {
          if ($scope.new_password != $scope.confirm_new_password) {
            $scope.errorMessages.push("NEW PASSWORD and CONFIRM PASSWORD do not match")
          }
        }
      }
      if (!$scope.confirm_new_password) {
        $scope.errorMessages.push("CONFIRM NEW PASSWORD is required")
      }
      if ($scope.new_password == $scope.old_password) {
        $scope.errorMessages.push("NEW PASSWORD and OLD PASSWORD must not be the same")
      }

      if (!$scope.errorMessages.length) {
        $scope.resettingPassword = 1;
        var bean = {
          'username': $scope.reset_loginId,
          'oldPassword': $scope.old_password,
          'newPassword': $scope.new_password,
          'confirmPassword': $scope.confirm_new_password
        }
        $http({
          method: 'POST',
          url: '/rest/security/resetPassword',
          data: bean
        }).
        then(function (data, status, headers, config) {
          data = data['data']
          $scope.loginShow = 1;
          $scope.resetPasswordShow = 0;
          $scope.authErrors = "Password successfully changed"; // piggybacking authErrors as they show up nicely below login form
          $scope.resettingPassword = 0;
        }).
        catch(function (data, status, headers, config) {
          data = data['data']
          $scope.errorMessages = [];
          $scope.errorMessages.push(data);
          $scope.resettingPassword = 0;
        });
      }
    }

    $scope.showResetPasswordBlock = function() {
      $scope.resetPasswordBlockShow = 1;
      $scope.loginBlockShow = 0;
    }
    
    $scope.resetPasswordDo = function() {
      if (!$scope.email) {
        $scope.authErrors = "Email is required to reset password";
      } else {
        // $scope.bean = {
        //   "email": $scope.email,
        // };
        $http({
          method: 'GET',
          url: '/rest/userself/resetpwd?email=' + $scope.email,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          // transformRequest: function (obj) {
          //   var str = [];
          //   for (var p in obj)
          //     str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          //   return str.join("&");
          // },
          data: $scope.bean
        }).
        then(function (data, status, headers, config) {
          data = data['data']
          // this callback will be called asynchronously
          // when the response is available

          $scope.authErrors = data;
          // $scope.loginShow = 0;
          // $location.path().replace();
          // $route.reload();

          //Set tabs here.. Delete on logout. Use variable instead of rest call

        }).
        catch(function (data, status, headers, config) {
          data = data['data']
          // $scope.email = '';
          $scope.authErrors = data;
        });
      }
    }

    $scope.showLoginBlock = function() {
      $scope.resetPasswordBlockShow = 0;
      $scope.loginBlockShow = 1;
    }

    $scope.loginDo = function () {
      if (!$scope.password || !$scope.loginId) {
        $scope.authErrors = "Username and Password are required";
      } else {
        $scope.bean = {
          "username": $scope.loginId,
          "password": $scope.password
        };
        $http({
          method: 'POST',
          url: 'login',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          transformRequest: function (obj) {
            var str = [];
            for (var p in obj)
              str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            return str.join("&");
          },
          data: $scope.bean
        }).
        then(function (data, status, headers, config) {
          data = data['data']
          // this callback will be called asynchronously
          // when the response is available
          $rootScope.loggedInUser = data;
          $scope.loginShow = 0;
          $location.path().replace();
          $route.reload();

          //Set tabs here.. Delete on logout. Use variable instead of rest call

        }).
        catch(function (data, status, headers, config) {
          data = data['data']
          $scope.password = '';
          $scope.authErrors = data;
        });
      }
    };

    $scope.doSearch = function (type) {
      $scope.loader = true;
      if (type == 'samples') {
        $http({
          method: 'POST',
          url: '/rest/sample/searchSample',
          data: $scope.searchSampleForm
        }).
        then(function (data, status, headers, config) {
          data = data['data']
          $scope.sampleData.data = data;
          $location.path("/sampleResults").replace();

        }).
        catch(function (data, status, headers, config) {
          data = data['data']
          $scope.loader = false;
          $scope.message = data;
        });
      };

      if (type == 'protocols') {

        $http({
          method: 'POST',
          url: '/rest/protocol/searchProtocol',
          data: $scope.searchSampleForm
        }).
        then(function (data, status, headers, config) {
          data = data['data']
          $scope.protocolData.data = data;
          $location.path("/protocolResults").replace();
        }).
        catch(function (data, status, headers, config) {
          data = data['data']
          $scope.loader = false;
          $scope.message = data;
        });
      };

      if (type == 'publications') {
        $http({
          method: 'POST',
          url: '/rest/publication/searchPublication',
          data: $scope.searchSampleForm
        }).
        then(function (data, status, headers, config) {
          data = data['data']
          $scope.publicationData.data = data;
          $location.path("/publicationResults").replace();

        }).
        catch(function (data, status, headers, config) {
          data = data['data']
          $scope.loader = false;
          $scope.message = data;
        });
      };

    };

    $scope.displayCredit = function (banner, state) {
      if (state) {
        $scope[banner] = true;
      } else {
        $scope[banner] = false;
      }
    }


  });