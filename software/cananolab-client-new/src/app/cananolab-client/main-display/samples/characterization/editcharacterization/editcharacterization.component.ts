import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Properties } from '../../../../../../assets/properties';
import { Consts } from '../../../../../constants';
import { Util } from '../../../../../utilities';
import { NavigationService } from '../../../../common/services/navigation.service';
import { ApiService } from '../../../../common/services/api.service';
import { HttpClient } from '@angular/common/http';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';

@Component({
  selector: 'canano-editcharacterization',
  templateUrl: './editcharacterization.component.html',
  styleUrls: ['../../../../../btn-bravo-canano.scss', './editcharacterization.component.scss']
})
export class EditcharacterizationComponent implements OnInit {
    sampleId = Properties.CURRENT_SAMPLE_ID;
    helpUrl = Consts.HELP_URL_SAMPLE_CHARACTERIZATION;
    toolHeadingNameManage;
    charClassName;
    charId;
    columnHeader;
    columnHeaderTrailer;
    columnOrder;
    columnHeaderIndex;
    currentDropdownValues;
    currentFinding;
    currentFile;
    data;
    dataTrailer;
    errors = {};
    findingIndex;
    fileIndex;
    importingCSV = false;
    instrument;
    instrumentTrailer;
    instrumentIndex;
    message;
    propertiesLoaded;
    setupData;
    techniqueIndex;
    techniqueInstrument;
    theFile: FormData = null;
    fileName;
    type;
    rowData;
    csvRowsIsEdit;

    existingDatumNames;
    existingConditionNames;

    csvDataColCount = 0;
    csvDataObj;
    csvDataRowCount;
    csvFirstDataRow = 0;
    csvImportError = '';
    csvHeaderNameTypeMap;
    serverUrl = Properties.API_SERVER_URL;
    isTooManyCells = false;

    currentSavingFindingIndex = -1;

    csvHeaderDataObj;

    constructor( private httpClient: HttpClient, private apiService: ApiService, private navigationService: NavigationService, private router: Router, private route: ActivatedRoute, private ngxCsvParser: NgxCsvParser) {
    }


  ngOnInit(): void {
    this.navigationService.setCurrentSelectedItem(2);
    this.currentDropdownValues = {};
        this.route.params.subscribe(
            ( params: Params ) => {
                this.sampleId = params['sampleId'];
                this.charId = params['charId'];
                this.type = params['type'];
                this.charClassName = params['charClassName'];

                if (
                    this.sampleId <= 0 ){
                    this.sampleId = Properties.CURRENT_SAMPLE_ID;
                } else {
                    Properties.CURRENT_SAMPLE_ID = this.sampleId;
                }
                this.apiService.getSampleName(this.sampleId).subscribe(
                    data => this.toolHeadingNameManage = 'Edit ' + data['sampleName'] + ' Characterization')

                if (!this.charId) {
                    let url = this.apiService.doGet(Consts.QUERY_CHARACTERIZATION_SETUP_ADD, 'sampleId=' + this.sampleId + '&charType=' + this.type);
                    url.subscribe(
                        data => {
                            Properties.SAMPLE_TOOLS = true;
                            this.errors = {};
                            this.data = data;
                            this.data.name = '';
                            this.data.assayType = '';
                            this.data.characterizationDate = new Date(),
                            this.setCharacterizationData();
                            if (this.data.type == 'other') {
                                this.addOtherValue('type', this.data.type)
                            }

                            this.getExistingDatumConditionNames();
                        },
                        error => {
                            this.errors = error;
                        }
                    );
                }
                else {
                    let url = this.apiService.doGet(Consts.QUERY_CHARACTERIZATION_SETUP_UPDATE, 'sampleId=' + this.sampleId + '&charType=' + this.type + '&charId=' + this.charId + '&charClassName=' + this.charClassName);
                    url.subscribe(
                        data => {
                            Properties.SAMPLE_TOOLS = true;
                            this.errors = {};

                            this.data = data;
                            this.propertiesLoaded = true;
                            if (!this.data.characterizationDate) {
                                this.data.characterizationDate = new Date()
                            }
                            this.setCharacterizationData();

                            this.getExistingDatumConditionNames();
                        },
                        error => {
                            this.errors = error;

                        });
                }

                
            }
        );
    }

    getExistingDatumConditionNames() {
        var url = this.apiService.doGet(Consts.QUERY_CHARACTERIZATION_GET_COLUMN_NAME_OPTIONS_BY_TYPE, 'columnType=datum' + '&charName=' + this.data.name + '&assayType=');
        url.subscribe(data => {
            this.existingDatumNames = data;
            this.errors = {};
        },
        error => {
            this.errors = error;
        })

        url = this.apiService.doGet(Consts.QUERY_CHARACTERIZATION_GET_COLUMN_NAME_OPTIONS_BY_TYPE, 'columnType=condition' + '&charName=' + this.data.name + '&assayType=');
        url.subscribe(data => {
            this.existingConditionNames = data;
            this.errors = {};
        },
        error => {
            this.errors = error;
        })
    }

    addFileForm() {
        this.currentFile = {
            'uriExternal' : false,
            'externalUrl' : '',
            'title' : '',
            'keywordsStr' : '',
            'type' : '',
            'description' : '',
            'sampleId' : this.sampleId,
            'uri' : ''
            }
        this.fileIndex = -1;
    };

    addFinding() {
        this.findingIndex = -1;
        setTimeout(function() {
            document.getElementById('findingsEditForm').scrollIntoView();
        }, 100);

        this.currentFinding = {
            'columnHeaders' : [],
            'dirty' : 1,
            'numberOfColumns' : '',
            'numberOfRows' : '',
            'files' : []
        };
    };

    addInstrument(index) {
        this.instrument = {
            'modelName' : '',
            'manufacturer' : '',
            'type' : ''
        }
        this.instrumentIndex = -1;
    };

    // set pointer fields to old values when adding other //
    addOtherValue(field, currentValue) {
        this.currentDropdownValues[field] = currentValue;
    };

    addTechniqueInstrument() {
        this.instrumentIndex = null;
        this.techniqueIndex = -1;
        this.setupTechniqueInstrument();
    };

    cancelColumnForm() {
        this.columnHeaderIndex = null;
    };

    cancelColumnOrder() {
        this.columnOrder = null;
    }

    cancelFile() {
        this.fileIndex = null;
    };

    cancelFinding() {
        this.columnHeaderIndex = null;
        this.findingIndex = null;
        this.columnHeaderIndex = null;
        this.fileIndex = null;
    };

    cancelInstrument() {
        if (this.instrumentIndex > -1) {
            // Replace JSON.parse(JSON.stringify())
            this.techniqueInstrument.instruments[this.instrumentIndex] = Util.deepCopy(this.instrumentTrailer, false);
        }
        this.instrumentIndex = null;
    };

    cancelTechniqueInstrument() {
        this.instrumentIndex = null;
        this.techniqueIndex = null;
    };

    changeColumnType(value, isDropdown) {
        let url = this.apiService.doGet(Consts.QUERY_CHARACTERIZATION_GET_COLUMN_NAME_OPTIONS_BY_TYPE, 'columnType=' + value + '&charName=' + this.data.name + '&assayType=');
        url.subscribe(data => {
            this.errors = {};
            this.setupData.columnNameOptions = data;
            if (isDropdown) {
                this.columnHeader.columnName = null;
            }
        },
        error => {
            this.errors = error;

        })
    };

    changeInstrumentType(value) {
        this.getInstrumentTypes(value);
    };

    changeColumnName(value, isDropdown) {
        let url = this.apiService.doGet(Consts.QUERY_CHARACTERIZATION_GET_COLUMN_VALUE_UNIT_OPTIONS, 'columnName=' + value + '&conditionProperty=null');
        url.subscribe(data  => {
            this.errors = {};
            this.setupData.valueUnitOptions = data;
            if (isDropdown) {
                this.columnHeader.valueUnit = null;
            }
        },
        error => {
            this.errors = error;
        })
    };

    changeName(name) {
        this.data.assayType = '';
        let assayUrl = this.apiService.doGet(Consts.QUERY_CHARACTERIZATION_GET_ASSAY_TYPES_BY_CHAR_NAME, 'charName=' + name);
        assayUrl.subscribe(
            data => {
                this.errors = {};
                this.data['assayTypesByCharNameLookup'] = data;
            },
            error => {
                this.errors = error;
            }
        );
        let charPropertiesUrl = this.apiService.doGet(Consts.QUERY_CHARACTERIZATION_GET_CHAR_PROPERTIES, 'charName=' + name)
        this.propertiesLoaded = null;
        charPropertiesUrl.subscribe(
            data => {
                this.errors = {};
                this.data['property'] = data;
                this.propertiesLoaded = true;
            },
            error => {
                this.errors = error;
            }
        );

    };

    changeType(type) {
        this.data.name = '';
        this.data['assayTypesByCharNameLookup'] = [];
        let url = this.apiService.doGet(Consts.QUERY_CHARACTERIZATION_GET_CHAR_NAMES_BY_CHAR_TYPE, '?charType=' + type)
        url.subscribe(
            data => {
                this.data.charNamesForCurrentType = data;
            },
            error => {
                this.errors = error;
            }
        )
    };

    deleteCharacterization() {
        if (confirm('Are you sure you wish to delete this characterization')) {
            let url = this.apiService.doPost(Consts.QUERY_CHARACTERIZATION_REMOVE, this.data);
            url.subscribe(data => {
                this.errors = {};
                this.router.navigate( ['home/samples/characterization', this.sampleId] );
            },
            error => {
                this.errors = error;
            })
        }
    };

    deleteFile(file, fileIndex) {
        this.currentFinding['theFile'] = file;
        if (confirm('Are you sure you wish to delete this file?')) {
            this.currentFinding.files.splice(fileIndex, 1);
            this.currentFinding.dirty = 1;
            this.currentFinding['theFileIndex'] = fileIndex;
            let url = this.apiService.doPost(Consts.QUERY_CHARACTERIZATION_REMOVE_FILE, this.currentFinding);
            url.subscribe(data => {
                this.errors = {};
                this.currentFinding = data;
            },
            error => {
                this.errors = error;
            })
        }


    }

    deleteFinding() {
        if (confirm('Are you sure you wish to delete this finding?')) {
            this.columnHeaderIndex = null;
            this.findingIndex = null;
            let url = this.apiService.doPost(Consts.QUERY_CHARACTERIZATION_REMOVE_FINDING, this.currentFinding);
            url.subscribe(data => {
                this.errors = {};
                this.data = data;
                this.setCharacterizationData();
            },
            error => {
                this.errors = error;
            })
        }
    };

    deleteFindingRow(index) {
        if (confirm('Are you sure you wish to delete this finding row?')) {
            this.currentFinding.rows.splice([index], 1);
            this.csvRowsIsEdit.splice([index], 1);
        }
    };

    editFindingRow(index, isEdit) {
        this.csvRowsIsEdit[index] = isEdit;
    }

    deleteInstrument() {
        if (confirm('Are you sure you want to delete this instrument?')) {
            this.techniqueInstrument.instruments.splice(this.instrumentIndex, 1);
            this.instrumentIndex = null;
        }
    };

    deleteTechniqueInstrument() {
        if (confirm('Are you sure you want to delete this technique and instrument?')) {
            let url = this.apiService.doPost(Consts.QUERY_CHARACTERIZATION_REMOVE_EXPERIMENT, this.techniqueInstrument);
            url.subscribe(data => {
                this.data = data;
                this.errors = {};
                // Replace JSON.parse(JSON.stringify())
                this.dataTrailer = Util.deepCopy(this.data, false);
                this.setCharacterizationData();
            },
            error => {
                this.errors = error;

            });
            this.techniqueIndex = null;
            this.instrumentIndex = null;
        }
    };

    editColumnForm(column, index) {
        this.columnHeaderIndex = index;
        this.columnHeader = column;
        // Replace JSON.parse(JSON.stringify())
        this.columnHeaderTrailer = Util.deepCopy(this.columnHeader, false);

        if (column.columnType) {
            this.changeColumnType(column.columnType, false);
            this.changeColumnName(column.columnName, false);
        }
        else {
        }
        // Replace JSON.parse(JSON.stringify())
        this.columnHeader = Util.deepCopy(column, false);
    };

    editColumnOrder() {
        // Replace JSON.parse(JSON.stringify())
        this.columnOrder = Util.deepCopy(this.currentFinding, false);
    };

    editFileForm(file, index) {
        // Replace JSON.parse(JSON.stringify())
        this.currentFile = Util.deepCopy(file, false);
        this.fileIndex = index;
    };

    editFile(file, index) {
        this.fileIndex = index;
        this.currentFile = file;
        this.currentFinding['dirty'] = true;
        this.currentFinding['theFileIndex'] = index;
    }

    editFinding(index, finding) {
        this.columnOrder = null;
        // Replace JSON.parse(JSON.stringify())
        this.currentFinding = Util.deepCopy(finding, false);
        this.csvRowsIsEdit = new Array(this.currentFinding.numberOfRows).fill(false);
        this.findingIndex = index;
        setTimeout(function() {
            document.getElementById('findingsEditForm').scrollIntoView();
        }, 100);
    };

    editInstrument(instrument, index) {
        this.instrumentIndex = index;
        this.instrument = instrument;
        // It appears we edit the live version of the instrument, and replace it with the original if
        // we cancel.
        // Replace JSON.parse(JSON.stringify())
        this.instrumentTrailer = Util.deepCopy(this.instrument, false);
    };

    editTechniqueInstrument(index, technique) {
        this.instrumentIndex = null;
        this.techniqueIndex = index;
        // Replace JSON.parse(JSON.stringify())
        this.techniqueInstrument = Util.deepCopy(technique, false);
        this.techniqueInstrument.dirty = 1;
        this.getInstrumentTypes(this.techniqueInstrument.techniqueType)
    };

    formatDate(date) {
        let tempDate = new Date(date);
        let isoStr = tempDate.toISOString();
        return isoStr.slice(0, isoStr.indexOf('T'));
    };

    getInstrumentTypes(value) {
        let url = this.apiService.doGet(Consts.QUERY_CHARACTERIZATION_GET_INSTRUMENT_TYPES_BY_TECHNIQUE, 'techniqueType=' + value);
        url.subscribe(data => {
            this.errors = {};
            this.setupData['instrumentTypeLookup'] = data;
        },
        error => {
            this.errors = error;
        });
    };

    importCSV(event) {
        let csvFile = event.target.files.item(0);
        this.ngxCsvParser.parse(csvFile, { header: false, delimiter: ',', encoding: 'utf8' })
            .pipe().subscribe({
                next: (result): void => {
                    console.log('ngxCsvParser Result', result);
                    this.csvDataObj = result;
                    this.csvImportError = "";

                    if (this.csvDataObj === null) {
                        this.csvImportError = "Csv parsing failed.";
                        return;
                    }

                    this.csvDataColCount = 0;
                    this.csvDataRowCount = this.csvDataObj.length;
                    for (let y = 0; y < this.csvDataRowCount; y++) {
                        if (this.csvDataObj[y].length > this.csvDataColCount) {
                            this.csvDataColCount = this.csvDataObj[y].length;
                        }
                    }

                    this.csvFirstDataRow = this.processCsvHeaders();
                    this.csvDataRowCount -= this.csvFirstDataRow;

                    if (this.csvImportError != "") {
                        this.currentFinding.columnHeaders = [];
                        return;
                    }

                    this.currentFinding.numberOfColumns = this.csvDataColCount;
                    this.currentFinding.numberOfRows = this.csvDataRowCount;

                    this.csvRowsIsEdit = new Array(this.csvDataRowCount).fill(false);

                    this.updateRowsColsForFinding();
                    this.updateIfTooManyCells();
                },
                error: (error: NgxCSVParserError): void => {
                  console.log('ngxCsvParser Error', error);
                }
            });
    }

    processCsvHeaders() {
        var currentRow = 0;

        var columnNameRow = -1;
        var columnTypeRow = -1;
        var valueTypeRow = -1;
        var valueUnitRow = -1;
        var constantValueRow = -1;
        var firstDataRow = 0;

        while (currentRow < this.csvDataObj.length) {
            var firstCell = this.csvDataObj[currentRow][0];
            if (firstCell.startsWith("column_name:")) {
                columnNameRow = currentRow;
            } else if (firstCell.startsWith("column_type:")) {
                columnTypeRow = currentRow;
            } else if (firstCell.startsWith("value_type:")) {
                valueTypeRow = currentRow;
            } else if (firstCell.startsWith("value_unit:")) {
                valueUnitRow = currentRow;
            } else if (firstCell.startsWith("constant_value:")) {
                constantValueRow = currentRow;
            } else {
                firstDataRow = currentRow;
                break;
            }
            currentRow++;
        }

        // Has headers, so need to process headers
        if (firstDataRow > 0) {
            // Must have column name and type row together
            if (columnNameRow == -1 || columnTypeRow == -1) {
                this.csvImportError = "Must have both column_name and column_type rows, or no header rows";
                return;
            }

            // Must have at least datum column
            var hasDatum = false;
            for (let col = 0; col < this.csvDataColCount; ++col) {
                let columnType = this.csvDataObj[columnTypeRow][col].replace(/(^column_type:)/gi, "");
                if (columnType == "datum") {
                    hasDatum = true;
                    break;
                }
            }

            if (!hasDatum) {
                this.csvImportError = "Must have at least one datum column";
                return;
            }

            this.csvHeaderNameTypeMap = new Map();

            this.currentFinding.columnHeaders = [];

            var col = 0;
            for (let col = 0; col < this.csvDataColCount; ++col) {
                let columnType = this.csvDataObj[columnTypeRow][col].replace(/(^column_type:)/gi, "");
                let columnName = this.csvDataObj[columnNameRow][col].replace(/(^column_name:)/gi, "");
                let valueType = (valueTypeRow == -1) ? "" : this.csvDataObj[valueTypeRow][col].replace(/(^value_type:)/gi, "");
                let valueUnit = (valueUnitRow == -1) ? "" : this.csvDataObj[valueUnitRow][col].replace(/(^value_unit:)/gi, "");
                let constantValue = (constantValueRow == -1) ? "" : this.csvDataObj[constantValueRow][col].replace(/(^constant_value:)/gi, "");  

                let header = {
                    'columnType':    columnType,
                    'columnName':    columnName,
                    'valueType':     valueType,
                    'valueUnit':     valueUnit,
                    'constantValue': constantValue
                }

                this.validateColumnHeader(header, col);

                if (this.csvImportError != "") {
                    return;
                }

                header['columnName'] = header['columnName'].replace(/(^\(other\):)/gi, "");
                header['valueType'] = header['valueType'].replace(/(^\(other\):)/gi, "");
                header['valueUnit'] = header['valueUnit'].replace(/(^\(other\):)/gi, "");

                this.currentFinding.columnHeaders.push(header);
            }
        }

        return firstDataRow;
    }

    validateColumnHeader(columnHeader, index) {
        var columnType = columnHeader['columnType'];
        var columnName = columnHeader['columnName'];

        // Every column must have column name and column type
        if (columnType == "" || columnName == "") {
            this.csvImportError = `Column ${index + 1} does not have column_type or column_name`;
            return;
        }

        // If a columnName does not exist, it must be like "(other):columnName"
        if (columnType == "datum") {
            if (columnName.startsWith("(other):")) {
                columnName = columnName.replace(/(^\(other\):)/gi, "");
                if (!this.existingDatumNames.includes(columnName)) {
                    this.existingDatumNames.push(columnName);
                }
            } else if (!this.existingDatumNames.includes(columnName)) {
                this.csvImportError = `Datum column name ${columnName} does not exist, write the column as "(other):NewColumnName" to add it to the database"`;
                return;
            }

        }

        if (columnType == "condition") {
            if (columnName.startsWith("(other):")) {
                columnName = columnName.replace(/(^\(other\):)/gi, "");
                if (!this.existingConditionNames.includes(columnName)) {
                    this.existingConditionNames.push(columnName);
                }
            } else if (!this.existingConditionNames.includes(columnName)) {
                this.csvImportError = `Condition column name ${columnName} does not exist, write the column as "(other):NewColumnName" to add it to the database"`;
                return;
            }
        }

        // If a valueType does not exist, it must be like "(other):valueType"
        var valueType = columnHeader['valueType'];
        if (valueType != "") {
            if (valueType.startsWith("(other):")) {
                valueType = valueType.replace(/(^\(other\):)/gi, "");
                if (!this.data.datumConditionValueTypeLookup.includes(valueType)) {
                    this.data.datumConditionValueTypeLookup.push(valueType);
                }
            } else if (!this.data.datumConditionValueTypeLookup.includes(valueType)) {
                this.csvImportError = `Value type ${valueType} does not exist, write the column as "(other):NewValueType" to add it to the database"`;
                return;
            }
        }

        // Every columnName + columnValueType combination must be unique
        let combination = columnName + "," + valueType;
        if (this.csvHeaderNameTypeMap.has(combination)) {
            this.csvImportError = `Column ${index + 1} column name and value type combination (${combination}) is not unique`;
            return;
        }
        this.csvHeaderNameTypeMap.set(combination, true);
    }

    createArray(len) {
        let arr = new Array(len || 0),
            i = len;
        if (arguments.length > 1) {
            let args = Array.prototype.slice.call(arguments, 1);
            while (i--) {
                arr[len - 1 - i] = this.createArray.apply(this, args);
            }
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
        let url = this.apiService.doPost(Consts.QUERY_CHARACTERIZTAION_UPDATE_FINDING, this.currentFinding);

        url.subscribe(data => {
                data = data;
                if (data.rows[this.csvDataRowCount - 1] === undefined) {
                    this.csvDataRowCount = data.numberOfRows;
                }

                for (let y = 0; y < this.csvDataRowCount; y++) {

                    for (let x = 0; x < this.csvDataColCount; x++) {
                        // If the user has reduced the number of columns, make sure we don't try to update columns that no longer exist.
                        if ((data.rows[y].cells[x] !== null) && (data.rows[y].cells[x] !== undefined)) {
                            data.rows[y].cells[x].value = Object(this.csvDataObj[y + this.csvFirstDataRow][x]);
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
                for (let colX = 0; colX < this.csvDataColCount; colX++) {
                    if ((this.currentFinding.columnHeaders[colX] !== null) && (this.currentFinding.columnHeaders[colX] !== undefined)) {
                        data.columnHeaders[colX] = this.currentFinding.columnHeaders[colX];
                    }
                }
                // WJRL 12-21-22: Issue 209. The data appears to be correctly laid out at this point
                this.currentFinding = data;
                console.log('complete')

        })
    };

    rendering() {
    }

    getMaxColumnCount(csvData) {
        let columnCount = 0;
        for (let row = 0; row < csvData.length; row++) {
            if (columnCount < csvData[row].length) {
                columnCount = csvData[row].length;
            }
        }
        return columnCount;
    }

    resetCharacterization() {
        // Replace JSON.parse(JSON.stringify()):
        this.data = Util.deepCopy(this.dataTrailer, false);
        this.data['assayTypesByCharNameLookup'] = [];
        this.changeType(this.data.type)

    };

    resetColumnForm() {
        // Replace JSON.parse(JSON.stringify()):
        this.columnHeader = Util.deepCopy(this.columnHeaderTrailer, false);
    }

    saveColumnForm() {
        if (this.columnHeader['constantValue'] != '') {
            this.currentFinding['rows'].forEach(row => {
                row['cells'][this.columnHeaderIndex]['value'] = this.columnHeader['constantValue'];
            });
        }
        this.currentFinding.columnHeaders[this.columnHeaderIndex] = this.columnHeader;
        this.columnHeaderIndex = null;
        this.fileIndex = null;
    };

    saveColumnOrder() {
        // Replace JSON.parse(JSON.stringify()):
        this.currentFinding = Util.deepCopy(this.columnOrder, false);
        let url = this.apiService.doPost(Consts.QUERY_CHARACTERIZATION_SET_COLUMN_ORDER, this.columnOrder);
        url.subscribe(data => {
            this.errors = {};
            this.currentFinding = data;
        },
        error => {
            this.errors = error;
        })
        this.columnOrder = null;

    }

    saveFile() {
        if (!this.currentFile['uriExternal']) {
            if (this.theFile) {
                this.theFile.append('uriExternal', this.currentFile['uriExternal']);
                this.theFile.append('externalUrl', this.currentFile['externalUrl']);
                this.theFile.append('type', this.currentFile['type']);
                this.theFile.append('title', this.currentFile['title']);
                this.theFile.append('keywordsStr', this.currentFile['keywordsStr']);
                this.theFile.append('description', this.currentFile['description']);
                // WJRL 2/2/23 NOTE that "Uploading the file" places the image bytes into the session
                // attribute "newFileData" on the server. It *appears* that none of the other fields
                // above are processed at all.
                let uploadUrl = this.httpClient.post(Consts.QUERY_UPLOAD_FILE, this.theFile);
                uploadUrl.subscribe(data => {
                    if (this.fileIndex == -1) {
                        this.currentFinding.files.push(data);
                    }
                    else {
                        this.currentFinding.files[this.fileIndex] = data;
                    }
                    this.currentFinding['dirty'] = 1;
                    this.currentFinding.theFile = this.currentFile;
                    this.currentFinding['theFile']['uri'] = data['fileName']
                    // This is where the file gets saved to the filesystem/bucket
                    let saveUrl = this.apiService.doPost(Consts.QUERY_CHARACTERIZATION_SAVE_FILE, this.currentFinding);
                    saveUrl.subscribe(data => {
                        this.errors = {};
                        this.currentFinding = data;
                    },
                    error => {
                        this.errors = error;
                    })
                },
                error => {
                    this.errors = error;
                })
            }
            else {
                this.currentFinding['dirty'] = 1;
                this.currentFinding.theFile = this.currentFile;
                this.currentFinding['theFile']['uri'] = this.currentFile['uri']
                let saveUrl = this.apiService.doPost(Consts.QUERY_CHARACTERIZATION_SAVE_FILE,this.currentFinding);
                saveUrl.subscribe(data => {
                    this.errors = {};
                    this.currentFinding = data;
                },
                error => {
                    this.errors = error;
                })
            }


            if (this.fileIndex == -1) {
                this.currentFinding.files
            }
            else {
            }
        }
        else {
            this.currentFinding['theFile'] = this.currentFile;
            let saveUrl = this.apiService.doPost(Consts.QUERY_CHARACTERIZATION_SAVE_FILE, this.currentFinding);
            saveUrl.subscribe(data => {
                this.errors = {};
                this.currentFinding = data;
            },
            error => {
                this.errors = error;
            })
        }
        this.fileIndex = null;
    }

    saveFinding() {
        this.currentFinding.dirty = 1;
        if (this.findingIndex == -1) {
            this.data.finding.push(this.currentFinding);
            this.currentSavingFindingIndex = 0;
        }
        else {
            // Replace JSON.parse(JSON.stringify()):
            this.data.finding[this.findingIndex] = Util.deepCopy(this.currentFinding, false);
            this.currentSavingFindingIndex = this.findingIndex;
        }
        let url = this.apiService.doPost(Consts.QUERY_CHARACTERIZATION_SAVE_FINDING, this.data);
        url.subscribe(data => {
            this.errors = {};

            this.data = data;
            this.setCharacterizationData();

            this.columnHeaderIndex = null;
            this.fileIndex = null;

            this.currentSavingFindingIndex = null;
        },
        error => {
            this.errors = error;
            this.currentSavingFindingIndex = null;
        })
        this.findingIndex = null;
    };

    saveInstrument() {
        if (this.instrumentIndex == -1) {
            this.techniqueInstrument.instruments.push(this.instrument);
        }
        this.instrumentIndex = null;
    };

    // save other value //
    saveOther(newItem: Object) {
        if (newItem['change'] && newItem['value']) {
            this.addDropdownItem(newItem['array'], newItem['value'])
            this.setValue(newItem['field'], newItem['value']);
        }
        else {
            this.setValue(newItem['field'], newItem['value']);
        }
    };

    saveTechniqueInstrument() {
        if (this.techniqueIndex == -1) {
            this.data.techniqueInstruments.experiments.push(this.techniqueInstrument);
            let url = this.apiService.doPost(Consts.QUERY_CHARACTERIZATION_SAVE_EXPERIMENT, this.data);
            // push technique, call save and overwrite this.data //
        }

        this.data.techniqueInstruments.experiments[this.techniqueIndex] = this.techniqueInstrument;
        let url = this.apiService.doPost(Consts.QUERY_CHARACTERIZATION_SAVE_EXPERIMENT, this.data);
        url.subscribe(
                data => {
                    this.errors = {};

                    this.data = data;
                    this.setCharacterizationData();
                },
                error => {
                    this.errors = error;

                }
            )

        this.techniqueIndex = null;
        this.instrumentIndex = null;
    };

    setCharacterizationData() {
        // Replace JSON.parse(JSON.stringify()):
        this.dataTrailer = Util.deepCopy(this.data, false);
        this.data.characterizationDate = this.formatDate(this.data.characterizationDate)
        this.setupData = [];
        let url = this.apiService.doGet(Consts.QUERY_CHARACTERIZATION_GET_DATUM_NUMBER_MODIFIER, 'columnName=Number%20Modifier');
        url.subscribe(data => {
            this.errors = {};

            this.setupData.datumNumberModifier = data;
            this.setupData.datumNumberModifier.splice(this.setupData.datumNumberModifier.indexOf('other'), 1)
        },
        error => {
            this.errors = error;
        })
        this.setupData.instrumentTypeLookup = [];
    };

    setupDefaultDataSet() {
        // Replace JSON.parse(JSON.stringify()):
        this.dataTrailer = Util.deepCopy(this.data, false);
    };

    setupTechniqueInstrument() {
        this.techniqueInstrument = {
            'techniqueType': '',
            'dirty': 1,
            'instruments': []
        }
    };

    // splits keywords for experiments and configurations //
    splitKeywords(keywords) {
        if (keywords) {
            return keywords.split('\n')
        }
        else {
            return ''
        }
    }

    submitCharacterization() {
        this.data.characterizationDate = new Date(this.data.characterizationDate + ' 00:00');
        let url = this.apiService.doPost(Consts.QUERY_CHARACTERIZATION_SAVE, this.data);
        url.subscribe(
            data => {
                this.errors = {};
                this.router.navigate( ['home/samples/characterization', Properties.CURRENT_SAMPLE_ID] );  // @FIXME  Don't hard code these
            },
            error => {
                this.errors = error;
            }
        )
    };

    updateRowsColumns() {
        let url = this.apiService.doPost(Consts.QUERY_CHARACTERIZTAION_UPDATE_FINDING, this.currentFinding)
        url.subscribe(data => {
            this.errors = {};
            this.currentFinding = data;
            this.csvRowsIsEdit = new Array(this.currentFinding.numberOfRows).fill(false);

            this.updateIfTooManyCells();
        },
        error => {
            this.errors = error;
        })
    };

    uploadFile(event) {
        this.theFile = new FormData();
        const tFile = event.target.files.item(0);
        console.log(typeof(tFile))
        console.log(tFile)
        this.theFile.append('myFile', tFile, tFile.name);
        this.fileName = tFile.name;
    }

    updateIfTooManyCells() {
        // If there is too many cells, the front end will take a long time load them and look like frozen
        // In that case, we make the table rows not editable and give the user edit button to turn on
        this.isTooManyCells = (this.currentFinding.numberOfRows * this.currentFinding.numberOfColumns >= Consts.tooManyTableCellLimit);
    }
}
