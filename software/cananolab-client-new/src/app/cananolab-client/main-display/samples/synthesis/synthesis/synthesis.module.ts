import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SynthesisRoutingModule } from './synthesis-routing.module';
import { SynthesisComponent } from './synthesis.component';


@NgModule({
  declarations: [SynthesisComponent],
  imports: [
    CommonModule,
    SynthesisRoutingModule
  ]
})
export class SynthesisModule { }
