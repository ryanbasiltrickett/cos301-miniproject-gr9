import { Component } from '@angular/core';
import { IPost } from '@mp/api/post/util';
import { PostState } from '@mp/app/post/data-access';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'ms-post-page',
  templateUrl: './post.page.html',
})
export class PostPage {
  @Select(PostState.post) post$!: Observable<IPost | null>;
}
