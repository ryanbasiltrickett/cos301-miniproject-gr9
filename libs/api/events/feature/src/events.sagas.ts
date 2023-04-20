import {
    GenerateEventCommand,
    NotifyEventCommand,
    GenerateEventEvent,
    NotifyEventEvent
} from '@mp/api/events/util';
import { Injectable, NotImplementedException } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { event } from 'firebase-functions/v1/analytics';
import { map, Observable } from 'rxjs';

@Injectable()
export class EventsSaga{
    // @Saga()
    // onGenerateEvent = (events$: Observable<any>): Observable<ICommand> => {
    //     return events$.pipe(
    //         ofType(GenerateEventEvent),
    //         map(
    //           (event : GenerateEventEvent) =>
    //             new GenerateEventCommand({event: event.event})
    //         )
    //       );
    //   };

    //   @Saga()
    //   onNotifyEvent = (events$: Observable<any>): Observable<ICommand> => {
    //       return events$.pipe(
    //           ofType(NotifyEventEvent),
    //           map(
    //             (event : NotifyEventEvent) =>
    //               new NotifyEventCommand({event: event.event})
    //           )
    //         );
    //     };
    
}