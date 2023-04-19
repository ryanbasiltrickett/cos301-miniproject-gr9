import {
  IEventRequest, 
  IEventResponse,
  GenerateEventCommand,
  NotifyEventCommand} from '@mp/api/events/util';
import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

@Injectable()
export class EventsService {
  constructor(private readonly commandBus: CommandBus) {}

  // async generateEvent(
  //   request: IEventRequest
  // ): Promise<IEventResponse> {
  //   return await this.commandBus.execute<
  //     GenerateEventCommand,
  //     IEventResponse
  //   >(new GenerateEventCommand(request));
  // }

  async generateEvent(
    request: IEventRequest,
  ): (Promise<IEventResponse>){
    console.log("In service");
    return await this.commandBus.execute<
      GenerateEventCommand,
      IEventResponse
    >(new GenerateEventCommand(request));
  }
}
