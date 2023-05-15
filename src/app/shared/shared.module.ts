import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,

  ],
  exports: [
    CommonModule,
    LayoutComponent,
  ],
  providers: [],
})
export class SharedModule {}
