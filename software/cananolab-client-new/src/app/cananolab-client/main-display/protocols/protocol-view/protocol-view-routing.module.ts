import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProtocolViewComponent } from './protocol-view.component';

const routes: Routes = [{ path: '', component: ProtocolViewComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProtocolViewRoutingModule { }
