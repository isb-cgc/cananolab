import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Consts } from '../../../../constants';
import { ApiService } from '../../../common/services/api.service';
import { UtilService } from '../../../common/services/util.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Properties} from '../../../../../assets/properties';
@Component( {
    selector: 'canano-protocol-view',
    templateUrl: './protocol-view.component.html',
    styleUrls: ['./protocol-view.component.scss']
} )
export class ProtocolViewComponent implements OnInit {
    currentRoute = 'view-protocol';
    protocolData;
    data;
    downloadUrl = Consts.QUERY_DOWNLOAD_FILE;
    errors;
    externalUrl;
    toolHeadingName = 'View Protocol';
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

    ngOnInit(): void {
        this.route.params.subscribe(
            (params: Params) => {
                this.protocolId = params['protocolId'];
                this.init();
            });

        this.errors = {};
    }

    init() {
        this.route.params.subscribe(
            ( params: Params ) => {
                this.protocolId = params['protocolId'];

                this.protocolData = this.getProtocolViewData().subscribe(
                    data => {
                        this.protocolData = data;
                        this.toolHeadingName = 'View Protocol';
                        this.viewOnly = true;
                        this.helpUrl = Consts.HELP_URL_PROTOCOL_VIEW;
                    }
                );
            });
    }

    getProtocolViewData() {
        let getUrl = Consts.QUERY_VIEW_PROTOCOL;

        if( Properties.DEBUG_CURL ){
            let curl = 'curl  -k \'' + getUrl + '\'';
            console.log( curl );
        }

        let results = null;

        try {
            results = this.apiService.doGet(getUrl, 'protocolId=' + this.protocolId);
        } catch(err) {
            console.error('doGet Exception: ' + err);
        }
        return results;
    }
}
