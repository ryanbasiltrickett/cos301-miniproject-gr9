import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { EventsModule as EventsDataAccessModule } from '@mp/api/events/data-access';
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
  imports: [CqrsModule, EventsDataAccessModule],
  providers: [ EventsService,...CommandHandlers, ...EventHandlers],
  exports: [EventsService],
})
export class EventsModule {}