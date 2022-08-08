// ----------------------------------------------------------------------------------------
// -------------------            "Main Display Heading"          -------------------------
// ----------   The blueish bar across the top of the Main Display ------------------------
// ----------   Contains topic name, context sensitive Help link, and Glossary link  ------
// ----------------------------------------------------------------------------------------

import { Component, Input, OnDestroy, OnInit, Output,EventEmitter } from '@angular/core';
import { TopMenuItems } from '../../top-main-menu/top-main-menu.service';
import { takeUntil } from 'rxjs/operators';
import { MainDisplayService } from '../main-display.service';
import { Subject } from 'rxjs';
import { ApiService } from '../../common/services/api.service';
import { Consts } from '../../../constants';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component( {
    selector: 'canano-main-display-heading',
    templateUrl: './main-display-heading.component.html',
    styleUrls: ['./main-display-heading.component.scss']
} )


export class MainDisplayHeadingComponent implements OnInit, OnDestroy{
    @Input() helpUrl = '';
    @Input() backUrl;
    @Input() otherUrl;
    @Input() export;
    @Input() exportJSON;
    @Input() exportXML;
    @Input() sampleIds;
    @Input() toolHeadingName = '';
    @Input() print=false;
    @Output() downloadReady = new EventEmitter<Boolean>();

    // For HTML access
    topMenuItems =  TopMenuItems;

    private ngUnsubscribe: Subject<boolean> = new Subject<boolean>();

    constructor(private router:Router,private httpClient:HttpClient,private apiService:ApiService,private mainDisplayService: MainDisplayService) {
    }

    ngOnInit(): void {
        this.mainDisplayService.menuSelectionEmitter.pipe( takeUntil( this.ngUnsubscribe ) ).subscribe(
            ( data ) => {
                this.toolHeadingName = data;
                this.setHelpUrl( );
            }
        );
    }

    // @FIXME This function should be moved to the Util service - it is duplicated elsewhere
    openHelpWindow( pageURL ) {
        window.open( pageURL, 'Help', 'alwaysRaised,dependent,status,scrollbars,resizable,width=800,height=500' );
    }

    /**
     * Sets the context sensitive Help link to the correct url for this tool (Top Menu selection)
     */
    setHelpUrl( ){
        switch( this.toolHeadingName ){

            case TopMenuItems.HOME:
                this.helpUrl = 'https://wiki.nci.nih.gov/display/caNanoLab/Getting+Started+in+caNanoLab#GettingStartedincaNanoLab-UsingtheWorkflowtoGetStarted';
                break;

            case TopMenuItems.WORKFLOW:
                this.helpUrl = 'https://wiki.nci.nih.gov/display/caNanoLab/Getting+Started+in+caNanoLab#GettingStartedincaNanoLab-UsingtheWorkflowtoGetStarted';
                break;

            case TopMenuItems.PROTOCOLS:
                this.helpUrl = 'https://wiki.nci.nih.gov/display/caNanoLab/Managing+Protocols+in+caNanoLab';
                break;

           case TopMenuItems.SAMPLES:
                this.helpUrl = 'https://wiki.nci.nih.gov/display/caNanoLab/Managing+Samples+in+caNanoLab#ManagingSamplesincaNanoLab-ManageSamples';
                break;

           case TopMenuItems.PUBLICATIONS:
                this.helpUrl = 'https://wiki.nci.nih.gov/x/e4QfEQ';
                break;

           case TopMenuItems.GROUPS:
                this.helpUrl = 'https://wiki.nci.nih.gov/x/fIQfEQ';
                break;

          case TopMenuItems.CURATION:
                this.helpUrl = 'https://wiki.nci.nih.gov/x/uoGAEQ';
                break;

          case TopMenuItems.MY_WORKSPACE:
                this.helpUrl = 'https://wiki.nci.nih.gov/x/fYQfEQ';
                break;

          case TopMenuItems.MY_FAVORITES:
                this.helpUrl = 'https://wiki.nci.nih.gov/x/b4AnEQ';
                break;
        }
    }

    // Avoid memory leaks
    ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    exportAsXLS() {
        let sampleId=this.export[0];
        let type=this.export[1];
        let query='QUERY_'+type+'_EXPORT_XLS';
        // console.log(query)
        window.open(Consts[query]+'?sampleId='+sampleId+'&type=all');
        // <a ng-disabled="loader" class="helpText" ng-href="/rest/publication/summaryExport?sampleId=66945032&amp;type=all" href="/rest/publication/summaryExport?sampleId=66945032&amp;type=all">Export</a>
    }

    exportAsJSON() {
        this.downloadReady.emit(false);
        let sampleIds=this.sampleIds.join();
        this.apiService.doPost(Consts.QUERY_SAMPLE_EXPORT_JSON,{sampleIds:sampleIds}).subscribe(data=> {
            let a = (window).document.createElement('a');
            a.href = (window).URL.createObjectURL(new Blob([JSON.stringify(data)], {
              type: 'application/json'
            }));
            // Use epoch for unique file name
            a.download = 'caNanoLab_sample_data_' + new Date().getTime() + '.json';
            window.document.body.appendChild(a);
            a.click();
            this.downloadReady.emit(true);
        },
        error=> {
            this.downloadReady.emit(true);
        });
    }

    exportAsXML() {
        this.downloadReady.emit(false);
        let sampleIds=this.sampleIds.join();
        this.httpClient.post(Consts.QUERY_SAMPLE_EXPORT_XML,
            {sampleIds:sampleIds},
            {responseType:'text'}).subscribe(data=> {
            let a = (window).document.createElement('a');
            a.href = (window).URL.createObjectURL(new Blob([data], {
              type: 'application/xml'
            }));
            a.download = 'caNanoLab_sample_data_' + new Date().getTime() + '.xml';
            window.document.body.appendChild(a);
            a.click();
            (window).document.body.removeChild(a);
            this.downloadReady.emit(true);
        },
        error=> {
            console.log(error);
            this.downloadReady.emit(true)
        })
    }

    navigateBack() {
        this.router.navigate([this.backUrl])
    }

    navigateToOtherUrl() {
        this.router.navigate([this.otherUrl['link']])
    }

    printPage() {
        let url = window.location;
        window.open(url+'?print=true')
    }


}
