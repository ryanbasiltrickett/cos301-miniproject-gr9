import { PostsRepository } from '@mp/api/posts/data-access';
import { CommentPostEvent } from '@mp/api/posts/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(CommentPostEvent)
export class CommentPostHandler
  implements IEventHandler<CommentPostEvent>
{
  constructor(private readonly repository: PostsRepository) {}

  async handle(event: CommentPostEvent) {
    console.log("Not implemented");
  }
}