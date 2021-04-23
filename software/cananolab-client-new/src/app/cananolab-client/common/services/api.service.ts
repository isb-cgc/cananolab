// ----------------------------------------------------------------------------------------------------
// -----------------    Access to the server will all go through this service        ------------------
// ----------------------------------------------------------------------------------------------------

import { Injectable } from '@angular/core';
import { Properties } from '../../../../assets/properties';
import { UtilService } from './util.service';
import { Consts } from '../../../constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { timeout } from 'rxjs/operators';

@Injectable( {
    providedIn: 'root'
} )
export class ApiService{

    currentlyGettingToken = false;

    constructor( private httpClient: HttpClient, private utilService: UtilService,
                 private router: Router ){
        // If we don't have an API Url, set it to the same server as the client.
        if( (this.utilService.isNullOrUndefined( Properties.API_SERVER_URL )) || (Properties.API_SERVER_URL.length < 1) ){
            Properties.API_SERVER_URL = location.origin.toString();
        }
        console.log( 'MHL ApiService have URL: ', Properties.API_SERVER_URL );
    }

    /**
     * @TODO
     *
     * @param queryType
     * @param query
     */
    doPost( queryType, query ) {
        // return this.httpClient.post( simpleSearchUrl, query, options ).pipe( timeout( Properties.HTTP_TIMEOUT ) );
    }

    /**
     * @TODO
     *
     * @param queryType
     * @param query
     */
    doGet( queryType, query ) {
        //   results = this.httpClient.get( getUrl, options ).pipe( timeout( Properties.HTTP_TIMEOUT ) );
        //   return results;
    }



    /*
        doPost( queryType, query ) {
            let simpleSearchUrl = Properties.API_SERVER_URL + '/nbia-api/services/' + queryType;
            if( Properties.DEBUG_CURL ){
                let curl = 'curl -H \'Authorization:Bearer  ' + this.accessTokenService.getAccessToken() + '\' -k \'' + Properties.API_SERVER_URL + '/nbia-api/services/' + queryType + '\' -d \'' + query + '\'';
                console.log( 'doPost: ', curl );
            }

            let headers = null;

            // @CHECKME These two are the same?
            if( queryType === Consts.UPDATE_COLLECTION_DESCRIPTION ){
                headers = new HttpHeaders( {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + this.accessTokenService.getAccessToken()
                } );
            }else{
                headers = new HttpHeaders( {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + this.accessTokenService.getAccessToken()
                } );
            }


            let options;

            // These are returned as text not JSON (which is the default return format).
            if( queryType === Consts.UPDATE_COLLECTION_DESCRIPTION ||
                queryType === Consts.SUBMIT_SERIES_DELETION ||
                queryType === Consts.SUBMIT_ONLINE_DELETION ||
                queryType === Consts.SUBMIT_COLLECTION_LICENSES ||
                queryType === Consts.SUBMIT_DELETE_COLLECTION_LICENSES ||
                queryType === Consts.SUBMIT_QC_STATUS_UPDATE
            ){
                options = {
                    headers: headers,
                    responseType: 'text' as 'text'
                };
            }else{
                options = {
                    headers: headers
                };
            }
            return this.httpClient.post( simpleSearchUrl, query, options ).pipe( timeout( Properties.HTTP_TIMEOUT ) );
        }
    */


    login( user, password ){

    }

    /**
     * Authenticates user with the server.
     *
     * @TODO This is still mostly a copy of NBIA - Still getting error.
     *
     * @param user
     * @param password
     */
    getAccessTokenFromServer( user, password ){
        if( this.currentlyGettingToken ){
            return;
        }

        if( user.length > 0 && password.length > 0 ){
            this.currentlyGettingToken = true;
            //   this.setAccessTokenStatus( TokenStatus.NO_TOKEN_YET );

            let post_url = Properties.API_SERVER_URL + '/' + Consts.API_ACCESS_TOKEN_URL;
            let headers = new HttpHeaders( { 'Content-Type': 'application/x-www-form-urlencoded' } );
            let data = 'username=' + user + '&password=' + password;

            if( Properties.DEBUG_CURL ){
                let curl = 'curl  -v -d  \'' + data + '\' ' + ' -X POST -k \'' + post_url + '\'';
                console.log( 'getAccessToken: ' + curl );
            }

            let options =
                {
                    headers: headers,
                    method: 'post'
                };

            this.httpClient.post( post_url, data, options ).pipe( timeout( Properties.HTTP_TIMEOUT ) ).subscribe(
                loginReturnData => {
                    console.log( 'MHL loginReturnData: ', loginReturnData );
                },
                err => {
                    console.error( 'Login error[' + err.status + ']: ', err.message );
                    alert( 'Login error[' + err.status + ']: ' +
                        '\n' + err.message );
                    this.currentlyGettingToken = false;
                }
            );

        }
        // END if user length > 0
        else{
            console.log( 'MHL Get refresh token' );
            //  this.getAccessTokenWithRefresh( this.getRefreshToken() );
        }
    }


}

/*
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
          $location.path("/").replace();
          // $route.reload();

          //Set tabs here.. Delete on logout. Use variable instead of rest call

        }).
        catch(function (data, status, headers, config) {
          data = data['data']
          $scope.password = '';
          $scope.authErrors = data;
        });
      }
    }
 */
