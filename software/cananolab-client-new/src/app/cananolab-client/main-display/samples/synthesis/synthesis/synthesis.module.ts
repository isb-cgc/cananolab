import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SynthesisRoutingModule } from './synthesis-routing.module';
import { SynthesisComponent } from './synthesis.component';
import { SharedModule } from '../../../../common/modules/set-object-value/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SynthesisComponent],
  imports: [
    CommonModule,
    SynthesisRoutingModule,
      SharedModule,
      FormsModule,
      ReactiveFormsModule
  ]
})
export class SynthesisModule { }
