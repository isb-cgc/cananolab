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

    columnHeader;
    columnHeaderTrailer;
    columnOrder;
    columnHeaderIndex;

    currentFinding
    importingCSV=false;
    rowData;
    csvColumnMaxCount = 25; // Maximum number of columns allowed
    csvMaxNumberOfLines = 5000; // Maximum number of rows allowed
    csvMaxLenOfEntry = 200;
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
            this.changeColumnName(column.columnName,false);
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
                this.columnHeader.columnName=null;
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
        let size= csvFile.size;
        this.dataReaderReadFile(0,size,csvFile);
    }

    dataReaderReadFile = function (opt_startByte, opt_stopByte,csvFile) {
        let reader = new FileReader();
        var that=this;
        reader.onloadend = function (evt) {
            that.csvDataObj = that.parseCsv(evt.target.result);

            if (that.csvDataObj === null) {
                alert('CSV import parse error: ' + that.csvImportError);
                return;
            }

            that.csvDataColCount = 0;
            that.csvDataRowCount = that.csvDataObj.length;
            for (var y = 0; y < that.csvDataRowCount; y++) {
                if (that.csvDataObj[y].length > that.csvDataColCount) {
                    that.csvDataColCount = that.csvDataObj[y].length;
                }
            }
            that.currentFinding.numberOfColumns = that.csvDataColCount;
            that.currentFinding.numberOfRows = that.csvDataRowCount;

            that.updateRowsColsForFinding();
        };

        reader.readAsBinaryString(csvFile.slice(0, opt_stopByte));

    };

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
        let url = this.apiService.doPost(Consts.QUERY_CHARACTERIZTAION_UPDATE_FINDING,this.currentFinding);

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

    validateCsv = function (csv) {
        // Normalize line feeds
        let temp = (csv.replace(/\r\n/g, '\r').replace(/\n\r/g, '\r').replace(/\n/g, '\r')).split(/\r/);

        // Do we have too many rows?
        if (temp.length > this.csvMaxNumberOfLines) {
            this.csvImportError = 'Too many Lines (' + temp.length + ')';
            return false;
        }

        // Are any cells too long?
        // Determine length of longest cell entry
        let biggestLine = 0;
        for (let f0 = 0; f0 < temp.length; f0++) {
            if (biggestLine < temp[f0].length) {
                biggestLine = temp[f0].length;
            }
        }

        // If at least one entry is too long, set error and return false
        if (biggestLine > this.csvMaxLenOfEntry) {
            this.csvImportError = 'line(s) too long (' + biggestLine + ')';
            return false;
        }


        // Send each line to csv validation function.
        // Remove anything that is not a quote or a comma. That is all we need for validating csv.
        let regex = new RegExp('[^",]', 'g');
        for (let f = 0; f < temp.length; f++) {
            let csvString = temp[f].replace(regex, '');
            let isValid = this.validateCsvLine(csvString);
            if (!isValid) {
                return false;
            }
        }

        // Return true if: not too many rows, no row is too long, and csv format is correct.
        return true;
    };
    validateCsvLine(csvLine) {
        let inQ = false;
        let badData = false;
        for (let f = 0; f < csvLine.length; f++) {
            if (!inQ) {

                // A starting quote plus a nested quote (3 quotes)
                if ((csvLine.length <= (f + 2)) && csvLine[f] === '"' && csvLine[f + 1] === '"' && csvLine[f + 2] === '"') {
                    inQ = true;
                }

                // Two quotes, BUT not in a quote, and ends.
                else if ((csvLine.length <= (f + 1)) && csvLine[f] === '"' && csvLine[f + 1] === '"') {
                    badData = false;
                    break;
                } else if (csvLine[f] === '"') {
                    inQ = true;
                }
            } else {
                // An ending quote
                if (csvLine[f] === '"' && csvLine[f + 1] !== '"') {
                    inQ = false;
                } else if (csvLine[f] === '"' && csvLine[f + 1] === '"') {
                    f++;
                }
            }
        }

        // Are we still in a quote at the end
        if (inQ) {
            badData = true;
            this.csvImportError = 'csv validation error';
        }
        return (!badData);
    }

     qFix(input) {
        var output = '';
        for (var i = 0; i < input.length; ++i) {

            if (input.charCodeAt(i) === 226) {
                // Unicode double quote
                if (
                    (input.charCodeAt(i + 1) === 128 && input.charCodeAt(i + 2) === 157) ||
                    (input.charCodeAt(i + 1) === 128 && input.charCodeAt(i + 2) === 156)
                ) {
                    i += 2;
                    output += '"';
                }
                // Unicode single quote
                else if (input.charCodeAt(i + 1) === 128 && input.charCodeAt(i + 2) === 153) {
                    i += 2;
                    output += '\'';
                }

            } else if (input.charCodeAt(i) === 194 || input.charCodeAt(i) === 195) {
                var hexDigit0 = input.charCodeAt(i).toString(16);
                if (hexDigit0.length % 2) {
                    hexDigit0 = '0' + hexDigit0;
                }
                var hexDigit1 = input.charCodeAt(i + 1).toString(16);
                if (hexDigit1.length % 2) {
                    hexDigit1 = '0' + hexDigit1;
                }
                var hex = '%' + hexDigit0 + '%' + hexDigit1;
                let decoded = this.decode_utf8(hex);
                if (decoded === 'ERROR-ERROR') {
                    output = '';
                    return output;
                }
                output += decoded;
                i++;
            } else {
                output += input[i];
            }
        }
        return (output);
    };


    cleanCsvValue(val) {
        if (val.substr(0, 1) === '"') {
            val = val.substr(1);
        }
        if (val.substr(val.length - 1) === ',') {
            val = val.substr(0, val.length - 1);
        }
        if (val.substr(val.length - 1) === '"') {
            val = val.substr(0, val.length - 1);
        }

        val = val.replace(/""/g, '"');
        return val;
    };


    /**
     *
     * @param s
     * @returns {string}
     */
    decode_utf8(s) {
        var returnData = '';
        try {
            returnData = decodeURIComponent(s);
        } catch (e) {
            returnData = 'ERROR-ERROR'; // TODO  Make this a const
        }
        return returnData;
    }

    parseCsv(data) {
        if (!this.validateCsv(data)) {
            return null;
        }
        // Split on the CR or LF
        let dataLines = this.qFix(data.replace(/\r\n/g, '\r').replace(/\n\r/g, '\r').replace(/\n/g, '\r')).split(/\r/);
        let startCell = 1; //true
        let currentCell = '';
        let currentCellType = 0; // 0=unknown  1=comma no double quote  2=comma with double quote
        let i = 0;
        let csvData;
        let csvDataObj = [];

        for (let dataLine = 0; dataLine < dataLines.length && this.runaway > 0; dataLine++) {
            csvData = dataLines[dataLine];

            if (csvData.length < 1) {
                continue;
            }

            let lineOfValues = [];
            i = 0;
            while (i < csvData.length && this.runaway > 0) {
                let trailingCommas = [];
                trailingCommas = csvData.match(/(,+)$/g);
                if (trailingCommas !== null) {
                    let replacementStr = '';
                    for (let f = 0; f < trailingCommas[0].length; f++) {
                        replacementStr += ',""';
                    }
                    let re = new RegExp(trailingCommas[0] + '$');
                    csvData = csvData.replace(re, replacementStr);
                }
                // Determine cell type
                if (csvData.substr(i, 1) === '"') {
                    currentCellType = 2;
                } else {
                    currentCellType = 1;
                }

                if (currentCellType === 1) {
                    // Just grab to the first comma
                    currentCell = csvData.substr(i).match(/[^,]*,/);
                    if (currentCell !== null) {
                        currentCell = currentCell[0];
                        lineOfValues.push(this.cleanCsvValue(currentCell));
                    }
                    // No comma, we are at the end.
                    else {
                        currentCell = csvData.substr(i);
                        lineOfValues.push(this.cleanCsvValue(currentCell));
                    }
                    i += currentCell.length;
                } else if (currentCellType === 2) {
                    csvData = csvData.substr(i);
                    i = 0;
                    startCell = 1;
                    let charStatus = 0; // Nothing yet
                    let currentChar = '';
                    let currentNextChar = '';
                    let i1 = 0;

                    while (i1 < csvData.length) {
                        currentChar = csvData.substr(i1, 1);
                        if (i1 + 1 < csvData.length) {
                            currentNextChar = csvData.substr(i1 + 1, 1);
                        } else {
                            currentNextChar = '';
                        }
                        i1++;

                        // The first char
                        if (charStatus === 0 && startCell === 1) {
                            // Is it a quote (it should be)
                            if (currentChar === '"') {
                                charStatus = 1; // We have seen the first quote
                            }
                            startCell = 0; // No longer looking at the first char
                            currentChar = csvData.substr(i1, 1);
                            if (i1 + 1 < csvData.length) {
                                currentNextChar = csvData.substr(i1 + 1, 1);
                            } else {
                                currentNextChar = '';
                            }
                        } // END if (charStatus === 0 && startCell === 1)

                        // Not the first char
                        else if (startCell !== 1) {
                            // We are past the first quote
                            if (charStatus === 1) { // We have seen the first quote
                                // Check for two double quotes, this is a quote within a quoted cell - ignore it and go past it
                                if (currentChar === '"' && currentNextChar === '"') {
                                    i1 += 1;
                                }
                                // A quote here means the end
                                else if (currentChar === '"') {
                                    // Find the next comma or the end of the line.
                                    currentCell = csvData.substr(0, i1);
                                    csvData = csvData.substr(currentCell.length + 1);
                                    i1 = 0;
                                    startCell = 1; //true
                                    charStatus = 0;
                                    lineOfValues.push(this.cleanCsvValue(currentCell));
                                }
                            }

                        } // END else if( startCell !== 1)
                        this.runaway--;
                    }
                }
                this.runaway--;
            } // End while loop

            csvDataObj.push(lineOfValues);
            this.runaway--;

        } // End for loop

        // Check here for too may columns
        if (this.getMaxColumnCount(csvDataObj) > this.csvColumnMaxCount) {
            this.csvImportError = 'Too many columns (' + this.getMaxColumnCount(csvDataObj) + ')';
            return null;
        }
        let columnCount = this.getMaxColumnCount(csvDataObj);
        for (let f = 0; f < csvDataObj.length; f++) {
            while (csvDataObj[f].length < columnCount) {
                csvDataObj[f].push('');
            }
        }
        return csvDataObj;
    }

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
            this.data.finding.push(this.currentFinding);
        }
        else {
            this.data.finding[this.findingIndex]=JSON.parse(JSON.stringify(this.currentFinding));
        }
        let url = this.apiService.doPost(Consts.QUERY_SYNTHESIS_SAVE_FINDING,this.data);
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

    updateRowsColumns() {
        let url = this.apiService.doPost(Consts.QUERY_SYNTHESIS_UPDATE_FINDING,this.currentFinding)
        url.subscribe(data=> {
            this.errors={};
            this.currentFinding=data;
        },
        error=> {
            this.errors=error;
        })
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
            this.data['simpleExperimentBeans'].push(this.technique);
            this.data['purityBeingEdited'] = this.technique;
        } else {
            this.data['simpleExperimentBeans'][this.techniqueIndex] =
                this.technique;
            this.data['purityBeingEdited'] = this.technique;
        }
        this.techniqueIndex = null;
    }

    deleteTechnique() {
        if (
            confirm('Are you sure you wish to delete this purification element?')
        ) {
            this.convertDomainEntityFieldsToNullAndStrings();
            this.data.purityBeingEdited = this.technique;
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
