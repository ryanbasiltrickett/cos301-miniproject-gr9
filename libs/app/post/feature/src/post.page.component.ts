// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IComment, IPost } from '@mp/api/newsfeed/util';
// import { IProfile } from '@mp/api/profiles/util';
// import { ProfileState } from '@mp/app/profile/data-access';
import { Select, Store } from '@ngxs/store';
import { Observable, take } from 'rxjs';
import { GetPost, addComment } from '@mp/app/post/util';
import { PostState } from '@mp/app/post/data-access';
import { ProfileState } from '@mp/app/profile/data-access';
import { IProfile } from '@mp/api/profiles/util';

@Component({
  selector: 'mp-browse',
  templateUrl: './post.page.component.html',
  styleUrls: ['./post.page.component.scss'],
})
export class PostPageComponent implements OnInit {
  @Select(PostState.post) post$!: Observable<IPost | null>;
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>
  postid: string | undefined;
  usernam = '';
  showForm = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }

  @Select(PostState.comments) comments$!: Observable<IComment[] | null>;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.postid = params['postid'];
      this.store.dispatch(new GetPost(params['postid']));
    });
  }

  async addComment() {
    // const dat = prompt("Comment");
    const dat = this.usernam;
    this.profile$
    .pipe(take(1))
    .subscribe(
      profile => {
        if (profile?.id && dat && profile.username)
        this.store.dispatch(
          new addComment(
            profile?.id,
            dat,
            profile.username
          )
        );
      }
    );
    this.toggleForm()
  }
}
