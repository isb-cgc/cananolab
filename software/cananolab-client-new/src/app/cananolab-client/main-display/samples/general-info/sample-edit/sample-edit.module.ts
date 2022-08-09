import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleEditComponent } from './sample-edit.component';
import { SampleEditRoutingModule } from './sample-edit-routing.module';
import { SharedModule } from '../../../../common/modules/set-object-value/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OtherDropdownModule } from 'src/app/cananolab-client/common/components/other-dropdown/other-dropdown.module';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [SampleEditComponent],
    imports: [
      CommonModule,
      SampleEditRoutingModule,
      SharedModule,
      MatTooltipModule,
      FormsModule,
      ReactiveFormsModule,
      OtherDropdownModule
    ]
  })
  export class SampleEditModule { }

