import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleSearchComponent } from './sample-search.component';
import { SampleSearchRoutingModule } from './sample-search-routing.module';
import { SharedModule } from '../../../../common/modules/set-object-value/shared.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [SampleSearchComponent],
    imports: [
      CommonModule,
      SampleSearchRoutingModule,
      SharedModule,
      MatTooltipModule,
      FormsModule,
      ReactiveFormsModule
    ]
  })
  export class SampleSearchModule { }

