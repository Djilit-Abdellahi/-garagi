import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MapComponent } from './components/map/map.component';
import { GarageDetailComponent } from './components/garage-detail/garage-detail.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { UserHomeComponent } from './pages/user-home/user-home.component'
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { UserReservationComponent } from './pages/user-reservation/user-reservation.component';
import { UserFavorisComponent } from './pages/user-favoris/user-favoris.component';
import { UserGaragesComponent } from './pages/user-garages/user-garages.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule


@NgModule({
  declarations: [
    MapComponent,
    GarageDetailComponent,
    SearchFormComponent,
    UserHomeComponent,
    TopNavComponent,
    UserReservationComponent,
    UserFavorisComponent,
    UserGaragesComponent,

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule 
    
  ]
})
export class UserModule { }
