import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select, Store } from '@ngxs/store';
import { Observable, firstValueFrom } from 'rxjs';
import { GetTrendingAction } from '@mp/app/browse/util';
import { IGetPost, IGetTrendingResponse } from '@mp/api/browse/util';

@Component({
    selector: 'mp-post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.scss'],
  })

  
  export class PostListComponent {
    posts$: Observable<IGetPost[]>
    constructor(private fb: FormBuilder, 
      private readonly store: Store) {
        this.posts$ = this.store.select(state => state.browse.response);
      }

    trendingPosts: IGetPost[] | undefined;

    async ngOnInit(){
      console.log('Page loaded');
      
      this.store.dispatch(
        new GetTrendingAction()
      )
      
      await this.populate();
    }

    async populate(){
      this.trendingPosts = await firstValueFrom(this.posts$);
    }
  }
  