import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GarageRoutingModule } from './garage-routing.module';
import { GarageSidebarComponent } from './components/garage-sidebar/garage-sidebar.component';
import { GarageHeaderComponent } from './components/garage-header/garage-header.component';



@NgModule({
  declarations: [
    GarageSidebarComponent,
    GarageHeaderComponent
  ],
  imports: [
    CommonModule,
    GarageRoutingModule
  ]
})
export class GarageModule { }
