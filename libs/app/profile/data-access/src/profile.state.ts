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
import { IGetTrendingRequest } from '@mp/api/browse/util';

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
    console.log('Action Fired');
    const req: IGetTrendingRequest = {reqId: 'system'};
    // const response = await this.api.getTrending(req);
    // const model: ProfileStateModel = { user: null, posts: response.data};
    // ctx.setState(model);
    // console.log(ctx.getState());
  }

  // @Action(UpdateContactDetails)
  // async updateContactDetails(ctx: StateContext<ProfileStateModel>) {
  //   try {
  //     const state = ctx.getState();
  //     const userId = state.profile?.userId;
  //     const cellphone = state.contactDetailsForm.model.cellphone;

  //     if (!userId || !cellphone)
  //       return ctx.dispatch(new SetError('UserId or cellphone not set'));

  //     const request: IUpdateContactDetailsRequest = {
  //       profile: {
  //         userId,
  //         contactDetails: {
  //           cellphone,
  //         },
  //       },
  //     };
  //     const responseRef = await this.profileApi.updateContactDetails(request);
  //     const response = responseRef.data;
  //     return ctx.dispatch(new SetProfile(response.profile));
  //   } catch (error) {
  //     return ctx.dispatch(new SetError((error as Error).message));
  //   }
  // }

  // @Action(UpdateAddressDetails)
  // async updateAddressDetails(ctx: StateContext<ProfileStateModel>) {
  //   try {
  //     const state = ctx.getState();
  //     const userId = state.profile?.userId;
  //     const residentialArea = state.addressDetailsForm.model.residentialArea;
  //     const workArea = state.addressDetailsForm.model.workArea;

  //     if (!userId || !residentialArea || !workArea)
  //       return ctx.dispatch(
  //         new SetError('UserId or residential area or work area not set')
  //       );

  //     const request: IUpdateAddressDetailsRequest = {
  //       profile: {
  //         userId,
  //         addressDetails: {
  //           residentialArea,
  //           workArea,
  //         },
  //       },
  //     };
  //     const responseRef = await this.profileApi.updateAddressDetails(request);
  //     const response = responseRef.data;
  //     return ctx.dispatch(new SetProfile(response.profile));
  //   } catch (error) {
  //     return ctx.dispatch(new SetError((error as Error).message));
  //   }
  // }

  // @Action(UpdatePersonalDetails)
  // async updatePersonalDetails(ctx: StateContext<ProfileStateModel>) {
  //   try {
  //     const state = ctx.getState();
  //     const userId = state.profile?.userId;
  //     const age = state.personalDetailsForm.model.age;
  //     const gender = state.personalDetailsForm.model.gender;
  //     const ethnicity = state.personalDetailsForm.model.ethnicity;

  //     if (!userId || !age || !gender || !ethnicity)
  //       return ctx.dispatch(
  //         new SetError('UserId or age or gender or ethnicity not set')
  //       );

  //     const request: IUpdatePersonalDetailsRequest = {
  //       profile: {
  //         userId,
  //         personalDetails: {
  //           age,
  //           gender,
  //           ethnicity,
  //         },
  //       },
  //     };
  //     const responseRef = await this.profileApi.updatePersonalDetails(request);
  //     const response = responseRef.data;
  //     return ctx.dispatch(new SetProfile(response.profile));
  //   } catch (error) {
  //     return ctx.dispatch(new SetError((error as Error).message));
  //   }
  // }

  // @Action(UpdateOccupationDetails)
  // async updateOccupationDetails(ctx: StateContext<ProfileStateModel>) {
  //   try {
  //     const state = ctx.getState();
  //     const userId = state.profile?.userId;
  //     const householdIncome = state.occupationDetailsForm.model.householdIncome;
  //     const occupation = state.occupationDetailsForm.model.occupation;

  //     if (!userId || !householdIncome || !occupation)
  //       return ctx.dispatch(
  //         new SetError('UserId or householdIncome or occupation not set')
  //       );

  //     const request: IUpdateOccupationDetailsRequest = {
  //       profile: {
  //         userId,
  //         occupationDetails: {
  //           householdIncome,
  //           occupation,
  //         },
  //       },
  //     };
  //     const responseRef = await this.profileApi.updateOccupationDetails(
  //       request
  //     );
  //     const response = responseRef.data;
  //     return ctx.dispatch(new SetProfile(response.profile));
  //   } catch (error) {
  //     return ctx.dispatch(new SetError((error as Error).message));
  //   }
  // }
}
