// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from '@mp/api/newsfeed/util';
// import { IProfile } from '@mp/api/profiles/util';
// import { ProfileState } from '@mp/app/profile/data-access';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetPost } from '@mp/app/post/util';
import { PostState } from '@mp/app/post/data-access';

@Component({
  selector: 'mp-browse',
  templateUrl: './post.page.component.html',
  styleUrls: ['./post.page.component.scss'],
})
export class PostPageComponent implements OnInit {
  @Select(PostState.post) post$!: Observable<IPost | null>;
  postid: string | undefined;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.postid = params['postid'];
      this.store.dispatch(new GetPost(params['postid']));
    });
  }

  addComment() {
    alert('add comment');
  }
}
