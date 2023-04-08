import { Component, Input } from '@angular/core';
import { IPost } from '@mp/api/posts/util';
import { LikePost } from '@mp/app/feed/util';
import { Store } from '@ngxs/store';

@Component({
  selector: 'mp-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() post!: IPost;

  constructor(private readonly store: Store) {}

  likePost(): void {
    this.store.dispatch(new LikePost(this.post));
  }
}
