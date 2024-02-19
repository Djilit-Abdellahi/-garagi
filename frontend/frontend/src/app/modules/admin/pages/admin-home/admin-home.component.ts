// import { Component } from '@angular/core';
// import { AdminService } from '../../services/admin.service';

// @Component({
//   selector: 'app-admin-home',
//   templateUrl: './admin-home.component.html',
//   styleUrls: ['./admin-home.component.css']
// })
// export class AdminHomeComponent {

//   tableData: any[] = [];

//   constructor(private dataService: AdminService) {}

//   ngOnInit() {
//     this.dataService.getTableData().subscribe(data => {
//       this.tableData = data;
//     });
//   }

// }



// import { Component, OnInit } from '@angular/core';
// import { AdminService } from '../../services/admin.service';

// @Component({
//   selector: 'app-admin-home',
//   templateUrl: './admin-home.component.html',
//   styleUrls: ['./admin-home.component.css']
// })
// export class AdminHomeComponent implements OnInit {

//   tableData: any[] = [];
//   displayedData: any[] = [];
//   currPage: number = 1;
//   perPage: number = 10;
//   totalPages: number = 0;

//   constructor(private dataService: AdminService) {}

//   ngOnInit() {
//     this.dataService.getTableData().subscribe(data => {
//       this.tableData = data;
//       console.log("helooooooooooooooooo",this.tableData);
//       this.totalPages = Math.ceil(this.tableData.length / this.perPage);
//       this.changePage(1); // Initialize displayed data
//     });
//   }

//   changePage(page: number) {
//     const startIndex = (page - 1) * this.perPage;
//     const endIndex = startIndex + this.perPage;
//     this.displayedData = this.tableData.slice(startIndex, endIndex);
//     this.currPage = page;
//   }

//   // Optional: Implement methods for next/previous page
//   nextPage() {
//     if (this.currPage < this.totalPages) {
//       this.changePage(this.currPage + 1);
//     }
//   }

//   previousPage() {
//     if (this.currPage > 1) {
//       this.changePage(this.currPage - 1);
//     }
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { AdminService } from '../../services/admin.service';

// @Component({
//   selector: 'app-admin-home',
//   templateUrl: './admin-home.component.html',
//   styleUrls: ['./admin-home.component.css']
// })
// export class AdminHomeComponent implements OnInit {
//   tableData: any[] = [];
//   displayedData: any[] = [];
//   currPage: number = 1;
//   perPage: number = 10;
//   totalPages: number=0;
//   idItem: any;
//   filterText: string = '';

//   constructor(private adminService: AdminService) {}

//   ngOnInit() {
//     this.adminService.getTableData().subscribe((data: any[]) => {
//       this.tableData = data;
//       this.totalPages = Math.ceil(data.length / this.perPage);
//       this.updateDisplayedData();
//     });
//   }

//   changePage(page: number) {
//     this.currPage = page;
//     this.updateDisplayedData();
//   }

//   updateDisplayedData() {
//     const start = (this.currPage - 1) * this.perPage;
//     const end = start + this.perPage;
//     this.displayedData = this.tableData.slice(start, end);
//   }


//   deleteItem(id: number) {
    
//     // this.adminService.deleteItemById(id).subscribe(() => {
//       console.log("id",id);
//       this.tableData = this.tableData.filter(item => item.id !== id);
//       this.updateDisplayedData();
     
//     // }, error => {
//       // Handle errors here, such as displaying an error message
//     // });
//   }
  
//   openUpdateModal(item: any) {
    

//   }
  
// }


import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  tableData: any[] = [];
  displayedData: any[] = [];
  currPage: number = 1;
  perPage: number = 10;
  totalPages: number = 0;
  filterText: string = ''; // For storing the filter text
  garageForm: FormGroup;

  constructor(private fb: FormBuilder,private adminService: AdminService) {

    this.garageForm = this.fb.group({
      name: [''],
      managerName: [''],
      contactNumber: [''],
      address: [''],
      gpsLatitude: [0], // Default to 0 or another sensible default
      gpsLongitude: [0], // Default to 0 or another sensible default
      moughataa: ['']
    });
  }

  ngOnInit() {
    this.adminService.getTableData().subscribe((data: any[]) => {
      this.tableData = data;
      this.totalPages = Math.ceil(data.length / this.perPage);
      this.updateDisplayedData();
    });

    this.adminService.getAllUsers().subscribe((data: any[]) => {
      console.log("users",data);
    });

    
  }

  changePage(page: number) {
    this.currPage = page;
    this.applyFilter();
  }

  updateDisplayedData(filteredData: any[] = this.tableData) {
    const start = (this.currPage - 1) * this.perPage;
    const end = start + this.perPage;
    this.displayedData = filteredData.slice(start, end);
    this.totalPages = Math.ceil(filteredData.length / this.perPage);
  }

  deleteItem(id: number) {
    // Uncomment and implement deletion logic with your adminService
    // this.adminService.deleteItemById(id).subscribe(() => {
      console.log("Deleting item with id:", id);
      this.tableData = this.tableData.filter(item => item.id !== id);
      this.applyFilter(); // Re-apply filter after deletion
    // }, error => {
      // Handle errors here, such as displaying an error message
    // });
  }

  openUpdateModal(item: any) {
    // Implement logic to open an update modal
    console.log("Opening update modal for item:", item);
  }

  applyFilter() {
    this.currPage = 1; // Reset to first page when applying a filter

    const filterFunction = (item: any) => {
      const filterValue = this.filterText.toLowerCase();
      return Object.values(item).some(value => {
        if (value !== null && value !== undefined) {
          const valueString = typeof value === 'object' ? JSON.stringify(value) : value.toString();
          return valueString.toLowerCase().includes(filterValue);
        }
        return false;
      });
    };

    const filteredData = this.filterText ? this.tableData.filter(filterFunction) : this.tableData;
    this.updateDisplayedData(filteredData);
  }



  onSubmit(): void {
    // Use AdminService to submit the form data
    // this.adminService.saveGarage(this.garageForm!.value).subscribe(response => {
    //   console.log('Garage saved successfully:', response);
    //   // Handle successful save here (e.g., showing a success message)
    // }, error => {
    //   console.error('Error saving garage:', error);
    //   // Handle error here (e.g., showing an error message)
    // });

    console.log('Form data:', this.garageForm.value);


    this.adminService.saveGarage(this.garageForm.value).subscribe({
      next: (response) => {console.log('Garage saved successfully:', response)
      this.showSuccessModal();
    },
      error: (error) => console.error('Error saving garage:', error)
    });

  }


  showSuccessModal(): void {
    const successModalElement = document.getElementById('success-alert-modal');
    if (successModalElement) {
      const successModal = new bootstrap.Modal(successModalElement);
      successModal.show();
    }
  }
}
