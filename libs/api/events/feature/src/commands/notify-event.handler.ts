import {
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

@CommandHandler(NotifyEventHandler)
export class NotifyEventHandler
  implements ICommandHandler<NotifyEventCommand>
{
    constructor(private publisher: EventPublisher) {}
    async execute(command: NotifyEventCommand): Promise<any> {
        const eventReq = command.request;
        const event = eventReq.event;
        const message = {
            notification: {
              title: "Its time for Timeshare",
              body: event.eventTitle,
            },
            topic: 'all',
          };

      
        return message;
    }
}
