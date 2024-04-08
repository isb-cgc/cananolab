import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router,ActivatedRoute, PRIMARY_OUTLET } from '@angular/router';
import { Params } from '@angular/router';
import { Properties } from '../../../../../../assets/properties';
import { Consts } from '../../../../../constants';
import { NavigationService } from '../../../../common/services/navigation.service';
import { ApiService } from '../../../../common/services/api.service';
import { EditpublicationPipe } from './editpublication.pipe';

@Component({
  selector: 'canano-editpublication',
  templateUrl: './editpublication.component.html',
  styleUrls: ['../../../../../btn-bravo-canano.scss','./editpublication.component.scss']
})
export class EditpublicationComponent implements OnInit {
    accessIndex;
    authorIndex;
    currentAuthor;
    currentDropdownValues;
    currentFile;
    data;
    dataTrailer;
    errors;
    fileName;
    helpUrl = Consts.HELP_URL_CREATE_PUBLICATIONS;
    message;
    publicationId;
    recipientList;
    sampleId = Properties.CURRENT_SAMPLE_ID;
    sampleList;
    samples;
    setupData;
    toolHeadingNameManage;
    theAccess;
    theFile;
    type;
    downloadUrl=Consts.QUERY_PUBLICATION_DOWNLOAD;
    submitReviewButton=true;
    editingAccessRow = false;
    viewOnly = false;


  constructor(private apiService:ApiService,private navigationService:NavigationService,private httpClient:HttpClient,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
      console.log(Consts)
    this.navigationService.setCurrentSelectedItem(3);
    this.currentDropdownValues={};
    this.recipientList;
    this.errors={};
    this.sampleList=[];
    this.currentFile={
        "uriExternal":false,
    }

    this.route.params.subscribe(
        ( params: Params ) => {
            this.sampleId=params['sampleId'];
            this.type=params['type'];
            this.publicationId=params['publicationId'];
            if (this.sampleId) {
                this.apiService.getSampleName(this.sampleId).subscribe(data=>this.toolHeadingNameManage='Edit '+data['sampleName']+' Publication')
            }

            if (this.publicationId && this.publicationId != -1) {
                this.helpUrl = Consts.HELP_URL_EDIT_PUBLICATIONS;
            } else {
                this.helpUrl = Consts.HELP_URL_CREATE_PUBLICATIONS;
            }

            if(
                this.sampleId <= 0 ){
                this.sampleId = Properties.CURRENT_SAMPLE_ID;
            }else{
                Properties.CURRENT_SAMPLE_ID = this.sampleId;
            };

            this.type=params['type'];
            let url = this.apiService.doGet(Consts.QUERY_PUBLICATION_SETUP,'');
            url.subscribe(data=> {
                if (this.sampleId) { Properties.SAMPLE_TOOLS = true; }
                this.setupData=data;
                this.setupData['otherSampleNames']=[];
                if (!this.publicationId || this.publicationId == -1) {
                    this.data["isCuratorEditing"] = this.setupData["isCuratorEditing"];
                }
            },
            error=> {
                this.errors=error;
            })

            if (this.publicationId) {
                if (this.publicationId!=-1) {
                    this.toolHeadingNameManage='Edit Publication';

                    var editUrl;
                    if (this.sampleId) {
                        editUrl = this.apiService.doGet(Consts.QUERY_PUBLICATION_EDIT,'publicationId='+this.publicationId+'&sampleId='+this.sampleId);
                    }
                    else {
                        editUrl = this.apiService.doGet(Consts.QUERY_PUBLICATION_EDIT,'publicationId='+this.publicationId+'&sampleId=');
                    }
                    editUrl.subscribe(data=> {
                        this.data=data;
                        this.currentFile['uriExternal']=data['uriExternal'];
                        this.currentFile['externalUrl']=data['uri'];
                        this.errors={};

                        // Check if user has write access to publication, to show view or edit page
                        var url = this.apiService.doGet(Consts.QUERY_PUBLICATION_WRITE_ACCESS,'publicationId=' + this.publicationId);
                        url.subscribe(data=> {
                            var hasWriteAccess = data;
                            if (hasWriteAccess) {
                                // current user have write access
                                this.toolHeadingNameManage='Edit Publication';
                                this.viewOnly = false;
                                this.helpUrl=Consts.HELP_URL_EDIT_PUBLICATIONS;                            
                            } else {
                                this.toolHeadingNameManage='View Publication';
                                this.viewOnly = true;
                                this.helpUrl=Consts.HELP_URL_VIEW_PUBLICATIONS;
                            }
                        },
                        error=> {
                            console.log(error);
                        })
                    },
                    error=>{
                        this.errors=error;
                    })
                }
                else {
                    this.toolHeadingNameManage='Create Publication';
                    this.setupNewPublication();
                }

            }
            else {
                if (this.sampleId) {

                }
                else {
                    console.log('completely new')
                }
                this.setupNewPublication();
            }
        }
    );
  }

    addAccess() {
        this.accessIndex=-1;
        this.recipientList=null;
        this.theAccess={
                "accessType":"",
                "recipient":"",
                "roleName":"",
                "recipientDisplayName":""
            }

        this.editingAccessRow = false;
    }

    addAuthor() {
        this.authorIndex=-1;
        this.currentAuthor={
            "firstName":"",
            "lastName":"",
            "initial":""
        }
    }

    delete() {
        if (confirm("Are you sure you wish to delete this publication?")) {
            let url = this.apiService.doPost(Consts.QUERY_PUBLICATION_DELETE,this.data);
            url.subscribe(data=> {
                if (this.sampleId) {
                    this.router.navigate( ['home/samples/publications', this.sampleId] );  // @FIXME  Don't hard code these
                }
                else {
                    this.router.navigate( ['/home/publications'] );  // @FIXME  Don't hard code these
                }
            },
            errors=> {
                this.errors=errors;
            })
        };
    };

    editAccess(index,access) {
        console.log(index,access)
        this.accessIndex=index;
        this.recipientList=null;
        this.theAccess=JSON.parse(JSON.stringify(access));
        this.editingAccessRow = true;
    }

    editAuthor(index,author) {
        this.authorIndex=index;
        this.currentAuthor=JSON.parse(JSON.stringify(author));
    }

    // set pointer fields to old values when adding other //
    addOtherValue(field,currentValue) {
        this.currentDropdownValues[field]=currentValue;
    };

    cancelAuthor() {
        this.authorIndex=null;
    }

    cancelAccess() {
        this.accessIndex=null;
    }

    changeAccessType(event) {
        this.recipientList=null;
        this.theAccess.recipient='';
        this.theAccess.roleName='';

        if (event=='role') {
            this.theAccess.recipient='ROLE_ANONYMOUS';
            this.theAccess['recipientDisplayName']='public';
            this.theAccess.roleName="R";
        }
    }

    deleteAuthor(index) {
        if (confirm("Are you sure you wish to delete this author?")) {
            this.data['authors'].splice(index,1);
            this.authorIndex=null;
        }
    }

    deleteAccess() {
        if (confirm("Are you sure you wish to delete this " + this.theAccess.accessType + "?")) {
            this.data['theAccess']=this.theAccess;
            let url = this.apiService.doPost(Consts.QUERY_PUBLICATION_DELETE_ACCESS,this.data);
            url.subscribe(data=>{
                this.data=data;
                this.accessIndex=null;
                this.errors={};
            },
            error=> {
                this.errors=error;
            })
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

    getSampleList() {
        let url = this.apiService.doGet(Consts.QUERY_PUBLICATION_GET_SAMPLES,'searchStr=');
        url.subscribe(data=> {
            this.sampleList=data;
        },
        error=> {
            this.errors=error;
        })
    }


    lookupPubMedId(event) {
        if (event.target.value!='') {
            let category=JSON.parse(JSON.stringify(this.data.category));
            let status=JSON.parse(JSON.stringify(this.data.status));
            let getPubmedUrl = this.apiService.doGet(Consts.QUERY_PUBLICATION_GET_PUBMED_PUBLICATION,'pubmedId='+event.target.value);
            getPubmedUrl.subscribe(data=> {
                if (confirm("A database record with the same PubMed ID already exists.  Load saved information?")) {
                    var editUrl;
                    if (this.sampleId) {
                        editUrl = this.apiService.doGet(Consts.QUERY_PUBLICATION_EDIT,'publicationId='+data+'&sampleId='+this.sampleId);
                    }
                    else {
                        editUrl = this.apiService.doGet(Consts.QUERY_PUBLICATION_EDIT,'publicationId='+data+'&sampleId=');
                    }
                    editUrl.subscribe(data=> {
                        this.data=data;
                        this.setupData['otherSampleNames']=this.data['otherSampleNames'];
                        this.data['otherSampleNames']=[];
                        this.authorIndex=null;
                        this.accessIndex=null;
                        this.errors={};
                    },
                    error=> {
                        this.errors=error;

                    })
                }
                else {
                    this.retrieveRecordByPubmedId(event.target.value,category,status);
                }
            },
            error=> {
                this.retrieveRecordByPubmedId(event.target.value,category,status);
            })
        }

    }

    retrieveRecordByPubmedId(pubMedId,category,status) {
        let url = this.apiService.doGet(Consts.QUERY_PUBLICATION_GET_PUBMED_INFO,'pubmedId='+pubMedId);
        url.subscribe(data=> {
            this.authorIndex=null;
            this.accessIndex=null;
            this.data={
                "authors":data['authors'],
                "otherSampleNames":[],
                "pubMedId":pubMedId,
                "category":category,
                "status":status,
                "description":data['description'],
                "digitalObjectId":data['domainFile']['digitalObjectId'],
                "endPage":data['domainFile']['endPage'],
                "isPublic":false,
                "journalName":data['domainFile']['journalName'],
                "keywordsStr":data['keywordsStr'],
                "startPage":data['domainFile']['startPage'],
                "theAccess":data['theAccess'],
                "title":data['domainFile']['title'],
                "uriExternal":data['domainFile']['uriExternal'],
                "volume":data['domainFile']['volume'],
                "year":data['domainFile']['year'],
                "groupAccesses":[],
                "userAccesses":[]
            };

            this.errors={};
        },
        error=> {
            this.errors=error;
        })
    }

    resetPublication() {
        this.data=JSON.parse(JSON.stringify(this.dataTrailer));
    }

    saveAuthor() {
        if (this.authorIndex==-1) {
            this.data.authors.push(this.currentAuthor);
        }
        else {
            this.data['authors'][this.authorIndex]=this.currentAuthor;
        }
        this.authorIndex=null;
    }

    // save other value //
    saveOther(newItem: Object) {
        if (newItem['change'] && newItem['value']) {
            this.addDropdownItem(newItem['array'],newItem['value'])
            this.setValue(newItem['field'],newItem['value']);
        }
        else {
            this.setValue(newItem['field'],newItem['value']);
        }
    };

    savePublication() {
        console.log('upload file fifrst')
    };

    saveAccess() {
        this.data['theAccess']=this.theAccess;
        let url = this.apiService.doPost(Consts.QUERY_PUBLICATION_SAVE_ACCESS,this.data);
        url.subscribe(data=> {
            this.data=data;
            this.errors={};
        },
        error=> {
            this.errors=error;
        });
        this.accessIndex=null;
    }

    selectSamples() {
        this.data.sampleNamesStr=this.samples.join('\r');
    }

  setupNewPublication() {
      this.data={
          "authors":[],
          "theAccess":{},
          "isPublic":false,
          "otherSampleNames":[],
          "status":"",
          "title":"",
          "uriExternal":false,
          "year":"",
          "category":this.type,
          "sampleId":this.sampleId,
          "researchAreas":[],
          "userAccesses":[],
         "groupAccesses":[]
      }
      if (this.publicationId==-1) {
        this.data['category']='';
        this.data['sampleId']='';
    }
    console.log()
      this.data['theAccess']={};
      this.dataTrailer=JSON.parse(JSON.stringify(this.data));
  };

  submit() {
      if (this.theFile) {
        this.theFile.append('uriExternal',this.currentFile['uriExternal']);
        this.theFile.append('externalUrl',this.currentFile['externalUrl']);
        let uploadFileUrl = this.httpClient.post(Consts.QUERY_UPLOAD_FILE,this.theFile);
            uploadFileUrl.subscribe(data=> {
            this.data['uri']=data['fileName'];
            this.submitPublication();
            this.errors={};
        },
        error=> {
            this.errors=error;
        })
      }
      else {
          if (this.currentFile['uriExternal']) {
              if (this.currentFile['externalUrl']&& this.currentFile['externalUrl']!='') {
                this.data['uriExternal']=true;
                this.data['externalUrl']=this.currentFile['externalUrl'];
              }
          }
          this.submitPublication();
      }

  }

  submitPublication() {
    this.data['sampleId']=this.sampleId;
    let submitUrl = this.apiService.doPost(Consts.QUERY_PUBLICATION_SAVE,this.data);
    submitUrl.subscribe(data=> {
        if (this.sampleId) {
            this.router.navigate( ['home/samples/publications', this.sampleId] );  // @FIXME  Don't hard code these
        }
        else {
            if (this.publicationId==-1) {
                this.router.navigate( ['home/samples/publications/publication', data[1]] );  // @FIXME  Don't hard code these
                this.message='Publication successfully updated with the title '+this.data['title'];
            }
            else {
                let editUrl = this.apiService.doGet(Consts.QUERY_PUBLICATION_EDIT,'publicationId='+this.publicationId+'&sampleId=');
                editUrl.subscribe(data=> {
                    this.data=data;
                    this.dataTrailer=JSON.parse(JSON.stringify(this.data));

                },
                errors=> {
                    this.errors=errors;
                })
                this.message='Publication successfully updated with the title '+this.data['title'];

            }

            setTimeout(function() {
                document.getElementById('top').scrollIntoView();
            },100);
        }
    },
    error=> {
        this.errors=error;

    })
  }


    uploadFile(event) {
        this.theFile = new FormData();
        const tFile = event.target.files.item(0);
        this.theFile.append('myFile', tFile, tFile.name);
        this.theFile.append( 'uriExternal', 'false' );
        this.theFile.append('authors',this.data['authors'])
        this.theFile.append('theAccess',this.theAccess);
        this.theFile.append('category',this.data['category']);
        this.theFile.append('status',this.data['status']);
    }

    shouldShowAccessEditButton(group) {
        if (group.recipient == 'ROLE_CURATOR') {
            return false;
        } else if (group.recipient == 'ROLE_ANONYMOUS') {
            return this.data != null && this.data['isCuratorEditing'];
        }

        return true;
    }


    submitForReview() {
        console.log(this.data)
        let url = this.apiService.doPost(Consts.QUERY_PUBLICATION_SUBMIT_REVIEW,{dataId: this.data.fileId, dataName: this.data.title, dataType:"publication"},'text');
        url.subscribe(data=> {
            this.submitReviewButton=false;
        })
    }

}
