import { Component, OnInit, OnChanges,Output, EventEmitter, Input } from '@angular/core';
import { Properties } from '../../../../../assets/properties';
import { HttpClient } from '@angular/common/http';
import { Consts } from 'src/app/constants';
@Component({
  selector: 'canano-file',
  templateUrl: './file.component.html',
  styleUrls: ['../../../../btn-bravo-canano.scss','./file.component.scss']
})
export class FileComponent implements OnInit, OnChanges {
@Input() data;
@Input() fileArray;
@Input() fileVariable;
@Input() sampleId;
@Input() saveUrl;
@Input() deleteUrl;
@Input() nanomaterial;
@Input() reset;
@Output() changeFile = new EventEmitter<Object>();
@Output() getError = new EventEmitter<Object>();
currentFile;
theFile;
fileIndex;
serverUrl = Properties.API_SERVER_URL;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.setupCurrentFile();
  }

  ngOnChanges(changes): void {
    if (changes['fileIndex']==-1) {
        this.setupCurrentFile();
    }
    if (this.reset) {
        this.fileIndex=null;
    }
  }

  addFile() {
      this.fileIndex=-1;
      this.setupCurrentFile();
  }

  // used in nanomaterial only //
  convertDomainEntityFieldsToNullAndStrings() {
    let fieldsToIgnore=['id','createdDate','sampleComposition']
    if (this.data['domainEntity']) {
        let domainEntityKeys = Object.keys(this.data['domainEntity']);
        domainEntityKeys.forEach((item) => {

            if (this.data.domainEntity[item] != null) {
                if (this.data.domainEntity[item] != '' && fieldsToIgnore.indexOf(item)==-1) {
                    this.data.domainEntity[item] = this.data.domainEntity[item].toString()
                }
                if (this.data.domainEntity[item] == '') {
                    this.data.domainEntity[item] = null;
                }
            }
        });
    }
}

  cancelFile() {
    this.changeFile.emit({
        "fileIndex":null,
        "data":this.data,
        "type":"cancel"
    });
    this.fileIndex=null;
  }

  deleteFile(file) {
    if (this.nanomaterial) {
        this.convertDomainEntityFieldsToNullAndStrings();
      };
    if (confirm("Are you sure you wish to delete this file?")) {
        this.data[this.fileVariable]=file;
        console.log(this.deleteUrl)
        let deleteUrl = this.httpClient.post('/'+this.deleteUrl,this.data);
        deleteUrl.subscribe(data=> {
            this.data=data;
            this.changeFile.emit({
                "fileIndex":null,
                "data":data,
                "type":"delete"
            });
            this.fileIndex=null;
        },
        error=> {

        })
    }

  }

  editFile(file) {
      console.log('test')
      this.fileIndex=1;
      this.currentFile=JSON.parse(JSON.stringify(file));
  }

  isFileUploadValid() {
      if (this.currentFile.type!=''&&this.currentFile.title!='') {
        if (this.currentFile.uriExternal) {
            if (this.currentFile.externalUrl!='') {
                return false;
            }
        }
        if (!this.currentFile.uriExternal) {
            if (this.theFile||this.fileIndex!=-1) {
                return false
            }
        }
      }
      return true;
  }

  uploadFile(event) {
    this.theFile = new FormData();
    const tFile = event.target.files.item(0);
    this.theFile.append('myFile', tFile, tFile.name);
  }

  saveFile() {
      if (this.nanomaterial) {
        this.convertDomainEntityFieldsToNullAndStrings();
      };
      if (this.currentFile.uriExternal) {
        this.data[this.fileVariable]={
            "description":this.currentFile.description,
            "keywordsStr":this.currentFile.keywordsStr,
            "title":this.currentFile.title,
            "type":this.currentFile.type,
            "uriExternal":true,
            "externalUrl":this.currentFile.externalUrl
        }
        let saveUrl=this.httpClient.post('/'+this.saveUrl,this.data) ;
        saveUrl.subscribe(data=> {
            this.data=data;
            this.changeFile.emit({
                "fileIndex":null,
                "data":data,
                "type":"save"
            });
            this.fileIndex=null;
        },
        error=> {
            this.getError.emit(error)
            console.log('file save error 1')
        })
      }
      else {
        if (this.theFile) {
            console.log('thefile?')
            this.theFile.append('uriExternal',this.currentFile['uriExternal']);
            this.theFile.append('externalUrl',this.currentFile['externalUrl']);
            this.theFile.append('type',this.currentFile['type']);
            this.theFile.append('title',this.currentFile['title']);
            this.theFile.append('keywordsStr',this.currentFile['keywordsStr']);
            this.theFile.append('description',this.currentFile['description']);
            let uploadUrl = this.httpClient.post('/'+Consts.QUERY_UPLOAD_FILE, this.theFile);
            uploadUrl.subscribe(data=> {
                this.data[this.fileVariable]={
                    "description":this.currentFile.description,
                    "keywordsStr":this.currentFile.keywordsStr,
                    "title":this.currentFile.title,
                    "type":this.currentFile.type,
                    "uri":data['fileName'],
                    "uriExternal":false,
                };
                if (this.fileIndex==1) {
                    this.data[this.fileVariable]['id']=this.currentFile['id'];
                }
                let saveUrl=this.httpClient.post('/'+this.saveUrl,this.data) ;
                saveUrl.subscribe(data=> {
                    this.data=data;
                    this.changeFile.emit({
                        "fileIndex":null,
                        "data":data,
                        "type":"save"
                    });
                    this.fileIndex=null;
                },
                error=> {
                    console.log('file save error 2')
                })
            },
            error=> {

            })

        }
        else {
            console.log(this.currentFile)
            this.data[this.fileVariable]={
                "description":this.currentFile.description,
                "keywordsStr":this.currentFile.keywordsStr,
                "title":this.currentFile.title,
                "type":this.currentFile.type,
                "uri":this.currentFile.uri,
                "uriExternal":false,
            };
            if (this.fileIndex==1) {
                this.data[this.fileVariable]['id']=this.currentFile['id'];
            }
            let saveUrl=this.httpClient.post('/'+this.saveUrl,this.data) ;
            saveUrl.subscribe(data=> {
                this.data=data;
                this.changeFile.emit({
                    "fileIndex":null,
                    "data":data,
                    "type":"save"
                });
                this.fileIndex=null;
            },
            error=> {
                console.log('file save error 2')
            })
        }
    }
      console.log('i am saving')
  }

  setupCurrentFile() {
    this.currentFile={
        "uriExternal":false,
        "externalUrl":"",
        "title":"",
        "keywordsStr":"",
        "type":"",
        "description":"",
        "sampleId":this.sampleId,
        "uri":""
      };
  }

  splitKeywordString(keyword) {
      return keyword.split('\n')
  }
}
