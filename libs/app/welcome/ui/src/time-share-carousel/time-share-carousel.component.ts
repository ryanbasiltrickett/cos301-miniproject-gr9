import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ms-welcome-time-share-carousel-component',
  templateUrl: './time-share-carousel.component.html',
  styleUrls: ['./time-share-carousel.component.scss'],
})
export class TimeShareCarouselComponent {

  constructor(private router: Router) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit() {}

  goToWelcomeCarousel() {
    this.router.navigate(['/welcome/welcome-carousel']);
  }

}
