import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyWorkspaceComponent } from './my-workspace.component';
import { MyWorkspaceRoutingModule } from './my-workspace-routing.module';
import { SharedModule } from '../../common/modules/set-object-value/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [MyWorkspaceComponent],
    imports: [
      CommonModule,
      MyWorkspaceRoutingModule,
      SharedModule,
      MatTooltipModule,
      FormsModule,
      ReactiveFormsModule
    ]
  })
  export class MyWorkspaceModule { }
