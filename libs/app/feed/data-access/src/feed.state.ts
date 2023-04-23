import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { FeedApi } from './feed.api';
import { Injectable } from '@angular/core';
import { CommentPost, GivePostTime, LikePost, SetFeed, SubscribeToFeed } from '@mp/app/feed/util';
import { IComment, ICommentPostRequest, IPost } from '@mp/api/posts/util';
import { ILikePostRequest } from '@mp/api/posts/util';
import { ICommand } from '@nestjs/cqrs';
import { SetError } from '@mp/app/errors/util';
// import { Timestamp } from 'firebase-admin/firestore';

export interface FeedStateModel {
  subscribedToFeed: boolean;
  feed: IPost[];
}

@State<FeedStateModel>({
  name: 'feed',
  defaults: {
    feed: [],
    subscribedToFeed: false,
  },
})
@Injectable()
export class FeedState {
  constructor(
    private readonly feedApi: FeedApi,
    private readonly store: Store
  ) {
    this.feedApi.feed$.subscribe((feed) => {
      this.store.dispatch(new SetFeed(feed));
    });
  }

  @Selector()
  static feed(state: FeedStateModel) {
    if (!state.subscribedToFeed) console.error('subscribe to feed to get data');
    if (state.feed.length > 0) {
      return state.feed;
    }
    return undefined;
  }

  @Action(SetFeed)
  setFeed(ctx: StateContext<FeedStateModel>, { feed }: SetFeed) {
    return ctx.patchState({ feed: feed });
  }

  @Action(SubscribeToFeed)
  subscribeToFeed(ctx: StateContext<FeedStateModel>) {
    this.feedApi.subscribeToFeed();
    return ctx.patchState({ subscribedToFeed: true });
  }

  @Action(LikePost)
  async likePost(ctx: StateContext<FeedStateModel>, { post }: LikePost) {
    const request: ILikePostRequest = {
      post,
      // retrieve profile id Sim
    };
    const responseRef = await this.feedApi.updatePostLikeCount(request);
    // const response = responseRef.data;
    // console.log('Response from like Post: ', response);
  }

  @Action(GivePostTime)
  async givePostTime(ctx: StateContext<FeedStateModel>, { post }: GivePostTime) {
    const request: ILikePostRequest = {
      post
    };
    const responseRef = await this.feedApi.updatePostTime(request);
    // const response = responseRef.data;
    // console.log('Response from like Post: ', response);
  }

  @Action(CommentPost)
  async commentPost(ctx: StateContext<FeedStateModel>, request : ICommentPostRequest) {
    const state = ctx.getState();
    const posts = state.feed;

    const index = posts.findIndex((post) => post.id === request.postId);

    if(index == -1) {
      return this.store.dispatch( new SetError('Post Not Found'))
    }

    posts[index].comments?.push(request.comment);

    return ctx.patchState({feed : posts})
  }
}

