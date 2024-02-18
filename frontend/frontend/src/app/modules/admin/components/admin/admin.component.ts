// import { Component } from '@angular/core';
// import { AdminService } from '../../services/admin.service';
// // import { Sort } from '@angular/material/sort';
// import { OnInit } from '@angular/core';
// // import { ChartData } from 'chart.js';
// import { Chart } from 'chart.js';

// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.css']
// })


// export class AdminComponent  implements OnInit {
//     // pieChartData!: ChartData<ChartType, number[], string>;
//     // pieChartLabels: string[] = [];
//     chart: any;

//   constructor(private adminService: AdminService) {}
//   ngOnInit(): void {
//     this.adminService.getBookingsPerUser().subscribe((data) => {
//       const labels = data.map(entry => entry[0]); // Extracting labels
//       const values = data.map(entry => entry[1]); // Extracting values
      
//       this.chart = new Chart('canvas', {
//         type: 'bar',
//         data: {
//           labels: labels,
//           datasets: [{
//             label: 'Data',
//             data: values,
//             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 1
//           }]
//         },
//         options: {
//           scales: {
//             yAxes: [{
//               ticks: {
//                 beginAtZero: true
//               }
//             }]
//           }
//         }
//       });
//     });
//   }
  
// }



// bar-chart.component.ts
// import { Component, OnInit } from '@angular/core';
// import { Chart } from 'chart.js';
// import { DataService } from '../data.service';

// @Component({
//   selector: 'app-bar-chart',
//   templateUrl: './bar-chart.component.html',
//   styleUrls: ['./bar-chart.component.css']
// })
// export class BarChartComponent implements OnInit {

//   chart: any;

//   constructor(private dataService: DataService) { }

//   ngOnInit(): void {
//     this.dataService.getChartData().subscribe(data => {
//       this.chart = new Chart('canvas', {
//         type: 'bar',
//         data: {
//           labels: data.labels,
//           datasets: [{
//             label: 'Data',
//             data: data.values,
//             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             borderColor: 'rgba(75, 192, 192, 1)',
//             borderWidth: 1
//           }]
//         },
//         options: {
//           scales: {
//             yAxes: [{
//               ticks: {
//                 beginAtZero: true
//               }
//             }]
//           }
//         }
//       });
//     });
//   }
// }




// export class HomeComponent implements OnInit {
  //
//   constructor(private http : HttpClient)   { }
//   ngOnInit(): void {
//   this.http.get<any>('http://localhost:8080/api/test/home').subscribe(data => {
//     this.pieChartLabels = Object.keys(data); 
//     this.pieChartData = {
//       labels: this.pieChartLabels,
//       datasets: [
//         {
//           data: Object.values(data),
//           backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56' , 'grey'],
//           hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56' , 'grey'],
//         },
//       ],
//     };
//   });

//   }

  // }



  import { Component, OnInit } from '@angular/core';
  import { Chart } from 'chart.js';
  import { AdminService } from '../../services/admin.service';
  
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
  
    constructor(private adminService: AdminService) {}
  
    ngOnInit(): void {
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
  }
  
