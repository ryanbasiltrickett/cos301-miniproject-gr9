// import { Component } from '@angular/core';
import { Component } from '@angular/core';
// import { IProfile } from '@mp/api/profiles/util';
// import { ProfileState } from '@mp/app/profile/data-access';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { BrowseAction } from '@mp/app/search/util';

@Component({
  selector: 'mp-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent {
  // @Select(PostState.posts) posts$!: Observable<IPost[]>;
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
