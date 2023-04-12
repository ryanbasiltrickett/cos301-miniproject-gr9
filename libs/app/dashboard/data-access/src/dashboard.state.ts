import { Action, State, StateContext, Store, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { DashboardEvent } from '@mp/app/dashboard/util';
import { IEvent, IEventRequest } from '@mp/api/events/util';
import { DashboardAPI } from './dashboard.api';

//TODO export this to the create library in data-access
export interface DashboardEventStateModel {
  eventTitle: string | undefined;
  eventTime: Date | undefined;
}

@State<DashboardEventStateModel>({
  name: 'dashboard',
  defaults: {
    eventTitle: 'Test',
    eventTime: new Date(),
  },
})

@Injectable()
export class DashboardEventState {
  constructor(
    private readonly api: DashboardAPI,
    private readonly store: Store
  ) {}

  @Selector()
    static getEventTitle(state: DashboardEventStateModel) {
      return state.eventTitle;
    }

  @Action(DashboardEvent)
  async dashboardEvent(ctx: StateContext<DashboardEventStateModel>) {
    try{
      console.log("State Fired");
    }catch(err){
      console.log(err);
    }
    
    // const request: IEventRequest = {
    //   event,
    // };
    // const responseRef = this.api.generateEvent(request);
  }
}