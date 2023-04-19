import { Action, State, StateContext, Store, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { DashboardEvent } from '@mp/app/dashboard/util';
import { IEvent, IEventRequest } from '@mp/api/events/util';
import { DashboardAPI } from './dashboard.api';

//TODO export this to the create library in data-access
export interface DashboardEventStateModel {
  event: IEvent | null;
}

@State<DashboardEventStateModel>({
  name: 'dashboard',
  defaults: {
    event: null
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
      return state.event;
    }

  @Action(DashboardEvent)
  async dashboardEvent(ctx: StateContext<DashboardEventStateModel>, {event}: IEventRequest) {
    const request: IEventRequest = {
      event,
    };
    const responseRef = await this.api.dashboardEvent(request);
    const eventDate = new Date();
    const [h, m] = responseRef.data.event.eventTime.split(":");
    eventDate.setHours(parseInt(h, 10));
    eventDate.setMinutes(parseInt(m, 10));
    // console.log(eventDate);

    const dashboardModel: DashboardEventStateModel = { event: {eventTitle: responseRef.data.event.eventTitle, eventTime: responseRef.data.event.eventTime}};
    ctx.setState(dashboardModel);
    // console.log(ctx.getState());
  }
}