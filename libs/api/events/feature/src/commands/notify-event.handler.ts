import {
    NotifyEventCommand
} from '@mp/api/events/util';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';


@CommandHandler(NotifyEventHandler)
export class NotifyEventHandler
  implements ICommandHandler<NotifyEventCommand>
{
    constructor(private publisher: EventPublisher) {}
    async execute(command: NotifyEventCommand): Promise<any> {
        console.log("Not yet implemented");
    }
}
