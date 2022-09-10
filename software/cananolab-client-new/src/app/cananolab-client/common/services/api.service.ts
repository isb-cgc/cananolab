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
import {Observable, of, throwError} from 'rxjs';
import { TopMainMenuService } from '../../top-main-menu/top-main-menu.service';
import { timeoutWith } from 'rxjs/operators'

@Injectable( {
    providedIn: 'root'
} )
export class ApiService {

    currentlyAuthenticatingUser = false;
    authPromise = null;

    constructor( private httpClient: HttpClient, private utilService: UtilService,
                 private router: Router, private topMainMenuService: TopMainMenuService ){

        // If we don't have an API Url, set it to the same server as the client.
        // We should only have an API Url at this point if we are running in a development environment.
        if( (this.utilService.isNullOrUndefined( Properties.API_SERVER_URL )) || (Properties.API_SERVER_URL.length < 1) ){
            Properties.API_SERVER_URL = location.origin.toString();
        }

        // @TESTING Just to make sure we can talk to the server
        this.testRestCall();
        // END TESTING


    }

    getSampleName(sampleId) {
        let url = this.doGet(Consts.QUERY_SAMPLE_GET_SAMPLE_NAME,'sampleId='+sampleId);
        return url;
    }
    /**
     *  @TESTING These kind of functions will call api services, not be a part of it
     */

    getTabs() {
        return this.doGet(Consts.QUERY_GET_TABS,'');
    }

    testRestCall(){

        // If we are in test mode, we don't talk to the server
        if( Properties.TEST_MODE ){
            return;
        }

        this.doGet( Consts.QUERY_GET_TABS, '' ).subscribe(
            data => {
                if( data['tabs'][0][0] === 'HOME' ){
                }else{
                    console.error( 'Bad testRestCall answer from server!  testRestCall()' );
                }
            },
            ( err ) => {
                console.error( 'ERROR testRestCall [' + Consts.QUERY_GET_TABS + '] err: ', err.message );
            }
        );
    }

    // END TESTING

    getUserGroups() {
        return this.doGet(Consts.QUERY_GET_USER_GROUPS,'');
    }
    /**
     *
     * @param queryType
     * @param query
     */
    doPost( queryType, query: any,responseType=null ): Observable<any>{

        if( typeof query === 'object' ){
            query = JSON.stringify( query ); // .replace(/^{"/, '').replace(/"}$/, '')
        } else {
            // Change query to JSON format
            let re = /&/g;
            query = query.replace( re, '\',\'' );
            re = /=/g;
            query = query.replace( re, '\':\'' );

            re = /'/g;
            query = query.replace( re, '"' );

            query = '{"' + query + '"}';
        }
        // Test mode, return hard coded test data
        if( Properties.TEST_MODE ){
            return this.doTestPost( queryType, query );  // @FIXME Return this as a promise
        } else {
            // Not Test mode
            let simpleSearchUrl = Properties.API_SERVER_URL + '/' + queryType;
            simpleSearchUrl = simpleSearchUrl.replace(/(?<!:)\/+/g, "/");
            if( Properties.DEBUG_CURL ){
                let curl = 'curl -k \'' + simpleSearchUrl + '\' -d \'' + query + '\'';
            }

            let headers = null;
            headers = new HttpHeaders( {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + ' < AssessToken> '
            } );
            let options;

            // These are returned as text not JSON (which is the default return format).
            if( queryType === Consts.LOGIN_URL || queryType === Consts.QUERY_LOGOUT ||
                queryType === Consts.QUERY_CREATE_PROTOCOL) {
                options = {
                    headers: headers,
                    responseType: 'text' as 'text'
                };
            } else {
                options = {
                    headers: headers
                };
            }

            if (responseType) {
                options['responseType']=responseType;
            }
            return this.httpClient.post( simpleSearchUrl, query, options ).pipe( timeout( Properties.HTTP_TIMEOUT ) );
        }
    }


    /**
     * @FIXME this is an ONLY SLIGHTLY changed version of doPost - unify these
     * @param queryType
     * @param query
     */
    doPost0( queryType, query: any ): Observable<any>{
        if( typeof query === 'object' ){
            query = JSON.stringify( query ); // .replace(/^{"/, '').replace(/"}$/, '')
        } else {
            let re = /&/g;
            query = query.replace( re, '\',\'' );

            re = /=/g;
            query = query.replace( re, '\':\'' );

            re = /'/g;
            query = query.replace( re, '"' );
        }

        // Test mode, return hard coded test data
        if( Properties.TEST_MODE ){
            return this.doTestPost( queryType, query );  // @FIXME Return this as a promise
        } else {
            // Not Test mode
            let simpleSearchUrl = Properties.API_SERVER_URL + '/' + queryType;
            simpleSearchUrl = simpleSearchUrl.replace(/(?<!:)\/+/g, "/");
            if( Properties.DEBUG_CURL ){
                let curl = 'curl -k \'' + simpleSearchUrl + '\' -d \'' + query + '\'';
            }

            let headers = null;

            headers = new HttpHeaders( {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + ' < AssessToken> '
            } );

            let options;


            // These are returned as text not JSON (which is the default return format).
            if( queryType === Consts.LOGIN_URL || queryType === Consts.QUERY_CREATE_PROTOCOL) {
                options = {
                    headers: headers,
                    responseType: 'text' as 'text'
                };
            } else {
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
    doGet(queryType, query, responseType=null): Observable<string>{

        if( Properties.TEST_MODE ){
            return this.doTestGet( queryType, query );
        } else {
            let getUrl = Properties.API_SERVER_URL + '/' + queryType;
            getUrl = getUrl.replace(/(?<!:)\/+/g,"/");
            if( query !== undefined && query !== null && query.length > 0 ){
                getUrl += '?' + query;
            }

            if( Properties.DEBUG_CURL ){
                //  let curl = 'curl -H \'Authorization:Bearer  ' + ' < AssessToken> ' + '\' -k \'' + getUrl + '\'';
                let curl = 'curl -H  -k \'' + getUrl + '\'';
            }

            let headers = new HttpHeaders( {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*',  // @CHECKME
            } );

            let results;
            let options;

            if( queryType !== Consts.QUERY_SAMPLE_AVAILABILITY_HTML){
                options = {
                    headers: headers,
                    method: 'get'
                };
            } else {
                options = {
                    headers: headers,
                    method: 'get',
                    responseType: 'text'
                }
            }
            if (responseType) {
                options['responseType']=responseType;
            }
            results = this.httpClient.get( getUrl, options ).pipe( timeout( Properties.HTTP_TIMEOUT ) );

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
        let retPromise = new Observable<string>( null );
        switch( queryType ){
            case Consts.QUERY_GET_TABS:
                retPromise = of( TestData.QUERY_GET_TABS );
                break;
        }
        return retPromise;
    }


    /**
     * Authenticates user with the server.
     * We don't need an access toke back from the server.
     *
     * @param user
     * @param password
     */
    authenticateUser(user, password): Promise<string> {
        if(user.length <= 0 || password.length <= 0) {
            this.authPromise = Promise.reject("Username or password not provided!");
        } else {
            if(!this.currentlyAuthenticatingUser) {
                this.authPromise = new Promise<string>((resolve, reject) => {
                    this.currentlyAuthenticatingUser = true;
                    let post_url = Properties.API_SERVER_URL + '/' + Consts.LOGIN_URL;
                    post_url = post_url.replace(/(?<!:)\/+/g, "/");
                    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
                    let data = 'username=' + user + '&password=' + password;

                    if (Properties.DEBUG_CURL) {
                        let curl = 'curl  -v -d  \'' + data + '\' ' + ' -k \'' + post_url + '\'';
                    }

                    let options = {
                        responseType: <any>'text',
                        headers: headers,
                        method: 'post'
                    };
                    this.httpClient.post(post_url, data, options)
                        .pipe(timeoutWith(Properties.HTTP_TIMEOUT, throwError(new Error("User authentication timed out.")))).subscribe(
                        (loginReturnData) => {
                            Properties.LOGGED_IN = true;
                            Properties.logged_in = true;
                            Properties.current_user = user;
                            let tabs = [];
                            this.getTabs().subscribe(data => {
                                data['tabs'].forEach(element => {
                                    tabs.push(element[0].replace(' ', '_'));
                                    if (element[0] == 'CURATION') {
                                        tabs.push('RESULTS')
                                    }
                                });
                                this.topMainMenuService.showOnlyMenuItems(tabs);
                                this.currentlyAuthenticatingUser = false;
                                resolve(user);
                            });
                        },
                        // ERROR
                        (err) => {
                            alert('Login error[' + err.status + ']: ' +
                                '\n' + err.message);
                            this.currentlyAuthenticatingUser = false;
                            Properties.LOGGED_IN = false;
                            Properties.logged_in = false;
                            reject(err.message);
                        }
                    );
                });
            }
        }
        return this.authPromise;
    }
}

