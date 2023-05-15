import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ApiRequestService } from '../core/services/api-requests/ApiRequest.service';
import { ClientInitialComponent } from './client-initial/client-initial.component';
import { ClientCurrentmusicComponent } from './client-currentmusic/client-currentmusic.component';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
  ],
  declarations: [
    ClientInitialComponent,
    ClientCurrentmusicComponent,
  ],
  providers: [ApiRequestService],
})
export class ClientModule { }
