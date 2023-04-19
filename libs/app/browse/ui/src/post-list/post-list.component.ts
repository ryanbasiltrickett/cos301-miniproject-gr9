import { Component, OnInit } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'mp-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss'],
  })

  export class PostListComponent implements OnInit {

    dummyData = [
      { title: 'Item 1', imageUrl: 'https://picsum.photos/id/1/200/200' },
      { title: 'Item 2', imageUrl: 'https://picsum.photos/id/2/200/200' },
      { title: 'Item 3', imageUrl: 'https://picsum.photos/id/3/200/200' },
      { title: 'Item 4', imageUrl: 'https://picsum.photos/id/4/200/200' },
      { title: 'Item 5', imageUrl: 'https://picsum.photos/id/5/200/200' },
      { title: 'Item 6', imageUrl: 'https://picsum.photos/id/6/200/200' },
      { title: 'Item 7', imageUrl: 'https://picsum.photos/id/7/200/200' },
      { title: 'Item 8', imageUrl: 'https://picsum.photos/id/8/200/200' },
      { title: 'Item 9', imageUrl: 'https://picsum.photos/id/9/200/200' },
      { title: 'Item 10', imageUrl: 'https://picsum.photos/id/10/200/200' },
      { title: 'Item 11', imageUrl: 'https://picsum.photos/id/11/200/200' },
      { title: 'Item 12', imageUrl: 'https://picsum.photos/id/12/200/200' },
    ];
    
    // @Select(PostState.posts) posts$!: Observable<IPost[]>;
    // searchUser: string = '';\

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  onSegmentChanged(event: Event): void {
    const customEvent = event as CustomEvent;
    const selectedValue = customEvent.detail.value;
    console.log('Segment changed:', selectedValue);
  }
  
  }