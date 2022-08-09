import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleCopyComponent } from './sample-copy.component';
import { SampleCopyRoutingModule } from './sample-copy-routing.module';
import { SharedModule } from '../../../../common/modules/set-object-value/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [SampleCopyComponent],
    imports: [
      CommonModule,
      SampleCopyRoutingModule,
      SharedModule,
      MatTooltipModule,
      FormsModule,
      ReactiveFormsModule
    ]
  })
  export class SampleCopyModule { }

