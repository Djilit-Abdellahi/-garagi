import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GarageService {
  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/garages/getAllGarages'); // Replace URL with your backend endpoint
  }
}
