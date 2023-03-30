import { NotificationRepository } from '@mp/api/notification/data-access';
import { NotifyFriendActivityEvent } from '@mp/api/notification/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(NotifyFriendActivityEvent)
export class NotifyFriendActivityHandler
  implements IEventHandler<NotifyFriendActivityEvent>
{
  constructor(private readonly repository: NotificationRepository) {}

  async handle(event: NotifyFriendActivityEvent) {
    console.log("Not implemented");
  }
}