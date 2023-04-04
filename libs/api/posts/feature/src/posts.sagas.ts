import {
    AddPostCommand,
    LikePostCommand,
    CommentPostCommand,
    DeletePostCommand,
    NewPostEvent,
    LikePostEvent,
    CommentPostEvent,
    DeletePostEvent
} from '@mp/api/posts/util';
import { UserCreatedEvent } from '@mp/api/users/util';
import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { map, Observable } from 'rxjs';

@Injectable()
export class ProfilesSagas {
  @Saga()
  onAddPost = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
        ofType(NewPostEvent),
        map(
          (event: NewPostEvent) =>
            new AddPostCommand({ post: event.post })
        )
      );
  };

  @Saga()
  onLikePost = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(LikePostEvent),
      map(
        (event: LikePostEvent) =>
          new LikePostCommand({ post: event.post })
      )
    );
  };

  @Saga()
  onCommentPost = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(CommentPostEvent),
      map(
        (event: CommentPostEvent) =>
          new CommentPostCommand({ post: event.post })
      )
    );
  };

  @Saga()
  onDeletePost = (
    events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(DeletePostEvent),
      map(
        (event: DeletePostEvent) =>
          new DeletePostCommand({ post: event.post})
      )
    );
  };
}
