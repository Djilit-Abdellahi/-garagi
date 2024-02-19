import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  getTableData(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/garages/getAllGarages');
  }

  deleteItemById(id: number): Observable<any> {
    return this.http.delete(`https://your-api-endpoint/items/${id}`);
    // Replace the URL with your actual endpoint
  }

  updateItem(item: any): Observable<any> {
    return this.http.put(`https://your-api-endpoint/items/${item.id}`, item);
    // Replace the URL with your actual endpoint
  }

  getAllUsers(): Observable<any[]> {

    return this.http.get<any[]>('http://localhost:8080/api/users/getAllUsers');
  }

  getUsers(): any[] {
    return [
      
        {
            userid: "1",
            email: "user1@example.com",
            password_hash: "password_hash_1",
            username: "user1",
            roleid: "1"
        },
        {
            userid: "2",
            email: "user2@example.com",
            password_hash: "password_hash_2",
            username: "user2",
            roleid: "2"
        },
        {
            userid: "3",
            email: "user3@example.com",
            password_hash: "password_hash_3",
            username: "user3",
            roleid: "3"
        },
        {
            userid: "4",
            email: "user4@example.com",
            password_hash: "password_hash_4",
            username: "user4",
            roleid: "1"
        },
        {
            userid: "5",
            email: "user5@example.com",
            password_hash: "password_hash_5",
            username: "user5",
            roleid: "2"
        },
        {
            userid: "6",
            email: "user6@example.com",
            password_hash: "password_hash_6",
            username: "user6",
            roleid: "3"
        },
        {
            userid: "7",
            email: "user7@example.com",
            password_hash: "password_hash_7",
            username: "user7",
            roleid: "1"
        },
        {
            userid: "8",
            email: "user8@example.com",
            password_hash: "password_hash_8",
            username: "user8",
            roleid: "2"
        },
        {
            userid: "9",
            email: "user9@example.com",
            password_hash: "password_hash_9",
            username: "user9",
            roleid: "3"
        },
        {
            userid: "10",
            email: "user10@example.com",
            password_hash: "password_hash_10",
            username: "user10",
            roleid: "1"
        },
        {
            userid: "11",
            email: "user11@example.com",
            password_hash: "password_hash_11",
            username: "user11",
            roleid: "2"
        },
        {
            userid: "12",
            email: "user12@example.com",
            password_hash: "password_hash_12",
            username: "user12",
            roleid: "3"
        },
        {
            userid: "13",
            email: "user13@example.com",
            password_hash: "password_hash_13",
            username: "user13",
            roleid: "1"
        },
        {
            userid: "14",
            email: "user14@example.com",
            password_hash: "password_hash_14",
            username: "user14",
            roleid: "2"
        },
        {
            userid: "15",
            email: "user15@example.com",
            password_hash: "password_hash_15",
            username: "user15",
            roleid: "3"
        },
        {
            userid: "16",
            email: "user16@example.com",
            password_hash: "password_hash_16",
            username: "user16",
            roleid: "1"
        },
        {
            userid: "17",
            email: "user17@example.com",
            password_hash: "password_hash_17",
            username: "user17",
            roleid: "2"
        }
      ];
  }

  getAllBookings(): Observable<any[]> {
    //                           http://localhost:8080/api/bookings/getAllBookings
    return this.http.get<any[]>('http://localhost:8080/api/bookings/getAllBookings');
  }


  private apiUrl = 'http://localhost:8080/api/statistics'; // Replace with your actual backend URL

  // constructor(private http: HttpClient) { }

  getBookingsPerUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/bookings-per-user`);
  }

  getBookingStatusDistribution(): Observable<any> {
    return this.http.get(`${this.apiUrl}/booking-status-distribution`);
  }

  getBookingsPerGarage(): Observable<any> {
    return this.http.get(`${this.apiUrl}/bookings-per-garage`);
  }

  saveGarage(garageData: any) {
    return this.http.post('http://localhost:8080/api/garages/save', garageData);
  }
  
}
