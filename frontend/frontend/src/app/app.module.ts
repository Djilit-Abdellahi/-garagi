// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; // For using [(ngModel)]

import { AppComponent } from './app.component';
// import { HeaderComponent } from './shared/header/header.component'; // Update path as necessary
import { HeaderComponent } from './shared/components/header/header.component'; // Update path as necessary
// import { LoginComponent } from './shared/login/login.component'; // Update path as necessary
import { LoginComponent } from './shared/components/login/login.component'; // Update path as necessary
// import { AuthenticationService } from './core/authentication/authentication.service'; // Update path as necessary
import { UserHomeComponent } from './modules/user/pages/user-home/user-home.component';
// import { LoginComponent } from './shared/components/login/login.component'

import { AuthGuard } from './core/authentication/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './shared/home/home.component';
import { RegistrationComponent } from './shared/components/registration/registration.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'signup', component: RegistrationComponent },
  // { path: 'welcome', component:}
  {
    path: '', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard],
    data: { roles: ['admin'] }
  },
  {
    path: '', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule), 
    canActivate: [AuthGuard],
    data: { roles: ['user'] }
  },
];



// { path: 'admin', component: AdminSidebarComponent },
//   { path: 'adminn', component: AdminComponent },
//   { path: 'adminnn', component: AdminHeaderComponent },
//   { path: 'home', component: HomeComponent },
//   { path: 'booking', component: BookingComponent },
//   { path: 'signup', component: RegistrationComponent }

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // For using [(ngModel)]
    RouterModule.forRoot(appRoutes, { enableTracing: true }), // Configure routes
    // Import other modules
    HttpClientModule, BrowserAnimationsModule, // Add HttpClientModule to imports

  ],
  providers: [], // Add services
  bootstrap: [AppComponent]
})
export class AppModule { }
