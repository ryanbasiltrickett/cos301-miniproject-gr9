import { Action, State, StateContext, Store } from '@ngxs/store';
// import { ICreatePostRequest } from '@mp/api/posts/util';
import { Injectable } from '@angular/core';
// import { PostApi } from '@mp/app/post/data-access';
import { GenerateEvent } from '@mp/app/dashboard/util';
import { IEvent, IEventRequest } from '@mp/api/events/util';
import { DashboardAPI } from './dashboard.api';

//TODO export this to the create library in data-access
export interface GenerateStateModel {
  eventTitle: string | undefined;
  eventTime: Date | undefined;
}

@State<GenerateStateModel>({
  name: 'generate',
  defaults: {
    eventTitle: 'Test1',
    eventTime: new Date(),
  },
})
@Injectable()
export class GenerateState {
  constructor(
    private readonly api: DashboardAPI,
    private readonly store: Store
  ) {
    console.log('This thing is somewhere');
  }

  @Action(GenerateEvent)
  createPost(ctx: StateContext<GenerateEvent>, { event }: GenerateEvent) {
    const request: IEventRequest = {
      event,
    };
    const responseRef = this.api.generateEvent(request);
  }
}