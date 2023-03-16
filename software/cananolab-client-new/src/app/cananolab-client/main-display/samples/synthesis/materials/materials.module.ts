import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsRoutingModule } from './materials-routing.module';
import { MaterialsComponent } from './materials.component';

import { SharedModule } from '../../../../common/modules/set-object-value/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileModule } from 'src/app/cananolab-client/common/components/file/file.module';

@NgModule({
  declarations: [MaterialsComponent],
  imports: [
    CommonModule,
    MaterialsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FileModule
  ]
})
export class MaterialsModule { }
