import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompositionfileComponent } from './compositionfile.component';
import { CompositionfileRoutingModule } from './compositionfile-routing.module';
import { SharedModule } from '../../../../common/modules/set-object-value/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisclaimerModule } from 'src/app/cananolab-client/common/components/disclaimer/disclaimer.module';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [CompositionfileComponent],
    imports: [
      CommonModule,
      CompositionfileRoutingModule,
      SharedModule,
      MatTooltipModule,
      FormsModule,
      ReactiveFormsModule,
      DisclaimerModule
    ]
  })
  export class CompositionfileModule { }
