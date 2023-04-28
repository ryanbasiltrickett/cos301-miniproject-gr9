import {
    GenerateEventEvent,
    IEvent,
  } from '@mp/api/events/util';
  import { AggregateRoot } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';
  
  export class GenerateEvent extends AggregateRoot implements IEvent {
    // have yet to add hashtag and location
    constructor(
      public eventTitle: string,
      public eventTime: string,
      public user: string,
      public date: Timestamp,
    ) {
      super();
    }
  
    static fromData(event: IEvent): GenerateEvent {
      const instance = new GenerateEvent(
        event.eventTitle,
        event.eventTime,
        event.user,
        event.date,
      );
      return instance;
    }
  
    generateEvent() {
      this.apply(new GenerateEventEvent(this.toJSON()));
    }
  
    toJSON() {
      return {
        eventTitle: this.eventTitle,
        eventTime: this.eventTime,
        user: this.user,
        date: this.date,
      };
    }
  }