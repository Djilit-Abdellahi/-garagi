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
import { AuthenticationService } from './core/authentication/authentication.service'; // Update path as necessary
import { UserComponent } from './modules/user/components/user/user.component';
import { AdminSidebarComponent } from './modules/admin/components/admin-sidebar/admin-sidebar.component';
import { AdminComponent } from './modules/admin/components/admin/admin.component';
import { AdminHeaderComponent } from './modules/admin/components/admin-header/admin-header.component';
// Import other components and services as necessary

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'test',component: UserComponent },
  { path: 'admin', component: AdminSidebarComponent },
  { path: 'adminn', component: AdminComponent },
  { path: 'adminnn', component: AdminHeaderComponent },
  // Add more routes here
  // { path: '', redirectTo: '/login', pathMatch: 'full' } // Redirect to login by default
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    // Declare other components
  ],
  imports: [
    BrowserModule,
    FormsModule, // For using [(ngModel)]
    RouterModule.forRoot(appRoutes), // Configure routes
    // Import other modules
    HttpClientModule, // Add HttpClientModule to imports
  ],
  providers: [AuthenticationService], // Add services
  bootstrap: [AppComponent]
})
export class AppModule { }
