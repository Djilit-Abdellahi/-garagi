// import { Component } from '@angular/core';
// // import { CommonModule } from '@angular/common';
// import { AdminService } from '../../services/admin.service';


// @Component({
//   selector: 'app-statistics',
//   templateUrl: './statistics.component.html',
//   styleUrls: ['./statistics.component.css'],
//   // imports: [ CanvasJSAngularChartsModule]
// })
// export class StatisticsComponent {
  
//   chartOptions = {
//     title: {
//       text: 'Monthly Sales Data'
//     },
//     theme: 'light2',
//     animationEnabled: true,
//     exportEnabled: true,
//     axisY: {
//       includeZero: true,
//       valueFormatString: '$#,##0k'
//     },
//     data: [{
//       type: 'column',
//       yValueFormatString: '$#,##0k',
//       color: '#01b8aa',
//       dataPoints: [
//         { label: 'Jan', y: 172 },
//         { label: 'Feb', y: 189 },
//         // Add other data points as needed
//       ]
//     }]
//   };

  

// }

// // statistics.component.ts

// import { Component, OnInit } from '@angular/core';
// import { AdminService } from '../../services/admin.service';
// // import { StatisticsService } from '../../services/statistics.service'; // Ensure this path matches your service file
// import { ChartOptions, ChartType } from 'chart.js';

// @Component({
//   selector: 'app-statistics',
//   templateUrl: './statistics.component.html',
//   styleUrls: ['./statistics.component.css']
// })
// export class StatisticsComponent implements OnInit {
//   // Bookings Per User
//   public bookingsPerUserLabels: string[] = []; // Use basic string array for labels
//   public bookingsPerUserData: number[] = []; // Use basic number array for data

//   // Booking Status Distribution
//   public bookingStatusLabels: string[] = ['Completed', 'Pending', 'Cancelled'];
//   public bookingStatusData: number[] = []; // Use basic number array for data

//   // Bookings Per Garage
//   public bookingsPerGarageLabels: string[] = []; // Use basic string array for labels
//   public bookingsPerGarageData: number[] = []; // Use basic number array for data

//   public pieChartOptions: ChartOptions = {
//     responsive: true,
//   };
//   public pieChartType: ChartType = 'pie';

//   constructor(private statisticsService: AdminService) {}

//   ngOnInit() {
//     this.loadBookingsPerUser();
//     this.loadBookingStatusDistribution();
//     this.loadBookingsPerGarage();
//   }

//   loadBookingsPerUser(): void {
//     this.statisticsService.getBookingsPerUser().subscribe(data => {
//       this.bookingsPerUserLabels = data.map((x: any) => x[0]); // Assuming the username is the first element
//       this.bookingsPerUserData = data.map((x: any) => x[1]); // Assuming the booking count is the second element
//     });
//   }

//   loadBookingStatusDistribution(): void {
//     this.statisticsService.getBookingStatusDistribution().subscribe(data => {
//       // Reset the array to avoid duplication on multiple calls
//       this.bookingStatusData = [];
//       // Assuming data is an array of arrays with structure [status, count]
//       for (let item of data) {
//         this.bookingStatusData.push(item[1]); // Push the count into the data array
//       }
//     });
//   }

//   loadBookingsPerGarage(): void {
//     this.statisticsService.getBookingsPerGarage().subscribe(data => {
//       this.bookingsPerGarageLabels = data.map((x: any) => x[0]); // Assuming the garage name is the first element
//       this.bookingsPerGarageData = data.map((x: any) => x[1]); // Assuming the booking count is the second element
//     });
//   }
// }



import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AdminService } from '../../services/admin.service';

interface BookingPerUser {
  username: string;
  bookingCount: number;
}

interface BookingStatus {
  status: string;
  count: number;
}

interface BookingPerGarage {
  garageName: string;
  bookingCount: number;
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  bookingsPerUserChartOptions: any;
  bookingStatusDistributionChartOptions: any;
  bookingsPerGarageChartOptions: any;

  constructor(
    private adminService: AdminService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadBookingsPerUser();
    this.loadBookingStatusDistribution();
    this.loadBookingsPerGarage();
  }

  loadBookingsPerUser(): void {
    this.adminService.getBookingsPerUser().subscribe((data: any[]) => {
      this.bookingsPerUserChartOptions = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2",
        title: { text: "Bookings Per User" },
        data: [{
          type: "column",
          dataPoints: data.map(([username, bookingCount]) => ({ label: username, y: bookingCount }))
        }]
      };
      this.changeDetector.detectChanges(); // Trigger change detection manually
    });
    
  }

  loadBookingStatusDistribution(): void {
    this.adminService.getBookingStatusDistribution().subscribe((data: any[]) => {
      this.bookingStatusDistributionChartOptions = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light1",
        title: { text: "Booking Status Distribution" },
        data: [{
          type: "pie",
          dataPoints: data.map(([status, count]) => ({ label: status, y: count }))
        }]
      };
      this.changeDetector.detectChanges(); // Trigger change detection manually
    });
  }
  
  loadBookingsPerGarage(): void {
    this.adminService.getBookingsPerGarage().subscribe((data: any[]) => {
      this.bookingsPerGarageChartOptions = {
        animationEnabled: true,
        exportEnabled: true,
        theme: "light2",
        title: { text: "Bookings Per Garage" },
        data: [{
          type: "bar",
          dataPoints: data.map(([garageName, bookingCount]) => ({ label: garageName, y: bookingCount }))
        }]
      };
      this.changeDetector.detectChanges(); // Trigger change detection manually
    });
  }
  
}



