// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent {

// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { AuthenticationService } from '../../core/authentication/authentication.service';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      data => {
        // Assuming 'role' is part of the response object
        // Redirect the user based on their role
        console.log('Login data', data);
        if (data.role === 'admin') {
          this.router.navigate(['/admin']); // Navigate to the admin module
        } else if (data.role === 'user') {
          this.router.navigate(['/user']); // Navigate to the user module
        } else {
          this.router.navigate(['/']); // Navigate to the default route
        }
      },
      error => {
        // In case of error, display an error message
        this.errorMessage = 'Invalid username or password';
        console.error('Login error', error);
      }
    );
  }
 
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); // Redirect to the login page after logout
  }

}
