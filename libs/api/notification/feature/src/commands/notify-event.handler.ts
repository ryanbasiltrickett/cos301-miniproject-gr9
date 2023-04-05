import {
    NotifyEventCommand,
} from '@mp/api/notification/util';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';

@CommandHandler(NotifyEventCommand)
export class NotifyEventHandler
  implements ICommandHandler<NotifyEventCommand>
{
  constructor(private publisher: EventPublisher) {}

  async execute(command: NotifyEventCommand) {
        return [];
    }
}
