import { Action, State, StateContext, Store, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { BrowseAction } from '@mp/app/browse/util'; 
import { BrowseApi } from './browse.api';
import { IGetUser, IGetUserRequest } from '@mp/api/browse/util';

//TODO export this to the create library in data-access
export interface BrowseStateModel {
  userName: string | undefined;
}

@State<BrowseStateModel>({
  name: 'browse',
  defaults: {
    userName: 'Test',
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
    const responseRef = this.api.getUser(req);
    // console.log(responseRef);
  }
}