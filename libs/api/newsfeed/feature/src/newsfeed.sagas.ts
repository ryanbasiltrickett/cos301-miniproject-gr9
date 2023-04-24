
import {
  genNewsfeedCommand,genNewsfeedEvent,
  updateNFPostCommand,updateNFPostEvent
} from '@mp/api/newsfeed/util'
//import { UserCreatedEvent } from '@mp/api/users/util';
import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map, Observable } from 'rxjs';

//for later maybe
@Injectable()
export class NewsfeedSagas {
  @Saga()
  onGenNewsfeed = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(genNewsfeedEvent),
      map(
        (event: genNewsfeedEvent) =>
          new genNewsfeedCommand({ dud: event.dud })
      )
    );
  };

  @Saga()
  onupdateNFPost = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(updateNFPostEvent),
      map(
        (event: updateNFPostEvent) =>
          new updateNFPostCommand({ dud: event.dud })
      )
    );
  };

}
