import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Consts } from '../../../../constants';
import { ApiService } from '../../../common/services/api.service';
import { UtilService } from '../../../common/services/util.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component( {
    selector: 'canano-protocol-view',
    templateUrl: './protocol-view.component.html',
    styleUrls: ['./protocol-view.component.scss']
} )
export class ProtocolViewComponent implements OnInit {
    currentRoute = 'protocol-view';
    data;
    downloadUrl = Consts.QUERY_DOWNLOAD_FILE;
    errors;
    existingData;
    externalUrl;
    haveDupStatus = false;
    toolHeadingName = 'View Protocol';
    isDup = false;
    message;
    protocolId;
    setupData = {};
    theAccess = {};
    helpUrl = Consts.HELP_URL_PROTOCOL_CREATE;
    viewOnly = true;

    constructor(
        private httpClient: HttpClient,
        private route: ActivatedRoute,
        private router: Router,
        private apiService: ApiService,
        private utilService: UtilService) {
    }

    ngOnInit(): void{
        this.route.params.subscribe(
            ( params: Params ) => {
                this.protocolId = params['protocolId'];
                if (params['message']) {
                    if (params['message'] === 'deleted') {
                        this.message = 'Protocol Deleted Successfully'
                    }
                    else {
                        this.message = 'Protocol Created Successfully'
                    }
                }
                this.init();
            });

        this.errors = {};
    }

    buildExternalUriForm(): FormData{
        let formData = new FormData();
        formData.append( 'uriExternal', 'true' );
        formData.append( 'review', 'false' );
        formData.append( 'isPublic', 'false' );
        formData.append( 'type', this.data.type );
        return formData;
    };

    duplicateCheck(){
        let formValues = this.data;
        let dupQuery = '';
        if( formValues['version'] === undefined ){
            dupQuery = 'protocolType=' + formValues['type'] + '&protocolName=' + formValues['name'];
        }else{
            dupQuery = 'protocolType=' + formValues['type'] + '&protocolName=' + formValues['name'] + '&protocolVersion=' + formValues['version'];
        }
        this.apiService.doGet( Consts.QUERY_GET_PROTOCOL, dupQuery ).subscribe(
            // It already exists
            data => {
                this.existingData = data;
                this.errors = {};
                this.isDup = true;
                this.haveDupStatus = true;
                return true;
            },

            // It does NOT already exist
            ( err ) => {
                this.isDup = false;
                this.haveDupStatus = true;
                return false;
            } );

    };

    init(){
        if (this.protocolId) {
            // Editing or Viewing
            this.currentRoute = 'edit-protocol';

            let url = this.apiService.doGet(Consts.QUERY_PROTOCOL_WRITE_ACCESS, 'protocolId=' + this.protocolId);
            url.subscribe(data => {
                    let hasWriteAccess = data;

                    this.apiService.doGet( Consts.QUERY_EDIT_PROTOCOL, 'protocolId=' + this.protocolId ).subscribe(
                        data => {
                            this.data = data;

                            if (hasWriteAccess) {
                                // current user have write access
                                this.toolHeadingName = 'Edit Protocol';
                                this.viewOnly = false;
                                this.helpUrl = Consts.HELP_URL_PROTOCOL_EDIT;
                            } else {
                                this.toolHeadingName = 'View Protocol';
                                this.viewOnly = true;
                                this.helpUrl = Consts.HELP_URL_PROTOCOL_VIEW;
                            }
                        },
                        errors => {
                            this.errors = errors;
                        } );

                },
                error => {
                    console.log(error);
                })
        } else {
            // Creating
            this.toolHeadingName = 'Create Protocol';
            this.helpUrl = Consts.HELP_URL_PROTOCOL_CREATE;
            this.data = {
                'uriExternal': false,
                'type': '',
                'name': '',
                'abbreviation': '',
                'version': '',
                'fileTitle': '',
                'fileDescription': ''
            }
        }

        // Get list of Protocol types for dropdown
        this.apiService.doGet( Consts.QUERY_PROTOCOL_SETUP, '' ).subscribe(
            data => {
                this.errors = {};
                this.setupData = data;
                if (!this.protocolId) {
                    this.data['isCuratorEditing'] = this.setupData['isCuratorEditing'];
                }
                // this.defaultProtocolType = this.protocolTypes[0]; // SET default - This doesn't work @CHECKME  I had to hard code the default
            },
            errors => {
                this.errors = errors;
            } );

    }

}
