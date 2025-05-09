import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditpublicationComponent } from './editpublication.component';
import { EditpublicationRoutingModule } from './editpublication-routing.module';
import { SharedModule } from '../../../../common/modules/set-object-value/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OtherDropdownModule } from 'src/app/cananolab-client/common/components/other-dropdown/other-dropdown.module';
import { EditpublicationPipe } from './editpublication.pipe';
import { DisclaimerModule } from 'src/app/cananolab-client/common/components/disclaimer/disclaimer.module';
import {TrimInputDirective} from "../../../../common/directives/trim-input.directive";

@NgModule({
    declarations: [EditpublicationComponent,EditpublicationPipe],
    imports: [
        CommonModule,
        EditpublicationRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        OtherDropdownModule,
        DisclaimerModule,
        TrimInputDirective
    ]
})
  export class EditpublicationModule { }
