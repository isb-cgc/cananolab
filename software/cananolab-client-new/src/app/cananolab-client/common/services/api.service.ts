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
import { TestData } from '../../../testData';
import { Observable, of } from 'rxjs';

@Injectable( {
    providedIn: 'root'
} )
export class ApiService{

    currentlyAuthenticatingUser = false;

    constructor( private httpClient: HttpClient, private utilService: UtilService,
                 private router: Router ){

        // If we don't have an API Url, set it to the same server as the client.
        // We should only have an API Url at this point if we are running in a development environment.
        if( (this.utilService.isNullOrUndefined( Properties.API_SERVER_URL )) || (Properties.API_SERVER_URL.length < 1) ){
            Properties.API_SERVER_URL = location.origin.toString();
        }

        // @TESTING Just to make sure we can talk to the server
        // console.log( 'MHL calling testRestCall()' );
        // this.testRestCall();
        // END TESTING

    }

    /**
     *  @TESTING These kind of functions will call api services, not be a part of it
     */
    testRestCall(){

        // If we are in test mode, we don't talk to the server
        if( Properties.TEST_MODE ){
            return;
        }

        this.doGet( Consts.QUERY_GET_TABS, '' ).subscribe(
            data => {
                if( data['tabs'][0][0] === 'HOME' ){
                    console.log( 'Good testRestCall test with server: ', data['tabs'][0][0] );
                }else{
                    console.error( 'Bad testRestCall answer from server!  testRestCall()' );
                }
            },
            ( err ) => {
                console.error( 'ERROR testRestCall [' + Consts.QUERY_GET_TABS + '] err: ', err.message );
            }
        );
        console.log( 'MHL LEAVING testRestCall [' + Consts.QUERY_GET_TABS + '] waiting on testRestCall response from Server.' );
    }
    // END TESTING

    /**
     *
     * @param queryType
     * @param query
     */
    doPost( queryType, query ): Observable<ArrayBuffer>{
        // return this.httpClient.post( simpleSearchUrl, query, options ).pipe( timeout( Properties.HTTP_TIMEOUT ) );
console.log('MHL doPost Properties.HTTP_TIMEOUT: ', Properties.HTTP_TIMEOUT);
        // Test mode, return hard coded test data
        if( Properties.TEST_MODE ){
            console.log( 'MHL Running doPost in TEST_MODE' );
            return this.doTestPost( queryType, query );  // @FIXME Return this as a promise
        }else{
            let simpleSearchUrl = Properties.API_SERVER_URL + '/' + queryType;
            if( Properties.DEBUG_CURL ){
                let curl = 'curl -k \'' + Properties.API_SERVER_URL + '/' + queryType + '\' -d \'' + query + '\'';
                console.log( curl );
            }

            let headers = null;

            headers = new HttpHeaders( {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + ' < AssessToken> '
            } );

            let options;



            // These are returned as text not JSON (which is the default return format).
            if( queryType === Consts.LOGIN_URL
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
    }

    /**
     * @TODO  call get results, or get error emitter, not return
     *
     * @param queryType
     * @param query
     */
    doGet( queryType, query ): Observable<string>{
        console.log('MHL doGet Properties.HTTP_TIMEOUT: ', Properties.HTTP_TIMEOUT);

        if( Properties.TEST_MODE ){
            console.log( 'MHL Running doGet in TEST_MODE CALLING doTestGet' );
            return this.doTestGet( queryType, query );
        }else{
            let getUrl = Properties.API_SERVER_URL + '/' + queryType;
            if( query !== undefined && query !== null && query.length > 0 ){
                getUrl += '?' + query;
            }

            if( Properties.DEBUG_CURL ){
                //  let curl = 'curl -H \'Authorization:Bearer  ' + ' < AssessToken> ' + '\' -k \'' + getUrl + '\'';
                let curl = 'curl -H  -k \'' + getUrl + '\'';
                console.log( 'MHL 001 doGet: ' + curl );
            }

            let headers = new HttpHeaders( {
                'Content-Type': 'application/x-www-form-urlencoded'
            } );

            let options = {
                headers: headers,
                method: 'get',
            };

            let results;

            results = this.httpClient.get( getUrl, options ).pipe( timeout( Properties.HTTP_TIMEOUT ) );


            // @TESTING can we look at the results before passing them along?  (Yes we can)
            results.subscribe( d1 => {
                    console.log( 'MHL 000 results: ', d1 );
                },
                e1 => {
                    console.log( 'MHL ERROR 001 results: ', e1.message );
                } );

            return results;
        }


    }

    /**
     * @TODO
     *
     * @param queryType
     * @param query
     */
    doTestPost( queryType, query ): Observable<any>{
        // return this.httpClient.post( simpleSearchUrl, query, options ).pipe( timeout( Properties.HTTP_TIMEOUT ) );
        return null;
    }

    /**
     *
     *
     * @param queryType  Ignored for now
     * @param query  The JSON or Text that will be returned.
     */
    doTestGet( queryType, query ): Observable<string>{
        console.log( 'MHL doTestGet queryType: ', queryType );
        console.log( 'MHL doTestGet query: ', query );
        let retPromise = new Observable<string>( null );

        switch( queryType ){
            case Consts.QUERY_GET_TABS:
                retPromise = of( TestData.QUERY_GET_TABS );
                break;


        }

        console.log( 'MHL retPromise: ', retPromise );
        return retPromise;
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
     * @param user
     * @param password
     */
    authenticateUser( user, password ){
        if( this.currentlyAuthenticatingUser ){
            return;
        }

        if( user.length > 0 && password.length > 0 ){
            this.currentlyAuthenticatingUser = true;

            let post_url = Properties.API_SERVER_URL + '/' + Consts.LOGIN_URL;
            let headers = new HttpHeaders( { 'Content-Type': 'application/x-www-form-urlencoded' } );
            let data = 'username=' + user + '&password=' + password;

            if( Properties.DEBUG_CURL ){
                let curl = 'curl  -v -d  \'' + data + '\' ' + ' -k \'' + post_url + '\'';
                console.log( curl );
            }

            let options =
                {
                    responseType: <any>'text',
                    headers: headers,
                    method: 'post'
                };

            this.httpClient.post( post_url, data, options ).pipe( timeout( Properties.HTTP_TIMEOUT ) ).subscribe(
                ( loginReturnData ) => {
                    console.log( 'Successful Login: ', loginReturnData );
                },
                // ERROR
                ( err ) => {
                    alert( 'Login error[' + err.status + ']: ' +
                        '\n' + err.message );
                    this.currentlyAuthenticatingUser = false;
                }
            );

        }
        // END if user length > 0
        else{
            console.log( 'MHL 805 authenticateUser' );
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
