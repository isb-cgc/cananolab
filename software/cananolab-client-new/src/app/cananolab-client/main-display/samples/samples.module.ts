import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamplesComponent } from './samples.component';
import { SamplesRoutingModule } from './samples-routing.module';
import { SharedModule } from '../../common/modules/set-object-value/shared.module';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
    declarations: [SamplesComponent],
    imports: [
      CommonModule,
      SamplesRoutingModule,
      SharedModule
    ]
  })
  export class SamplesModule { }
