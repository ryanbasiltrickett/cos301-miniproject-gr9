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
        // console.log(command.request.currTime);
        const nowH = new Date().getHours();
        const nowM = new Date().getMinutes();
        const earliestH = nowH + 2;
        const earliestMin = nowM + 5;
        const latestH = 23;
        const hours = Math.floor(Math.random() * (latestH - earliestH + 1) + earliestH);
        const minutes = Math.floor(Math.random() * (59 - earliestMin + 1) + earliestMin);
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
