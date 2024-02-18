import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MapComponent } from './components/map/map.component';
import { GarageDetailComponent } from './components/garage-detail/garage-detail.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
// import { UserComponent } from './user/user.component';
import { UserComponent } from './components/user/user.component'
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { HomeComponent } from './pages/home/home.component';
import { BookingComponent } from './pages/booking/booking.component';
// import { CustomDateTimePipe } from './pipes/custom-date-time.pipe';
import { CustomDateTimePipe } from '../../shared/pipes/custom-date-time.pipe';
// import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    MapComponent,
    GarageDetailComponent,
    SearchFormComponent,
    UserComponent,
    TopNavComponent,
    HomeComponent,
    BookingComponent,
    CustomDateTimePipe 
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    // SharedModule
  ]
})
export class UserModule { }
