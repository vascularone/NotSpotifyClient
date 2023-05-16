import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ApiRequestService } from '../core/services/api-requests/ApiRequest.service';
import { ClientInitialComponent } from './client-initial/client-initial.component';
import { SharedModule } from '../shared/shared.module';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    CardModule,
    ButtonModule,
  ],
  declarations: [
    ClientInitialComponent,
  ],
  providers: [ApiRequestService],
})
export class ClientModule { }
