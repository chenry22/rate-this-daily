import { Component, OnInit } from '@angular/core';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RatingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  ratingURL: string = "";
  ratingObject: string = "---";
  ratingObjectDesc: string = "-----";
  ratingObjectImgURL: string = "";

  ngOnInit(): void {
    // load current object to be rated
    this.loadRatingObject();
  }

  loadRatingObject() {
    // if exists, load from Firebase

    // else just have first user logged in do this small amount of work lol
    try {
      // const response = await fetch('https://en.wikipedia.org/wiki/Special:Random');
      fetch("https://en.wikipedia.org/w/api.php?format=json&action=query&generator=random&grnnamespace=0&prop=extracts|pageimages&exintro&explaintext&grnlimit=1&origin=*")
        .then(response => response.json())
        .then(data => {
          const pageId = Object.keys(data.query.pages)[0];
          const page = data.query.pages[pageId];

          this.ratingURL = "https://en.wikipedia.org/wiki/" + page.title;
          this.ratingObject = page.title;
          this.ratingObjectDesc = page.extract;
          this.ratingObjectImgURL = page.thumbnail ? page.thumbnail.source : null; // may or may not be img
        });
    } catch(error){
      console.error("Error instantiating object to rate: ", error);
      this.ratingObject = "[ Not Found ]"
      this.ratingObjectDesc = "[ Not Found ]"
    }
  }
}
