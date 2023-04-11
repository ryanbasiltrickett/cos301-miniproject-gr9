import {
    GenerateEventEvent,
    IEvent,
  } from '@mp/api/events/util';
  import { AggregateRoot } from '@nestjs/cqrs';
  
  export class GenerateEvent extends AggregateRoot implements IEvent {
    // have yet to add hashtag and location
    constructor(
      public eventTitle: string,
      public eventTime: Date,
    ) {
      super();
    }
  
    static fromData(event: IEvent): GenerateEvent {
      const instance = new GenerateEvent(
        event.eventTitle,
        event.eventTime,
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
      };
    }
  }