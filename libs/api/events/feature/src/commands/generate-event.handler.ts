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
        const earliest = 8;
        const latest = 23;
        const hours = Math.floor(Math.random() * (latest - earliest + 1) + earliest);
        const minutes = Math.floor(Math.random() * 60);
        const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;

        const possibleEvents: string[] = [
            "Post now",
            "Tag a friend in a post",
            "Send a frind a message",
            "Follow someone new",
            "Like posts",
            "Give some time to someone you might think need it"
        ];

        const eventIndex = Math.floor(Math.random() * 6);

        return [`${formattedHours}:${formattedMinutes}`, possibleEvents[eventIndex]];
    }
}
