import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NanomaterialentityComponent } from './nanomaterialentity.component';
import { NanomaterialentityRoutingModule } from './nanomaterialentity-routing.module';

import { SharedModule } from '../../../../common/modules/set-object-value/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OtherDropdownModule } from 'src/app/cananolab-client/common/components/other-dropdown/other-dropdown.module';
import { FileModule } from 'src/app/cananolab-client/common/components/file/file.module';
import { TrimInputDirective } from 'src/app/cananolab-client/common/directives/trim-input.directive';

@NgModule({
    declarations: [NanomaterialentityComponent],
    imports: [
        CommonModule,
        NanomaterialentityRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        OtherDropdownModule,
        FileModule,
        TrimInputDirective
    ]
})
export class NanomaterialentityModule { }
