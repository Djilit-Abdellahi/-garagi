// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

// }

import { Component } from '@angular/core';
// import { AuthenticationService } from '../../core/authentication/authentication.service';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string='';
  password: string='';

  constructor(private authenticationService: AuthenticationService) {}

  login() {
    this.authenticationService.login(this.username, this.password).subscribe(data => {
      console.log('Login successful');
      // Redirect or handle success
    }, error => {
      console.error('Login failed');
      // Handle error
    });
  }
}
