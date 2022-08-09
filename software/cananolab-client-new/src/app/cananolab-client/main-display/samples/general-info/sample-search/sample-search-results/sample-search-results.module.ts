import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleSearchResultsComponent } from './sample-search-results.component';
import { SampleSearchResultsRoutingModule } from './sample-search-results-routing.module';
import { SharedModule } from '../../../../../common/modules/set-object-value/shared.module';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [SampleSearchResultsComponent],
    imports: [
      CommonModule,
      SampleSearchResultsRoutingModule,
      SharedModule,
      MatTooltipModule,
      FormsModule
    ]
  })
  export class SampleSearchResultsModule { }
