import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CananolabClientComponent } from './cananolab-client/cananolab-client.component';

const routes: Routes = [
    { path: '', component: CananolabClientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
