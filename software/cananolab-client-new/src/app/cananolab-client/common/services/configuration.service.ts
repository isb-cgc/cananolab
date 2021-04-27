import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilService } from './util.service';
import { Observable } from 'rxjs';
import { Properties } from '../../../../assets/properties';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService{

    constructor( private httpClient: HttpClient, private utilService: UtilService ){
    }

    initConfiguration(){

        this.readTextFile( 'assets/' + Properties.CONFIG_FILE ).subscribe(
            data => {

                this.parseConfig( data );
                Properties.CONFIG_COMPLETE = true;
                console.log('MHL Read from config file: ', data);
            },
            err => {
                if( err.status === 404 ){
                    console.error( 'Could not find CONFIG_FILE file "' + 'assets/' + Properties.CONFIG_FILE );
                }
                console.error( 'Could not access CONFIG_FILE file! ', err.status );
                Properties.CONFIG_COMPLETE = true;

            }
        );
    }

    readTextFile( file ): Observable<any>{
        return this.httpClient.get( file,
            {
                responseType: 'text'
            } );
    }

    parseConfig( data ){
        let config = data.replace( /\r\n/g, '\r' ).replace( /\n/g, '\r' ).split( /\r/ );

        for( let line of config ){
            if( line.match( '^\s*#' ) ){
            }else{
                if( line.includes( '=' ) ){
                    let value = line.replace( /.*?=\s*/, '' );
                    let key = line.replace( /\s*?=.*$/, '' );
                    key = key.replace( /^\s*/, '' );

/*

                    if( key === 'OHIF_SERVER_URL' ){
                        if( !this.utilService.isNullOrUndefinedOrEmpty( value ) ){
                            Properties.OHIF_SERVER_URL = value;
                        }
                    }

                    if( key === 'MAX_VIDEO_FPS' ){
                        if( !this.utilService.isNullOrUndefinedOrEmpty( value ) ){
                            Properties.MAX_VIDEO_FPS = value;
                        }
                    }

                    if( key === 'OHIF_MODALITIES' ){
                        // toUpperCase for case insensitive.
                        Properties.OHIF_MODALITIES = value.toUpperCase().split( /\s*,\s*!/ );
                    }
*/

                    if( key === 'TEST_MODE' ){
                        Properties.TEST_MODE = this.utilService.isTrue( value );
                    }


                }
            }
        }
    }
}
