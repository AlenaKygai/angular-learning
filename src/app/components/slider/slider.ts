import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-slider',
  styleUrl: './slider.scss',
  templateUrl: './slider.html',
})
export class Slider {
  slides: string[] = ['/assets/images/slider/slider-1.jpg', '/assets/images/slider/slider-2.jpg'];
  currentIndex: number = 0;

  prevSlide() {
    this.currentIndex = this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
  }

  nextSlide() {
    this.currentIndex = this.currentIndex === this.slides.length - 1 ? 0 : this.currentIndex + 1;
  }
}
