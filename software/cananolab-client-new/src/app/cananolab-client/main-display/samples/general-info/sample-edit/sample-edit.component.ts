import { Component, OnDestroy, OnInit } from '@angular/core';
import { Consts } from '../../../../../constants';
import {ActivatedRoute, Params} from '@angular/router';
import { Properties } from '../../../../../../assets/properties';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { timeout } from 'rxjs/operators';
import { ApiService } from '../../../../common/services/api.service';
import { NavigationService } from '../../../../common/services/navigation.service';
import { SampleAvailabilityDisplayService } from '../sample-search/sample-search-results/sample-availability-display/sample-availability-display.service';
import { Router} from '@angular/router';

@Component( {
    selector: 'canano-sample-edit',
    templateUrl: './sample-edit.component.html',
    styleUrls: ['./sample-edit.component.scss']
} )
export class SampleEditComponent implements OnInit, OnDestroy{
    availabilityEditIndex;
    currentDropdownValues;
    data;
    dataAvailability;
    dataTrailer;
    errors;
    loading;
    userGroups;
    sampleIds;
    users;
    theAccess;
    theAccessIndex;
    helpUrl = Consts.HELP_URL_SAMPLE_EDIT;
    message;
    pointOfContact;
    pointOfContactIndex;
    sampleId = -1;
    recipientList;
    toolHeadingNameSearchSample = 'Update Sample';
    submitReviewButton = true;
    piiConfirmed = false;
    editingAccessRow = false;


    constructor( private router: Router, private navigationService: NavigationService, private route: ActivatedRoute, private httpClient: HttpClient,
                 private apiService: ApiService,
                 private sampleAvailabilityDisplayService: SampleAvailabilityDisplayService){
    }

    ngOnInit(): void{
        this.navigationService.setCurrentSelectedItem(0);
        this.currentDropdownValues = {};
        this.recipientList;
        this.errors = {};
        this.route.params.subscribe(
            ( params: Params ) => {
                this.sampleId = params['sampleId'].replace( /^.*\?sampleId=/, '' );
                if(
                    this.sampleId <= 0 ){
                    this.sampleId = Properties.CURRENT_SAMPLE_ID;
                }else{
                    Properties.CURRENT_SAMPLE_ID = this.sampleId;
                }

                this.getSampleEditData().subscribe(
                    data => {
                        Properties.SAMPLE_TOOLS = true;
                        this.data = data;
                        this.errors = {};
                        // console.log(data)
                        this.data.keywords = this.joinKeywords(this.data.keywords);
                        this.dataTrailer = JSON.parse(JSON.stringify(this.data))
                        Properties.CURRENT_SAMPLE_NAME = data['sampleName'];
                    },
                    ( err ) => {
                        this.errors = err;
                        console.log( 'ERROR LOAD SAMPLE EDIT ', err );
                    });
            } );
    }

    addAccess() {
        this.theAccessIndex = -1;
        this.recipientList = null;
        this.theAccess = {
            accessType: '',
            recipient: '',
            recipientDisplayName: '',
            roleName: '',
        }

        setTimeout(function () {
            document.getElementById('accessForm').scrollIntoView();
        }, 100);
        this.getUserGroups();
        this.getUsers();
        this.editingAccessRow = false;
    }

    saveAccess() {
        this.data.theAccess = this.theAccess;
        let keywordString = this.data['keywords'];
        this.data['keywords'] = this.data['keywords'].split('\n');
        let url = this.apiService.doPost(Consts.QUERY_SAMPLE_SAVE_ACCESS, this.data);
        url.subscribe(data => {
            this.data = data;
            this.data['keywords'] = this.joinKeywords(this.data['keywords']);
            this.dataTrailer = JSON.parse(JSON.stringify(this.data));
        },
        error=> {
            this.data['keywords'] = keywordString;
            this.errors= error;
        });

        this.theAccessIndex = null;
    }

    changeAccessType(event: string) {
        this.theAccess.recipient = '';
        this.theAccess.roleName = '';
        this.recipientList=null;
        // The value "role" is sent in only when the "Access By" is set to public
        if (event === 'role') {
            this.theAccess['recipient'] = 'ROLE_ANONYMOUS';
            this.theAccess['recipientDisplayName'] = 'Public';
            this.theAccess['roleName']="R";
        }
    }

    cancelAccess() {
        this.theAccessIndex = null;
    }
    deleteAccess() {
        if (confirm('Are you sure you wish to delete this access?')) {
            this.theAccessIndex = null;
            this.data['theAccess'] = this.theAccess;
            let keywordString = this.data['keywords'];
            this.data['keywords'] = this.data['keywords'].split('\n');
            this.apiService.doPost(Consts.QUERY_SAMPLE_DELETE_ACCESS, this.data).subscribe(data => {
                this.data = data;
                this.data.keywords = this.joinKeywords(this.data['keywords']);
                this.dataTrailer = JSON.parse(JSON.stringify(this.data));
            },
            error => {
                this.data['keywords'] = keywordString;
                this.errors = error;
            });
        }
    }

    getRecipientList() {
        var url;
        if (this.theAccess.accessType=='group') {
            url = this.apiService.doGet(Consts.QUERY_GET_COLLABORATION_GROUPS,'searchStr=');
        }
        if (this.theAccess.accessType=='user') {
            url = this.apiService.doGet(Consts.QUERY_GET_USERS,'searchStr=');
        }
        url.subscribe(data=> {
            this.recipientList=data;
            this.errors={};
        },
        error=> {
            this.errors=error;

        })
    }

    delete() {
        if (confirm('Are you sure you wish to delete this sample?')) {
            this.apiService.doGet(Consts.QUERY_SAMPLE_DELETE, 'sampleId=' + this.sampleId, 'text').subscribe(data => {
                console.log('Hi! I deleted with ' + data);
                // WJRL 12/7/22: This is the fix to #211. If the sample is deleted, we go to the creation page
                // along with the message about success. This is similar to protocol deletion.
                this.router.navigate(['home/samples/sample-create'], {state: {data: data}});
            },
            error => {
                console.log(error)
                this.errors = error;
            })
        }
    }

    editAccess(index, access) {
        this.theAccessIndex = index;
        this.theAccess = access;
        this.recipientList=null;
        setTimeout(function () {
            document.getElementById('accessForm').scrollIntoView();
        }, 100);
        this.getUserGroups();
        this.getUsers();
        this.editingAccessRow = true;
    }

    // set pointer fields to old values when adding other //
    addOtherValue(field, currentValue) {
        this.currentDropdownValues[field] = currentValue;
    };

    // save other value //
    saveOther(newItem: Object) {
        if (newItem['change'] && newItem['value']) {
            this.addDropdownItem(newItem['array'], newItem['value'])
            this.setValue(newItem['field'], newItem['value']);
        }
        else {
            this.setValue(newItem['field'], newItem['value']);
        }
    };

    deleteKeyword(index) {
        console.log(index)
    }

    addPointOfContact() {
        this.pointOfContact = {organization: {name: ''}, address: {}, role: ''};
        this.pointOfContactIndex = -1;
        setTimeout(function () {
            document.getElementById('pocForm').scrollIntoView();
        }, 100);
    }

    cancelPointOfContact() {
        this.pointOfContactIndex = null;
    }

    deletePointOfContact() {
        if (confirm('Are you sure you wish to delete this point of contact?')) {
            this.pointOfContact['sampleId'] = this.sampleId;
            this.apiService.doPost(Consts.QUERY_SAMPLE_POC_UPDATE_DELETE, this.pointOfContact).subscribe(data => {
                this.errors = {};
                this.data = data;
                this.data.keywords = this.joinKeywords(this.data.keywords);
                this.dataTrailer = JSON.stringify(JSON.parse(this.data));
                this.pointOfContactIndex = null;
            },
            errors => {
                console.log(errors);
                this.errors = errors;
            })
        }
    }

    editPointOfContact(index, poc) {
        this.pointOfContact = JSON.parse(JSON.stringify(poc));
        this.pointOfContactIndex = index;
        setTimeout(function () {
            document.getElementById('pocForm').scrollIntoView();
        }, 100);
    }

    savePointOfContact() {
        this.pointOfContact['dirty'] = true;
        if (this.pointOfContactIndex == -1) {
            this.data.pointOfContacts.push(this.pointOfContact)
            console.log(this.data)
        } else {
            this.data['pointOfContacts'][this.pointOfContactIndex] = this.pointOfContact;
        }

        let keywordString = this.data['keywords'];
        this.data['keywords'] = this.data['keywords'].split('\n');

        this.apiService.doPost(Consts.QUERY_SAMPLE_POC_UPDATE_SAVE, this.data).subscribe(data => {
            data['keywords'] = this.joinKeywords(this.data['keywords'])
            this.errors = {};
            this.data = data;
            this.dataTrailer = JSON.parse(JSON.stringify(data));
            this.pointOfContactIndex = null;
        },
        errors => {
            console.log(errors);
            this.data['keywords'] = keywordString;
            this.errors = errors;
        })
    }

    joinKeywords(keywords) {
        if (keywords) {
            return keywords.join('\n')

        }
        console.log(keywords)
    }


    downloadReady(event) {
        if (event == true) {
            this.loading = null;
        }
        if (event == false) {
            this.loading = true;
        }
    }

    onSampleDeleteClick(){
        console.log( 'onSampleDeleteClick' );
    }

    onSampleCopyClick(){
        this.router.navigate(['home/samples/sample-copy', this.sampleId])
    }

    onSampleResetClick(){
       this.data = JSON.parse(JSON.stringify(this.dataTrailer));
       this.data.keywords = this.joinKeywords(this.data.keywords);
    }

    onSampleUpdateClick(){
        console.log( 'onSampleUpdateClick sampleName: ', this.data['sampleName'] );
        console.log( 'onSampleUpdateClick sampleId: ', this.data['sampleId'] );
        console.log( 'onSampleUpdateClick keywords: ', this.data['keywords'] );
        this.updateSample();
    }

    updateSample(){
        let su = {};
        su['sampleName'] = this.data['sampleName'];
        su['sampleId'] = this.data['sampleId'];
        let keywordString = su['keywords'];
        su['keywords'] = this.data['keywords'].split('\n');

        this.apiService.doPost( Consts.QUERY_SAMPLE_UPDATE, su ).subscribe(
            data => {
                this.data = data;
                this.data.keywords = this.joinKeywords(this.data.keywords);
                this.dataTrailer = JSON.parse(JSON.stringify(this.data));
                this.message = 'Sample Updated'
            },
            ( err ) => {
                su['keywords'] = keywordString;
                this.errors = err;
                console.log( 'ERROR QUERY_SAMPLE_UPDATE: ', err );
            } );

    }

    getUsers() {
        this.apiService.doGet(Consts.QUERY_GET_USERS, 'searchStr').subscribe(data => {
            this.users = data;
        })

    }

    getUserGroups() {
        this.apiService.doGet(Consts.QUERY_GET_USER_GROUPS, 'searchStr').subscribe(data => {
            this.userGroups = data;
        })
    }

    shouldShowAccessEditButton(group) {
        if (group.recipient == 'ROLE_CURATOR') {
            return false;
        } else if (group.recipient == 'ROLE_ANONYMOUS') {
            return this.data != null && this.data['isCuratorEditing'];
        }

        return true;
    }

    getSampleEditData(){
        let getUrl = Consts.QUERY_SAMPLE_EDIT;

        if( Properties.DEBUG_CURL ){
            let curl = 'curl  -k \'' + getUrl + '\'';
            console.log( curl );
        }

        let headers = new HttpHeaders( {
            'Content-Type': 'application/x-www-form-urlencoded'
        } );

        let options = {
            headers: headers,
            method: 'get',
        };

        let results;
        try{
            results = this.apiService.doGet(getUrl, 'sampleId=' + this.sampleId).pipe( timeout( Properties.HTTP_TIMEOUT ) );
        }catch( e ){
            // TODO react to error.
            console.error( 'doGet Exception: ' + e );
        }
        return results;

    }


    onAvailabilityClick( ){
        this.apiService.doGet( Consts.QUERY_SAMPLE_AVAILABILITY, 'sampleId=' + this.sampleId).subscribe(
            data => {
                this.sampleAvailabilityDisplayService.displayStuff( data );
                this.data = data;
                this.data['keywords'] = this.joinKeywords(this.data['keywords']);
                this.dataTrailer = JSON.parse(JSON.stringify(this.data));
            },
            ( err ) => {
                console.log( 'ERROR QUERY_SAMPLE_AVAILABILITY: ', err );
            } );
    }


    onAvailabilityDeleteClick( ){
        if (confirm('Are you sure you wish to delete the data availability metric?')) {
            let keywordString = this.data['keywords'];
            this.data['keywords'] = this.data['keywords'].split('\n');

            this.apiService.doPost( Consts.QUERY_SAMPLE_DELETE_AVAILABILITY, this.data).subscribe(
                data => {
                    this.data = data;
                    this.data['keywords'] = this.joinKeywords(this.data['keywords']);
                    this.dataTrailer = JSON.parse(JSON.stringify(this.data));
                },
                ( err ) => {
                    this.data['keywords'] = keywordString;
                    console.log( 'ERROR QUERY_SAMPLE_AVAILABILITY: ', err );
                } );
        }

    }

    onAvailabilityEdit(event) {
        this.availabilityEditIndex = 1;
        this.apiService.doGet(Consts.QUERY_SAMPLE_VIEW_AVAILABILITY, 'sampleId=' + this.sampleId).subscribe(data => {
            this.dataAvailability = data;
        },
        errors => {
            this.errors = errors;
        })
    }

    ngOnDestroy(): void{
    }

    submitForReview() {
        let url = this.apiService.doPost(Consts.QUERY_SAMPLE_SUBMIT_REVIEW, {dataId: this.data.sampleId, dataName: this.data.sampleName, dataType: 'sample'}, 'text');
        url.subscribe(data => {
            this.submitReviewButton = false;
        })
    }

}
