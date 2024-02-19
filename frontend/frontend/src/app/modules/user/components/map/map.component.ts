// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-map',
//   templateUrl: './map.component.html',
//   styleUrls: ['./map.component.css']
// })
// export class MapComponent {

// }


import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {


    map: L.Map | undefined;
    garageMarkers: L.Marker[] = [];
    customIcon = L.icon({
        iconUrl: 'https://www.garage-delasabliere.com/ressources/images/f0ff54764db4.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    });
    data: any[] = [
      ''
    ];
    filteredData: any[] = []; // Données filtrées
    searchQuery: string = '';
    constructor(private http: HttpClient) { }

    ngAfterViewInit(): void {
        this.createMap();
        this.getGarages();
        this.toggleGarageMarkers();
    }

    createMap() {
        const parcThabor = {
            lat: 18.07424433164263,
            lng: -15.958777227826749,
        };

        const zoomLevel = 12;

        this.map = L.map('map', {
            center: [parcThabor.lat, parcThabor.lng],
            zoom: zoomLevel
        });

        const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            minZoom: 3,
            maxZoom: 17,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });

        mainLayer.addTo(this.map);
        this.getUserLocation();
    }


    getUserLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
              const latitude = position.coords.latitude;
              const longitude = position.coords.longitude;

              const userMarker = L.marker([latitude, longitude]).addTo(this.map!);
              userMarker.bindPopup('Votre position').openPopup();

              // Centrer la carte sur la position de l'utilisateur
              this.map?.setView([latitude, longitude], 12);
          }, error => {
              console.error('Erreur lors de la récupération de la géolocalisation de l\'utilisateur:', error);
              alert('Impossible de récupérer votre position');
          });
      } else {
          console.error('La géolocalisation n\'est pas prise en charge par votre navigateur');
          alert('La géolocalisation n\'est pas prise en charge par votre navigateur');
      }
  }

  getGarages() {
    this.http.get<any[]>("http://localhost:8080/api/garages/getAllGarages")
      .subscribe({
        next: garages => {
          this.data = garages;
          this.toggleGarageMarkers(); // Appel de la fonction après récupération des données
        },
        error: err => {
          console.error('Error fetching garages:', err);
        }
      });

  }


  toggleGarageMarkers() {
    if (this.data.length > 0) {
      this.addMarkers();
    }
  }


  getGaragesByMoughataa(moughataa: string) {
    this.http.get<any[]>("http://localhost:8080/api/garages/moughataa/" + moughataa)
      .subscribe({
        next: garages => {
          this.data = garages;
          this.toggleGarageMarkers(); // Afficher les marqueurs au chargement
        },
        error: err => {
          console.error('Error fetching garages:', err);
        }
      });
  }

  toggleMoughataaGarageMarkers(event: any) {
    if (event && event.target && event.target.value) {
      const moughataa: string = event.target.value;
      if (moughataa === "allgarages") {
        this.getGarages();
      } else {
        // Afficher les garages pour la moughataa sélectionnée
        this.getGaragesByMoughataa(moughataa);
      }
    }
  }

  addMarkers() {
    this.removeMarkers(); // Supprimer les marqueurs existants avant d'ajouter les nouveaux

    this.data.forEach(garage => {
        const marker = L.marker([garage.gpsLatitude, garage.gpsLongitude], {
            icon: this.customIcon,
        })
            .bindPopup(`
      <b>${garage.name}</b><br>
      Manager: ${garage.managerName}<br>
      Contact: ${garage.contactNumber}<br>
      Address: ${garage.address}<br>
      Moughataa: ${garage.moughataa}<br>
      <a href="#">demander un depanage</a>
    `);

        marker.addTo(this.map!);
        this.garageMarkers.push(marker); // Ajouter le marqueur au tableau
    });
  }


  removeMarkers() {
    for (const marker of this.garageMarkers) {
      this.map?.removeLayer(marker);
    }
    this.garageMarkers = []; // Vider le tableau après suppression des marqueurs
  }

  searchGarages() {
    const query = this.searchQuery.toLowerCase().trim();
    if (query === '') {
      // Si la requête est vide, afficher tous les garages
      this.filteredData = this.data;
    } else {
      // Filtrer les garages en fonction de la requête de recherche
      this.filteredData = this.data.filter(garage =>
        garage.name.toLowerCase().includes(query) ||
        garage.managerName.toLowerCase().includes(query) ||
        garage.contactNumber.toLowerCase().includes(query) ||
        garage.address.toLowerCase().includes(query) ||
        garage.moughataa.toLowerCase().includes(query)
      );
    }
    // Mettre à jour les marqueurs en fonction des données filtrées
    this.addMarkers();
  }
}
