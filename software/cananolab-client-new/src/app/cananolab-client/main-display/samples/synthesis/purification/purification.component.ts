import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Properties } from '../../../../../../assets/properties';
import { Consts } from '../../../../../constants';
import { NavigationService } from '../../../../common/services/navigation.service';
import { ApiService } from '../../../../common/services/api.service';

@Component({
  selector: 'canano-purification',
  templateUrl: './purification.component.html',
  styleUrls: ['./purification.component.scss']
})
export class PurificationComponent implements OnInit {
    techniqueIndex;
    consts=Consts;
    technique;
    currentDropdownValues = {};
    currentField;
    data;
    dataTrailer;
    dataId;
    errors = {};
    helpUrl = Consts.HELP_URL_SAMPLE_SYNTHESIS;
    instrumentIndex;
    instrument;
    instrumentTypes;
    resetStatus=false;
    otherValue;
    sampleId;
    setupData;
    toolHeadingNameManage = ' Sample Synthesis - Purification';

    constructor(
        private apiService: ApiService,
        private navigationService: NavigationService,
        private router: Router,
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.navigationService.setCurrentSelectedItem(4);
        this.route.params.subscribe((params: Params) => {
            this.sampleId = params['sampleId'];
            this.dataId = params['dataId'];
            this.apiService
                .doGet(
                    Consts.QUERY_SYNTHESIS_PURIFICATION_SETUP,
                    'sampleId=' + this.sampleId
                )
                .subscribe(
                    (data) => {
                        this.setupData = data;
                        Properties.SAMPLE_TOOLS = true;
                        Properties.CURRENT_SAMPLE_ID = this.sampleId;
                    },
                    (errors) => {
                        this.errors = errors;
                    }
                );

            if (this.dataId) {
                this.apiService
                    .doGet(
                        Consts.QUERY_SYNTHESIS_PURIFICATION_EDIT,
                        'sampleId=' + this.sampleId + '&synPurificationId=' + this.dataId
                    )
                    .subscribe(
                        (data) => {
                            this.data = data;
                            this.errors = {};
                        },
                        (errors) => {
                            this.errors = errors;
                        }
                    );
            } else {
                this.setupSynthesisPurification();
            }
        });
    }

    setupSynthesisPurification() {
        this.data = {
            yield: '',
            type: '',
            designMethodsDescription: '',
            analysisConclusion: '',
            sampleId: this.sampleId,
            techniques: [],
            fileElements: [],
            simpleProtocol: { displayName: '', domainFileId: '', domainFileUri: '', domainId: '' }
        };
        this.dataTrailer=JSON.parse(JSON.stringify(this.data));
    }

    addInstrument() {
        this.instrumentIndex=-1;
        this.instrument={manufacturer:"", modelName: "", type:""};
        this.getInstrumentTypes();
        setTimeout(function () {
            document.getElementById('instrumentForm').scrollIntoView();
        }, 100);
    }

    addTechnique() {
        this.techniqueIndex = -1;
        this.technique = {
            type: '',
            abbreviation: '',
            description: '',
            instrumentList: [],
        };
        setTimeout(function () {
            document.getElementById('techniqueForm').scrollIntoView();
        }, 100);
    }

    addFile() {
        this.techniqueIndex = -1;
        this.technique = {
            type: '',
            abbreviation: '',
            description: '',
            instrumentList: [],
        };
        setTimeout(function () {
            document.getElementById('techniqueForm').scrollIntoView();
        }, 100);
    }

    // set pointer fields to old values when adding other //
    addOtherValue(field, currentValue) {
        this.currentDropdownValues[field] = currentValue;
    }

    cancelTechnique() {
        this.techniqueIndex = null;
        this.instrumentIndex = null;
    }

    cancelInstrument() {
        this.instrumentIndex=null;
    }

    changeFile(newItem: Object) {
        if (newItem['type'] == 'save' || newItem['type'] == 'delete') {
            this.data = newItem['data'];
            this.dataTrailer = JSON.parse(JSON.stringify(this.data));
        }
    }    

    convertDomainEntityFieldsToNullAndStrings() {
        let fieldsToIgnore = ['id', 'createdDate', 'samplePurification'];
        if (this.data['domainEntity']) {
            let domainEntityKeys = Object.keys(this.data['domainEntity']);
            domainEntityKeys.forEach((item) => {
                if (this.data.domainEntity[item] != null) {
                    if (
                        this.data.domainEntity[item] != '' &&
                        fieldsToIgnore.indexOf(item) == -1
                    ) {
                        this.data.domainEntity[item] =
                            this.data.domainEntity[item].toString();
                    }
                    if (this.data.domainEntity[item] == '') {
                        this.data.domainEntity[item] = null;
                    }
                }
            });
        }
    }

    convertToString(event) {
        this.data.domainEntity[event.target.id] = event.target.value.toString();
    }

    delete() {
        if (confirm('Are you sure you wish to delete this purification?')) {
            this.convertDomainEntityFieldsToNullAndStrings();
            setTimeout(() => {
                this.apiService
                    .doPost(Consts.QUERY_SYNTHESIS_PURIFICATION_DELETE, this.data)
                    .subscribe(
                        (data) => {
                            this.router.navigate([
                                'home/samples/synthesis',
                                this.sampleId,
                            ]);
                        },
                        (error) => {
                            this.errors = error;
                        }
                    );
            }, 200);
        }
    }

    saveTechnique() {
        this.convertDomainEntityFieldsToNullAndStrings();
        if (this.techniqueIndex == -1) {
            this.data['techniques'].push(this.technique);
            this.data['techniqueBeingEdited'] = this.technique;
        } else {
            this.data['techniques'][this.techniqueIndex] =
                this.technique;
            this.data['techniqueBeingEdited'] = this.technique;
        }
        this.techniqueIndex = null;
    }

    deleteTechnique() {
        if (
            confirm('Are you sure you wish to delete this purification element?')
        ) {
            this.convertDomainEntityFieldsToNullAndStrings();
            this.data.techniqueBeingEdited = this.technique;
            this.data.techniques.splice(
                this.data.techniques[this.techniqueIndex],
                1
            );
            this.techniqueIndex = null;
        }
    }

    deleteInstrument() {
        if (confirm("Are you sure you wish to delete this inherent function?")) {
            this.technique.instrumentList.splice(this.instrumentIndex,1)
        };
        this.instrumentIndex=null;
    }

    editTechnique(index, element) {
        this.technique = JSON.parse(JSON.stringify(element));
        this.techniqueIndex = index;
        setTimeout(function () {
            document.getElementById('techniqueForm').scrollIntoView();
        }, 100);
    }

    editInstrument(fIndex,iFunction) {
        this.instrumentIndex=fIndex;
        this.instrument=JSON.parse(JSON.stringify(iFunction));
        this.getInstrumentTypes();
        setTimeout(function () {
            document.getElementById('instrumentForm').scrollIntoView();
        }, 100);
    }

    getInstrumentTypes() {
        if(!this.technique || !this.technique.type) {
          this.instrumentTypes = [];
          return;
        }

        this.apiService
            .doGet(
                Consts.QUERY_SYNTHESIS_PURIFICATION_INSTRUMENT_TYPES,
                'techniqueType=' + this.technique.type
            )
            .subscribe(
                (data) => {
                    this.instrumentTypes = data;
                },
                (errors) => {
                    this.errors = errors;
                }
            );
    }

    getError(error:Object) {
        this.errors=error;
    }

    readyToSubmit() {
        let submissionStatus = true;
        // if (this.data.type == 'biopolymer') {
        //     if (
        //         this.data.domainEntity.name == '' ||
        //         this.data.domainEntity.name == null
        //     )
        //         submissionStatus = false;
        //     if (
        //         this.data.domainEntity.type == '' ||
        //         this.data.domainEntity.type == null
        //     )
        //         submissionStatus = false;
        // }
        if (this.data.simpleProtocol.displayName == '') submissionStatus = false;
        return submissionStatus;
    }

    reset() {
        this.data=JSON.parse(JSON.stringify(this.dataTrailer));
        this.techniqueIndex=null;
        this.instrumentIndex=null;
        this.resetStatus=true;
    }

    saveInstrument() {
        if (this.instrumentIndex==-1) {
            if (!this.technique.instrumentList) {
                this.technique['instrumentList']=[];
            }
            this.technique.instrumentList.push(this.instrument);
        }
        else {
            this.technique.instrumentList[this.instrumentIndex]=this.instrument;
        }
        this.instrumentIndex=null;
    }

    // save other value //
    saveOther(newItem: Object) {
        if (newItem['change'] && newItem['value']) {
            this.addDropdownItem(newItem['array'], newItem['value']);
            this.setValue(newItem['field'], newItem['value']);
        } else {
            this.setValue(newItem['field'], newItem['value']);
        }
    }

    setupDataTrailer(data) {
        this.dataTrailer = JSON.parse(JSON.stringify(data));
    }

    setupDomainEntity(event) {
        // delete this.data['domainEntity'];
        // if (event == 'biopolymer')
        //     this.data['domainEntity'] = {
        //         type: null,
        //         name: null,
        //         sequence: null,
        //     };
        // if (event == 'dendrimer')
        //     this.data['domainEntity'] = { branch: null, generation: null };
        // if (event == 'fullerene')
        //     this.data['domainEntity'] = {
        //         averageDiameter: null,
        //         averageDiameterUnit: null,
        //         numberOfCarbon: null,
        //     };
        // if (event == 'liposome')
        //     this.data['domainEntity'] = {
        //         isPolymerized: null,
        //         polymerName: null,
        //     };
        // if (event == 'polymer')
        //     this.data['domainEntity'] = {
        //         isCrossLinked: null,
        //         initiator: null,
        //         crossLinkDegree: null,
        //     };
        // if (event == 'emulsion')
        //     this.data['domainEntity'] = {
        //         isPolymerized: null,
        //         polymerName: null,
        //     };
        // if (event == 'carbon nanotube')
        //     this.data['domainEntity'] = {
        //         averageLength: null,
        //         diameter: null,
        //         averageLengthUnit: null,
        //         diameterUnit: null,
        //         chirality: null,
        //         wallType: null,
        //     };
    }

    submit() {
        this.convertDomainEntityFieldsToNullAndStrings();
        this.apiService
            .doPost(Consts.QUERY_SYNTHESIS_PURIFICATION_UPDATE, this.data)
            .subscribe(
                (data) => {
                    this.router.navigate([
                        'home/samples/synthesis',
                        this.sampleId,
                    ]);
                },
                (errors) => {
                    this.errors = errors;
                }
            );
    }
}
