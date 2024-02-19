import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';

interface Garage {
  name: string;
  managerName: string;
  contactNumber: string;
  address: string;
  imageUrl: string; // Assuming there is an image URL for the avatar
}

@Component({
  selector: 'app-user-garages',
  templateUrl: './user-garages.component.html',
  styleUrls: ['./user-garages.component.css']
})
export class UserGaragesComponent implements OnInit {
  garages: Garage[] = [
    // Populate this array with your garages data
    {
      name: 'Sean C. Nguyen',
      managerName: 'CA269 714 6825',
      contactNumber: 'February 5, 1994',
      address: 'Las Palmas 5, 1994',
      imageUrl: 'assets/images/users/avatar-9.jpg'
    },
    // ... more garages
  ];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    // Initialization code if needed
  }

 
}