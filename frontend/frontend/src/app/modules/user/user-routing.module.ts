import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { UserReservationComponent } from './pages/user-reservation/user-reservation.component';
import { UserFavorisComponent } from "./pages/user-favoris/user-favoris.component";
import { UserGaragesComponent } from './pages/user-garages/user-garages.component';
const routes: Routes = [
  { path: 'user-home',component: UserHomeComponent },
  { path:'user-favoris' ,component: UserFavorisComponent},
  { path:'user-reservation' ,component: UserReservationComponent},
  { path:'user-garages' ,component: UserGaragesComponent}

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
