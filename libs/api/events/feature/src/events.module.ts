import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
// import { PostsModule as PostsDataAccessModule } from '@mp/api/events/data-access';
import { EventsService } from './events.service';
import {
  NotifyEventHandler,
} from './commands';

import {
    EventGenerateHandler
} from './events';

export const CommandHandlers = [
    NotifyEventHandler,
];
export const EventHandlers = [
    EventGenerateHandler,
];

@Module({
  imports: [CqrsModule],
  providers: [ EventsService,...CommandHandlers, ...EventHandlers],
  exports: [EventsService],
})
export class EventsModule {}