import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetTrendingAction } from '@mp/app/browse/util';

@Component({
    selector: 'mp-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss'],
  })

  
  export class PostListComponent {
    constructor(private fb: FormBuilder, 
      private readonly store: Store) {}

    ngOnInit(){
      console.log('Page loaded');
      
      this.store.dispatch(
        new GetTrendingAction()
      )
    }
  }
  