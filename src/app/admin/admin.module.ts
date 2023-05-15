import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiRequestService } from '../core/services/api-requests/ApiRequest.service';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ],
  declarations: [
    DashboardComponent
  ],
  providers: [ApiRequestService],
})
export class AdminModule { }
