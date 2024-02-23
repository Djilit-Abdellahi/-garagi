import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// user.model.ts
export interface User {
  userId: number;
  username: string;
  email: string;
  passwordHash: string;
  role: string; // Assuming role is a string, adjust as needed
}

// garage.model.ts
export interface Garage {
  garageId: number;
  name: string;
  managerName: string;
  contactNumber: string;
  address: string;
  gpsLatitude: number;
  gpsLongitude: number;
  moughataa: string;
}

// garage-service.model.ts
export interface GarageService {
  serviceId: number;
  garage: Garage;
  serviceType: string;
}



interface Booking {
  bookingId: number;
  user: User;
  garage: Garage;
  garageService: GarageService;
  bookingDate: Date;
  serviceDate: Date;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

 

  // constructor(private http: HttpClient) { }

 
  private apiUrll = 'http://localhost:8080/api/bookings'; // Base URL for your booking API

  private apiUrl = 'http://localhost:8080/api/bookings'; // Adjust to your API's base URL

  constructor(private http: HttpClient) {}

  // Fetch all bookings
  // getAllBookings(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.apiUrl}/getAllBookings`);
  // }

  // Fetch a single booking by ID
  getBookingById(bookingId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getBooking/${bookingId}`);
  }

  // Create a new booking
  createBooking(booking: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/save`, booking);
  }

  // Delete a booking by ID
  deleteBooking(bookingId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${bookingId}`);
  }


  getAllBookings(): Observable<any> {
    return this.http.get(`${this.apiUrll}`);
  }
}
