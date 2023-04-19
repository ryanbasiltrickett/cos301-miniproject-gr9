import { Action, State, StateContext, Store, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { BrowseAction, ClearBrowseAction, GetTrendingAction } from '@mp/app/browse/util'; 
import { BrowseApi } from './browse.api';
import { IGetPost, IGetTrendingRequest, IGetTrendingResponse, IGetUser, IGetUserRequest } from '@mp/api/browse/util';
import { Timestamp } from 'firebase-admin/firestore';
import { IUser } from '@mp/api/users/util';
// import { Timestamp } from 'rxjs';

//TODO export this to the create library in data-access
export interface BrowseStateModel {
  response: IUser[] | IGetPost[] | null;
}

@State<BrowseStateModel>({
  name: 'browse',
  defaults: {
    response: null
  },
})

@Injectable()
export class BrowseState {
  constructor(
    private readonly api: BrowseApi,
    private readonly store: Store,
  ) {}

  @Selector()
  static getResponse(state: BrowseStateModel) {
    return state.response;
  }
  
  @Action(BrowseAction)
  async browseAction(ctx: StateContext<BrowseStateModel>, { search }: BrowseAction) {
    const users: IGetUser = {id: search.userName};
    const req: IGetUserRequest = {user: users};
    const responseRef = await this.api.getUser(req);
    const model: BrowseStateModel = {response: responseRef.data};
    ctx.setState(model);
  }

  @Action(ClearBrowseAction)
  async clearAction(ctx: StateContext<BrowseStateModel>){
    ctx.setState({response: null});
  }

  @Action(GetTrendingAction)
  async getTrending(ctx: StateContext<BrowseStateModel>){
    console.log('Action Fired');
    const req: IGetTrendingRequest = {reqId: 'system'};
    const response = await this.api.getTrending(req);
    const model: BrowseStateModel = {response: response.data};
    ctx.setState(model);
    console.log(ctx.getState());
  }
}