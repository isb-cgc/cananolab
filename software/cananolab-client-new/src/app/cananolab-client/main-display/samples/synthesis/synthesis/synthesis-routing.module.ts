import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SynthesisComponent } from './synthesis.component';

const routes: Routes = [{ path: '', component: SynthesisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SynthesisRoutingModule { }
