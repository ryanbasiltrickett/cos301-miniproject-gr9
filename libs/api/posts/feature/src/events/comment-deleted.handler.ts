import { PostsRepository } from '@mp/api/posts/data-access';
import { CommentDeletedEvent } from '@mp/api/posts/util';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(CommentDeletedEvent)
export class CommentDeletedHandler
  implements IEventHandler<CommentDeletedEvent>
{
  constructor(private readonly repository: PostsRepository) {}

  async handle(event: CommentDeletedEvent) {
    console.log(`${CommentDeletedHandler.name}`);
    await this.repository.updatePost(event.post);
  }
}
