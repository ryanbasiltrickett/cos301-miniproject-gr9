import { EventsRepository } from '@mp/api/events/data-access';
import {
    GenerateEventCommand, IEventResponse
} from '@mp/api/events/util';
import { CommandHandler, EventPublisher, ICommandHandler, IEvent } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';


@CommandHandler(GenerateEventCommand)
export class GenerateEventHandler
  implements ICommandHandler<GenerateEventCommand>
{
    constructor(private publisher: EventPublisher,
        private repo: EventsRepository) {}
    async execute(command: GenerateEventCommand): Promise<any> {
        console.log("In command");
        const earliest = 8;
        const latest = 23;
        const hours = Math.floor(Math.random() * (latest - earliest + 1) + earliest);
        const minutes = Math.floor(Math.random() * 60);
        const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
  
        const possibleEvents: string[] = [
            "Post now",
            "Follow someone new",
            "Give some time to someone you might think need it"
        ];
  
        const eventIndex = Math.floor(Math.random() * 3);
  
        const generetedTime =  formattedHours + ":" + formattedMinutes;
        const response: IEventResponse = {event: {eventTitle: possibleEvents[eventIndex], eventTime: generetedTime, user: command.request.user}};
        if(await this.repo.addEvent(response, command.request.user)){
            return response;
        }  
    }
}
