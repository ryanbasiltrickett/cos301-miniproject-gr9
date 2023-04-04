import {
    GenerateEventCommand
} from '@mp/api/events/util';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';


@CommandHandler(GenerateEventHandler)
export class GenerateEventHandler
  implements ICommandHandler<GenerateEventCommand>
{
    constructor(private publisher: EventPublisher) {}
    async execute(command: GenerateEventCommand): Promise<any> {
        return [];
    }
}
