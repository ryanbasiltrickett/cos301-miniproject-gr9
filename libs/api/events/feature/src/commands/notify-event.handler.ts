import {
  IEventResponse,
    NotifyEventCommand
} from '@mp/api/events/util';
import { CommandHandler, EventPublisher, ICommandHandler, IEvent } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';
import * as admin from 'firebase-admin';

// const firebaseConfig = {
//     apiKey: "AIzaSyCN6RzYvnaCMJO3QEd8g43UxLp6-SV2ZKU",
//     authDomain: "cos301-miniproject-gr9-d-46ded.firebaseapp.com",
//     projectId: "cos301-miniproject-gr9-d-46ded",
//     storageBucket: "cos301-miniproject-gr9-d-46ded.appspot.com",
//     messagingSenderId: "186165950071",
//     appId: "1:186165950071:web:48b4c10bba70ec99c6f872",
//     measurementId: "G-PWY8191PD7"
// };
  
//   admin.initializeApp(firebaseConfig);

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
          "Send a frind a message",
          "Follow someone new",
          "Like posts",
          "Give some time to someone you might think need it"
      ];

      const eventIndex = Math.floor(Math.random() * 6);

      const generetedTime =  formattedHours + ":" + formattedMinutes;
      const [h, m] = generetedTime.split(":");
      const realTime = new Date();
      realTime.setHours(parseInt(h, 10));
      realTime.setMinutes(parseInt(m, 10));
      // const event: IEvent = {eventTitle: possibleEvents[eventIndex], eventTime: realTime};
      const eventReq = command.request;
      command.request.event.eventTitle = possibleEvents[eventIndex];
      command.request.event.eventTime = realTime;
      const event = eventReq.event;
      const message = {
          notification: {
            title: "Its time for Timeshare",
            body: event.eventTitle + ". This event will occur at: " + event.eventTime,
          },
          topic: 'all',
        };

        console.log(message);
        // admin.messaging().send(message);
        return message;
    }
}
