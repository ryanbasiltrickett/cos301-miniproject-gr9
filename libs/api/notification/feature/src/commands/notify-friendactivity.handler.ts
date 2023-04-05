import {
    NotifyFriendActivityCommand,
} from '@mp/api/notification/util';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';

@CommandHandler(NotifyFriendActivityCommand)
export class NotifyFriendActivityHandler
  implements ICommandHandler<NotifyFriendActivityCommand>
{
  constructor(private publisher: EventPublisher) {}

  async execute(command: NotifyFriendActivityCommand) {
        return [];
    }
}