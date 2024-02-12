import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HighlightDirective,
    CapitalizePipe,
    LoginComponent,
    RegistrationComponent,
    WelcomePageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }


