import { Action, State, StateContext, Store, Select } from '@ngxs/store';
// import { ICreatePostRequest } from '@mp/api/posts/util';
import { Injectable } from '@angular/core';
import { PostApi } from '@mp/app/post/data-access';
import { CreatePost } from '@mp/app/create/util';
import { ICreatePostRequest } from '@mp/api/posts/util';
import { Observable } from 'rxjs';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';

//TODO export this to the create library in data-access
export interface CreatePostStateModel {
  poster: string | undefined;
  description: string | undefined;
  mediaUrl?: string;
}

@State<CreatePostStateModel>({
  name: 'create',
  defaults: {
    poster: undefined,
    description: undefined,
    mediaUrl: undefined,
  },
})
@Injectable()
export class CreateState {
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;

  constructor(
    private readonly postApi: PostApi,
    private readonly store: Store
  ) {}

  @Action(CreatePost)
  createPost(ctx: StateContext<CreatePostStateModel>, { post }: CreatePost) {
    
    const request: ICreatePostRequest = {
      post,
    };
    const responseRef = this.postApi.createPost(request);
  }
}
