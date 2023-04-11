// import {  } from '@mp/api/events/data-access';
import { GenerateEventEvent } from '@mp/api/events/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(GenerateEventEvent)
export class EventGenerateHandler implements IEventHandler<GenerateEventEvent> {
//   constructor(private readonly repository: PostsRepository) {}

  async handle(event: GenerateEventEvent) {
    console.log(event);
  }
}