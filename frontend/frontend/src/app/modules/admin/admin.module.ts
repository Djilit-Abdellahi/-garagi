import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { GarageManagementComponent } from './components/garage-management/garage-management.component';
import { ReservationNotificationsComponent } from './components/reservation-notifications/reservation-notifications.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { UserManageComponent } from './pages/user-manage/user-manage.component';
import { TableComponent } from './components/table/table.component';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    GarageManagementComponent,
    ReservationNotificationsComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    AdminComponent,
    AdminHomeComponent,
    UserManageComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSortModule,
    MatTableModule
  ]
})
export class AdminModule { }
