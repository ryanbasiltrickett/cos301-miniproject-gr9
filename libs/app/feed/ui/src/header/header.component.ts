import { Component } from '@angular/core';
import { ProfileState } from '@mp/app/profile/data-access';

@Component({
    selector: 'ms-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
  })
  export class HeaderComponent{
    hours = "00";
    minutes = "00";
    seconds = "00";
    time = 34549; // 9:49:49

    constructor() {
      // update hours, seconds, minutes every second
      setInterval(() => {
        this.time--;
        this.hours = Math.floor(this.time / 3600).toString();
        this.minutes = Math.floor((this.time % 3600) / 60).toString();
        this.seconds = Math.floor((this.time % 3600) % 60).toString();
      }, 1000);
    }

  }
