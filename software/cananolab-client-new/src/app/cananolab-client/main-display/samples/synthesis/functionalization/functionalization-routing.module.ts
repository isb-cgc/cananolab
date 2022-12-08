import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FunctionalizationComponent } from './functionalization.component';
const routes: Routes = [{ path: '', component: FunctionalizationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FunctionalizationRoutingModule { }
