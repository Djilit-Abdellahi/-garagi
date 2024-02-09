import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isOpen = false; // Use this for the dropdown toggle

  constructor(
    public authenticationService: AuthenticationService,
    private router: Router
  ) {}

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }


  searchText: string = '';
  isSearchOpen = false;
  searchResults: any[] = [];


  search(query: string) {
    if (!query) {
      this.isSearchOpen = false;
      return;
    }
    
    this.searchResults = [
      { title: "Analytics Report", description: "Analytics Report Description" },
      { title: "Sales Report", description: "Sales Report Description" },
      { title: "User Management", description: "User Management Description" },
      { title: "Product Management", description: "Product Management Description" },
      { title: "Order Management", description: "Order Management Description" },
      { title: "Inventory Management", description: "Inventory Management Description" },
    ];
    
    this.isSearchOpen = true;
  }

  toggleSearchDropdown() {
    this.isSearchOpen = !this.isSearchOpen;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
