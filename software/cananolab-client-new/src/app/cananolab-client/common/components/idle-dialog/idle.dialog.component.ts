import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
    expire_time: string;
    idle_duration: string;
    time_remaining: string;
}

@Component({
    selector: 'idle-dialog',
    templateUrl: 'idle.dialog.html',
})
export class IdleDialog {

    constructor(
        public dialogRef: MatDialogRef<IdleDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    onOkClick(): void {
        this.dialogRef.close();
    }

}
