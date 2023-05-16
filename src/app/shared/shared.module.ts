import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { UserComponent } from './layout/header/user/user.component';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu'
import { SideItemComponent } from './layout/sidebar/side-item/side-item.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { CurrentmusicComponent } from './layout/current-music/currentmusic.component';
@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    UserComponent,
    SideItemComponent,
    SidebarComponent,
    CurrentmusicComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    MenuModule,

  ],
  exports: [
    CommonModule,
    LayoutComponent,
  ],
  providers: [],
})
export class SharedModule {}
