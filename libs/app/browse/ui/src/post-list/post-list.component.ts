import { Component } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'mp-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss'],
  })

  export class PostListComponent {

    // @Select(PostState.posts) posts$!: Observable<IPost[]>;
    // searchUser: string = '';
    filterByMedia() {
      // Add logic for filtering by media here
    }
  
    filterByText() {
      // Add logic for filtering by text here
    }
  }
  