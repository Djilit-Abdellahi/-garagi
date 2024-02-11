import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { GarageManagementComponent } from './components/garage-management/garage-management.component';
import { ReservationNotificationsComponent } from './components/reservation-notifications/reservation-notifications.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminComponent } from './components/admin/admin.component';


@NgModule({
  declarations: [
    GarageManagementComponent,
    ReservationNotificationsComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
