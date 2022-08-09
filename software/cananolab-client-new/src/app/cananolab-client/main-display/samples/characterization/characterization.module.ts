import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterizationComponent } from './characterization.component';
import { CharacterizationRoutingModule } from './characterization-routing.module';
import { SharedModule } from '../../../common/modules/set-object-value/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [CharacterizationComponent],
    imports: [
      CommonModule,
      CharacterizationRoutingModule,
      SharedModule,
      MatTooltipModule,
      FormsModule,
      ReactiveFormsModule
    ]
  })
export class CharacterizationModule { }

