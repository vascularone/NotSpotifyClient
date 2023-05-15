import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientSharedComponent } from './client-shared/client-shared/client-shared.component';
const routes: Routes = [
  {
  path: '', component: ClientSharedComponent,
  children: [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'initial'
  },

  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
