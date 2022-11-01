import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunctionalizationRoutingModule } from './functionalization-routing.module';
import { FunctionalizationComponent } from './functionalization.component';

import { SharedModule } from '../../../../common/modules/set-object-value/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileModule } from 'src/app/cananolab-client/common/components/file/file.module';

@NgModule({
  declarations: [FunctionalizationComponent],
  imports: [
    CommonModule,
    FunctionalizationRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FileModule
  ]
})
export class FunctionalizationModule { }
