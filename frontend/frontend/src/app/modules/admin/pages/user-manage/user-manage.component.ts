// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-user-manage',
//   templateUrl: './user-manage.component.html',
//   styleUrls: ['./user-manage.component.css']
// })
// export class UserManageComponent {
//    users: {
//     userid: string,
//     email: string,
//     password_hash: string,
//     username: string,
//     roleid: string
// }[] = [
//     {
//         userid: "1",
//         email: "user1@example.com",
//         password_hash: "password_hash_1",
//         username: "user1",
//         roleid: "1"
//     },
//     {
//         userid: "2",
//         email: "user2@example.com",
//         password_hash: "password_hash_2",
//         username: "user2",
//         roleid: "2"
//     },
//     {
//         userid: "3",
//         email: "user3@example.com",
//         password_hash: "password_hash_3",
//         username: "user3",
//         roleid: "3"
//     },
//     {
//         userid: "4",
//         email: "user4@example.com",
//         password_hash: "password_hash_4",
//         username: "user4",
//         roleid: "1"
//     },
//     {
//         userid: "5",
//         email: "user5@example.com",
//         password_hash: "password_hash_5",
//         username: "user5",
//         roleid: "2"
//     },
//     {
//         userid: "6",
//         email: "user6@example.com",
//         password_hash: "password_hash_6",
//         username: "user6",
//         roleid: "3"
//     },
//     {
//         userid: "7",
//         email: "user7@example.com",
//         password_hash: "password_hash_7",
//         username: "user7",
//         roleid: "1"
//     },
//     {
//         userid: "8",
//         email: "user8@example.com",
//         password_hash: "password_hash_8",
//         username: "user8",
//         roleid: "2"
//     },
//     {
//         userid: "9",
//         email: "user9@example.com",
//         password_hash: "password_hash_9",
//         username: "user9",
//         roleid: "3"
//     },
//     {
//         userid: "10",
//         email: "user10@example.com",
//         password_hash: "password_hash_10",
//         username: "user10",
//         roleid: "1"
//     },
//     {
//         userid: "11",
//         email: "user11@example.com",
//         password_hash: "password_hash_11",
//         username: "user11",
//         roleid: "2"
//     },
//     {
//         userid: "12",
//         email: "user12@example.com",
//         password_hash: "password_hash_12",
//         username: "user12",
//         roleid: "3"
//     },
//     {
//         userid: "13",
//         email: "user13@example.com",
//         password_hash: "password_hash_13",
//         username: "user13",
//         roleid: "1"
//     },
//     {
//         userid: "14",
//         email: "user14@example.com",
//         password_hash: "password_hash_14",
//         username: "user14",
//         roleid: "2"
//     },
//     {
//         userid: "15",
//         email: "user15@example.com",
//         password_hash: "password_hash_15",
//         username: "user15",
//         roleid: "3"
//     },
//     {
//         userid: "16",
//         email: "user16@example.com",
//         password_hash: "password_hash_16",
//         username: "user16",
//         roleid: "1"
//     },
//     {
//         userid: "17",
//         email: "user17@example.com",
//         password_hash: "password_hash_17",
//         username: "user17",
//         roleid: "2"
//     }
// ];



// deleteItem(id: string) {
//   // Implement logic to delete an item
//   console.log("Deleting item with id:", id);
// }

// openUpdateModal(item: any) {
//   // Implement logic to open an update modal
//   console.log("Opening update modal for item:", item);
// }


// }

import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.css']
})
export class UserManageComponent implements OnInit {
  users: {
    userid: string,
    email: string,
    password_hash: string,
    username: string,
    roleid: string
}[] = [
    {
        userid: "1",
        email: "user1@example.com",
        password_hash: "password_hash_1",
        username: "user1",
        roleid: "1"
    },
    {
        userid: "2",
        email: "user2@example.com",
        password_hash: "password_hash_2",
        username: "user2",
        roleid: "2"
    },
    {
        userid: "3",
        email: "user3@example.com",
        password_hash: "password_hash_3",
        username: "user3",
        roleid: "3"
    },
    {
        userid: "4",
        email: "user4@example.com",
        password_hash: "password_hash_4",
        username: "user4",
        roleid: "1"
    },
    {
        userid: "5",
        email: "user5@example.com",
        password_hash: "password_hash_5",
        username: "user5",
        roleid: "2"
    },
    {
        userid: "6",
        email: "user6@example.com",
        password_hash: "password_hash_6",
        username: "user6",
        roleid: "3"
    },
    {
        userid: "7",
        email: "user7@example.com",
        password_hash: "password_hash_7",
        username: "user7",
        roleid: "1"
    },
    {
        userid: "8",
        email: "user8@example.com",
        password_hash: "password_hash_8",
        username: "user8",
        roleid: "2"
    },
    {
        userid: "9",
        email: "user9@example.com",
        password_hash: "password_hash_9",
        username: "user9",
        roleid: "3"
    },
    {
        userid: "10",
        email: "user10@example.com",
        password_hash: "password_hash_10",
        username: "user10",
        roleid: "1"
    },
    {
        userid: "11",
        email: "user11@example.com",
        password_hash: "password_hash_11",
        username: "user11",
        roleid: "2"
    },
    {
        userid: "12",
        email: "user12@example.com",
        password_hash: "password_hash_12",
        username: "user12",
        roleid: "3"
    },
    {
        userid: "13",
        email: "user13@example.com",
        password_hash: "password_hash_13",
        username: "user13",
        roleid: "1"
    },
    {
        userid: "14",
        email: "user14@example.com",
        password_hash: "password_hash_14",
        username: "user14",
        roleid: "2"
    },
    {
        userid: "15",
        email: "user15@example.com",
        password_hash: "password_hash_15",
        username: "user15",
        roleid: "3"
    },
    {
        userid: "16",
        email: "user16@example.com",
        password_hash: "password_hash_16",
        username: "user16",
        roleid: "1"
    },
    {
        userid: "17",
        email: "user17@example.com",
        password_hash: "password_hash_17",
        username: "user17",
        roleid: "2"
    }
];
  tableData: any[] = [];
  displayedUsers: any[] = [];
  currPage: number = 1;
  perPage: number = 10;
  totalPages: number = 0;
  filterText: string = '';

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    // Fetch your user data from your service
    // this.adminService.getAllUsers().subscribe((data: any[]) => {
    //   this.users = this.users;
    //   this.initPagination();
    // });
    this.tableData = this.users;
    // this.initPagination();
    this.totalPages = Math.ceil(this.users.length / this.perPage);
    this.updateDisplayedUsers();
  }

  // initPagination() {
    
  // }

  changePage(page: number) {
    this.currPage = page;
    this.updateDisplayedUsers();
  }

  updateDisplayedUsers(filteredData: any[] = this.users) {
    // const filteredUsers = this.filterUsers(this.users, this.filterText);
    const start = (this.currPage - 1) * this.perPage;
    const end = start + this.perPage;
    this.displayedUsers = filteredData.slice(start, end);
    // Adjust total pages based on filtered results
    this.totalPages = Math.ceil(filteredData.length / this.perPage);
  }

 

  applyFilter() {
    this.currPage = 1; 
    const filterFunction = (item : any) => {
      const filterValue = this.filterText.toLowerCase();
      return Object.values(item).some(value => {
        if (value !== null && value !== undefined) {
          const valueString = typeof value === 'object' ? JSON.stringify(value) : value.toString();
          return valueString.toLowerCase().includes(filterValue);
        }
        return false;
      });
    }

    const filteredData = this.filterText ? this.users.filter(filterFunction) : this.users;
    this.updateDisplayedUsers(filteredData);
  }

  deleteItem(id: string) {
   
    console.log("Deleting item with id:", id);
  }

  openUpdateModal(item: any) {
    // Implement logic to open an update modal
    console.log("Opening update modal for item:", item);
  }
}
