import { NotificationRepository } from '@mp/api/notification/data-access';
import { NotifyLowTimeEvent } from '@mp/api/notification/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotifyLowTimeEvent)
export class NotifyLowTimeHandler
  implements IEventHandler<NotifyLowTimeEvent>
{
  constructor(private readonly repository: NotificationRepository) {}

  async handle(event: NotifyLowTimeEvent) {
    return [];
  }
}