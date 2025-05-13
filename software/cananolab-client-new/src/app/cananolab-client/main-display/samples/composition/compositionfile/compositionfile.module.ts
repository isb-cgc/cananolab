import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompositionfileComponent } from './compositionfile.component';
import { CompositionfileRoutingModule } from './compositionfile-routing.module';
import { SharedModule } from '../../../../common/modules/set-object-value/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisclaimerModule } from 'src/app/cananolab-client/common/components/disclaimer/disclaimer.module';
import {TrimInputDirective} from 'src/app/cananolab-client/common/directives/trim-input.directive';


@NgModule({
    declarations: [CompositionfileComponent],
    imports: [
        CommonModule,
        CompositionfileRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        DisclaimerModule,
        TrimInputDirective
    ]
})
  export class CompositionfileModule { }
