
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AdminService } from '../../services/admin.service';
import * as L from 'leaflet';
import { HttpClient } from "@angular/common/http";

// Assuming each entry is an array with a string and a number
type Entry = [string, number];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  chart: any;
  pie: any;
  bar: any;

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

  constructor(private adminService: AdminService, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.createMap();
    this.getGarages();
    this.toggleGarageMarkers();
    this.adminService.getBookingsPerUser().subscribe((data: Entry[]) => {
      const labels = data.map(entry => entry[0]); // Extracting labels
      const values = data.map(entry => entry[1]); // Extracting values

      this.chart = new Chart('canvas', {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Data',
            data: values,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },

      });
    });

    this.adminService.getBookingStatusDistribution().subscribe((data: Entry[]) => {
      const labels = data.map(entry => entry[0]); // Extracting labels
      const values = data.map(entry => entry[1]); // Extracting values

      this.pie = new Chart('canvas2', {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            label: 'Data',
            data: values,
            backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(75, 75, 192, 0.2)', 'rgba(192, 75, 192, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)', 'rgba(75, 75, 192, 1)', 'rgba(192, 75, 192, 1)'],
            borderWidth: 1
          }]
        },

      });
    });


    this.adminService.getBookingsPerGarage().subscribe((data: Entry[]) => {
      const labels = data.map(entry => entry[0]); // Extracting labels
      const values = data.map(entry => entry[1]); // Extracting values

      this.bar = new Chart('canvas3', {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Data',
            data: values,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },

      });
    })

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

