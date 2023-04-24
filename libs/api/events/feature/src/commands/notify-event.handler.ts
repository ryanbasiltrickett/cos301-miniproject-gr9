import {
  IEventResponse,
    NotifyEventCommand
} from '@mp/api/events/util';
import { CommandHandler, EventPublisher, ICommandHandler, IEvent } from '@nestjs/cqrs';
import { EventsRepository } from '@mp/api/events/data-access';

@CommandHandler(NotifyEventCommand)
export class NotifyEventHandler
  implements ICommandHandler<NotifyEventCommand, IEventResponse>
{
    constructor(private publisher: EventPublisher, 
      private repo: EventsRepository ) {}
    async execute(command: NotifyEventCommand): Promise<any> {
      console.log("In command");
      const response = await this.repo.getEvents(command.request.user);
      return response;
    }
}
