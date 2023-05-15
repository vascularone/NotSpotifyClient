import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { isAdmin } from './shared/utils/admin-util';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: isAdmin() ? 'client' : 'admin'
  },
  {
    path: 'client',
    loadChildren: () => import('./client/client.module').then(m => m.ClientModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
