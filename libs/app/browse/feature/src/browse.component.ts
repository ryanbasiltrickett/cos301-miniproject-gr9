// import { Component } from '@angular/core';
import { Component } from '@angular/core';
// import { IProfile } from '@mp/api/profiles/util';
// import { ProfileState } from '@mp/app/profile/data-access';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { BrowseAction } from '@mp/app/browse/util';

@Component({
  selector: 'mp-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent {
  // @Select(PostState.posts) posts$!: Observable<IPost[]>;
}
