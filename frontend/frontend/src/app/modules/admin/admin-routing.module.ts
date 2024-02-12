// admin-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GarageManagementComponent } from './components/garage-management/garage-management.component';
import { ReservationNotificationsComponent } from './components/reservation-notifications/reservation-notifications.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
  {
    path: 'admin', // This path is for '/admin' due to lazy loading in AppModule
    component: AdminComponent, // The AdminComponent is the default view for '/admin'
    
  },
  {
    path: 'garage-management', // This path is for '/admin/garage-management'
    component: GarageManagementComponent, // The GarageManagementComponent is the view for '/admin/garage-management'
    
  },
  {
    path: 'reservation-notifications', // This path is for '/admin/reservation-notifications'
    component: ReservationNotificationsComponent, // The ReservationNotificationsComponent is the view for '/admin/reservation-notifications'
    
  },
  {
    path: 'admin-sidebar', // This path is for '/admin/admin-sidebar'
    component: AdminSidebarComponent, // The AdminSidebarComponent is the view for '/admin/admin-sidebar'
    
  },
  {
    path: 'admin-header', // This path is for '/admin/admin-header'
    component: AdminHeaderComponent, // The AdminHeaderComponent is the view for '/admin/admin-header'
  }
  // ... other routes that are part of the admin module
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AdminRoutingModule { }
