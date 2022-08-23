import {NgModule} from '@angular/core';
import {A11yModule} from '@angular/cdk/a11y';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
    exports: [
        A11yModule,
        MatTooltipModule,
    ]
})
export class MaterialModule {}
