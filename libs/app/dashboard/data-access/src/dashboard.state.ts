import { Action, State, StateContext, Store, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { DashboardEvent, GetEvents } from '@mp/app/dashboard/util';
import { IEvent, IEventRequest, IEventResponse } from '@mp/api/events/util';
import { DashboardAPI } from './dashboard.api';
import { time } from 'console';

//TODO export this to the create library in data-access
export interface DashboardEventStateModel {
  event: string[] | null;
}

@State<DashboardEventStateModel>({
  name: 'dashboard',
  defaults: {
    event: []
  },
})

@Injectable()
export class DashboardEventState {
  constructor(
    private readonly api: DashboardAPI,
    private readonly store: Store
  ) {}

  @Selector()
    static getEvent(state: DashboardEventStateModel) {
      return state.event;
    }

  @Action(DashboardEvent)
  async dashboardEvent(ctx: StateContext<DashboardEventStateModel>, {event}: DashboardEvent) {
    // console.log(user);
    const request: IEventRequest = {
      user: event.user,
    };
    const responseRef = await this.api.dashboardEvent(request);
    if(responseRef.data){
      console.log(responseRef.data);
      const eventDate = new Date();
      const [h, m] = responseRef.data.event.eventTime.split(":");
      eventDate.setHours(parseInt(h, 10));
      eventDate.setMinutes(parseInt(m, 10));
      console.log(eventDate);
      const d: string[] = [];
      d.push(responseRef.data.event.eventTitle);
      d.push(responseRef.data.event.eventTime);
      const dashboardModel: DashboardEventStateModel = { event: d};
      // ctx.setState(dashboardModel);      
    }else{
      alert('You can not have more than 5 active events');
    }
    // console.log(ctx.getState());
  }

  @Action(GetEvents)
  async getEvents(ctx: StateContext<DashboardEventStateModel>, {user} : GetEvents){
    console.log('Here1');
    const request: IEventRequest = {
      user: user.userId,
    };
    const responseRef = await this.api.getEvents(request);

  }
}