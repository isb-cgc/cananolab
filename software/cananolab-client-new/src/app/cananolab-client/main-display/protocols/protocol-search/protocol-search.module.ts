import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtocolSearchComponent } from './protocol-search.component';
import { ProtocolSearchRoutingModule } from './protocol-search-routing.module';
import { SharedModule } from '../../../common/modules/set-object-value/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [ProtocolSearchComponent],
    imports: [
      CommonModule,
      ProtocolSearchRoutingModule,
      SharedModule,
      MatTooltipModule,
      FormsModule,
      ReactiveFormsModule
    ]
  })
  export class ProtocolSearchModule { }
