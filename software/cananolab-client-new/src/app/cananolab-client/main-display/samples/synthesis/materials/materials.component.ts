import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Consts } from '../../../../../constants';
import { ApiService } from '../../../../common/services/api.service';
import { Properties } from '../../../../../../assets/properties';
import { NavigationService } from '../../../../common/services/navigation.service';
@Component({
  selector: 'canano-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent implements OnInit {

    // materialElementIndex;
    // consts=Consts;
    // currentDropdownValues = {};
    // currentField;
    // data;
    // 
    
    // errors = {};
    // helpUrl = Consts.HELP_URL_SAMPLE_SYNTHESIS;
    // resetStatus=false;
    // otherValue;

    // tempShow = false;
    // dropdowns = {};
    // currentFile = {}; // current file being edited //
    // fileArray = [];
    // inherentFunction = {}; // current inherent function being edited //
    // inherentFunctionFormIndex = null;
    // fileFormIndex = null;
    // materialElement = {}; // current material being edited //
    // materialElementFormIndex = null;
    // sampleId;
    // sampleName = '';
    // synMaterialId = $location.search()['synMaterialId'];
    // sampleName = sampleService.sampleName($scope.sampleId);
    // fileId = null;
    // otherSupplier='';  

    sampleId;
    dataId;
    data;
    errors = {};
    helpUrl = Consts.HELP_URL_SAMPLE_SYNTHESIS;
    toolHeadingNameManage = ' Sample Synthesis - Material';
    setupData;
    dataTrailer;

    constructor(
        private navigationService: NavigationService,
        private router: Router,
        private route: ActivatedRoute,
        private apiService: ApiService,
    ) { }

    ngOnInit(): void {
        this.navigationService.setCurrentSelectedItem(1);
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
                        // this.dropdowns = data;
                    },
                    (errors) => {
                        this.errors = errors;
                    }
                );

            if (this.dataId) {
                this.apiService
                    .doGet(
                        Consts.QUERY_SYNTHESIS_MATERIAL_EDIT,
                        'sampleId=' + this.sampleId + '&dataId=' + this.dataId
                    )
                    .subscribe(
                        (data) => {
                            this.data = data['data'];
                            // this.material = data;
                            // this.dataTrailer = JSON.parse(JSON.stringify(data));
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
            composingElements: [],
            files: [],
        };
        this.dataTrailer=JSON.parse(JSON.stringify(this.data));

    }

    // addInherentFunction() {
    //     this.inherentFunctionIndex=-1;
    //     this.inherentFunction={type:"",description:"",modality:""};
    //     setTimeout(function () {
    //         document.getElementById('inherentFunctionForm').scrollIntoView();
    //     }, 100);
    // }

    // addComposingElement() {
    //     this.composingElementIndex = -1;
    //     this.composingElement = {
    //         type: '',
    //         name: '',
    //         pubChemDataSourceName: '',
    //         valueUnit: '',
    //         molecularFormulaType: '',
    //         inherentFunction: [],
    //     };
    //     setTimeout(function () {
    //         document.getElementById('composingElementForm').scrollIntoView();
    //     }, 100);
    // }

    // // set pointer fields to old values when adding other //
    // addOtherValue(field, currentValue) {
    //     this.currentDropdownValues[field] = currentValue;
    // }

    // cancelComposingElement() {
    //     this.composingElementIndex = null;
    //     this.inherentFunctionIndex = null;
    // }

    // cancelInherentFunction() {
    //     this.inherentFunctionIndex=null;
    // }

    // changeFile(newItem: Object) {
    //     if (newItem['type'] == 'save' || newItem['type'] == 'delete') {
    //         this.data = newItem['data'];
    //         this.dataTrailer = JSON.parse(JSON.stringify(this.data));
    //     }
    // }

    // convertDomainEntityFieldsToNullAndStrings() {
    //     let fieldsToIgnore = ['id', 'createdDate', 'sampleComposition'];
    //     if (this.data['domainEntity']) {
    //         let domainEntityKeys = Object.keys(this.data['domainEntity']);
    //         domainEntityKeys.forEach((item) => {
    //             if (this.data.domainEntity[item] != null) {
    //                 if (
    //                     this.data.domainEntity[item] != '' &&
    //                     fieldsToIgnore.indexOf(item) == -1
    //                 ) {
    //                     this.data.domainEntity[item] =
    //                         this.data.domainEntity[item].toString();
    //                 }
    //                 if (this.data.domainEntity[item] == '') {
    //                     this.data.domainEntity[item] = null;
    //                 }
    //             }
    //         });
    //     }
    // }

    // convertToString(event) {
    //     this.data.domainEntity[event.target.id] = event.target.value.toString();
    // }

    // delete() {
    //     if (confirm('Are you sure you wish to delete this nanomaterial?')) {
    //         this.convertDomainEntityFieldsToNullAndStrings();
    //         setTimeout(() => {
    //             this.apiService
    //                 .doPost(Consts.QUERY_NANOMATERIAL_DELETE, this.data)
    //                 .subscribe(
    //                     (data) => {
    //                         this.router.navigate([
    //                             'home/samples/composition',
    //                             this.sampleId,
    //                         ]);
    //                     },
    //                     (error) => {
    //                         this.errors = error;
    //                     }
    //                 );
    //         }, 200);
    //     }
    // }

    // deleteComposingElement() {
    //     if (
    //         confirm('Are you sure you wish to delete this composing element?')
    //     ) {
    //         this.convertDomainEntityFieldsToNullAndStrings();
    //         this.data.simpleCompBean = this.composingElement;
    //         this.data.composingElements.splice(
    //             this.data.composingElements[this.composingElementIndex],
    //             1
    //         );
    //         this.apiService
    //             .doPost(Consts.QUERY_REMOVE_COMPOSING_ELEMENT, this.data)
    //             .subscribe(
    //                 (data) => {
    //                     this.composingElementIndex = null;
    //                     this.inherentFunctionIndex = null;
    //                     this.data = data;
    //                     this.setupDataTrailer(data);
    //                     this.errors = {};
    //                 },
    //                 (error) => {
    //                     this.errors = error;
    //                 }
    //             );
    //     }
    // }

    // deleteInherentFunction() {
    //     if (confirm("Are you sure you wish to delete this inherent function?")) {
    //         this.composingElement.inherentFunction.splice(this.inherentFunctionIndex,1)
    //     };
    //     this.inherentFunctionIndex=null;
    // }

    // editComposingElement(index, element) {
    //     this.composingElement = JSON.parse(JSON.stringify(element));
    //     this.composingElementIndex = index;
    //     setTimeout(function () {
    //         document.getElementById('composingElementForm').scrollIntoView();
    //     }, 100);
    // }

    // editInherentFunction(fIndex,iFunction) {
    //     this.inherentFunctionIndex=fIndex;
    //     this.inherentFunction=JSON.parse(JSON.stringify(iFunction));
    //     setTimeout(function () {
    //         document.getElementById('inherentFunctionForm').scrollIntoView();
    //     }, 100);
    // }

    // getError(error:Object) {
    //     this.errors=error;
    // }

    // readyToSubmit() {
    //     let submissionStatus = true;
    //     if (this.data.type == 'biopolymer') {
    //         if (
    //             this.data.domainEntity.name == '' ||
    //             this.data.domainEntity.name == null
    //         )
    //             submissionStatus = false;
    //         if (
    //             this.data.domainEntity.type == '' ||
    //             this.data.domainEntity.type == null
    //         )
    //             submissionStatus = false;
    //     }
    //     if (this.data.type == '') submissionStatus = false;
    //     return submissionStatus;
    // }

    // reset() {
    //     this.data=JSON.parse(JSON.stringify(this.dataTrailer));
    //     this.composingElementIndex=null;
    //     this.inherentFunctionIndex=null;
    //     this.resetStatus=true;
    // }

    // saveComposingElement() {
    //     this.convertDomainEntityFieldsToNullAndStrings();
    //     if (this.composingElementIndex == -1) {
    //         this.data['simpleCompBean'] = this.composingElement;
    //     } else {
    //         this.data['composingElements'][this.composingElementIndex] =
    //             this.composingElement;
    //         this.data['simpleCompBean'] = this.composingElement;
    //     }
    //     this.apiService
    //         .doPost(Consts.SAVE_COMPOSING_ELEMENT, this.data)
    //         .subscribe(
    //             (data) => {
    //                 this.composingElementIndex = null;
    //                 this.inherentFunctionIndex = null;
    //                 this.data = data;
    //                 this.setupDataTrailer(data);
    //                 this.errors = {};
    //             },
    //             (error) => {
    //                 this.errors = error;
    //             }
    //         );
    // }

    // saveInherentFunction() {
    //     if (this.inherentFunctionIndex==-1) {
    //         this.inherentFunction.id="-1000";
    //         if (!this.composingElement.inherentFunction) {
    //             this.composingElement['inherentFunction']=[];
    //         }
    //         this.composingElement.inherentFunction.push(this.inherentFunction);
    //     }
    //     else {
    //         this.composingElement.inherentFunction[this.inherentFunctionIndex]=this.inherentFunction;
    //     }
    //     this.inherentFunctionIndex=null;
    // }
    // // save other value //
    // saveOther(newItem: Object) {
    //     if (newItem['change'] && newItem['value']) {
    //         this.addDropdownItem(newItem['array'], newItem['value']);
    //         this.setValue(newItem['field'], newItem['value']);
    //     } else {
    //         this.setValue(newItem['field'], newItem['value']);
    //     }
    // }

    // setupDataTrailer(data) {
    //     this.dataTrailer = JSON.parse(JSON.stringify(data));
    // }

    // setupDomainEntity(event) {
    //     delete this.data['domainEntity'];
    //     if (event == 'biopolymer')
    //         this.data['domainEntity'] = {
    //             type: null,
    //             name: null,
    //             sequence: null,
    //         };
    //     if (event == 'dendrimer')
    //         this.data['domainEntity'] = { branch: null, generation: null };
    //     if (event == 'fullerene')
    //         this.data['domainEntity'] = {
    //             averageDiameter: null,
    //             averageDiameterUnit: null,
    //             numberOfCarbon: null,
    //         };
    //     if (event == 'liposome')
    //         this.data['domainEntity'] = {
    //             isPolymerized: null,
    //             polymerName: null,
    //         };
    //     if (event == 'polymer')
    //         this.data['domainEntity'] = {
    //             isCrossLinked: null,
    //             initiator: null,
    //             crossLinkDegree: null,
    //         };
    //     if (event == 'emulsion')
    //         this.data['domainEntity'] = {
    //             isPolymerized: null,
    //             polymerName: null,
    //         };
    //     if (event == 'carbon nanotube')
    //         this.data['domainEntity'] = {
    //             averageLength: null,
    //             diameter: null,
    //             averageLengthUnit: null,
    //             diameterUnit: null,
    //             chirality: null,
    //             wallType: null,
    //         };
    // }


    // submit() {
    //     this.convertDomainEntityFieldsToNullAndStrings();
    //     this.apiService
    //         .doPost(Consts.QUERY_NANOMATERIAL_UPDATE, this.data)
    //         .subscribe(
    //             (data) => {
    //                 this.router.navigate([
    //                     'home/samples/composition',
    //                     this.sampleId,
    //                 ]);
    //             },
    //             (errors) => {
    //                 this.errors = errors;
    //             }
    //         );
    // }
}
