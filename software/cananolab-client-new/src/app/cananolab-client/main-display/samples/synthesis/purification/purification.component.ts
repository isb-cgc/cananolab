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
    purificationElementIndex;
    consts=Consts;
    purificationElement;
    currentDropdownValues = {};
    currentField;
    data;
    dataTrailer;
    dataId;
    errors = {};
    helpUrl = Consts.HELP_URL_SAMPLE_SYNTHESIS;
    inherentFunctionIndex;
    inherentFunction;
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
            description: '',
            type: '',
            sampleId: this.sampleId,
            purificationElements: [],
            fileElements: [],
            simpleProtocol: { displayName: '', domainFileId: '', domainFileUri: '', domainId: '' }
        };
        this.dataTrailer=JSON.parse(JSON.stringify(this.data));
    }

    addInherentFunction() {
        this.inherentFunctionIndex=-1;
        this.inherentFunction={type:"",description:""};
        setTimeout(function () {
            document.getElementById('inherentFunctionForm').scrollIntoView();
        }, 100);
    }

    addPurificationElement() {
        this.purificationElementIndex = -1;
        this.purificationElement = {
            type: '',
            chemicalName: '',
            pubChemDataSource: '',
            valueUnit: '',
            molecularFormulaType: '',
            supplier: { supplierName: '', lot: ''},
            inherentFunctionList: [],
        };
        setTimeout(function () {
            document.getElementById('purificationElementForm').scrollIntoView();
        }, 100);
    }

    addFile() {
        this.purificationElementIndex = -1;
        this.purificationElement = {
            type: '',
            chemicalName: '',
            pubChemDataSourceName: '',
            valueUnit: '',
            molecularFormulaType: '',
            supplier: {},
            inherentFunctionList: [],
        };
        setTimeout(function () {
            document.getElementById('purificationElementForm').scrollIntoView();
        }, 100);
    }

    // set pointer fields to old values when adding other //
    addOtherValue(field, currentValue) {
        this.currentDropdownValues[field] = currentValue;
    }

    cancelPurificationElement() {
        this.purificationElementIndex = null;
        this.inherentFunctionIndex = null;
    }

    cancelInherentFunction() {
        this.inherentFunctionIndex=null;
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

    savePurificationElement() {
        this.convertDomainEntityFieldsToNullAndStrings();
        if (this.purificationElementIndex == -1) {
            this.data['purificationElements'].push(this.purificationElement);
            this.data['purificationElementBeingEdited'] = this.purificationElement;
        } else {
            this.data['purificationElements'][this.purificationElementIndex] =
                this.purificationElement;
            this.data['purificationElementBeingEdited'] = this.purificationElement;
        }
        this.purificationElementIndex = null;
    }

    deletePurificationElement() {
        if (
            confirm('Are you sure you wish to delete this purification element?')
        ) {
            this.convertDomainEntityFieldsToNullAndStrings();
            this.data.purificationElementBeingEdited = this.purificationElement;
            this.data.purificationElements.splice(
                this.data.purificationElements[this.purificationElementIndex],
                1
            );
            this.purificationElementIndex = null;
        }
    }

    deleteInherentFunction() {
        if (confirm("Are you sure you wish to delete this inherent function?")) {
            this.purificationElement.inherentFunctionList.splice(this.inherentFunctionIndex,1)
        };
        this.inherentFunctionIndex=null;
    }

    editPurificationElement(index, element) {
        this.purificationElement = JSON.parse(JSON.stringify(element));
        this.purificationElementIndex = index;
        setTimeout(function () {
            document.getElementById('purificationElementForm').scrollIntoView();
        }, 100);
    }

    editInherentFunction(fIndex,iFunction) {
        this.inherentFunctionIndex=fIndex;
        this.inherentFunction=JSON.parse(JSON.stringify(iFunction));
        setTimeout(function () {
            document.getElementById('inherentFunctionForm').scrollIntoView();
        }, 100);
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
        this.purificationElementIndex=null;
        this.inherentFunctionIndex=null;
        this.resetStatus=true;
    }

    saveInherentFunction() {
        if (this.inherentFunctionIndex==-1) {
            if (!this.purificationElement.inherentFunctionList) {
                this.purificationElement['inherentFunctionList']=[];
            }
            this.purificationElement.inherentFunctionList.push(this.inherentFunction);
        }
        else {
            this.purificationElement.inherentFunctionList[this.inherentFunctionIndex]=this.inherentFunction;
        }
        this.inherentFunctionIndex=null;
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
