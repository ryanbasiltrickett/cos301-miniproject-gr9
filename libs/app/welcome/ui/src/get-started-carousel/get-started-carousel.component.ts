import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ms-welcome-get-started-carousel-component',
  templateUrl: './get-started-carousel.component.html',
  styleUrls: ['./get-started-carousel.component.scss'],
})
export class GetStartedCarouselComponent {

  constructor(private router: Router) {}

  goToRegister() {
    this.router.navigate(['./register']);
  }

  goToLogin() {
    this.router.navigate(['./login']);
  }
}
