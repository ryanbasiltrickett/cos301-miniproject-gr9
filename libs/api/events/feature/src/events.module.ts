import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
// import { PostsModule as PostsDataAccessModule } from '@mp/api/events/data-access';
import { EventsService } from './events.service';
import {
  GenerateEventHandler,
} from './commands';

import {
    EventGenerateHandler
} from './events';

export const CommandHandlers = [
    GenerateEventHandler,
];
export const EventHandlers = [
    EventGenerateHandler,
];

@Module({
  imports: [CqrsModule],
  providers: [ ...CommandHandlers, ...EventHandlers],
  exports: [EventsModule],
})
export class EventsModule {}