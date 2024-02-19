// favorites.service.ts
import { Injectable } from '@angular/core';
import { Garage } from '../garage.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: Garage[] = [];

  constructor() {}

  addFavorite(garage: Garage): void {
    const duplicate = this.favorites.find(f => f.name === garage.name);
    if (!duplicate) {
      this.favorites.push(garage);
    }
  }

  getFavorites(): Garage[] {
    return this.favorites;
  }
}
