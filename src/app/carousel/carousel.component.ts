import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  images = [
    { url: "https://material.angular.io/assets/img/examples/shiba1.jpg", text: "Shiba 1" },
    { url: "https://material.angular.io/assets/img/examples/shiba2.jpg", text: "Shiba 2" },
    { url: "https://i.ytimg.com/vi/BHlLIHdiTN8/hqdefault.jpg", text: "Cute Dog 1" },
    { url: "https://i.ytimg.com/vi/bjsZmXaz12o/hq720.jpg", text: "Cute Dog 2" },
    { url: "https://i.ytimg.com/vi/tkkBgK19eBM/hq720.jpg", text: "Cute Dog 3" },
    { url: "https://i.ytimg.com/vi/hBPiXySuxX4/hqdefault.jpg", text: "Cute Dog 4" },
    // Add more objects as needed
  ];
  currentIndex = 0;
  displayCount = 5;

  constructor() {
    // Initialize your images array here
  }

  nextSet(): void {
    this.currentIndex += this.displayCount;
    // Check if we need to wrap around to start to fill the set
    if (this.currentIndex >= this.images.length) {
      this.currentIndex = 0;
    }
  }
  
  previousSet(): void {
    this.currentIndex -= this.displayCount;
    // Check if we need to wrap around to end to fill the set
    if (this.currentIndex < 0) {
      this.currentIndex = Math.max(0, this.images.length - this.displayCount);
    }
  }

  // Helper method to get the current set of images, including wrapping if necessary
  getCurrentSet(): any[] {
    let endIndex = this.currentIndex + this.displayCount;
    let set = this.images.slice(this.currentIndex, endIndex);

    // If the set is incomplete, wrap around and add items from the start/end
    if (set.length < this.displayCount) {
      let wrapAroundCount = this.displayCount - set.length;
      set = set.concat(this.images.slice(0, wrapAroundCount));
    }

    return set;
  }
}