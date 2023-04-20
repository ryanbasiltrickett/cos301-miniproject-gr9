import { Injectable } from '@angular/core';
// import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';
import {
  IEvent,
    IEventRequest,
    IEventResponse 
} from '@mp/api/events/util';

@Injectable()
export class DashboardAPI{
    constructor(
        private readonly functions: Functions
      ) {}
    
async dashboardEvent(request: IEventRequest) {
    return await httpsCallable<
        IEventRequest, IEventResponse
    >(
      this.functions,
      'generateEvent'
    )(request);
  }   
  
  async getEvents(request: IEventRequest) {
    return await httpsCallable<
        IEventRequest, IEvent[]
    >(
      this.functions,
      'getEvents'
    )(request);
  } 
}
