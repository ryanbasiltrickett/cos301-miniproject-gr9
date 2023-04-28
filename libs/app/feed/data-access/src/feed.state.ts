import {
  Action,
  Select,
  Selector,
  State,
  StateContext,
  Store,
} from '@ngxs/store';
import { FeedApi } from './feed.api';
import { Injectable } from '@angular/core';
import {
  CommentPost,
  GivePostTime,
  LikePost,
  SetFeed,
  SubscribeToFeed,
} from '@mp/app/feed/util';
import {
  IComment,
  ICommentPostRequest,
  IPost,
  IUpdatePostTimeRequest,
} from '@mp/api/posts/util';
import { ILikePostRequest } from '@mp/api/posts/util';
import { ICommand } from '@nestjs/cqrs';
import { SetError } from '@mp/app/errors/util';
import { IgeneratePostRequest } from '@mp/api/newsfeed/util';
import { IProfile } from '@mp/api/profiles/util';
import { Observable, take } from 'rxjs';
import { ProfileState } from '@mp/app/profile/data-access';
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
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;

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
    // only update the whole feed if there is a new post
    if (feed.length > ctx.getState().feed.length) {
      return ctx.patchState({ feed: feed });
    } else {
      // return the same state if there is no new post
      return ctx.getState();
    }
  }

  @Action(SubscribeToFeed)
  subscribeToFeed(ctx: StateContext<FeedStateModel>) {
    this.feedApi.subscribeToFeed();
    return ctx.patchState({ subscribedToFeed: true });
  }

  @Action(LikePost)
  async likePost(ctx: StateContext<FeedStateModel>, { post }: LikePost) {
    this.profile$.pipe(take(1)).subscribe((profile) => {
      if (profile !== null) {
        const request: ILikePostRequest = {
          profile,
          post,
        };

        this.feedApi.updatePostLikeCount(request);
      }
    });
    // const response = responseRef.data;
    // console.log('Response from like Post: ', response);
  }

  @Action(GivePostTime)
  async givePostTime(
    ctx: StateContext<FeedStateModel>,
    givePostTime: GivePostTime
  ) {
    const { post, amount } = givePostTime;
    const increaseAmount = amount ? amount : 1;
    this.profile$.pipe(take(1)).subscribe((profile) => {
      if (profile !== null) {
        const request: IUpdatePostTimeRequest = {
          profile,
          post,
          amount: increaseAmount,
        };

        this.feedApi.updatePostTime(request);
      }
    });
    // const response = responseRef.data;
    // console.log('Response from like Post: ', response);
  }

  @Action(CommentPost)
  async commentPost(
    ctx: StateContext<FeedStateModel>,
    request: ICommentPostRequest
  ) {
    const state = ctx.getState();
    const posts = state.feed;

    const index = posts.findIndex((post) => post.id === request.postId);

    if (index == -1) {
      return this.store.dispatch(new SetError('Post Not Found'));
    }

    posts[index].comments?.push(request.comment);

    return ctx.patchState({ feed: posts });
  }

  // @Action(generateNewsFeed)
  // async generateNewsFeed(ctx:StateContext<FeedStateModel>){
  //   try {
  //     const state=ctx.getState();
  //     const feed=state.feed;

  //     if(!feed)
  //       return ctx.dispatch(
  //         new SetError('Feed string not set')
  //       );
    
  //     const request :IgenNewsfeedRequest={ dud:{}};
  //     const responseRef =await this.FeedApi.generateNewsFeed(request);
  //     const reponse =responseRef.data;
  //     return ctx.dispatch(new SetError('what are we suuposed to do here')); 
  //   } catch (error) {
  //     return ctx.dispatch(new SetError((error as Error).message));
  //   }
  // }

  // @Action(updateNewsFeedPost)
  // async updateNewsFeedPost(ctx: StateContext<FeedStateModel>){
  //   try {
  //     const state=ctx.getState();
  //     const NfPost=state.InfPost;

  //     if(!NfPost)
  //       return ctx.dispatch(
  //         new SetError('The NewsFeed Post not set')
  //       );
      
  //     const request: IupdateNFPostRequest={dud:{}};
  //     const responseRef=await this.FeedApi.updateNewsFeedPost(request);
  //     const reponse=responseRef.data;
  //     return ctx.dispatch(new SetError('What are we supposed to do here'));
  //   } catch (error) {
  //     return ctx.dispatch(new SetError((error as Error).message));
  //   }
  // }
}
