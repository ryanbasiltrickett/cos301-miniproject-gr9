import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'ms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;

  hours = '00';
  minutes = '00';
  seconds = '00';
  time = 34549; // 9:49:49

  constructor(private readonly router: Router) {
    this.profile$.subscribe((profile: IProfile | null) => {
      if (profile) {
        if (profile.timeLeft) {
          this.time = profile.timeLeft;
          this.hours = Math.floor(this.time / 3600).toString();
          this.minutes = Math.floor((this.time % 3600) / 60).toString();
          this.seconds = Math.floor((this.time % 3600) % 60).toString();
        }
      }
    });
  }

  goToEvents() {
    this.router.navigate(['home/events']);
  }
}
