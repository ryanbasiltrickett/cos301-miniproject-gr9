import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { SetError } from '@mp/app/errors/util';
import {
  IProfile
} from '@mp/api/profiles/util'
import {
  IPost,
  IgeneratePostRequest,
  IupdateNFPostRequest,
  IComment,
  IFollowers,
  INFProfile,
  INFPost,
  INewsfeed,
  IPostArray,
  IRecentPost,
  IgenNewsfeedRequest

} from '@mp/api/newsfeed/util'
import {
  generatePost,
  setPage,
  generateNewsFeed,
  updateNewsFeedPost
} from '@mp/app/feed/util'
import { FeedApi } from './feed.api';
import produce from 'immer';
import { tap } from 'rxjs';
import { profile } from 'console';

export interface FeedStateModel {
  profile: INFProfile | null;
  limit:number | null | undefined;
  feed: INewsfeed |null|undefined;
  InfPost:INFPost |null;
  posts: IPost[] |null |undefined;
}



//Feel free to change this was just for testing purposes

@State<FeedStateModel>({
  name: 'profile',
  defaults: {
    profile: null,
    limit:null,
    feed:null,
    posts: null,
    InfPost:null,
  },
})

@Injectable()
export class FeedState {
  constructor(
    private readonly FeedApi: FeedApi,
    private readonly store: Store
  ) {}

  @Selector()
  static profile(state: FeedStateModel) {
    return state.profile;
  }

  @Action(setPage)
  setProfile(ctx: StateContext<FeedStateModel>, { posts }: setPage) {
    return ctx.setState(
      produce((draft) => {
        draft.posts = posts;
      })
    );
  }

  @Action(generatePost)
  async generatePost(ctx: StateContext<FeedStateModel>) {
    try {
      const state = ctx.getState();
      const limit=state.limit;

      if (!limit)
        return ctx.dispatch(
          new SetError(
            'UserId ,TimeLeft or limit not set'
          )
        );

      const request: IgeneratePostRequest = {limit};
      const responseRef = await this.FeedApi.generatePost(request);
      const response = responseRef.data;
      return ctx.dispatch(new setPage(response.posts));
    } catch (error) {
      return ctx.dispatch(new SetError((error as Error).message));
    }
  }

  @Action(generateNewsFeed)
  async generateNewsFeed(ctx:StateContext<FeedStateModel>){
    try {
      const state=ctx.getState();
      const feed=state.feed;

      if(!feed)
        return ctx.dispatch(
          new SetError('Feed string not set')
        );

      const request :IgenNewsfeedRequest={ dud:{}};
      const responseRef =await this.FeedApi.generateNewsFeed(request);
      const reponse =responseRef.data;
      return ctx.dispatch(new SetError('what are we suuposed to do here'));
    } catch (error) {
      return ctx.dispatch(new SetError((error as Error).message));
    }
  }

  @Action(updateNewsFeedPost)
  async updateNewsFeedPost(ctx: StateContext<FeedStateModel>){
    try {
      const state=ctx.getState();
      const NfPost=state.InfPost;

      if(!NfPost)
        return ctx.dispatch(
          new SetError('The NewsFeed Post not set')
        );

      const request: IupdateNFPostRequest={dud:{}};
      const responseRef=await this.FeedApi.updateNewsFeedPost(request);
      const reponse=responseRef.data;
      return ctx.dispatch(new SetError('What are we supposed to do here'));
    } catch (error) {
      return ctx.dispatch(new SetError((error as Error).message));
    }
  }
}
