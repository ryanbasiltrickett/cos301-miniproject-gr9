// import { Action, State, StateContext, Store, Selector } from '@ngxs/store';
// import { Injectable } from '@angular/core';
// import { BrowseAction, ClearBrowseAction, GetTrendingAction } from '@mp/app/browse/util'; 
// import { BrowseApi } from './browse.api';
// import { IGetPost, IGetTrendingRequest, IGetTrendingResponse, IGetUser, IGetUserRequest } from '@mp/api/browse/util';
// import { Timestamp } from 'firebase-admin/firestore';
// import { IUser } from '@mp/api/users/util';
// // import { Timestamp } from 'rxjs';

// //TODO export this to the create library in data-access
// export interface BrowseStateModel {
//   user: IUser[] | null;
//   posts: IGetPost[] | null;
// }


// @State<BrowseStateModel>({
//   name: 'browse',
//   defaults: {
//     user: null,
//     posts: null
//   },
// })


// @Injectable()
// export class BrowseState {
//   constructor(
//     private readonly api: BrowseApi,
//     private readonly store: Store,
//   ) {}

//   @Selector()
//   static getUsers(state: BrowseStateModel) {
//     return state.user;
//   }

  
//   @Action(BrowseAction)
//   async browseAction(ctx: StateContext<BrowseStateModel>, { search }: BrowseAction) {
//     const users: IGetUser = {id: search.userName};
//     const req: IGetUserRequest = {user: users};
//     const responseRef = await this.api.getUser(req);
//     const model: BrowseStateModel = {user: responseRef.data, posts: ctx.getState().posts};
//     console.log(model);
//     ctx.setState(model);
//   }

//   @Action(ClearBrowseAction)
//   async clearAction(ctx: StateContext<BrowseStateModel>){
//     ctx.setState({user: null, posts: ctx.getState().posts});
//   }

//   @Action(GetTrendingAction)
//   async getTrending(ctx: StateContext<BrowseStateModel>){
//     console.log('Action Fired');
//     const req: IGetTrendingRequest = {reqId: 'system'};
//     const response = await this.api.getTrending(req);
//     const model: BrowseStateModel = { user: null, posts: response.data};
//     ctx.setState(model);
//     console.log(ctx.getState());
//   }
// }