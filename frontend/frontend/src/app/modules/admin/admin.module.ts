import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { GarageManagementComponent } from './components/garage-management/garage-management.component';
import { ReservationNotificationsComponent } from './components/reservation-notifications/reservation-notifications.component';


@NgModule({
  declarations: [
    GarageManagementComponent,
    ReservationNotificationsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
