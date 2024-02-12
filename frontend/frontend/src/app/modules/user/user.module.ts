import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MapComponent } from './components/map/map.component';
import { GarageDetailComponent } from './components/garage-detail/garage-detail.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [
    MapComponent,
    GarageDetailComponent,
    SearchFormComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
