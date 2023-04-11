import { Injectable } from '@angular/core';
// import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Functions, httpsCallable } from '@angular/fire/functions';
import {
    IEventRequest,
    IEventResponse 
} from '@mp/api/events/util';
import { generate } from 'rxjs';

@Injectable()
export class DashboardAPI{
    constructor(
        private readonly functions: Functions
      ) {}
    
async generateEvent(request: IEventRequest) {
    return await httpsCallable<
        IEventRequest, IEventResponse
    >(
      this.functions,
      'generateEvent'
    )(request);
  }    
}
