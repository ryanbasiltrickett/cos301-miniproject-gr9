import { Component } from '@angular/core';
import { IPost } from '@mp/api/posts/util';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FeedState } from '@mp/app/feed/data-access';
import { SubscribeToFeed } from '@mp/app/feed/util';

@Component({
  selector: 'mp-feed-page',
  templateUrl: './feed.page.component.html',
})
export class FeedPage {
  @Select(FeedState.feed) feed$: Observable<IPost[]> | undefined;

  constructor(private readonly store: Store) {
    this.store.dispatch(new SubscribeToFeed());
  }
}
