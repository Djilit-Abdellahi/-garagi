import { Component, OnInit } from '@angular/core';

export interface reservation {
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
  Reservations: reservation[] = [
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
    // Add more project objects here
  ];

  constructor() { }

  
  filteredReservations: reservation[] = [];
  currentFilter: string = 'All';

  ngOnInit(): void {
    this.applyFilter('All');
  }

  applyFilter(filter: string): void {
    this.currentFilter = filter;
    if (filter === 'All') {
      this.filteredReservations = this.Reservations;
    } else if (filter === 'Current') {
      // Assuming 'Current' means 'Pending'
      this.filteredReservations = this.Reservations.filter(res => res.status === 'Pending');
    } else if (filter === 'Past') {
      // Assuming 'Past' means 'Finished' or 'Canceled'
      this.filteredReservations = this.Reservations.filter(res => res.status === 'Finished' || res.status === 'Canceled');
    } else {
      this.filteredReservations = this.Reservations.filter(res => res.status.toLowerCase() === filter.toLowerCase());
    }
  }
  

  getBadgeClass(status: string): string {
    return {
      'Finished': 'badge-finished',
      'Canceled': 'badge-canceled',
      'Pending': 'badge-pending'
    }[status] || '';
  }
}
