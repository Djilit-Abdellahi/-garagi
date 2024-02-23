import { Component } from '@angular/core';

@Component({
  selector: 'app-garage-home',
  templateUrl: './garage-home.component.html',
  styleUrls: ['./garage-home.component.css']
})
export class GarageHomeComponent {
  reviews = [
    { comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", rating: 8 },
    { comment: "Integer posuere erat a ante venenatis dapibus.", rating: 5 },
    { comment: "Vestibulum in vulputate at, tempus viverra turpis.", rating: 2 },
    // Add more reviews as needed
  ];
  getColorClass(rating: number): string {
    if (rating >= 8) return 'bg-success';
    if (rating >= 5) return 'bg-info';
    if (rating >= 3) return 'bg-warning';
    return 'bg-danger';
  }

}