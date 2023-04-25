import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Properties } from '../../../../../../assets/properties';
import { Consts } from '../../../../../constants';
import { NavigationService } from '../../../../common/services/navigation.service';
import { ApiService } from '../../../../common/services/api.service';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';

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

    columnHeader;
    columnHeaderTrailer;
    columnOrder;
    columnHeaderIndex;

    findingIndex;
    currentFinding
    importingCSV=false;
    rowData;
    csvColumnMaxCount = 25; // Maximum number of columns allowed
    csvMaxNumberOfLines = 5000; // Maximum number of rows allowed
    csvMaxLenOfEntry = 400;
    runaway = 10240; // A counter used to prevent an endless loop if something goes wrong.  @TODO needs a better name
    csvDataColCount = 0;
    csvDataObj;
    csvDataRowCount;
    csvImportError = '';

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
        private ngxCsvParser: NgxCsvParser
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
                        'sampleId=' + this.sampleId + '&dataId=' + this.dataId
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
            designMethodDescription: '',
            analysis: '',
            sampleId: this.sampleId,
            simpleExperimentBeans: [],
            fileElements: [],
            purityBeans: [],
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
            techniqueType: '',
            abbreviation: '',
            description: '',
            instruments: [],
        };
        setTimeout(function () {
            document.getElementById('techniqueForm').scrollIntoView();
        }, 100);
    }

    editColumnForm(column, index) {
        this.columnHeaderIndex=index;
        this.columnHeader=column;
        this.columnHeaderTrailer=JSON.parse(JSON.stringify(this.columnHeader));

        if (column.columnType) {
            this.changeColumnType(column.columnType,false);
            this.changeColumnName(column.name,false);
        }
        else {
        }
        this.columnHeader=JSON.parse(JSON.stringify(column));
    };

    changeColumnType(value,isDropdown) {
        let url = this.apiService.doGet(Consts.QUERY_SYNTHESIS_GET_COLUMN_NAME_OPTIONS_BY_TYPE,'columnType='+value+'&charName='+this.data.name+'&assayType=');
        url.subscribe(data=> {
            this.errors={};
            this.setupData.columnNameOptions=data;
            if (isDropdown) {
                this.columnHeader.name=null;
            }
        },
        error=> {
            this.errors=error;

        })
    };

    changeColumnName(value, isDropdown) {
        let url = this.apiService.doGet(Consts.QUERY_SYNTHESIS_GET_COLUMN_VALUE_UNIT_OPTIONS,'columnName='+value+'&conditionProperty=null');
        url.subscribe(data=> {
            this.errors={};
            this.setupData.valueUnitOptions=data;
            if (isDropdown) {
                this.columnHeader.valueUnit=null;
            }
        },
        error=> {
            this.errors=error;
        })
    };

    editColumnOrder() {
        this.columnOrder=JSON.parse(JSON.stringify(this.currentFinding));
    };

    addFinding() {
        this.findingIndex=-1;
        setTimeout(function() {
            document.getElementById('findingsEditForm').scrollIntoView();
        },100);

        this.currentFinding={
            "columnHeaders":[],
            "dirty":1,
            "numberOfColumns":"",
            "numberOfRows":"",
            "files":[]
        };
    };

    cancelColumnForm() {
        this.columnHeaderIndex=null;
    };

    cancelColumnOrder() {
        this.columnOrder=null;
    }

    cancelFinding() {
        this.columnHeaderIndex=null;
        this.findingIndex=null;
        this.columnHeaderIndex=null;
    };


    deleteFinding() {
        if (confirm('Are you sure you wish to delete this finding?')) {
            this.columnHeaderIndex=null;
            this.findingIndex=null;
            let url = this.apiService.doPost(Consts.QUERY_SYNTHESIS_REMOVE_FINDING,this.currentFinding);
            url.subscribe(data=> {
                this.errors={};
                this.data=data;
                //???? this.setCharacterizationData();
            },
            error=> {
                this.errors=error;
            })
        }
    };

    deleteFindingRow(index) {
        if (confirm('Are you sure you wish to delete this finding row?')) {
            this.currentFinding.rows.splice([index],1);
        }
    };

    editFinding(index,finding) {
        this.columnOrder=null;
        this.currentFinding=JSON.parse(JSON.stringify(finding));
        this.findingIndex=index;
        setTimeout(function() {
            document.getElementById('findingsEditForm').scrollIntoView();
        },100);
    };

    importCSV(event) {
        let csvFile = event.target.files.item(0);
        this.ngxCsvParser.parse(csvFile, { header: false, delimiter: ',', encoding: 'utf8' })
            .pipe().subscribe({
                next: (result): void => {
                    console.log('ngxCsvParser Result', result);
                    this.csvDataObj = result;

                    if (this.csvDataObj === null) {
                        alert('CSV import parse error: ' + this.csvImportError);
                        return;
                    }

                    this.csvDataColCount = 0;
                    this.csvDataRowCount = this.csvDataObj.length;
                    for (var y = 0; y < this.csvDataRowCount; y++) {
                        if (this.csvDataObj[y].length > this.csvDataColCount) {
                            this.csvDataColCount = this.csvDataObj[y].length;
                        }
                    }
                    this.currentFinding.numberOfColumns = this.csvDataColCount;
                    this.currentFinding.numberOfRows = this.csvDataRowCount;

                    this.updateRowsColsForFinding();

                },
                error: (error: NgxCSVParserError): void => {
                  console.log('ngxCsvParser Error', error);
                }
            });
    }

    createArray(len) {
        let arr = new Array(len || 0),
            i = len;
        if (arguments.length > 1) {
            var args = Array.prototype.slice.call(arguments, 1);
            while (i--) arr[len - 1 - i] = this.createArray.apply(this, args);
        }
        return arr;
    }

    validateFindingCellInput(colType, cellData) {
        if ((colType === null) || (colType === undefined)) {
            return false;
        }
        return (
            (colType === 'datum') &&
            (cellData !== null) && (isNaN(cellData.replace(/(d|f)$/, '')))
        );
    }

    updateRowsColsForFinding = function () {
        this.badFindingCell = this.createArray(this.csvDataColCount, this.csvDataRowCount);

        let url = this.apiService.doPost(Consts.QUERY_SYNTHESIS_NEW_FINDING,this.currentFinding);
        url.subscribe(data=> {
                data = data;
                if (data.rows[this.csvDataRowCount - 1] === undefined) {
                    this.csvDataRowCount = data.numberOfRows;
                }

                for (var y = 0; y < this.csvDataRowCount; y++) {

                    for (var x = 0; x < this.csvDataColCount; x++) {
                        // If the user has reduced the number of columns, make sure we don't try to update columns that no longer exist.
                        if ((data.rows[y].cells[x] !== null) && (data.rows[y].cells[x] !== undefined)) {
                            data.rows[y].cells[x].value = Object(this.csvDataObj[y][x]);
                            if (x < this.currentFinding.length) {
                                data.rows[y].cells[x].datumOrCondition = this.currentFinding.columnHeaders[x].columnType;
                            }
                            // When the column type is set or reset, check all cell contents for valid entries for each column, one row at a time.
                            if (x < this.currentFinding.columnHeaders.length) {
                                this.badFindingCell[x][y] = this.validateFindingCellInput(this.currentFinding.columnHeaders[x].columnType,
                                    data.rows[y].cells[x].value);

                            }
                            // If there are fewer column types/header set than there are columns.
                            // Data put in a cell with a column that does not have it's type set is never considered invalid.
                            else {
                                this.badFindingCell[x][y] = false;
                            }
                        }
                    }
                }

                // If there are already column headers set, preserve them.
                for (var colX = 0; colX < this.csvDataColCount; colX++) {
                    if ((this.currentFinding.columnHeaders[colX] !== null) && (this.currentFinding.columnHeaders[colX] !== undefined)) {
                        data.columnHeaders[colX] = this.currentFinding.columnHeaders[colX];
                    }
                 }
                this.currentFinding = data;
                console.log('complete')

        })
    };

    getMaxColumnCount(csvData) {
        var columnCount = 0;
        for (var row = 0; row < csvData.length; row++) {
            if (columnCount < csvData[row].length) {
                columnCount = csvData[row].length;
            }
        }
        return columnCount;
    }

    resetColumnForm() {
        this.columnHeader=JSON.parse(JSON.stringify(this.columnHeaderTrailer));
    }

    saveColumnForm() {
        if (this.columnHeader['constantValue']!='') {
            this.currentFinding['rows'].forEach(row=> {
                row['cells'][this.columnHeaderIndex]['value']=this.columnHeader['constantValue'];
                row['cells'][this.columnHeaderIndex]['datumOrCondition'] = this.columnHeader['columnType'];
            });
        }
        this.currentFinding.columnHeaders[this.columnHeaderIndex]=this.columnHeader;
        this.columnHeaderIndex=null;
    };

    saveColumnOrder() {
        this.currentFinding=JSON.parse(JSON.stringify(this.columnOrder));
        let url = this.apiService.doPost(Consts.QUERY_SYNTHESIS_SET_COLUMN_ORDER,this.columnOrder);
        url.subscribe(data=> {
            this.errors={};
            this.currentFinding=data;
        },
        error=>{
            this.errors=error;
        })
        this.columnOrder=null;

    }

    saveFinding() {
        this.currentFinding.dirty=1;
        if (this.findingIndex==-1) {
            this.data['purityBeans'].push(this.currentFinding);
        }
        else {
            this.data['purityBeans'][this.findingIndex]=JSON.parse(JSON.stringify(this.currentFinding));
        }

        var haveDatum = false;
        for (var i0 = 0; i0 < this.data.purityBeans.length; i0++) {
            for (var i1 = 0; i1 < this.data.purityBeans[i0].columnHeaders.length; i1++) {
                if (this.data.purityBeans[i0].columnHeaders[i1].columnType === 'datum') {
                    haveDatum = true;
                    break;
                }
            }
            if (haveDatum) {
                break;
            }
        }

        // Warn user if there is no datum column
        if (!haveDatum) {
            alert("At least one column must be of type Datum.");
            return;
        }

        var purityUrl = "";
        if (this.findingIndex==-1) {
            purityUrl = Consts.QUERY_SYNTHESIS_SAVE_FINDING;
        } else {
            purityUrl = Consts.QUERY_SYNTHESIS_UPDATE_FINDING;
        }

        let url = this.apiService.doPost(purityUrl,this.data);
        url.subscribe(data=> {
            this.errors={};

            this.data=data;
            //??? this.setCharacterizationData();
        },
        error=> {
            this.errors=error;
        })

        this.columnHeaderIndex=null;
        this.findingIndex=null;
    };

    addFile() {
        this.techniqueIndex = -1;
        this.technique = {
            techniqueType: '',
            abbreviation: '',
            description: '',
            instruments: [],
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

    delete() {
        if (confirm('Are you sure you wish to delete this purification?')) {
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
        if (this.techniqueIndex == -1) {
            this.data['simpleExperimentBeans'].push(this.technique);
            // this.data['purityBeingEdited'] = this.technique;
        } else {
            this.data['simpleExperimentBeans'][this.techniqueIndex] =
                this.technique;
            // this.data['purityBeingEdited'] = this.technique;
        }
        this.techniqueIndex = null;
    }

    deleteTechnique() {
        if (
            confirm('Are you sure you wish to delete this purification element?')
        ) {
            // this.data.purityBeingEdited = this.technique;
            this.data.simpleExperimentBeans.splice(
                this.data.simpleExperimentBeans[this.techniqueIndex],
                1
            );
            this.techniqueIndex = null;
        }
    }

    deleteInstrument() {
        if (confirm("Are you sure you wish to delete this inherent function?")) {
            this.technique.instruments.splice(this.instrumentIndex,1)
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
        if(!this.technique || !this.technique.techniqueType) {
          this.instrumentTypes = [];
          return;
        }

        this.apiService
            .doGet(
                Consts.QUERY_SYNTHESIS_PURIFICATION_INSTRUMENT_TYPES,
                'techniqueType=' + this.technique.techniqueType
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
        if (this.data.type == '') submissionStatus = false;
        if (this.data.yield == '') submissionStatus = false;
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
            if (!this.technique.instruments) {
                this.technique['instruments']=[];
            }
            this.technique.instruments.push(this.instrument);
        }
        else {
            this.technique.instruments[this.instrumentIndex]=this.instrument;
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

    prepareSubmitData() {
        if (this.data.simpleProtocol.displayName != '') {
            this.data.simpleProtocol = this.setupData.protocolLookup.find(
                e => e.displayName == this.data.simpleProtocol.displayName);
        }
    }

    submit() {
        this.prepareSubmitData();
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
