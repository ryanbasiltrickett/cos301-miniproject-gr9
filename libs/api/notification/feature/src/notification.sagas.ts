import {
    NotifyEventCommand,
    NotifySavingFriendCommand,
    NotifyLowTimeCommand,
    NotifyFriendActivityCommand,
    NotifyRecievedTimeCommand,
    NotifyEventEvent,
    NotifySavingFriendEvent,
    NotifyLowTimeEvent,
    NotifyFriendActivityEvent,
    NotifyRecievedTimeEvent
} from '@mp/api/notification/util';
import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map, Observable } from 'rxjs';

@Injectable()
export class ProfilesSagas {
  @Saga()
  onNotifyEvent = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(NotifyEventEvent),
      map(
        (event: NotifyEventEvent) =>
          new NotifyEventCommand({ notification: event.notification})
      )
    );
  };

  @Saga()
  onNotifyFriendActivity = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(NotifyFriendActivityEvent),
      map(
        (event: NotifyFriendActivityEvent) =>
          new NotifyFriendActivityCommand({ notification: event.notification})
      )
    );
  };

  @Saga()
  onNotifySavingFriend = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(NotifySavingFriendEvent),
      map(
        (event: NotifySavingFriendEvent) =>
          new NotifySavingFriendCommand({ notification: event.notification})
      )
    );
  };

  @Saga()
  onNotifyLowTime = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(NotifyLowTimeEvent),
      map(
        (event: NotifyLowTimeEvent) =>
          new NotifyLowTimeCommand({ notification: event.notification})
      )
    );
  };

  @Saga()
  onNotifyRecievedTime = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(NotifyRecievedTimeEvent),
      map(
        (event: NotifyRecievedTimeEvent) =>
          new NotifyRecievedTimeCommand({ notification: event.notification})
      )
    );
  };
}
