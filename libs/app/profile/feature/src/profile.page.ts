import { Component } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'ms-profile-page',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;

  segment: string = 'all'; 

  allPosts = [
    {
      id: 1,
      image: "https://picsum.photos/id/237/200/200",
      title: "Post 1",
      content: "This is the content of post 1"
    },
    {
      id: 2,
      image: "https://picsum.photos/id/238/200/200",
      title: "Post 2",
      content: "This is the content of post 2"
    },
    // add more posts here
  ];
  
  mediaPosts = [
    {
      id: 1,
      image: "https://picsum.photos/id/237/200/200",
      title: "Post 1",
      content: "This is the content of post 1"
    },
    {
      id: 2,
      image: "https://picsum.photos/id/238/200/200",
      title: "Post 2",
      content: "This is the content of post 2"
    },
    // add more posts here
  ];
  
  textPosts = [
    {
      id: 1,
      title: "Post 1",
      content: "This is the content of post 1"
    },
    {
      id: 2,
      title: "Post 2",
      content: "This is the content of post 2"
    },
    // add more posts here
  ];
  
}
