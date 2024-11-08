import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtocolViewComponent } from './protocol-view.component';
import { ProtocolViewRoutingModule } from './protocol-view-routing.module';
import { SharedModule } from '../../../common/modules/set-object-value/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisclaimerModule } from 'src/app/cananolab-client/common/components/disclaimer/disclaimer.module';

@NgModule({
    declarations: [ProtocolViewComponent],
    imports: [
        CommonModule,
        ProtocolViewRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        DisclaimerModule
    ]
})
export class ProtocolViewModule { }
