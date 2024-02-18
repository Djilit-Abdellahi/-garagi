import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Sort } from '@angular/material/sort';
import { OnInit } from '@angular/core';



@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  tableData: any[] = [];
  displayedData: any[] = [];
  currPage: number = 1;
  perPage: number = 10;
  totalPages: number = 0;
  filterText: string = '';

  constructor(private dataService: AdminService) {}

  ngOnInit() {
    this.dataService.getAllBookings().subscribe(data => {
      this.tableData = data;
      console.log("helooooooooooooooooo",this.tableData);
      this.totalPages = Math.ceil(this.tableData.length / this.perPage);
      // this.changePage(1); // Initialize displayed data
      this.updateDisplayedData();
    });
  }

  // changePage(page: number) {
  //   const startIndex = (page - 1) * this.perPage;
  //   const endIndex = startIndex + this.perPage;
  //   this.displayedData = this.tableData.slice(startIndex, endIndex);
  //   this.currPage = page;
  // }

  // // Optional: Implement methods for next/previous page
  // nextPage() {
  //   if (this.currPage < this.totalPages) {
  //     this.changePage(this.currPage + 1);
  //   }
  // }

  // previousPage() {
  //   if (this.currPage > 1) {
  //     this.changePage(this.currPage - 1);
  //   }
  // }

  // // Optional: Implement methods for first/last page
  // firstPage() {
  //   this.changePage(1);
  // }

  // lastPage() {
  //   this.changePage(this.totalPages);
  // }

  // // Optional: Implement methods for specific page
  // specificPage(page: number) {
  //   if (page >= 1 && page <= this.totalPages) {
  //     this.changePage(page);
  //   }
  // }

  // Optional: Implement methods for sorting
  // sortData(sort: Sort) {
  //   const data = this.tableData.slice();
  //   if (!sort.active || sort.direction === '') {
  //     this.displayedData = data;
  //     return;
  //   }

  //   this.displayedData = data.sort((a, b) => {
  //     const isAsc = sort.direction === 'asc';
  //     switch (sort.active) {
  //       case 'name': return compare(a.name, b.name, isAsc);
  //       case 'id': return compare(+a.id, +b.id, isAsc);
  //       default: return 0;
  //     }
  //   });
  // }

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
}


