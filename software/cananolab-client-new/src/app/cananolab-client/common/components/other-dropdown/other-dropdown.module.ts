import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtherDropdownComponent } from './other-dropdown.component';
import { SharedModule } from '../../modules/set-object-value/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [OtherDropdownComponent],
    imports: [
      CommonModule,
      SharedModule,
      MatTooltipModule,
      FormsModule,
      ReactiveFormsModule
    ],
    exports:[
        OtherDropdownComponent
    ]
  })
  export class OtherDropdownModule { }

