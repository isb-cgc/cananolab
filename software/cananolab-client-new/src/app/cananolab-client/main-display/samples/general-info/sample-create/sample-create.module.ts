import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleCreateComponent } from './sample-create.component';
import { SampleCreateRoutingModule } from './sample-create-routing.module';
import { SharedModule } from '../../../../common/modules/set-object-value/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OtherDropdownModule } from 'src/app/cananolab-client/common/components/other-dropdown/other-dropdown.module';
import {TrimInputDirective} from 'src/app/cananolab-client/common/directives/trim-input.directive';


@NgModule({
    declarations: [SampleCreateComponent],
    imports: [
        CommonModule,
        SampleCreateRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        OtherDropdownModule,
        TrimInputDirective
    ]
})
  export class SampleCreateModule { }

