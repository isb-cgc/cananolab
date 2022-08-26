import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurificationRoutingModule } from './purification-routing.module';
import { PurificationComponent } from './purification.component';


@NgModule({
  declarations: [PurificationComponent],
  imports: [
    CommonModule,
    PurificationRoutingModule
  ]
})
export class PurificationModule { }
