import { GenerateEventEvent } from '@mp/api/events/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(GenerateEventEvent)
export class EventGenerateHandler implements IEventHandler<GenerateEventEvent> {

  async handle(event: GenerateEventEvent) {
    // console.log(event);
  }
}