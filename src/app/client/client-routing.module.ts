import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientInitialComponent } from './client-initial/client-initial.component';
import { LayoutComponent } from '../shared/layout/layout.component';
import { LibraryComponent } from './library/library.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SettingsComponent } from './settings/settings.component';
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
  },
  {
    path: 'library',
    component: LibraryComponent,
  },
  {
    path: 'playlist',
    component: PlaylistComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  }

  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
