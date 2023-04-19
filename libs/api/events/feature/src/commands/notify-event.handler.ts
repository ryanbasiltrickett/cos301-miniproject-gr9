import {
  IEventResponse,
    NotifyEventCommand
} from '@mp/api/events/util';
import { CommandHandler, EventPublisher, ICommandHandler, IEvent } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';
import * as admin from 'firebase-admin';
// import * as serviceAccount from '../../../../../../.keys/cos301-miniproject-2023-b1f6d-51369e9d0fb4.json';

// const secondaryAppConfig = {
//   credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
//   // databaseURL: config.secondaryDatabaseUrl
// };
// const app = admin.initializeApp(secondaryAppConfig, 'secondary');

@CommandHandler(NotifyEventCommand)
export class NotifyEventHandler
  implements ICommandHandler<NotifyEventCommand, IEventResponse>
{
    constructor(private publisher: EventPublisher) {}
    async execute(command: NotifyEventCommand): Promise<any> {
      console.log("In command");
      const earliest = 8;
      const latest = 23;
      const hours = Math.floor(Math.random() * (latest - earliest + 1) + earliest);
      const minutes = Math.floor(Math.random() * 60);
      const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;

      const possibleEvents: string[] = [
          "Post now",
          "Tag a friend in a post",
          "Send a friend a message",
          "Follow someone new",
          "Like posts",
          "Give some time to someone you might think need it"
      ];

      const eventIndex = Math.floor(Math.random() * 6);

      const generetedTime =  formattedHours + ":" + formattedMinutes;
      const response: IEventResponse = {event: {eventTitle: possibleEvents[eventIndex], eventTime: generetedTime}};
      console.log(response);
      return response;
    }
}
