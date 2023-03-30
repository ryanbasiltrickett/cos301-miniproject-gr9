import {
    NotifySavingFriendCommand,
} from '@mp/api/posts/util';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';

@CommandHandler(NotifySavingFriendCommand)
export class NotifySavingFriendHandler
  implements ICommandHandler<NotifySavingFriendCommand>
{
  constructor(private publisher: EventPublisher) {}

  async execute(command: NotifySavingFriendCommand) {
        console.log("Not implemented")
    }
}