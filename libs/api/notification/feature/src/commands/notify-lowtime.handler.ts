import {
    NotifyLowTimeCommand,
} from '@mp/api/posts/util';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';

@CommandHandler(NotifyLowTimeCommand)
export class NotifyLowTimeHandler
  implements ICommandHandler<NotifyLowTimeCommand>
{
  constructor(private publisher: EventPublisher) {}

  async execute(command: NotifyLowTimeCommand) {
        console.log("Not implemented")
    }
}