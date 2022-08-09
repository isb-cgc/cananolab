import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSamplesByPublicationResultsComponent } from './search-samples-by-publication-results.component';
import { SearchSamplesByPublicationResultsRoutingModule } from './search-samples-by-publication-results-routing.module';
import { SharedModule } from '../../../common/modules/set-object-value/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [SearchSamplesByPublicationResultsComponent],
    imports: [
      CommonModule,
      SearchSamplesByPublicationResultsRoutingModule,
      SharedModule,
      MatTooltipModule,
      FormsModule,
      ReactiveFormsModule
    ]
  })
  export class SearchSamplesByPublicationResultsModule { }
