import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoutComponent } from './logout.component';
import { LogoutRoutingModule } from './logout-routing.module';
import { SharedModule } from '../../common/modules/set-object-value/shared.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [LogoutComponent],
    imports: [
      CommonModule,
      LogoutRoutingModule,
      SharedModule,
      MatTooltipModule,
      MatTooltipModule,
      FormsModule,
      ReactiveFormsModule,
    ]
  })
export class LogoutModule { }

