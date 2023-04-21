import { Injectable } from '@angular/core';
import {
  IPost,
  IgeneratePostRequest,
  IupdateNFPostRequest
} from '@mp/api/newsfeed/util'
import {
  IProfile
} from '@mp/api/profiles/util'
import {
  generatePost,setPage
} from '@mp/app/feed/util'
import { SetError } from '@mp/app/errors/util';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import produce from 'immer';
import { tap } from 'rxjs';
import { FeedApi } from './feed.api';

export interface FeedStateModel {
  profile: IProfile | null;
  posts: IPost[] |null |undefined;
}

//Feel free to change this was just for testing purposes

@State<FeedStateModel>({
  name: 'feed',
  defaults: {
    profile: null,
    posts: null
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
  async updateAccountDetails(ctx: StateContext<FeedStateModel>) {
    try {
      const state = ctx.getState();
      const userId = state.profile?.userId;

      if (!userId)
        return ctx.dispatch(
          new SetError(
            'UserId not set'
          )
        );

      const request: IgeneratePostRequest = {userID: userId}

      const responseRef = await this.FeedApi.generatePost(request);
      const response = responseRef.data;
      return ctx.dispatch(new setPage(response.posts.posts));
    } catch (error) {
      return ctx.dispatch(new SetError((error as Error).message));
    }
  }
}
