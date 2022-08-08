import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Properties } from '../../../../../../assets/properties';
import { Consts } from '../../../../../constants';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavigationService } from '../../../../common/services/navigation.service';
import { ApiService } from '../../../../common/services/api.service';
@Component({
  selector: 'canano-chemicalassociation',
  templateUrl: './chemicalassociation.component.html',
  styleUrls: ['../../../../../btn-bravo-canano.scss','./chemicalassociation.component.scss']
})
export class ChemicalassociationComponent implements OnInit {
  sampleId = Properties.CURRENT_SAMPLE_ID;
  consts=Consts;
  dataId;
  sampleName = Properties.CURRENT_SAMPLE_NAME;
  helpUrl =  Consts.HELP_URL_SAMPLE_COMPOSITION;
  toolHeadingNameManage = 'Sample Composition';
  data;
  dataTrailer;
  errors={};
  fileIndex;
  message;
  nanomaterialEntityOptions;
  functionalizingEntityOptions;
  composingElementOptionsA;
  composingElementOptionsB;
  dataLoaded;
  entityOptionsA;
  entityOptionsB;
  resetStatus=false;
  setupData;
  currentDropdownValues;
  currentField;
    constructor( private apiService:ApiService,private navigationService:NavigationService,private router: Router, private route: ActivatedRoute ){
    }


    ngOnInit(): void{
        this.navigationService.setCurrentSelectedItem(1);
        this.currentDropdownValues = {};
        this.entityOptionsA = [];
        this.entityOptionsB = [];
        this.composingElementOptionsA = [];
        this.composingElementOptionsB = [];
        this.nanomaterialEntityOptions = [];
        this.functionalizingEntityOptions = [];

        this.data = this.setDefaultDataSet();
        this.dataTrailer = this.setDefaultDataSet();
      this.route.params.subscribe(
          ( params: Params ) => {
            this.sampleId = params['sampleId'];
            this.dataId = params['dataId'];

            if(
                  this.sampleId <= 0 ){
                  this.sampleId = Properties.CURRENT_SAMPLE_ID;
              }else{
                  Properties.CURRENT_SAMPLE_ID = this.sampleId;
              };
              this.apiService.getSampleName(this.sampleId).subscribe(
                data=>this.toolHeadingNameManage='Edit ' +data['sampleName'] + ' Chemical Association'
            )
              if (this.dataId) {
                this.data = this.getdata().subscribe(
                    data => {
                        Properties.SAMPLE_TOOLS = true;
                        this.data = data;
                        this.dataTrailer = JSON.parse(JSON.stringify(this.data));
                        Properties.CURRENT_SAMPLE_NAME = data['sampleName'];
                        this.loadSetupData();
                        this.errors={};
                    },
                    error=>{
                        Properties.SAMPLE_TOOLS = true;
                        this.errors=error;
                    } );
              }
              else {
                  this.loadSetupData();
                  Properties.SAMPLE_TOOLS = true;

              }



                }


      );
  }

  getError(error:Object) {
    this.errors=error;
}

  getdata(){
    let getUrl = Consts.QUERY_CHEMICAL_ASSOCIATION_EDIT;

    if( Properties.DEBUG_CURL ){
        let curl = 'curl  -k \'' + getUrl + '\'';
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
        results = this.apiService.doGet(getUrl,'sampleId='+this.sampleId+'&dataId='+this.dataId);
    }catch( e ){
        // TODO react to error.
        this.errors=e;
        console.error( 'doGet Exception: ' + e );
    }
    return results;

}

isSubmissionValid() {
    if (this.data.type=='') {
        return true
    }
    if (this.data.type=='attachment'&&this.data.bondType=='') {
        return true
    }
    let AKeys=Object.keys(this.data['associatedElementA']);
    let BKeys=Object.keys(this.data['associatedElementB']);
    let ACount=[];
    let BCount=[];

    AKeys.forEach(item=> {
        if (this.data['associatedElementA'][item]=='') {
            ACount.push(item)
        }
        if (this.data['associatedElementA']['compositionType']=='nanomaterial entity') {
            if (this.data['associatedElementA']['composingElement']['id']=='') {
                ACount.push(item)
            }
        }
    })
    BKeys.forEach(item=> {
        if (this.data['associatedElementB'][item]=='') {
            BCount.push(item)
        }
        if (this.data['associatedElementB']['compositionType']=='nanomaterial entity') {
            if (this.data['associatedElementB']['composingElement']['id']=='') {
                BCount.push(item)
            }
        }
    })
    if (ACount.length||BCount.length) {
        return true
    }
    return false
}
setDefaultDataSet() {
    return {
        "sampleId":this.sampleId,
        "type":"",
        "bondType":"",
        "description":"",
        "files":[],
        "associatedElementA":{
            "compositionType":"",
            "entityId":"",
            "entityDisplayName":"",
            "composingElement":{
                "id":""
            }
        },
        "associatedElementB":{
            "compositionType":"",
            "entityId":"",
            "entityDisplayName":"",
            "composingElement":{
                "id":""
            }
        }
    }
};


    // set pointer fields to old values when adding other //
    addOtherValue(field,currentValue) {
        this.currentDropdownValues[field]=currentValue;
    };

// save other value //
saveOther(newItem: Object) {
    if (newItem['change'] && newItem['value']) {
        this.addDropdownItem(newItem['array'],newItem['value']);
        this.setValue(newItem['field'],newItem['value']);
    }
    else {
        this.setValue(newItem['field'],newItem['value']);
    }
};

changeEntityId(compositionType,entity, val) {
    // no need to do anything if functionalizing entity //
    if (entity=='nanomaterial entity') {
        if (compositionType==='compositionTypeA') {
            this.data.assoentityDisplayName;
            let url = this.apiService.doPost(Consts.QUERY_CHEMICAL_ASSOCIATION_GET_COMPOSING_ELEMENTS_BY_NANO_ID+'?id='+val,{});
            url.subscribe( data => {
                this.composingElementOptionsA=data;
                this.errors={};
            },
            err => {
                this.errors=err;
            });
        }
        else {
            let url = this.apiService.doPost(Consts.QUERY_CHEMICAL_ASSOCIATION_GET_COMPOSING_ELEMENTS_BY_NANO_ID+'?id='+val,{});
            url.subscribe( data => {
                this.composingElementOptionsB=data;
                this.errors={};
            },
            err => {
                this.errors=err;
            });
        }
    };

    if (compositionType=='compositionTypeA') {
        this.entityOptionsA.forEach(element => {
            if (element.domainId==val) {
                this.data.associatedElementA.entityDisplayName=element.displayName;
            }
        });
    }
    else {
        this.entityOptionsB.forEach(element => {
            if (element.domainId==val) {
                this.data.associatedElementB.entityDisplayName=element.displayName;
            }
        });
    }
}

changeCompositionType(compositionType,val,edit) {

    if (compositionType==='compositionTypeA') {
        this.entityOptionsA = val=='nanomaterial entity' ? this.nanomaterialEntityOptions:this.functionalizingEntityOptions;
        if (!edit) {
            this.data['associatedElementA']['entityId']=''
            this.data['associatedElementA']['entityDisplayName']=''
            this.data['associatedElementA']['composingElement']={'id':''}
        }

    }
    else {
        this.entityOptionsB = val=='nanomaterial entity' ? this.nanomaterialEntityOptions:this.functionalizingEntityOptions;
        if (!edit) {
            this.data['associatedElementB']['entityId']=''
            this.data['associatedElementB']['entityDisplayName']=''
            this.data['associatedElementB']['composingElement']={'id':''}
        }

    }
}

deleteChemicalAssociation() {
    if (confirm("Are you sure you want to delete this functionalizing entity?")) {
        let url = this.apiService.doPost(Consts.QUERY_CHEMICAL_ASSOCIATION_DELETE,this.data);
        url.subscribe( data => {
            this.router.navigate( ['home/samples/composition', this.sampleId] );
            this.errors={};
        },
        err => {
            this.errors=err;
        });
    }
}

resetChemicalAssociation() {
    this.resetStatus=true;
    this.data = JSON.parse(JSON.stringify(this.dataTrailer));
}

submitChemicalAssociation() {
    let url = this.apiService.doPost(Consts.QUERY_CHEMICAL_ASSOCIATION_SAVE,this.data);
    url.subscribe( data => {
        this.router.navigate( ['home/samples/composition', this.sampleId] );
        this.errors={};
    },
    err => {
        this.errors=err;
    });
}

selectAssociatedElement(entityId,domainId) {
    return entityId==domainId ? true:false;
}

loadDropdowns() {
    this.changeEntityId('compositionTypeA',this.data.associatedElementA.compositionType,this.data.associatedElementA.entityId)
    this.changeEntityId('compositionTypeB',this.data.associatedElementB.compositionType,this.data.associatedElementB.entityId)
    this.changeCompositionType('compositionTypeA',this.data.associatedElementA.compositionType,true)
    this.changeCompositionType('compositionTypeB',this.data.associatedElementB.compositionType,true)

}

loadSetupData() {
    let getUrl = this.apiService.doGet(Consts.QUERY_CHEMICAL_ASSOCIATION_SETUP,'sampleId='+this.sampleId);
    getUrl.subscribe( data => {
        this.setupData = data;
        let nanoUrl = this.apiService.doPost(Consts.QUERY_CHEMICAL_ASSOCIATION_GET_ASSOCIATED_ELEMENT_OPTIONS+'?compositionType=nanomaterial entity',{});
        nanoUrl.subscribe( data => {
            let functionalizingUrl = this.apiService.doPost(Consts.QUERY_CHEMICAL_ASSOCIATION_GET_ASSOCIATED_ELEMENT_OPTIONS+'?compositionType=functionalizing entity',{});
            this.nanomaterialEntityOptions=data;
            functionalizingUrl.subscribe( data => {
                this.errors={};
                this.functionalizingEntityOptions=data;
                if (this.dataId) {
                    this.loadDropdowns();
                }
                Properties.SAMPLE_TOOLS = true;

            },
            err => {
                this.errors=err;
            });
        },
        err => {
            this.errors=err;
        });
    },
    err => {
        this.errors=err;
    });
}

changeFile(newItem:Object) {
    if (newItem['type']=='save'||newItem['type']=='delete') {
        this.data=newItem['data'];
        this.dataTrailer = JSON.parse(JSON.stringify(this.data));
    }
}




}
