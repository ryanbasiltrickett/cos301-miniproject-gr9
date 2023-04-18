import { Action, State, StateContext, Store, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { BrowseAction } from '@mp/app/browse/util'; 
import { BrowseApi } from './browse.api';
import { IGetUser, IGetUserRequest } from '@mp/api/browse/util';
import { Timestamp } from 'firebase-admin/firestore';
// import { Timestamp } from 'rxjs';

//TODO export this to the create library in data-access
export interface BrowseStateModel {
  id: string;
  email?: string | null | undefined;
  displayName?: string | null | undefined;
  photoURL?: string | null | undefined;
  phoneNumber?: string | null | undefined;
  customClaims?: { [key: string]: any } | null | undefined;
  created?: Timestamp | null | undefined;
}

@State<BrowseStateModel>({
  name: 'browse',
  defaults: {
    id: 'SysAd',
    email: null,
    displayName: null,
    photoURL: null,
    phoneNumber: null,
    customClaims: null,
    created: null
  },
})

@Injectable()
export class BrowseState {
  constructor(
    private readonly api: BrowseApi,
    private readonly store: Store
  ) {}


  @Action(BrowseAction)
  async browseAction(ctx: StateContext<BrowseStateModel>, { search }: BrowseAction) {
    try{
      console.log("State Fired");
    }catch(err){
      console.log(err);
    }
    const users: IGetUser = {id: search.userName};
    const req: IGetUserRequest = {user: users};
    const responseRef = await this.api.getUser(req);
    responseRef.data.forEach(user => {
      console.log(user.email);
    })
  }
}