import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MapComponent } from './components/map/map.component';
import { GarageDetailComponent } from './components/garage-detail/garage-detail.component';
import { SearchFormComponent } from './components/search-form/search-form.component';

import { UserComponent } from './components/user/user.component'
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { HomeComponent } from './pages/home/home.component';
import { BookingComponent } from './pages/booking/booking.component';


@NgModule({
  declarations: [
    MapComponent,
    GarageDetailComponent,
    SearchFormComponent,
    UserComponent,
    TopNavComponent,
    HomeComponent,
    BookingComponent,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    
  ]
})
export class UserModule { }
