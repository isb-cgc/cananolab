import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileComponent } from './file.component';
import { SharedModule } from '../../modules/set-object-value/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisclaimerModule } from '../disclaimer/disclaimer.module';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [FileComponent],
    imports: [
      CommonModule,
      SharedModule,
      MatTooltipModule,
      FormsModule,
      ReactiveFormsModule,
      DisclaimerModule
    ],
    exports:[
        FileComponent,
    ]
  })
  export class FileModule { }

