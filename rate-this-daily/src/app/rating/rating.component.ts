import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [MatButtonModule, MatSliderModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent implements OnInit {
  canEnterRating: boolean = false;
  rating: number = 0;

  ngOnInit(): void {
    // check if existing rating (at this date)
    // var temp = localStorage.getItem("test");
    // console.log("Found: ", temp);
  }

  updateRating(event: Event) {
    this.rating = Number((event.target as HTMLInputElement).value);
  }

  submitRating() {
    console.log("Submitted rating: " + this.rating);
    // localStorage.setItem("test", String(this.rating));
  }
}
