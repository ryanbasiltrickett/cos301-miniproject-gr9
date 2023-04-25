import { IComment, IPost } from '@mp/api/newsfeed/util';
import { PostApi } from './post.api';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { GetPost, addComment } from '@mp/app/post/util';
import { IAddCommentRequest } from '@mp/api/posts/util';

export interface PostStateModel {
  post: IPost | null;
  comments: IComment[] | null;
}

@State<PostStateModel>({
  name: 'post',
  defaults: {
    post: null,
    comments: null,
  },
})
@Injectable()
export class PostState {
  constructor(
    private readonly postApi: PostApi,
    private readonly store: Store
  ) {}

  @Selector()
  static post(state: PostStateModel) {
    return state.post;
  }

  @Action(GetPost)
  getPost(ctx: StateContext<PostStateModel>, { id }: GetPost) {
    return this.postApi.post$(id).pipe(
      tap((post: IPost) => {
        console.log('Post received: ', post);
        ctx.patchState({ post });
      })
    );
  }

  @Action(addComment)
  async addComment(ctx: StateContext<PostStateModel>, { id, text}: addComment) {
    let post_ = ctx.getState().post;

    const request: IAddCommentRequest = {
        post: post_,
        comment: text,
        userId: id
    }

    post_ =  (await this.postApi.addComment(request)).data.post;
    return ctx.patchState({post:post_,comments: post_.comments});
  }
}
