import { NotificationRepository } from '@mp/api/notification/data-access';
import { NotifyEventEvent } from '@mp/api/notification/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotifyEventEvent)
export class NotifyEventHandler
  implements IEventHandler<NotifyEventEvent>
{
  constructor(private readonly repository: NotificationRepository) {}

  async handle(event: NotifyEventEvent) {
    return [];
  }
}