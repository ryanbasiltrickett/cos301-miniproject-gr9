import { Action, State, StateContext, Store } from '@ngxs/store';
import { FeedApi } from './feed.api';
import { Injectable } from '@angular/core';
import { LikePost } from '@mp/app/feed/util';
import { IPost } from '@mp/api/posts/util';
import { ILikePostRequest } from '@mp/api/posts/util';

export interface FeedStateModel {
  feed: IPost[];
}

@State<FeedStateModel>({
  name: 'feed',
  defaults: {
    feed: [
      {
        id: '1',
        likes: 5,
        published: FirebaseFirestore.Timestamp.now(),
      },
    ],
  },
})
@Injectable()
export class FeedState {
  constructor(readonly feedApi: FeedApi, private readonly store: Store) {}

  @Action(LikePost)
  async likePost(ctx: StateContext<FeedStateModel>, { post }: LikePost) {
    const request: ILikePostRequest = {
      post,
    };
    const responseRef = await this.feedApi.updatePostLikeCount(request);
    const response = responseRef.data;
    console.log('Response from like Post: ', response);
  }
}
