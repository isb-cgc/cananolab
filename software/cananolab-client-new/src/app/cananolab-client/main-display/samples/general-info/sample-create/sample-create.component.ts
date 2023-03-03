import { Component, OnInit } from '@angular/core';
import { Consts } from '../../../../../constants';
import { HttpClient } from '@angular/common/http';
import { Router, Navigation } from '@angular/router';
import { ApiService } from 'src/app/cananolab-client/common/services/api.service';
import { Properties } from 'src/assets/properties';
@Component( {
    selector: 'canano-sample-create',
    templateUrl: './sample-create.component.html',
    styleUrls: ['./sample-create.component.scss']
} )
export class SampleCreateComponent implements OnInit{
    currentDropdownValues = {};
    data;
    dataTrailer;
    special_message;
    nav: Navigation;
    errors = {};
    helpUrl = Consts.HELP_URL_SAMPLE_CREATE;
    pointOfContact;
    pointOfContactIndex;
    piiConfirmed = false;
    constructor(private apiService: ApiService, private httpClient: HttpClient, private router: Router) {
        // WJRL 12/7/22: Fixing #211. If we get here with extra state from the router, we have a message
        // we need to display (that a sample was successfully deleted). We need to get the nav now, since
        // it will return null state if we get it on init, when navigation is completed.
        this.nav = this.router.getCurrentNavigation()
    }

    ngOnInit(): void{
        this.piiConfirmed = false;
        setTimeout(() => {
            Properties.SAMPLE_TOOLS = false;
        })
        // WJRL 12/7/22: Hard to know how this is getting called, so be super-cautious about what to expect:
        if ((this.nav !== null) && (this.nav !== undefined)) {
            if ((this.nav.extras !== null) && (this.nav.extras !== undefined)) {
                if ((this.nav.extras.state !== null) && (this.nav.extras.state !== undefined)) {
                    const state = this.nav.extras.state as { data: string };
                    this.errors['error'] = [state['data']];
                }
            }
        }
        this.apiService.doGet(Consts.QUERY_SAMPLE_SUBMISSION_SETUP, '').subscribe(data => {
            this.data = data;
            this.data['sampleId'] = 0;
            this.pointOfContact = {dirty: true, organization: {name: ''}, address: {}, role: ''};
            this.dataTrailer = JSON.parse(JSON.stringify(this.data));
        },
        errors => {
            this.errors = errors;
        })
    }

    addOtherValue(field, currentValue) {
        this.currentDropdownValues[field] = currentValue;
    };

    addPointOfContact() {
        this.pointOfContactIndex = -1;
    }

    reset() {
        this.data = JSON.parse(JSON.stringify(this.dataTrailer));
        this.pointOfContact = {dirty: true, organization:{name: ''}, address: {}, role: ''};
        this.errors = {};
        this.piiConfirmed = false;
    }

    onSaveSample(){
        this.data.pointOfContacts.push(this.pointOfContact);
        this.apiService.doPost(Consts.QUERY_SAMPLE_POC_UPDATE_SAVE, this.data).subscribe(data=> {
            if( data['errors'].length > 0 ){
                this.errors['error'] = data['errors'];
            }else{
                this.router.navigate( ['home/samples/sample', data.sampleId] );
            }
        },
        errors => {
            this.errors = errors;
        })
    }

    saveOther(newItem: Object) {
        if (newItem['change'] && newItem['value']) {
            this.addDropdownItem(newItem['array'], newItem['value'])
            this.setValue(newItem['field'], newItem['value']);
        }
        else {
            this.setValue(newItem['field'], newItem['value']);
        }
    };
}
