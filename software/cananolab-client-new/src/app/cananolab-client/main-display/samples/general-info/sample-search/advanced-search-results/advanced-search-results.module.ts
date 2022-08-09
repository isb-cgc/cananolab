import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedSearchResultsComponent } from './advanced-search-results.component';
import { AdvancedSearchResultsRoutingModule } from './advanced-search-results-routing.module';
import { SharedModule } from '../../../../../common/modules/set-object-value/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
    declarations: [AdvancedSearchResultsComponent],
    imports: [
      CommonModule,
      AdvancedSearchResultsRoutingModule,
      SharedModule,
      MatTooltipModule,
      FormsModule,
      ReactiveFormsModule
    ]
  })
  export class AdvnacedSearchResultsModule { }
