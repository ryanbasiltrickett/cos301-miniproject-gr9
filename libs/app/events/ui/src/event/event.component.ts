import { Component, OnInit } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'mp-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss'],
  })

  export class EventComponent implements OnInit {

    dummyData = [
      { description: 'Make a post before the time is up and get double the reward', time: '15 : 12 : 34' },
      { description: 'Make a post before the time is up and get double the reward', time: '5 : 5 : 55' }
    ];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}
  
  }