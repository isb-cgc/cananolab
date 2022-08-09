import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NanomaterialentityComponent } from './nanomaterialentity.component';
import { NanomaterialentityRoutingModule } from './nanomaterialentity-routing.module';
import { SharedModule } from '../../../../common/modules/set-object-value/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileModule } from 'src/app/cananolab-client/common/components/file/file.module';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [NanomaterialentityComponent],
    imports: [
      CommonModule,
      NanomaterialentityRoutingModule,
      SharedModule,
      MatTooltipModule,
      FormsModule,
      ReactiveFormsModule,
      FileModule
    ]
  })
export class NanomaterialentityModule { }

