import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { GarageHomeComponent } from './pages/garage-home/garage-home.component';

export const routes: Routes = [
  {
    path: 'garage',
    component: GarageHomeComponent, 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GarageRoutingModule { }
