import { Action, State, StateContext, Store } from '@ngxs/store';
// import { ICreatePostRequest } from '@mp/api/posts/util';
import { Injectable } from '@angular/core';
import { PostApi } from '@mp/app/post/data-access';
import { CreatePost } from '@mp/app/create/util';
import { ICreatePostRequest } from '@mp/api/posts/util';

//TODO export this to the create library in data-access
export interface CreatePostStateModel {
  poster: string | undefined;
  description: string | undefined;
  mediaUrl?: string;
}

@State<CreatePostStateModel>({
  name: 'create',
  defaults: {
    poster: 'thuthuka',
    description: undefined,
    mediaUrl: undefined,
  },
})
@Injectable()
export class CreateState {
  constructor(
    private readonly postApi: PostApi,
    private readonly store: Store
  ) {
    console.log('This thing is somewhere');
  }

  @Action(CreatePost)
  createPost(ctx: StateContext<CreatePostStateModel>, { post }: CreatePost) {
    const request: ICreatePostRequest = {
      post,
    };
    const responseRef = this.postApi.createPost(request);
  }
}
