// admin-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GarageManagementComponent } from './components/garage-management/garage-management.component';
import { ReservationNotificationsComponent } from './components/reservation-notifications/reservation-notifications.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { UserManageComponent } from './pages/user-manage/user-manage.component';
import { TableComponent } from './components/table/table.component';
import { ReservationComponent } from './pages/reservation/reservation.component';

export const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent, 
  },
  {
    path: 'garage-management',
    component: AdminHomeComponent,
  },
  {
    path: 'reservation-notifications',
    component: ReservationNotificationsComponent,
  },
  {
    path: 'user-manage', 
    component: UserManageComponent, 
  },
  {
    path: 'admin-header',
    component: UserManageComponent,
  },
  {
    path: 'reservation',
    component: ReservationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class AdminRoutingModule { }
