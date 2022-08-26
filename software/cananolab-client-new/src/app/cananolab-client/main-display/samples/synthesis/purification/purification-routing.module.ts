import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurificationComponent } from './purification.component';

const routes: Routes = [{ path: '', component: PurificationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurificationRoutingModule { }
