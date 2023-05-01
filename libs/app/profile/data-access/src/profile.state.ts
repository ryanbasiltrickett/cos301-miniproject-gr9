import { Injectable } from '@angular/core';
import {
    // AgeGroup,
    // Ethnicity,
    // Gender,
    // HouseholdIncome,
    IProfile,
    IUpdateAccountDetailsRequest,
    // IUpdateAddressDetailsRequest,
    // IUpdateContactDetailsRequest,
    // IUpdateOccupationDetailsRequest,
    // IUpdatePersonalDetailsRequest
} from '@mp/api/profiles/util';
import { AuthState } from '@mp/app/auth/data-access';
import { Logout as AuthLogout } from '@mp/app/auth/util';
import { SetError } from '@mp/app/errors/util';
import {
  GetUserPosts,
    Logout,
    SetProfile,
    SubscribeToProfile,
    UpdateAccountDetails,
    // UpdateAddressDetails,
    // UpdateContactDetails,
    // UpdateOccupationDetails,
    // UpdatePersonalDetails
} from '@mp/app/profile/util';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import produce from 'immer';
import { tap } from 'rxjs';
import { ProfilesApi } from './profiles.api';
import { IGetPost } from '@mp/api/browse/util';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProfileStateModel {
  profile: IProfile | null;
  accountDetailsForm: {
    model: {
      username: string | null;
      bio: string | null;
      name: string | null;
      email: string | null;
      photoURL: string | null;
      password: string | null;
      visibility: boolean | null;
    };
    dirty: false;
    status: string;
    errors: object;
  };
  posts: IGetPost[] | null;
}

@State<ProfileStateModel>({
  name: 'profile',
  defaults: {
    profile: null,
    accountDetailsForm: {
      model: {
        username: null,
        bio: '',
        name: '',
        email: null,
        photoURL: null,
        password: null,
        visibility: true,
      },
      dirty: false,
      status: '',
      errors: {},
    },
    posts: null
  },
})
@Injectable()
export class ProfileState {
  constructor(
    private readonly profileApi: ProfilesApi,
    private readonly store: Store
  ) {}

  @Selector()
  static profile(state: ProfileStateModel) {
    return state.profile;
  }

  @Action(Logout)
  async logout(ctx: StateContext<ProfileStateModel>) {
    return ctx.dispatch(new AuthLogout());
  }

  @Action(SubscribeToProfile)
  subscribeToProfile(ctx: StateContext<ProfileStateModel>) {
    const user = this.store.selectSnapshot(AuthState.user);
    if (!user) return ctx.dispatch(new SetError('User not set'));

    console.log(this.profileApi.profile$(user.uid));
    return this.profileApi
      .profile$(user.uid)
      .pipe(tap((profile: IProfile) => ctx.dispatch(new SetProfile(profile))));
  }

  @Action(SetProfile)
  setProfile(ctx: StateContext<ProfileStateModel>, { profile }: SetProfile) {
    return ctx.setState(
      produce((draft) => {
        draft.profile = profile;
      })
    );
  }

  @Action(UpdateAccountDetails)
  async updateAccountDetails(ctx: StateContext<ProfileStateModel>) {
    try {
      const state = ctx.getState();
      const id = state.profile?.id;
      const username = state.accountDetailsForm.model.username;
      const bio = state.accountDetailsForm.model.bio;
      const name = state.accountDetailsForm.model.name;
      const email = state.accountDetailsForm.model.email;
      // const photoURL = state.accountDetailsForm.model.photoURL;
      const password = state.accountDetailsForm.model.password;
      const visibility = state.accountDetailsForm.model.visibility;

      if (!id || !username || !email || !password)
        return ctx.dispatch(
          new SetError(
            'UserId or display name or email or password not set'
          )
        );

      const request: IUpdateAccountDetailsRequest = {
        profile: {
          id,
          username,
          bio,
          name,
          email,
          password,
          visibility,
        },
      };
      const responseRef = await this.profileApi.updateAccountDetails(request);
      const response = responseRef.data;
      return ctx.dispatch(new SetProfile(response.profile));
    } catch (error) {
      return ctx.dispatch(new SetError((error as Error).message));
    }
  }

  @Action(GetUserPosts)
  async getUserPosts(ctx: StateContext<ProfileStateModel>){
    const req = ctx.getState().accountDetailsForm.model.username;
    const response = await this.profileApi.getUserPosts(req!);
    const model: ProfileStateModel = { 
      profile: ctx.getState().profile,
      accountDetailsForm: {
        model: {
          username: ctx.getState().accountDetailsForm.model.username,
          bio: ctx.getState().accountDetailsForm.model.bio,
          name: ctx.getState().accountDetailsForm.model.name,
          email: ctx.getState().accountDetailsForm.model.email,
          photoURL: ctx.getState().accountDetailsForm.model.photoURL,
          password: ctx.getState().accountDetailsForm.model.password,
          visibility: ctx.getState().accountDetailsForm.model.visibility,
        },
        dirty: ctx.getState().accountDetailsForm.dirty,
        status: ctx.getState().accountDetailsForm.status,
        errors: ctx.getState().accountDetailsForm.errors,
      },
      posts: response.data.posts
    };
    ctx.setState(model);
    console.log(ctx.getState());
  }
}
