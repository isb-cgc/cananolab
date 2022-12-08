import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Properties } from '../../../../../../assets/properties';
import { Consts } from '../../../../../constants';
import { NavigationService } from '../../../../common/services/navigation.service';
import { ApiService } from '../../../../common/services/api.service';

@Component({
  selector: 'canano-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {
    materialElementIndex;
    consts=Consts;
    materialElement;
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
    toolHeadingNameManage = ' Sample Synthesis - Material';

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
                    Consts.QUERY_SYNTHESIS_MATERIAL_SETUP,
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
                        Consts.QUERY_SYNTHESIS_MATERIAL_EDIT,
                        'sampleId=' + this.sampleId + '&synMaterialId=' + this.dataId
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
                this.setupSynthesisMaterial();
            }
        });
    }

    setupSynthesisMaterial() {
        this.data = {
            description: '',
            type: '',
            sampleId: this.sampleId,
            materialElements: [],
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

    addMaterialElement() {
        this.materialElementIndex = -1;
        this.materialElement = {
            type: '',
            chemicalName: '',
            pubChemDataSource: '',
            valueUnit: '',
            molecularFormulaType: '',
            supplier: { supplierName: '', lot: ''},
            inherentFunctionList: [],
        };
        setTimeout(function () {
            document.getElementById('materialElementForm').scrollIntoView();
        }, 100);
    }

    addFile() {
        this.materialElementIndex = -1;
        this.materialElement = {
            type: '',
            chemicalName: '',
            pubChemDataSourceName: '',
            valueUnit: '',
            molecularFormulaType: '',
            supplier: {},
            inherentFunctionList: [],
        };
        setTimeout(function () {
            document.getElementById('materialElementForm').scrollIntoView();
        }, 100);
    }

    // set pointer fields to old values when adding other //
    addOtherValue(field, currentValue) {
        this.currentDropdownValues[field] = currentValue;
    }

    cancelMaterialElement() {
        this.materialElementIndex = null;
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

    delete() {
        if (confirm('Are you sure you wish to delete this material?')) {
            setTimeout(() => {
                this.apiService
                    .doPost(Consts.QUERY_SYNTHESIS_MATERIAL_DELETE, this.data)
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

    saveMaterialElement() {
        if (this.materialElementIndex == -1) {
            this.data['materialElements'].push(this.materialElement);
            this.data['materialElementBeingEdited'] = this.materialElement;
        } else {
            this.data['materialElements'][this.materialElementIndex] =
                this.materialElement;
            this.data['materialElementBeingEdited'] = this.materialElement;
        }
        this.materialElementIndex = null;
    }

    deleteMaterialElement() {
        if (
            confirm('Are you sure you wish to delete this material element?')
        ) {
            this.data.materialElementBeingEdited = this.materialElement;
            this.data.materialElements.splice(
                this.data.materialElements[this.materialElementIndex],
                1
            );
            this.materialElementIndex = null;
        }
    }

    deleteInherentFunction() {
        if (confirm("Are you sure you wish to delete this inherent function?")) {
            this.materialElement.inherentFunctionList.splice(this.inherentFunctionIndex,1)
        };
        this.inherentFunctionIndex=null;
    }

    editMaterialElement(index, element) {
        this.materialElement = JSON.parse(JSON.stringify(element));
        this.materialElementIndex = index;
        setTimeout(function () {
            document.getElementById('materialElementForm').scrollIntoView();
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
        this.materialElementIndex=null;
        this.inherentFunctionIndex=null;
        this.resetStatus=true;
    }

    saveInherentFunction() {
        if (this.inherentFunctionIndex==-1) {
            if (!this.materialElement.inherentFunctionList) {
                this.materialElement['inherentFunctionList']=[];
            }
            this.materialElement.inherentFunctionList.push(this.inherentFunction);
        }
        else {
            this.materialElement.inherentFunctionList[this.inherentFunctionIndex]=this.inherentFunction;
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

    prepareSubmitData() {
        if (this.data.simpleProtocol.displayName != '') {
            this.data.simpleProtocol = this.setupData.protocolLookup.find(
                e => e.displayName == this.data.simpleProtocol.displayName);
        }
    }

    submit() {
        this.prepareSubmitData();
        this.apiService
            .doPost(Consts.QUERY_SYNTHESIS_MATERIAL_UPDATE, this.data)
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
