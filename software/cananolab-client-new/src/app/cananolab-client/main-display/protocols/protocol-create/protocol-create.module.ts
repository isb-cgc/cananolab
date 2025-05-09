import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtocolCreateComponent } from './protocol-create.component';
import { ProtocolCreateRoutingModule } from './protocol-create-routing.module';
import { SharedModule } from '../../../common/modules/set-object-value/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisclaimerModule } from 'src/app/cananolab-client/common/components/disclaimer/disclaimer.module';
import {TrimInputDirective} from 'src/app/cananolab-client/common/directives/trim-input.directive';

@NgModule({
    declarations: [ProtocolCreateComponent],
    imports: [
        CommonModule,
        ProtocolCreateRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        DisclaimerModule,
        TrimInputDirective
    ]
})
  export class ProtocolCreateModule { }
