import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientInitialComponent } from './client-initial/client-initial.component';
const routes: Routes = [
  {
  path: '', component: ClientInitialComponent,
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
