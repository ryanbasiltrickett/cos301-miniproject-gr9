import { Action, State, StateContext, Store, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { BrowseAction } from '@mp/app/browse/util'; 
import { BrowseApi } from './browse.api';

//TODO export this to the create library in data-access
export interface DashboardEventStateModel {
  userName: string | undefined;
}

@State<DashboardEventStateModel>({
  name: 'browse',
  defaults: {
    userName: 'Test',
  },
})

@Injectable()
export class DashboardState {
  constructor(
    private readonly api: BrowseApi,
    private readonly store: Store
  ) {}


  @Action(BrowseAction)
  async browseAction(ctx: StateContext<DashboardEventStateModel>, userName: string) {
    try{
      console.log("State Fired");
    }catch(err){
      console.log(err);
    }
    
    const responseRef = this.api.browse$(userName);
    // console.log(responseRef);
  }
}