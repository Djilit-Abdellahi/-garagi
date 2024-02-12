import { Component,HostBinding  } from '@angular/core';
import { GarageService } from './modules/user/services/garage.service'; // Import the service
import { OnInit } from '@angular/core';
// import { AdminComponent } from './modules/admin/components/admin/admin.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
  title = 'frontend';
  alldata: any; 

  // @HostBinding('class') class = 'loading';
  // @HostBinding('attr.data-layout') layout = 'topnav';
  // @HostBinding('attr.data-layout-config') config = '{"layoutBoxed":false,"darkMode":false}';
  // class="loading" data-layout="topnav" data-layout-config='{"layoutBoxed":false,"darkMode":false,"showRightSidebarOnStart": true}'



  // constructor(private dataService: GarageService) { 
  //   this.dataService.fetchData().subscribe(data => {
  //     console.log(data); // Handle the fetched data here
  //     this.data = data;
  //   });
  // }

  constructor(private dataService: GarageService) { }

  ngOnInit() {
    this.dataService.fetchData().subscribe(data => {
      console.log(data); // Handle the fetched data here
      this.alldata = data; // Assign the fetched data to the data property
    });
  }
}
