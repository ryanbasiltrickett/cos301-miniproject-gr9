import {} from '@mp/api/events/util';
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Injectable()
export class EventsService {
  constructor(private readonly commandBus: CommandBus) {}

}
