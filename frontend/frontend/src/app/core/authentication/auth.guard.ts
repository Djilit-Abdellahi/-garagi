// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };


// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { AuthenticationService } from './authentication.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private router: Router, private authService: AuthenticationService) {}

//   canActivate() {
//     if (this.authService.currentUserValue) {
//       return true;
//     }
//     this.router.navigate(['/login']);
//     return false;
//   }
// }


// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { AuthenticationService } from './authentication.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private authenticationService: AuthenticationService, private router: Router) {}

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     const currentUser = this.authenticationService.currentUserValue;
//     if (currentUser) {
//       // logged in so return true
//       return true;
//     }

//     // not logged in so redirect to login page with the return url
//     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
//     return false;
//   }
// }

// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { AuthenticationService } from './authentication.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(
//     private authenticationService: AuthenticationService,
//     private router: Router
//   ) {}

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     const currentUser = this.authenticationService.currentUserValue;
//     if (currentUser && currentUser.token) {
//       // If user is logged in and has a token, check for role
//       const roles = route.data.roles as Array<string>;
//       if (roles && !roles.includes(currentUser.role)) {
//         // If role is not allowed, redirect to the default public page
//         this.router.navigate(['/']);
//         return false;
//       }
//       return true;
//     }

//     // Not logged in so redirect to login page with the return url
//     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
//     return false;
//   }
// }


// src/app/core/authentication/auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { RoleRoute } from '../models/route-types'; // Adjust this import path as needed

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
      const routeData = route.data as RoleRoute['data'];
       // Cast the data to the custom type
       console.log("this the routeData",routeData);
      if (routeData && routeData.roles && !routeData.roles.includes(currentUser.role)) {
        this.router.navigate(['/']);
        return false;
      }
      return true;
    }

    // Not logged in, redirect to login with the return URL
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
}



