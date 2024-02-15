// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthenticationService {

//   constructor() { }
// }


// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthenticationService {
//   private currentUserSubject: BehaviorSubject<any>;
//   public currentUser: Observable<any>;

//   constructor(private http: HttpClient) {
//     this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
//     this.currentUser = this.currentUserSubject.asObservable();
//   }

//   public get currentUserValue(): any {
//     return this.currentUserSubject.value;
//   }

//   login(username: string, password: string) {
//     return this.http.post<any>(`/api/authenticate`, { username, password })
//       .pipe(map(user => {
//         localStorage.setItem('currentUser', JSON.stringify(user));
//         this.currentUserSubject.next(user);
//         return user;
//       }));
//   }

//   logout() {
//     localStorage.removeItem('currentUser');
//     this.currentUserSubject.next(null);
//   }
// }


// import { Injectable } from '@angular/core';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthenticationService {
//   private currentUserSubject: BehaviorSubject<any>;
//   public currentUser: Observable<any>;

//   constructor(private http: HttpClient) {
//     this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
//     this.currentUser = this.currentUserSubject.asObservable();
//   }

//   public get currentUserValue(): any {
//     return this.currentUserSubject.value;
//   }

//   login(username: string, password: string) {
//     // Replace with actual backend call
//     return this.http.post<any>('', { username, password })
//       .pipe(map(user => {
//         // Fake role check and token creation
//         const role = username === 'admin' ? 'admin' : 'user';
//         const fakeToken = `fake-token-for-${role}`;
//         const fakeResponse = { username, role, token: fakeToken };
//         localStorage.setItem('currentUser', JSON.stringify(fakeResponse));
//         this.currentUserSubject.next(fakeResponse);
//         return fakeResponse;
//       }));
//   }

//   logout() {
//     localStorage.removeItem('currentUser');
//     this.currentUserSubject.next(null);
//   }
// }


import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    // Here we are faking the HTTP response instead of making an actual HTTP call
    return of({
      username,
      role: username === 'admin' ? 'admin' : 'user',
      token: `fake-token-for-${username === 'admin' ? 'admin' : 'user'}`
    }).pipe(map(user => {
      // Store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      console.log('User', user)
      return user;
    }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
