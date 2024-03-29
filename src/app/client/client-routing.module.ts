import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientInitialComponent } from './client-initial/client-initial.component';
import { LayoutComponent } from '../shared/layout/layout.component';
const routes: Routes = [
  {
  path: '', component: LayoutComponent,
  children: [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'client-initial'
  },
  {
    path: 'client-initial',
    component: ClientInitialComponent,
  }

  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
