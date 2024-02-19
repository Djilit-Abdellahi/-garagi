import { Component,OnInit } from '@angular/core';
import { IntegerType } from 'mongodb';
import { FavoritesService } from '../../services/favorites.service';

interface Review {
  Garage: string;
  comment: string;
  rating: number;
}
interface Garage {
  title: string;
  ContactNumber: number;
  Address: string;
  Moughataa: string;
  ManagerName: string;
}

@Component({
  selector: 'app-user-favoris',
  templateUrl: './user-favoris.component.html',
  styleUrls: ['./user-favoris.component.css']
})
export class UserFavorisComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  Garages: Garage[] = [
    {
      title: 'Coffee detail page - Main Page',
      ContactNumber: 23444314,
      Address: 'In-progress',
      ManagerName: 'Logan R. Cohn',
      Moughataa: '3h 20min'
    },
    // ... more tasks
  ];

  Reviews: Review[] = [
    { Garage: "garage name 1", comment: 'Card comment 1', rating: 9 },
    { Garage: "garage name 2", comment: 'Card comment 2', rating: 6 },
    { Garage: "garage name 3", comment: 'Card comment 3', rating: 4 },
    { Garage: "garage name 4", comment: 'Card comment 3', rating: 10 },
    { Garage: "garage name 5", comment: 'Card comment 3', rating: 3 },
    { Garage: "garage name 6", comment: 'Card comment 3', rating: 6 },
    // ... more cards
  ];
  constructor() { }

  getRatingClass(rating: number): string {
    if (rating >= 8) {
      return 'ribbon-success';
    } else if (rating >= 5) {
      return 'ribbon-warning';
    } else {
      return 'ribbon-danger';
    }
  }
  // constructor(private favoritesService: FavoritesService) {}

  // addFavorite(garage: Garage): void {
  //   this.favoritesService.addFavorite(garage);
  // }

  
}
