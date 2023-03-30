import { NotificationRepository } from '@mp/api/notification/data-access';
import { NotifyRecievedTimeEvent } from '@mp/api/notification/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotifyRecievedTimeEvent)
export class NotifyRecievedTimeHandler
  implements IEventHandler<NotifyRecievedTimeEvent>
{
  constructor(private readonly repository: NotificationRepository) {}

  async handle(event: NotifyRecievedTimeEvent) {
    console.log("Not implemented");
  }
}