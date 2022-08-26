import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunctionalizationRoutingModule } from './functionalization-routing.module';
import { FunctionalizationComponent } from './functionalization.component';


@NgModule({
  declarations: [FunctionalizationComponent],
  imports: [
    CommonModule,
    FunctionalizationRoutingModule
  ]
})
export class FunctionalizationModule { }
