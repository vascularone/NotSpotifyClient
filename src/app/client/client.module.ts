import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ApiRequestService } from '../core/services/api-requests/ApiRequest.service';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
  ],
  declarations: [],
  providers: [ApiRequestService],
})
export class ClientModule { }
