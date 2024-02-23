import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { CustomDateTimePipe } from './pipes/custom-date-time.pipe';
import { Page404Component } from './pages/page404/page404.component';

// import { FooterComponent } from '../modules/user/components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HighlightDirective,
    CapitalizePipe,
    LoginComponent,
    RegistrationComponent,
    WelcomePageComponent,
    CustomDateTimePipe,
    Page404Component,
   
    // FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }


