import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReservationService } from '../../services/reservation.service';

export interface Reservation {
  id: number;
  title: string;
  status: string;
  description: string;
  bookingDate: string;
  serviceDate: string;
}

@Component({
  selector: 'app-user-reservation',
  templateUrl: './user-reservation.component.html',
  styleUrls: ['./user-reservation.component.css']
})
export class UserReservationComponent implements OnInit {
  Reservations: Reservation[] = [
    {
      id: 1,
      title: 'App design and development',
      status: 'Finished',
      description: 'With supporting text below as a natural lead-in to additional content...',
      bookingDate: '2024-02-18',
      serviceDate: '2024-03-18'
    },
    {
      id: 2,
      title: 'App dhadbadjd and development',
      status: 'Pending',
      description: 'With supporting text below as a natural lead-in to additional content...',
      bookingDate: '2024-02-18',
      serviceDate: '2024-03-18'
    },
    {
      id: 3,
      title: 'Appgmnglvksnklsn and development',
      status: 'Canceled',
      description: 'With supporting text below as a natural lead-in to additional content...',
      bookingDate: '2024-02-18',
      serviceDate: '2024-03-18'
    }
  ];

  filteredReservations: Reservation[] = [];
  currentFilter: string = 'All';

  // Static data for garages and services
  garages = [
    { id: 1, name: 'Garage A' },
    { id: 2, name: 'Garage B' },
    { id: 3, name: 'Garage C' }
  ];

  services = [
    { id: 1, name: 'Oil Change' },
    { id: 2, name: 'Tire Rotation' },
    { id: 3, name: 'Brake Inspection' }
  ];

  // Booking form data structure
  booking = {
    garageId: '',
    serviceId: '',
    bookingDate: '',
    serviceDate: '',
    status: ''
  };

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.applyFilter('All');
    // Optionally, fetch data from the server here
  }

  applyFilter(filter: string): void {
    this.currentFilter = filter;
    if (filter === 'All') {
      this.filteredReservations = this.Reservations;
    } else {
      this.filteredReservations = this.Reservations.filter(res => res.status === filter);
    }
  }

  getBadgeClass(status: string): string {
    return {
      'Finished': 'badge-finished',
      'Canceled': 'badge-canceled',
      'Pending': 'badge-pending'
    }[status] || 'badge-secondary';
  }

  onSubmit(): void {
    
  }
}
