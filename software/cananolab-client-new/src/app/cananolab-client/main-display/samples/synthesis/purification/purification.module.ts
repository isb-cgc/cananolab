import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurificationRoutingModule } from './purification-routing.module';
import { PurificationComponent } from './purification.component';

import { SharedModule } from '../../../../common/modules/set-object-value/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileModule } from 'src/app/cananolab-client/common/components/file/file.module';

@NgModule({
  declarations: [PurificationComponent],
  imports: [
    CommonModule,
    PurificationRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FileModule
  ]
})
export class PurificationModule { }
