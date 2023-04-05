import { NotificationRepository } from '@mp/api/notification/data-access';
import { NotifySavingFriendEvent } from '@mp/api/notification/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotifySavingFriendEvent)
export class NotifySavingFriendHandler
  implements IEventHandler<NotifySavingFriendEvent>
{
  constructor(private readonly repository: NotificationRepository) {}

  async handle(event: NotifySavingFriendEvent) {
    return [];
  }
}