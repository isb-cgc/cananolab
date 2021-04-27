// ----------------------------------------------------------------------------------------------------
// -----------------    Access to the server will all go through this service        ------------------
// ----------------------------------------------------------------------------------------------------

import { EventEmitter, Injectable } from '@angular/core';
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

    currentlyGettingToken = false;

    constructor( private httpClient: HttpClient, private utilService: UtilService,
                 private router: Router ){

        // If we don't have an API Url, set it to the same server as the client.
        if( (this.utilService.isNullOrUndefined( Properties.API_SERVER_URL )) || (Properties.API_SERVER_URL.length < 1) ){
            Properties.API_SERVER_URL = location.origin.toString();
        }
        console.log( 'MHL ApiService have URL: ', Properties.API_SERVER_URL );

        // @TESTING
        // console.log( 'MHL calling testRestCall()' );
        // this.testRestCall();
        // END TESTING

    }

    // @TESTING These kind of functions will call api services, not be a part of it
    testRestCall(){
        console.log( 'MHL 200 IN testRestCall' );

        this.doGet( Consts.QUERY_GET_TABS, '' ).subscribe(
            data => {
                console.log( 'MHL *************** 201 testRestCall [' + Consts.QUERY_GET_TABS + '] data: ', data );
            },
            ( err ) => {
                console.log( 'MHL XXXXXXXXXXXXXXXXXX 202 testRestCall [' + Consts.QUERY_GET_TABS + '] err: ', err.message );
            }
        );

        console.log( 'MHL 210 LEAVING testRestCall [' + Consts.QUERY_GET_TABS + '] ' );
    }

    // END TESTING



    postResults( queryType, data ){
        switch( queryType ){

        }

    }

    getResults( queryType, data ){
        switch( queryType ){

        }

    }

    /**
     *
     * @param queryType
     * @param query
     */
    doPost( queryType, query ){
        // return this.httpClient.post( simpleSearchUrl, query, options ).pipe( timeout( Properties.HTTP_TIMEOUT ) );

        // Test mode, return hard coded test data
        if( Properties.TEST_MODE ){
            console.log( 'MHL Running doPost in TEST_MODE' );
            return this.doTestPost( queryType, query );  // @FIXME Return this as a promise
        }else{
            let simpleSearchUrl = Properties.API_SERVER_URL + '/nbia-api/services/' + queryType;
            if( Properties.DEBUG_CURL ){
                let curl = 'curl -H \'Authorization:Bearer  ' + ' < AssessToken> ' + '\' -k \'' + Properties.API_SERVER_URL + '/nbia-api/services/' + queryType + '\' -d \'' + query + '\'';
                console.log( 'doPost: ', curl );
            }

            let headers = null;

            headers = new HttpHeaders( {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + ' < AssessToken> '
            } );

            let options;

            // These are returned as text not JSON (which is the default return format).
            if( queryType === Consts.API_ACCESS_TOKEN_URL
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
        console.log( 'MHL ZZ IN doGet queryType: ', queryType );
        console.log( 'MHL ZZ IN doGet query: ', query );
        //   results = this.httpClient.get( getUrl, options ).pipe( timeout( Properties.HTTP_TIMEOUT ) );
        //   return results;

        if( Properties.TEST_MODE ){
            console.log( 'MHL Running doGet in TEST_MODE CALLING doTestGet' );
            return this.doTestGet( queryType, query );
        }else{
            let getUrl = Properties.API_SERVER_URL + '/' + queryType;

            if( Properties.DEBUG_CURL ){
                let curl = 'curl -H \'Authorization:Bearer  ' + ' < AssessToken> ' + '\' -k \'' + getUrl + '\'';
                console.log( '001 doGet: ' + curl );
            }

            let headers = new HttpHeaders( {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Bearer ' + ' < AssessToken> '
            } );

            let options = {
                headers: headers,
                method: 'get',
            };

            let results;

            console.log( 'MHL doGet [' + queryType + '] [' + query + ']: ', results );
            results = this.httpClient.get( getUrl, options ).pipe( timeout( Properties.HTTP_TIMEOUT ) );

            console.log( 'MHL results typeOf', typeof results );
            // @TESTING can we look at the results before passing them a long
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
    doTestPost( queryType, query ){
        // return this.httpClient.post( simpleSearchUrl, query, options ).pipe( timeout( Properties.HTTP_TIMEOUT ) );
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
                retPromise = of(TestData.QUERY_GET_TABS);
                break;


        }

        console.log('MHL retPromise: ', retPromise);
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
     * @FIXME This is still a lot like NBIA (BUT Still getting error).
     *
     * @param user
     * @param password
     */
    getAccessTokenFromServer( user, password ){
        console.log('MHL getAccessTokenFromServer');
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
                let curl = 'curl  -v -d  \'' + data + '\' ' + ' -k \'' + post_url + '\'';
                console.log( 'getAccessToken: ' + curl );
            }

            let options =
                {
                    headers: headers,
                    method: 'post'
                };

            this.httpClient.post( post_url, data, options ).pipe( timeout( Properties.HTTP_TIMEOUT ) ).subscribe(
                ( loginReturnData ) => {
                    console.log( 'MHL loginReturnData: ', loginReturnData );
                },
                // ERROR
                ( err ) => {
                    console.error( 'MHL Login error[' + err.status + ']post_url: ', post_url );
                    console.error( 'MHL Login error[' + err.status + ']data: ', data );
                    console.error( 'MHL Login error[' + err.status + ']options: ', options );
                    console.error( 'MHL Login error[' + err.status + ']status: ', err.status );
                    console.error( 'MHL Login error[' + err.status + ']message: ', err.message );
                    console.error( 'MHL Login error[' + err.status + ']err: ', err );
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
