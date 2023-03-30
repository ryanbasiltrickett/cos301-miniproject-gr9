import {
    NotifyRecievedTimeCommand,
} from '@mp/api/posts/util';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';

@CommandHandler(NotifyRecievedTimeCommand)
export class NotifyRecievedTimeHandler
  implements ICommandHandler<NotifyRecievedTimeCommand>
{
  constructor(private publisher: EventPublisher) {}

  async execute(command: NotifyRecievedTimeCommand) {
        console.log("Not implemented")
    }
}