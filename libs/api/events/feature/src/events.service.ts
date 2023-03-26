import {IEventRequest, 
  IEventResponse,
  GenerateEventCommand,
  NotifyEventCommand} from '@mp/api/events/util';
import { Injectable, NotImplementedException } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Injectable()
export class EventsService {
  constructor(private readonly commandBus: CommandBus) {}

  async generateEvent(
    request: IEventRequest
  ): Promise<IEventResponse> {
    return await this.commandBus.execute<
      GenerateEventCommand,
      IEventResponse
    >(new GenerateEventCommand(request));
  }

  async notifyAboutEvent(
    request: IEventRequest,
  ): (Promise<IEventResponse>){
    return await this.commandBus.execute<
      NotifyEventCommand,
      IEventResponse
    >(new NotifyEventCommand(request));
  }
}
