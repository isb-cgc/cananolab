import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPublicationComponent } from './search-publication.component';
import { SearchPublicationRoutingModule } from './search-publication-routing.module';
import { SharedModule } from '../../../common/modules/set-object-value/shared.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
    declarations: [SearchPublicationComponent],
    imports: [
      CommonModule,
      SearchPublicationRoutingModule,
      SharedModule,
      MatTooltipModule,
      FormsModule,
      ReactiveFormsModule
    ]
  })
  export class SearchPublicationModule { }

