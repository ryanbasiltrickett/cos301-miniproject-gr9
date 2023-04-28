import { Component, ViewChild } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core';
import { IPost } from '@mp/api/posts/util';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { FeedState } from '@mp/app/feed/data-access';
import { GivePostTime, SubscribeToFeed } from '@mp/app/feed/util';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'mp-feed-page',
  templateUrl: './feed.page.component.html',
})
export class FeedPage {
  @Select(FeedState.feed) feed$: Observable<IPost[]> | undefined;
  @ViewChild(IonModal) modal!: IonModal;
  isModalOpen = false;
  donate_amount: number | undefined;
  postBeingDonatedTo!: IPost;

  constructor(private readonly store: Store) {
    this.store.dispatch(new SubscribeToFeed());
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.donate_amount, 'confirm');
  }

  onDonateTime(post: IPost) {
    this.isModalOpen = true;
    this.postBeingDonatedTo = post;
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      if (this.donate_amount)
        this.store.dispatch(
          new GivePostTime(this.postBeingDonatedTo, this.donate_amount)
        );
      // this.message = `Hello, ${ev.detail.data}!`;
    }
    this.isModalOpen = false;
    this.donate_amount = undefined;
  }
}
