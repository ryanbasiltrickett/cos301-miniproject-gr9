import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ms-welcome-welcome-carousel-component',
  templateUrl: './welcome-carousel.component.html',
  styleUrls: ['./welcome-carousel.component.scss'],
})
export class WelcomeCarouselComponent {

  constructor(private router: Router) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit() {}

  goToGetStartedCarousel() {
    this.router.navigate(['/welcome/get-started-carousel']);
  }

  goToTimeShareCarousel() {
    this.router.navigate(['/welcome/time-share-carousel']);
  }
}
